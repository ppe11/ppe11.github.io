/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NEXT_PUBLIC_GITHUB_PAGES === "true";

const nextConfig = {
  output: "export", // 👈 Ensures static export
  basePath: isGithubPages ? "/ppe11.github.io" : "", // 👈 Only set for GitHub Pages
  assetPrefix: isGithubPages ? "/ppe11.github.io" : "", // 👈 Fix assets only on GitHub Pages
  images: {
    unoptimized: true, // 👈 Prevents Next.js image optimization issues on GitHub Pages
  }
};

export default nextConfig;

  
  
  