import app_store from "../../../../stores/app.store";
import localizedWords from "../../../../stores/localization.store";
import { formatAmount } from "../../../../utils/utils";
import { Host, h } from "@stencil/core";
export class IrFacilities {
    getTotalAmenities() {
        var _a, _b;
        const set = new Set();
        (_b = (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.amenities) === null || _b === void 0 ? void 0 : _b.forEach(a => {
            console.log(a.amenity_type);
            if (a.amenity_type !== 'room') {
                set.add(a.amenity_type);
            }
        });
        return set.size;
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6;
        return (h(Host, { key: '12fc966fc1e8b55f61be272ba23a9ccf46a9ff4d' }, h("div", { key: 'd2a3b9bbbf46e0b41123a84c7ee23f19d25dc9b6', class: "facilities-container space-y-5 bg-gray-100 p-6" }, h("div", { key: '4ed73cda962c981b6ae9da0a0fd90d1ff141e7c5', class: "flex  items-center gap-4" }, h("ir-icons", { key: '971b227b2093b234665bef8617667268230b0af8', name: "clock" }), ((_a = app_store.property) === null || _a === void 0 ? void 0 : _a.time_constraints.check_in_from) && ((_b = app_store.property) === null || _b === void 0 ? void 0 : _b.time_constraints.check_in_till) && (h("p", { key: 'a4844774019b0a5de0ac289f1a853990de92a777' }, localizedWords.entries.Lcz_CheckInFromUntil.replace('%1', (_c = app_store.property) === null || _c === void 0 ? void 0 : _c.time_constraints.check_in_from).replace('%2', (_d = app_store.property) === null || _d === void 0 ? void 0 : _d.time_constraints.check_in_till))), h("p", { key: '525dd66f25b8c7b0e16a26821c94470079972237' }, localizedWords.entries.Lcz_CheckOut, ":", (_e = app_store.property) === null || _e === void 0 ? void 0 :
            _e.time_constraints.check_out_till)), ((_f = app_store.property) === null || _f === void 0 ? void 0 : _f.internet_offering.public_internet_statement) && (h("div", { key: '75bc8cc21620c6beda0ba2cc0218a981775f1fc0', class: "flex items-center gap-4" }, h("ir-icons", { key: 'f8727f6d1711f641df8a764e5d1bb76f15ad3af4', name: "wifi" }), h("p", { key: '7a5aa9d0339dda7bfa5cd3b071a8b229c8c8f51e' }, localizedWords.entries.Lcz_PublicAreas, ": ", h("span", { key: '5d50a069c380d8bcbcb54fccc754ac9bb192d058', class: "text-[var(--ir-green)]" }, (_g = app_store.property) === null || _g === void 0 ? void 0 : _g.internet_offering.public_internet_statement)), ((_h = app_store.property) === null || _h === void 0 ? void 0 : _h.internet_offering.is_room_internet_free) && (h("p", { key: '9354c54eb0c82673cb6f72108d1c2c90b6fde4e8' }, localizedWords.entries.Lcz_Rooms, ": ", h("span", { key: 'cc7b598c6d67488962e1f8d89c155b921127688e', class: "text-[var(--ir-green)]" }, localizedWords.entries.Lcz_FreeInternet))))), ((_j = app_store.property) === null || _j === void 0 ? void 0 : _j.parking_offering.title) && (h("div", { key: 'a2ff88164fe252b31056f2d0976f3c5bfb61d85e', class: "flex items-center gap-4" }, h("ir-icons", { key: 'f664ecb81f03e7ade0a4d6bdadf06f162e54475a', name: "car" }), h("p", { key: '7b3112503e12013691980aff90f6915b30106c85' }, (_k = app_store.property) === null || _k === void 0 ? void 0 :
            _k.parking_offering.title, ' ', Number((_l = app_store.property) === null || _l === void 0 ? void 0 : _l.parking_offering.pricing) > 0 && (h("span", { key: '28e3f0be8b2c58cff3b2404fe537ceac5910a167' }, localizedWords.entries.Lcz_At, " ", formatAmount((_m = app_store.property) === null || _m === void 0 ? void 0 : _m.parking_offering.pricing, app_store.userPreferences.currency_id)))))), ((_o = app_store.property) === null || _o === void 0 ? void 0 : _o.pets_acceptance.title) && (h("div", { key: 'ab25f2166165ead34481c5b4503f65296d660632', class: "flex items-center gap-4" }, h("ir-icons", { key: '0652339318e423f63263693dd6d11b3f2d06a170', name: "pets" }), h("p", { key: '8a759087de277535a08f68670c0ff8c7ebe4fa74' }, (_p = app_store.property) === null || _p === void 0 ? void 0 : _p.pets_acceptance.title))), ((_q = app_store.property) === null || _q === void 0 ? void 0 : _q.baby_cot_offering.title) && (h("div", { key: 'b486db12f2d7f7c010b238f84a05b2fe61063592', class: "flex items-center gap-4" }, h("ir-icons", { key: '42947b50a4ba4f959f881629faa68cc0615d6842', name: "bed" }), h("p", { key: '670c7ac9145d330426c6ebc17bd3d568990cad0b' }, (_r = app_store.property) === null || _r === void 0 ? void 0 : _r.baby_cot_offering.title))), ((_s = app_store.property) === null || _s === void 0 ? void 0 : _s.amenities.some(a => !['property', 'activity', 'service'].includes(a.amenity_type))) && (h("div", { key: 'd91a10423efa945cbfca7c88bf50c265ab4fa09b', class: "property_amenities", "data-total": this.getTotalAmenities() }, ((_t = app_store.property) === null || _t === void 0 ? void 0 : _t.amenities.some(a => a.amenity_type === 'property')) && (h("div", { key: 'cafafc601c903ac3497881a78fab5b855c864094', class: "flex gap-4 " }, h("ir-icons", { key: 'c89de94b1d59caaf559674d26f530d372ea82a72', name: "home" }), h("ul", { key: '2b51d63496a1ddd6412e8cd6a6b5f393af2a5876' }, h("li", { key: 'f253a92fb831845da668614484cabb238fab51f8', class: "text-start font-medium" }, localizedWords.entries.Lcz_PropertyFacilities), (_u = app_store.property) === null || _u === void 0 ? void 0 :
            _u.amenities.map(aminity => {
                if (aminity.amenity_type !== 'property') {
                    return null;
                }
                return (h("li", { key: aminity.code, class: "text-start" }, aminity.description));
            })))), ((_v = app_store.property) === null || _v === void 0 ? void 0 : _v.amenities.some(a => a.amenity_type === 'activity')) && (h("div", { key: '861a416bd588712d1619988dae8f47c22e6d289d', class: "flex gap-4" }, h("ir-icons", { key: 'cbb62d33b5b7858930cb88dd94b518c9941b4766', name: "football" }), h("ul", { key: '2d76e473c6afb0746542956d5c3a03d612536574' }, h("li", { key: '6820004ce0854c93913f9e8acc1b41a8c7fd4c87', class: "text-start font-medium" }, localizedWords.entries.Lcz_Activities), (_w = app_store.property) === null || _w === void 0 ? void 0 :
            _w.amenities.map(aminity => {
                if (aminity.amenity_type !== 'activity') {
                    return null;
                }
                return (h("li", { class: "text-start", key: aminity.code }, aminity.description));
            })))), ((_x = app_store.property) === null || _x === void 0 ? void 0 : _x.amenities.some(a => a.amenity_type === 'service')) && (h("div", { key: '856bd56d5d3def34b1b1e36e8c86e69503a55f7e', class: "flex gap-4 " }, h("ir-icons", { key: '3d47bf30b6c24a69100047b03090927c3b48bbe5', name: "bell" }), h("ul", { key: '3371a6d3e88af11bbf93f5daa91e4993b6345ca3' }, h("li", { key: '2cbf24e7162eaa51c23e6d938628c13b75ce1bb1', class: "text-start font-medium" }, localizedWords.entries.Lcz_Services), (_y = app_store.property) === null || _y === void 0 ? void 0 :
            _y.amenities.map(aminity => {
                if (aminity.amenity_type !== 'service') {
                    return null;
                }
                return (h("li", { class: "text-start", key: aminity.code }, aminity.description));
            })))))), ((_z = app_store.property) === null || _z === void 0 ? void 0 : _z.description.food_and_beverage) && (h("div", { key: 'a05299634125532501ac3cc4dca967a413a81ee3', class: "flex items-center gap-4" }, h("ir-icons", { key: 'c993a9d33456e642168a1cca0af8236c1a948cf0', name: "utencils" }), h("p", { key: '634f5d62359794f039a217f9f8d7c9319cad0cc2' }, h("span", { key: '47305919be653bf6b4f086c762fe6bef7a36e381', class: "font-medium" }, localizedWords.entries['Lcz_FoodAndbeverage:'], " "), h("span", { key: '475d3854f07111ec84923a33f08d7f7601ad0aca', innerHTML: (_0 = app_store.property) === null || _0 === void 0 ? void 0 : _0.description.food_and_beverage })))), ((_2 = (_1 = app_store.property) === null || _1 === void 0 ? void 0 : _1.allowed_cards) === null || _2 === void 0 ? void 0 : _2.length) > 0 && (h("div", { key: '31ea99e34bf422fcbe28583116da024f5b6dc016', class: "flex items-center gap-4" }, h("ir-icons", { key: 'df18e763d188d77ed8ea70629586487a84fe362e', name: "credit_card" }), h("p", { key: '2dd1876c401c3cecb6e94a0d14461a6477e6206a' }, h("span", { key: 'c33d4afcc38097a3f83d24295e7c63fb413b0856', class: "font-medium" }, localizedWords.entries.Lcz_AcceptedCreditCards, " "), (_3 = app_store.property) === null || _3 === void 0 ? void 0 :
            _3.allowed_cards.map((card, index) => {
                var _a;
                return (h("span", { key: card.id }, card.name, index < ((_a = app_store.property) === null || _a === void 0 ? void 0 : _a.allowed_cards.length) - 1 && h("span", null, " - ")));
            })))), ((_4 = app_store.property) === null || _4 === void 0 ? void 0 : _4.description.important_info) && (h("div", { key: '732d15158c94ed4421b9eda9c1610d69524812f8', class: "flex items-center gap-4" }, h("ir-icons", { key: '6363641ff6d6d46e75003206024b9e3f3b5bb6f6', name: "danger", svgClassName: "text-red-500" }), h("div", { key: '219cd720ab833ee9177cc72408888a472acdc14a' }, h("p", { key: 'db2bf8471299c5408e4e95fcc9164e30baf5b4e8', innerHTML: (_5 = app_store.property) === null || _5 === void 0 ? void 0 : _5.description.important_info }), h("p", { key: '4397094203a1ea9cfc49be9bc46465110df0792a', innerHTML: (_6 = app_store.property) === null || _6 === void 0 ? void 0 : _6.description.non_standard_conditions })))))));
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
