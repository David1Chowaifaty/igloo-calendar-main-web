import { IrActionButton } from "../../table-cells/booking/ir-actions-cell/ir-actions-cell";
import { Booking } from "../../../models/booking.dto";
import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrBookingListingMobileCard {
    booking: Booking;
    totalPersons?: number;
    lastManipulation?: Booking['ota_manipulations'] extends Array<infer T> ? T : never;
    extraServicesLabel?: string;
    irBookingCardAction: EventEmitter<{
        action: IrActionButton;
        booking: Booking;
    }>;
    private emitAction;
    private renderRooms;
    render(): any;
}
