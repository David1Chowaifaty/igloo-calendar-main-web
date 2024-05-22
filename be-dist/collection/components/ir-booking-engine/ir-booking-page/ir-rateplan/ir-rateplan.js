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
        return (h("div", { key: '99893ffdc919d19253824502050a4764843c6809', class: "rateplan-container" }, h("div", { key: 'd23ee083fae594c7c6ba7674e179150ab468acd1', class: "rateplan-header" }, h("p", { key: 'ac1f62f87cfbd5e88bbabd58343575ff82b95c0e', class: "rateplan-name" }, h("span", { key: '363208988019330765a8ceab921049be1e5589cb', class: "rateplan-short-name" }, this.ratePlan.short_name), h("span", { key: '1ad2a417d33c68287ffdf7188a9f18a7c5b10804', class: "rateplan-custom-text rateplan-custom-text-hidden" }, this.ratePlan.custom_text)), h("div", { key: 'e59bd4c4f651ee5c07a8b0d8e1cd96e43971f70c', class: "rateplan-pricing-mobile" }, h("p", { key: '55db9d989919cbe8539b6398f50935f343e6b1fe', class: "rateplan-amount" }, formatAmount((_b = (_a = this.visibleInventory) === null || _a === void 0 ? void 0 : _a.selected_variation) === null || _b === void 0 ? void 0 : _b.amount, app_store.userPreferences.currency_id)), h("p", { key: '410698fec1c2fc1074e775d5e7e7ed26a3e76a17', class: "rateplan-discounted-amount" }, formatAmount((_d = (_c = this.visibleInventory) === null || _c === void 0 ? void 0 : _c.selected_variation) === null || _d === void 0 ? void 0 : _d.total_before_discount, app_store.userPreferences.currency_id)))), h("p", { key: '7450df4d075371d2a5a57d79b759d006589329c9', class: "rateplan-custom-text rateplan-custom-text-mobile" }, this.ratePlan.custom_text), h("div", { key: 'fba578492a2f9b89b0825c14799e7004d6696341', class: `rateplan-details ${this.ratePlan.custom_text ? 'rateplan-details-no-custom-text' : ''}` }, h("div", { key: '472d3b9b418d6d2fa0c0396e2d4b30d3212233b9', class: "rateplan-travelers" }, h("ir-select", { key: '278b82e51d8fd05162e7b88539c1f9906b1c182e', class: "rateplan-select-travelers", label: "Travelers", value: (((_f = (_e = this.visibleInventory) === null || _e === void 0 ? void 0 : _e.selected_variation) === null || _f === void 0 ? void 0 : _f.adult_nbr) + ((_h = (_g = this.visibleInventory) === null || _g === void 0 ? void 0 : _g.selected_variation) === null || _h === void 0 ? void 0 : _h.child_nbr)).toString(), onValueChange: e => {
                this.handleVariationChange(e, this.ratePlan.variations, this.ratePlan.id, this.roomTypeId);
            }, data: this.ratePlan.variations.map(v => ({
                id: (v.adult_nbr + v.child_nbr).toString(),
                value: v.adult_child_offering,
            })) }), h("div", { key: '6bb9469538aa351e4baa64d0f3e4302fa9210c9b', class: "rateplan-cancellation " }, h("p", { key: '250da451e16512903edd7209aca43541f5c31bb3', class: "rateplan-cancellation-text" }, "If I cancel?"), h("ir-tooltip", { key: '39b8ce6a105889ef3c0c301bc1832f8d0428b482', class: "rateplan-tooltip", message: this.ratePlan.cancelation + '<br>' + this.ratePlan.guarantee }))), h("div", { key: '11f994d6c625560a05a73c1ec7471863f8289c7e', class: "rateplan-pricing" }, h("p", { key: '2db2fb4432bb0e34cdd361fbc1261674c4675066', class: "rateplan-discounted-amount" }, formatAmount((_k = (_j = this.visibleInventory) === null || _j === void 0 ? void 0 : _j.selected_variation) === null || _k === void 0 ? void 0 : _k.total_before_discount, app_store.userPreferences.currency_id)), h("p", { key: '76f84d1921f71dd7da9fc2b70aad22188c1679f0', class: "rateplan-discount" }, `-${(_m = (_l = this.visibleInventory) === null || _l === void 0 ? void 0 : _l.selected_variation) === null || _m === void 0 ? void 0 : _m.discount_pct}%`)), h("div", { key: '85efa9edec920a15cbae51c082f0d67b17643cab', class: "rateplan-final-pricing" }, h("p", { key: '7a9d8de77f4f0becec71b7723cef80de8b5ac132', class: "rateplan-amount" }, formatAmount((_p = (_o = this.visibleInventory) === null || _o === void 0 ? void 0 : _o.selected_variation) === null || _p === void 0 ? void 0 : _p.amount, app_store.userPreferences.currency_id)), h("p", { key: '80fba509442c8572241816200e626e33a0c81d16', class: "rateplan-amount-per-night" }, `${formatAmount((_r = (_q = this.visibleInventory) === null || _q === void 0 ? void 0 : _q.selected_variation) === null || _r === void 0 ? void 0 : _r.amount_per_night, app_store.userPreferences.currency_id)}/${localizedWords.entries.Lcz_night}`)), h("ir-select", { key: '6af1b28cdea9e2440b5e56db53713eed46bfbfa5', onValueChange: e => {
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
