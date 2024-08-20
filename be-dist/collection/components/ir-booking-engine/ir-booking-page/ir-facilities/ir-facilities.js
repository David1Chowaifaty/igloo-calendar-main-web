import app_store from "../../../../stores/app.store";
import localizedWords from "../../../../stores/localization.store";
import { formatAmount } from "../../../../utils/utils";
import { Host, h } from "@stencil/core";
export class IrFacilities {
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3;
        return (h(Host, { key: '50c078a5e5971191d14fa998d49209b101705c58' }, h("div", { key: '5689ad989632f9a15502d1c0bd1de9a1506e5c0f', class: "facilities-container space-y-5 bg-gray-100 p-6" }, h("div", { key: '2e8dc99c491e74efb84f19ae411a8a8c802de560', class: "flex  items-center gap-4" }, h("ir-icons", { key: 'cfd5cb5f2273d444d960b5a993fc8bcd2f3adbac', name: "clock" }), h("p", { key: 'f53a1401c5bc1362f35f735bb7ff3c632f04866f' }, localizedWords.entries.Lcz_CheckInFromUntil.replace('%1', (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.time_constraints.check_in_from).replace('%2', (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.time_constraints.check_in_till)), h("p", { key: '553c3e83645ea6fce20bc1893f8b203b8fb44fd8' }, localizedWords.entries.Lcz_CheckOut, ":", (_c = app_store.property) === null || _c === void 0 ? void 0 :
            _c.time_constraints.check_out_till)), ((_d = app_store.property) === null || _d === void 0 ? void 0 : _d.internet_offering.public_internet_statement) && (h("div", { key: 'f0fb8f53c08acdb5148f33b33fca5aec00528071', class: "flex items-center gap-4" }, h("ir-icons", { key: 'c92c299dd395a8fe77a2ca8baa128fecd3e80306', name: "wifi" }), h("p", { key: '46fd9f79e900f07e2b860a2be2468318af71cfcf' }, localizedWords.entries.Lcz_PublicAreas, ": ", h("span", { key: '203906885778b0c02792d46c76fcf7163c63556f', class: "text-[var(--ir-green)]" }, (_e = app_store.property) === null || _e === void 0 ? void 0 : _e.internet_offering.public_internet_statement)), ((_f = app_store.property) === null || _f === void 0 ? void 0 : _f.internet_offering.is_room_internet_free) && (h("p", { key: '4eae65e0b2c204f68d2eb74eb24dd6cc5c7944d0' }, localizedWords.entries.Lcz_Rooms, ": ", h("span", { key: 'bfd7dce7f870025e0a071932129c4ae1176c9d46', class: "text-[var(--ir-green)]" }, localizedWords.entries.Lcz_FreeInternet))))), ((_g = app_store.property) === null || _g === void 0 ? void 0 : _g.parking_offering.title) && (h("div", { key: 'bca19e400e63f02eb5b8b18ea55a0335636f1744', class: "flex items-center gap-4" }, h("ir-icons", { key: '2da00b9a555f450b830e7bdbd203bb963709b0f8', name: "car" }), h("p", { key: '41123576383d39dbfea363686b349d4ed6810d03' }, (_h = app_store.property) === null || _h === void 0 ? void 0 :
            _h.parking_offering.title, " ", localizedWords.entries.Lcz_At, ' ', formatAmount((_j = app_store.property) === null || _j === void 0 ? void 0 : _j.parking_offering.pricing, app_store.userPreferences.currency_id)))), ((_k = app_store.property) === null || _k === void 0 ? void 0 : _k.pets_acceptance.title) && (h("div", { key: 'c98d5584b33145c85a67dcfd5896b7d58ba3fc20', class: "flex items-center gap-4" }, h("ir-icons", { key: '8f0f99933f27732765bae914ed0b450bc309360c', name: "pets" }), h("p", { key: '7009faacab230d2ac2d60a410c74c7cedd74b7b4' }, (_l = app_store.property) === null || _l === void 0 ? void 0 : _l.pets_acceptance.title))), ((_m = app_store.property) === null || _m === void 0 ? void 0 : _m.baby_cot_offering.title) && (h("div", { key: 'dc72d04abd122ae208048ca47d3bdbb940547380', class: "flex items-center gap-4" }, h("ir-icons", { key: '8c501ef33b01866ee03da35f70b7741df51ec721', name: "bed" }), h("p", { key: 'f69c3a9779bacd9d1f1b9548b3a4d21ce2112800' }, (_o = app_store.property) === null || _o === void 0 ? void 0 : _o.baby_cot_offering.title))), ((_p = app_store.property) === null || _p === void 0 ? void 0 : _p.amenities.some(a => !['property', 'activity', 'service'].includes(a.amenity_type))) && (h("div", { key: '5c9b4893d261c36b71eb4def04cdc25f39f497d3', class: "flex flex-col flex-wrap gap-4 md:flex-row md:items-start md:justify-between md:gap-8 lg:gap-10" }, ((_q = app_store.property) === null || _q === void 0 ? void 0 : _q.amenities.some(a => a.amenity_type !== 'property')) && (h("div", { key: 'b90b0fe8ed134836a2e5368928e31e4e005914e2', class: "flex gap-4 " }, h("ir-icons", { key: 'e298be1a88cd60575e7a3d7a55c5dd39d8313eb0', name: "home" }), h("ul", { key: '19db97a5d45c9fa016cf7bd65f35475417c875d3' }, h("li", { key: 'a5593e274f6dcb156f4d90a7ab17b2a588421674', class: "text-start font-medium" }, localizedWords.entries.Lcz_PropertyFacilities), (_r = app_store.property) === null || _r === void 0 ? void 0 :
            _r.amenities.map(aminity => {
                if (aminity.amenity_type !== 'property') {
                    return null;
                }
                return (h("li", { key: aminity.code, class: "text-start" }, aminity.description));
            })))), ((_s = app_store.property) === null || _s === void 0 ? void 0 : _s.amenities.some(a => a.amenity_type !== 'activity')) && (h("div", { key: '1952895c93212b53ff316577c954fe605e443fdc', class: "flex gap-4" }, h("ir-icons", { key: '10e39688324c6a18c02bb66b64427eaa5f358946', name: "football" }), h("ul", { key: '1e6dcdd9da732a3ab230a49b1834b350061641f9' }, h("li", { key: '1572dd2f0dc4c7b0eba9bee3a94dc6500bb043a9', class: "text-start font-medium" }, localizedWords.entries.Lcz_Activities), (_t = app_store.property) === null || _t === void 0 ? void 0 :
            _t.amenities.map(aminity => {
                if (aminity.amenity_type !== 'activity') {
                    return null;
                }
                return (h("li", { class: "text-start", key: aminity.code }, aminity.description));
            })))), ((_u = app_store.property) === null || _u === void 0 ? void 0 : _u.amenities.some(a => a.amenity_type !== 'service')) && (h("div", { key: '4c8043e4d43807284d92eb7be0c35403d06a3d42', class: "flex gap-4 " }, h("ir-icons", { key: 'd4cbaa62418496710a95aae09b56715521da2559', name: "bell" }), h("ul", { key: 'b79f336c053a1fc17a4f072b1ccc858ee9576a80' }, h("li", { key: '0b37486fc73b688c6b105c1cddf5c80680ff6bfe', class: "text-start font-medium" }, localizedWords.entries.Lcz_Services), (_v = app_store.property) === null || _v === void 0 ? void 0 :
            _v.amenities.map(aminity => {
                if (aminity.amenity_type !== 'service') {
                    return null;
                }
                return (h("li", { class: "text-start", key: aminity.code }, aminity.description));
            })))))), ((_w = app_store.property) === null || _w === void 0 ? void 0 : _w.description.food_and_beverage) && (h("div", { key: '22d58b1604e88642b38739251789090466d6b417', class: "flex items-center gap-4" }, h("ir-icons", { key: '474bc945f5a4723e1b5d40cceed3acf49ef23edb', name: "utencils" }), h("p", { key: 'bfe5691e29778362216b0487a645d1d2594dba66' }, h("span", { key: '27cf3c2d8c4dc96208d7ef266ab5b42392effdf5', class: "font-medium" }, localizedWords.entries['Lcz_FoodAndbeverage:'], " "), h("span", { key: 'c82d1598c3dc1dcc6507e193295d15667acab7a5', innerHTML: (_x = app_store.property) === null || _x === void 0 ? void 0 : _x.description.food_and_beverage })))), ((_z = (_y = app_store.property) === null || _y === void 0 ? void 0 : _y.allowed_cards) === null || _z === void 0 ? void 0 : _z.length) > 0 && (h("div", { key: '0e8a02bcb9f1346b08127949df94830557ae33b4', class: "flex items-center gap-4" }, h("ir-icons", { key: 'eb9bb0cf0d6a061ddcef5d1e4442e3ed44f368a3', name: "credit_card" }), h("p", { key: 'a31b78b2727cad7fb54a2072e68e03e752bf73a5' }, h("span", { key: 'afe7cd5e2cef8badf45b624348cff1ff472a8313', class: "font-medium" }, localizedWords.entries.Lcz_AcceptedCreditCards, " "), (_0 = app_store.property) === null || _0 === void 0 ? void 0 :
            _0.allowed_cards.map((card, index) => {
                var _a;
                return (h("span", { key: card.id }, card.name, index < ((_a = app_store.property) === null || _a === void 0 ? void 0 : _a.allowed_cards.length) - 1 && h("span", null, " - ")));
            })))), ((_1 = app_store.property) === null || _1 === void 0 ? void 0 : _1.description.important_info) && (h("div", { key: '1ced42d297f5b2f419c9fe3cc0c8340077b7b349', class: "flex items-center gap-4" }, h("ir-icons", { key: '44ffc9bb5ebc10e51c458479fa77b8f4b5b9b508', name: "danger", svgClassName: "text-red-500" }), h("div", { key: 'c0289f0c9a476d8f9fbefc5ebc125e2aab6843f8' }, h("p", { key: 'b76afd8ea3bc4479f8142c5cafc62f4b0bbbda3c', innerHTML: (_2 = app_store.property) === null || _2 === void 0 ? void 0 : _2.description.important_info }), h("p", { key: 'e4e0e4652889c13868d0eddf596541e3e90cf56a', innerHTML: (_3 = app_store.property) === null || _3 === void 0 ? void 0 : _3.description.non_standard_conditions })))))));
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
