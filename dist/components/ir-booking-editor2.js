import { proxyCustomElement, HTMLElement, createEvent, h, Host, Fragment } from '@stencil/core/internal/client';
import { R as RoomsGuestsSchema, B as BookedByGuestSchema } from './types2.js';
import { R as RoomService } from './room.service.js';
import { B as BookingService } from './booking.service.js';
import { l as locales } from './locales.store.js';
import { a as updateBookedByGuest, b as booking_store, s as setBookingDraft, e as setBookingSelectOptions, r as resetBookingStore, m as modifyBookingStore, f as reserveRooms, j as getReservedRooms } from './booking.store.js';
import { c as calendar_data } from './calendar-data.js';
import { h as hooks } from './moment.js';
import { I as IRBookingEditorService, d as defineCustomElement$h } from './ir-booking-editor-header2.js';
import { d as defineCustomElement$n } from './igl-application-info2.js';
import { d as defineCustomElement$m } from './igl-date-range2.js';
import { d as defineCustomElement$l } from './igl-rate-plan2.js';
import { d as defineCustomElement$k } from './igl-room-type2.js';
import { d as defineCustomElement$j } from './ir-booking-editor-form2.js';
import { d as defineCustomElement$i } from './ir-booking-editor-guest-form2.js';
import { d as defineCustomElement$g } from './ir-button2.js';
import { d as defineCustomElement$f } from './ir-country-picker2.js';
import { d as defineCustomElement$e } from './ir-custom-button2.js';
import { d as defineCustomElement$d } from './ir-custom-date-picker2.js';
import { d as defineCustomElement$c } from './ir-date-view2.js';
import { d as defineCustomElement$b } from './ir-icons2.js';
import { d as defineCustomElement$a } from './ir-input2.js';
import { d as defineCustomElement$9 } from './ir-input-text2.js';
import { d as defineCustomElement$8 } from './ir-interceptor2.js';
import { d as defineCustomElement$7 } from './ir-mobile-input2.js';
import { d as defineCustomElement$6 } from './ir-otp2.js';
import { d as defineCustomElement$5 } from './ir-otp-modal2.js';
import { d as defineCustomElement$4 } from './ir-picker2.js';
import { d as defineCustomElement$3 } from './ir-picker-item2.js';
import { d as defineCustomElement$2 } from './ir-spinner2.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';

const irBookingEditorCss = ".sc-ir-booking-editor-h{display:block;height:100%}.booking-editor__roomtype-container.sc-ir-booking-editor{display:flex;flex-direction:column;gap:1rem;margin-top:2rem;padding-bottom:3rem}";
const IrBookingEditorStyle0 = irBookingEditorCss;

const IrBookingEditor = /*@__PURE__*/ proxyCustomElement(class IrBookingEditor extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.resetBookingEvt = createEvent(this, "resetBookingEvt", 7);
        this.loadingChanged = createEvent(this, "loadingChanged", 7);
        this.adjustBlockedUnit = createEvent(this, "adjustBlockedUnit", 7);
    }
    propertyId;
    language = 'en';
    roomTypeIds = [];
    identifier;
    booking;
    mode = 'PLUS_BOOKING';
    checkIn;
    checkOut;
    step;
    blockedUnit;
    unitId;
    isLoading = true;
    resetBookingEvt;
    loadingChanged;
    adjustBlockedUnit;
    roomService = new RoomService();
    bookingService = new BookingService();
    bookingEditorService = new IRBookingEditorService(this.mode);
    room;
    get adjustedCheckout() {
        if (this.bookingEditorService.isEventType('PLUS_BOOKING') && !this.blockedUnit) {
            return undefined;
        }
        return this.checkOut;
    }
    componentWillLoad() {
        this.initializeApp();
    }
    handleModeChange(newMode, oldMode) {
        if (newMode !== oldMode) {
            this.bookingEditorService.setMode(newMode);
        }
    }
    handleGuestSelected(e) {
        this.booking = { ...e.detail };
        updateBookedByGuest({
            firstName: this.booking.guest.first_name,
            lastName: this.booking.guest.last_name,
        });
        const source = booking_store.selects.sources.find(s => s.code === this.booking.source.code);
        setBookingDraft({
            source,
        });
    }
    async initializeApp() {
        try {
            this.isLoading = true;
            this.bookingEditorService.setMode(this.mode);
            const [languageTexts, countriesList] = await Promise.all([
                this.roomService.fetchLanguage(this.language),
                this.bookingService.getCountries(this.language),
                this.roomService.getExposedProperty({
                    id: Number(this.propertyId),
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                    include_sales_rate_plans: true,
                }),
            ]);
            if (!locales.entries) {
                locales.entries = languageTexts.entries;
                locales.direction = languageTexts.direction;
            }
            await this.fetchSetupEntriesAndInitialize();
            setBookingSelectOptions({
                countries: countriesList,
            });
            this.initializeDraftFromBooking();
            if (this.bookingEditorService.isEventType('EDIT_BOOKING')) {
                await this.checkBookingAvailability();
            }
        }
        catch (error) {
            console.error('Error initializing app:', error);
        }
        finally {
            this.isLoading = false;
        }
    }
    disconnectedCallback() {
        resetBookingStore(true);
    }
    handleCheckAvailability(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.checkBookingAvailability();
    }
    /**
     * Initializes booking draft and guest data
     * based on the current editor mode.
     *
     * Throws if required booking data is missing.
     */
    initializeDraftFromBooking() {
        if (this.bookingEditorService.isEventType(['EDIT_BOOKING', 'ADD_ROOM'])) {
            if (!this.booking || (!this.identifier && this.bookingEditorService.isEventType('EDIT_BOOKING'))) {
                throw new Error('Missing booking or identifier');
            }
        }
        if (this.bookingEditorService.isEventType('EDIT_BOOKING')) {
            const room = this.booking.rooms.find(room => room.identifier === this.identifier);
            modifyBookingStore('guest', {
                bed_preference: room.bed_preference?.toString(),
                infant_nbr: room.occupancy.infant_nbr,
                first_name: room.guest.first_name ?? '',
                last_name: room.guest.last_name ?? '',
                unit: room.unit?.id?.toString(),
            });
            this.room = room;
        }
        let draft = {
            dates: {
                checkIn: this.checkIn ? hooks(this.checkIn, 'YYYY-MM-DD') : hooks(),
                checkOut: this.checkOut ? hooks(this.checkOut, 'YYYY-MM-DD') : hooks().add(1, 'day'),
            },
        };
        if (this.bookingEditorService.isEventType(['EDIT_BOOKING', 'ADD_ROOM'])) {
            const source = booking_store.selects.sources.find(s => s.code === this.booking.source.code);
            draft = {
                ...draft,
                source,
            };
            if (this.bookingEditorService.isEventType('EDIT_BOOKING')) {
                draft = {
                    ...draft,
                    occupancy: {
                        adults: this.booking.occupancy.adult_nbr,
                        children: this.booking.occupancy.children_nbr,
                    },
                };
            }
            updateBookedByGuest({
                firstName: this.booking.guest.first_name,
                lastName: this.booking.guest.last_name,
            });
        }
        setBookingDraft(draft);
    }
    updateBooking() {
        try {
            const currentRoomType = this.room;
            const roomtypeId = currentRoomType.roomtype.id;
            const rateplanId = currentRoomType.rateplan.id;
            const guest = {
                bed_preference: currentRoomType.bed_preference?.toString(),
                infant_nbr: currentRoomType.occupancy.infant_nbr,
                last_name: currentRoomType.guest.last_name,
                first_name: currentRoomType.guest.first_name,
                unit: currentRoomType.unit?.id?.toString(),
                roomtype_id: currentRoomType.roomtype.id,
            };
            modifyBookingStore('guest', guest);
            reserveRooms({
                roomTypeId: roomtypeId,
                ratePlanId: rateplanId,
                rooms: 1,
                guest: [guest],
            });
        }
        catch (error) {
            console.error(error);
        }
    }
    async checkBookingAvailability() {
        // resetBookingStore(false);
        const { source, occupancy, dates } = booking_store.bookingDraft;
        const from_date = dates.checkIn.format('YYYY-MM-DD');
        const to_date = dates.checkOut.format('YYYY-MM-DD');
        const is_in_agent_mode = source?.type === 'TRAVEL_AGENCY';
        try {
            const room_type_ids_to_update = this.bookingEditorService.isEventType('EDIT_BOOKING') ? [this.room.roomtype?.id] : [];
            const room_type_ids = this.bookingEditorService.isEventType(['BAR_BOOKING', 'SPLIT_BOOKING']) ? this.roomTypeIds.map(r => Number(r)) : [];
            await this.bookingService.getBookingAvailability({
                from_date,
                to_date,
                propertyid: calendar_data.property.id,
                adultChildCount: {
                    adult: occupancy.adults,
                    child: occupancy.children,
                },
                language: this.language,
                room_type_ids,
                currency: calendar_data.property.currency,
                agent_id: is_in_agent_mode ? source?.tag : null,
                is_in_agent_mode,
                room_type_ids_to_update,
            });
            if (this.mode !== 'EDIT_BOOKING') {
                await this.assignCountryCode();
            }
            if (this.bookingEditorService.isEventType('EDIT_BOOKING')) {
                this.updateBooking();
            }
        }
        catch (error) {
            console.error('Error initializing booking availability:', error);
        }
    }
    async doReservation(source) {
        try {
            this.loadingChanged.emit({ cause: source });
            const reservedRooms = getReservedRooms();
            RoomsGuestsSchema.parse(reservedRooms.map(r => ({ ...r.guest, requires_bed_preference: r.ratePlanSelection.roomtype.is_bed_configuration_enabled })));
            BookedByGuestSchema.parse(booking_store.bookedByGuest);
            const body = await this.bookingEditorService.prepareBookUserServiceParams({
                check_in: source === 'book-checkin',
                booking: this.booking,
                room: this.room,
                unitId: this.unitId?.toString(),
            });
            console.log({ DoReservationPayload: body });
            await this.bookingService.doReservation(body);
            this.adjustBlockedUnit.emit(body);
            this.resetBookingEvt.emit(null);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.loadingChanged.emit({ cause: null });
        }
        // alert('do reservation');
    }
    async assignCountryCode() {
        const country = await this.bookingService.getUserDefaultCountry();
        const countryId = country['COUNTRY_ID'];
        const _c = booking_store.selects.countries.find(c => c.id?.toString() === countryId?.toString());
        updateBookedByGuest({
            countryId: countryId,
            phone_prefix: _c?.phone_prefix,
        });
    }
    async fetchSetupEntriesAndInitialize() {
        try {
            const setupEntries = await this.fetchSetupEntries();
            this.setSourceOptions(calendar_data.property.allowed_booking_sources);
            this.setOtherProperties(setupEntries);
        }
        catch (error) {
            console.error('Error fetching setup entries:', error);
        }
    }
    setOtherProperties(setupEntries) {
        setBookingSelectOptions({
            arrivalTime: setupEntries.arrivalTime,
            bedPreferences: setupEntries.bedPreferenceType,
            ratePricingMode: setupEntries.ratePricingMode,
        });
    }
    setSourceOptions(bookingSource) {
        const _sourceOptions = this.bookingEditorService.isEventType('BAR_BOOKING') ? this.getFilteredSourceOptions(bookingSource) : bookingSource;
        setBookingSelectOptions({
            sources: _sourceOptions,
        });
        let sourceOption;
        if (this.bookingEditorService.isEventType('EDIT_BOOKING') && this.booking) {
            const option = bookingSource.find(option => this.booking.source?.code === option.code);
            sourceOption = option;
        }
        else {
            sourceOption = _sourceOptions.find(o => o.type !== 'LABEL');
        }
        setBookingDraft({
            source: sourceOption,
        });
    }
    getFilteredSourceOptions(sourceOptions) {
        const agentIds = new Set();
        if (!Boolean(this.unitId)) {
            return sourceOptions;
        }
        const room = calendar_data.roomsInfo.find(room => room.physicalrooms.find(r => r.id.toString() === this.unitId?.toString()));
        const hasAgentOnlyRoomType = (() => {
            const rps = room?.rateplans ?? [];
            if (rps.length === 0)
                return false;
            const isForAgentOnly = rps.every((rp) => (rp?.agents?.length ?? 0) > 0);
            if (isForAgentOnly) {
                rps.forEach((rp) => {
                    (rp?.agents ?? []).forEach((ag) => agentIds.add(ag?.id?.toString()));
                });
            }
            return isForAgentOnly;
        })() ?? false;
        if (!hasAgentOnlyRoomType) {
            return sourceOptions;
        }
        return sourceOptions.filter((opt) => {
            if (opt?.type === 'LABEL')
                return true;
            const candidate = opt?.tag;
            const matchesId = candidate != null && agentIds.has(candidate);
            return matchesId;
        });
    }
    async fetchSetupEntries() {
        return await this.bookingService.fetchSetupEntries();
    }
    render() {
        if (this.isLoading) {
            return (h("div", { class: 'drawer__loader-container' }, h("ir-spinner", null)));
        }
        return (h(Host, null, h("div", null, h("ir-interceptor", null), this.step === 'details' && (h(Fragment, null, h("ir-booking-editor-header", { booking: this.booking, checkIn: this.checkIn, checkOut: this.adjustedCheckout, mode: this.mode }), h("div", { class: 'booking-editor__roomtype-container' }, booking_store.roomTypes?.map(roomType => (h("igl-room-type", { key: `room-type-${roomType.id}`, id: roomType.id.toString(), roomType: roomType, bookingType: this.mode, ratePricingMode: booking_store.selects?.ratePricingMode, roomTypeId: this.room?.roomtype?.id, currency: calendar_data.property.currency })))))), this.step === 'confirm' && (h("ir-booking-editor-form", { onDoReservation: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.doReservation(e.detail);
            }, room: this.room, mode: this.mode })))));
    }
    static get watchers() { return {
        "mode": ["handleModeChange"]
    }; }
    static get style() { return IrBookingEditorStyle0; }
}, [2, "ir-booking-editor", {
        "propertyId": [8, "property-id"],
        "language": [1],
        "roomTypeIds": [16],
        "identifier": [1],
        "booking": [1040],
        "mode": [1],
        "checkIn": [1, "check-in"],
        "checkOut": [1, "check-out"],
        "step": [1],
        "blockedUnit": [16],
        "unitId": [1, "unit-id"],
        "isLoading": [32]
    }, [[0, "guestSelected", "handleGuestSelected"], [0, "checkAvailability", "handleCheckAvailability"]], {
        "mode": ["handleModeChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-booking-editor", "igl-application-info", "igl-date-range", "igl-rate-plan", "igl-room-type", "ir-booking-editor-form", "ir-booking-editor-guest-form", "ir-booking-editor-header", "ir-button", "ir-country-picker", "ir-custom-button", "ir-custom-date-picker", "ir-date-view", "ir-icons", "ir-input", "ir-input-text", "ir-interceptor", "ir-mobile-input", "ir-otp", "ir-otp-modal", "ir-picker", "ir-picker-item", "ir-spinner", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-booking-editor":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBookingEditor);
            }
            break;
        case "igl-application-info":
            if (!customElements.get(tagName)) {
                defineCustomElement$n();
            }
            break;
        case "igl-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$m();
            }
            break;
        case "igl-rate-plan":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "igl-room-type":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "ir-booking-editor-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-booking-editor-guest-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-booking-editor-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-country-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-custom-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-mobile-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-otp-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-picker-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrBookingEditor as I, defineCustomElement as d };

//# sourceMappingURL=ir-booking-editor2.js.map