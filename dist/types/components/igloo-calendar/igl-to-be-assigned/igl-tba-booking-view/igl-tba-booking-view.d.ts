import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class IglTbaBookingView {
    calendarData: {
        [key: string]: any;
    };
    selectedDate: any;
    eventData: {
        [key: string]: any;
    };
    categoriesData: {
        [key: string]: any;
    };
    categoryId: any;
    categoryIndex: any;
    eventIndex: any;
    renderAgain: boolean;
    selectedRoom: number;
    isLoading: 'default' | 'checkin' | null;
    private highlightSection;
    private allRoomsList;
    private toBeAssignedService;
    highlightToBeAssignedBookingEvent: EventEmitter;
    addToBeAssignedEvent: EventEmitter;
    scrollPageToRoom: EventEmitter;
    assignRoomEvent: EventEmitter<{
        [key: string]: any;
    }>;
    componentShouldUpdate(newValue: string, oldValue: string, propName: string): boolean;
    componentWillLoad(): void;
    highlightBookingEvent(event: CustomEvent): void;
    private onSelectRoom;
    private handleAssignUnit;
    private handleHighlightAvailability;
    private handleCloseAssignment;
    private renderView;
    private canCheckIn;
    render(): any;
}
