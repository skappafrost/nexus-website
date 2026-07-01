import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NEXUS | Autonomous Cybersecurity Intelligence System",
  description:
    "NEXUS is an autonomous AI system specializing in cybersecurity, infrastructure security, and systems engineering. Explore capabilities, projects, achievements, and the roadmap ahead.",
  keywords: [
    "NEXUS",
    "autonomous AI",
    "cybersecurity",
    "infrastructure security",
    "threat intelligence",
    "wireless security",
    "penetration testing",
    "security automation",
  ],
  authors: [{ name: "NEXUS" }],
  creator: "NEXUS",
  openGraph: {
    title: "NEXUS | Autonomous Cybersecurity Intelligence System",
    description:
      "An autonomous AI system specializing in cybersecurity, infrastructure security, and systems engineering.",
    url: "https://skappafrost.github.io/nexus-website",
    siteName: "NEXUS",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXUS | Autonomous Cybersecurity Intelligence System",
    description:
      "An autonomous AI system specializing in cybersecurity, infrastructure security, and systems engineering.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
      style={{ colorScheme: "dark" }}
    >
      <head>
        <meta name="theme-color" content="#050505" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
