import app_store from "../../../../stores/app.store";
import localizedWords from "../../../../stores/localization.store";
import { formatAmount } from "../../../../utils/utils";
import { Host, h } from "@stencil/core";
export class IrFacilities {
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        return (h(Host, { key: '0ad3d65a11f6ab612b48a7721b133cd6d67a58f8' }, h("div", { key: '09fc5cbcc9cadc1c4eeaf954034ac1e6dd82c83a', class: "facilities-container space-y-5 bg-gray-100 p-6" }, h("div", { key: '308587e339e713fd218115a2b6532d6fabdef46e', class: "flex  items-center gap-4" }, h("ir-icons", { key: '26c0bb1cdadcc6ab94336af9c12104da9b73e426', name: "clock" }), h("p", { key: '2c6f0d3ce321a0541c6f7071c4b3c0794b1bbb74' }, localizedWords.entries.Lcz_CheckInFromUntil.replace('%1', (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.time_constraints.check_in_from).replace('%2', (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.time_constraints.check_in_till)), h("p", { key: 'd248eef61d86b6c3f0bc021514d64ce145ee4181' }, localizedWords.entries.Lcz_CheckOut, ":", (_c = app_store.property) === null || _c === void 0 ? void 0 :
            _c.time_constraints.check_out_till)), h("div", { key: '13406adcfa981c9ebbd748f5ba7a8c0bad84ba15', class: "flex items-center gap-4" }, h("ir-icons", { key: 'a3dcaa611593cc4b9f14aa20cc93d8e15140d7a2', name: "wifi" }), h("p", { key: '72e5f5f4fa73fc703fd9d601104ed5a483c34bcb' }, localizedWords.entries.Lcz_PublicAreas, ": ", h("span", { key: 'f8b05bac9edcf68ba72a4fe033b8a0455e0ab528', class: "text-green-500" }, (_d = app_store.property) === null || _d === void 0 ? void 0 : _d.internet_offering.public_internet_statement)), ((_e = app_store.property) === null || _e === void 0 ? void 0 : _e.internet_offering.is_room_internet_free) && (h("p", { key: '756751df5e6747d343fd8dbb67f05789cd10eb09' }, localizedWords.entries.Lcz_Rooms, ": ", h("span", { key: '75a17d07eef62892dd83637714d6bdd6ddc243f4', class: "text-green-500" }, localizedWords.entries.Lcz_FreeInternet)))), h("div", { key: '974afaeb0a2ba3210a2bbf4a21ea00eab344f131', class: "flex items-center gap-4" }, h("ir-icons", { key: '381bae637ad1623b4072e38245fbe7e8c6462cfe', name: "car" }), h("p", { key: '15fbd0e6318b618166425eaf6d5141008e369dc1' }, (_f = app_store.property) === null || _f === void 0 ? void 0 :
            _f.parking_offering.title, " ", localizedWords.entries.Lcz_At, ' ', formatAmount((_g = app_store.property) === null || _g === void 0 ? void 0 : _g.parking_offering.pricing, app_store.userPreferences.currency_id))), h("div", { key: '61d8137d42ac63c33253844f3b81fefd39ae35dc', class: "flex items-center gap-4" }, h("ir-icons", { key: 'b188f2da8e740d3c14cd18742acfcec57569b696', name: "pets" }), h("p", { key: 'b40802ef24179fd87401c85d584abd16a897f80e' }, (_h = app_store.property) === null || _h === void 0 ? void 0 : _h.pets_acceptance.title)), h("div", { key: '0fcb580ddc1946b85c75d1a85b15262dcfb63e2f', class: "flex items-center gap-4" }, h("ir-icons", { key: '022e433b81e14e0d601d50068d78fb2a8b67541d', name: "bed" }), h("p", { key: '92b6f5902737d23b602d1b52f9d3b3c8dbf3a2b7' }, (_j = app_store.property) === null || _j === void 0 ? void 0 : _j.baby_cot_offering.title)), h("div", { key: '6d7a90dacca398865fcfbe5670e91876ab0e05e2', class: "flex flex-col flex-wrap gap-4 md:flex-row md:items-start md:justify-between md:gap-8 lg:gap-10" }, h("div", { key: 'a355bbb31e0a515c8e6727335eb63baa84765514', class: "flex gap-4 " }, h("ir-icons", { key: '9232694dbe521c5c62389c266ed9beecb35b63cf', name: "home" }), h("ul", { key: '958f421004797cc2d7e33828b807b22ae44a32b0' }, h("li", { key: 'fcf5246766ac1d0f50c800e914ffe215074cbd4f', class: "text-start font-medium" }, localizedWords.entries.Lcz_PropertyFacilities), (_k = app_store.property) === null || _k === void 0 ? void 0 :
            _k.amenities.map(aminity => {
                if (aminity.amenity_type !== 'property') {
                    return null;
                }
                return (h("li", { key: aminity.code, class: "text-start" }, aminity.description));
            }))), h("div", { key: 'e6e406e0f4a960808e840932626d7db6b9336b64', class: "flex gap-4" }, h("ir-icons", { key: '30dd6de270060d4ab9bd4b3fbe3ad9163fa8dde7', name: "football" }), h("ul", { key: '10ee6de785eeabfe1882bd6d67ca7f5db0982d3f' }, h("li", { key: '2422fd068abb7cafd15d391f2b87bc151585054f', class: "text-start font-medium" }, localizedWords.entries.Lcz_Activities), (_l = app_store.property) === null || _l === void 0 ? void 0 :
            _l.amenities.map(aminity => {
                if (aminity.amenity_type !== 'activity') {
                    return null;
                }
                return (h("li", { class: "text-start", key: aminity.code }, aminity.description));
            }))), h("div", { key: '1f731821fb6ea0002d2a3f223a0d351c6853eab7', class: "flex gap-4 " }, h("ir-icons", { key: 'fbb19b95ddb20d3ceb945b2a4568c51332572ade', name: "bell" }), h("ul", { key: 'ea5db00c70df0d63d198fed3571c1df6c43a7f35' }, h("li", { key: 'ec44a44a0ab6d4f6ebad36ab073f0a0601dd2e10', class: "text-start font-medium" }, localizedWords.entries.Lcz_Services), (_m = app_store.property) === null || _m === void 0 ? void 0 :
            _m.amenities.map(aminity => {
                if (aminity.amenity_type !== 'service') {
                    return null;
                }
                return (h("li", { class: "text-start", key: aminity.code }, aminity.description));
            })))), ((_o = app_store.property) === null || _o === void 0 ? void 0 : _o.description.food_and_beverage) && (h("div", { key: 'de51e4c019c620f4ce05ae0975b3168792a87b98', class: "flex items-center gap-4" }, h("ir-icons", { key: '1b7b7ddc3dad9f0c61f0bd5f6c7b1fd259f6329d', name: "utencils" }), h("p", { key: 'a806d506c0f48a5e9071c7a59a1d630c88f51d90' }, h("span", { key: '6f5577378d06a402aaa58ab968a801bca248c3cd', class: "font-medium" }, localizedWords.entries['Lcz_FoodAndbeverage:'], " "), h("span", { key: 'f95844ff12b41a0cc85823234650da01d6972dcf', innerHTML: (_p = app_store.property) === null || _p === void 0 ? void 0 : _p.description.food_and_beverage })))), h("div", { key: '47afb7d774d2e94132e85bbbbabbd0c93cdca224', class: "flex items-center gap-4" }, h("ir-icons", { key: 'd0d52577ed2bea655ebb9d1a2e12e498386b5fe0', name: "credit_card" }), h("p", { key: 'f47d5a323d7befb20e6988897957801b035eefe7' }, h("span", { key: 'c9e8c83b03bc5069e47af81681eef618135e036a', class: "font-medium" }, localizedWords.entries.Lcz_AcceptedCreditCards, " "), (_q = app_store.property) === null || _q === void 0 ? void 0 :
            _q.allowed_cards.map((card, index) => {
                var _a;
                return (h("span", { key: card.id }, card.name, index < ((_a = app_store.property) === null || _a === void 0 ? void 0 : _a.allowed_cards.length) - 1 && h("span", null, " - ")));
            }))), ((_r = app_store.property) === null || _r === void 0 ? void 0 : _r.description.important_info) && (h("div", { key: '5c4c22f0710109508a00fa9748eca0aedceda220', class: "flex items-center gap-4" }, h("ir-icons", { key: '5a8cf9e8b16cc9afe0ff3c5ed6241f35b3406ace', name: "danger", svgClassName: "text-red-500" }), h("div", { key: '7f463705c2a274ba2c318c198475e9c2d756937d' }, h("p", { key: 'b14bd0f4038825c2e46435ef937c31e5700d044c', innerHTML: (_s = app_store.property) === null || _s === void 0 ? void 0 : _s.description.important_info }), h("p", { key: 'e2498050f01a95a0c037961dc99fff7fed783d99', innerHTML: (_t = app_store.property) === null || _t === void 0 ? void 0 : _t.description.non_standard_conditions })))))));
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
