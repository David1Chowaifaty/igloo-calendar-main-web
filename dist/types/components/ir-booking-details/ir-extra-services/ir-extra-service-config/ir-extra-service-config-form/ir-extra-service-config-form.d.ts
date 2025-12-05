import { Booking, ExtraService } from "../../../../../models/booking.dto";
import { EventEmitter } from '../../../../../stencil-public-runtime';
export declare class IrExtraServiceConfigForm {
    booking: Pick<Booking, 'from_date' | 'to_date' | 'currency' | 'booking_nbr'>;
    service: ExtraService;
    s_service: ExtraService;
    error: boolean;
    fromDateClicked: boolean;
    toDateClicked: boolean;
    autoValidate: boolean;
    closeModal: EventEmitter<null>;
    resetBookingEvt: EventEmitter<null>;
    private bookingService;
    componentWillLoad(): void;
    handleServiceChange(): void;
    private saveAmenity;
    private closeDialog;
    private updateService;
    render(): any;
}
