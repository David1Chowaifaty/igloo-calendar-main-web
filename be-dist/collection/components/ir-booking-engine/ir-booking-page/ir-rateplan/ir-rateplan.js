import { h } from "@stencil/core";
import app_store from "../../../../stores/app.store";
import { reserveRooms, updateRoomParams } from "../../../../stores/booking";
import { cn, formatAmount } from "../../../../utils/utils";
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
        return (h("div", { key: '93ac0f9379f0adb37028fd363a18988475bb49ef', class: "app_container flex w-full flex-col space-y-1 bg-gray-100 p-2 text-sm lg:grid lg:grid-cols-7 lg:gap-4" }, h("div", { key: 'ca6cc57305d7acae569ad6bd10d6a02ba8e9456f', class: cn('flex w-full justify-between md:w-fit md:justify-start', {
                'lg:col-span-1 ': !this.ratePlan.custom_text,
                'xl:col-span-2': this.ratePlan.custom_text,
            }) }, h("p", { key: '454c63d5c3db65934c7aaa626080b7c24505006c', class: "line-clamp-3 font-semibold" }, h("span", { key: '8b629dc1b5cba95c8aa8e03a469df91eca9bdc2e', class: "text-base" }, this.ratePlan.short_name), h("span", { key: 'b50c8c81cdc5dbbca98fff24748043bfe142e10b', class: "hidden text-sm text-slate-700 md:inline" }, this.ratePlan.custom_text)), h("div", { key: 'aa0257c31af49833e90d8c6b2bf3235e3f04aa28', class: "flex items-start gap-1 md:hidden" }, h("p", { key: '3f0ecc08825c0b3db76be2b9674f9d62f2a657ee', class: "font-medium" }, formatAmount((_b = (_a = this.visibleInventory) === null || _a === void 0 ? void 0 : _a.selected_variation) === null || _b === void 0 ? void 0 : _b.amount, app_store.userPreferences.currency_id)), h("p", { key: 'b6dad1fcea026a16463e50c79f9d22a71c1bc830', class: "font-medium text-red-500 line-through" }, formatAmount((_d = (_c = this.visibleInventory) === null || _c === void 0 ? void 0 : _c.selected_variation) === null || _d === void 0 ? void 0 : _d.total_before_discount, app_store.userPreferences.currency_id)))), h("p", { key: '53d195487768d030cae18468d541de7a5e0fb234', class: cn('mobile_custom_text line-clamp-3 text-xs text-slate-700 md:line-clamp-none', 'md:hidden') }, this.ratePlan.custom_text), h("div", { key: 'b0d974ec21c356849705e8cd422740853aaab2e7', class: cn('flex w-full  flex-col space-y-2 md:flex-row  md:items-start md:justify-between md:space-y-0 lg:col-span-5 lg:grid lg:grid-cols-5 lg:gap-4', {
                'lg:col-span-6': !this.ratePlan.custom_text,
                'xl:col-span-5': this.ratePlan.custom_text,
            }) }, h("div", { key: 'f1cea1caae0cf9eeb1adf0e739a1fc2ec32c8b1d', class: cn('lg:col-span-2') }, h("ir-select", { key: '849b7951823d77ba83c4c6520aacdb71e2ebce91', class: "w-full md:w-auto", label: "Travelers", value: (((_f = (_e = this.visibleInventory) === null || _e === void 0 ? void 0 : _e.selected_variation) === null || _f === void 0 ? void 0 : _f.adult_nbr) + ((_h = (_g = this.visibleInventory) === null || _g === void 0 ? void 0 : _g.selected_variation) === null || _h === void 0 ? void 0 : _h.child_nbr)).toString(), onValueChange: e => {
                this.handleVariationChange(e, this.ratePlan.variations, this.ratePlan.id, this.roomTypeId);
            }, data: this.ratePlan.variations.map(v => ({
                id: (v.adult_nbr + v.child_nbr).toString(),
                value: v.adult_child_offering,
            })) }), h("div", { key: '6fa7e59971dbc2924286fbe0ac9c78d7deb693f8', class: "hidden items-center gap-1 md:flex" }, h("p", { key: 'f36f9f514b8a0dbea2a8e160d89ab000c8f9c6c8', class: "text-xs" }, "Cancelation conditions"), h("ir-tooltip", { key: 'f7d2700393cd36b0a7e885efbdc4d6b5cd69898f', class: "flex items-center justify-center text-gray-500", message: this.ratePlan.cancelation + '<br>' + this.ratePlan.guarantee }))), h("div", { key: '6cd67644833542fe109e1431d834d730bb568fed', class: "hidden md:inline-flex md:flex-col md:items-center md:justify-between md:gap-1" }, h("p", { key: 'c17403a22d31639bab9695a8b39950638abae330', class: "font-medium line-through" }, formatAmount((_k = (_j = this.visibleInventory) === null || _j === void 0 ? void 0 : _j.selected_variation) === null || _k === void 0 ? void 0 : _k.total_before_discount, app_store.userPreferences.currency_id)), h("p", { key: '98f97182d3cb837bb8dd9aad057f5f7c38c97b98', class: "font-medium  text-red-500" }, "-", (_m = (_l = this.visibleInventory) === null || _l === void 0 ? void 0 : _l.selected_variation) === null || _m === void 0 ? void 0 :
            _m.discount_pct, "%")), h("div", { key: '1fd29ae2aced5e0569148708e083c359f0c24718', class: "hidden md:inline-flex md:flex-col md:items-center md:justify-between" }, h("p", { key: 'bc5788ec33978ad6f2911730f946e51d4c22b54d', class: "text-lg font-medium" }, formatAmount((_p = (_o = this.visibleInventory) === null || _o === void 0 ? void 0 : _o.selected_variation) === null || _p === void 0 ? void 0 : _p.amount, app_store.userPreferences.currency_id)), h("p", { key: '77000d4ea1255015b86c7f6db4a951896e84e352', class: "text-xs font-medium" }, formatAmount((_r = (_q = this.visibleInventory) === null || _q === void 0 ? void 0 : _q.selected_variation) === null || _r === void 0 ? void 0 : _r.amount_per_night, app_store.userPreferences.currency_id), "/night")), h("ir-select", { key: 'b4408ad4ebcb7b21043f50210942140807391aae', onValueChange: e => {
                reserveRooms(this.roomTypeId, this.ratePlan.id, Number(e.detail));
                this.animateBookingButton.emit(null);
            }, label: "Rooms", value: (_s = this.visibleInventory) === null || _s === void 0 ? void 0 : _s.reserved, class: cn('w-full  md:w-auto'), data: (_t = [...new Array(this.roomTypeInventory + 1)]) === null || _t === void 0 ? void 0 : _t.map((_, i) => {
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
