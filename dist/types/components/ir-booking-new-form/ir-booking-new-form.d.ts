import { IglBookPropertyPayloadPlusBooking } from "../../models/igl-book-property";
export declare class IrBookingNewForm {
    ticket: string;
    propertyid: string;
    language: string;
    bookingItem: IglBookPropertyPayloadPlusBooking | null;
    private handleTriggerClicked;
    render(): any;
}
