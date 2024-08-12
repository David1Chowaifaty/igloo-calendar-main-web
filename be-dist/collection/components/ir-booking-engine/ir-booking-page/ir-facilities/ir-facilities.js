import app_store from "../../../../stores/app.store";
import localizedWords from "../../../../stores/localization.store";
import { formatAmount } from "../../../../utils/utils";
import { Host, h } from "@stencil/core";
export class IrFacilities {
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1;
        return (h(Host, { key: '50c078a5e5971191d14fa998d49209b101705c58' }, h("div", { key: '5689ad989632f9a15502d1c0bd1de9a1506e5c0f', class: "facilities-container space-y-5 bg-gray-100 p-6" }, h("div", { key: '2e8dc99c491e74efb84f19ae411a8a8c802de560', class: "flex  items-center gap-4" }, h("ir-icons", { key: 'cfd5cb5f2273d444d960b5a993fc8bcd2f3adbac', name: "clock" }), h("p", { key: 'f53a1401c5bc1362f35f735bb7ff3c632f04866f' }, localizedWords.entries.Lcz_CheckInFromUntil.replace('%1', (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.time_constraints.check_in_from).replace('%2', (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.time_constraints.check_in_till)), h("p", { key: '553c3e83645ea6fce20bc1893f8b203b8fb44fd8' }, localizedWords.entries.Lcz_CheckOut, ":", (_c = app_store.property) === null || _c === void 0 ? void 0 :
            _c.time_constraints.check_out_till)), ((_d = app_store.property) === null || _d === void 0 ? void 0 : _d.internet_offering.public_internet_statement) && (h("div", { key: 'f0fb8f53c08acdb5148f33b33fca5aec00528071', class: "flex items-center gap-4" }, h("ir-icons", { key: 'c92c299dd395a8fe77a2ca8baa128fecd3e80306', name: "wifi" }), h("p", { key: '46fd9f79e900f07e2b860a2be2468318af71cfcf' }, localizedWords.entries.Lcz_PublicAreas, ": ", h("span", { key: '73beab1226410965f5f350d0e5f620776999d3e5', class: "text-green-600" }, (_e = app_store.property) === null || _e === void 0 ? void 0 : _e.internet_offering.public_internet_statement)), ((_f = app_store.property) === null || _f === void 0 ? void 0 : _f.internet_offering.is_room_internet_free) && (h("p", { key: '06ac1eb8264bd6bae95f15ece6f21d9f5f129e0b' }, localizedWords.entries.Lcz_Rooms, ": ", h("span", { key: '580ee1cf83f8ebd7aec9c694091ce0abd40e36d3', class: "text-green-600" }, localizedWords.entries.Lcz_FreeInternet))))), ((_g = app_store.property) === null || _g === void 0 ? void 0 : _g.parking_offering.title) && (h("div", { key: '80eecbaa623711ada7051d8055f24c9e583ca2b9', class: "flex items-center gap-4" }, h("ir-icons", { key: 'ff01c1f1106babd3d9c0db1d8b4c94ecea12c0d5', name: "car" }), h("p", { key: 'a9f1f8a2c3f6cd2e1f9af197705c3092078ef538' }, (_h = app_store.property) === null || _h === void 0 ? void 0 :
            _h.parking_offering.title, " ", localizedWords.entries.Lcz_At, ' ', formatAmount((_j = app_store.property) === null || _j === void 0 ? void 0 : _j.parking_offering.pricing, app_store.userPreferences.currency_id)))), ((_k = app_store.property) === null || _k === void 0 ? void 0 : _k.pets_acceptance.title) && (h("div", { key: 'dfe620bfcc184b345a1de5c21913a4685f7566f9', class: "flex items-center gap-4" }, h("ir-icons", { key: '80505d32bca254ed71ec331b5a9c28068bea3b39', name: "pets" }), h("p", { key: '348395cd77e1603606197702b0028e00979f85f9' }, (_l = app_store.property) === null || _l === void 0 ? void 0 : _l.pets_acceptance.title))), ((_m = app_store.property) === null || _m === void 0 ? void 0 : _m.baby_cot_offering.title) && (h("div", { key: '495bdab4a00efbcd854e3633df4677371b7ff1cb', class: "flex items-center gap-4" }, h("ir-icons", { key: 'b37aeaf83a37f4411d1ca02a549ec51152a7c28e', name: "bed" }), h("p", { key: 'a48280c976d15cae8a0c069baa4ca27213825ddb' }, (_o = app_store.property) === null || _o === void 0 ? void 0 : _o.baby_cot_offering.title))), ((_p = app_store.property) === null || _p === void 0 ? void 0 : _p.amenities.some(a => !['property', 'activity', 'service'].includes(a.amenity_type))) && (h("div", { key: '8a4701e19d5065b06e36c71e7a774ca84c0d7e5d', class: "flex flex-col flex-wrap gap-4 md:flex-row md:items-start md:justify-between md:gap-8 lg:gap-10" }, ((_q = app_store.property) === null || _q === void 0 ? void 0 : _q.amenities.some(a => a.amenity_type !== 'property')) && (h("div", { key: '996d413ab1dd180c9d815e53ff4ad0e74fe97858', class: "flex gap-4 " }, h("ir-icons", { key: '65324a10b75a53bb65b9ecd9cc538ae044c7cdd7', name: "home" }), h("ul", { key: '84b10bcce30c5a0255fcee0f660c76abb6743805' }, h("li", { key: 'e1d3528ec654c0a373227a0159f60744da347a91', class: "text-start font-medium" }, localizedWords.entries.Lcz_PropertyFacilities), (_r = app_store.property) === null || _r === void 0 ? void 0 :
            _r.amenities.map(aminity => {
                if (aminity.amenity_type !== 'property') {
                    return null;
                }
                return (h("li", { key: aminity.code, class: "text-start" }, aminity.description));
            })))), ((_s = app_store.property) === null || _s === void 0 ? void 0 : _s.amenities.some(a => a.amenity_type !== 'activity')) && (h("div", { key: '7433c1626549e0f4d1e0c5b70024f4ca9db9ccea', class: "flex gap-4" }, h("ir-icons", { key: 'd413397021759924c1da470ef5f6939c64c05c9e', name: "football" }), h("ul", { key: '4630985163519ab4a284583f329800ce0e23c122' }, h("li", { key: 'cf54f504d4f4ab9d9bf69890225cff90eba9af8c', class: "text-start font-medium" }, localizedWords.entries.Lcz_Activities), (_t = app_store.property) === null || _t === void 0 ? void 0 :
            _t.amenities.map(aminity => {
                if (aminity.amenity_type !== 'activity') {
                    return null;
                }
                return (h("li", { class: "text-start", key: aminity.code }, aminity.description));
            })))), ((_u = app_store.property) === null || _u === void 0 ? void 0 : _u.amenities.some(a => a.amenity_type !== 'service')) && (h("div", { key: '538106c522f6ffc6048ac98cc6b3704105e52368', class: "flex gap-4 " }, h("ir-icons", { key: '0cb537664393b4fb1b0cc5850ce2a12cc1bf6223', name: "bell" }), h("ul", { key: 'cf4064c01ba0b502f2271344576c4cafc86aafcd' }, h("li", { key: 'fca76247831c13eb5361c9b392b398a339502545', class: "text-start font-medium" }, localizedWords.entries.Lcz_Services), (_v = app_store.property) === null || _v === void 0 ? void 0 :
            _v.amenities.map(aminity => {
                if (aminity.amenity_type !== 'service') {
                    return null;
                }
                return (h("li", { class: "text-start", key: aminity.code }, aminity.description));
            })))))), ((_w = app_store.property) === null || _w === void 0 ? void 0 : _w.description.food_and_beverage) && (h("div", { key: 'acdbd55c3b7b59e9c76a0d190b0c9f60a78403d7', class: "flex items-center gap-4" }, h("ir-icons", { key: '3ffea0219f6200b41188090a5f386a3a3058b03c', name: "utencils" }), h("p", { key: '2a83b633f9cd9f5c76f1103835658d4da7c2eb64' }, h("span", { key: '3003f4d0613e3dcaeacd58a660a0be4c3c430f50', class: "font-medium" }, localizedWords.entries['Lcz_FoodAndbeverage:'], " "), h("span", { key: 'd636ff4cb08e9707f29eee4f2422a3b0ce66f147', innerHTML: (_x = app_store.property) === null || _x === void 0 ? void 0 : _x.description.food_and_beverage })))), h("div", { key: '2247157d0f8b4730e9f95edb0e567b67a751e484', class: "flex items-center gap-4" }, h("ir-icons", { key: 'f1a78e8d1b48eaba827c15d660643659f773d439', name: "credit_card" }), h("p", { key: 'b7666ae5a9362bf8f76695b6fe7a4980a2daae50' }, h("span", { key: '9a6399db5bdda09fbf4c7e0a7f40b22034340f10', class: "font-medium" }, localizedWords.entries.Lcz_AcceptedCreditCards, " "), (_y = app_store.property) === null || _y === void 0 ? void 0 :
            _y.allowed_cards.map((card, index) => {
                var _a;
                return (h("span", { key: card.id }, card.name, index < ((_a = app_store.property) === null || _a === void 0 ? void 0 : _a.allowed_cards.length) - 1 && h("span", null, " - ")));
            }))), ((_z = app_store.property) === null || _z === void 0 ? void 0 : _z.description.important_info) && (h("div", { key: 'cfc81710ea5f125505a49af00cb3c8cdc9827c00', class: "flex items-center gap-4" }, h("ir-icons", { key: 'c96a3f3aeb03db41484af7321aec5f6b457f07ee', name: "danger", svgClassName: "text-red-500" }), h("div", { key: '95d9de1dfb83872a2a58a95a2d8d887c0126f675' }, h("p", { key: '1a6b621f79004ce2b9f051e878d489af42fe57f9', innerHTML: (_0 = app_store.property) === null || _0 === void 0 ? void 0 : _0.description.important_info }), h("p", { key: '04bd148f59a4b985d55903a40d62d2750eccde00', innerHTML: (_1 = app_store.property) === null || _1 === void 0 ? void 0 : _1.description.non_standard_conditions })))))));
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
