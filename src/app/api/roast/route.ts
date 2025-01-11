import { NextRequest, NextResponse } from "next/server";

// ** import third-party lib
import axios from "axios";

// ** import lib
import { generateRoast } from "@/lib/generate-roast-content";

// ** import type
import { RoastResponse } from "@/type";


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
    const readmeResponse = await axios.get(readmeUrl);
    const roast = await generateRoast(readmeResponse.data);

    const userProfileUrl = `https://api.github.com/users/${username}`;
    const userProfileResponse = await axios.get(userProfileUrl);
    const avatarUrl = userProfileResponse.data.avatar_url;

    const response_data: RoastResponse = {
      username,
      avatarUrl,
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