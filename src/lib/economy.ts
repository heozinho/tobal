import { Budget, CountryStats } from '@/store/gameStore';

export function calculateMonthlyEconomics(stats: CountryStats, budget: Budget, corruption: number) {
  // Revenue calculation based on brackets and VAT
  // A gross oversimplification for game mechanics
  const baseTaxBase = stats.gdpPerCapita * 1000; // Fake scaling factor for national GDP
  
  // Tax revenues (in billions)
  const incomeTaxRev = (baseTaxBase * (budget.taxIncomeLow * 0.4 + budget.taxIncomeMiddle * 0.4 + budget.taxIncomeHigh * 0.2)) / 100000;
  const corpTaxRev = (baseTaxBase * budget.taxCorp) / 120000;
  const vatRev = (baseTaxBase * budget.taxVAT) / 100000;
  const tariffRev = (budget.taxTariffs * 5); // Flat scaling
  
  const totalRevenue = incomeTaxRev + corpTaxRev + vatRev + tariffRev;

  // Expenses calculation
  const totalExpenses = budget.spendEducation + budget.spendInfrastructure + budget.spendWelfare + budget.spendMilitary + budget.spendHealth;

  // Corruption takes a direct cut of revenue
  const corruptionLoss = totalRevenue * (corruption / 100);

  // Calculate Interest Payments on Debt
  let interestRate = 0.05; // 5% default
  switch(stats.creditRating) {
    case 'AAA': interestRate = 0.02; break;
    case 'AA': interestRate = 0.03; break;
    case 'A': interestRate = 0.04; break;
    case 'BBB': interestRate = 0.06; break;
    case 'BB': interestRate = 0.08; break;
    case 'B': interestRate = 0.12; break;
    case 'CCC': interestRate = 0.20; break;
    case 'D': interestRate = 0.50; break; // Default penalty
  }
  
  // Monthly interest payment
  const monthlyInterest = (stats.nationalDebt * interestRate) / 12;
  
  const netChange = totalRevenue - totalExpenses - corruptionLoss - monthlyInterest;

  return {
    revenue: totalRevenue,
    expenses: totalExpenses,
    corruptionLoss,
    interestPayment: monthlyInterest,
    netChange
  };
}

export function calculateDynamicInflationAndGrowth(stats: CountryStats, budget: Budget) {
  // If we have a massive deficit, inflation rises. 
  // If we spend a lot on infrastructure/education, GDP grows.
  
  let newInflation = stats.inflation;
  let newGdp = stats.gdpPerCapita;
  
  // Extremely simplified growth formula
  const growthFactor = (budget.spendInfrastructure + budget.spendEducation) / 100;
  const taxDrag = (budget.taxCorp + budget.taxIncomeHigh + budget.taxIncomeMiddle) / 200;
  
  // Cap max monthly growth/shrink to 5% to prevent hyper scaling
  const netGrowthRate = Math.max(-0.05, Math.min(0.05, (growthFactor - taxDrag) / 12));
  newGdp *= (1 + netGrowthRate);
  
  // Extremely simplified inflation formula
  // If deficit spending is high (printing money), inflation spikes
  const { netChange } = calculateMonthlyEconomics(stats, budget, stats.corruptionLevel);
  if (netChange < -50) { // massive deficit
    newInflation += 0.2;
  } else if (netChange > 50) { // massive surplus, cooling economy
    newInflation = Math.max(0, newInflation - 0.1);
  }

  // Regression to mean
  newInflation += (2.0 - newInflation) * 0.05; 

  return {
    newGdp,
    newInflation
  };
}

export function updateCreditRating(stats: CountryStats) {
  // Ratio of debt to GDP (assuming 100M population for fake scaling)
  const nationalGdp = (stats.gdpPerCapita * 100000000) / 1000000000; // in billions
  const debtToGdp = stats.nationalDebt / nationalGdp;
  
  let newRating = stats.creditRating;
  
  if (stats.treasury < 0 && debtToGdp > 1.5) newRating = 'D';
  else if (debtToGdp > 1.2) newRating = 'CCC';
  else if (debtToGdp > 1.0) newRating = 'B';
  else if (debtToGdp > 0.8) newRating = 'BB';
  else if (debtToGdp > 0.6) newRating = 'BBB';
  else if (debtToGdp > 0.4) newRating = 'A';
  else if (debtToGdp > 0.2) newRating = 'AA';
  else newRating = 'AAA';
  
  return newRating;
}
