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
        return (h("div", { key: '0872eac18180fd187a996cb27b9c7e6c5f1a87e4', class: "app_container flex w-full flex-col space-y-1 bg-gray-100 p-2 text-sm lg:grid lg:grid-cols-7 lg:gap-4" }, h("div", { key: '5c1336ed5ddc0eb93837ade793aebcaa6551ca08', class: cn('flex w-full justify-between md:w-fit md:justify-start', {
                'lg:col-span-1 ': !this.ratePlan.custom_text,
                'xl:col-span-2': this.ratePlan.custom_text,
            }) }, h("p", { key: '81b11a1b7b3eddbeeaf49b45e63bbf6aa9028945', class: "line-clamp-3 font-semibold" }, h("span", { key: '56872c5bb3a91c1d66278582fa51fb2da8ab3724', class: "text-base" }, this.ratePlan.short_name), h("span", { key: '73e2e5abe9f364619986ae8be19bbed883445e06', class: "hidden text-sm text-slate-700 md:inline" }, this.ratePlan.custom_text)), h("div", { key: 'e2ddec0e5c13136b07b6712679fe5ac33d10c903', class: "flex items-start gap-1 md:hidden" }, h("p", { key: '0f153ccd662146de35fec72c439acb57fef31385', class: "font-medium" }, formatAmount((_b = (_a = this.visibleInventory) === null || _a === void 0 ? void 0 : _a.selected_variation) === null || _b === void 0 ? void 0 : _b.amount, app_store.userPreferences.currency_id)), h("p", { key: 'e427477c381e6ecfb3871c88e8ab3187fe37f87c', class: "font-medium text-red-500 line-through" }, formatAmount((_d = (_c = this.visibleInventory) === null || _c === void 0 ? void 0 : _c.selected_variation) === null || _d === void 0 ? void 0 : _d.total_before_discount, app_store.userPreferences.currency_id)))), h("p", { key: '1cd3b87611907b44cdbbf93fab2a625b835ebb30', class: cn('mobile_custom_text line-clamp-3 text-xs text-slate-700 md:line-clamp-none', 'md:hidden') }, this.ratePlan.custom_text), h("div", { key: '90273581840fde499cddcc913f2b9ee4cbd98d5b', class: cn('flex w-full  flex-col space-y-2 md:flex-row  md:items-start md:justify-between md:space-y-0 lg:col-span-5 lg:grid lg:grid-cols-5 lg:gap-4', {
                'lg:col-span-6': !this.ratePlan.custom_text,
                'xl:col-span-5': this.ratePlan.custom_text,
            }) }, h("div", { key: 'c4a959282ec95e31e2b93ed0fbf3801f4f258e8e', class: cn('lg:col-span-2') }, h("ir-select", { key: '1f94958a08b75526fdcb0420cd8b2d5b242ad027', class: "w-full md:w-auto", label: "Travelers", value: (((_f = (_e = this.visibleInventory) === null || _e === void 0 ? void 0 : _e.selected_variation) === null || _f === void 0 ? void 0 : _f.adult_nbr) + ((_h = (_g = this.visibleInventory) === null || _g === void 0 ? void 0 : _g.selected_variation) === null || _h === void 0 ? void 0 : _h.child_nbr)).toString(), onValueChange: e => {
                this.handleVariationChange(e, this.ratePlan.variations, this.ratePlan.id, this.roomTypeId);
            }, data: this.ratePlan.variations.map(v => ({
                id: (v.adult_nbr + v.child_nbr).toString(),
                value: v.adult_child_offering,
            })) }), h("div", { key: '9d635013802aa2c96fd6e950cc6c429db890db1d', class: "hidden items-center gap-1 md:flex" }, h("p", { key: 'd2c8179272df7fb615b0395c55ff9b101be658ae', class: "text-xs" }, "Cancelation conditions"), h("ir-tooltip", { key: 'fe176f2a98c43f060b5e6b6eeddb9df35d3ad9f3', class: "flex items-center justify-center text-gray-500", message: this.ratePlan.cancelation + '<br>' + this.ratePlan.guarantee }))), h("div", { key: '9d35dd23317a26eaa5e38039f3b071e8967dbb87', class: "hidden md:inline-flex md:flex-col md:items-center md:justify-between md:gap-1" }, h("p", { key: '38ba43667b7a96e30d499b16afc43d52a67885e8', class: "font-medium line-through" }, formatAmount((_k = (_j = this.visibleInventory) === null || _j === void 0 ? void 0 : _j.selected_variation) === null || _k === void 0 ? void 0 : _k.total_before_discount, app_store.userPreferences.currency_id)), h("p", { key: 'ddd93cac40f5f0a193de2d9e006ab3bdeb37b2db', class: "font-medium  text-red-500" }, "-", (_m = (_l = this.visibleInventory) === null || _l === void 0 ? void 0 : _l.selected_variation) === null || _m === void 0 ? void 0 :
            _m.discount_pct, "%")), h("div", { key: '4e8427626c919bd33910ea16b4668c3f4be211c8', class: "hidden md:inline-flex md:flex-col md:items-center md:justify-between" }, h("p", { key: '0417afcfd8c2f9cefe76e4d720a98ac502359a42', class: "text-lg font-medium" }, formatAmount((_p = (_o = this.visibleInventory) === null || _o === void 0 ? void 0 : _o.selected_variation) === null || _p === void 0 ? void 0 : _p.amount, app_store.userPreferences.currency_id)), h("p", { key: 'f07db46ae80edbeb9e45d457e1699c5230d3f6e3', class: "text-xs font-medium" }, formatAmount((_r = (_q = this.visibleInventory) === null || _q === void 0 ? void 0 : _q.selected_variation) === null || _r === void 0 ? void 0 : _r.amount_per_night, app_store.userPreferences.currency_id), "/night")), h("ir-select", { key: '50c3cac253674eda6b5cdadab3df55d869344440', onValueChange: e => {
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
