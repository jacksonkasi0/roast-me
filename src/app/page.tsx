"use client";

import React from "react";

// ** import components
import URLInputSection from "@/components/URLInputSection";
import RoastCard from "@/components/RoastCard";
import SocialShareBar from "@/components/SocialShareBar";

// ** import types
import { RoastResponse } from "@/type";

const Home = () => {
  const [roastData, setRoastData] = React.useState<RoastResponse | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleRoastGenerate = (url: string) => {
    try {
      setIsLoading(true);
      const response: RoastResponse = {
        avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=default",
        username: "GithubRoaster",
        roastText: "Your code is so clean, it makes Marie Kondo jealous! 🧹✨",
      };
      setRoastData(response);
    } catch (error) {
      console.error("Error generating roast:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleShare = (platform: "twitter" | "linkedin") => {
    console.log(`Sharing to ${platform}`);

    const content = roastData?.roastText;
    // ** Implement share logic for twitter
    if (platform === "twitter") {
      window.open(`https://twitter.com/intent/tweet?text=${content}`);
    } else {
      // ** Implement share logic for linkedin
      window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${content}`
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          GitHub Roast Generator
        </h1>
        <p className="text-gray-600 max-w-2xl">
          Enter a GitHub README URL and let our AI roast it with style!
        </p>
      </header>

      <main className="w-full max-w-4xl space-y-8">
        <URLInputSection onSubmit={handleRoastGenerate} isLoading={isLoading} />

        {roastData && (
          <div className="transition-all duration-300 ease-in-out">
            <RoastCard {...roastData} />
          </div>
        )}
      </main>

      <SocialShareBar onShare={handleShare} />

      <footer className="mt-12 text-center text-gray-500 text-sm">
        <p>Made with 🔥 by the GitHub Roast Generator team</p>
      </footer>
    </div>
  );
};

export default Home;
