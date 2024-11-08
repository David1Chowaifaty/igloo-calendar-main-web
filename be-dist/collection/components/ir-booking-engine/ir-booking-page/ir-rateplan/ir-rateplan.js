import { Fragment, h } from "@stencil/core";
import app_store from "../../../../stores/app.store";
import booking_store, { reserveRooms, updateRoomParams } from "../../../../stores/booking";
import { formatAmount, getDateDifference } from "../../../../utils/utils";
import localizedWords from "../../../../stores/localization.store";
import { PaymentService } from "../../../../services/api/payment.service";
export class IrRateplan {
    constructor() {
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
        var _a;
        this.isRatePlanAvailable =
            this.roomTypeInventory > 0 && (this.ratePlan.is_available_to_book || (!this.ratePlan.is_available_to_book && ((_a = this.ratePlan.not_available_reason) === null || _a === void 0 ? void 0 : _a.includes('MLS'))));
    }
    async handleVariationChange(e, variations, rateplanId, roomTypeId) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const value = e.detail;
        let selectedVariation = variations[value];
        if (!selectedVariation) {
            return;
        }
        selectedVariation = booking_store.roomTypes.find(rt => rt.id === roomTypeId).rateplans.find(rp => rp.id === rateplanId).variations[value];
        updateRoomParams({ params: { selected_variation: selectedVariation }, ratePlanId: rateplanId, roomTypeId });
    }
    async fetchCancelationMessage() {
        var _a, _b;
        this.cancelationMessage = (_b = this.paymentService.getCancelationMessage((_a = this.visibleInventory.selected_variation) === null || _a === void 0 ? void 0 : _a.applicable_policies, true)) === null || _b === void 0 ? void 0 : _b.message;
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17;
        if (!this.ratePlan.is_targeting_travel_agency && booking_store.bookingAvailabilityParams.agent) {
            return null;
        }
        if (this.ratePlan.is_targeting_travel_agency && !app_store.app_data.isAgentMode) {
            return null;
        }
        const isInFreeCancelationZone = this.paymentService.checkFreeCancelationZone((_b = (_a = this.visibleInventory) === null || _a === void 0 ? void 0 : _a.selected_variation) === null || _b === void 0 ? void 0 : _b.applicable_policies);
        const isInventoryFull = ((_c = this.visibleInventory) === null || _c === void 0 ? void 0 : _c.visibleInventory) === 0 ||
            !((_e = (_d = this.visibleInventory) === null || _d === void 0 ? void 0 : _d.selected_variation) === null || _e === void 0 ? void 0 : _e.discounted_amount) ||
            Object.values(booking_store.ratePlanSelections[this.roomTypeId]).some(f => f.visibleInventory === f.reserved);
        return (h("div", { class: "rateplan-container" }, h("div", { class: `rateplan-header ${this.isRatePlanAvailable ? 'available' : 'not-available'}` }, h("div", { class: "rateplan-details-wrapper" }, h("p", { class: "rateplan-name" }, h("span", { class: "rateplan-short-name" }, this.ratePlan.short_name), this.ratePlan.is_non_refundable ? (h("p", { class: "rateplan-tooltip text-xs", style: { color: 'var(--ir-green)' } }, localizedWords.entries.Lcz_NonRefundable)) : (this.ratePlan.is_available_to_book && (h("ir-tooltip", { labelColors: isInFreeCancelationZone ? 'green' : 'default', class: `rateplan-tooltip`, open_behavior: "click", label: isInFreeCancelationZone ? localizedWords.entries.Lcz_FreeCancellation : localizedWords.entries.Lcz_IfICancel, message: `${this.cancelationMessage || this.ratePlan.cancelation} ${(_f = this.ratePlan.guarantee) !== null && _f !== void 0 ? _f : ''}`, onTooltipOpenChange: e => {
                if (e.detail) {
                    this.fetchCancelationMessage();
                }
            } })))), this.isLoading ? (h("div", { class: "grid place-items-center md:hidden" }, h("ir-skeleton", { class: "h-4 w-12" }))) : (h(Fragment, null, this.isRatePlanAvailable ? (((_h = (_g = this.visibleInventory) === null || _g === void 0 ? void 0 : _g.selected_variation) === null || _h === void 0 ? void 0 : _h.discounted_amount) && (h("div", { class: "rateplan-pricing-mobile" }, ((_k = (_j = this.visibleInventory) === null || _j === void 0 ? void 0 : _j.selected_variation) === null || _k === void 0 ? void 0 : _k.discount_pct) > 0 && (h("p", { class: "rateplan-discounted-amount" }, formatAmount((_m = (_l = this.visibleInventory) === null || _l === void 0 ? void 0 : _l.selected_variation) === null || _m === void 0 ? void 0 : _m.amount, app_store.userPreferences.currency_id, 0))), h("p", { class: "rateplan-amount" }, formatAmount((_p = (_o = this.visibleInventory) === null || _o === void 0 ? void 0 : _o.selected_variation) === null || _p === void 0 ? void 0 : _p.discounted_amount, app_store.userPreferences.currency_id, 0))))) : (h("p", { class: "no-availability" }, localizedWords.entries.Lcz_NotAvailable))))), h("div", { class: "rateplan-description" }, h("div", { class: "flex items-center justify-between" }, this.ratePlan.is_non_refundable ? (h("p", { class: "rateplan-tooltip text-xs", style: { color: 'var(--ir-green)' } }, localizedWords.entries.Lcz_NonRefundable)) : (this.ratePlan.is_available_to_book && (h("ir-tooltip", { labelColors: isInFreeCancelationZone ? 'green' : 'default', class: `rateplan-tooltip`, open_behavior: "click", label: isInFreeCancelationZone ? localizedWords.entries.Lcz_FreeCancellation : localizedWords.entries.Lcz_IfICancel, message: `${((_q = this.cancelationMessage) !== null && _q !== void 0 ? _q : '') || ((_r = this.ratePlan.cancelation) !== null && _r !== void 0 ? _r : '')} ${(_s = this.ratePlan.guarantee) !== null && _s !== void 0 ? _s : ''}`, onTooltipOpenChange: e => {
                if (e.detail) {
                    this.fetchCancelationMessage();
                }
            } }))), getDateDifference((_t = booking_store.bookingAvailabilityParams.from_date) !== null && _t !== void 0 ? _t : new Date(), (_u = booking_store.bookingAvailabilityParams.to_date) !== null && _u !== void 0 ? _u : new Date()) > 1 && (h("p", { class: "rateplan-amount-per-night grid-view" }, `${formatAmount((_w = (_v = this.visibleInventory) === null || _v === void 0 ? void 0 : _v.selected_variation) === null || _w === void 0 ? void 0 : _w.amount_per_night, app_store.userPreferences.currency_id, 0)}/${localizedWords.entries.Lcz_night}`))), h("p", { class: "rateplan-custom-text", innerHTML: this.ratePlan.custom_text }))), this.isRatePlanAvailable && (h("div", { class: `rateplan-details ${this.ratePlan.custom_text ? 'rateplan-details-no-custom-text' : ''}` }, this.isLoading ? (h("div", { class: "col-span-6 w-full " }, h("ir-skeleton", { class: "block h-12 w-full" }))) : (h(Fragment, null, h("div", { class: "rateplan-travelers" }, this.ratePlan.variations && this.ratePlan.is_available_to_book && (h("ir-select", { class: "rateplan-select-travelers", label: 'Travelers', value: this.ratePlan.variations
                .findIndex(f => {
                var _a, _b, _c, _d;
                return `${f.adult_nbr}_a_${f.child_nbr}_c` ===
                    `${(_b = (_a = this.visibleInventory) === null || _a === void 0 ? void 0 : _a.selected_variation) === null || _b === void 0 ? void 0 : _b.adult_nbr}_a_${(_d = (_c = this.visibleInventory) === null || _c === void 0 ? void 0 : _c.selected_variation) === null || _d === void 0 ? void 0 : _d.child_nbr}_c`;
            })
                .toString(), onValueChange: e => {
                this.handleVariationChange(e, this.ratePlan.variations, this.ratePlan.id, this.roomTypeId);
            }, data: this.ratePlan.variations.map((v, i) => ({
                id: i.toString(),
                value: this.formatVariation(v),
            })) }))), !((_x = this.ratePlan.not_available_reason) === null || _x === void 0 ? void 0 : _x.includes('MLS')) ? (h(Fragment, null, ((_z = (_y = this.visibleInventory) === null || _y === void 0 ? void 0 : _y.selected_variation) === null || _z === void 0 ? void 0 : _z.discounted_amount) && (h(Fragment, null, ((_1 = (_0 = this.visibleInventory) === null || _0 === void 0 ? void 0 : _0.selected_variation) === null || _1 === void 0 ? void 0 : _1.discount_pct) > 0 && (h("div", { class: "rateplan-pricing" }, h("p", { class: "rateplan-discounted-amount" }, formatAmount((_3 = (_2 = this.visibleInventory) === null || _2 === void 0 ? void 0 : _2.selected_variation) === null || _3 === void 0 ? void 0 : _3.amount, app_store.userPreferences.currency_id, 0)), h("p", { class: "rateplan-discount" }, `-${Number((_5 = (_4 = this.visibleInventory) === null || _4 === void 0 ? void 0 : _4.selected_variation) === null || _5 === void 0 ? void 0 : _5.discount_pct).toPrecision(2)}%`))), h("div", { class: "rateplan-final-pricing", "data-style": ((_7 = (_6 = this.visibleInventory) === null || _6 === void 0 ? void 0 : _6.selected_variation) === null || _7 === void 0 ? void 0 : _7.discount_pct) > 0 ? '' : 'full-width' }, h("p", { class: "rateplan-amount" }, formatAmount((_9 = (_8 = this.visibleInventory) === null || _8 === void 0 ? void 0 : _8.selected_variation) === null || _9 === void 0 ? void 0 : _9.discounted_amount, app_store.userPreferences.currency_id, 0)), getDateDifference((_10 = booking_store.bookingAvailabilityParams.from_date) !== null && _10 !== void 0 ? _10 : new Date(), (_11 = booking_store.bookingAvailabilityParams.to_date) !== null && _11 !== void 0 ? _11 : new Date()) >
            1 && (h("p", { class: "rateplan-amount-per-night" }, `${formatAmount((_13 = (_12 = this.visibleInventory) === null || _12 === void 0 ? void 0 : _12.selected_variation) === null || _13 === void 0 ? void 0 : _13.amount_per_night, app_store.userPreferences.currency_id, 0)}/${localizedWords.entries.Lcz_night}`))))), ((_14 = this.visibleInventory) === null || _14 === void 0 ? void 0 : _14.reserved) > 0 ? (h("ir-select", { onValueChange: e => {
                reserveRooms(this.roomTypeId, this.ratePlan.id, Number(e.detail));
                this.animateBookingButton.emit(null);
            }, label: localizedWords.entries.Lcz_Rooms, value: (_15 = this.visibleInventory) === null || _15 === void 0 ? void 0 : _15.reserved, class: "rateplan-select-rooms", data: (_16 = [...new Array(this.roomTypeInventory + 1)]) === null || _16 === void 0 ? void 0 : _16.map((_, i) => {
                var _a, _b, _c;
                return ({
                    id: i,
                    value: i === 0
                        ? `0`
                        : `${i}&nbsp;&nbsp;&nbsp;${i === 0 ? '' : formatAmount(((_b = (_a = this.visibleInventory) === null || _a === void 0 ? void 0 : _a.selected_variation) === null || _b === void 0 ? void 0 : _b.discounted_amount) * i, app_store.userPreferences.currency_id, 0)}`,
                    disabled: i >= ((_c = this.visibleInventory) === null || _c === void 0 ? void 0 : _c.visibleInventory) + 1,
                    html: true,
                });
            }), containerStyle: 'triggerStyle', customStyles: 'selectStyle' })) : (h("ir-button", { disabled: isInventoryFull, class: "rateplan-select-rooms-btn", buttonStyles: { background: 'white', width: '100%', opacity: isInventoryFull ? '0.5' : '1' }, label: localizedWords.entries.Lcz_Select, variants: "outline-primary", onButtonClick: () => {
                reserveRooms(this.roomTypeId, this.ratePlan.id, 1);
                this.animateBookingButton.emit(null);
            } })))) : (h("p", { class: "mls_alert" }, localizedWords.entries.Lcz_MLS_Alert.replace('{0}', (_17 = this.ratePlan.not_available_reason) === null || _17 === void 0 ? void 0 : _17.replace('MLS-', ''))))))))));
    }
    formatVariation(v) {
        const adults = `${v.adult_nbr} ${v.adult_nbr === 1 ? localizedWords.entries.Lcz_Adult.toLowerCase() : localizedWords.entries.Lcz_Adults.toLowerCase()}`;
        const children = v.child_nbr > 0 ? `${v.child_nbr}  ${v.child_nbr > 1 ? localizedWords.entries.Lcz_Children.toLowerCase() : localizedWords.entries.Lcz_Child.toLowerCase()}` : null;
        return children ? `${adults} ${children}` : adults;
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
                    "original": "| IRatePlanSelection\r\n    | {\r\n        reserved: number;\r\n        visibleInventory?: number;\r\n        selected_variation: Variation;\r\n      }",
                    "resolved": "IRatePlanSelection | { reserved: number; visibleInventory?: number; selected_variation: Variation; }",
                    "references": {
                        "IRatePlanSelection": {
                            "location": "import",
                            "path": "@/stores/booking",
                            "id": "src/stores/booking.ts::IRatePlanSelection"
                        },
                        "Variation": {
                            "location": "import",
                            "path": "@/models/property",
                            "id": "src/models/property.ts::Variation"
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
