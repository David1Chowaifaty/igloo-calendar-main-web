import { IToast } from "../../ui/ir-toast/toast";
import { Booking } from "../../../models/booking.dto";
import { EventEmitter } from '../../../stencil-public-runtime';
import { BookingDetailsDialogEvents, OpenSidebarEvent } from '../types';
export declare class IrBookingHeader {
    booking: Booking;
    hasReceipt: boolean;
    hasPrint: boolean;
    hasDelete: boolean;
    hasMenu: boolean;
    hasCloseButton: boolean;
    hasEmail: boolean;
    bookingStatus: string | null;
    currentDialogStatus: BookingDetailsDialogEvents;
    toast: EventEmitter<IToast>;
    closeSidebar: EventEmitter<null>;
    resetBookingEvt: EventEmitter<null>;
    openSidebar: EventEmitter<OpenSidebarEvent<any>>;
    private dialogRef;
    private bookingService;
    private alertMessage;
    modalEl: HTMLIrModalElement;
    handleSelectChange(e: CustomEvent<any>): void;
    private updateStatus;
    private openDialog;
    private renderDialogBody;
    render(): any;
}
