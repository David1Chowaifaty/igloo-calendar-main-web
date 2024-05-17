import { h } from "@stencil/core";
import app_store from "../../../../stores/app.store";
import { reserveRooms, updateRoomParams } from "../../../../stores/booking";
import { formatAmount } from "../../../../utils/utils";
import localizedWords from "../../../../stores/localization.store";
export class IrRateplan {
    constructor() {
        this.ratePlan = undefined;
        this.visibleInventory = undefined;
        this.roomTypeInventory = undefined;
        this.roomTypeId = undefined;
    }
    handleVariationChange(e, variations, rateplanId, roomTypeId) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const value = e.detail;
        const selectedVariation = variations.find(v => (v.adult_nbr + v.child_nbr).toString() === value);
        console.log(selectedVariation);
        if (!selectedVariation) {
            return;
        }
        updateRoomParams({ params: { selected_variation: selectedVariation }, ratePlanId: rateplanId, roomTypeId });
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        return (h("div", { key: 'cb8441d5bb8769a5d8d5007d44b46a0645ecf2b9', class: "rateplan-container" }, h("div", { key: '5f8d33d9c5d69e02a500430711fc11df01d2f734', class: "rateplan-header" }, h("p", { key: 'd7c7a2812a1b05c023e8266d13fd3736efbee46f', class: "rateplan-name" }, h("span", { key: 'b087388cb7dbad62808f03e66252370a7850128b', class: "rateplan-short-name" }, this.ratePlan.short_name), h("span", { key: '6c516350297bc0c93771995ff9ab4838d6a4c97c', class: "rateplan-custom-text rateplan-custom-text-hidden" }, this.ratePlan.custom_text)), h("div", { key: '93e4481842a211e892046968bdd80c167a4095c2', class: "rateplan-pricing-mobile" }, h("p", { key: '4b470d7e00aa77e2fba6d9df8ad064e08692b656', class: "rateplan-amount" }, formatAmount((_b = (_a = this.visibleInventory) === null || _a === void 0 ? void 0 : _a.selected_variation) === null || _b === void 0 ? void 0 : _b.amount, app_store.userPreferences.currency_id)), h("p", { key: '919954a60d9cef99b2219a89a86a38b0736166ed', class: "rateplan-discounted-amount" }, formatAmount((_d = (_c = this.visibleInventory) === null || _c === void 0 ? void 0 : _c.selected_variation) === null || _d === void 0 ? void 0 : _d.total_before_discount, app_store.userPreferences.currency_id)))), h("p", { key: '489bf02a496e000213d5dbec514765eaf5278527', class: "rateplan-custom-text rateplan-custom-text-mobile" }, this.ratePlan.custom_text), h("div", { key: '08e6474a156a0e05d7bcbfed12b521a9c2fff2c9', class: `rateplan-details ${this.ratePlan.custom_text ? 'rateplan-details-no-custom-text' : ''}` }, h("div", { key: '7fb3bc83acccacfefdbd50441cc8c3e88fc7df7e', class: "rateplan-pricing" }, h("p", { key: 'bfe208ffa166d266c81d40c2d1ed31c0d18f9b0d', class: "rateplan-discounted-amount" }, formatAmount((_f = (_e = this.visibleInventory) === null || _e === void 0 ? void 0 : _e.selected_variation) === null || _f === void 0 ? void 0 : _f.total_before_discount, app_store.userPreferences.currency_id)), h("p", { key: '39ed4a8e43baa9216aa9d84bbcc57b51c835157d', class: "rateplan-discount" }, `-${(_h = (_g = this.visibleInventory) === null || _g === void 0 ? void 0 : _g.selected_variation) === null || _h === void 0 ? void 0 : _h.discount_pct}%`)), h("div", { key: '0da53ed1ad433892aa5bc8004b9e1389ec1526a3', class: "rateplan-travelers" }, h("ir-select", { key: 'b903e7b03345f3ccbc64c5a4ca7bb02189316ed8', class: "rateplan-select-travelers", label: "Travelers", value: (((_k = (_j = this.visibleInventory) === null || _j === void 0 ? void 0 : _j.selected_variation) === null || _k === void 0 ? void 0 : _k.adult_nbr) + ((_m = (_l = this.visibleInventory) === null || _l === void 0 ? void 0 : _l.selected_variation) === null || _m === void 0 ? void 0 : _m.child_nbr)).toString(), onValueChange: e => {
                this.handleVariationChange(e, this.ratePlan.variations, this.ratePlan.id, this.roomTypeId);
            }, data: this.ratePlan.variations.map(v => ({
                id: (v.adult_nbr + v.child_nbr).toString(),
                value: v.adult_child_offering,
            })) }), h("div", { key: 'ebaa08d9da41768ede1da049a81bb935cf10ade2', class: "rateplan-cancellation " }, h("p", { key: 'aa8c847c47a5c97ae45c989d7a8a23c865eae601', class: "rateplan-cancellation-text" }, "If you cancel?"), h("ir-tooltip", { key: '79434605aaf03f0218c6789a41442a2919392144', class: "rateplan-tooltip", message: this.ratePlan.cancelation + '<br>' + this.ratePlan.guarantee }))), h("div", { key: '08307ca62e37d44eba279948694e91c704820912', class: "rateplan-final-pricing" }, h("p", { key: '8ad329172d49b6b2c4eca785a6d2ea840df6284e', class: "rateplan-amount" }, formatAmount((_p = (_o = this.visibleInventory) === null || _o === void 0 ? void 0 : _o.selected_variation) === null || _p === void 0 ? void 0 : _p.amount, app_store.userPreferences.currency_id)), h("p", { key: '9b3185d5843a71e8f040dbb30bfbab4b66475d6a', class: "rateplan-amount-per-night" }, `${formatAmount((_r = (_q = this.visibleInventory) === null || _q === void 0 ? void 0 : _q.selected_variation) === null || _r === void 0 ? void 0 : _r.amount_per_night, app_store.userPreferences.currency_id)}/${localizedWords.entries.Lcz_night}`)), h("ir-select", { key: '3947056edaa8d6887c478970a842a0f2af344cf2', onValueChange: e => {
                reserveRooms(this.roomTypeId, this.ratePlan.id, Number(e.detail));
                this.animateBookingButton.emit(null);
            }, label: localizedWords.entries.Lcz_Rooms, value: (_s = this.visibleInventory) === null || _s === void 0 ? void 0 : _s.reserved, class: "rateplan-select-rooms", data: (_t = [...new Array(this.roomTypeInventory + 1)]) === null || _t === void 0 ? void 0 : _t.map((_, i) => {
                var _a, _b, _c;
                return ({
                    id: i,
                    value: i === 0
                        ? 'Select...'
                        : `${i}&nbsp;&nbsp;&nbsp;${i === 0 ? '' : formatAmount(((_b = (_a = this.visibleInventory) === null || _a === void 0 ? void 0 : _a.selected_variation) === null || _b === void 0 ? void 0 : _b.amount) * i, app_store.userPreferences.currency_id)}`,
                    disabled: i >= ((_c = this.visibleInventory) === null || _c === void 0 ? void 0 : _c.visibleInventory) + 1,
                    html: true,
                });
            }) }))));
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
