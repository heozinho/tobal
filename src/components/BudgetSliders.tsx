'use client';
import { useGameStore, Budget } from '@/store/gameStore';

export default function BudgetSliders() {
  const budget = useGameStore(state => state.budget);
  const updateBudget = useGameStore(state => state.updateBudget);

  const handleSliderChange = (key: keyof Budget, value: string) => {
    updateBudget({ [key]: parseInt(value, 10) });
  };

  const renderSlider = (label: string, key: keyof Budget, color: string) => (
    <div style={{ marginBottom: 'var(--spacing-md)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
        <span style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>{label}</span>
        <span style={{ fontWeight: 600 }}>{budget[key]}%</span>
      </div>
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={budget[key]} 
        onChange={(e) => handleSliderChange(key, e.target.value)}
        style={{ 
          width: '100%', 
          accentColor: color,
          height: '6px',
          borderRadius: '3px',
          appearance: 'none',
          backgroundColor: 'var(--bg-tertiary)',
          outline: 'none'
        }}
      />
    </div>
  );

  return (
    <div className="card">
      <div className="card-header">National Budget</div>
      
      <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-lg)' }}>
        <div>
          <h3 style={{ color: 'var(--status-good)', marginBottom: 'var(--spacing-md)', fontSize: '1rem', textTransform: 'uppercase' }}>Taxation (Revenue)</h3>
          {renderSlider('Low Income Tax', 'taxIncomeLow', 'var(--status-good)')}
          {renderSlider('Middle Income Tax', 'taxIncomeMiddle', 'var(--status-good)')}
          {renderSlider('High Income Tax', 'taxIncomeHigh', 'var(--status-good)')}
          {renderSlider('Corporate Tax', 'taxCorp', 'var(--status-good)')}
          {renderSlider('VAT', 'taxVAT', 'var(--status-good)')}
          {renderSlider('Tariffs', 'taxTariffs', 'var(--status-good)')}
        </div>

        <div>
          <h3 style={{ color: 'var(--status-bad)', marginBottom: 'var(--spacing-md)', fontSize: '1rem', textTransform: 'uppercase' }}>Spending (Expenses)</h3>
          {renderSlider('Education', 'spendEducation', 'var(--status-bad)')}
          {renderSlider('Infrastructure', 'spendInfrastructure', 'var(--status-bad)')}
          {renderSlider('Welfare', 'spendWelfare', 'var(--status-bad)')}
          {renderSlider('Military', 'spendMilitary', 'var(--status-bad)')}
          {renderSlider('Healthcare', 'spendHealth', 'var(--status-bad)')}
        </div>
      </div>
    </div>
  );
}
