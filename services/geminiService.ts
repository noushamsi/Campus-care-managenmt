
import { GoogleGenAI, Type } from "@google/genai";

const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
};

export const getTriageAdvice = async (userInput: string) => {
  const ai = getAIClient();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: userInput,
    config: {
      systemInstruction: "You are a professional campus care assistant. Your goal is to provide empathetic, initial triage for student health or mental well-being concerns. If a situation seems life-threatening, always advise calling emergency services (911). Otherwise, suggest appropriate campus resources (Counseling center, Health clinic, Academic advising). Keep responses concise and supportive.",
    },
  });
  return response.text;
};

export const analyzeCaseSymptom = async (description: string) => {
  const ai = getAIClient();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Analyze this student health report: "${description}"`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          urgency: {
            type: Type.STRING,
            description: 'One of: Low, Medium, High, Critical',
          },
          suggestedCategory: {
            type: Type.STRING,
            description: 'e.g., Mental Health, Physical Health, Academic Distress',
          },
          summary: {
            type: Type.STRING,
            description: 'A 20-word summary of the issue.',
          },
        },
        required: ["urgency", "suggestedCategory", "summary"],
      },
    },
  });
  return JSON.parse(response.text || '{}');
};
