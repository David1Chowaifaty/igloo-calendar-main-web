import { Booking } from "../../../models/booking.dto";
import { EventEmitter } from '../../../stencil-public-runtime';
import { ICountry } from "../../../models/IBooking";
import { OpenSidebarEvent } from '../types';
export declare class IrReservationInformation {
    booking: Booking;
    countries: ICountry[];
    userCountry: ICountry | null;
    isOpen: boolean;
    openSidebar: EventEmitter<OpenSidebarEvent<any>>;
    private reservationInformationEl?;
    private irBookingCompanyFormRef;
    irBookingExtraNoteRef: HTMLIrBookingExtraNoteElement;
    componentWillLoad(): void;
    componentDidLoad(): void;
    componentDidUpdate(): void;
    private handleEditClick;
    private renderPhoneNumber;
    private setDynamicLabelHeight;
    render(): any;
}
