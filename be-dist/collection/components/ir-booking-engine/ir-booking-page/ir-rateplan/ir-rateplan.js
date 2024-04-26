import { Fragment, h } from "@stencil/core";
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
        return (h("div", { key: '7693a421d298ccf9c0cda3e249e9560bc1dfdb65', class: "bg-gray-100 app_container w-full p-2 flex flex-col lg:grid lg:grid-cols-7 lg:gap-4 space-y-1 text-sm" }, h("div", { key: '15f1ae21b611737c0d24320d186f685b663e6dcb', class: cn('flex justify-between md:justify-start w-full md:w-fit', {
                'lg:col-span-1 ': !this.ratePlan.custom_text,
                'xl:col-span-2': this.ratePlan.custom_text,
            }) }, h("p", { key: 'd2016f8f99da963cc181abdc610760e40ddaea75', class: "line-clamp-3 font-semibold" }, h("span", { key: '01eed51691e6920d725ef17b95ce59014014b9fe', class: "text-base" }, this.ratePlan.short_name), h("span", { key: '57391913315a57b1d0135fa499af747b9a29ec31', class: "hidden md:inline text-slate-700 text-sm" }, this.ratePlan.custom_text)), h("div", { key: 'c85f0a64d45adb72a79aceb20fef2a49e7a1dbf0', class: "flex items-start gap-1 md:hidden" }, h("p", { key: 'c86fcd6fd31809acec8a9fce1a36636b60050dd8', class: "font-medium" }, formatAmount((_b = (_a = this.visibleInventory) === null || _a === void 0 ? void 0 : _a.selected_variation) === null || _b === void 0 ? void 0 : _b.amount, app_store.userPreferences.currency_id)), h("p", { key: '3a9a7793325ca0e571c4242fb9200a68676bfc8e', class: "font-medium line-through text-red-500" }, formatAmount((_d = (_c = this.visibleInventory) === null || _c === void 0 ? void 0 : _c.selected_variation) === null || _d === void 0 ? void 0 : _d.total_before_discount, app_store.userPreferences.currency_id)))), h("p", { key: '9017f82f30473879d812a010c6fd9879ea3a7f49', class: cn('line-clamp-3 text-slate-700 text-xs md:line-clamp-none mobile_custom_text', 'md:hidden') }, this.ratePlan.custom_text), h("div", { key: 'bada476701155815375ac0f5264dc7a6a8b323fa', class: cn('w-full space-y-2  flex flex-col md:space-y-0  md:justify-between md:flex-row md:items-start lg:grid lg:grid-cols-5 lg:col-span-5 lg:gap-4', {
                'lg:col-span-6': !this.ratePlan.custom_text,
                'xl:col-span-5': this.ratePlan.custom_text,
            }) }, h("div", { key: 'f2b9aff7af0c1b7e60cf700b20795c98b5d0fcd1', class: cn('lg:col-span-2') }, h("ir-select", { key: 'dc98d81633b1acc7dc4a116c7da3a214a592e382', class: "w-full md:w-auto", label: "Travelers", value: (((_f = (_e = this.visibleInventory) === null || _e === void 0 ? void 0 : _e.selected_variation) === null || _f === void 0 ? void 0 : _f.adult_nbr) + ((_h = (_g = this.visibleInventory) === null || _g === void 0 ? void 0 : _g.selected_variation) === null || _h === void 0 ? void 0 : _h.child_nbr)).toString(), onValueChange: e => {
                this.handleVariationChange(e, this.ratePlan.variations, this.ratePlan.id, this.roomTypeId);
            }, data: this.ratePlan.variations.map(v => ({
                id: (v.adult_nbr + v.child_nbr).toString(),
                value: v.adult_child_offering,
            })) }), h("div", { key: '8f538858e3f39482328ec0a8c57fc1f5c58469cc', class: "hidden md:flex items-center gap-1" }, h("p", { key: '2da3759c02fd8f750696cf834c3cc6dca549a93b' }, "Cancelation conditions"), h("ir-tooltip", { key: '07e2e7e8c5a090c54161effa86ec2eaff3932e82', class: "text-gray-500 flex items-center justify-center", message: this.ratePlan.cancelation + '<br>' + this.ratePlan.guarantee }))), h("div", { key: 'fcc67d1b93f814edfe04abd057baa52d1717b755', class: "hidden md:flex items-center gap-1 flex-col justify-between" }, h(Fragment, { key: '5b0d8ec36be551417e0bd4557bd79d7fe999d65b' }, h("p", { key: '7bca1ef098e24f7a84e18aefa79c0b379c6b0aa5', class: "font-medium line-through" }, formatAmount((_k = (_j = this.visibleInventory) === null || _j === void 0 ? void 0 : _j.selected_variation) === null || _k === void 0 ? void 0 : _k.total_before_discount, app_store.userPreferences.currency_id)), h("p", { key: '4cc16ec08b3bec51a6beff5d083315129eb81478', class: "font-medium  text-red-500" }, "-%", (_m = (_l = this.visibleInventory) === null || _l === void 0 ? void 0 : _l.selected_variation) === null || _m === void 0 ? void 0 :
            _m.discount_pct))), h("div", { key: 'f1a5e22ec2e693931b566fd970994ea2684e7a60', class: "hidden md:flex items-center  flex-col justify-between" }, h(Fragment, { key: 'cabb1e4d714a723624dff80f0e9bacc7c7fce5af' }, h("p", { key: '4084160d6b31e97f850d04e40acce7bdaffa15be', class: "font-medium text-lg" }, formatAmount((_p = (_o = this.visibleInventory) === null || _o === void 0 ? void 0 : _o.selected_variation) === null || _p === void 0 ? void 0 : _p.amount, app_store.userPreferences.currency_id)), h("p", { key: 'f587aba71e55cbaebfbf9c87def39933f300578d', class: "font-medium text-xs" }, formatAmount((_r = (_q = this.visibleInventory) === null || _q === void 0 ? void 0 : _q.selected_variation) === null || _r === void 0 ? void 0 : _r.amount_per_night, app_store.userPreferences.currency_id), "/night"))), h("ir-select", { key: 'd993ffad7709fac92ebff1c7432dd6dc6cbacdf4', onValueChange: e => {
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
