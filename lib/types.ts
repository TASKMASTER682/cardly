// Shared TypeScript contracts for the card generator.
// Kept in one file so the editor, preview, and API layer never drift apart.

export type ThemeId =
  | "sunset"
  | "cyberpunk"
  | "minimalist"
  | "pastel"
  | "glass"
  | "neon"
  | "neumorph";

export interface CardTheme {
  id: ThemeId;
  label: string;
  /** Tailwind-compatible background gradient classes applied to the card frame. */
  background: string;
  /** Extra classes applied only to the preview card (not the theme swatch). */
  cardClass?: string;
  /** Extra box-shadow layers merged into the card drop shadow (e.g. glass glow). */
  glowShadow?: string;
  /** Full box-shadow replacement for the card (e.g. neumorphic dual shadows). */
  shadow?: string;
  /** Box-shadow for the picker swatch (e.g. raised neumorphic tile). */
  swatchShadow?: string;
  /** Frame background applied when this theme is selected (keeps effects like neumorphism matching). */
  suggestedBg?: string;
  /** Extra classes for the avatar container (e.g. neumorphic raised ring). */
  avatarClass?: string;
  /** Extra classes for the body text block (e.g. sunken neumorphic well). */
  bodyClass?: string;
  /** Extra classes for a media image (e.g. neumorphic raised frame). */
  imageClass?: string;
  /** Extra classes for each date/metric chip (e.g. pressed neumorphic pills). */
  chipClass?: string;
  /** Classes for the top-right X logo (color matched to the theme). */
  logoClass?: string;
  /** Composite CSS background for the picker swatch (overrides `background`). */
  swatchBackground?: string;
  /** Text color classes for the tweet body inside this theme. */
  textClass: string;
  /** Accent color used for links / handle text. */
  accentClass: string;
}

export type AspectRatioId = "square" | "portrait" | "landscape" | "pinterest" | "standard";

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
  /** Embedded media image (LinkedIn posts often ship one). */
  mediaUrl?: string;
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
  showLogo: boolean;
  showBranding: boolean;
  brandingText: string;
  fontSize: number; // px, controls tweet text size so content fits the ratio
  cardBg: string; // CSS color for the outer box behind the card
  authorNameColor: string; // CSS color for author name
  authorHandleColor: string; // CSS color for author handle
  showImage: boolean; // show a media image between the author row and the body
  imageUrl: string; // URL of the media image shown in the card
  truncateLength: number; // % of body to show (10-100); 100 = full content
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
  showLogo: true,
  showBranding: true,
  brandingText: "Made with Frame Posting",
  fontSize: 22,
  cardBg: "linear-gradient(135deg, #FF6B35, #F7C948, #FF6B6B)",
  authorNameColor: "",
  authorHandleColor: "",
  showImage: false,
  imageUrl: "",
  truncateLength: 100,
};

export const DEFAULT_TWEET: TweetData = {
  authorName: "Aiden Cross",
  authorHandle: "@aidencross",
  avatarUrl: "https://api.dicebear.com/7.x/notionists/svg?seed=aiden-cross",
  body: "Good design is invisible until you try to remove it. Then you feel every missing pixel.",
  createdAt: new Date().toISOString(),
  metrics: { likes: 128400, reposts: 9820, replies: 640 },
};
