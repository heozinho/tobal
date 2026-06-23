'use client';
import { useGameStore } from '@/store/gameStore';

export default function Factions() {
  const factions = useGameStore(state => state.factions);

  return (
    <div className="card">
      <div className="card-header">Faction Approval Ratings</div>
      
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 'var(--spacing-md)' }}>
        <FactionCard name="Working Class" approval={factions.workingClass} />
        <FactionCard name="Middle Class" approval={factions.middleClass} />
        <FactionCard name="Business & Oligarchs" approval={factions.business} />
        <FactionCard name="Military" approval={factions.military} />
        <FactionCard name="Religious Institutions" approval={factions.religious} />
        <FactionCard name="Youth" approval={factions.youth} />
      </div>
    </div>
  );
}

function FactionCard({ name, approval }: { name: string, approval: number }) {
  let statusColor = 'var(--status-warning)';
  if (approval >= 60) statusColor = 'var(--status-good)';
  if (approval <= 40) statusColor = 'var(--status-bad)';

  return (
    <div style={{
      backgroundColor: 'var(--bg-primary)',
      padding: 'var(--spacing-md)',
      borderRadius: 'var(--border-radius-sm)',
      border: '1px solid var(--border-color)'
    }}>
      <h4 style={{ margin: '0 0 8px 0', fontSize: '0.95rem', color: 'var(--text-primary)' }}>{name}</h4>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 700, color: statusColor }}>{approval}%</div>
        <div style={{ flex: 1, height: '8px', backgroundColor: 'var(--bg-tertiary)', borderRadius: '4px', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${approval}%`, backgroundColor: statusColor, transition: 'width 0.3s ease, background-color 0.3s ease' }} />
        </div>
      </div>
    </div>
  );
}
