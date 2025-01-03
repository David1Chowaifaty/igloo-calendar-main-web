import { EventEmitter } from '../../../../../stencil-public-runtime';
export declare class IrDatePopup {
    dates: {
        start: Date | null;
        end: Date | null;
    };
    isPopoverOpen: boolean;
    el: HTMLIrDatePopupElement;
    private popover;
    private minDate;
    dateChange: EventEmitter<{
        start: Date | null;
        end: Date | null;
    }>;
    handleDatesChange(): void;
    componentWillLoad(): void;
    dateTrigger(): any;
    render(): any;
    private getDateModifiers;
}
