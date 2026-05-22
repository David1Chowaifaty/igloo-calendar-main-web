import { Agent } from "../../../services/agents/type";
import { Booking } from "../../../models/booking.dto";
export declare class IrPickupView {
    booking: Booking;
    agent: Agent;
    render(): any;
}
