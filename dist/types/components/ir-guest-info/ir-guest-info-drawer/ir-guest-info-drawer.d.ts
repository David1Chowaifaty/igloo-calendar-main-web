import { EventEmitter } from '../../../stencil-public-runtime';
import { GuestChangedEvent } from "../../../components";
export declare class IrGuestInfoDrawer {
    open: boolean;
    language: string;
    email: string;
    booking_nbr: string;
    ticket: string;
    guestInfoDrawerClosed: EventEmitter<{
        source: Element;
    }>;
    guestChanged: EventEmitter<GuestChangedEvent>;
    resetBookingEvt: EventEmitter<null>;
    hostElement: HTMLElement;
    private handleDrawerHide;
    private handleCancel;
    private _formId;
    render(): any;
}
