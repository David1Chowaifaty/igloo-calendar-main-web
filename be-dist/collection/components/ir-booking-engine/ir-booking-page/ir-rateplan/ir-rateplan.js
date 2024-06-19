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
        console.log(value, variations);
        const selectedVariation = variations[value];
        console.log('selectedVariation:', selectedVariation);
        if (!selectedVariation) {
            return;
        }
        updateRoomParams({ params: { selected_variation: selectedVariation }, ratePlanId: rateplanId, roomTypeId });
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        return (h("div", { key: '276759c09e104af27df787de955325e00428c8fe', class: "rateplan-container" }, h("div", { key: '7566b6312029b2fbf2e50f9a07b7cce59fe8bad8', class: `rateplan-header ${this.roomTypeInventory > 0 ? 'available' : 'not-available'}` }, h("p", { key: 'f2c97129535f38b507eaa0e0b7a75e36471e388a', class: "rateplan-name" }, h("span", { key: '6a86bce0bf9153e8f3de4958b00a7f825d8aa244', class: "rateplan-short-name" }, this.ratePlan.short_name), h("span", { key: '87358d671b40bafd468c85f06e1292405c6a37b9', class: "rateplan-custom-text rateplan-custom-text-hidden" }, this.ratePlan.custom_text)), this.roomTypeInventory > 0 ? (h("div", { class: "rateplan-pricing-mobile" }, h("p", { class: "rateplan-amount" }, formatAmount((_b = (_a = this.visibleInventory) === null || _a === void 0 ? void 0 : _a.selected_variation) === null || _b === void 0 ? void 0 : _b.amount, app_store.userPreferences.currency_id, 0)), ((_d = (_c = this.visibleInventory) === null || _c === void 0 ? void 0 : _c.selected_variation) === null || _d === void 0 ? void 0 : _d.discount_pct) > 0 && (h("p", { class: "rateplan-discounted-amount" }, formatAmount((_f = (_e = this.visibleInventory) === null || _e === void 0 ? void 0 : _e.selected_variation) === null || _f === void 0 ? void 0 : _f.total_before_discount, app_store.userPreferences.currency_id, 0))))) : (h("p", { class: "no-availability" }, "Not available"))), h("p", { key: '6b40ea22c9b8545adf209e8faf419ef50c7cf69b', class: "rateplan-custom-text rateplan-custom-text-mobile" }, this.ratePlan.custom_text), this.roomTypeInventory > 0 && (h("div", { class: `rateplan-details ${this.ratePlan.custom_text ? 'rateplan-details-no-custom-text' : ''}` }, h("div", { class: "rateplan-travelers" }, this.ratePlan.variations && (h("ir-select", { class: "rateplan-select-travelers", label: localizedWords.entries.Lcz_Travelers, value: this.ratePlan.variations.findIndex(f => { var _a; return f.adult_child_offering === ((_a = this.visibleInventory) === null || _a === void 0 ? void 0 : _a.selected_variation.adult_child_offering); }).toString(), onValueChange: e => {
                this.handleVariationChange(e, this.ratePlan.variations, this.ratePlan.id, this.roomTypeId);
            }, data: this.ratePlan.variations.map((v, i) => ({
                id: i.toString(),
                value: v.adult_child_offering,
            })) })), h("div", { class: "rateplan-cancellation gap-2.5" }, h("div", { class: "flex items-center gap-[2px] " }, h("p", { class: "rateplan-cancellation-text" }, "If I cancel?"), h("ir-tooltip", { class: "rateplan-tooltip", message: this.ratePlan.cancelation + '<br>' + this.ratePlan.guarantee })), this.ratePlan.is_non_refundable && h("p", { class: "text-xs text-green-500" }, "Non refundable"))), ((_h = (_g = this.visibleInventory) === null || _g === void 0 ? void 0 : _g.selected_variation) === null || _h === void 0 ? void 0 : _h.discount_pct) > 0 && (h("div", { class: "rateplan-pricing" }, h("p", { class: "rateplan-discounted-amount" }, formatAmount((_k = (_j = this.visibleInventory) === null || _j === void 0 ? void 0 : _j.selected_variation) === null || _k === void 0 ? void 0 : _k.total_before_discount, app_store.userPreferences.currency_id, 0)), h("p", { class: "rateplan-discount" }, `-${(_m = (_l = this.visibleInventory) === null || _l === void 0 ? void 0 : _l.selected_variation) === null || _m === void 0 ? void 0 : _m.discount_pct}%`))), h("div", { class: "rateplan-final-pricing" }, h("p", { class: "rateplan-amount" }, formatAmount((_p = (_o = this.visibleInventory) === null || _o === void 0 ? void 0 : _o.selected_variation) === null || _p === void 0 ? void 0 : _p.amount, app_store.userPreferences.currency_id, 0)), h("p", { class: "rateplan-amount-per-night" }, `${formatAmount((_r = (_q = this.visibleInventory) === null || _q === void 0 ? void 0 : _q.selected_variation) === null || _r === void 0 ? void 0 : _r.amount_per_night, app_store.userPreferences.currency_id, 0)}/${localizedWords.entries.Lcz_night}`)), h("ir-select", { onValueChange: e => {
                reserveRooms(this.roomTypeId, this.ratePlan.id, Number(e.detail));
                this.animateBookingButton.emit(null);
            }, label: localizedWords.entries.Lcz_Rooms, value: (_s = this.visibleInventory) === null || _s === void 0 ? void 0 : _s.reserved, class: "rateplan-select-rooms", data: (_t = [...new Array(this.roomTypeInventory + 1)]) === null || _t === void 0 ? void 0 : _t.map((_, i) => {
                var _a, _b, _c;
                return ({
                    id: i,
                    value: i === 0
                        ? `${localizedWords.entries.Lcz_Select}`
                        : `${i}&nbsp;&nbsp;&nbsp;${i === 0 ? '' : formatAmount(((_b = (_a = this.visibleInventory) === null || _a === void 0 ? void 0 : _a.selected_variation) === null || _b === void 0 ? void 0 : _b.amount) * i, app_store.userPreferences.currency_id, 0)}`,
                    disabled: i >= ((_c = this.visibleInventory) === null || _c === void 0 ? void 0 : _c.visibleInventory) + 1,
                    html: true,
                });
            }) })))));
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
