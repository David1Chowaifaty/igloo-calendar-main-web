import { EventEmitter } from '../../../../stencil-public-runtime';
import { ExtraService } from "../../../../models/booking.dto";
export declare class IrExtraService {
    service: ExtraService;
    bookingNumber: string;
    currencySymbol: string;
    editExtraService: EventEmitter<ExtraService>;
    resetBookingData: EventEmitter<null>;
    private irModalRef;
    private bookingService;
    private deleteService;
    render(): any;
}
