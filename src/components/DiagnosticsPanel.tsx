/**
 * DiagnosticsPanel — Sprint 3
 * --------------------------------
 * Displays the _diagnostics payload attached by gemini.ts after generation.
 * Read-only. Collapsible. Skipped entirely if no diagnostics provided.
 *
 * Usage:
 *   <DiagnosticsPanel diagnostics={result?._diagnostics} />
 */

import { useState } from 'react';

export interface GenerationDiagnostics {
  gimmickLeaks: { artist: string; token: string; matchedIn: string }[];
  harmonicViolations: { kind: 'anti-pattern' | 'low-coverage'; detail: string }[];
  globalStripCount: number;
  retried: boolean;
  appliedHarmonicProfile?: string | null;
  appliedCursors?: {
    compositionMode?: string;
    registerMode?: string;
    conceptualMode?: string;
    technicityMode?: string;
    honorCode?: string;
    tempoGravity?: string;
    referenceDensity?: number;
    territorialAnchor?: { lang: string; density: number; role?: string } | null;
  } | null;
}

interface Props {
  diagnostics?: GenerationDiagnostics | null;
}

export default function DiagnosticsPanel({ diagnostics }: Props) {
  const [open, setOpen] = useState(false);
  if (!diagnostics) return null;

  const { gimmickLeaks, harmonicViolations, globalStripCount, retried, appliedHarmonicProfile, appliedCursors } = diagnostics;
  const cursorSummary = appliedCursors ? [
    appliedCursors.compositionMode,
    appliedCursors.registerMode,
    appliedCursors.technicityMode,
    appliedCursors.tempoGravity,
    appliedCursors.honorCode && appliedCursors.honorCode !== 'none' ? `honor:${appliedCursors.honorCode}` : null,
    appliedCursors.territorialAnchor && appliedCursors.territorialAnchor.lang !== 'none'
      ? `${appliedCursors.territorialAnchor.lang}:${appliedCursors.territorialAnchor.density}%`
      : null,
  ].filter(Boolean).join(' · ') : '';
  const leakCount = gimmickLeaks?.length || 0;
  const violationCount = harmonicViolations?.length || 0;
  const hasIssue = leakCount > 0 || violationCount > 0 || globalStripCount > 0 || retried;

  // Status pill color
  const pill = leakCount > 0
    ? 'bg-red-500/20 text-red-300 border-red-500/40'
    : violationCount > 0
      ? 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40'
      : globalStripCount > 0 || retried
        ? 'bg-blue-500/20 text-blue-300 border-blue-500/40'
        : 'bg-green-500/20 text-green-300 border-green-500/40';

  const label = leakCount > 0
    ? `${leakCount} leak${leakCount > 1 ? 's' : ''}`
    : violationCount > 0
      ? `${violationCount} harmonic warning${violationCount > 1 ? 's' : ''}`
      : globalStripCount > 0
        ? `${globalStripCount} stripped`
        : retried ? 'auto-corrected' : 'clean';

  return (
    <div className="mt-3 rounded-lg border border-zinc-700 bg-zinc-900/60 text-xs">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="flex w-full items-center justify-between px-3 py-2 hover:bg-zinc-800/60 transition"
      >
        <span className="flex items-center gap-2 font-mono text-zinc-300">
          <span>⚙</span>
          <span>Diagnostics</span>
          <span className={`rounded-full border px-2 py-0.5 text-[10px] ${pill}`}>{label}</span>
          {retried && <span className="text-blue-300 text-[10px]">↻ retried</span>}
        </span>
        <span className="text-zinc-500">{open ? '▾' : '▸'}</span>
      </button>

      {open && hasIssue && (
        <div className="border-t border-zinc-800 px-3 py-2 space-y-2">
          {leakCount > 0 && (
            <div>
              <div className="font-mono text-red-300 mb-1">Gimmick leaks ({leakCount})</div>
              <ul className="space-y-1 text-zinc-400">
                {gimmickLeaks.slice(0, 12).map((l, i) => (
                  <li key={i} className="font-mono">
                    <span className="text-red-400">{l.artist}</span>
                    <span className="text-zinc-500"> · </span>
                    <span className="text-zinc-200">{l.token}</span>
                    {l.matchedIn && l.matchedIn !== l.token && (
                      <span className="text-zinc-600"> — “{l.matchedIn}”</span>
                    )}
                  </li>
                ))}
                {gimmickLeaks.length > 12 && (
                  <li className="text-zinc-500">… +{gimmickLeaks.length - 12} more</li>
                )}
              </ul>
            </div>
          )}

          {violationCount > 0 && (
            <div>
              <div className="font-mono text-yellow-300 mb-1">Harmonic violations ({violationCount})</div>
              <ul className="space-y-1 text-zinc-400">
                {harmonicViolations.map((v, i) => (
                  <li key={i} className="font-mono">
                    <span className="text-yellow-400">{v.kind}</span>
                    <span className="text-zinc-500"> · </span>
                    <span className="text-zinc-200">{v.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {globalStripCount > 0 && (
            <div className="text-blue-300">
              Hard-stripped {globalStripCount} global-banlist token{globalStripCount > 1 ? 's' : ''} (mère/maman family).
            </div>
          )}
        </div>
      )}

      {open && !hasIssue && (
        <div className="border-t border-zinc-800 px-3 py-2 text-zinc-500">
          No leaks, no harmonic violations, no retry needed.
        </div>
      )}

      {open && (appliedHarmonicProfile || cursorSummary) && (
        <div className="border-t border-zinc-800 px-3 py-2 text-[10px] text-zinc-500 font-mono flex flex-wrap gap-x-3 gap-y-1">
          {appliedHarmonicProfile && (
            <span>🎛 Profile: <span className="text-zinc-300">{appliedHarmonicProfile}</span></span>
          )}
          {cursorSummary && (
            <span>Cursors: <span className="text-zinc-300">{cursorSummary}</span></span>
          )}
        </div>
      )}
    </div>
  );
}
