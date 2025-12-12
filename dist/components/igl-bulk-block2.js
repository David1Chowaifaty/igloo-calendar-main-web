import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { B as BookingService } from './booking.service.js';
import { c as calendar_data } from './calendar-data.js';
import { R as ReloadInterceptor } from './ReloadInterceptor.js';
import { h as hooks } from './moment.js';
import { z, Z as ZodError } from './index3.js';
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
        return (h("form", { key: '3ebfa780908fa3f0258f16e7db007b6ce2c72c22', class: 'bulk-sheet-container', onSubmit: e => {
                e.preventDefault();
                this.addBlockDates();
            } }, h("div", { key: 'cd96b1affdae841133dac2906dc02a36a097f423', class: "sheet-body px-1" }, h("div", { key: 'e4f8688ca995649bc62ddee448d93eb04208ab70', class: "text-muted text-left pt-0 my-0 d-flex align-items-center pb-1", style: { gap: '0.5rem' } }, h("p", { key: 'e64480ca9d5c7f24b775e27410ff00ec9ea5f271', class: "m-0 p-0" }, "Select the unit to"), h("ir-select", { key: '58185689e48745f29b0bb7e6630a8f93954efc97', showFirstOption: false, selectedValue: this.blockState, data: [
                { text: 'Block', value: 'block' },
                { text: 'Unblock', value: 'unblock' },
            ], onSelectChange: e => {
                this.blockState = e.detail;
            } })), h("div", { key: '537374a62af03fbf0141b3f5d07052ab8ac8bbda' }, this.errors === 'rooms' && (h("p", { key: '4ee1c1b9b3a1eb90f3bfbafe6e697bf34bd472c6', class: 'text-danger text-left smaller p-0 ', style: { 'margin-bottom': '0.5rem' } }, calendar_data.is_vacation_rental ? locales.entries.Lcz_PlzSelectOneListing : locales.entries.Lcz_PlzSelectOneUnit)), h("ul", { key: 'c02561140f8a0b24f7ce582a81cbaa1ed7697a8c', class: "room-type-list", ref: el => (this.unitSections = el) }, calendar_data.roomsInfo.map(roomType => {
            return (h(Fragment, null, h("li", { key: `roomTypeRow-${roomType.id}`, class: `room-type-row` }, h("div", { class: 'd-flex choice-row' }, h("span", { class: "pl-1 text-left room-type-name" }, roomType.name))), roomType.physicalrooms.map((room, j) => {
                const row_style = j === roomType.physicalrooms.length - 1 ? 'pb-1' : '';
                return (h("li", { key: `physicalRoom-${room.id}-${j}`, class: `physical-room ${row_style}` }, h("div", { class: 'd-flex choice-row' }, h("ir-radio", { class: "pl-1 ", name: "unit", checked: this.selectedUnit?.unit_id === room.id, onCheckChange: () => (this.selectedUnit = {
                        roomtype_id: roomType.id,
                        unit_id: room.id,
                    }), label: room.name }))));
            })));
        }))), h("table", { key: '64a776572976406c5ea8151aee15dbff93f9b265', class: "mt-1", ref: el => (this.datesSections = el) }, h("thead", { key: 'f9f01881e1ac93e809e7bce82ba03ab556f9da76' }, h("tr", { key: '14a0b59c452aaf72e1d2d280ab15bbf33d274b9f' }, h("th", { key: 'f0d4e14cff5b7f578b558ad9eaa124e8825133c0', class: "text-left" }, locales.entries.Lcz_From), h("th", { key: 'd1a1aea1cf8f272c9dd3c205b707b6c80be2f9c6', class: "text-left" }, locales.entries.Lcz_ToExclusive), h("td", { key: '45b191ea59b299d98322a76dabb6adcccce7bbb7' }, this.dates.length !== this.maxDatesLength && this.blockState === 'block' && (h("ir-button", { key: 'daea23c6359bf09830220fdadc35818740b9f4e3', variant: "icon", icon_name: "plus", onClickHandler: () => {
                this.addDateRow();
            } }))))), h("tbody", { key: '10fdce141987e0536fd04db841b875b6fe93f2e8' }, this.dates.map((d, i) => {
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
        })))), h("div", { key: '4a980b40f9a580e7a24d6d2a544e773bd9464190', class: 'sheet-footer' }, h("ir-button", { key: 'da01946cc43e7e2526dbaff615e4cc53359ca8e3', text: locales.entries.Lcz_Cancel, btn_color: "secondary", class: 'flex-fill', onClickHandler: () => this.closeModal.emit(null) }), h("ir-button", { key: 'f4fec46d67438dff9d4ec30b4caa7103bf83d0f6', isLoading: this.isLoading, text: locales.entries.Lcz_Confirm, btn_type: "submit", class: "flex-fill" }))));
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