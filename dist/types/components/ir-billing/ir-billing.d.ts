import { Booking } from "../../models/booking.dto";
import { Agent } from "../../services/agents/type";
import { EventEmitter } from '../../stencil-public-runtime';
export type BillingPanels = 'agent' | 'guest';
export declare class IrBilling {
    booking: Booking;
    isAllServicesAgentOwned: boolean;
    agent: Agent;
    handleBookingChange(): Promise<void>;
    open: boolean;
    handleOpenChange(): Promise<void>;
    isAgentMode: boolean;
    currentTab: BillingPanels;
    billingClose: EventEmitter<void>;
    componentWillLoad(): void;
    render(): any;
}
