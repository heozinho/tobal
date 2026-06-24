'use client';
import { useGameStore } from '@/store/gameStore';

export default function EventModal() {
  const activeEvent = useGameStore(state => state.activeEvent);
  const resolveEvent = useGameStore(state => state.resolveEvent);

  if (!activeEvent) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div className="card" style={{ maxWidth: '600px', width: '90%', animation: 'fadeIn 0.3s ease-out' }}>
        <h2 style={{ color: 'var(--accent-primary)', marginBottom: 'var(--spacing-sm)' }}>
          {activeEvent.title}
        </h2>
        <p style={{ fontSize: '1.1rem', marginBottom: 'var(--spacing-lg)' }}>
          {activeEvent.description}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
          {activeEvent.choices.map((choice, index) => (
            <button 
              key={index}
              className="btn" 
              style={{ textAlign: 'left', padding: '16px', fontSize: '1rem', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-tertiary)' }}
              onClick={() => resolveEvent(index)}
            >
              {choice.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
