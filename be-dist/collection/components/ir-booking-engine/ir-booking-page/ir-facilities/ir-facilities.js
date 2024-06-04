import app_store from "../../../../stores/app.store";
import localizedWords from "../../../../stores/localization.store";
import { formatAmount } from "../../../../utils/utils";
import { Host, h } from "@stencil/core";
export class IrFacilities {
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        return (h(Host, { key: 'f70a5ab0ea8f7da37d5e3e51a9902a2ccf9da596' }, h("div", { key: 'f0b9325768a6823b12ccff73945d849ce56b5c71', class: "facilities-container space-y-5 bg-gray-100 p-6" }, h("div", { key: 'df60dcab8d7744c88d1eca699468cba55ec59b23', class: "flex  items-center gap-4" }, h("ir-icons", { key: '77e54862a1323823741e414d30a8af2d6076679e', name: "clock" }), h("p", { key: '0034037260c1b85826a3ee53444746c1bae728a2' }, localizedWords.entries.Lcz_CheckInFromUntil.replace('%1', (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.time_constraints.check_in_from).replace('%2', (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.time_constraints.check_in_till)), h("p", { key: '5042d9545b08caef6adc59f8974bfcd81e08c683' }, localizedWords.entries.Lcz_CheckOut, ":", (_c = app_store.property) === null || _c === void 0 ? void 0 :
            _c.time_constraints.check_out_till)), h("div", { key: 'edeed8d266a8595305227884ab84fc102fe5f1c4', class: "flex items-center gap-4" }, h("ir-icons", { key: 'ae16f0bfce423b25ef53708eca9f1f33833d9b9b', name: "wifi" }), h("p", { key: '00b99325fdc6e25eee2b172dad51a920e8a2e45f' }, localizedWords.entries.Lcz_PublicAreas, ": ", h("span", { key: '85d023f0f937e8fe2c4b59f273241df6ba615b05', class: "text-green-500" }, (_d = app_store.property) === null || _d === void 0 ? void 0 : _d.internet_offering.public_internet_statement)), ((_e = app_store.property) === null || _e === void 0 ? void 0 : _e.internet_offering.is_room_internet_free) && (h("p", null, localizedWords.entries.Lcz_Rooms, ": ", h("span", { class: "text-green-500" }, localizedWords.entries.Lcz_FreeInternet)))), h("div", { key: 'b978f176eccb19f0d4f2dc43ca66c1d11632aef2', class: "flex items-center gap-4" }, h("ir-icons", { key: '7bfe42b214a6ff28432240c1839463559be20986', name: "car" }), h("p", { key: 'a5c6974a7dcfcd24746390da7ac1d8eb5040222c' }, (_f = app_store.property) === null || _f === void 0 ? void 0 :
            _f.parking_offering.title, " ", localizedWords.entries.Lcz_At, ' ', formatAmount((_g = app_store.property) === null || _g === void 0 ? void 0 : _g.parking_offering.pricing, app_store.userPreferences.currency_id))), h("div", { key: '84b10b8b3774566928d0e2be0012db9bd7657310', class: "flex items-center gap-4" }, h("ir-icons", { key: 'fa25d091467303810b3b0139a670945e8e0acc7c', name: "pets" }), h("p", { key: '8f08de44752655816bcd2fb2443ed010b5dca5e7' }, (_h = app_store.property) === null || _h === void 0 ? void 0 : _h.pets_acceptance.title)), h("div", { key: '6767dfe32c9f7c5cec2c8eac5cdcc0cdc41fbe7c', class: "flex items-center gap-4" }, h("ir-icons", { key: 'ab7d25d7cf7280f047bb9101b8d0f38295981e8c', name: "bed" }), h("p", { key: 'b4b665b8ea140b007640f8c6d61c6b65a329dd0f' }, (_j = app_store.property) === null || _j === void 0 ? void 0 : _j.baby_cot_offering.title)), h("div", { key: 'b1fd0445547734ec2f13a8da9b03e7d112b014f0', class: "flex flex-col flex-wrap gap-4 md:flex-row md:items-start md:justify-between md:gap-8 lg:gap-10" }, h("div", { key: 'ff3598edb83a508922e48b94c370c413abc5d5a1', class: "flex gap-4 " }, h("ir-icons", { key: '698b7f88fa11ced0039717e65788b987085414c1', name: "home" }), h("ul", { key: '9553b3ff77c6a70c8dc859f84f2fcfa2011efdc6' }, h("li", { key: '579431a9aa9177c9da438fe550d60048a525870f', class: "text-start font-medium" }, localizedWords.entries.Lcz_PropertyFacilities), (_k = app_store.property) === null || _k === void 0 ? void 0 :
            _k.amenities.map(aminity => {
                if (aminity.amenity_type !== 'property') {
                    return null;
                }
                return (h("li", { key: aminity.code, class: "text-start" }, aminity.description));
            }))), h("div", { key: '95fa70b84290d7e7c1bdb4b6a0c76416195c2fca', class: "flex gap-4" }, h("ir-icons", { key: '8e2f8f3666eae0a2b4346cbf9bae2f1605f48a5d', name: "football" }), h("ul", { key: '1e5021e496e028e546fea1c9d0d727692032363d' }, h("li", { key: '3095369353447522123bc8b9ab108d0be44fef94', class: "text-start font-medium" }, localizedWords.entries.Lcz_Activities), (_l = app_store.property) === null || _l === void 0 ? void 0 :
            _l.amenities.map(aminity => {
                if (aminity.amenity_type !== 'activity') {
                    return null;
                }
                return (h("li", { class: "text-start", key: aminity.code }, aminity.description));
            }))), h("div", { key: 'f4e071bdaeb9bb76275626cf6c5becc7227c0c3f', class: "flex gap-4 " }, h("ir-icons", { key: 'c3951c29860f1afd8fca52dbc605e0a17d7dc773', name: "bell" }), h("ul", { key: '78ca7936cf8e1684387e2ad2e2f9e87292023cef' }, h("li", { key: '7c4ffc4ddabccf0ead53d87948ec2b409e3cb246', class: "text-start font-medium" }, localizedWords.entries.Lcz_Services), (_m = app_store.property) === null || _m === void 0 ? void 0 :
            _m.amenities.map(aminity => {
                if (aminity.amenity_type !== 'service') {
                    return null;
                }
                return (h("li", { class: "text-start", key: aminity.code }, aminity.description));
            })))), ((_o = app_store.property) === null || _o === void 0 ? void 0 : _o.description.food_and_beverage) && (h("div", { class: "flex items-center gap-4" }, h("ir-icons", { name: "utencils" }), h("p", null, h("span", { class: "font-medium" }, localizedWords.entries['Lcz_FoodAndbeverage:'], " "), (_p = app_store.property) === null || _p === void 0 ? void 0 :
            _p.description.food_and_beverage))), h("div", { key: 'bf00a7706263494735ef6e3d10f933c87d623170', class: "flex items-center gap-4" }, h("ir-icons", { key: '4606b3e49eceb313336a3a727575e5a197d74ea7', name: "credit_card" }), h("p", { key: '38611f9e10e9a8b1cf2bcbd4fa27865c9025af85' }, h("span", { key: '1a32ad8a71fa2bffb565fb874f1d5bf254b01d09', class: "font-medium" }, localizedWords.entries.Lcz_AcceptedCreditCards, " "), (_q = app_store.property) === null || _q === void 0 ? void 0 :
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
