import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { B as BookingService } from './booking.service.js';
import { r as resetBookingStore } from './booking.store.js';
import { c as calendar_data } from './calendar-data.js';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { l as locales } from './locales.store.js';
import { n as checkMealPlan } from './booking.js';
import { h as hooks } from './moment.js';
import { z, Z as ZodError } from './index2.js';
import { d as defineCustomElement$8 } from './ir-button2.js';
import { d as defineCustomElement$7 } from './ir-date-picker2.js';
import { d as defineCustomElement$6 } from './ir-date-view2.js';
import { d as defineCustomElement$5 } from './ir-icon2.js';
import { d as defineCustomElement$4 } from './ir-icons2.js';
import { d as defineCustomElement$3 } from './ir-radio2.js';
import { d as defineCustomElement$2 } from './ir-select2.js';
import { d as defineCustomElement$1 } from './ir-title2.js';

const SelectedUnitSchema = z.object({
    roomtype_id: z.coerce.number(),
    unit_id: z.coerce.number(),
    rateplan_id: z.coerce.number(),
});

const iglSplitBookingCss = ".sc-igl-split-booking-h{display:block}.sc-igl-split-booking-h{display:flex;flex-direction:column;flex:1 1 0%;height:100%}.bulk-sheet-container.sc-igl-split-booking{display:flex;flex-direction:column;flex:1;min-height:0;gap:1rem}.animated-container.sc-igl-split-booking{transition:all 0.5s ease}.physical-room.sc-igl-split-booking{margin-left:1rem !important}.physical-room.sc-igl-split-booking>td.sc-igl-split-booking:last-child{padding-left:1rem}.room-type-list.sc-igl-split-booking{padding:0;margin:0}.room-type-list.sc-igl-split-booking>li.sc-igl-split-booking,.physical-room.sc-igl-split-booking,.room-type-row.sc-igl-split-booking{list-style:none}";
const IglSplitBookingStyle0 = iglSplitBookingCss;

const sheetCss = ".sc-igl-split-booking-h{height:100%}.sheet-container.sc-igl-split-booking{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-igl-split-booking{height:-webkit-fill-available;height:100vh;height:100dvh}.sheet-footer.sc-igl-split-booking{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-igl-split-booking{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-igl-split-booking{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-igl-split-booking{flex-direction:row;align-items:center}}";
const IglSplitBookingStyle1 = sheetCss;

const IglSplitBooking = /*@__PURE__*/ proxyCustomElement(class IglSplitBooking extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.closeModal = createEvent(this, "closeModal", 7);
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
            const oldRooms = this.booking.rooms.filter(r => r.identifier !== this.identifier);
            const canCheckIn = this.room.in_out?.code === '001' ? (hooks().isBefore(this.selectedDates.from_date) ? false : true) : false;
            let rooms = [
                ...oldRooms,
                {
                    ...this.room,
                    from_date: this.room.from_date,
                    to_date: this.selectedDates.from_date.format('YYYY-MM-DD'),
                    days: this.room.days.filter(r => hooks(r.date, 'YYYY-MM-DD').isBefore(this.selectedDates.from_date, 'dates')),
                    departure_time: null,
                },
                {
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
                },
            ];
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
    render() {
        return (h("form", { key: '385efe45c56cb7ce28193a2fcf410773f985c3fe', onSubmit: e => {
                e.preventDefault();
                this.doReservation();
            }, class: "sheet-container" }, h("ir-title", { key: '0f8d09774cee07b49cd783d07255c3b3ff2f6e51', class: "px-1 sheet-header mb-0", displayContext: "sidebar", onCloseSideBar: () => this.closeModal.emit(), label: `Split unit ${this.room?.unit['name']}` }), h("section", { key: 'c767e71158c4e8f7b9ce7cc36bd17970fd0b927e', class: "px-1 sheet-body" }, h("div", { key: '05f3d6f47b5aa0932468409ac9cff92a6cafc1c4', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'b8298d9c445df00992a1350b7cf621b677e2dd7b' }, h("ir-date-view", { key: '37633cf8091e6aa0e435008c7c56cf2b977c1b9b', from_date: this.room.from_date, to_date: this.room.to_date, showDateDifference: false })), h("p", { key: 'b170f3e3bf5030541540641c826b64b23f84f1a8', class: "m-0 p-0" }, this.room.rateplan.short_name, " ", this.room.rateplan.is_non_refundable ? locales.entries.Lcz_NonRefundable : '')), h("div", { key: '94d7f129a3961380e7d2ebe0d44c4ece03e5d007', class: 'd-flex align-items-center mt-1', style: { gap: '0.5rem' } }, h("span", { key: 'ff586526fcde416fc42a14cf157e2c92f9af71b8' }, "From:"), h("ir-date-picker", { key: '00066a8b5907428f144398065cf687f58e6fb1a4', "data-testid": "pickup_arrival_date", date: this.selectedDates?.from_date?.format('YYYY-MM-DD'), maxDate: this.defaultDates?.to_date.format('YYYY-MM-DD'), minDate: this.defaultDates?.from_date.format('YYYY-MM-DD'), emitEmptyDate: true,
            // aria-invalid={this.errors?.arrival_date && !this.pickupData.arrival_date ? 'true' : 'false'}
            onDateChanged: evt => {
                this.selectedDates = {
                    ...this.selectedDates,
                    from_date: evt.detail.start,
                };
            } }, h("input", { key: '19bcda21c647eecca87d465ad12ab450471e14f1', type: "text", slot: "trigger", value: this.selectedDates.from_date ? this.selectedDates.from_date.format('MMM DD, YYYY') : null, class: `form-control input-sm  text-center`, style: { width: '120px' } })), h("ir-button", { key: '8a877795af7833f26eb7310e91b83482515f52f3', isLoading: isRequestPending('/Check_Availability'), text: "Check available units", size: "sm", onClick: () => this.checkBookingAvailability() })), this.errors?.roomtype_id && h("p", { key: '2e1ebf7edc7dea05b386ac98914f295b5cfc0969', class: "text-danger text-left mt-2" }, "Please select a room"), h("ul", { key: 'a34f9dc3e04c95d8d94b8f58caefefa326a119cd', class: "room-type-list mt-2" }, this.roomTypes?.map(roomType => {
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
            return (h(Fragment, null, h("li", { key: `roomTypeRow-${roomType.id}`, class: `room-type-row` }, h("div", { class: 'd-flex choice-row' }, h("span", { class: "text-left room-type-name" }, roomType.name))), units.map((room, j) => {
                const row_style = j === roomType.physicalrooms.length - 1 ? 'pb-1' : '';
                const showMealPlanSelect = this.selectedUnit?.unit_id === room.id && Array.isArray(this.mealPlanOptions) && this.mealPlanOptions.length > 0;
                return (h("li", { key: `physicalRoom-${room.id}-${j}`, class: `physical-room ${row_style}` }, h("div", { class: 'd-flex choice-row align-items-center', style: { gap: '0.5rem' } }, h("ir-radio", { class: "pl-1", name: "unit", checked: this.selectedUnit?.unit_id === room.id, onCheckChange: () => this.updateSelectedUnit({
                        roomtype_id: roomType.id,
                        unit_id: room.id,
                    }), label: room.name }), showMealPlanSelect && (h("ir-select", { firstOption: "Select a new rateplan...", error: this.errors?.rateplan_id && !this.selectedUnit?.rateplan_id, onSelectChange: e => {
                        const value = e.detail === null || e.detail === undefined || e.detail === '' ? undefined : Number(e.detail);
                        this.updateSelectedUnit({
                            rateplan_id: value,
                        });
                    }, data: this.mealPlanOptions.map(e => ({ ...e, text: e.text + `${e.custom_text ? ' | ' : ''}${e.custom_text}` })) })
                // <ir-dropdown
                //   onOptionChange={e => {
                //     this.updateSelectedUnit({
                //       rateplan_id: Number(e.detail.toString()),
                //     });
                //   }}
                //   style={{ '--ir-dropdown-menu-min-width': 'max-content' }}
                // >
                //   <button type="button" class="btn btn-sm form-control pr-2 d-flex align-items-center" style={{ minWidth: '200px' }} slot="trigger">
                //     {this.selectedUnit?.rateplan_id ? this.mealPlanOptions.find(r => r.value === this.selectedUnit.rateplan_id.toString()).text : 'Choose a meal plan'}
                //   </button>
                //   {this.mealPlanOptions.map(o => (
                //     <ir-dropdown-item value={o.value}>
                //       <p class="m-0 p-0">
                //         {o.text} {o.custom_text && <span class="m-0 p-0">| {o.custom_text}</span>}
                //       </p>
                //     </ir-dropdown-item>
                //   ))}
                // </ir-dropdown>
                ))));
            })));
        }))), h("div", { key: '5df50c25ad479d6f86a0d52846702fc158bed822', class: 'sheet-footer' }, h("ir-button", { key: 'e4cde79a1fa0cb13d0c3603ee77f16b4d15bca9a', text: locales.entries.Lcz_Cancel, btn_color: "secondary", class: 'flex-fill', onClickHandler: () => this.closeModal.emit(null) }), h("ir-button", { key: '46745bd24927b8aba7059421cc8344286747b6fe', isLoading: this.isLoading, text: locales.entries.Lcz_Confirm, btn_type: "submit", class: "flex-fill" }))));
    }
    static get style() { return IglSplitBookingStyle0 + IglSplitBookingStyle1; }
}, [2, "igl-split-booking", {
        "booking": [16],
        "identifier": [1],
        "selectedDates": [32],
        "room": [32],
        "roomTypes": [32],
        "selectedUnit": [32],
        "isLoading": [32],
        "errors": [32],
        "mealPlanOptions": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["igl-split-booking", "ir-button", "ir-date-picker", "ir-date-view", "ir-icon", "ir-icons", "ir-radio", "ir-select", "ir-title"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-split-booking":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglSplitBooking);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-radio":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-title":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IglSplitBooking as I, defineCustomElement as d };

//# sourceMappingURL=igl-split-booking2.js.map