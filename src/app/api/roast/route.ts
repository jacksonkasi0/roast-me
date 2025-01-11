import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const generateRoast = async (readmeContent: string): Promise<string> => {
  // Placeholder function to simulate LLM analysis
  return `🔥 ${readmeContent.slice(
    0,
    100
  )}... just kidding, but keep it up! 😜`;
};

export async function POST(request: NextRequest) {
  const { githubLink } = await request.json();

  if (!githubLink) {
    return NextResponse.json(
      { roast: "GitHub link is required." },
      { status: 400 }
    );
  }

  try {
    const username = githubLink.split("github.com/")[1];
    const readmeUrl = `https://raw.githubusercontent.com/${username}/master/README.md`;
    const response = await axios.get(readmeUrl);
    const roast = await generateRoast(response.data);

    return NextResponse.json({ roast }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { roast: "Failed to fetch README.md or generate roast." },
      { status: 500 }
    );
  }
}
