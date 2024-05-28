'use strict';

const index = require('./index-42419b2e.js');

const ZCurrency = index.z.object({
    code: index.z.string(),
    name: index.z.string().optional(),
    symbol: index.z.string(),
    id: index.z.coerce.number().optional(),
});

const ZAllowedLocation = index.z.object({
    description: index.z.string(),
    id: index.z.number(),
});
const ZVehicle = index.z.object({
    code: index.z.string(),
    description: index.z.string(),
    capacity: index.z.number(),
});
const ZPriceModel = index.z.object({
    code: index.z.string(),
    description: index.z.string(),
});
const ZAllowedOptions = index.z.object({
    amount: index.z.number(),
    currency: ZCurrency,
    id: index.z.number(),
    location: ZAllowedLocation,
    vehicle: ZVehicle,
    pricing_model: ZPriceModel,
});
const PickupFormData = index.z.object({
    location: index.z.coerce.number(),
    flight_details: index.z.string().nullable().default(null),
    due_upon_booking: index.z.string(),
    number_of_vehicles: index.z.number().min(1),
    currency: ZCurrency,
    arrival_time: index.z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Invalid time format. Please use HH:MM.'),
    arrival_date: index.z.string(),
    selected_option: ZAllowedOptions,
    vehicle_type_code: index.z.string(),
});
index.z.object({
    currency: ZCurrency,
    date: index.z.string(),
    details: index.z.string(),
    hour: index.z.number(),
    minute: index.z.number(),
    nbr_of_units: index.z.number(),
    selected_option: ZAllowedOptions,
    total: index.z.number(),
});
index.z.object({
    code: index.z.string(),
    amount: index.z.number(),
    numberOfPersons: index.z.number(),
    number_of_vehicles: index.z.number(),
});

const IrUserFormData = index.z.object({
    firstName: index.z.string().min(2, {
        message: 'FullNameCannotBeEmpty',
    }),
    lastName: index.z.string().min(2, {
        message: 'LastNameCannotBeEmpty',
    }),
    email: index.z.string().email({ message: 'InvalidEmail' }),
    mobile_number: index.z.coerce.number().min(5),
    arrival_time: index.z.string(),
    message: index.z.string().optional(),
    bookingForSomeoneElse: index.z.boolean().default(false),
    country_id: index.z.coerce.number(),
    country_code: index.z.string().min(1),
});
IrUserFormData.strip().parse;

exports.IrUserFormData = IrUserFormData;
exports.PickupFormData = PickupFormData;

//# sourceMappingURL=user_form-17906112.js.map