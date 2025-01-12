export const openShareLink = (
  platform: "twitter" | "linkedin",
  content: string
) => {
  const shareUrls: Record<typeof platform, string> = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      content
    )}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      content
    )}`,
  };
  window.open(shareUrls[platform], "_blank");
};
