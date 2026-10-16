export declare class IrPmsPage {
    propertyid: string;
    ticket: string;
    language: string;
    /** The shell has no server-localized data of its own; strings re-render through the store. */
    private languageSync;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    languageChanged(next: string, previous: string): void;
    input: HTMLIrInputElement;
    menuDrawerRef: HTMLIrMenuDrawerElement;
    notifications: ({
        id: string;
        type: string;
        title: string;
        message: string;
        date: string;
        hour: number;
        minute: number;
        read: boolean;
        dismissible: boolean;
        link?: undefined;
    } | {
        id: string;
        type: string;
        title: string;
        message: string;
        date: string;
        hour: number;
        minute: number;
        read: boolean;
        dismissible: boolean;
        link: {
            href: string;
            text: string;
        };
    })[];
    render(): any;
}
