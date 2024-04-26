import { pages } from "../../../../models/common";
import { IExposedProperty } from "../../../../models/property";
import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class IrBookingSummary {
    isLoading: boolean;
    property: IExposedProperty;
    componentWillLoad(): void;
    routing: EventEmitter<pages>;
    bookingClicked: EventEmitter<null>;
    handleBooking(): void;
    render(): any;
}
