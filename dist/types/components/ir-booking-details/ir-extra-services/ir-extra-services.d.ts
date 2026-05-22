import { Agent } from "../../../services/agents/type";
import { Booking } from "../../../models/booking.dto";
import { IEntries } from "../../../models/property";
export declare class IrExtraServices {
    booking: Booking;
    agent: Agent;
    language: string;
    svcCategories: IEntries[];
    private isAgentMode;
    private renderServiceList;
    render(): any;
}
