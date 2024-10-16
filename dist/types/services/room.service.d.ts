import Token from "../models/Token";
export declare class RoomService extends Token {
    getExposedProperty(params: {
        id: number | null;
        language: string;
        is_backend?: boolean;
        aname?: string;
    }): Promise<any>;
    fetchLanguage(code: string, sections?: string[]): Promise<{
        entries: any;
        direction: any;
    }>;
    private transformArrayToObject;
}
