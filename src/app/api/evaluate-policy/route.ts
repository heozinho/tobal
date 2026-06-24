import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({}); // Defaults to process.env.GEMINI_API_KEY

export async function POST(req: Request) {
  try {
    const { policy, countryName, stats, ministers, parliamentSeats } = await req.json();

    if (!policy) {
      return NextResponse.json({ error: 'Policy text is required' }, { status: 400 });
    }

// Prepare prompt
    const prompt = `
You are the simulation engine for a political strategy game called Tobal. The year is 2000.
The player is the leader of ${countryName || 'a nation'}.
Current Stats:
- GDP per Capita: $${stats?.gdpPerCapita}
- Unemployment: ${stats?.unemployment}%
- Inflation: ${stats?.inflation}%
- National Debt: $${stats?.nationalDebt}B
- Corruption: ${stats?.corruptionLevel}%

Current Cabinet Ministers:
${ministers ? ministers.map((m: any) => `- ${m.name} (${m.role}): Competence ${m.competence}/100, Loyalty ${m.loyalty}/100, Corruption ${m.corruptionLevel}/100`).join('\n') : 'None'}

Current Parliament Seats (Out of 500):
${parliamentSeats ? Object.entries(parliamentSeats).map(([party, seats]) => `- ${party}: ${seats} seats`).join('\n') : 'Unknown'}

The player has enacted the following policy: "${policy}"

Evaluate the realistic short-term economic and political effect of this policy. 
If the policy is stupid, ridiculous, or harmful, be extremely blunt and critical in the mediaReaction and headline.

Respond in valid JSON format ONLY with the following structure:
{
  "headline": "A short, punchy newspaper headline reacting to the policy",
  "mediaReaction": "A brutal, opinionated 1-2 sentence editorial reaction from the media. If the law is bullshit, call it out.",
  "cabinetReaction": "A direct quote from one of the specific Cabinet Ministers reacting to the policy. Make sure they act according to their role and loyalty/corruption.",
  "partyReactions": "A 1-2 sentence summary of how the major political parties in parliament are reacting.",
  "economicEffect": "1-2 sentences explaining the economic consequences",
  "statsDiff": {
    "gdpPerCapita": <number, diff e.g. -500 or 200>,
    "unemployment": <number, diff e.g. -0.5 or 1.2>,
    "inflation": <number, diff e.g. -0.2 or 0.8>,
    "nationalDebt": <number, diff e.g. 10 or -5>,
    "treasury": <number, diff e.g. -20 or 50>,
    "corruptionLevel": <number, diff e.g. -2 or 3>
  },
  "factionDiffs": {
    "workingClass": <number, diff e.g. 5 or -10>,
    "middleClass": <number, diff>,
    "business": <number, diff>,
    "military": <number, diff>,
    "religious": <number, diff>,
    "youth": <number, diff>
  }
}
Keep the diffs reasonable for a single policy.
    `;

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-8b',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
        }
      });
      
      const jsonText = response.text || "{}";
      const data = JSON.parse(jsonText);

      return NextResponse.json(data);
    } catch (aiError) {
      console.warn("AI generation failed:", aiError);
      return NextResponse.json(
        { error: 'Failed to connect to the Gemini API. Please ensure GEMINI_API_KEY is set in your .env.local file.' }, 
        { status: 502 }
      );
    }

  } catch (error) {
    console.error("Policy evaluation error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
