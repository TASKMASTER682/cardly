// Shared TypeScript contracts for the card generator.
// Kept in one file so the editor, preview, and API layer never drift apart.

export type ThemeId =
  | "sunset"
  | "cyberpunk"
  | "minimalist"
  | "pastel"
  | "glass"
  | "neon";

export interface CardTheme {
  id: ThemeId;
  label: string;
  /** Tailwind-compatible background gradient classes applied to the card frame. */
  background: string;
  /** Text color classes for the tweet body inside this theme. */
  textClass: string;
  /** Accent color used for links / handle text. */
  accentClass: string;
}

export type AspectRatioId = "square" | "portrait" | "landscape" | "vertical" | "pinterest" | "standard";

export interface AspectRatioOption {
  id: AspectRatioId;
  label: string;
  /** width / height, used for the live preview frame. */
  ratio: number;
}

export interface TweetMetrics {
  likes: number;
  reposts: number;
  replies?: number;
}

export interface TweetData {
  authorName: string;
  authorHandle: string;
  avatarUrl: string;
  body: string;
  createdAt: string; // ISO date string
  metrics: TweetMetrics;
  sourceUrl?: string;
}

export type CardSourceType = "url" | "custom_text";

export interface CardSettings {
  themeId: ThemeId;
  aspectRatio: AspectRatioId;
  cornerRadius: number; // px, 0 - 48
  shadowIntensity: number; // 0 - 100
  showAvatar: boolean;
  showMetrics: boolean;
  showDate: boolean;
  showBranding: boolean;
  brandingText: string;
  cardBg: string; // CSS color for the outer box behind the card
  authorNameColor: string; // CSS color for author name
  authorHandleColor: string; // CSS color for author handle
}

export const NAME_COLOR_PRESETS: { label: string; value: string }[] = [
  { label: "Theme", value: "" },
  { label: "White", value: "#FFFFFF" },
  { label: "Black", value: "#000000" },
  { label: "Gold", value: "#C9962F" },
  { label: "Blue", value: "#1D9BF0" },
  { label: "Pink", value: "#FF6B6B" },
  { label: "Green", value: "#2ECC71" },
];

export const HANDLE_COLOR_PRESETS: { label: string; value: string }[] = [
  { label: "Theme", value: "" },
  { label: "White", value: "#FFFFFF" },
  { label: "Black", value: "#000000" },
  { label: "Gold", value: "#C9962F" },
  { label: "Blue", value: "#1D9BF0" },
  { label: "Pink", value: "#FF6B6B" },
  { label: "Green", value: "#2ECC71" },
];

export const CARD_BG_PRESETS: { label: string; value: string }[] = [
  { label: "Paper", value: "#E9E4D8" },
  { label: "White", value: "#FFFFFF" },
  { label: "Twitter Dark", value: "#15202B" },
  { label: "Sunset Glow", value: "linear-gradient(135deg, #FF6B35, #F7C948, #FF6B6B)" },
  { label: "Ocean Breeze", value: "linear-gradient(135deg, #0077B6, #00B4D8, #90E0EF)" },
  { label: "Cosmic Purple", value: "linear-gradient(135deg, #7B2FF7, #C471F5, #FA709A)" },
  { label: "Forest Dream", value: "linear-gradient(135deg, #134E5E, #2ECC71, #A8E6CF)" },
  { label: "Midnight Noir", value: "linear-gradient(135deg, #0F0C29, #302B63, #24243E)" },
  { label: "Peachy Coral", value: "linear-gradient(135deg, #FF9A9E, #FECFEF, #FFB7B2)" },
  { label: "None", value: "transparent" },
];

export const DEFAULT_SETTINGS: CardSettings = {
  themeId: "sunset",
  aspectRatio: "square",
  cornerRadius: 24,
  shadowIntensity: 55,
  showAvatar: true,
  showMetrics: true,
  showDate: true,
  showBranding: true,
  brandingText: "Made with Cardly",
  cardBg: "linear-gradient(135deg, #FF6B35, #F7C948, #FF6B6B)",
  authorNameColor: "",
  authorHandleColor: "",
};

export const DEFAULT_TWEET: TweetData = {
  authorName: "Aiden Cross",
  authorHandle: "@aidencross",
  avatarUrl: "https://api.dicebear.com/7.x/notionists/svg?seed=aiden-cross",
  body: "Good design is invisible until you try to remove it. Then you feel every missing pixel.",
  createdAt: new Date().toISOString(),
  metrics: { likes: 128400, reposts: 9820, replies: 640 },
};
