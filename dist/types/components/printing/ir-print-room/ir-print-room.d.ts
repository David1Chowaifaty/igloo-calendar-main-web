import { Booking, Property } from "../../../models/booking.dto";
export declare class IrPrintRoom {
    /** Room data */
    room: Booking['rooms'][0];
    /** Booking context */
    booking: Booking;
    /** Property context */
    property: Property;
    /** Currency code (e.g. USD, EUR) */
    currency: string;
    /** Room index */
    idx: number;
    private getSmokingLabel;
    private formatDate;
    private formatGuestName;
    private formatGuestAvailability;
    private formatBookingDates;
    private renderTaxSection;
    render(): any;
}
