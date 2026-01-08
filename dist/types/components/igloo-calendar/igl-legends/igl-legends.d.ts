import { BookingColor } from "../../../models/booking.dto";
import { EventEmitter } from '../../../stencil-public-runtime';
type SaveState = 'idle' | 'saving' | 'saved' | 'error';
export declare class IglLegends {
    legendData: {
        [key: string]: any;
    };
    bookingColors: BookingColor[];
    saveState: SaveState;
    saveError?: string;
    loadingIndex: number[];
    optionEvent: EventEmitter<{
        [key: string]: any;
    }>;
    private propertyService;
    private saveTimeout?;
    disconnectedCallback(): void;
    handleSaveStateChange(newValue: SaveState): void;
    private handleOptionEvent;
    private syncCalendarExtra;
    private get propertyId();
    private updateBookingColor;
    private persistBookingColors;
    private handleNameInput;
    private handleBlur;
    private handleLoaderComplete;
    private updateLegend;
    render(): any;
}
export {};
