import app_store from "../../../stores/app.store";
import booking_store from "../../../stores/booking";
import { checkout_store } from "../../../stores/checkout.store";
import { formatAmount, getDateDifference } from "../../../utils/utils";
import { Host, h } from "@stencil/core";
export class IrBookingDetails {
    constructor() {
        this.currentRatePlan = null;
    }
    componentWillLoad() {
        const result = {};
        Object.keys(booking_store.ratePlanSelections).map(roomTypeId => {
            result[roomTypeId] = {};
            return Object.keys(booking_store.ratePlanSelections[roomTypeId]).map(ratePlanId => {
                const r = booking_store.ratePlanSelections[roomTypeId][ratePlanId];
                if (r.reserved === 0) {
                    result[roomTypeId][ratePlanId] = r;
                }
                else {
                    result[roomTypeId][ratePlanId] = Object.assign(Object.assign({}, r), { checkoutVariations: Array(r.reserved).fill(r.selected_variation), guestName: Array(r.reserved).fill(''), checkoutBedSelection: r.is_bed_configuration_enabled ? Array(r.reserved).fill(r.roomtype.bedding_setup[0].code) : [], checkoutSmokingSelection: Array(r.reserved).fill(r.roomtype.smoking_option[0]) });
                }
            });
        });
        booking_store.ratePlanSelections = Object.assign({}, result);
        console.log(booking_store.ratePlanSelections);
    }
    calculateTotalRooms() {
        return Object.values(booking_store.ratePlanSelections).reduce((total, value) => {
            return (total +
                Object.values(value).reduce((innerTotal, ratePlan) => {
                    if (ratePlan.reserved === 0) {
                        return innerTotal;
                    }
                    return innerTotal + ratePlan.reserved;
                }, 0));
        }, 0);
    }
    handleGuestNameChange(index, e, rateplanId, roomTypeId) {
        var _a;
        const oldVariations = [...(_a = booking_store.ratePlanSelections[roomTypeId][rateplanId]) === null || _a === void 0 ? void 0 : _a.guestName];
        oldVariations[index] = e.target.value;
        booking_store.ratePlanSelections = Object.assign(Object.assign({}, booking_store.ratePlanSelections), { [roomTypeId]: Object.assign(Object.assign({}, booking_store.ratePlanSelections[roomTypeId]), { [rateplanId]: Object.assign(Object.assign({}, booking_store.ratePlanSelections[roomTypeId][rateplanId]), { guestName: oldVariations }) }) });
    }
    handleVariationChange(index, e, variations, rateplanId, roomTypeId) {
        var _a;
        e.stopImmediatePropagation();
        e.stopPropagation();
        const value = e.detail;
        const selectedVariation = variations.find(variation => variation.adult_child_offering === value);
        if (!selectedVariation) {
            return;
        }
        const oldVariations = [...(_a = booking_store.ratePlanSelections[roomTypeId][rateplanId]) === null || _a === void 0 ? void 0 : _a.checkoutVariations];
        oldVariations[index] = selectedVariation;
        booking_store.ratePlanSelections = Object.assign(Object.assign({}, booking_store.ratePlanSelections), { [roomTypeId]: Object.assign(Object.assign({}, booking_store.ratePlanSelections[roomTypeId]), { [rateplanId]: Object.assign(Object.assign({}, booking_store.ratePlanSelections[roomTypeId][rateplanId]), { checkoutVariations: oldVariations }) }) });
    }
    handleBedConfiguration(roomTypeId, rateplanId, detail, index) {
        var _a, _b;
        let oldBedConfiguration = [];
        if ((_a = booking_store.ratePlanSelections[roomTypeId][rateplanId]) === null || _a === void 0 ? void 0 : _a.bed_configuration) {
            oldBedConfiguration = [...(_b = booking_store.ratePlanSelections[roomTypeId][rateplanId]) === null || _b === void 0 ? void 0 : _b.checkoutBedSelection];
        }
        oldBedConfiguration[index] = detail;
        booking_store.ratePlanSelections = Object.assign(Object.assign({}, booking_store.ratePlanSelections), { [roomTypeId]: Object.assign(Object.assign({}, booking_store.ratePlanSelections[roomTypeId]), { [rateplanId]: Object.assign(Object.assign({}, booking_store.ratePlanSelections[roomTypeId][rateplanId]), { checkoutBedSelection: oldBedConfiguration }) }) });
    }
    handleSmokeConfiguration(roomTypeId, rateplanId, detail, index) {
        var _a;
        let oldSmokingConfiguration = [...(_a = booking_store.ratePlanSelections[roomTypeId][rateplanId]) === null || _a === void 0 ? void 0 : _a.checkoutSmokingSelection];
        oldSmokingConfiguration[index] = detail;
        booking_store.ratePlanSelections = Object.assign(Object.assign({}, booking_store.ratePlanSelections), { [roomTypeId]: Object.assign(Object.assign({}, booking_store.ratePlanSelections[roomTypeId]), { [rateplanId]: Object.assign(Object.assign({}, booking_store.ratePlanSelections[roomTypeId][rateplanId]), { checkoutSmokingSelection: oldSmokingConfiguration }) }) });
    }
    renderSmokingView(smoking_option, index, ratePlanId, roomTypeId, checkoutSmokingSelection) {
        if (smoking_option.code === '002') {
            return null;
        }
        if (smoking_option.code === '003') {
            return (h("div", { class: "flex items-center gap-2.5" }, h("ir-icons", { name: 'ban_smoking' }), h("p", null, smoking_option.description)));
        }
        return (h("ir-select", { icon: true, onValueChange: e => this.handleSmokeConfiguration(roomTypeId, ratePlanId, e.detail, index), value: checkoutSmokingSelection[index], data: smoking_option.allowed_smoking_options.map(s => ({ id: s.code, value: s.description })), class: "hidden md:block" }, h("ir-icons", { name: checkoutSmokingSelection[index] !== '002' ? 'smoking' : 'ban_smoking', slot: "icon" })));
    }
    render() {
        var _a, _b, _c, _d, _e;
        const total_nights = getDateDifference((_a = booking_store.bookingAvailabilityParams.from_date) !== null && _a !== void 0 ? _a : new Date(), (_b = booking_store.bookingAvailabilityParams.to_date) !== null && _b !== void 0 ? _b : new Date());
        const total_rooms = this.calculateTotalRooms();
        return (h(Host, { key: '802b3de33d9f23a22a8e53c73c23e0eba815e55d' }, h("div", { key: '0bce264c725f1a52cc53eaf1f2eb3846a156d6d0', class: "w-full" }, h("section", { key: '442014ead3ae2a16ae04cca4a80ac36821a055e2', class: "bg-gray-100 py-2 px-4 rounded-md flex items-center gap-2 mb-5" }, h("ir-icons", { key: 'eaf361f9814b7fba1f256f27c3f118564223bc70', name: "bed" }), h("p", { key: '8e4ce72e83938b11d86b838fdf4d8756cf9cc24a' }, total_nights, " ", total_nights > 1 ? 'nights' : 'night', " - ", booking_store.bookingAvailabilityParams.adult_nbr, ' ', booking_store.bookingAvailabilityParams.adult_nbr > 1 ? 'persons' : 'person', " - ", total_rooms, " ", total_rooms > 1 ? 'rooms' : 'room')), h("section", { key: '9fc3c2f581d32a7c84eecc3248b65b7e8947a683', class: 'space-y-2' }, Object.keys(booking_store.ratePlanSelections).map(roomTypeId => {
            return Object.keys(booking_store.ratePlanSelections[roomTypeId]).map(ratePlanId => {
                const r = booking_store.ratePlanSelections[roomTypeId][ratePlanId];
                if (r.reserved === 0) {
                    return null;
                }
                return [...new Array(r.reserved)].map((_, index) => {
                    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
                    return (h("div", { class: "flex items-center justify-between" }, h("div", { class: "space-y-4 flex-1 xl:max-w-[65%]" }, h("div", null, h("div", { class: "flex md:items-center gap-3" }, h("div", { class: "flex flex-col md:flex-row gap-3 md:items-center" }, h("h3", { class: "font-semibold" }, r.roomtype.name), h("ir-button", { haveRightIcon: true, variants: "link", class: "text-sm", buttonClassName: "pl-0", buttonStyles: { paddingLeft: '0' }, onButtonClick: () => {
                            this.currentRatePlan = r.ratePlan;
                            this.dialogRef.openModal();
                        }, label: "View conditions" }, h("ir-icons", { svgClassName: "size-4", slot: "right-icon", name: "circle_info" }))), h("div", { class: "text-right flex-1 ml-1 xl:hidden" }, h("p", { class: "font-medium text-base" }, formatAmount(r.checkoutVariations[index].amount, app_store.userPreferences.currency_id)))), h("p", { class: "text-gray-500 text-xs text-right xl:hidden" }, (_a = booking_store.tax_statement) === null || _a === void 0 ? void 0 : _a.message)), h("div", { class: "flex items-center gap-2.5" }, h("ir-input", { readonly: !((_b = checkout_store.userFormData) === null || _b === void 0 ? void 0 : _b.bookingForSomeoneElse), onInput: e => this.handleGuestNameChange(index, e, Number(ratePlanId), Number(roomTypeId)), value: ((_c = checkout_store.userFormData) === null || _c === void 0 ? void 0 : _c.bookingForSomeoneElse)
                            ? r.guestName[index]
                            : (_f = (((_d = checkout_store.userFormData) === null || _d === void 0 ? void 0 : _d.firstName) || '') + ' ' + (((_e = checkout_store.userFormData) === null || _e === void 0 ? void 0 : _e.lastName) || '')) !== null && _f !== void 0 ? _f : '', label: "Guest full name", leftIcon: true, class: "w-full", placeholder: "" }, h("ir-icons", { name: "user", slot: "left-icon" })), h("ir-select", { variant: "double-line", value: (_g = r.checkoutVariations[index]) === null || _g === void 0 ? void 0 : _g.adult_child_offering, label: "Required capacity", data: (_j = (_h = r.ratePlan) === null || _h === void 0 ? void 0 : _h.variations) === null || _j === void 0 ? void 0 : _j.map(v => ({
                            value: v.adult_child_offering,
                            id: v.adult_child_offering,
                        })), class: "hidden md:block w-full", onValueChange: e => this.handleVariationChange(index, e, r.ratePlan.variations, Number(ratePlanId), Number(roomTypeId)) })), h("div", { class: "flex items-center gap-4" }, h("div", { class: "flex items-center gap-2.5 text-sm" }, h("ir-icons", { name: "utencils" }), h("span", null, r.ratePlan.short_name)), this.renderSmokingView(r.roomtype.smoking_option, index, ratePlanId, roomTypeId, r.checkoutSmokingSelection), r.is_bed_configuration_enabled && (h("ir-select", { value: r.checkoutBedSelection[index], onValueChange: e => this.handleBedConfiguration(roomTypeId, ratePlanId, e.detail, index), data: r.roomtype.bedding_setup.map(b => ({ id: b.code, value: b.name })), icon: true }, h("ir-icons", { name: r.checkoutBedSelection[index] === 'kingsizebed' ? 'double_bed' : 'bed', slot: "icon" }))))), h("div", { class: " hidden text-right text-xs ml-1 xl:block" }, h("p", { class: "font-medium text-xl" }, formatAmount(r.checkoutVariations[index].amount, app_store.userPreferences.currency_id)), h("p", { class: "text-gray-500 line-clamp-2" }, (_k = booking_store.tax_statement) === null || _k === void 0 ? void 0 : _k.message))));
                });
            });
        }))), h("ir-dialog", { key: 'e5933249b6196be50a510b5b07b1e9b7f9d52f61', ref: el => (this.dialogRef = el), onOpenChange: e => {
                if (!e.detail) {
                    this.currentRatePlan = null;
                }
            } }, h("div", { key: 'd102e002587b0e72c2bae5bbf74020e0c17d0af7', slot: "modal-body", class: "p-4 md:p-6" }, h("h3", { key: 'e9c2ee6ab52240ec54e30a0587e4f17dce0f3a09', class: 'text-xl font-medium mb-4' }, (_c = this.currentRatePlan) === null || _c === void 0 ? void 0 :
            _c.name, " Conditions"), h("p", { key: '578d4753f6783f787834b5f68bad8225066c7c51', innerHTML: (_d = this.currentRatePlan) === null || _d === void 0 ? void 0 : _d.guarantee }), h("p", { key: '354395bd7b1b7361afdd7c781abc652f113644a8', innerHTML: (_e = this.currentRatePlan) === null || _e === void 0 ? void 0 : _e.cancelation })))));
    }
    static get is() { return "ir-booking-details"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-booking-details.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-booking-details.css"]
        };
    }
    static get states() {
        return {
            "currentRatePlan": {}
        };
    }
}
//# sourceMappingURL=ir-booking-details.js.map
