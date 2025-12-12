import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { B as BookingService } from './booking.service.js';
import { c as calendar_data } from './calendar-data.js';
import { R as ReloadInterceptor } from './ReloadInterceptor.js';
import { h as hooks } from './moment.js';
import { z, Z as ZodError } from './index3.js';
import { k as calendar_dates } from './utils.js';
import { l as locales } from './locales.store.js';
import { d as defineCustomElement$6 } from './ir-button2.js';
import { d as defineCustomElement$5 } from './ir-checkbox2.js';
import { d as defineCustomElement$4 } from './ir-date-picker2.js';
import { d as defineCustomElement$3 } from './ir-icons2.js';
import { d as defineCustomElement$2 } from './ir-select2.js';
import { d as defineCustomElement$1 } from './ir-weekday-selector2.js';

const iglBulkStopSaleCss = ".sc-igl-bulk-stop-sale-h{display:flex;flex-direction:column;flex:1 1 0%;height:100%}.bulk-sheet-container.sc-igl-bulk-stop-sale{display:flex;flex-direction:column;flex:1;min-height:0;gap:1rem}.animated-container.sc-igl-bulk-stop-sale{transition:all 0.5s ease}.days-checkbox.sc-igl-bulk-stop-sale{gap:0.5rem}";
const IglBulkStopSaleStyle0 = iglBulkStopSaleCss;

const sheetCss = ".sc-igl-bulk-stop-sale-h{height:100%}.sheet-container.sc-igl-bulk-stop-sale{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-igl-bulk-stop-sale{height:-webkit-fill-available;height:100vh;height:100dvh}.sheet-footer.sc-igl-bulk-stop-sale{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-igl-bulk-stop-sale{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-igl-bulk-stop-sale{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-igl-bulk-stop-sale{flex-direction:row;align-items:center}}";
const IglBulkStopSaleStyle1 = sheetCss;

const IglBulkStopSale = /*@__PURE__*/ proxyCustomElement(class IglBulkStopSale extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.closeModal = createEvent(this, "closeModal", 7);
        this.toast = createEvent(this, "toast", 7);
    }
    maxDatesLength = 8;
    property_id;
    selectedRoomTypes = [];
    errors;
    isLoading;
    dates = [{ from: null, to: null }];
    selectedWeekdays = new Set(Array(7)
        .fill(null)
        .map((_, i) => i));
    closeModal;
    toast;
    sidebar;
    dateRefs = [];
    // private allRoomTypes: SelectedRooms[] = [];
    reloadInterceptor;
    minDate = hooks().format('YYYY-MM-DD');
    bookingService = new BookingService();
    getDayIndex(dateStr) {
        return hooks(dateStr, 'YYYY-MM-DD').day();
    }
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
                const lastDay = hooks(period.to, 'YYYY-MM-DD').add(1, 'days').format('YYYY-MM-DD');
                while (current !== lastDay) {
                    const nextDay = hooks(current, 'YYYY-MM-DD').add(1, 'days').format('YYYY-MM-DD');
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
        return (h("form", { key: 'a552dc73974d75d5500ff4cc92e4f3819d1826e2', class: 'bulk-sheet-container', onSubmit: e => {
                e.preventDefault();
                this.addBlockDates();
            } }, h("div", { key: '43eb5d3365b2f0902108100f002cba829555e823', class: "sheet-body px-1" }, h("div", { key: 'f842c1f62d81516f2ae182502cfbf851b6e2375c', class: "text-muted text-left py-0 my-0" }, h("p", { key: '69a0a24551c1072c4b561a1ca66869d843555eff' }, "Select the types to stop or open sales for all related rate plans")), h("div", { key: 'f1b347c6b3fa684bb57eb362c990d2f1b2420a4f' }, this.errors === 'rooms' && (h("p", { key: 'ac8f7c79529760d64aa24bceabb5a116ff51d198', class: 'text-danger text-left smaller p-0 ', style: { 'margin-bottom': '0.5rem' } }, calendar_data.is_vacation_rental ? locales.entries.Lcz_PlzSelectOneListing : locales.entries.Lcz_PlzSelectOneUnit)), h("table", { key: '5c62cc98b88638a74e753d76d65cdf4acdedd2f4', ref: el => (this.unitSections = el) }, h("thead", { key: '3d3d205a26425af05a375ac8aed355f324010e68' }, h("tr", { key: 'd8c01d37873dda11d5df803f2e3eabaaefd1539c' }, h("th", { key: '9bc084ca0c0bb514afaf61cf9f57f6c7d1b25956', class: "sr-only" }, "choice"), h("th", { key: 'ab914758c4e423e767fc338ccd63067292a91bac', class: "sr-only" }, "room type"))), h("tbody", { key: '8673cc1cc9dfa12412d3270c35264aa3a77f9d98' }, calendar_data.roomsInfo.map((roomType, i) => {
            const row_style = i === calendar_data.roomsInfo.length - 1 ? '' : 'pb-1';
            return (h("tr", { key: roomType.id }, h("td", { class: `choice-row ${row_style}` }, h("div", { class: 'd-flex justify-content-end' }, h("ir-select", { firstOption: `${locales.entries.Lcz_Select}...`, data: [
                    { value: 'open', text: locales.entries.Lcz_Open },
                    { value: 'closed', text: locales.entries.Lcz_StopSale },
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
        })))), h("p", { key: 'c985d955380a4019dfab8041c98fef8ba10438dd', class: "text-left mt-2 text-muted" }, "Included days"), this.errors === 'weekdays' && h("p", { key: '85ce4caea94d550ca98c4ad381c12b4eb2b25501', class: 'text-danger text-left smaller m-0 p-0' }, "Please select at least one day"), h("ir-weekday-selector", { key: '915d3ffae0d58f363bb074799deabeaab24ed8b9', ref: el => (this.weekdaysSections = el), weekdays: Array.from(this.selectedWeekdays), onWeekdayChange: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.selectedWeekdays = new Set(e.detail);
            } }), h("table", { key: '176b5e940d8a4e40002eb6fa031d8934cd001de3', class: "mt-1", ref: el => (this.datesSections = el) }, h("thead", { key: 'ea8c7dd17840635639e58d6f5b9ea5868c673abc' }, h("tr", { key: 'bb2abd41d8b002a2d0bcb7ce5c8c1838da793b98' }, h("th", { key: '8504ba73db7d19342be9a6e9c7dca6bf5d99ab20', class: "text-left" }, locales.entries.Lcz_From), h("th", { key: '33303cec31c9c7895ae07b37ea098355b54fb354', class: "text-left" }, locales.entries.Lcz_ToExclusive), h("td", { key: '5e968b6a33fe766796de2e1f9ffaf760d6af52be' }, this.dates.length !== this.maxDatesLength && (h("ir-button", { key: '04d8e682af5dfb5b4fa3999d1066e68487255511', variant: "icon", icon_name: "plus", onClickHandler: () => {
                this.addDateRow();
            } }))))), h("tbody", { key: '7f883c55fecd1bd82bedbf17c4316856a8d6b2fc' }, this.dates.map((d, i) => {
            if (!this.dateRefs[i]) {
                this.dateRefs[i] = {};
            }
            const fromDateMinDate = i > 0 ? this.dates[i - 1]?.to.clone().add(1, 'days')?.format('YYYY-MM-DD') ?? this.minDate : this.minDate;
            const toDateMinDate = this.dates[i].from ? this.dates[i]?.from.clone()?.format('YYYY-MM-DD') : this.minDate;
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
                }, onDatePickerFocus: e => {
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
        })))), h("div", { key: 'f26b3c4d02836f68a81657c855627560452cb960', class: 'sheet-footer' }, h("ir-button", { key: '11fe9a24985fc53c43a7c44587289c1d1c16f2c1', text: locales.entries.Lcz_Cancel, btn_color: "secondary", class: 'flex-fill', onClickHandler: () => this.closeModal.emit(null) }), h("ir-button", { key: '9e22c6374a9f41b3cebd23c41ef3baeb5e84cab1', isLoading: this.isLoading, text: locales.entries.Lcz_Save, btn_type: "submit", class: "flex-fill" }))));
    }
    static get style() { return IglBulkStopSaleStyle0 + IglBulkStopSaleStyle1; }
}, [2, "igl-bulk-stop-sale", {
        "maxDatesLength": [2, "max-dates-length"],
        "property_id": [2],
        "selectedRoomTypes": [32],
        "errors": [32],
        "isLoading": [32],
        "dates": [32],
        "selectedWeekdays": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["igl-bulk-stop-sale", "ir-button", "ir-checkbox", "ir-date-picker", "ir-icons", "ir-select", "ir-weekday-selector"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-bulk-stop-sale":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglBulkStopSale);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-checkbox":
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
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-weekday-selector":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IglBulkStopSale as I, defineCustomElement as d };

//# sourceMappingURL=igl-bulk-stop-sale2.js.map