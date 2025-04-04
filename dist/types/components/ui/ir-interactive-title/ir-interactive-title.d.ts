export declare class IrInteractiveTitle {
    el: HTMLElement;
    popoverTitle: string;
    irPopoverLeft: string;
    hkStatus: boolean;
    cropSize: number;
    private croppedTitle;
    private croppedTitleEl;
    componentWillLoad(): void;
    componentDidLoad(): void;
    private initializePopover;
    render(): any;
}
