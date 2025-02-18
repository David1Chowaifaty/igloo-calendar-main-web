export declare class RoomService {
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
