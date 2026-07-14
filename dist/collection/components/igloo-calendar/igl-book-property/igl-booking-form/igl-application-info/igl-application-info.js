import { Host, h } from "@stencil/core";
import booking_store, { modifyBookingStore, updateBookedByGuest, updateRoomGuest } from "../../../../../stores/booking.store";
import locales from "../../../../../stores/locales.store";
import calendar_data, { isSingleUnit } from "../../../../../stores/calendar-data";
import { formatAmount } from "../../../../../utils/utils";
import VariationService from "../../../../../services/variation.service";
import { GuestCredentials } from "../../types";
import { z } from "zod";
import { v4 } from "uuid";
import { BookingService } from "../../../../../services/booking-service/booking.service";
export class IglApplicationInfo {
    rateplanSelection;
    guestInfo;
    currency;
    bedPreferenceType = [];
    bookingType = 'PLUS_BOOKING';
    roomIndex;
    totalNights = 1;
    baseData;
    autoFillGuest;
    isButtonPressed = false;
    amount = 0;
    recalculateTotalCost;
    variationService = new VariationService();
    bookingService = new BookingService();
    shouldSyncBookedByFirstName = !booking_store.bookedByGuest?.firstName;
    shouldSyncBookedByLastName = !booking_store.bookedByGuest?.lastName;
    async componentWillLoad() {
        if (isSingleUnit(this.rateplanSelection.roomtype.id)) {
            const filteredRooms = this.filterRooms();
            if (filteredRooms.length > 0)
                this.updateGuest({ unit: filteredRooms[0]?.id?.toString() });
        }
        this.amount = await this.getAmount();
    }
    updateGuest(params) {
        const roomTypeId = this.rateplanSelection.roomtype.id;
        const ratePlanId = this.rateplanSelection.ratePlan.id;
        let prevGuest = [...(this.rateplanSelection.guest ?? [])];
        prevGuest[this.roomIndex] = {
            ...prevGuest[this.roomIndex],
            ...params,
        };
        updateRoomGuest({
            ratePlanSelection: this.rateplanSelection,
            ratePlanId,
            roomTypeId,
            guest: prevGuest,
        });
        const shouldAutoFill = this.autoFillGuest && !booking_store.bookedByGuestManuallyEdited;
        if (!shouldAutoFill) {
            if (booking_store.bookedByGuestManuallyEdited) {
                this.shouldSyncBookedByFirstName = false;
                this.shouldSyncBookedByLastName = false;
            }
            return;
        }
        if (typeof params.first_name === 'string' && this.shouldSyncBookedByFirstName) {
            updateBookedByGuest({
                firstName: params.first_name,
            });
        }
        if (typeof params.last_name === 'string' && this.shouldSyncBookedByLastName) {
            updateBookedByGuest({
                lastName: params.last_name,
            });
        }
    }
    async handleGuestInfoChange() {
        if (this.rateplanSelection.is_amount_modified) {
            return;
        }
        this.amount = await this.getAmount();
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
    async getAmount() {
        if (this.rateplanSelection.is_amount_modified) {
            const net = this.rateplanSelection.view_mode === '001' ? this.rateplanSelection.rp_amount : this.rateplanSelection.rp_amount * this.totalNights;
            const tax = await this.bookingService.calculateExclusiveTax({
                amount: net,
                property_id: calendar_data.property.id,
            });
            return net + (tax ?? 0);
        }
        let variation = this.rateplanSelection.selected_variation;
        if (this.guestInfo?.infant_nbr) {
            variation = this.variationService.getVariationBasedOnInfants({
                variations: this.rateplanSelection.ratePlan.variations,
                baseVariation: this.rateplanSelection.selected_variation,
                infants: this.guestInfo?.infant_nbr,
            });
        }
        return variation?.discounted_gross_amount ?? 0;
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
        const filteredGuestsRoom = (this.rateplanSelection.guest ?? []).filter((_, i) => i !== this.roomIndex).map(r => r.unit);
        const filteredResults = result.filter(r => !filteredGuestsRoom.includes(r.id.toString()));
        return this.bookingType === 'EDIT_BOOKING'
            ? [...filteredResults, this.rateplanSelection.roomtype.id === this.baseData?.roomtypeId ? this.baseData?.unit : null]
                .filter(f => !!f)
                .sort((a, b) => a.name.localeCompare(b.name))
            : filteredResults;
    }
    tooltipId = `room_info_tooltip_${v4()}`;
    render() {
        const filteredRoomList = this.filterRooms();
        const formattedVariation = this.variationService.formatVariationBasedOnInfants({
            baseVariation: this.rateplanSelection.selected_variation,
            infants: this.guestInfo?.infant_nbr,
            variations: this.rateplanSelection.ratePlan.variations,
        });
        // const amount = await this.getAmount();
        return (h(Host, { key: 'cd0a05b36f4be74c3e8c290a95da2f2476762875', class: "fd-application-info", "data-testid": `room_info_${this.rateplanSelection.ratePlan.id}` }, h("div", { key: '00dc5bf8cb462a0633de9d9b0e8006e267899eae', class: "fd-application-info__header" }, (this.bookingType === 'PLUS_BOOKING' || this.bookingType === 'ADD_ROOM' || this.bookingType === 'EDIT_BOOKING') && (h("span", { key: 'd09d8c747c6af33ebfcacd3247a619a6ec8aba48', class: "fd-application-info__roomtype-title" }, this.rateplanSelection.roomtype.name)), h("div", { key: '190fb47161a0cbe5e1ce1fc268e5c3261ed9e0ab', class: "fd-application-info__details" }, h("div", { key: '613fb7bf8c6de5151aeb8c35e3063f288768298e', class: "fd-application-info__rateplan" }, h("p", { key: '9539b0d8de0dec0fe0a7fdc8285d2fd0dcf60e13', class: "fd-application-info__rateplan-name" }, this.rateplanSelection.ratePlan.short_name, this.rateplanSelection.ratePlan.is_non_refundable && h("span", { key: '3defec2e34da8932f28a9d96787871c4d8f38bc1', class: "fd-application-info__non-refundable" }, "Non Refundable")), h("wa-tooltip", { key: '6b73d51ca79098e9ab7e291338c22cca5201365f', for: this.tooltipId }, h("span", { key: '4ab610f591113a993a961e2544b80367e00fc96d', innerHTML: this.getTooltipMessages() })), h("wa-icon", { key: 'cc28c04faed5e35ab4bb91bcd78519370e7dc65e', name: "circle-info", id: this.tooltipId })), h("p", { key: 'dbf7ff8f0ba5e5963bc33d0338a57e62c5d3f114', class: "fd-application-info__variation", innerHTML: formattedVariation })), h("p", { key: '7fe6154060e64fc8d5203c2f65eeac7873a59db3', class: "fd-application-info__price" }, h("span", { key: 'ffafefe4c0debf8128f59974a33907e8af58d3ab', class: "ir-price" }, formatAmount(this.currency?.symbol, this.amount), "/", locales.entries.Lcz_Stay), h("p", { key: 'd51121377be0a6af1290706d929607e7773bc386', style: { margin: '0', padding: '0', fontSize: '0.75rem' } }, "Including taxes and fees"))), h("div", { key: '7b937988f20a89529e53a50afd95f0aa03462ef7', class: "fd-application-info__footer" }, h("div", { key: 'db9d68ec1ca49677e6074c7ea0cd70176cfdd029', class: "fd-application-info__rateplan" }, h("p", { key: '284e4027ec02e604ae3e6ee365ccfb8e123cf201', class: "fd-application-info__rateplan-name" }, this.rateplanSelection.ratePlan.short_name), h("wa-tooltip", { key: 'badaedc8a0ba8d0153ac5cef3c6570af21a871e6', for: `mobile-${this.tooltipId}` }, h("span", { key: '6e8843a560f45c853533b8617931e7d1636d282e', innerHTML: this.getTooltipMessages() })), h("wa-icon", { key: '052c5d2cf2d024edcff3123ff75ae8242f356a2e', name: "circle-info", id: `mobile-${this.tooltipId}` })), h("p", { key: '1c9b0ae3e2bdf842d6c39e2dee6390ce56bae693', class: "fd-application-info__variation", innerHTML: formattedVariation })), h("div", { key: '5917d0ed5a8a9d7d3a4d30d6f63d0934f282e7db', class: "fd-application-info__form" }, h("ir-validator", { key: '72edb4f0693044e05616598ae90b7308daaeb1b5', value: this.guestInfo?.first_name, schema: GuestCredentials.shape.first_name }, h("ir-input", { key: '9fc2c52f30417313e9376d3a868642cd74a25cd5', class: "fd-application-info__input",
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
            } })), h("ir-validator", { key: '5718a696592976c82bd5d8f4bb4ea72ad249af5b', value: this.guestInfo?.last_name, schema: GuestCredentials.shape.last_name }, h("ir-input", { key: 'bef80676261327689b71264cc22c321462bbf4c8', class: "fd-application-info__input", type: "text",
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
            (this.bookingType === 'PLUS_BOOKING' || this.bookingType === 'ADD_ROOM' || this.bookingType === 'EDIT_BOOKING') && (h("wa-select", { key: '8f407a0be989ae3b01cbae44e80e8b492c0675c6', "with-clear": true, size: "s", class: "fd-application-info__select", placeholder: locales.entries.Lcz_Assignunits, "data-testid": "unit", value: this.guestInfo?.unit, defaultValue: this.guestInfo?.unit, onchange: event => this.updateGuest({
                unit: event.target.value,
            }) }, filteredRoomList.map(room => (h("wa-option", { value: room.id.toString(), selected: this.guestInfo?.unit === room.id.toString() }, room.name))))), this.rateplanSelection.roomtype.is_bed_configuration_enabled && (h("ir-validator", { key: '2de5e1fcfa9c7f3030b3027b9acff700713c9fd9', value: this.guestInfo?.bed_preference, schema: z.string().nonempty() }, h("wa-select", { key: '3429703e0a8cb70d92e871b2fb5a1c76a31cefe6', "with-clear": true, size: "s", class: "fd-application-info__select", placeholder: locales.entries.Lcz_BedConfiguration, "data-testid": "bed_configuration", value: this.guestInfo?.bed_preference, defaultValue: this.guestInfo?.bed_preference,
            // aria-invalid={String(Boolean(this.isButtonPressed && this.guestInfo?.bed_preference === ''))}
            onchange: event => this.updateGuest({
                bed_preference: event.target.value,
            }) }, this.bedPreferenceType.map(data => (h("wa-option", { value: data.CODE_NAME, selected: this.guestInfo?.bed_preference === data.CODE_NAME }, data.CODE_VALUE_EN)))))), h("p", { key: 'e20225d6d6a660998cc4f56fac09683449e269f1', class: "fd-application-info__price-inline" }, h("span", { key: '8c4754ba74c1d8ab507f5ca980d9f08ebe7bd3aa', class: "ir-price" }, formatAmount(this.currency?.symbol, this.amount), "/", locales.entries.Lcz_Stay), h("p", { key: 'c1b0c7d666200745a09324730dd1b17e820997bd', style: { margin: '0', padding: '0', fontSize: '0.75rem' } }, "Including taxes and fees"))), this.rateplanSelection.selected_variation?.child_nbr > 0 && (h("div", { key: '59143235f8552c27c75e3df470053bff36cd931b', class: "fd-application-info__infant" }, h("p", { key: '50aaed35175059f7c00d8bf011fa2e13ff153110', class: "fd-application-info__infant-label" }, "Any of the children below 3 years?"), h("wa-select", { key: '46ba6c77b8c990be07c7faa6a7f07ece515e11f5', size: "s", class: "fd-application-info__select fd-application-info__select--inline", placeholder: locales.entries['No'] || 'No', value: this.guestInfo?.infant_nbr?.toString(), defaultValue: this.guestInfo?.infant_nbr?.toString(), onchange: event => {
                this.updateGuest({
                    infant_nbr: Number(event.target.value),
                });
                if (this.rateplanSelection.is_amount_modified) {
                    return;
                }
                this.recalculateTotalCost.emit();
            }, withClear: true }, Array.from({ length: this.rateplanSelection.selected_variation.child_nbr }, (_, i) => i + 1).map(item => (h("wa-option", { value: item.toString(), selected: this.guestInfo?.infant_nbr === item }, item))))))));
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
                            "id": "src/stores/booking.store.ts::IRatePlanSelection",
                            "referenceLocation": "IRatePlanSelection"
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
                            "id": "src/stores/booking.store.ts::RatePlanGuest",
                            "referenceLocation": "RatePlanGuest"
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
                            "id": "src/models/calendarData.ts::ICurrency",
                            "referenceLocation": "ICurrency"
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
                "reflect": false,
                "attribute": "booking-type",
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
                "reflect": false,
                "attribute": "room-index"
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
                "reflect": false,
                "attribute": "total-nights",
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
            },
            "autoFillGuest": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "reflect": false,
                "attribute": "auto-fill-guest"
            }
        };
    }
    static get states() {
        return {
            "isButtonPressed": {},
            "amount": {}
        };
    }
    static get events() {
        return [{
                "method": "recalculateTotalCost",
                "name": "recalculateTotalCost",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "guestInfo",
                "methodName": "handleGuestInfoChange"
            }];
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
