import { z } from "zod";
import { VatIncludedCodes } from "../../types/enums";
/** The 13 fixed Accommodation Extras seeded on every property. */
export const AccommodationExtraCode = {
    EarlyCheckin: 'EARLY_CHECKIN',
    LateCheckout: 'LATE_CHECKOUT',
    DayUse: 'DAY_USE',
    BabyCot: 'BABY_COT',
    ExtraBed: 'EXTRA_BED',
    HoneymoonPackage: 'HONEYMOON_PACKAGE',
    AnniversaryPackage: 'ANNIVERSARY_PACKAGE',
    Breakfast: 'BREAKFAST',
    Lunch: 'LUNCH',
    Dinner: 'DINNER',
    HalfBoard: 'HALF_BOARD',
    FullBoard: 'FULL_BOARD',
    Minibar: 'MINIBAR',
};
export const AccommodationExtraLabels = {
    [AccommodationExtraCode.EarlyCheckin]: 'Early Check-in',
    [AccommodationExtraCode.LateCheckout]: 'Late Check-out',
    [AccommodationExtraCode.DayUse]: 'Day Use',
    [AccommodationExtraCode.BabyCot]: 'Baby Cot',
    [AccommodationExtraCode.ExtraBed]: 'Extra Bed',
    [AccommodationExtraCode.HoneymoonPackage]: 'Honeymoon Package',
    [AccommodationExtraCode.AnniversaryPackage]: 'Anniversary Package',
    [AccommodationExtraCode.Breakfast]: 'Breakfast',
    [AccommodationExtraCode.Lunch]: 'Lunch',
    [AccommodationExtraCode.Dinner]: 'Dinner',
    [AccommodationExtraCode.HalfBoard]: 'Half Board',
    [AccommodationExtraCode.FullBoard]: 'Full Board',
    [AccommodationExtraCode.Minibar]: 'Minibar',
};
/** Ordered list used to render Accommodation Extras rows consistently. */
export const AccommodationExtraCodeOrder = [
    AccommodationExtraCode.EarlyCheckin,
    AccommodationExtraCode.LateCheckout,
    AccommodationExtraCode.DayUse,
    AccommodationExtraCode.BabyCot,
    AccommodationExtraCode.ExtraBed,
    AccommodationExtraCode.HoneymoonPackage,
    AccommodationExtraCode.AnniversaryPackage,
    AccommodationExtraCode.Breakfast,
    AccommodationExtraCode.Lunch,
    AccommodationExtraCode.Dinner,
    AccommodationExtraCode.HalfBoard,
    AccommodationExtraCode.FullBoard,
    AccommodationExtraCode.Minibar,
];
export const ExtraServiceSection = {
    Accommodation: 'accommodation',
    BookingEngineAddon: 'addon',
};
export const DayUseConfigSchema = z.object({
    block_night: z.boolean().default(false),
    default_start_time: z.string().default('09:00'),
    default_end_time: z.string().default('18:00'),
});
export const defaultDayUseConfig = () => ({
    block_night: false,
    default_start_time: '09:00',
    default_end_time: '18:00',
});
export const ExtraServiceDefinitionSchema = z.object({
    id: z.number().default(-1),
    property_id: z.number(),
    section: z.enum([ExtraServiceSection.Accommodation, ExtraServiceSection.BookingEngineAddon]),
    code: z.string().nullable(),
    name: z.string().trim().nonempty('Name is required'),
    default_price: z.coerce.number().min(0, 'Price must be 0 or more'),
    vat_mode: z.enum([VatIncludedCodes.Inclusive, VatIncludedCodes.Exclusive]),
    allow_price_override: z.boolean().default(false),
    is_active: z.boolean().default(true),
    day_use_config: DayUseConfigSchema.nullable().optional().default(null),
});
export const GetExposedExtraServicesPropsSchema = z.object({
    property_id: z.coerce.number(),
});
export const HandleExposedExtraServicePropsSchema = z.object({
    extra_service: ExtraServiceDefinitionSchema,
});
export function createDefaultAccommodationExtra(propertyId, code) {
    return {
        id: -1,
        property_id: propertyId,
        section: ExtraServiceSection.Accommodation,
        code,
        name: AccommodationExtraLabels[code],
        default_price: 0,
        vat_mode: VatIncludedCodes.Exclusive,
        allow_price_override: false,
        is_active: true,
        day_use_config: code === AccommodationExtraCode.DayUse ? defaultDayUseConfig() : null,
    };
}
export function createBlankAddon(propertyId) {
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
