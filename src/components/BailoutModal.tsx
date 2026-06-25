'use client';
import { useGameStore } from '@/store/gameStore';

export default function BailoutModal() {
  const stats = useGameStore(state => state.stats);
  const addHeadline = useGameStore(state => state.addHeadline);
  const applyPolicyEffect = useGameStore(state => state.applyPolicyEffect);
  const updateBudget = useGameStore(state => state.updateBudget);

  const isBankrupt = stats.treasury < 0 && stats.creditRating === 'D' && stats.nationalDebt > 0;

  if (!isBankrupt) return null;

  const handleBailout = () => {
    // IMF Bailout Package
    // Grants cash but destroys approval, forces tax hikes and spending cuts
    applyPolicyEffect({
      treasury: 100,
      nationalDebt: 50, // adds to debt
      corruptionLevel: -2, // forces anti-corruption measures
    }, {
      workingClass: -30,
      middleClass: -30,
      business: -10,
      military: -20,
      youth: -30
    });

    updateBudget({
      taxIncomeLow: 30,
      taxIncomeMiddle: 40,
      taxIncomeHigh: 50,
      taxCorp: 30,
      spendWelfare: 5,
      spendEducation: 5,
      spendHealth: 5,
      spendMilitary: 5,
      spendInfrastructure: 5
    });

    addHeadline("IMF ENFORCES AUSTERITY BAILOUT PACKAGE!");
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(200,0,0,0.4)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div className="card" style={{ maxWidth: '600px', width: '90%', animation: 'fadeIn 0.3s ease-out', border: '2px solid var(--status-bad)' }}>
        <h2 style={{ color: 'var(--status-bad)', marginBottom: 'var(--spacing-sm)' }}>
          SOVEREIGN DEFAULT
        </h2>
        <p style={{ fontSize: '1.1rem', marginBottom: 'var(--spacing-md)' }}>
          Your nation is bankrupt. You have a massive deficit and a 'D' credit rating. You can no longer borrow money on the open market.
        </p>
        <p style={{ fontSize: '1rem', marginBottom: 'var(--spacing-lg)', color: 'var(--text-secondary)' }}>
          The International Monetary Fund (IMF) has stepped in to take control of your finances. They will provide an emergency $100B loan, but will enforce extreme austerity measures: slashing all spending to 5% and raising all taxes drastically. This will devastate your approval ratings.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
          <button 
            className="btn" 
            style={{ textAlign: 'center', padding: '16px', fontSize: '1rem', backgroundColor: 'var(--status-bad)', color: '#000', fontWeight: 'bold' }}
            onClick={handleBailout}
          >
            Accept IMF Bailout (Austerity)
          </button>
        </div>
      </div>
    </div>
  );
}
