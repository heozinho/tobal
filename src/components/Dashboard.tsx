'use client';
import { useGameStore } from '@/store/gameStore';

export default function Dashboard() {
  const stats = useGameStore(state => state.stats);
  const factions = useGameStore(state => state.factions);

  const overallApproval = Math.round((factions.workingClass + factions.middleClass + factions.business + factions.military + factions.religious + factions.youth) / 6);
  const mobilizeMilitary = useGameStore(state => state.mobilizeMilitary);
  const resign = useGameStore(state => state.resign);
  const worldNations = useGameStore(state => state.worldNations);
  const activeWars = worldNations.filter(n => n.status === 'At War');

  return (
    <div className="card" style={{ position: 'relative' }}>
      <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>National Statistics</span>
        <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
          {activeWars.length > 0 && (
            <button 
              className="btn" 
              style={{ backgroundColor: 'var(--status-bad)', color: '#000', fontWeight: 'bold' }}
              onClick={mobilizeMilitary}
            >
              MOBILIZE MILITARY
            </button>
          )}
          <button 
            className="btn" 
            style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-muted)' }}
            onClick={resign}
          >
            Resign
          </button>
        </div>
      </div>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'var(--spacing-md)' }}>
        <Stat label="GDP Per Capita" value={`$${stats.gdpPerCapita.toLocaleString()}`} trend="neutral" />
        <Stat label="Unemployment" value={`${stats.unemployment.toFixed(1)}%`} trend="neutral" />
        <Stat label="Inflation" value={`${stats.inflation.toFixed(1)}%`} trend="neutral" />
        <Stat label="National Debt" value={`$${stats.nationalDebt.toLocaleString()}B`} trend="neutral" />
        <Stat label="Treasury" value={`$${stats.treasury.toLocaleString()}B`} trend="neutral" />
        <Stat label="Credit Rating" value={stats.creditRating} trend="neutral" />
        <Stat label="Military Strength" value={`${stats.militaryStrength}/100`} trend="neutral" />
        <Stat label="Casualties" value={stats.casualties.toLocaleString()} trend="neutral" />
        <Stat label="Approval Rating" value={`${overallApproval}%`} trend="neutral" />
      </div>
    </div>
  );
}

function Stat({ label, value, trend }: { label: string, value: string, trend: 'up' | 'down' | 'neutral' }) {
  const trendColor = trend === 'up' ? 'var(--status-good)' : trend === 'down' ? 'var(--status-bad)' : 'var(--text-muted)';
  
  return (
    <div>
      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        {label}
      </div>
      <div style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>
        {value}
        {trend !== 'neutral' && (
          <span style={{ fontSize: '1rem', marginLeft: '8px', color: trendColor }}>
            {trend === 'up' ? '▲' : '▼'}
          </span>
        )}
      </div>
    </div>
  );
}
