import app_store from "../../../../stores/app.store";
import { formatAmount } from "../../../../utils/utils";
import { Host, h } from "@stencil/core";
export class IrFacilities {
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        return (h(Host, { key: '9d6577f0192f900c5c43ba0c6d743d2983bfedf2' }, h("div", { key: 'ae759c34deb983704b12032c30e075a12d9833fa', class: "bg-gray-100 rounded-md p-4 space-y-5" }, h("div", { key: '4024e741cfb0aeeccb9f7349fc188865f905a938', class: "flex  items-center gap-4" }, h("ir-icons", { key: '89c62b30ed96adb4347657b0baf3c9ccea9dc579', name: "clock" }), h("p", { key: 'fc51a961a58f8cc60480835397f1d8310dc5e2e5' }, "Check-in: from ", (_a = app_store.property) === null || _a === void 0 ? void 0 :
            _a.time_constraints.check_in_from, " until ", (_b = app_store.property) === null || _b === void 0 ? void 0 :
            _b.time_constraints.check_in_till), h("p", { key: '7f58171540b9edbeb3cb2f90fd097460e5a50e2e' }, "Check-out:", (_c = app_store.property) === null || _c === void 0 ? void 0 :
            _c.time_constraints.check_out_till)), h("div", { key: '5aa41e006ff3246b63faa186d932e8326a413185', class: "flex items-center gap-4" }, h("ir-icons", { key: 'be85e19bf7bdbcc1af94aaf7ed1ebf29afdd971d', name: "wifi" }), h("p", { key: '2d833951e036c6ff8aabdb385c15fd8023c3f064' }, "Public areas: ", h("span", { key: '2353fbf29e4c1803f1fdd6ebca5f26be177c9691', class: "text-green-500" }, (_d = app_store.property) === null || _d === void 0 ? void 0 : _d.internet_offering.public_internet_statement)), h("p", { key: '5186bcaad5988843eae4a3abcfbb77fc99394ac5' }, "Rooms: ", h("span", { key: '5f2f1ffe538cf661ebaace87092382dbad8ac824', class: "text-green-500" }, ((_e = app_store.property) === null || _e === void 0 ? void 0 : _e.internet_offering.is_room_internet_free) ? 'Free Internet' : 'Paid Internet'))), h("div", { key: '86d79054ec07cd383710ecbde37cdfac5cc3ac21', class: "flex items-center gap-4" }, h("ir-icons", { key: '25933c4003b0e80ffc1ea2f7bd1d65816c32e4b7', name: "car" }), h("p", { key: '93872360b8707023936946b963c547b00c5f5c04' }, (_f = app_store.property) === null || _f === void 0 ? void 0 :
            _f.parking_offering.title, " at ", formatAmount((_g = app_store.property) === null || _g === void 0 ? void 0 : _g.parking_offering.pricing, app_store.userPreferences.currency_id))), h("div", { key: '50f7e89ce515333267f9de002992dfbf881e157b', class: "flex items-center gap-4" }, h("ir-icons", { key: '7db6151e24ddbb604203431dff7f29c1dfa2eff5', name: "pets" }), h("p", { key: '8df28342df29c7d24bef1589a594bb88c48cc4b7' }, (_h = app_store.property) === null || _h === void 0 ? void 0 : _h.pets_acceptance.title)), h("div", { key: 'f5894f7ee359abf5827c71def2e89cc2490dfaa6', class: "flex items-center gap-4" }, h("ir-icons", { key: '2838fc1d2a53321649b8be553dcc924d409048a4', name: "bed" }), h("p", { key: '572af4be3cdf2b7c7ee17742f3157ef0e7d852e1' }, (_j = app_store.property) === null || _j === void 0 ? void 0 : _j.baby_cot_offering.title)), h("div", { key: 'a1fb92d098efa976c31e664245b8245ac365c8dd', class: "flex flex-col gap-4 flex-wrap md:flex-row md:items-start md:justify-between md:gap-8 lg:gap-10" }, h("div", { key: 'a6e137ebfb3cb41b7d0ecd50756098c90916575d', class: "flex gap-4 " }, h("ir-icons", { key: '376f761ac164ad5ed0a22c5eeb98c8964bdbb1d8', name: "home" }), h("ul", { key: 'd6c0c2409d659b75c83e3c2b5614ac999c0e2ded' }, h("li", { key: '386eb34bd95292b21fa8462091a763d0014d9d65', class: "font-medium" }, "Property facilies"), (_k = app_store.property) === null || _k === void 0 ? void 0 :
            _k.amenities.map(aminity => {
                if (aminity.amenity_type !== 'property') {
                    return null;
                }
                return h("li", { key: aminity.code }, aminity.description);
            }))), h("div", { key: 'b1f31365b19ba050aa13bf65517a0f1658612ed3', class: "flex gap-4" }, h("ir-icons", { key: '5866741dd22d7be665dda8e9c90c6932ea0d12c1', name: "football" }), h("ul", { key: '8dcdba7802dac1e1cfb67616bfc247422d18a544' }, h("li", { key: 'ef3209d1c8db5e74458379148e9eb542eb904c33', class: "font-medium" }, "Activities"), (_l = app_store.property) === null || _l === void 0 ? void 0 :
            _l.amenities.map(aminity => {
                if (aminity.amenity_type !== 'activity') {
                    return null;
                }
                return h("li", { key: aminity.code }, aminity.description);
            }))), h("div", { key: '6904141be0d47555e665e83d18d8bc3b3b4e8f84', class: "flex gap-4 " }, h("ir-icons", { key: '6551a69bfd59c7d42ab820fe8edaa27375d8bfce', name: "bell" }), h("ul", { key: '3baadbc0bf02ff6d4e1a100d3a603d3eee47762d' }, h("li", { key: 'd11aad7a495f6d48ddd08d2086afc067b71f5ecb', class: "font-medium" }, "Services"), (_m = app_store.property) === null || _m === void 0 ? void 0 :
            _m.amenities.map(aminity => {
                if (aminity.amenity_type !== 'service') {
                    return null;
                }
                return h("li", { key: aminity.code }, aminity.description);
            })))), h("div", { key: '80e35f433794c22e97d5f15d8a08f99bf199b37c', class: "flex items-center gap-4" }, h("ir-icons", { key: '495c03c0fe15bb2a91a1cf3986077830d972bc27', name: "utencils" }), h("p", { key: 'b830caf84cf48fc7d03582f0c54dcdd0e0581244' }, h("span", { key: 'd21a9cb8fab6d373ec90b0288bc2efdd64bfdccc', class: "font-medium" }, "Food and beverage: "), (_o = app_store.property) === null || _o === void 0 ? void 0 :
            _o.description.food_and_beverage)), h("div", { key: '5a630aafe449afa3b89943e413f000703646b8e3', class: "flex items-center gap-4" }, h("ir-icons", { key: '7c003a06bdf89f4a3d1a860ab74d4795475d9407', name: "credit_card" }), h("p", { key: 'a191fc5bbf8615efbaf5073d681c00334df8436f' }, h("span", { key: 'bab301a784d032c8a708fff3f33a5255e18028b8', class: "font-medium" }, "Accepted credit cards at the property: "), (_p = app_store.property) === null || _p === void 0 ? void 0 :
            _p.allowed_cards.map((card, index) => {
                var _a;
                return (h("span", { key: card.id }, card.name, index < ((_a = app_store.property) === null || _a === void 0 ? void 0 : _a.allowed_cards.length) - 1 && h("span", null, " - ")));
            }))), ((_q = app_store.property) === null || _q === void 0 ? void 0 : _q.description.important_info) && (h("div", { class: "flex items-center gap-4" }, h("ir-icons", { name: "danger", svgClassName: "text-red-500" }), h("div", null, h("p", null, (_r = app_store.property) === null || _r === void 0 ? void 0 : _r.description.important_info), h("p", null, (_s = app_store.property) === null || _s === void 0 ? void 0 : _s.description.non_standard_conditions)))))));
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
