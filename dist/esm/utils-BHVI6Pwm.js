const DEFAULT_LABELS = {
    translate: 'Translate',
    editorTitle: 'Translate {field}',
    language: 'Language',
    reference: 'Reference',
    required: '{language} text is required.',
    emptyReference: 'No text in the default language yet.',
    save: 'Save',
    cancel: 'Cancel',
    discard: 'Discard changes',
};
/** Fallback for engines without `Intl.Locale#getTextInfo` / `textInfo` (Firefox). Matched on the primary subtag. */
const RTL_LANGUAGES = new Set(['ar', 'arc', 'ckb', 'dv', 'fa', 'he', 'ks', 'ps', 'sd', 'ug', 'ur', 'yi']);
/** Replaces `{key}` placeholders. Unknown keys are left as-is. */
function format(template, params) {
    return template.replace(/\{(\w+)\}/g, (match, key) => (key in params ? String(params[key]) : match));
}
function isFilled(text) {
    return typeof text === 'string' && text.trim() !== '';
}
function resolveLanguageName(code, label, displayLocale) {
    if (label)
        return label;
    try {
        const name = new Intl.DisplayNames(displayLocale ? [displayLocale] : undefined, { type: 'language' }).of(code);
        if (name && name !== code)
            return name.charAt(0).toLocaleUpperCase(displayLocale) + name.slice(1);
    }
    catch {
        // Invalid code or no Intl.DisplayNames support — fall through.
    }
    return code.toUpperCase();
}
function resolveDir(code, dir) {
    if (dir)
        return dir;
    try {
        const locale = new Intl.Locale(code);
        const direction = locale.getTextInfo?.().direction ?? locale.textInfo?.direction;
        if (direction === 'rtl' || direction === 'ltr')
            return direction;
    }
    catch {
        // Invalid code — fall through.
    }
    const normalized = code.toLowerCase();
    return RTL_LANGUAGES.has(normalized) || RTL_LANGUAGES.has(normalized.split('-')[0]) ? 'rtl' : 'ltr';
}
/** The translation targets: every available language except the default one, in the given order, without duplicates. */
function targetLanguages(available, defaultLanguage) {
    const seen = new Set([defaultLanguage]);
    return available.filter(language => !seen.has(language.code) && seen.add(language.code));
}
function findLanguage(languages, code) {
    return languages?.find(language => language.code === code) ?? { code };
}
/**
 * Web Awesome redeclares `lang`/`dir` as non-reflecting properties, so binding them in JSX never reaches the
 * attributes — and WA reads direction and locale from the attributes on the component itself. Set them directly.
 */
function applyLanguageAttributes(el, code, dir) {
    if (!el)
        return;
    if (el.getAttribute('lang') !== code)
        el.setAttribute('lang', code);
    if (el.getAttribute('dir') !== dir)
        el.setAttribute('dir', dir);
}
/**
 * Merges edited translations into the saved value. Blank translations are dropped so the map only holds real text;
 * the default language is never touched here.
 */
function applyDraft(value, draft, defaultLanguage) {
    const next = { ...value };
    const changed = [];
    for (const [code, text] of Object.entries(draft)) {
        if (code === defaultLanguage)
            continue;
        const before = value[code] ?? '';
        const after = isFilled(text) ? text : '';
        if (before === after)
            continue;
        changed.push(code);
        if (after)
            next[code] = after;
        else
            delete next[code];
    }
    return { next, changed };
}

export { DEFAULT_LABELS as D, resolveDir as a, applyLanguageAttributes as b, applyDraft as c, format as d, findLanguage as f, isFilled as i, resolveLanguageName as r, targetLanguages as t };
