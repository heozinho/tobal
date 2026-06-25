'use client';
import { useState } from 'react';
import Dashboard from '@/components/Dashboard';
import BudgetSliders from '@/components/BudgetSliders';
import PolicyEntry from '@/components/PolicyEntry';
import NewsFeed from '@/components/NewsFeed';
import CountrySelection from '@/components/CountrySelection';
import Cabinet from '@/components/Cabinet';
import Factions from '@/components/Factions';
import WorldStage from '@/components/WorldStage';
import EventModal from '@/components/EventModal';
import LegacyScreen from '@/components/LegacyScreen';
import BailoutModal from '@/components/BailoutModal';
import ParliamentTab from '@/components/ParliamentTab';
import VotingScreen from '@/components/VotingScreen';
import { useGameStore } from '@/store/gameStore';

export default function Home() {
  const countryName = useGameStore(state => state.countryName);
  const year = useGameStore(state => state.year);
  const month = useGameStore(state => state.month);
  const headlines = useGameStore(state => state.headlines);
  const advanceTime = useGameStore(state => state.advanceTime);
  const isGameOver = useGameStore(state => state.isGameOver);

  const [activeTab, setActiveTab] = useState<'policy' | 'parliament' | 'cabinet' | 'world'>('policy');

  if (!countryName) {
    return <CountrySelection />;
  }

  if (isGameOver) {
    return <LegacyScreen />;
  }

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return (
    <main className="container">
      <EventModal />
      <BailoutModal />
      <VotingScreen />
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-xl)' }}>
        <div>
          <h1 style={{ marginBottom: 0, color: 'var(--accent-primary)' }}>Tobal</h1>
          <p style={{ color: 'var(--text-muted)' }}>Date: {monthNames[month - 1]} {year} | Leader: You | Nation: {countryName}</p>
        </div>
        <button 
          className="btn btn-primary" 
          style={{ padding: '12px 24px', fontSize: '1.1rem', backgroundColor: 'var(--accent-primary)', color: '#000' }}
          onClick={() => advanceTime()}
        >
          Next Month ⏩
        </button>
      </div>

      <div className="grid">
        {/* Top layer: Dashboard */}
        <div style={{ gridColumn: '1 / -1' }}>
          <Dashboard />
        </div>

        {/* Tab Navigation */}
        <div style={{ 
          display: 'flex', 
          gap: 'var(--spacing-md)', 
          borderBottom: '1px solid var(--border-color)', 
          paddingBottom: 'var(--spacing-sm)',
          gridColumn: '1 / -1'
        }}>
          <button 
            className={`btn ${activeTab === 'policy' ? 'btn-primary' : ''}`}
            onClick={() => setActiveTab('policy')}
          >
            Policy & News
          </button>
          <button 
            className={`btn ${activeTab === 'parliament' ? 'btn-primary' : ''}`}
            onClick={() => setActiveTab('parliament')}
          >
            Parliament
          </button>
          <button 
            className={`btn ${activeTab === 'cabinet' ? 'btn-primary' : ''}`}
            onClick={() => setActiveTab('cabinet')}
          >
            Cabinet & Factions
          </button>
          <button 
            className={`btn ${activeTab === 'world' ? 'btn-primary' : ''}`}
            onClick={() => setActiveTab('world')}
          >
            World Stage
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'policy' && (
          <div className="grid" style={{ gridTemplateColumns: '3fr 2fr', gridColumn: '1 / -1' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
              <BudgetSliders />
              <PolicyEntry />
            </div>
            
            <div>
              <NewsFeed headlines={headlines} />
            </div>
          </div>
        )}

        {activeTab === 'parliament' && (
          <div className="grid" style={{ gridTemplateColumns: '1fr', gridColumn: '1 / -1' }}>
            <ParliamentTab />
          </div>
        )}

        {activeTab === 'cabinet' && (
          <div className="grid" style={{ gridTemplateColumns: '1fr', gridColumn: '1 / -1' }}>
            <Factions />
            <Cabinet />
          </div>
        )}

        {activeTab === 'world' && (
          <div className="grid" style={{ gridTemplateColumns: '1fr', gridColumn: '1 / -1' }}>
            <WorldStage />
          </div>
        )}
      </div>
    </main>
  );
}

