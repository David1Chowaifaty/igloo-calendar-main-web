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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32;
        // if (!this.ratePlan.is_targeting_travel_agency && booking_store.bookingAvailabilityParams.agent) {
        //   return null;
        // }
        console.log('visible inventory', (_b = (_a = this.visibleInventory) === null || _a === void 0 ? void 0 : _a.selected_variation) === null || _b === void 0 ? void 0 : _b.variation.adult_child_offering);
        if (this.ratePlan.is_targeting_travel_agency && !app_store.app_data.isAgentMode) {
            return null;
        }
        const isInventoryFull = ((_c = this.visibleInventory) === null || _c === void 0 ? void 0 : _c.visibleInventory) === 0 ||
            !((_f = (_e = (_d = this.visibleInventory) === null || _d === void 0 ? void 0 : _d.selected_variation) === null || _e === void 0 ? void 0 : _e.variation) === null || _f === void 0 ? void 0 : _f.amount) ||
            Object.values(booking_store.ratePlanSelections[this.roomTypeId]).some(f => f.visibleInventory === f.reserved);
        return (h("div", { class: "rateplan-container" }, h("div", { class: `rateplan-header ${this.isRatePlanAvailable ? 'available' : 'not-available'}` }, h("div", { class: "rateplan-details-wrapper" }, h("p", { class: "rateplan-name" }, h("span", { class: "rateplan-short-name" }, this.ratePlan.short_name), this.ratePlan.is_non_refundable ? (h("p", { class: "rateplan-tooltip text-xs", style: { color: 'var(--ir-green)' } }, localizedWords.entries.Lcz_NonRefundable)) : (h("ir-tooltip", { labelColors: booking_store.isInFreeCancelationZone ? 'green' : 'default', class: `rateplan-tooltip`, open_behavior: "click", label: booking_store.isInFreeCancelationZone ? localizedWords.entries.Lcz_FreeCancellation : localizedWords.entries.Lcz_IfICancel, message: `${this.cancelationMessage || this.ratePlan.cancelation} ${(_g = this.ratePlan.guarantee) !== null && _g !== void 0 ? _g : ''}`, onTooltipOpenChange: e => {
                if (e.detail) {
                    this.fetchCancelationMessage(this.ratePlan.id, this.roomTypeId);
                }
            } }))), this.isLoading ? (h("div", { class: "grid place-items-center md:hidden" }, h("ir-skeleton", { class: "h-4 w-12" }))) : (h(Fragment, null, this.isRatePlanAvailable ? (!((_k = (_j = (_h = this.visibleInventory) === null || _h === void 0 ? void 0 : _h.selected_variation) === null || _j === void 0 ? void 0 : _j.variation) === null || _k === void 0 ? void 0 : _k.IS_MLS_VIOLATED) &&
            ((_o = (_m = (_l = this.visibleInventory) === null || _l === void 0 ? void 0 : _l.selected_variation) === null || _m === void 0 ? void 0 : _m.variation) === null || _o === void 0 ? void 0 : _o.amount) && (h("div", { class: "rateplan-pricing-mobile" }, ((_r = (_q = (_p = this.visibleInventory) === null || _p === void 0 ? void 0 : _p.selected_variation) === null || _q === void 0 ? void 0 : _q.variation) === null || _r === void 0 ? void 0 : _r.discount_pct) > 0 && (h("p", { class: "rateplan-discounted-amount" }, formatAmount((_u = (_t = (_s = this.visibleInventory) === null || _s === void 0 ? void 0 : _s.selected_variation) === null || _t === void 0 ? void 0 : _t.variation) === null || _u === void 0 ? void 0 : _u.total_before_discount, app_store.userPreferences.currency_id, 0))), h("p", { class: "rateplan-amount" }, formatAmount((_x = (_w = (_v = this.visibleInventory) === null || _v === void 0 ? void 0 : _v.selected_variation) === null || _w === void 0 ? void 0 : _w.variation) === null || _x === void 0 ? void 0 : _x.amount, app_store.userPreferences.currency_id, 0))))) : (h("p", { class: "no-availability" }, localizedWords.entries.Lcz_NotAvailable))))), h("div", { class: "rateplan-description" }, this.ratePlan.is_non_refundable ? (h("p", { class: "rateplan-tooltip text-xs", style: { color: 'var(--ir-green)' } }, localizedWords.entries.Lcz_NonRefundable)) : (h("ir-tooltip", { labelColors: booking_store.isInFreeCancelationZone ? 'green' : 'default', class: `rateplan-tooltip`, open_behavior: "click", label: booking_store.isInFreeCancelationZone ? localizedWords.entries.Lcz_FreeCancellation : localizedWords.entries.Lcz_IfICancel, message: `${((_y = this.cancelationMessage) !== null && _y !== void 0 ? _y : '') || ((_z = this.ratePlan.cancelation) !== null && _z !== void 0 ? _z : '')} ${(_0 = this.ratePlan.guarantee) !== null && _0 !== void 0 ? _0 : ''}`, onTooltipOpenChange: e => {
                if (e.detail) {
                    this.fetchCancelationMessage(this.ratePlan.id, this.roomTypeId);
                }
            } })), h("p", { class: "rateplan-custom-text", innerHTML: this.ratePlan.custom_text }))), this.isRatePlanAvailable && (h("div", { class: `rateplan-details ${this.ratePlan.custom_text ? 'rateplan-details-no-custom-text' : ''}` }, this.isLoading || ((_1 = this.ratePlan.variations) === null || _1 === void 0 ? void 0 : _1.length) === 0 ? (h("div", { class: "col-span-6 w-full " }, h("ir-skeleton", { class: "block h-12 w-full" }))) : (h(Fragment, null, h("div", { class: "rateplan-travelers" }, this.ratePlan.variations && (h("ir-select", { class: "rateplan-select-travelers", label: 'Travelers', value: this.ratePlan.variations
                .findIndex(f => { var _a, _b; return f.adult_child_offering === ((_b = (_a = this.visibleInventory) === null || _a === void 0 ? void 0 : _a.selected_variation) === null || _b === void 0 ? void 0 : _b.variation.adult_child_offering); })
                .toString(), onValueChange: e => {
                this.handleVariationChange(e, this.ratePlan.variations, this.ratePlan.id, this.roomTypeId);
            }, data: this.ratePlan.variations.map((v, i) => ({
                id: i.toString(),
                value: v.adult_child_offering,
            })) }))), !((_4 = (_3 = (_2 = this.visibleInventory) === null || _2 === void 0 ? void 0 : _2.selected_variation) === null || _3 === void 0 ? void 0 : _3.variation) === null || _4 === void 0 ? void 0 : _4.IS_MLS_VIOLATED) ? (h(Fragment, null, ((_7 = (_6 = (_5 = this.visibleInventory) === null || _5 === void 0 ? void 0 : _5.selected_variation) === null || _6 === void 0 ? void 0 : _6.variation) === null || _7 === void 0 ? void 0 : _7.amount) && (h(Fragment, null, ((_10 = (_9 = (_8 = this.visibleInventory) === null || _8 === void 0 ? void 0 : _8.selected_variation) === null || _9 === void 0 ? void 0 : _9.variation) === null || _10 === void 0 ? void 0 : _10.discount_pct) > 0 && (h("div", { class: "rateplan-pricing" }, h("p", { class: "rateplan-discounted-amount" }, formatAmount((_13 = (_12 = (_11 = this.visibleInventory) === null || _11 === void 0 ? void 0 : _11.selected_variation) === null || _12 === void 0 ? void 0 : _12.variation) === null || _13 === void 0 ? void 0 : _13.total_before_discount, app_store.userPreferences.currency_id, 0)), h("p", { class: "rateplan-discount" }, `-${(_16 = (_15 = (_14 = this.visibleInventory) === null || _14 === void 0 ? void 0 : _14.selected_variation) === null || _15 === void 0 ? void 0 : _15.variation) === null || _16 === void 0 ? void 0 : _16.discount_pct}%`))), h("div", { class: "rateplan-final-pricing", "data-style": ((_19 = (_18 = (_17 = this.visibleInventory) === null || _17 === void 0 ? void 0 : _17.selected_variation) === null || _18 === void 0 ? void 0 : _18.variation) === null || _19 === void 0 ? void 0 : _19.discount_pct) > 0 ? '' : 'full-width' }, h("p", { class: "rateplan-amount" }, formatAmount((_22 = (_21 = (_20 = this.visibleInventory) === null || _20 === void 0 ? void 0 : _20.selected_variation) === null || _21 === void 0 ? void 0 : _21.variation) === null || _22 === void 0 ? void 0 : _22.amount, app_store.userPreferences.currency_id, 0)), getDateDifference((_23 = booking_store.bookingAvailabilityParams.from_date) !== null && _23 !== void 0 ? _23 : new Date(), (_24 = booking_store.bookingAvailabilityParams.to_date) !== null && _24 !== void 0 ? _24 : new Date()) >
            1 && (h("p", { class: "rateplan-amount-per-night" }, `${formatAmount((_27 = (_26 = (_25 = this.visibleInventory) === null || _25 === void 0 ? void 0 : _25.selected_variation) === null || _26 === void 0 ? void 0 : _26.variation) === null || _27 === void 0 ? void 0 : _27.amount_per_night, app_store.userPreferences.currency_id, 0)}/${localizedWords.entries.Lcz_night}`))))), ((_28 = this.visibleInventory) === null || _28 === void 0 ? void 0 : _28.reserved) > 0 ? (h("ir-select", { onValueChange: e => {
                reserveRooms(this.roomTypeId, this.ratePlan.id, Number(e.detail));
                this.animateBookingButton.emit(null);
            }, label: localizedWords.entries.Lcz_Rooms, value: (_29 = this.visibleInventory) === null || _29 === void 0 ? void 0 : _29.reserved, class: "rateplan-select-rooms", data: (_30 = [...new Array(this.roomTypeInventory + 1)]) === null || _30 === void 0 ? void 0 : _30.map((_, i) => {
                var _a, _b, _c, _d;
                return ({
                    id: i,
                    value: i === 0
                        ? `0`
                        : `${i}&nbsp;&nbsp;&nbsp;${i === 0 ? '' : formatAmount(((_c = (_b = (_a = this.visibleInventory) === null || _a === void 0 ? void 0 : _a.selected_variation) === null || _b === void 0 ? void 0 : _b.variation) === null || _c === void 0 ? void 0 : _c.amount) * i, app_store.userPreferences.currency_id, 0)}`,
                    disabled: i >= ((_d = this.visibleInventory) === null || _d === void 0 ? void 0 : _d.visibleInventory) + 1,
                    html: true,
                });
            }), containerStyle: 'triggerStyle', customStyles: 'selectStyle' })) : (h("ir-button", { disabled: isInventoryFull, class: "rateplan-select-rooms-btn", buttonStyles: { background: 'white', width: '100%', opacity: isInventoryFull ? '0.5' : '1' }, label: localizedWords.entries.Lcz_Select, variants: "outline-primary", onButtonClick: () => {
                reserveRooms(this.roomTypeId, this.ratePlan.id, 1);
                this.animateBookingButton.emit(null);
            } })))) : (h("p", { class: "mls_alert" }, localizedWords.entries.Lcz_MLS_Alert.replace('{0}', (_32 = (_31 = this.visibleInventory.selected_variation) === null || _31 === void 0 ? void 0 : _31.variation) === null || _32 === void 0 ? void 0 : _32.MLS_ALERT_VALUE)))))))));
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
