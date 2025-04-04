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
    private selectedRooms;
    private fromRoomId;
    private newEvent;
    private currentDate;
    private hkModal;
    private housekeepingService;
    private bookingMap;
    private interactiveTitle;
    componentWillLoad(): void;
    handleCalendarDataChange(): void;
    dragOverHighlightElementHandler(event: CustomEvent): void;
    gotoRoom(event: CustomEvent): void;
    addToBeAssignedEvents(event: CustomEvent): void;
    scrollToRoom(roomId: any): void;
    getRoomCategoryByRoomId(roomId: any): any;
    getCategoryName(roomCategory: any): any;
    getCategoryId(roomCategory: any): any;
    getTotalPhysicalRooms(roomCategory: any): number;
    getCategoryRooms(roomCategory: RoomCategory): PhysicalRoom[];
    getRoomName(roomInfo: any): any;
    getRoomId(roomInfo: any): any;
    getRoomById(physicalRooms: any, roomId: any): any;
    getBookingData(): any;
    addBookingDatas(aData: any): void;
    getSelectedCellRefName(roomId: any, selectedDay: any): string;
    getSplitBookingEvents(newEvent: any): any;
    closeWindow(): void;
    addNewEvent(roomCategory: any): {
        [key: string]: any;
    };
    getTwoDigitNumStr(num: any): any;
    getDateStr(date: any, locale?: string): string;
    removeNewEvent(): void;
    clickCell(roomId: any, selectedDay: any, roomCategory: any): void;
    showNewBookingPopup(data: any): void;
    renderElement(): void;
    private getBookingMap;
    getGeneralCategoryDayColumns(addClass: string, isCategory: boolean, index: number): any[];
    getGeneralRoomDayColumns(roomId: string, roomCategory: RoomCategory, roomName: string): any;
    toggleCategory(roomCategory: RoomCategory): void;
    getRoomCategoryRow(roomCategory: RoomCategory, index: number): any;
    /**
     * Renders a list of active rooms for an expanded room category. Returns an array of JSX elements, including headers and day columns, or an empty array if the category is collapsed or contains no active rooms.
     *
     * @param {RoomCategory} roomCategory - The category containing room details.
     * @returns {JSX.Element[]} - JSX elements for the active rooms or an empty array.
     */
    private getRoomsByCategory;
    getRoomRows(): any;
    private confirmHousekeepingUpdate;
    render(): any;
    private renderModalBody;
}
