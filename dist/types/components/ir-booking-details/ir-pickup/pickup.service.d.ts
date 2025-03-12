import { TDueParams, TPickupData } from './types';
import { IBookingPickupInfo } from "../../../components";
import { z } from 'zod';
export declare class PickupService {
    savePickup(params: TPickupData, booking_nbr: string, is_remove: boolean): Promise<void>;
    transformDefaultPickupData(data: IBookingPickupInfo): TPickupData;
    getAvailableLocations(message: string): {
        value: number;
        text: string;
    }[];
    createPickupSchema(minDate: string, maxDate: string): z.ZodObject<{
        arrival_date: z.ZodEffects<z.ZodString, string, string>;
        arrival_time: z.ZodEffects<z.ZodString, string, string>;
        flight_details: z.ZodString;
        vehicle_type_code: z.ZodString;
        number_of_vehicles: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        arrival_time?: string;
        arrival_date?: string;
        flight_details?: string;
        vehicle_type_code?: string;
        number_of_vehicles?: number;
    }, {
        arrival_time?: string;
        arrival_date?: string;
        flight_details?: string;
        vehicle_type_code?: string;
        number_of_vehicles?: number;
    }>;
    validateForm(params: TPickupData, schema: any): {};
    getNumberOfVehicles(capacity: number, numberOfPersons: number): number[];
    private getPickUpPersonStatus;
    updateDue(params: TDueParams): number;
}
