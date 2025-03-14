import { EventEmitter } from '../../../../../stencil-public-runtime';
import { Moment } from 'moment/min/moment-with-locales';
export declare class IrDatePopup {
    dates: {
        start: Moment | null;
        end: Moment | null;
    };
    isPopoverOpen: boolean;
    el: HTMLIrDatePopupElement;
    private popover;
    private minDate;
    dateChange: EventEmitter<{
        start: Moment | null;
        end: Moment | null;
    }>;
    handleDatesChange(): void;
    dateTrigger(): any;
    render(): any;
    private getDateModifiers;
}
