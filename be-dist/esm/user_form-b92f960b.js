import { z } from './index-1e9e0a3e.js';

const ZCurrency = z.object({
    code: z.string(),
    name: z.string().optional(),
    symbol: z.string(),
    id: z.coerce.number().optional(),
});

const ZAllowedLocation = z.object({
    description: z.string(),
    id: z.number(),
});
const ZVehicle = z.object({
    code: z.string(),
    description: z.string(),
    capacity: z.number(),
});
const ZPriceModel = z.object({
    code: z.string(),
    description: z.string(),
});
const ZAllowedOptions = z.object({
    amount: z.number(),
    currency: ZCurrency,
    id: z.number(),
    location: ZAllowedLocation,
    vehicle: ZVehicle,
    pricing_model: ZPriceModel,
});
const PickupFormData = z.object({
    location: z.coerce.number(),
    flight_details: z.string().nullable().default(null),
    due_upon_booking: z.string(),
    number_of_vehicles: z.number().min(1),
    currency: ZCurrency,
    arrival_time: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Invalid time format. Please use HH:MM.'),
    arrival_date: z.string(),
    selected_option: ZAllowedOptions,
    vehicle_type_code: z.string(),
});
z.object({
    currency: ZCurrency,
    date: z.string(),
    details: z.string(),
    hour: z.number(),
    minute: z.number(),
    nbr_of_units: z.number(),
    selected_option: ZAllowedOptions,
    total: z.number(),
});
z.object({
    code: z.string(),
    amount: z.number(),
    numberOfPersons: z.number(),
    number_of_vehicles: z.number(),
});

const IrUserFormData = z.object({
    firstName: z.string().min(2, {
        message: 'FullNameCannotBeEmpty',
    }),
    lastName: z.string().min(2, {
        message: 'LastNameCannotBeEmpty',
    }),
    email: z.string().email({ message: 'InvalidEmail' }),
    mobile_number: z.coerce.number().min(5),
    arrival_time: z.string(),
    message: z.string().optional(),
    bookingForSomeoneElse: z.boolean().default(false),
    country_id: z.coerce.number(),
    country_code: z.string().min(1),
});
IrUserFormData.strip().parse;

export { IrUserFormData as I, PickupFormData as P };

//# sourceMappingURL=user_form-b92f960b.js.map