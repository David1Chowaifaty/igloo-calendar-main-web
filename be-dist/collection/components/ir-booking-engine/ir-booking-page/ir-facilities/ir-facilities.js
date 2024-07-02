import app_store from "../../../../stores/app.store";
import localizedWords from "../../../../stores/localization.store";
import { formatAmount } from "../../../../utils/utils";
import { Host, h } from "@stencil/core";
export class IrFacilities {
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        return (h(Host, { key: '565d66d0f12f895f37a27e411386b3c48a40bf97' }, h("div", { key: 'd782a6f1005ee4193a8dbd092f04a784b5902468', class: "facilities-container space-y-5 bg-gray-100 p-6" }, h("div", { key: '9f07271603a6d4405d60e6785912c1949a40dbc7', class: "flex  items-center gap-4" }, h("ir-icons", { key: '5ee3b6e43195f668cf4b0014a4cfa8e32fb7340e', name: "clock" }), h("p", { key: '290a3a1fd432e155ac4f81b03295877db3041325' }, localizedWords.entries.Lcz_CheckInFromUntil.replace('%1', (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.time_constraints.check_in_from).replace('%2', (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.time_constraints.check_in_till)), h("p", { key: 'd72074d248d99830faf3001f4942ca86e91a739f' }, localizedWords.entries.Lcz_CheckOut, ":", (_c = app_store.property) === null || _c === void 0 ? void 0 :
            _c.time_constraints.check_out_till)), h("div", { key: '8b4a996d450a98be4107ecf8e3061dbf61d3192c', class: "flex items-center gap-4" }, h("ir-icons", { key: '20ec73c46fe9c12cb2f95225fdde156fc6371760', name: "wifi" }), h("p", { key: '5926c31971cd3d63ad0bee5d805cb08f4f19492f' }, localizedWords.entries.Lcz_PublicAreas, ": ", h("span", { key: 'c7bb0553b372a0f6eee299a5e08b8fb1acdade1c', class: "text-green-500" }, (_d = app_store.property) === null || _d === void 0 ? void 0 : _d.internet_offering.public_internet_statement)), ((_e = app_store.property) === null || _e === void 0 ? void 0 : _e.internet_offering.is_room_internet_free) && (h("p", { key: 'ec27aa2f66405fd1e3bbdcaab3c9665319596a93' }, localizedWords.entries.Lcz_Rooms, ": ", h("span", { key: '6c7be4a8454958b65d1a239ef1ce0e048fe75f2a', class: "text-green-500" }, localizedWords.entries.Lcz_FreeInternet)))), h("div", { key: '513c89528baca873415787a8be2a32996cb0f892', class: "flex items-center gap-4" }, h("ir-icons", { key: 'e7e48c3386181cbd32b7b74f606caad1b9a23542', name: "car" }), h("p", { key: 'ad23f941c1eddbd797e49cf93f0bcb83450632cb' }, (_f = app_store.property) === null || _f === void 0 ? void 0 :
            _f.parking_offering.title, " ", localizedWords.entries.Lcz_At, ' ', formatAmount((_g = app_store.property) === null || _g === void 0 ? void 0 : _g.parking_offering.pricing, app_store.userPreferences.currency_id))), h("div", { key: 'ee5a20d0da9a5270f55827fefc196f351c299058', class: "flex items-center gap-4" }, h("ir-icons", { key: '82c4ea320b7b04486e925c4827e3f3b75fc6264e', name: "pets" }), h("p", { key: 'ed3d54a44cc81dd68176ca233549635053cb201c' }, (_h = app_store.property) === null || _h === void 0 ? void 0 : _h.pets_acceptance.title)), h("div", { key: '11ccb27dae9a405dd41edfb4ecbdb6cd0d44020e', class: "flex items-center gap-4" }, h("ir-icons", { key: '88d2669323cb8dc08949f1dec269d2e8d91cb185', name: "bed" }), h("p", { key: 'c07a64ce4adc3b8348640fdd94f4cff7e26d89bc' }, (_j = app_store.property) === null || _j === void 0 ? void 0 : _j.baby_cot_offering.title)), h("div", { key: '545968f9d57e7d53054e8b0c213b1bbcc2b00b93', class: "flex flex-col flex-wrap gap-4 md:flex-row md:items-start md:justify-between md:gap-8 lg:gap-10" }, h("div", { key: '81cf713d4f7021c62c757a915078a97e11e04895', class: "flex gap-4 " }, h("ir-icons", { key: '588aaff045f83f475a232b909e8e683ccac4d80b', name: "home" }), h("ul", { key: '8acaf23753fffef2592aeaebb12d1405b78f76db' }, h("li", { key: '22ff9d49b6e31a72048f539d80aefc812a1c34b0', class: "text-start font-medium" }, localizedWords.entries.Lcz_PropertyFacilities), (_k = app_store.property) === null || _k === void 0 ? void 0 :
            _k.amenities.map(aminity => {
                if (aminity.amenity_type !== 'property') {
                    return null;
                }
                return (h("li", { key: aminity.code, class: "text-start" }, aminity.description));
            }))), h("div", { key: '702f2993fb418f48a483fc6f77be85e143d16d9b', class: "flex gap-4" }, h("ir-icons", { key: 'da236c3274fb84df8efce7d7f86b2fe957d1f6f5', name: "football" }), h("ul", { key: '4458890e161ccabec177120ad85a30e03c0cfce9' }, h("li", { key: '946d0be0b758ab292ef206cd78bc5d04f5306806', class: "text-start font-medium" }, localizedWords.entries.Lcz_Activities), (_l = app_store.property) === null || _l === void 0 ? void 0 :
            _l.amenities.map(aminity => {
                if (aminity.amenity_type !== 'activity') {
                    return null;
                }
                return (h("li", { class: "text-start", key: aminity.code }, aminity.description));
            }))), h("div", { key: 'ce22dfbc769b83f62e9385014651cc23fd80dc7f', class: "flex gap-4 " }, h("ir-icons", { key: '93523e246a9b78a1f14e7a7911571b7aee170afd', name: "bell" }), h("ul", { key: '01e14c659340f90a4f31de033eadd29912428a5a' }, h("li", { key: '65fd46019821d5a328498854d1e52cdfbc8027f9', class: "text-start font-medium" }, localizedWords.entries.Lcz_Services), (_m = app_store.property) === null || _m === void 0 ? void 0 :
            _m.amenities.map(aminity => {
                if (aminity.amenity_type !== 'service') {
                    return null;
                }
                return (h("li", { class: "text-start", key: aminity.code }, aminity.description));
            })))), ((_o = app_store.property) === null || _o === void 0 ? void 0 : _o.description.food_and_beverage) && (h("div", { key: '9e370a68ce7d72f58d956f2ff851534a12d912f5', class: "flex items-center gap-4" }, h("ir-icons", { key: '607caac3f892a8f9298d2f0a5c55ab3c6a69af91', name: "utencils" }), h("p", { key: '7bdcee9dad2bb62bac19a97b86d4d9f2d26c7813' }, h("span", { key: '76a125c831e269c98019a82aef74e89f4d875f46', class: "font-medium" }, localizedWords.entries['Lcz_FoodAndbeverage:'], " "), (_p = app_store.property) === null || _p === void 0 ? void 0 :
            _p.description.food_and_beverage))), h("div", { key: 'd5e4eb27184e4f55f709e786d55723e0f5f91c37', class: "flex items-center gap-4" }, h("ir-icons", { key: '161184d174544fbc5121927a8e56a8296564af55', name: "credit_card" }), h("p", { key: '93acd92a0f9c0b4df56bd503e5b3b2d8d12eaf41' }, h("span", { key: '126b0bfab361d77f72492ccd6c3d9e961758dfb2', class: "font-medium" }, localizedWords.entries.Lcz_AcceptedCreditCards, " "), (_q = app_store.property) === null || _q === void 0 ? void 0 :
            _q.allowed_cards.map((card, index) => {
                var _a;
                return (h("span", { key: card.id }, card.name, index < ((_a = app_store.property) === null || _a === void 0 ? void 0 : _a.allowed_cards.length) - 1 && h("span", null, " - ")));
            }))), ((_r = app_store.property) === null || _r === void 0 ? void 0 : _r.description.important_info) && (h("div", { key: 'e3e971dfe6a3b58d78ab1ee09502b88fef584d2f', class: "flex items-center gap-4" }, h("ir-icons", { key: '418f69db4182dc29916f65e7ec0ec8f891cacd2e', name: "danger", svgClassName: "text-red-500" }), h("div", { key: '6ec95fcaa10ee0762c450245c3518814889081f1' }, h("p", { key: '481176c344e8330eb0c59b441579b73b99f54004' }, (_s = app_store.property) === null || _s === void 0 ? void 0 : _s.description.important_info), h("p", { key: '6a01f56eeec08179495a4f18bcb1f21a200f59a1' }, (_t = app_store.property) === null || _t === void 0 ? void 0 : _t.description.non_standard_conditions)))))));
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
