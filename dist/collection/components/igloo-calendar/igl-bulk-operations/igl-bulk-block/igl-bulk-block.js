import { BookingService } from "../../../../services/booking.service";
import calendar_data from "../../../../stores/calendar-data";
import { ReloadInterceptor } from "../../../../utils/ReloadInterceptor";
import { Fragment, h } from "@stencil/core";
import moment from "moment";
import { z, ZodError } from "zod";
// import calendar_dates from '@/stores/calendar-dates.store';
import locales from "../../../../stores/locales.store";
export class IglBulkBlock {
    constructor() {
        this.maxDatesLength = 8;
        this.selectedRoomTypes = new Map();
        this.selectedUnit = null;
        this.dates = [{ from: null, to: null }];
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
    componentDidLoad() {
        this.reloadInterceptor = new ReloadInterceptor({ autoActivate: false });
        this.sidebar = document.querySelector('ir-sidebar');
    }
    disconnectedCallback() {
        this.reloadInterceptor.deactivate();
    }
    async addBlockDates() {
        var _a;
        try {
            this.errors = null;
            this.isLoading = true;
            const periods = this.datesSchema.parse(this.dates);
            if (!this.selectedUnit) {
                this.unitSections.scrollIntoView({ behavior: 'smooth', block: 'center' });
                this.errors = 'rooms';
                return;
            }
            // for (const period of periods) {
            //   await this.bookingService.blockUnit({
            //     from_date: period.from,
            //     to_date: period.to,
            //     DESCRIPTION: '',
            //     NOTES: '',
            //     pr_id: this.selectedUnit?.unit_id?.toString(),
            //     STAY_STATUS_CODE: '004',
            //   });
            // }
            await this.bookingService.blockAvailabilityForBrackets({
                unit_id: (_a = this.selectedUnit) === null || _a === void 0 ? void 0 : _a.unit_id,
                description: '',
                block_status_code: '004',
                brackets: periods.map(p => ({
                    from_date: p.from,
                    to_date: p.to,
                })),
            });
            this.activate();
            this.deactivate();
            this.toast.emit({
                type: 'success',
                title: locales.entries.Lcz_RequestSubmittedSuccessfully,
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
        // 1a) if they just changed the "from", always clear that row's "to"
        if (key === 'from' && ((_a = dates[index].to) === null || _a === void 0 ? void 0 : _a.isBefore(date, 'dates'))) {
            dates[index].to = null;
        }
        // 2) clear any subsequent rows whose "from" is on or before the changed date
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
        // const data = [
        //   { value: 'open', text: 'Unblock' },
        //   { value: 'closed', text: 'Block' },
        // ];
        return (h("form", { key: 'cfc42a60148802d0dfdbe1ff46c7c2b2e7def97f', class: 'bulk-sheet-container', onSubmit: e => {
                e.preventDefault();
                this.addBlockDates();
            } }, h("div", { key: '3ea251a651dda1a316d8f854b919565e15a7afbd', class: "sheet-body px-1" }, h("div", { key: '2174c2027c6fab91a2b320c143a1ad093a9aabde', class: "text-muted text-left py-0 my-0" }, h("p", { key: 'd760f560287fd06f8edd8a8bfbe3dbf60abf846b' }, "Select the unit to block or unblock.")), h("div", { key: 'ace7d233f5e3b9e6d2fe92b469bf232c48f4a596' }, this.errors === 'rooms' && (h("p", { key: 'a7f42b356ab44b19cfb70ebf8aec3434ecbdb3b9', class: 'text-danger text-left smaller p-0 ', style: { 'margin-bottom': '0.5rem' } }, calendar_data.is_vacation_rental ? locales.entries.Lcz_PlzSelectOneListing : locales.entries.Lcz_PlzSelectOneUnit)), h("ul", { key: 'b50c9f809f1bc36b111c856c0b5fa6104ed81125', class: "room-type-list", ref: el => (this.unitSections = el) }, calendar_data.roomsInfo.map((roomType, i) => {
            const row_style = i === calendar_data.roomsInfo.length - 1 ? '' : 'pb-1';
            // const currRoom = this.selectedRoomTypes.get(roomType.id) ?? [];
            // const isFullySelected = Array.isArray(currRoom) && currRoom.length === roomType.physicalrooms.length;
            // const allSameResult = isFullySelected && currRoom.every(({ result }) => result === currRoom[0].result);
            // const roomTypeValue: RoomStatus | undefined = allSameResult ? currRoom[0].result : undefined;
            return (h(Fragment, null, h("li", { key: `roomTypeRow-${roomType.id}`, class: `room-type-row pb-1` }, h("div", { class: 'd-flex choice-row' }, h("span", { class: "pl-1 text-left room-type-name" }, roomType.name))), roomType.physicalrooms.map((room, j) => {
                var _a;
                return (h("li", { key: `physicalRoom-${room.id}-${j}`, class: `physical-room ${row_style}` }, h("div", { class: 'd-flex choice-row' }, h("ir-radio", { class: "pl-1 ", name: "unit", checked: ((_a = this.selectedUnit) === null || _a === void 0 ? void 0 : _a.unit_id) === room.id, onCheckChange: () => (this.selectedUnit = {
                        roomtype_id: roomType.id,
                        unit_id: room.id,
                    }), label: room.name }))));
            })));
        }))), h("table", { key: '85063a9035a6a3450baf5107dfb77e51dfb1d2bc', class: "mt-1", ref: el => (this.datesSections = el) }, h("thead", { key: 'b1a8cf327a4e4d88844509f6816e270f539d010e' }, h("tr", { key: '5ad335a1fcd24e7b1828c093a9476b256855db47' }, h("th", { key: '3fa32a856cbc146c30ca5ae6444ca2e6d5d5931c', class: "text-left" }, locales.entries.Lcz_From), h("th", { key: 'e8043cccfdaebc223c1f1726fe83731b6d404664', class: "text-left" }, locales.entries.Lcz_ToExclusive), h("td", { key: '7231b48a43fba819222477ab5f69b87f8da2ab7f' }, this.dates.length !== this.maxDatesLength && (h("ir-button", { key: '028dea5801a8d7466bd0caa5ba7fdce6ca99650b', variant: "icon", icon_name: "plus", onClickHandler: () => {
                this.addDateRow();
            } }))))), h("tbody", { key: 'eb52fa29d1d1f54403d0cf2eab9602589071f88e' }, this.dates.map((d, i) => {
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
                }, maxDate: d.from ? moment(d.from).add(3, 'months').format('YYYY-MM-DD') : undefined, onDatePickerFocus: e => {
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
        })))), h("div", { key: '630ccafdab718b8274426519c28753fdba11e70a', class: 'sheet-footer' }, h("ir-button", { key: '62b00b84db16acc92e5f3bf5bdf606f3a5ac9433', text: locales.entries.Lcz_Cancel, btn_color: "secondary", class: 'flex-fill', onClickHandler: () => this.closeModal.emit(null) }), h("ir-button", { key: '483af77859adfcc4a1d595427e9f4ffeea2d3f94', isLoading: this.isLoading, text: locales.entries.Lcz_Save, btn_type: "submit", class: "flex-fill" }))));
    }
    static get is() { return "igl-bulk-block"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["igl-bulk-block.css", "../../../../common/sheet.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["igl-bulk-block.css", "../../../../common/sheet.css"]
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
                "attribute": "property_id",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "selectedRoomTypes": {},
            "selectedUnit": {},
            "errors": {},
            "isLoading": {},
            "dates": {}
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
}
//# sourceMappingURL=igl-bulk-block.js.map
