import { Host, h } from "@stencil/core";
import booking_store, { modifyBookingStore, updateBookedByGuest, updateRoomGuest } from "../../../../../stores/booking.store";
import calendar_data, { isSingleUnit } from "../../../../../stores/calendar-data";
import { formatAmount } from "../../../../../utils/utils";
import VariationService from "../../../../../services/variation.service";
import { GuestCredentials } from "../../types";
import { z } from "zod";
import { v4 } from "uuid";
import { BookingService } from "../../../../../services/booking-service/booking.service";
import { t, tRaw } from "../../../../../services/locale/t";
import { getSetupEntryLabel } from "../../../../../services/setup/index";
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
            tooltip += `<b><u>${t('Lcz_CancellationLabel', { fallback: 'Cancellation:' })}</u></b> ${cancellationPolicy}<br/>`;
        }
        if (guaranteePolicy) {
            tooltip += `<b><u>${t('Lcz_GuaranteeLabel', { fallback: 'Guarantee:' })}</u></b> ${guaranteePolicy}`;
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
        // Exclude units already assigned to any other room of the same room type, across all its rate plans
        const roomTypeId = this.rateplanSelection.roomtype.id;
        const currentRatePlanId = this.rateplanSelection.ratePlan.id;
        const takenUnits = [];
        Object.entries(booking_store.ratePlanSelections[roomTypeId] ?? {}).forEach(([ratePlanId, selection]) => {
            (selection.guest ?? []).forEach((guest, i) => {
                if (i >= selection.reserved || (Number(ratePlanId) === currentRatePlanId && i === this.roomIndex)) {
                    return;
                }
                if (guest?.unit) {
                    takenUnits.push(guest.unit.toString());
                }
            });
        });
        const filteredResults = result.filter(r => !takenUnits.includes(r.id.toString()));
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
        return (h(Host, { key: '03706189c1d88f752ae636fd253486289a8ad4a8', class: "fd-application-info", "data-testid": `room_info_${this.rateplanSelection.ratePlan.id}` }, h("div", { key: 'da7912d14323ed4e7ca77644e14abf6a817a5cde', class: "fd-application-info__header" }, (this.bookingType === 'PLUS_BOOKING' || this.bookingType === 'ADD_ROOM' || this.bookingType === 'EDIT_BOOKING') && (h("span", { key: 'a5858cb98e4c271f82f035dee391fcf6ff8b899e', class: "fd-application-info__roomtype-title" }, this.rateplanSelection.roomtype.name)), h("div", { key: '31fc256c8909501e801f09647f2f5e975f165b6e', class: "fd-application-info__details" }, h("div", { key: '0820fd9f82438c30ecf5ca5004c584b3ecc17590', class: "fd-application-info__rateplan" }, h("p", { key: '228cfc3f7157f5018cbf0eab6bf0ac2ad7f62136', class: "fd-application-info__rateplan-name" }, this.rateplanSelection.ratePlan.short_name, this.rateplanSelection.ratePlan.is_non_refundable && (h("span", { key: '00a5895ce24306b85c4c829ed18f5dbd14ae96ad', class: "fd-application-info__non-refundable" }, t('Lcz_NonRefundable', { fallback: 'Non Refundable' })))), h("wa-tooltip", { key: '7f64e47a2ad47771a82d38eca5405ab65536f8cc', for: this.tooltipId }, h("span", { key: 'd00869d9e377a5c9b57b190ab5326134af44f81d', innerHTML: this.getTooltipMessages() })), h("wa-icon", { key: 'c3fa38ecfce0cf1f4ddbe407f9e0d5cd745e392a', name: "circle-info", id: this.tooltipId })), h("p", { key: '2818b0eb0316fc454b81da81a2f0a20d69576435', class: "fd-application-info__variation", innerHTML: formattedVariation })), h("p", { key: '291b27e9f339b56f6d5cc75655852331d39e8126', class: "fd-application-info__price" }, h("span", { key: '4ebdf7c697feef1b72155720ceb4ba73cf53b2da', class: "ir-price" }, formatAmount(this.currency?.symbol, this.amount), "/", t('Lcz_Stay', { fallback: 'Stay' })), h("p", { key: '8c6dc4b221084e2f5a5e06a7863f56484014a7bd', style: { margin: '0', padding: '0', fontSize: '0.75rem' } }, t('Lcz_IncludingTaxesAndFees', { fallback: 'Including taxes and fees' })))), h("div", { key: 'd7b6fbdb4122d1cc4bca72d1cc644d409b582b4d', class: "fd-application-info__footer" }, h("div", { key: '902f6af0e3ecb3a01062a096e8dc5ad6160799b2', class: "fd-application-info__rateplan" }, h("p", { key: '044288bbc356b397f87c7a442d16de314edc5521', class: "fd-application-info__rateplan-name" }, this.rateplanSelection.ratePlan.short_name), h("wa-tooltip", { key: '379301ac3750530b7e08ea39706076a4f9e668b9', for: `mobile-${this.tooltipId}` }, h("span", { key: '0a1bf724f260636ba19464edc12feb9e877823d3', innerHTML: this.getTooltipMessages() })), h("wa-icon", { key: 'e7704ceb985422fa2e8fd91ed6f3f7d0c8082ff3', name: "circle-info", id: `mobile-${this.tooltipId}` })), h("p", { key: 'fe9b8e1f7cbdaec35d4bf5567d24cbc38faaa3a3', class: "fd-application-info__variation", innerHTML: formattedVariation })), h("div", { key: '55217212f859126a44b707d7fa55e836e8a5945c', class: "fd-application-info__form" }, h("ir-validator", { key: '891b8a3cdc875e5c555dd61e9d0e89eb2b9b4034', value: this.guestInfo?.first_name, schema: GuestCredentials.shape.first_name }, h("ir-input", { key: '7305b1891ed0343318b20cc5c8bdd1a0c518ac00', class: "fd-application-info__input",
            // aria-invalid={String(Boolean(this.isButtonPressed && this.guestInfo?.first_name === ''))}
            value: this.guestInfo?.first_name, defaultValue: this.guestInfo?.first_name, "data-testid": "guest_first_name", placeholder: tRaw('Lcz_GuestFirstname', { fallback: 'Guest first name' }), "onText-change": event => {
                const name = event.detail.trim();
                this.updateGuest({ first_name: name });
                if (booking_store.event_type.type === 'EDIT_BOOKING') {
                    modifyBookingStore('guest', {
                        ...booking_store.guest,
                        name,
                    });
                }
            } })), h("ir-validator", { key: 'e5244f42636ae1f103cdce9cd9ff765da6693aac', value: this.guestInfo?.last_name, schema: GuestCredentials.shape.last_name }, h("ir-input", { key: 'e147c18447345c63efcdc4102de3bc70c6097a4d', class: "fd-application-info__input", type: "text",
            // aria-invalid={String(Boolean(this.isButtonPressed && this.guestInfo?.last_name === ''))}
            value: this.guestInfo?.last_name, defaultValue: this.guestInfo?.last_name, "data-testid": "guest_last_name", placeholder: tRaw('Lcz_GuestLastname', { fallback: 'Guest last name' }), "onText-change": event => {
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
            (this.bookingType === 'PLUS_BOOKING' || this.bookingType === 'ADD_ROOM' || this.bookingType === 'EDIT_BOOKING') && (h("wa-select", { key: 'faf21d265da9579629b07c4835d319f6e760a949', "with-clear": true, size: "s", class: "fd-application-info__select", placeholder: t('Lcz_Assignunits', { fallback: 'Assign unit' }), "data-testid": "unit", value: this.guestInfo?.unit, defaultValue: this.guestInfo?.unit, onchange: event => this.updateGuest({
                unit: event.target.value,
            }) }, filteredRoomList.map(room => (h("wa-option", { value: room.id.toString(), selected: this.guestInfo?.unit === room.id.toString() }, room.name))))), this.rateplanSelection.roomtype.is_bed_configuration_enabled && (h("ir-validator", { key: '8f9063e1abb4fcfc925177c73f6ffff3dd3079eb', value: this.guestInfo?.bed_preference, schema: z.string().nonempty() }, h("wa-select", { key: '3a6986b9240687d4f36f5d77f14c7b83bc0760e9', "with-clear": true, size: "s", class: "fd-application-info__select", placeholder: t('Lcz_BedConfiguration', { fallback: 'Bed configuration...' }), "data-testid": "bed_configuration", value: this.guestInfo?.bed_preference, defaultValue: this.guestInfo?.bed_preference,
            // aria-invalid={String(Boolean(this.isButtonPressed && this.guestInfo?.bed_preference === ''))}
            onchange: event => this.updateGuest({
                bed_preference: event.target.value,
            }) }, this.bedPreferenceType.map(data => (h("wa-option", { value: data.CODE_NAME, selected: this.guestInfo?.bed_preference === data.CODE_NAME }, getSetupEntryLabel(data))))))), h("p", { key: '9f2b38ecc0e4762a70bd86223d825ae8db959321', class: "fd-application-info__price-inline" }, h("span", { key: '4c44f9927622b376315cb7338a740891a1b92d11', class: "ir-price" }, formatAmount(this.currency?.symbol, this.amount), "/", t('Lcz_Stay', { fallback: 'Stay' })), h("p", { key: '00b976e9d382be53404698b27569a49be1218574', style: { margin: '0', padding: '0', fontSize: '0.75rem' } }, t('Lcz_IncludingTaxesAndFees', { fallback: 'Including taxes and fees' })))), this.rateplanSelection.selected_variation?.child_nbr > 0 && (h("div", { key: 'e7ee3cc5a6d5648c96bab11d83257de4f15019ca', class: "fd-application-info__infant" }, h("p", { key: '0579479b1701aad8939e4a26bf1669afa0d737e0', class: "fd-application-info__infant-label" }, t('Lcz_AnyChildrenBelow3Years', { fallback: 'Any of the children below 3 years?' })), h("wa-select", { key: '885ac3b6539f1c9322cf3669f2a7bd6a7583396f', size: "s", class: "fd-application-info__select fd-application-info__select--inline", placeholder: t('Lcz_NO', { fallback: 'No' }), value: this.guestInfo?.infant_nbr?.toString(), defaultValue: this.guestInfo?.infant_nbr?.toString(), onchange: event => {
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
