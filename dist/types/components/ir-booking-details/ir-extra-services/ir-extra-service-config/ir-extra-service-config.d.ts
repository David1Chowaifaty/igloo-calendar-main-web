import { Booking, ExtraService } from "../../../../models/booking.dto";
import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class IrExtraServiceConfig {
    booking: Pick<Booking, 'from_date' | 'to_date' | 'currency' | 'booking_nbr'>;
    service: ExtraService;
    open: boolean;
    closeModal: EventEmitter<null>;
    private closeDialog;
    render(): any;
}
