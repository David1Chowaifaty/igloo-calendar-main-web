import app_store from "../../../../stores/app.store";
import localizedWords from "../../../../stores/localization.store";
import { formatAmount } from "../../../../utils/utils";
import { Host, h } from "@stencil/core";
export class IrFacilities {
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        return (h(Host, { key: 'a1c3b6aab313d9497946d16d0117bb975bd4930a' }, h("div", { key: '21b91d5f70102b62996f4f83f8409eaddc0d76fa', class: "facilities-container space-y-5 bg-gray-100 p-6" }, h("div", { key: '82694de0f8041cedff31214c57e8895331891fb1', class: "flex  items-center gap-4" }, h("ir-icons", { key: 'df2c9e933f0c99330796a27bbd14825dc22f3213', name: "clock" }), h("p", { key: 'a28b18597b3a939cee8631243cc2d6924883e3b5' }, localizedWords.entries.Lcz_CheckInFromUntil.replace('%1', (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.time_constraints.check_in_from).replace('%2', (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.time_constraints.check_in_till)), h("p", { key: '353a9ec7f9340c53c2447064e79980584c949ad1' }, localizedWords.entries.Lcz_CheckOut, ":", (_c = app_store.property) === null || _c === void 0 ? void 0 :
            _c.time_constraints.check_out_till)), h("div", { key: '27a6fbf1bfc9c63587d74fb1fc29eb3d67ccb1fc', class: "flex items-center gap-4" }, h("ir-icons", { key: '44dcdf32c1168473c33d0a0f150e18dee734ee19', name: "wifi" }), h("p", { key: '88eed2aa4c6a0e1760c056c7297e877492917525' }, localizedWords.entries.Lcz_PublicAreas, ": ", h("span", { key: '87170fb43ec21c17b3adb375a6d4d51fd8b0fe08', class: "text-green-500" }, (_d = app_store.property) === null || _d === void 0 ? void 0 : _d.internet_offering.public_internet_statement)), h("p", { key: 'f3fcccaca02341bf77c870de84fbcb506499e91b' }, localizedWords.entries.Lcz_Rooms, ":", ' ', h("span", { key: '19678bc13eda8c69405db89966c47fba8b06e265', class: "text-green-500" }, ((_e = app_store.property) === null || _e === void 0 ? void 0 : _e.internet_offering.is_room_internet_free) ? 'Free Internet' : 'Paid Internet'))), h("div", { key: 'dc836cbfd6c8875800017b7edf66e7f28dfd0182', class: "flex items-center gap-4" }, h("ir-icons", { key: '66b4d3e98e35ea7fe0cd2e2e57dbe40cf57a0100', name: "car" }), h("p", { key: 'e0f2ed2ac26b01d708caff6d3b87477b17063710' }, (_f = app_store.property) === null || _f === void 0 ? void 0 :
            _f.parking_offering.title, " ", localizedWords.entries.Lcz_At, ' ', formatAmount((_g = app_store.property) === null || _g === void 0 ? void 0 : _g.parking_offering.pricing, app_store.userPreferences.currency_id))), h("div", { key: '7370477cbc165b4e05ab577887112a6c6d0120b3', class: "flex items-center gap-4" }, h("ir-icons", { key: 'a915dc16bea3ded8b2eb536b631e3d95ade19f60', name: "pets" }), h("p", { key: 'f97b2ae93c40f7b69b9c500900a967bc808c7ebb' }, (_h = app_store.property) === null || _h === void 0 ? void 0 : _h.pets_acceptance.title)), h("div", { key: 'bef0de469fe6bc4eb04c311a68c8368b83cae80f', class: "flex items-center gap-4" }, h("ir-icons", { key: '1547d11a7e231ac50fc37cf3de8698bcbb1d49fa', name: "bed" }), h("p", { key: '2e35dd5ad3ec0eb4bdc81c58408a6235b9a54ac8' }, (_j = app_store.property) === null || _j === void 0 ? void 0 : _j.baby_cot_offering.title)), h("div", { key: '6b34a5ea1bc1f95293ea7d40a64c83952e9cad6e', class: "flex flex-col flex-wrap gap-4 md:flex-row md:items-start md:justify-between md:gap-8 lg:gap-10" }, h("div", { key: '29dedb7e7bac5778aa22f42f548f25402608b686', class: "flex gap-4 " }, h("ir-icons", { key: 'b3efbc8e2905f549db9b70a13b60c8cd151cb39b', name: "home" }), h("ul", { key: 'b33451d0430f3107a4ce02216866bedd72ddf91c' }, h("li", { key: 'b0acbf603ee1288861d4dc2cd47b77b67381795a', class: "text-start font-medium" }, localizedWords.entries.Lcz_PropertyFacilities), (_k = app_store.property) === null || _k === void 0 ? void 0 :
            _k.amenities.map(aminity => {
                if (aminity.amenity_type !== 'property') {
                    return null;
                }
                return (h("li", { key: aminity.code, class: "text-start" }, aminity.description));
            }))), h("div", { key: 'f5c82fb45f6a262c3b71bd8c4b7eeee95dd3a03e', class: "flex gap-4" }, h("ir-icons", { key: '50767fc9d217202088ae230e990671c8f39d6424', name: "football" }), h("ul", { key: '1aedb51a6f23fcdcfb9c1df84760713525f64e43' }, h("li", { key: '55ed71e555de861b2f6a208323f1e21abfeeee17', class: "text-start font-medium" }, localizedWords.entries.Lcz_Activities), (_l = app_store.property) === null || _l === void 0 ? void 0 :
            _l.amenities.map(aminity => {
                if (aminity.amenity_type !== 'activity') {
                    return null;
                }
                return (h("li", { class: "text-start", key: aminity.code }, aminity.description));
            }))), h("div", { key: 'eb3d81fead38ce1ba1ab608ee7cf64dc3ba2ae44', class: "flex gap-4 " }, h("ir-icons", { key: '83b3ac308f83c92048e02ca13b72b25c9689c141', name: "bell" }), h("ul", { key: 'e273c29d0d475d4b591cca46fb6298b8658fdc6d' }, h("li", { key: 'bd3470bac5b7b224961b7900ce2a6deb06e93ae6', class: "text-start font-medium" }, localizedWords.entries.Lcz_Services), (_m = app_store.property) === null || _m === void 0 ? void 0 :
            _m.amenities.map(aminity => {
                if (aminity.amenity_type !== 'service') {
                    return null;
                }
                return (h("li", { class: "text-start", key: aminity.code }, aminity.description));
            })))), ((_o = app_store.property) === null || _o === void 0 ? void 0 : _o.description.food_and_beverage) && (h("div", { class: "flex items-center gap-4" }, h("ir-icons", { name: "utencils" }), h("p", null, h("span", { class: "font-medium" }, localizedWords.entries['Lcz_FoodAndbeverage:'], " "), (_p = app_store.property) === null || _p === void 0 ? void 0 :
            _p.description.food_and_beverage))), h("div", { key: '4b4a48116966d7de0e8a6671346e977f1f122d97', class: "flex items-center gap-4" }, h("ir-icons", { key: '448fd36f6b31ccefab886dcd9228e7ff92146620', name: "credit_card" }), h("p", { key: '3f956eec1e81a676cc9c8036e7c5da51b5837661' }, h("span", { key: '9b26a0ae5b395d2ff29a4dd17c829e2e6ce0b2be', class: "font-medium" }, localizedWords.entries.Lcz_AcceptedCreditCards, " "), (_q = app_store.property) === null || _q === void 0 ? void 0 :
            _q.allowed_cards.map((card, index) => {
                var _a;
                return (h("span", { key: card.id }, card.name, index < ((_a = app_store.property) === null || _a === void 0 ? void 0 : _a.allowed_cards.length) - 1 && h("span", null, " - ")));
            }))), ((_r = app_store.property) === null || _r === void 0 ? void 0 : _r.description.important_info) && (h("div", { class: "flex items-center gap-4" }, h("ir-icons", { name: "danger", svgClassName: "text-red-500" }), h("div", null, h("p", null, (_s = app_store.property) === null || _s === void 0 ? void 0 : _s.description.important_info), h("p", null, (_t = app_store.property) === null || _t === void 0 ? void 0 : _t.description.non_standard_conditions)))))));
    }
    static get is() { return "ir-facilities"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-facilities.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-facilities.css"]
        };
    }
}
//# sourceMappingURL=ir-facilities.js.map
