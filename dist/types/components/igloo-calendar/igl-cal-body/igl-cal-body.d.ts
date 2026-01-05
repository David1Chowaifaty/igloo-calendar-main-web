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
    selectedRooms: {
        [key: string]: any;
    };
    addBookingDatasEvent: EventEmitter<any[]>;
    showBookingPopup: EventEmitter;
    scrollPageToRoom: EventEmitter;
    private fromRoomId;
    private newEvent;
    private currentDate;
    private bookingMap;
    private interactiveTitle;
    private dayRateMap;
    private roomsWithTodayCheckinStatus;
    private categoriesWithTodayCheckinStatus;
    componentWillLoad(): void;
    handleCalendarDataChange(): void;
    handleTodayChange(): void;
    dragOverHighlightElementHandler(event: CustomEvent): void;
    gotoRoom(event: CustomEvent): void;
    addToBeAssignedEvents(event: CustomEvent): void;
    closeWindow(): void;
    private scrollToRoom;
    private getRoomCategoryByRoomId;
    private getCategoryName;
    private getCategoryId;
    private getTotalPhysicalRooms;
    private getRoomtypeUnits;
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
    private getRoomtypeDayInventoryCells;
    private getGeneralUnitsDayCells;
    private toggleCategory;
    private getRoomtypeRow;
    /**
     * Renders a list of active rooms for an expanded room category. Returns an array of JSX elements, including headers and day columns, or an empty array if the category is collapsed or contains no active rooms.
     *
     * @param {RoomCategory} roomType - The category containing room details.
     */
    private getUnitsByRoomtype;
    private getRoomRows;
    private getTodayCheckinRoomsAndCategories;
    private updateTodayCheckinStatus;
    private roomHasTodayCheckin;
    private categoryHasRoomWithTodayCheckin;
    private updateDisabledCellsCache;
    private getCellKey;
    private isCellDisabled;
    render(): any;
}
