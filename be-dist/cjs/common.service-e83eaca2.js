'use strict';

const property_service = require('./property.service-abccb4c3.js');
const app_store = require('./app.store-2f1099f0.js');
const localization_store = require('./localization.store-a096e7c5.js');

class CommonService extends property_service.Token {
    async getCurrencies() {
        const token = this.getToken();
        if (!token) {
            throw new property_service.MissingTokenError();
        }
        const { data } = await property_service.axios.post(`/Get_Exposed_Currencies?Ticket=${token}`);
        app_store.app_store.currencies = [...data['My_Result']];
        return data['My_Result'];
    }
    async getExposedLanguages() {
        const token = this.getToken();
        if (!token) {
            throw new property_service.MissingTokenError();
        }
        const { data } = await property_service.axios.post(`/Get_Exposed_Languages?Ticket=${token}`);
        app_store.app_store.languages = [...data.My_Result];
        return data['My_Result'];
    }
    async getCountries(language) {
        try {
            const token = this.getToken();
            if (token) {
                const { data } = await property_service.axios.post(`/Get_Exposed_Countries?Ticket=${token}`, {
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
                const { data } = await property_service.axios.post(`/Get_Country_By_IP?Ticket=${token}`, {
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
                const { data } = await property_service.axios.post(`/Get_Exposed_Country_By_IP?Ticket=${token}`, {
                    IP: '',
                    lang: 'en',
                });
                if (data.ExceptionMsg !== '') {
                    throw new Error(data.ExceptionMsg);
                }
                app_store.app_store.userDefaultCountry = data['My_Result'];
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
            const { data } = await property_service.axios.post(`/Get_BE_Token`, {});
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
                const { data } = await property_service.axios.post(`/Get_Exposed_Language?Ticket=${token}`, { code: app_store.app_store.userPreferences.language_id, sections: ['_BE_FRONT'] });
                if (data.ExceptionMsg !== '') {
                    throw new Error(data.ExceptionMsg);
                }
                let entries = this.transformArrayToObject(data.My_Result.entries);
                localization_store.localizedWords.entries = Object.assign(Object.assign({}, localization_store.localizedWords.entries), entries);
                localization_store.localizedWords.direction = data.My_Result.direction;
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

exports.CommonService = CommonService;

//# sourceMappingURL=common.service-e83eaca2.js.map