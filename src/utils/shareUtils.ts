export const openShareLink = (
  platform: "twitter" | "linkedin",
  content: string,
  url: string = "https://roast-u.vercel.app/" // The link to share
) => {
  const shareUrls: Record<typeof platform, string> = {
    // Twitter Share URL
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `${content} ${url}` 
    )}`,
    
    // LinkedIn Share URL
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
      url // Share the URL
    )}&title=${encodeURIComponent("Check this out!")}&summary=${encodeURIComponent(
      content // Add content as the summary
    )}&source=${encodeURIComponent("GitHub Roast Generator")}`, // Optional source
  };

  // Open the share URL in a new tab
  window.open(shareUrls[platform], "_blank");
};
