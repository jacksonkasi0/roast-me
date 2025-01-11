import { openai } from "@/config/llm";

/**
 * Generates a humorous roast based on GitHub README content
 * 
 * @param readmeContent - The content of the GitHub README.md file
 * @returns Promise<string> A funny roast message with emojis
 * @throws {Error} If no response is received from the LLM
 * 
 * @example
 * const roast = await generateRoast("# Hi 👋 I'm Jackson...");
 * // Returns: "🔍 Another developer who starts their README with 'Hi 👋'... How original! 😜"
 */
export const generateRoast = async (readmeContent: string): Promise<string> => {
  // Crafting a more specific and structured prompt
 const prompt = `
    Context: You are a hilarious and witty code reviewer who specializes in creating playful and funny roasts with emojis.
    
    Task: Create a playful roast based on the following README content. The roast should:
    - Be friendly and light-hearted
    - Include relevant emojis
    - Reference specific content from their README
    - Keep it under 1-2 lines
    - End with an encouraging note
    
    README Content:
    ${readmeContent}
    
    Generate a roast:
  `.trim();

  try {
    const completion = await openai.chat.completions.create({
      model: "Meta-Llama-3.1-8B-Instruct",
      messages: [
        {
          role: "system",
                 content: "You are a hilarious and witty code reviewer who specializes in creating playful and funny roasts with emojis. Your roasts should be light-hearted, reference specific content from the README, and end with an encouraging note."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.8, // Slightly creative but not too random
      max_tokens: 150,  // Keep responses concise
    });

    const responseContent = completion.choices[0]?.message?.content;
    if (!responseContent) {
      throw new Error("No response content returned from LLM");
    }

    return responseContent;

  } catch (error) {
    console.error("Error generating roast:", error);
    return "🤖 Oops! My roasting circuits are a bit fuzzy right now. Try again later! 😅";
  }
};