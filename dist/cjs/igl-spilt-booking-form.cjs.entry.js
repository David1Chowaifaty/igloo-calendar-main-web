'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const booking_store = require('./booking.store-da99b883.js');
const calendarData = require('./calendar-data-70bc3b4b.js');
const irInterceptor_store = require('./ir-interceptor.store-d60f5a34.js');
const locales_store = require('./locales.store-32782582.js');
const utils = require('./utils-32be062a.js');
const moment = require('./moment-1780b03a.js');
const index$1 = require('./index-8bb117a0.js');
const types = require('./types-9c27f490.js');
require('./axios-6e678d52.js');
require('./booking-a54b7725.js');
require('./index-fbf1fe1d.js');
require('./type-53035218.js');

const iglSpiltBookingFormCss = ".sc-igl-spilt-booking-form-h{display:flex;flex-direction:column;flex:1 1 0%;height:100%}.split-header.sc-igl-spilt-booking-form{display:flex;flex-direction:column;gap:0.5rem;padding:0.625rem 0.75rem;border:1px solid var(--wa-color-surface-border);border-radius:var(--wa-border-radius-m, 0.375rem);background-color:var(--wa-color-surface-raised, var(--wa-color-surface-default))}.split-header__summary.sc-igl-spilt-booking-form{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.25rem 0.5rem}.split-header__tags.sc-igl-spilt-booking-form{display:flex;align-items:center;flex-wrap:wrap;gap:0.25rem}.split-header__controls.sc-igl-spilt-booking-form{display:flex;align-items:center;flex-wrap:wrap;gap:0.5rem;padding-top:0.5rem;border-top:1px solid var(--wa-color-surface-border)}.split-header__label.sc-igl-spilt-booking-form{font-size:var(--wa-font-size-xs, 0.75rem);font-weight:600;color:var(--wa-color-text-quiet);white-space:nowrap}.split-header__check.sc-igl-spilt-booking-form{margin-inline-start:auto}.date-trigger.sc-igl-spilt-booking-form{width:150px}.error-message.sc-igl-spilt-booking-form{margin:0;margin-top:0.5rem;text-align:left;color:var(--wa-color-danger-fill-loud, #c0392b)}.room-type-list.sc-igl-spilt-booking-form{display:flex;flex-direction:column;gap:0.75rem;margin:0;margin-top:0.5rem;padding:0}.room-type-row.sc-igl-spilt-booking-form{margin-bottom:0.5rem}.choice-row.sc-igl-spilt-booking-form{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.room-type-name.sc-igl-spilt-booking-form{font-weight:600;color:var(--wa-color-text-normal)}.physical-room.sc-igl-spilt-booking-form{display:flex;align-items:center;padding-inline-start:1rem}.physical-room.sc-igl-spilt-booking-form::part(label){display:flex;align-items:center}.physical-room.sc-igl-spilt-booking-form+.physical-room.sc-igl-spilt-booking-form{margin-top:0.5rem}.physical-room--last.sc-igl-spilt-booking-form{margin-bottom:0.25rem}.physical-room.sc-igl-spilt-booking-form wa-select.sc-igl-spilt-booking-form{margin-left:1rem;min-width:220px}.sheet-footer__btn.sc-igl-spilt-booking-form{flex:1 1 0}";
const IglSpiltBookingFormStyle0 = iglSpiltBookingFormCss;

const IglSpiltBookingForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeModal = index.createEvent(this, "closeModal", 7);
    }
    booking;
    identifier;
    selectedDates;
    room;
    roomTypes = [];
    selectedUnit = {};
    isLoading;
    errors;
    mealPlanOptions = null;
    closeModal;
    defaultDates;
    bookingService = new booking_store.BookingService();
    componentWillLoad() {
        this.room = this.getRoom();
        this.defaultDates = { ...this.generateDates(this.room) };
        this.selectedDates = { ...this.defaultDates };
        console.log(this.booking);
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
        let MFromDate = moment.hooks(room.from_date, 'YYYY-MM-DD');
        const MToDate = moment.hooks(room.to_date, 'YYYY-MM-DD').add(-1, 'days');
        const today = moment.hooks();
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
        booking_store.resetBookingStore(false);
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
                language: 'en',
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
    }
    async doReservation() {
        try {
            this.isLoading = true;
            this.errors = null;
            const selectedUnit = types.SelectedUnitSchema.parse(this.selectedUnit);
            // const oldRooms = this.booking.rooms.filter(r => r.identifier !== this.identifier);
            const canCheckIn = this.room.in_out?.code === '001' ? (moment.hooks().isBefore(this.selectedDates.from_date) ? false : true) : false;
            let rooms = [...this.booking.rooms];
            let currIndex = rooms.findIndex(room => room.identifier === this.room.identifier);
            if (currIndex === -1) {
                throw new Error(`Didn't find room identifier ${this.room.identifier}`);
            }
            rooms[currIndex] = {
                ...this.room,
                from_date: this.room.from_date,
                to_date: this.selectedDates.from_date.format('YYYY-MM-DD'),
                days: this.room.days.filter(r => moment.hooks(r.date, 'YYYY-MM-DD').isBefore(this.selectedDates.from_date, 'dates')),
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
                // to_date: this.selectedDates.to_date.format('YYYY-MM-DD'),
                days: this.room.days.filter(r => moment.hooks(r.date, 'YYYY-MM-DD').isSameOrAfter(this.selectedDates.from_date, 'dates')),
            });
            // let rooms = [
            //   ...oldRooms,
            //   {
            //     ...this.room,
            //     from_date: this.room.from_date,
            //     to_date: this.selectedDates.from_date.format('YYYY-MM-DD'),
            //     days: this.room.days.filter(r => moment(r.date, 'YYYY-MM-DD').isBefore(this.selectedDates.from_date, 'dates')),
            //     departure_time: null,
            //   },
            //   {
            //     ...this.room,
            //     identifier: null,
            //     in_out: canCheckIn
            //       ? this.room.in_out
            //       : {
            //           code: '000',
            //         },
            //     check_in: canCheckIn,
            //     assigned_units_pool: null,
            //     parent_room_identifier: this.room.identifier,
            //     is_split: true,
            //     roomtype: {
            //       id: selectedUnit.roomtype_id,
            //     },
            //     rateplan: {
            //       id: selectedUnit.rateplan_id || this.room.rateplan.id,
            //     },
            //     departure_time: this.room.departure_time,
            //     unit: { id: selectedUnit.unit_id },
            //     from_date: this.selectedDates.from_date.format('YYYY-MM-DD'),
            //     // to_date: this.selectedDates.to_date.format('YYYY-MM-DD'),
            //     days: this.room.days.filter(r => moment(r.date, 'YYYY-MM-DD').isSameOrAfter(this.selectedDates.from_date, 'dates')),
            //   },
            // ];
            const booking = {
                assign_units: true,
                is_pms: true,
                is_direct: this.booking.is_direct,
                is_backend: true,
                is_in_loyalty_mode: this.booking.is_in_loyalty_mode,
                promo_key: this.booking.promo_key,
                extras: this.booking.extras,
                agent: this.booking.agent,
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
            console.log(booking);
            await this.bookingService.doReservation(booking);
            this.closeModal.emit(null);
        }
        catch (error) {
            const err = {};
            if (error instanceof index$1.ZodError) {
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
        const roomTypesSource = calendarData.calendar_data?.property?.roomtypes;
        const mealPlanResult = utils.checkMealPlan({
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
    render() {
        return (index.h("form", { key: '18be722c0b6eca1613c8211de680f20814451b1c', id: "split-booking-form", onSubmit: e => {
                e.preventDefault();
                this.doReservation();
            }, class: "sheet-container" }, index.h("div", { key: '5eaee3723b895ec3404fe73462d46f81f7f8e50d', class: "split-header" }, index.h("div", { key: '8569c2336e45d57b65957f6415ec922fc71353a0', class: "split-header__summary" }, index.h("ir-date-view", { key: '7c05bcbd6caf4cd6b95a653fd9c3e4a5d3c45583', from_date: this.room.from_date, to_date: this.room.to_date, showDateDifference: false }), index.h("div", { key: '7cb6b3135698555970426a60c4cc3f414deff866', class: "split-header__tags" }, index.h("wa-tag", { key: 'fb09c9ca7401c8ded0b780874dc1a8238bc69c1a', size: "small", variant: "neutral" }, this.room.rateplan.short_name), this.room.rateplan.is_non_refundable && (index.h("wa-tag", { key: 'a6c70b34951500014090d33a0d1bb36f30972af5', size: "small", variant: "warning" }, locales_store.locales.entries.Lcz_NonRefundable)))), index.h("div", { key: '71922bea5fbe2c66097ebed121f4f85ec6f8a834', class: "split-header__controls" }, index.h("label", { key: '5d0e63bb0efe0baa754fa02b8e590890a90bd21d', class: "split-header__label", htmlFor: "split-from-date" }, "Split from"), index.h("ir-date-picker", { key: '75d6fbc77e2bd418a6ba0626a1edca05c1f5ac8d', class: "split-header__date", "data-testid": "pickup_arrival_date", date: this.selectedDates?.from_date?.format('YYYY-MM-DD'), maxDate: this.defaultDates?.to_date.format('YYYY-MM-DD'), minDate: this.defaultDates?.from_date.format('YYYY-MM-DD'), emitEmptyDate: true, onDateChanged: evt => {
                this.selectedDates = {
                    ...this.selectedDates,
                    from_date: evt.detail.start,
                };
            } }, index.h("wa-input", { key: '13f2d24f0fbdb8ae27503f8a9be17e9f7b7607be', id: "split-from-date", slot: "trigger", size: "small", readonly: true, class: "date-trigger", value: this.selectedDates.from_date ? this.selectedDates.from_date.format('MMM DD, YYYY') : null }, index.h("wa-icon", { key: '454d8754bc1c527ea440e26ad4102c9d28b8c3ee', slot: "start", name: "calendar" }))), index.h("wa-button", { key: '619a5ed80bde2ef712018e88dde1ce0ad7925a37', class: "split-header__check", size: "small", variant: "brand", loading: irInterceptor_store.isRequestPending('/Check_Availability'), onClick: () => this.checkBookingAvailability() }, index.h("wa-icon", { key: '95fda392a0d019da96cec76f4f885629128e37f3', slot: "start", name: "magnifying-glass" }), "Check"))), this.errors?.roomtype_id && index.h("p", { key: '28fe3805525f38bec1476b026521efd749a86772', class: "error-message" }, "Please select a room"), index.h("wa-radio-group", { key: 'da57b3a5b3b96ee8f5dde6a5c92ae05621f81e4a', class: "room-type-list", name: "unit", onchange: e => {
                const [roomtype_id, unit_id] = e.target.value.split('_');
                this.updateSelectedUnit({
                    roomtype_id: Number(roomtype_id),
                    unit_id: Number(unit_id),
                });
            } }, this.roomTypes?.map(roomType => {
            if (!roomType.is_available_to_book) {
                return null;
            }
            const units = (() => {
                const unitMap = new Map();
                for (const rateplan of roomType.rateplans ?? []) {
                    for (const unit of rateplan.assignable_units ?? []) {
                        if (unit.Is_Fully_Available) {
                            unitMap.set(unit.pr_id, unit.name);
                        }
                    }
                }
                return Array.from(unitMap, ([id, name]) => ({ id, name }));
            })();
            return (index.h(index.Fragment, null, index.h("div", { key: `roomTypeRow-${roomType.id}`, class: "room-type-row" }, index.h("div", { class: "choice-row" }, index.h("span", { class: "room-type-name" }, roomType.name))), units.map((room, j) => {
                const isLastUnit = j === units.length - 1;
                const showMealPlanSelect = this.selectedUnit?.unit_id === room.id && Array.isArray(this.mealPlanOptions) && this.mealPlanOptions.length > 0;
                return (index.h("wa-radio", { value: `${roomType.id}_${room.id}`, checked: this.selectedUnit?.unit_id === room.id, key: `physicalRoom-${room.id}-${j}`, class: `physical-room${isLastUnit ? ' physical-room--last' : ''}` }, index.h("span", null, room.name), showMealPlanSelect && (index.h("ir-validator", { value: this.selectedUnit?.rateplan_id, schema: types.SelectedUnitSchema.shape.rateplan_id }, index.h("wa-select", { size: "small", placeholder: "Select a new rateplan...", value: this.selectedUnit?.rateplan_id?.toString(), onchange: e => {
                        e.stopImmediatePropagation();
                        e.stopPropagation();
                        this.updateSelectedUnit({
                            rateplan_id: Number(e.target.value),
                        });
                    } }, this.mealPlanOptions.map(option => (index.h("wa-option", { value: option.value?.toString() }, option.text + `${option.custom_text ? ' | ' : ''}${option.custom_text}`))))))));
            })));
        }))));
    }
};
IglSpiltBookingForm.style = IglSpiltBookingFormStyle0;

exports.igl_spilt_booking_form = IglSpiltBookingForm;

//# sourceMappingURL=igl-spilt-booking-form.cjs.entry.js.map