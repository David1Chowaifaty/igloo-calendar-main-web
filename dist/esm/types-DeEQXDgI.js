import { l as libExports } from './index-DeW5X45W.js';
import { V as VatIncludedCodes } from './enums-CSCQSgBu.js';

/** The 13 fixed Accommodation Extras seeded on every property. */
const AccommodationExtraCode = {
    DayUse: 'DAY_USE'};
const ExtraServiceSection = {
    Accommodation: 'accommodation',
    BookingEngineAddon: 'addon',
};
const DayUseConfigSchema = libExports.z.object({
    block_night: libExports.z.boolean().default(false),
    default_start_time: libExports.z.string().default('09:00'),
    default_end_time: libExports.z.string().default('18:00'),
});
const defaultDayUseConfig = () => ({
    block_night: false,
    default_start_time: '09:00',
    default_end_time: '18:00',
});
const ExtraServiceDefinitionSchema = libExports.z.object({
    id: libExports.z.number().default(-1),
    property_id: libExports.z.number(),
    section: libExports.z.enum([ExtraServiceSection.Accommodation, ExtraServiceSection.BookingEngineAddon]),
    code: libExports.z.string().nullable(),
    name: libExports.z.string().trim().nonempty('Name is required'),
    default_price: libExports.z.coerce.number().min(0, 'Price must be 0 or more'),
    vat_mode: libExports.z.enum([VatIncludedCodes.Inclusive, VatIncludedCodes.Exclusive]),
    allow_price_override: libExports.z.boolean().default(false),
    is_active: libExports.z.boolean().default(true),
    day_use_config: DayUseConfigSchema.nullable().optional().default(null),
});
const GetExposedExtraServicesPropsSchema = libExports.z.object({
    property_id: libExports.z.coerce.number(),
});
const HandleExposedExtraServicePropsSchema = libExports.z.object({
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
