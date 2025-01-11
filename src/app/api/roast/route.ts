import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { RoastResponse } from "@/type";

const generateRoast = async (readmeContent: string): Promise<string> => {
  // Placeholder function to simulate LLM analysis
  return `🔥 ... just kidding, but keep it up! 😜`;
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
    const readmeUrl = `https://raw.githubusercontent.com/${username}/${username}/master/README.md`;
    const response = await axios.get(readmeUrl);
    const roast = await generateRoast(response.data);

    const response_data: RoastResponse = {
      username,
      avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=default`,
      roastText: roast,
    };

    return NextResponse.json({ ...response_data }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { roast: "Failed to fetch README.md or generate roast." },
      { status: 500 }
    );
  }
}
