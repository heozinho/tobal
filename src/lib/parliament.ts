import { Factions } from '@/store/gameStore';

export interface PoliticalParty {
  id: string;
  name: string;
  color: string;
  coreFaction: keyof Factions;
}

export const defaultParties: PoliticalParty[] = [
  { id: 'labor', name: 'Labor Party', color: '#e74c3c', coreFaction: 'workingClass' },
  { id: 'conservative', name: 'Conservative Party', color: '#2980b9', coreFaction: 'business' },
  { id: 'liberal', name: 'Liberal Democrats', color: '#f1c40f', coreFaction: 'middleClass' },
  { id: 'nationalist', name: 'Nationalist Front', color: '#8e44ad', coreFaction: 'military' },
  { id: 'religious', name: 'Traditional Values Party', color: '#2c3e50', coreFaction: 'religious' },
  { id: 'green', name: 'Green Youth Coalition', color: '#27ae60', coreFaction: 'youth' },
];

export function calculateElectionResults(factions: Factions, totalSeats: number = 500): Record<string, number> {
  // Seats are distributed roughly proportionally to the approval rating of each faction,
  // normalized to 500 seats.
  
  const rawSupport = {
    labor: Math.max(10, factions.workingClass),
    conservative: Math.max(10, factions.business),
    liberal: Math.max(10, factions.middleClass),
    nationalist: Math.max(10, factions.military),
    religious: Math.max(10, factions.religious),
    green: Math.max(10, factions.youth)
  };

  const totalSupport = Object.values(rawSupport).reduce((a, b) => a + b, 0);
  
  const seats: Record<string, number> = {};
  let distributedSeats = 0;

  for (const partyId of Object.keys(rawSupport)) {
    const share = rawSupport[partyId as keyof typeof rawSupport] / totalSupport;
    const awarded = Math.floor(share * totalSeats);
    seats[partyId] = awarded;
    distributedSeats += awarded;
  }

  // Give any rounding remainder to the most popular party
  if (distributedSeats < totalSeats) {
    const remainder = totalSeats - distributedSeats;
    const largestParty = Object.keys(seats).reduce((a, b) => seats[a] > seats[b] ? a : b);
    seats[largestParty] += remainder;
  }

  return seats;
}
