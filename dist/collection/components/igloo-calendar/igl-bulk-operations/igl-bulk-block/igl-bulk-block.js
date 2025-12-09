import { BookingService } from "../../../../services/booking-service/booking.service";
import calendar_data from "../../../../stores/calendar-data";
import { ReloadInterceptor } from "../../../../utils/ReloadInterceptor";
import { Fragment, h } from "@stencil/core";
import moment from "moment";
import { z, ZodError } from "zod";
// import calendar_dates from '@/stores/calendar-dates.store';
import locales from "../../../../stores/locales.store";
export class IglBulkBlock {
    maxDatesLength = 8;
    property_id;
    selectedRoomTypes = new Map();
    selectedUnit = null;
    errors;
    isLoading;
    blockState = 'block';
    dates = [{ from: null, to: null }];
    closeModal;
    toast;
    sidebar;
    dateRefs = [];
    reloadInterceptor;
    minDate = moment().format('YYYY-MM-DD');
    bookingService = new BookingService();
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
    unitSections;
    datesSections;
    componentDidLoad() {
        this.reloadInterceptor = new ReloadInterceptor({ autoActivate: false });
        this.sidebar = document.querySelector('ir-sidebar');
    }
    disconnectedCallback() {
        this.reloadInterceptor.deactivate();
    }
    async addBlockDates() {
        try {
            this.errors = null;
            this.isLoading = true;
            const periods = this.datesSchema.parse(this.dates);
            if (!this.selectedUnit) {
                this.unitSections.scrollIntoView({ behavior: 'smooth', block: 'center' });
                this.errors = 'rooms';
                return;
            }
            if (this.blockState === 'block') {
                await this.bookingService.blockAvailabilityForBrackets({
                    unit_id: this.selectedUnit?.unit_id,
                    description: '',
                    property_id: calendar_data.property.id,
                    block_status_code: '002',
                    brackets: periods.map(p => ({
                        from_date: p.from,
                        to_date: p.to,
                    })),
                });
            }
            else {
                await this.bookingService.unBlockUnitByPeriod({
                    unit_id: this.selectedUnit?.unit_id,
                    from_date: periods[0].from,
                    to_date: periods[0].to,
                });
            }
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
                this.datesSections.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
        // 1) clone and set the new date
        const dates = [...this.dates];
        dates[index] = { ...dates[index], [key]: date };
        // 1a) if they just changed the "from", always clear that row's "to"
        if (key === 'from' && dates[index].to?.isBefore(date, 'dates')) {
            dates[index].to = null;
        }
        // 2) clear any subsequent rows whose "from" is on or before the changed date
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
                this.dateRefs[index]?.to.openDatePicker();
            }
            else {
                const nextFrom = dates.findIndex(d => d.from === null);
                if (nextFrom > -1) {
                    this.dateRefs[nextFrom]?.from.openDatePicker();
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
        return (h("form", { key: '866eeae1ac8a2118ef529811717238b3f4b78b2b', class: 'bulk-sheet-container', onSubmit: e => {
                e.preventDefault();
                this.addBlockDates();
            } }, h("div", { key: '8d173cae5e1e5e4c8d4800dd1853c7b405c53b7d', class: "sheet-body px-1" }, h("div", { key: '70410bdcc10610bfb2924fee97ac83dfb47cb261', class: "text-muted text-left pt-0 my-0 d-flex align-items-center pb-1", style: { gap: '0.5rem' } }, h("p", { key: 'ec4a8c9aa557d0623da2efd4b5994cfb8add5cb1', class: "m-0 p-0" }, "Select the unit to"), h("ir-select", { key: 'eec07c66ff6320bc92bae7cf38d019d01a8f713d', showFirstOption: false, selectedValue: this.blockState, data: [
                { text: 'Block', value: 'block' },
                { text: 'Unblock', value: 'unblock' },
            ], onSelectChange: e => {
                this.blockState = e.detail;
            } })), h("div", { key: '11275909ea81aca4a7b6314a58ca64c603317478' }, this.errors === 'rooms' && (h("p", { key: '4f6ff3f0666ebed7bd68460e5d83b370355c6cf8', class: 'text-danger text-left smaller p-0 ', style: { 'margin-bottom': '0.5rem' } }, calendar_data.is_vacation_rental ? locales.entries.Lcz_PlzSelectOneListing : locales.entries.Lcz_PlzSelectOneUnit)), h("ul", { key: '90cd465fab564f3d723af547380810385baf05ba', class: "room-type-list", ref: el => (this.unitSections = el) }, calendar_data.roomsInfo.map(roomType => {
            return (h(Fragment, null, h("li", { key: `roomTypeRow-${roomType.id}`, class: `room-type-row` }, h("div", { class: 'd-flex choice-row' }, h("span", { class: "pl-1 text-left room-type-name" }, roomType.name))), roomType.physicalrooms.map((room, j) => {
                const row_style = j === roomType.physicalrooms.length - 1 ? 'pb-1' : '';
                return (h("li", { key: `physicalRoom-${room.id}-${j}`, class: `physical-room ${row_style}` }, h("div", { class: 'd-flex choice-row' }, h("ir-radio", { class: "pl-1 ", name: "unit", checked: this.selectedUnit?.unit_id === room.id, onCheckChange: () => (this.selectedUnit = {
                        roomtype_id: roomType.id,
                        unit_id: room.id,
                    }), label: room.name }))));
            })));
        }))), h("table", { key: '15e254bdd0fcfcd225f0774afcee0e558969bae4', class: "mt-1", ref: el => (this.datesSections = el) }, h("thead", { key: 'c22762ba2c0411c7c65450c1b7d49ec97ae2b53b' }, h("tr", { key: '05a0adfcb79cac4d8b577f08f1b566169791e305' }, h("th", { key: '5d10c3f530132971e45c15769fffbcbc498bdcbc', class: "text-left" }, locales.entries.Lcz_From), h("th", { key: 'c429795660d9099d65d6de65c88e89d77414484f', class: "text-left" }, locales.entries.Lcz_ToExclusive), h("td", { key: 'c8b7df5cf1d6ebc946f8e4b6432eaa3c90e3ef55' }, this.dates.length !== this.maxDatesLength && this.blockState === 'block' && (h("ir-button", { key: 'f4423cd28e573912ffcce2f9cca516525a65fc8b', variant: "icon", icon_name: "plus", onClickHandler: () => {
                this.addDateRow();
            } }))))), h("tbody", { key: '89fc39f68f37d4dd8d833b4b9f4ce092cf0f8b74' }, this.dates.map((d, i) => {
            if (!this.dateRefs[i]) {
                this.dateRefs[i] = {};
            }
            const fromDateMinDate = i > 0 ? this.dates[i - 1]?.to.clone().add(1, 'days')?.format('YYYY-MM-DD') ?? this.minDate : this.minDate;
            const toDateMinDate = this.dates[i].from ? this.dates[i]?.from.clone().add(1, 'days')?.format('YYYY-MM-DD') : this.minDate;
            return (h("tr", { key: `date_${i}` }, h("td", { class: "pr-1 pb-1" }, h("ir-date-picker", { ref: el => {
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
                        this.dateRefs[index]?.from.openDatePicker();
                        return;
                    }
                    if (!this.dates[index]?.to) {
                        this.dateRefs[index].to.openDatePicker();
                    }
                } }, h("input", { type: "text", slot: "trigger", value: d.from ? d.from.format('MMM DD, YYYY') : null, class: `form-control input-sm ${this.errors === 'dates' && !d.to ? 'border-danger' : ''} text-center`, style: { width: '100%' } }))), h("td", { class: "pr-1 pb-1" }, h("ir-date-picker", { forceDestroyOnUpdate: true, ref: el => {
                    this.dateRefs[i].to = el;
                }, "data-testid": "pickup_arrival_date", date: d.to?.format('YYYY-MM-DD'), emitEmptyDate: true, minDate: toDateMinDate, "aria-invalid": String(this.errors === 'dates' && !d.to), onDateChanged: evt => {
                    evt.stopImmediatePropagation();
                    evt.stopPropagation();
                    this.handleDateChange({ index: i, date: evt.detail.start, key: 'to' });
                }, maxDate: d.from ? moment(d.from).add(3, 'months').format('YYYY-MM-DD') : undefined, onDatePickerFocus: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    const index = this.dates.findIndex(d => !d.from || !d.to);
                    if (!this.dates[index]?.from) {
                        this.dateRefs[index]?.from?.openDatePicker();
                        return;
                    }
                    if (!this.dates[index]?.to) {
                        this.dateRefs[index].to.openDatePicker();
                    }
                } }, h("input", { type: "text", slot: "trigger", value: d.to ? d.to.format('MMM DD, YYYY') : null, class: `form-control input-sm 
                          ${this.errors === 'dates' && !d.to ? 'border-danger' : ''}
                          text-center`, style: { width: '100%' } }))), i > 0 && (h("td", { class: "pb-1" }, h("ir-button", { variant: "icon", icon_name: "minus", onClickHandler: () => {
                    this.dates = this.dates.filter((_, j) => j !== i);
                } })))));
        })))), h("div", { key: 'a0c49d84d459de7df574042836aab30a4c86d70a', class: 'sheet-footer' }, h("ir-button", { key: '22c06d16041f1901c0801cfea7afa488e097f3af', text: locales.entries.Lcz_Cancel, btn_color: "secondary", class: 'flex-fill', onClickHandler: () => this.closeModal.emit(null) }), h("ir-button", { key: 'eefad66b05c7a58aa078d556d5b09bb51901656e', isLoading: this.isLoading, text: locales.entries.Lcz_Confirm, btn_type: "submit", class: "flex-fill" }))));
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
            "blockState": {},
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
