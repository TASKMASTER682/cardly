import { AspectRatioOption, CardTheme } from "./types";

// Seven preset backgrounds. Each is a deliberate palette, not a random gradient —
// chosen to read well behind both light and dark tweet text.
export const THEMES: CardTheme[] = [
  {
    id: "sunset",
    label: "Sunset",
    background: "bg-gradient-to-br from-[#FF7A5C] via-[#FF4D8D] to-[#7B2FF7]",
    textClass: "text-white",
    accentClass: "text-[#FFE3D0]",
        logoClass: "text-white",
  },
  {
    id: "cyberpunk",
    label: "Dark Cyberpunk",
    background: "bg-gradient-to-br from-[#0A0E27] via-[#1A0B3D] to-[#2D0A4E]",
    textClass: "text-[#E4FBFF]",
    accentClass: "text-[#00F0FF]",
        logoClass: "text-[#00F0FF]",
  },
  {
    id: "minimalist",
    label: "Minimalist",
    background: "bg-[#F5F4F0]",
    textClass: "text-[#14131B]",
    accentClass: "text-[#6B6656]",
        logoClass: "text-[#14131B]",
  },
  {
    id: "pastel",
    label: "Soft Pastel",
    background: "bg-gradient-to-br from-[#FDE2E4] via-[#E2ECE9] to-[#BEE1E6]",
    textClass: "text-[#3D3A4B]",
    accentClass: "text-[#8A6FA8]",
        logoClass: "text-[#8A6FA8]",
  },
  {
    id: "glass",
    label: "Glassmorphism",
    background: "bg-gradient-to-br from-white/35 via-white/18 to-white/8 backdrop-blur-[60px]",
    cardClass: "border border-white/55",
    glowShadow:
      "0 0 45px rgba(255,255,255,0.22), inset 0 2px 1px rgba(255,255,255,0.55)",
    swatchBackground:
      "linear-gradient(rgba(255,255,255,0.35), rgba(255,255,255,0.08)), linear-gradient(135deg, #6D83F2, #8F6FF2, #39C3E6)",
    textClass: "text-[#111827]",
    accentClass: "text-[#374151]",
        logoClass: "text-[#1F2937]",
  },
  {
    id: "neon",
    label: "Neon",
    background: "bg-gradient-to-br from-[#0D0221] via-[#190A34] to-[#0D0221]",
    textClass: "text-[#F5F5FF]",
    accentClass: "text-[#FF2ED0]",
        logoClass: "text-[#FF2ED0]",
  },
  {
    id: "neumorph",
    label: "Neumorphism",
    background: "bg-[#E6EAF0]",
    shadow:
      "10px 10px 22px rgba(160,172,192,0.55), -10px -10px 22px rgba(255,255,255,0.85)",
    swatchShadow:
      "5px 5px 10px rgba(0,0,0,0.5), -4px -4px 10px rgba(255,255,255,0.15)",
    suggestedBg: "#E6EAF0",
    avatarClass:
      "border-2 border-white/50 shadow-[6px_6px_14px_rgba(160,172,192,0.55),_-6px_-6px_14px_rgba(255,255,255,0.9)]",
    bodyClass:
      "rounded-2xl px-5 py-4 shadow-[inset_6px_6px_12px_rgba(160,172,192,0.5),_inset_-6px_-6px_12px_rgba(255,255,255,0.9)]",
    imageClass:
      "rounded-2xl border-4 border-white/60 shadow-[6px_6px_14px_rgba(160,172,192,0.55),_-6px_-6px_14px_rgba(255,255,255,0.9)]",
    chipClass:
      "rounded-full px-3 py-1 shadow-[inset_3px_3px_6px_rgba(160,172,192,0.5),_inset_-3px_-3px_6px_rgba(255,255,255,0.9)]",
    textClass: "text-[#1F2937]",
    accentClass: "text-[#5B6472]",
        logoClass: "text-[#5B6472]",
  },
];

export const ASPECT_RATIOS: AspectRatioOption[] = [
  { id: "square", label: "1:1 — Instagram / Facebook Post", ratio: 1 },
  { id: "portrait", label: "4:5 — Instagram Feed", ratio: 4 / 5 },
  { id: "landscape", label: "16:9 — YouTube / Twitter / LinkedIn", ratio: 16 / 9 },
  { id: "pinterest", label: "2:3 — Pinterest Pin", ratio: 2 / 3 },
  { id: "standard", label: "4:3 — Classic / Facebook", ratio: 4 / 3 },
];

export function getTheme(id: string): CardTheme {
  return THEMES.find((t) => t.id === id) ?? THEMES[0];
}

export function getAspectRatio(id: string): AspectRatioOption {
  return ASPECT_RATIOS.find((r) => r.id === id) ?? ASPECT_RATIOS[0];
}
