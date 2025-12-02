import { EventEmitter } from '../../../stencil-public-runtime';
import { IRoomNightsData, CalendarModalEvent } from "../../../models/property-types";
import { IToast } from "../../ui/ir-toast/toast";
import { ICountry } from "../../../models/IBooking";
export type BarPosition = {
    top: string;
    left: string;
    width: string;
    height: string;
};
export declare class IglBookingEvent {
    private element;
    currency: any;
    is_vacation_rental: boolean;
    language: string;
    bookingEvent: {
        [key: string]: any;
    };
    allBookingEvents: {
        [key: string]: any;
    };
    countries: ICountry[];
    hideBubbleInfo: EventEmitter;
    updateEventData: EventEmitter;
    dragOverEventData: EventEmitter;
    showRoomNightsDialog: EventEmitter<IRoomNightsData>;
    showDialog: EventEmitter<CalendarModalEvent>;
    resetStretchedBooking: EventEmitter<string>;
    toast: EventEmitter<IToast>;
    updateBookingEvent: EventEmitter<{
        [key: string]: any;
    }>;
    renderElement: boolean;
    position: {
        [key: string]: any;
    };
    isShrinking: boolean | null;
    private dayWidth;
    private eventSpace;
    private vertSpace;
    private showInfoPopup;
    private bubbleInfoTopSide;
    private isStretch;
    private eventsService;
    private bookingService;
    private resizeSide;
    private isDragging;
    private initialX;
    private initialY;
    private currentX;
    private currentY;
    private initialWidth;
    private initialLeft;
    private finalWidth;
    private dragInitPos;
    private dragEndPos;
    elementRect: {
        [key: string]: any;
    };
    private isTouchStart;
    private moveDifferenceX;
    private moveDifferenceY;
    private animationFrameId;
    private handleMouseMoveBind;
    private handleMouseUpBind;
    private role;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    hideBubbleInfoPopup(event: CustomEvent): void;
    moveBookingToHandler(event: CustomEvent): Promise<void>;
    closeEventBubble(): void;
    private fetchAndAssignBookingData;
    private reset;
    private findRoomType;
    private buildBarIds;
    private getModalDescription;
    private resetBookingToInitialPosition;
    handleRevertBooking(event: CustomEvent<string>): void;
    /**
     * Checks if the target room already has a booking overlapping the given date range.
     *
     * @param toRoomId   - Room ID to check.
     * @param from_date  - Start date (YYYY-MM-DD).
     * @param to_date    - End date (YYYY-MM-DD).
     * @returns `true` if another booking occupies the slot, otherwise `false`.
     */
    private checkIfSlotOccupied;
    renderAgain(): void;
    getUniqueId(): number;
    isSplitBooking(): boolean;
    isNewEvent(): boolean;
    isHighlightEventType(): boolean;
    getBookingId(): any;
    getBookingStatus(): any;
    getBookedBy(): any;
    getBookedRoomId(): any;
    getEventStartingDate(): Date;
    getEventEndingDate(): Date;
    getEventType(): any;
    getEventLegend(): any;
    getLegendOfStatus(aStatusId: any): any;
    getNoteNode(): any;
    getBalanceNode(): any;
    setStayDays(aStayDays: number): void;
    getStayDays(): any;
    /**
     * Calculates the booking bar position and width in the calendar grid.
     *
     * @returns {{ top: string; left: string; width: string; height: string }}
     *          Inline style values used to place the event.
     */
    private getPosition;
    private getNumber;
    startDragging(event: any, side: string): any;
    handleMouseMove(event: any): void;
    handleMouseUp(): void;
    updateData(data: any): void;
    private calculateHoverPosition;
    private renderEventBookingNumber;
    private showEventInfo;
    /**
     * Checks if the booking's departure time is later than the hotel's configured check-out time.
     *
     * @returns {boolean} `true` if departure is after `check_out_till`, otherwise `false`.
     */
    private isDepartureAfterHotelCheckout;
    private computeSplitRole;
    render(): any;
}
