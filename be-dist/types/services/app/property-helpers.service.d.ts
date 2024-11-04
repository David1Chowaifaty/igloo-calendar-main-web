import { TPickupFormData } from "../../models/pickup";
export declare class PropertyHelpers {
    private static readonly MODE_MODIFY_RT;
    private static readonly MODE_DEFAULT;
    private paymentService;
    validateModeProps(props: any): void;
    convertPickup(pickup: TPickupFormData): any;
    updateBookingStore(data: any, props: any): void;
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
    private validateFreeCancelationZone;
    private updateInventory;
    private updateRatePlan;
    private sortRoomTypes;
    private updateRoomTypeRatePlans;
}
