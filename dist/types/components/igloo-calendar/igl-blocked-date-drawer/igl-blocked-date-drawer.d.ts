import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IglBlockedDateDrawer {
    /**
     * Controls whether the blocked date drawer is open or closed.
     * Reflected to the DOM so it can be styled or toggled externally.
     */
    open: boolean;
    /**
     * Label text displayed at the top of the drawer.
     * Typically used as the drawer title.
     */
    label: string;
    /**
     * Start date of the blocked date range.
     * Expected to be an ISO date string (YYYY-MM-DD).
     */
    fromDate: string;
    /**
     * End date of the blocked date range.
     * Expected to be an ISO date string (YYYY-MM-DD).
     */
    toDate: string;
    /**
     * Identifier of the unit being blocked.
     * Used when sending block requests to the booking service.
     */
    unitId: number;
    isLoading: boolean;
    blockDatesData: any;
    blockedDateDrawerClosed: EventEmitter<void>;
    private bookingService;
    private handleBlockDate;
    private closeDrawer;
    render(): any;
}
