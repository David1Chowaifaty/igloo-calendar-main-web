import { TPickupFormData } from "../../models/pickup";
export declare class PropertyHelpers {
    convertPickup(pickup: TPickupFormData): any;
    updateBookingStore(data: any): void;
    collectRoomTypeIds(props: any): number[];
    collectRatePlanIds(props: any): number[];
    generateDays(from_date: Date, to_date: Date, amount: number): {
        date: string;
        amount: number;
        cost: null;
    }[];
    extractFirstNameAndLastName(index: number, guestName: string[]): {
        first_name: string;
        last_name: string;
    };
    fetchAvailabilityData(props: any, roomtypeIds: number[], rateplanIds: number[]): Promise<any>;
    private sortRoomTypes;
}
