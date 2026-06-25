import { create } from 'zustand';
import { GameEvent, gameEvents } from '@/data/events';
import { calculateMonthlyEconomics, calculateDynamicInflationAndGrowth, updateCreditRating } from '@/lib/economy';
import { calculateElectionResults } from '@/lib/parliament';
import { calculateCombatTick } from '@/lib/combat';
import { initialWorldNations } from '@/data/world';

export type LeaderTrait = 'Charismatic' | 'Economist' | 'Militarist' | 'Corrupt' | 'None';

export interface WorldNation {
  name: string;
  leaderName: string;
  gdpPerCapita: number;
  militaryStrength: number;
  stability: number;
  governmentType: 'Democracy' | 'Autocracy' | 'Theocracy' | 'Monarchy';
  color: string;
  relationship: number; // -100 to 100
  status: 'At Peace' | 'Sanctioned' | 'At War';
  hasTradeAgreement?: boolean;
  warProgress: number; // 0 to 100, 50 is neutral, > 50 means player is winning
  casualties: number;
}

export interface Factions {
  workingClass: number;
  middleClass: number;
  business: number;
  military: number;
  religious: number;
  youth: number;
}

export interface Minister {
  id: string;
  role: string;
  name: string;
  competence: number;
  loyalty: number;
  corruptionLevel: number; // rename to corruptionLevel to avoid conflict
}

export interface CountryStats {
  gdpPerCapita: number;
  unemployment: number; // percentage
  inflation: number; // percentage
  nationalDebt: number; // in billions
  treasury: number; // in billions
  corruptionLevel: number; // percentage (base level of the state)
  creditRating: 'AAA' | 'AA' | 'A' | 'BBB' | 'BB' | 'B' | 'CCC' | 'D';
  militaryStrength: number; // 0 to 100
  casualties: number;
}

export interface Budget {
  taxIncomeLow: number;
  taxIncomeMiddle: number;
  taxIncomeHigh: number;
  taxCorp: number;
  taxVAT: number;
  taxTariffs: number;
  spendEducation: number;
  spendInfrastructure: number;
  spendWelfare: number;
  spendMilitary: number;
  spendHealth: number;
}

export interface ProposedBill {
  policyText: string;
  headline: string;
  mediaReaction: string;
  economicEffect: string;
  cabinetReaction?: string;
  partyReactions?: string;
  statsDiff: any;
  factionDiffs: any;
}

export interface GameState {
  currentScreen: 'menu' | 'settings' | 'setup' | 'playing' | 'game_over';
  countryName: string | null;
  year: number;
  month: number;
  leaderTrait: LeaderTrait;
  isGameOver: boolean;
  monthsUnder20Approval: number;
  legacyScore: number;
  stats: CountryStats;
  budget: Budget;
  headlines: string[];
  factions: Factions;
  parliamentSeats: Record<string, number>;
  politicalCapital: number;
  nextElectionYear: number;
  ministers: Minister[];
  worldNations: WorldNation[];
  activeEvent: GameEvent | null;
  proposedBill: ProposedBill | null;
  
  selectCountry: (name: string, stats: CountryStats, budget: Budget, factions: Factions, ministers: Minister[], trait: LeaderTrait) => void;
  updateBudget: (budget: Partial<Budget>) => void;
  addHeadline: (headline: string) => void;
  applyPolicyEffect: (statsDiff: Partial<CountryStats>, factionDiffs?: Partial<Factions>) => void;
  proposeBill: (bill: ProposedBill) => void;
  resolveBill: (passed: boolean) => void;
  updatePoliticalCapital: (amount: number) => void;
  fireMinister: (id: string) => void;
  hireMinister: (role: string, name: string, competence: number, loyalty: number, corruptionLevel: number) => void;
  advanceTime: () => void;
  resolveEvent: (choiceIndex: number) => void;
  interactWithNation: (nationName: string, action: 'trade' | 'sanction' | 'war' | 'covert' | 'sendAid' | 'condemn') => void;
  mobilizeMilitary: () => void;
  sueForPeace: (nationName: string) => void;
  resign: () => void;
  setScreen: (screen: 'menu' | 'settings' | 'setup' | 'playing' | 'game_over') => void;
  playAgain: () => void;
}

const defaultStats: CountryStats = {
  gdpPerCapita: 0,
  unemployment: 0,
  inflation: 0,
  nationalDebt: 0,
  treasury: 0,
  corruptionLevel: 10,
  creditRating: 'A',
  militaryStrength: 50,
  casualties: 0,
};

const defaultFactions: Factions = {
  workingClass: 50,
  middleClass: 50,
  business: 50,
  military: 50,
  religious: 50,
  youth: 50,
};

const defaultBudget: Budget = {
  taxIncomeLow: 15,
  taxIncomeMiddle: 25,
  taxIncomeHigh: 35,
  taxCorp: 20,
  taxVAT: 10,
  taxTariffs: 5,
  spendEducation: 15,
  spendInfrastructure: 10,
  spendWelfare: 20,
  spendMilitary: 10,
  spendHealth: 15,
};

export const useGameStore = create<GameState>((set, get) => ({
  currentScreen: 'menu',
  countryName: null,
  year: 2000,
  month: 1,
  leaderTrait: 'None',
  isGameOver: false,
  monthsUnder20Approval: 0,
  legacyScore: 0,
  stats: defaultStats,
  budget: defaultBudget,
  headlines: [],
  factions: defaultFactions,
  parliamentSeats: {},
  politicalCapital: 100,
  nextElectionYear: 2004,
  ministers: [],
  worldNations: [],
  activeEvent: null,
  proposedBill: null,

  selectCountry: (name, stats, budget, factions, ministers, trait) => {
    const initializedWorldNations: WorldNation[] = initialWorldNations.map(n => ({
      ...n,
      relationship: 0,
      status: 'At Peace',
      hasTradeAgreement: false,
      warProgress: 50,
      casualties: 0
    }));

    let newStats = { ...stats };
    if (trait === 'Corrupt') {
      newStats.treasury += 100;
      newStats.corruptionLevel += 5;
    }

    set({ 
      currentScreen: 'playing',
      countryName: name, 
      leaderTrait: trait,
      stats: newStats, 
      budget,
      factions,
      parliamentSeats: calculateElectionResults(factions),
      politicalCapital: 100,
      nextElectionYear: 2004,
      ministers,
      worldNations: initializedWorldNations.filter(n => n.name !== name),
      year: 2000,
      month: 1,
      isGameOver: false,
      monthsUnder20Approval: 0,
      legacyScore: 0,
      headlines: [],
      activeEvent: null,
      proposedBill: null
    });
  },

  updatePoliticalCapital: (amount) => set((state) => ({
    politicalCapital: Math.max(0, Math.min(100, state.politicalCapital + amount))
  })),

  updateBudget: (budgetUpdate) => set((state) => ({
    budget: { ...state.budget, ...budgetUpdate }
  })),

  addHeadline: (headline) => set((state) => ({
    headlines: [headline, ...state.headlines].slice(0, 5) // keep last 5
  })),

  applyPolicyEffect: (statsDiff, factionDiffs) => set((state) => {
    const newStats = { ...state.stats };
    
    // Apply differences safely
    if (statsDiff.gdpPerCapita) newStats.gdpPerCapita += statsDiff.gdpPerCapita;
    if (statsDiff.unemployment) newStats.unemployment += statsDiff.unemployment;
    if (statsDiff.inflation) newStats.inflation += statsDiff.inflation;
    if (statsDiff.nationalDebt) newStats.nationalDebt += statsDiff.nationalDebt;
    if (statsDiff.treasury) newStats.treasury += statsDiff.treasury;
    if (statsDiff.corruptionLevel) {
      newStats.corruptionLevel = Math.max(0, Math.min(100, newStats.corruptionLevel + statsDiff.corruptionLevel));
    }

    const newFactions = { ...state.factions };
    if (factionDiffs) {
      if (factionDiffs.workingClass) newFactions.workingClass = Math.max(0, Math.min(100, newFactions.workingClass + factionDiffs.workingClass));
      if (factionDiffs.middleClass) newFactions.middleClass = Math.max(0, Math.min(100, newFactions.middleClass + factionDiffs.middleClass));
      if (factionDiffs.business) newFactions.business = Math.max(0, Math.min(100, newFactions.business + factionDiffs.business));
      if (factionDiffs.military) newFactions.military = Math.max(0, Math.min(100, newFactions.military + factionDiffs.military));
      if (factionDiffs.religious) newFactions.religious = Math.max(0, Math.min(100, newFactions.religious + factionDiffs.religious));
      if (factionDiffs.youth) newFactions.youth = Math.max(0, Math.min(100, newFactions.youth + factionDiffs.youth));
    }

    return { stats: newStats, factions: newFactions };
  }),

  proposeBill: (bill) => set({ proposedBill: bill }),

  resolveBill: (passed) => set((state) => {
    if (!state.proposedBill) return {};

    if (passed) {
      get().applyPolicyEffect(state.proposedBill.statsDiff || {}, state.proposedBill.factionDiffs);
      if (state.proposedBill.headline) {
        get().addHeadline(state.proposedBill.headline);
      }
    } else {
      get().addHeadline("BILL DEFEATED IN PARLIAMENT");
    }

    return { proposedBill: null };
  }),

  fireMinister: (id) => set((state) => ({
    ministers: state.ministers.filter(m => m.id !== id)
  })),

  hireMinister: (role, name, competence, loyalty, corruptionLevel) => set((state) => ({
    ministers: [...state.ministers, { id: Math.random().toString(36).substr(2, 9), role, name, competence, loyalty, corruptionLevel }]
  })),

  advanceTime: () => set((state) => {
    if (state.isGameOver) return state;

    const { year, month, stats, budget, headlines, leaderTrait, factions, monthsUnder20Approval, worldNations } = state;
    
    let newYear = year;
    let newMonth = month + 1;
    if (newMonth > 12) {
      newMonth = 1;
      newYear += 1;
    }

    // Monthly economic calculation using our new engine
    const economics = calculateMonthlyEconomics(stats, budget, stats.corruptionLevel);
    const growth = calculateDynamicInflationAndGrowth(stats, budget);
    
    // Trade Agreements boost GDP slightly
    const activeTradeAgreements = state.worldNations.filter(n => n.hasTradeAgreement).length;
    const tradeBoost = activeTradeAgreements * 5; // $5 per capita per trade agreement
    
    // Apply Trait Passive
    let finalNetChange = economics.netChange;
    if (leaderTrait === 'Economist') {
      finalNetChange += (economics.revenue * 0.05); // 5% boost to revenue
    }

    // Calculate Combat for any active wars
    let newHeadlines = [...headlines];
    let totalPlayerCasualties = 0;
    const newWorldNations = worldNations.map(nation => {
      if (nation.status === 'At War') {
        const combat = calculateCombatTick(stats.militaryStrength, budget.spendMilitary, nation.militaryStrength, nation.warProgress);
        totalPlayerCasualties += combat.playerCasualties;
        
        let updatedNation = {
          ...nation,
          casualties: nation.casualties + combat.enemyCasualties,
          warProgress: Math.max(0, Math.min(100, nation.warProgress + combat.warProgressShift))
        };

        if (updatedNation.warProgress >= 100) {
          updatedNation.status = 'At Peace';
          newHeadlines.unshift(`VICTORY! ${updatedNation.name} has capitulated!`);
        } else if (updatedNation.warProgress <= 0) {
          updatedNation.status = 'At Peace';
          newHeadlines.unshift(`DEFEAT! We have surrendered to ${updatedNation.name}.`);
        } else if (Math.random() < 0.1) {
          newHeadlines.unshift(`War Update: Fighting continues against ${updatedNation.name}.`);
        }
        
        return updatedNation;
      }
      return nation;
    });

    const newStats = {
      ...stats,
      gdpPerCapita: growth.newGdp + tradeBoost,
      inflation: growth.newInflation,
      treasury: Math.round((stats.treasury + finalNetChange) * 10) / 10,
      casualties: stats.casualties + totalPlayerCasualties
    };

    newStats.creditRating = updateCreditRating(newStats);

    // Calculate Game Over Conditions
    const overallApproval = Math.round((factions.workingClass + factions.middleClass + factions.business + factions.military + factions.religious + factions.youth) / 6);
    let newMonthsUnder20 = overallApproval < 20 ? monthsUnder20Approval + 1 : 0;
    
    if (newMonthsUnder20 >= 3 || newYear >= 2020) {
      // GAME OVER (Loss by approval, or Win by surviving to 2020)
      return {
        isGameOver: true,
        currentScreen: 'game_over'
      };
    }

    // Event Trigger Logic
    let triggeredEvent = null;
    let updatedHeadlines = [...headlines];
    for (const event of gameEvents) {
      if (event.condition && event.condition(newYear, newMonth)) {
        triggeredEvent = event;
        break;
      }
      if (!event.condition && Math.random() < event.triggerChance) {
        triggeredEvent = event;
        break;
      }
    }

    // Election Cycle
    let newSeats = state.parliamentSeats;
    let newNextElectionYear = state.nextElectionYear;
    
    if (newYear >= newNextElectionYear && newMonth === 11) { // November elections
      newSeats = calculateElectionResults(factions);
      newNextElectionYear += 4;
      updatedHeadlines = [`ELECTION RESULTS: Parliament reshuffled!`, ...updatedHeadlines].slice(0, 5);
    }

    if (!triggeredEvent && newYear < state.nextElectionYear) {
      updatedHeadlines = [`Month advances to ${newMonth}/${newYear}`, ...updatedHeadlines].slice(0, 5);
    }

    return {
      year: newYear,
      month: newMonth,
      stats: newStats,
      activeEvent: triggeredEvent,
      headlines: updatedHeadlines,
      monthsUnder20Approval: newMonthsUnder20,
      parliamentSeats: newSeats,
      nextElectionYear: newNextElectionYear,
      worldNations: newWorldNations
    };
  }),

  resolveEvent: (choiceIndex) => set((state) => {
    if (!state.activeEvent) return {};
    
    const choice = state.activeEvent.choices[choiceIndex];
    const { effect } = choice;

    get().applyPolicyEffect({
      treasury: effect.treasury,
      gdpPerCapita: effect.gdpPerCapita,
      corruptionLevel: effect.corruptionLevel
    }, {
      workingClass: effect.approvalRating,
      middleClass: effect.approvalRating,
      business: effect.approvalRating,
      military: effect.approvalRating,
      religious: effect.approvalRating,
      youth: effect.approvalRating
    });

    if (effect.headline) {
      get().addHeadline(effect.headline);
    }

    return { activeEvent: null };
  }),

  interactWithNation: (nationName, action) => set((state) => {
    const nations = [...state.worldNations];
    const nationIndex = nations.findIndex(n => n.name === nationName);
    if (nationIndex === -1) return {};

    const nation = { ...nations[nationIndex] };
    const newStats = { ...state.stats };
    let newHeadline = '';

    if (action === 'trade') {
      nation.relationship += 15;
      nation.hasTradeAgreement = true;
      newHeadline = `Trade agreement signed with ${nation.name}.`;
    } else if (action === 'sanction') {
      nation.relationship -= 30;
      nation.status = 'Sanctioned';
      nation.hasTradeAgreement = false;
      newHeadline = `Sanctions imposed on ${nation.name}.`;
    } else if (action === 'war') {
      nation.relationship = -100;
      nation.status = 'At War';
      nation.hasTradeAgreement = false;
      nation.warProgress = 50; // Reset progress
      nation.casualties = 0; // Reset casualties
      newHeadline = `WAR DECLARED ON ${nation.name.toUpperCase()}!`;
    } else if (action === 'covert') {
      newStats.treasury -= 10;
      nation.stability -= 10;
      newHeadline = `Covert ops disrupt ${nation.name}.`;
    } else if (action === 'sendAid') {
      newStats.treasury -= 5; // Costs 5B
      nation.relationship += 25;
      nation.stability += 5;
      newHeadline = `Foreign aid package sent to ${nation.name}.`;
    } else if (action === 'condemn') {
      nation.relationship -= 15;
      newHeadline = `International condemnation issued against ${nation.name}.`;
    }

    nations[nationIndex] = nation;
    get().addHeadline(newHeadline);

    return { worldNations: nations, stats: newStats };
  }),

  mobilizeMilitary: () => set((state) => ({
    stats: {
      ...state.stats,
      militaryStrength: Math.min(100, state.stats.militaryStrength + 20),
      treasury: state.stats.treasury - 50 // Costs 50B instantly
    },
    budget: {
      ...state.budget,
      spendMilitary: 100 // Max out military spending
    },
    factions: {
      ...state.factions,
      workingClass: Math.max(0, state.factions.workingClass - 20),
      middleClass: Math.max(0, state.factions.middleClass - 20),
      youth: Math.max(0, state.factions.youth - 40),
      military: Math.min(100, state.factions.military + 30)
    },
    headlines: ["FULL MILITARY MOBILIZATION ORDERED!", ...state.headlines].slice(0, 5)
  })),

  sueForPeace: (nationName) => set((state) => {
    const nations = [...state.worldNations];
    const nationIndex = nations.findIndex(n => n.name === nationName);
    if (nationIndex === -1) return {};

    const nation = { ...nations[nationIndex] };
    const newStats = { ...state.stats };
    let headline = '';

    if (nation.warProgress > 70) {
      // Winning, demand reparations
      newStats.treasury += 100;
      headline = `Peace treaty signed! ${nation.name} pays heavy reparations.`;
    } else if (nation.warProgress < 30) {
      // Losing, forced to pay reparations
      newStats.treasury -= 100;
      headline = `Humiliating defeat. We pay massive reparations to ${nation.name}.`;
    } else {
      // White peace
      headline = `White peace signed with ${nation.name}. Return to pre-war borders.`;
    }

    nation.status = 'At Peace';
    nation.relationship = -50;
    nations[nationIndex] = nation;

    return { worldNations: nations, stats: newStats, headlines: [headline, ...state.headlines].slice(0, 5) };
  }),

  resign: () => set({
    isGameOver: true,
    currentScreen: 'game_over'
  }),

  setScreen: (screen) => set({
    currentScreen: screen
  }),

  playAgain: () => set({
    currentScreen: 'menu',
    countryName: null,
    isGameOver: false
  })
}));
