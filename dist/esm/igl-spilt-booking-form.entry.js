import { r as registerInstance, c as createEvent, h, F as Fragment } from './index-Nexq2OjX.js';
import { B as BookingService, r as resetBookingStore } from './booking.store-CvDLuSL3.js';
import { c as calendar_data } from './calendar-data-CPCc-_Kx.js';
import { i as isRequestPending } from './ir-interceptor.store-CKdHxngO.js';
import { l as locales } from './locales.store-flvFxs7J.js';
import { f as checkMealPlan } from './utils-CRe_zSvY.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import { l as libExports } from './index-DeW5X45W.js';
import { S as SelectedUnitSchema } from './types-DFEXQcwc.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './booking-D8tDiK7e.js';
import './index-BX-r5OtJ.js';
import './type-D7rOPtKA.js';

const iglSpiltBookingFormCss = () => `.sc-igl-spilt-booking-form-h{display:flex;flex-direction:column;flex:1 1 0%;height:100%}.split-header.sc-igl-spilt-booking-form{display:flex;flex-direction:column;gap:0.5rem;padding:0.625rem 0.75rem;border:1px solid var(--wa-color-surface-border);border-radius:var(--wa-border-radius-m, 0.375rem);background-color:var(--wa-color-surface-raised, var(--wa-color-surface-default))}.split-header__summary.sc-igl-spilt-booking-form{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.25rem 0.5rem}.split-header__tags.sc-igl-spilt-booking-form{display:flex;align-items:center;flex-wrap:wrap;gap:0.25rem}.split-header__controls.sc-igl-spilt-booking-form{display:flex;align-items:center;flex-wrap:wrap;gap:0.5rem;padding-top:0.5rem;border-top:1px solid var(--wa-color-surface-border)}.split-header__label.sc-igl-spilt-booking-form{font-size:var(--wa-font-size-xs, 0.75rem);font-weight:600;color:var(--wa-color-text-quiet);white-space:nowrap}.split-header__check.sc-igl-spilt-booking-form{margin-inline-start:auto}.date-trigger.sc-igl-spilt-booking-form{width:150px}.error-message.sc-igl-spilt-booking-form{margin:0;margin-top:0.5rem;text-align:left;color:var(--wa-color-danger-fill-loud, #c0392b)}.room-type-list.sc-igl-spilt-booking-form{display:flex;flex-direction:column;gap:0.75rem;margin:0;margin-top:0.5rem;padding:0}.room-type-row.sc-igl-spilt-booking-form{margin-bottom:0.5rem}.choice-row.sc-igl-spilt-booking-form{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.room-type-name.sc-igl-spilt-booking-form{font-weight:600;color:var(--wa-color-text-normal)}.physical-room.sc-igl-spilt-booking-form{display:flex;align-items:center;padding-inline-start:1rem}.physical-room.sc-igl-spilt-booking-form::part(label),.physical-room.sc-igl-spilt-booking-form [part~="label"]{display:flex;align-items:center}.physical-room.sc-igl-spilt-booking-form+.physical-room.sc-igl-spilt-booking-form{margin-top:0.5rem}.physical-room--last.sc-igl-spilt-booking-form{margin-bottom:0.25rem}.physical-room.sc-igl-spilt-booking-form wa-select.sc-igl-spilt-booking-form{margin-left:1rem;min-width:220px}.sheet-footer__btn.sc-igl-spilt-booking-form{flex:1 1 0}`;

const IglSpiltBookingForm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeModal = createEvent(this, "closeModal");
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
    bookingService = new BookingService();
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
        let MFromDate = hooks(room.from_date, 'YYYY-MM-DD');
        const MToDate = hooks(room.to_date, 'YYYY-MM-DD').add(-1, 'days');
        const today = hooks();
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
            const selectedUnit = SelectedUnitSchema.parse(this.selectedUnit);
            // const oldRooms = this.booking.rooms.filter(r => r.identifier !== this.identifier);
            const canCheckIn = this.room.in_out?.code === '001' ? (hooks().isBefore(this.selectedDates.from_date) ? false : true) : false;
            let rooms = [...this.booking.rooms];
            let currIndex = rooms.findIndex(room => room.identifier === this.room.identifier);
            if (currIndex === -1) {
                throw new Error(`Didn't find room identifier ${this.room.identifier}`);
            }
            rooms[currIndex] = {
                ...this.room,
                from_date: this.room.from_date,
                to_date: this.selectedDates.from_date.format('YYYY-MM-DD'),
                days: this.room.days.filter(r => hooks(r.date, 'YYYY-MM-DD').isBefore(this.selectedDates.from_date, 'dates')),
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
                days: this.room.days.filter(r => hooks(r.date, 'YYYY-MM-DD').isSameOrAfter(this.selectedDates.from_date, 'dates')),
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
            if (error instanceof libExports.ZodError) {
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
    render() {
        return (h("form", { key: '681d3188025ce11781ca14084c27001cda14ac50', id: "split-booking-form", onSubmit: e => {
                e.preventDefault();
                this.doReservation();
            }, class: "sheet-container" }, h("div", { key: '58efc5ab81b22684b4209aad949ed7b5a1bc4274', class: "split-header" }, h("div", { key: '17a69f4d0b9e5befd6afb6392bd8a88a95920912', class: "split-header__summary" }, h("ir-date-view", { key: '009fc4073a4c010258e503b4ba5953a9e3c6e5c4', from_date: this.room.from_date, to_date: this.room.to_date, showDateDifference: false }), h("div", { key: '5ae05222b46d6b449ad34cb78ebb2625f38041ed', class: "split-header__tags" }, h("wa-tag", { key: 'adfc4b1752cb61cd9d4b65dec733c73c36f8973c', size: "s", variant: "neutral" }, this.room.rateplan.short_name), this.room.rateplan.is_non_refundable && (h("wa-tag", { key: '91081ef199cee22afb0c2569d8360f4cf4dda0a2', size: "s", variant: "warning" }, locales.entries.Lcz_NonRefundable)))), h("div", { key: '846e7eeda276953e0189b6c92569afeab50833e7', class: "split-header__controls" }, h("label", { key: '699bb580dfecce1809a019cb860324a802d7a842', class: "split-header__label", htmlFor: "split-from-date" }, "Split from"), h("ir-date-picker", { key: 'd3ede49de6d7f0024f43f14cbb64293eb067bcf5', class: "split-header__date", "data-testid": "pickup_arrival_date", date: this.selectedDates?.from_date?.format('YYYY-MM-DD'), maxDate: this.defaultDates?.to_date.format('YYYY-MM-DD'), minDate: this.defaultDates?.from_date.format('YYYY-MM-DD'), emitEmptyDate: true, onDateChanged: evt => {
                this.selectedDates = {
                    ...this.selectedDates,
                    from_date: evt.detail.start,
                };
            } }, h("wa-input", { key: '9aab488fbdd61ba6f0fd06a502088d4ebfb67231', id: "split-from-date", slot: "trigger", size: "s", readonly: true, class: "date-trigger", value: this.selectedDates.from_date ? this.selectedDates.from_date.format('MMM DD, YYYY') : null }, h("wa-icon", { key: '09416e1eaf9c852bf3b38ba8c2588513c0ec7a6c', slot: "start", name: "calendar" }))), h("wa-button", { key: 'a430adea063893e091b1ac3d0c18a0b3c5beba08', class: "split-header__check", size: "s", variant: "brand", loading: isRequestPending('/Check_Availability'), onClick: () => this.checkBookingAvailability() }, h("wa-icon", { key: '8fbd3f0e068dd79c9dd021c6a78bf589cbfc153d', slot: "start", name: "magnifying-glass" }), "Check"))), this.errors?.roomtype_id && h("p", { key: '4c796b2e58083101b4123cad9f0e204a1df942f5', class: "error-message" }, "Please select a room"), h("wa-radio-group", { key: '79d1caa13c944a2bf061fc8d381b8418a5f27e17', class: "room-type-list", name: "unit", onchange: e => {
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
            return (h(Fragment, null, h("div", { key: `roomTypeRow-${roomType.id}`, class: "room-type-row" }, h("div", { class: "choice-row" }, h("span", { class: "room-type-name" }, roomType.name))), units.map((room, j) => {
                const isLastUnit = j === units.length - 1;
                const showMealPlanSelect = this.selectedUnit?.unit_id === room.id && Array.isArray(this.mealPlanOptions) && this.mealPlanOptions.length > 0;
                return (h("wa-radio", { value: `${roomType.id}_${room.id}`, checked: this.selectedUnit?.unit_id === room.id, key: `physicalRoom-${room.id}-${j}`, class: `physical-room${isLastUnit ? ' physical-room--last' : ''}` }, h("span", null, room.name), showMealPlanSelect && (h("ir-validator", { value: this.selectedUnit?.rateplan_id, schema: SelectedUnitSchema.shape.rateplan_id }, h("wa-select", { size: "s", placeholder: "Select a new rateplan...", value: this.selectedUnit?.rateplan_id?.toString(), onchange: e => {
                        e.stopImmediatePropagation();
                        e.stopPropagation();
                        this.updateSelectedUnit({
                            rateplan_id: Number(e.target.value),
                        });
                    } }, this.mealPlanOptions.map(option => (h("wa-option", { value: option.value?.toString() }, option.text + `${option.custom_text ? ' | ' : ''}${option.custom_text}`))))))));
            })));
        }))));
    }
};
IglSpiltBookingForm.style = iglSpiltBookingFormCss();

export { IglSpiltBookingForm as igl_spilt_booking_form };
