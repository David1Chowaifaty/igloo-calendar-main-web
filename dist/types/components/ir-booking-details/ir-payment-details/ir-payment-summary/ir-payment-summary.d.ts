import { Booking } from "../../../../models/booking.dto";
import { Agent } from "../../../../services/agents/type";
import { Currency } from "../../../../models/property";
import { ClTx } from "../../../../services/city-ledger/types";
export declare class IrPaymentSummary {
    totalCost: number;
    balance: number;
    collected: number;
    currency: Currency;
    isBookingCancelled: boolean;
    isAllServicesAgentOwned: boolean;
    booking: Booking;
    agent: Agent;
    clTransactions: ClTx[];
    private allowedClOps;
    private shouldShowTotalCost;
    private get agentTotal();
    private get guestTotal();
    private get bookingTotal();
    render(): any;
}
