import { Fraunces, Manrope } from "next/font/google";

// Self-hosted Google Fonts at build time — zero runtime dependency on fonts.googleapis.com.
// Fraunces: display serif, variable 100–900 (roman + italic — hero uses italic).
// Manrope:  body sans,    variable 200–800 (author name uses 800).
export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  preload: true,
});

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  preload: true,
});