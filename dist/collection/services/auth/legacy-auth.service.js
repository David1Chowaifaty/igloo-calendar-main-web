import axios from "axios";
/**
 * The legacy back-office login endpoints that `Default.js` used to reach through
 * `ajaxHelper`, with the exact payloads it sent.
 *
 * Stateless and free of storage writes — `ir-auth` owns the flow and persists
 * what the rest of the extranet reads from `localStorage`.
 */
export class LegacyAuthService {
    async isAuthenticated({ username, password }) {
        return this.request('/IsAuthenticated_JSON', {
            My_UserInfo: { UserName: username, Password: password },
            My_Enum_Authentication_Mode: 0,
            IS_BACK_OFFICE: true,
        });
    }
    async getStartupDataSignature(ownerId) {
        return this.request('/Get_Startup_Data_Signature', { OWNER_ID: ownerId });
    }
    async getStartupData(ownerId, language) {
        return this.request('/Get_Startup_Data', {
            IS_BACK_OFFICE: true,
            OWNER_ID: ownerId,
            LANGUAGE_ABBREVIATION: language,
        });
    }
    /** Mails the password of `username`. Resolves to the (masked) address it was sent to. */
    async forgotPassword(username) {
        return this.request('/Forgot_Password', {
            USERNAME: username,
            My_Enum_Forgot_Password_Mode: 0, // By USERNAME
            ENVIRONMENT_USER_ID: 2,
            LANGUAGE_ABBREVIATION: '',
        });
    }
    async forgotUsername(email) {
        return this.request('/Forgot_UserName', {
            EMAIL: email,
            My_Enum_Forgot_Password_Mode: 1, // By EMAIL
            ENVIRONMENT_USER_ID: 2,
        });
    }
    async request(url, params) {
        const { data } = await axios.post(url, params);
        if (data?.ExceptionMsg?.trim()) {
            throw new Error(data.ExceptionMsg.trim());
        }
        return data?.My_Result;
    }
}
