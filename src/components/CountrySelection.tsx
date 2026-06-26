'use client';
import { useState, useMemo } from 'react';
import { useGameStore } from '@/store/gameStore';
import { gameCountries, CountryOption } from '@/data/countries';

export default function CountrySelection() {
  const selectCountry = useGameStore(state => state.selectCountry);
  const [search, setSearch] = useState('');
  const [previewCountry, setPreviewCountry] = useState<CountryOption>(gameCountries[0]);

  const filteredCountries = useMemo(() => {
    return gameCountries.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  const handleSelectCountry = () => {
    selectCountry(previewCountry);
  };

  const renderDifficultyDots = (diff: number) => {
    const dots = [];
    const color = diff === 1 ? 'var(--status-good)' : diff === 2 ? 'var(--status-warning)' : 'var(--status-bad)';
    for (let i = 0; i < diff; i++) {
      dots.push(<div key={i} style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: color, display: 'inline-block' }} />);
    }
    return <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>{dots}</div>;
  };

  return (
    <div className="container" style={{ maxWidth: '1000px', paddingBottom: '5vh' }}>
      <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
        <h1 style={{ fontSize: '3rem', color: 'var(--accent-primary)', marginBottom: 'var(--spacing-sm)' }}>TOBAL</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>Select your starting nation. The year is 2000.</p>
      </div>

      <div className="card" style={{ display: 'flex', gap: 'var(--spacing-xl)', minHeight: '600px', padding: 0, overflow: 'hidden' }}>
        
        {/* Left Side: Country List */}
        <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', borderRight: '1px solid var(--border-color)', backgroundColor: 'var(--bg-secondary)' }}>
          <div style={{ padding: 'var(--spacing-md)' }}>
            <input 
              type="text" 
              placeholder="Search countries..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ width: '100%', padding: '10px', backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'white', borderRadius: '4px' }}
            />
          </div>
          <div style={{ flex: 1, overflowY: 'auto' }}>
            {filteredCountries.map(country => (
              <div 
                key={country.name}
                onClick={() => setPreviewCountry(country)}
                style={{ 
                  padding: '12px var(--spacing-md)', 
                  cursor: 'pointer', 
                  borderBottom: '1px solid var(--border-color)',
                  backgroundColor: previewCountry.name === country.name ? 'rgba(0, 150, 255, 0.1)' : 'transparent',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span style={{ fontWeight: previewCountry.name === country.name ? 'bold' : 'normal', color: previewCountry.name === country.name ? 'var(--accent-primary)' : 'var(--text-primary)' }}>
                  {country.name}
                </span>
                {renderDifficultyDots(country.difficulty)}
              </div>
            ))}
            {filteredCountries.length === 0 && (
              <div style={{ padding: 'var(--spacing-md)', color: 'var(--text-muted)' }}>No countries found.</div>
            )}
          </div>
        </div>

        {/* Right Side: Preview */}
        <div style={{ flex: '2 1 500px', padding: 'var(--spacing-xl)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
          <div style={{ display: 'flex', gap: 'var(--spacing-lg)', alignItems: 'flex-start' }}>
            {previewCountry.code && previewCountry.code !== 'un' && (
              <img 
                src={`https://flagcdn.com/w320/${previewCountry.code}.png`}
                alt={`Flag of ${previewCountry.name}`}
                style={{ width: '160px', borderRadius: '4px', border: '1px solid var(--border-color)' }}
              />
            )}
            <div>
              <h2 style={{ fontSize: '2.5rem', margin: '0 0 var(--spacing-sm) 0', color: 'var(--text-primary)' }}>{previewCountry.name}</h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Difficulty:</span>
                {renderDifficultyDots(previewCountry.difficulty)}
                <span style={{ color: 'var(--text-muted)', marginLeft: '4px', fontSize: '0.9rem' }}>
                  ({previewCountry.difficulty === 1 ? 'Easy' : previewCountry.difficulty === 2 ? 'Medium' : 'Hard'})
                </span>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--bg-tertiary)', padding: 'var(--spacing-md)', borderRadius: 'var(--border-radius-sm)' }}>
            <h3 style={{ margin: '0 0 var(--spacing-sm) 0', fontSize: '1.1rem', color: 'var(--accent-secondary)' }}>National Overview (2000)</h3>
            <p style={{ margin: 0, lineHeight: 1.6, color: 'var(--text-secondary)' }}>
              {previewCountry.description}
            </p>
          </div>

          <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--spacing-md)' }}>
            <div style={{ padding: 'var(--spacing-sm)', border: '1px solid var(--border-color)', borderRadius: '4px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>GDP/Capita</div>
              <div style={{ fontWeight: 600, fontSize: '1.2rem' }}>${previewCountry.stats.gdpPerCapita.toLocaleString()}</div>
            </div>
            <div style={{ padding: 'var(--spacing-sm)', border: '1px solid var(--border-color)', borderRadius: '4px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>National Debt</div>
              <div style={{ fontWeight: 600, fontSize: '1.2rem' }}>${previewCountry.stats.nationalDebt.toLocaleString()}B</div>
            </div>
            <div style={{ padding: 'var(--spacing-sm)', border: '1px solid var(--border-color)', borderRadius: '4px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Min Leader Age</div>
              <div style={{ fontWeight: 600, fontSize: '1.2rem' }}>{previewCountry.minLeaderAge}</div>
            </div>
          </div>

          <div style={{ flexGrow: 1 }} />

          <button 
            className="btn btn-primary" 
            style={{ width: '100%', padding: '16px', fontSize: '1.2rem' }}
            onClick={handleSelectCountry}
          >
            Select {previewCountry.name}
          </button>
        </div>

      </div>
    </div>
  );
}
