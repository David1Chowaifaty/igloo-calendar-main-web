import app_store from "../../../../stores/app.store";
import localizedWords from "../../../../stores/localization.store";
import { formatAmount } from "../../../../utils/utils";
import { Host, h } from "@stencil/core";
export class IrFacilities {
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        return (h(Host, { key: 'e647f3fc6c4e80fdeea523beb103ad7fc084cea9' }, h("div", { key: 'e1c6fa7ebba9bfcaf10008a0382fb02c29204b74', class: "facilities-container space-y-5 bg-gray-100 p-6" }, h("div", { key: 'a27004028b3f2dfc4aa62790789baa4e055f351c', class: "flex  items-center gap-4" }, h("ir-icons", { key: '70baa44b9a3deea8bdefbb73da44038e2442e105', name: "clock" }), h("p", { key: '186c66e9876ed37a94b120c48a60b09b1416e2ea' }, localizedWords.entries.Lcz_CheckInFromUntil.replace('%1', (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.time_constraints.check_in_from).replace('%2', (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.time_constraints.check_in_till)), h("p", { key: '6d015f483fb6d163ac83e766576afb9f1c15d6b4' }, localizedWords.entries.Lcz_CheckOut, ":", (_c = app_store.property) === null || _c === void 0 ? void 0 :
            _c.time_constraints.check_out_till)), h("div", { key: '0bde0cca138f8e7fef197933798c2fb3fdcfc50b', class: "flex items-center gap-4" }, h("ir-icons", { key: 'c9095564d6a7a5557db2ee254ced31824f63e8ae', name: "wifi" }), h("p", { key: 'b0e7a20ae4626effce8fbe40fe9b7b9eac9a8af7' }, localizedWords.entries.Lcz_PublicAreas, ": ", h("span", { key: 'b46a8a570281aa5db887c6a14f1188c7565e8846', class: "text-green-500" }, (_d = app_store.property) === null || _d === void 0 ? void 0 : _d.internet_offering.public_internet_statement)), ((_e = app_store.property) === null || _e === void 0 ? void 0 : _e.internet_offering.is_room_internet_free) && (h("p", null, localizedWords.entries.Lcz_Rooms, ": ", h("span", { class: "text-green-500" }, localizedWords.entries.Lcz_FreeInternet)))), h("div", { key: '2699f9640019b791ea5d2302325bf8851d23015a', class: "flex items-center gap-4" }, h("ir-icons", { key: 'c751c0364fee4287402d919ade138ae5156c4125', name: "car" }), h("p", { key: '05f11715ee4bd5aa5a9a6ca00fe2e618407d47dc' }, (_f = app_store.property) === null || _f === void 0 ? void 0 :
            _f.parking_offering.title, " ", localizedWords.entries.Lcz_At, ' ', formatAmount((_g = app_store.property) === null || _g === void 0 ? void 0 : _g.parking_offering.pricing, app_store.userPreferences.currency_id))), h("div", { key: 'c21e44bc526600da77166119708f2376ced3b082', class: "flex items-center gap-4" }, h("ir-icons", { key: 'a2f5b03cdfac667e466243616af173b96712a084', name: "pets" }), h("p", { key: '931badbc962062f44f8cac2eb8787298f12f76d4' }, (_h = app_store.property) === null || _h === void 0 ? void 0 : _h.pets_acceptance.title)), h("div", { key: 'c60eeaf575eb8069826f7c4eb4f0530284540aa8', class: "flex items-center gap-4" }, h("ir-icons", { key: '96ed0d2d846942e87b1cfa991e617fa10fe078c6', name: "bed" }), h("p", { key: 'fb15d2d6bf5190414d52a8fe72f82caad1df41c4' }, (_j = app_store.property) === null || _j === void 0 ? void 0 : _j.baby_cot_offering.title)), h("div", { key: 'cc64f2642ced744f9e19580566b05d602e69dcbe', class: "flex flex-col flex-wrap gap-4 md:flex-row md:items-start md:justify-between md:gap-8 lg:gap-10" }, h("div", { key: 'ad82fee7a52c381523a09480fdb9bece10367f90', class: "flex gap-4 " }, h("ir-icons", { key: '99bcd80699efce2a16d907c984ad0f31f184216f', name: "home" }), h("ul", { key: '51af30c337458bad37bd0aa8adcd2a4fefea68bc' }, h("li", { key: '47f3e132bd1648800b8476108ffe9b27124bb079', class: "text-start font-medium" }, localizedWords.entries.Lcz_PropertyFacilities), (_k = app_store.property) === null || _k === void 0 ? void 0 :
            _k.amenities.map(aminity => {
                if (aminity.amenity_type !== 'property') {
                    return null;
                }
                return (h("li", { key: aminity.code, class: "text-start" }, aminity.description));
            }))), h("div", { key: '00e3a02b541f46c4c7568fd5cab741dd1598235c', class: "flex gap-4" }, h("ir-icons", { key: '3a18d44c57d955d4dfc2ccc2acc5742715ce4fe1', name: "football" }), h("ul", { key: '027fe04d93f0eab4f486fbab3a3259bbc816014d' }, h("li", { key: 'c345fde58735aef08a66de33691da73ae4c2c128', class: "text-start font-medium" }, localizedWords.entries.Lcz_Activities), (_l = app_store.property) === null || _l === void 0 ? void 0 :
            _l.amenities.map(aminity => {
                if (aminity.amenity_type !== 'activity') {
                    return null;
                }
                return (h("li", { class: "text-start", key: aminity.code }, aminity.description));
            }))), h("div", { key: '9adbe19a0f2d1ea3414da604604b0f245dd3bf38', class: "flex gap-4 " }, h("ir-icons", { key: '420cdefbbf847cf23a3c3c26b75284599f28cc84', name: "bell" }), h("ul", { key: '9fa07e33873339f6c83637edb43d606f03e2defd' }, h("li", { key: 'f27bb87999adf2031d08d6b84e69217ac9d4f60b', class: "text-start font-medium" }, localizedWords.entries.Lcz_Services), (_m = app_store.property) === null || _m === void 0 ? void 0 :
            _m.amenities.map(aminity => {
                if (aminity.amenity_type !== 'service') {
                    return null;
                }
                return (h("li", { class: "text-start", key: aminity.code }, aminity.description));
            })))), ((_o = app_store.property) === null || _o === void 0 ? void 0 : _o.description.food_and_beverage) && (h("div", { class: "flex items-center gap-4" }, h("ir-icons", { name: "utencils" }), h("p", null, h("span", { class: "font-medium" }, localizedWords.entries['Lcz_FoodAndbeverage:'], " "), (_p = app_store.property) === null || _p === void 0 ? void 0 :
            _p.description.food_and_beverage))), h("div", { key: '2a255ae76953c529b377a02eada8a4b7185f327b', class: "flex items-center gap-4" }, h("ir-icons", { key: '20eb03cdd2c9ec97bb68a17460cf22381eccabda', name: "credit_card" }), h("p", { key: '29c914abf9f3597cefc305ccd9821417948c4eff' }, h("span", { key: 'b6a253e4d36fcfc5fd96882ea843f51e1e59ffcd', class: "font-medium" }, localizedWords.entries.Lcz_AcceptedCreditCards, " "), (_q = app_store.property) === null || _q === void 0 ? void 0 :
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
