import { EventEmitter } from '../../../../stencil-public-runtime';
import { Booking, ExtraService } from "../../../../models/booking.dto";
import { IEntries } from "../../../../models/property";
import { Agent } from "../../../../services/agents/type";
import type { ClTx } from "../../../../services/city-ledger/types";
export declare class IrExtraService {
    service: ExtraService;
    booking: Booking;
    agent: Agent;
    bookingNumber: string;
    currencySymbol: string;
    language: string;
    svcCategories: IEntries[];
    clTransactions: ClTx[];
    editExtraService: EventEmitter<ExtraService>;
    resetBookingEvt: EventEmitter<null>;
    private isToggling;
    private irModalRef;
    private toggleDialogRef;
    private bookingService;
    private deleteService;
    private toggleServiceAgent;
    private get description();
    private get matchedTx();
    render(): any;
}
