import { Booking } from "../../models/booking.dto";
import { Agent } from "../../services/agents/type";
import { EventEmitter } from '../../stencil-public-runtime';
export type BillingPanels = 'agent' | 'guest';
export declare class IrBilling {
    el: HTMLIrBillingElement;
    booking: Booking;
    isAllServicesAgentOwned: boolean;
    agent: Agent;
    handleBookingChange(): Promise<void>;
    isAgentMode: boolean;
    currentTab: BillingPanels;
    billingClose: EventEmitter<void>;
    componentWillLoad(): void;
    componentDidLoad(): void;
    private setTabGroupActive;
    render(): any;
}
