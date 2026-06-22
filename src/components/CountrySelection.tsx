'use client';
import { useState } from 'react';
import { useGameStore, CountryStats, Budget, Factions, Minister, LeaderTrait } from '@/store/gameStore';

interface CountryOption {
  name: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  description: string;
  stats: CountryStats;
  budget: Budget;
  factions: Factions;
  ministers: Minister[];
}

const mockCountries: CountryOption[] = [
  {
    name: 'United States',
    difficulty: 3,
    description: 'Complex coalition politics, inequality, and global responsibility. A superpower with deep divides.',
    stats: {
      gdpPerCapita: 36200,
      unemployment: 4.0,
      inflation: 3.4,
      nationalDebt: 5600,
      treasury: 120,
      corruptionLevel: 15,
      creditRating: 'AAA',
      militaryStrength: 100,
      casualties: 0
    },
    budget: { 
      taxIncomeLow: 15, taxIncomeMiddle: 25, taxIncomeHigh: 35, 
      taxCorp: 35, taxVAT: 0, taxTariffs: 2, 
      spendEducation: 15, spendInfrastructure: 10, spendWelfare: 20, 
      spendMilitary: 16, spendHealth: 20 
    },
    factions: {
      workingClass: 45,
      middleClass: 55,
      business: 65,
      military: 60,
      religious: 50,
      youth: 40,
    },
    ministers: [
      { id: '1', role: 'Finance', name: 'Robert Rubin', competence: 80, loyalty: 70, corruptionLevel: 10 },
      { id: '2', role: 'Defense', name: 'William Cohen', competence: 75, loyalty: 80, corruptionLevel: 5 },
    ]
  },
  {
    name: 'Russia',
    difficulty: 4,
    description: 'Authoritarian pressures, oligarchic influence, and economic fragility following a turbulent decade.',
    stats: {
      gdpPerCapita: 1700,
      unemployment: 10.6,
      inflation: 20.2,
      nationalDebt: 160,
      treasury: 15,
      corruptionLevel: 65,
      creditRating: 'BB',
      militaryStrength: 80,
      casualties: 0
    },
    budget: { 
      taxIncomeLow: 13, taxIncomeMiddle: 13, taxIncomeHigh: 13, 
      taxCorp: 24, taxVAT: 20, taxTariffs: 5, 
      spendEducation: 8, spendInfrastructure: 8, spendWelfare: 10, 
      spendMilitary: 18, spendHealth: 10 
    },
    factions: {
      workingClass: 30,
      middleClass: 25,
      business: 80,
      military: 70,
      religious: 60,
      youth: 35,
    },
    ministers: [
      { id: '3', role: 'Finance', name: 'Mikhail Kasyanov', competence: 60, loyalty: 40, corruptionLevel: 85 },
      { id: '4', role: 'Defense', name: 'Igor Sergeyev', competence: 65, loyalty: 60, corruptionLevel: 50 },
    ]
  },
  {
    name: 'Norway',
    difficulty: 1,
    description: 'Wealthy, stable, high-trust society. Governing is fine-tuning the sovereign wealth fund.',
    stats: {
      gdpPerCapita: 35000,
      unemployment: 4.0,
      inflation: 3.4,
      nationalDebt: 40,
      treasury: 250,
      corruptionLevel: 5,
      creditRating: 'AAA',
      militaryStrength: 40,
      casualties: 0
    },
    budget: { 
      taxIncomeLow: 25, taxIncomeMiddle: 35, taxIncomeHigh: 45, 
      taxCorp: 28, taxVAT: 25, taxTariffs: 1, 
      spendEducation: 20, spendInfrastructure: 15, spendWelfare: 30, 
      spendMilitary: 8, spendHealth: 25 
    },
    factions: {
      workingClass: 70,
      middleClass: 75,
      business: 60,
      military: 50,
      religious: 45,
      youth: 65,
    },
    ministers: [
      { id: '5', role: 'Finance', name: 'Karl Eirik Schjøtt-Pedersen', competence: 85, loyalty: 90, corruptionLevel: 2 },
    ]
  }
];

export default function CountrySelection() {
  const selectCountry = useGameStore(state => state.selectCountry);
  const [selectedTrait, setSelectedTrait] = useState<LeaderTrait>('None');

  const handleSelectCountry = (country: CountryOption) => {
    selectCountry(country.name, country.stats, country.budget, country.factions, country.ministers, selectedTrait);
  };

  return (
    <div className="container" style={{ maxWidth: '800px' }}>
      <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
        <h1 style={{ fontSize: '3rem', color: 'var(--accent-primary)', marginBottom: 'var(--spacing-sm)' }}>TOBAL</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>Select your starting nation and leader trait. The year is 2000.</p>
      </div>

      <div className="card" style={{ marginBottom: 'var(--spacing-lg)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
        <h3 style={{ margin: 0, color: 'var(--text-primary)' }}>Leader Trait Selection</h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>Choose a trait that will provide passive modifiers throughout your tenure.</p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {(['None', 'Charismatic', 'Economist', 'Militarist', 'Corrupt'] as LeaderTrait[]).map(trait => (
            <label key={trait} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              <input 
                type="radio" 
                name="leaderTrait" 
                value={trait} 
                checked={selectedTrait === trait}
                onChange={() => setSelectedTrait(trait)}
              />
              {trait}
            </label>
          ))}
        </div>
      </div>

      <div className="grid" style={{ gap: 'var(--spacing-lg)' }}>
        {mockCountries.map((country) => {
          const overallApproval = Math.round((country.factions.workingClass + country.factions.middleClass + country.factions.business + country.factions.military + country.factions.religious + country.factions.youth) / 6);
          return (
            <div key={country.name} className="card" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ margin: 0 }}>{country.name}</h2>
                <div style={{ 
                  backgroundColor: 'var(--bg-tertiary)', 
                  padding: '4px 8px', 
                  borderRadius: 'var(--border-radius-sm)',
                  fontSize: '0.85rem',
                  color: country.difficulty > 3 ? 'var(--status-bad)' : country.difficulty === 3 ? 'var(--status-warning)' : 'var(--status-good)'
                }}>
                  Difficulty: {country.difficulty}/5
                </div>
              </div>
              
              <p style={{ margin: 0, fontSize: '0.95rem' }}>{country.description}</p>
              
              <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--spacing-sm)', padding: 'var(--spacing-md) 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>GDP/Capita</div>
                  <div style={{ fontWeight: 600 }}>${country.stats.gdpPerCapita.toLocaleString()}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Approval</div>
                  <div style={{ fontWeight: 600 }}>{overallApproval}%</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Debt</div>
                  <div style={{ fontWeight: 600 }}>${country.stats.nationalDebt}B</div>
                </div>
              </div>

              <button 
                className="btn btn-primary" 
                style={{ alignSelf: 'flex-start' }}
                onClick={() => handleSelectCountry(country)}
              >
                Lead {country.name}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
