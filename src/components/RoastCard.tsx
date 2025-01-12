import React, { useEffect, useState } from "react";

// ** Import icons
import { Heart, MessageCircle, Twitter, Share2, Linkedin } from "lucide-react";

// ** Import components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// ** Import types
import { RoastResponse } from "@/type";

interface RoastCardProps extends RoastResponse {
  onShare?: (platform: "twitter" | "linkedin") => void; // Share handler
}

const RoastCard: React.FC<RoastCardProps> = ({
  avatarUrl,
  username,
  roastText,
  onShare,
}) => {
  const [likesCount, setLikesCount] = useState<number>(0);
  const [commentsCount, setCommentsCount] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    // Generate random counts for likes and comments
    const randomLikes = Math.floor(Math.random() * 1000) + 100;
    const randomComments = Math.floor(Math.random() * 200) + 10;
    setLikesCount(randomLikes);
    setCommentsCount(randomComments);

    // Get the current time
    const now = new Date();
    const formattedTime = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    setCurrentTime(formattedTime);
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-black p-10 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-800 p-4 rounded-xl border max-w-xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              className="h-11 w-11 rounded-full"
              src={avatarUrl}
              alt="Avatar"
            />
            <div className="ml-1.5 text-sm leading-tight">
              <span className="text-black dark:text-white font-bold block">
                {username}
              </span>
              <span className="text-gray-500 dark:text-gray-400 font-normal block">
                @{username.toLowerCase().replace(/\s+/g, "")}
              </span>
            </div>
          </div>

          {/* Share Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="flex items-center justify-center p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                aria-label="Share"
              >
                <Share2 className="text-gray-600 dark:text-gray-400 h-5 w-5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => onShare?.("twitter")}>
                <Twitter className="h-4 w-4 mr-2" />
                Share on Twitter
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onShare?.("linkedin")}>
                <Linkedin className="h-4 w-4 mr-2" />
                Share on LinkedIn
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <p className="text-black dark:text-white block text-xl leading-snug mt-3">
          {roastText}
        </p>

        <p className="text-gray-500 dark:text-gray-400 text-base py-1 my-0.5">
          {currentTime} ·{" "}
          {new Date().toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </p>

        <div className="border-gray-200 dark:border-gray-600 border border-b-0 my-1"></div>

        <div className="text-gray-500 dark:text-gray-400 flex mt-3">
          <div className="flex items-center mr-6">
            <Heart className="h-5 w-auto" />
            <span className="ml-3">{likesCount}</span>
          </div>
          <div className="flex items-center mr-6">
            <MessageCircle className="h-5 w-auto" />
            <span className="ml-3">
              {commentsCount} people are Tweeting about this
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoastCard;
