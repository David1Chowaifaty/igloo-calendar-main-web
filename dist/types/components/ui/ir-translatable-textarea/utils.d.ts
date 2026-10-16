import type { TextDirection, TranslatableLanguage, TranslatableTextareaLabels, TranslationMap } from './types';
export declare const DEFAULT_LABELS: TranslatableTextareaLabels;
/** Replaces `{key}` placeholders. Unknown keys are left as-is. */
export declare function format(template: string, params: Record<string, string | number>): string;
export declare function isFilled(text: string | null | undefined): boolean;
export declare function resolveLanguageName(code: string, label?: string, displayLocale?: string): string;
export declare function resolveDir(code: string, dir?: TextDirection): TextDirection;
/** The translation targets: every available language except the default one, in the given order, without duplicates. */
export declare function targetLanguages(available: TranslatableLanguage[], defaultLanguage: string): TranslatableLanguage[];
export declare function findLanguage(languages: TranslatableLanguage[] | null | undefined, code: string): TranslatableLanguage;
/**
 * Web Awesome redeclares `lang`/`dir` as non-reflecting properties, so binding them in JSX never reaches the
 * attributes — and WA reads direction and locale from the attributes on the component itself. Set them directly.
 */
export declare function applyLanguageAttributes(el: Element | null | undefined, code: string, dir: TextDirection): void;
/**
 * Merges edited translations into the saved value. Blank translations are dropped so the map only holds real text;
 * the default language is never touched here.
 */
export declare function applyDraft(value: TranslationMap, draft: TranslationMap, defaultLanguage: string): {
    next: TranslationMap;
    changed: string[];
};
