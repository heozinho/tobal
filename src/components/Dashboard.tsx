export default function Dashboard() {
  return (
    <div className="card">
      <div className="card-header">National Statistics</div>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'var(--spacing-md)' }}>
        <Stat label="GDP Per Capita" value="$42,000" trend="up" />
        <Stat label="Unemployment" value="4.2%" trend="down" />
        <Stat label="Inflation" value="2.1%" trend="neutral" />
        <Stat label="National Debt" value="$12.4T" trend="up" />
        <Stat label="Trade Balance" value="-$400B" trend="down" />
        <Stat label="Treasury" value="$80B" trend="up" />
        <Stat label="Approval Rating" value="54%" trend="neutral" />
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
        <span style={{ fontSize: '1rem', marginLeft: '8px', color: trendColor }}>
          {trend === 'up' ? '▲' : trend === 'down' ? '▼' : '▬'}
        </span>
      </div>
    </div>
  );
}
