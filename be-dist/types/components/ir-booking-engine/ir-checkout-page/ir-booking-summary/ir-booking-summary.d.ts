import { pages } from "../../../../models/common";
import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class IrBookingSummary {
    isLoading: boolean;
    routing: EventEmitter<pages>;
    bookingClicked: EventEmitter<null>;
    error: boolean;
    handleBooking(): void;
    render(): any;
}
