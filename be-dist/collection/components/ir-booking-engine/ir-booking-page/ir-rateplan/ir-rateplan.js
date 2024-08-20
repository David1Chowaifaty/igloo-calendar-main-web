import { Fragment, h } from "@stencil/core";
import app_store from "../../../../stores/app.store";
import booking_store, { reserveRooms, updateRoomParams } from "../../../../stores/booking";
import { formatAmount, getDateDifference } from "../../../../utils/utils";
import localizedWords from "../../../../stores/localization.store";
import { v4 } from "uuid";
import { PropertyService } from "../../../../services/api/property.service";
import { format } from "date-fns";
import { AvailabiltyService } from "../../../../services/app/availability.service";
import { PaymentService } from "../../../../services/api/payment.service";
export class IrRateplan {
    constructor() {
        this.propertyService = new PropertyService();
        this.availabilityService = new AvailabiltyService();
        this.paymentService = new PaymentService();
        this.display = 'default';
        this.ratePlan = undefined;
        this.visibleInventory = undefined;
        this.roomTypeInventory = undefined;
        this.roomTypeId = undefined;
        this.isLoading = false;
        this.cancelationMessage = '';
        this.isRatePlanAvailable = true;
    }
    componentWillLoad() {
        this.propertyService.setToken(app_store.app_data.token);
        this.paymentService.setToken(app_store.app_data.token);
        this.checkAvailability();
    }
    handleRTICHange(newValue, oldValue) {
        if (newValue === oldValue) {
            return null;
        }
        this.checkAvailability();
    }
    checkAvailability() {
        this.isRatePlanAvailable = this.roomTypeInventory > 0 && !this.ratePlan.variations.some(v => v.is_calculated && (v.amount === 0 || v.amount === null));
        // this.isRatePlanAvailable = this.roomTypeInventory > 0;
    }
    async handleVariationChange(e, variations, rateplanId, roomTypeId) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const value = e.detail;
        let selectedVariation = variations[value];
        console.log(selectedVariation);
        if (!selectedVariation) {
            return;
        }
        if (!selectedVariation.amount) {
            this.isLoading = true;
            await this.updateVariation({
                adult_nbr: selectedVariation.adult_nbr,
                child_nbr: selectedVariation.child_nbr,
                rp_id: rateplanId,
                rt_id: roomTypeId,
                adultChildConstraint: selectedVariation.adult_child_offering,
            });
            this.isLoading = false;
        }
        selectedVariation = booking_store.roomTypes.find(rt => rt.id === roomTypeId).rateplans.find(rp => rp.id === rateplanId).variations[value];
        updateRoomParams({ params: { selected_variation: { variation: selectedVariation, state: 'modified' } }, ratePlanId: rateplanId, roomTypeId });
    }
    async updateVariation(params) {
        const identifier = v4();
        this.availabilityService.initSocket(identifier, true);
        await this.propertyService.getExposedBookingAvailability({
            params: {
                propertyid: app_store.app_data.property_id,
                from_date: format(booking_store.bookingAvailabilityParams.from_date, 'yyyy-MM-dd'),
                to_date: format(booking_store.bookingAvailabilityParams.to_date, 'yyyy-MM-dd'),
                room_type_ids: [],
                adult_nbr: params.adult_nbr,
                child_nbr: params.child_nbr,
                language: app_store.userPreferences.language_id,
                currency_ref: app_store.userPreferences.currency_id,
                is_in_loyalty_mode: booking_store.bookingAvailabilityParams.loyalty ? true : !!booking_store.bookingAvailabilityParams.coupon,
                promo_key: booking_store.bookingAvailabilityParams.coupon || '',
                is_in_agent_mode: !!booking_store.bookingAvailabilityParams.agent || false,
                agent_id: booking_store.bookingAvailabilityParams.agent || 0,
            },
            identifier,
            mode: 'modify_rt',
            rp_id: params.rp_id,
            rt_id: params.rt_id,
            adultChildConstraint: params.adultChildConstraint,
        });
    }
    async fetchCancelationMessage(id, roomTypeId) {
        this.cancelationMessage = (await this.paymentService.fetchCancelationMessage({ id, roomTypeId })).message;
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15;
        if (!this.ratePlan.is_targeting_travel_agency && booking_store.bookingAvailabilityParams.agent) {
            return null;
        }
        return (h("div", { class: "rateplan-container" }, h("div", { class: `rateplan-header ${this.isRatePlanAvailable ? 'available' : 'not-available'}` }, h("div", { class: "rateplan-details-wrapper" }, h("p", { class: "rateplan-name" }, h("span", { class: "rateplan-short-name" }, this.ratePlan.short_name), this.ratePlan.is_non_refundable ? (h("p", { class: "rateplan-tooltip text-xs", style: { color: 'var(--ir-green)' } }, "Non refundable")) : (h("ir-tooltip", { labelColors: booking_store.isInFreeCancelationZone ? 'green' : 'default', class: `rateplan-tooltip`, open_behavior: "click", label: booking_store.isInFreeCancelationZone ? 'Free cancellation' : 'If I cancel?', message: (this.cancelationMessage || this.ratePlan.cancelation) + this.ratePlan.guarantee, onTooltipOpenChange: e => {
                if (e.detail) {
                    this.fetchCancelationMessage(this.ratePlan.id, this.roomTypeId);
                }
            } }))), this.isLoading ? (h("div", { class: "grid place-items-center md:hidden" }, h("ir-skeleton", { class: "h-4 w-12" }))) : (h(Fragment, null, this.isRatePlanAvailable ? (!((_c = (_b = (_a = this.visibleInventory) === null || _a === void 0 ? void 0 : _a.selected_variation) === null || _b === void 0 ? void 0 : _b.variation) === null || _c === void 0 ? void 0 : _c.IS_MLS_VIOLATED) && (h("div", { class: "rateplan-pricing-mobile" }, ((_f = (_e = (_d = this.visibleInventory) === null || _d === void 0 ? void 0 : _d.selected_variation) === null || _e === void 0 ? void 0 : _e.variation) === null || _f === void 0 ? void 0 : _f.discount_pct) > 0 && (h("p", { class: "rateplan-discounted-amount" }, formatAmount((_j = (_h = (_g = this.visibleInventory) === null || _g === void 0 ? void 0 : _g.selected_variation) === null || _h === void 0 ? void 0 : _h.variation) === null || _j === void 0 ? void 0 : _j.total_before_discount, app_store.userPreferences.currency_id, 0))), h("p", { class: "rateplan-amount" }, formatAmount((_m = (_l = (_k = this.visibleInventory) === null || _k === void 0 ? void 0 : _k.selected_variation) === null || _l === void 0 ? void 0 : _l.variation) === null || _m === void 0 ? void 0 : _m.amount, app_store.userPreferences.currency_id, 0))))) : (h("p", { class: "no-availability" }, "Not available"))))), h("div", { class: "rateplan-description" }, this.ratePlan.is_non_refundable ? (h("p", { class: "rateplan-tooltip text-xs", style: { color: 'var(--ir-green)' } }, "Non refundable")) : (h("ir-tooltip", { labelColors: booking_store.isInFreeCancelationZone ? 'green' : 'default', class: `rateplan-tooltip`, open_behavior: "click", label: booking_store.isInFreeCancelationZone ? 'Free cancellation' : 'If I cancel?', message: (this.cancelationMessage || this.ratePlan.cancelation) + this.ratePlan.guarantee, onTooltipOpenChange: e => {
                if (e.detail) {
                    this.fetchCancelationMessage(this.ratePlan.id, this.roomTypeId);
                }
            } })), h("p", { class: "rateplan-custom-text" }, this.ratePlan.custom_text))), this.isRatePlanAvailable && (h("div", { class: `rateplan-details ${this.ratePlan.custom_text ? 'rateplan-details-no-custom-text' : ''}` }, this.isLoading ? (h("div", { class: "col-span-6 w-full " }, h("ir-skeleton", { class: "block h-12 w-full" }))) : (h(Fragment, null, h("div", { class: "rateplan-travelers" }, this.ratePlan.variations && (h("ir-select", { class: "rateplan-select-travelers", label: localizedWords.entries.Lcz_Travelers, value: this.ratePlan.variations
                .findIndex(f => { var _a, _b; return f.adult_child_offering === ((_b = (_a = this.visibleInventory) === null || _a === void 0 ? void 0 : _a.selected_variation) === null || _b === void 0 ? void 0 : _b.variation.adult_child_offering); })
                .toString(), onValueChange: e => {
                this.handleVariationChange(e, this.ratePlan.variations, this.ratePlan.id, this.roomTypeId);
            }, data: this.ratePlan.variations.map((v, i) => ({
                id: i.toString(),
                value: v.adult_child_offering,
            })) }))), !((_q = (_p = (_o = this.visibleInventory) === null || _o === void 0 ? void 0 : _o.selected_variation) === null || _p === void 0 ? void 0 : _p.variation) === null || _q === void 0 ? void 0 : _q.IS_MLS_VIOLATED) ? (h(Fragment, null, ((_t = (_s = (_r = this.visibleInventory) === null || _r === void 0 ? void 0 : _r.selected_variation) === null || _s === void 0 ? void 0 : _s.variation) === null || _t === void 0 ? void 0 : _t.discount_pct) > 0 && (h("div", { class: "rateplan-pricing" }, h("p", { class: "rateplan-discounted-amount" }, formatAmount((_w = (_v = (_u = this.visibleInventory) === null || _u === void 0 ? void 0 : _u.selected_variation) === null || _v === void 0 ? void 0 : _v.variation) === null || _w === void 0 ? void 0 : _w.total_before_discount, app_store.userPreferences.currency_id, 0)), h("p", { class: "rateplan-discount" }, `-${(_z = (_y = (_x = this.visibleInventory) === null || _x === void 0 ? void 0 : _x.selected_variation) === null || _y === void 0 ? void 0 : _y.variation) === null || _z === void 0 ? void 0 : _z.discount_pct}%`))), h("div", { class: "rateplan-final-pricing", "data-style": ((_2 = (_1 = (_0 = this.visibleInventory) === null || _0 === void 0 ? void 0 : _0.selected_variation) === null || _1 === void 0 ? void 0 : _1.variation) === null || _2 === void 0 ? void 0 : _2.discount_pct) > 0 ? '' : 'full-width' }, h("p", { class: "rateplan-amount" }, formatAmount((_5 = (_4 = (_3 = this.visibleInventory) === null || _3 === void 0 ? void 0 : _3.selected_variation) === null || _4 === void 0 ? void 0 : _4.variation) === null || _5 === void 0 ? void 0 : _5.amount, app_store.userPreferences.currency_id, 0)), getDateDifference((_6 = booking_store.bookingAvailabilityParams.from_date) !== null && _6 !== void 0 ? _6 : new Date(), (_7 = booking_store.bookingAvailabilityParams.to_date) !== null && _7 !== void 0 ? _7 : new Date()) > 1 && (h("p", { class: "rateplan-amount-per-night" }, `${formatAmount((_10 = (_9 = (_8 = this.visibleInventory) === null || _8 === void 0 ? void 0 : _8.selected_variation) === null || _9 === void 0 ? void 0 : _9.variation) === null || _10 === void 0 ? void 0 : _10.amount_per_night, app_store.userPreferences.currency_id, 0)}/${localizedWords.entries.Lcz_night}`))), ((_11 = this.visibleInventory) === null || _11 === void 0 ? void 0 : _11.reserved) > 0 ? (h("ir-select", { onValueChange: e => {
                reserveRooms(this.roomTypeId, this.ratePlan.id, Number(e.detail));
                this.animateBookingButton.emit(null);
            }, label: localizedWords.entries.Lcz_Rooms, value: (_12 = this.visibleInventory) === null || _12 === void 0 ? void 0 : _12.reserved, class: "rateplan-select-rooms", data: (_13 = [...new Array(this.roomTypeInventory + 1)]) === null || _13 === void 0 ? void 0 : _13.map((_, i) => {
                var _a, _b, _c, _d;
                return ({
                    id: i,
                    value: i === 0
                        ? `0`
                        : `${i}&nbsp;&nbsp;&nbsp;${i === 0 ? '' : formatAmount(((_c = (_b = (_a = this.visibleInventory) === null || _a === void 0 ? void 0 : _a.selected_variation) === null || _b === void 0 ? void 0 : _b.variation) === null || _c === void 0 ? void 0 : _c.amount) * i, app_store.userPreferences.currency_id, 0)}`,
                    disabled: i >= ((_d = this.visibleInventory) === null || _d === void 0 ? void 0 : _d.visibleInventory) + 1,
                    html: true,
                });
            }), containerStyle: 'triggerStyle', customStyles: 'selectStyle' })) : (h("ir-button", { class: "rateplan-select-rooms", buttonStyles: { background: 'white', width: '100%' }, label: "Select", variants: "outline-primary", onButtonClick: () => {
                reserveRooms(this.roomTypeId, this.ratePlan.id, 1);
                this.animateBookingButton.emit(null);
            } })))) : (h("p", { class: "mls_alert" }, (_15 = (_14 = this.visibleInventory.selected_variation) === null || _14 === void 0 ? void 0 : _14.variation) === null || _15 === void 0 ? void 0 : _15.MLS_ALERT))))))));
    }
    static get is() { return "ir-rateplan"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-rateplan.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-rateplan.css"]
        };
    }
    static get properties() {
        return {
            "display": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'grid' | 'default'",
                    "resolved": "\"default\" | \"grid\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "display",
                "reflect": true,
                "defaultValue": "'default'"
            },
            "ratePlan": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "RatePlan",
                    "resolved": "RatePlan",
                    "references": {
                        "RatePlan": {
                            "location": "import",
                            "path": "@/models/property",
                            "id": "src/models/property.ts::RatePlan"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "visibleInventory": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "| IRatePlanSelection\r\n    | {\r\n        reserved: number;\r\n        visibleInventory?: number;\r\n        selected_variation: any;\r\n      }",
                    "resolved": "IRatePlanSelection | { reserved: number; visibleInventory?: number; selected_variation: any; }",
                    "references": {
                        "IRatePlanSelection": {
                            "location": "import",
                            "path": "@/stores/booking",
                            "id": "src/stores/booking.ts::IRatePlanSelection"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "roomTypeInventory": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "room-type-inventory",
                "reflect": false
            },
            "roomTypeId": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "room-type-id",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "cancelationMessage": {},
            "isRatePlanAvailable": {}
        };
    }
    static get events() {
        return [{
                "method": "animateBookingButton",
                "name": "animateBookingButton",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "roomTypeInventory",
                "methodName": "handleRTICHange"
            }];
    }
}
//# sourceMappingURL=ir-rateplan.js.map
