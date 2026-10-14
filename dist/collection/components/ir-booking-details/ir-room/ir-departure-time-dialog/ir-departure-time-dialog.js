import { ExtraServiceSchema } from "../../../../models/booking.dto";
import { BookingService } from "../../../../services/booking-service/booking.service";
import calendar_data, { getExtraServiceDefaultPrice } from "../../../../stores/calendar-data";
import { createDateWithOffsetAndHour } from "../../../../utils/booking";
import { h } from "@stencil/core";
import { t } from "../../../../services/locale/t";
import { getSetupEntryLabel } from "../../../../services/setup/index";
import { formatBookingNumber } from "../../../../utils/number";
/** Service category code for a late-checkout extra service charge. */
const LATE_CHECKOUT_CATEGORY_CODE = 'LCO';
/**
 * Dialog that lets staff set or change the expected departure time for a single room.
 * Persists the choice via BookingService.setDepartureTime and emits `departureTimeClose`
 * when it closes so the parent can refresh the booking.
 *
 * Usage:
 *   <ir-departure-time-dialog
 *     room={room}
 *     open={isOpen}
 *     property_id={propertyId}
 *     departureTime={departureTimeEntries}
 *     onDepartureTimeClose={e => { isOpen = false; if (e.detail.saved) refresh(); }}
 *   />
 */
export class IrDepartureTimeDialog {
    /** Room whose expected departure time is being changed. */
    room;
    /** Needed to look up whether this room already has a late-checkout extra service charge. */
    booking;
    /** Controls dialog visibility. */
    open;
    property_id;
    departureTime = [];
    language = 'en';
    /** Needed to create a late-checkout extra service charge alongside the departure time. */
    booking_nbr;
    currency_id;
    currencySymbol;
    selectedValue = null;
    isLoading = false;
    createExtraService = true;
    extraServicePrice = null;
    /**
     * Fired when the dialog closes.
     * `saved: true` → departure time was persisted; `saved: false` → user cancelled.
     */
    departureTimeClose;
    bookingService = new BookingService();
    dialogRef;
    closedBySave = false;
    handleOpenChange(next) {
        if (next) {
            this.selectedValue = this.room?.departure_time?.code ?? null;
            const existing = this.existingLateCheckoutService;
            this.extraServicePrice = existing ? existing.price : Number(getExtraServiceDefaultPrice('LCO'));
        }
    }
    /** The room's already-persisted late-checkout extra service charge, if any — its price becomes the field's default instead of the property's generic default. */
    get existingLateCheckoutService() {
        return (this.booking?.extra_services ?? []).find(service => service.room_identifier === this.room?.identifier && service.category?.code === LATE_CHECKOUT_CATEGORY_CODE);
    }
    /** Whether a departure-time option (e.g. "14:00") falls after the property's standard checkout time, in hotel-local time. */
    isLateCheckout(entry) {
        const match = entry.CODE_VALUE_EN?.match(/^(\d{1,2}):(\d{2})$/);
        const checkoutHours = calendar_data.checkin_checkout_hours;
        if (!match || !checkoutHours)
            return false;
        const [, hour, minute] = match;
        const optionTime = createDateWithOffsetAndHour(checkoutHours.offset, Number(hour), Number(minute));
        const checkoutTime = createDateWithOffsetAndHour(checkoutHours.offset, checkoutHours.hour, checkoutHours.minute);
        return optionTime.getTime() > checkoutTime.getTime();
    }
    /** Whether the currently selected departure time is a late checkout. */
    get selectedIsLateCheckout() {
        const entry = this.departureTime?.find(dt => dt.CODE_NAME === this.selectedValue);
        return entry ? this.isLateCheckout(entry) : false;
    }
    async handleConfirm(e) {
        e.stopImmediatePropagation();
        if (!this.selectedValue)
            return;
        try {
            this.isLoading = true;
            await this.bookingService.setDepartureTime({
                property_id: this.property_id,
                code: this.selectedValue,
                room_identifier: this.room.identifier,
            });
            const existing = this.existingLateCheckoutService;
            if (this.selectedIsLateCheckout && this.createExtraService) {
                if (this.extraServicePrice) {
                    await this.bookingService.doBookingExtraService({
                        booking_nbr: this.booking_nbr,
                        is_remove: false,
                        service: {
                            ...existing,
                            category: { code: LATE_CHECKOUT_CATEGORY_CODE },
                            price: this.extraServicePrice,
                            cost: null,
                            currency_id: this.currency_id,
                            room_identifier: this.room.identifier,
                            start_date: this.room.to_date,
                            end_date: null,
                            description: null,
                            agent: existing?.agent ?? null,
                        },
                    });
                }
                else if (existing) {
                    // Price cleared/zeroed on an existing charge — treat as removing the late-checkout extra service.
                    await this.bookingService.doBookingExtraService({
                        booking_nbr: this.booking_nbr,
                        is_remove: true,
                        service: existing,
                    });
                }
            }
            this.closedBySave = true;
            this.dialogRef?.closeModal();
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        return (h("ir-dialog", { key: 'b026c245bc326fbe13750e40d39c22fb7030b21b', open: this.open, label: t('Lcz_ExpectedDepartureTimeDialogTitle', { fallback: 'Expected Departure Time' }), ref: el => (this.dialogRef = el), onIrDialogHide: e => {
                e.preventDefault();
                const saved = this.closedBySave;
                this.departureTimeClose.emit({ saved });
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closedBySave = false;
                this.selectedValue = null;
                this.createExtraService = true;
                this.extraServicePrice = null;
            } }, h("div", { key: 'de58b33fa612dc13738aacec4d46e34c62ffdc0b', class: "ir-time-dialog__body" }, h("div", { key: '47bc88786d7c407d71f5bbe25bd93513c96adc69', class: 'ir-time-dialog__current-unit' }, h("span", { key: '931a9338376ddcd45be5f41c6a2a0e1e1adf9c21' }, this.room?.roomtype?.name), " ", h("span", { key: '9f04ff06caba4e32b40ef52dc1652426938cf31b' }, this.room?.rateplan?.short_name), " ", h("ir-unit-tag", { key: 'aa27313121eb9346ad213b8c571fa2be9dd2d468', unit: this.room?.unit?.name })), h("wa-select", { key: '3121a5bf5c27f9f31b2bb15b3bc2c14231054948', size: "s", placeholder: t('Lcz_NotProvided', { fallback: 'Not provided' }), "onwa-after-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, value: this.selectedValue ?? '', defaultValue: this.selectedValue ?? '', onchange: e => (this.selectedValue = e.target.value) }, this.departureTime?.map(dt => (h("wa-option", { key: dt.CODE_NAME, value: dt.CODE_NAME }, formatBookingNumber(getSetupEntryLabel(dt, this.language)), this.isLateCheckout(dt) ? t('Lcz_LateCheckoutSuffix', { fallback: ' (Late check-out)' }) : '')))), this.selectedIsLateCheckout && (h("div", { key: 'ea8ccfb1053d570da85f45ddb5d90e1f9f16fe45', class: "ir-time-dialog__insight" }, h("div", { key: '1aefc54b4ba81860ee6277b498dc65f0d0629537', class: "ir-time-dialog__insight-row" }, h("wa-icon", { key: '90dcd1ba1dbf6ee60213c7d497d9eb66c511e426', class: "ir-time-dialog__insight-icon", name: "clock" }), h("div", { key: 'e096056fb7feed8313f72a00009a66178a402962', class: "ir-time-dialog__insight-copy" }, h("p", { key: '877984fd0c68f7c3289c5fe1e0918c5498826793', class: "ir-time-dialog__insight-title" }, t('Lcz_ChargeAsLateCheckoutQuestion', { fallback: 'Would you like to charge it as an Late Check-out?' })), h("p", { key: 'fa02efd7724bce6b71865d57e1fc4502d6944185', class: "ir-time-dialog__insight-subtitle" }, t('Lcz_AddedAsAccommodationExtraServiceHint', { fallback: 'This will be added as an accommodation extra service' })))), this.createExtraService && (h("div", { key: 'a12be2a113851aee10dd63b02453e7caaa07a178', class: "ir-time-dialog__insight-price" }, h("ir-validator", { key: '0dcdf609508dcddc1e9c6ebdfe3a463d0f11c7cc', value: this.extraServicePrice, schema: ExtraServiceSchema.shape.price }, h("ir-input", { key: '68aa9c9740face878b0f47e98a22ff5466ccc26d', "onText-change": e => (this.extraServicePrice = Number(e.detail)), defaultValue: this.extraServicePrice?.toString(), value: this.extraServicePrice?.toString(), mask: 'price', type: "text", withClear: true }, h("span", { key: 'f7666a41b1ec2123ef0ee0ba00fe25ac7f78548f', slot: "start" }, this.currencySymbol)))))))), h("div", { key: '60cbf2f73c33b87a6b69e2d1de08d83b623ada73', slot: "footer", class: 'ir-dialog__footer' }, h("ir-custom-button", { key: '63987a7c89a16022cbbe75e4efdf1aa7f73263d1', size: "m", variant: "neutral", appearance: "filled", "data-dialog": "close" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: 'e1dbea1f59a23aa221d755618989b744be50e100', size: "m", variant: "brand", loading: this.isLoading, disabled: !this.selectedValue, onClickHandler: e => this.handleConfirm(e), appearance: "accent" }, t('Lcz_Save', { fallback: 'Save' })))));
    }
    static get is() { return "ir-departure-time-dialog"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-departure-time-dialog.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-departure-time-dialog.css"]
        };
    }
    static get properties() {
        return {
            "room": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Room",
                    "resolved": "Room",
                    "references": {
                        "Room": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Room",
                            "referenceLocation": "Room"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Room whose expected departure time is being changed."
                },
                "getter": false,
                "setter": false
            },
            "booking": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Booking",
                    "resolved": "Booking",
                    "references": {
                        "Booking": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Booking",
                            "referenceLocation": "Booking"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Needed to look up whether this room already has a late-checkout extra service charge."
                },
                "getter": false,
                "setter": false
            },
            "open": {
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
                    "text": "Controls dialog visibility."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "open"
            },
            "property_id": {
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
                "attribute": "property_id"
            },
            "departureTime": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "SetupEntries[]",
                    "resolved": "SetupEntries[]",
                    "references": {
                        "SetupEntries": {
                            "location": "import",
                            "path": "@/models/IBooking",
                            "id": "src/models/IBooking.ts::SetupEntries",
                            "referenceLocation": "SetupEntries"
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
                "setter": false,
                "defaultValue": "[]"
            },
            "language": {
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
                "attribute": "language",
                "defaultValue": "'en'"
            },
            "booking_nbr": {
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
                    "text": "Needed to create a late-checkout extra service charge alongside the departure time."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "booking_nbr"
            },
            "currency_id": {
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
                "attribute": "currency_id"
            },
            "currencySymbol": {
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
                "attribute": "currency-symbol"
            }
        };
    }
    static get states() {
        return {
            "selectedValue": {},
            "isLoading": {},
            "createExtraService": {},
            "extraServicePrice": {}
        };
    }
    static get events() {
        return [{
                "method": "departureTimeClose",
                "name": "departureTimeClose",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fired when the dialog closes.\r\n`saved: true` \u2192 departure time was persisted; `saved: false` \u2192 user cancelled."
                },
                "complexType": {
                    "original": "{ saved: boolean }",
                    "resolved": "{ saved: boolean; }",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "open",
                "methodName": "handleOpenChange"
            }];
    }
}
