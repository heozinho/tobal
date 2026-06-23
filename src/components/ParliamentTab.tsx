'use client';
import { useGameStore } from '@/store/gameStore';
import { defaultParties } from '@/lib/parliament';

export default function ParliamentTab() {
  const parliamentSeats = useGameStore(state => state.parliamentSeats);
  const nextElectionYear = useGameStore(state => state.nextElectionYear);

  const totalSeats = Object.values(parliamentSeats).reduce((a, b) => a + b, 0) || 500;

  // Ensure default distribution if no data yet
  const sortedParties = defaultParties.map(p => ({
    ...p,
    seats: parliamentSeats[p.id] || 0
  })).sort((a, b) => b.seats - a.seats);

  return (
    <div className="card">
      <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>Parliament (500 Seats)</span>
        <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 'normal' }}>
          Next Election: Nov {nextElectionYear}
        </span>
      </div>
      
      <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-md)' }}>
        Your ability to pass laws depends on securing a 251-seat majority. Support changes dynamically based on your approval ratings among factions.
      </p>

      {/* Basic visualization bar */}
      <div style={{ 
        display: 'flex', 
        height: '30px', 
        width: '100%', 
        borderRadius: 'var(--border-radius-sm)', 
        overflow: 'hidden',
        marginBottom: 'var(--spacing-lg)'
      }}>
        {sortedParties.map(p => {
          const width = (p.seats / totalSeats) * 100;
          if (width === 0) return null;
          return (
            <div 
              key={p.id} 
              style={{ 
                width: `${width}%`, 
                backgroundColor: p.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: '0.75rem',
                fontWeight: 'bold',
                textShadow: '0 1px 2px rgba(0,0,0,0.5)'
              }}
              title={`${p.name}: ${p.seats} seats`}
            >
              {width > 5 ? p.seats : ''}
            </div>
          );
        })}
      </div>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-sm)' }}>
        {sortedParties.map(p => (
          <div key={p.id} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '16px', height: '16px', backgroundColor: p.color, borderRadius: '4px' }}></div>
            <div>
              <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{p.name}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {p.seats} Seats ({(p.seats / totalSeats * 100).toFixed(1)}%)
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
