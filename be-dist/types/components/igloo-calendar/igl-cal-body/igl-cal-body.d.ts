import { EventEmitter } from '../../../stencil-public-runtime';
import { RoomType } from "../../../models/booking.dto";
export type RoomCategory = RoomType & {
    expanded: boolean;
};
export declare class IglCalBody {
    showBookingPopup: EventEmitter;
    scrollPageToRoom: EventEmitter;
    isScrollViewDragging: boolean;
    calendarData: {
        [key: string]: any;
    };
    today: String;
    currency: any;
    language: string;
    countryNodeList: any;
    dragOverElement: string;
    renderAgain: boolean;
    highlightedDate: string;
    addBookingDatasEvent: EventEmitter<any[]>;
    private selectedRooms;
    private fromRoomId;
    private newEvent;
    private currentDate;
    componentWillLoad(): void;
    dragOverHighlightElementHandler(event: CustomEvent): void;
    gotoRoom(event: CustomEvent): void;
    addToBeAssignedEvents(event: CustomEvent): void;
    scrollToRoom(roomId: any): void;
    getRoomCategoryByRoomId(roomId: any): any;
    getCategoryName(roomCategory: any): any;
    getCategoryId(roomCategory: any): any;
    getTotalPhysicalRooms(roomCategory: any): number;
    getCategoryRooms(roomCategory: RoomCategory): any[];
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
    getGeneralCategoryDayColumns(addClass: string, isCategory: boolean, index: number): any[];
    getGeneralRoomDayColumns(roomId: string, roomCategory: RoomCategory): any;
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
    render(): any;
}
