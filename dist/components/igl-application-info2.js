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
        return this.getVariationBasedOnInfants(params)?.discounted_amount || 0;
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
        const adultNumber = Number(adult_nbr) || 0;
        const infantNumber = Math.max(Number(infant_nbr) || 0, 0);
        const adultLabel = adultNumber > 1 ? locales.entries.Lcz_Adults.toLowerCase() : locales.entries.Lcz_Adult.toLowerCase();
        const childLabel = child_nbr > 1 ? locales.entries.Lcz_Children.toLowerCase() : locales.entries.Lcz_Child.toLowerCase();
        const infantLabel = infantNumber > 1 ? (locales.entries['Lcz_Infants'] ?? 'infants')?.toLowerCase() : (locales?.entries['Lcz_Infant'] ?? 'infant')?.toLowerCase();
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
    }
    rateplanSelection;
    guestInfo;
    currency;
    bedPreferenceType = [];
    bookingType = 'PLUS_BOOKING';
    roomIndex;
    totalNights = 1;
    baseData;
    isButtonPressed = false;
    variationService = new VariationService();
    componentWillLoad() {
        if (isSingleUnit(this.rateplanSelection.roomtype.id)) {
            const filteredRooms = this.filterRooms();
            if (filteredRooms.length > 0)
                this.updateGuest({ unit: filteredRooms[0]?.id?.toString() });
        }
    }
    updateGuest(params) {
        const roomTypeId = this.rateplanSelection.roomtype.id;
        const ratePlanId = this.rateplanSelection.ratePlan.id;
        let prevGuest = [...this.rateplanSelection.guest];
        prevGuest[this.roomIndex] = {
            ...prevGuest[this.roomIndex],
            ...params,
        };
        booking_store.ratePlanSelections = {
            ...booking_store.ratePlanSelections,
            [roomTypeId]: {
                ...booking_store.ratePlanSelections[roomTypeId],
                [ratePlanId]: { ...this.rateplanSelection, guest: [...prevGuest] },
            },
        };
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
        const { ratePlan, selected_variation } = this.rateplanSelection;
        let selectedVariation = selected_variation;
        if (this.guestInfo?.infant_nbr) {
            selectedVariation = this.variationService.getVariationBasedOnInfants({
                variations: ratePlan.variations,
                baseVariation: selected_variation,
                infants: this.guestInfo?.infant_nbr,
            });
        }
        if (!selectedVariation)
            return;
        const matchingVariation = ratePlan.variations?.find(variation => variation.adult_nbr === selectedVariation.adult_nbr && variation.child_nbr === selectedVariation.child_nbr);
        if (!matchingVariation)
            return;
        const cancellationPolicy = matchingVariation.applicable_policies?.find(p => p.type === 'cancelation')?.combined_statement;
        const guaranteePolicy = matchingVariation.applicable_policies?.find(p => p.type === 'guarantee')?.combined_statement;
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
        if (this.rateplanSelection.is_amount_modified) {
            return this.rateplanSelection.view_mode === '001' ? this.rateplanSelection.rp_amount : this.rateplanSelection.rp_amount * this.totalNights;
        }
        let variation = this.rateplanSelection.selected_variation;
        if (this.guestInfo?.infant_nbr) {
            variation = this.variationService.getVariationBasedOnInfants({
                variations: this.rateplanSelection.ratePlan.variations,
                baseVariation: this.rateplanSelection.selected_variation,
                infants: this.guestInfo?.infant_nbr,
            });
        }
        return variation.discounted_gross_amount;
    }
    filterRooms() {
        const result = [];
        if (!calendar_data.is_frontdesk_enabled) {
            return result;
        }
        this.rateplanSelection.ratePlan?.assignable_units?.forEach(unit => {
            if (unit.Is_Fully_Available) {
                result.push({ name: unit.name, id: unit.pr_id });
            }
        });
        const filteredGuestsRoom = this.rateplanSelection.guest.filter((_, i) => i !== this.roomIndex).map(r => r.unit);
        const filteredResults = result.filter(r => !filteredGuestsRoom.includes(r.id.toString()));
        return this.bookingType === 'EDIT_BOOKING'
            ? [...filteredResults, this.rateplanSelection.roomtype.id === this.baseData?.roomtypeId ? this.baseData?.unit : null]
                .filter(f => !!f)
                .sort((a, b) => a.name.localeCompare(b.name))
            : filteredResults;
    }
    render() {
        const filteredRoomList = this.filterRooms();
        const formattedVariation = this.variationService.formatVariationBasedOnInfants({
            baseVariation: this.rateplanSelection.selected_variation,
            infants: this.guestInfo.infant_nbr,
            variations: this.rateplanSelection.ratePlan.variations,
        });
        return (h(Host, { key: 'c2e6990bc5b1a9b23c772d9e46d21294a84e8207', class: 'my-2', "data-testid": `room_info_${this.rateplanSelection.ratePlan.id}` }, h("div", { key: '779e7b24b1601af26f9a10a2f8f8517d8b8ec05e', class: "booking-header" }, (this.bookingType === 'PLUS_BOOKING' || this.bookingType === 'ADD_ROOM' || this.bookingType === 'EDIT_BOOKING') && (h("span", { key: '9413ec7854a9a250c865ddd3114915ef8355f295', class: "booking-roomtype-title" }, this.rateplanSelection.roomtype.name)), h("div", { key: 'e21bad842a4367efaac9163025cbbee1f7d39c42', class: "booking-details-container" }, h("div", { key: '3ae85e6eefc1dfcd6c55309c57486fd62438d889', class: "booking-rateplan" }, h("p", { key: 'd83ad1e3cf500c0a776f60ae9cddff5625f90bad', class: "booking-rateplan-name" }, this.rateplanSelection.ratePlan.short_name, " ", this.rateplanSelection.ratePlan.is_non_refundable && h("span", { key: '7ac90960fc99a44a8f1cb5c59c87405ad4039a6d', class: 'non-ref-span' }, "Non Refundable")), h("ir-tooltip", { key: '6da870274f38f4054412cbbc468c8a19a07b3e2f', class: "booking-tooltip", message: this.getTooltipMessages() })), h("p", { key: '9c596af7f6e9c7842df2d40e99ae495d73d6b5bd', class: "booking-variation", innerHTML: formattedVariation })), h("p", { key: '2f93367f79053cf4faa1634683e854b5d7f6abd5', class: "booking-price" }, formatAmount(this.currency?.symbol, this.getAmount()), "/", locales.entries.Lcz_Stay)), h("div", { key: 'ff536acaaf193208e9c706d1084ffef7822ba9ce', class: "booking-footer" }, h("div", { key: 'cf27f327b52def68e08ccb9dd676d42b9e963bcc', class: "booking-rateplan" }, h("p", { key: 'c018565c86afe4e94ac0822700e2c47fd4244da3', class: "booking-rateplan-name" }, this.rateplanSelection.ratePlan.short_name), h("ir-tooltip", { key: 'a9d325e9c60f56361086db51abc991cb9405beb7', class: "booking-tooltip", message: this.getTooltipMessages() })), h("p", { key: '7c10925bf6db5a6f19957440979248e4f4f16a3c', class: "booking-variation", innerHTML: formattedVariation })), h("div", { key: 'f84fd00de39ccc7d79e19c2fc14e327aa7d43daf', class: "d-flex flex-column flex-md-row  p-0 align-items-md-center aplicationInfoContainer" }, h("div", { key: '1e10e9df662500845daa3f926990916c6f1b1ec1', class: "mr-md-1 mb-1 mb-md-0 flex-fill guest-info-container" }, h("input", { key: 'bbea675012e784caaf8c13dc61a029b359ae7419', id: v4(), type: "text", "data-testid": "guest_first_name", class: `form-control ${this.isButtonPressed && this.guestInfo?.first_name === '' && 'border-danger'}`, placeholder: locales.entries['Lcz_GuestFirstname'] ?? 'Guest first name', name: "guestFirstName", onInput: event => {
                const name = event.target.value;
                this.updateGuest({ first_name: name });
                if (booking_store.event_type.type === 'EDIT_BOOKING') {
                    modifyBookingStore('guest', {
                        ...booking_store.guest,
                        name,
                    });
                }
            }, required: true, value: this.guestInfo?.first_name })), h("div", { key: 'a8533ca5ae1ffc24e16d14f3fcedd54cb9f97aa2', class: "mr-md-1 flex-fill guest-info-container" }, h("input", { key: '2be1ff3eb86b45b34715b413bbfd0bd85a39a4b9', id: v4(), type: "text", class: `form-control ${this.isButtonPressed && this.guestInfo?.last_name === '' && 'border-danger'}`, placeholder: locales.entries['Lcz_GuestLastname'] ?? 'Guest last name', name: "guestLastName", "data-testid": "guest_last_name", onInput: event => {
                const name = event.target.value;
                this.updateGuest({ last_name: name });
                if (booking_store.event_type.type === 'EDIT_BOOKING') {
                    modifyBookingStore('guest', {
                        ...booking_store.guest,
                        name,
                    });
                }
            }, required: true, value: this.guestInfo?.last_name })), calendar_data.is_frontdesk_enabled &&
            !isSingleUnit(this.rateplanSelection.roomtype.id) &&
            (this.bookingType === 'PLUS_BOOKING' || this.bookingType === 'ADD_ROOM' || this.bookingType === 'EDIT_BOOKING') && (h("div", { key: '0a1574ea65808b33b9ddd37e9a021e9ac84c9e27', class: "mt-1 mt-md-0 d-flex align-items-center flex-fill" }, h("div", { key: 'f8de9317fb4f53198c60b1c407f758d10d296933', class: "mr-md-1 p-0 flex-fill preference-select-container" }, h("select", { key: 'bb9dec41b4a2f9981d05c6c272a418c7a819e57c', "data-testid": "unit", class: "form-control input-sm pr-0", id: v4(), onChange: event => this.updateGuest({ unit: event.target.value }) }, h("option", { key: '0a557d3694a70882974bb938f5990e81a8be54f5', value: "", selected: this.guestInfo?.unit === '' }, locales.entries.Lcz_Assignunits), filteredRoomList?.map(room => (h("option", { value: room.id, selected: this.guestInfo?.unit === room.id.toString() }, room.name))))))), this.rateplanSelection.roomtype.is_bed_configuration_enabled && (h("div", { key: '88ba07e29d081c9d3f4bd68f5917d9162c0e695f', class: "mt-1 mt-md-0 mr-md-1 flex-fill" }, h("select", { key: '7d951c52398b59c459a906d41343e577d5bab15c', "data-testid": "bed_configuration", class: `form-control input-sm ${this.isButtonPressed && this.guestInfo?.bed_preference === '' && 'border-danger'}`, id: v4(), onChange: event => this.updateGuest({ bed_preference: event.target.value }) }, h("option", { key: 'd7c9c13700a258bacaf642dbfc5b412271fe0231', value: "", selected: this.guestInfo?.bed_preference === '' }, locales.entries.Lcz_BedConfiguration), this.bedPreferenceType.map(data => (h("option", { value: data.CODE_NAME, selected: this.guestInfo?.bed_preference === data.CODE_NAME }, data.CODE_VALUE_EN)))))), h("p", { key: 'c521cc7c13e431fe5ac53f71d864076ae982b3c0', class: "rate_amount" }, formatAmount(this.currency?.symbol, this.getAmount()), "/", locales.entries.Lcz_Stay)), this.rateplanSelection.selected_variation.child_nbr > 0 && (h("div", { key: '5740ea5e80e091c1ec66d860190514f8b102ca93', style: { gap: '0.5rem', marginTop: '0.5rem' }, class: "d-flex  flex-row  p-0 align-items-center aplicationInfoContainer" }, h("p", { key: '907b649671cf26d174569bd604a08aee87380759', class: 'm-0 p-0 text-danger' }, "Any of the children below 3 years?"), h("div", { key: '44b36c047bbd72f5dd410b46984b5b8974a5af01', class: "mr-1 flex-fill" }, h("select", { key: 'fb1d00c81f68117c704f03ddbd544892995b3221', class: `form-control input-sm ${this.isButtonPressed && this.guestInfo?.bed_preference === '' && 'border-danger'}`, id: v4(), style: { width: 'max-content' }, onChange: event => this.updateGuest({ infant_nbr: Number(event.target.value) }) }, h("option", { key: '588a3ecbd7fea6568141e36d5e6036b2eef6daff', value: "", selected: Number(this.guestInfo?.infant_nbr) === 0 }, locales.entries['No'] || 'No'), Array.from({ length: this.rateplanSelection.selected_variation.child_nbr }, (_, i) => i + 1).map(item => (h("option", { value: item, selected: this.guestInfo?.infant_nbr === item }, item)))))))));
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