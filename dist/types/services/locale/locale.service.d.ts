import { type LocaleBundle, type LocaleSections } from './types';
/**
 * The `Get_Exposed_Language` endpoint, and nothing else.
 *
 * Deliberately stateless and free of store writes — `LocaleController` owns the
 * caching and the `locales` store. Keep it that way so the service stays
 * trivially testable.
 */
export declare class LocaleService {
    /**
     * Fetches the localized strings for `code` across `sections`.
     *
     * Posts an absolute URL: this endpoint lives on the IRBE gateway, not the `/IR`
     * base URL `ApiClient` installs. It still passes through the shared axios
     * interceptors, so a ticket must have been set via `ApiClient.setApiClient`
     * first or the request throws `MissingApiClientError`.
     *
     * @param code Language code, e.g. `'en'` or `'ar'`.
     * @param sections At least two setup tables — see {@link LocaleSections}.
     */
    getExposedLanguage(code: string, sections: LocaleSections): Promise<LocaleBundle>;
    /**
     * Flattens the `{ code, description }[]` response into a lookup keyed by code.
     *
     * 34 keys are declared in more than one table (`Lcz_Cancel` in all six), so a
     * multi-table request can carry the same code twice. Last one wins — fine while
     * the values agree, which for shared words like "Cancel" they should. Warns when
     * they don't, so a genuine per-table divergence surfaces instead of silently
     * depending on response order.
     */
    private toEntryRecord;
}
