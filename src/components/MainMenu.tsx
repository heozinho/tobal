'use client';
import { useGameStore } from '@/store/gameStore';

export default function MainMenu() {
  const setScreen = useGameStore(state => state.setScreen);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '80vh',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: '6rem',
        fontWeight: '900',
        color: 'var(--accent-primary)',
        marginBottom: '0.5rem',
        letterSpacing: '-2px',
        textShadow: '0 4px 20px rgba(0, 150, 255, 0.3)'
      }}>Tobal</h1>
      <p style={{
        fontSize: '1.2rem',
        color: 'var(--text-secondary)',
        marginBottom: 'var(--spacing-xl)',
        maxWidth: '500px'
      }}>
        A political strategy simulator. Guide your nation through the dawn of the 21st century.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)', width: '100%', maxWidth: '300px' }}>
        <button 
          className="btn btn-primary" 
          style={{ padding: '16px 24px', fontSize: '1.2rem' }}
          onClick={() => setScreen('setup')}
        >
          Start Game
        </button>
        
        <button 
          className="btn" 
          style={{ padding: '16px 24px', fontSize: '1.2rem' }}
          onClick={() => setScreen('settings')}
        >
          Settings
        </button>
      </div>
    </div>
  );
}
