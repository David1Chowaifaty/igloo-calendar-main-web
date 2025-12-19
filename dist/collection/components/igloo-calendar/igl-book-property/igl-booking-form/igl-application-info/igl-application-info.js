import { Host, h } from "@stencil/core";
import booking_store, { modifyBookingStore } from "../../../../../stores/booking.store";
import locales from "../../../../../stores/locales.store";
import calendar_data, { isSingleUnit } from "../../../../../stores/calendar-data";
import { formatAmount } from "../../../../../utils/utils";
import VariationService from "../../../../../services/variation.service";
import { GuestCredentials } from "../../types";
import { z } from "zod";
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
        return (h(Host, { key: 'cb0e3ddc5615654f471ac010e5bc93ab093d6ac2', class: "fd-application-info", "data-testid": `room_info_${this.rateplanSelection.ratePlan.id}` }, h("div", { key: 'dd4833ca6fc822e7307defec8ada5d2d5241a991', class: "fd-application-info__header" }, (this.bookingType === 'PLUS_BOOKING' || this.bookingType === 'ADD_ROOM' || this.bookingType === 'EDIT_BOOKING') && (h("span", { key: 'b8571e03b180135255654ed2583ea677d2a195bc', class: "fd-application-info__roomtype-title" }, this.rateplanSelection.roomtype.name)), h("div", { key: 'd479718aa2e3a152ae886c0f0b9af6cb0ececf79', class: "fd-application-info__details" }, h("div", { key: 'd30a20924b3e4e87b25afc7ca8794c45ee0959c7', class: "fd-application-info__rateplan" }, h("p", { key: 'c961519aade41c1a8e3ac52b7dbfcf29c8c768fb', class: "fd-application-info__rateplan-name" }, this.rateplanSelection.ratePlan.short_name, this.rateplanSelection.ratePlan.is_non_refundable && h("span", { key: '3f7c43fa7a026899b755be2fb9fe60494e8b9493', class: "fd-application-info__non-refundable" }, "Non Refundable")), h("wa-tooltip", { key: '2a75987289b8118703e83e2f5afe60444917f4f9', for: `room_info_tooltip_${this.rateplanSelection.ratePlan.id}` }, h("span", { key: '1982a304515a99cd82cbef9b8299e366a40419b8', innerHTML: this.getTooltipMessages() })), h("wa-icon", { key: '8891046092bd2acef97e009163c07089fe4d23d6', name: "circle-info", id: `room_info_tooltip_${this.rateplanSelection.ratePlan.id}` })), h("p", { key: '3d79ab4108137db53a878a25f73372584b15743d', class: "fd-application-info__variation", innerHTML: formattedVariation })), h("p", { key: '7a4ea1babdefbb658d13e6dbe11c6c42bcbf7462', class: "fd-application-info__price p-0 m-0" }, h("span", { key: '649b8177c2b44959077f8ad141cd23763d1e2739', class: "ir-price" }, formatAmount(this.currency?.symbol, this.getAmount())), "/", locales.entries.Lcz_Stay)), h("div", { key: 'd1706e5f5155e7d11f8ad119bda0e53f3905738f', class: "fd-application-info__footer" }, h("div", { key: '6fc2c25a47fdb5d59bf5705ee8c47afa94c0b00a', class: "fd-application-info__rateplan" }, h("p", { key: '84e4639c8fa21f397d32f34f80acd8e48a4a9007', class: "fd-application-info__rateplan-name" }, this.rateplanSelection.ratePlan.short_name), h("wa-tooltip", { key: '0fafd009582b6d9ed83b2281de25095bd870ea25', for: `room_info_tooltip_mobile_${this.rateplanSelection.ratePlan.id}` }, h("span", { key: '50519393e3fcc4c7cf16246d4d63eeecd245620f', innerHTML: this.getTooltipMessages() })), h("wa-icon", { key: '09e7f3202e26f78d4482fccd33e69b264dd4e198', name: "circle-info", id: `room_info_tooltip_mobile_${this.rateplanSelection.ratePlan.id}` })), h("p", { key: '623738485e3ef990387507d48c24c3c7fc45f9bb', class: "fd-application-info__variation", innerHTML: formattedVariation })), h("div", { key: '559d44d9969b106bedf52ff4778f8b1caf8748d7', class: "fd-application-info__form" }, h("ir-validator", { key: '8c9130a63c24dc9a5970b3c44f519318e510c11b', value: this.guestInfo?.first_name, schema: GuestCredentials.shape.first_name }, h("ir-input", { key: '2112d14ecfb427c4c9abe948d5475e44358e60c6', class: "fd-application-info__input",
            // aria-invalid={String(Boolean(this.isButtonPressed && this.guestInfo?.first_name === ''))}
            value: this.guestInfo?.first_name, defaultValue: this.guestInfo?.first_name, "data-testid": "guest_first_name", placeholder: locales.entries['Lcz_GuestFirstname'] ?? 'Guest first name', "onText-change": event => {
                const name = event.detail.trim();
                this.updateGuest({ first_name: name });
                if (booking_store.event_type.type === 'EDIT_BOOKING') {
                    modifyBookingStore('guest', {
                        ...booking_store.guest,
                        name,
                    });
                }
            } })), h("ir-validator", { key: '0fb7a3916b937b1aabc6ea28e47d3aa502a19c42', value: this.guestInfo?.last_name, schema: GuestCredentials.shape.last_name }, h("ir-input", { key: '9cbc3a3873493797fb8e2fd19dd4f51999181b36', class: "fd-application-info__input", type: "text",
            // aria-invalid={String(Boolean(this.isButtonPressed && this.guestInfo?.last_name === ''))}
            value: this.guestInfo?.last_name, defaultValue: this.guestInfo?.last_name, "data-testid": "guest_last_name", placeholder: locales.entries['Lcz_GuestLastname'] ?? 'Guest last name', "onText-change": event => {
                const name = event.detail.trim();
                this.updateGuest({ last_name: name });
                if (booking_store.event_type.type === 'EDIT_BOOKING') {
                    modifyBookingStore('guest', {
                        ...booking_store.guest,
                        name,
                    });
                }
            } })), calendar_data.is_frontdesk_enabled &&
            !isSingleUnit(this.rateplanSelection.roomtype.id) &&
            (this.bookingType === 'PLUS_BOOKING' || this.bookingType === 'ADD_ROOM' || this.bookingType === 'EDIT_BOOKING') && (h("wa-select", { key: '95152722138a3378ada1a81e7e97d6e7a516c3b6', "with-clear": true, size: "small", class: "fd-application-info__select", placeholder: locales.entries.Lcz_Assignunits, "data-testid": "unit", value: this.guestInfo?.unit, defaultValue: this.guestInfo?.unit, onchange: event => this.updateGuest({
                unit: event.target.value,
            }) }, filteredRoomList.map(room => (h("wa-option", { value: room.id.toString(), selected: this.guestInfo?.unit === room.id.toString() }, room.name))))), this.rateplanSelection.roomtype.is_bed_configuration_enabled && (h("ir-validator", { key: '0bd731ef5c38063c25396865edbe027a7101b4e7', value: this.guestInfo?.bed_preference, schema: z.string().nonempty() }, h("wa-select", { key: 'c714a5db1d1fa162475e8cc81749b7a0fa94230d', "with-clear": true, size: "small", class: "fd-application-info__select", placeholder: locales.entries.Lcz_BedConfiguration, "data-testid": "bed_configuration", value: this.guestInfo?.bed_preference, defaultValue: this.guestInfo?.bed_preference,
            // aria-invalid={String(Boolean(this.isButtonPressed && this.guestInfo?.bed_preference === ''))}
            onchange: event => this.updateGuest({
                bed_preference: event.target.value,
            }) }, this.bedPreferenceType.map(data => (h("wa-option", { value: data.CODE_NAME, selected: this.guestInfo?.bed_preference === data.CODE_NAME }, data.CODE_VALUE_EN)))))), h("p", { key: '967f0ae095244318e483a21df61e3a49c011864b', class: "fd-application-info__price-inline" }, h("span", { key: '5b4fde2bb7751cefc8d7d11bd8512d888ac9a758', class: "ir-price" }, formatAmount(this.currency?.symbol, this.getAmount())), "/", locales.entries.Lcz_Stay)), this.rateplanSelection.selected_variation.child_nbr > 0 && (h("div", { key: '0a2740366f7339fc47f1dda04c0ec48c760f9150', class: "fd-application-info__infant" }, h("p", { key: 'c22c4f7ceaef61b5387bd5511f32adbd9ff0c672', class: "fd-application-info__infant-label" }, "Any of the children below 3 years?"), h("wa-select", { key: '4ee43e9f32a60d6eac66517030234684a2d78dfe', size: "small", class: "fd-application-info__select fd-application-info__select--inline", placeholder: locales.entries['No'] || 'No', value: this.guestInfo?.infant_nbr?.toString(), defaultValue: this.guestInfo?.infant_nbr?.toString(), onchange: event => this.updateGuest({
                infant_nbr: Number(event.target.value),
            }), withClear: true }, Array.from({ length: this.rateplanSelection.selected_variation.child_nbr }, (_, i) => i + 1).map(item => (h("wa-option", { value: item.toString(), selected: this.guestInfo?.infant_nbr === item }, item))))))));
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
