'use client';
import { useGameStore } from '@/store/gameStore';
import { defaultParties } from '@/lib/parliament';

export default function VotingScreen() {
  const proposedBill = useGameStore(state => state.proposedBill);
  const resolveBill = useGameStore(state => state.resolveBill);
  const parliamentSeats = useGameStore(state => state.parliamentSeats);
  const politicalCapital = useGameStore(state => state.politicalCapital);
  const updatePoliticalCapital = useGameStore(state => state.updatePoliticalCapital);

  if (!proposedBill) return null;

  const totalSeats = Object.values(parliamentSeats).reduce((a, b) => a + b, 0) || 500;
  const majorityNeeded = Math.floor(totalSeats / 2) + 1;

  let votesFor = 0;
  let votesAgainst = 0;
  
  const partyVotes = defaultParties.map(party => {
    const seats = parliamentSeats[party.id] || 0;
    // Will the party support this?
    // Based on how the policy affects their core faction.
    const factionImpact = proposedBill.factionDiffs?.[party.coreFaction] || 0;
    
    // Very simple logic: if it hurts them significantly, they vote against. Otherwise, for.
    const votingFor = factionImpact >= -5; // Tolerance for minor negative impacts
    
    if (votingFor) votesFor += seats;
    else votesAgainst += seats;

    return { ...party, seats, votingFor, factionImpact };
  });

  const billPasses = votesFor >= majorityNeeded;

  const handleResolve = (forcePass: boolean = false) => {
    if (forcePass) {
      updatePoliticalCapital(-50);
      resolveBill(true);
    } else {
      resolveBill(billPasses);
    }
  };

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
      <div className="card" style={{ maxWidth: '700px', width: '90%', animation: 'fadeIn 0.3s ease-out' }}>
        <h2 style={{ color: 'var(--accent-primary)', marginBottom: 'var(--spacing-sm)' }}>
          Parliament Vote: {proposedBill.headline}
        </h2>
        
        <div style={{ padding: 'var(--spacing-sm)', borderLeft: '4px solid var(--accent-secondary)', backgroundColor: 'var(--bg-tertiary)', marginBottom: 'var(--spacing-md)' }}>
          <p style={{ fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: 'var(--spacing-xs)' }}>
            <strong>The Media:</strong> "{proposedBill.mediaReaction}"
          </p>
          {proposedBill.cabinetReaction && (
            <p style={{ fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
              <strong>The Cabinet:</strong> "{proposedBill.cabinetReaction}"
            </p>
          )}
        </div>

        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: 'var(--spacing-lg)' }}>
          Bill Text: "{proposedBill.policyText}"
        </p>
        
        <p style={{ fontSize: '0.9rem', marginBottom: 'var(--spacing-xs)' }}>
          <strong>Economic Forecast:</strong> {proposedBill.economicEffect}
        </p>
        {proposedBill.partyReactions && (
          <p style={{ fontSize: '0.9rem', marginBottom: 'var(--spacing-md)' }}>
            <strong>Parliamentary Chatter:</strong> {proposedBill.partyReactions}
          </p>
        )}

        <div style={{ marginBottom: 'var(--spacing-lg)', backgroundColor: 'var(--bg-tertiary)', padding: 'var(--spacing-md)', borderRadius: 'var(--border-radius-sm)' }}>
          <h3 style={{ marginBottom: 'var(--spacing-sm)', fontSize: '1.1rem' }}>Voting Results</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--spacing-sm)', fontSize: '1.2rem', fontWeight: 'bold' }}>
            <span style={{ color: 'var(--status-good)' }}>YEA: {votesFor}</span>
            <span style={{ color: 'var(--status-bad)' }}>NAY: {votesAgainst}</span>
          </div>
          
          <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
            {partyVotes.map(pv => (
              <div key={pv.id} style={{ 
                padding: '4px 8px', 
                backgroundColor: pv.color, 
                color: '#fff',
                fontSize: '0.8rem',
                borderRadius: '4px',
                opacity: pv.votingFor ? 1 : 0.4,
                border: !pv.votingFor ? '1px solid #fff' : 'none'
              }}>
                {pv.name} ({pv.seats}) - {pv.votingFor ? 'YEA' : 'NAY'}
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: billPasses ? 'var(--status-good)' : 'var(--status-bad)' }}>
            {billPasses ? 'BILL PASSES' : 'BILL FAILS'}
          </span>
          
          <div style={{ display: 'flex', gap: '8px' }}>
            {!billPasses && politicalCapital >= 50 && (
              <button 
                className="btn" 
                style={{ backgroundColor: 'var(--status-warning)', color: '#000' }}
                onClick={() => handleResolve(true)}
              >
                Force Bill (-50 Pol. Cap.)
              </button>
            )}
            <button 
              className="btn btn-primary" 
              onClick={() => handleResolve(false)}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
