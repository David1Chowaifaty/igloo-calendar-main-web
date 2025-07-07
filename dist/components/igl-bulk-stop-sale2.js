import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { B as BookingService } from './booking.service.js';
import { c as calendar_data } from './calendar-data.js';
import { h as hooks } from './moment.js';
import { z, Z as ZodError } from './index2.js';
import { k as calendar_dates } from './utils.js';
import { l as locales } from './locales.store.js';
import { d as defineCustomElement$8 } from './ir-button2.js';
import { d as defineCustomElement$7 } from './ir-checkbox2.js';
import { d as defineCustomElement$6 } from './ir-date-picker2.js';
import { d as defineCustomElement$5 } from './ir-icon2.js';
import { d as defineCustomElement$4 } from './ir-icons2.js';
import { d as defineCustomElement$3 } from './ir-select2.js';
import { d as defineCustomElement$2 } from './ir-title2.js';
import { d as defineCustomElement$1 } from './ir-weekday-selector2.js';

class ReloadInterceptor {
    /**
     * @param onIntercept
     *   Called whenever a reload is intercepted (F5/Ctrl+R or beforeunload).
     * @param autoActivate
     *   If true, will immediately attach listeners.
     */
    constructor(options) {
        var _a;
        this.isActive = false;
        /** Native “Are you sure you want to leave?” dialog */
        this.handleBeforeUnload = (e) => {
            this.onIntercept();
            e.preventDefault();
            e.returnValue = '';
        };
        this.onIntercept = (_a = options.onIntercept) !== null && _a !== void 0 ? _a : (() => { });
        if (options.autoActivate) {
            this.activate();
        }
    }
    /** Begin intercepting reloads & navigations */
    activate() {
        if (this.isActive)
            return;
        window.addEventListener('beforeunload', this.handleBeforeUnload, { capture: true });
        this.isActive = true;
    }
    /** Stop intercepting reloads & navigations */
    deactivate() {
        if (!this.isActive)
            return;
        window.removeEventListener('beforeunload', this.handleBeforeUnload, { capture: true });
        this.isActive = false;
    }
}

const iglBulkStopSaleCss = ".bulk-sheet-container.sc-igl-bulk-stop-sale{display:flex;flex-direction:column;height:auto !important;min-height:100vh;background:white !important;gap:1rem}.animated-container.sc-igl-bulk-stop-sale{transition:all 0.5s ease}.days-checkbox.sc-igl-bulk-stop-sale{gap:0.5rem}";
const IglBulkStopSaleStyle0 = iglBulkStopSaleCss;

const sheetCss = ".sc-igl-bulk-stop-sale-h{height:100%}.sheet-container.sc-igl-bulk-stop-sale{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-igl-bulk-stop-sale{height:-webkit-fill-available;height:100vh}@supports (height: 100svh){.sheet-container.sc-igl-bulk-stop-sale{height:100svh}}.sheet-footer.sc-igl-bulk-stop-sale{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-igl-bulk-stop-sale{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-igl-bulk-stop-sale{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-igl-bulk-stop-sale{flex-direction:row;align-items:center}}";
const IglBulkStopSaleStyle1 = sheetCss;

const IglBulkStopSale = /*@__PURE__*/ proxyCustomElement(class IglBulkStopSale extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.closeModal = createEvent(this, "closeModal", 7);
        this.toast = createEvent(this, "toast", 7);
        this.maxDatesLength = 8;
        this.selectedRoomTypes = [];
        this.dates = [{ from: null, to: null }];
        this.selectedWeekdays = new Set(Array(7)
            .fill(null)
            .map((_, i) => i));
        this.dateRefs = [];
        this.minDate = hooks().format('YYYY-MM-DD');
        this.bookingService = new BookingService();
        this.datesSchema = z.array(z.object({
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
    }
    getDayIndex(dateStr) {
        return hooks(dateStr, 'YYYY-MM-DD').day();
    }
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
        return (h("form", { key: '51fd007c64996c9c91c346abcc23cd92fcb59591', class: 'bulk-sheet-container', onSubmit: e => {
                e.preventDefault();
                this.addBlockDates();
            } }, h("div", { key: '596cb02c68f833ea02459ca58a8d397800e90cc4', class: "sheet-header d-flex align-items-center" }, h("ir-title", { key: 'a1177e6662cff67bed1f890c9a138e4cc0f69b72', onCloseSideBar: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                if (this.isLoading) {
                    return;
                }
                this.closeModal.emit(null);
            }, class: "px-1 mb-0", label: locales.entries.Lcz_BulkStopOpenSale, displayContext: "sidebar" })), h("div", { key: 'b314507b24a389068be1d85194a1afe2d1286f3c', class: "sheet-body px-1" }, h("div", { key: '1e72308d7665143964ff43a0d011cb4fad95a07e', class: "text-muted text-left py-0 my-0" }, h("p", { key: '7416e973c1a2a77a7884e68fd7e30521f8cc9b54' }, locales.entries.Lcz_SelectAffectedUnits)), h("div", { key: '16b03b548e6b6c2887da08878f482843e637658b' }, this.errors === 'rooms' && (h("p", { key: '153f462ca9d7d054adfe5c1bbaac7112f9ef8b2a', class: 'text-danger text-left smaller p-0 ', style: { 'margin-bottom': '0.5rem' } }, calendar_data.is_vacation_rental ? locales.entries.Lcz_PlzSelectOneListing : locales.entries.Lcz_PlzSelectOneUnit)), h("table", { key: 'dfe934096462ca07f460150740227760ac675b7f', ref: el => (this.unitSections = el) }, h("thead", { key: '0add5fb58edd79a4dab39f748594b1e0dda39056' }, h("tr", { key: '3521861d7c228bffb617c82a70c5a6e1c07c9fde' }, h("th", { key: '8510b0dcc38ff9f1ec2aa629a8b7b0b709f287dc', class: "sr-only" }, "choice"), h("th", { key: 'd2bb93782e50325210791d70b020b2bcdcc6bf1d', class: "sr-only" }, "room type"))), h("tbody", { key: 'db2121831d74165ff83646797c2e25affd91b6eb' }, calendar_data.roomsInfo.map((roomType, i) => {
            const row_style = i === calendar_data.roomsInfo.length - 1 ? '' : 'pb-1';
            return (h("tr", { key: roomType.id }, h("td", { class: `choice-row ${row_style}` }, h("div", { class: 'd-flex justify-content-end' }, h("ir-select", { LabelAvailable: false, firstOption: `${locales.entries.Lcz_Select}...`, data: [
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
        })))), h("p", { key: '8ea8c39dd80d4961a42288b1c4688a3f5aab7aca', class: "text-left mt-2 text-muted" }, "Included days"), this.errors === 'weekdays' && h("p", { key: 'c089d7045acc44a00267b891d472b7b6db4d8229', class: 'text-danger text-left smaller m-0 p-0' }, "Please select at least one day"), h("ir-weekday-selector", { key: '4848ce22bba32c065b5d0dd864de17203cfefe3f', ref: el => (this.weekdaysSections = el), weekdays: Array.from(this.selectedWeekdays), onWeekdayChange: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.selectedWeekdays = new Set(e.detail);
            } }), h("table", { key: '815e35ada27ffb2db7771415e122a3d13617ed79', class: "mt-1", ref: el => (this.datesSections = el) }, h("thead", { key: '6fd115e7ff1c5140698fac187e8df8f860fb9e00' }, h("tr", { key: '26b42dc065e23f9d6422414315a1868fcd598b30' }, h("th", { key: '820a28f9803fed2c381c0a1688436b6f43f12b58', class: "text-left" }, locales.entries.Lcz_From), h("th", { key: 'e563460156a8dc18648d727ae63ae72d8d08bba2', class: "text-left" }, locales.entries.Lcz_ToExclusive), h("td", { key: 'd7ab874a6f8da79fe7c7ef4f9eae065053c9fbb7' }, this.dates.length !== this.maxDatesLength && (h("ir-button", { key: '85fa8e5e5e77dd0cfacbed198e32676bc93e561d', variant: "icon", icon_name: "plus", onClickHandler: () => {
                this.addDateRow();
            } }))))), h("tbody", { key: 'f2ae54173b2b932e7751605c53ae2b1af603856b' }, this.dates.map((d, i) => {
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
        })))), h("div", { key: '7c87f1fae101045c0c7b342a1dbf44bf772a5cdb', class: 'sheet-footer' }, h("ir-button", { key: 'a5ceefe0053f13e0a30c0c39d89c910b14824fa1', text: locales.entries.Lcz_Cancel, btn_color: "secondary", class: 'flex-fill', onClickHandler: () => this.closeModal.emit(null) }), h("ir-button", { key: '13e193d057cc56d1615d7bcd4d29dd249c4bbcda', isLoading: this.isLoading, text: locales.entries.Lcz_Save, btn_type: "submit", class: "flex-fill" }))));
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
    const components = ["igl-bulk-stop-sale", "ir-button", "ir-checkbox", "ir-date-picker", "ir-icon", "ir-icons", "ir-select", "ir-title", "ir-weekday-selector"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-bulk-stop-sale":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglBulkStopSale);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-date-picker":
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
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-title":
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