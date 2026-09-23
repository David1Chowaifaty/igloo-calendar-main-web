import { EventEmitter } from '../../../../stencil-public-runtime';
import { CalendarAssignedEvent, CalendarUnitPreviewEvent, UnassignedRoomEntry } from "../../../../services/unassigned-units/types";
import { CalendarSidebarState } from "../../igloo-calendar";
type PendingAction = 'assign' | 'checkin';
export declare class IglTbaBookingView {
    calendarData: {
        [key: string]: any;
    };
    room: UnassignedRoomEntry;
    roomTypeId: number;
    roomTypeName: string;
    selectedDate: string;
    categoryIndex: number;
    eventIndex: number;
    isHighlighted: boolean;
    selectedUnitId: number | null;
    pendingAction: PendingAction | null;
    highlightToBeAssignedBookingEvent: EventEmitter<{
        key: 'highlightBookingId';
        data: {
            bookingId: string;
            fromDate?: string;
        };
    }>;
    openCalendarSidebar: EventEmitter<CalendarSidebarState>;
    addToBeAssignedEvent: EventEmitter<{
        key: 'tobeAssignedEvents';
        data: (CalendarUnitPreviewEvent | CalendarAssignedEvent)[];
    }>;
    scrollPageToRoom: EventEmitter<{
        key: 'scrollPageToRoom';
        id: number | null;
        refClass: string;
    }>;
    assignRoomEvent: EventEmitter<CalendarAssignedEvent>;
    private readonly unassignedUnitsService;
    componentDidLoad(): void;
    handleSelectedDateChange(): void;
    /** Keep the picked unit only while this card still shows the same room, and while that room still offers the unit. */
    handleRoomChange(next: UnassignedRoomEntry, prev: UnassignedRoomEntry | undefined): void;
    handleHighlightChange(event: CustomEvent<{
        data: {
            bookingId: string;
        };
    }>): void;
    private get eventContext();
    private highlight;
    private handleClose;
    private handleUnitChange;
    private handleAssign;
    private handleAssignAndCheckIn;
    private assign;
    private openRoomGuests;
    render(): any;
}
export {};
