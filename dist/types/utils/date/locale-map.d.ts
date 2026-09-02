import { CalendarSystem } from './types';
/**
 * Resolves the moment locale for a language + calendar pair, falling back to `en` for anything
 * unrecognised. Region-tagged input resolves to an exact match when one exists (`ar-MA` →
 * `ar-ma`) and otherwise falls back to the primary subtag (`en-GB` → `en`).
 */
export declare function toMomentLocale(language: string | null | undefined, calendar?: CalendarSystem): string;
