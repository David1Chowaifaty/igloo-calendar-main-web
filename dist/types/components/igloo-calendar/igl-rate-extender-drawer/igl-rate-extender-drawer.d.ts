import { IRoomNightsDataEventPayload } from "../../../models/property-types";
import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IglRateExtenderDrawer {
    open: boolean;
    bookingNumber: string;
    propertyId: number;
    language: string;
    identifier: string;
    toDate: string;
    fromDate: string;
    pool: string;
    ticket: string;
    defaultDates: {
        from_date: string;
        to_date: string;
    };
    isLoading: boolean;
    closeRoomNightsDialog: EventEmitter<IRoomNightsDataEventPayload>;
    private get label();
    private handleDrawerHide;
    render(): any;
}
