import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { S as SelectedUnitSchema } from './types2.js';
import { B as BookingService } from './booking.service.js';
import { E as EventsService } from './events.service.js';
import { r as resetBookingStore } from './booking.store.js';
import { c as calendar_data } from './calendar-data.js';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { l as locales } from './locales.store.js';
import { c as calculateDaysBetweenDates, n as checkMealPlan } from './booking.js';
import { h as hooks } from './moment.js';
import { Z as ZodError } from './index2.js';
import { d as defineCustomElement$5 } from './ir-custom-button2.js';
import { d as defineCustomElement$4 } from './ir-custom-date-picker2.js';
import { d as defineCustomElement$3 } from './ir-date-view2.js';
import { d as defineCustomElement$2 } from './ir-input2.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';

const irReallocationFormCss = ".sc-ir-reallocation-form-h{display:block;color:var(--ir-text-color, #1f2a37);font-family:var(--ir-font-family, 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif)}.reallocation-form.sc-ir-reallocation-form{display:flex;flex-direction:column;gap:0.75rem}.booking-summary.sc-ir-reallocation-form{display:flex;flex-direction:column;gap:0.5rem}.rateplan-details.sc-ir-reallocation-form{margin:0;font-weight:500;color:var(--ir-muted-text-color, #4b5563)}.date-picker-row.sc-ir-reallocation-form{display:flex;flex-wrap:wrap;gap:0.5rem;align-items:flex-end}.date-picker-row.sc-ir-reallocation-form .ir-custom-date-picker.sc-ir-reallocation-form{flex:1 1 220px}.error-message.sc-ir-reallocation-form{margin:0;margin-top:0.75rem;color:var(--ir-error-color, #c0392b);font-size:0.95rem}.room-type-list.sc-ir-reallocation-form{display:flex;flex-direction:column;gap:0.75rem;margin-top:0.75rem}.choice-row.sc-ir-reallocation-form{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.room-type-name.sc-ir-reallocation-form{font-weight:600;color:var(--ir-heading-color, #111827)}.physical-room.sc-ir-reallocation-form{display:flex;align-items:center;font-size:0.95rem;padding-inline-start:1rem}.physical-room.sc-ir-reallocation-form::part(label){display:flex;align-items:center}.physical-room.sc-ir-reallocation-form+.physical-room.sc-ir-reallocation-form{margin-top:0.5rem}.physical-room--last.sc-ir-reallocation-form{margin-bottom:0.25rem}.physical-room.sc-ir-reallocation-form wa-select.sc-ir-reallocation-form{margin-left:1rem;min-width:220px}.custom-date-picker.sc-ir-reallocation-form{max-width:200px}.room-type-row.sc-ir-reallocation-form{margin-bottom:0.5rem}";
const IrReallocationFormStyle0 = irReallocationFormCss;

const IrReallocationForm = /*@__PURE__*/ proxyCustomElement(class IrReallocationForm extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.closeModal = createEvent(this, "closeModal", 7);
    }
    booking;
    identifier;
    pool;
    date;
    room;
    roomTypes = [];
    selectedUnit = {};
    errors;
    mealPlanOptions = null;
    closeModal;
    bookingService = new BookingService();
    eventsService = new EventsService();
    componentWillLoad() {
        this.room = this.getRoom();
        this.date = hooks(this.room.from_date, 'YYYY-MM-DD');
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
    async checkBookingAvailability() {
        resetBookingStore(false);
        const is_in_agent_mode = this.booking.agent !== null;
        const { from_date, to_date } = this.getDates();
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
    getDates() {
        return {
            from_date: this.date.clone().format('YYYY-MM-DD'),
            to_date: this.date.clone().add(calculateDaysBetweenDates(this.room.from_date, this.room.to_date), 'days').format('YYYY-MM-DD'),
        };
    }
    async reallocateUnit() {
        try {
            this.errors = null;
            const selectedUnit = SelectedUnitSchema.parse(this.selectedUnit);
            const { from_date, to_date } = this.getDates();
            await this.eventsService.reallocateEvent(this.pool, selectedUnit.unit_id, from_date, to_date, selectedUnit.rateplan_id);
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
    get minDate() {
        const MFromDate = hooks(this.room.from_date, 'YYYY-MM-DD');
        const today = hooks();
        if (MFromDate.isBefore(today)) {
            return MFromDate.format('YYYY-MM-DD');
        }
        return today.format('YYYY-MM-DD');
    }
    render() {
        return (h("form", { key: 'c09782da2baba80b97781d5e1dee17805f37df31', class: "reallocation-form", onSubmit: e => {
                e.preventDefault();
                this.reallocateUnit();
            } }, h("div", { key: '8146d691d6dbb782d57d92a73f70f21eb66a029a', class: "booking-summary" }, h("ir-date-view", { key: 'd8e1154d925b279d15cec2ed1376313076ba07c2', from_date: this.room.from_date, to_date: this.room.to_date, showDateDifference: false }), h("p", { key: 'a10ea9c35ab21c2636d4c4cdbc004b1a13ef4936', class: "rateplan-details" }, this.room.rateplan.short_name, " ", this.room.rateplan.is_non_refundable ? locales.entries.Lcz_NonRefundable : '')), h("div", { key: 'faf9d539ee0f4cf29b84a10f60367fa982cc0b95', class: "date-picker-row" }, h("ir-custom-date-picker", { key: '8eac1cdc41119f5a2ae9e91215203612d3aae68c', "data-testid": "pickup_arrival_date", date: this.date?.format('YYYY-MM-DD'),
            // maxDate={this.defaultDates?.to_date.format('YYYY-MM-DD')}
            minDate: this.minDate, emitEmptyDate: true, label: "From:", onDateChanged: evt => {
                this.date = evt.detail.start;
            } }), h("ir-custom-button", { key: '8f7b2076f93466935763ad3e3efa0b89de1371be', variant: "brand", loading: isRequestPending('/Check_Availability'), onClickHandler: () => this.checkBookingAvailability() }, "Check available units")), this.errors?.roomtype_id && h("p", { key: '8d31824944f75ece872cbf949a6bd6951ad6c048', class: "error-message" }, "Please select a room"), h("wa-radio-group", { key: '62c8c4da370728f74fdd89998110bf69b6097df5', onchange: e => {
                const [roomtype_id, unit_id] = e.target.value.split('_');
                this.updateSelectedUnit({
                    roomtype_id: Number(roomtype_id),
                    unit_id: Number(unit_id),
                });
            }, name: "available-units", class: "room-type-list" }, this.roomTypes?.map(roomType => {
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
            return (h(Fragment, null, h("div", { key: `roomTypeRow-${roomType.id}`, class: `room-type-row` }, h("div", { class: 'choice-row' }, h("span", { class: "room-type-name" }, roomType.name))), units.map((room, j) => {
                const isLastUnit = j === units.length - 1;
                const showMealPlanSelect = this.selectedUnit?.unit_id === room.id && Array.isArray(this.mealPlanOptions) && this.mealPlanOptions.length > 0;
                return (h("wa-radio", { value: `${roomType.id}_${room.id}`, checked: this.selectedUnit?.unit_id === room.id, key: `physicalRoom-${room.id}-${j}`, class: `physical-room${isLastUnit ? ' physical-room--last' : ''}` }, h("span", null, room.name), showMealPlanSelect && (h("ir-validator", { value: this.selectedUnit?.rateplan_id, schema: SelectedUnitSchema.shape.rateplan_id }, h("wa-select", { size: "small", placeholder: "Select a new rateplan...", value: this.selectedUnit?.rateplan_id?.toString(), onchange: e => {
                        e.stopImmediatePropagation();
                        e.stopPropagation();
                        this.updateSelectedUnit({
                            rateplan_id: Number(e.target.value),
                        });
                    } }, this.mealPlanOptions.map(option => {
                    return h("wa-option", { value: option.value?.toString() }, option.text + `${option.custom_text ? ' | ' : ''}${option.custom_text}`);
                }))))));
            })));
        }))));
    }
    static get style() { return IrReallocationFormStyle0; }
}, [2, "ir-reallocation-form", {
        "booking": [16],
        "identifier": [1],
        "pool": [1],
        "date": [32],
        "room": [32],
        "roomTypes": [32],
        "selectedUnit": [32],
        "errors": [32],
        "mealPlanOptions": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-reallocation-form", "ir-custom-button", "ir-custom-date-picker", "ir-date-view", "ir-input", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-reallocation-form":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrReallocationForm);
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-custom-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-input":
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

export { IrReallocationForm as I, defineCustomElement as d };

//# sourceMappingURL=ir-reallocation-form2.js.map