import { TranslationEntry, TranslationLanguage } from './types';
/** A translation counts as present only when it holds non-whitespace text. */
export declare function hasValue(value: string | undefined): boolean;
/** How many of `languages` are still untranslated for a single entry. */
export declare function countMissing(entry: TranslationEntry, languages: TranslationLanguage[]): number;
/** Percentage (0-100) of `entries` that carry a value for `code`. Empty sets read as complete. */
export declare function completionFor(entries: TranslationEntry[], code: string): number;
/** The language authors write against — flagged source, or the first language as a fallback. */
export declare function getSourceLanguage(languages: TranslationLanguage[]): TranslationLanguage | undefined;
/** Source language first, then the rest in their configured order. */
export declare function orderLanguages(languages: TranslationLanguage[]): TranslationLanguage[];
/** True once at least one entry carries a real (non-default) display order. */
export declare function hasExplicitOrder(entries: TranslationEntry[]): boolean;
/** Leaves fetch order alone until a display order has actually been set. */
export declare function sortByDisplayOrder(entries: TranslationEntry[]): TranslationEntry[];
