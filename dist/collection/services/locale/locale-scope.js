import { getElement, getRenderingRef } from "@stencil/core";
import { createStore } from "@stencil/store";
const scopes = new Map();
/** The store for `language`, created empty on first use so components can subscribe before it loads. */
export function getLocaleScope(language) {
    const key = language.toLowerCase();
    let scope = scopes.get(key);
    if (!scope) {
        scope = createStore({ entries: null, direction: 'ltr', status: 'idle' }).state;
        scopes.set(key, scope);
    }
    return scope;
}
/**
 * The `lang` set on the nearest ancestor below `<html>`, walking out of shadow roots to their
 * hosts. `undefined` when the element follows the document language.
 */
export function getLocalLanguage(el) {
    let node = el;
    while (node && node !== document.documentElement) {
        const lang = node.getAttribute('lang');
        if (lang)
            return lang.toLowerCase();
        node = node.parentElement ?? node.getRootNode().host ?? null;
    }
    return undefined;
}
/**
 * {@link getLocalLanguage} for the component whose `render()` is running right now — the same
 * hook `@stencil/store` uses to know who to re-render. `undefined` outside a render, which is
 * why `t()` calls in event handlers and validators need an explicit `language` option.
 */
export function getRenderingLanguage() {
    const ref = getRenderingRef();
    if (!ref)
        return undefined;
    try {
        const el = getElement(ref);
        return el ? getLocalLanguage(el) : undefined;
    }
    catch {
        return undefined;
    }
}
