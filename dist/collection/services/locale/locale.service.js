import axios from "axios";
import { ExposedLanguageResultSchema } from "./types";
/**
 * The `Get_Exposed_Language` endpoint, and nothing else.
 *
 * Deliberately stateless and free of store writes — `LocaleController` owns the
 * caching and the `locales` store. Keep it that way so the service stays
 * trivially testable.
 */
export class LocaleService {
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
    async getExposedLanguage(code, sections) {
        const { data } = await axios.post(`https://gateway.igloorooms.com/IRBE/Get_Exposed_Language`, { code, sections });
        if (data.ExceptionMsg) {
            throw new Error(data.ExceptionMsg);
        }
        const result = ExposedLanguageResultSchema.parse(data.My_Result ?? {});
        return {
            entries: this.toEntryRecord(result),
            direction: String(result.direction).toLowerCase() === 'rtl' ? 'rtl' : 'ltr',
        };
    }
    /**
     * Flattens the `{ code, description }[]` response into a lookup keyed by code.
     *
     * 34 keys are declared in more than one table (`Lcz_Cancel` in all six), so a
     * multi-table request can carry the same code twice. Last one wins — fine while
     * the values agree, which for shared words like "Cancel" they should. Warns when
     * they don't, so a genuine per-table divergence surfaces instead of silently
     * depending on response order.
     */
    toEntryRecord(result) {
        const entries = {};
        for (const entry of result.entries ?? []) {
            if (!entry?.code) {
                continue;
            }
            const description = entry.description ?? '';
            const existing = entries[entry.code];
            if (existing !== undefined && existing !== description) {
                console.warn(`[locale] "${entry.code}" differs between tables: "${existing}" vs "${description}" — using the latter.`);
            }
            entries[entry.code] = description;
        }
        return entries;
    }
}
