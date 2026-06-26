import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({}); 

export async function POST(req: Request) {
  try {
    const { countryName, startYear, endYear, stats, factions, playerTraits, headlines } = await req.json();

    const overallApproval = Math.round((factions.workingClass + factions.middleClass + factions.business + factions.military + factions.religious + factions.youth) / 6);
    const yearsSurvived = endYear - startYear;

    const prompt = `
You are a historian writing a 2-paragraph retrospective on the rule of the player over ${countryName || 'the nation'}.
Their reign lasted from ${startYear} to ${endYear} (${yearsSurvived} years).
Their final statistics were:
- GDP per Capita: $${stats?.gdpPerCapita}
- National Debt: $${stats?.nationalDebt}B
- Final Approval Rating: ${overallApproval}%
- Casualties from War: ${stats?.casualties}
- Leader Traits: ${playerTraits?.join(', ') || 'None'}

Some notable recent headlines from their rule:
${headlines.slice(0, 5).map((h: string) => `- ${h}`).join('\n')}

Write a brutal, honest historical summary of their legacy. 
If they had massive casualties, call them a warmonger. 
If their approval was terrible, call them a despised tyrant. 
If they survived 20 years with high GDP, praise them as an economic genius.
Do not use Markdown. Just return plain text, exactly two paragraphs.
`;

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-8b',
        contents: prompt
      });
      
      const text = response.text || "History will remember this leader for their mysterious and abruptly ended reign.";
      return NextResponse.json({ epitaph: text });
    } catch (aiError) {
      console.warn("AI generation failed:", aiError);
      return NextResponse.json(
        { error: 'Failed to connect to the Gemini API. Please ensure GEMINI_API_KEY is set in your .env.local file.' }, 
        { status: 502 }
      );
    }

  } catch (error) {
    console.error("Epitaph generation error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
