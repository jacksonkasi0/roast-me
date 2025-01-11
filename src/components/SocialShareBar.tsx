import React from "react";
import { Button } from "./ui/button";
import { Share2, Twitter, Linkedin } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface SocialShareBarProps {
  onShare?: (platform: "twitter" | "linkedin") => void;
}

const SocialShareBar = ({
  onShare = (platform) => console.log(`Sharing to ${platform}`),
}: SocialShareBarProps) => {
  return (
    <div className="w-full bg-white border-t border-gray-200 p-4 flex justify-end items-center space-x-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => onShare("twitter")}>
            <Twitter className="h-4 w-4 mr-2" />
            Share on Twitter
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onShare("linkedin")}>
            <Linkedin className="h-4 w-4 mr-2" />
            Share on LinkedIn
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SocialShareBar;
