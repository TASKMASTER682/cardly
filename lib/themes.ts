import { AspectRatioOption, CardTheme } from "./types";

// Six preset backgrounds. Each is a deliberate palette, not a random gradient —
// chosen to read well behind both light and dark tweet text.
export const THEMES: CardTheme[] = [
  {
    id: "sunset",
    label: "Sunset",
    background: "bg-gradient-to-br from-[#FF7A5C] via-[#FF4D8D] to-[#7B2FF7]",
    textClass: "text-white",
    accentClass: "text-[#FFE3D0]",
  },
  {
    id: "cyberpunk",
    label: "Dark Cyberpunk",
    background: "bg-gradient-to-br from-[#0A0E27] via-[#1A0B3D] to-[#2D0A4E]",
    textClass: "text-[#E4FBFF]",
    accentClass: "text-[#00F0FF]",
  },
  {
    id: "minimalist",
    label: "Minimalist",
    background: "bg-[#F5F4F0]",
    textClass: "text-[#14131B]",
    accentClass: "text-[#6B6656]",
  },
  {
    id: "pastel",
    label: "Soft Pastel",
    background: "bg-gradient-to-br from-[#FDE2E4] via-[#E2ECE9] to-[#BEE1E6]",
    textClass: "text-[#3D3A4B]",
    accentClass: "text-[#8A6FA8]",
  },
  {
    id: "glass",
    label: "Glassmorphism",
    background: "bg-gradient-to-br from-[#6D83F2]/70 via-[#8F6FF2]/60 to-[#39C3E6]/70 backdrop-blur-2xl",
    textClass: "text-white",
    accentClass: "text-[#DCE6FF]",
  },
  {
    id: "neon",
    label: "Neon",
    background: "bg-gradient-to-br from-[#0D0221] via-[#190A34] to-[#0D0221]",
    textClass: "text-[#F5F5FF]",
    accentClass: "text-[#FF2ED0]",
  },
];

export const ASPECT_RATIOS: AspectRatioOption[] = [
  { id: "square", label: "1:1 — Instagram / Facebook Post", ratio: 1 },
  { id: "portrait", label: "4:5 — Instagram Feed", ratio: 4 / 5 },
  { id: "landscape", label: "16:9 — YouTube / Twitter / LinkedIn", ratio: 16 / 9 },
  { id: "vertical", label: "9:16 — Reels / Shorts / TikTok / Stories", ratio: 9 / 16 },
  { id: "pinterest", label: "2:3 — Pinterest Pin", ratio: 2 / 3 },
  { id: "standard", label: "4:3 — Classic / Facebook", ratio: 4 / 3 },
];

export function getTheme(id: string): CardTheme {
  return THEMES.find((t) => t.id === id) ?? THEMES[0];
}

export function getAspectRatio(id: string): AspectRatioOption {
  return ASPECT_RATIOS.find((r) => r.id === id) ?? ASPECT_RATIOS[0];
}
