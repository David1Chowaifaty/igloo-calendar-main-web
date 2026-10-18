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
 * The legacy back-office login endpoints that `Default.js` used to reach through
 * `ajaxHelper`, with the exact payloads it sent.
 *
 * Stateless and free of storage writes — `ir-auth` owns the flow and persists
 * what the rest of the extranet reads from `localStorage`.
 */
export declare class LegacyAuthService {
    isAuthenticated({ username, password }: {
        username: string;
        password: string;
    }): Promise<LegacyUserInfo>;
    getStartupDataSignature(ownerId: number): Promise<string>;
    getStartupData(ownerId: number, language: string): Promise<LegacyStartupData>;
    /** Mails the password of `username`. Resolves to the (masked) address it was sent to. */
    forgotPassword(username: string): Promise<string>;
    forgotUsername(email: string): Promise<unknown>;
    private request;
}
