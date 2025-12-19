
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the Scout Rig Assistant for Scout Rig Inc., building modular power stations for energy independence.
Our mission is based on self-reliance, preparation, and community service.

Products:
1. Scout Compass: Proprietary AI Sun Tracking System (+30% yield).
2. Scout Station 100 (8kW), 200 (12kW), 300 (16kW).
3. Scout Dashboard: Cloud monitoring & SaaS.

Key Context:
- Solving the DOE's 100 GW grid capacity gap.
- We deploy in 2 weeks vs. 5-10 years for grid.
- Our Station 100 beta case study (West Texas) targets $1,021/year savings.
- Pricing/ROI: Phase 1 total $2,659. Monthly rental $150.
- 90-day "No-Loss Guarantee" beta period.

Voice: Professional, accessible, reliable, Boy Scout principles. Focus on ROI, independence, and technical reliability (Starlink built-in, 48V LiFePO4 batteries).
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
    return "I'm having trouble connecting to the Scout network right now. Please try again in a moment.";
  }
}
