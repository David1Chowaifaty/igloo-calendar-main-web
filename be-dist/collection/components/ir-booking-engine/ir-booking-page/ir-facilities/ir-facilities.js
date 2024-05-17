import app_store from "../../../../stores/app.store";
import localizedWords from "../../../../stores/localization.store";
import { formatAmount } from "../../../../utils/utils";
import { Host, h } from "@stencil/core";
export class IrFacilities {
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        return (h(Host, { key: 'c1236813ec302bd523f2dae679b26974e04dbb86' }, h("div", { key: '71f8a4ee3b1e206d4ffb2c2d1129c554eaf2bd8d', class: "space-y-5 rounded-md bg-gray-100 p-6" }, h("div", { key: '5a5d04b0663e9aee0a0567bcdf6f0cecfd105298', class: "flex  items-center gap-4" }, h("ir-icons", { key: '99b94fc5c987b9c37875bbba8d0d616138e2c227', name: "clock" }), h("p", { key: 'b3ddd5bc5a7ed0092cc14ca9fc9dcf1c727a30eb' }, localizedWords.entries.Lcz_CheckInFromUntil.replace('%1', (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.time_constraints.check_in_from).replace('%2', (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.time_constraints.check_in_till)), h("p", { key: '645c0f20dd2a46f01a62409211eb3d0f4799bbc7' }, localizedWords.entries.Lcz_CheckOut, ":", (_c = app_store.property) === null || _c === void 0 ? void 0 :
            _c.time_constraints.check_out_till)), h("div", { key: 'e378448f08d0aa0323522503e10e423cb92a8234', class: "flex items-center gap-4" }, h("ir-icons", { key: 'f0dd6b4d31cda61a25abd2dba9cd2d957b9a629b', name: "wifi" }), h("p", { key: '32d0bff45f680970f5b8c93ecb58425790df944a' }, localizedWords.entries.Lcz_PublicAreas, ": ", h("span", { key: '5c2cb335239fdc41887fd86059cdf6a762697b19', class: "text-green-500" }, (_d = app_store.property) === null || _d === void 0 ? void 0 : _d.internet_offering.public_internet_statement)), h("p", { key: '2de7278cc482c454f0aed8fc48ac014c8dcff790' }, localizedWords.entries.Lcz_Rooms, ":", ' ', h("span", { key: '907115b004a300f70ea933a9843cf294e1a975dd', class: "text-green-500" }, ((_e = app_store.property) === null || _e === void 0 ? void 0 : _e.internet_offering.is_room_internet_free) ? 'Free Internet' : 'Paid Internet'))), h("div", { key: '6b52a6763d42487394c10654060a5fc50b13d572', class: "flex items-center gap-4" }, h("ir-icons", { key: 'c32584c7a70c0cbf897a23ab4167e734f55004f3', name: "car" }), h("p", { key: '845d6a4cd93a5b7954c547c7cf0ac8848dee0d76' }, (_f = app_store.property) === null || _f === void 0 ? void 0 :
            _f.parking_offering.title, " ", localizedWords.entries.Lcz_At, ' ', formatAmount((_g = app_store.property) === null || _g === void 0 ? void 0 : _g.parking_offering.pricing, app_store.userPreferences.currency_id))), h("div", { key: 'c7c767bc2e2f888f1aa06f106e1e2d3b42e14f32', class: "flex items-center gap-4" }, h("ir-icons", { key: '445dc45c1476858fe084b846f1ac98050f95af2d', name: "pets" }), h("p", { key: 'ec2dd21aad27edf742d2f5bcfd25dda34b1dfdca' }, (_h = app_store.property) === null || _h === void 0 ? void 0 : _h.pets_acceptance.title)), h("div", { key: 'f7834cea2c4cd9845cfb210154f876a40cd1adc6', class: "flex items-center gap-4" }, h("ir-icons", { key: '25122efe4a516403edf0ab1db998f9b86331cecc', name: "bed" }), h("p", { key: '653a6482ffadd014cb38a16ff22b74e3cfb5e21f' }, (_j = app_store.property) === null || _j === void 0 ? void 0 : _j.baby_cot_offering.title)), h("div", { key: '729f5c2e2b2b7f7be810a117332e6d7dc5fa44ad', class: "flex flex-col flex-wrap gap-4 md:flex-row md:items-start md:justify-between md:gap-8 lg:gap-10" }, h("div", { key: '8ed90f177167dd9e7d0e5134e1c07a475e507bf7', class: "flex gap-4 " }, h("ir-icons", { key: 'f7af5bf272365b40aab3c1da71d9809988d8638c', name: "home" }), h("ul", { key: '8e2f306a83e5ca076e2f0fb271277c251a4d948f' }, h("li", { key: '19c1b59f1446540047549d75217e2989fdb1b174', class: "font-medium" }, localizedWords.entries.Lcz_PropertyFacilities), (_k = app_store.property) === null || _k === void 0 ? void 0 :
            _k.amenities.map(aminity => {
                if (aminity.amenity_type !== 'property') {
                    return null;
                }
                return h("li", { key: aminity.code }, aminity.description);
            }))), h("div", { key: '27183a758c03ff49bd839e01572902be89a1ce80', class: "flex gap-4" }, h("ir-icons", { key: '998b184173098d00ad7f18c1ed27afbfe02ee166', name: "football" }), h("ul", { key: 'f2512e74dbb3b932e28aa79d9003d06d3f4d77d4' }, h("li", { key: '4565b428ed807510c143dada16c551a89e31caec', class: "font-medium" }, localizedWords.entries.Lcz_Activities), (_l = app_store.property) === null || _l === void 0 ? void 0 :
            _l.amenities.map(aminity => {
                if (aminity.amenity_type !== 'activity') {
                    return null;
                }
                return h("li", { key: aminity.code }, aminity.description);
            }))), h("div", { key: 'dd6ec01f1167bd57e0eb1cb5a423888d31705cf0', class: "flex gap-4 " }, h("ir-icons", { key: '5b4463567964727854e8de4d28697d9e6cb4a09c', name: "bell" }), h("ul", { key: 'fc6ed29d92f5e37045fa9876ee9080bf9de7634b' }, h("li", { key: 'd7a289a4e1f123b3b39ce7b63b84e4a020ded269', class: "font-medium" }, localizedWords.entries.Lcz_Services), (_m = app_store.property) === null || _m === void 0 ? void 0 :
            _m.amenities.map(aminity => {
                if (aminity.amenity_type !== 'service') {
                    return null;
                }
                return h("li", { key: aminity.code }, aminity.description);
            })))), ((_o = app_store.property) === null || _o === void 0 ? void 0 : _o.description.food_and_beverage) && (h("div", { class: "flex items-center gap-4" }, h("ir-icons", { name: "utencils" }), h("p", null, h("span", { class: "font-medium" }, localizedWords.entries['Lcz_FoodAndbeverage:'], " "), (_p = app_store.property) === null || _p === void 0 ? void 0 :
            _p.description.food_and_beverage))), h("div", { key: 'cd9c2207c0837b2d6d3fcc6c553d157241cbcc1d', class: "flex items-center gap-4" }, h("ir-icons", { key: '7db26e925455d4184e00fd60efde7695d221aaff', name: "credit_card" }), h("p", { key: '8a29717170b0f5e1f14053774c5ea8e76a3791be' }, h("span", { key: '6741735681206345c25c9492da5b7641f7825ccf', class: "font-medium" }, localizedWords.entries.Lcz_AcceptedCreditCards, " "), (_q = app_store.property) === null || _q === void 0 ? void 0 :
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
