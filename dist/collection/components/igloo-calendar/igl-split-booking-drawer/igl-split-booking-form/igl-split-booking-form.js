import { SelectedUnitSchema } from "../../../../models/room-selection";
import { BookingService } from "../../../../services/booking-service/booking.service";
import { resetBookingStore } from "../../../../stores/booking.store";
import calendar_data from "../../../../stores/calendar-data";
import { checkMealPlan } from "../../../../utils/utils";
import { Fragment, h } from "@stencil/core";
import moment from "moment";
import { ZodError } from "zod";
import { LocaleController } from "../../../../services/locale/locale.controller";
import { t } from "../../../../services/locale/t";
export class IglSplitBookingForm {
    booking;
    identifier;
    formId;
    selectedDates;
    room;
    roomTypes = [];
    hasSearched = false;
    isSearching = false;
    selectedUnit = {};
    isLoading;
    errors;
    mealPlanOptions = null;
    closeModal;
    defaultDates;
    bookingService = new BookingService();
    componentWillLoad() {
        this.room = this.getRoom();
        this.defaultDates = { ...this.generateDates(this.room) };
        this.selectedDates = { ...this.defaultDates };
    }
    getRoom() {
        if (!this.booking) {
            throw new Error('Missing booking');
        }
        if (!this.identifier) {
            throw new Error('Missing Identifier');
        }
        const room = this.booking.rooms.find(r => r.identifier === this.identifier);
        if (!room) {
            throw new Error(`Couldn't find room with identifier ${this.identifier}`);
        }
        return room;
    }
    generateDates(room) {
        let MFromDate = moment(room.from_date, 'YYYY-MM-DD');
        const MToDate = moment(room.to_date, 'YYYY-MM-DD').add(-1, 'days');
        const today = moment();
        if (MFromDate.isBefore(today)) {
            MFromDate = today.clone();
        }
        if (MFromDate.isSame(today)) {
            return { from_date: MFromDate, to_date: MToDate };
        }
        if (MFromDate.isSameOrAfter(today)) {
            return { from_date: MFromDate.clone().add(1, 'days'), to_date: MToDate };
        }
        return { from_date: today.clone().add(1, 'days'), to_date: MToDate };
    }
    async checkBookingAvailability() {
        this.isSearching = true;
        resetBookingStore(false);
        const from_date = this.selectedDates.from_date.format('YYYY-MM-DD');
        const to_date = this.selectedDates.to_date.format('YYYY-MM-DD');
        const is_in_agent_mode = this.booking.agent !== null;
        try {
            const data = await this.bookingService.getBookingAvailability({
                from_date,
                to_date,
                propertyid: this.booking.property.id,
                adultChildCount: {
                    adult: 1,
                    child: 0,
                },
                language: LocaleController.language,
                room_type_ids: [],
                currency: this.booking.currency,
                agent_id: is_in_agent_mode ? this.booking.agent.id : null,
                is_in_agent_mode,
                room_type_ids_to_update: [],
            });
            this.roomTypes = data;
        }
        catch (error) {
            console.error('Error initializing booking availability:', error);
        }
        finally {
            this.hasSearched = true;
            this.isSearching = false;
        }
    }
    async doReservation() {
        try {
            this.isLoading = true;
            this.errors = null;
            const selectedUnit = SelectedUnitSchema.parse(this.selectedUnit);
            const canCheckIn = this.room.in_out?.code === '001' ? (moment().isBefore(this.selectedDates.from_date) ? false : true) : false;
            let rooms = [...this.booking.rooms];
            let currIndex = rooms.findIndex(room => room.identifier === this.room.identifier);
            if (currIndex === -1) {
                throw new Error(`Didn't find room identifier ${this.room.identifier}`);
            }
            rooms[currIndex] = {
                ...this.room,
                from_date: this.room.from_date,
                to_date: this.selectedDates.from_date.format('YYYY-MM-DD'),
                days: this.room.days.filter(r => moment(r.date, 'YYYY-MM-DD').isBefore(this.selectedDates.from_date, 'dates')),
                departure_time: null,
            };
            rooms.push({
                ...this.room,
                identifier: null,
                in_out: canCheckIn
                    ? this.room.in_out
                    : {
                        code: '000',
                    },
                check_in: canCheckIn,
                assigned_units_pool: null,
                parent_room_identifier: this.room.identifier,
                is_split: true,
                roomtype: {
                    id: selectedUnit.roomtype_id,
                },
                rateplan: {
                    id: selectedUnit.rateplan_id || this.room.rateplan.id,
                },
                departure_time: this.room.departure_time,
                unit: { id: selectedUnit.unit_id },
                from_date: this.selectedDates.from_date.format('YYYY-MM-DD'),
                days: this.room.days.filter(r => moment(r.date, 'YYYY-MM-DD').isSameOrAfter(this.selectedDates.from_date, 'dates')),
            });
            const booking = {
                assign_units: true,
                is_pms: true,
                is_direct: this.booking.is_direct,
                is_backend: true,
                is_in_loyalty_mode: this.booking.is_in_loyalty_mode,
                promo_key: this.booking.promo_key,
                extras: this.booking.extras,
                agent: this.booking.agent,
                target_room_identifier: this.room.identifier,
                booking: {
                    from_date: this.booking.from_date,
                    to_date: this.booking.to_date,
                    remark: this.booking.remark,
                    booking_nbr: this.booking.booking_nbr,
                    property: this.booking.property,
                    booked_on: this.booking.booked_on,
                    source: this.booking.source,
                    rooms,
                    currency: this.booking.currency,
                    arrival: this.booking.arrival,
                    guest: this.booking.guest,
                },
                pickup_info: this.booking.pickup_info,
            };
            await this.bookingService.doReservation(booking);
            this.closeModal.emit(null);
        }
        catch (error) {
            const err = {};
            if (error instanceof ZodError) {
                console.error(error);
                error.issues.forEach(i => {
                    err[i.path[0]] = true;
                });
                this.errors = { ...err };
            }
        }
        finally {
            this.isLoading = false;
        }
    }
    updateSelectedUnit(params) {
        const merged = { ...this.selectedUnit, ...params };
        const roomTypesSource = calendar_data?.property?.roomtypes;
        const mealPlanResult = checkMealPlan({
            rateplan_id: this.room.rateplan.id.toString(),
            roomTypeId: merged?.roomtype_id,
            roomTypes: roomTypesSource,
        });
        const hasExplicitRateplanUpdate = Object.prototype.hasOwnProperty.call(params, 'rateplan_id');
        if (Array.isArray(mealPlanResult)) {
            this.mealPlanOptions = mealPlanResult;
            if (!hasExplicitRateplanUpdate) {
                delete merged.rateplan_id;
            }
        }
        else {
            this.mealPlanOptions = null;
            if (!hasExplicitRateplanUpdate) {
                if (mealPlanResult) {
                    merged.rateplan_id = Number(mealPlanResult.value);
                }
                else {
                    delete merged.rateplan_id;
                }
            }
        }
        this.selectedUnit = merged;
    }
    /** Bookable room types, each reduced to its de-duplicated set of fully-available physical units. */
    get eligibleRoomTypes() {
        return (this.roomTypes ?? [])
            .filter(roomType => roomType.is_available_to_book)
            .map(roomType => {
            const unitMap = new Map();
            for (const rateplan of roomType.rateplans ?? []) {
                for (const unit of rateplan.assignable_units ?? []) {
                    if (unit.Is_Fully_Available) {
                        unitMap.set(unit.pr_id, unit.name);
                    }
                }
            }
            return { roomType, units: Array.from(unitMap, ([id, name]) => ({ id, name })) };
        })
            .filter(entry => entry.units.length > 0);
    }
    render() {
        const eligibleRoomTypes = this.eligibleRoomTypes;
        return (h("form", { key: '935fb9fe157de87ecfbc98eb8cfebfb4b54e8646', id: this.formId, onSubmit: e => {
                e.preventDefault();
                this.doReservation();
            } }, h("div", { key: 'ad994f82aca2b8382f5bd90cb2594a0912667384', class: "split-header" }, h("div", { key: 'f6d55aa15494b12517d324258c8a048641044aae', class: "split-header__summary" }, h("span", { key: 'd3fabf49a46b2bc511ca64bf39183bef7221558f', class: "split-header__room" }, this.room.unit?.['name'] ?? this.room.roomtype?.name), h("span", { key: '04a16322e8cafc370e7a0f4796ad82c9e2fa1783', class: "split-header__rateplan" }, this.room.rateplan.short_name, this.room.rateplan.is_non_refundable && (h("wa-tag", { key: 'dde54771eba761e29ba8b3bbdc1826124054f69d', size: "s", variant: "warning" }, t('Lcz_NonRefundable', { fallback: 'Non-refundable' }))))), h("div", { key: 'c6ff6fe370a348e0a4b0aac5be53639474e047ab', class: "split-search-row" }, h("ir-date-select", { key: 'e5d645f41f10e359724311bfc17f08caea9509f8',
            // customPicker
            class: "split-search__date", "data-testid": "pickup_arrival_date", date: this.selectedDates?.from_date?.format('YYYY-MM-DD'), maxDate: this.defaultDates?.to_date.format('YYYY-MM-DD'), minDate: this.defaultDates?.from_date.format('YYYY-MM-DD'), emitEmptyDate: true, onDateChanged: evt => {
                this.selectedDates = { ...this.selectedDates, from_date: evt.detail.start };
            } }, h("wa-icon", { key: '2debb4e08b2d5f05ae71cf2d27b1c854d454b479', slot: "start", name: "calendar" })), h("ir-custom-button", { key: '15ac11204fc115338fa76150c452346922784960', class: "split-search__submit", appearance: "accent", variant: "brand", size: "s", loading: this.isSearching, onClickHandler: () => this.checkBookingAvailability() }, t('Lcz_CheckAvailability', { fallback: 'Check availability' })))), this.errors?.roomtype_id && (h("p", { key: '2cf89cd3d31e758eba64d5eeb02164739fb353f8', class: "error-message" }, h("wa-icon", { key: 'bde867de5f24d28841ed385af5adf6bab630cd8a', name: "circle-exclamation" }), t('Lcz_PleaseSelectARoom', { fallback: 'Please select a room' }))), this.isSearching ? (h("div", { class: "split-loading" })) : !this.hasSearched ? (h("div", { class: "split-empty" }, h("ir-empty-state", { message: t('Lcz_PickDateAndSearchForAvailableUnits', { fallback: 'Pick a date and search to see available units' }) }), h("ir-custom-button", { class: "split-empty__action", loading: this.isSearching, onClickHandler: () => this.checkBookingAvailability(), variant: "brand", size: "s" }, t('Lcz_CheckAvailability', { fallback: 'Check availability' })))) : eligibleRoomTypes.length === 0 ? (h("div", { class: "split-empty" }, h("ir-empty-state", { message: t('Lcz_NoAvailableUnitsForTheseDates', { fallback: 'No available units for these dates' }) }))) : (h("wa-radio-group", { class: "room-type-list", name: "unit", onchange: e => {
                const [roomtype_id, unit_id] = e.target.value.split('_');
                this.updateSelectedUnit({
                    roomtype_id: Number(roomtype_id),
                    unit_id: Number(unit_id),
                });
            } }, eligibleRoomTypes.map(({ roomType, units }) => (h(Fragment, null, h("div", { key: `roomTypeRow-${roomType.id}`, class: "room-type-row" }, h("span", { class: "room-type-name" }, roomType.name)), units.map((unit, j) => {
            const isSelected = this.selectedUnit?.unit_id === unit.id;
            const showMealPlanSelect = isSelected && Array.isArray(this.mealPlanOptions) && this.mealPlanOptions.length > 0;
            return (h("wa-radio", { value: `${roomType.id}_${unit.id}`, checked: isSelected, key: `physicalRoom-${unit.id}-${j}`, class: `physical-room${isSelected ? ' physical-room--selected' : ''}` }, h("span", null, unit.name), showMealPlanSelect && (h("ir-validator", { value: this.selectedUnit?.rateplan_id, schema: SelectedUnitSchema.shape.rateplan_id }, h("wa-select", { size: "s", placeholder: t('Lcz_SelectANewRateplan', { fallback: 'Select a new rateplan...' }), value: this.selectedUnit?.rateplan_id?.toString(), onchange: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.updateSelectedUnit({
                        rateplan_id: Number(e.target.value),
                    });
                } }, this.mealPlanOptions.map(option => (h("wa-option", { value: option.value?.toString() }, option.text + `${option.custom_text ? ' | ' : ''}${option.custom_text}`))))))));
        }))))))));
    }
    static get is() { return "igl-split-booking-form"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["igl-split-booking-form.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["igl-split-booking-form.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "identifier": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "Room['identifier']",
                    "resolved": "string",
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "identifier"
            },
            "formId": {
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
                "attribute": "form-id"
            }
        };
    }
    static get states() {
        return {
            "selectedDates": {},
            "room": {},
            "roomTypes": {},
            "hasSearched": {},
            "isSearching": {},
            "selectedUnit": {},
            "isLoading": {},
            "errors": {},
            "mealPlanOptions": {}
        };
    }
    static get events() {
        return [{
                "method": "closeModal",
                "name": "closeModal",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }];
    }
}
