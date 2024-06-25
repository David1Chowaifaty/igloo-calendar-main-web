import app_store from "../../../../stores/app.store";
import localizedWords from "../../../../stores/localization.store";
import { formatAmount } from "../../../../utils/utils";
import { Host, h } from "@stencil/core";
export class IrFacilities {
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        return (h(Host, { key: '7d9357bbc462c00dd7f0083f979dad283f98636f' }, h("div", { key: '1844b334352eb8b8da00fed60e5b3ef5fd2784b2', class: "facilities-container space-y-5 bg-gray-100 p-6" }, h("div", { key: 'e74d7a5a6213ec46cbb65fb88058afa3da496e1b', class: "flex  items-center gap-4" }, h("ir-icons", { key: '7f4487724a9fae2c65015c9ce275572dcaf6ac8d', name: "clock" }), h("p", { key: 'f903bfbab6a22c9685a76d664fb18d371c98475b' }, localizedWords.entries.Lcz_CheckInFromUntil.replace('%1', (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.time_constraints.check_in_from).replace('%2', (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.time_constraints.check_in_till)), h("p", { key: 'b7d4a4c1cb8b107fc8621fbf70ba3acbd3732a28' }, localizedWords.entries.Lcz_CheckOut, ":", (_c = app_store.property) === null || _c === void 0 ? void 0 :
            _c.time_constraints.check_out_till)), h("div", { key: '8f936a8397dd4be08b7937d6a272f32bea91d398', class: "flex items-center gap-4" }, h("ir-icons", { key: 'a0005d206cdf05296222798927dd2fd7bef635e7', name: "wifi" }), h("p", { key: '4fdaa51079209a46ad786ce95ebf739a144ca9d4' }, localizedWords.entries.Lcz_PublicAreas, ": ", h("span", { key: 'a890ac295de2b7b40be1c4f57d75c1fde628a7dc', class: "text-green-500" }, (_d = app_store.property) === null || _d === void 0 ? void 0 : _d.internet_offering.public_internet_statement)), ((_e = app_store.property) === null || _e === void 0 ? void 0 : _e.internet_offering.is_room_internet_free) && (h("p", { key: '55f67a62abad65139e0b8ecebb84070880519586' }, localizedWords.entries.Lcz_Rooms, ": ", h("span", { key: 'c086f8b5d927bce58dcd806ed34b058d228b7ccd', class: "text-green-500" }, localizedWords.entries.Lcz_FreeInternet)))), h("div", { key: '662f71eef6a7678327f7bfd1256eeb16e4886c10', class: "flex items-center gap-4" }, h("ir-icons", { key: '6966141dee055e8d245d7dd29d36c005a2adf1d1', name: "car" }), h("p", { key: '7524cb4fa027918dc698425dde02548cec431534' }, (_f = app_store.property) === null || _f === void 0 ? void 0 :
            _f.parking_offering.title, " ", localizedWords.entries.Lcz_At, ' ', formatAmount((_g = app_store.property) === null || _g === void 0 ? void 0 : _g.parking_offering.pricing, app_store.userPreferences.currency_id))), h("div", { key: 'd0d45498c724a756f248c8a00c5a0152357d14d5', class: "flex items-center gap-4" }, h("ir-icons", { key: '76c5f87c5f70073aeb912ea9a283bc7a741a004c', name: "pets" }), h("p", { key: '31e0ebc443acd0d62911fa3e0b1ee7f74125e3b9' }, (_h = app_store.property) === null || _h === void 0 ? void 0 : _h.pets_acceptance.title)), h("div", { key: 'fdfbfca57e59fca16956453b814037948d29cfe4', class: "flex items-center gap-4" }, h("ir-icons", { key: 'e92d8543dea735d8b7e131d8920d15eaccc14808', name: "bed" }), h("p", { key: 'cebc9d112abb36829bd9ab23651458faa9f1f9e0' }, (_j = app_store.property) === null || _j === void 0 ? void 0 : _j.baby_cot_offering.title)), h("div", { key: '1b7d911c8d07964e8356811e5ea259a11de5a5be', class: "flex flex-col flex-wrap gap-4 md:flex-row md:items-start md:justify-between md:gap-8 lg:gap-10" }, h("div", { key: '52038c1b5f451739468c2898ecb30d59d69a02ef', class: "flex gap-4 " }, h("ir-icons", { key: 'f55cc7a4f9c4306c13c3e111e473293c1aa26965', name: "home" }), h("ul", { key: 'dcfe59ca2111a296965fe94282f4666f8dd55a80' }, h("li", { key: 'fdfbd0e7f93052d154cf26f9aba3a53e58e262fa', class: "text-start font-medium" }, localizedWords.entries.Lcz_PropertyFacilities), (_k = app_store.property) === null || _k === void 0 ? void 0 :
            _k.amenities.map(aminity => {
                if (aminity.amenity_type !== 'property') {
                    return null;
                }
                return (h("li", { key: aminity.code, class: "text-start" }, aminity.description));
            }))), h("div", { key: 'ea4448c3909b8c347c1d3d338255dd7f3e7f54f3', class: "flex gap-4" }, h("ir-icons", { key: '5228360b8668a739bb61a0eea11255830fe84648', name: "football" }), h("ul", { key: '4b7cc3962a8ac599197a6d938403f77e72475b49' }, h("li", { key: '9423daf3839393a5082d85177046f7133841035e', class: "text-start font-medium" }, localizedWords.entries.Lcz_Activities), (_l = app_store.property) === null || _l === void 0 ? void 0 :
            _l.amenities.map(aminity => {
                if (aminity.amenity_type !== 'activity') {
                    return null;
                }
                return (h("li", { class: "text-start", key: aminity.code }, aminity.description));
            }))), h("div", { key: '9dbcf77b857a2c226f7f52be4f7885ef1f52f64c', class: "flex gap-4 " }, h("ir-icons", { key: '7f9c2f5633dbcdf871fbd84162a239c3d7962556', name: "bell" }), h("ul", { key: '828d750eb05a26f821c53db7d2139bfe75317faa' }, h("li", { key: 'edc40a17cdb9f7fc358a45b9011a8eaaad5493c5', class: "text-start font-medium" }, localizedWords.entries.Lcz_Services), (_m = app_store.property) === null || _m === void 0 ? void 0 :
            _m.amenities.map(aminity => {
                if (aminity.amenity_type !== 'service') {
                    return null;
                }
                return (h("li", { class: "text-start", key: aminity.code }, aminity.description));
            })))), ((_o = app_store.property) === null || _o === void 0 ? void 0 : _o.description.food_and_beverage) && (h("div", { key: 'fdad0e8700aa8f64e11b77a769674706652601be', class: "flex items-center gap-4" }, h("ir-icons", { key: 'c74e8b059abe22f9c8b74ac3e77854e4ad448936', name: "utencils" }), h("p", { key: '499ca5df507cec7a2297badab6297e3759c342bb' }, h("span", { key: 'a9f0affb484b69db8c80abbb7e2b5467dd0926c4', class: "font-medium" }, localizedWords.entries['Lcz_FoodAndbeverage:'], " "), (_p = app_store.property) === null || _p === void 0 ? void 0 :
            _p.description.food_and_beverage))), h("div", { key: 'fd22c773f9b5edd1a8bb3e56daaf7c3516dcae08', class: "flex items-center gap-4" }, h("ir-icons", { key: '9a4b689c6a66483bb70270c91b22e014a8e2715c', name: "credit_card" }), h("p", { key: 'b30e7ee185505d96d6f763e4679318c385a7c31b' }, h("span", { key: '844fe6b87ad695687f2820f5a62782a79b154018', class: "font-medium" }, localizedWords.entries.Lcz_AcceptedCreditCards, " "), (_q = app_store.property) === null || _q === void 0 ? void 0 :
            _q.allowed_cards.map((card, index) => {
                var _a;
                return (h("span", { key: card.id }, card.name, index < ((_a = app_store.property) === null || _a === void 0 ? void 0 : _a.allowed_cards.length) - 1 && h("span", null, " - ")));
            }))), ((_r = app_store.property) === null || _r === void 0 ? void 0 : _r.description.important_info) && (h("div", { key: 'c484813a16b6472f736c476b95114f289fa2ef38', class: "flex items-center gap-4" }, h("ir-icons", { key: 'ccf4725e4272f5de66d6b1d6d30c054a813258f9', name: "danger", svgClassName: "text-red-500" }), h("div", { key: 'b6ba8c75293ec373a3071fe25b608e2cf5a68b92' }, h("p", { key: '7387a14cd21ec36d365d03f22702999c42a5088f' }, (_s = app_store.property) === null || _s === void 0 ? void 0 : _s.description.important_info), h("p", { key: '3dbc5a7474ad461044cfcb2964528db739272f25' }, (_t = app_store.property) === null || _t === void 0 ? void 0 : _t.description.non_standard_conditions)))))));
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
