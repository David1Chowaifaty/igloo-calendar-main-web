import { Host, h } from "@stencil/core";
import { BookedByGuestSchema, DayUseHoursSchema, RoomsGuestsSchema } from "./types";
import { RoomService } from "../../../services/room.service";
import { BookingService } from "../../../services/booking-service/booking.service";
import locales from "../../../stores/locales.store";
import booking_store, { fillMissingReservedGuestNames, getReservedRooms, resetBookingStore, setBookingDraft, setBookingSelectOptions, setDayUseSelection, updateBookedByGuest, } from "../../../stores/booking.store";
import calendar_data from "../../../stores/calendar-data";
import { PropertyService } from "../../../services/property.service";
import { showToast } from "../../../utils/utils";
import moment from "moment";
import { IRBookingEditorService } from "./ir-booking-editor.service";
/** `_SVC_CATEGORY` short code for Day Use, matched against `calendar_data.property.tax_categories`. */
const DAY_USE_CATEGORY_CODE = 'DUZ';
/** bookingStatus['002'] in @/utils/booking — CONFIRMED. */
const CONFIRMED_STATUS_CODE = '002';
export class IrBookingEditor {
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
    isFetchingAvailability = false;
    hasCheckedAvailability = false;
    unavailableRatePlanIds = new Set();
    dayUseBookedUnitIds = new Set();
    resolvingDayUseUnitId = null;
    /** Net (tax-exclusive) version of `dayUsePrice`, resolved once via `calculateNetAmount` — shown as the default value in the price input so an untouched default reads the same way a typed custom (net) amount does. */
    dayUseNetPrice = null;
    resetBookingEvt;
    loadingChanged;
    adjustBlockedUnit;
    bookingStepChange;
    roomService = new RoomService();
    bookingService = new BookingService();
    propertyService = new PropertyService();
    bookingEditorService = new IRBookingEditorService(this.mode);
    room;
    get dayUsePrice() {
        return calendar_data.property?.tax_categories?.find(tc => tc.category?.code === DAY_USE_CATEGORY_CODE)?.default_price ?? 0;
    }
    /**
     * Resolves the gross day-use price for the selected unit and advances to step 2.
     *
     * - Hotel default price (untouched): the input shows the default price converted to its **net**
     *   value (`dayUseNetPrice`, resolved once by `resolveDayUseNetPrice`) so an untouched default
     *   reads the same way a typed custom amount does. Since it wasn't actually customized, we discard
     *   that net display value here and show/save the original **gross** default instead.
     * - Custom price (front-desk typed a value): that value is the **net** amount, mirroring how a
     *   manually-modified rate-plan rate is treated (`getRatePlanDisplayAmount` in booking.store.ts) —
     *   `calculateExclusiveTax` derives the tax off the net amount and gross = net + tax.
     *
     * Resolved once here so step 2's summary and the final `doDayUse` submission always agree.
     */
    async handleDayUseUnitSelected(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { unit, roomType, price, isCustomPrice } = e.detail;
        this.resolvingDayUseUnitId = unit.id;
        try {
            let netAmount;
            let taxAmount;
            let grossAmount;
            if (isCustomPrice) {
                netAmount = price;
                taxAmount = await this.bookingService.calculateExclusiveTax({ property_id: Number(this.propertyId), amount: netAmount });
                grossAmount = netAmount + taxAmount;
            }
            else {
                grossAmount = this.dayUsePrice;
                netAmount = this.dayUseNetPrice ?? grossAmount;
                taxAmount = grossAmount - netAmount;
            }
            setDayUseSelection({ unit, roomType, price: grossAmount, netAmount, taxAmount, isCustomPrice });
            this.bookingStepChange.emit({ direction: 'next' });
        }
        finally {
            this.resolvingDayUseUnitId = null;
        }
    }
    /** Resolves `dayUsePrice` (gross) to its net equivalent once, up front, so it's ready before the day-use unit list renders. */
    async resolveDayUseNetPrice() {
        const grossAmount = this.dayUsePrice;
        if (!grossAmount) {
            this.dayUseNetPrice = 0;
            return;
        }
        try {
            this.dayUseNetPrice = await this.propertyService.calculateNetAmount({ property_id: Number(this.propertyId), amount: grossAmount });
        }
        catch (error) {
            console.error('Error resolving day-use net price:', error);
        }
    }
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
            await Promise.all([this.fetchSetupEntriesAndInitialize(), this.resolveDayUseNetPrice()]);
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
        this.checkBookingAvailability(true);
    }
    /**
     * Initializes booking draft and guest data
     * based on the current editor mode.
     *
     * Throws if required booking data is missing.
     */
    initializeDraftFromBooking() {
        const isEdit = this.bookingEditorService.isEventType('EDIT_BOOKING');
        const isEditOrAdd = this.bookingEditorService.isEventType(['EDIT_BOOKING', 'ADD_ROOM']);
        if (isEditOrAdd && (!this.booking || (!this.identifier && isEdit))) {
            throw new Error('Missing booking or identifier');
        }
        if (isEdit) {
            this.room = this.bookingEditorService.getRoom(this.booking, this.identifier);
        }
        const dates = isEdit
            ? {
                checkIn: moment(this.room.from_date, 'YYYY-MM-DD'),
                checkOut: moment(this.room.to_date, 'YYYY-MM-DD'),
            }
            : {
                checkIn: this.checkIn ? moment(this.checkIn, 'YYYY-MM-DD') : moment(),
                checkOut: this.checkOut ? moment(this.checkOut, 'YYYY-MM-DD') : moment().add(1, 'day'),
            };
        const draft = {
            dates,
            ...(isEditOrAdd && { source: this.resolveSourceOption(booking_store.selects.sources, booking_store.selects.sources) }),
            ...(isEdit && {
                occupancy: {
                    adults: calendar_data.property.adult_child_constraints.adult_max_nbr,
                    children: calendar_data.property.adult_child_constraints.child_max_nbr,
                },
                defaultOccupancy: {
                    adults: this.room.occupancy.adult_nbr,
                    children: this.room.occupancy.children_nbr + this.room.occupancy.infant_nbr,
                },
            }),
        };
        if (isEditOrAdd) {
            updateBookedByGuest({
                firstName: this.booking.guest.first_name,
                lastName: this.booking.guest.last_name,
            });
        }
        setBookingDraft(draft);
    }
    async checkBookingAvailability(checkBe = false) {
        this.isFetchingAvailability = true;
        // resetBookingStore(false);
        const { source, occupancy, dates, dayUse } = booking_store.bookingDraft;
        const from_date = dates.checkIn.format('YYYY-MM-DD');
        const to_date = dates.checkOut.format('YYYY-MM-DD');
        const is_in_agent_mode = source?.type === 'TRAVEL_AGENCY';
        try {
            const room_type_ids_to_update = this.bookingEditorService.isEventType('EDIT_BOOKING') ? [this.room.roomtype?.id] : [];
            const room_type_ids = this.bookingEditorService.isEventType(['BAR_BOOKING', 'SPLIT_BOOKING']) ? this.roomTypeIds.map(r => Number(r)) : [];
            const params = {
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
            };
            await Promise.all([this.bookingService.getBookingAvailability(params), this.fetchDayUseBookedUnits(dayUse, from_date)]);
            if (this.mode !== 'EDIT_BOOKING') {
                await this.assignCountryCode();
            }
            if (this.bookingEditorService.isEventType('EDIT_BOOKING')) {
                this.bookingEditorService.updateBooking(this.room);
            }
            if (checkBe) {
                const beResults = await this.bookingService.getBookingAvailability({ ...params, is_backend: false, skip_store: true });
                this.compareResults(beResults);
            }
            this.isFetchingAvailability = false;
            this.hasCheckedAvailability = true;
        }
        catch (error) {
            console.error('Error initializing booking availability:', error);
        }
    }
    /**
     * Units already booked for day use on the target date don't reduce a room type's normal
     * `inventory`/availability, so they must be filtered out separately from the units list.
     */
    async fetchDayUseBookedUnits(dayUse, date) {
        if (!dayUse) {
            this.dayUseBookedUnitIds = new Set();
            return;
        }
        const bookings = await this.propertyService.getDayUseBookingsForCalendar({
            property_id: Number(calendar_data.property.id),
            from_date: date,
            to_date: date,
        });
        this.dayUseBookedUnitIds = new Set(bookings.map(b => b.unit_id));
    }
    compareResults(beResults) {
        const beRoomTypes = Array.isArray(beResults) ? beResults : (beResults?.roomtypes ?? []);
        const unavailableRatePlanIds = new Set();
        const beRoomTypeMap = new Map(beRoomTypes.map(roomType => [roomType.id, roomType]));
        for (const roomType of booking_store.roomTypes ?? []) {
            const beRoomType = beRoomTypeMap.get(roomType.id);
            const beRatePlanMap = new Map(beRoomType?.rateplans?.map(ratePlan => [ratePlan.id, ratePlan]) ?? []);
            for (const ratePlan of roomType.rateplans ?? []) {
                if (!ratePlan?.is_available_to_book)
                    continue;
                const beRatePlan = beRatePlanMap.get(ratePlan.id);
                if (!beRatePlan || !beRatePlan.is_available_to_book) {
                    unavailableRatePlanIds.add(ratePlan.id);
                }
            }
        }
        this.unavailableRatePlanIds = unavailableRatePlanIds;
    }
    async doReservation(source) {
        try {
            this.loadingChanged.emit({ cause: source });
            if (booking_store.bookingDraft.dayUse) {
                await this.doDayUseReservation();
                return;
            }
            fillMissingReservedGuestNames();
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
    async doDayUseReservation() {
        const { dayUseSelection } = booking_store;
        if (!dayUseSelection) {
            console.warn('[doDayUseReservation] No unit selected');
            return;
        }
        const { dates, dayUseHours, source } = booking_store.bookingDraft;
        const { bookedByGuest } = booking_store;
        BookedByGuestSchema.parse(bookedByGuest);
        DayUseHoursSchema.parse(dayUseHours);
        // Gross/net/tax were already resolved when the unit was selected (handleDayUseUnitSelected) —
        // reused as-is so the amount shown on step 2 matches exactly what gets saved.
        const { price: grossAmount, netAmount, taxAmount } = dayUseSelection;
        const date = dates.checkIn.format('YYYY-MM-DD');
        const payload = {
            language: this.language,
            booking: {
                property: { id: Number(this.propertyId) },
                currency: { id: calendar_data.property.currency.id },
                source: { code: source?.code },
                guest: {
                    first_name: bookedByGuest.firstName,
                    last_name: bookedByGuest.lastName,
                    email: bookedByGuest.email ?? '',
                    mobile: bookedByGuest.mobile ?? '',
                },
                from_date: date,
                to_date: date,
                status: { code: CONFIRMED_STATUS_CODE },
                remark: bookedByGuest.note,
            },
            extra_service: {
                pr_id: dayUseSelection.unit.id,
                category: { code: DAY_USE_CATEGORY_CODE },
                description: '',
                start_date: date,
                end_date: date,
                from_time: dayUseHours.from,
                to_time: dayUseHours.to,
                net_amount: netAmount,
                tax_amount: taxAmount,
                gross_amount: grossAmount,
                price: grossAmount,
                currency_id: calendar_data.property.currency.id,
            },
        };
        await this.bookingService.doDayUse(payload);
        showToast({ title: 'Day Use Booking Created', type: 'success' });
        this.resetBookingEvt.emit(null);
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
    resolveSourceOption(bookingSource, filteredSourceOptions) {
        if (this.bookingEditorService.isEventType('EDIT_BOOKING') && this.booking) {
            if (this.booking.agent) {
                return bookingSource.find(option => this.booking.agent?.id?.toString() === option.tag?.toString());
            }
            else {
                return bookingSource.find(option => this.booking.source?.code === option.code);
            }
        }
        return filteredSourceOptions.find(o => o.type !== 'LABEL');
    }
    setSourceOptions(bookingSource) {
        const _sourceOptions = this.bookingEditorService.isEventType('BAR_BOOKING') ? this.getFilteredSourceOptions(bookingSource) : bookingSource;
        setBookingSelectOptions({
            sources: _sourceOptions,
        });
        setBookingDraft({
            source: this.resolveSourceOption(bookingSource, _sourceOptions),
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
        return (h(Host, null, h("div", null, h("ir-interceptor", null), this.step === 'details' && (h("div", { class: "booking-editor__step", key: "step-details" }, h("ir-booking-editor-header", { isLoading: this.isFetchingAvailability, isBlockConversion: !!this.blockedUnit?.STATUS_CODE, booking: this.booking, checkIn: this.checkIn, checkOut: this.adjustedCheckout, mode: this.mode }), h("div", { class: 'booking-editor__roomtype-container' }, !this.isFetchingAvailability && booking_store.bookingDraft.dayUse ? (h("igl-day-use-unit-list", { roomTypes: booking_store.roomTypes, price: this.dayUsePrice, netPrice: this.dayUseNetPrice, currency: calendar_data.property.currency, bookedUnitIds: this.dayUseBookedUnitIds, unitId: this.unitId, resolvingUnitId: this.resolvingDayUseUnitId, hasSearched: this.hasCheckedAvailability, onUnitSelected: e => this.handleDayUseUnitSelected(e) })) : (!this.isFetchingAvailability &&
            booking_store.roomTypes?.map(roomType => (h("igl-room-type", { unavailableRatePlanIds: this.unavailableRatePlanIds, key: `room-type-${roomType.id}`, id: roomType.id.toString(), roomType: roomType, bookingType: this.mode, ratePricingMode: booking_store.selects?.ratePricingMode, roomTypeId: this.room?.roomtype?.id, currency: calendar_data.property.currency }))))))), this.step === 'confirm' && (h("ir-booking-editor-form", { class: "booking-editor__step", key: "step-confirm", booking: this.booking, onDoReservation: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.doReservation(e.detail);
            }, room: this.room, mode: this.mode })))));
    }
    static get is() { return "ir-booking-editor"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-booking-editor.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-booking-editor.css"]
        };
    }
    static get properties() {
        return {
            "propertyId": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "string | number",
                    "resolved": "number | string",
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
                "attribute": "property-id"
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "identifier": {
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
                "attribute": "identifier"
            },
            "booking": {
                "type": "unknown",
                "mutable": true,
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
                    "text": ""
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
                            "path": "./types",
                            "id": "src/components/igloo-calendar/ir-booking-editor/types.ts::BookingEditorMode",
                            "referenceLocation": "BookingEditorMode"
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
                "reflect": false,
                "attribute": "mode",
                "defaultValue": "'PLUS_BOOKING'"
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "check-in"
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "check-out"
            },
            "step": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "BookingStep",
                    "resolved": "\"confirm\" | \"details\"",
                    "references": {
                        "BookingStep": {
                            "location": "import",
                            "path": "./types",
                            "id": "src/components/igloo-calendar/ir-booking-editor/types.ts::BookingStep",
                            "referenceLocation": "BookingStep"
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
                "reflect": false,
                "attribute": "step"
            },
            "blockedUnit": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "BlockedDatePayload",
                    "resolved": "{ RELEASE_AFTER_HOURS: string; ENTRY_DATE: string; ENTRY_HOUR: number; ENTRY_MINUTE: number; OPTIONAL_REASON: string; STATUS_CODE: string; OUT_OF_SERVICE: boolean; }",
                    "references": {
                        "BlockedDatePayload": {
                            "location": "import",
                            "path": "./types",
                            "id": "src/components/igloo-calendar/ir-booking-editor/types.ts::BlockedDatePayload",
                            "referenceLocation": "BlockedDatePayload"
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "unit-id"
            }
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "isFetchingAvailability": {},
            "hasCheckedAvailability": {},
            "unavailableRatePlanIds": {},
            "dayUseBookedUnitIds": {},
            "resolvingDayUseUnitId": {},
            "dayUseNetPrice": {}
        };
    }
    static get events() {
        return [{
                "method": "resetBookingEvt",
                "name": "resetBookingEvt",
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
            }, {
                "method": "loadingChanged",
                "name": "loadingChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ cause: string | null }",
                    "resolved": "{ cause: string; }",
                    "references": {}
                }
            }, {
                "method": "adjustBlockedUnit",
                "name": "adjustBlockedUnit",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "bookingStepChange",
                "name": "bookingStepChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ direction: 'next' | 'prev' }",
                    "resolved": "{ direction: \"next\" | \"prev\"; }",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "mode",
                "methodName": "handleModeChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "guestSelected",
                "method": "handleGuestSelected",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "checkAvailability",
                "method": "handleCheckAvailability",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
