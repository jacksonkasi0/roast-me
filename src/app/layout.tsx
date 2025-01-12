import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Roast Me - Generate Personalized Roasts from GitHub Profiles",
  description:
    "Roast Me is a fun application that generates personalized roasts based on your GitHub profile or repository README.md. Share your unique roasts with friends!",
  keywords: [
    "GitHub",
    "Roast",
    "GitHub Roast",
    "Profile Roast",
    "Repository Roast",
    "README.md",
    "Developer Humor",
    "AI Roast Generator",
  ],
  authors: [
    {
      name: "Jackson Kasi",
      url: "https://github.com/jacksonkasi0",
    },
  ],
  creator: "Jackson Kasi",
  openGraph: {
    title: "Roast Me - Generate Personalized Roasts from GitHub Profiles",
    description:
      "Roast Me is a fun application that generates personalized roasts based on your GitHub profile or repository README.md. Share your unique roasts with friends!",
    url: "https://roast-u.vercel.app/",
    siteName: "Roast Me",
    images: [
      {
        url: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/w7c2q82ef0w0p3qxvr1k.png", // Replace with your actual Open Graph image URL
        width: 1200,
        height: 630,
        alt: "Roast Me - Generate Personalized Roasts from GitHub Profiles",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roast Me - Generate Personalized Roasts from GitHub Profiles",
    description:
      "Roast Me is a fun application that generates personalized roasts based on your GitHub profile or repository README.md. Share your unique roasts with friends!",
    images: ["https://dev-to-uploads.s3.amazonaws.com/uploads/articles/w7c2q82ef0w0p3qxvr1k.png"], // Replace with your actual Twitter image URL
  },
  metadataBase: new URL("https://roast-u.vercel.app/"),
  alternates: {
    canonical: "https://roast-u.vercel.app/"
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
