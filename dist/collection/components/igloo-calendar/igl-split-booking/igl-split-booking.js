import { BookingService } from "../../../services/booking.service";
import { resetBookingStore } from "../../../stores/booking.store";
import calendar_data from "../../../stores/calendar-data";
import { isRequestPending } from "../../../stores/ir-interceptor.store";
import locales from "../../../stores/locales.store";
import { checkMealPlan } from "../../../utils/utils";
import { Fragment, h } from "@stencil/core";
import moment from "moment";
import { ZodError } from "zod";
import { SelectedUnitSchema } from "./types";
export class IglSplitBooking {
    constructor() {
        this.roomTypes = [];
        this.selectedUnit = {};
        this.mealPlanOptions = null;
        this.bookingService = new BookingService();
    }
    componentWillLoad() {
        this.room = this.getRoom();
        this.defaultDates = Object.assign({}, this.generateDates(this.room));
        this.selectedDates = Object.assign({}, this.defaultDates);
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
            let rooms = [
                ...oldRooms,
                Object.assign(Object.assign({}, this.room), { from_date: this.room.from_date, to_date: this.selectedDates.from_date.format('YYYY-MM-DD'), days: this.room.days.filter(r => moment(r.date, 'YYYY-MM-DD').isBefore(this.selectedDates.from_date, 'dates')), departure_time: null }),
                Object.assign(Object.assign({}, this.room), { identifier: null, assigned_units_pool: null, parent_room_identifier: this.room.identifier, is_split: true, roomtype: {
                        id: selectedUnit.roomtype_id,
                    }, rateplan: {
                        id: selectedUnit.rateplan_id || this.room.rateplan.id,
                    }, departure_time: this.room.departure_time, unit: { id: selectedUnit.unit_id }, from_date: this.selectedDates.from_date.format('YYYY-MM-DD'),
                    // to_date: this.selectedDates.to_date.format('YYYY-MM-DD'),
                    days: this.room.days.filter(r => moment(r.date, 'YYYY-MM-DD').isSameOrAfter(this.selectedDates.from_date, 'dates')) }),
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
                this.errors = Object.assign({}, err);
            }
        }
        finally {
            this.isLoading = false;
        }
    }
    updateSelectedUnit(params) {
        var _a;
        const merged = Object.assign(Object.assign({}, this.selectedUnit), params);
        const roomTypesSource = (_a = calendar_data === null || calendar_data === void 0 ? void 0 : calendar_data.property) === null || _a === void 0 ? void 0 : _a.roomtypes;
        const mealPlanResult = checkMealPlan({
            rateplan_id: this.room.rateplan.id.toString(),
            roomTypeId: merged === null || merged === void 0 ? void 0 : merged.roomtype_id,
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
        var _a, _b, _c, _d, _e, _f, _g;
        return (h("form", { key: 'd207928eb1f551f73f5bd45ccc214beb6b687d87', onSubmit: e => {
                e.preventDefault();
                this.doReservation();
            }, class: "sheet-container" }, h("ir-title", { key: '4ce4db672cc4393361aedf0bbc3df0afe9ac9848', class: "px-1 sheet-header mb-0", displayContext: "sidebar", onCloseSideBar: () => this.closeModal.emit(), label: `Split unit ${(_a = this.room) === null || _a === void 0 ? void 0 : _a.unit['name']}` }), h("section", { key: '254fad447ce76342a88b1ce29a1bcd52e3359d6f', class: "px-1 sheet-body" }, h("div", { key: 'c20a81fcda0191abcfe7d97865f55e85f1827043', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'ae452a9d44b4e82759e0ce4905eb8eb1396164fd' }, h("ir-date-view", { key: '57dba889687a9cb86545ec12b99cf75a1c9ef3d9', from_date: this.room.from_date, to_date: this.room.to_date, showDateDifference: false })), h("p", { key: 'c2ccc23a78d93170f603d79b9f19c9f817266bdf', class: "m-0 p-0" }, this.room.rateplan.short_name, " ", this.room.rateplan.is_non_refundable ? locales.entries.Lcz_NonRefundable : '')), h("div", { key: '236e1c6a43f6045cea5a9aa68de45ef158219f51', class: 'd-flex align-items-center mt-1', style: { gap: '0.5rem' } }, h("span", { key: '2183b30816e4828ffe602efaa4d0dd970abe023b' }, "From:"), h("ir-date-picker", { key: '233a202c78f9ff2ff0000df988a9b1037999e3c3', "data-testid": "pickup_arrival_date", date: (_c = (_b = this.selectedDates) === null || _b === void 0 ? void 0 : _b.from_date) === null || _c === void 0 ? void 0 : _c.format('YYYY-MM-DD'), maxDate: (_d = this.defaultDates) === null || _d === void 0 ? void 0 : _d.to_date.format('YYYY-MM-DD'), minDate: (_e = this.defaultDates) === null || _e === void 0 ? void 0 : _e.from_date.format('YYYY-MM-DD'), emitEmptyDate: true,
            // aria-invalid={this.errors?.arrival_date && !this.pickupData.arrival_date ? 'true' : 'false'}
            onDateChanged: evt => {
                this.selectedDates = Object.assign(Object.assign({}, this.selectedDates), { from_date: evt.detail.start });
            } }, h("input", { key: '46299dec991cb29588272f55e7883dc533b90f42', type: "text", slot: "trigger", value: this.selectedDates.from_date ? this.selectedDates.from_date.format('MMM DD, YYYY') : null, class: `form-control input-sm  text-center`, style: { width: '120px' } })), h("ir-button", { key: 'ceaca18fe043ed757ab5e59207b24e1953d6fbaf', isLoading: isRequestPending('/Check_Availability'), text: "Check available units", size: "sm", onClick: () => this.checkBookingAvailability() })), ((_f = this.errors) === null || _f === void 0 ? void 0 : _f.roomtype_id) && h("p", { key: '84c3864289d9bfbeb8563eb6e301d19005a88251', class: "text-danger text-left mt-2" }, "Please select a room"), h("ul", { key: 'dbc7742c0e4f49f51f4dcbc636dfc0a84a7f66cb', class: "room-type-list mt-2" }, (_g = this.roomTypes) === null || _g === void 0 ? void 0 : _g.map(roomType => {
            if (!roomType.is_available_to_book) {
                return null;
            }
            const units = (() => {
                const unitMap = new Map();
                for (const rateplan of roomType.rateplans) {
                    for (const unit of rateplan.assignable_units) {
                        if (unit.Is_Fully_Available) {
                            unitMap.set(unit.pr_id, unit.name);
                        }
                    }
                }
                return Array.from(unitMap, ([id, name]) => ({ id, name }));
            })();
            return (h(Fragment, null, h("li", { key: `roomTypeRow-${roomType.id}`, class: `room-type-row` }, h("div", { class: 'd-flex choice-row' }, h("span", { class: "text-left room-type-name" }, roomType.name))), units.map((room, j) => {
                var _a, _b, _c, _d;
                const row_style = j === roomType.physicalrooms.length - 1 ? 'pb-1' : '';
                const showMealPlanSelect = ((_a = this.selectedUnit) === null || _a === void 0 ? void 0 : _a.unit_id) === room.id && Array.isArray(this.mealPlanOptions) && this.mealPlanOptions.length > 0;
                return (h("li", { key: `physicalRoom-${room.id}-${j}`, class: `physical-room ${row_style}` }, h("div", { class: 'd-flex choice-row align-items-center', style: { gap: '0.5rem' } }, h("ir-radio", { class: "pl-1", name: "unit", checked: ((_b = this.selectedUnit) === null || _b === void 0 ? void 0 : _b.unit_id) === room.id, onCheckChange: () => this.updateSelectedUnit({
                        roomtype_id: roomType.id,
                        unit_id: room.id,
                    }), label: room.name }), showMealPlanSelect && (h("ir-select", { firstOption: "Select a new rateplan...", error: ((_c = this.errors) === null || _c === void 0 ? void 0 : _c.rateplan_id) && !((_d = this.selectedUnit) === null || _d === void 0 ? void 0 : _d.rateplan_id), onSelectChange: e => {
                        const value = e.detail === null || e.detail === undefined || e.detail === '' ? undefined : Number(e.detail);
                        this.updateSelectedUnit({
                            rateplan_id: value,
                        });
                    }, data: this.mealPlanOptions.map(e => (Object.assign(Object.assign({}, e), { text: e.text + `${e.custom_text ? ' | ' : ''}${e.custom_text}` }))) })
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
        }))), h("div", { key: '94eb2b4649bdf45227ecf8e72011fa5a2b2c05b4', class: 'sheet-footer' }, h("ir-button", { key: 'b02b3395c08bcda5c1419fadb0b9515864db490c', text: locales.entries.Lcz_Cancel, btn_color: "secondary", class: 'flex-fill', onClickHandler: () => this.closeModal.emit(null) }), h("ir-button", { key: '92d40c00a67f4bc41c9e0e101655b379e93a92ba', isLoading: this.isLoading, text: locales.entries.Lcz_Confirm, btn_type: "submit", class: "flex-fill" }))));
    }
    static get is() { return "igl-split-booking"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["igl-split-booking.css", "../../../common/sheet.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["igl-split-booking.css", "../../../common/sheet.css"]
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
                            "id": "src/models/booking.dto.ts::Booking"
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
                            "id": "src/models/booking.dto.ts::Room"
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
                "attribute": "identifier",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "selectedDates": {},
            "room": {},
            "roomTypes": {},
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
//# sourceMappingURL=igl-split-booking.js.map
