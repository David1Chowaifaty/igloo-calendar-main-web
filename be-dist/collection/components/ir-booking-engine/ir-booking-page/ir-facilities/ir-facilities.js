import app_store from "../../../../stores/app.store";
import { formatAmount } from "../../../../utils/utils";
import { Host, h } from "@stencil/core";
export class IrFacilities {
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        return (h(Host, { key: '62ebf6fce84ed0a0cd52988cc915273ec13f35e3' }, h("div", { key: '96ccd2d949488772f0d07891e68ded2c31e76693', class: "space-y-5 rounded-md bg-gray-100 p-6" }, h("div", { key: '74490fa7cbb83b3a88aa92ca8d9154144cad624a', class: "flex  items-center gap-4" }, h("ir-icons", { key: '4e07f5535719fe15c2a7137863b53ce1f6997f59', name: "clock" }), h("p", { key: '89df85a798f44d9e749d07b85178fe66ac004ea0' }, "Check-in: from ", (_a = app_store.property) === null || _a === void 0 ? void 0 :
            _a.time_constraints.check_in_from, " until ", (_b = app_store.property) === null || _b === void 0 ? void 0 :
            _b.time_constraints.check_in_till), h("p", { key: '516b4fac495202df00fb406124f55ca206076f5f' }, "Check-out:", (_c = app_store.property) === null || _c === void 0 ? void 0 :
            _c.time_constraints.check_out_till)), h("div", { key: 'bd8acc615e311c7e0fbe8dc327de53503f393138', class: "flex items-center gap-4" }, h("ir-icons", { key: '811b3f7e62bd866d35ee4cd7fd426963976b67c0', name: "wifi" }), h("p", { key: 'a11568c2a045cc238b24209cea05861586f7864f' }, "Public areas: ", h("span", { key: '09761b9cccabf563e6e20746ae3e2dcfa56e6f0b', class: "text-green-500" }, (_d = app_store.property) === null || _d === void 0 ? void 0 : _d.internet_offering.public_internet_statement)), h("p", { key: '7e23332c5a80a81e78ec193781ca3868aae543af' }, "Rooms: ", h("span", { key: 'e9edb67461998848486f78534d020d8cb32ede68', class: "text-green-500" }, ((_e = app_store.property) === null || _e === void 0 ? void 0 : _e.internet_offering.is_room_internet_free) ? 'Free Internet' : 'Paid Internet'))), h("div", { key: '2b0d3be3e0dc16e1bf3c6bd4841df22b05433e45', class: "flex items-center gap-4" }, h("ir-icons", { key: '83e6fba97960a953f8783c3ba71efed51db7b6a3', name: "car" }), h("p", { key: 'bc9ddf4adcf1e6c9ed4724e599b529027471a7d3' }, (_f = app_store.property) === null || _f === void 0 ? void 0 :
            _f.parking_offering.title, " at ", formatAmount((_g = app_store.property) === null || _g === void 0 ? void 0 : _g.parking_offering.pricing, app_store.userPreferences.currency_id))), h("div", { key: '9bb2145527d4e658f5ee57150b4748285cf31c91', class: "flex items-center gap-4" }, h("ir-icons", { key: 'd7bd07ac7c5064bb51aa85d01e481231f2c37492', name: "pets" }), h("p", { key: 'e98ff2b2e6815805fb0b84b1795c7c2e64009ec5' }, (_h = app_store.property) === null || _h === void 0 ? void 0 : _h.pets_acceptance.title)), h("div", { key: 'c56b5cf722d49af15cf13162a544893316976831', class: "flex items-center gap-4" }, h("ir-icons", { key: '0da5f955ffe9e70b049a133255fb310fb14418a6', name: "bed" }), h("p", { key: 'a719f4ea01da398d1e746b66fc329ce21d5d433e' }, (_j = app_store.property) === null || _j === void 0 ? void 0 : _j.baby_cot_offering.title)), h("div", { key: '2c465c7284fd1fedfe56738bc81aa1f19f351483', class: "flex flex-col flex-wrap gap-4 md:flex-row md:items-start md:justify-between md:gap-8 lg:gap-10" }, h("div", { key: 'b035f3248f7b857ba46e95ad410507fef46bccfe', class: "flex gap-4 " }, h("ir-icons", { key: 'ef6a4b378113a9fbeb46fcf9ab0ee3889c38e409', name: "home" }), h("ul", { key: 'b29732b133a3c19dd256c9ec2eefa43f7881a558' }, h("li", { key: '7e53e382e15917e77e330f6204460084f1653e70', class: "font-medium" }, "Property facilies"), (_k = app_store.property) === null || _k === void 0 ? void 0 :
            _k.amenities.map(aminity => {
                if (aminity.amenity_type !== 'property') {
                    return null;
                }
                return h("li", { key: aminity.code }, aminity.description);
            }))), h("div", { key: '934c281954fb9ba8f448000f7b355804f819b73e', class: "flex gap-4" }, h("ir-icons", { key: '84a58a2106a32b655c0f72efd38a0e26c0f438de', name: "football" }), h("ul", { key: 'af4e4ef4b9faa8819e553eeb62b301f5ae386b11' }, h("li", { key: '67be5956f0fa93b9566d81e2647142e9231c91b9', class: "font-medium" }, "Activities"), (_l = app_store.property) === null || _l === void 0 ? void 0 :
            _l.amenities.map(aminity => {
                if (aminity.amenity_type !== 'activity') {
                    return null;
                }
                return h("li", { key: aminity.code }, aminity.description);
            }))), h("div", { key: '3e8f9229c0758e00424fdff5c7e5d921543cb951', class: "flex gap-4 " }, h("ir-icons", { key: '20e608e6f54621a5f2e2faa60a945868d3f04b9e', name: "bell" }), h("ul", { key: '48e5827dac366c05141c13e32f429284dc33c3c3' }, h("li", { key: '3cb2a1e247ba49732ae3b1ab64f11359e0452809', class: "font-medium" }, "Services"), (_m = app_store.property) === null || _m === void 0 ? void 0 :
            _m.amenities.map(aminity => {
                if (aminity.amenity_type !== 'service') {
                    return null;
                }
                return h("li", { key: aminity.code }, aminity.description);
            })))), ((_o = app_store.property) === null || _o === void 0 ? void 0 : _o.description.food_and_beverage) && (h("div", { class: "flex items-center gap-4" }, h("ir-icons", { name: "utencils" }), h("p", null, h("span", { class: "font-medium" }, "Food and beverage: "), (_p = app_store.property) === null || _p === void 0 ? void 0 :
            _p.description.food_and_beverage))), h("div", { key: 'a6ca2436c03e8692aaa0b390373fe4d236651f3c', class: "flex items-center gap-4" }, h("ir-icons", { key: 'a8c37a68325c6d674c2f8ee6bdb8999d5f5d4b04', name: "credit_card" }), h("p", { key: 'a8ef8afe2d76e33419e5f713cbe9e507c9ef0a9d' }, h("span", { key: '57af30e2933d159da2aa8929ef89ae245c194a86', class: "font-medium" }, "Accepted credit cards at the property: "), (_q = app_store.property) === null || _q === void 0 ? void 0 :
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
