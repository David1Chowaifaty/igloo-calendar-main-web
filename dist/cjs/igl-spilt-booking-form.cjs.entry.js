'use strict';

var index = require('./index-DYQrLNin.js');
var booking_service = require('./booking.service-Bi0zXviu.js');
var calendarData = require('./calendar-data-R3j-WBLW.js');
var irInterceptor_store = require('./ir-interceptor.store-DCFOyFp0.js');
var locales_store = require('./locales.store-6IlEbCjL.js');
var utils = require('./utils-DgT4kKsD.js');
var moment = require('./moment-CdViwxPQ.js');
var index$1 = require('./index-CLqkDPTC.js');
var types = require('./types-DO5wSQfH.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./booking-D81t5lFq.js');
require('./index-C59pxKl1.js');
require('./type-Dy9pVS4V.js');

const iglSpiltBookingFormCss = () => `.sc-igl-spilt-booking-form-h{display:flex;flex-direction:column;flex:1 1 0%;height:100%}.split-header.sc-igl-spilt-booking-form{display:flex;flex-direction:column;gap:0.5rem;padding:0.625rem 0.75rem;border:1px solid var(--wa-color-surface-border);border-radius:var(--wa-border-radius-m, 0.375rem);background-color:var(--wa-color-surface-raised, var(--wa-color-surface-default))}.split-header__summary.sc-igl-spilt-booking-form{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.25rem 0.5rem}.split-header__tags.sc-igl-spilt-booking-form{display:flex;align-items:center;flex-wrap:wrap;gap:0.25rem}.split-header__controls.sc-igl-spilt-booking-form{display:flex;align-items:center;flex-wrap:wrap;gap:0.5rem;padding-top:0.5rem;border-top:1px solid var(--wa-color-surface-border)}.split-header__label.sc-igl-spilt-booking-form{font-size:var(--wa-font-size-xs, 0.75rem);font-weight:600;color:var(--wa-color-text-quiet);white-space:nowrap}.split-header__check.sc-igl-spilt-booking-form{margin-inline-start:auto}.date-trigger.sc-igl-spilt-booking-form{width:150px}.error-message.sc-igl-spilt-booking-form{margin:0;margin-top:0.5rem;text-align:left;color:var(--wa-color-danger-fill-loud, #c0392b)}.room-type-list.sc-igl-spilt-booking-form{display:flex;flex-direction:column;gap:0.75rem;margin:0;margin-top:0.5rem;padding:0}.room-type-row.sc-igl-spilt-booking-form{margin-bottom:0.5rem}.choice-row.sc-igl-spilt-booking-form{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.room-type-name.sc-igl-spilt-booking-form{font-weight:600;color:var(--wa-color-text-normal)}.physical-room.sc-igl-spilt-booking-form{display:flex;align-items:center;padding-inline-start:1rem}.physical-room.sc-igl-spilt-booking-form::part(label),.physical-room.sc-igl-spilt-booking-form [part~="label"]{display:flex;align-items:center}.physical-room.sc-igl-spilt-booking-form+.physical-room.sc-igl-spilt-booking-form{margin-top:0.5rem}.physical-room--last.sc-igl-spilt-booking-form{margin-bottom:0.25rem}.physical-room.sc-igl-spilt-booking-form wa-select.sc-igl-spilt-booking-form{margin-left:1rem;min-width:220px}.sheet-footer__btn.sc-igl-spilt-booking-form{flex:1 1 0}`;

const IglSpiltBookingForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeModal = index.createEvent(this, "closeModal");
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
    bookingService = new booking_service.BookingService();
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
        booking_service.resetBookingStore(false);
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
            if (error instanceof index$1.libExports.ZodError) {
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
        return (index.h("form", { key: '04ae910e8f3e32068e928f92103bd5b51b9208c3', id: "split-booking-form", onSubmit: e => {
                e.preventDefault();
                this.doReservation();
            }, class: "sheet-container" }, index.h("div", { key: 'ad9c75f482e19fa5bbac3ae0a5343570d52f022f', class: "split-header" }, index.h("div", { key: '6d9d4781ddc1b5a091ad0ecfc98103e8bf43562e', class: "split-header__summary" }, index.h("ir-date-view", { key: '889db03f0bdce3c8d99ffacbb9089adb640aeb11', from_date: this.room.from_date, to_date: this.room.to_date, showDateDifference: false }), index.h("div", { key: '20767bcf221ca0ecff11a1879887f23036239d1d', class: "split-header__tags" }, index.h("wa-tag", { key: '6edfd5439282908641f4cc86f4ed09f9b3f67b3c', size: "s", variant: "neutral" }, this.room.rateplan.short_name), this.room.rateplan.is_non_refundable && (index.h("wa-tag", { key: 'd10651d06dc9bd8acf01a564dc2bd7ffee0262d0', size: "s", variant: "warning" }, locales_store.locales.entries.Lcz_NonRefundable)))), index.h("div", { key: 'c21aacc3ebdb31a361b5b9f244118cb9ce8cb036', class: "split-header__controls" }, index.h("label", { key: 'd9615cdcf7bd7d848f92fd3129c2d1e7620d7e89', class: "split-header__label", htmlFor: "split-from-date" }, "Split from"), index.h("ir-date-picker", { key: '329f909388af4bde9dbf8b583aa1accfa4a87cfa', class: "split-header__date", "data-testid": "pickup_arrival_date", date: this.selectedDates?.from_date?.format('YYYY-MM-DD'), maxDate: this.defaultDates?.to_date.format('YYYY-MM-DD'), minDate: this.defaultDates?.from_date.format('YYYY-MM-DD'), emitEmptyDate: true, onDateChanged: evt => {
                this.selectedDates = {
                    ...this.selectedDates,
                    from_date: evt.detail.start,
                };
            } }, index.h("wa-input", { key: '994470afc8dec486300580a5bd9afe161e6ee551', id: "split-from-date", slot: "trigger", size: "s", readonly: true, class: "date-trigger", value: this.selectedDates.from_date ? this.selectedDates.from_date.format('MMM DD, YYYY') : null }, index.h("wa-icon", { key: '3b902abc285732bdf0641c0848dadb460137a5c5', slot: "start", name: "calendar" }))), index.h("wa-button", { key: '66af6bfd667da2ad7c7a9a1f9d98d5d0262c64be', class: "split-header__check", size: "s", variant: "brand", loading: irInterceptor_store.isRequestPending('/Check_Availability'), onClick: () => this.checkBookingAvailability() }, index.h("wa-icon", { key: '32bfce0d21ed4dcb594ff04637b19a3daa7e6a49', slot: "start", name: "magnifying-glass" }), "Check"))), this.errors?.roomtype_id && index.h("p", { key: '56e5e91089555489b487b9f853913f7947a6b664', class: "error-message" }, "Please select a room"), index.h("wa-radio-group", { key: 'ae7260ce88c5e4bdbb2c081a76ffe51373fa5ccc', class: "room-type-list", name: "unit", onchange: e => {
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
                return (index.h("wa-radio", { value: `${roomType.id}_${room.id}`, checked: this.selectedUnit?.unit_id === room.id, key: `physicalRoom-${room.id}-${j}`, class: `physical-room${isLastUnit ? ' physical-room--last' : ''}` }, index.h("span", null, room.name), showMealPlanSelect && (index.h("ir-validator", { value: this.selectedUnit?.rateplan_id, schema: types.SelectedUnitSchema.shape.rateplan_id }, index.h("wa-select", { size: "s", placeholder: "Select a new rateplan...", value: this.selectedUnit?.rateplan_id?.toString(), onchange: e => {
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
IglSpiltBookingForm.style = iglSpiltBookingFormCss();

exports.igl_spilt_booking_form = IglSpiltBookingForm;
