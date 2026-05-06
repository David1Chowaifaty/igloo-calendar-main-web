import { Booking } from "../../models/booking.dto";
import { Agent } from "../../services/agents/type";
import { EventEmitter } from '../../stencil-public-runtime';
export type BillingPanels = 'agent' | 'guest';
export declare class IrBilling {
    private isAgentMode;
    private agentsService;
    booking: Booking;
    agent: Agent;
    handleBookingChange(): Promise<void>;
    currentTab: BillingPanels;
    resolvedAgent: Agent;
    billingClose: EventEmitter<void>;
    componentWillLoad(): Promise<void>;
    private resolveAgent;
    render(): any;
}
