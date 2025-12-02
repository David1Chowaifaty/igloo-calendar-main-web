import { Host, h } from "@stencil/core";
import booking_store, { modifyBookingStore } from "../../../../../stores/booking.store";
import locales from "../../../../../stores/locales.store";
import { v4 } from "uuid";
import calendar_data, { isSingleUnit } from "../../../../../stores/calendar-data";
import { formatAmount } from "../../../../../utils/utils";
import VariationService from "../../../../../services/variation.service";
export class IglApplicationInfo {
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
        return (h(Host, { key: '9c5bd3253a45611b68755ad9b6b793e4d0c792be', class: 'my-2', "data-testid": `room_info_${this.rateplanSelection.ratePlan.id}` }, h("div", { key: '6d014fa8f81013416b7eb7947c0dcd370c4b95b3', class: "booking-header" }, (this.bookingType === 'PLUS_BOOKING' || this.bookingType === 'ADD_ROOM' || this.bookingType === 'EDIT_BOOKING') && (h("span", { key: '218581df0c8a0c25e2b3083d84842065e6a9e2b2', class: "booking-roomtype-title" }, this.rateplanSelection.roomtype.name)), h("div", { key: 'd8f54be3bd8a4e8e80e416264ddd09b8e9e36d8c', class: "booking-details-container" }, h("div", { key: '47b645dc1029a10e508eb20c7ee4797618fab6c0', class: "booking-rateplan" }, h("p", { key: '71d3c3692cef17e4df11f74764f5f415d83371a7', class: "booking-rateplan-name" }, this.rateplanSelection.ratePlan.short_name, " ", this.rateplanSelection.ratePlan.is_non_refundable && h("span", { key: '47e4bed0d15ab28bc3f9bb0f1ba232a01bf7888f', class: 'non-ref-span' }, "Non Refundable")), h("ir-tooltip", { key: '879857a84f5cee99577047f4c8c62816a5e05ec8', class: "booking-tooltip", message: this.getTooltipMessages() })), h("p", { key: 'a201a8cacc9d69053030b2190072f934648fe8d7', class: "booking-variation", innerHTML: formattedVariation })), h("p", { key: 'dc19b6e3caf8b661be451b46ccc8c1f4159a717c', class: "booking-price" }, formatAmount(this.currency?.symbol, this.getAmount()), "/", locales.entries.Lcz_Stay)), h("div", { key: 'd980ed17d2fe3b8d58ac185181addeb302421b1a', class: "booking-footer" }, h("div", { key: '51ff5590c5900fc14243847dff0c26857155fbb9', class: "booking-rateplan" }, h("p", { key: 'ab065dd67f49c998b7c3243f59ceabade9f03aca', class: "booking-rateplan-name" }, this.rateplanSelection.ratePlan.short_name), h("ir-tooltip", { key: '97590537862b331c8595cf1bf3bebc408c466d4b', class: "booking-tooltip", message: this.getTooltipMessages() })), h("p", { key: '3b7498210300e7dd3f808bfe3c34eaa7d9d09553', class: "booking-variation", innerHTML: formattedVariation })), h("div", { key: '76d052318390d4f6711dbab72f6d8f96e1b3b306', class: "d-flex flex-column flex-md-row  p-0 align-items-md-center aplicationInfoContainer" }, h("div", { key: '0f8e917e8179952f4537adb61721420ffa318f76', class: "mr-md-1 mb-1 mb-md-0 flex-fill guest-info-container" }, h("input", { key: '8386ecc2917475f0d5b9cb8a827881ddf9c52b72', id: v4(), type: "text", "data-testid": "guest_first_name", class: `form-control ${this.isButtonPressed && this.guestInfo?.first_name === '' && 'border-danger'}`, placeholder: locales.entries['Lcz_GuestFirstname'] ?? 'Guest first name', name: "guestFirstName", onInput: event => {
                const name = event.target.value;
                this.updateGuest({ first_name: name });
                if (booking_store.event_type.type === 'EDIT_BOOKING') {
                    modifyBookingStore('guest', {
                        ...booking_store.guest,
                        name,
                    });
                }
            }, required: true, value: this.guestInfo?.first_name })), h("div", { key: '6fc2ea967a4f8ddfabf2a7d9b4009245995e2aa7', class: "mr-md-1 flex-fill guest-info-container" }, h("input", { key: '06e9530a6f0fcf5a151b939303866c92c4cb0648', id: v4(), type: "text", class: `form-control ${this.isButtonPressed && this.guestInfo?.last_name === '' && 'border-danger'}`, placeholder: locales.entries['Lcz_GuestLastname'] ?? 'Guest last name', name: "guestLastName", "data-testid": "guest_last_name", onInput: event => {
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
            (this.bookingType === 'PLUS_BOOKING' || this.bookingType === 'ADD_ROOM' || this.bookingType === 'EDIT_BOOKING') && (h("div", { key: '9e9c777eeea3db78044d979c20e0e8d3ca5db6f8', class: "mt-1 mt-md-0 d-flex align-items-center flex-fill" }, h("div", { key: '135d6ea519685907017089844e4606abedf5b008', class: "mr-md-1 p-0 flex-fill preference-select-container" }, h("select", { key: '6d69752bc7cbe59af0cff72198120da0fcccadda', "data-testid": "unit", class: "form-control input-sm pr-0", id: v4(), onChange: event => this.updateGuest({ unit: event.target.value }) }, h("option", { key: 'd64fde750ada1b2fc54f9559df3a673be1f40054', value: "", selected: this.guestInfo?.unit === '' }, locales.entries.Lcz_Assignunits), filteredRoomList?.map(room => (h("option", { value: room.id, selected: this.guestInfo?.unit === room.id.toString() }, room.name))))))), this.rateplanSelection.roomtype.is_bed_configuration_enabled && (h("div", { key: 'e4a15532da016995daf49d6e2af6c4c1ae14bcd0', class: "mt-1 mt-md-0 mr-md-1 flex-fill" }, h("select", { key: 'a2a43c0d25139b55763d9bd7688c5ea1940f18cb', "data-testid": "bed_configuration", class: `form-control input-sm ${this.isButtonPressed && this.guestInfo?.bed_preference === '' && 'border-danger'}`, id: v4(), onChange: event => this.updateGuest({ bed_preference: event.target.value }) }, h("option", { key: '670b843f72f83d5af065aa65cde3490b89d619a3', value: "", selected: this.guestInfo?.bed_preference === '' }, locales.entries.Lcz_BedConfiguration), this.bedPreferenceType.map(data => (h("option", { value: data.CODE_NAME, selected: this.guestInfo?.bed_preference === data.CODE_NAME }, data.CODE_VALUE_EN)))))), h("p", { key: '8a5899b1c3672900f3113be88776b4676296e9b9', class: "rate_amount" }, formatAmount(this.currency?.symbol, this.getAmount()), "/", locales.entries.Lcz_Stay)), this.rateplanSelection.selected_variation.child_nbr > 0 && (h("div", { key: '29e6e003b6e7a44247ca67d36cdab7cab7338324', style: { gap: '0.5rem', marginTop: '0.5rem' }, class: "d-flex  flex-row  p-0 align-items-center aplicationInfoContainer" }, h("p", { key: '8fcaa98db3e925cde9c784cb0fb31fb06d4f4014', class: 'm-0 p-0 text-danger' }, "Any of the children below 3 years?"), h("div", { key: '4b19f4854e46a9f5a5beb15de2e01b534be02d5b', class: "mr-1 flex-fill" }, h("select", { key: '432cd7726ade5b6f023279d6859ef32ae5d64678', class: `form-control input-sm ${this.isButtonPressed && this.guestInfo?.bed_preference === '' && 'border-danger'}`, id: v4(), style: { width: 'max-content' }, onChange: event => this.updateGuest({ infant_nbr: Number(event.target.value) }) }, h("option", { key: 'ca36bfbeee7f878024b543464ffff50fc3f01432', value: "", selected: Number(this.guestInfo?.infant_nbr) === 0 }, locales.entries['No'] || 'No'), Array.from({ length: this.rateplanSelection.selected_variation.child_nbr }, (_, i) => i + 1).map(item => (h("option", { value: item, selected: this.guestInfo?.infant_nbr === item }, item)))))))));
    }
    static get is() { return "igl-application-info"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["igl-application-info.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["igl-application-info.css"]
        };
    }
    static get properties() {
        return {
            "rateplanSelection": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IRatePlanSelection",
                    "resolved": "IRatePlanSelection",
                    "references": {
                        "IRatePlanSelection": {
                            "location": "import",
                            "path": "@/stores/booking.store",
                            "id": "src/stores/booking.store.ts::IRatePlanSelection"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "guestInfo": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "RatePlanGuest | null",
                    "resolved": "RatePlanGuest",
                    "references": {
                        "RatePlanGuest": {
                            "location": "import",
                            "path": "@/stores/booking.store",
                            "id": "src/stores/booking.store.ts::RatePlanGuest"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "currency": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ICurrency",
                    "resolved": "ICurrency",
                    "references": {
                        "ICurrency": {
                            "location": "import",
                            "path": "@/models/calendarData",
                            "id": "src/models/calendarData.ts::ICurrency"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "bedPreferenceType": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "any[]",
                    "resolved": "any[]",
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
                "defaultValue": "[]"
            },
            "bookingType": {
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
                "attribute": "booking-type",
                "reflect": false,
                "defaultValue": "'PLUS_BOOKING'"
            },
            "roomIndex": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "attribute": "room-index",
                "reflect": false
            },
            "totalNights": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "attribute": "total-nights",
                "reflect": false,
                "defaultValue": "1"
            },
            "baseData": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ unit: { id: string; name: string }; roomtypeId: number }",
                    "resolved": "{ unit: { id: string; name: string; }; roomtypeId: number; }",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            }
        };
    }
    static get states() {
        return {
            "isButtonPressed": {}
        };
    }
    static get listeners() {
        return [{
                "name": "buttonClicked",
                "method": "handleButtonClicked",
                "target": "body",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=igl-application-info.js.map
