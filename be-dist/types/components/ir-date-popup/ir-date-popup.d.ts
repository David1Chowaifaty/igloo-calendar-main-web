export declare class IrDatePopup {
    dates: {
        start: Date | null;
        end: Date | null;
    };
    isPopoverOpen: boolean;
    el: HTMLIrDatePopupElement;
    private popover;
    private minDate;
    handleDatesChange(): void;
    componentWillLoad(): void;
    dateTrigger(): any;
    render(): any;
}
