import app_store from "../../../../stores/app.store";
import localizedWords from "../../../../stores/localization.store";
import { formatAmount } from "../../../../utils/utils";
import { Host, h } from "@stencil/core";
export class IrFacilities {
    getTotalAmenities() {
        var _a, _b;
        const set = new Set();
        (_b = (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.amenities) === null || _b === void 0 ? void 0 : _b.forEach(a => {
            if (a.amenity_type !== 'room') {
                set.add(a.amenity_type);
            }
        });
        return set.size;
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6;
        return (h(Host, { key: '166cb23a628bac9ced5c695c39a494b52f784116' }, h("div", { key: 'd2beda8bcf099d4fc1388310960876d9f30fc9e2', class: "facilities-container space-y-5 bg-gray-100 p-6" }, h("div", { key: 'a7c84e1b6a5ff217076db167cd8b5d46ecb3ea6b', class: "flex  items-center gap-4" }, h("ir-icons", { key: '8e9dafc0cb72da5ceaf2ece66179d5c23752641b', name: "clock" }), ((_a = app_store.property) === null || _a === void 0 ? void 0 : _a.time_constraints.check_in_from) && ((_b = app_store.property) === null || _b === void 0 ? void 0 : _b.time_constraints.check_in_till) && (h("p", { key: '57c606e8e318b1372e87d766f0efaa020d7bcdfa' }, localizedWords.entries.Lcz_CheckInFromUntil.replace('%1', (_c = app_store.property) === null || _c === void 0 ? void 0 : _c.time_constraints.check_in_from).replace('%2', (_d = app_store.property) === null || _d === void 0 ? void 0 : _d.time_constraints.check_in_till))), h("p", { key: '8aeead66c57faae710ad5fedb64328d29751a9b0' }, localizedWords.entries.Lcz_CheckOut, ":", (_e = app_store.property) === null || _e === void 0 ? void 0 :
            _e.time_constraints.check_out_till)), ((_f = app_store.property) === null || _f === void 0 ? void 0 : _f.internet_offering.public_internet_statement) && (h("div", { key: '998ae860955e6be5911aec4ddccf872cfe545992', class: "flex items-center gap-4" }, h("ir-icons", { key: 'b3007bc270b99b3013990aa8effaf0c3a27aed4f', name: "wifi" }), h("p", { key: 'b7f5266f69140600d0ee8d71b19e6c2b1af848c9' }, localizedWords.entries.Lcz_PublicAreas, ": ", h("span", { key: '692f4fb8aa8891f236c5f24f4fcb1c5d40919748', class: "text-[var(--ir-green)]" }, (_g = app_store.property) === null || _g === void 0 ? void 0 : _g.internet_offering.public_internet_statement)), ((_h = app_store.property) === null || _h === void 0 ? void 0 : _h.internet_offering.is_room_internet_free) && (h("p", { key: '77d5a6fd3549e1cd15dccce4cdfff8c4feb63cee' }, localizedWords.entries.Lcz_Rooms, ": ", h("span", { key: '9bcdc857e758168c636811d42ea7047d6fcb35eb', class: "text-[var(--ir-green)]" }, localizedWords.entries.Lcz_FreeInternet))))), ((_j = app_store.property) === null || _j === void 0 ? void 0 : _j.parking_offering.title) && (h("div", { key: 'f54399eb0dc6250750e97452319f9339ee0d0039', class: "flex items-center gap-4" }, h("ir-icons", { key: 'b075a88673ae3b2004f1a4bc8d8fb88c73632bc3', name: "car" }), h("p", { key: '87649f6bd532658d17770f2ba6430eea12e0ed86' }, (_k = app_store.property) === null || _k === void 0 ? void 0 :
            _k.parking_offering.title, ' ', Number((_l = app_store.property) === null || _l === void 0 ? void 0 : _l.parking_offering.pricing) > 0 && (h("span", { key: '6f32415cda22577ed54d10b3491da27669c27309' }, localizedWords.entries.Lcz_At, " ", formatAmount((_m = app_store.property) === null || _m === void 0 ? void 0 : _m.parking_offering.pricing, app_store.userPreferences.currency_id)))))), ((_o = app_store.property) === null || _o === void 0 ? void 0 : _o.pets_acceptance.title) && (h("div", { key: 'b6b9172e60b4f9f898244481f4bc40b3808d97d8', class: "flex items-center gap-4" }, h("ir-icons", { key: '904bca7955584f3a9cab54fbf6be9b5ff7e77392', name: "pets" }), h("p", { key: '82f72427465c952c1363d82d7e9da34452dab6bd' }, (_p = app_store.property) === null || _p === void 0 ? void 0 : _p.pets_acceptance.title))), ((_q = app_store.property) === null || _q === void 0 ? void 0 : _q.baby_cot_offering.title) && (h("div", { key: 'c4c8883f396f59ccc0f04c25a173166ab2c48657', class: "flex items-center gap-4" }, h("ir-icons", { key: 'ad68525b7fc21cfdbbccedcfc59f5c0b6100ebc9', name: "bed" }), h("p", { key: '6e1325976785718ad3276a51cd72bc3a4fd6fce0' }, (_r = app_store.property) === null || _r === void 0 ? void 0 : _r.baby_cot_offering.title))), ((_s = app_store.property) === null || _s === void 0 ? void 0 : _s.amenities.some(a => !['property', 'activity', 'service'].includes(a.amenity_type))) && (h("div", { key: '760f18c6f23c6b4529f5a1c91a82b7dd2018c63e', class: "property_amenities", "data-total": this.getTotalAmenities() }, ((_t = app_store.property) === null || _t === void 0 ? void 0 : _t.amenities.some(a => a.amenity_type === 'property')) && (h("div", { key: '67d3229edc65faed2f10dc406799dc97689689c2', class: "flex gap-4 " }, h("ir-icons", { key: '17028b83108eef55b6a116beb95a0966b19ad905', name: "home" }), h("ul", { key: '882b552f9ff09cd8c6b42b96584f765ec85ee3c7' }, h("li", { key: 'fc559c9dca4cdf7ff71ee8540991873860dbf363', class: "text-start font-medium" }, localizedWords.entries.Lcz_PropertyFacilities), (_u = app_store.property) === null || _u === void 0 ? void 0 :
            _u.amenities.map(aminity => {
                if (aminity.amenity_type !== 'property') {
                    return null;
                }
                return (h("li", { key: aminity.code, class: "text-start" }, aminity.description));
            })))), ((_v = app_store.property) === null || _v === void 0 ? void 0 : _v.amenities.some(a => a.amenity_type === 'activity')) && (h("div", { key: '7bd71b461f49464f40f83d9115c16676d40a8bf9', class: "flex gap-4" }, h("ir-icons", { key: '3771abb9684b4054b56a8c8ba62fbe3ce14b82d0', name: "football" }), h("ul", { key: '7f270483c4687bfa6c95616653decef6c9b1e55a' }, h("li", { key: '5fd759d52579a9a3e1039ed776647f86da020dec', class: "text-start font-medium" }, localizedWords.entries.Lcz_Activities), (_w = app_store.property) === null || _w === void 0 ? void 0 :
            _w.amenities.map(aminity => {
                if (aminity.amenity_type !== 'activity') {
                    return null;
                }
                return (h("li", { class: "text-start", key: aminity.code }, aminity.description));
            })))), ((_x = app_store.property) === null || _x === void 0 ? void 0 : _x.amenities.some(a => a.amenity_type === 'service')) && (h("div", { key: 'a85836423a537698c790901a2c9b53a6fcd0dedf', class: "flex gap-4 " }, h("ir-icons", { key: '6deb34fefc5d03de679a4560c26710e2fc78149f', name: "bell" }), h("ul", { key: '935c125858002419e5bed54191807ebf2ff21725' }, h("li", { key: 'c672a618257d6408e9ed0fb7d7820962db1ad683', class: "text-start font-medium" }, localizedWords.entries.Lcz_Services), (_y = app_store.property) === null || _y === void 0 ? void 0 :
            _y.amenities.map(aminity => {
                if (aminity.amenity_type !== 'service') {
                    return null;
                }
                return (h("li", { class: "text-start", key: aminity.code }, aminity.description));
            })))))), ((_z = app_store.property) === null || _z === void 0 ? void 0 : _z.description.food_and_beverage) && (h("div", { key: 'e3e3ccad79c96a24d146bb2aca70f5d9005b4a65', class: "flex items-center gap-4" }, h("ir-icons", { key: '4367cfcb2b327fa1929b380a6a56c381876cb4be', name: "utencils" }), h("p", { key: '672e52028d89d594097b08a748e078b5bc88704b' }, h("span", { key: '1e82120b16750d0ec3519efeaaf1fce7da6aaceb', class: "font-medium" }, localizedWords.entries['Lcz_FoodAndbeverage:'], " "), h("span", { key: '98df32a6fda56ce6241d5a3a84d279f43505dc83', innerHTML: (_0 = app_store.property) === null || _0 === void 0 ? void 0 : _0.description.food_and_beverage })))), ((_2 = (_1 = app_store.property) === null || _1 === void 0 ? void 0 : _1.allowed_cards) === null || _2 === void 0 ? void 0 : _2.length) > 0 && (h("div", { key: 'b43f5a45f585c8a04af08a086b6b6cc8f73239a9', class: "flex items-center gap-4" }, h("ir-icons", { key: '0eeeefa97d93f121126fb8ed66fe1e308482918a', name: "credit_card" }), h("p", { key: 'a0e352b36eb94c2e37a8aba05f9080e6ce8aae0c' }, h("span", { key: '0c86e5f1ac73eb12a2393f28c698f01b76ba6238', class: "font-medium" }, localizedWords.entries.Lcz_AcceptedCreditCards, " "), (_3 = app_store.property) === null || _3 === void 0 ? void 0 :
            _3.allowed_cards.map((card, index) => {
                var _a;
                return (h("span", { key: card.id }, card.name, index < ((_a = app_store.property) === null || _a === void 0 ? void 0 : _a.allowed_cards.length) - 1 && h("span", null, " - ")));
            })))), ((_4 = app_store.property) === null || _4 === void 0 ? void 0 : _4.description.important_info) && (h("div", { key: 'cd76b5b2e6a14e6515e8a923953da1b51d9c2aa3', class: "flex items-center gap-4" }, h("ir-icons", { key: '434723bbb70630fcab47ae97fa09d15c87b13165', name: "danger", svgClassName: "text-red-500" }), h("div", { key: 'df73f530e2936e342b983a5f0e222cd51a02c9c8' }, h("p", { key: '9956b7bcb36822560ef2e57e92a122cfc692f62e', innerHTML: (_5 = app_store.property) === null || _5 === void 0 ? void 0 : _5.description.important_info }), h("p", { key: '580003e6f3710224339050ae52a9353e71c7755b', innerHTML: (_6 = app_store.property) === null || _6 === void 0 ? void 0 : _6.description.non_standard_conditions })))))));
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
