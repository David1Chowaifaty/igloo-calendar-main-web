export declare class IrSeoInjector {
    el: HTMLElement;
    pageTitle: string;
    pageDescription: string;
    pageKeywords: string;
    updateMetaTags(): void;
    updateMeta(name: string, content: string): void;
    componentWillLoad(): void;
    render(): any;
}
