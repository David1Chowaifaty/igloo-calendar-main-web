import axios from "axios";
import { MissingTokenError, Token } from "../../models/Token";
import app_store from "../../stores/app.store";
import localizedWords from "../../stores/localization.store";
export class CommonService extends Token {
    async getCurrencies() {
        const token = this.getToken();
        if (!token) {
            throw new MissingTokenError();
        }
        const { data } = await axios.post(`/Get_Exposed_Currencies?Ticket=${token}`);
        app_store.currencies = [...data['My_Result']];
        return data['My_Result'];
    }
    async getExposedLanguages() {
        const token = this.getToken();
        if (!token) {
            throw new MissingTokenError();
        }
        const { data } = await axios.post(`/Get_Exposed_Languages?Ticket=${token}`);
        app_store.languages = [...data.My_Result];
        return data['My_Result'];
    }
    async getCountries(language) {
        try {
            const token = this.getToken();
            if (token) {
                const { data } = await axios.post(`/Get_Exposed_Countries?Ticket=${token}`, {
                    language,
                });
                if (data.ExceptionMsg !== '') {
                    throw new Error(data.ExceptionMsg);
                }
                return data.My_Result;
            }
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async getUserDefaultCountry() {
        try {
            const token = this.getToken();
            if (!token) {
                throw new MissingTokenError();
            }
            const { data } = await axios.post(`/Get_Country_By_IP?Ticket=${token}`, {
                IP: '',
            });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data['My_Result'];
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async getExposedCountryByIp() {
        try {
            const token = this.getToken();
            if (!token) {
                throw new MissingTokenError();
            }
            const { data } = await axios.post(`/Get_Exposed_Country_By_IP?Ticket=${token}`, {
                IP: '',
                lang: 'en',
            });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            app_store.userDefaultCountry = data['My_Result'];
            return data['My_Result'];
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async getBEToken() {
        try {
            const { data } = await axios.post(`/Get_BE_Token`, {});
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data['My_Result'];
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async getExposedLanguage() {
        try {
            const token = this.getToken();
            if (!token) {
                throw new MissingTokenError();
            }
            const { data } = await axios.post(`/Get_Exposed_Language?Ticket=${token}`, { code: app_store.userPreferences.language_id, sections: ['_BE_FRONT'] });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            let entries = this.transformArrayToObject(data.My_Result.entries);
            localizedWords.entries = Object.assign(Object.assign({}, localizedWords.entries), entries);
            localizedWords.direction = data.My_Result.direction;
            return { entries, direction: data.My_Result.direction };
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    checkUserAuthState() {
        const anchor = JSON.parse(sessionStorage.getItem('anchor'));
        if (anchor) {
            if (anchor.login) {
                app_store.is_signed_in = true;
            }
            return anchor.login || null;
        }
        return null;
    }
    transformArrayToObject(data) {
        let object = {};
        for (const d of data) {
            object[d.code] = d.description;
        }
        return object;
    }
}
//# sourceMappingURL=common.service.js.map
