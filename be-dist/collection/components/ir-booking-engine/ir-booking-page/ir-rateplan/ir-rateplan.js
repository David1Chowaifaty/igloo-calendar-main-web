import { Fragment, h } from "@stencil/core";
import app_store from "../../../../stores/app.store";
import booking_store, { reserveRooms, updateRoomParams } from "../../../../stores/booking";
import { formatAmount, getDateDifference } from "../../../../utils/utils";
import localizedWords from "../../../../stores/localization.store";
import { PaymentService } from "../../../../services/api/payment.service";
import { isRequestPending } from "../../../../stores/ir-interceptor.store";
export class IrRateplan {
    constructor() {
        this.display = 'default';
        this.isLoading = false;
        this.cancellationMessage = '';
        this.isRatePlanAvailable = true;
        this.paymentService = new PaymentService();
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
    async fetchCancellationMessage() {
        var _a, _b;
        this.cancellationMessage = (_b = this.paymentService.getCancellationMessage((_a = this.visibleInventory.selected_variation) === null || _a === void 0 ? void 0 : _a.applicable_policies, true)) === null || _b === void 0 ? void 0 : _b.message;
    }
    render() {
        // if (!this.ratePlan.is_targeting_travel_agency && booking_store.bookingAvailabilityParams.agent) {
        //   return null;
        // }
        // if (this.ratePlan.is_targeting_travel_agency && !app_store.app_data.isAgentMode) {
        //   return null;
        // }
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24;
        const isInFreeCancellationZone = this.paymentService.checkFreeCancellationZone((_b = (_a = this.visibleInventory) === null || _a === void 0 ? void 0 : _a.selected_variation) === null || _b === void 0 ? void 0 : _b.applicable_policies);
        const isInventoryFull = ((_c = this.visibleInventory) === null || _c === void 0 ? void 0 : _c.visibleInventory) === 0 ||
            !((_e = (_d = this.visibleInventory) === null || _d === void 0 ? void 0 : _d.selected_variation) === null || _e === void 0 ? void 0 : _e.discounted_gross_amount) ||
            Object.values(booking_store.ratePlanSelections[this.roomTypeId]).some(f => f.visibleInventory === f.reserved);
        return (h("div", { key: '7d1cddb7180575298e5ef501c7153b8ba8d1bc76', class: "rateplan-container" }, h("div", { key: '86d6660abd1cd2334f3ea97f65c046c36a53a352', class: `rateplan-header ${this.isRatePlanAvailable ? 'available' : 'not-available'}` }, h("div", { key: 'f13a15c60f3fa0ee06a9a7adad182aaa86bdb5e5', class: "rateplan-details-wrapper" }, h("p", { key: '20ce7ca6b55b28b4f00aa7517992116b08c04bfc', class: "rateplan-name" }, h("span", { key: '92971ab88e460d5fa977fe9f42909de3f65937ce', class: "rateplan-short-name" }, this.ratePlan.short_name), this.ratePlan.is_non_refundable ? (h("p", { class: "rateplan-tooltip text-xs", style: { color: 'var(--ir-green)' } }, localizedWords.entries.Lcz_NonRefundable)) : (this.ratePlan.is_available_to_book && (h("ir-tooltip", { labelColors: isInFreeCancellationZone ? 'green' : 'default', class: `rateplan-tooltip`, open_behavior: "click", label: isInFreeCancellationZone ? localizedWords.entries.Lcz_FreeCancellation : localizedWords.entries.Lcz_IfICancel, message: `${this.cancellationMessage || this.ratePlan.cancelation} ${(_f = this.ratePlan.guarantee) !== null && _f !== void 0 ? _f : ''}`, onTooltipOpenChange: e => {
                if (e.detail) {
                    this.fetchCancellationMessage();
                }
            } })))), this.isLoading ? (h("div", { class: "grid place-items-center md:hidden" }, h("ir-skeleton", { class: "h-4 w-12" }))) : (h(Fragment, null, this.isRatePlanAvailable ? (((_h = (_g = this.visibleInventory) === null || _g === void 0 ? void 0 : _g.selected_variation) === null || _h === void 0 ? void 0 : _h.discounted_gross_amount) && (h("div", { class: "rateplan-pricing-mobile" }, ((_k = (_j = this.visibleInventory) === null || _j === void 0 ? void 0 : _j.selected_variation) === null || _k === void 0 ? void 0 : _k.discount_pct) > 0 && (h("p", { class: "rateplan-discounted-amount" }, formatAmount((_m = (_l = this.visibleInventory) === null || _l === void 0 ? void 0 : _l.selected_variation) === null || _m === void 0 ? void 0 : _m.amount_gross, app_store.userPreferences.currency_id, 0))), h("p", { class: "rateplan-amount" }, formatAmount((_p = (_o = this.visibleInventory) === null || _o === void 0 ? void 0 : _o.selected_variation) === null || _p === void 0 ? void 0 : _p.discounted_gross_amount, app_store.userPreferences.currency_id, 0))))) : (h("p", { class: "no-availability" }, localizedWords.entries.Lcz_NotAvailable))))), h("div", { key: 'a3a6846550619e4e0ec21e7a2ee4a7fe330a2e26', class: 'flex items-center', style: { alignItems: 'center' } }, h("div", { key: 'f920f4037849540ef3234a41edeaffab12d37d85', class: "rateplan-description flex-1" }, h("div", { key: 'e554b6134cd318396ad7bd1f5385508102afb19c', class: "flex justify-between gap-4" }, this.ratePlan.custom_text && h("p", { key: '46dc1be9990b6cc022baf7adcd383443467b3fbb', class: "rateplan-custom-text grid-view", innerHTML: this.ratePlan.custom_text }), ((_r = (_q = this.visibleInventory) === null || _q === void 0 ? void 0 : _q.selected_variation) === null || _r === void 0 ? void 0 : _r.discount_pct) > 0 && this.ratePlan.custom_text && (h("p", { key: '4718da8a98f738f5378d4a1fa29ef4992e2ae1cc', class: `rateplan-discount ${app_store.app_data.displayMode === 'default' ? 'ir-default' : ''}` }, `-${Number((_t = (_s = this.visibleInventory) === null || _s === void 0 ? void 0 : _s.selected_variation) === null || _t === void 0 ? void 0 : _t.discount_pct)}%`))), h("div", { key: '1b48c52b426d08cce0fa52fc62e2da13683b29d4', class: "flex items-center justify-between" }, this.ratePlan.is_non_refundable ? (h("p", { class: "rateplan-tooltip text-xs", style: { color: 'var(--ir-green)' } }, localizedWords.entries.Lcz_NonRefundable)) : (this.ratePlan.is_available_to_book && (h("ir-tooltip", { labelColors: isInFreeCancellationZone ? 'green' : 'default', class: `rateplan-tooltip`, open_behavior: "click", label: isInFreeCancellationZone ? localizedWords.entries.Lcz_FreeCancellation : localizedWords.entries.Lcz_IfICancel, message: `${((_u = this.cancellationMessage) !== null && _u !== void 0 ? _u : '') || ((_v = this.ratePlan.cancelation) !== null && _v !== void 0 ? _v : '')} ${(_w = this.ratePlan.guarantee) !== null && _w !== void 0 ? _w : ''}`, onTooltipOpenChange: e => {
                if (e.detail) {
                    this.fetchCancellationMessage();
                }
            } }))), h("div", { key: '294883687e28c6241441a8f71ae86f57f2c4cffe', class: "flex gap-4" }, ((_x = this.visibleInventory) === null || _x === void 0 ? void 0 : _x.selected_variation) &&
            getDateDifference(booking_store.bookingAvailabilityParams.from_date, booking_store.bookingAvailabilityParams.to_date) > 1 && (h("p", { key: '7cffa13a4b167dd947dc065ac2c85d0c1581da83', class: "rateplan-amount-per-night grid-view" }, `${formatAmount((_z = (_y = this.visibleInventory) === null || _y === void 0 ? void 0 : _y.selected_variation) === null || _z === void 0 ? void 0 : _z.amount_per_night, app_store.userPreferences.currency_id, 0)}/${localizedWords.entries.Lcz_night}`)), ((_1 = (_0 = this.visibleInventory) === null || _0 === void 0 ? void 0 : _0.selected_variation) === null || _1 === void 0 ? void 0 : _1.discount_pct) > 0 && !this.ratePlan.custom_text && (h("p", { key: '543547413219b80ab6fdd00cda64748043d21e16', class: `rateplan-discount ${app_store.app_data.displayMode === 'default' ? 'ir-default' : ''}` }, `-${Number((_3 = (_2 = this.visibleInventory) === null || _2 === void 0 ? void 0 : _2.selected_variation) === null || _3 === void 0 ? void 0 : _3.discount_pct)}%`)))), this.display === 'default' && this.ratePlan.custom_text && h("p", { key: 'c784ea0968566d18054ed5c34a5c07d9b0734a96', class: "rateplan-custom-text", innerHTML: this.ratePlan.custom_text }))), !this.ratePlan.is_available_to_book && this.ratePlan.not_available_reason.includes('MLS') && (h("p", { key: '5e7bf514911407b7d880848d4ac646f4bc9b46b6', class: "mls_alert_grid" }, localizedWords.entries.Lcz_MLS_Alert.replace('{0}', (_4 = this.ratePlan.not_available_reason) === null || _4 === void 0 ? void 0 : _4.replace('MLS-', ''))))), this.isRatePlanAvailable && (h("div", { key: 'ed20fe5c3965093988e6c3063033abe09430d269', class: `rateplan-details ${this.ratePlan.custom_text ? 'rateplan-details-no-custom-text' : ''}` }, this.isLoading ? (h("div", { class: "col-span-6 w-full " }, h("ir-skeleton", { class: "block h-12 w-full" }))) : (h(Fragment, null, h("div", { class: "rateplan-travelers" }, this.ratePlan.variations && this.ratePlan.is_available_to_book && (h("ir-select", { class: "rateplan-select-travelers", label: 'Travelers', value: this.ratePlan.variations
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
                html: true,
            })) }))), !((_5 = this.ratePlan.not_available_reason) === null || _5 === void 0 ? void 0 : _5.includes('MLS')) ? (h(Fragment, null, ((_7 = (_6 = this.visibleInventory) === null || _6 === void 0 ? void 0 : _6.selected_variation) === null || _7 === void 0 ? void 0 : _7.discounted_gross_amount) && (h(Fragment, null, ((_9 = (_8 = this.visibleInventory) === null || _8 === void 0 ? void 0 : _8.selected_variation) === null || _9 === void 0 ? void 0 : _9.discount_pct) > 0 && (h("div", { class: "rateplan-pricing" }, h("p", { class: "rateplan-discounted-amount" }, formatAmount((_11 = (_10 = this.visibleInventory) === null || _10 === void 0 ? void 0 : _10.selected_variation) === null || _11 === void 0 ? void 0 : _11.amount_gross, app_store.userPreferences.currency_id, 0)), h("p", { class: "rateplan-discount" }, `-${Number((_13 = (_12 = this.visibleInventory) === null || _12 === void 0 ? void 0 : _12.selected_variation) === null || _13 === void 0 ? void 0 : _13.discount_pct)}%`))), h("div", { class: "rateplan-final-pricing", "data-style": ((_15 = (_14 = this.visibleInventory) === null || _14 === void 0 ? void 0 : _14.selected_variation) === null || _15 === void 0 ? void 0 : _15.discount_pct) > 0 ? '' : 'full-width' }, h("p", { class: "rateplan-amount" }, formatAmount((_17 = (_16 = this.visibleInventory) === null || _16 === void 0 ? void 0 : _16.selected_variation) === null || _17 === void 0 ? void 0 : _17.discounted_gross_amount, app_store.userPreferences.currency_id, 0)), ((_18 = this.visibleInventory) === null || _18 === void 0 ? void 0 : _18.selected_variation) &&
            getDateDifference(booking_store.bookingAvailabilityParams.from_date, booking_store.bookingAvailabilityParams.to_date) > 1 && (h("p", { class: "rateplan-amount-per-night" }, `${formatAmount((_20 = (_19 = this.visibleInventory) === null || _19 === void 0 ? void 0 : _19.selected_variation) === null || _20 === void 0 ? void 0 : _20.amount_per_night, app_store.userPreferences.currency_id, 0)}/${localizedWords.entries.Lcz_night}`))))), ((_21 = this.visibleInventory) === null || _21 === void 0 ? void 0 : _21.reserved) > 0 ? (h("ir-select", { onValueChange: e => {
                reserveRooms(this.roomTypeId, this.ratePlan.id, Number(e.detail));
                this.animateBookingButton.emit(null);
            }, label: localizedWords.entries.Lcz_Rooms, value: (_22 = this.visibleInventory) === null || _22 === void 0 ? void 0 : _22.reserved, class: "rateplan-select-rooms", data: (_23 = [...new Array(this.roomTypeInventory + 1)]) === null || _23 === void 0 ? void 0 : _23.map((_, i) => {
                var _a, _b, _c;
                return ({
                    id: i,
                    value: i === 0
                        ? `0`
                        : `${i}&nbsp;&nbsp;&nbsp;${i === 0 ? '' : formatAmount(((_b = (_a = this.visibleInventory) === null || _a === void 0 ? void 0 : _a.selected_variation) === null || _b === void 0 ? void 0 : _b.discounted_gross_amount) * i, app_store.userPreferences.currency_id, 0)}`,
                    disabled: i >= ((_c = this.visibleInventory) === null || _c === void 0 ? void 0 : _c.visibleInventory) + 1,
                    html: true,
                });
            }), containerStyle: 'triggerStyle', customStyles: 'selectStyle' })) : (h("ir-button", { disabled: isInventoryFull || isRequestPending('/Check_Availability'), class: "rateplan-select-rooms w-full", buttonStyles: { background: 'white', opacity: isInventoryFull ? '0.5' : '1' }, label: localizedWords.entries.Lcz_Select, variants: "outline-primary", onButtonClick: () => {
                reserveRooms(this.roomTypeId, this.ratePlan.id, 1);
                this.animateBookingButton.emit(null);
            } })))) : (h("p", { class: "mls_alert" }, localizedWords.entries.Lcz_MLS_Alert.replace('{0}', (_24 = this.ratePlan.not_available_reason) === null || _24 === void 0 ? void 0 : _24.replace('MLS-', ''))))))))));
    }
    formatVariation(v) {
        const adults = `${v.adult_nbr} ${v.adult_nbr === 1 ? localizedWords.entries.Lcz_Adult.toLowerCase() : localizedWords.entries.Lcz_Adults.toLowerCase()}`;
        const children = v.child_nbr > 0 ? `${v.child_nbr}  ${v.child_nbr > 1 ? localizedWords.entries.Lcz_Children.toLowerCase() : localizedWords.entries.Lcz_Child.toLowerCase()}` : null;
        return children ? `${adults}&nbsp&nbsp&nbsp${children}` : adults;
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
                "getter": false,
                "setter": false,
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
                },
                "getter": false,
                "setter": false
            },
            "visibleInventory": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "| IRatePlanSelection\n    | {\n        reserved: number;\n        visibleInventory?: number;\n        selected_variation: Variation;\n      }",
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
                },
                "getter": false,
                "setter": false
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
                "getter": false,
                "setter": false,
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
                "getter": false,
                "setter": false,
                "attribute": "room-type-id",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "cancellationMessage": {},
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
