import { BookingService } from "../../../../services/booking-service/booking.service";
import calendar_data from "../../../../stores/calendar-data";
import { ReloadInterceptor } from "../../../../utils/ReloadInterceptor";
import { h } from "@stencil/core";
import moment from "moment";
import { z, ZodError } from "zod";
import calendar_dates from "../../../../stores/calendar-dates.store";
import locales from "../../../../stores/locales.store";
import { showToast } from "../../../../utils/utils";
export class IglBulkStopSale {
    formId;
    maxDatesLength = 8;
    property_id;
    selectedRoomTypes = [];
    errors;
    dates = [{ from: null, to: null }];
    selectedWeekdays = new Set(Array(7)
        .fill(null)
        .map((_, i) => i));
    closeDrawer;
    loadingChanged;
    sidebar;
    dateRefs = [];
    // private allRoomTypes: SelectedRooms[] = [];
    reloadInterceptor;
    minDate = moment().format('YYYY-MM-DD');
    bookingService = new BookingService();
    getDayIndex(dateStr) {
        return moment(dateStr, 'YYYY-MM-DD').day();
    }
    datesSchema = z.array(z.object({
        from: z
            .any()
            .refine((val) => moment.isMoment(val), {
            message: "Invalid 'from' date; expected a Moment object.",
        })
            .transform((val) => val.format('YYYY-MM-DD')),
        to: z
            .any()
            .refine((val) => moment.isMoment(val), {
            message: "Invalid 'to' date; expected a Moment object.",
        })
            .transform((val) => val.format('YYYY-MM-DD')),
    }));
    //sections
    unitSections;
    weekdaysSections;
    datesSections;
    componentDidLoad() {
        this.reloadInterceptor = new ReloadInterceptor({ autoActivate: false });
        this.sidebar = document.querySelector('ir-sidebar');
    }
    disconnectedCallback() {
        this.reloadInterceptor.deactivate();
    }
    // @Listen('beforeSidebarClose', { target: 'body' })
    // handleBeforeSidebarClose(e: CustomEvent) {
    //   e.stopImmediatePropagation();
    //   e.stopPropagation();
    //   if (window.confirm('Do you really want to proceed?')) {
    //     this.deactivate();
    //     this.sidebar.toggleSidebar();
    //   }
    // }
    async addBlockDates() {
        const generatePeriodsToModify = periods => {
            const p = [];
            for (const period of periods) {
                let current = period.from;
                const lastDay = moment(period.to, 'YYYY-MM-DD').add(1, 'days').format('YYYY-MM-DD');
                while (current !== lastDay) {
                    const nextDay = moment(current, 'YYYY-MM-DD').add(1, 'days').format('YYYY-MM-DD');
                    if (!this.selectedWeekdays.has(this.getDayIndex(current))) {
                        current = nextDay;
                        continue;
                    }
                    for (const selectedRoom of this.selectedRoomTypes) {
                        p.push({
                            room_type_id: selectedRoom.id,
                            night: current,
                        });
                    }
                    current = nextDay;
                }
            }
            return p;
        };
        const updateCalendarCells = (payloads) => {
            const prevDisabledCells = new Map(calendar_dates.disabled_cells);
            // Caches
            const roomsInfoById = new Map(calendar_data.roomsInfo.map((rt, i) => [rt.id, { roomType: rt, index: i }]));
            const dayIndexByValue = new Map(calendar_dates.days.map((day, i) => [day.value, i]));
            const rateByRoomTypeAndDate = new Map();
            for (const payload of payloads) {
                for (const restriction of payload.restrictions) {
                    const { night, room_type_id } = restriction;
                    const { roomType } = roomsInfoById.get(room_type_id);
                    if (!roomType)
                        continue;
                    const dayIndex = dayIndexByValue.get(night);
                    if (dayIndex === undefined) {
                        console.warn(`Couldn't find date ${night}`);
                        continue;
                    }
                    const day = calendar_dates.days[dayIndex];
                    const rateKey = `${room_type_id}_${night}`;
                    let rp = rateByRoomTypeAndDate.get(rateKey);
                    if (!rp) {
                        rp = day.rate.find(r => r.id === room_type_id);
                        if (!rp) {
                            console.warn(`Couldn't find room type ${room_type_id}`);
                            continue;
                        }
                        rateByRoomTypeAndDate.set(rateKey, rp);
                    }
                    const haveAvailability = rp.exposed_inventory.rts === 0;
                    for (const room of roomType.physicalrooms) {
                        const key = `${room.id}_${night}`;
                        prevDisabledCells.set(key, {
                            disabled: payload.is_closed ? true : haveAvailability,
                            reason: payload.is_closed ? 'stop_sale' : haveAvailability ? 'inventory' : 'stop_sale',
                        });
                    }
                }
            }
            calendar_dates['disabled_cells'] = new Map(prevDisabledCells);
        };
        try {
            this.errors = null;
            this.loadingChanged.emit(true);
            const periods = this.datesSchema.parse(this.dates);
            if (this.selectedRoomTypes.length === 0) {
                this.unitSections.scrollIntoView({ behavior: 'smooth', block: 'center' });
                this.errors = 'rooms';
                return;
            }
            if (this.selectedWeekdays.size === 0) {
                this.weekdaysSections.scrollIntoView({ behavior: 'smooth', block: 'center' });
                this.errors = 'weekdays';
                return;
            }
            this.activate();
            const periods_to_modify = generatePeriodsToModify(periods);
            const isAllOpen = this.selectedRoomTypes.every(e => e.result === 'open');
            const isAllClosed = this.selectedRoomTypes.every(e => e.result === 'closed');
            if (isAllClosed || isAllOpen) {
                const payload = {
                    is_closed: isAllClosed,
                    restrictions: periods_to_modify,
                    property_id: this.property_id,
                };
                await this.bookingService.setExposedRestrictionPerRoomType(payload);
                updateCalendarCells([payload]);
            }
            else {
                const payloads = [];
                for (const room of this.selectedRoomTypes) {
                    const periods = periods_to_modify.filter(f => f.room_type_id === room.id);
                    payloads.push({
                        is_closed: room.result === 'closed',
                        restrictions: periods,
                        property_id: this.property_id,
                    });
                }
                await Promise.all(payloads.map(p => this.bookingService.setExposedRestrictionPerRoomType(p)));
                updateCalendarCells(payloads);
            }
            this.deactivate();
            showToast({
                type: 'success',
                title: locales.entries.Lcz_RequestSubmittedSuccessfully,
                description: '',
            });
            this.loadingChanged.emit(false);
            this.closeDrawer.emit();
        }
        catch (error) {
            console.log(error);
            if (error instanceof ZodError) {
                this.datesSections.scrollIntoView({ behavior: 'smooth', block: 'end' });
                this.errors = 'dates';
            }
        }
        finally {
            this.loadingChanged.emit(false);
        }
    }
    activate() {
        this.reloadInterceptor.activate();
        if (this.sidebar)
            this.sidebar.preventClose = true;
    }
    deactivate() {
        this.reloadInterceptor.deactivate();
        if (this.sidebar)
            this.sidebar.preventClose = false;
    }
    handleDateChange({ index, date, key }) {
        // 1) clone and set the new date
        const dates = [...this.dates];
        dates[index] = { ...dates[index], [key]: date };
        // 1a) if they just changed the “from”, always clear that row’s “to”
        if (key === 'from' && dates[index].to?.isBefore(date, 'dates')) {
            dates[index].to = null;
        }
        // 2) clear any subsequent rows whose “from” is on or before the changed date
        for (let i = index + 1; i < dates.length; i++) {
            const rowFrom = dates[i]?.from;
            if (rowFrom && rowFrom.isSameOrBefore(date, 'day')) {
                dates[i] = { from: null, to: null };
            }
        }
        // 3) commit
        this.dates = dates;
        // 4) open the appropriate picker
        setTimeout(() => {
            if (key === 'from') {
                this.dateRefs[index]?.to.show();
            }
            else {
                const nextFrom = dates.findIndex(d => d.from === null);
                if (nextFrom > -1) {
                    this.dateRefs[nextFrom]?.from.show();
                }
            }
        }, 100);
    }
    addDateRow() {
        const last_dates = this.dates[this.dates.length - 1];
        if (!last_dates.from || !last_dates.to) {
            this.errors = 'dates';
            return;
        }
        this.errors = null;
        this.dates = [...this.dates, { from: null, to: null }];
        setTimeout(() => {
            this.dateRefs[this.dates.length - 1].to?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    }
    render() {
        return (h("form", { key: '731c599687c8a9d72d878fd46857bd7f862ceaf2', id: this.formId, class: 'bulk-sheet-container', onSubmit: e => {
                e.preventDefault();
                this.addBlockDates();
            } }, h("div", { key: 'f1f93c23e377372e5d46f09d116c1ec8911cfd76', class: "sheet-body px-1" }, h("div", { key: '10c351142601375d8423bf9863bd21d08c51614b', class: "text-muted text-left py-0 my-0" }, h("p", { key: '8bc20691ca25b32bf139a7ddc42a2584837e7997' }, "Select the types to stop or open sales for all related rate plans")), h("div", { key: '38ce75accf551134d7fce729d9a029544a7181c6' }, this.errors === 'rooms' && (h("p", { key: 'e695348f6241945ef2f3e57ca23fbd5522fcdfe2', class: 'text-danger text-left smaller p-0 ', style: { 'margin-bottom': '0.5rem' } }, calendar_data.is_vacation_rental ? locales.entries.Lcz_PlzSelectOneListing : locales.entries.Lcz_PlzSelectOneUnit)), h("table", { key: 'b65f72dc178d598e700f391c07ed577321ec1c3b', ref: el => (this.unitSections = el) }, h("thead", { key: 'd3505b000832dd59b08956cd86b58594554a6a81' }, h("tr", { key: 'ab262f4c9288f6b00cd9ea4710a57ab56a8a1771' }, h("th", { key: '88b5a23854c5ec9016d7f3fb9abc4b47c479596f', class: "sr-only" }, "choice"), h("th", { key: 'd90cbe806041d0bee4cca33214a98d4dee4bedcd', class: "sr-only" }, "room type"))), h("tbody", { key: '5f56a963e47dcb945d8da903c5df2e09a5b8ee27' }, calendar_data.roomsInfo.map((roomType, i) => {
            const row_style = i === calendar_data.roomsInfo.length - 1 ? '' : 'pb-1';
            return (h("tr", { key: roomType.id }, h("td", { class: `choice-row ${row_style}` }, h("div", { class: 'd-flex justify-content-end' }, h("wa-select", { onchange: e => {
                    const { value } = e.target;
                    const choice = value;
                    // drop any existing entry for this roomType
                    const rest = this.selectedRoomTypes.filter(entry => entry.id !== roomType.id);
                    // if they actually picked something, append it
                    if (choice) {
                        rest.push({ id: roomType.id, result: choice });
                    }
                    this.selectedRoomTypes = rest;
                }, size: "s", placeholder: `${locales.entries.Lcz_Select}...` }, h("wa-option", { value: "open" }, locales.entries.Lcz_Open), h("wa-option", { value: "closed" }, locales.entries.Lcz_StopSale)))), h("td", { class: `pl-1 text-left ${row_style}` }, roomType.name)));
        })))), h("p", { key: 'e61bad66e1637e32f6f4ae500180edd4a3181a89', class: "text-left mt-2 text-muted" }, "Included days"), this.errors === 'weekdays' && h("p", { key: '773f2becc0b93615721b471409c5934f450463c2', class: 'text-danger text-left smaller m-0 p-0' }, "Please select at least one day"), h("ir-weekday-selector", { key: '4592c96d0dab20ccad043180643995f5a569f9da', ref: el => (this.weekdaysSections = el), weekdays: Array.from(this.selectedWeekdays), onWeekdayChange: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.selectedWeekdays = new Set(e.detail);
            } }), h("table", { key: 'c03b8562ca789088f8af01a1df884c2e566e5e28', class: "mt-1", ref: el => (this.datesSections = el) }, h("thead", { key: 'b04ef13eec9d1fdb8c13cedcbf5b40c80305c13e' }, h("tr", { key: '1fc84886b033af7f3a05f5abfa88eff63967f871' }, h("td", { key: '948313c8335b0a316e9f0ffb4e562dbb49aa987b', class: "text-left bulk-stop-sale__date-label" }, locales.entries.Lcz_From), h("td", { key: 'a90f3e7665c042409cff7b49bfa06cba089f84b1', class: "text-left bulk-stop-sale__date-label" }, locales.entries.Lcz_ToExclusive), h("td", { key: '34d1c6ed0a052d7ee868fedd5ef2414d5dc04958' }, this.dates.length !== this.maxDatesLength && (h("ir-custom-button", { key: '8aef8d7fd7eb7f56e216f6a36d6323f4cca5ecd1', appearance: "plain", variant: "neutral", onClickHandler: () => {
                this.addDateRow();
            } }, h("wa-icon", { key: '7335ec374b9329c8dcee2aaacc1f0d3829a7ba35', name: "plus", style: { fontSize: '1.2rem' } })))))), h("tbody", { key: '149e0f83a6682bcf94c46c7e53696d4f80457985' }, this.dates.map((d, i) => {
            if (!this.dateRefs[i]) {
                this.dateRefs[i] = {};
            }
            const fromDateMinDate = i > 0 ? (this.dates[i - 1]?.to.clone().add(1, 'days')?.format('YYYY-MM-DD') ?? this.minDate) : this.minDate;
            const toDateMinDate = this.dates[i].from ? this.dates[i]?.from.clone()?.format('YYYY-MM-DD') : this.minDate;
            return (h("tr", { key: `date_${i}` }, h("td", { class: "pr-1 pb-1" }, h("ir-date-select", { ref: el => {
                    this.dateRefs[i].from = el;
                }, forceDestroyOnUpdate: true, minDate: fromDateMinDate, "data-testid": "pickup_arrival_date", date: d.from?.format('YYYY-MM-DD'), emitEmptyDate: true, "aria-invalid": String(this.errors === 'dates' && !d.from), onDateChanged: evt => {
                    evt.stopImmediatePropagation();
                    evt.stopPropagation();
                    this.handleDateChange({ index: i, date: evt.detail.start, key: 'from' });
                }, onDatePickerFocus: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    if (i === 0) {
                        return;
                    }
                    const index = this.dates.findIndex(d => !d.from || !d.to);
                    if (!this.dates[index]?.from) {
                        this.dateRefs[index]?.from.show();
                        return;
                    }
                    if (!this.dates[index]?.to) {
                        this.dateRefs[index].to.show();
                    }
                } })), h("td", { class: "pr-1 pb-1" }, h("ir-date-select", { forceDestroyOnUpdate: true, disabled: !d.from, ref: el => {
                    this.dateRefs[i].to = el;
                }, "data-testid": "pickup_arrival_date", date: d.to?.format('YYYY-MM-DD'), emitEmptyDate: true, minDate: toDateMinDate, "aria-invalid": String(this.errors === 'dates' && !d.to), onDateChanged: evt => {
                    evt.stopImmediatePropagation();
                    evt.stopPropagation();
                    this.handleDateChange({ index: i, date: evt.detail.start, key: 'to' });
                }, onDatePickerFocus: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    const index = this.dates.findIndex(d => !d.from || !d.to);
                    if (!this.dates[index]?.from) {
                        this.dateRefs[index]?.from?.show();
                        return;
                    }
                    if (!this.dates[index]?.to) {
                        this.dateRefs[index].to.show();
                    }
                } })), i > 0 && (h("td", { class: "pb-1" }, h("ir-custom-button", { appearance: "plain", variant: "neutral", onClickHandler: () => {
                    this.dates = this.dates.filter((_, j) => j !== i);
                } }, h("wa-icon", { name: "minus", style: { fontSize: '1.2rem' } }))))));
        }))))));
    }
    static get is() { return "igl-bulk-stop-sale"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["igl-bulk-stop-sale.css", "../../../../common/sheet.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["igl-bulk-stop-sale.css", "../../../../common/sheet.css"]
        };
    }
    static get properties() {
        return {
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
            },
            "maxDatesLength": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "attribute": "max-dates-length",
                "defaultValue": "8"
            },
            "property_id": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "attribute": "property_id"
            }
        };
    }
    static get states() {
        return {
            "selectedRoomTypes": {},
            "errors": {},
            "dates": {},
            "selectedWeekdays": {}
        };
    }
    static get events() {
        return [{
                "method": "closeDrawer",
                "name": "closeDrawer",
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
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }];
    }
}
