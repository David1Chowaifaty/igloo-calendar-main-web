import app_store from "../../../../stores/app.store";
import localizedWords from "../../../../stores/localization.store";
import { formatAmount } from "../../../../utils/utils";
import { Host, h } from "@stencil/core";
export class IrFacilities {
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1;
        return (h(Host, { key: '0ad3d65a11f6ab612b48a7721b133cd6d67a58f8' }, h("div", { key: '09fc5cbcc9cadc1c4eeaf954034ac1e6dd82c83a', class: "facilities-container space-y-5 bg-gray-100 p-6" }, h("div", { key: '308587e339e713fd218115a2b6532d6fabdef46e', class: "flex  items-center gap-4" }, h("ir-icons", { key: '26c0bb1cdadcc6ab94336af9c12104da9b73e426', name: "clock" }), h("p", { key: '2c6f0d3ce321a0541c6f7071c4b3c0794b1bbb74' }, localizedWords.entries.Lcz_CheckInFromUntil.replace('%1', (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.time_constraints.check_in_from).replace('%2', (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.time_constraints.check_in_till)), h("p", { key: 'd248eef61d86b6c3f0bc021514d64ce145ee4181' }, localizedWords.entries.Lcz_CheckOut, ":", (_c = app_store.property) === null || _c === void 0 ? void 0 :
            _c.time_constraints.check_out_till)), ((_d = app_store.property) === null || _d === void 0 ? void 0 : _d.internet_offering.public_internet_statement) && (h("div", { key: '382b6dd27e77f67b8aa22ab8f31ba45162be0a9e', class: "flex items-center gap-4" }, h("ir-icons", { key: '9bc76bce95aeb5afac856573d8ba88b48d0bad4e', name: "wifi" }), h("p", { key: '41145849652715c30b963b0f91dc780834fa24cb' }, localizedWords.entries.Lcz_PublicAreas, ": ", h("span", { key: '10b1c5b86e77c3c14c488a96420061ab54dd115a', class: "text-[var(--ir-green)]" }, (_e = app_store.property) === null || _e === void 0 ? void 0 : _e.internet_offering.public_internet_statement)), ((_f = app_store.property) === null || _f === void 0 ? void 0 : _f.internet_offering.is_room_internet_free) && (h("p", { key: 'f58bb19d0132e403a79620f9452544c3316d5a35' }, localizedWords.entries.Lcz_Rooms, ": ", h("span", { key: '6ae6dee97fc9af180e0df6f2e983464b7c477a79', class: "text-[var(--ir-green)]" }, localizedWords.entries.Lcz_FreeInternet))))), ((_g = app_store.property) === null || _g === void 0 ? void 0 : _g.parking_offering.title) && (h("div", { key: 'c03ed08248a74993007d8cb6b7647d1b523b5c78', class: "flex items-center gap-4" }, h("ir-icons", { key: '3539dcb3260e88dbef8ffe8ad52fca1dd669db1b', name: "car" }), h("p", { key: '608c222f403135464f7fbd6daf3831591c83fc37' }, (_h = app_store.property) === null || _h === void 0 ? void 0 :
            _h.parking_offering.title, " ", localizedWords.entries.Lcz_At, ' ', formatAmount((_j = app_store.property) === null || _j === void 0 ? void 0 : _j.parking_offering.pricing, app_store.userPreferences.currency_id)))), ((_k = app_store.property) === null || _k === void 0 ? void 0 : _k.pets_acceptance.title) && (h("div", { key: '8bc90db36f93c68d563cf196f9501879bc8768e1', class: "flex items-center gap-4" }, h("ir-icons", { key: '8feb61762fb50e1b1f573908b6758bfee094146c', name: "pets" }), h("p", { key: 'c9315dc500f4c167015ae8fe280ef99ea8903561' }, (_l = app_store.property) === null || _l === void 0 ? void 0 : _l.pets_acceptance.title))), ((_m = app_store.property) === null || _m === void 0 ? void 0 : _m.baby_cot_offering.title) && (h("div", { key: '6f9bb3eca5b7b394634661778a5ede4476e654fb', class: "flex items-center gap-4" }, h("ir-icons", { key: 'd0192bcb615c4447b1a25aead2b0cb07c790acc8', name: "bed" }), h("p", { key: 'e1a5da8cd2abc3ee52d076f022fd5b2517b7f948' }, (_o = app_store.property) === null || _o === void 0 ? void 0 : _o.baby_cot_offering.title))), ((_p = app_store.property) === null || _p === void 0 ? void 0 : _p.amenities.some(a => !['property', 'activity', 'service'].includes(a.amenity_type))) && (h("div", { key: 'b316c35f152c1637cfe557b3173f2626e5c34892', class: "flex flex-col flex-wrap gap-4 md:flex-row md:items-start md:justify-between md:gap-8 lg:gap-10" }, ((_q = app_store.property) === null || _q === void 0 ? void 0 : _q.amenities.some(a => a.amenity_type !== 'property')) && (h("div", { key: 'a82c52e8115b833df99af32c5ae19afc9a9d86ee', class: "flex gap-4 " }, h("ir-icons", { key: 'b18095fa4cf45fa3f48a53d51a3b7a02831460c1', name: "home" }), h("ul", { key: 'e0df8355f5bfda645fe7efc8046e8de2b09fcee3' }, h("li", { key: '8a056322abc34856a96a7d60a2c2389bf9c7333f', class: "text-start font-medium" }, localizedWords.entries.Lcz_PropertyFacilities), (_r = app_store.property) === null || _r === void 0 ? void 0 :
            _r.amenities.map(aminity => {
                if (aminity.amenity_type !== 'property') {
                    return null;
                }
                return (h("li", { key: aminity.code, class: "text-start" }, aminity.description));
            })))), ((_s = app_store.property) === null || _s === void 0 ? void 0 : _s.amenities.some(a => a.amenity_type !== 'activity')) && (h("div", { key: '294155d76abb367aa63887dfd69151b401000cdc', class: "flex gap-4" }, h("ir-icons", { key: 'f75e2738d5b6d80ea910182b7475e30a83679571', name: "football" }), h("ul", { key: 'd8df844c957458a538dfdc0abf592bae8624ce61' }, h("li", { key: '4bc308d258a3f36cdcda45a51fdd7f3e7dc506db', class: "text-start font-medium" }, localizedWords.entries.Lcz_Activities), (_t = app_store.property) === null || _t === void 0 ? void 0 :
            _t.amenities.map(aminity => {
                if (aminity.amenity_type !== 'activity') {
                    return null;
                }
                return (h("li", { class: "text-start", key: aminity.code }, aminity.description));
            })))), ((_u = app_store.property) === null || _u === void 0 ? void 0 : _u.amenities.some(a => a.amenity_type !== 'service')) && (h("div", { key: '1e83889aaedd8493b965a7f827050dd7d1301550', class: "flex gap-4 " }, h("ir-icons", { key: '4f51222281e94536c6bb1334f3dedf7e415a6cc5', name: "bell" }), h("ul", { key: '7bdfc599d99cd04d901b484a1ded79760fe6b61a' }, h("li", { key: '1344a5b2d393e6b3ada7f8d4d7acb0424d50152d', class: "text-start font-medium" }, localizedWords.entries.Lcz_Services), (_v = app_store.property) === null || _v === void 0 ? void 0 :
            _v.amenities.map(aminity => {
                if (aminity.amenity_type !== 'service') {
                    return null;
                }
                return (h("li", { class: "text-start", key: aminity.code }, aminity.description));
            })))))), ((_w = app_store.property) === null || _w === void 0 ? void 0 : _w.description.food_and_beverage) && (h("div", { key: 'e7517fa951c13ed7d746c7fd57dcfd4e7bc1fa7e', class: "flex items-center gap-4" }, h("ir-icons", { key: '6a9b65cb30c803677bcabbec59711bc79a1c30d3', name: "utencils" }), h("p", { key: '8085deb3f1c54038d94875c48bc9247d32543166' }, h("span", { key: '61d2ed30305259fc08e0975797d238cb57c44e0e', class: "font-medium" }, localizedWords.entries['Lcz_FoodAndbeverage:'], " "), h("span", { key: '4fe68bbb6e405d259815c0cf60bb3c004bd58648', innerHTML: (_x = app_store.property) === null || _x === void 0 ? void 0 : _x.description.food_and_beverage })))), h("div", { key: 'fde2ae4c78100fbefaf74e8603d0d84925cfb061', class: "flex items-center gap-4" }, h("ir-icons", { key: '9839af5cd15bb291b903af7fd997bd22820a8eb6', name: "credit_card" }), h("p", { key: '719cef95d841324768b64f7a56b4ae945e94cc64' }, h("span", { key: '3ce5e78a5ed238fdc7302f4309ef7775c23b040d', class: "font-medium" }, localizedWords.entries.Lcz_AcceptedCreditCards, " "), (_y = app_store.property) === null || _y === void 0 ? void 0 :
            _y.allowed_cards.map((card, index) => {
                var _a;
                return (h("span", { key: card.id }, card.name, index < ((_a = app_store.property) === null || _a === void 0 ? void 0 : _a.allowed_cards.length) - 1 && h("span", null, " - ")));
            }))), ((_z = app_store.property) === null || _z === void 0 ? void 0 : _z.description.important_info) && (h("div", { key: '10e4b2ab3265fa8c4da96e0f77717a29f23b020f', class: "flex items-center gap-4" }, h("ir-icons", { key: '8f3dfc4f8647eaf87077c46d9c04c47405caf853', name: "danger", svgClassName: "text-red-500" }), h("div", { key: '973ab9c921132f88ac841b9798d29316d2843f97' }, h("p", { key: 'f9212fb75bbb4cb5d531b24584dc43f56c30768a', innerHTML: (_0 = app_store.property) === null || _0 === void 0 ? void 0 : _0.description.important_info }), h("p", { key: '071c3ffa9dd8f4f9528a5e7c032e3ecd4f932f31', innerHTML: (_1 = app_store.property) === null || _1 === void 0 ? void 0 : _1.description.non_standard_conditions })))))));
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
