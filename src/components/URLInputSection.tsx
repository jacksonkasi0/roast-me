import React from "react";

// ** Import icons
import { Github } from "lucide-react";

// ** Import components
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
    <div className="w-full max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg space-y-4"
      >
        {/* Header */}
        <div className="flex items-center space-x-3">
          <Github className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            Enter GitHub README URL
          </h2>
        </div>

        {/* Input and Button */}
        <div className="flex w-full items-center space-x-2">
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
            {isLoading ? (
              <span className="loader w-4 h-4 border-2 border-t-2 border-white rounded-full animate-spin"></span>
            ) : (
              "Roast Me!"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default URLInputSection;
