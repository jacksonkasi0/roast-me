import { NextRequest, NextResponse } from "next/server";

// ** Import third-party lib
import axios from "axios";

// ** Import lib
import { generateRoast } from "@/lib/generate-roast-content";

// ** Import type
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
    // Normalize the GitHub link
    const cleanedLink = githubLink.replace(/\/+$/, ""); // Remove trailing slashes
    const parts = cleanedLink.split("github.com/")[1]?.split("/");

    if (!parts || parts.length < 1) {
      return NextResponse.json(
        { roast: "Invalid GitHub link format." },
        { status: 400 }
      );
    }

    // Extract username and possibly repo name
    const username = parts[0];
    const repoName = parts.length > 1 ? parts[1] : null;

    // Determine the URL to fetch the README
    let readmeUrl: string;
    if (repoName) {
      readmeUrl = `https://raw.githubusercontent.com/${username}/${repoName}/master/README.md`;
    } else {
      // If it's just a profile URL, generate a placeholder roast
      return NextResponse.json(
        { roast: "GitHub profile links do not contain README.md files." },
        { status: 400 }
      );
    }

    // Fetch the README.md content
    const readmeResponse = await axios.get(readmeUrl);

    // Generate the roast based on the README content
    const roast = await generateRoast(readmeResponse.data);

    // Fetch the user profile
    const userProfileUrl = `https://api.github.com/users/${username}`;
    const userProfileResponse = await axios.get(userProfileUrl);
    const avatarUrl = userProfileResponse.data.avatar_url;

    // Prepare the response
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
