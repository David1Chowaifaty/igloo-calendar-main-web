import { Booking } from "../../../../models/booking.dto";
import { Agent } from "../../../../services/agents/type";
import { Currency } from "../../../../models/property";
export declare class IrPaymentSummary {
    totalCost: number;
    balance: number;
    collected: number;
    currency: Currency;
    isBookingCancelled: boolean;
    isAllServicesAgentOwned: boolean;
    booking: Booking;
    agent: Agent;
    private shouldShowTotalCost;
    render(): any;
}
