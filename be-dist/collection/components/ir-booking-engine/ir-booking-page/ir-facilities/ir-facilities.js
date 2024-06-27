import app_store from "../../../../stores/app.store";
import localizedWords from "../../../../stores/localization.store";
import { formatAmount } from "../../../../utils/utils";
import { Host, h } from "@stencil/core";
export class IrFacilities {
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        return (h(Host, { key: 'da37f1f9104aeeb5ddeae280ffcd03c44bd93c31' }, h("div", { key: 'b420796156af91ba6b0f6fa85468541416e42de1', class: "facilities-container space-y-5 bg-gray-100 p-6" }, h("div", { key: '4da48c5bf195eec2254de56847bbd9b3ab0d5fab', class: "flex  items-center gap-4" }, h("ir-icons", { key: '5f0ee687502d96c84a025044e2d54f58f8734e20', name: "clock" }), h("p", { key: '87c729fc10d7b79b27c7afa9a165c9721d5a9342' }, localizedWords.entries.Lcz_CheckInFromUntil.replace('%1', (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.time_constraints.check_in_from).replace('%2', (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.time_constraints.check_in_till)), h("p", { key: '4a089c53ed948e63d940283e957cd631d132bf77' }, localizedWords.entries.Lcz_CheckOut, ":", (_c = app_store.property) === null || _c === void 0 ? void 0 :
            _c.time_constraints.check_out_till)), h("div", { key: '8413d463f4d2c91c7a333652b57577137067dcd4', class: "flex items-center gap-4" }, h("ir-icons", { key: 'bdd0294f4efa7cbdb8cc1c5b54cad5b997c1c89c', name: "wifi" }), h("p", { key: '02cef788ceb5dcd2278f88860bfd5cda1a449e34' }, localizedWords.entries.Lcz_PublicAreas, ": ", h("span", { key: 'c0fae0bd183b40de114b7e3f56638e47c2897936', class: "text-green-500" }, (_d = app_store.property) === null || _d === void 0 ? void 0 : _d.internet_offering.public_internet_statement)), ((_e = app_store.property) === null || _e === void 0 ? void 0 : _e.internet_offering.is_room_internet_free) && (h("p", { key: '3d0124edcaba1da9c1d80c533d38aaeeb19b030a' }, localizedWords.entries.Lcz_Rooms, ": ", h("span", { key: '763ed5041d57cd8483bdfa13bedcc02227adfc58', class: "text-green-500" }, localizedWords.entries.Lcz_FreeInternet)))), h("div", { key: 'd192a4eaf7a2d6afad57277cf7dfbf71fcc36a27', class: "flex items-center gap-4" }, h("ir-icons", { key: 'ea0992259aad541d761b6aa45b1a52e9adbf3541', name: "car" }), h("p", { key: '8ba4c36211d0895fb8729ff15bf41e9d86551754' }, (_f = app_store.property) === null || _f === void 0 ? void 0 :
            _f.parking_offering.title, " ", localizedWords.entries.Lcz_At, ' ', formatAmount((_g = app_store.property) === null || _g === void 0 ? void 0 : _g.parking_offering.pricing, app_store.userPreferences.currency_id))), h("div", { key: '4a2f082d132491a8ec5c01de268caee3f5de8238', class: "flex items-center gap-4" }, h("ir-icons", { key: 'bc7fa91372a08a4e21974d782b5962fd3b8392f6', name: "pets" }), h("p", { key: '634c763e3066a5b3646032a1ba0247bf7ba180d8' }, (_h = app_store.property) === null || _h === void 0 ? void 0 : _h.pets_acceptance.title)), h("div", { key: '8a05f8a891acd579cd81456df87aec87f6036fa9', class: "flex items-center gap-4" }, h("ir-icons", { key: 'a27af95a775a8bdfa0d04362a990107031fac7e9', name: "bed" }), h("p", { key: '6c9e10b98d9c2d148484b6faebe3114a8362f39d' }, (_j = app_store.property) === null || _j === void 0 ? void 0 : _j.baby_cot_offering.title)), h("div", { key: 'fa145bc16e2e9cc1a8ae08b0f1b807dd122369ac', class: "flex flex-col flex-wrap gap-4 md:flex-row md:items-start md:justify-between md:gap-8 lg:gap-10" }, h("div", { key: 'e3cc0e489ace4f9d89414218457881bf0e135778', class: "flex gap-4 " }, h("ir-icons", { key: '4161b8867c408e20a501619cc8ddf39cbebc582a', name: "home" }), h("ul", { key: 'dec24bde0edc5f25f28c9a29c72691e6dfbc8e76' }, h("li", { key: '785368af7c5371ca80a78cb7f9b68f70e41e88cc', class: "text-start font-medium" }, localizedWords.entries.Lcz_PropertyFacilities), (_k = app_store.property) === null || _k === void 0 ? void 0 :
            _k.amenities.map(aminity => {
                if (aminity.amenity_type !== 'property') {
                    return null;
                }
                return (h("li", { key: aminity.code, class: "text-start" }, aminity.description));
            }))), h("div", { key: '2d0e45c22a87e028d9f8bda8b6baf7026a133174', class: "flex gap-4" }, h("ir-icons", { key: '5090e30b60a149d852dfaa5393a5747391d3ca1e', name: "football" }), h("ul", { key: '8db05892d36f13f77488ff4a556af325c2240fb1' }, h("li", { key: 'c75b80cd03f87763dd66c55ce49bf9698997b43d', class: "text-start font-medium" }, localizedWords.entries.Lcz_Activities), (_l = app_store.property) === null || _l === void 0 ? void 0 :
            _l.amenities.map(aminity => {
                if (aminity.amenity_type !== 'activity') {
                    return null;
                }
                return (h("li", { class: "text-start", key: aminity.code }, aminity.description));
            }))), h("div", { key: '6f6f686a6354016e9b43995a17939525dfa628a2', class: "flex gap-4 " }, h("ir-icons", { key: 'f00c89b72bc50b489dd2763192a279ab18d85403', name: "bell" }), h("ul", { key: '47bc356494b1df47f0cf08ac1a1dd5dc2962650c' }, h("li", { key: 'a29e035d70a203895dc51ee8ae5a41dcdd2626ea', class: "text-start font-medium" }, localizedWords.entries.Lcz_Services), (_m = app_store.property) === null || _m === void 0 ? void 0 :
            _m.amenities.map(aminity => {
                if (aminity.amenity_type !== 'service') {
                    return null;
                }
                return (h("li", { class: "text-start", key: aminity.code }, aminity.description));
            })))), ((_o = app_store.property) === null || _o === void 0 ? void 0 : _o.description.food_and_beverage) && (h("div", { key: '1c9eac904a29f68fd8c7a325c93dcae4165ec432', class: "flex items-center gap-4" }, h("ir-icons", { key: 'a7f189ebaea284c5f6b6082e7e260f2aadc2c4f1', name: "utencils" }), h("p", { key: '377351669902379b8b785c1e9927fefdc2b78801' }, h("span", { key: '55cd31688e57b57487f47996cc95db79aa0e53c9', class: "font-medium" }, localizedWords.entries['Lcz_FoodAndbeverage:'], " "), (_p = app_store.property) === null || _p === void 0 ? void 0 :
            _p.description.food_and_beverage))), h("div", { key: 'e0abe2f695e66f5e16ccc969545efd3fac493bbd', class: "flex items-center gap-4" }, h("ir-icons", { key: 'b824aa7d68b7fd2825919560eca8304cd9bc6218', name: "credit_card" }), h("p", { key: 'abd60987b76110d47f13397c16c0e9676da57dc3' }, h("span", { key: 'ee4afd0803abfba873aee11941b9d4baaf5519c3', class: "font-medium" }, localizedWords.entries.Lcz_AcceptedCreditCards, " "), (_q = app_store.property) === null || _q === void 0 ? void 0 :
            _q.allowed_cards.map((card, index) => {
                var _a;
                return (h("span", { key: card.id }, card.name, index < ((_a = app_store.property) === null || _a === void 0 ? void 0 : _a.allowed_cards.length) - 1 && h("span", null, " - ")));
            }))), ((_r = app_store.property) === null || _r === void 0 ? void 0 : _r.description.important_info) && (h("div", { key: '377fb0e2d3e1f2dd6a5dcab0b8dad1e93a4c8ec3', class: "flex items-center gap-4" }, h("ir-icons", { key: 'dd6118c80df2631c0987b4a82ba6bddc8ec91e22', name: "danger", svgClassName: "text-red-500" }), h("div", { key: '794fd22e89e96b5bdb41919f9a2c099f2e393dd2' }, h("p", { key: '70360e2d1653fbadad42e8b7affc444f17cedb0e' }, (_s = app_store.property) === null || _s === void 0 ? void 0 : _s.description.important_info), h("p", { key: '265a1e5fa7543e52b63a1f6e0ba0b04b761e015e' }, (_t = app_store.property) === null || _t === void 0 ? void 0 : _t.description.non_standard_conditions)))))));
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
