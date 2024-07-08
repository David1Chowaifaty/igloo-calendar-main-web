import app_store from "../../../../stores/app.store";
import localizedWords from "../../../../stores/localization.store";
import { formatAmount } from "../../../../utils/utils";
import { Host, h } from "@stencil/core";
export class IrFacilities {
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        return (h(Host, { key: 'bd3fe5edb2783eaa75e5a81fa5b4781f7d94c343' }, h("div", { key: '2e0db541d6bc6f7c6a52a7cab83de5cac527114a', class: "facilities-container space-y-5 bg-gray-100 p-6" }, h("div", { key: '46aa6f5ec4cae5031f5f839dd68540a3d14d1da0', class: "flex  items-center gap-4" }, h("ir-icons", { key: '15e7ece04d8dfeb887a66f26c58334e450316c26', name: "clock" }), h("p", { key: 'b2e404a9e7f9cd66910df5ec06ff82fb4bca2052' }, localizedWords.entries.Lcz_CheckInFromUntil.replace('%1', (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.time_constraints.check_in_from).replace('%2', (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.time_constraints.check_in_till)), h("p", { key: 'ce4b22008e720e9ab427a8ad942b1678388ec627' }, localizedWords.entries.Lcz_CheckOut, ":", (_c = app_store.property) === null || _c === void 0 ? void 0 :
            _c.time_constraints.check_out_till)), h("div", { key: 'd82128536b1181ef58d94a16c41075639226b01f', class: "flex items-center gap-4" }, h("ir-icons", { key: '2ffbcaa71ca8110f0162204a1a73cb00244f88b1', name: "wifi" }), h("p", { key: 'c4d1afbf3f5ebd2bdd31f588c60cc5331bf22e09' }, localizedWords.entries.Lcz_PublicAreas, ": ", h("span", { key: '8a14036e4cd6290be2776d504199030dfbe8d4de', class: "text-green-500" }, (_d = app_store.property) === null || _d === void 0 ? void 0 : _d.internet_offering.public_internet_statement)), ((_e = app_store.property) === null || _e === void 0 ? void 0 : _e.internet_offering.is_room_internet_free) && (h("p", { key: '2b72b37b01cbb70fbdb25f50fc627b3b76e4c8db' }, localizedWords.entries.Lcz_Rooms, ": ", h("span", { key: 'b21b898661be049a9628aa486d14903868c5cd8e', class: "text-green-500" }, localizedWords.entries.Lcz_FreeInternet)))), h("div", { key: '318bc50b2a7f6d7edafb95fedde0bad1e7c8384b', class: "flex items-center gap-4" }, h("ir-icons", { key: 'bf8cca3780612dbaf510f1723193b6e44bc45d48', name: "car" }), h("p", { key: '55ceca2b9cb706d42090a4a55ee13dc00ca5169a' }, (_f = app_store.property) === null || _f === void 0 ? void 0 :
            _f.parking_offering.title, " ", localizedWords.entries.Lcz_At, ' ', formatAmount((_g = app_store.property) === null || _g === void 0 ? void 0 : _g.parking_offering.pricing, app_store.userPreferences.currency_id))), h("div", { key: '14eb92bf025ac90793191cdab23dbd0715f22942', class: "flex items-center gap-4" }, h("ir-icons", { key: '4d1b4d662a92f41d97b6ceee5cdf9cff85a571c1', name: "pets" }), h("p", { key: '45cd4ef1ad1b8a3882f2527364abe2ab1158ddef' }, (_h = app_store.property) === null || _h === void 0 ? void 0 : _h.pets_acceptance.title)), h("div", { key: 'fa04d63c5de63e5a115b45658e14decdd58872d6', class: "flex items-center gap-4" }, h("ir-icons", { key: '97675f779f5fcab3e2326b2add1826f32be012dc', name: "bed" }), h("p", { key: 'b2798cd9efcea2e28fe12aa57fb1996448945946' }, (_j = app_store.property) === null || _j === void 0 ? void 0 : _j.baby_cot_offering.title)), h("div", { key: 'accd92529aeff2f7acff6b7cf02d7bad22c6d4e7', class: "flex flex-col flex-wrap gap-4 md:flex-row md:items-start md:justify-between md:gap-8 lg:gap-10" }, h("div", { key: '97995420845b52db7c755b6af500d274de1ee3c1', class: "flex gap-4 " }, h("ir-icons", { key: 'b582f1c214f6a130b37c5010c299b310f23c1af2', name: "home" }), h("ul", { key: '40956322da629eb7b4bd07df0b904b70ea9d6972' }, h("li", { key: '0114637134d5702b1fa83d89e612c431a9fcc52b', class: "text-start font-medium" }, localizedWords.entries.Lcz_PropertyFacilities), (_k = app_store.property) === null || _k === void 0 ? void 0 :
            _k.amenities.map(aminity => {
                if (aminity.amenity_type !== 'property') {
                    return null;
                }
                return (h("li", { key: aminity.code, class: "text-start" }, aminity.description));
            }))), h("div", { key: '78493b729c140d2a67c9b544b3e3c23d48b9ea5b', class: "flex gap-4" }, h("ir-icons", { key: '4d64eeacbeeb98d4cf9fe1a4498bb371413a35c4', name: "football" }), h("ul", { key: 'e09b3f72d892d92e1c948ff0de043bf139095694' }, h("li", { key: 'cd0f9f23e671eae9b784920f7da676d58e105a10', class: "text-start font-medium" }, localizedWords.entries.Lcz_Activities), (_l = app_store.property) === null || _l === void 0 ? void 0 :
            _l.amenities.map(aminity => {
                if (aminity.amenity_type !== 'activity') {
                    return null;
                }
                return (h("li", { class: "text-start", key: aminity.code }, aminity.description));
            }))), h("div", { key: 'f9483e94e487362c5fc5a09dc7376704b4076ecd', class: "flex gap-4 " }, h("ir-icons", { key: 'f77f893160ad9a273b712e7dd962eea1242a8632', name: "bell" }), h("ul", { key: 'cdbbe782429b6919f0823e6fe6455773f1474dd5' }, h("li", { key: '1b8eb9b8e47f19ecc10e30e8113aa64f379e8681', class: "text-start font-medium" }, localizedWords.entries.Lcz_Services), (_m = app_store.property) === null || _m === void 0 ? void 0 :
            _m.amenities.map(aminity => {
                if (aminity.amenity_type !== 'service') {
                    return null;
                }
                return (h("li", { class: "text-start", key: aminity.code }, aminity.description));
            })))), ((_o = app_store.property) === null || _o === void 0 ? void 0 : _o.description.food_and_beverage) && (h("div", { key: '5d636089e9e41021305304e24224c9cdeb9fe564', class: "flex items-center gap-4" }, h("ir-icons", { key: '58dc7fc5ff2315df61fc758ecc484572457336a2', name: "utencils" }), h("p", { key: '5caf4b2f1db0bb2d9220e1d83e4d261c08b3f96c' }, h("span", { key: '0c53217d131a61b82e050d65f17d638b24166a9c', class: "font-medium" }, localizedWords.entries['Lcz_FoodAndbeverage:'], " "), (_p = app_store.property) === null || _p === void 0 ? void 0 :
            _p.description.food_and_beverage))), h("div", { key: '6749ae92d5ee7763c8a6ce360b54ac456a3a49ae', class: "flex items-center gap-4" }, h("ir-icons", { key: 'baa6ce6e485a649b58f42794ba4dfda69fb4fffb', name: "credit_card" }), h("p", { key: '913f03052ee506eeceb80a17242af4d01a548cbe' }, h("span", { key: '1075e7a6fe9c9cedfe510d48797ced64a487beac', class: "font-medium" }, localizedWords.entries.Lcz_AcceptedCreditCards, " "), (_q = app_store.property) === null || _q === void 0 ? void 0 :
            _q.allowed_cards.map((card, index) => {
                var _a;
                return (h("span", { key: card.id }, card.name, index < ((_a = app_store.property) === null || _a === void 0 ? void 0 : _a.allowed_cards.length) - 1 && h("span", null, " - ")));
            }))), ((_r = app_store.property) === null || _r === void 0 ? void 0 : _r.description.important_info) && (h("div", { key: '13b90cec0ddb0d43364e9617b9a30583e7bec9f7', class: "flex items-center gap-4" }, h("ir-icons", { key: 'c95740315fd6cdff56aa5e2cff6996fa116947ae', name: "danger", svgClassName: "text-red-500" }), h("div", { key: 'ee47828b2729f708c29f8ca97f2b7273af2a8284' }, h("p", { key: 'e5068f95e9a5e7ee17a00264fad440c0ed1eb636' }, (_s = app_store.property) === null || _s === void 0 ? void 0 : _s.description.important_info), h("p", { key: 'cdc870089bc437a83c4e5e17af7fc24542502327' }, (_t = app_store.property) === null || _t === void 0 ? void 0 : _t.description.non_standard_conditions)))))));
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
