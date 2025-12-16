import localFont from "next/font/local";
import { Crimson_Pro } from "next/font/google"

export const craftworkGrotesk = localFont({
  src: [
    { path: "./fonts/CraftworkGrotesk-Regular.ttf", style: "normal" },
    { path: "./fonts/CraftworkGrotesk-Medium.ttf", style: "normal" },
    { path: "./fonts/CraftworkGrotesk-SemiBold.ttf", style: "normal" },
    { path: "./fonts/CraftworkGrotesk-Bold.ttf",     weight: "700", style: "normal" },
  ],
  variable: "--font-cg",
  display: "swap",
  preload: true,
});

export const CG_STACK =
  'var(--font-cg), system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

  export const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-crimson",
  display: "swap",
});

