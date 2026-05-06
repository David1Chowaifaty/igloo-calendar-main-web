import { Agent } from "../../../services/agents/type";
import { Booking } from "../../../models/booking.dto";
import { IEntries } from "../../../models/property";
export declare class IrExtraServices {
    private agentsService;
    booking: Booking;
    agent: Agent;
    language: string;
    svcCategories: IEntries[];
    private isAgentMode;
    resolvedAgent: Agent;
    componentWillLoad(): Promise<void>;
    handleBookingChange(): void;
    private resolveAgent;
    private renderServiceList;
    render(): any;
}
