import { NumberingSystem, NumberingSystemPreference } from './types';
export declare function resolveNumberingScript(locale: string, preference: NumberingSystemPreference): NumberingSystem;
/**
 * Rewrites every digit in `value` into `system`. Digits already in the target script are
 * unchanged, so this is safe to apply to mixed input and safe to apply twice.
 */
export declare function toNumerals(value: string, system: NumberingSystem): string;
/**
 * Forces Latin digits. Used at the API/identity boundary, where the output must be
 * machine-readable regardless of any display preference.
 */
export declare function toLatinDigits(value: string): string;
