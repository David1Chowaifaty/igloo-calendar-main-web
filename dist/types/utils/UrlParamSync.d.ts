type SyncConfig<T> = {
    key: keyof T;
    param: string;
    defaultValue?: any;
    replace?: boolean;
};
export declare class UrlParamSync<T extends object> {
    private component;
    private configs;
    private originalDisconnected?;
    private originalRender?;
    private restoreFns;
    constructor(component: T, configs: SyncConfig<T>[]);
    private applyUrlToState;
    private getParam;
    private setParam;
    private updateAll;
    private patchRender;
    private patchDisconnected;
    private patchHistory;
    private restoreHistory;
}
export {};
