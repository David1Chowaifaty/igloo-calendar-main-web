import app_store from "../../../../stores/app.store";
import { formatAmount } from "../../../../utils/utils";
import { Host, h } from "@stencil/core";
export class IrFacilities {
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        return (h(Host, { key: 'f47fa55cc468e6e06edbada67cdce13ff7040db1' }, h("div", { key: 'a2073e718026d7ed6d06753f2eab7ce5ca0a33c3', class: "space-y-5 rounded-md bg-gray-100 p-4" }, h("div", { key: 'e9aed2824b9ffce13596bf3d2ebfe4b70fd94375', class: "flex  items-center gap-4" }, h("ir-icons", { key: '3148dcfbaa271327b2505ca99337e230739513fe', name: "clock" }), h("p", { key: 'dbf8cbeb586efba151fcc2c312dcbf20b75a3a9d' }, "Check-in: from ", (_a = app_store.property) === null || _a === void 0 ? void 0 :
            _a.time_constraints.check_in_from, " until ", (_b = app_store.property) === null || _b === void 0 ? void 0 :
            _b.time_constraints.check_in_till), h("p", { key: '79362fe5e761760b7fcc34d18a3d1734cff40edf' }, "Check-out:", (_c = app_store.property) === null || _c === void 0 ? void 0 :
            _c.time_constraints.check_out_till)), h("div", { key: 'c5167e0351cb6c3288241f5ebde9f1144d0cb451', class: "flex items-center gap-4" }, h("ir-icons", { key: '2868890a48d96d065adc4256bf7dbd79d8984169', name: "wifi" }), h("p", { key: '373cb00b33952ce57ec7f4b5f2a2695a2063d7bf' }, "Public areas: ", h("span", { key: 'd2f9ae2a20913749f131fac2725dd70190dcaaaa', class: "text-green-500" }, (_d = app_store.property) === null || _d === void 0 ? void 0 : _d.internet_offering.public_internet_statement)), h("p", { key: 'dfd0e860938a47b63918d7e4c5f24b80bf0516ce' }, "Rooms: ", h("span", { key: '4f3fc80279f4f7524be7c0ef08915467906dc75b', class: "text-green-500" }, ((_e = app_store.property) === null || _e === void 0 ? void 0 : _e.internet_offering.is_room_internet_free) ? 'Free Internet' : 'Paid Internet'))), h("div", { key: '54786a162911dc62bf7ac8c148e77ae9dc542087', class: "flex items-center gap-4" }, h("ir-icons", { key: 'a32cd75383d501f53725260f20f118ebeb05a1a1', name: "car" }), h("p", { key: '01f2d9fe1858574a748dac3ddbfc0e0a82062973' }, (_f = app_store.property) === null || _f === void 0 ? void 0 :
            _f.parking_offering.title, " at ", formatAmount((_g = app_store.property) === null || _g === void 0 ? void 0 : _g.parking_offering.pricing, app_store.userPreferences.currency_id))), h("div", { key: '3878b23ef7a423bed1fdd896b8d4dbc75cdb6342', class: "flex items-center gap-4" }, h("ir-icons", { key: '389e41ded1c56a16cbfd9942c528e06147fcf71e', name: "pets" }), h("p", { key: '6e7347b8211fb4092ca3ebb4ae57f3508022db3d' }, (_h = app_store.property) === null || _h === void 0 ? void 0 : _h.pets_acceptance.title)), h("div", { key: '2446a21ae0fdb26db3292b705275e7afb41d58ea', class: "flex items-center gap-4" }, h("ir-icons", { key: '1552037bdb6fca8f333dc6f75e67d1e5f02ec251', name: "bed" }), h("p", { key: '34849c44a69455e3f153122593505d31e07ac0c3' }, (_j = app_store.property) === null || _j === void 0 ? void 0 : _j.baby_cot_offering.title)), h("div", { key: 'ea2eda2200668ac524d2d9d32941c2e48c0cc6fe', class: "flex flex-col flex-wrap gap-4 md:flex-row md:items-start md:justify-between md:gap-8 lg:gap-10" }, h("div", { key: 'b4c375366605f0025cb9b57646c31d33236fdb29', class: "flex gap-4 " }, h("ir-icons", { key: '12ea0413f2ff015ef8e28e5063c6c84a0adc20b3', name: "home" }), h("ul", { key: '04d585b349594b286d4ea48823b565fde3ab0ee7' }, h("li", { key: 'c896fa93a67ecfda780603bf72083b39ea076dbc', class: "font-medium" }, "Property facilies"), (_k = app_store.property) === null || _k === void 0 ? void 0 :
            _k.amenities.map(aminity => {
                if (aminity.amenity_type !== 'property') {
                    return null;
                }
                return h("li", { key: aminity.code }, aminity.description);
            }))), h("div", { key: 'cebe5f4fff1cd03f2248f954ceef22f5b9ac9e64', class: "flex gap-4" }, h("ir-icons", { key: '0cc954401a30645998492b2fe5e57ed18e1b6fe6', name: "football" }), h("ul", { key: '568a0fbb42d328bdc296498fa608c462195bde22' }, h("li", { key: 'daddff807911099be7e9627135b744c06b663f7b', class: "font-medium" }, "Activities"), (_l = app_store.property) === null || _l === void 0 ? void 0 :
            _l.amenities.map(aminity => {
                if (aminity.amenity_type !== 'activity') {
                    return null;
                }
                return h("li", { key: aminity.code }, aminity.description);
            }))), h("div", { key: '172ac8f3944fe8ee9209e1c52dd459eeaa3fbcfe', class: "flex gap-4 " }, h("ir-icons", { key: '1e84649be87bf4ad87ed1f871c162879e6cbeacd', name: "bell" }), h("ul", { key: 'd53f478fec591205526463be4c0f2b1674bce629' }, h("li", { key: 'baefc2fca86cc86b874901eb5dbbe7f2ae23e146', class: "font-medium" }, "Services"), (_m = app_store.property) === null || _m === void 0 ? void 0 :
            _m.amenities.map(aminity => {
                if (aminity.amenity_type !== 'service') {
                    return null;
                }
                return h("li", { key: aminity.code }, aminity.description);
            })))), h("div", { key: '35495aaab51ceac7785626993a3cdeb3233c97cd', class: "flex items-center gap-4" }, h("ir-icons", { key: '27317fc4d9f5316e69779408916964babe688be6', name: "utencils" }), h("p", { key: '27c55eda61a273d26e3ac2fdb073e1f68b579c14' }, h("span", { key: '3bde5a230f4a18c0b39f87198b5cc0ffaf1af31f', class: "font-medium" }, "Food and beverage: "), (_o = app_store.property) === null || _o === void 0 ? void 0 :
            _o.description.food_and_beverage)), h("div", { key: 'b2458935dd3c369ad52c1d1a09b1ae5cd6fb84f0', class: "flex items-center gap-4" }, h("ir-icons", { key: '6b0fc795c8a8bf9a5b7e7bb8703b489e1bd4d28f', name: "credit_card" }), h("p", { key: 'd6c00de0aa98c9739a03b28055151af1b504bbc6' }, h("span", { key: '41b5c35d07c53829840847b51260cfaab54af5d0', class: "font-medium" }, "Accepted credit cards at the property: "), (_p = app_store.property) === null || _p === void 0 ? void 0 :
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
