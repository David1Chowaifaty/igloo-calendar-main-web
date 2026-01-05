import { Fragment, h } from "@stencil/core";
import Token from "../../../../models/Token";
import booking_store, { hasAtLeastOneRoomSelected, resetReserved } from "../../../../stores/booking.store";
import calendar_data from "../../../../stores/calendar-data";
import moment from "moment";
import { getReleaseHoursString } from "../../../../utils/utils";
import { BookingService } from "../../../../services/booking-service/booking.service";
import { IRBookingEditorService } from "../ir-booking-editor.service";
export class IrBookingEditorDrawer {
    /** Controls drawer visibility (reflected to DOM). */
    open;
    /** Auth token used for API requests. */
    ticket;
    /** Property identifier. */
    propertyid;
    /** UI language code (default: `en`). */
    language = 'en';
    /** Booking being created or edited. */
    booking;
    /** Current booking editor mode. */
    mode = 'PLUS_BOOKING';
    /** Optional drawer title override. */
    label;
    /** Check-in date (ISO string). */
    checkIn;
    /** Check-out date (ISO string). */
    checkOut;
    /** Selected unit identifier. */
    unitId;
    /** Payload for blocked unit dates. */
    blockedUnit;
    /** Allowed room type identifiers. */
    roomTypeIds = [];
    /** Room identifier used by the editor. */
    roomIdentifier;
    step = 'details';
    isLoading;
    /** Emitted when the booking editor drawer is closed. */
    bookingEditorClosed;
    token = new Token();
    bookingService = new BookingService();
    bookingEditorService = new IRBookingEditorService();
    wasBlockedUnit = false;
    didAdjustBlockedUnit = false;
    originalBlockPayload;
    componentWillLoad() {
        if (this.token) {
            this.token.setToken(this.ticket);
        }
        this.initializeBlockedUnitState(this.blockedUnit);
    }
    handleTicketChange() {
        if (this.token) {
            this.token.setToken(this.ticket);
        }
    }
    handleBlockedUnitChange(newValue) {
        this.initializeBlockedUnitState(newValue);
    }
    handleCheckInChange() {
        this.initializeBlockedUnitState(this.blockedUnit);
    }
    handleCheckOutChange() {
        this.initializeBlockedUnitState(this.blockedUnit);
    }
    handleUnitChange() {
        this.initializeBlockedUnitState(this.blockedUnit);
    }
    initializeBlockedUnitState(blockedUnit) {
        const allowedStatusCodes = ['002', '003', '004'];
        if (!blockedUnit) {
            this.wasBlockedUnit = false;
            this.originalBlockPayload = undefined;
            return;
        }
        const hasBlockMetadata = Boolean(blockedUnit && allowedStatusCodes.includes(blockedUnit.STATUS_CODE));
        if (!hasBlockMetadata || !this.checkIn || !this.checkOut || !this.unitId) {
            this.wasBlockedUnit = false;
            this.originalBlockPayload = undefined;
            this.didAdjustBlockedUnit = false;
            return;
        }
        this.originalBlockPayload = {
            from_date: this.checkIn,
            to_date: this.checkOut,
            NOTES: blockedUnit.OPTIONAL_REASON || '',
            pr_id: this.unitId.toString(),
            STAY_STATUS_CODE: (blockedUnit.STATUS_CODE || (blockedUnit.OUT_OF_SERVICE ? '004' : Number(blockedUnit.RELEASE_AFTER_HOURS) === 0 ? '002' : '003')),
            DESCRIPTION: blockedUnit.RELEASE_AFTER_HOURS || '',
            BLOCKED_TILL_DATE: blockedUnit.ENTRY_DATE || undefined,
            BLOCKED_TILL_HOUR: blockedUnit.ENTRY_HOUR !== undefined && blockedUnit.ENTRY_HOUR !== null ? blockedUnit.ENTRY_HOUR.toString() : undefined,
            BLOCKED_TILL_MINUTE: blockedUnit.ENTRY_MINUTE !== undefined && blockedUnit.ENTRY_MINUTE !== null ? blockedUnit.ENTRY_MINUTE.toString() : undefined,
        };
        this.wasBlockedUnit = true;
        this.didAdjustBlockedUnit = false;
    }
    handleBookingStepChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { direction } = e.detail;
        switch (direction) {
            case 'next':
                this.step = 'confirm';
                break;
            case 'prev':
                this.step = 'details';
                break;
            default:
                console.warn('Direction not supported');
        }
    }
    get drawerLabel() {
        if (this.label) {
            return this.label;
        }
        switch (this.mode) {
            case 'SPLIT_BOOKING':
            case 'BAR_BOOKING':
            case 'ADD_ROOM':
            case 'EDIT_BOOKING':
            case 'PLUS_BOOKING':
                return 'New Booking';
        }
    }
    goToConfirm = (e) => {
        e?.stopPropagation();
        this.step = 'confirm';
    };
    goToDetails = () => {
        if (this.mode === 'BAR_BOOKING') {
            resetReserved();
        }
        if (this.mode === 'EDIT_BOOKING') {
            resetReserved();
            this.bookingEditorService.updateBooking(this.bookingEditorService.getRoom(this.booking, this.roomIdentifier));
        }
        this.step = 'details';
    };
    renderFooter() {
        switch (this.step) {
            case 'details':
                return this.renderDetailsActions();
            case 'confirm':
                return this.renderConfirmActions();
            default:
                return null;
        }
    }
    renderConfirmActions() {
        const { checkIn } = booking_store?.bookingDraft?.dates;
        const hasCheckIn = checkIn ? checkIn?.isSame(moment(), 'date') : false;
        return (h(Fragment, null, h("ir-custom-button", { onClickHandler: this.goToDetails, size: "medium", appearance: "filled", variant: "neutral" }, "Back"), h("ir-custom-button", { loading: this.isLoading === 'book', value: "book", form: "new_booking_form", disabled: false, type: "submit", size: "medium", appearance: hasCheckIn ? 'outlined' : 'accent', variant: "brand" }, "Book"), hasCheckIn && (h("ir-custom-button", { loading: this.isLoading === 'book-checkin', value: "book-checkin", form: "new_booking_form", type: "submit", size: "medium", appearance: "accent", variant: "brand" }, "Book and check-in"))));
    }
    renderDetailsActions() {
        const haveRoomSelected = hasAtLeastOneRoomSelected();
        return (h(Fragment, null, h("ir-custom-button", { "data-drawer": "close", size: "medium", appearance: "filled", variant: "neutral" }, "Cancel"), ['EDIT_BOOKING', 'PLUS_BOOKING', 'ADD_ROOM'].includes(this.mode) && (h(Fragment, null, !haveRoomSelected && h("wa-tooltip", { for: "booking_editor__next-button" }, "Please select at least one unit to continue."), h("ir-custom-button", { id: "booking_editor__next-button", disabled: !haveRoomSelected, onClickHandler: this.goToConfirm, size: "medium", appearance: "accent", variant: "brand" }, "Next")))));
    }
    async closeDrawer() {
        if (this.wasBlockedUnit && !this.didAdjustBlockedUnit) {
            await this.checkAndBlockDate();
        }
        else if (this.blockedUnit && this.blockedUnit.STATUS_CODE) {
            await this.handleBlockDate();
        }
        this.bookingEditorClosed.emit();
        this.step = 'details';
    }
    getBlockUnitPayload() {
        if (this.wasBlockedUnit && this.originalBlockPayload) {
            return this.originalBlockPayload;
        }
        if (!this.blockedUnit || !this.checkIn || !this.checkOut || !this.unitId) {
            return undefined;
        }
        const releaseData = getReleaseHoursString(this.blockedUnit.RELEASE_AFTER_HOURS !== null ? Number(this.blockedUnit.RELEASE_AFTER_HOURS) : null);
        return {
            from_date: this.checkIn,
            to_date: this.checkOut,
            NOTES: this.blockedUnit.OPTIONAL_REASON || '',
            pr_id: this.unitId.toString(),
            STAY_STATUS_CODE: this.blockedUnit.OUT_OF_SERVICE ? '004' : Number(this.blockedUnit.RELEASE_AFTER_HOURS) === 0 ? '002' : '003',
            DESCRIPTION: this.blockedUnit.RELEASE_AFTER_HOURS || '',
            ...releaseData,
        };
    }
    async handleBlockDate(autoReset = true, overridePayload) {
        try {
            const payload = overridePayload ?? this.getBlockUnitPayload();
            if (!payload) {
                return;
            }
            await this.bookingService.blockUnit(payload);
            if (autoReset) {
                this.blockedUnit = undefined;
                this.initializeBlockedUnitState(undefined);
            }
        }
        catch (error) { }
    }
    async handleAdjustBlockedUnitEvent(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        try {
            await this.adjustBlockedDatesAfterReservation(event.detail);
            this.didAdjustBlockedUnit = true;
        }
        catch (error) {
            console.error('Error adjusting blocked unit:', error);
        }
    }
    async adjustBlockedDatesAfterReservation(serviceParams) {
        if (!this.wasBlockedUnit || !this.originalBlockPayload) {
            return;
        }
        const original_from_date = moment(this.originalBlockPayload.from_date, 'YYYY-MM-DD');
        const current_from_date = moment(serviceParams.booking.from_date, 'YYYY-MM-DD');
        const original_to_date = moment(this.originalBlockPayload.to_date, 'YYYY-MM-DD');
        const current_to_date = moment(serviceParams.booking.to_date, 'YYYY-MM-DD');
        if (current_to_date.isBefore(original_to_date, 'days')) {
            const props = { ...this.originalBlockPayload, from_date: current_to_date.format('YYYY-MM-DD') };
            await this.bookingService.blockUnit(props);
        }
        if (current_from_date.isAfter(original_from_date, 'days')) {
            const props = { ...this.originalBlockPayload, to_date: current_from_date.format('YYYY-MM-DD') };
            await this.bookingService.blockUnit(props);
        }
        return;
    }
    async checkAndBlockDate() {
        try {
            if (!this.originalBlockPayload || !this.roomTypeIds || this.roomTypeIds.length === 0) {
                return;
            }
            const roomTypeIds = this.roomTypeIds.map(id => Number(id)).filter(id => !Number.isNaN(id));
            if (roomTypeIds.length === 0) {
                return;
            }
            await this.bookingService.getBookingAvailability({
                from_date: this.originalBlockPayload.from_date,
                to_date: this.originalBlockPayload.to_date,
                propertyid: calendar_data.property.id,
                adultChildCount: {
                    adult: 2,
                    child: 0,
                },
                language: this.language,
                room_type_ids: roomTypeIds,
                currency: calendar_data.property?.currency,
            });
            const isAvailable = booking_store.roomTypes.every(rt => {
                if (rt.is_available_to_book) {
                    return true;
                }
                return rt.inventory > 0 && rt['not_available_reason'] === 'ALL-RATES-PLAN-NOT-BOOKABLE';
            });
            if (isAvailable) {
                await this.handleBlockDate();
            }
            else {
                console.warn('Blocked date is unavailable. Continuing...');
            }
        }
        catch (error) {
            console.error('Error checking and blocking date:', error);
        }
    }
    render() {
        return (h("ir-drawer", { key: '9ca193c34134174b695adce006837c7e440b5bb4', onDrawerHide: async (event) => {
                event.stopImmediatePropagation();
                event.stopPropagation();
                await this.closeDrawer();
            }, style: {
                '--ir-drawer-width': '70rem',
                '--ir-drawer-background-color': 'var(--wa-color-surface-default)',
                '--ir-drawer-padding-left': 'var(--spacing)',
                '--ir-drawer-padding-right': 'var(--spacing)',
                '--ir-drawer-padding-top': 'var(--spacing)',
                '--ir-drawer-padding-bottom': 'var(--spacing)',
            }, class: "booking-editor__drawer", label: this.drawerLabel, open: this.open }, this.open && this.ticket && (h("ir-booking-editor", { key: 'c05097c240962b7ad888de8c94e4a1449a6cc4e3', onLoadingChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isLoading = e.detail.cause;
            }, onAdjustBlockedUnit: event => this.handleAdjustBlockedUnitEvent(event), unitId: this.unitId, propertyId: this.propertyid, roomTypeIds: this.roomTypeIds, onResetBookingEvt: async () => {
                this.blockedUnit = undefined;
                this.initializeBlockedUnitState(undefined);
                await this.closeDrawer();
            }, step: this.step, blockedUnit: this.blockedUnit, language: this.language, booking: this.booking, mode: this.mode, checkIn: this.checkIn, checkOut: this.checkOut, identifier: this.roomIdentifier })), h("div", { key: 'da6f70dcd54e127309cc404685bb3a6039ccaec1', slot: "footer", class: "ir__drawer-footer" }, this.renderFooter())));
    }
    static get is() { return "ir-booking-editor-drawer"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-booking-editor-drawer.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-booking-editor-drawer.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "Controls drawer visibility (reflected to DOM)."
                },
                "getter": false,
                "setter": false,
                "attribute": "open",
                "reflect": true
            },
            "ticket": {
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
                    "text": "Auth token used for API requests."
                },
                "getter": false,
                "setter": false,
                "attribute": "ticket",
                "reflect": false
            },
            "propertyid": {
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
                    "text": "Property identifier."
                },
                "getter": false,
                "setter": false,
                "attribute": "propertyid",
                "reflect": false
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
                    "text": "UI language code (default: `en`)."
                },
                "getter": false,
                "setter": false,
                "attribute": "language",
                "reflect": false,
                "defaultValue": "'en'"
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
                            "id": "src/models/booking.dto.ts::Booking"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Booking being created or edited."
                },
                "getter": false,
                "setter": false
            },
            "mode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "BookingEditorMode",
                    "resolved": "\"ADD_ROOM\" | \"BAR_BOOKING\" | \"EDIT_BOOKING\" | \"PLUS_BOOKING\" | \"SPLIT_BOOKING\"",
                    "references": {
                        "BookingEditorMode": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/igloo-calendar/ir-booking-editor/types.ts::BookingEditorMode"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Current booking editor mode."
                },
                "getter": false,
                "setter": false,
                "attribute": "mode",
                "reflect": false,
                "defaultValue": "'PLUS_BOOKING'"
            },
            "label": {
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
                    "text": "Optional drawer title override."
                },
                "getter": false,
                "setter": false,
                "attribute": "label",
                "reflect": false
            },
            "checkIn": {
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
                    "text": "Check-in date (ISO string)."
                },
                "getter": false,
                "setter": false,
                "attribute": "check-in",
                "reflect": false
            },
            "checkOut": {
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
                    "text": "Check-out date (ISO string)."
                },
                "getter": false,
                "setter": false,
                "attribute": "check-out",
                "reflect": false
            },
            "unitId": {
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
                    "text": "Selected unit identifier."
                },
                "getter": false,
                "setter": false,
                "attribute": "unit-id",
                "reflect": false
            },
            "blockedUnit": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "BlockedDatePayload",
                    "resolved": "{ RELEASE_AFTER_HOURS: string; ENTRY_DATE: string; ENTRY_HOUR: number; ENTRY_MINUTE: number; OPTIONAL_REASON: string; STATUS_CODE: string; OUT_OF_SERVICE: boolean; }",
                    "references": {
                        "BlockedDatePayload": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/igloo-calendar/ir-booking-editor/types.ts::BlockedDatePayload"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Payload for blocked unit dates."
                },
                "getter": false,
                "setter": false
            },
            "roomTypeIds": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "(string | number)[]",
                    "resolved": "(string | number)[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Allowed room type identifiers."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "roomIdentifier": {
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
                    "text": "Room identifier used by the editor."
                },
                "getter": false,
                "setter": false,
                "attribute": "room-identifier",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "step": {},
            "isLoading": {}
        };
    }
    static get events() {
        return [{
                "method": "bookingEditorClosed",
                "name": "bookingEditorClosed",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the booking editor drawer is closed."
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
                "propName": "ticket",
                "methodName": "handleTicketChange"
            }, {
                "propName": "blockedUnit",
                "methodName": "handleBlockedUnitChange"
            }, {
                "propName": "checkIn",
                "methodName": "handleCheckInChange"
            }, {
                "propName": "checkOut",
                "methodName": "handleCheckOutChange"
            }, {
                "propName": "unitId",
                "methodName": "handleUnitChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "bookingStepChange",
                "method": "handleBookingStepChange",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-booking-editor-drawer.js.map
