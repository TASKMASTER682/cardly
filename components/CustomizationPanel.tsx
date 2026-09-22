"use client";

import { CardSettings, CARD_BG_PRESETS, NAME_COLOR_PRESETS, HANDLE_COLOR_PRESETS } from "@/lib/types";
import { THEMES, ASPECT_RATIOS } from "@/lib/themes";

interface CustomizationPanelProps {
  settings: CardSettings;
  onChange: (patch: Partial<CardSettings>) => void;
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
      className="flex items-center justify-between py-2 text-sm text-cloud cursor-pointer select-none"
    >
      <span>{label}</span>
      <div
        className={`toggle-switch pointer-events-none relative h-[22px] w-10 rounded-full transition-colors ${
          checked ? "bg-brass" : "bg-ink-line"
        }`}
      >
        <span
          className={`absolute top-[3px] h-4 w-4 rounded-full bg-cloud shadow-sm transition-transform ${
            checked ? "translate-x-[18px]" : "translate-x-[3px]"
          }`}
        />
      </div>
    </div>
  );
}

export default function CustomizationPanel({
  settings,
  onChange,
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
        <div className="grid grid-cols-3 gap-2">
          {THEMES.map((theme) => (
            <button
              key={theme.id}
              onClick={() => onChange({ themeId: theme.id })}
              aria-pressed={settings.themeId === theme.id}
              aria-label={theme.label}
              className={`h-14 rounded-lg ${theme.background} border-2 transition-all ${
                settings.themeId === theme.id
                  ? "border-brass scale-[1.03]"
                  : "border-transparent opacity-80 hover:opacity-100"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Card background */}
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-cloud-muted">
          Card Background
        </p>
        <div className="flex flex-wrap items-center gap-2">
          {CARD_BG_PRESETS.map((preset) => (
            <button
              key={preset.value}
              onClick={() => onChange({ cardBg: preset.value })}
              title={preset.label}
              aria-label={`Background: ${preset.label}`}
              className={`h-8 w-8 rounded-lg border-2 transition-all ${
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
          <label className="relative h-8 w-8 cursor-pointer rounded-lg border-2 border-ink-line/60 transition-all hover:border-cloud-muted has-[:checked]:border-brass has-[:checked]:scale-110">
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
          <div className="flex flex-wrap items-center gap-2">
            {NAME_COLOR_PRESETS.map((preset) => (
              <button
                key={preset.value || "theme"}
                onClick={() => onChange({ authorNameColor: preset.value })}
                title={preset.label}
                aria-label={`Name color: ${preset.label}`}
                className={`h-7 w-7 rounded-full border-2 transition-all ${
                  settings.authorNameColor === preset.value
                    ? "border-brass scale-110"
                    : "border-ink-line/60 hover:border-cloud-muted"
                }`}
                style={{
                  background: preset.value || "#F3F1EA",
                }}
              />
            ))}
            <label className="relative h-7 w-7 cursor-pointer rounded-full border-2 border-ink-line/60 transition-all hover:border-cloud-muted has-[:checked]:border-brass has-[:checked]:scale-110">
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
          <div className="flex flex-wrap items-center gap-2">
            {HANDLE_COLOR_PRESETS.map((preset) => (
              <button
                key={preset.value || "theme"}
                onClick={() => onChange({ authorHandleColor: preset.value })}
                title={preset.label}
                aria-label={`Handle color: ${preset.label}`}
                className={`h-7 w-7 rounded-full border-2 transition-all ${
                  settings.authorHandleColor === preset.value
                    ? "border-brass scale-110"
                    : "border-ink-line/60 hover:border-cloud-muted"
                }`}
                style={{
                  background: preset.value || "#A29FB0",
                }}
              />
            ))}
            <label className="relative h-7 w-7 cursor-pointer rounded-full border-2 border-ink-line/60 transition-all hover:border-cloud-muted has-[:checked]:border-brass has-[:checked]:scale-110">
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

      {/* Aspect ratio */}
      <div>
        <label htmlFor="aspect-ratio" className="mb-2 block text-xs font-medium uppercase tracking-wide text-cloud-muted">
          Aspect ratio
        </label>
        <select
          id="aspect-ratio"
          value={settings.aspectRatio}
          onChange={(e) => onChange({ aspectRatio: e.target.value as CardSettings["aspectRatio"] })}
          className="w-full rounded-lg border border-ink-line/60 bg-ink-soft px-2 py-2 text-sm text-cloud outline-none focus:border-brass"
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
            <span>Rounded corners</span>
            <span>{settings.cornerRadius}px</span>
          </div>
          <input
            type="range"
            min={0}
            max={48}
            value={settings.cornerRadius}
            onChange={(e) => onChange({ cornerRadius: Number(e.target.value) })}
            className="w-full"
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
            className="w-full"
            aria-label="Shadow intensity"
          />
        </div>
      </div>

      {/* Metric toggles */}
      <div className="rounded-xl border border-ink-line/60 px-4 divide-y divide-ink-line/40">
        <ToggleRow label="Show avatar" checked={settings.showAvatar} onChange={(v) => onChange({ showAvatar: v })} />
        <ToggleRow label="Show likes & reposts" checked={settings.showMetrics} onChange={(v) => onChange({ showMetrics: v })} />
        <ToggleRow label="Show date" checked={settings.showDate} onChange={(v) => onChange({ showDate: v })} />
        <ToggleRow label={`Show "${settings.brandingText}"`} checked={settings.showBranding} onChange={(v) => onChange({ showBranding: v })} />
      </div>
    </section>
  );
}
