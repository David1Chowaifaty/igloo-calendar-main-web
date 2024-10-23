import axios from "axios";
import app_store from "../../stores/app.store";
import localizedWords from "../../stores/localization.store";
export class CommonService {
    async getCurrencies() {
        const { data } = await axios.post(`/Get_Exposed_Currencies`);
        app_store.currencies = [...data['My_Result']];
        return data['My_Result'];
    }
    async getExposedLanguages() {
        const { data } = await axios.post(`/Get_Exposed_Languages`);
        app_store.languages = [...data.My_Result];
        return data['My_Result'];
    }
    async getCountries(language) {
        const { data } = await axios.post(`/Get_Exposed_Countries`, {
            language,
        });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    async getUserDefaultCountry(params) {
        try {
            const { data } = await axios.post(`/Get_Country_By_IP`, Object.assign({ IP: '' }, params));
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
            const { data } = await axios.post(`/Get_Exposed_Country_By_IP`, Object.assign({ IP: '', lang: 'en' }, params));
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
            const { data } = await axios.post(`/Get_Exposed_Language`, { code: app_store.userPreferences.language_id, sections: ['_BE_FRONT'] });
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
            object[d.code] = `${d.description}`;
        }
        return object;
    }
}
//# sourceMappingURL=common.service.js.map
