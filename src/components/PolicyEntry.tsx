'use client';
import { useState } from 'react';
import { useGameStore } from '@/store/gameStore';

export default function PolicyEntry() {
  const [policy, setPolicy] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const proposeBill = useGameStore(state => state.proposeBill);
  const countryName = useGameStore(state => state.countryName);
  const stats = useGameStore(state => state.stats);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!policy.trim()) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const { ministers, parliamentSeats } = useGameStore.getState();
      const res = await fetch('/api/evaluate-policy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ policy, countryName, stats, ministers, parliamentSeats }),
      });
      
      const data = await res.json();
      
      if (res.ok) {
        proposeBill({
          policyText: policy,
          headline: data.headline || 'New Policy Proposed',
          mediaReaction: data.mediaReaction || 'No editorial comment.',
          cabinetReaction: data.cabinetReaction || 'The cabinet remains silent.',
          partyReactions: data.partyReactions || 'The parties have no comment.',
          economicEffect: data.economicEffect || 'No clear economic effect.',
          statsDiff: data.statsDiff || {},
          factionDiffs: data.factionDiffs || {}
        });
        setPolicy('');
      } else {
        setError(data.error || 'Failed to evaluate policy.');
      }
    } catch (err) {
      setError('Network error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="card">
      <div className="card-header">Draft Policy Bill</div>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <label htmlFor="policy">Free-text Legislative Directive</label>
          <textarea 
            id="policy"
            rows={4}
            value={policy}
            onChange={(e) => setPolicy(e.target.value)}
            placeholder="e.g. Nationalise the healthcare sector and increase wages for nurses by 15%..."
            style={{ resize: 'vertical' }}
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={isSubmitting || !policy.trim()}>
          {isSubmitting ? 'Drafting Bill...' : 'Propose Bill to Parliament'}
        </button>
      </form>
      
      {error && (
        <div style={{ marginTop: 'var(--spacing-lg)', padding: 'var(--spacing-md)', backgroundColor: 'rgba(255, 23, 68, 0.1)', border: '1px solid var(--status-bad)', borderRadius: 'var(--border-radius-sm)', color: 'var(--status-bad)' }}>
          {error}
        </div>
      )}
    </div>
  );
}
