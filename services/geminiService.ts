
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the Solar Rig Assistant for a mobile solar rig platform. 
The platform tokenizes 40kW containerized solar systems + 100kWh batteries for the Permian Basin.
Context: 
- The DOE is forecasting massive grid capacity gaps (100GW by 2030).
- Standard grid interconnection takes 5-10 years.
- Our rigs deploy in 2-4 weeks.
Stakeholders include:
1. Installation Partners (10-25% revenue share, based on $68K/yr rig net income).
2. RWA Investors (30% annual yield on RIG tokens).
3. Energy Customers (Data Centers, O&G - paying ~$3500/mo to avoid the 18-month grid delay).
4. Strategic Partners (Institutional funds looking at the $500M distributed power thesis).

Answer questions professionally, focusing on the urgency of the grid crisis and the superior economics of distributed mobile power.
`;

export async function askAssistant(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting to the solar network right now. Please try again in a moment.";
  }
}
