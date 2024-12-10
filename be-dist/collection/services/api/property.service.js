import { PropertyHelpers } from "./../app/property-helpers.service";
import app_store from "../../stores/app.store";
import booking_store from "../../stores/booking";
import { checkout_store, updateUserFormData } from "../../stores/checkout.store";
import { getDateDifference, injectHTML } from "../../utils/utils";
import axios from "axios";
import { format } from "date-fns";
import { Colors } from "../app/colors.service";
import VariationService from "../app/variation.service";
export class PropertyService {
    constructor() {
        this.propertyHelpers = new PropertyHelpers();
        this.colors = new Colors();
    }
    async getExposedProperty(params, initTheme = true) {
        var _a, _b, _c, _d;
        const { data } = await axios.post(`/Get_Exposed_Property`, Object.assign(Object.assign({}, params), { currency: app_store.userPreferences.currency_id, include_sales_rate_plans: true }));
        const result = data;
        if (result.ExceptionMsg !== '') {
            throw new Error(result.ExceptionMsg);
        }
        if (result.My_Result.tags && !PropertyService.initialized) {
            PropertyService.initialized = true;
            result.My_Result.tags.map(({ key, value }) => {
                if (!value) {
                    return;
                }
                switch (key) {
                    case 'header':
                        return injectHTML(value, 'head', 'first');
                    case 'body':
                        return injectHTML(value, 'body', 'first');
                    case 'footer':
                        return injectHTML(value, 'body', 'last');
                }
            });
        }
        if (!app_store.fetchedBooking) {
            booking_store.roomTypes = [...((_b = (_a = result.My_Result) === null || _a === void 0 ? void 0 : _a.roomtypes) !== null && _b !== void 0 ? _b : [])];
        }
        // } else {
        //   const oldBookingStoreRoomTypes = [...booking_store.roomTypes];
        //   booking_store.roomTypes = result.My_Result.roomtypes?.map(rt => {
        //     const selectedRt = oldBookingStoreRoomTypes.find(r => r.id === rt.id);
        //     return {
        //       ...rt,
        //       rateplans: rt.rateplans.map(rp => {
        //         const currentRp = selectedRt.rateplans.find(s => s.id === rp.id);
        //         if (currentRp) {
        //           return { ...currentRp, short_name: rp.short_name };
        //         }
        //         return null;
        //       }),
        //     };
        //   });
        // }
        if (!app_store.fetchedBooking) {
            booking_store.roomTypes = [...((_d = (_c = result.My_Result) === null || _c === void 0 ? void 0 : _c.roomtypes) !== null && _d !== void 0 ? _d : [])];
        }
        if (params.aname || params.perma_link) {
            app_store.app_data = Object.assign(Object.assign({}, app_store.app_data), { property_id: result.My_Result.id });
        }
        app_store.app_data.displayMode = result.My_Result.be_listing_mode === 'grid' ? 'grid' : 'default';
        app_store.property = Object.assign({}, result.My_Result);
        app_store.app_data.property_id = result.My_Result.id;
        if (initTheme) {
            this.colors.initTheme(result.My_Result);
        }
        return result.My_Result;
    }
    async getExposedNonBookableNights(params) {
        var _a;
        const { data } = await axios.post(`/Get_Exposed_Non_Bookable_Nights`, params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        const nights = {};
        (_a = data.My_Result) === null || _a === void 0 ? void 0 : _a.forEach(nbn => {
            nights[nbn.night] = true;
        });
        app_store.nonBookableNights = nights;
        return data.My_Result;
    }
    async getExposedBookingAvailability(props) {
        const roomtypeIds = this.propertyHelpers.collectRoomTypeIds(props);
        const rateplanIds = this.propertyHelpers.collectRatePlanIds(props);
        const data = await this.propertyHelpers.fetchAvailabilityData(props, roomtypeIds, rateplanIds);
        this.propertyHelpers.updateBookingStore(data);
        return data;
    }
    async getExposedBooking(params, withExtras = true) {
        const { data } = await axios.post(`/Get_Exposed_Booking`, Object.assign(Object.assign({}, params), { extras: withExtras
                ? [
                    { key: 'payment_code', value: '' },
                    {
                        key: 'prepayment_amount',
                        value: '',
                    },
                    { key: 'payment_code', value: '' },
                    { key: 'agent_payment_mode', value: '' },
                ]
                : null }));
        const result = data;
        if (result.ExceptionMsg !== '') {
            throw new Error(result.ExceptionMsg);
        }
        return result.My_Result;
    }
    async fetchSetupEntries() {
        if (app_store.setup_entries) {
            return app_store.setup_entries;
        }
        const { data } = await axios.post(`/Get_Setup_Entries_By_TBL_NAME_MULTI`, {
            TBL_NAMES: ['_ARRIVAL_TIME', '_RATE_PRICING_MODE', '_BED_PREFERENCE_TYPE'],
        });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        const res = data.My_Result;
        const setupEntries = {
            arrivalTime: res.filter(e => e.TBL_NAME === '_ARRIVAL_TIME'),
            ratePricingMode: res.filter(e => e.TBL_NAME === '_RATE_PRICING_MODE'),
            bedPreferenceType: res.filter(e => e.TBL_NAME === '_BED_PREFERENCE_TYPE'),
        };
        app_store.setup_entries = setupEntries;
        updateUserFormData('arrival_time', setupEntries.arrivalTime[0].CODE_NAME);
        return setupEntries;
    }
    filterRooms() {
        let rooms = [];
        const variationService = new VariationService();
        Object.values(booking_store.ratePlanSelections).map(rt => {
            Object.values(rt).map((rp) => {
                if (rp.reserved > 0) {
                    [...new Array(rp.reserved)].map((_, index) => {
                        var _a;
                        const { first_name, last_name } = this.propertyHelpers.extractFirstNameAndLastName(index, rp.guestName);
                        const variation = variationService.getVariationBasedOnInfants({
                            baseVariation: rp.checkoutVariations[index],
                            variations: rp.ratePlan.variations,
                            infants: rp.infant_nbr[index],
                        });
                        rooms.push({
                            identifier: null,
                            roomtype: rp.roomtype,
                            rateplan: rp.ratePlan,
                            prepayment_amount_gross: (_a = rp === null || rp === void 0 ? void 0 : rp.selected_variation) === null || _a === void 0 ? void 0 : _a.prepayment_amount_gross,
                            unit: null,
                            smoking_option: rp.checkoutSmokingSelection[index],
                            occupancy: {
                                adult_nbr: rp.checkoutVariations[index].adult_nbr,
                                children_nbr: rp.checkoutVariations[index].child_nbr - rp.infant_nbr[index],
                                infant_nbr: rp.infant_nbr[index],
                            },
                            bed_preference: rp.is_bed_configuration_enabled ? rp.checkoutBedSelection[index] : null,
                            from_date: format(booking_store.bookingAvailabilityParams.from_date, 'yyyy-MM-dd'),
                            to_date: format(booking_store.bookingAvailabilityParams.to_date, 'yyyy-MM-dd'),
                            notes: null,
                            days: this.propertyHelpers.generateDays(booking_store.bookingAvailabilityParams.from_date, booking_store.bookingAvailabilityParams.to_date, Number(variation.discounted_gross_amount) / getDateDifference(booking_store.bookingAvailabilityParams.from_date, booking_store.bookingAvailabilityParams.to_date)),
                            // days: variation.nights,
                            guest: {
                                email: null,
                                first_name,
                                last_name,
                                country_id: null,
                                city: null,
                                mobile: null,
                                address: null,
                                dob: null,
                                subscribe_to_news_letter: null,
                                cci: null,
                            },
                        });
                    });
                }
            });
        });
        return rooms;
    }
    async editExposedGuest(guest, book_nbr) {
        const { data } = await axios.post(`/Edit_Exposed_Guest`, Object.assign(Object.assign({}, guest), { book_nbr }));
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    async bookUser() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const prePaymentAmount = checkout_store.prepaymentAmount;
        try {
            let guest = {
                email: checkout_store.userFormData.email,
                first_name: checkout_store.userFormData.firstName,
                last_name: checkout_store.userFormData.lastName,
                country_id: checkout_store.userFormData.country_id,
                city: null,
                mobile: checkout_store.userFormData.mobile_number,
                address: '',
                country_phone_prefix: checkout_store.userFormData.country_phone_prefix,
                dob: null,
                subscribe_to_news_letter: true,
                cci: booking_store.bookingAvailabilityParams.agent && ((_b = (_a = booking_store.bookingAvailabilityParams.agent) === null || _a === void 0 ? void 0 : _a.payment_mode) === null || _b === void 0 ? void 0 : _b.code) === '001'
                    ? null
                    : ((_c = checkout_store.payment) === null || _c === void 0 ? void 0 : _c.code) === '001'
                        ? {
                            nbr: (_e = (_d = checkout_store.payment) === null || _d === void 0 ? void 0 : _d.cardNumber) === null || _e === void 0 ? void 0 : _e.replace(/ /g, ''),
                            holder_name: (_f = checkout_store.payment) === null || _f === void 0 ? void 0 : _f.cardHolderName,
                            expiry_month: (_g = checkout_store.payment) === null || _g === void 0 ? void 0 : _g.expiry_month.split('/')[0],
                            expiry_year: (_h = checkout_store.payment) === null || _h === void 0 ? void 0 : _h.expiry_year.split('/')[1],
                            cvc: checkout_store.payment.cvc,
                        }
                        : null,
            };
            const body = {
                assign_units: false,
                check_in: false,
                is_pms: false,
                is_direct: true,
                language: (_k = (_j = app_store === null || app_store === void 0 ? void 0 : app_store.userPreferences) === null || _j === void 0 ? void 0 : _j.language_id) !== null && _k !== void 0 ? _k : 'en',
                agent: booking_store.bookingAvailabilityParams.agent ? { id: (_l = booking_store.bookingAvailabilityParams.agent) === null || _l === void 0 ? void 0 : _l.id } : null,
                is_in_loyalty_mode: booking_store.bookingAvailabilityParams.loyalty,
                promo_key: (_m = booking_store.bookingAvailabilityParams.coupon) !== null && _m !== void 0 ? _m : null,
                booking: {
                    booking_nbr: '',
                    from_date: format(booking_store.bookingAvailabilityParams.from_date, 'yyyy-MM-dd'),
                    to_date: format(booking_store.bookingAvailabilityParams.to_date, 'yyyy-MM-dd'),
                    remark: checkout_store.userFormData.message || null,
                    property: {
                        id: app_store.app_data.property_id,
                    },
                    source: { code: app_store.app_data.isFromGhs ? 'ghs' : new URL(window.location.href).origin, tag: app_store.app_data.stag, description: '' },
                    referrer_site: app_store.app_data.affiliate ? `https://${app_store.app_data.affiliate.sites[0].url}` : 'www.igloorooms.com',
                    currency: app_store.currencies.find(currency => currency.code.toString().toLowerCase() === app_store.userPreferences.currency_id.toLowerCase()),
                    arrival: { code: checkout_store.userFormData.arrival_time },
                    guest,
                    rooms: this.filterRooms(),
                },
                extras: [
                    {
                        key: 'payment_code',
                        value: checkout_store.payment.code,
                    },
                    prePaymentAmount > 0
                        ? {
                            key: 'prepayment_amount',
                            value: prePaymentAmount,
                        }
                        : null,
                    booking_store.bookingAvailabilityParams.agent
                        ? {
                            key: 'agent_payment_mode',
                            value: booking_store.bookingAvailabilityParams.agent.payment_mode.code,
                        }
                        : null,
                    {
                        key: 'selected_currency',
                        value: app_store.userPreferences.currency_id,
                    },
                ].filter(f => f !== null),
                pickup_info: checkout_store.pickup.location ? this.propertyHelpers.convertPickup(checkout_store.pickup) : null,
            };
            const { data } = await axios.post(`/DoReservation`, body);
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
    async getExposedGuest() {
        const { data } = await axios.post(`/Get_Exposed_Guest`, {
            email: null,
        });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        const res = data.My_Result;
        if (res === null) {
            app_store.is_signed_in = false;
            return;
        }
        // app_store.is_signed_in = true;
        checkout_store.userFormData = Object.assign(Object.assign({}, checkout_store.userFormData), { country_id: res.country_id, email: res.email, firstName: res.first_name, lastName: res.last_name, mobile_number: res.mobile, country_phone_prefix: res.country_phone_prefix, id: res.id });
    }
}
PropertyService.initialized = false;
//# sourceMappingURL=property.service.js.map
