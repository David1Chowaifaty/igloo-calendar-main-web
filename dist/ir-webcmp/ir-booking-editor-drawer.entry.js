import { r as registerInstance, a as createEvent, h, F as Fragment } from './index-7b3961ed.js';
import { T as Token } from './Token-add81d36.js';
import { B as BookingService, b as booking_store, a as resetReserved, h as hasAtLeastOneRoomSelected } from './booking.service-cc6e87c3.js';
import { c as calendar_data } from './calendar-data-cdc01d0d.js';
import { h as hooks } from './moment-ab846cee.js';
import { o as getReleaseHoursString } from './utils-7eaed9ad.js';
import { I as IRBookingEditorService } from './ir-booking-editor.service-81f76764.js';
import './index-5ba472df.js';
import './index-40c31d5b.js';
import './IBooking-9fbd40d1.js';
import './booking-2b94eb2b.js';
import './locales.store-daef23cc.js';
import './index-17663a35.js';

const irBookingEditorDrawerCss = ".sc-ir-booking-editor-drawer-h{display:block}.booking-editor__drawer.sc-ir-booking-editor-drawer::part(dialog){overflow:hidden}";

const IrBookingEditorDrawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bookingEditorClosed = createEvent(this, "bookingEditorClosed", 7);
    }
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
        if (this.mode) {
            booking_store.event_type = { type: this.mode };
        }
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
    handleModeChange() {
        if (this.mode) {
            booking_store.event_type = { type: this.mode };
        }
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
        const hasCheckIn = checkIn ? checkIn?.isSame(hooks(), 'date') : false;
        return (h(Fragment, null, h("ir-custom-button", { onClickHandler: this.goToDetails, size: "medium", appearance: "filled", variant: "neutral" }, "Back"), h("ir-custom-button", { loading: this.isLoading === 'book', value: "book", form: "new_booking_form", disabled: false, type: "submit", size: "medium", appearance: hasCheckIn ? 'outlined' : 'accent', variant: "brand" }, "Book"), hasCheckIn && (h("ir-custom-button", { loading: this.isLoading === 'book-checkin', value: "book-checkin", form: "new_booking_form", type: "submit", size: "medium", appearance: "accent", variant: "brand" }, "Book and check-in"))));
    }
    renderDetailsActions() {
        const haveRoomSelected = hasAtLeastOneRoomSelected();
        return (h(Fragment, null, h("ir-custom-button", { "data-drawer": "close", size: "medium", appearance: "filled", variant: "neutral" }, "Cancel"), ['PLUS_BOOKING', 'ADD_ROOM'].includes(this.mode) && (h(Fragment, null, !haveRoomSelected && h("wa-tooltip", { for: "booking_editor__next-button" }, "Please select at least one unit to continue."), h("ir-custom-button", { id: "booking_editor__next-button", disabled: !haveRoomSelected, onClickHandler: this.goToConfirm, size: "medium", appearance: "accent", variant: "brand" }, "Next")))));
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
        const originalPayload = { ...this.originalBlockPayload };
        const originalFromDate = hooks(this.originalBlockPayload.from_date, 'YYYY-MM-DD');
        const currentFromDate = hooks(serviceParams.booking.from_date, 'YYYY-MM-DD');
        const originalToDate = hooks(this.originalBlockPayload.to_date, 'YYYY-MM-DD');
        const currentToDate = hooks(serviceParams.booking.to_date, 'YYYY-MM-DD');
        if (currentToDate.isBefore(originalToDate, 'days')) {
            const trailingBlockPayload = {
                ...originalPayload,
                from_date: currentToDate.format('YYYY-MM-DD'),
            };
            await this.bookingService.blockUnit(trailingBlockPayload);
        }
        if (currentFromDate.isAfter(originalFromDate, 'days')) {
            const leadingBlockPayload = {
                ...originalPayload,
                to_date: currentFromDate.format('YYYY-MM-DD'),
            };
            await this.bookingService.blockUnit(leadingBlockPayload);
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
        return (h("ir-drawer", { key: 'af7d089ebeef656d8c0477aca8194134529f5ee0', onDrawerHide: async (event) => {
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
            }, class: "booking-editor__drawer", label: this.drawerLabel, open: this.open }, this.open && this.ticket && (h("ir-booking-editor", { key: 'c6b219d88dc6eb544adf20a577ea302654ddde14', onLoadingChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isLoading = e.detail.cause;
            }, onAdjustBlockedUnit: event => this.handleAdjustBlockedUnitEvent(event), unitId: this.unitId, propertyId: this.propertyid, roomTypeIds: this.roomTypeIds, onResetBookingEvt: async () => {
                this.blockedUnit = undefined;
                this.initializeBlockedUnitState(undefined);
                await this.closeDrawer();
            }, step: this.step, blockedUnit: this.blockedUnit, language: this.language, booking: this.booking, mode: this.mode, checkIn: this.checkIn, checkOut: this.checkOut, identifier: this.roomIdentifier })), h("div", { key: 'ad39f4b96d05c974f6413f8cf79bb1d3b13b83f9', slot: "footer", class: "ir__drawer-footer" }, this.renderFooter())));
    }
    static get watchers() { return {
        "ticket": ["handleTicketChange"],
        "blockedUnit": ["handleBlockedUnitChange"],
        "checkIn": ["handleCheckInChange"],
        "checkOut": ["handleCheckOutChange"],
        "unitId": ["handleUnitChange"],
        "mode": ["handleModeChange"]
    }; }
};
IrBookingEditorDrawer.style = irBookingEditorDrawerCss;

export { IrBookingEditorDrawer as ir_booking_editor_drawer };

//# sourceMappingURL=ir-booking-editor-drawer.entry.js.map