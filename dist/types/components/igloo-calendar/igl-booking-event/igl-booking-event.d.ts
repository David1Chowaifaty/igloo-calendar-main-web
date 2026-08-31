import { EventEmitter } from '../../../stencil-public-runtime';
import { IRoomNightsData, CalendarModalEvent } from "../../../models/property-types";
import { ICountry } from "../../../models/IBooking";
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
    roomTop: number;
    hideBubbleInfo: EventEmitter;
    updateEventData: EventEmitter;
    dragOverEventData: EventEmitter;
    showRoomNightsDialog: EventEmitter<IRoomNightsData>;
    showDialog: EventEmitter<CalendarModalEvent>;
    resetStretchedBooking: EventEmitter<string>;
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
    private minResizeDays;
    private handleMouseMoveBind;
    private handleMouseUpBind;
    private handleClickOutsideBind;
    private role;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    handleClickOutside(event: Event): void;
    hideBubbleInfoPopup(event: CustomEvent): void;
    moveBookingToHandler(event: CustomEvent): Promise<void>;
    private buildBarIds;
    private fetchAndAssignBookingData;
    private reset;
    private findRoomType;
    private getModalDescription;
    private resetBookingToInitialPosition;
    handleRevertBooking(event: CustomEvent<string>): void;
    checkIfSlotOccupied(toRoomId: any, from_date: any, to_date: any): any;
    renderAgain(): void;
    getUniqueId(): number;
    isSplitBooking(): boolean;
    isNewEvent(): boolean;
    isHighlightEventType(): boolean;
    getBookingId(): any;
    getBookingStatus(): any;
    getBookedBy(): any;
    getBookedRoomId(): any;
    getEventType(): any;
    getEventLegend(): any;
    getLegendOfStatus(aStatusId: any): any;
    getNoteNode(): any;
    getBalanceNode(): any;
    setStayDays(aStayDays: number): void;
    getStayDays(): any;
    /**
     * True once the booking's actual FROM_DATE lands after the loaded calendar window's nominal
     * start date - i.e. this is a "normal" booking, not one that continues in from before the
     * visible range. Drives both the skewed/continuation visual (render()) and the half-cell
     * position adjustment (getPosition()), computed once so both stay in sync.
     */
    private startsAfterWindowOpen;
    getPosition(): {
        top: string;
        left: string;
        width: string;
        height: string;
    };
    getNumber(aData: any): number;
    startDragging(event: any, side: string): any;
    handleMouseMove(event: any): void;
    handleMouseUp(): void;
    updateData(data: any): void;
    private calculateHoverPosition;
    renderEventBookingNumber(): string;
    showEventInfo(showInfo: any): any;
    private isDepartureAfterHotelCheckout;
    private computeSplitRole;
    render(): any;
}
