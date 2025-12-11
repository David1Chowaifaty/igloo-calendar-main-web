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
        return (h(Host, { key: '0230286071ab66ce47177f74f66d74ef3966b058', class: 'my-2', "data-testid": `room_info_${this.rateplanSelection.ratePlan.id}` }, h("div", { key: '1731ff24cddb9b6f76b56eed27e2e800d78d73d4', class: "booking-header" }, (this.bookingType === 'PLUS_BOOKING' || this.bookingType === 'ADD_ROOM' || this.bookingType === 'EDIT_BOOKING') && (h("span", { key: 'a910bc47c0a6bca79581a52d9c88d8d875dd7b48', class: "booking-roomtype-title" }, this.rateplanSelection.roomtype.name)), h("div", { key: 'cbdfb86249b65d9cff5070aa04c021ac9ed8c254', class: "booking-details-container" }, h("div", { key: 'f6bcd27cfa5056eb4712c0627cde320b9fa0ffb0', class: "booking-rateplan" }, h("p", { key: '61ffd95264c4f3e52c25c9d640128933320dd5b4', class: "booking-rateplan-name" }, this.rateplanSelection.ratePlan.short_name, " ", this.rateplanSelection.ratePlan.is_non_refundable && h("span", { key: '8568974528d4db8e2961b1c11e4471fc0f05a75b', class: 'non-ref-span' }, "Non Refundable")), h("ir-tooltip", { key: 'e33b14c240e6f893883a48de0aaaf159384e657b', class: "booking-tooltip", message: this.getTooltipMessages() })), h("p", { key: '83c1ada34db8524383a89963af36f90966078016', class: "booking-variation", innerHTML: formattedVariation })), h("p", { key: '9dad9525d16060965e72a6927269e8f0fcf0c3cd', class: "booking-price" }, formatAmount(this.currency?.symbol, this.getAmount()), "/", locales.entries.Lcz_Stay)), h("div", { key: 'd334b652d9570e8bc2fa4be51960dc19dbfb27e6', class: "booking-footer" }, h("div", { key: '45b2682e69251d231f43586977f0710689ea6a1d', class: "booking-rateplan" }, h("p", { key: '10fd510c0595c590f8a1329282b155d1a83fbaba', class: "booking-rateplan-name" }, this.rateplanSelection.ratePlan.short_name), h("ir-tooltip", { key: 'a89b3c3f58d1dacae9d2514c655522fa15aa56f6', class: "booking-tooltip", message: this.getTooltipMessages() })), h("p", { key: '960f34003006221069a6b9bcb411f51594b0d77a', class: "booking-variation", innerHTML: formattedVariation })), h("div", { key: '928a3ee926c05394f036226cd288e75de3c31a71', class: "d-flex flex-column flex-md-row  p-0 align-items-md-center aplicationInfoContainer" }, h("div", { key: 'e7d562a4f451e7e9accd41bdc209314fb520a29e', class: "mr-md-1 mb-1 mb-md-0 flex-fill guest-info-container" }, h("input", { key: '6c0a283b0019f74e896aed201f6eab8617c2002d', id: v4(), type: "text", "data-testid": "guest_first_name", class: `form-control ${this.isButtonPressed && this.guestInfo?.first_name === '' && 'border-danger'}`, placeholder: locales.entries['Lcz_GuestFirstname'] ?? 'Guest first name', name: "guestFirstName", onInput: event => {
                const name = event.target.value;
                this.updateGuest({ first_name: name });
                if (booking_store.event_type.type === 'EDIT_BOOKING') {
                    modifyBookingStore('guest', {
                        ...booking_store.guest,
                        name,
                    });
                }
            }, required: true, value: this.guestInfo?.first_name })), h("div", { key: 'ff2d3aad5f228acdb78d85bd02c33dd4dfb8671f', class: "mr-md-1 flex-fill guest-info-container" }, h("input", { key: '79dcb67beb9b0dc022e418ec38dea06fa60d1729', id: v4(), type: "text", class: `form-control ${this.isButtonPressed && this.guestInfo?.last_name === '' && 'border-danger'}`, placeholder: locales.entries['Lcz_GuestLastname'] ?? 'Guest last name', name: "guestLastName", "data-testid": "guest_last_name", onInput: event => {
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
            (this.bookingType === 'PLUS_BOOKING' || this.bookingType === 'ADD_ROOM' || this.bookingType === 'EDIT_BOOKING') && (h("div", { key: '7f08b84799811b542a5498f338512d9ad4f0c341', class: "mt-1 mt-md-0 d-flex align-items-center flex-fill" }, h("div", { key: 'e06ebd1bc69607707a11e3ba0afb165436af48ab', class: "mr-md-1 p-0 flex-fill preference-select-container" }, h("select", { key: '06dc6965af93f48808a9711d64712fdab5bf64b9', "data-testid": "unit", class: "form-control input-sm pr-0", id: v4(), onChange: event => this.updateGuest({ unit: event.target.value }) }, h("option", { key: 'e566a7c8c510a0fa242df3da287d3370881b36d7', value: "", selected: this.guestInfo?.unit === '' }, locales.entries.Lcz_Assignunits), filteredRoomList?.map(room => (h("option", { value: room.id, selected: this.guestInfo?.unit === room.id.toString() }, room.name))))))), this.rateplanSelection.roomtype.is_bed_configuration_enabled && (h("div", { key: 'a3019f95ea1cfa0e3af609fc3751c4315f0ac3df', class: "mt-1 mt-md-0 mr-md-1 flex-fill" }, h("select", { key: '3aa2c2fcb8427f908d7e5079f1361b6c286a485c', "data-testid": "bed_configuration", class: `form-control input-sm ${this.isButtonPressed && this.guestInfo?.bed_preference === '' && 'border-danger'}`, id: v4(), onChange: event => this.updateGuest({ bed_preference: event.target.value }) }, h("option", { key: '6807608b2e213c77952c57dd843a4462a1b8d3a2', value: "", selected: this.guestInfo?.bed_preference === '' }, locales.entries.Lcz_BedConfiguration), this.bedPreferenceType.map(data => (h("option", { value: data.CODE_NAME, selected: this.guestInfo?.bed_preference === data.CODE_NAME }, data.CODE_VALUE_EN)))))), h("p", { key: 'd2fd6375a15affee183dba72291a11fb29cfd869', class: "rate_amount" }, formatAmount(this.currency?.symbol, this.getAmount()), "/", locales.entries.Lcz_Stay)), this.rateplanSelection.selected_variation.child_nbr > 0 && (h("div", { key: 'dc7551be01731153337b489bc3016c57cdc56baf', style: { gap: '0.5rem', marginTop: '0.5rem' }, class: "d-flex  flex-row  p-0 align-items-center aplicationInfoContainer" }, h("p", { key: '75feaa4fe69a5a2c0d9f07344f15b26b7e544f18', class: 'm-0 p-0 text-danger' }, "Any of the children below 3 years?"), h("div", { key: '7ac7f2f370a536aeaaee6886f5b02ffcf0e95adb', class: "mr-1 flex-fill" }, h("select", { key: '0b981ff5d95be39f242d148d277feb055555e157', class: `form-control input-sm ${this.isButtonPressed && this.guestInfo?.bed_preference === '' && 'border-danger'}`, id: v4(), style: { width: 'max-content' }, onChange: event => this.updateGuest({ infant_nbr: Number(event.target.value) }) }, h("option", { key: 'dd01dd5b291000727835b1911735844bfcc9f25a', value: "", selected: Number(this.guestInfo?.infant_nbr) === 0 }, locales.entries['No'] || 'No'), Array.from({ length: this.rateplanSelection.selected_variation.child_nbr }, (_, i) => i + 1).map(item => (h("option", { value: item, selected: this.guestInfo?.infant_nbr === item }, item)))))))));
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
