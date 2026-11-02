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
        return (h("ir-dialog", { key: '8afcbb64d5f0d6873fe9fd8725ac620de159f0fb', open: this.open, label: t('Lcz_ExpectedDepartureTimeDialogTitle', { fallback: 'Expected Departure Time' }), ref: el => (this.dialogRef = el), onIrDialogHide: e => {
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
            } }, h("div", { key: 'dc92bb15f9a64eda5e42625b27fc3efd0e270c98', class: "ir-time-dialog__body" }, h("div", { key: 'f3944fad0279fa5a22eb08afb0cd033024fb4833', class: 'ir-time-dialog__current-unit' }, h("span", { key: 'afa8b3cfb1e1efc7dfe00c31ea269156c6661ac0' }, this.room?.roomtype?.name), " ", h("span", { key: 'e1b8f2a3d5d7b5c9d98d9cd7cbfa3f3c081b0a59' }, this.room?.rateplan?.short_name), " ", h("ir-unit-tag", { key: '4ff9c381c7376d7c4cde7e0d01cdf9726d467e71', unit: this.room?.unit?.name })), h("wa-select", { key: 'c95424ddd38765aa5d74ca0a3755d9aee2e12ce5', size: "s", placeholder: t('Lcz_NotProvided', { fallback: 'Not provided' }), "onwa-after-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, value: this.selectedValue ?? '', defaultValue: this.selectedValue ?? '', onchange: e => (this.selectedValue = e.target.value) }, this.departureTime?.map(dt => (h("wa-option", { key: dt.CODE_NAME, value: dt.CODE_NAME }, formatBookingNumber(getSetupEntryLabel(dt, this.language)), this.isLateCheckout(dt) ? t('Lcz_LateCheckoutSuffix', { fallback: ' (Late check-out)' }) : '')))), this.selectedIsLateCheckout && (h("div", { key: 'eb5d40483c6934fd6bd37c3c8e67b7887c83cc44', class: "ir-time-dialog__insight" }, h("div", { key: 'fb952abf7ebb37ebaebae832e88d788c90361e7c', class: "ir-time-dialog__insight-row" }, h("wa-icon", { key: '9169449c50a684b6e41ae4f542b5a5984f5f717b', class: "ir-time-dialog__insight-icon", name: "clock" }), h("div", { key: 'e427962e6d23d22f8248afb2e43c60fb67fa3663', class: "ir-time-dialog__insight-copy" }, h("p", { key: '4013e5b65b05cb203d37eac7159276d5c24e757b', class: "ir-time-dialog__insight-title" }, t('Lcz_ChargeAsLateCheckoutQuestion', { fallback: 'Would you like to charge it as an Late Check-out?' })), h("p", { key: '651b7cd7df03fc14cdca1e53dfb7a9f1164078b9', class: "ir-time-dialog__insight-subtitle" }, t('Lcz_AddedAsAccommodationExtraServiceHint', { fallback: 'This will be added as an accommodation extra service' })))), this.createExtraService && (h("div", { key: 'abc8ed71f3605e7628a4d9e5e23e044ac5937e6b', class: "ir-time-dialog__insight-price" }, h("ir-validator", { key: '1b6ea6ad1247c65fcb4886771811fe5c41e9af50', value: this.extraServicePrice, schema: ExtraServiceSchema.shape.price }, h("ir-input", { key: '5d7d3942f7d95f39119e7cd93a54f68ed48cecb1', "onText-change": e => (this.extraServicePrice = Number(e.detail)), defaultValue: this.extraServicePrice?.toString(), value: this.extraServicePrice?.toString(), mask: 'price', type: "text", withClear: true }, h("span", { key: '25d507895e7b2912936f0799e3e3974fc7369d8a', slot: "start" }, this.currencySymbol)))))))), h("div", { key: 'd1f9f3a6ceb0d078065f6ce1ab54f4126f7b5fd0', slot: "footer", class: 'ir-dialog__footer' }, h("ir-custom-button", { key: '9809ea7f89bb2a83684de68b33eefef7a37b8950', size: "m", variant: "neutral", appearance: "filled", "data-dialog": "close" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '1fa6ff33a19f8769c41d061cae9ca6520ea598cb', size: "m", variant: "brand", loading: this.isLoading, disabled: !this.selectedValue, onClickHandler: e => this.handleConfirm(e), appearance: "accent" }, t('Lcz_Save', { fallback: 'Save' })))));
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
