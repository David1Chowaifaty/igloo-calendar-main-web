import { Booking, ExtraService } from "../../../../../models/booking.dto";
import { IEntries } from "../../../../../models/property";
import { EventEmitter } from '../../../../../stencil-public-runtime';
export declare class IrExtraServiceConfigForm {
    booking: Booking;
    service: ExtraService;
    svcCategories: IEntries[];
    language: string;
    s_service: ExtraService;
    error: boolean;
    fromDateClicked: boolean;
    toDateClicked: boolean;
    autoValidate: boolean;
    assignee: 'agent' | 'guest';
    closeModal: EventEmitter<null>;
    resetBookingEvt: EventEmitter<null>;
    private bookingService;
    componentWillLoad(): void;
    handleServiceChange(): void;
    private assignService;
    private get categories();
    private saveAmenity;
    private closeDialog;
    private updateService;
    private assignmentChanged;
    render(): any;
}
