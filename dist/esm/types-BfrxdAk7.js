import { V as VatIncludedCodes } from './enums-CSCQSgBu.js';
import { o as objectType, s as stringType, b as booleanType, e as enumType, c as coerce, n as numberType } from './types-CB66a07H.js';

/** The 13 fixed Accommodation Extras seeded on every property. */
const AccommodationExtraCode = {
    DayUse: 'DAY_USE'};
const ExtraServiceSection = {
    Accommodation: 'accommodation',
    BookingEngineAddon: 'addon',
};
const DayUseConfigSchema = objectType({
    block_night: booleanType().default(false),
    default_start_time: stringType().default('09:00'),
    default_end_time: stringType().default('18:00'),
});
const defaultDayUseConfig = () => ({
    block_night: false,
    default_start_time: '09:00',
    default_end_time: '18:00',
});
const ExtraServiceDefinitionSchema = objectType({
    id: numberType().default(-1),
    property_id: numberType(),
    section: enumType([ExtraServiceSection.Accommodation, ExtraServiceSection.BookingEngineAddon]),
    code: stringType().nullable(),
    name: stringType().trim().nonempty('Name is required'),
    default_price: coerce.number().min(0, 'Price must be 0 or more'),
    vat_mode: enumType([VatIncludedCodes.Inclusive, VatIncludedCodes.Exclusive]),
    allow_price_override: booleanType().default(false),
    is_active: booleanType().default(true),
    day_use_config: DayUseConfigSchema.nullable().optional().default(null),
});
const GetExposedExtraServicesPropsSchema = objectType({
    property_id: coerce.number(),
});
const HandleExposedExtraServicePropsSchema = objectType({
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
        vat_mode: VatIncludedCodes.Exclusive,
        allow_price_override: false,
        is_active: true,
        day_use_config: null,
    };
}

export { AccommodationExtraCode as A, ExtraServiceSection as E, GetExposedExtraServicesPropsSchema as G, HandleExposedExtraServicePropsSchema as H, ExtraServiceDefinitionSchema as a, createBlankAddon as c, defaultDayUseConfig as d };
