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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center py-6 px-4">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
          GitHub Roast Generator
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          Paste a GitHub README URL and let our AI roast it with style.
        </p>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-3xl space-y-4">
        {/* Input Section */}
        <URLInputSection onSubmit={handleRoastGenerate} isLoading={isLoading} />

        {/* Roast Card */}
        {roastData && (
          <RoastCard {...roastData} onShare={handleShare} />
        )}
      </main>

      {/* Footer */}
      <footer className="mt-8 text-center text-gray-500 dark:text-gray-400 text-xs">
        <p>
          ⚠️ This project is for fun and entertainment purposes only. No harm
          intended.
        </p>
        <p className="mt-1">
          Made with 🔥 GitHub copilot by Jackson Kasi.
        </p>
      </footer>
    </div>
  );
};

export default Home;
