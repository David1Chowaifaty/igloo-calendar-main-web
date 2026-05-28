import { Agent } from "../../../services/agents/type";
import { Booking } from "../../../models/booking.dto";
import type { ClTx } from "../../../services/city-ledger/types";
export declare class IrPickupView {
    booking: Booking;
    agent: Agent;
    clTransactions: ClTx[];
    private get matchedTx();
    render(): any;
}
