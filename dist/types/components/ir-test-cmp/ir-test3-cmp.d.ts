export declare class IrTest3Cmp {
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
