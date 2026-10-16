import { Agent } from "../../../services/agents/type";
import { Booking } from "../../../models/booking.dto";
import { SetupEntries } from "../../../models/property";
import type { ClTx } from "../../../services/city-ledger/types";
export declare class IrExtraServices {
    booking: Booking;
    agent: Agent;
    language: string;
    svcCategories: SetupEntries[];
    clTransactions: ClTx[];
    private renderServiceList;
    private extraServicesHeaderActions;
    render(): any;
}
