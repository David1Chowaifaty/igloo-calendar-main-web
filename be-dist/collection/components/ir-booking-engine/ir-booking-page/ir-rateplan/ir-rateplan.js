import { Fragment, h } from "@stencil/core";
import app_store from "../../../../stores/app.store";
import booking_store, { reserveRooms, updateRoomParams } from "../../../../stores/booking";
import { formatAmount } from "../../../../utils/utils";
import localizedWords from "../../../../stores/localization.store";
import { v4 } from "uuid";
import { PropertyService } from "../../../../services/api/property.service";
import { format } from "date-fns";
import { AvailabiltyService } from "../../../../services/app/availability.service";
export class IrRateplan {
    constructor() {
        this.propertyService = new PropertyService();
        this.availabilityService = new AvailabiltyService();
        this.ratePlan = undefined;
        this.visibleInventory = undefined;
        this.roomTypeInventory = undefined;
        this.roomTypeId = undefined;
        this.isLoading = false;
    }
    componentWillLoad() {
        this.propertyService.setToken(app_store.app_data.token);
    }
    async handleVariationChange(e, variations, rateplanId, roomTypeId) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const value = e.detail;
        let selectedVariation = variations[value];
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
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1;
        // console.log('ratePlan', this.ratePlan);
        return (h("div", { key: '980dea3c0b0b81538229256ec38e6c37d1d6d3d2', class: "rateplan-container" }, h("div", { key: '70096554957fb93f3573ec0b9762980f39f5ac03', class: `rateplan-header ${this.roomTypeInventory > 0 ? 'available' : 'not-available'}` }, h("p", { key: '3cae73eaf969542f1cc09b36703e6859c9f4d4c0', class: "rateplan-name" }, h("span", { key: '0c1ab666db350fea01e50a33b4e2ac493503a201', class: "rateplan-short-name" }, this.ratePlan.short_name), h("span", { key: 'bfe48a569f40b27771a156a6acff3362d94f19d4', class: "rateplan-custom-text rateplan-custom-text-hidden" }, this.ratePlan.custom_text)), this.isLoading ? (h("div", { class: "grid place-items-center md:hidden" }, h("div", { class: "h-4 w-12 animate-pulse rounded-md bg-gray-300" }))) : (h(Fragment, null, this.roomTypeInventory > 0 ? (h("div", { class: "rateplan-pricing-mobile" }, h("p", { class: "rateplan-amount" }, formatAmount((_c = (_b = (_a = this.visibleInventory) === null || _a === void 0 ? void 0 : _a.selected_variation) === null || _b === void 0 ? void 0 : _b.variation) === null || _c === void 0 ? void 0 : _c.amount, app_store.userPreferences.currency_id, 0)), ((_f = (_e = (_d = this.visibleInventory) === null || _d === void 0 ? void 0 : _d.selected_variation) === null || _e === void 0 ? void 0 : _e.variation) === null || _f === void 0 ? void 0 : _f.discount_pct) > 0 && (h("p", { class: "rateplan-discounted-amount" }, formatAmount((_j = (_h = (_g = this.visibleInventory) === null || _g === void 0 ? void 0 : _g.selected_variation) === null || _h === void 0 ? void 0 : _h.variation) === null || _j === void 0 ? void 0 : _j.total_before_discount, app_store.userPreferences.currency_id, 0))))) : (h("p", { class: "no-availability" }, "Not available"))))), h("p", { key: '916660402a049f4f013f72c13207c78358458b1b', class: "rateplan-custom-text rateplan-custom-text-mobile" }, this.ratePlan.custom_text), this.roomTypeInventory > 0 && (h("div", { key: '61feefa0fe6d68069f5734ce14a61d97548c95d1', class: `rateplan-details ${this.ratePlan.custom_text ? 'rateplan-details-no-custom-text' : ''}` }, this.isLoading ? (h("div", { class: "col-span-6 w-full " }, h("div", { class: "h-8 w-full animate-pulse rounded-md bg-gray-300" }))) : (h(Fragment, null, h("div", { class: "rateplan-travelers" }, this.ratePlan.variations && (h("ir-select", { class: "rateplan-select-travelers", label: localizedWords.entries.Lcz_Travelers, value: this.ratePlan.variations
                .findIndex(f => { var _a, _b; return f.adult_child_offering === ((_b = (_a = this.visibleInventory) === null || _a === void 0 ? void 0 : _a.selected_variation) === null || _b === void 0 ? void 0 : _b.variation.adult_child_offering); })
                .toString(), onValueChange: e => {
                this.handleVariationChange(e, this.ratePlan.variations, this.ratePlan.id, this.roomTypeId);
            }, data: this.ratePlan.variations.map((v, i) => ({
                id: i.toString(),
                value: v.adult_child_offering,
            })) })), h("div", { class: "rateplan-cancellation gap-2.5" }, this.ratePlan.is_non_refundable ? (h("p", { class: "text-xs text-green-500" }, "Non refundable")) : (h("div", { class: "flex items-center gap-[2px] " }, h("ir-tooltip", { class: "rateplan-tooltip", label: "If I cancel?", message: this.ratePlan.cancelation + '<br>' + this.ratePlan.guarantee }))))), ((_m = (_l = (_k = this.visibleInventory) === null || _k === void 0 ? void 0 : _k.selected_variation) === null || _l === void 0 ? void 0 : _l.variation) === null || _m === void 0 ? void 0 : _m.discount_pct) > 0 && (h("div", { class: "rateplan-pricing" }, h("p", { class: "rateplan-discounted-amount" }, formatAmount((_q = (_p = (_o = this.visibleInventory) === null || _o === void 0 ? void 0 : _o.selected_variation) === null || _p === void 0 ? void 0 : _p.variation) === null || _q === void 0 ? void 0 : _q.total_before_discount, app_store.userPreferences.currency_id, 0)), h("p", { class: "rateplan-discount" }, `-${(_t = (_s = (_r = this.visibleInventory) === null || _r === void 0 ? void 0 : _r.selected_variation) === null || _s === void 0 ? void 0 : _s.variation) === null || _t === void 0 ? void 0 : _t.discount_pct}%`))), h("div", { class: "rateplan-final-pricing" }, h("p", { class: "rateplan-amount" }, formatAmount((_w = (_v = (_u = this.visibleInventory) === null || _u === void 0 ? void 0 : _u.selected_variation) === null || _v === void 0 ? void 0 : _v.variation) === null || _w === void 0 ? void 0 : _w.amount, app_store.userPreferences.currency_id, 0)), h("p", { class: "rateplan-amount-per-night" }, `${formatAmount((_z = (_y = (_x = this.visibleInventory) === null || _x === void 0 ? void 0 : _x.selected_variation) === null || _y === void 0 ? void 0 : _y.variation) === null || _z === void 0 ? void 0 : _z.amount_per_night, app_store.userPreferences.currency_id, 0)}/${localizedWords.entries.Lcz_night}`)), h("ir-select", { onValueChange: e => {
                reserveRooms(this.roomTypeId, this.ratePlan.id, Number(e.detail));
                this.animateBookingButton.emit(null);
            }, label: localizedWords.entries.Lcz_Rooms, value: (_0 = this.visibleInventory) === null || _0 === void 0 ? void 0 : _0.reserved, class: "rateplan-select-rooms", data: (_1 = [...new Array(this.roomTypeInventory + 1)]) === null || _1 === void 0 ? void 0 : _1.map((_, i) => {
                var _a, _b, _c, _d;
                return ({
                    id: i,
                    value: i === 0
                        ? `${localizedWords.entries.Lcz_Select}`
                        : `${i}&nbsp;&nbsp;&nbsp;${i === 0 ? '' : formatAmount(((_c = (_b = (_a = this.visibleInventory) === null || _a === void 0 ? void 0 : _a.selected_variation) === null || _b === void 0 ? void 0 : _b.variation) === null || _c === void 0 ? void 0 : _c.amount) * i, app_store.userPreferences.currency_id, 0)}`,
                    disabled: i >= ((_d = this.visibleInventory) === null || _d === void 0 ? void 0 : _d.visibleInventory) + 1,
                    html: true,
                });
            }) })))))));
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
            "isLoading": {}
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
}
//# sourceMappingURL=ir-rateplan.js.map
