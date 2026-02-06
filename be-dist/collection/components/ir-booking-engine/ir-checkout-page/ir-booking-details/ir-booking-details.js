import { PaymentService } from "../../../../services/api/payment.service";
import VariationService from "../../../../services/app/variation.service";
// import { PropertyService } from '@/services/api/property.service';
import app_store from "../../../../stores/app.store";
import booking_store, { calculateTotalRooms, getPrepaymentAmount } from "../../../../stores/booking";
import { checkout_store, onCheckoutDataChange } from "../../../../stores/checkout.store";
import localizedWords from "../../../../stores/localization.store";
import { formatAmount, getDateDifference } from "../../../../utils/utils";
import { Host, h } from "@stencil/core";
export class IrBookingDetails {
    constructor() {
        this.currentRatePlan = null;
        this.isLoading = null;
        this.prepaymentAmount = 0;
        // private propertyService = new PropertyService();
        this.paymentService = new PaymentService();
        this.variationService = new VariationService();
    }
    componentWillLoad() {
        this.total_rooms = calculateTotalRooms();
        this.totalPersons = this.getTotalPersons();
        this.modifyBookings();
        onCheckoutDataChange('userFormData', newValue => {
            if (!checkout_store.modifiedGuestName) {
                this.updateGuestNames(newValue.bookingForSomeoneElse, newValue === null || newValue === void 0 ? void 0 : newValue.firstName, newValue === null || newValue === void 0 ? void 0 : newValue.lastName);
            }
        });
    }
    calculatePrepaymentAmount() {
        this.prepaymentChange.emit(getPrepaymentAmount());
    }
    getTotalPersons() {
        const { adult_nbr, child_nbr } = booking_store.bookingAvailabilityParams;
        return Number(adult_nbr) + Number(child_nbr);
    }
    modifyBookings() {
        var _a;
        try {
            // let isInfantNumberSet = false;
            const result = {};
            // const totalPersons = this.getTotalPersons();
            // const setInfantNumber = (child_nbr: number, adult_nbr: number) => {
            //   if (isInfantNumberSet||child_nbr === 0 || this.total_rooms > 1 || totalPersons > child_nbr + adult_nbr) {
            //     return -1;
            //   }
            //   isInfantNumberSet = true;
            //   console.log(adult_nbr)
            //   return Math.min(
            //     booking_store.childrenAges.reduce((prev, cur) => {
            //       if (Number(cur) < app_store.childrenStartAge) {
            //         return prev + 1;
            //       }
            //       return prev;
            //     }, 0),
            //     child_nbr,
            //   );
            // };
            const setInfantNumber = (child_nbr) => {
                return Math.min(booking_store.childrenAges.reduce((prev, cur) => {
                    if (Number(cur) < app_store.childrenStartAge) {
                        return prev + 1;
                    }
                    return prev;
                }, 0), child_nbr);
            };
            for (const roomtypeId in booking_store.ratePlanSelections) {
                if (booking_store.ratePlanSelections.hasOwnProperty(roomtypeId)) {
                    const roomtype = booking_store.ratePlanSelections[roomtypeId];
                    result[roomtypeId] = {};
                    for (const ratePlanId in roomtype) {
                        if (roomtype.hasOwnProperty(ratePlanId)) {
                            const ratePlan = roomtype[ratePlanId];
                            if (ratePlan.reserved === 0) {
                                result[roomtypeId][ratePlanId] = ratePlan;
                            }
                            else {
                                if (!this.firstRoom) {
                                    this.firstRoom = {
                                        roomtypeId,
                                        ratePlanId,
                                    };
                                }
                                result[roomtypeId][ratePlanId] = Object.assign(Object.assign({}, ratePlan), { checkoutVariations: Array(ratePlan.reserved).fill(ratePlan.selected_variation), checkoutBedSelection: ratePlan.is_bed_configuration_enabled ? Array(ratePlan.reserved).fill('-1') : [], checkoutSmokingSelection: Array(ratePlan.reserved).fill(ratePlan.roomtype.smoking_option[0]),
                                    // infant_nbr: Array(ratePlan.reserved).fill(
                                    //   ratePlan.selected_variation.child_nbr > 0 ? setInfantNumber(ratePlan.selected_variation.child_nbr, ratePlan.selected_variation.adult_nbr) : 0,
                                    // ),
                                    infant_nbr: Array(ratePlan.reserved).fill(ratePlan.selected_variation.child_nbr > 0 ? setInfantNumber(ratePlan.selected_variation.child_nbr) : 0) });
                            }
                            if (!checkout_store.modifiedGuestName && ((_a = ratePlan.guestName) === null || _a === void 0 ? void 0 : _a.length) === 0) {
                                const name = [...new Array(ratePlan.reserved)].map((_, i) => {
                                    var _a, _b;
                                    if (i === 0 && !checkout_store.userFormData.bookingForSomeoneElse && this.firstRoom.roomtypeId === roomtypeId && this.firstRoom.ratePlanId === ratePlanId) {
                                        return (((_a = checkout_store.userFormData) === null || _a === void 0 ? void 0 : _a.firstName) || '') + ' ' + (((_b = checkout_store.userFormData) === null || _b === void 0 ? void 0 : _b.lastName) || '') || '';
                                    }
                                    return '';
                                });
                                result[roomtypeId][ratePlanId] = Object.assign(Object.assign({}, result[roomtypeId][ratePlanId]), { guestName: name });
                            }
                        }
                    }
                }
            }
            booking_store.ratePlanSelections = Object.assign({}, result);
            this.calculatePrepaymentAmount();
        }
        catch (error) {
            console.error('modify Booking error', error);
        }
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
    handleGuestNameChange(index, e, rateplanId, roomTypeId) {
        var _a;
        const oldVariations = [...(_a = booking_store.ratePlanSelections[roomTypeId][rateplanId]) === null || _a === void 0 ? void 0 : _a.guestName];
        oldVariations[index] = e.target.value;
        booking_store.ratePlanSelections = Object.assign(Object.assign({}, booking_store.ratePlanSelections), { [roomTypeId]: Object.assign(Object.assign({}, booking_store.ratePlanSelections[roomTypeId]), { [rateplanId]: Object.assign(Object.assign({}, booking_store.ratePlanSelections[roomTypeId][rateplanId]), { guestName: oldVariations }) }) });
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
    async fetchCancellationMessage(applicable_policies) {
        var _a;
        this.cancellationMessage = (_a = this.paymentService.getCancellationMessage(applicable_policies, true)) === null || _a === void 0 ? void 0 : _a.message;
    }
    renderSmokingView(smoking_option, index, ratePlanId, roomTypeId, checkoutSmokingSelection) {
        if (smoking_option.code === '002') {
            return null;
        }
        if (smoking_option.code === '003') {
            return (h("div", { class: "ir-booking-details__footer-text" }, h("ir-icons", { name: 'ban_smoking', removeClassName: true, height: 16, width: 16 }), h("p", null, smoking_option.description)));
        }
        return (h("ir-select", { icon: true, style: { '--radius': '1rem' }, onValueChange: e => this.handleSmokeConfiguration(roomTypeId, ratePlanId, e.detail, index), value: checkoutSmokingSelection[index], data: smoking_option.allowed_smoking_options.map(s => ({ id: s.code, value: s.description })), class: "ir-booking-details__smoking-select" }, h("ir-icons", { name: checkoutSmokingSelection[index] !== '002' ? 'smoking' : 'ban_smoking', slot: "icon", removeClassName: true, height: 16, width: 16 })));
    }
    handleInfantNumberChange(roomTypeId, rateplanId, detail, index) {
        var _a, _b;
        let oldBedConfiguration = [];
        if ((_a = booking_store.ratePlanSelections[roomTypeId][rateplanId]) === null || _a === void 0 ? void 0 : _a.bed_configuration) {
            oldBedConfiguration = [...(_b = booking_store.ratePlanSelections[roomTypeId][rateplanId]) === null || _b === void 0 ? void 0 : _b.checkoutBedSelection];
        }
        oldBedConfiguration[index] = detail;
        booking_store.ratePlanSelections = Object.assign(Object.assign({}, booking_store.ratePlanSelections), { [roomTypeId]: Object.assign(Object.assign({}, booking_store.ratePlanSelections[roomTypeId]), { [rateplanId]: Object.assign(Object.assign({}, booking_store.ratePlanSelections[roomTypeId][rateplanId]), { infant_nbr: (() => {
                        const infants = [...booking_store.ratePlanSelections[roomTypeId][rateplanId].infant_nbr];
                        infants[index] = Number(detail);
                        return infants;
                    })() }) }) });
        this.calculatePrepaymentAmount();
    }
    calculateTotalPersons() {
        let count = 0;
        Object.keys(booking_store.ratePlanSelections).map(roomTypeId => {
            return Object.keys(booking_store.ratePlanSelections[roomTypeId]).map(ratePlanId => {
                const r = booking_store.ratePlanSelections[roomTypeId][ratePlanId];
                if (r.reserved !== 0) {
                    count += r.selected_variation.adult_nbr + r.selected_variation.child_nbr;
                }
            });
        });
        return count;
    }
    render() {
        var _a, _b;
        const total_nights = getDateDifference(booking_store.bookingAvailabilityParams.from_date, booking_store.bookingAvailabilityParams.to_date);
        // const this.total_rooms = calculateTotalRooms();
        const total_persons = this.calculateTotalPersons();
        return (h(Host, { key: '47c0c9d4fd0a5a5990f84eceabdf1d38aafb06e9' }, h("div", { key: 'f16f5430c0e91c69e264e7f38be4463b57fe3333', class: "ir-booking-details__container" }, h("section", { key: 'bdb0a048da4b6383fabd37acd3fd852e55eeeac4', class: "ir-booking-details__summary" }, h("div", { key: '4bdceb54216835bb6b60a775d995ffd6cf520a17', class: "ir-booking-details__summary-row" }, h("ir-icons", { key: '6dbaf1ac2abb1f8296000630c4bd2ea5b75efdbd', name: "bed", removeClassName: true, height: 20, width: 20 }), h("p", { key: '8adc0e755e266c01e4e3c890b233586f76166d71' }, total_nights, " ", total_nights > 1 ? localizedWords.entries.Lcz_Nights : localizedWords.entries.Lcz_night, " - ", total_persons, ' ', total_persons > 1 ? localizedWords.entries.Lcz_Persons : localizedWords.entries.Lcz_Person, " - ", this.total_rooms, ' ', this.total_rooms > 1 ? localizedWords.entries.Lcz_Rooms : localizedWords.entries.Lcz_Room)), h("p", { key: 'ab3be23d6815157e1a8b2efa7f97dad64af6db83', class: "ir-booking-details__summary-note" }, (_a = booking_store.tax_statement) === null || _a === void 0 ? void 0 : _a.message)), h("section", { key: '2071d9b9d701e3f0a3b3accebcae04f53d77859e', class: "ir-booking-details__rooms" }, (_b = Object.keys(booking_store === null || booking_store === void 0 ? void 0 : booking_store.ratePlanSelections)) === null || _b === void 0 ? void 0 : _b.map(roomTypeId => {
            return Object.keys(booking_store.ratePlanSelections[roomTypeId]).map(ratePlanId => {
                const r = booking_store.ratePlanSelections[roomTypeId][ratePlanId];
                if (r.reserved === 0) {
                    return null;
                }
                return [...new Array(r.reserved)].map((_, index) => {
                    var _a, _b, _c, _d, _e, _f;
                    if (this.isLoading === r.ratePlan.id) {
                        return h("div", { class: "ir-booking-details__room-loading" });
                    }
                    const { amount, gross } = this.variationService.calculateVariationAmount({
                        baseVariation: r.checkoutVariations[index],
                        variations: r.ratePlan.variations,
                        infants: r.infant_nbr[index],
                    });
                    const isInFreeCancellationZone = this.paymentService.checkFreeCancellationZone((_a = r.checkoutVariations[index]) === null || _a === void 0 ? void 0 : _a.applicable_policies);
                    return (h("div", { class: "ir-booking-details__room-block" }, h("div", { class: "ir-booking-details__room" }, h("div", { class: "ir-booking-details__room-content" }, h("div", null, h("div", { class: "ir-booking-details__room-header" }, h("div", { class: "ir-booking-details__room-title" }, h("h3", { class: "ir-booking-details__room-name" }, r.roomtype.name), r.ratePlan.is_non_refundable ? (h("p", { class: "ir-booking-details__badge" }, localizedWords.entries.Lcz_NonRefundable)) : (h("div", { class: "ir-booking-details__policy-container" }, h("ir-tooltip", { labelColors: isInFreeCancellationZone ? 'green' : 'default', class: `rateplan-tooltip`, style: { color: '#98a2b3' }, open_behavior: "hover", label: isInFreeCancellationZone ? localizedWords.entries.Lcz_FreeCancellation : localizedWords.entries.Lcz_IfICancel, message: this.cancellationMessage, onTooltipOpenChange: async (e) => {
                            if (e.detail) {
                                this.currentRatePlan = r.ratePlan;
                                await this.fetchCancellationMessage(r.checkoutVariations[index].applicable_policies);
                            }
                        } })))))), h("div", { class: "ir-booking-details__rate-info" }, h("div", { class: "ir-booking-details__rate-description" }, h("ir-icons", { name: "utencils", removeClassName: true, height: 16, width: 16 }), h("p", { class: "ir-booking-details__rate-text" }, h("span", null, r.ratePlan.short_name))), r.ratePlan.custom_text && (h("span", { class: "ir-booking-details__rate-custom-text", title: r.ratePlan.custom_text }, r.ratePlan.custom_text)))), h("div", { class: "ir-booking-details__price-wrapper" }, h("p", { class: "ir-booking-details__price", style: { fontWeight: gross > amount ? '400' : '700' } }, formatAmount(amount, app_store.userPreferences.currency_id)), gross > amount && h("p", { class: "ir-booking-details__price ir-booking-details__price--gross" }, formatAmount(gross, app_store.userPreferences.currency_id)), gross > amount && h("p", { class: "ir-booking-details__tax-note" }, localizedWords.entries.Lcz_IncludingTaxesAndFees))), h("div", { class: "ir-booking-details__guest-row" }, h("ir-input", { onInput: e => {
                            if (index === 0 && !checkout_store.modifiedGuestName && this.firstRoom.ratePlanId === ratePlanId && this.firstRoom.roomtypeId === roomTypeId) {
                                checkout_store.modifiedGuestName = true;
                            }
                            this.handleGuestNameChange(index, e, Number(ratePlanId), Number(roomTypeId));
                        }, value: r.guestName[index], label: localizedWords.entries.Lcz_GuestFullName, leftIcon: true, class: "ir-booking-details__guest-input", placeholder: "", maxlength: 50, error: this.errors && r.guestName[index] === '', onInputBlur: e => {
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
                        } }, h("ir-icons", { name: "user", slot: "left-icon", removeClassName: true, height: 16, width: 16 })), h("p", { class: "ir-booking-details__capacity", innerHTML: this.variationService.formatVariationBasedOnInfants({
                            baseVariation: r.checkoutVariations[index],
                            variations: r.ratePlan.variations,
                            infants: r.infant_nbr[index],
                        }) })), r.selected_variation.child_nbr > 0 &&
                        booking_store.childrenAges.some(age => Number(age) < app_store.childrenStartAge) &&
                        (this.totalPersons > r.checkoutVariations[index].adult_nbr + r.checkoutVariations[index].child_nbr || this.total_rooms > 1) && (h("div", { class: "ir-booking-details__infant-row" }, h("div", { class: "ir-booking-details__infant-label" }, h("ir-icons", { name: "baby", removeClassName: true, height: 16, width: 16 }), h("p", { class: "ir-booking-details__infant-text" }, (_b = localizedWords.entries) === null || _b === void 0 ? void 0 : _b.Lcz_AnyInfant)), h("ir-select", { style: { '--radius': '1rem' }, "data-state": this.errors && Number(r.infant_nbr) === -1 ? 'error' : '', class: "ir-booking-details__infant-select", value: r.infant_nbr[index], onValueChange: e => this.handleInfantNumberChange(roomTypeId, ratePlanId, e.detail, index), data: [
                            { id: -1, value: '...' },
                            { id: 0, value: (_c = localizedWords.entries) === null || _c === void 0 ? void 0 : _c.Lcz_No },
                            ...[...Array(Math.min(r.selected_variation.child_nbr, 3))].map((_, i) => ({ id: i + 1, value: (i + 1).toString() })),
                        ] }))), h("div", { class: "ir-booking-details__options-row" }, this.renderSmokingView(r.roomtype.smoking_option, index, ratePlanId, roomTypeId, r.checkoutSmokingSelection), r.is_bed_configuration_enabled && ((_d = app_store.setup_entries) === null || _d === void 0 ? void 0 : _d.bedPreferenceType.length) > 0 && (h("ir-select", { style: { '--radius': '1rem' }, "data-state": this.errors && r.checkoutBedSelection[index] === '-1' ? 'error' : '', value: r.checkoutBedSelection[index], onValueChange: e => this.handleBedConfiguration(roomTypeId, ratePlanId, e.detail, index), data: [
                            { id: '-1', value: `${localizedWords.entries.Lcz_Bedconfiguration}...` },
                            ...(_f = (_e = app_store.setup_entries) === null || _e === void 0 ? void 0 : _e.bedPreferenceType) === null || _f === void 0 ? void 0 : _f.map(b => {
                                var _a;
                                return ({
                                    id: b.CODE_NAME,
                                    value: b[`CODE_VALUE_${((_a = app_store.userPreferences.language_id) !== null && _a !== void 0 ? _a : 'en').toUpperCase()}`],
                                });
                            }),
                        ], class: "ir-booking-details__bed-select", icon: true }, h("ir-icons", { name: r.checkoutBedSelection[index] === 'kingsizebed' ? 'double_bed' : 'bed', slot: "icon", removeClassName: true, height: 16, width: 16 }))))));
                });
            });
        })))));
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
                "getter": false,
                "setter": false,
                "attribute": "errors",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "currentRatePlan": {},
            "isLoading": {},
            "cancellationMessage": {},
            "prepaymentAmount": {}
        };
    }
    static get events() {
        return [{
                "method": "prepaymentChange",
                "name": "prepaymentChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=ir-booking-details.js.map
