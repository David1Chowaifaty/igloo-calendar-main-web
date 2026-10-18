/** `My_Result` of `IsAuthenticated_JSON` — only the fields the login flow reads are typed. */
export interface LegacyUserInfo {
    Ticket: string;
    OwnerID: number;
    IsRequireOTP?: boolean;
    [key: string]: unknown;
}
/** `My_Result` of `Get_Startup_Data`, keyed as the backend sends it. */
export interface LegacyStartupData {
    My_SetupEntries: unknown;
    My_Languages: unknown;
    My_Currencies: unknown;
    My_Countries: unknown;
    My_Hotel_chain: unknown;
    My_Food_arrangement_light: unknown;
    My_Card: unknown;
    My_Amenity_light: unknown;
    My_Bedding_light: unknown;
    My_Gw: unknown;
}
/**
 * The back-office login endpoints of the app's own WCF service (`AppWCF.svc`),
 * called the way `ajaxHelper` / `prepareApiUri` in `js/CommonLibrary.js` call them:
 * `POST {apiUrl}{method}?Ticket={ticket}` with a JSON body.
 *
 * Uses its own axios instance on purpose — the shared one carries the gateway
 * base URL and `ApiClient`'s `Authorization` interceptor, neither of which this
 * service understands.
 *
 * Stateless and free of storage writes — `ir-auth` owns the flow and persists
 * what the rest of the extranet reads from `localStorage`.
 */
export declare class LegacyAuthService {
    private http;
    /** @param apiUrl The WCF base, e.g. `AppWCF.svc/` (relative to the page) or `_apiUri`. */
    constructor(apiUrl: string);
    isAuthenticated({ username, password }: {
        username: string;
        password: string;
    }): Promise<LegacyUserInfo>;
    /** The server returns an Int64; compare it as a string against what `localStorage` holds. */
    getStartupDataSignature(ownerId: number, ticket: string): Promise<number | string>;
    getStartupData(ownerId: number, language: string, ticket: string): Promise<LegacyStartupData>;
    /** Mails the password of `username`. Resolves to the (masked) address it was sent to. */
    forgotPassword(username: string): Promise<string>;
    forgotUsername(email: string): Promise<unknown>;
    private request;
}
