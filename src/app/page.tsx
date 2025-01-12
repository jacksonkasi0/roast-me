"use client";

import React from "react";

// ** Import components
import URLInputSection from "@/components/URLInputSection";
import RoastCard from "@/components/RoastCard";

// ** Import types and API functions
import { RoastResponse } from "@/type";
import { generateRoast } from "@/api/gen-roast";

// ** Import utilities
import { openShareLink } from "@/utils/shareUtils";

const Home = () => {
  const [roastData, setRoastData] = React.useState<RoastResponse | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  // ** Function to generate the roast
  const handleRoastGenerate = async (url: string) => {
    try {
      setIsLoading(true);
      const response: RoastResponse = await generateRoast(url);
      setRoastData(response);
    } catch (error) {
      console.error("Error generating roast:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // ** Share handler
  const handleShare = React.useCallback(
    (platform: "twitter" | "linkedin") => {
      const content = roastData?.roastText || "";
      openShareLink(platform, content);
    },
    [roastData]
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center py-12 px-4">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          GitHub Roast Generator
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
          Enter a GitHub README URL and let our AI roast it with style!
        </p>
      </header>

      <main className="w-full max-w-4xl space-y-8">
        {/* Input Section */}
        <URLInputSection onSubmit={handleRoastGenerate} isLoading={isLoading} />

        {/* Roast Card */}
        {roastData && (
          <div className="transition-all duration-300 ease-in-out">
            <RoastCard {...roastData} onShare={handleShare} />
          </div>
        )}
      </main>

      {/* Disclaimer */}
      <div className="mt-12 text-center text-gray-500 dark:text-gray-400 text-sm">
        <p>
          ⚠️ Disclaimer: This project is for fun and entertainment purposes
          only. We do not intend to hurt anyone's feelings.
        </p>
      </div>

      <footer className="mt-12 text-center text-gray-500 dark:text-gray-400 text-sm">
        <p>Made with 🔥 by the GitHub Roast Generator team</p>
      </footer>
    </div>
  );
};

export default Home;
