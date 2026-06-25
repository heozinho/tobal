'use client';
import { useState } from 'react';
import { useGameStore } from '@/store/gameStore';

export default function SettingsScreen() {
  const setScreen = useGameStore(state => state.setScreen);
  const [difficulty, setDifficulty] = useState('Normal');
  const [aiModel, setAiModel] = useState('Gemini 2.5 Flash-8B');

  return (
    <div className="container" style={{ maxWidth: '600px', marginTop: '5vh' }}>
      <div className="card">
        <h2 style={{ color: 'var(--accent-primary)', marginBottom: 'var(--spacing-lg)', textAlign: 'center' }}>Settings</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
          <div>
            <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', color: 'var(--text-secondary)' }}>Difficulty</label>
            <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
              {['Easy', 'Normal', 'Hard'].map(lvl => (
                <button
                  key={lvl}
                  className={`btn ${difficulty === lvl ? 'btn-primary' : ''}`}
                  style={{ flex: 1 }}
                  onClick={() => setDifficulty(lvl)}
                >
                  {lvl}
                </button>
              ))}
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: 'var(--spacing-xs)' }}>
              (Note: Difficulty is cosmetic in this build)
            </p>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', color: 'var(--text-secondary)' }}>AI Engine</label>
            <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
              {['Gemini 2.5 Flash-8B', 'Gemini 2.5 Pro'].map(model => (
                <button
                  key={model}
                  className={`btn ${aiModel === model ? 'btn-primary' : ''}`}
                  style={{ flex: 1 }}
                  onClick={() => setAiModel(model)}
                >
                  {model}
                </button>
              ))}
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: 'var(--spacing-xs)' }}>
              (Currently locked to Flash-8B for speed)
            </p>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', color: 'var(--text-secondary)' }}>Audio Volume</label>
            <input type="range" min="0" max="100" defaultValue="50" style={{ width: '100%' }} />
          </div>
        </div>

        <div style={{ marginTop: 'var(--spacing-xl)', textAlign: 'center' }}>
          <button 
            className="btn btn-primary" 
            style={{ padding: '12px 32px' }}
            onClick={() => setScreen('menu')}
          >
            Save & Return to Menu
          </button>
        </div>
      </div>
    </div>
  );
}
