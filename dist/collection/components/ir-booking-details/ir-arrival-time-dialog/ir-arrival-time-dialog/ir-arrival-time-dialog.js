import { ExtraServiceSchema } from "../../../../models/booking.dto";
import { BookingService } from "../../../../services/booking-service/booking.service";
import calendar_data, { getExtraServiceDefaultPrice } from "../../../../stores/calendar-data";
import { createDateWithOffsetAndHour } from "../../../../utils/booking";
import { h } from "@stencil/core";
import { t } from "../../../../services/locale/t";
import { getSetupEntryLabel } from "../../../../services/setup/index";
/** Service category code for an early-check-in extra service charge. */
const EARLY_CHECK_IN_CATEGORY_CODE = 'ECI';
/**
 * Hour-of-day (24h, hotel-local) each `_ARRIVAL_TIME` setup code represents.
 * These codes are fixed setup-table entries (not derivable from their label text alone,
 * e.g. "Noon"/"Midnight"), so the mapping is hardcoded here. '001' ("Not sure yet") has
 * no time of day and is intentionally omitted.
 */
const ARRIVAL_TIME_HOURS = {
    '002': 10, // 10 AM
    '003': 12, // Noon
    '004': 14, // 2 PM
    '005': 16, // 4 PM
    '006': 18, // 6 PM
    '007': 20, // 8 PM
    '008': 22, // 10 PM
    '009': 0, // Midnight
    '010': 2, // 2 AM
    '011': 4, // 4 AM
    '012': 6, // 6 AM
    '013': 8, // 8 AM
};
/**
 * Midnight/2 AM/4 AM ('009'-'011') fall on the calendar day *after* the arrival day — they're
 * late-night arrivals, not early-morning ones, so they can never count as an early check-in
 * even though their raw hour (0, 2, 4) is numerically less than the check-in start hour.
 */
const NEVER_EARLY_CHECK_IN_CODES = new Set(['009', '010', '011']);
/**
 * Dialog that lets staff set or change the expected arrival time for a single room.
 * Persists the choice via BookingService.setArrivalTime and emits `arrivalTimeClose`
 * when it closes so the parent can refresh the booking.
 *
 * Usage:
 *   <ir-arrival-time-dialog
 *     room={room}
 *     open={isOpen}
 *     property_id={propertyId}
 *     arrivalTime={arrivalTimeEntries}
 *     onArrivalTimeClose={e => { isOpen = false; if (e.detail.saved) refresh(); }}
 *   />
 */
export class IrArrivalTimeDialog {
    /** Room whose expected arrival time is being changed. */
    room;
    /** Needed to look up whether this room already has an early-check-in extra service charge. */
    booking;
    /** Controls dialog visibility. */
    open;
    property_id;
    arrivalTime = [];
    language = 'en';
    /** Needed to create an early-check-in extra service charge alongside the arrival time. */
    booking_nbr;
    currency_id;
    currencySymbol;
    selectedValue = null;
    isLoading = false;
    createExtraService = true;
    extraServicePrice = null;
    /**
     * Fired when the dialog closes.
     * `saved: true` → arrival time was persisted; `saved: false` → user cancelled.
     */
    arrivalTimeClose;
    bookingService = new BookingService();
    dialogRef;
    closedBySave = false;
    handleOpenChange(next) {
        if (next) {
            this.selectedValue = this.room?.arrival_time?.code ?? null;
            const existing = this.existingEarlyCheckInService;
            this.extraServicePrice = existing ? existing.price : Number(getExtraServiceDefaultPrice('ECI'));
        }
    }
    /** The room's already-persisted early-check-in extra service charge, if any — its price becomes the field's default instead of the property's generic default. */
    get existingEarlyCheckInService() {
        return (this.booking?.extra_services ?? []).find(service => service.room_identifier === this.room?.identifier && service.category?.code === EARLY_CHECK_IN_CATEGORY_CODE);
    }
    /** Whether an arrival-time option (e.g. "10 AM") falls before the property's standard check-in start time, in hotel-local time. */
    isEarlyCheckIn(entry) {
        if (NEVER_EARLY_CHECK_IN_CODES.has(entry.CODE_NAME))
            return false;
        const hour = ARRIVAL_TIME_HOURS[entry.CODE_NAME];
        const checkInFrom = calendar_data.property?.time_constraints?.check_in_from;
        const offset = calendar_data.property?.city?.gmt_offset;
        const match = checkInFrom?.match(/^(\d{1,2}):(\d{2})$/);
        if (hour === undefined || !match || offset === undefined)
            return false;
        const [, checkInHour, checkInMinute] = match;
        const optionTime = createDateWithOffsetAndHour(offset, hour, 0);
        const checkInTime = createDateWithOffsetAndHour(offset, Number(checkInHour), Number(checkInMinute));
        return optionTime.getTime() < checkInTime.getTime();
    }
    /** Whether the currently selected arrival time is an early check-in. */
    get selectedIsEarlyCheckIn() {
        const entry = this.arrivalTime?.find(time => time.CODE_NAME === this.selectedValue);
        return entry ? this.isEarlyCheckIn(entry) : false;
    }
    async handleConfirm(e) {
        e.stopImmediatePropagation();
        if (!this.selectedValue)
            return;
        try {
            this.isLoading = true;
            await this.bookingService.setArrivalTime({
                property_id: this.property_id,
                code: this.selectedValue,
                room_identifier: this.room.identifier,
            });
            const existing = this.existingEarlyCheckInService;
            if (this.selectedIsEarlyCheckIn && this.createExtraService) {
                if (this.extraServicePrice) {
                    await this.bookingService.doBookingExtraService({
                        booking_nbr: this.booking_nbr,
                        is_remove: false,
                        service: {
                            ...existing,
                            category: { code: EARLY_CHECK_IN_CATEGORY_CODE },
                            price: this.extraServicePrice,
                            cost: null,
                            currency_id: this.currency_id,
                            room_identifier: this.room.identifier,
                            start_date: this.room.from_date,
                            end_date: null,
                            description: null,
                            agent: existing?.agent ?? null,
                        },
                    });
                }
                else if (existing) {
                    // Price cleared/zeroed on an existing charge — treat as removing the early-check-in extra service.
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
        return (h("ir-dialog", { key: '03ece9ae002ddf24b1c7b11c7a49e3653ff2f6af', open: this.open, label: t('Lcz_ExpectedArrivalTime', { fallback: 'Expected Arrival Time' }), ref: el => (this.dialogRef = el), onIrDialogHide: e => {
                e.preventDefault();
                const saved = this.closedBySave;
                this.arrivalTimeClose.emit({ saved });
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closedBySave = false;
                this.selectedValue = null;
                this.createExtraService = true;
                this.extraServicePrice = null;
            } }, h("div", { key: '55704b910299ceb77b6d30d8f74036eea708abdf', class: 'ir-time-dialog__body' }, h("div", { key: 'b39d0e46865ca169448c58145ccdc1ec038064ae', class: 'ir-time-dialog__current-unit' }, h("span", { key: 'f722e90467def2f50f03be3c7bbfffefcf6472a2' }, this.room?.roomtype?.name), " ", h("span", { key: '6b3a808fffb3d49fe271773c4a7c38267eb73d31' }, this.room?.rateplan?.short_name), " ", h("ir-unit-tag", { key: 'f8eaf14142699ec470885b3b3e0891794ab8804d', unit: this.room?.unit?.name })), h("wa-select", { key: 'a266fec5904b09d4c286e8358a93c39cd079df4c', size: "s", placeholder: t('Lcz_NotProvided', { fallback: 'Not provided' }), value: this.selectedValue ?? '', "onwa-after-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, defaultValue: this.selectedValue ?? '', onchange: e => (this.selectedValue = e.target.value) }, this.arrivalTime?.map(time => (h("wa-option", { key: time.CODE_NAME, value: time.CODE_NAME }, getSetupEntryLabel(time, this.language), this.isEarlyCheckIn(time) ? t('Lcz_EarlyCheckInSuffix', { fallback: ' (Early check-in)' }) : '')))), this.selectedIsEarlyCheckIn && (h("div", { key: '128113064bdb8dbfdabd461366defe6a0687674f', class: "ir-time-dialog__insight" }, h("div", { key: 'ecc0eacb6717a947abf5a3847c578b31bce03a0d', class: "ir-time-dialog__insight-row" }, h("wa-icon", { key: '233c2f1c43554fd8a35630bd4b5051071535f29e', class: "ir-time-dialog__insight-icon", name: "clock" }), h("div", { key: 'e02cac9366fecb71cc9d049357d091ac5fb8726a', class: "ir-time-dialog__insight-copy" }, h("p", { key: '7a22ccc4b44a70fdb444b92ad4190ad78decafa8', class: "ir-time-dialog__insight-title" }, t('Lcz_ChargeAsEarlyCheckInQuestion', { fallback: 'Would you like to charge it as an Early Check-in?' })), h("p", { key: '21cfd49bb5d822ffb3e0f30c38773b65f961b00f', class: "ir-time-dialog__insight-subtitle" }, t('Lcz_AddedAsAccommodationExtraServiceHint', { fallback: 'This will be added as an accommodation extra service' })))), this.createExtraService && (h("div", { key: 'a1d2e7714e3df2f5bf38d085714fba5bfecd57d4', class: "ir-time-dialog__insight-price" }, h("ir-validator", { key: '4ae7aa1c637c5683b10840cabd135c432ecb4858', value: this.extraServicePrice, schema: ExtraServiceSchema.shape.price }, h("ir-input", { key: '7847656517816123faa729f770fd0a0d50b44179', "onText-change": e => (this.extraServicePrice = Number(e.detail)), defaultValue: this.extraServicePrice?.toString(), value: this.extraServicePrice?.toString(), mask: 'price', withClear: true, type: "text" }, h("span", { key: '58d368c1a6850cea424a79a7d763c23ac7fa18a0', slot: "start" }, this.currencySymbol)))))))), h("div", { key: '89c66d83d08c677b41ff04c92e9e7bdefc18f70f', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '5976add7efd66a0046351810edabb83a50474913', size: "m", variant: "neutral", appearance: "filled", "data-dialog": "close" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: 'c0d8db144a407c6ee4824617189ed927b68a3421', size: "m", variant: "brand", loading: this.isLoading, disabled: !this.selectedValue, onClickHandler: e => this.handleConfirm(e), appearance: "accent" }, t('Lcz_Save', { fallback: 'Save' })))));
    }
    static get is() { return "ir-arrival-time-dialog"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-arrival-time-dialog.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-arrival-time-dialog.css"]
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
                    "text": "Room whose expected arrival time is being changed."
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
                    "text": "Needed to look up whether this room already has an early-check-in extra service charge."
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
            "arrivalTime": {
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
                    "text": "Needed to create an early-check-in extra service charge alongside the arrival time."
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
                "method": "arrivalTimeClose",
                "name": "arrivalTimeClose",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fired when the dialog closes.\r\n`saved: true` \u2192 arrival time was persisted; `saved: false` \u2192 user cancelled."
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
