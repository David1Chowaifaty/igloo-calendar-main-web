import { Agent } from "../../../services/agents/type";
import { Booking } from "../../../models/booking.dto";
export declare class IrPickupView {
    private agentsService;
    booking: Booking;
    agent: Agent;
    resolvedAgent: Agent;
    componentWillLoad(): Promise<void>;
    render(): any;
}
