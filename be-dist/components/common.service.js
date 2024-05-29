import { a as axios } from './axios.js';
import { a as app_store } from './app.store.js';
import { l as localizedWords } from './localization.store.js';

class Token {
    getToken() {
        return this.token;
    }
    setToken(token) {
        this.token = token;
    }
}
class MissingTokenError extends Error {
    constructor(message = 'Missing token!!') {
        super(message);
        this.name = 'MissingTokenError';
    }
}

class CommonService extends Token {
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
            if (token) {
                const { data } = await axios.post(`/Get_Country_By_IP?Ticket=${token}`, {
                    IP: '',
                });
                if (data.ExceptionMsg !== '') {
                    throw new Error(data.ExceptionMsg);
                }
                return data['My_Result'];
            }
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async getExposedCountryByIp() {
        try {
            const token = this.getToken();
            if (token) {
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
            if (token !== null) {
                const { data } = await axios.post(`/Get_Exposed_Language?Ticket=${token}`, { code: app_store.userPreferences.language_id, sections: ['_BE_FRONT'] });
                if (data.ExceptionMsg !== '') {
                    throw new Error(data.ExceptionMsg);
                }
                let entries = this.transformArrayToObject(data.My_Result.entries);
                localizedWords.entries = Object.assign(Object.assign({}, localizedWords.entries), entries);
                localizedWords.direction = data.My_Result.direction;
                return { entries, direction: data.My_Result.direction };
            }
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    transformArrayToObject(data) {
        let object = {};
        for (const d of data) {
            object[d.code] = d.description;
        }
        return object;
    }
}

export { CommonService as C };

//# sourceMappingURL=common.service.js.map