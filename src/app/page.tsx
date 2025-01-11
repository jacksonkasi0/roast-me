"use client";

import React from "react";

// ** import components
import URLInputSection from "@/components/URLInputSection";
import RoastCard from "@/components/RoastCard";
import SocialShareBar from "@/components/SocialShareBar";

interface HomeProps {
  onRoastGenerate?: (url: string) => void;
  isLoading?: boolean;
  error?: string;
  roastData?: {
    avatarUrl?: string;
    username?: string;
    roastText?: string;
    timestamp?: string;
  };
}

const Home = ({
  onRoastGenerate = (url) => console.log("Generating roast for:", url),
  isLoading = false,
  error = "",
  roastData = {
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=default",
    username: "GithubRoaster",
    roastText: "Your code is so clean, it makes Marie Kondo jealous! 🧹✨",
    timestamp: new Date().toISOString(),
  },
}: HomeProps) => {
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
        <URLInputSection
          onSubmit={onRoastGenerate}
          isLoading={isLoading}
          error={error}
        />

        {roastData && (
          <div className="transition-all duration-300 ease-in-out">
            <RoastCard />
          </div>
        )}
      </main>

      <SocialShareBar />

      <footer className="mt-12 text-center text-gray-500 text-sm">
        <p>Made with 🔥 by the GitHub Roast Generator team</p>
      </footer>
    </div>
  );
};

export default Home;
