import { Booking } from "../../../../models/booking.dto";
import { BookingSource } from "../../../../models/igl-book-property";
import { EventEmitter } from '../../../../stencil-public-runtime';
type EditorStep = 'source' | 'assign';
export declare class IrBookingSourceEditorForm {
    booking: Booking;
    selectedSource: BookingSource;
    step: EditorStep;
    checkedItems: Set<string>;
    isLoading: boolean;
    bookingSourceSaved: EventEmitter<null>;
    loadingChange: EventEmitter<boolean>;
    private bookingService;
    componentWillLoad(): void;
    handleLoadingChange(newVal: boolean): void;
    private getSource;
    private getSourceByKey;
    private getAgentRef;
    private buildAssignableItems;
    private performSave;
    private buildExistingAgentSelections;
    private handleSubmit;
    private handleSelectChange;
    render(): any;
}
export {};
