import app_store from "../../../../stores/app.store";
import { formatAmount } from "../../../../utils/utils";
import { Host, h } from "@stencil/core";
export class IrFacilities {
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        return (h(Host, { key: 'b53f80739bf28b3d747f7a7b756f014371ec855f' }, h("div", { key: 'f1664c2719ea294577e875e88c4bebd6b1904e9d', class: "space-y-5 rounded-md bg-gray-100 p-6" }, h("div", { key: 'e7716937c730e05e3b9842879ae079f5b59144d4', class: "flex  items-center gap-4" }, h("ir-icons", { key: '2eb81a6e93727174e84bafbb673154c4ae140161', name: "clock" }), h("p", { key: '918cb1e0e0414a8245233bc729495e82b018fda1' }, "Check-in: from ", (_a = app_store.property) === null || _a === void 0 ? void 0 :
            _a.time_constraints.check_in_from, " until ", (_b = app_store.property) === null || _b === void 0 ? void 0 :
            _b.time_constraints.check_in_till), h("p", { key: '1dd4f7a66cada7a0b397c27723e84aa75f793148' }, "Check-out:", (_c = app_store.property) === null || _c === void 0 ? void 0 :
            _c.time_constraints.check_out_till)), h("div", { key: 'b2e79ba0328457f238a22185155be35fe6827141', class: "flex items-center gap-4" }, h("ir-icons", { key: '5160078eb0704e523852a641e42abecfc5df4655', name: "wifi" }), h("p", { key: 'd1d60f3a4c451f3a38cdf69820da5c09ee8012bb' }, "Public areas: ", h("span", { key: '6cf3c6062f8f51ebae5b3f9855b551e62fa71302', class: "text-green-500" }, (_d = app_store.property) === null || _d === void 0 ? void 0 : _d.internet_offering.public_internet_statement)), h("p", { key: '7cb1d9793632fdac1d09fc0a3446d9222b5c31fb' }, "Rooms: ", h("span", { key: '36c8fd3727c4fa2e86eb45d1a2a4766ff7539796', class: "text-green-500" }, ((_e = app_store.property) === null || _e === void 0 ? void 0 : _e.internet_offering.is_room_internet_free) ? 'Free Internet' : 'Paid Internet'))), h("div", { key: '50ef333bbf9313f075b74397ba8d503c073f38ca', class: "flex items-center gap-4" }, h("ir-icons", { key: '6309546680fe6cca5bbb5cd897aa3321b340c18f', name: "car" }), h("p", { key: 'fd12e7dac4b7e4e53a488d5538d293e19c2efbe8' }, (_f = app_store.property) === null || _f === void 0 ? void 0 :
            _f.parking_offering.title, " at ", formatAmount((_g = app_store.property) === null || _g === void 0 ? void 0 : _g.parking_offering.pricing, app_store.userPreferences.currency_id))), h("div", { key: '4436e8caf8305fc052bc7fb26f0af0074f929703', class: "flex items-center gap-4" }, h("ir-icons", { key: 'c6ea8f6f41913d4cb108bbbbe0d679a9dcbff41d', name: "pets" }), h("p", { key: '322364396832a790493597b529000cf8489d43d5' }, (_h = app_store.property) === null || _h === void 0 ? void 0 : _h.pets_acceptance.title)), h("div", { key: '71bf3742e3d40992a8b98d608b5ad252d68af9f3', class: "flex items-center gap-4" }, h("ir-icons", { key: 'daf28001dfc207ddec7dbfe99d54626277ae7100', name: "bed" }), h("p", { key: '6dd1aa78bd81099249a367cdb761dd99499e5d17' }, (_j = app_store.property) === null || _j === void 0 ? void 0 : _j.baby_cot_offering.title)), h("div", { key: 'f5bbbd28faeda45cdd00763d2107b5fc5372dc61', class: "flex flex-col flex-wrap gap-4 md:flex-row md:items-start md:justify-between md:gap-8 lg:gap-10" }, h("div", { key: '91cb85f342953c6e1a06e33ffd37860a5561b4cd', class: "flex gap-4 " }, h("ir-icons", { key: 'e4c5c27961e406760119ec50236a44eb97bf932f', name: "home" }), h("ul", { key: '01980b79e7a87c020a3a587032a7590cf17bb4b9' }, h("li", { key: '64252c984b344dbe6d6727b27ab4b35607fd6c1e', class: "font-medium" }, "Property facilies"), (_k = app_store.property) === null || _k === void 0 ? void 0 :
            _k.amenities.map(aminity => {
                if (aminity.amenity_type !== 'property') {
                    return null;
                }
                return h("li", { key: aminity.code }, aminity.description);
            }))), h("div", { key: 'a0bc80d06626bab76f0e8304be660c3823dd04a6', class: "flex gap-4" }, h("ir-icons", { key: 'd6949428387355665ab165bc72805d308e6ec8a1', name: "football" }), h("ul", { key: '897aa6133dfaa84bc0669fe0bf9e0a0702baa78c' }, h("li", { key: 'ea10ce61ac974f4698b4189440d7f7282135d326', class: "font-medium" }, "Activities"), (_l = app_store.property) === null || _l === void 0 ? void 0 :
            _l.amenities.map(aminity => {
                if (aminity.amenity_type !== 'activity') {
                    return null;
                }
                return h("li", { key: aminity.code }, aminity.description);
            }))), h("div", { key: '5dda6451547a518fbb447b741f4320f180d4a1b9', class: "flex gap-4 " }, h("ir-icons", { key: '35d64d2c0ccd7eee850f2384f7b30500a03ce5ea', name: "bell" }), h("ul", { key: '8e9f86d59405d848fbafaef30147f0f51ca4ec35' }, h("li", { key: '3e02fc04a5003b823d983cd79d7e59d39fc4fc1f', class: "font-medium" }, "Services"), (_m = app_store.property) === null || _m === void 0 ? void 0 :
            _m.amenities.map(aminity => {
                if (aminity.amenity_type !== 'service') {
                    return null;
                }
                return h("li", { key: aminity.code }, aminity.description);
            })))), ((_o = app_store.property) === null || _o === void 0 ? void 0 : _o.description.food_and_beverage) && (h("div", { class: "flex items-center gap-4" }, h("ir-icons", { name: "utencils" }), h("p", null, h("span", { class: "font-medium" }, "Food and beverage: "), (_p = app_store.property) === null || _p === void 0 ? void 0 :
            _p.description.food_and_beverage))), h("div", { key: '2d2a581b0f4504636c05f92f7dffa8cdd2f8c8f0', class: "flex items-center gap-4" }, h("ir-icons", { key: '6986f62a29a681c8606d3dba9923725f7e1111ec', name: "credit_card" }), h("p", { key: 'fb10cded905c68da62dbe05e89c0b7816d28571b' }, h("span", { key: '9934ca35ff779dc1bcfe14fe6c59f76d012cf077', class: "font-medium" }, "Accepted credit cards at the property: "), (_q = app_store.property) === null || _q === void 0 ? void 0 :
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
