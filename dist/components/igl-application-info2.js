import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { b as booking_store, m as modifyBookingStore } from './booking.store.js';
import { l as locales } from './locales.store.js';
import { i as isSingleUnit, c as calendar_data } from './calendar-data.js';
import { f as formatAmount } from './utils.js';
import { d as defineCustomElement$1 } from './ir-tooltip2.js';
import { v as v4 } from './v4.js';

class VariationService {
    /**
     * Formats a variation based on the number of infants and returns a formatted string.
     * @param {Object} params - The input parameters.
     * @param {Variation} params.baseVariation - The base variation object.
     * @param {Variation[]} params.variations - A list of available variations.
     * @param {number} params.infants - The number of infants to adjust the variation for.
     * @returns {string} A formatted string describing the variation adjusted for infants.
     */
    formatVariationBasedOnInfants(params) {
        const variation = this.getVariationBasedOnInfants(params);
        return this.formatVariation(variation, params.infants);
    }
    /**
     * Calculates the discounted amount for a variation adjusted for the number of infants.
     * @param {Object} params - The input parameters.
     * @param {Variation} params.baseVariation - The base variation object.
     * @param {Variation[]} params.variations - A list of available variations.
     * @param {number} params.infants - The number of infants to consider for adjustments.
     * @returns {number} The discounted amount for the selected variation, or 0 if no discounted amount is available.
     */
    calculateVariationAmount(params) {
        var _a;
        return ((_a = this.getVariationBasedOnInfants(params)) === null || _a === void 0 ? void 0 : _a.discounted_amount) || 0;
    }
    /**
     * Finds the appropriate variation from a list of variations based on the number of infants.
     * @param {Object} params - The input parameters.
     * @param {Variation} params.baseVariation - The base variation object.
     * @param {Variation[]} params.variations - A list of available variations.
     * @param {number} params.infants - The number of infants to adjust for.
     * @returns {Variation} The matching variation or the base variation if no match is found.
     */
    getVariationBasedOnInfants({ variations, baseVariation, infants }) {
        const { adult_nbr, child_nbr } = baseVariation;
        return variations.find(v => v.adult_nbr === adult_nbr && v.child_nbr === Math.max(0, child_nbr - Math.max(0, infants))) || baseVariation;
    }
    /**
     * Formats a variation object into a human-readable string, adjusted for the number of infants.
     * @param {Variation} variation - The variation object to format.
     * @param {number} infant_nbr - The number of infants to adjust for.
     * @returns {string} A formatted string representing the variation.
     * @private
     */
    formatVariation({ child_nbr, adult_nbr }, infant_nbr) {
        var _a, _b, _c, _d;
        const adultNumber = Number(adult_nbr) || 0;
        const infantNumber = Math.max(Number(infant_nbr) || 0, 0);
        const adultLabel = adultNumber > 1 ? locales.entries.Lcz_Adults.toLowerCase() : locales.entries.Lcz_Adult.toLowerCase();
        const childLabel = child_nbr > 1 ? locales.entries.Lcz_Children.toLowerCase() : locales.entries.Lcz_Child.toLowerCase();
        const infantLabel = infantNumber > 1 ? (_b = ((_a = locales.entries['Lcz_Infants']) !== null && _a !== void 0 ? _a : 'infants')) === null || _b === void 0 ? void 0 : _b.toLowerCase() : (_d = ((_c = locales === null || locales === void 0 ? void 0 : locales.entries['Lcz_Infant']) !== null && _c !== void 0 ? _c : 'infant')) === null || _d === void 0 ? void 0 : _d.toLowerCase();
        const parts = [`${adultNumber} ${adultLabel}`, child_nbr ? `${child_nbr} ${childLabel}` : '', infantNumber ? `${infantNumber} ${infantLabel}` : ''];
        return parts.filter(Boolean).join('&nbsp&nbsp&nbsp&nbsp');
    }
}

const iglApplicationInfoCss = ".sc-igl-application-info-h{display:block}.rate_amount.sc-igl-application-info{display:none;padding:0;margin:0}.booking-header.sc-igl-application-info{display:flex;align-items:center;justify-content:space-between;margin-bottom:0.5rem;gap:0.5rem}.non-ref-span.sc-igl-application-info{font-size:12px;color:var(--green)}.booking-roomtype-title.sc-igl-application-info{font-size:1.25rem;margin-right:0.5rem;margin:0;padding:0}.booking-details-container.sc-igl-application-info{display:flex;align-items:center;justify-content:space-between;padding:0;margin:0}.booking-rateplan.sc-igl-application-info{display:flex;align-items:center;gap:0.5rem;margin:0;padding:0}.booking-rateplan-name.sc-igl-application-info{font-weight:bold;margin:0;padding:0}.booking-tooltip.sc-igl-application-info{margin-right:0.5rem;margin:0;padding:0}.booking-variation.sc-igl-application-info{margin:0;padding:0}.booking-price.sc-igl-application-info{margin:0;padding:0}.booking-footer.sc-igl-application-info{display:flex;align-items:center;justify-content:space-between;padding:0;margin-bottom:0.5rem}.booking-details-container.sc-igl-application-info{display:none}@media (min-width: 768px){.booking-header.sc-igl-application-info{justify-content:flex-start}.booking-footer.sc-igl-application-info,.booking-price.sc-igl-application-info{display:none}.booking-details-container.sc-igl-application-info,.rate_amount.sc-igl-application-info{display:inline-flex;gap:0.5rem}}@media only screen and (min-width: 908px){.aplicationInfoContainer.sc-igl-application-info{max-width:100%}.guest-info-container.sc-igl-application-info,.bed-preference-container.sc-igl-application-info,.unit-select-container.sc-igl-application-info{max-width:250px}}";
const IglApplicationInfoStyle0 = iglApplicationInfoCss;

const IglApplicationInfo = /*@__PURE__*/ proxyCustomElement(class IglApplicationInfo extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.bedPreferenceType = [];
        this.bookingType = 'PLUS_BOOKING';
        this.totalNights = 1;
        this.isButtonPressed = false;
        this.variationService = new VariationService();
    }
    componentWillLoad() {
        var _a, _b;
        if (isSingleUnit(this.rateplanSelection.roomtype.id)) {
            const filteredRooms = this.filterRooms();
            if (filteredRooms.length > 0)
                this.updateGuest({ unit: (_b = (_a = filteredRooms[0]) === null || _a === void 0 ? void 0 : _a.id) === null || _b === void 0 ? void 0 : _b.toString() });
        }
    }
    updateGuest(params) {
        const roomTypeId = this.rateplanSelection.roomtype.id;
        const ratePlanId = this.rateplanSelection.ratePlan.id;
        let prevGuest = [...this.rateplanSelection.guest];
        prevGuest[this.roomIndex] = Object.assign(Object.assign({}, prevGuest[this.roomIndex]), params);
        booking_store.ratePlanSelections = Object.assign(Object.assign({}, booking_store.ratePlanSelections), { [roomTypeId]: Object.assign(Object.assign({}, booking_store.ratePlanSelections[roomTypeId]), { [ratePlanId]: Object.assign(Object.assign({}, this.rateplanSelection), { guest: [...prevGuest] }) }) });
    }
    handleButtonClicked(event) {
        switch (event.detail.key) {
            case 'book':
            case 'bookAndCheckIn':
            case 'save':
                this.isButtonPressed = true;
                break;
        }
    }
    getTooltipMessages() {
        var _a, _b, _c, _d, _e, _f, _g;
        const { ratePlan, selected_variation } = this.rateplanSelection;
        let selectedVariation = selected_variation;
        if ((_a = this.guestInfo) === null || _a === void 0 ? void 0 : _a.infant_nbr) {
            selectedVariation = this.variationService.getVariationBasedOnInfants({
                variations: ratePlan.variations,
                baseVariation: selected_variation,
                infants: (_b = this.guestInfo) === null || _b === void 0 ? void 0 : _b.infant_nbr,
            });
        }
        if (!selectedVariation)
            return;
        const matchingVariation = (_c = ratePlan.variations) === null || _c === void 0 ? void 0 : _c.find(variation => variation.adult_nbr === selectedVariation.adult_nbr && variation.child_nbr === selectedVariation.child_nbr);
        if (!matchingVariation)
            return;
        const cancellationPolicy = (_e = (_d = matchingVariation.applicable_policies) === null || _d === void 0 ? void 0 : _d.find(p => p.type === 'cancelation')) === null || _e === void 0 ? void 0 : _e.combined_statement;
        const guaranteePolicy = (_g = (_f = matchingVariation.applicable_policies) === null || _f === void 0 ? void 0 : _f.find(p => p.type === 'guarantee')) === null || _g === void 0 ? void 0 : _g.combined_statement;
        let tooltip = '';
        if (cancellationPolicy) {
            tooltip += `<b><u>Cancellation:</u></b> ${cancellationPolicy}<br/>`;
        }
        if (guaranteePolicy) {
            tooltip += `<b><u>Guarantee:</u></b> ${guaranteePolicy}`;
        }
        return tooltip || undefined;
    }
    getAmount() {
        var _a, _b;
        if (this.rateplanSelection.is_amount_modified) {
            return this.rateplanSelection.view_mode === '001' ? this.rateplanSelection.rp_amount : this.rateplanSelection.rp_amount * this.totalNights;
        }
        let variation = this.rateplanSelection.selected_variation;
        if ((_a = this.guestInfo) === null || _a === void 0 ? void 0 : _a.infant_nbr) {
            variation = this.variationService.getVariationBasedOnInfants({
                variations: this.rateplanSelection.ratePlan.variations,
                baseVariation: this.rateplanSelection.selected_variation,
                infants: (_b = this.guestInfo) === null || _b === void 0 ? void 0 : _b.infant_nbr,
            });
        }
        return variation.discounted_gross_amount;
    }
    filterRooms() {
        var _a, _b, _c, _d;
        const result = [];
        if (!calendar_data.is_frontdesk_enabled) {
            return result;
        }
        (_b = (_a = this.rateplanSelection.ratePlan) === null || _a === void 0 ? void 0 : _a.assignable_units) === null || _b === void 0 ? void 0 : _b.forEach(unit => {
            if (unit.Is_Fully_Available) {
                result.push({ name: unit.name, id: unit.pr_id });
            }
        });
        const filteredGuestsRoom = this.rateplanSelection.guest.filter((_, i) => i !== this.roomIndex).map(r => r.unit);
        const filteredResults = result.filter(r => !filteredGuestsRoom.includes(r.id.toString()));
        return this.bookingType === 'EDIT_BOOKING'
            ? [...filteredResults, this.rateplanSelection.roomtype.id === ((_c = this.baseData) === null || _c === void 0 ? void 0 : _c.roomtypeId) ? (_d = this.baseData) === null || _d === void 0 ? void 0 : _d.unit : null]
                .filter(f => !!f)
                .sort((a, b) => a.name.localeCompare(b.name))
            : filteredResults;
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        const filteredRoomList = this.filterRooms();
        const formattedVariation = this.variationService.formatVariationBasedOnInfants({
            baseVariation: this.rateplanSelection.selected_variation,
            infants: this.guestInfo.infant_nbr,
            variations: this.rateplanSelection.ratePlan.variations,
        });
        return (h(Host, { key: 'a3905b9ddac5db6e7376c20b558abf0075e91925', class: 'my-2', "data-testid": `room_info_${this.rateplanSelection.ratePlan.id}` }, h("div", { key: '9d0f6af19eba22728d6f1df7481dc05f516e1193', class: "booking-header" }, (this.bookingType === 'PLUS_BOOKING' || this.bookingType === 'ADD_ROOM' || this.bookingType === 'EDIT_BOOKING') && (h("span", { key: 'bd7a75cc9ee04b2d7112800d115ba9d729eccd4b', class: "booking-roomtype-title" }, this.rateplanSelection.roomtype.name)), h("div", { key: '50f94af41ee79a2f06dc9a37960af2b700c7e6be', class: "booking-details-container" }, h("div", { key: '6938793d8848a7d5693a244a3ed7297d31322ded', class: "booking-rateplan" }, h("p", { key: '7f9a273597edbc1506a2016aad831452bd746bd0', class: "booking-rateplan-name" }, this.rateplanSelection.ratePlan.short_name, " ", this.rateplanSelection.ratePlan.is_non_refundable && h("span", { key: '058c0c03922842ef5de73c774246f66c7c6556cf', class: 'non-ref-span' }, "Non Refundable")), h("ir-tooltip", { key: '19b6e1d0db2df9682a2fbf1dcc60fa9f6ad93225', class: "booking-tooltip", message: this.getTooltipMessages() })), h("p", { key: '6238e7c541837376d93fca4d897ea96d681f409c', class: "booking-variation", innerHTML: formattedVariation })), h("p", { key: '9aaf1f88a100c1f7097ad3bc99cafec9bea9a691', class: "booking-price" }, formatAmount((_a = this.currency) === null || _a === void 0 ? void 0 : _a.symbol, this.getAmount()), "/", locales.entries.Lcz_Stay)), h("div", { key: 'b35fbc318d877ccadf9f0f5a19afa78eed67b93c', class: "booking-footer" }, h("div", { key: 'c97f319717f23fb9a651026d1e7c6c77ee175894', class: "booking-rateplan" }, h("p", { key: '2384508a4c518f07145e1b284f6911d9a84bcfa1', class: "booking-rateplan-name" }, this.rateplanSelection.ratePlan.short_name), h("ir-tooltip", { key: '93df9565a318632565d4edea93a3d1348f412299', class: "booking-tooltip", message: this.getTooltipMessages() })), h("p", { key: 'a75576efdeca6b8930c15fe82924c9e1d07305b3', class: "booking-variation", innerHTML: formattedVariation })), h("div", { key: 'a3a537b4684c38f64d3911ef5ed098ae956ddafb', class: "d-flex flex-column flex-md-row  p-0 align-items-md-center aplicationInfoContainer" }, h("div", { key: '675fe343bf57595ed9a2156ce70479f8de565b64', class: "mr-md-1 mb-1 mb-md-0 flex-fill guest-info-container" }, h("input", { key: '826a2fc98c6846278ff6deb2d8ad703cefccb20f', id: v4(), type: "text", "data-testid": "guest_first_name", class: `form-control ${this.isButtonPressed && ((_b = this.guestInfo) === null || _b === void 0 ? void 0 : _b.first_name) === '' && 'border-danger'}`, placeholder: (_c = locales.entries['Lcz_GuestFirstname']) !== null && _c !== void 0 ? _c : 'Guest first name', name: "guestFirstName", onInput: event => {
                const name = event.target.value;
                this.updateGuest({ first_name: name });
                if (booking_store.event_type.type === 'EDIT_BOOKING') {
                    modifyBookingStore('guest', Object.assign(Object.assign({}, booking_store.guest), { name }));
                }
            }, required: true, value: (_d = this.guestInfo) === null || _d === void 0 ? void 0 : _d.first_name })), h("div", { key: 'bc2a1f545ff720857e1f76e578ae66c747b50076', class: "mr-md-1 flex-fill guest-info-container" }, h("input", { key: '9f847d6f92b05bdc97a97428a18376c0d89ab091', id: v4(), type: "text", class: `form-control ${this.isButtonPressed && ((_e = this.guestInfo) === null || _e === void 0 ? void 0 : _e.last_name) === '' && 'border-danger'}`, placeholder: (_f = locales.entries['Lcz_GuestLastname']) !== null && _f !== void 0 ? _f : 'Guest last name', name: "guestLastName", "data-testid": "guest_last_name", onInput: event => {
                const name = event.target.value;
                this.updateGuest({ last_name: name });
                if (booking_store.event_type.type === 'EDIT_BOOKING') {
                    modifyBookingStore('guest', Object.assign(Object.assign({}, booking_store.guest), { name }));
                }
            }, required: true, value: (_g = this.guestInfo) === null || _g === void 0 ? void 0 : _g.last_name })), calendar_data.is_frontdesk_enabled &&
            !isSingleUnit(this.rateplanSelection.roomtype.id) &&
            (this.bookingType === 'PLUS_BOOKING' || this.bookingType === 'ADD_ROOM' || this.bookingType === 'EDIT_BOOKING') && (h("div", { key: '340f7097587cc709466451dd4fcecf08ef41e9fb', class: "mt-1 mt-md-0 d-flex align-items-center flex-fill" }, h("div", { key: '7b067478b406ebf533a968bacd435b5fb28b0345', class: "mr-md-1 p-0 flex-fill preference-select-container" }, h("select", { key: '6cfa3536d1789ed3dc3c2d8da39be0a5b2eee1cd', "data-testid": "unit", class: "form-control input-sm pr-0", id: v4(), onChange: event => this.updateGuest({ unit: event.target.value }) }, h("option", { key: '72eb64d39672231175f6136f54a942c345a82143', value: "", selected: ((_h = this.guestInfo) === null || _h === void 0 ? void 0 : _h.unit) === '' }, locales.entries.Lcz_Assignunits), filteredRoomList === null || filteredRoomList === void 0 ? void 0 :
            filteredRoomList.map(room => {
                var _a;
                return (h("option", { value: room.id, selected: ((_a = this.guestInfo) === null || _a === void 0 ? void 0 : _a.unit) === room.id.toString() }, room.name));
            }))))), this.rateplanSelection.roomtype.is_bed_configuration_enabled && (h("div", { key: '4e2bc5cc53826d38a76da6725d882a7bea78d74c', class: "mt-1 mt-md-0 mr-md-1 flex-fill" }, h("select", { key: 'a9c1bf7d796e524409d259f34947bb7fd4db7676', "data-testid": "bed_configuration", class: `form-control input-sm ${this.isButtonPressed && ((_j = this.guestInfo) === null || _j === void 0 ? void 0 : _j.bed_preference) === '' && 'border-danger'}`, id: v4(), onChange: event => this.updateGuest({ bed_preference: event.target.value }) }, h("option", { key: '8ad2803ad7c26c8aee70c37e2392b38c4cf130ac', value: "", selected: ((_k = this.guestInfo) === null || _k === void 0 ? void 0 : _k.bed_preference) === '' }, locales.entries.Lcz_BedConfiguration), this.bedPreferenceType.map(data => {
            var _a;
            return (h("option", { value: data.CODE_NAME, selected: ((_a = this.guestInfo) === null || _a === void 0 ? void 0 : _a.bed_preference) === data.CODE_NAME }, data.CODE_VALUE_EN));
        })))), h("p", { key: 'c42cfd90d4fa1c281ba55d4cd40759addf4bdc96', class: "rate_amount" }, formatAmount((_l = this.currency) === null || _l === void 0 ? void 0 : _l.symbol, this.getAmount()), "/", locales.entries.Lcz_Stay)), this.rateplanSelection.selected_variation.child_nbr > 0 && (h("div", { key: '31e750926b9effabe17f6ed88898880d11cf79a6', style: { gap: '0.5rem', marginTop: '0.5rem' }, class: "d-flex  flex-row  p-0 align-items-center aplicationInfoContainer" }, h("p", { key: '3a2a32cdd99af814eb27909a588ddfecbf45db69', class: 'm-0 p-0 text-danger' }, "Any of the children below 3 years?"), h("div", { key: 'e3333532e56a35a1d8f0fe4e4ebc7969bb3226c1', class: "mr-1 flex-fill" }, h("select", { key: '304757ca3cbc516a31a43aa7a384944c95818870', class: `form-control input-sm ${this.isButtonPressed && ((_m = this.guestInfo) === null || _m === void 0 ? void 0 : _m.bed_preference) === '' && 'border-danger'}`, id: v4(), style: { width: 'max-content' }, onChange: event => this.updateGuest({ infant_nbr: Number(event.target.value) }) }, h("option", { key: '18a1543138779ee2d1233fd940625b91c57360a6', value: "", selected: Number((_o = this.guestInfo) === null || _o === void 0 ? void 0 : _o.infant_nbr) === 0 }, locales.entries['No'] || 'No'), Array.from({ length: this.rateplanSelection.selected_variation.child_nbr }, (_, i) => i + 1).map(item => {
            var _a;
            return (h("option", { value: item, selected: ((_a = this.guestInfo) === null || _a === void 0 ? void 0 : _a.infant_nbr) === item }, item));
        })))))));
    }
    static get style() { return IglApplicationInfoStyle0; }
}, [2, "igl-application-info", {
        "rateplanSelection": [16],
        "guestInfo": [16],
        "currency": [16],
        "bedPreferenceType": [16],
        "bookingType": [1, "booking-type"],
        "roomIndex": [2, "room-index"],
        "totalNights": [2, "total-nights"],
        "baseData": [16],
        "isButtonPressed": [32]
    }, [[16, "buttonClicked", "handleButtonClicked"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["igl-application-info", "ir-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-application-info":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglApplicationInfo);
            }
            break;
        case "ir-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IglApplicationInfo as I, VariationService as V, defineCustomElement as d };

//# sourceMappingURL=igl-application-info2.js.map