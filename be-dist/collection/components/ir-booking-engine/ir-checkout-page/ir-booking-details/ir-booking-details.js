import { PaymentService } from "../../../../services/api/payment.service";
import VariationService from "../../../../services/app/variation.service";
// import { PropertyService } from '@/services/api/property.service';
import app_store from "../../../../stores/app.store";
import booking_store, { calculateTotalRooms } from "../../../../stores/booking";
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
        const agent = booking_store.bookingAvailabilityParams.agent;
        if (agent && agent.payment_mode.code === '001') {
            return this.prepaymentChange.emit(0);
        }
        let total = 0;
        for (const roomtypeId in booking_store.ratePlanSelections) {
            for (const rateplanId in booking_store.ratePlanSelections[roomtypeId]) {
                const rateplan = booking_store.ratePlanSelections[roomtypeId][rateplanId];
                console.log(rateplan.checkoutVariations);
                rateplan.checkoutVariations.map((v, index) => {
                    const variation = this.variationService.getVariationBasedOnInfants({ baseVariation: v, variations: rateplan.ratePlan.variations, infants: rateplan.infant_nbr[index] });
                    total += variation.prepayment_amount_gross;
                });
            }
        }
        this.prepaymentChange.emit(total);
    }
    getTotalPersons() {
        const { adult_nbr, child_nbr } = booking_store.bookingAvailabilityParams;
        return Number(adult_nbr) + Number(child_nbr);
    }
    modifyBookings() {
        var _a;
        try {
            let isInfantNumberSet = false;
            const result = {};
            const totalPersons = this.getTotalPersons();
            const setInfantNumber = (child_nbr, adult_nbr) => {
                if (isInfantNumberSet || child_nbr === 0 || this.total_rooms > 1 || totalPersons > child_nbr + adult_nbr) {
                    return -1;
                }
                isInfantNumberSet = true;
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
                                result[roomtypeId][ratePlanId] = Object.assign(Object.assign({}, ratePlan), { checkoutVariations: Array(ratePlan.reserved).fill(ratePlan.selected_variation), checkoutBedSelection: ratePlan.is_bed_configuration_enabled ? Array(ratePlan.reserved).fill('-1') : [], checkoutSmokingSelection: Array(ratePlan.reserved).fill(ratePlan.roomtype.smoking_option[0]), infant_nbr: Array(ratePlan.reserved).fill(ratePlan.selected_variation.child_nbr > 0 ? setInfantNumber(ratePlan.selected_variation.child_nbr, ratePlan.selected_variation.adult_nbr) : 0) });
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
    async fetchCancelationMessage(applicable_policies) {
        var _a;
        this.cancelationMessage = this.cancelationMessage = (_a = this.paymentService.getCancelationMessage(applicable_policies, true)) === null || _a === void 0 ? void 0 : _a.message;
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
        var _a, _b, _c;
        const total_nights = getDateDifference(booking_store.bookingAvailabilityParams.from_date, booking_store.bookingAvailabilityParams.to_date);
        // const this.total_rooms = calculateTotalRooms();
        const total_persons = this.calculateTotalPersons();
        return (h(Host, { key: '4f8dc65ca23292bb3ff6a541c34b404895e9004a' }, h("div", { key: '9e64aec373f9a4f3cbd51ab6cf07976d9bbad260', class: "w-full" }, h("section", { key: 'a00901d1964dfa9f88162576153391cc9776f22f', class: "mb-5 flex flex-col flex-wrap items-center gap-2 rounded-md bg-gray-100 px-4 py-2 lg:flex-row" }, h("div", { key: 'b1e20af8d2662a26d160caa04194d92ebd723455', class: "flex flex-1 items-center gap-2" }, h("ir-icons", { key: '8b128a1f38107c4b4d4edbe47d7c7bdf389e039e', name: "bed" }), h("p", { key: '9b2bc33d435e0041c7c6a18ed1418b607af5896f' }, total_nights, " ", total_nights > 1 ? localizedWords.entries.Lcz_Nights : localizedWords.entries.Lcz_night, " - ", total_persons, ' ', total_persons > 1 ? localizedWords.entries.Lcz_Persons : localizedWords.entries.Lcz_Person, " - ", this.total_rooms, ' ', this.total_rooms > 1 ? localizedWords.entries.Lcz_Rooms : localizedWords.entries.Lcz_Room)), h("p", { key: '37f8e76f32b4013bf68f704c0abd812d0cb43b21', class: " text-right text-xs text-gray-500" }, (_a = booking_store.tax_statement) === null || _a === void 0 ? void 0 : _a.message)), h("section", { key: '3cbf90b7e195fab5b90a40da64c9be16bb484583', class: 'space-y-9' }, Object.keys(booking_store.ratePlanSelections).map(roomTypeId => {
            return Object.keys(booking_store.ratePlanSelections[roomTypeId]).map(ratePlanId => {
                const r = booking_store.ratePlanSelections[roomTypeId][ratePlanId];
                if (r.reserved === 0) {
                    return null;
                }
                return [...new Array(r.reserved)].map((_, index) => {
                    var _a, _b, _c, _d, _e;
                    if (this.isLoading === r.ratePlan.id) {
                        return h("div", { class: "h-16 animate-pulse rounded-md bg-gray-200" });
                    }
                    return (h("div", { class: "flex items-center justify-between" }, h("div", { class: "flex-1 space-y-2" }, h("div", null, h("div", { class: "flex items-center gap-3" }, h("div", { class: "flex flex-row items-center gap-3 " }, h("h3", { class: "font-semibold" }, r.roomtype.name), r.ratePlan.is_non_refundable ? (h("p", { class: "text-xs text-[var(--ir-green)]" }, localizedWords.entries.Lcz_NonRefundable)) : (h("div", { class: 'inline-flex  h-6 items-center justify-center pt-0.5' }, h("ir-button", { haveRightIcon: true, variants: "link", class: "text-sm", buttonClassName: "pl-0", buttonStyles: { paddingLeft: '0', fontSize: '12px', paddingTop: '0', paddingBottom: '0' }, onButtonClick: async () => {
                            this.currentRatePlan = r.ratePlan;
                            await this.fetchCancelationMessage(r.checkoutVariations[index].applicable_policies);
                            this.dialogRef.openModal();
                        }, label: localizedWords.entries.Lcz_IfICancel }, h("ir-icons", { svgClassName: "size-4", slot: "right-icon", name: "circle_info" }))))), h("div", { class: "ml-1 flex-1 " }, h("p", { class: "text-end text-base font-medium xl:text-xl" }, formatAmount(this.variationService.calculateVariationAmount({
                        baseVariation: r.checkoutVariations[index],
                        variations: r.ratePlan.variations,
                        infants: r.infant_nbr[index],
                    }), app_store.userPreferences.currency_id))))), h("div", { class: "flex items-center gap-1 pb-2 text-sm" }, h("ir-icons", { name: "utencils", svgClassName: "size-4" }), h("p", { class: "line-clamp-3" }, h("span", null, r.ratePlan.short_name), r.ratePlan.custom_text && h("span", { class: "mx-1 max-w-[60%] text-right  text-gray-500 md:w-full md:max-w-full" }, r.ratePlan.custom_text))), h("div", { class: "flex items-center gap-2.5 pb-1.5" }, h("ir-input", { onInput: e => {
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
                        } }, h("ir-icons", { name: "user", slot: "left-icon", svgClassName: "size-4" })), h("p", { class: 'w-full', innerHTML: this.variationService.formatVariationBasedOnInfants({
                            baseVariation: r.checkoutVariations[index],
                            variations: r.ratePlan.variations,
                            infants: r.infant_nbr[index],
                        }) })), r.selected_variation.child_nbr > 0 &&
                        booking_store.childrenAges.some(age => Number(age) < app_store.childrenStartAge) &&
                        (this.totalPersons > r.checkoutVariations[index].adult_nbr + r.checkoutVariations[index].child_nbr || this.total_rooms > 1) && (h("div", { class: "flex items-center gap-4" }, h("div", { class: "flex items-center gap-1 text-sm" }, h("ir-icons", { name: "baby", svgClassName: "size-4" }), h("p", { class: "line-clamp-3" }, (_a = localizedWords.entries) === null || _a === void 0 ? void 0 : _a.Lcz_AnyInfant)), h("ir-select", { "data-state": this.errors && Number(r.infant_nbr) === -1 ? 'error' : '', class: 'w-16', value: r.infant_nbr[index], onValueChange: e => this.handleInfantNumberChange(roomTypeId, ratePlanId, e.detail, index), data: [
                            { id: -1, value: '...' },
                            { id: 0, value: (_b = localizedWords.entries) === null || _b === void 0 ? void 0 : _b.Lcz_No },
                            ...[...Array(Math.min(r.selected_variation.child_nbr, 3))].map((_, i) => ({ id: i + 1, value: (i + 1).toString() })),
                        ] }))), h("div", { class: "flex items-center gap-4" }, this.renderSmokingView(r.roomtype.smoking_option, index, ratePlanId, roomTypeId, r.checkoutSmokingSelection), r.is_bed_configuration_enabled && ((_c = app_store.setup_entries) === null || _c === void 0 ? void 0 : _c.bedPreferenceType.length) > 0 && (h("ir-select", { "data-state": this.errors && r.checkoutBedSelection[index] === '-1' ? 'error' : '', value: r.checkoutBedSelection[index], onValueChange: e => this.handleBedConfiguration(roomTypeId, ratePlanId, e.detail, index), data: [
                            { id: '-1', value: `${localizedWords.entries.Lcz_Bedconfiguration}...` },
                            ...(_e = (_d = app_store.setup_entries) === null || _d === void 0 ? void 0 : _d.bedPreferenceType) === null || _e === void 0 ? void 0 : _e.map(b => {
                                var _a;
                                return ({
                                    id: b.CODE_NAME,
                                    value: b[`CODE_VALUE_${((_a = app_store.userPreferences.language_id) !== null && _a !== void 0 ? _a : 'en').toUpperCase()}`],
                                });
                            }),
                        ], icon: true }, h("ir-icons", { name: r.checkoutBedSelection[index] === 'kingsizebed' ? 'double_bed' : 'bed', slot: "icon" })))))));
                });
            });
        }))), h("ir-dialog", { key: 'c8e794c84c3dcc916b112dae2097eb3036f4d358', ref: el => (this.dialogRef = el), onOpenChange: e => {
                if (!e.detail) {
                    this.currentRatePlan = null;
                }
            } }, h("div", { key: '4ef26a1455b8d024024682483468c072240c4aba', slot: "modal-body", class: "p-6 " }, h("p", { key: '4c2717578b3592032174771e7df3bfc286160951', class: 'px-6', innerHTML: this.cancelationMessage || ((_b = this.currentRatePlan) === null || _b === void 0 ? void 0 : _b.cancelation) }), h("p", { key: 'f6994cf164366098326ff677f96bf01a1be9a1b9', class: 'px-6', innerHTML: (_c = this.currentRatePlan) === null || _c === void 0 ? void 0 : _c.guarantee })))));
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
            "cancelationMessage": {},
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
