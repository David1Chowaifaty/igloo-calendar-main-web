import { Booking } from "../../models/booking.dto";
import { Agent } from "../../services/agents/type";
import { EventEmitter } from '../../stencil-public-runtime';
export type BillingPanels = 'agent' | 'guest';
export declare class IrBilling {
    el: HTMLElement;
    private isAgentMode;
    private agentsService;
    booking: Booking;
    isAllServicesAgentOwned: boolean;
    agent: Agent;
    handleBookingChange(): Promise<void>;
    currentTab: BillingPanels;
    resolvedAgent: Agent;
    billingClose: EventEmitter<void>;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): void;
    private resolveAgent;
    render(): any;
}
