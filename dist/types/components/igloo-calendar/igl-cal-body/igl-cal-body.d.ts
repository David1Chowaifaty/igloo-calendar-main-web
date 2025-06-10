import { EventEmitter } from '../../../stencil-public-runtime';
import { PhysicalRoom, RoomType } from "../../../models/booking.dto";
import { ICountry } from "../../../models/IBooking";
export type RoomCategory = RoomType & {
    expanded: boolean;
};
export declare class IglCalBody {
    isScrollViewDragging: boolean;
    propertyId: number;
    calendarData: {
        [key: string]: any;
    };
    today: String;
    currency: any;
    language: string;
    countries: ICountry[];
    highlightedDate: string;
    dragOverElement: string;
    renderAgain: boolean;
    selectedRoom: PhysicalRoom;
    isLoading: boolean;
    addBookingDatasEvent: EventEmitter<any[]>;
    showBookingPopup: EventEmitter;
    scrollPageToRoom: EventEmitter;
    selectedRooms: {
        [key: string]: any;
    };
    private fromRoomId;
    private newEvent;
    private currentDate;
    private hkModal;
    private housekeepingService;
    private bookingMap;
    private interactiveTitle;
    private dayRateMap;
    componentWillLoad(): void;
    handleCalendarDataChange(): void;
    dragOverHighlightElementHandler(event: CustomEvent): void;
    gotoRoom(event: CustomEvent): void;
    addToBeAssignedEvents(event: CustomEvent): void;
    closeWindow(): void;
    private scrollToRoom;
    private getRoomCategoryByRoomId;
    private getCategoryName;
    private getCategoryId;
    private getTotalPhysicalRooms;
    private getCategoryRooms;
    private getRoomName;
    private getRoomId;
    private getRoomById;
    private getBookingData;
    private addBookingDatas;
    private getSelectedCellRefName;
    private getSplitBookingEvents;
    private addNewEvent;
    private getTwoDigitNumStr;
    private getDateStr;
    private removeNewEvent;
    private clickCell;
    private showNewBookingPopup;
    private renderElement;
    private getBookingMap;
    private getGeneralCategoryDayColumns;
    private getGeneralRoomDayColumns;
    private toggleCategory;
    private getRoomCategoryRow;
    /**
     * Renders a list of active rooms for an expanded room category. Returns an array of JSX elements, including headers and day columns, or an empty array if the category is collapsed or contains no active rooms.
     *
     * @param {RoomCategory} roomCategory - The category containing room details.
     */
    private getRoomsByCategory;
    private getRoomRows;
    private confirmHousekeepingUpdate;
    render(): any;
    private renderModalBody;
    private updateDisabledCellsCache;
    private getCellKey;
    private isCellDisabled;
}
