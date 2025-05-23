import { z } from "zod";
import { ZCurrency } from "./common";
import moment from "moment";
export const ZAllowedLocation = z.object({
    description: z.string(),
    id: z.number(),
});
export const ZVehicle = z.object({
    code: z.string(),
    description: z.string(),
    capacity: z.number(),
});
export const ZPriceModel = z.object({
    code: z.string(),
    description: z.string(),
});
export const ZAllowedOptions = z.object({
    amount: z.number(),
    currency: ZCurrency,
    id: z.number(),
    location: ZAllowedLocation,
    vehicle: ZVehicle,
    pricing_model: ZPriceModel,
});
export const PickupFormData = z.object({
    location: z.coerce.number(),
    flight_details: z.string().nullable().default(null),
    due_upon_booking: z.string(),
    number_of_vehicles: z.number().min(1),
    currency: ZCurrency,
    arrival_time: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Invalid time format. Please use HH:MM.'),
    arrival_date: z.custom((val) => moment.isMoment(val), {
        message: 'arrival date must be a valid Moment value',
    }),
    selected_option: ZAllowedOptions,
    vehicle_type_code: z.string(),
});
export const ZBookingPickupInfo = z.object({
    currency: ZCurrency,
    date: z.string(),
    details: z.string(),
    hour: z.number(),
    minute: z.number(),
    nbr_of_units: z.number(),
    selected_option: ZAllowedOptions,
    total: z.number(),
});
export const ZDueParams = z.object({
    code: z.string(),
    amount: z.number(),
    numberOfPersons: z.number(),
    number_of_vehicles: z.number(),
});
//# sourceMappingURL=pickup.js.map
