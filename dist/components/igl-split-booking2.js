import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { B as BookingService } from './booking.service.js';
import { a as resetBookingStore } from './booking.store.js';
import { c as calendar_data } from './calendar-data.js';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { l as locales } from './locales.store.js';
import { l as checkMealPlan } from './utils.js';
import { h as hooks } from './moment.js';
import { z, Z as ZodError } from './index3.js';
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
        resetBookingStore();
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
        return (h("form", { key: '3d50503c9b12321b003e5e6b1ff0e6c1a9195267', onSubmit: e => {
                e.preventDefault();
                this.doReservation();
            }, class: "sheet-container" }, h("ir-title", { key: '94ac50e261674daae81518829ea71c0e994361d8', class: "px-1 sheet-header mb-0", displayContext: "sidebar", onCloseSideBar: () => this.closeModal.emit(), label: `Split unit ${this.room?.unit['name']}` }), h("section", { key: '28de2d5f161b5658a749cb8d909ab5eb4339949e', class: "px-1 sheet-body" }, h("div", { key: 'ec5d99e03fabcfed5bc2146ff6a2c621511349e0', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '08a1bf74285d8c0ce72c2f8adf54b843aa53d5ac' }, h("ir-date-view", { key: '27f6b378f527881133e35c8ce0e5abeceb27a2c7', from_date: this.room.from_date, to_date: this.room.to_date, showDateDifference: false })), h("p", { key: '829a5ebadee1c2b8c51a69befacf23dfc9d9b661', class: "m-0 p-0" }, this.room.rateplan.short_name, " ", this.room.rateplan.is_non_refundable ? locales.entries.Lcz_NonRefundable : '')), h("div", { key: '108461d20f83738e6d950396d9f8ec4918ddfa8f', class: 'd-flex align-items-center mt-1', style: { gap: '0.5rem' } }, h("span", { key: '6edf59d33150329fec73d7f96bb922fc487cac45' }, "From:"), h("ir-date-picker", { key: '9c07856e5afd4126cc19bcfeba13d680d8cf67a7', "data-testid": "pickup_arrival_date", date: this.selectedDates?.from_date?.format('YYYY-MM-DD'), maxDate: this.defaultDates?.to_date.format('YYYY-MM-DD'), minDate: this.defaultDates?.from_date.format('YYYY-MM-DD'), emitEmptyDate: true,
            // aria-invalid={this.errors?.arrival_date && !this.pickupData.arrival_date ? 'true' : 'false'}
            onDateChanged: evt => {
                this.selectedDates = {
                    ...this.selectedDates,
                    from_date: evt.detail.start,
                };
            } }, h("input", { key: '1fd046051fe938b9ebee0ed494009078afc36831', type: "text", slot: "trigger", value: this.selectedDates.from_date ? this.selectedDates.from_date.format('MMM DD, YYYY') : null, class: `form-control input-sm  text-center`, style: { width: '120px' } })), h("ir-button", { key: 'dcaa9c858c89a6dbbb054905424a7370ecc238b7', isLoading: isRequestPending('/Check_Availability'), text: "Check available units", size: "sm", onClick: () => this.checkBookingAvailability() })), this.errors?.roomtype_id && h("p", { key: '7335febc2fb6e084ce5a4a1d5b0351a24fc7f47c', class: "text-danger text-left mt-2" }, "Please select a room"), h("ul", { key: '94e239867f546784228150be9e1db0ac7792e1cb', class: "room-type-list mt-2" }, this.roomTypes?.map(roomType => {
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
        }))), h("div", { key: '98df2d9bb9a19fc3316b123bc24a1f7b5c0a2f29', class: 'sheet-footer' }, h("ir-button", { key: 'fd265142eeb4a90ee627cdc282a3ef007a82871f', text: locales.entries.Lcz_Cancel, btn_color: "secondary", class: 'flex-fill', onClickHandler: () => this.closeModal.emit(null) }), h("ir-button", { key: '5eae7e29fa4bb6ab8d1bdbb7da0ee9a5a755aef3', isLoading: this.isLoading, text: locales.entries.Lcz_Confirm, btn_type: "submit", class: "flex-fill" }))));
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