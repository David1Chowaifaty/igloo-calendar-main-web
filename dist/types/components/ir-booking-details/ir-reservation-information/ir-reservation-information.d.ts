import { Booking } from "../../../models/booking.dto";
import { EventEmitter } from '../../../stencil-public-runtime';
import { ICountry, IEntries } from "../../../models/IBooking";
import { OpenSidebarEvent } from '../types';
export declare class IrReservationInformation {
    booking: Booking;
    countries: ICountry[];
    arrivalTime: IEntries[];
    userCountry: ICountry | null;
    isOpen: boolean;
    openSidebar: EventEmitter<OpenSidebarEvent<any>>;
    private reservationInformationEl?;
    private irBookingCompanyFormRef;
    private irBookingExtraNoteRef;
    private irArrivalTimeDialogRef;
    componentWillLoad(): void;
    componentDidLoad(): void;
    componentDidUpdate(): void;
    private handleEditClick;
    private renderPhoneNumber;
    private setDynamicLabelHeight;
    render(): any;
}
