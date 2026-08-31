/** A translation counts as present only when it holds non-whitespace text. */
function hasValue(value) {
    return typeof value === 'string' && value.trim().length > 0;
}
/** How many of `languages` are still untranslated for a single entry. */
function countMissing(entry, languages) {
    return languages.reduce((total, language) => (hasValue(entry.values[language.code]) ? total : total + 1), 0);
}
/** Percentage (0-100) of `entries` that carry a value for `code`. Empty sets read as complete. */
function completionFor(entries, code) {
    if (entries.length === 0) {
        return 100;
    }
    const translated = entries.filter(entry => hasValue(entry.values[code])).length;
    return Math.round((translated / entries.length) * 100);
}
/** The language authors write against — flagged source, or the first language as a fallback. */
function getSourceLanguage(languages) {
    return languages.find(language => language.isSource) ?? languages[0];
}
/** Source language first, then the rest in their configured order. */
function orderLanguages(languages) {
    const source = getSourceLanguage(languages);
    if (!source) {
        return languages;
    }
    return [source, ...languages.filter(language => language.code !== source.code)];
}
/** True once at least one entry carries a real (non-default) display order. */
function hasExplicitOrder(entries) {
    return entries.some(entry => (entry.meta?.displayOrder ?? 0) !== 0);
}
/** Leaves fetch order alone until a display order has actually been set. */
function sortByDisplayOrder(entries) {
    if (!hasExplicitOrder(entries)) {
        return entries;
    }
    return [...entries].sort((a, b) => (a.meta?.displayOrder ?? 0) - (b.meta?.displayOrder ?? 0));
}

export { completionFor as a, countMissing as c, getSourceLanguage as g, hasValue as h, orderLanguages as o, sortByDisplayOrder as s };
