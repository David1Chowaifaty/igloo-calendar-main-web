'use strict';

var enums = require('./enums-BSCnMYlE.js');
var types = require('./types-BlCoz3jZ.js');

/** The 13 fixed Accommodation Extras seeded on every property. */
const AccommodationExtraCode = {
    DayUse: 'DAY_USE'};
const ExtraServiceSection = {
    Accommodation: 'accommodation',
    BookingEngineAddon: 'addon',
};
const DayUseConfigSchema = types.objectType({
    block_night: types.booleanType().default(false),
    default_start_time: types.stringType().default('09:00'),
    default_end_time: types.stringType().default('18:00'),
});
const defaultDayUseConfig = () => ({
    block_night: false,
    default_start_time: '09:00',
    default_end_time: '18:00',
});
const ExtraServiceDefinitionSchema = types.objectType({
    id: types.numberType().default(-1),
    property_id: types.numberType(),
    section: types.enumType([ExtraServiceSection.Accommodation, ExtraServiceSection.BookingEngineAddon]),
    code: types.stringType().nullable(),
    name: types.stringType().trim().nonempty('Name is required'),
    default_price: types.coerce.number().min(0, 'Price must be 0 or more'),
    vat_mode: types.enumType([enums.VatIncludedCodes.Inclusive, enums.VatIncludedCodes.Exclusive]),
    allow_price_override: types.booleanType().default(false),
    is_active: types.booleanType().default(true),
    day_use_config: DayUseConfigSchema.nullable().optional().default(null),
});
const GetExposedExtraServicesPropsSchema = types.objectType({
    property_id: types.coerce.number(),
});
const HandleExposedExtraServicePropsSchema = types.objectType({
    extra_service: ExtraServiceDefinitionSchema,
});
function createBlankAddon(propertyId) {
    return {
        id: -1,
        property_id: propertyId,
        section: ExtraServiceSection.BookingEngineAddon,
        code: null,
        name: '',
        default_price: 0,
        vat_mode: enums.VatIncludedCodes.Exclusive,
        allow_price_override: false,
        is_active: true,
        day_use_config: null,
    };
}

exports.AccommodationExtraCode = AccommodationExtraCode;
exports.ExtraServiceDefinitionSchema = ExtraServiceDefinitionSchema;
exports.ExtraServiceSection = ExtraServiceSection;
exports.GetExposedExtraServicesPropsSchema = GetExposedExtraServicesPropsSchema;
exports.HandleExposedExtraServicePropsSchema = HandleExposedExtraServicePropsSchema;
exports.createBlankAddon = createBlankAddon;
exports.defaultDayUseConfig = defaultDayUseConfig;
