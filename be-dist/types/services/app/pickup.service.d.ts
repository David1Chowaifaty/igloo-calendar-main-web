import { TPickupFormData } from "../../models/pickup";
export declare class PickupService {
    savePickup(params: TPickupFormData, booking_nbr: string, is_remove: boolean): Promise<void>;
    transformDefaultPickupData(data: any): {
        arrival_date: any;
        arrival_time: string;
        currency: any;
        due_upon_booking: any;
        flight_details: any;
        location: any;
        number_of_vehicles: any;
        selected_option: any;
        vehicle_type_code: any;
    };
    getAvailableLocations(message: string): Array<{
        id: number;
        value: string;
    }>;
    getNumberOfVehicles(capacity: number, numberOfPersons: number): number[];
    private getPickUpPersonStatus;
    updateDue(params: any): number;
}
