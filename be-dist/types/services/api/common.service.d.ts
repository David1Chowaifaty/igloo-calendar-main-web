import { Token } from '../../models/Token';
export declare class CommonService extends Token {
    getCurrencies(): Promise<any>;
    getExposedLanguages(): Promise<any>;
    getCountries(language: string): Promise<any>;
    getUserDefaultCountry(): Promise<any>;
    getBEToken(): Promise<any>;
}
