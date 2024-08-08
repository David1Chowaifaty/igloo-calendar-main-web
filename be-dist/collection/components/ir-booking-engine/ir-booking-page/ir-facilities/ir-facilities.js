import app_store from "../../../../stores/app.store";
import localizedWords from "../../../../stores/localization.store";
import { formatAmount } from "../../../../utils/utils";
import { Host, h } from "@stencil/core";
export class IrFacilities {
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1;
        return (h(Host, { key: '0ad3d65a11f6ab612b48a7721b133cd6d67a58f8' }, h("div", { key: '09fc5cbcc9cadc1c4eeaf954034ac1e6dd82c83a', class: "facilities-container space-y-5 bg-gray-100 p-6" }, h("div", { key: '308587e339e713fd218115a2b6532d6fabdef46e', class: "flex  items-center gap-4" }, h("ir-icons", { key: '26c0bb1cdadcc6ab94336af9c12104da9b73e426', name: "clock" }), h("p", { key: '2c6f0d3ce321a0541c6f7071c4b3c0794b1bbb74' }, localizedWords.entries.Lcz_CheckInFromUntil.replace('%1', (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.time_constraints.check_in_from).replace('%2', (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.time_constraints.check_in_till)), h("p", { key: 'd248eef61d86b6c3f0bc021514d64ce145ee4181' }, localizedWords.entries.Lcz_CheckOut, ":", (_c = app_store.property) === null || _c === void 0 ? void 0 :
            _c.time_constraints.check_out_till)), ((_d = app_store.property) === null || _d === void 0 ? void 0 : _d.internet_offering.public_internet_statement) && (h("div", { key: '382b6dd27e77f67b8aa22ab8f31ba45162be0a9e', class: "flex items-center gap-4" }, h("ir-icons", { key: '9bc76bce95aeb5afac856573d8ba88b48d0bad4e', name: "wifi" }), h("p", { key: '41145849652715c30b963b0f91dc780834fa24cb' }, localizedWords.entries.Lcz_PublicAreas, ": ", h("span", { key: 'd2d769b42deb37946e7cb33664d2fd333e80f313', class: "text-green-600" }, (_e = app_store.property) === null || _e === void 0 ? void 0 : _e.internet_offering.public_internet_statement)), ((_f = app_store.property) === null || _f === void 0 ? void 0 : _f.internet_offering.is_room_internet_free) && (h("p", { key: '90740efc59bf4c1ce986a685982349915619a2d4' }, localizedWords.entries.Lcz_Rooms, ": ", h("span", { key: '58835f9b2a92e8b9ddbf2d33636eb2ca27f4918f', class: "text-green-600" }, localizedWords.entries.Lcz_FreeInternet))))), ((_g = app_store.property) === null || _g === void 0 ? void 0 : _g.parking_offering.title) && (h("div", { key: 'fa70085420c6cdec7b8b07c2b93b8f1cf935a4cd', class: "flex items-center gap-4" }, h("ir-icons", { key: '89bbe4ba1572ffc2fabdcb95c6f639f644976d31', name: "car" }), h("p", { key: '3b8e01a658ce723f0a54620c4e576e9cd500ee7b' }, (_h = app_store.property) === null || _h === void 0 ? void 0 :
            _h.parking_offering.title, " ", localizedWords.entries.Lcz_At, ' ', formatAmount((_j = app_store.property) === null || _j === void 0 ? void 0 : _j.parking_offering.pricing, app_store.userPreferences.currency_id)))), ((_k = app_store.property) === null || _k === void 0 ? void 0 : _k.pets_acceptance.title) && (h("div", { key: 'efaee7161dadd3bb07f539c565183ded72db9c00', class: "flex items-center gap-4" }, h("ir-icons", { key: 'bd71b9cae8c07528925b20806f555fe3e4c21056', name: "pets" }), h("p", { key: '806e1f89709b944eccd1471a65771d4fccd46974' }, (_l = app_store.property) === null || _l === void 0 ? void 0 : _l.pets_acceptance.title))), ((_m = app_store.property) === null || _m === void 0 ? void 0 : _m.baby_cot_offering.title) && (h("div", { key: '323328ddc777e39948b27156ebfbc572458ca4b1', class: "flex items-center gap-4" }, h("ir-icons", { key: 'bdad82582bebacf0fc7493505332712d64b83daf', name: "bed" }), h("p", { key: '359edcdcffbf4339650d57400e06760e7b3db139' }, (_o = app_store.property) === null || _o === void 0 ? void 0 : _o.baby_cot_offering.title))), ((_p = app_store.property) === null || _p === void 0 ? void 0 : _p.amenities.some(a => !['property', 'activity', 'service'].includes(a.amenity_type))) && (h("div", { key: 'cfff6bebfbd416701311c3f76c532c56ac3c8b1b', class: "flex flex-col flex-wrap gap-4 md:flex-row md:items-start md:justify-between md:gap-8 lg:gap-10" }, ((_q = app_store.property) === null || _q === void 0 ? void 0 : _q.amenities.some(a => a.amenity_type !== 'property')) && (h("div", { key: 'd25aed95511f67646728e80ecdd7b984e0b210ba', class: "flex gap-4 " }, h("ir-icons", { key: '4bf8afdac776994e83712a5d629444467373af05', name: "home" }), h("ul", { key: 'b9ba5e1dbb23547da35eb5fb6baeac70c46ace3d' }, h("li", { key: 'f618dccb905c9b05534ad5cb13441de5bfbf455e', class: "text-start font-medium" }, localizedWords.entries.Lcz_PropertyFacilities), (_r = app_store.property) === null || _r === void 0 ? void 0 :
            _r.amenities.map(aminity => {
                if (aminity.amenity_type !== 'property') {
                    return null;
                }
                return (h("li", { key: aminity.code, class: "text-start" }, aminity.description));
            })))), ((_s = app_store.property) === null || _s === void 0 ? void 0 : _s.amenities.some(a => a.amenity_type !== 'activity')) && (h("div", { key: 'e6aee35ef68674d822f9f39b169cd92088d24a5c', class: "flex gap-4" }, h("ir-icons", { key: 'a634324b6c3636db57119539f6d0e2ca2de283b4', name: "football" }), h("ul", { key: 'd96bc97ba477d8a5c3cefb9053442f83d58c0bf7' }, h("li", { key: '1fa8feb0cac80a3f285cc278378cd9ede0c107f4', class: "text-start font-medium" }, localizedWords.entries.Lcz_Activities), (_t = app_store.property) === null || _t === void 0 ? void 0 :
            _t.amenities.map(aminity => {
                if (aminity.amenity_type !== 'activity') {
                    return null;
                }
                return (h("li", { class: "text-start", key: aminity.code }, aminity.description));
            })))), ((_u = app_store.property) === null || _u === void 0 ? void 0 : _u.amenities.some(a => a.amenity_type !== 'service')) && (h("div", { key: '6da3b230d44b031b9e03b717cb3e70ccd9289cdd', class: "flex gap-4 " }, h("ir-icons", { key: 'f84bc8637c516967d08885067d46be9b4d3c12fd', name: "bell" }), h("ul", { key: '61084e78e6785faed15b06410a8f8cd2c6630b83' }, h("li", { key: '09e798dd8e3e6fdd873e67cdc7b6c7595f76511c', class: "text-start font-medium" }, localizedWords.entries.Lcz_Services), (_v = app_store.property) === null || _v === void 0 ? void 0 :
            _v.amenities.map(aminity => {
                if (aminity.amenity_type !== 'service') {
                    return null;
                }
                return (h("li", { class: "text-start", key: aminity.code }, aminity.description));
            })))))), ((_w = app_store.property) === null || _w === void 0 ? void 0 : _w.description.food_and_beverage) && (h("div", { key: '5343738ce1bb0dbd287a46394e63c1298adbe346', class: "flex items-center gap-4" }, h("ir-icons", { key: '2b8915a7afd1772db11fd1715959dec9a00ee2c0', name: "utencils" }), h("p", { key: 'ce0e5818b9eb1803b10e97afb852433ab4f9d460' }, h("span", { key: '3ebf57db9b9d87d8065ce4f01c37c9f7d6b6eed6', class: "font-medium" }, localizedWords.entries['Lcz_FoodAndbeverage:'], " "), h("span", { key: '06b2bcbfe643612c95ab27fc5f7bb43ef624c474', innerHTML: (_x = app_store.property) === null || _x === void 0 ? void 0 : _x.description.food_and_beverage })))), h("div", { key: '2e1039cbc21f33474262e02c8f99188f4bfdd303', class: "flex items-center gap-4" }, h("ir-icons", { key: '6fd2c5aa25b81ffe172c5355eef8327d7dc0ff82', name: "credit_card" }), h("p", { key: 'fe6d3b9c604fdfa81d5e105cb2f9d46c14ae39c0' }, h("span", { key: '3e733d84fb5fe3ec4695e932e12e92597c23448d', class: "font-medium" }, localizedWords.entries.Lcz_AcceptedCreditCards, " "), (_y = app_store.property) === null || _y === void 0 ? void 0 :
            _y.allowed_cards.map((card, index) => {
                var _a;
                return (h("span", { key: card.id }, card.name, index < ((_a = app_store.property) === null || _a === void 0 ? void 0 : _a.allowed_cards.length) - 1 && h("span", null, " - ")));
            }))), ((_z = app_store.property) === null || _z === void 0 ? void 0 : _z.description.important_info) && (h("div", { key: 'f56b105310d2bb9d38bcd64f9242625a8e4159a1', class: "flex items-center gap-4" }, h("ir-icons", { key: 'fb71cac429abc559ed523b123f3d747a58f91096', name: "danger", svgClassName: "text-red-500" }), h("div", { key: '7810e66638ab4625951a21aa243d682f837bf270' }, h("p", { key: 'e5a36fbc304e6cebbefb7752d0e5e4b0780dda91', innerHTML: (_0 = app_store.property) === null || _0 === void 0 ? void 0 : _0.description.important_info }), h("p", { key: '74689bcb5f3f86e0d6602bbbce10975ced528162', innerHTML: (_1 = app_store.property) === null || _1 === void 0 ? void 0 : _1.description.non_standard_conditions })))))));
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
