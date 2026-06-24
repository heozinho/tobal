'use client';
import { useState } from 'react';
import { useGameStore, WorldNation } from '@/store/gameStore';

export default function WorldStage() {
  const worldNations = useGameStore(state => state.worldNations);
  const interactWithNation = useGameStore(state => state.interactWithNation);
  const [selectedNation, setSelectedNation] = useState<WorldNation | null>(null);

  const handleInteract = (nationName: string, action: Parameters<typeof interactWithNation>[1]) => {
    interactWithNation(nationName, action);
    // update local state
    const updated = useGameStore.getState().worldNations.find(n => n.name === nationName);
    if (updated) setSelectedNation(updated);
  };

  return (
    <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-lg)' }}>
      {/* List of Nations */}
      <div className="card">
        <div className="card-header">World Stage</div>
        <div style={{ maxHeight: '600px', overflowY: 'auto', paddingRight: '8px' }}>
          {worldNations.map((nation) => (
            <div 
              key={nation.name}
              onClick={() => setSelectedNation(nation)}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: 'var(--spacing-md)',
                marginBottom: 'var(--spacing-sm)',
                backgroundColor: selectedNation?.name === nation.name ? 'var(--bg-tertiary)' : 'transparent',
                border: `1px solid ${selectedNation?.name === nation.name ? 'var(--accent-primary)' : 'var(--border-color)'}`,
                borderRadius: 'var(--border-radius-sm)',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              <div style={{ width: '24px', height: '16px', backgroundColor: nation.color, marginRight: '16px', borderRadius: '2px' }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 'bold' }}>{nation.name}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{nation.governmentType}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ 
                  color: nation.relationship > 20 ? 'var(--status-good)' : nation.relationship < -20 ? 'var(--status-bad)' : 'var(--text-secondary)',
                  fontWeight: 'bold'
                }}>
                  Rel: {nation.relationship}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Nation Details Panel */}
      <div className="card">
        {!selectedNation ? (
          <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
            Select a nation to view details and diplomacy options.
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 'var(--spacing-lg)' }}>
              <div style={{ width: '40px', height: '24px', backgroundColor: selectedNation.color, marginRight: '16px', borderRadius: '2px' }} />
              <div>
                <h2 style={{ margin: 0 }}>{selectedNation.name}</h2>
                <div style={{ color: 'var(--text-secondary)' }}>Leader: {selectedNation.leaderName} ({selectedNation.governmentType})</div>
              </div>
            </div>

            <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-xl)' }}>
              <StatBox label="GDP / Capita" value={`$${selectedNation.gdpPerCapita.toLocaleString()}`} />
              <StatBox label="Military Strength" value={`${selectedNation.militaryStrength}/100`} />
              <StatBox label="Stability" value={`${selectedNation.stability}%`} />
              <StatBox label="Status" value={selectedNation.status} color={selectedNation.status === 'At War' ? 'var(--status-bad)' : 'var(--status-good)'} />
            </div>

            <h3 style={{ marginBottom: 'var(--spacing-sm)', color: 'var(--accent-primary)', fontSize: '1rem', textTransform: 'uppercase' }}>Diplomatic Actions</h3>
            
            {selectedNation.status === 'At War' ? (
              <div className="animate-pulse-war" style={{ backgroundColor: 'rgba(255, 0, 0, 0.1)', border: '2px solid var(--status-bad)', padding: 'var(--spacing-md)', borderRadius: 'var(--border-radius-sm)' }}>
                <h4 style={{ color: 'var(--status-bad)', marginBottom: 'var(--spacing-md)', textAlign: 'center' }}>ACTIVE WARZONE</h4>
                
                <div style={{ marginBottom: 'var(--spacing-md)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '4px' }}>
                    <span>Us</span>
                    <span>Frontline Progress</span>
                    <span>Them</span>
                  </div>
                  <div style={{ width: '100%', height: '12px', backgroundColor: 'var(--bg-primary)', borderRadius: '6px', overflow: 'hidden', display: 'flex' }}>
                    <div style={{ width: `${selectedNation.warProgress}%`, backgroundColor: 'var(--status-good)', height: '100%' }}></div>
                    <div style={{ width: `${100 - selectedNation.warProgress}%`, backgroundColor: 'var(--status-bad)', height: '100%' }}></div>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--spacing-lg)' }}>
                  <div style={{ color: 'var(--status-bad)' }}>Enemy Casualties: {selectedNation.casualties.toLocaleString()}</div>
                </div>

                <button 
                  className="btn"
                  style={{ width: '100%', backgroundColor: 'var(--status-warning)', color: '#000', fontWeight: 'bold' }}
                  onClick={() => handleInteract(selectedNation.name, 'sueForPeace' as any)}
                >
                  🏳️ Sue for Peace
                </button>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                <button 
                  className="btn"
                  style={{ backgroundColor: 'var(--bg-tertiary)', justifyContent: 'flex-start', padding: '12px' }}
                  onClick={() => handleInteract(selectedNation.name, 'trade')}
                  disabled={selectedNation.hasTradeAgreement || selectedNation.relationship < 0}
                >
                  🤝 Sign Trade Agreement (+5 GDP, +15 Rel)
                </button>

                <button 
                  className="btn"
                  style={{ backgroundColor: 'var(--bg-tertiary)', justifyContent: 'flex-start', padding: '12px' }}
                  onClick={() => handleInteract(selectedNation.name, 'sendAid')}
                  disabled={selectedNation.relationship < -50}
                >
                  💰 Send Financial Aid (Costs $5B, +25 Rel, +5 Stability)
                </button>

                <button 
                  className="btn"
                  style={{ backgroundColor: 'var(--bg-tertiary)', justifyContent: 'flex-start', padding: '12px' }}
                  onClick={() => handleInteract(selectedNation.name, 'condemn')}
                >
                  📢 Publicly Condemn (-15 Rel)
                </button>

                <button 
                  className="btn"
                  style={{ backgroundColor: 'var(--bg-tertiary)', justifyContent: 'flex-start', padding: '12px', border: '1px solid var(--status-warning)' }}
                  onClick={() => handleInteract(selectedNation.name, 'sanction')}
                  disabled={selectedNation.status === 'Sanctioned'}
                >
                  🛑 Impose Sanctions (-30 Rel)
                </button>

                <button 
                  className="btn"
                  style={{ backgroundColor: 'var(--bg-tertiary)', justifyContent: 'flex-start', padding: '12px', border: '1px solid var(--status-warning)' }}
                  onClick={() => handleInteract(selectedNation.name, 'covert')}
                >
                  🕵️ Covert Operations (Costs $10B, -10 Target Stability)
                </button>

                <button 
                  className="btn"
                  style={{ backgroundColor: 'var(--status-bad)', justifyContent: 'flex-start', padding: '12px', color: '#000', fontWeight: 'bold' }}
                  onClick={() => handleInteract(selectedNation.name, 'war')}
                >
                  ⚔️ DECLARE WAR (-100 Rel)
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function StatBox({ label, value, color }: { label: string, value: string, color?: string }) {
  return (
    <div style={{ backgroundColor: 'var(--bg-tertiary)', padding: 'var(--spacing-md)', borderRadius: 'var(--border-radius-sm)' }}>
      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>{label}</div>
      <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: color || 'var(--text-primary)' }}>{value}</div>
    </div>
  );
}
