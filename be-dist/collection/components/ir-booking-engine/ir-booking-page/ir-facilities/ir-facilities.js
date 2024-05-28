import app_store from "../../../../stores/app.store";
import localizedWords from "../../../../stores/localization.store";
import { formatAmount } from "../../../../utils/utils";
import { Host, h } from "@stencil/core";
export class IrFacilities {
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        return (h(Host, { key: 'c1236813ec302bd523f2dae679b26974e04dbb86' }, h("div", { key: 'c2c3f4803f0d1a84e2429dd8177cebc532aad3c3', class: "facilities-container space-y-5 bg-gray-100 p-6" }, h("div", { key: '3565b266d02734d440e75d13656543cde073ebe0', class: "flex  items-center gap-4" }, h("ir-icons", { key: '75172d13346e73eaa9fcea135c4ee44313f832fd', name: "clock" }), h("p", { key: '91530f52d50a27629efc4d9cf973b5c28c01300b' }, localizedWords.entries.Lcz_CheckInFromUntil.replace('%1', (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.time_constraints.check_in_from).replace('%2', (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.time_constraints.check_in_till)), h("p", { key: '8b39967ebe947e7c8cf81dabe8eb56f8922109f0' }, localizedWords.entries.Lcz_CheckOut, ":", (_c = app_store.property) === null || _c === void 0 ? void 0 :
            _c.time_constraints.check_out_till)), h("div", { key: 'ddda8baf006611fac664ab7c02443633e3c4af51', class: "flex items-center gap-4" }, h("ir-icons", { key: 'c1aa2e332b31bc7a3ba36d1dee611398a0c29d79', name: "wifi" }), h("p", { key: '38531cd8070b5558f43cbb1403922f0063ef3a73' }, localizedWords.entries.Lcz_PublicAreas, ": ", h("span", { key: 'ba9ab088fd68aec8bf1ef3f0f65ee48064229642', class: "text-green-500" }, (_d = app_store.property) === null || _d === void 0 ? void 0 : _d.internet_offering.public_internet_statement)), h("p", { key: 'ef9b5d91b6cde1d054252cc3497be960442d136c' }, localizedWords.entries.Lcz_Rooms, ":", ' ', h("span", { key: '367b60336c7443034ede66766b47e1c1c2865cf5', class: "text-green-500" }, ((_e = app_store.property) === null || _e === void 0 ? void 0 : _e.internet_offering.is_room_internet_free) ? 'Free Internet' : 'Paid Internet'))), h("div", { key: '21585d1a1573a80071039ab1a3a666c32dd804e3', class: "flex items-center gap-4" }, h("ir-icons", { key: '67da2823232bcec2c3f2eb62aeb62ffaa86e4353', name: "car" }), h("p", { key: '9fbc12623ce71939d907a50fb84aabfeccdfc6d9' }, (_f = app_store.property) === null || _f === void 0 ? void 0 :
            _f.parking_offering.title, " ", localizedWords.entries.Lcz_At, ' ', formatAmount((_g = app_store.property) === null || _g === void 0 ? void 0 : _g.parking_offering.pricing, app_store.userPreferences.currency_id))), h("div", { key: '8b928c664d1a5d55e235efd43eb882c1365ac3f4', class: "flex items-center gap-4" }, h("ir-icons", { key: '59190299167c35caa6f8c19ec25c29f94db1185f', name: "pets" }), h("p", { key: 'b192107390eb6a235f01ff0215fc5edbe30f8cb2' }, (_h = app_store.property) === null || _h === void 0 ? void 0 : _h.pets_acceptance.title)), h("div", { key: '3bb0cf701587b65c36130214ac2606fe19c6ce56', class: "flex items-center gap-4" }, h("ir-icons", { key: 'c60fad119cab3772f3cc78b13a0c3a1f01b6546c', name: "bed" }), h("p", { key: '94c8f3b3301f360e599add902bb8a356e51e30a9' }, (_j = app_store.property) === null || _j === void 0 ? void 0 : _j.baby_cot_offering.title)), h("div", { key: 'bf933aca2378775096c291f5fcc1fa6ee50296e5', class: "flex flex-col flex-wrap gap-4 md:flex-row md:items-start md:justify-between md:gap-8 lg:gap-10" }, h("div", { key: '18a1219514dbbc5bd7bd5ff948c9fb27399a67c8', class: "flex gap-4 " }, h("ir-icons", { key: '376114566dcf2aa5bee80d8b87f41ae4aac0a4ef', name: "home" }), h("ul", { key: '17227c3e117c179ba69c919e2d720626642f3322' }, h("li", { key: '652d2df613319701a83a07a7720ebc79cc1f1e74', class: "text-start font-medium" }, localizedWords.entries.Lcz_PropertyFacilities), (_k = app_store.property) === null || _k === void 0 ? void 0 :
            _k.amenities.map(aminity => {
                if (aminity.amenity_type !== 'property') {
                    return null;
                }
                return (h("li", { key: aminity.code, class: "text-start" }, aminity.description));
            }))), h("div", { key: '4e45dacff5a8e31a759634df3d8dd2f7ec4d100b', class: "flex gap-4" }, h("ir-icons", { key: '84303d8d41b2b7bc90c7b95b3aa838ac134ac6b2', name: "football" }), h("ul", { key: 'db8fae91f5b668cd1c00fa26057155c59a729299' }, h("li", { key: 'eb1615d73675e0020eda715447677f9253d5e23d', class: "text-start font-medium" }, localizedWords.entries.Lcz_Activities), (_l = app_store.property) === null || _l === void 0 ? void 0 :
            _l.amenities.map(aminity => {
                if (aminity.amenity_type !== 'activity') {
                    return null;
                }
                return (h("li", { class: "text-start", key: aminity.code }, aminity.description));
            }))), h("div", { key: '06fa9bfae33151b74d00073266d1ddfe202681d1', class: "flex gap-4 " }, h("ir-icons", { key: '57ec6651c984b639fc429eb2041781ed89178b39', name: "bell" }), h("ul", { key: 'e9c986c38769a7d75921b9681e62546fbfe4fb6a' }, h("li", { key: 'b6ab1d29d220defef2625b60d0f9fc44a5f55edb', class: "text-start font-medium" }, localizedWords.entries.Lcz_Services), (_m = app_store.property) === null || _m === void 0 ? void 0 :
            _m.amenities.map(aminity => {
                if (aminity.amenity_type !== 'service') {
                    return null;
                }
                return (h("li", { class: "text-start", key: aminity.code }, aminity.description));
            })))), ((_o = app_store.property) === null || _o === void 0 ? void 0 : _o.description.food_and_beverage) && (h("div", { class: "flex items-center gap-4" }, h("ir-icons", { name: "utencils" }), h("p", null, h("span", { class: "font-medium" }, localizedWords.entries['Lcz_FoodAndbeverage:'], " "), (_p = app_store.property) === null || _p === void 0 ? void 0 :
            _p.description.food_and_beverage))), h("div", { key: '5da2c75abe5e3061b37190dd9009159ea33fb123', class: "flex items-center gap-4" }, h("ir-icons", { key: '416534db59b7a98783cfe2dbae0a8b72cbe59a7a', name: "credit_card" }), h("p", { key: 'cd93706e740794104d3d2ff889c583b97d5cf696' }, h("span", { key: '3211137fddfb19d8a563b27b5c3f3bf00acae6f4', class: "font-medium" }, localizedWords.entries.Lcz_AcceptedCreditCards, " "), (_q = app_store.property) === null || _q === void 0 ? void 0 :
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
