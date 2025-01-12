import React from "react";
import { Github } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface URLInputSectionProps {
  onSubmit?: (url: string) => void;
  isLoading?: boolean;
}

const URLInputSection: React.FC<URLInputSectionProps> = ({
  onSubmit,
  isLoading,
}) => {
  const [url, setUrl] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) onSubmit(url);
  };

  return (
    <Card className="w-full max-w-[600px] p-6 bg-white dark:bg-gray-800 shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center space-x-2 mb-2">
          <Github className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Enter GitHub README URL
          </h2>
        </div>

        <div className="flex space-x-2">
          <Input
            type="url"
            placeholder="https://github.com/username/repo#readme"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1"
            required
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            {isLoading ? "Loading..." : "Roast Me!"}
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default URLInputSection;
