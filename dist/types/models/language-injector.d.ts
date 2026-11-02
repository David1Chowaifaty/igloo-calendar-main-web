import { type InternalAxiosRequestConfig } from 'axios';
export declare function injectLanguage(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig;
/**
 * Gives every request on the shared axios instance the selected language — in the body,
 * or the query string for GET/HEAD — read per request through `language` so calls follow
 * a language switch without each service threading it through. Independent of
 * authentication: it does not need a ticket or an `ApiClient`.
 *
 * An explicit non-empty value wins: components inside a `lang` subtree pass
 * `LocaleController.languageFor(el)` themselves.
 *
 * Installed by `ir-interceptor`, and by `LocaleController` as soon as it loads — a screen
 * root fires its first requests from `componentWillLoad`, before its `<ir-interceptor>`
 * child has loaded, and it always reaches `LocaleController` first. Takes the language as
 * a callback rather than importing `LocaleController`, which would make that a cycle.
 * Idempotent; the first caller's `language` wins.
 *
 * Not from `src/global/app.ts`: `LocaleController` pulls in the locale store, which must
 * not be created in the global-script bundle (see the note there).
 */
export declare function installLanguageInjector(language: () => string): void;
