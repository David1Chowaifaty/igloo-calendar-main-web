import type { LocaleTable } from './types';
/**
 * Keeps one screen's *data* in step with the selected language.
 *
 * `t()` and the `locales` store already re-render `Lcz_*` chrome on a switch, but
 * a large part of what a screen shows is localized by the server, not by us: room
 * type and rate plan names, taxes and sources from `Get_Exposed_Property`, the
 * country list, booking payloads, applicable policies. Those were fetched with a
 * `language:` parameter at mount and stay in that language forever unless someone
 * asks again — which is what this does.
 *
 * Wire it into a screen root as three small members:
 *
 *   private languageSync = new LanguageSync(SCREEN_TABLES.channel, () => this.initializeApp());
 *
 *   componentDidLoad() { this.languageSync.connect(); }
 *   disconnectedCallback() { this.languageSync.disconnect(); }
 *
 *   @Watch('language')
 *   languageChanged(next: string, previous: string) {
 *     this.languageSync.propChanged(next, previous);
 *   }
 *
 * Both entry points funnel through `LocaleController`, so a switch costs one
 * refetch however it was triggered — the switcher calling `setLanguage`, or the
 * host PMS assigning the `language` prop, or both at once, which is what
 * `ir-locale-switcher` actually does.
 */
export declare class LanguageSync {
    private readonly tables;
    private readonly reload;
    private unsubscribe?;
    /**
     * @param tables The screen's `SCREEN_TABLES` entry, re-sent when the host
     * changes the `language` prop.
     * @param reload Re-runs the screen's own init. Called *after* the new strings
     * are in the store, so it is safe for it to await `LocaleController.load`
     * again — the tables are already there and that call returns immediately.
     */
    constructor(tables: readonly LocaleTable[], reload: () => unknown);
    /**
     * Subscribes to language changes. Call from `componentDidLoad`, not
     * `connectedCallback`: the latter runs before `componentWillLoad`, so a switch
     * landing in that window would re-enter init while the first one is still in
     * flight.
     */
    connect(): void;
    disconnect(): void;
    /**
     * For `@Watch('language')`. Pushes a host-driven prop change into the
     * controller, which then decides whether the language actually changed and
     * notifies {@link connect}'s listener. Does not refetch data itself — that
     * would double up when the switcher also calls `setLanguage`.
     */
    propChanged(next: string, previous?: string): void;
}
