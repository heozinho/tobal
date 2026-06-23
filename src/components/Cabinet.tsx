'use client';
import { useGameStore } from '@/store/gameStore';

export default function Cabinet() {
  const ministers = useGameStore(state => state.ministers);
  const fireMinister = useGameStore(state => state.fireMinister);

  return (
    <div className="card">
      <div className="card-header">Cabinet Ministers</div>
      
      {ministers.length === 0 ? (
        <p style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>No ministers appointed.</p>
      ) : (
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 'var(--spacing-md)' }}>
          {ministers.map(minister => (
            <div key={minister.id} style={{ 
              backgroundColor: 'var(--bg-primary)', 
              padding: 'var(--spacing-md)', 
              borderRadius: 'var(--border-radius-sm)',
              border: '1px solid var(--border-color)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--spacing-sm)' }}>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-primary)' }}>{minister.name}</h4>
                  <div style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Minister of {minister.role}
                  </div>
                </div>
                <button 
                  onClick={() => fireMinister(minister.id)}
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    color: 'var(--status-bad)', 
                    cursor: 'pointer',
                    fontSize: '0.8rem',
                    textDecoration: 'underline'
                  }}
                >
                  Fire
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)', fontSize: '0.9rem' }}>
                <StatBar label="Competence" value={minister.competence} color="var(--status-good)" />
                <StatBar label="Loyalty" value={minister.loyalty} color="var(--accent-primary)" />
                <StatBar label="Corruption" value={minister.corruptionLevel} color="var(--status-bad)" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function StatBar({ label, value, color }: { label: string, value: number, color: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span style={{ color: 'var(--text-muted)', width: '80px' }}>{label}</span>
      <div style={{ flex: 1, height: '6px', backgroundColor: 'var(--bg-tertiary)', borderRadius: '3px', margin: '0 8px', overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${value}%`, backgroundColor: color }} />
      </div>
      <span style={{ width: '30px', textAlign: 'right', fontWeight: 500 }}>{value}</span>
    </div>
  );
}
