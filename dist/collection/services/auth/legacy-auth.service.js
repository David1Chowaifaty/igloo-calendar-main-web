import axios from "axios";
/** `ajaxHelper` retried a call this many times when the database reported a deadlock. */
const DEADLOCK_RETRIES = 3;
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
export class LegacyAuthService {
    http;
    /** @param apiUrl The WCF base, e.g. `AppWCF.svc/` (relative to the page) or `_apiUri`. */
    constructor(apiUrl) {
        this.http = axios.create({ baseURL: apiUrl.endsWith('/') ? apiUrl : `${apiUrl}/` });
    }
    async isAuthenticated({ username, password }) {
        return this.request('IsAuthenticated_JSON', {
            My_UserInfo: { UserName: username, Password: password },
            My_Enum_Authentication_Mode: 0,
            IS_BACK_OFFICE: true,
        });
    }
    /** The server returns an Int64; compare it as a string against what `localStorage` holds. */
    async getStartupDataSignature(ownerId, ticket) {
        return this.request('Get_Startup_Data_Signature', { OWNER_ID: ownerId }, ticket);
    }
    async getStartupData(ownerId, language, ticket) {
        return this.request('Get_Startup_Data', {
            IS_BACK_OFFICE: true,
            OWNER_ID: ownerId,
            LANGUAGE_ABBREVIATION: language,
        }, ticket);
    }
    /** Mails the password of `username`. Resolves to the (masked) address it was sent to. */
    async forgotPassword(username) {
        return this.request('Forgot_Password', {
            USERNAME: username,
            My_Enum_Forgot_Password_Mode: 0, // By USERNAME
            ENVIRONMENT_USER_ID: 2,
            LANGUAGE_ABBREVIATION: '',
        });
    }
    async forgotUsername(email) {
        return this.request('Forgot_UserName', {
            EMAIL: email,
            My_Enum_Forgot_Password_Mode: 1, // By EMAIL
            ENVIRONMENT_USER_ID: 2,
        });
    }
    async request(method, params, ticket = '') {
        for (let attempt = 0;; attempt++) {
            const { data } = await this.http.post(`${method}?Ticket=${encodeURIComponent(ticket)}`, params, {
                headers: { 'Content-Type': 'application/json; charset=utf-8' },
            });
            const exception = String(data?.ExceptionMsg ?? '').trim();
            if (!exception) {
                return data?.My_Result;
            }
            if (!exception.includes('deadlocked') || attempt >= DEADLOCK_RETRIES) {
                throw new Error(exception);
            }
        }
    }
}
