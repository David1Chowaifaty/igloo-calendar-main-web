import { BookingService } from "../../../services/booking.service";
import calendar_data from "../../../stores/calendar-data";
import { ReloadInterceptor } from "../../../utils/ReloadInterceptor";
import { h } from "@stencil/core";
import moment from "moment";
import { z, ZodError } from "zod";
export class IglBulkStopSale {
    constructor() {
        this.maxDatesLength = 8;
        this.selectedRoomTypes = [];
        this.dates = [{ from: null, to: null }];
        this.selectedWeekdays = new Set(Array(7)
            .fill(null)
            .map((_, i) => i));
        this.dateRefs = [];
        this.minDate = moment().format('YYYY-MM-DD');
        this.bookingService = new BookingService();
        this.datesSchema = z.array(z.object({
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
    }
    getDayIndex(dateStr) {
        return moment(dateStr, 'YYYY-MM-DD').day();
    }
    componentDidLoad() {
        this.reloadInterceptor = new ReloadInterceptor({ autoActivate: false });
        this.sidebar = document.querySelector('ir-sidebar');
    }
    disconnectedCallback() {
        this.reloadInterceptor.deactivate();
    }
    handleBeforeSidebarClose(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (window.confirm('Do you really want to proceed?')) {
            this.deactivate();
            this.sidebar.toggleSidebar();
        }
    }
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
        try {
            this.errors = null;
            this.isLoading = true;
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
                await this.bookingService.setExposedRestrictionPerRoomType({
                    is_closed: isAllClosed,
                    restrictions: periods_to_modify,
                });
            }
            else {
                const payloads = [];
                for (const room of this.selectedRoomTypes) {
                    const periods = periods_to_modify.filter(f => f.room_type_id === room.id);
                    payloads.push({
                        is_closed: room.result === 'closed',
                        restrictions: periods,
                    });
                }
                await Promise.all(payloads.map(p => this.bookingService.setExposedRestrictionPerRoomType(p)));
            }
            this.deactivate();
            this.toast.emit({
                type: 'success',
                title: 'Request was submitted successfully. Your changes have been queued and will be applied shortly.',
                description: '',
            });
            this.isLoading = false;
            this.closeModal.emit();
        }
        catch (error) {
            console.log(error);
            if (error instanceof ZodError) {
                this.datesSections.scrollIntoView({ behavior: 'smooth', block: 'end' });
                this.errors = 'dates';
            }
        }
        finally {
            this.isLoading = false;
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
        var _a, _b;
        // 1) clone and set the new date
        const dates = [...this.dates];
        dates[index] = Object.assign(Object.assign({}, dates[index]), { [key]: date });
        // 1a) if they just changed the “from”, always clear that row’s “to”
        if (key === 'from' && ((_a = dates[index].to) === null || _a === void 0 ? void 0 : _a.isBefore(date, 'dates'))) {
            dates[index].to = null;
        }
        // 2) clear any subsequent rows whose “from” is on or before the changed date
        for (let i = index + 1; i < dates.length; i++) {
            const rowFrom = (_b = dates[i]) === null || _b === void 0 ? void 0 : _b.from;
            if (rowFrom && rowFrom.isSameOrBefore(date, 'day')) {
                dates[i] = { from: null, to: null };
            }
        }
        // 3) commit
        this.dates = dates;
        // 4) open the appropriate picker
        setTimeout(() => {
            var _a, _b;
            if (key === 'from') {
                (_a = this.dateRefs[index]) === null || _a === void 0 ? void 0 : _a.to.openDatePicker();
            }
            else {
                const nextFrom = dates.findIndex(d => d.from === null);
                if (nextFrom > -1) {
                    (_b = this.dateRefs[nextFrom]) === null || _b === void 0 ? void 0 : _b.from.openDatePicker();
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
            var _a;
            (_a = this.dateRefs[this.dates.length - 1].to) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    }
    render() {
        return (h("form", { key: '8644de3ebda528d6d2a9d85c9c2ef978e3ccce91', class: 'bulk-sheet-container', onSubmit: e => {
                e.preventDefault();
                this.addBlockDates();
            } }, h("div", { key: '858b6c0d2663f75fc380416cd5d9d70ed103ddb1', class: "sheet-header d-flex align-items-center" }, h("ir-title", { key: 'd687030785d17775b0011a1d875db2a6ac5da441', onCloseSideBar: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                if (this.isLoading) {
                    return;
                }
                this.closeModal.emit(null);
            }, class: "px-1 mb-0", label: "Bulk Stop/Open Sale", displayContext: "sidebar" })), h("div", { key: '0a93d46a594af3bdf363e62d573a58441e62ceae', class: "sheet-body px-1" }, h("div", { key: '992a2851fc2dc60cd7f84fdf5391472fe67676c8', class: "text-muted text-left py-0 my-0" }, h("p", { key: 'f476ca87c097b000d263b8984835a670c6d5b96c' }, "Select the affected unit(s). ", h("span", { key: 'd83634b4e5a09bdd5bc6f6c1b0bd9ed4a49f682d', class: "text-warning" }, "This operation might require several minutes."))), h("div", { key: '36bcbc6818cc95ca97e84fc0d2beb59b6ce81180' }, this.errors === 'rooms' && (h("p", { key: 'e2101698c8bfd69db815b2252dc8c83126af5605', class: 'text-danger text-left smaller p-0 ', style: { 'margin-bottom': '0.5rem' } }, "Please select at least one ", calendar_data.is_vacation_rental ? 'listing' : 'unit')), h("table", { key: '28d8077e9b4aae1e9fefbc082ecb4c8177d4fc45', ref: el => (this.unitSections = el) }, h("thead", { key: 'c8e2c2acc0496aa98b4cba175bb6cfeec958e57e' }, h("tr", { key: 'de3e2c664a15f0bf17f2652365f09b8fca427fd4' }, h("th", { key: '01b79d89b42cbeaafcf62a37684a46e56684847c', class: "sr-only" }, "choice"), h("th", { key: '36a9398f7348146c4c093b09a29f0eb6f906d5a6', class: "sr-only" }, "room type"))), h("tbody", { key: '57ee7a3c08a58a4b80ed4b83199006ab6acd0154' }, calendar_data.roomsInfo.map((roomType, i) => {
            const row_style = i === calendar_data.roomsInfo.length - 1 ? '' : 'pb-1';
            return (h("tr", { key: roomType.id }, h("td", { class: `choice-row ${row_style}` }, h("div", { class: 'd-flex justify-content-end' }, h("ir-select", { LabelAvailable: false, data: [
                    { value: 'open', text: 'Open' },
                    { value: 'closed', text: 'Stop sale' },
                ], onSelectChange: e => {
                    const choice = e.detail;
                    // drop any existing entry for this roomType
                    const rest = this.selectedRoomTypes.filter(entry => entry.id !== roomType.id);
                    // if they actually picked something, append it
                    if (choice) {
                        rest.push({ id: roomType.id, result: choice });
                    }
                    this.selectedRoomTypes = rest;
                } }))), h("td", { class: `pl-1 text-left ${row_style}` }, roomType.name)));
        })))), h("p", { key: '7be61d8e996e947809049ff218f996eaad5568bc', class: "text-left mt-2 text-muted" }, "Included days"), this.errors === 'weekdays' && h("p", { key: 'defe767a987782a65c2aa478376ab06577c2e5a7', class: 'text-danger text-left smaller m-0 p-0' }, "Please select at least one day"), h("ir-weekday-selector", { key: '2f237f4a15aa05d1fd9886028e05ac1942a45bdf', ref: el => (this.weekdaysSections = el), weekdays: Array.from(this.selectedWeekdays), onWeekdayChange: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.selectedWeekdays = new Set(e.detail);
            } }), h("table", { key: '98d09a982668ab6dce5c3090b52a5c31ac20a164', class: "mt-1", ref: el => (this.datesSections = el) }, h("thead", { key: 'e84af68b099f190d2dee8d6058e40958aa6a617b' }, h("tr", { key: '3e174b4311bb66c313bf0f7801053e9d42de481a' }, h("th", { key: '9cfc06c7d727a44372805e6595ab0e37e629077b', class: "text-left" }, "From"), h("th", { key: '822b343987cf5a60e0d50253f152771e13cce488', class: "text-left" }, "to (inclusive)"), h("td", { key: 'ed8f30cce3a9c7800596b680729788e4d5ba07c5' }, this.dates.length !== this.maxDatesLength && (h("ir-button", { key: '9c2beba962578390f9e6a925d8ef817948bd8767', variant: "icon", icon_name: "plus", onClickHandler: () => {
                this.addDateRow();
            } }))))), h("tbody", { key: 'b7f8d004bd434849b3d18f200b815df7e7f1fd51' }, this.dates.map((d, i) => {
            var _a, _b, _c, _d, _e, _f, _g;
            if (!this.dateRefs[i]) {
                this.dateRefs[i] = {};
            }
            const fromDateMinDate = i > 0 ? (_c = (_b = (_a = this.dates[i - 1]) === null || _a === void 0 ? void 0 : _a.to.clone().add(1, 'days')) === null || _b === void 0 ? void 0 : _b.format('YYYY-MM-DD')) !== null && _c !== void 0 ? _c : this.minDate : this.minDate;
            const toDateMinDate = this.dates[i].from ? (_e = (_d = this.dates[i]) === null || _d === void 0 ? void 0 : _d.from.clone().add(1, 'days')) === null || _e === void 0 ? void 0 : _e.format('YYYY-MM-DD') : this.minDate;
            return (h("tr", { key: `date_${i}` }, h("td", { class: "pr-1 pb-1" }, h("ir-date-picker", { ref: el => {
                    this.dateRefs[i].from = el;
                }, forceDestroyOnUpdate: true, minDate: fromDateMinDate, "data-testid": "pickup_arrival_date", date: (_f = d.from) === null || _f === void 0 ? void 0 : _f.format('YYYY-MM-DD'), emitEmptyDate: true, "aria-invalid": String(this.errors === 'dates' && !d.from), onDateChanged: evt => {
                    evt.stopImmediatePropagation();
                    evt.stopPropagation();
                    this.handleDateChange({ index: i, date: evt.detail.start, key: 'from' });
                }, onDatePickerFocus: e => {
                    var _a, _b, _c;
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    if (i === 0) {
                        return;
                    }
                    const index = this.dates.findIndex(d => !d.from || !d.to);
                    if (!((_a = this.dates[index]) === null || _a === void 0 ? void 0 : _a.from)) {
                        (_b = this.dateRefs[index]) === null || _b === void 0 ? void 0 : _b.from.openDatePicker();
                        return;
                    }
                    if (!((_c = this.dates[index]) === null || _c === void 0 ? void 0 : _c.to)) {
                        this.dateRefs[index].to.openDatePicker();
                    }
                } }, h("input", { type: "text", slot: "trigger", value: d.from ? d.from.format('MMM DD, YYYY') : null, class: `form-control input-sm ${this.errors === 'dates' && !d.to ? 'border-danger' : ''} text-center`, style: { width: '100%' } }))), h("td", { class: "pr-1 pb-1" }, h("ir-date-picker", { forceDestroyOnUpdate: true, ref: el => {
                    this.dateRefs[i].to = el;
                }, "data-testid": "pickup_arrival_date", date: (_g = d.to) === null || _g === void 0 ? void 0 : _g.format('YYYY-MM-DD'), emitEmptyDate: true, minDate: toDateMinDate, "aria-invalid": String(this.errors === 'dates' && !d.to), onDateChanged: evt => {
                    evt.stopImmediatePropagation();
                    evt.stopPropagation();
                    this.handleDateChange({ index: i, date: evt.detail.start, key: 'to' });
                }, onDatePickerFocus: e => {
                    var _a, _b, _c, _d;
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    const index = this.dates.findIndex(d => !d.from || !d.to);
                    if (!((_a = this.dates[index]) === null || _a === void 0 ? void 0 : _a.from)) {
                        (_c = (_b = this.dateRefs[index]) === null || _b === void 0 ? void 0 : _b.from) === null || _c === void 0 ? void 0 : _c.openDatePicker();
                        return;
                    }
                    if (!((_d = this.dates[index]) === null || _d === void 0 ? void 0 : _d.to)) {
                        this.dateRefs[index].to.openDatePicker();
                    }
                } }, h("input", { type: "text", slot: "trigger", value: d.to ? d.to.format('MMM DD, YYYY') : null, class: `form-control input-sm 
                          ${this.errors === 'dates' && !d.to ? 'border-danger' : ''}
                          text-center`, style: { width: '100%' } }))), i > 0 && (h("td", { class: "pb-1" }, h("ir-button", { variant: "icon", icon_name: "minus", onClickHandler: () => {
                    this.dates = this.dates.filter((_, j) => j !== i);
                } })))));
        })))), h("div", { key: '11692ccd5e62ed02887b39fd218c30909249891c', class: 'sheet-footer' }, h("ir-button", { key: '6e055aacc957225036e0e3eb8ede8693a20ba005', text: "Cancel", btn_color: "secondary", class: 'flex-fill', onClickHandler: () => this.closeModal.emit(null) }), h("ir-button", { key: '01bbb3f4770b96fc6a6e68bcfbeeb6837ff9a5a8', isLoading: this.isLoading, text: "Save", btn_type: "submit", class: "flex-fill" }))));
    }
    static get is() { return "igl-bulk-stop-sale"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["igl-bulk-stop-sale.css", "../../../common/sheet.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["igl-bulk-stop-sale.css", "../../../common/sheet.css"]
        };
    }
    static get properties() {
        return {
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
                "attribute": "max-dates-length",
                "reflect": false,
                "defaultValue": "8"
            }
        };
    }
    static get states() {
        return {
            "selectedRoomTypes": {},
            "errors": {},
            "isLoading": {},
            "dates": {},
            "selectedWeekdays": {}
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
            }, {
                "method": "toast",
                "name": "toast",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "IToast",
                    "resolved": "ICustomToast & Partial<IToastWithButton> | IDefaultToast & Partial<IToastWithButton>",
                    "references": {
                        "IToast": {
                            "location": "import",
                            "path": "@components/ui/ir-toast/toast",
                            "id": "src/components/ui/ir-toast/toast.ts::IToast"
                        }
                    }
                }
            }];
    }
    static get listeners() {
        return [{
                "name": "beforeSidebarClose",
                "method": "handleBeforeSidebarClose",
                "target": "body",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=igl-bulk-stop-sale.js.map
