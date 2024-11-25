import { Booking, ExtraService } from "../../../../models/booking.dto";
import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class IrExtraServiceConfig {
    booking: Pick<Booking, 'from_date' | 'to_date' | 'currency' | 'booking_nbr'>;
    service: ExtraService;
    s_service: ExtraService;
    error: boolean;
    fromDateClicked: boolean;
    toDateClicked: boolean;
    closeModal: EventEmitter<null>;
    resetBookingData: EventEmitter<null>;
    private bookingService;
    componentWillLoad(): void;
    private saveAmenity;
    private updateService;
    render(): any;
}
