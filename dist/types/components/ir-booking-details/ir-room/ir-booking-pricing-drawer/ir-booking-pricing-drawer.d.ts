import { EventEmitter } from '../../../../stencil-public-runtime';
import { Booking, Room } from "../../../../models/booking.dto";
import { ClTx } from "../../../../services/city-ledger/types";
import { Agent } from "../../../../services/agents/type";
export declare class IrBookingPricingDrawer {
    open: boolean;
    formId: string;
    booking: Booking;
    room: Room;
    agent: Agent | null;
    folioEntries: ClTx[];
    currencySymbol: string;
    saveDisabled: boolean;
    allItemsDisabled: boolean;
    closeDrawer: EventEmitter<void>;
    pricingSaved: EventEmitter<void>;
    private get drawerLabel();
    private stopEventPropagation;
    render(): any;
}
