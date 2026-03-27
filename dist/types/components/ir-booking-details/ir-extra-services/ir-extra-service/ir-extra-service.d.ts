import { EventEmitter } from '../../../../stencil-public-runtime';
import { Booking, ExtraService } from "../../../../models/booking.dto";
import { IEntries } from "../../../../models/property";
export declare class IrExtraService {
    service: ExtraService;
    booking: Booking;
    bookingNumber: string;
    currencySymbol: string;
    language: string;
    svcCategories: IEntries[];
    editExtraService: EventEmitter<ExtraService>;
    resetBookingEvt: EventEmitter<null>;
    private isToggling;
    private irModalRef;
    private toggleDialogRef;
    private bookingService;
    private deleteService;
    private toggleServiceAgent;
    private get description();
    render(): any;
}
