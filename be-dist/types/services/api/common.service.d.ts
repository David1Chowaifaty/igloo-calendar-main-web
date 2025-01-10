export declare class CommonService {
    getCurrencies(): Promise<any>;
    getExposedLanguages(): Promise<any>;
    getCountries(language: string): Promise<any>;
    getUserDefaultCountry(params: {
        id: string;
        aname: string;
        perma_link: string;
    }): Promise<any>;
    getExposedCountryByIp(params: {
        id: string;
        aname: string;
        perma_link: string;
    }): Promise<any>;
    getBEToken(): Promise<any>;
    getExposedLanguage(): Promise<{
        entries: any;
        direction: any;
    }>;
    checkUserAuthState(): any;
    private transformArrayToObject;
}
