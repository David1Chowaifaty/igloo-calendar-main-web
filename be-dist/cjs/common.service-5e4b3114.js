'use strict';

const axios = require('./axios-bc0bd15c.js');
const localization_store = require('./localization.store-874cf51c.js');

class CommonService {
    async getCurrencies() {
        const { data } = await axios.axios.post(`/Get_Exposed_Currencies`);
        localization_store.app_store.currencies = [...data['My_Result']];
        return data['My_Result'];
    }
    async getExposedLanguages() {
        const { data } = await axios.axios.post(`/Get_Exposed_Languages`);
        localization_store.app_store.languages = [...data.My_Result];
        return data['My_Result'];
    }
    async getCountries(language) {
        const { data } = await axios.axios.post(`/Get_Exposed_Countries`, {
            language,
        });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    async getUserDefaultCountry(params) {
        try {
            const { data } = await axios.axios.post(`/Get_Country_By_IP`, Object.assign({ IP: '' }, params));
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
    async getExposedCountryByIp(params) {
        try {
            const { data } = await axios.axios.post(`/Get_Exposed_Country_By_IP`, Object.assign({ IP: '', lang: 'en' }, params));
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            localization_store.app_store.userDefaultCountry = data['My_Result'];
            return data['My_Result'];
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async getBEToken() {
        try {
            const { data } = await axios.axios.post(`/Get_BE_Token`, {});
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
            const { data } = await axios.axios.post(`/Get_Exposed_Language`, { code: localization_store.app_store.userPreferences.language_id, sections: ['_BE_FRONT'] });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            let entries = this.transformArrayToObject(data.My_Result.entries);
            localization_store.localizedWords.entries = Object.assign(Object.assign({}, localization_store.localizedWords.entries), entries);
            localization_store.localizedWords.direction = data.My_Result.direction;
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
                localization_store.app_store.is_signed_in = true;
            }
            return anchor.login || null;
        }
        return null;
    }
    transformArrayToObject(data) {
        let object = {};
        for (const d of data) {
            object[d.code] = `${d.description}`;
        }
        return object;
    }
}

exports.CommonService = CommonService;

//# sourceMappingURL=common.service-5e4b3114.js.map