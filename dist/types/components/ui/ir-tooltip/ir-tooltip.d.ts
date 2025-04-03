export declare class IrTooltip {
    message: string;
    withHtml: boolean;
    customSlot: boolean;
    containerStyle: {
        [key: string]: string;
    };
    open: boolean;
    tooltipTimeout: any;
    toggleOpen(shouldOpen: boolean): void;
    render(): any;
}
