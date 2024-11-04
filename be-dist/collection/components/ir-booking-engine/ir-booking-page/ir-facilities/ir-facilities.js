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
        return (h(Host, { key: '5bbf8514675f48a06bbe65f25cb7a67958c3a389' }, h("div", { key: '149f7844bd61610f3af9760ffd487906fb86c0d9', class: "facilities-container space-y-5 bg-gray-100 p-6" }, h("div", { key: 'b1293f815118b1b74b804875b0fddfc806ea7c22', class: "flex  items-center gap-4" }, h("ir-icons", { key: 'a36c27f1f1eb774b7554c2f93627cb5f6a7a8fc0', name: "clock" }), ((_a = app_store.property) === null || _a === void 0 ? void 0 : _a.time_constraints.check_in_from) && ((_b = app_store.property) === null || _b === void 0 ? void 0 : _b.time_constraints.check_in_till) && (h("p", { key: '1cef10af8f03be4e6b4de4243f3eb12dd95d226a' }, localizedWords.entries.Lcz_CheckInFromUntil.replace('%1', (_c = app_store.property) === null || _c === void 0 ? void 0 : _c.time_constraints.check_in_from).replace('%2', (_d = app_store.property) === null || _d === void 0 ? void 0 : _d.time_constraints.check_in_till))), h("p", { key: '6d961582c512b02d8aa143196ff5ee0e87054045' }, localizedWords.entries.Lcz_CheckOut, ":", (_e = app_store.property) === null || _e === void 0 ? void 0 :
            _e.time_constraints.check_out_till)), ((_f = app_store.property) === null || _f === void 0 ? void 0 : _f.internet_offering.public_internet_statement) && (h("div", { key: '43b721b11aad7291a112d02c2ef4d53e789f3dec', class: "flex items-center gap-4" }, h("ir-icons", { key: '3edc9a87e21539b7c9dc5d9ff449311dae5ceaf5', name: "wifi" }), h("p", { key: '02b478582f4b96d1eb9d5a7d072669bb6c5807b3' }, localizedWords.entries.Lcz_PublicAreas, ": ", h("span", { key: '2218764585bdefa477035de1c3e692994e6864ee', class: "text-[var(--ir-green)]" }, (_g = app_store.property) === null || _g === void 0 ? void 0 : _g.internet_offering.public_internet_statement)), ((_h = app_store.property) === null || _h === void 0 ? void 0 : _h.internet_offering.is_room_internet_free) && (h("p", { key: 'cd581ae16c64bae05ee648894e5b0a4e935c694b' }, localizedWords.entries.Lcz_Rooms, ": ", h("span", { key: 'e52addda234461775238b127269edf2a97147edd', class: "text-[var(--ir-green)]" }, localizedWords.entries.Lcz_FreeInternet))))), ((_j = app_store.property) === null || _j === void 0 ? void 0 : _j.parking_offering.title) && (h("div", { key: '7143aaf679fb128efe96bb708a759c0688b8c2d6', class: "flex items-center gap-4" }, h("ir-icons", { key: '89fed54c925c432c891dc2bb3861475332cee605', name: "car" }), h("p", { key: '2f97580bac83235787c4ae2d9adeaaf479b5a7ea' }, (_k = app_store.property) === null || _k === void 0 ? void 0 :
            _k.parking_offering.title, ' ', Number((_l = app_store.property) === null || _l === void 0 ? void 0 : _l.parking_offering.pricing) > 0 && (h("span", { key: '7a8ced9424784dbae926c9c00ddcf3340ce37102' }, localizedWords.entries.Lcz_At, " ", formatAmount((_m = app_store.property) === null || _m === void 0 ? void 0 : _m.parking_offering.pricing, app_store.userPreferences.currency_id)))))), ((_o = app_store.property) === null || _o === void 0 ? void 0 : _o.pets_acceptance.title) && (h("div", { key: 'b861a76ce28bbc455534d08afbe0402b38211502', class: "flex items-center gap-4" }, h("ir-icons", { key: '5e629814d5ebe21354e78df07db18c05759e4611', name: "pets" }), h("p", { key: 'd8ec45843da0fab48763dcf6c5c864f536b4a1fb' }, (_p = app_store.property) === null || _p === void 0 ? void 0 : _p.pets_acceptance.title))), ((_q = app_store.property) === null || _q === void 0 ? void 0 : _q.baby_cot_offering.title) && (h("div", { key: 'ca9dd6bf11b758be8304c3f2e73346ce3983fe51', class: "flex items-center gap-4" }, h("ir-icons", { key: '79c9a1ee9a416e159b90a26dd5568892d6a4ee43', name: "bed" }), h("p", { key: 'baf5c83429498494fe7df476909d635634229e62' }, (_r = app_store.property) === null || _r === void 0 ? void 0 : _r.baby_cot_offering.title))), ((_s = app_store.property) === null || _s === void 0 ? void 0 : _s.amenities.some(a => !['property', 'activity', 'service'].includes(a.amenity_type))) && (h("div", { key: '735f3cf37583fac39aeea124bcf7485434aeb72e', class: "property_amenities", "data-total": this.getTotalAmenities() }, ((_t = app_store.property) === null || _t === void 0 ? void 0 : _t.amenities.some(a => a.amenity_type === 'property')) && (h("div", { key: '0acb1ad4ddca27cb9e6df828209452c54e277e86', class: "flex gap-4 " }, h("ir-icons", { key: '5ff017bc1727e2c9e39d162f8a8d02bb0b914076', name: "home" }), h("ul", { key: 'fb8b9d3967ae654c46bd3f62c0da28c2d9d093d9' }, h("li", { key: 'd2659a17b72d542b1ba6662914a5677404a61841', class: "text-start font-medium" }, localizedWords.entries.Lcz_PropertyFacilities), (_u = app_store.property) === null || _u === void 0 ? void 0 :
            _u.amenities.map(aminity => {
                if (aminity.amenity_type !== 'property') {
                    return null;
                }
                return (h("li", { key: aminity.code, class: "text-start" }, aminity.description));
            })))), ((_v = app_store.property) === null || _v === void 0 ? void 0 : _v.amenities.some(a => a.amenity_type === 'activity')) && (h("div", { key: '4db62487c0c1ed9aac2e38569e0dd50a7cf7e1ea', class: "flex gap-4" }, h("ir-icons", { key: '0a4735b13c455862dfbb6ba8371a6b9946972b10', name: "football" }), h("ul", { key: '59d5dce48901f0e7c50d4743861e85a921d28a9b' }, h("li", { key: '239072dd437e8da5c73abb96335b004ddbae9d66', class: "text-start font-medium" }, localizedWords.entries.Lcz_Activities), (_w = app_store.property) === null || _w === void 0 ? void 0 :
            _w.amenities.map(aminity => {
                if (aminity.amenity_type !== 'activity') {
                    return null;
                }
                return (h("li", { class: "text-start", key: aminity.code }, aminity.description));
            })))), ((_x = app_store.property) === null || _x === void 0 ? void 0 : _x.amenities.some(a => a.amenity_type === 'service')) && (h("div", { key: 'e506e76f8ce1a03c26ada92a2cc61360b8a72e33', class: "flex gap-4 " }, h("ir-icons", { key: 'a6e21951e22bded8b80f5166af2315b21577224e', name: "bell" }), h("ul", { key: '154e610b82287625d85734c8ad31c27c37fd4911' }, h("li", { key: '604569ad154abfd712e7db43deac061a8a7343cc', class: "text-start font-medium" }, localizedWords.entries.Lcz_Services), (_y = app_store.property) === null || _y === void 0 ? void 0 :
            _y.amenities.map(aminity => {
                if (aminity.amenity_type !== 'service') {
                    return null;
                }
                return (h("li", { class: "text-start", key: aminity.code }, aminity.description));
            })))))), ((_z = app_store.property) === null || _z === void 0 ? void 0 : _z.description.food_and_beverage) && (h("div", { key: '405b432787f9aebd9051db77690230d5f2901e38', class: "flex items-center gap-4" }, h("ir-icons", { key: 'f7bcb18debd750762c3085a083cefc28b44ad950', name: "utencils" }), h("p", { key: 'd45cfc6bfefa426681b13a505fa034fc0c7761b9' }, h("span", { key: 'f064627451316260682ae543360c2d2239fec9d3', class: "font-medium" }, localizedWords.entries['Lcz_FoodAndbeverage:'], " "), h("span", { key: '573ca2ba138af3828b86e3ff1fc7c838d1f6783c', innerHTML: (_0 = app_store.property) === null || _0 === void 0 ? void 0 : _0.description.food_and_beverage })))), ((_2 = (_1 = app_store.property) === null || _1 === void 0 ? void 0 : _1.allowed_cards) === null || _2 === void 0 ? void 0 : _2.length) > 0 && (h("div", { key: '86e104bd868f0f41939c94d6cd0a77506c0ff3be', class: "flex items-center gap-4" }, h("ir-icons", { key: '3923713c2207abe893a85a45df3e21765918eeb2', name: "credit_card" }), h("p", { key: '6cb132b2e44a3ffb914d7fb1c9ce61cf6d753285' }, h("span", { key: '1fe5709cca4dae5fef69f92f89c376185deef5da', class: "font-medium" }, localizedWords.entries.Lcz_AcceptedCreditCards, " "), (_3 = app_store.property) === null || _3 === void 0 ? void 0 :
            _3.allowed_cards.map((card, index) => {
                var _a;
                return (h("span", { key: card.id }, card.name, index < ((_a = app_store.property) === null || _a === void 0 ? void 0 : _a.allowed_cards.length) - 1 && h("span", null, " - ")));
            })))), ((_4 = app_store.property) === null || _4 === void 0 ? void 0 : _4.description.important_info) && (h("div", { key: 'bc2d22a9be4775a0b985e81918e23b11264e9f3d', class: "flex items-center gap-4" }, h("ir-icons", { key: '12cb1036be4ca2ae57e294259f03aa6abc1a1311', name: "danger", svgClassName: "text-red-500" }), h("div", { key: 'ba7d875a3c38ddc2a2d9b4b744faa0eea5ac4cf5' }, h("p", { key: '6ecef9924996f3af80c9bb21bbba511ebb4f90ce', innerHTML: (_5 = app_store.property) === null || _5 === void 0 ? void 0 : _5.description.important_info }), h("p", { key: '82bd06d58026470afdc27b414aabb565367fc865', innerHTML: (_6 = app_store.property) === null || _6 === void 0 ? void 0 : _6.description.non_standard_conditions })))))));
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
