import type { CheckoutRoomEvent } from "../../../components";
import type { ISODate } from "../../../utils/calendar-dates";
import { EventEmitter } from '../../../stencil-public-runtime';
import type { CheckoutRedirectEvent } from '../types';
/**
 * Departures panel of the dashboard: the existing departures table plus its check-out and invoice dialogs.
 * Early check-outs are handed to the root, which opens them inside booking details.
 */
export declare class IrDashboardDepartures {
    propertyId: number;
    date: ISODate;
    checkoutState: CheckoutRoomEvent;
    invoiceState: CheckoutRoomEvent;
    /** Early check-out that must be completed from the booking-details drawer. */
    checkoutRedirect: EventEmitter<CheckoutRedirectEvent>;
    private reload;
    private handleCheckoutRoom;
    private handleCheckoutDialogClosed;
    private handleInvoiceClose;
    render(): any;
}
