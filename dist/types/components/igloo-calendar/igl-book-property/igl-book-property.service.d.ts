import { TSourceOption } from "../../../models/igl-book-property";
export declare class IglBookPropertyService {
    private variationService;
    setBookingInfoFromAutoComplete(context: any, res: any): void;
    resetRoomsInfoAndMessage(context: any): void;
    onDataRoomUpdate(event: CustomEvent, selectedUnits: Map<string, Map<string, any>>, isEdit: boolean, isEditBooking: boolean, name: string): Map<string, Map<string, any>>;
    private shouldClearData;
    private initializeRoomCategoryIfNeeded;
    private setSelectedRoomData;
    private cleanupEmptyData;
    private applyBookingEditToSelectedRoom;
    private calculateAmount;
    private generateDailyRates;
    private getBookedRooms;
    prepareBookUserServiceParams({ context, sourceOption, check_in }: {
        context: any;
        sourceOption: TSourceOption;
        check_in: boolean;
    }): Promise<any>;
    private getRoomCategoryByRoomId;
    setEditingRoomInfo(bookingData: any, selectedUnits: any): void;
}
