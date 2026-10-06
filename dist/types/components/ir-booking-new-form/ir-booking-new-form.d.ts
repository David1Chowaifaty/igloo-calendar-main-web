import { IglBookPropertyPayloadPlusBooking } from "../../models/igl-book-property";
export declare class IrBookingNewForm {
    ticket: string;
    propertyid: string;
    /**
     * Language for the form and the editor it opens, independent of the page's. Reflected as `lang`
     * on the host, which makes this subtree its own locale scope (see `locale-scope.ts`).
     */
    language: string;
    bookingItem: IglBookPropertyPayloadPlusBooking | null;
    private handleTriggerClicked;
    render(): any;
}
