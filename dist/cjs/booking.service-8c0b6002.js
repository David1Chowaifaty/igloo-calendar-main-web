'use strict';

const axios = require('./axios-6e678d52.js');
const index = require('./index-8bb117a0.js');
const utils = require('./utils-2cdf6642.js');
const booking = require('./booking-bd08a013.js');
const calendarData = require('./calendar-data-0598de26.js');
const index$1 = require('./index-fbf1fe1d.js');
const moment = require('./moment-1780b03a.js');
const locales_store = require('./locales.store-32782582.js');

const ZIEntrySchema = index.z.object({
    CODE_NAME: index.z.string(),
    CODE_VALUE_AR: index.z.string().nullable(),
    CODE_VALUE_DE: index.z.string().nullable(),
    CODE_VALUE_EL: index.z.string().nullable(),
    CODE_VALUE_EN: index.z.string().nullable(),
    CODE_VALUE_FR: index.z.string().nullable(),
    CODE_VALUE_HE: index.z.string().nullable(),
    CODE_VALUE_PL: index.z.string().nullable(),
    CODE_VALUE_RU: index.z.string().nullable(),
    CODE_VALUE_UA: index.z.string().nullable(),
    DISPLAY_ORDER: index.z.number().nullable(),
    ENTRY_DATE: index.z.string().nullable(),
    ENTRY_USER_ID: index.z.number().nullable(),
    INVARIANT_VALUE: index.z.string().nullable(),
    ISDELETEABLE: index.z.boolean(),
    ISDELETED: index.z.boolean(),
    ISSYSTEM: index.z.boolean(),
    ISUPDATEABLE: index.z.boolean(),
    ISVISIBLE: index.z.boolean(),
    NOTES: index.z.string().nullable(),
    OWNER_ID: index.z.number().nullable(),
    TBL_NAME: index.z.string(),
});
var AmenityType;
(function (AmenityType) {
    AmenityType["Room"] = "room";
})(AmenityType || (AmenityType = {}));
var Name;
(function (Name) {
    Name["Penthouse"] = "Penthouse";
    Name["PremiumSuites"] = "Premium Suites";
    Name["StandardRooms"] = "Standard Rooms";
})(Name || (Name = {}));
var Code;
(function (Code) {
    Code["Empty"] = "";
    Code["The001"] = "001";
    Code["The002"] = "002";
})(Code || (Code = {}));

class VariationService {
    /**
     * Formats a variation based on the number of infants and returns a formatted string.
     * @param {Object} params - The input parameters.
     * @param {Variation} params.baseVariation - The base variation object.
     * @param {Variation[]} params.variations - A list of available variations.
     * @param {number} params.infants - The number of infants to adjust the variation for.
     * @returns {string} A formatted string describing the variation adjusted for infants.
     */
    formatVariationBasedOnInfants(params) {
        const variation = this.getVariationBasedOnInfants(params);
        return this.formatVariation(variation, params.infants);
    }
    /**
     * Calculates the discounted amount for a variation adjusted for the number of infants.
     * @param {Object} params - The input parameters.
     * @param {Variation} params.baseVariation - The base variation object.
     * @param {Variation[]} params.variations - A list of available variations.
     * @param {number} params.infants - The number of infants to consider for adjustments.
     * @returns {number} The discounted amount for the selected variation, or 0 if no discounted amount is available.
     */
    calculateVariationAmount(params) {
        return this.getVariationBasedOnInfants(params)?.discounted_amount || 0;
    }
    /**
     * Finds the appropriate variation from a list of variations based on the number of infants.
     * @param {Object} params - The input parameters.
     * @param {Variation} params.baseVariation - The base variation object.
     * @param {Variation[]} params.variations - A list of available variations.
     * @param {number} params.infants - The number of infants to adjust for.
     * @returns {Variation} The matching variation or the base variation if no match is found.
     */
    getVariationBasedOnInfants({ variations, baseVariation, infants }) {
        const { adult_nbr, child_nbr } = baseVariation;
        return variations.find(v => v.adult_nbr === adult_nbr && v.child_nbr === Math.max(0, child_nbr - Math.max(0, infants))) || baseVariation;
    }
    /**
     * Formats a variation object into a human-readable string, adjusted for the number of infants.
     * @param {Variation} variation - The variation object to format.
     * @param {number} infant_nbr - The number of infants to adjust for.
     * @returns {string} A formatted string representing the variation.
     * @private
     */
    formatVariation({ child_nbr, adult_nbr }, infant_nbr) {
        const adultNumber = Number(adult_nbr) || 0;
        const infantNumber = Math.max(Number(infant_nbr) || 0, 0);
        const adultLabel = adultNumber > 1 ? locales_store.locales.entries.Lcz_Adults.toLowerCase() : locales_store.locales.entries.Lcz_Adult.toLowerCase();
        const childLabel = child_nbr > 1 ? locales_store.locales.entries.Lcz_Children.toLowerCase() : locales_store.locales.entries.Lcz_Child.toLowerCase();
        const infantLabel = infantNumber > 1 ? (locales_store.locales.entries['Lcz_Infants'] ?? 'infants')?.toLowerCase() : (locales_store.locales?.entries['Lcz_Infant'] ?? 'infant')?.toLowerCase();
        const parts = [`${adultNumber} ${adultLabel}`, child_nbr ? `${child_nbr} ${childLabel}` : '', infantNumber ? `${infantNumber} ${infantLabel}` : ''];
        return parts.filter(Boolean).join('&nbsp&nbsp&nbsp&nbsp');
    }
}

const bookedByGuestBaseData = {
    id: -1,
    email: '',
    company: '',
    firstName: '',
    lastName: '',
    countryId: '',
    phone_prefix: '',
    mobile: '',
    selectedArrivalTime: '',
    emailGuest: true,
    note: '',
    cardNumber: '',
    cardHolderName: '',
    expiryMonth: '',
    expiryYear: '',
};
// -----------------------------------------------------------------------------
// Store Initialization
// -----------------------------------------------------------------------------
const initialState = {
    bookedByGuest: bookedByGuestBaseData,
    bookedByGuestManuallyEdited: false,
    bookingDraft: {
        dates: {
            checkIn: moment.hooks().startOf('day'),
            checkOut: moment.hooks().add(1, 'day'),
        },
        occupancy: {
            adults: null,
            children: null,
        },
        source: null,
    },
    selects: {
        sources: [],
        ratePricingMode: [],
        arrivalTime: [],
        bedPreferences: [],
        countries: [],
    },
    checkout_guest: null,
    guest: null,
    tax_statement: null,
    roomTypes: [],
    enableBooking: false,
    resetBooking: false,
    ratePlanSelections: {},
    selectedPaymentMethod: null,
    isInFreeCancelationZone: false,
    bookingAvailabilityParams: {
        from_date: null,
        to_date: null,
        adult_nbr: 0,
        child_nbr: 0,
        infant_nbr: 0,
    },
    booking: null,
    fictus_booking_nbr: null,
    event_type: { type: 'PLUS_BOOKING' },
};
let { state: booking_store, onChange: onRoomTypeChange, reset } = index$1.createStore(initialState);
// -----------------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------------
/**
 * Clears the booking store. Optionally rehydrates dropdowns and guest info when keeping the modal open.
 */
function resetBookingStore(closeModal) {
    const { bookingDraft, selects, bookedByGuest } = booking_store;
    reset();
    if (!closeModal) {
        setBookingDraft(bookingDraft);
        updateBookedByGuest(bookedByGuest);
        setBookingSelectOptions(selects);
    }
}
/**
 * Convenience helper that resets shared state while keeping the modal visible.
 */
function resetAvailability() {
    resetBookingStore(false);
}
/**
 * Updates booking draft pieces (dates, occupancy, source) while keeping unrelated keys intact.
 */
function setBookingDraft(params) {
    booking_store.bookingDraft = {
        ...booking_store.bookingDraft,
        ...params,
        dates: {
            ...booking_store.bookingDraft.dates,
            ...params.dates,
        },
        occupancy: {
            ...booking_store.bookingDraft.occupancy,
            ...params.occupancy,
        },
    };
}
/**
 * Updates dropdown lookup datasets (sources, bed preferences, etc.).
 */
function setBookingSelectOptions(params) {
    booking_store.selects = {
        ...booking_store.selects,
        ...params,
    };
}
/**
 * Ensures the selected variation still exists on the server payload.
 */
function resolveSelectedVariation(variations, selected_variation) {
    if (!variations) {
        return null;
    }
    if (!selected_variation || booking_store.resetBooking) {
        return variations[0];
    }
    return variations?.find(v => v.adult_nbr === selected_variation.adult_nbr && v.child_nbr === selected_variation.child_nbr) ?? null;
}
/**
 * Keeps `ratePlanSelections` in sync when backend refreshes available room types.
 */
onRoomTypeChange('roomTypes', (newValue) => {
    const currentSelections = booking_store.ratePlanSelections;
    const ratePlanSelections = {};
    newValue.forEach(roomType => {
        if (!roomType.is_active)
            return;
        ratePlanSelections[roomType.id] = ratePlanSelections[roomType.id] || {};
        roomType.rateplans.forEach(ratePlan => {
            if (!ratePlan.is_active || !ratePlan?.variations?.length)
                return;
            const currentRatePlanSelection = currentSelections[roomType.id]?.[ratePlan.id];
            ratePlanSelections[roomType.id][ratePlan.id] =
                currentRatePlanSelection && Object.keys(currentRatePlanSelection).length > 0
                    ? {
                        ...currentRatePlanSelection,
                        ratePlan,
                        selected_variation: resolveSelectedVariation(ratePlan.variations, currentRatePlanSelection.selected_variation) ?? null,
                        visibleInventory: roomType.inventory,
                        reserved: roomType.inventory === 0 ? 0 : booking_store.resetBooking ? 0 : currentRatePlanSelection.reserved,
                        checkoutVariations: roomType.inventory === 0 ? [] : currentRatePlanSelection.checkoutVariations,
                        checkoutBedSelection: roomType.inventory === 0 ? [] : currentRatePlanSelection.checkoutBedSelection,
                        checkoutSmokingSelection: roomType.inventory === 0 ? [] : currentRatePlanSelection.checkoutSmokingSelection,
                        guestName: roomType.inventory === 0 ? [] : currentRatePlanSelection.guestName,
                        roomtype: {
                            ...currentRatePlanSelection.roomtype,
                        },
                    }
                    : {
                        reserved: 0,
                        rp_amount: 0,
                        view_mode: '001',
                        guest: null,
                        visibleInventory: roomType.inventory,
                        selected_variation: ratePlan?.variations[0] ?? null,
                        ratePlan,
                        guestName: [],
                        is_bed_configuration_enabled: roomType.is_bed_configuration_enabled,
                        roomtype: {
                            ...roomType,
                            physicalrooms: null,
                            rateplans: null,
                            availabilities: null,
                        },
                        checkoutVariations: [],
                        checkoutBedSelection: [],
                        checkoutSmokingSelection: [],
                    };
        });
    });
    booking_store.ratePlanSelections = ratePlanSelections;
    booking_store.resetBooking = false;
});
// -----------------------------------------------------------------------------
// State Mutators
// -----------------------------------------------------------------------------
/**
 * Partially updates the booked-by guest snapshot, preserving other properties.
 */
function updateBookedByGuest(params) {
    booking_store.bookedByGuest = {
        ...booking_store.bookedByGuest,
        ...params,
    };
}
/**
 * Updates the guest list assigned to a specific rate plan selection.
 */
function updateRoomGuest({ guest, ratePlanId, roomTypeId, ratePlanSelection, }) {
    booking_store.ratePlanSelections = {
        ...booking_store.ratePlanSelections,
        [roomTypeId]: {
            ...booking_store.ratePlanSelections[roomTypeId],
            [ratePlanId]: { ...ratePlanSelection, guest: [...guest] },
        },
    };
}
/**
 * Recomputes remaining visible inventory for a room type whenever selections change.
 */
function updateInventory(roomTypeId) {
    const roomTypeSelection = booking_store.ratePlanSelections[roomTypeId];
    if (!roomTypeSelection) {
        return;
    }
    const roomTypeData = booking_store.roomTypes.find(rt => rt.id === roomTypeId);
    if (!roomTypeData) {
        return;
    }
    const totalReserved = Object.values(roomTypeSelection).reduce((acc, ratePlan) => acc + ratePlan.reserved, 0);
    let hasChanges = false;
    const newRatePlans = Object.entries(roomTypeSelection).reduce((acc, [ratePlanId, ratePlan]) => {
        const roomsExcludingCurrent = totalReserved - ratePlan.reserved;
        const availableRooms = Math.max(roomTypeData.inventory - roomsExcludingCurrent, 0);
        if (ratePlan.visibleInventory !== availableRooms) {
            hasChanges = true;
            acc[ratePlanId] = { ...ratePlan, visibleInventory: availableRooms };
        }
        else {
            acc[ratePlanId] = ratePlan;
        }
        return acc;
    }, {});
    if (hasChanges) {
        booking_store.ratePlanSelections = {
            ...booking_store.ratePlanSelections,
            [roomTypeId]: newRatePlans,
        };
    }
}
/**
 * Returns true when any room type currently has at least one reservation selected.
 */
function hasAtLeastOneRoomSelected() {
    return Object.values(booking_store.ratePlanSelections).some(roomTypeSelection => Object.values(roomTypeSelection).some(ratePlan => ratePlan.reserved > 0));
}
/**
 * Applies a patch of values to the given room type & rate plan combination.
 */
function updateRoomParams({ ratePlanId, roomTypeId, params }) {
    booking_store.ratePlanSelections = {
        ...booking_store.ratePlanSelections,
        [Number(roomTypeId)]: {
            ...booking_store.ratePlanSelections[Number(roomTypeId)],
            [ratePlanId]: {
                ...booking_store.ratePlanSelections[roomTypeId][ratePlanId],
                ...params,
            },
        },
    };
}
/**
 * Reserves a number of rooms for a rate plan and bootstraps its selection entry if needed.
 */
function reserveRooms({ ratePlanId, roomTypeId, rooms, guest }) {
    if (!booking_store.ratePlanSelections[roomTypeId]) {
        booking_store.ratePlanSelections[roomTypeId] = {};
    }
    const roomType = booking_store.roomTypes?.find(r => r.id === roomTypeId);
    if (!roomType) {
        throw new Error('Invalid room type id');
    }
    const ratePlan = roomType.rateplans.find(r => r.id === ratePlanId);
    if (!ratePlan) {
        throw new Error('Invalid rate plan');
    }
    let newGuest = Array.from({ length: rooms }, () => ({ first_name: '', last_name: '', unit: null, bed_preference: null, infant_nbr: null }));
    if (guest) {
        newGuest = guest;
    }
    if (!booking_store.ratePlanSelections[roomTypeId][ratePlanId]) {
        booking_store.ratePlanSelections[roomTypeId][ratePlanId] = {
            guestName: [],
            reserved: 0,
            view_mode: '001',
            rp_amount: 0,
            guest: newGuest,
            is_bed_configuration_enabled: roomType.is_bed_configuration_enabled,
            visibleInventory: 0,
            selected_variation: null,
            ratePlan,
            checkoutVariations: [],
            checkoutBedSelection: [],
            checkoutSmokingSelection: [],
            roomtype: {
                id: roomType.id,
                name: roomType.name,
                physicalrooms: null,
                rateplans: null,
                availabilities: null,
                inventory: roomType.inventory,
                rate: roomType.rate,
                bedding_setup: roomType.bedding_setup,
                smoking_option: roomType.smoking_option,
                is_bed_configuration_enabled: roomType.is_bed_configuration_enabled,
            },
        };
    }
    booking_store.ratePlanSelections = {
        ...booking_store.ratePlanSelections,
        [Number(roomTypeId)]: {
            ...booking_store.ratePlanSelections[Number(roomTypeId)],
            [ratePlanId]: {
                ...booking_store.ratePlanSelections[roomTypeId][ratePlanId],
                reserved: rooms,
                checkoutVariations: [],
                guest: newGuest,
            },
        },
    };
    updateInventory(roomTypeId);
}
// -----------------------------------------------------------------------------
// Selectors & Derived Data
// -----------------------------------------------------------------------------
/**
 * Safely retrieves the selection payload for a specific room type/rate plan pair.
 */
function getVisibleInventory(roomTypeId, ratePlanId) {
    if (!booking_store.ratePlanSelections || !booking_store.ratePlanSelections[roomTypeId]) {
        return {
            reserved: 0,
            guest: null,
            visibleInventory: 0,
            selected_variation: null,
            ratePlan: null,
            guestName: [],
            is_bed_configuration_enabled: false,
            checkoutVariations: [],
            checkoutBedSelection: [],
            checkoutSmokingSelection: [],
            rp_amount: 0,
            view_mode: '001',
            roomtype: null,
        };
    }
    return booking_store.ratePlanSelections[roomTypeId][ratePlanId];
}
/**
 * Generic setter for store keys when more specific helpers are unnecessary.
 */
function modifyBookingStore(key, value) {
    booking_store[key] = value;
}
/**
 * Returns the amount displayed for a rate plan, honoring overrides and nightly view.
 */
async function getRatePlanDisplayAmount({ rateplanSelection, totalNights, index, bookingService, variationService, }) {
    if (rateplanSelection.is_amount_modified) {
        const net = rateplanSelection.view_mode === '001' ? rateplanSelection.rp_amount : rateplanSelection.rp_amount * totalNights;
        const tax = await bookingService.calculateExclusiveTax({
            property_id: calendarData.calendar_data.property.id,
            amount: net,
        });
        return net + tax;
    }
    const guestInfo = rateplanSelection.guest ? rateplanSelection.guest[index] : null;
    let variation = rateplanSelection.selected_variation;
    if (guestInfo.infant_nbr) {
        variation = variationService.getVariationBasedOnInfants({
            variations: rateplanSelection.ratePlan.variations,
            baseVariation: rateplanSelection.selected_variation,
            infants: guestInfo?.infant_nbr,
        });
    }
    return variation?.discounted_gross_amount ?? 0;
}
/**
 * Aggregates the total booking price combining all selected rate plans.
 */
async function getBookingTotalPrice() {
    const dateDiff = booking.calculateDaysBetweenDates(booking_store.bookingDraft.dates.checkIn.format('YYYY-MM-DD'), booking_store.bookingDraft.dates.checkOut.format('YYYY-MM-DD'));
    const bookingService = new BookingService();
    const variationService = new VariationService();
    let totalPrice = 0;
    for (const roomTypeSelection of Object.values(booking_store.ratePlanSelections)) {
        for (let j = 0; j < Object.values(roomTypeSelection).length; j++) {
            const ratePlan = Object.values(roomTypeSelection)[j];
            if (ratePlan.reserved === 0)
                continue;
            const rateAmount = await getRatePlanDisplayAmount({
                bookingService,
                variationService,
                index: j,
                rateplanSelection: ratePlan,
                totalNights: dateDiff,
            });
            totalPrice += rateAmount * ratePlan.reserved;
        }
    }
    return Number(totalPrice.toFixed(2));
}
/**
 * Counts the number of reserved rooms across all rate plans.
 */
function calculateTotalRooms() {
    return Object.values(booking_store.ratePlanSelections).reduce((total, value) => {
        return (total +
            Object.values(value).reduce((innerTotal, ratePlan) => {
                if (ratePlan.reserved === 0) {
                    return innerTotal;
                }
                return innerTotal + ratePlan.reserved;
            }, 0));
    }, 0);
}
/**
 * Clears all reserved rooms and resets per-rate-plan metadata.
 */
function resetReserved() {
    const updatedSelections = Object.entries(booking_store.ratePlanSelections).reduce((acc, [roomTypeId, ratePlans]) => {
        const roomType = booking_store.roomTypes.find(rt => rt.id.toString() === roomTypeId.toString());
        acc[roomTypeId] = Object.entries(ratePlans).reduce((rpAcc, [ratePlanId, ratePlan]) => {
            const initialInventory = roomType?.inventory ?? ratePlan.roomtype?.inventory ?? ratePlan.visibleInventory;
            rpAcc[ratePlanId] = {
                ...ratePlan,
                reserved: 0,
                guest: null,
                guestName: [],
                checkoutVariations: [],
                checkoutBedSelection: [],
                checkoutSmokingSelection: [],
                visibleInventory: initialInventory ?? 0,
            };
            return rpAcc;
        }, {});
        return acc;
    }, {});
    booking_store.ratePlanSelections = { ...updatedSelections };
}
/**
 * Flags whether the booked-by guest fields were manually edited (for UX hints elsewhere).
 */
function setBookedByGuestManualEditState(isEdited) {
    booking_store.bookedByGuestManuallyEdited = isEdited;
}
/**
 * Returns a flat array of each reserved room along with its guest/context.
 */
function getReservedRooms() {
    const reservedRooms = [];
    Object.entries(booking_store.ratePlanSelections).forEach(([roomTypeId, ratePlans]) => {
        Object.entries(ratePlans).forEach(([ratePlanId, ratePlanSelection]) => {
            if (!ratePlanSelection.reserved) {
                return;
            }
            const guests = ratePlanSelection.guest ?? [];
            for (let reservationIndex = 0; reservationIndex < ratePlanSelection.reserved; reservationIndex++) {
                reservedRooms.push({
                    roomTypeId: Number(roomTypeId),
                    ratePlanId: Number(ratePlanId),
                    reservationIndex,
                    guest: guests[reservationIndex] ?? null,
                    ratePlanSelection,
                });
            }
        });
    });
    return reservedRooms;
}

const NumberOrStringSchema = index.unionType([index.numberType(), index.stringType().optional()]);
const CurrencySchema$1 = index.objectType({
    id: index.numberType(),
});
const CurrencyWithCodeSchema = CurrencySchema$1.extend({
    code: index.stringType().optional(),
});
const ItemSchema$1 = index.objectType({
    amount: index.numberType(),
    type: index.stringType().optional(),
    key: index.unionType([index.numberType(), index.stringType().optional()]),
    description: index.stringType().optional().optional().default(''),
});
const TargetSchema = index.objectType({
    code: index.stringType().optional(),
    description: index.stringType().optional(),
});
index.objectType({
    unit_id: index.numberType(),
    from_date: index.stringType().optional(),
    to_date: index.stringType().optional(),
});
index.objectType({
    starter: index.stringType().optional(),
});
index.objectType({
    booking_nbr: index.stringType().optional(),
    currency_id: index.numberType(),
    language: index.stringType().optional().optional(),
    rate_plan_id: index.numberType(),
    room_type_id: index.numberType(),
    property_id: index.numberType(),
    is_preserve_history: index.booleanType().optional(),
    room_identifier: index.stringType().optional().optional(),
});
index.objectType({
    booking_nbr: index.stringType().optional(),
    room_identifier: index.stringType().optional(),
    status: index.stringType().optional(),
});
index.objectType({
    booking_nbr: index.stringType().optional(),
    currency_id: index.numberType(),
    language: index.stringType().optional(),
});
const RestrictionSchema = index.objectType({
    room_type_id: NumberOrStringSchema,
    night: index.stringType().optional(),
});
index.objectType({
    is_closed: index.booleanType(),
    restrictions: index.arrayType(RestrictionSchema),
    operation_type: index.stringType().optional().optional(),
});
index.objectType({
    book_nbr: index.stringType().optional(),
    status: index.stringType().optional(),
});
const AdultChildCountSchema = index.objectType({
    adult: index.numberType(),
    child: index.numberType(),
});
index.objectType({
    from_date: index.stringType().optional(),
    to_date: index.stringType().optional(),
    propertyid: index.numberType(),
    adultChildCount: AdultChildCountSchema,
    language: index.stringType().optional(),
    room_type_ids: index.arrayType(index.numberType()),
    room_type_ids_to_update: index.arrayType(index.numberType()).optional(),
    rate_plan_ids: index.arrayType(index.numberType()).optional(),
    currency: CurrencyWithCodeSchema,
    is_in_agent_mode: index.booleanType().optional(),
    agent_id: NumberOrStringSchema.optional(),
});
const AvailabilityBracketSchema = index.objectType({
    from_date: index.stringType().optional(),
    to_date: index.stringType().optional(),
});
index.objectType({
    unit_id: index.numberType(),
    block_status_code: index.enumType(['003', '004', '002']).optional(),
    description: index.stringType().optional().optional(),
    property_id: index.numberType(),
    brackets: index.arrayType(AvailabilityBracketSchema),
});
index.objectType({
    property_id: index.numberType(),
    room_identifier: index.stringType().optional(),
    code: index.stringType().optional(),
});
index.objectType({
    service: index.custom(),
    booking_nbr: NumberOrStringSchema,
    is_remove: index.booleanType(),
});
/*Arrivals */
const GetRoomsToCheckInPropsSchema = index.objectType({
    property_id: index.stringType(),
    check_in_date: index.stringType(),
    page_index: index.numberType().default(1),
    page_size: index.numberType().default(10),
});
/*Departures */
const GetRoomsToCheckOutPropsSchema = index.objectType({
    property_id: index.stringType(),
    check_out_date: index.stringType(),
    page_index: index.numberType().default(1),
    page_size: index.numberType().default(10),
});
/* INVOICE TYPES */
const GetBookingInvoiceInfoPropsSchema = index.objectType({
    booking_nbr: index.stringType().optional(),
});
const VoidInvoicePropsSchema = index.objectType({
    invoice_nbr: index.stringType().optional(),
    reason: index.stringType().optional(),
    property_id: index.numberType(),
});
const InvoiceSchema$1 = index.objectType({
    booking_nbr: index.stringType().optional(),
    currency: CurrencySchema$1,
    target: TargetSchema,
    Date: index.stringType().optional(),
    nbr: index.stringType().optional(),
    remark: index.stringType().optional(),
    billed_to_name: index.stringType().optional(),
    billed_to_tax: index.stringType().optional(),
    items: index.arrayType(ItemSchema$1),
});
const IssueInvoicePropsSchema = index.objectType({
    is_proforma: index.booleanType().optional().default(false),
    property_id: index.numberType(),
    invoice: InvoiceSchema$1,
});
const PrintInvoicePropsSchema = index.objectType({
    invoice_nbr: index.stringType().optional(),
    property_id: index.numberType(),
    mode: index.enumType(['invoice', 'creditnote', 'proforma']),
    invoice: InvoiceSchema$1.optional(),
});
const ExposedGuestSchema = index.objectType({
    address: index.nullType(),
    alternative_email: index.nullType(),
    cci: index.nullType(),
    city: index.nullType(),
    country: index.nullType(),
    country_id: index.numberType(),
    country_phone_prefix: index.stringType(),
    dob: index.nullType(),
    email: index.stringType(),
    first_name: index.stringType(),
    id: index.numberType(),
    id_info: index.nullType(),
    is_main: index.booleanType(),
    last_name: index.stringType(),
    mobile: index.stringType(),
    mobile_without_prefix: index.stringType(),
    nbr_confirmed_bookings: index.numberType(),
    notes: index.nullType(),
    password: index.nullType(),
    subscribe_to_news_letter: index.nullType(),
});
index.arrayType(ExposedGuestSchema);
const CalculateExclusiveTaxPropsSchema = index.objectType({
    property_id: index.numberType().min(1),
    amount: index.numberType(),
});
const AckExposedRevisionPropsSchema = index.objectType({
    revision_id: index.numberType(),
});

const CurrencySchema = index.objectType({
    code: index.stringType(),
    id: index.numberType(),
    symbol: index.stringType(),
});
const StatusSchema = index.objectType({
    code: index.stringType(),
    description: index.anyType(),
});
const ItemSchema = index.objectType({
    amount: index.numberType(),
    booking_nbr: index.stringType(),
    currency: CurrencySchema,
    description: index.anyType(),
    invoice_nbr: index.stringType(),
    is_invoiceable: index.booleanType(),
    key: index.numberType(),
    status: StatusSchema,
    system_id: index.numberType(),
    type: index.stringType(),
});
const CreditNoteSchema = index.objectType({
    date: index.stringType(),
    nbr: index.stringType(),
    reason: index.stringType(),
    system_id: index.stringType().nullable(),
    user: index.stringType().nullable(),
});
const InvoiceSchema = index.objectType({
    billed_to_name: index.anyType(),
    billed_to_tax: index.anyType(),
    booking_nbr: index.stringType(),
    credit_note: CreditNoteSchema.nullable(),
    currency: CurrencySchema,
    date: index.stringType(),
    items: index.arrayType(ItemSchema),
    nbr: index.stringType(),
    pdf_url: index.anyType(),
    remark: index.stringType(),
    status: StatusSchema,
    system_id: index.numberType(),
    target: index.anyType(),
    user: index.stringType().nullable(),
    total_amount: index.anyType(),
});
const InvoiceableItemReasonSchema = index.objectType({
    code: index.enumType(['001', '002', '003']),
    description: index.stringType().nullable(),
});
const InvoiceableItemSchema = index.objectType({
    amount: index.numberType(),
    booking_nbr: index.stringType(),
    currency: CurrencySchema,
    invoice_nbr: index.stringType().nullable(),
    is_invoiceable: index.booleanType(),
    key: index.numberType(),
    status: index.anyType(),
    system_id: index.anyType(),
    reason: InvoiceableItemReasonSchema.nullable(),
    type: index.enumType(['BSA', 'BSP', 'BSE', 'PAYMENT']),
});
const BookingInvoiceInfoSchema = index.objectType({
    invoiceable_items: index.arrayType(InvoiceableItemSchema),
    invoices: index.arrayType(InvoiceSchema).nullable(),
});

// import { ExposedApplicablePolicy, ExposedBookingEvent, HandleExposedRoomGuestsRequest } from '../../models/booking.dto';
class BookingService {
    async unBlockUnitByPeriod(props) {
        const { data } = await axios.axios.post(`/Unblock_Unit_By_Period`, props);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
    async getNextValue(props) {
        const { data } = await axios.axios.post(`/Get_Next_Value`, props);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
    async getExposedApplicablePolicies(props) {
        const { data } = await axios.axios.post(`/Get_Exposed_Applicable_Policies`, props);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result ?? [];
    }
    async handleExposedRoomInOut(props) {
        const { data } = await axios.axios.post(`/Handle_Exposed_Room_InOut`, props);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
    async GetPenaltyStatement(params) {
        const { data } = await axios.axios.post('/Get_Penalty_Statement', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    async setExposedRestrictionPerRoomType(params) {
        const { data } = await axios.axios.post(`https://gateway.igloorooms.com/IRBE/Set_Exposed_Restriction_Per_Room_Type`, {
            operation_type: params.operation_type ?? 'close_open',
            ...params,
        });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
    async getLov() {
        const { data } = await axios.axios.post(`/Get_LOV`, {});
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
    async sendBookingConfirmationEmail(booking_nbr, language) {
        const { data } = await axios.axios.post(`/Send_Booking_Confirmation_Email`, {
            booking_nbr,
            language,
        });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    async getCalendarData(propertyid, from_date, to_date) {
        try {
            const { data } = await axios.axios.post(`/Get_Exposed_Calendar`, {
                propertyid,
                from_date,
                to_date,
                extras: utils.extras,
                include_sales_rate_plans: true,
            });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            const months = data.My_Result.months;
            const customMonths = [];
            const myBooking = await booking.getMyBookings(months);
            const days = months
                .map(month => {
                customMonths.push({
                    daysCount: month.days.length,
                    monthName: month.description,
                });
                return month.days.map(day => {
                    if (day['value'] === '2025-05-30') {
                        console.log(day);
                    }
                    return {
                        day: utils.convertDateToCustomFormat(day.description, month.description),
                        value: day.value,
                        currentDate: utils.convertDateToTime(day.description, month.description),
                        dayDisplayName: day.description,
                        rate: day.room_types,
                        unassigned_units_nbr: day.unassigned_units_nbr,
                        occupancy: day.occupancy,
                    };
                });
            })
                .flat();
            return Promise.resolve({
                ExceptionCode: null,
                ExceptionMsg: '',
                My_Params_Get_Rooming_Data: {
                    AC_ID: propertyid,
                    FROM: data.My_Params_Get_Exposed_Calendar.from_date,
                    TO: data.My_Params_Get_Exposed_Calendar.to_date,
                },
                days,
                months: customMonths,
                myBookings: myBooking,
                defaultMonths: months,
            });
        }
        catch (error) {
            console.error(error);
        }
    }
    async handleExposedRoomGuests(props) {
        const { data } = await axios.axios.post('/Handle_Exposed_Room_Guests', props);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
    async fetchGuest(email) {
        try {
            const { data } = await axios.axios.post(`/Get_Exposed_Guest`, { email });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data.My_Result;
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async changeExposedBookingStatus(props) {
        try {
            const { data } = await axios.axios.post(`/Change_Exposed_Booking_Status`, props);
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data.My_Result;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async fetchPMSLogs(booking_nbr) {
        try {
            const { data } = await axios.axios.post(`/Get_Exposed_PMS_Logs`, { booking_nbr });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data.My_Result;
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async ackExposedRevision(props) {
        const payload = AckExposedRevisionPropsSchema.parse(props);
        const { data } = await axios.axios.post('/Ack_Exposed_Revision', payload);
        return data;
    }
    async getExposedBookingEvents(booking_nbr) {
        try {
            const { data } = await axios.axios.post(`/Get_Exposed_Booking_Events`, { booking_nbr });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data.My_Result;
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async editExposedGuest(guest, book_nbr) {
        try {
            const { data } = await axios.axios.post(`/Edit_Exposed_Guest`, { ...guest, book_nbr });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data.My_Result;
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async getBookingAvailability(props) {
        try {
            const { adultChildCount, currency, ...rest } = props;
            const { data } = await axios.axios.post(`/Check_Availability`, {
                ...rest,
                adult_nbr: adultChildCount.adult,
                child_nbr: adultChildCount.child,
                currency_ref: currency.code,
                skip_getting_assignable_units: !calendarData.calendar_data.is_frontdesk_enabled,
                is_backend: true,
            });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            const results = this.modifyRateplans(this.sortRoomTypes(data['My_Result'], { adult_nbr: Number(adultChildCount.adult), child_nbr: Number(adultChildCount.child) }));
            booking_store.roomTypes = [...results];
            booking_store.tax_statement = { message: data.My_Result.tax_statement };
            return results;
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async calculateExclusiveTax(props) {
        const payload = CalculateExclusiveTaxPropsSchema.parse(props);
        const { data } = await axios.axios.post('/Calculate_Exclusive_Tax', payload);
        return data.My_Result ?? 0;
    }
    sortRoomTypes(roomTypes, userCriteria) {
        return roomTypes.sort((a, b) => {
            // Priority to available rooms
            if (a.is_available_to_book && !b.is_available_to_book)
                return -1;
            if (!a.is_available_to_book && b.is_available_to_book)
                return 1;
            // Check for variations where is_calculated is true and amount is 0 or null
            const zeroCalculatedA = a.rateplans?.some(plan => plan.variations?.some(variation => variation.discounted_amount === 0 || variation.discounted_amount === null));
            const zeroCalculatedB = b.rateplans?.some(plan => plan.variations?.some(variation => variation.discounted_amount === 0 || variation.discounted_amount === null));
            // Prioritize these types to be before inventory 0 but after all available ones
            if (zeroCalculatedA && !zeroCalculatedB)
                return 1;
            if (!zeroCalculatedA && zeroCalculatedB)
                return -1;
            // Check for exact matching variations based on user criteria
            const matchA = a.rateplans?.some(plan => plan.variations?.some(variation => variation.adult_nbr === userCriteria.adult_nbr && variation.child_nbr === userCriteria.child_nbr));
            const matchB = b.rateplans?.some(plan => plan.variations?.some(variation => variation.adult_nbr === userCriteria.adult_nbr && variation.child_nbr === userCriteria.child_nbr));
            if (matchA && !matchB)
                return -1;
            if (!matchA && matchB)
                return 1;
            // Sort by the highest variation amount
            const maxVariationA = Math.max(...a.rateplans.flatMap(plan => plan.variations?.map(variation => variation.discounted_amount ?? 0)));
            const maxVariationB = Math.max(...b.rateplans.flatMap(plan => plan.variations?.map(variation => variation.discounted_amount ?? 0)));
            if (maxVariationA < maxVariationB)
                return -1;
            if (maxVariationA > maxVariationB)
                return 1;
            return 0;
        });
    }
    modifyRateplans(roomTypes) {
        return roomTypes?.map(rt => ({ ...rt, rateplans: rt.rateplans?.map(rp => ({ ...rp, variations: this.sortVariations(rp?.variations ?? []) })) }));
    }
    sortVariations(variations) {
        return variations.sort((a, b) => {
            if (a.adult_nbr !== b.adult_nbr) {
                return b.adult_nbr - a.adult_nbr;
            }
            return b.child_nbr - a.child_nbr;
        });
    }
    async getCountries(language) {
        try {
            const { data } = await axios.axios.post(`/Get_Exposed_Countries`, {
                language,
            });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data.My_Result;
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async getSetupEntriesByTableName(TBL_NAME) {
        const { data } = await axios.axios.post(`/Get_Setup_Entries_By_TBL_NAME`, {
            TBL_NAME,
        });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        const res = data.My_Result ?? [];
        return res;
    }
    async fetchSetupEntries() {
        try {
            const data = await this.getSetupEntriesByTableNameMulti(['_ARRIVAL_TIME', '_RATE_PRICING_MODE', '_BED_PREFERENCE_TYPE']);
            const { arrival_time, rate_pricing_mode, bed_preference_type } = this.groupEntryTablesResult(data);
            return {
                arrivalTime: arrival_time,
                ratePricingMode: rate_pricing_mode,
                bedPreferenceType: bed_preference_type,
            };
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async doBookingExtraService({ booking_nbr, service, is_remove }) {
        const { data } = await axios.axios.post(`/Do_Booking_Extra_Service`, { ...service, booking_nbr, is_remove });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    groupEntryTablesResult(entries) {
        let result = {};
        for (const entry of entries) {
            const key = entry.TBL_NAME.substring(1, entry.TBL_NAME.length).toLowerCase();
            if (!result[key]) {
                result[key] = [];
            }
            result[key] = [...result[key], entry];
        }
        return result;
    }
    async getSetupEntriesByTableNameMulti(entries) {
        const { data } = await axios.axios.post(`/Get_Setup_Entries_By_TBL_NAME_MULTI`, { TBL_NAMES: entries });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    async getBlockedInfo() {
        return await this.getSetupEntriesByTableNameMulti(['_CALENDAR_BLOCKED_TILL']);
    }
    async getUserDefaultCountry() {
        try {
            let payload = { IP: '' };
            if (calendarData.calendar_data?.property?.id) {
                payload = { ...payload, id: calendarData.calendar_data.property.id };
            }
            const { data } = await axios.axios.post(`/Get_Country_By_IP`, payload);
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data['My_Result'];
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async blockUnit(params) {
        try {
            const { data } = await axios.axios.post(`/Block_Exposed_Unit`, params);
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            console.log(data);
            return data['My_Params_Block_Exposed_Unit'];
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async blockAvailabilityForBrackets(params) {
        try {
            const { data } = await axios.axios.post(`/Block_Availability_For_Brackets`, params);
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data;
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async setDepartureTime(params) {
        const { data } = await axios.axios.post('/Set_Departure_Time', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
    async getUserInfo(email) {
        try {
            const { data } = await axios.axios.post(`/GET_EXPOSED_GUEST`, {
                email,
            });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data.My_Result;
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async getExposedBooking(booking_nbr, language, withExtras = true) {
        try {
            const { data } = await axios.axios.post(`/Get_Exposed_Booking`, {
                booking_nbr,
                language,
                extras: withExtras ? utils.extras : null,
            });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data.My_Result;
        }
        catch (error) {
            console.error(error);
        }
    }
    generateDays(from_date, to_date, amount) {
        const startDate = new Date(from_date);
        const endDate = new Date(to_date);
        const days = [];
        while (startDate < endDate) {
            days.push({
                date: startDate.toISOString().split('T')[0],
                amount: amount,
                cost: null,
            });
            startDate.setDate(startDate.getDate() + 1);
        }
        return days;
    }
    calculateTotalRate(rate, totalNights, isRateModified, preference) {
        if (isRateModified && preference === 2) {
            return +rate;
        }
        return +rate / +totalNights;
    }
    async fetchExposedGuest(email, property_id) {
        try {
            const { data } = await axios.axios.post(`/Fetch_Exposed_Guests`, {
                email,
                property_id,
            });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data['My_Result'];
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async fetchExposedBookings(booking_nbr, property_id, from_date, to_date) {
        try {
            const { data } = await axios.axios.post(`/Fetch_Exposed_Bookings`, {
                booking_nbr,
                property_id,
                from_date,
                to_date,
            });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data['My_Result'];
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async getPCICardInfoURL(BOOK_NBR) {
        try {
            const { data } = await axios.axios.post(`/Get_PCI_Card_Info_URL`, {
                BOOK_NBR,
            });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data['My_Result'];
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async doReservation(body) {
        const { data } = await axios.axios.post(`/DoReservation`, { ...body, extras: body.extras ? body.extras : utils.extras });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        console.log(data['My_Result']);
        return data['My_Result'];
    }
    async bookUser({ bookedByInfoData, check_in, currency, extras = null, fromDate, guestData, pickup_info, propertyid, rooms, source, toDate, totalNights, arrivalTime, bookingNumber, defaultGuest, identifier, pr_id, }) {
        try {
            const fromDateStr = utils.dateToFormattedString(fromDate);
            const toDateStr = utils.dateToFormattedString(toDate);
            let guest = {
                email: bookedByInfoData.email === '' ? null : bookedByInfoData.email || null,
                first_name: bookedByInfoData.firstName,
                last_name: bookedByInfoData.lastName,
                country_id: bookedByInfoData.countryId === '' ? null : bookedByInfoData.countryId,
                city: null,
                mobile: bookedByInfoData.contactNumber === null ? '' : bookedByInfoData.contactNumber,
                phone_prefix: null,
                address: '',
                dob: null,
                subscribe_to_news_letter: bookedByInfoData.emailGuest || false,
                cci: bookedByInfoData.cardNumber
                    ? {
                        nbr: bookedByInfoData.cardNumber,
                        holder_name: bookedByInfoData.cardHolderName,
                        expiry_month: bookedByInfoData.expiryMonth,
                        expiry_year: bookedByInfoData.expiryYear,
                    }
                    : null,
            };
            if (defaultGuest) {
                guest = { ...defaultGuest, email: defaultGuest.email === '' ? null : defaultGuest.email };
            }
            if (bookedByInfoData.id) {
                guest = { ...guest, id: bookedByInfoData.id };
            }
            const body = {
                assign_units: true,
                check_in,
                is_pms: true,
                is_direct: true,
                is_in_loyalty_mode: false,
                promo_key: null,
                extras,
                booking: {
                    booking_nbr: bookingNumber || '',
                    from_date: fromDateStr,
                    to_date: toDateStr,
                    remark: bookedByInfoData.message || null,
                    property: {
                        id: propertyid,
                    },
                    source,
                    currency,
                    arrival: { code: arrivalTime ? arrivalTime : bookedByInfoData.selectedArrivalTime },
                    guest,
                    rooms: [
                        ...guestData.map(data => ({
                            identifier: identifier || null,
                            roomtype: {
                                id: data.roomCategoryId,
                                name: data.roomCategoryName,
                                physicalrooms: null,
                                rateplans: null,
                                availabilities: null,
                                inventory: data.inventory,
                                rate: data.rate / totalNights,
                            },
                            rateplan: {
                                id: data.ratePlanId,
                                name: data.ratePlanName,
                                rate_restrictions: null,
                                variations: null,
                                cancelation: data.cancelation,
                                guarantee: data.guarantee,
                            },
                            unit: typeof pr_id === 'undefined' && data.roomId === '' ? null : { id: +pr_id || +data.roomId },
                            occupancy: {
                                adult_nbr: data.adultCount,
                                children_nbr: data.childrenCount,
                                infant_nbr: null,
                            },
                            bed_preference: data.preference,
                            from_date: fromDateStr,
                            to_date: toDateStr,
                            notes: null,
                            days: this.generateDays(fromDateStr, toDateStr, this.calculateTotalRate(data.rate, totalNights, data.isRateModified, data.rateType)),
                            guest: {
                                email: null,
                                first_name: data.guestName,
                                last_name: null,
                                country_id: null,
                                city: null,
                                mobile: null,
                                address: null,
                                dob: null,
                                subscribe_to_news_letter: null,
                            },
                        })),
                        ...rooms,
                    ],
                },
                pickup_info,
            };
            console.log('book user payload', body);
            // const result = await this.doReservation(body);
            // return result;
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    /*Arrivals*/
    async getRoomsToCheckIn(props) {
        const payload = GetRoomsToCheckInPropsSchema.parse(props);
        const { data } = await axios.axios.post('https://gateway.igloorooms.com/IRBE/Get_Rooms_To_Check_In', payload);
        return { bookings: data.My_Result, total_count: data.My_Params_Get_Rooms_To_Check_In?.total_count };
    }
    async getRoomsToCheckout(props) {
        const payload = GetRoomsToCheckOutPropsSchema.parse(props);
        const { data } = await axios.axios.post('https://gateway.igloorooms.com/IRBE/Get_Rooms_To_Check_Out', payload);
        return { bookings: data.My_Result, total_count: data.My_Params_Get_Rooms_To_Check_Out?.total_count };
    }
    /*Departures */
    /* INVOICE */
    async getBookingInvoiceInfo(props) {
        const payload = GetBookingInvoiceInfoPropsSchema.parse(props);
        const { data } = await axios.axios.post('/Get_Booking_Invoice_Info', payload);
        return BookingInvoiceInfoSchema.parse(data.My_Result);
    }
    async issueInvoice(props) {
        const p = IssueInvoicePropsSchema.parse(props);
        const { data } = await axios.axios.post('/Issue_Invoice', p);
        return data;
    }
    async voidInvoice(props) {
        const payload = VoidInvoicePropsSchema.parse(props);
        const { data } = await axios.axios.post('/Void_Invoice', payload);
        return data;
    }
    async printInvoice(props) {
        const payload = PrintInvoicePropsSchema.parse(props);
        const { data } = await axios.axios.post('/Print_Invoice', payload);
        return data;
    }
}

exports.BookingService = BookingService;
exports.VariationService = VariationService;
exports.ZIEntrySchema = ZIEntrySchema;
exports.bookedByGuestBaseData = bookedByGuestBaseData;
exports.booking_store = booking_store;
exports.calculateTotalRooms = calculateTotalRooms;
exports.getBookingTotalPrice = getBookingTotalPrice;
exports.getReservedRooms = getReservedRooms;
exports.getVisibleInventory = getVisibleInventory;
exports.hasAtLeastOneRoomSelected = hasAtLeastOneRoomSelected;
exports.modifyBookingStore = modifyBookingStore;
exports.reserveRooms = reserveRooms;
exports.resetAvailability = resetAvailability;
exports.resetBookingStore = resetBookingStore;
exports.resetReserved = resetReserved;
exports.setBookedByGuestManualEditState = setBookedByGuestManualEditState;
exports.setBookingDraft = setBookingDraft;
exports.setBookingSelectOptions = setBookingSelectOptions;
exports.updateBookedByGuest = updateBookedByGuest;
exports.updateRoomGuest = updateRoomGuest;
exports.updateRoomParams = updateRoomParams;

//# sourceMappingURL=booking.service-8c0b6002.js.map