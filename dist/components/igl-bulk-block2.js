import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { B as BookingService } from './booking.service.js';
import { c as calendar_data } from './calendar-data.js';
import { R as ReloadInterceptor } from './ReloadInterceptor.js';
import { h as hooks } from './moment.js';
import { z, Z as ZodError } from './index2.js';
import { l as locales } from './locales.store.js';
import { d as defineCustomElement$5 } from './ir-button2.js';
import { d as defineCustomElement$4 } from './ir-date-picker2.js';
import { d as defineCustomElement$3 } from './ir-icons2.js';
import { d as defineCustomElement$2 } from './ir-radio2.js';
import { d as defineCustomElement$1 } from './ir-select2.js';

const iglBulkBlockCss = ".sc-igl-bulk-block-h{display:flex;flex-direction:column;flex:1 1 0%;height:100%}.bulk-sheet-container.sc-igl-bulk-block{display:flex;flex-direction:column;flex:1;min-height:0;gap:1rem}.animated-container.sc-igl-bulk-block{transition:all 0.5s ease}.physical-room.sc-igl-bulk-block{margin-left:1rem !important;padding-top:0.5rem}.physical-room.sc-igl-bulk-block>td.sc-igl-bulk-block:last-child{padding-left:1rem}.room-type-list.sc-igl-bulk-block{padding:0;margin:0}.room-type-list.sc-igl-bulk-block>li.sc-igl-bulk-block,.physical-room.sc-igl-bulk-block,.room-type-row.sc-igl-bulk-block{list-style:none}";
const IglBulkBlockStyle0 = iglBulkBlockCss;

const sheetCss = ".sc-igl-bulk-block-h{height:100%}.sheet-container.sc-igl-bulk-block{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-igl-bulk-block{height:-webkit-fill-available;height:100vh;height:100dvh}.sheet-footer.sc-igl-bulk-block{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-igl-bulk-block{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-igl-bulk-block{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-igl-bulk-block{flex-direction:row;align-items:center}}";
const IglBulkBlockStyle1 = sheetCss;

const IglBulkBlock = /*@__PURE__*/ proxyCustomElement(class IglBulkBlock extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.closeModal = createEvent(this, "closeModal", 7);
        this.toast = createEvent(this, "toast", 7);
    }
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
    minDate = hooks().format('YYYY-MM-DD');
    bookingService = new BookingService();
    datesSchema = z.array(z.object({
        from: z
            .any()
            .refine((val) => hooks.isMoment(val), {
            message: "Invalid 'from' date; expected a Moment object.",
        })
            .transform((val) => val.format('YYYY-MM-DD')),
        to: z
            .any()
            .refine((val) => hooks.isMoment(val), {
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
        return (h("form", { key: '7a0dc97cf66beb1bdfbc9c677f491cc90f4877b7', class: 'bulk-sheet-container', onSubmit: e => {
                e.preventDefault();
                this.addBlockDates();
            } }, h("div", { key: 'c2960d38c83097ace0a6a6c84563ec30c970ab3c', class: "sheet-body px-1" }, h("div", { key: 'a4bf9a442da6c486068a7bc1abcd5c1c2c6af7ce', class: "text-muted text-left pt-0 my-0 d-flex align-items-center pb-1", style: { gap: '0.5rem' } }, h("p", { key: '0effb2e4be7805daaa1d45c4c740a1b89c7d75d5', class: "m-0 p-0" }, "Select the unit to"), h("ir-select", { key: '74adf7071c1ef055323678d3793ed61c229b3e07', showFirstOption: false, selectedValue: this.blockState, data: [
                { text: 'Block', value: 'block' },
                { text: 'Unblock', value: 'unblock' },
            ], onSelectChange: e => {
                this.blockState = e.detail;
            } })), h("div", { key: 'dffbc1dc6662583df77a98c2de2e57a5a5836cd0' }, this.errors === 'rooms' && (h("p", { key: '207b619a670ee503ef0b7c7aec4dc383a451c8ac', class: 'text-danger text-left smaller p-0 ', style: { 'margin-bottom': '0.5rem' } }, calendar_data.is_vacation_rental ? locales.entries.Lcz_PlzSelectOneListing : locales.entries.Lcz_PlzSelectOneUnit)), h("ul", { key: '1ef06e9d4aef42fe97d783a9bd09768e4c889579', class: "room-type-list", ref: el => (this.unitSections = el) }, calendar_data.roomsInfo.map(roomType => {
            return (h(Fragment, null, h("li", { key: `roomTypeRow-${roomType.id}`, class: `room-type-row` }, h("div", { class: 'd-flex choice-row' }, h("span", { class: "pl-1 text-left room-type-name" }, roomType.name))), roomType.physicalrooms.map((room, j) => {
                const row_style = j === roomType.physicalrooms.length - 1 ? 'pb-1' : '';
                return (h("li", { key: `physicalRoom-${room.id}-${j}`, class: `physical-room ${row_style}` }, h("div", { class: 'd-flex choice-row' }, h("ir-radio", { class: "pl-1 ", name: "unit", checked: this.selectedUnit?.unit_id === room.id, onCheckChange: () => (this.selectedUnit = {
                        roomtype_id: roomType.id,
                        unit_id: room.id,
                    }), label: room.name }))));
            })));
        }))), h("table", { key: '8c434d73b866da2ea2617e8a88d41df8a16d7c49', class: "mt-1", ref: el => (this.datesSections = el) }, h("thead", { key: '70253208ed0e78a1b715340f34f5142aba8539f8' }, h("tr", { key: '01043719618cc38abc9b4f68ef0504d7d0ab2ff1' }, h("th", { key: 'e33113623fce16e97aa1304370a7d493a295c1cc', class: "text-left" }, locales.entries.Lcz_From), h("th", { key: 'df3b9403d7943b7dd0aa56ec5749ce434bd5c79c', class: "text-left" }, locales.entries.Lcz_ToExclusive), h("td", { key: 'cfe1454c97539a0b7616ea12fdfdbab4149ed688' }, this.dates.length !== this.maxDatesLength && this.blockState === 'block' && (h("ir-button", { key: '05bc2abc46c3ce2ce2c6f3148ff678edc027c5e6', variant: "icon", icon_name: "plus", onClickHandler: () => {
                this.addDateRow();
            } }))))), h("tbody", { key: '2949cdefeca47ac443c2e455feec83cb4d92dc22' }, this.dates.map((d, i) => {
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
                }, maxDate: d.from ? hooks(d.from).add(3, 'months').format('YYYY-MM-DD') : undefined, onDatePickerFocus: e => {
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
        })))), h("div", { key: '3e4742cc3884089aa64acac79e8592f2f2dcdaf3', class: 'sheet-footer' }, h("ir-button", { key: 'a6f5a4476339e2362a40767f1c327ffcd949c7c0', text: locales.entries.Lcz_Cancel, btn_color: "secondary", class: 'flex-fill', onClickHandler: () => this.closeModal.emit(null) }), h("ir-button", { key: 'da1193bca29cdd901a13552c1ff109c0e96b458b', isLoading: this.isLoading, text: locales.entries.Lcz_Confirm, btn_type: "submit", class: "flex-fill" }))));
    }
    static get style() { return IglBulkBlockStyle0 + IglBulkBlockStyle1; }
}, [2, "igl-bulk-block", {
        "maxDatesLength": [2, "max-dates-length"],
        "property_id": [2],
        "selectedRoomTypes": [32],
        "selectedUnit": [32],
        "errors": [32],
        "isLoading": [32],
        "blockState": [32],
        "dates": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["igl-bulk-block", "ir-button", "ir-date-picker", "ir-icons", "ir-radio", "ir-select"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-bulk-block":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglBulkBlock);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-radio":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IglBulkBlock as I, defineCustomElement as d };

//# sourceMappingURL=igl-bulk-block2.js.map