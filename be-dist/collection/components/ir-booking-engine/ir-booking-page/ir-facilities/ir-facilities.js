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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9;
        return (h(Host, { key: '5bbf8514675f48a06bbe65f25cb7a67958c3a389' }, h("div", { key: '149f7844bd61610f3af9760ffd487906fb86c0d9', class: "facilities-container space-y-5 bg-gray-100 p-6" }, h("div", { key: 'b1293f815118b1b74b804875b0fddfc806ea7c22', class: "flex  items-center gap-4" }, h("ir-icons", { key: 'a36c27f1f1eb774b7554c2f93627cb5f6a7a8fc0', name: "clock" }), ((_a = app_store.property) === null || _a === void 0 ? void 0 : _a.time_constraints.check_in_from) && ((_b = app_store.property) === null || _b === void 0 ? void 0 : _b.time_constraints.check_in_till) ? (h("p", null, localizedWords.entries.Lcz_CheckInFromUntil.replace('%1', (_c = app_store.property) === null || _c === void 0 ? void 0 : _c.time_constraints.check_in_from).replace('%2', (_d = app_store.property) === null || _d === void 0 ? void 0 : _d.time_constraints.check_in_till))) : ((_e = app_store.property) === null || _e === void 0 ? void 0 : _e.time_constraints.check_in_from) ? (h("p", null, localizedWords.entries.Lcz_CheckIn, ":", (_f = app_store.property) === null || _f === void 0 ? void 0 :
            _f.time_constraints.check_in_from)) : null, h("p", { key: '91fc2de9017fc8611f8fbbe9f2b047805d091082' }, localizedWords.entries.Lcz_CheckOut, ":", (_g = app_store.property) === null || _g === void 0 ? void 0 :
            _g.time_constraints.check_out_till)), ((_h = app_store.property) === null || _h === void 0 ? void 0 : _h.internet_offering.public_internet_statement) && (h("div", { key: '90f6f86ab26f1f87267ac901d0ebcec0acb81eaf', class: "flex items-center gap-4" }, h("ir-icons", { key: 'e3309117a9928629a66eb10cdb1d9a3dd4f6dedd', name: "wifi" }), h("p", { key: '873907c405601ee7fa36656b608598f00d1189e6' }, localizedWords.entries.Lcz_PublicAreas, ": ", h("span", { key: '1e4e54bb5368f546cb70892b5341cf3cac061785', class: "text-[var(--ir-green)]" }, (_j = app_store.property) === null || _j === void 0 ? void 0 : _j.internet_offering.public_internet_statement)), ((_k = app_store.property) === null || _k === void 0 ? void 0 : _k.internet_offering.is_room_internet_free) && (h("p", { key: 'def02c9e7d2dddc748fbea5295a998e4a5ef48c7' }, localizedWords.entries.Lcz_Rooms, ": ", h("span", { key: '3221489fcaa6a2ec13a5d9bcee4ae5dd7a57aef9', class: "text-[var(--ir-green)]" }, localizedWords.entries.Lcz_FreeInternet))))), ((_l = app_store.property) === null || _l === void 0 ? void 0 : _l.parking_offering.title) && (h("div", { key: '73d539cf8fe160304c4af5099fe7c91f83ea14a5', class: "flex items-center gap-4" }, h("ir-icons", { key: '38a990bed47d880d96751ec3c8b71163483791e8', name: "car" }), h("p", { key: '83ffda55ee30011b4fdc8c06bf312d754ca08e5f' }, (_m = app_store.property) === null || _m === void 0 ? void 0 :
            _m.parking_offering.title, ' ', Number((_o = app_store.property) === null || _o === void 0 ? void 0 : _o.parking_offering.pricing) > 0 && (h("span", { key: '164d34a932ee470ad49f27c698475022de073779' }, localizedWords.entries.Lcz_At, " ", formatAmount((_p = app_store.property) === null || _p === void 0 ? void 0 : _p.parking_offering.pricing, app_store.userPreferences.currency_id), "/", (_q = app_store.property) === null || _q === void 0 ? void 0 :
            _q.parking_offering.schedule))))), ((_r = app_store.property) === null || _r === void 0 ? void 0 : _r.pets_acceptance.title) && (h("div", { key: '4de136b1be98f15d8b9a24bc4c18ca63d603002e', class: "flex items-center gap-4" }, h("ir-icons", { key: 'cc26f8e683fc763077f3134241662f7161018884', name: "pets" }), h("p", { key: 'b436960a910059175773841dced16e4fce7c9c91' }, (_s = app_store.property) === null || _s === void 0 ? void 0 : _s.pets_acceptance.title))), ((_t = app_store.property) === null || _t === void 0 ? void 0 : _t.baby_cot_offering.title) && (h("div", { key: '78f53f4a9f834479133f862f5c61924429a06c5a', class: "flex items-center gap-4" }, h("ir-icons", { key: 'fa91a7dd9bda6284b41493832835ce35c0e1ec9b', name: "baby" }), h("p", { key: '2c6db457f5d4c15eb2bcf0d587b750c064e2d812' }, (_u = app_store.property) === null || _u === void 0 ? void 0 : _u.baby_cot_offering.title))), ((_v = app_store.property) === null || _v === void 0 ? void 0 : _v.amenities.some(a => !['property', 'activity', 'service'].includes(a.amenity_type))) && (h("div", { key: 'fe48dba978488b3ec5bed2b72c534a6e32af1067', class: "property_amenities", "data-total": this.getTotalAmenities() }, ((_w = app_store.property) === null || _w === void 0 ? void 0 : _w.amenities.some(a => a.amenity_type === 'property')) && (h("div", { key: 'f9bfdbc9687bc1758aa65608e5cf16d6084fbe45', class: "flex gap-4 " }, h("ir-icons", { key: '34925c4556c70fefe78ec0ddf04bab3997e003ec', name: "home" }), h("ul", { key: 'f4c675995c532f5981c1bac6829c3170eac96326' }, h("li", { key: 'e61435fb8981320cb4356015a1ffc3f7d9ab0caa', class: "text-start font-medium" }, localizedWords.entries.Lcz_PropertyFacilities), (_x = app_store.property) === null || _x === void 0 ? void 0 :
            _x.amenities.map(aminity => {
                if (aminity.amenity_type !== 'property') {
                    return null;
                }
                return (h("li", { key: aminity.code, class: "text-start" }, aminity.description));
            })))), ((_y = app_store.property) === null || _y === void 0 ? void 0 : _y.amenities.some(a => a.amenity_type === 'activity')) && (h("div", { key: '5b98f1ddee31eab5c77c422e874db09203a0f440', class: "flex gap-4" }, h("ir-icons", { key: '2f5cc3d7df32f48673d1e58b8242f260814c54dd', name: "football" }), h("ul", { key: '4ae4929f6b7157a081d6ecf4c37fa17bd9b4112c' }, h("li", { key: '84d0db39bdb8debfbed5294cf5dd2a54fbbb1349', class: "text-start font-medium" }, localizedWords.entries.Lcz_Activities), (_z = app_store.property) === null || _z === void 0 ? void 0 :
            _z.amenities.map(aminity => {
                if (aminity.amenity_type !== 'activity') {
                    return null;
                }
                return (h("li", { class: "text-start", key: aminity.code }, aminity.description));
            })))), ((_0 = app_store.property) === null || _0 === void 0 ? void 0 : _0.amenities.some(a => a.amenity_type === 'service')) && (h("div", { key: '1fe8907129bc3b3d5bbdb3e0e9e890c0921e47a6', class: "flex gap-4 " }, h("ir-icons", { key: '8194723f6c653f9ce690b0e9956f1e51f1c9127f', name: "bell" }), h("ul", { key: 'bb3d610be5ac9dc775da951d73d41d6de893d67c' }, h("li", { key: '77e5d72dcdd5f509a162050111e1d3f8221a87a4', class: "text-start font-medium" }, localizedWords.entries.Lcz_Services), (_1 = app_store.property) === null || _1 === void 0 ? void 0 :
            _1.amenities.map(aminity => {
                if (aminity.amenity_type !== 'service') {
                    return null;
                }
                return (h("li", { class: "text-start", key: aminity.code }, aminity.description));
            })))))), ((_2 = app_store.property) === null || _2 === void 0 ? void 0 : _2.description.food_and_beverage) && (h("div", { key: '6bfcf7de7bc8e94b25fd1f7748f2e9ca687e8737', class: "flex items-center gap-4" }, h("ir-icons", { key: '1618c2e26f4e665e392087784bc9a5cb624a76b6', name: "utencils" }), h("p", { key: 'ec0ba28bdc2e5afdc5eeb9a3dd616e2df0ae761d' }, h("span", { key: 'f74a167450caad3e656c1b06cf790dee9690d031', class: "font-medium" }, localizedWords.entries['Lcz_FoodAndbeverage:'], " "), h("span", { key: '7d1bccfa836df61287e077ca1eae49d239025836', innerHTML: (_3 = app_store.property) === null || _3 === void 0 ? void 0 : _3.description.food_and_beverage })))), ((_5 = (_4 = app_store.property) === null || _4 === void 0 ? void 0 : _4.allowed_cards) === null || _5 === void 0 ? void 0 : _5.length) > 0 && (h("div", { key: 'd2cbc07702bfded2c22abe85ba572db3b0fa0374', class: "flex items-center gap-4" }, h("ir-icons", { key: 'd4f4e79aefd246c8ae5fe36104d4fc0f03ca4bb7', name: "credit_card" }), h("p", { key: '55bccba94f91a347d936c033c112d5607c667b94' }, h("span", { key: '6b4b686a1a710d2fcdbf375d8810e3017d6296cd', class: "font-medium" }, localizedWords.entries.Lcz_AcceptedCreditCards, " "), (_6 = app_store.property) === null || _6 === void 0 ? void 0 :
            _6.allowed_cards.map((card, index) => {
                var _a;
                return (h("span", { key: card.id }, card.name, index < ((_a = app_store.property) === null || _a === void 0 ? void 0 : _a.allowed_cards.length) - 1 && h("span", null, " - ")));
            })))), ((_7 = app_store.property) === null || _7 === void 0 ? void 0 : _7.description.important_info) && (h("div", { key: '9217d99fd6a9c51f10e6850d1ca1045fd916a49e', class: "flex items-center gap-4" }, h("ir-icons", { key: 'f8fbaf344bdf210edd76b91d3b1fa361a691e337', name: "danger", svgClassName: "text-red-500" }), h("div", { key: '09e2ce307866c7ae243573ef36e6586cdc550e12' }, h("p", { key: 'f6f6ed785a417c0a1767932085781d77fc417246', innerHTML: (_8 = app_store.property) === null || _8 === void 0 ? void 0 : _8.description.important_info }), h("p", { key: '0f22503fa75a56bdca6dd362d9d672c6d75bc60f', innerHTML: (_9 = app_store.property) === null || _9 === void 0 ? void 0 : _9.description.non_standard_conditions })))))));
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
