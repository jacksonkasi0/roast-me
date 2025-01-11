import OpenAI from "openai";

// Initialize OpenAI SDK
export const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: "https://api.sambanova.ai/v1",
});