export interface EventChoice {
  text: string;
  effect: {
    treasury?: number;
    approvalRating?: number;
    gdpPerCapita?: number;
    corruptionLevel?: number;
    headline: string;
  };
}

export interface GameEvent {
  id: string;
  title: string;
  description: string;
  triggerChance: number; // 0-1, evaluated monthly
  condition?: (year: number, month: number) => boolean;
  choices: EventChoice[];
}

export const gameEvents: GameEvent[] = [
  {
    id: 'dot-com-bust',
    title: 'Dot-Com Bubble Burst',
    description: 'Technology stocks have plummeted globally, wiping out billions in wealth. The economic shockwaves are hitting our markets.',
    triggerChance: 1.0,
    condition: (year, month) => year === 2001 && month === 3,
    choices: [
      {
        text: 'Bail out key tech firms (-$20B Treasury)',
        effect: {
          treasury: -20,
          approvalRating: -2,
          gdpPerCapita: 50,
          headline: 'Government Bails Out Tech Sector Amidst Market Crash'
        }
      },
      {
        text: 'Let the market correct itself (-GDP, -Approval)',
        effect: {
          gdpPerCapita: -150,
          approvalRating: -5,
          headline: 'Markets Bleed as Government Refuses Bailout'
        }
      }
    ]
  },
  {
    id: 'corruption-scandal',
    title: 'Major Corruption Scandal Exposed',
    description: 'Investigative journalists have uncovered a massive kickback scheme involving several high-ranking ministers.',
    triggerChance: 0.02, // 2% chance every month
    choices: [
      {
        text: 'Launch a full public inquiry (+Approval, -Corruption)',
        effect: {
          approvalRating: 5,
          corruptionLevel: -5,
          headline: 'Public Inquiry Launched into Ministerial Kickbacks'
        }
      },
      {
        text: 'Suppress the story (-Approval, +Corruption)',
        effect: {
          approvalRating: -8,
          corruptionLevel: 2,
          headline: 'Journalists Arrested Amidst Rumors of Cover-up'
        }
      }
    ]
  },
  {
    id: 'natural-disaster',
    title: 'Severe Natural Disaster',
    description: 'A massive earthquake has struck a populated region, causing widespread destruction.',
    triggerChance: 0.01,
    choices: [
      {
        text: 'Release emergency funds (-$10B Treasury, +Approval)',
        effect: {
          treasury: -10,
          approvalRating: 8,
          headline: 'Massive Relief Effort Underway After Devastating Quake'
        }
      },
      {
        text: 'Rely on international aid (-Approval, -GDP)',
        effect: {
          approvalRating: -10,
          gdpPerCapita: -50,
          headline: 'Government Criticized for Slow Disaster Response'
        }
      }
    ]
  }
];
