import app_store from "../../../../stores/app.store";
import booking_store from "../../../../stores/booking";
import { checkout_store } from "../../../../stores/checkout.store";
import { formatAmount, getDateDifference } from "../../../../utils/utils";
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
        const selectedVariation = variations.find(v => (v.adult_nbr + v.child_nbr).toString() === value);
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
        return (h(Host, { key: 'f44b5902db27e69d1c4971f0ad80d928b1cf6758' }, h("div", { key: 'd4aee00762e24d5d60e44d061f2016433e24b90d', class: "w-full" }, h("section", { key: 'b6bed44d6dd4b34577943b8add8d686d949e41d7', class: "bg-gray-100 py-2 px-4 rounded-md flex items-center gap-2 mb-5" }, h("ir-icons", { key: 'c462e0f092cf34bd2fd162bee39de50be383bf4f', name: "bed" }), h("p", { key: 'ccd20c77e2a0ee194d4b82d36e619fd7d65d997c' }, total_nights, " ", total_nights > 1 ? 'nights' : 'night', " - ", booking_store.bookingAvailabilityParams.adult_nbr, ' ', booking_store.bookingAvailabilityParams.adult_nbr > 1 ? 'persons' : 'person', " - ", total_rooms, " ", total_rooms > 1 ? 'rooms' : 'room')), h("section", { key: 'cd88854d91d518d45f7f752ef34bead9dd48c7c8', class: 'space-y-2' }, Object.keys(booking_store.ratePlanSelections).map(roomTypeId => {
            return Object.keys(booking_store.ratePlanSelections[roomTypeId]).map(ratePlanId => {
                const r = booking_store.ratePlanSelections[roomTypeId][ratePlanId];
                if (r.reserved === 0) {
                    return null;
                }
                return [...new Array(r.reserved)].map((_, index) => {
                    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                    return (h("div", { class: "flex items-center justify-between" }, h("div", { class: "space-y-4 flex-1 xl:max-w-[65%]" }, h("div", null, h("div", { class: "flex md:items-center gap-3" }, h("div", { class: "flex flex-col md:flex-row gap-3 md:items-center" }, h("h3", { class: "font-semibold" }, r.roomtype.name), h("ir-button", { haveRightIcon: true, variants: "link", class: "text-sm", buttonClassName: "pl-0", buttonStyles: { paddingLeft: '0' }, onButtonClick: () => {
                            this.currentRatePlan = r.ratePlan;
                            this.dialogRef.openModal();
                        }, label: "View conditions" }, h("ir-icons", { svgClassName: "size-4", slot: "right-icon", name: "circle_info" }))), h("div", { class: "text-right flex-1 ml-1 xl:hidden" }, h("p", { class: "font-medium text-base" }, formatAmount(r.checkoutVariations[index].amount, app_store.userPreferences.currency_id)))), h("p", { class: "text-gray-500 text-xs text-right xl:hidden" }, (_a = booking_store.tax_statement) === null || _a === void 0 ? void 0 : _a.message)), h("div", { class: "flex items-center gap-2.5" }, h("ir-input", { readonly: !((_b = checkout_store.userFormData) === null || _b === void 0 ? void 0 : _b.bookingForSomeoneElse), onInput: e => this.handleGuestNameChange(index, e, Number(ratePlanId), Number(roomTypeId)), value: ((_c = checkout_store.userFormData) === null || _c === void 0 ? void 0 : _c.bookingForSomeoneElse)
                            ? r.guestName[index]
                            : (_f = (((_d = checkout_store.userFormData) === null || _d === void 0 ? void 0 : _d.firstName) || '') + ' ' + (((_e = checkout_store.userFormData) === null || _e === void 0 ? void 0 : _e.lastName) || '')) !== null && _f !== void 0 ? _f : '', label: "Guest full name", leftIcon: true, class: "w-full", placeholder: "" }, h("ir-icons", { name: "user", slot: "left-icon" })), h("ir-select", { variant: "double-line", value: (r.checkoutVariations[index].adult_nbr + r.checkoutVariations[index].child_nbr).toString(), label: "Required capacity", data: (_h = (_g = r.ratePlan) === null || _g === void 0 ? void 0 : _g.variations) === null || _h === void 0 ? void 0 : _h.map(v => ({
                            value: (v.adult_nbr + v.child_nbr).toString(),
                            id: v.adult_child_offering,
                        })), class: "hidden md:block w-full", onValueChange: e => this.handleVariationChange(index, e, r.ratePlan.variations, Number(ratePlanId), Number(roomTypeId)) })), h("div", { class: "flex items-center gap-4" }, h("div", { class: "flex items-center gap-2.5 text-sm" }, h("ir-icons", { name: "utencils" }), h("span", null, r.ratePlan.short_name)), this.renderSmokingView(r.roomtype.smoking_option, index, ratePlanId, roomTypeId, r.checkoutSmokingSelection), r.is_bed_configuration_enabled && (h("ir-select", { value: r.checkoutBedSelection[index], onValueChange: e => this.handleBedConfiguration(roomTypeId, ratePlanId, e.detail, index), data: r.roomtype.bedding_setup.map(b => ({ id: b.code, value: b.name })), icon: true }, h("ir-icons", { name: r.checkoutBedSelection[index] === 'kingsizebed' ? 'double_bed' : 'bed', slot: "icon" }))))), h("div", { class: " hidden text-right text-xs ml-1 xl:block" }, h("p", { class: "font-medium text-xl" }, formatAmount(r.checkoutVariations[index].amount, app_store.userPreferences.currency_id)), h("p", { class: "text-gray-500 line-clamp-2" }, (_j = booking_store.tax_statement) === null || _j === void 0 ? void 0 : _j.message))));
                });
            });
        }))), h("ir-dialog", { key: '97e45e94b8cdb164e4e87425ea42ddd3e6637005', ref: el => (this.dialogRef = el), onOpenChange: e => {
                if (!e.detail) {
                    this.currentRatePlan = null;
                }
            } }, h("div", { key: 'bb8b63806321586ee62094250595bf129a496428', slot: "modal-body", class: "p-4 md:p-6" }, h("h3", { key: 'a3f9e3936cba54bec71768f61e39aa5d5ec30f2c', class: 'text-xl font-medium mb-4' }, (_c = this.currentRatePlan) === null || _c === void 0 ? void 0 :
            _c.name, " Conditions"), h("p", { key: 'c5f667a75613789a99223345d1d327fbe69ff240', innerHTML: (_d = this.currentRatePlan) === null || _d === void 0 ? void 0 : _d.guarantee }), h("p", { key: '59a880279d8f4b39d64db0bfc3084b2e8de9a7b2', innerHTML: (_e = this.currentRatePlan) === null || _e === void 0 ? void 0 : _e.cancelation })))));
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
