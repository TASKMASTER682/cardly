"use client";

import { CardSettings, CARD_BG_PRESETS, NAME_COLOR_PRESETS, HANDLE_COLOR_PRESETS } from "@/lib/types";
import { THEMES, ASPECT_RATIOS } from "@/lib/themes";
import type { Platform } from "./CardStudio";

interface CustomizationPanelProps {
  settings: CardSettings;
  onChange: (patch: Partial<CardSettings>) => void;
  platform?: Platform;
}

function ToggleRow({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div
      role="switch"
      tabIndex={0}
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      onKeyDown={(e) => {
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          onChange(!checked);
        }
      }}
      className="flex items-center justify-between py-3 sm:py-2 text-sm sm:text-base text-cloud cursor-pointer select-none min-h-[48px]"
    >
      <span className="pr-3">{label}</span>
      <div
        className={`toggle-switch pointer-events-none relative h-[26px] w-12 sm:h-[22px] sm:w-10 rounded-full transition-colors flex-shrink-0 ${
          checked ? "bg-brass" : "bg-ink-line"
        }`}
      >
        <span
          className={`absolute top-[3px] left-[3px] h-5 w-5 sm:h-4 sm:w-4 rounded-full bg-cloud shadow-sm transition-transform ${
            checked ? "translate-x-[20px] sm:translate-x-[18px]" : "translate-x-0"
          }`}
        />
      </div>
    </div>
  );
}

export default function CustomizationPanel({
  settings,
  onChange,
  platform = "twitter",
}: CustomizationPanelProps) {
  return (
    <section aria-labelledby="customize-heading" className="space-y-6">
      <h2 id="customize-heading" className="font-display text-xl text-cloud">
        2. Style your card
      </h2>

      {/* Theme swatches */}
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-cloud-muted">
          Background
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
          {THEMES.map((theme) => (
            <button
              key={theme.id}
              onClick={() =>
                onChange(
                  theme.suggestedBg
                    ? { themeId: theme.id, cardBg: theme.suggestedBg }
                    : { themeId: theme.id }
                )
              }
              aria-pressed={settings.themeId === theme.id}
              aria-label={theme.label}
              className={`group flex flex-col items-center gap-1.5 rounded-lg transition-all min-h-[80px] ${
                settings.themeId === theme.id
                  ? "scale-[1.03]"
                  : "opacity-80 hover:opacity-100"
              }`}
            >
              <span
                className={`block h-14 sm:h-16 w-full rounded-lg border-2 transition-colors ${
                  theme.background
                } ${
                  settings.themeId === theme.id
                    ? "border-brass"
                    : "border-transparent"
                }`}
                style={{
                  ...(theme.swatchBackground ? { background: theme.swatchBackground } : {}),
                  ...(theme.swatchShadow ? { boxShadow: theme.swatchShadow } : {}),
                }}
              />
              <span
                className={`w-full truncate text-center text-[10px] sm:text-xs leading-tight ${
                  settings.themeId === theme.id
                    ? "font-semibold text-brass"
                    : "text-cloud-muted"
                }`}
              >
                {theme.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Card background */}
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-cloud-muted">
          Card Background
        </p>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 min-w-0">
          {CARD_BG_PRESETS.map((preset) => (
            <button
              key={preset.value}
              onClick={() => onChange({ cardBg: preset.value })}
              title={preset.label}
              aria-label={`Background: ${preset.label}`}
              className={`h-10 w-10 sm:h-8 sm:w-8 rounded-lg border-2 transition-all ${
                settings.cardBg === preset.value
                  ? "border-brass scale-110"
                  : "border-ink-line/60 hover:border-cloud-muted"
              }`}
              style={{
                background: preset.value === "transparent"
                  ? "repeating-conic-gradient(#3A3745 0% 25%, #15141C 0% 50%) 50% / 12px 12px"
                  : preset.value,
              }}
            />
          ))}
          <label className="relative h-10 w-10 sm:h-8 sm:w-8 cursor-pointer rounded-lg border-2 border-ink-line/60 transition-all hover:border-cloud-muted has-[:checked]:border-brass has-[:checked]:scale-110">
            <input
              type="color"
              value={settings.cardBg === "transparent" ? "#E9E4D8" : settings.cardBg}
              onChange={(e) => onChange({ cardBg: e.target.value })}
              className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
              aria-label="Custom background color"
            />
            <div className="flex h-full w-full items-center justify-center rounded-lg text-xs text-cloud-muted">
              +
            </div>
          </label>
        </div>
      </div>

      {/* Name & handle colors */}
      <div className="space-y-3">
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-cloud-muted">
            Name color
          </p>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 min-w-0">
            {NAME_COLOR_PRESETS.map((preset) => (
              <button
                key={preset.value || "theme"}
                onClick={() => onChange({ authorNameColor: preset.value })}
                title={preset.label}
                aria-label={`Name color: ${preset.label}`}
                className={`h-9 w-9 sm:h-7 sm:w-7 rounded-full border-2 transition-all ${
                  settings.authorNameColor === preset.value
                    ? "border-brass scale-110"
                    : "border-ink-line/60 hover:border-cloud-muted"
                }`}
                style={{
                  background: preset.value || "#F3F1EA",
                }}
              />
            ))}
            <label className="relative h-9 w-9 sm:h-7 sm:w-7 cursor-pointer rounded-full border-2 border-ink-line/60 transition-all hover:border-cloud-muted has-[:checked]:border-brass has-[:checked]:scale-110">
              <input
                type="color"
                value={settings.authorNameColor || "#FFFFFF"}
                onChange={(e) => onChange({ authorNameColor: e.target.value })}
                className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                aria-label="Custom name color"
              />
              <div className="flex h-full w-full items-center justify-center rounded-full text-[10px] text-cloud-muted">
                +
              </div>
            </label>
          </div>
        </div>

        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-cloud-muted">
            Handle color
          </p>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 min-w-0">
            {HANDLE_COLOR_PRESETS.map((preset) => (
              <button
                key={preset.value || "theme"}
                onClick={() => onChange({ authorHandleColor: preset.value })}
                title={preset.label}
                aria-label={`Handle color: ${preset.label}`}
                className={`h-9 w-9 sm:h-7 sm:w-7 rounded-full border-2 transition-all ${
                  settings.authorHandleColor === preset.value
                    ? "border-brass scale-110"
                    : "border-ink-line/60 hover:border-cloud-muted"
                }`}
                style={{
                  background: preset.value || "#A29FB0",
                }}
              />
            ))}
            <label className="relative h-9 w-9 sm:h-7 sm:w-7 cursor-pointer rounded-full border-2 border-ink-line/60 transition-all hover:border-cloud-muted has-[:checked]:border-brass has-[:checked]:scale-110">
              <input
                type="color"
                value={settings.authorHandleColor || "#A29FB0"}
                onChange={(e) => onChange({ authorHandleColor: e.target.value })}
                className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                aria-label="Custom handle color"
              />
              <div className="flex h-full w-full items-center justify-center rounded-full text-[10px] text-cloud-muted">
                +
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="rounded-xl border border-ink-line/60 px-4 py-3 space-y-3">
        <ToggleRow
          label="Show image"
          checked={settings.showImage}
          onChange={(v) => onChange({ showImage: v })}
        />
        {settings.showImage && (
          <div className="space-y-3">
            <input
              type="url"
              value={settings.imageUrl}
              onChange={(e) => onChange({ imageUrl: e.target.value })}
              placeholder="https://example.com/image.jpg"
              className="w-full rounded-lg border border-ink-line/60 bg-ink-soft px-3 py-3 text-sm text-cloud outline-none placeholder:text-cloud-muted focus:border-brass min-h-[48px]"
            />
            <label
              className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-ink-line/60 bg-ink-soft px-3 py-3 text-sm text-cloud hover:border-brass transition-colors min-h-[48px]"
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                const file = e.dataTransfer.files?.[0];
                if (!file || !file.type.startsWith("image/")) return;
                const reader = new FileReader();
                reader.onloadend = () => onChange({ imageUrl: reader.result as string });
                reader.readAsDataURL(file);
              }}
            >
              <input
                type="file"
                accept="image/*"
                className="sr-only"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  const reader = new FileReader();
                  reader.onloadend = () => onChange({ imageUrl: reader.result as string });
                  reader.readAsDataURL(file);
                }}
                aria-label="Upload image"
              />
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              Upload image — or paste a URL above
            </label>
          </div>
        )}
      </div>

      {platform === "linkedin" && (
        <div>
          <div className="flex items-center justify-between text-xs text-cloud-muted mb-1">
            <span>Content preview</span>
            <span>
              {settings.truncateLength >= 100
                ? "Full content"
                : `${settings.truncateLength}%`}
            </span>
          </div>
<input
              type="range"
              min={10}
              max={100}
              step={5}
              value={settings.truncateLength}
              onChange={(e) => onChange({ truncateLength: Number(e.target.value) })}
              className="w-full h-8 accent-brass"
              aria-label="Content preview length"
            />
          <p className="mt-1 text-xs text-cloud-muted/70">
            Lower values cut the post early, ending with dots.
          </p>
        </div>
      )}

      {/* Aspect ratio */}
      <div>
        <label htmlFor="aspect-ratio" className="mb-2 block text-xs font-medium uppercase tracking-wide text-cloud-muted">
          Aspect ratio
        </label>
        <select
          id="aspect-ratio"
          value={settings.aspectRatio}
          onChange={(e) => onChange({ aspectRatio: e.target.value as CardSettings["aspectRatio"] })}
          className="w-full rounded-lg border border-ink-line/60 bg-ink-soft px-3 py-3 text-sm text-cloud outline-none focus:border-brass min-h-[48px]"
        >
          {ASPECT_RATIOS.map((r) => (
            <option key={r.id} value={r.id}>
              {r.label}
            </option>
          ))}
        </select>
      </div>

      {/* Sliders */}
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-xs text-cloud-muted mb-1">
            <span>Text size</span>
            <span>{settings.fontSize}px</span>
          </div>
          <input
            type="range"
            min={14}
            max={36}
            value={settings.fontSize}
            onChange={(e) => onChange({ fontSize: Number(e.target.value) })}
            className="w-full h-8 accent-brass"
            aria-label="Text size"
          />
        </div>
        <div>
          <div className="flex justify-between text-xs text-cloud-muted mb-1">
            <span>Rounded corners</span>
            <span>{settings.cornerRadius}px</span>
          </div>
          <input
            type="range"
            min={0}
            max={48}
            value={settings.cornerRadius}
            onChange={(e) => onChange({ cornerRadius: Number(e.target.value) })}
            className="w-full h-8 accent-brass"
            aria-label="Corner radius"
          />
        </div>
        <div>
          <div className="flex justify-between text-xs text-cloud-muted mb-1">
            <span>Shadow intensity</span>
            <span>{settings.shadowIntensity}%</span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={settings.shadowIntensity}
            onChange={(e) => onChange({ shadowIntensity: Number(e.target.value) })}
            className="w-full h-8 accent-brass"
            aria-label="Shadow intensity"
          />
        </div>
      </div>

      {/* Metric toggles */}
      <div className="rounded-xl border border-ink-line/60 px-4 divide-y divide-ink-line/40">
        <ToggleRow label="Show avatar" checked={settings.showAvatar} onChange={(v) => onChange({ showAvatar: v })} />
        <ToggleRow label="Show likes & reposts" checked={settings.showMetrics} onChange={(v) => onChange({ showMetrics: v })} />
        <ToggleRow label="Show date" checked={settings.showDate} onChange={(v) => onChange({ showDate: v })} />
        <ToggleRow
          label={platform === "linkedin" ? "Show LinkedIn logo" : "Show Twitter/X logo"}
          checked={settings.showLogo}
          onChange={(v) => onChange({ showLogo: v })}
        />
        <ToggleRow label={`Show "${settings.brandingText}"`} checked={settings.showBranding} onChange={(v) => onChange({ showBranding: v })} />
      </div>
    </section>
  );
}
