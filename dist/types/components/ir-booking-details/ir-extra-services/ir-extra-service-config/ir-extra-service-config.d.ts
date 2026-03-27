import { Booking, ExtraService } from "../../../../models/booking.dto";
import { IEntries } from "../../../../models/property";
import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class IrExtraServiceConfig {
    booking: Booking;
    svcCategories: IEntries[];
    service: ExtraService;
    language: string;
    open: boolean;
    closeModal: EventEmitter<null>;
    private closeDialog;
    render(): any;
}
