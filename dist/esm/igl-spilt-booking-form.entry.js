import { r as registerInstance, c as createEvent, h, F as Fragment } from './index-0Di74WDd.js';
import { d as BookingService, r as resetBookingStore } from './booking.store-CZ9X4eZQ.js';
import { c as calendar_data } from './calendar-data-wrvThdm8.js';
import { i as isRequestPending } from './ir-interceptor.store-OTZhOdOP.js';
import { l as locales } from './locales.store-CPGnSUGJ.js';
import { b as checkMealPlan } from './utils-BeklM4gy.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import { l as libExports } from './index-DeW5X45W.js';
import { S as SelectedUnitSchema } from './types-DFEXQcwc.js';
import './axios-CleaxLzD.js';
import './booking-SXprRnHy.js';
import './booking.dto-DWti87Wx.js';
import './type-CBqEYOkK.js';
import './index-D9zfa7Bx.js';
import './calendar-data-DIuSgTRk.js';

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
        return (h("form", { key: '5911f82ed9fa4fa22ba057d009e0181ca8ab3154', id: "split-booking-form", onSubmit: e => {
                e.preventDefault();
                this.doReservation();
            }, class: "sheet-container" }, h("div", { key: 'c0549b4a90b6431e888a94d71abb7c7d7c1f92de', class: "split-header" }, h("div", { key: '3a0fbd6fd8569a3a9a471121f1a8cede810068c2', class: "split-header__summary" }, h("ir-date-view", { key: '595519a13a005898f47d0ed77b57701e439d67c3', from_date: this.room.from_date, to_date: this.room.to_date, showDateDifference: false }), h("div", { key: '2123683dfe53226cce0fb4371b5f3859cbec5ea7', class: "split-header__tags" }, h("wa-tag", { key: 'd1646f1571e007f1215859ca7ed5a6bd4a22f4a7', size: "small", variant: "neutral" }, this.room.rateplan.short_name), this.room.rateplan.is_non_refundable && (h("wa-tag", { key: '2ec31cbce1d6a7992e05059165861958da96c745', size: "small", variant: "warning" }, locales.entries.Lcz_NonRefundable)))), h("div", { key: 'c46627ae4c4a172f969f8d5aca5b730fbe203355', class: "split-header__controls" }, h("label", { key: '737b1da187db5983586bda27ccde0b8d4630b1fd', class: "split-header__label", htmlFor: "split-from-date" }, "Split from"), h("ir-date-picker", { key: '56421458b72d643bc5f57d0c7fa56a706429be0e', class: "split-header__date", "data-testid": "pickup_arrival_date", date: this.selectedDates?.from_date?.format('YYYY-MM-DD'), maxDate: this.defaultDates?.to_date.format('YYYY-MM-DD'), minDate: this.defaultDates?.from_date.format('YYYY-MM-DD'), emitEmptyDate: true, onDateChanged: evt => {
                this.selectedDates = {
                    ...this.selectedDates,
                    from_date: evt.detail.start,
                };
            } }, h("wa-input", { key: '527d8b05a7d5b9f179b97e3b584671ad802c6344', id: "split-from-date", slot: "trigger", size: "small", readonly: true, class: "date-trigger", value: this.selectedDates.from_date ? this.selectedDates.from_date.format('MMM DD, YYYY') : null }, h("wa-icon", { key: '6338206042bc5217495a9936f317e74330d3c296', slot: "start", name: "calendar" }))), h("wa-button", { key: 'bea7ff8b261fbe93174d5ce0e85a9e4daa465aa7', class: "split-header__check", size: "small", variant: "brand", loading: isRequestPending('/Check_Availability'), onClick: () => this.checkBookingAvailability() }, h("wa-icon", { key: '1d21c9cd6b2c611172520bf27d9be6b022bd4724', slot: "start", name: "magnifying-glass" }), "Check"))), this.errors?.roomtype_id && h("p", { key: 'eb40592672cc89fd7224baa0b05dc2ebaef4ad88', class: "error-message" }, "Please select a room"), h("wa-radio-group", { key: '3c246a4a97de624dcf95289d356e5bb5bcac81b0', class: "room-type-list", name: "unit", onchange: e => {
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
                return (h("wa-radio", { value: `${roomType.id}_${room.id}`, checked: this.selectedUnit?.unit_id === room.id, key: `physicalRoom-${room.id}-${j}`, class: `physical-room${isLastUnit ? ' physical-room--last' : ''}` }, h("span", null, room.name), showMealPlanSelect && (h("ir-validator", { value: this.selectedUnit?.rateplan_id, schema: SelectedUnitSchema.shape.rateplan_id }, h("wa-select", { size: "small", placeholder: "Select a new rateplan...", value: this.selectedUnit?.rateplan_id?.toString(), onchange: e => {
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
