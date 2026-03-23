import { Booking } from "../../../models/booking.dto";
import { IEntries } from "../../../models/property";
export declare class IrExtraServices {
    booking: Booking;
    language: string;
    svcCategories: IEntries[];
    private isAgentMode;
    componentWillLoad(): void;
    handleBookingChange(): void;
    private renderServiceList;
    render(): any;
}
