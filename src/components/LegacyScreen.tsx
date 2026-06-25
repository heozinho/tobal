'use client';
import { useState, useEffect } from 'react';
import { useGameStore } from '@/store/gameStore';

export default function LegacyScreen() {
  const { countryName, year, stats, factions, leaderTrait, headlines, playAgain } = useGameStore();
  
  const [epitaph, setEpitaph] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const startYear = 2000;
  const isVictory = year >= 2020;
  const overallApproval = Math.round((factions.workingClass + factions.middleClass + factions.business + factions.military + factions.religious + factions.youth) / 6);
  const legacyScore = ((year - startYear) * 100) + (stats.gdpPerCapita / 10) + overallApproval - (stats.casualties / 1000);

  useEffect(() => {
    const fetchEpitaph = async () => {
      try {
        const res = await fetch('/api/generate-epitaph', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            countryName,
            startYear,
            endYear: year,
            stats,
            factions,
            leaderTrait,
            headlines
          })
        });
        const data = await res.json();
        if (res.ok && data.epitaph) {
          setEpitaph(data.epitaph);
        } else {
          setEpitaph(data.error || "The history books remain mysteriously silent on this era.");
        }
      } catch (err) {
        setEpitaph("The history books remain mysteriously silent on this era.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchEpitaph();
  }, [countryName, year, stats, factions, leaderTrait, headlines]);

  return (
    <div className="container" style={{ maxWidth: '800px', marginTop: '5vh' }}>
      <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
        <h1 style={{ color: isVictory ? 'var(--status-good)' : 'var(--status-bad)', fontSize: '4rem', marginBottom: 'var(--spacing-md)' }}>
          {isVictory ? 'TERM COMPLETED' : 'REIGN ENDED'}
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
          {isVictory 
            ? `You have successfully led ${countryName} into a new decade. History will judge your actions.` 
            : `Your rule over ${countryName} has come to an abrupt and ignominious end in the year ${year}.`}
        </p>
      </div>

      <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-lg)' }}>
        <div className="card">
          <h2 style={{ color: 'var(--accent-primary)', marginBottom: 'var(--spacing-md)' }}>Final Statistics</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
            <StatRow label="Years in Power" value={(year - startYear).toString()} />
            <StatRow label="Final GDP / Capita" value={`$${stats.gdpPerCapita.toLocaleString()}`} />
            <StatRow label="Final Approval" value={`${overallApproval}%`} />
            <StatRow label="National Debt" value={`$${stats.nationalDebt.toLocaleString()}B`} />
            <StatRow label="War Casualties" value={stats.casualties.toLocaleString()} color="var(--status-bad)" />
          </div>
          
          <div style={{ marginTop: 'var(--spacing-xl)', textAlign: 'center' }}>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Total Legacy Score</div>
            <div style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              {Math.round(legacyScore).toLocaleString()}
            </div>
          </div>
        </div>

        <div className="card">
          <h2 style={{ color: 'var(--accent-primary)', marginBottom: 'var(--spacing-md)' }}>Historical Epitaph</h2>
          {isLoading ? (
            <div style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>
              Historians are writing the books...
            </div>
          ) : (
            <div style={{ lineHeight: 1.6, color: 'var(--text-secondary)', fontSize: '1.05rem', whiteSpace: 'pre-wrap' }}>
              {epitaph}
            </div>
          )}
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: 'var(--spacing-xl)' }}>
        <button 
          className="btn btn-primary" 
          style={{ padding: '16px 32px', fontSize: '1.2rem' }}
          onClick={playAgain}
        >
          Start New Game
        </button>
      </div>
    </div>
  );
}

function StatRow({ label, value, color }: { label: string, value: string, color?: string }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid var(--bg-tertiary)' }}>
      <span style={{ color: 'var(--text-muted)' }}>{label}</span>
      <span style={{ fontWeight: 'bold', color: color || 'var(--text-primary)' }}>{value}</span>
    </div>
  );
}
