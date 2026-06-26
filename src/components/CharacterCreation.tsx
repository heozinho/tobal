'use client';
import { useState, useMemo } from 'react';
import { useGameStore } from '@/store/gameStore';

interface Trait {
  id: string;
  name: string;
  cost: number;
  description: string;
  isNegative?: boolean;
}

const availableTraits: Trait[] = [
  { id: 'Charismatic', name: 'Charismatic', cost: 50, description: 'Better relations and faction approval.' },
  { id: 'Economist', name: 'Economist', cost: 100, description: '+5% to all tax revenues.' },
  { id: 'Militarist', name: 'Militarist', cost: 50, description: 'Military faction approval increased, lower military costs.' },
  { id: 'Corrupt', name: 'Corrupt', cost: -50, description: 'Starts with higher treasury but increased corruption.', isNegative: true },
  { id: 'Risk Taker', name: 'Risk Taker', cost: -30, description: 'Higher chance of negative random events.', isNegative: true },
  { id: 'Inexperienced', name: 'Inexperienced', cost: -80, description: 'Starts with lower political capital.', isNegative: true },
];

export default function CharacterCreation() {
  const selectedCountryData = useGameStore(state => state.selectedCountryData);
  const startCampaign = useGameStore(state => state.startCampaign);
  const setScreen = useGameStore(state => state.setScreen);

  const minAge = selectedCountryData?.minLeaderAge || 35;

  const [name, setName] = useState('');
  const [age, setAge] = useState<number>(minAge);
  const [selectedTraits, setSelectedTraits] = useState<string[]>([]);
  const [preset, setPreset] = useState<string>('Custom');

  const maxPoints = 300;

  const currentPoints = useMemo(() => {
    let spent = 0;
    selectedTraits.forEach(traitId => {
      const t = availableTraits.find(x => x.id === traitId);
      if (t) spent += t.cost;
    });
    return maxPoints - spent;
  }, [selectedTraits]);

  const toggleTrait = (traitId: string) => {
    setPreset('Custom'); // reset preset if manual change
    if (selectedTraits.includes(traitId)) {
      setSelectedTraits(selectedTraits.filter(t => t !== traitId));
    } else {
      const trait = availableTraits.find(t => t.id === traitId);
      if (trait && currentPoints - trait.cost >= 0) {
        setSelectedTraits([...selectedTraits, traitId]);
      }
    }
  };

  const handlePresetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setPreset(val);
    if (val === 'Custom') {
      setSelectedTraits([]);
    } else if (val === 'Entrepreneur') {
      setSelectedTraits(['Charismatic', 'Economist', 'Risk Taker']);
    } else if (val === 'General') {
      setSelectedTraits(['Militarist', 'Inexperienced']);
    } else if (val === 'Insider') {
      setSelectedTraits(['Corrupt', 'Charismatic']);
    }
  };

  const handleStart = () => {
    if (name.trim() === '') return;
    if (age < minAge) return;
    startCampaign(name, age, selectedTraits);
  };

  return (
    <div className="container" style={{ maxWidth: '800px', marginTop: '5vh', paddingBottom: '5vh' }}>
      <button 
        className="btn" 
        onClick={() => setScreen('setup')}
        style={{ marginBottom: 'var(--spacing-md)' }}
      >
        ← Back to Country Selection
      </button>

      <div className="card">
        <h2 style={{ color: 'var(--accent-primary)', textAlign: 'center', fontSize: '2rem' }}>
          Lead {selectedCountryData?.name}
        </h2>
        
        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <h3 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>Personal Details</h3>
          <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-md)' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)' }}>Full Name</label>
              <input 
                type="text" 
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="e.g. Jane Doe"
                style={{ width: '100%', padding: '10px', backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'white', borderRadius: '4px' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)' }}>Age (Min {minAge})</label>
              <input 
                type="number" 
                value={age}
                min={minAge}
                onChange={e => setAge(parseInt(e.target.value))}
                style={{ width: '100%', padding: '10px', backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'white', borderRadius: '4px' }}
              />
            </div>
          </div>
        </div>

        <div style={{ marginTop: 'var(--spacing-xl)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px', marginBottom: '16px' }}>
            <h3 style={{ margin: 0 }}>Traits</h3>
            <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: currentPoints < 0 ? 'var(--status-bad)' : 'var(--accent-primary)' }}>
              Points Available: {currentPoints} / {maxPoints}
            </div>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ marginRight: '16px' }}>Background Preset:</label>
            <select 
              value={preset} 
              onChange={handlePresetChange}
              style={{ padding: '8px', backgroundColor: 'var(--bg-tertiary)', color: 'white', border: '1px solid var(--border-color)', borderRadius: '4px' }}
            >
              <option value="Custom">Custom</option>
              <option value="Entrepreneur">Entrepreneur</option>
              <option value="General">Military General</option>
              <option value="Insider">Political Insider</option>
            </select>
          </div>

          <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-sm)' }}>
            {availableTraits.map(trait => {
              const isSelected = selectedTraits.includes(trait.id);
              const canAfford = currentPoints - trait.cost >= 0 || isSelected;
              
              return (
                <div 
                  key={trait.id}
                  onClick={() => { if(canAfford) toggleTrait(trait.id); }}
                  style={{
                    padding: '12px',
                    border: `2px solid ${isSelected ? 'var(--accent-primary)' : 'var(--border-color)'}`,
                    borderRadius: '8px',
                    backgroundColor: isSelected ? 'rgba(0, 150, 255, 0.1)' : 'var(--bg-secondary)',
                    cursor: canAfford ? 'pointer' : 'not-allowed',
                    opacity: canAfford ? 1 : 0.5,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <strong style={{ color: trait.isNegative ? 'var(--status-bad)' : 'var(--status-good)' }}>{trait.name}</strong>
                    <span style={{ 
                      backgroundColor: 'var(--bg-tertiary)', 
                      padding: '2px 6px', 
                      borderRadius: '4px',
                      fontSize: '0.85rem'
                    }}>
                      {trait.cost > 0 ? `Cost: ${trait.cost}` : `Gain: ${Math.abs(trait.cost)}`}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{trait.description}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ marginTop: 'var(--spacing-xl)', textAlign: 'center' }}>
          <button 
            className="btn btn-primary" 
            style={{ padding: '16px 48px', fontSize: '1.2rem', opacity: name.trim() === '' || age < minAge ? 0.5 : 1 }}
            onClick={handleStart}
            disabled={name.trim() === '' || age < minAge}
          >
            Take the Oath of Office
          </button>
        </div>
      </div>
    </div>
  );
}
