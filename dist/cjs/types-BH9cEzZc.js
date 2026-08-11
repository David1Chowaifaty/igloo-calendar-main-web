'use strict';

var index = require('./index-CLqkDPTC.js');
var enums = require('./enums-CF2eqtU7.js');

/** The 13 fixed Accommodation Extras seeded on every property. */
const AccommodationExtraCode = {
    DayUse: 'DAY_USE'};
const ExtraServiceSection = {
    Accommodation: 'accommodation',
    BookingEngineAddon: 'addon',
};
const DayUseConfigSchema = index.libExports.z.object({
    block_night: index.libExports.z.boolean().default(false),
    default_start_time: index.libExports.z.string().default('09:00'),
    default_end_time: index.libExports.z.string().default('18:00'),
});
const defaultDayUseConfig = () => ({
    block_night: false,
    default_start_time: '09:00',
    default_end_time: '18:00',
});
const ExtraServiceDefinitionSchema = index.libExports.z.object({
    id: index.libExports.z.number().default(-1),
    property_id: index.libExports.z.number(),
    section: index.libExports.z.enum([ExtraServiceSection.Accommodation, ExtraServiceSection.BookingEngineAddon]),
    code: index.libExports.z.string().nullable(),
    name: index.libExports.z.string().trim().nonempty('Name is required'),
    default_price: index.libExports.z.coerce.number().min(0, 'Price must be 0 or more'),
    vat_mode: index.libExports.z.enum([enums.VatIncludedCodes.Inclusive, enums.VatIncludedCodes.Exclusive]),
    allow_price_override: index.libExports.z.boolean().default(false),
    is_active: index.libExports.z.boolean().default(true),
    day_use_config: DayUseConfigSchema.nullable().optional().default(null),
});
const GetExposedExtraServicesPropsSchema = index.libExports.z.object({
    property_id: index.libExports.z.coerce.number(),
});
const HandleExposedExtraServicePropsSchema = index.libExports.z.object({
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
