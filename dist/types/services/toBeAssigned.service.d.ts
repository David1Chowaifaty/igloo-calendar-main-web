import { IRoomCategory, InnerRecord } from '../models/tobeassigned';
export declare class ToBeAssignedService {
    getUnassignedDates(propertyid: number, from_date: string, to_date: string): Promise<Record<number, InnerRecord>>;
    getUnassignedRooms(calendarFromDates: {
        from_date: string;
        to_date: string;
    }, propertyid: number, specific_date: string, roomInfo: any, formattedLegendData: any): Promise<IRoomCategory[]>;
    assignUnit(props: {
        booking_nbr: string;
        identifier: string;
        pr_id: number;
        check_in: boolean;
    }): Promise<any>;
    private cleanSpacesAndSpecialChars;
    private transformToAssignable;
    addDefaultDateRange(roomCategory: IRoomCategory): void;
    private getRoomTypeId;
    private updateAvailableRooms;
    private convertUnassignedDates;
}
