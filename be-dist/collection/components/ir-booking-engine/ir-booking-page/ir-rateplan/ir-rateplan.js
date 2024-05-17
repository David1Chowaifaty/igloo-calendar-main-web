import { h } from "@stencil/core";
import app_store from "../../../../stores/app.store";
import { reserveRooms, updateRoomParams } from "../../../../stores/booking";
import { formatAmount } from "../../../../utils/utils";
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
        return (h("div", { key: '1534f46a0dfaa485af31e4a468b1b74f09d949b8', class: "rateplan-container" }, h("div", { key: '1ef4cdbf6842e131adcfe118296ed574ed342f7e', class: "rateplan-header" }, h("p", { key: 'bb83473f647b1f2fa1d3d5d90227c72d2cf5674d', class: "rateplan-name" }, h("span", { key: '89488fe3e3b673dc96eb2e2aed2f0a78acbd609a', class: "rateplan-short-name" }, this.ratePlan.short_name), h("span", { key: '813c333ccbfeeb6cc6f2dca945e1827872527755', class: "rateplan-custom-text rateplan-custom-text-hidden" }, this.ratePlan.custom_text)), h("div", { key: '9d54274c7cbba0158cdd68f3bd1789970558b9c8', class: "rateplan-pricing-mobile" }, h("p", { key: 'a5f64ae310f65c2f599d9cf11893422c149f9de1', class: "rateplan-amount" }, formatAmount((_b = (_a = this.visibleInventory) === null || _a === void 0 ? void 0 : _a.selected_variation) === null || _b === void 0 ? void 0 : _b.amount, app_store.userPreferences.currency_id)), h("p", { key: '5fa3728cf61b9140d35cfa4d676cf93b389c6019', class: "rateplan-discounted-amount" }, formatAmount((_d = (_c = this.visibleInventory) === null || _c === void 0 ? void 0 : _c.selected_variation) === null || _d === void 0 ? void 0 : _d.total_before_discount, app_store.userPreferences.currency_id)))), h("p", { key: '050d2861efa3588ef495e97774967a9ec7bf3684', class: "rateplan-custom-text rateplan-custom-text-mobile" }, this.ratePlan.custom_text), h("div", { key: '4f0f604e3a6ed0a3ebdd0500cfd3824d62baad70', class: `rateplan-details ${this.ratePlan.custom_text ? 'rateplan-details-no-custom-text' : ''}` }, h("div", { key: 'c4180e559d8237638f046299d30b6bf032d176f8', class: "rateplan-pricing" }, h("p", { key: 'f2e096fa61838bc0755c69b8e1e3cf16a54acdc2', class: "rateplan-discounted-amount" }, formatAmount((_f = (_e = this.visibleInventory) === null || _e === void 0 ? void 0 : _e.selected_variation) === null || _f === void 0 ? void 0 : _f.total_before_discount, app_store.userPreferences.currency_id)), h("p", { key: '39c4d539bb90808137c6fccb488307309d5ee22e', class: "rateplan-discount" }, `-${(_h = (_g = this.visibleInventory) === null || _g === void 0 ? void 0 : _g.selected_variation) === null || _h === void 0 ? void 0 : _h.discount_pct}%`)), h("div", { key: '14071d01b435ed0a600812b4d061ce1cb1bbc302', class: "rateplan-travelers" }, h("ir-select", { key: '646325c6adadeb4417f90bbbc0b49ac6c46a2cf2', class: "rateplan-select-travelers", label: "Travelers", value: (((_k = (_j = this.visibleInventory) === null || _j === void 0 ? void 0 : _j.selected_variation) === null || _k === void 0 ? void 0 : _k.adult_nbr) + ((_m = (_l = this.visibleInventory) === null || _l === void 0 ? void 0 : _l.selected_variation) === null || _m === void 0 ? void 0 : _m.child_nbr)).toString(), onValueChange: e => {
                this.handleVariationChange(e, this.ratePlan.variations, this.ratePlan.id, this.roomTypeId);
            }, data: this.ratePlan.variations.map(v => ({
                id: (v.adult_nbr + v.child_nbr).toString(),
                value: v.adult_child_offering,
            })) }), h("div", { key: '5a083e2e99213cebed1f932e14faac33b428e120', class: "rateplan-cancellation " }, h("p", { key: '17ea20630f184bab886fb3bc3b70d583d00ea401', class: "rateplan-cancellation-text" }, "If you cancel?"), h("ir-tooltip", { key: '6aa1f1e079728eeae13c574139214b3a2205d46a', class: "rateplan-tooltip", message: this.ratePlan.cancelation + '<br>' + this.ratePlan.guarantee }))), h("div", { key: '17e2f027952a6284da32863319912e7cb0ce319c', class: "rateplan-final-pricing" }, h("p", { key: 'ef9f7e2f769157031213fe18a0f8b7f19cb21850', class: "rateplan-amount" }, formatAmount((_p = (_o = this.visibleInventory) === null || _o === void 0 ? void 0 : _o.selected_variation) === null || _p === void 0 ? void 0 : _p.amount, app_store.userPreferences.currency_id)), h("p", { key: '0ccd7e23fe988a304329577bed5dbcd759752856', class: "rateplan-amount-per-night" }, `${formatAmount((_r = (_q = this.visibleInventory) === null || _q === void 0 ? void 0 : _q.selected_variation) === null || _r === void 0 ? void 0 : _r.amount_per_night, app_store.userPreferences.currency_id)}/night`)), h("ir-select", { key: '16ebb7d018577b6ac920b2bc6d82d3f681de704e', onValueChange: e => {
                reserveRooms(this.roomTypeId, this.ratePlan.id, Number(e.detail));
                this.animateBookingButton.emit(null);
            }, label: "Rooms", value: (_s = this.visibleInventory) === null || _s === void 0 ? void 0 : _s.reserved, class: "rateplan-select-rooms", data: (_t = [...new Array(this.roomTypeInventory + 1)]) === null || _t === void 0 ? void 0 : _t.map((_, i) => {
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
