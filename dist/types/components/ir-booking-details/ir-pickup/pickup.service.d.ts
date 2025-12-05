import { z, ZodTypeAny } from 'zod';
import { IBookingPickupInfo } from "../../../components";
import { TDueParams, TPickupData } from './types';
export declare class PickupService {
    savePickup(params: TPickupData, booking_nbr: string, is_remove: boolean): Promise<void>;
    transformDefaultPickupData(data: IBookingPickupInfo): TPickupData;
    getAvailableLocations(message: string): {
        value: number;
        text: string;
    }[];
    createPickupSchema(minDate: string, maxDate: string, options?: {
        allowRemoval?: boolean;
    }): z.ZodObject<{
        location: z.ZodEffects<z.ZodEffects<z.ZodNumber, number, unknown>, number, unknown>;
        arrival_date: z.ZodEffects<z.ZodEffects<z.ZodString, string, unknown>, string, unknown>;
        arrival_time: z.ZodEffects<z.ZodString, string, string>;
        flight_details: z.ZodEffects<z.ZodString, string, unknown>;
        vehicle_type_code: z.ZodEffects<z.ZodString, string, unknown>;
        number_of_vehicles: z.ZodEffects<z.ZodNumber, number, unknown>;
    }, "strip", z.ZodTypeAny, {
        location?: number;
        arrival_time?: string;
        arrival_date?: string;
        flight_details?: string;
        vehicle_type_code?: string;
        number_of_vehicles?: number;
    }, {
        location?: unknown;
        arrival_time?: string;
        arrival_date?: unknown;
        flight_details?: unknown;
        vehicle_type_code?: unknown;
        number_of_vehicles?: unknown;
    }>;
    validateForm(params: TPickupData, schema: ZodTypeAny): z.SafeParseReturnType<any, any>;
    getNumberOfVehicles(capacity: number, numberOfPersons: number): number[];
    private getPickUpPersonStatus;
    updateDue(params: TDueParams): number;
}
