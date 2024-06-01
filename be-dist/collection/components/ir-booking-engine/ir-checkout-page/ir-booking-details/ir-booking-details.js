import app_store from "../../../../stores/app.store";
import booking_store from "../../../../stores/booking";
import { checkout_store, onCheckoutDataChange } from "../../../../stores/checkout.store";
import localizedWords from "../../../../stores/localization.store";
import { formatAmount, getDateDifference } from "../../../../utils/utils";
import { Host, h } from "@stencil/core";
export class IrBookingDetails {
    constructor() {
        this.errors = undefined;
        this.currentRatePlan = null;
    }
    componentWillLoad() {
        const result = {};
        Object.keys(booking_store.ratePlanSelections).map(roomTypeId => {
            result[roomTypeId] = {};
            return Object.keys(booking_store.ratePlanSelections[roomTypeId]).map(ratePlanId => {
                var _a;
                const r = booking_store.ratePlanSelections[roomTypeId][ratePlanId];
                if (r.reserved === 0) {
                    result[roomTypeId][ratePlanId] = r;
                }
                else {
                    if (!this.firstRoom) {
                        this.firstRoom = {
                            roomtypeId: roomTypeId,
                            ratePlanId,
                        };
                    }
                    result[roomTypeId][ratePlanId] = Object.assign(Object.assign({}, r), { checkoutVariations: Array(r.reserved).fill(r.selected_variation), checkoutBedSelection: r.is_bed_configuration_enabled ? Array(r.reserved).fill(r.roomtype.bedding_setup[0].code) : [], checkoutSmokingSelection: Array(r.reserved).fill(r.roomtype.smoking_option[0]) });
                    if (!checkout_store.modifiedGuestName && ((_a = r.guestName) === null || _a === void 0 ? void 0 : _a.length) === 0) {
                        const name = [...new Array(r.reserved)].map((_, i) => {
                            var _a, _b, _c;
                            if (i === 0 && !checkout_store.userFormData.bookingForSomeoneElse) {
                                return (_c = (((_a = checkout_store.userFormData) === null || _a === void 0 ? void 0 : _a.firstName) || '') + ' ' + (((_b = checkout_store.userFormData) === null || _b === void 0 ? void 0 : _b.lastName) || '')) !== null && _c !== void 0 ? _c : '';
                            }
                            return '';
                        });
                        result[roomTypeId][ratePlanId] = Object.assign(Object.assign({}, result[roomTypeId][ratePlanId]), { guestName: name });
                    }
                }
            });
        });
        booking_store.ratePlanSelections = Object.assign({}, result);
        onCheckoutDataChange('userFormData', newValue => {
            if (!checkout_store.modifiedGuestName) {
                this.updateGuestNames(newValue.bookingForSomeoneElse, newValue === null || newValue === void 0 ? void 0 : newValue.firstName, newValue === null || newValue === void 0 ? void 0 : newValue.lastName);
            }
        });
    }
    updateGuestNames(isBookingForSomeoneElse, firstName, lastName) {
        const result = {};
        Object.keys(booking_store.ratePlanSelections).forEach(roomTypeId => {
            result[roomTypeId] = {};
            Object.keys(booking_store.ratePlanSelections[roomTypeId]).forEach(ratePlanId => {
                const ratePlanSelection = booking_store.ratePlanSelections[roomTypeId][ratePlanId];
                if (this.firstRoom && this.firstRoom.ratePlanId === ratePlanId && this.firstRoom.roomtypeId === roomTypeId) {
                    let updatedGuestNames = [...ratePlanSelection.guestName];
                    updatedGuestNames[0] = isBookingForSomeoneElse ? '' : `${firstName || ''} ${lastName || ''}`.trim();
                    result[roomTypeId][ratePlanId] = Object.assign(Object.assign({}, ratePlanSelection), { guestName: updatedGuestNames });
                }
                else {
                    result[roomTypeId][ratePlanId] = ratePlanSelection;
                }
            });
        });
        booking_store.ratePlanSelections = Object.assign({}, result);
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
            return (h("div", { class: "section-item-footer-text" }, h("ir-icons", { name: 'ban_smoking', svgClassName: "size-4" }), h("p", null, smoking_option.description)));
        }
        return (h("ir-select", { icon: true, onValueChange: e => this.handleSmokeConfiguration(roomTypeId, ratePlanId, e.detail, index), value: checkoutSmokingSelection[index], data: smoking_option.allowed_smoking_options.map(s => ({ id: s.code, value: s.description })), class: "hidden md:block" }, h("ir-icons", { name: checkoutSmokingSelection[index] !== '002' ? 'smoking' : 'ban_smoking', slot: "icon" })));
    }
    render() {
        var _a, _b, _c, _d, _e;
        const total_nights = getDateDifference((_a = booking_store.bookingAvailabilityParams.from_date) !== null && _a !== void 0 ? _a : new Date(), (_b = booking_store.bookingAvailabilityParams.to_date) !== null && _b !== void 0 ? _b : new Date());
        const total_rooms = this.calculateTotalRooms();
        return (h(Host, { key: '482d4bb11571164b3336b72d5d32770204f85cbb' }, h("div", { key: 'ef25ae377aaaae19ff47e83a2c1d713e05f7e4f2', class: "w-full" }, h("section", { key: 'dcca8262942fe8cb9563dfad6e8c543f6d5a428f', class: "mb-5 flex flex-col flex-wrap items-center gap-2 rounded-md bg-gray-100 px-4 py-2 lg:flex-row" }, h("div", { key: '72efc18f19799a04b62f1586faefc7776e698d7f', class: "flex flex-1 items-center gap-2" }, h("ir-icons", { key: 'fe3a532d46ea37ab14c0c7750d7e43b75a213165', name: "bed" }), h("p", { key: '5c8a995aa2fdfe3e808742836beef19079403378' }, total_nights, " ", total_nights > 1 ? localizedWords.entries.Lcz_Nights : localizedWords.entries.Lcz_night, " - ", booking_store.bookingAvailabilityParams.adult_nbr, ' ', booking_store.bookingAvailabilityParams.adult_nbr > 1 ? localizedWords.entries.Lcz_Persons : localizedWords.entries.Lcz_Person, " - ", total_rooms, ' ', total_rooms > 1 ? localizedWords.entries.Lcz_Rooms : localizedWords.entries.Lcz_Room)), h("p", { key: '5f8fe1e89873948d6713f79dc85fa5af924c8d37', class: " text-right text-xs text-gray-500" }, (_c = booking_store.tax_statement) === null || _c === void 0 ? void 0 : _c.message)), h("section", { key: 'dba6afc44c6945f398e5c4c32ebb67d8939221f4', class: 'space-y-14' }, Object.keys(booking_store.ratePlanSelections).map(roomTypeId => {
            return Object.keys(booking_store.ratePlanSelections[roomTypeId]).map(ratePlanId => {
                const r = booking_store.ratePlanSelections[roomTypeId][ratePlanId];
                if (r.reserved === 0) {
                    return null;
                }
                return [...new Array(r.reserved)].map((_, index) => {
                    return (h("div", { class: "flex items-center justify-between" }, h("div", { class: "flex-1 space-y-2" }, h("div", null, h("div", { class: "flex items-center gap-3" }, h("div", { class: "flex flex-row items-center gap-3 " }, h("h3", { class: "font-semibold" }, r.roomtype.name), h("div", { class: 'hidden h-6  pt-0.5 md:inline-flex md:items-center md:justify-center' }, h("ir-button", { haveRightIcon: true, variants: "link", class: "text-sm", buttonClassName: "pl-0", buttonStyles: { paddingLeft: '0', fontSize: '12px', paddingTop: '0', paddingBottom: '0' }, onButtonClick: () => {
                            this.currentRatePlan = r.ratePlan;
                            this.dialogRef.openModal();
                        }, label: 'If I cancel?' }, h("ir-icons", { svgClassName: "size-4", slot: "right-icon", name: "circle_info" })))), h("div", { class: "ml-1 flex-1 " }, h("p", { class: "text-end text-base font-medium xl:text-xl" }, formatAmount(r.checkoutVariations[index].amount, app_store.userPreferences.currency_id)))), h("div", { class: 'flex items-center justify-between md:justify-end' }, h("div", { class: 'md:hidden' }, h("ir-button", { haveRightIcon: true, variants: "link", class: "text-sm", buttonClassName: "pl-0", buttonStyles: { paddingLeft: '0', fontSize: '12px' }, onButtonClick: () => {
                            this.currentRatePlan = r.ratePlan;
                            this.dialogRef.openModal();
                        }, label: 'If I cancel?' }, h("ir-icons", { svgClassName: "size-4", slot: "right-icon", name: "circle_info" }))), r.ratePlan.custom_text && h("p", { class: "max-w-[60%] text-right text-xs text-gray-500 md:w-full md:max-w-full" }, r.ratePlan.custom_text))), h("div", { class: "flex items-center gap-2.5" }, h("ir-input", { onInput: e => {
                            if (index === 0 && !checkout_store.modifiedGuestName && this.firstRoom.ratePlanId === ratePlanId && this.firstRoom.roomtypeId === roomTypeId) {
                                checkout_store.modifiedGuestName = true;
                            }
                            this.handleGuestNameChange(index, e, Number(ratePlanId), Number(roomTypeId));
                        }, value: r.guestName[index], label: localizedWords.entries.Lcz_GuestFullName, leftIcon: true, class: "w-full", placeholder: "", maxlength: 50, error: this.errors && r.guestName[index] === '', onInputBlur: e => {
                            if (!checkout_store.modifiedGuestName) {
                                return;
                            }
                            const target = e.target;
                            if (r.guestName[index].length < 2) {
                                target.setAttribute('data-state', 'error');
                                target.setAttribute('aria-invalid', 'true');
                            }
                            else {
                                if (target.hasAttribute('aria-invalid')) {
                                    target.setAttribute('aria-invalid', 'false');
                                }
                            }
                        }, onInputFocus: e => {
                            const target = e.target;
                            if (target.hasAttribute('data-state')) {
                                target.removeAttribute('data-state');
                            }
                        } }, h("ir-icons", { name: "user", slot: "left-icon", svgClassName: "size-4" })), h("ir-select", { variant: "double-line", value: (r.checkoutVariations[index].adult_nbr + r.checkoutVariations[index].child_nbr).toString(), label: localizedWords.entries.Lcz_RequiredCapacity, data: r.ratePlan.variations.map(v => ({
                            id: (v.adult_nbr + v.child_nbr).toString(),
                            value: v.adult_child_offering,
                        })), class: "hidden w-full sm:block", onValueChange: e => this.handleVariationChange(index, e, r.ratePlan.variations, Number(ratePlanId), Number(roomTypeId)) })), h("div", { class: "flex items-center gap-4" }, h("div", { class: "flex items-center gap-1 text-xs" }, h("ir-icons", { name: "utencils", svgClassName: "size-4" }), h("span", null, r.ratePlan.short_name)), this.renderSmokingView(r.roomtype.smoking_option, index, ratePlanId, roomTypeId, r.checkoutSmokingSelection), r.is_bed_configuration_enabled && (h("ir-select", { value: r.checkoutBedSelection[index], onValueChange: e => this.handleBedConfiguration(roomTypeId, ratePlanId, e.detail, index), data: r.roomtype.bedding_setup.map(b => ({ id: b.code, value: b.name })), icon: true }, h("ir-icons", { name: r.checkoutBedSelection[index] === 'kingsizebed' ? 'double_bed' : 'bed', slot: "icon" })))))));
                });
            });
        }))), h("ir-dialog", { key: 'fc00edb7c9b0adaa0075c7e6df2662105b5c9b79', ref: el => (this.dialogRef = el), onOpenChange: e => {
                if (!e.detail) {
                    this.currentRatePlan = null;
                }
            } }, h("div", { key: 'bf58a397775a7fcc3d5feaaabd450b7cb3aec4b6', slot: "modal-body", class: "p-4 md:p-6" }, h("p", { key: '2b0a1264708b823eaf1c59b4f4f8c9407a1ad618', innerHTML: (_d = this.currentRatePlan) === null || _d === void 0 ? void 0 : _d.cancelation }), h("p", { key: 'cc8b9d70e2029ed482d34d22f29ee3e553f972e4', innerHTML: (_e = this.currentRatePlan) === null || _e === void 0 ? void 0 : _e.guarantee })))));
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
    static get properties() {
        return {
            "errors": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "errors",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "currentRatePlan": {}
        };
    }
}
//# sourceMappingURL=ir-booking-details.js.map
