import { BookingColor } from "../../../models/booking.dto";
import { EventEmitter } from '../../../stencil-public-runtime';
type SaveState = 'idle' | 'saving' | 'saved' | 'error';
export declare class IglLegends {
    optionEvent: EventEmitter<{
        [key: string]: any;
    }>;
    legendData: {
        [key: string]: any;
    };
    private propertyService;
    bookingColors: BookingColor[];
    saveState: SaveState;
    saveError?: string;
    loadingIndex: number[];
    private saveTimeout?;
    disconnectedCallback(): void;
    handleSaveStateChange(newValue: SaveState): void;
    handleOptionEvent(key: any, data?: string): void;
    private syncCalendarExtra;
    private get propertyId();
    private updateBookingColor;
    private persistBookingColors;
    private handleNameInput;
    private handleBlur;
    private handleLoaderComplete;
    render(): any;
}
export {};
