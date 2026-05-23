import { Agent } from "../../../services/agents/type";
import { Booking } from "../../../models/booking.dto";
import { IEntries } from "../../../models/property";
import type { ClTx } from "../../../services/city-ledger/types";
export declare class IrExtraServices {
    booking: Booking;
    agent: Agent;
    language: string;
    svcCategories: IEntries[];
    clTransactions: ClTx[];
    private renderServiceList;
    render(): any;
}
