// src/utils/browserHistory.ts
// Common parsers/serializers
export const ParamTypes = {
    string: {
        parse: (v) => v ?? '',
        serialize: (v) => v,
    },
    number: {
        parse: (v) => {
            if (v == null || v === '')
                return NaN;
            const n = Number(v);
            return isNaN(n) ? NaN : n;
        },
        serialize: (v) => String(v),
    },
    boolean: {
        parse: (v) => v === 'true',
        serialize: (v) => (v ? 'true' : 'false'),
    },
};
/**
 * Read a single search‑param, parse it, and return a typed value.
 * Falls back to defaultValue if missing or parse fails.
 */
export function getParam(key, { parse }, defaultValue) {
    const params = new URLSearchParams(window.location.search);
    const raw = params.get(key);
    try {
        if (raw == null)
            return defaultValue;
        return parse(raw);
    }
    catch {
        return defaultValue;
    }
}
/** Helpers for the three built‑in types */
export function getStringParam(key, defaultValue = '') {
    return getParam(key, ParamTypes.string, defaultValue);
}
export function getNumberParam(key, defaultValue = NaN) {
    return getParam(key, ParamTypes.number, defaultValue);
}
export function getBooleanParam(key, defaultValue = false) {
    return getParam(key, ParamTypes.boolean, defaultValue);
}
/**
 * Read all current search params into a Record<string, string>
 */
export function getAllParams() {
    const params = new URLSearchParams(window.location.search);
    const out = {};
    for (const [key, value] of params.entries()) {
        out[key] = value;
    }
    return out;
}
/**
 * Update one or more search params.
 * Pass null to delete a param.
 * By default uses history.pushState; set replace: true to call replaceState.
 */
export function setParams(updates, options = {}) {
    const params = new URLSearchParams(window.location.search);
    for (const [key, value] of Object.entries(updates)) {
        if (!value) {
            params.delete(key);
        }
        else {
            params.set(key, String(value));
        }
    }
    const newSearch = params.toString();
    const newUrl = window.location.pathname + (newSearch ? `?${newSearch}` : '') + window.location.hash;
    if (options.replace) {
        window.history.replaceState(window.history.state, '', newUrl);
    }
    else {
        window.history.pushState(window.history.state, '', newUrl);
    }
}
/**
 * Push a new history entry.
 * `path` may include search or hash.
 * `state` is the history state object.
 */
export function pushHistory(path, state = {}) {
    window.history.pushState(state, '', path);
}
/**
 * Replace the current history entry.
 * `path` may include search or hash.
 * `state` is the history state object.
 */
export function replaceHistory(path, state = {}) {
    window.history.replaceState(state, '', path);
}
//# sourceMappingURL=browserHistory.js.map
