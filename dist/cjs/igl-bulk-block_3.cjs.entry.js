'use strict';

var index = require('./index-DYQrLNin.js');
var booking_store = require('./booking.store-BCEuSVh0.js');
var calendarData = require('./calendar-data-R3j-WBLW.js');
var moment = require('./moment-CdViwxPQ.js');
var index$1 = require('./index-CLqkDPTC.js');
var locales_store = require('./locales.store-6IlEbCjL.js');
var utils = require('./utils-DgT4kKsD.js');
var booking = require('./booking-D81t5lFq.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./index-C59pxKl1.js');
require('./type-Dy9pVS4V.js');

class ReloadInterceptor {
    isActive = false;
    onIntercept;
    /**
     * @param onIntercept
     *   Called whenever a reload is intercepted (F5/Ctrl+R or beforeunload).
     * @param autoActivate
     *   If true, will immediately attach listeners.
     */
    constructor(options) {
        this.onIntercept = options.onIntercept ?? (() => { });
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
    /** Native “Are you sure you want to leave?” dialog */
    handleBeforeUnload = (e) => {
        this.onIntercept();
        e.preventDefault();
        e.returnValue = '';
    };
}

const iglBulkBlockCss = () => `.sc-igl-bulk-block-h{display:flex;flex-direction:column;flex:1 1 0%;height:100%}.igl-bulk-block__form.sc-igl-bulk-block{display:flex;flex-direction:column;flex:1;min-height:0;gap:1rem;padding:0 1.5rem}.igl-bulk-block__action-row.sc-igl-bulk-block{display:flex;align-items:center;gap:0.5rem;padding-top:0;padding-bottom:0.25rem;color:var(--wa-color-neutral-60)}.igl-bulk-block__action-label.sc-igl-bulk-block{margin:0;padding:0;color:inherit}.igl-bulk-block__error.sc-igl-bulk-block{margin:0 0 0.5rem 0;padding:0;color:var(--wa-color-danger-60, #d64545);font-size:0.85rem;text-align:left}.igl-bulk-block__roomtype-row.sc-igl-bulk-block,.igl-bulk-block__unit-row.sc-igl-bulk-block{list-style:none}.igl-bulk-block__roomtype-name.sc-igl-bulk-block{margin-block:0.5rem}.igl-bulk-block__roomtype-choice.sc-igl-bulk-block,.igl-bulk-block__unit-choice.sc-igl-bulk-block{display:flex;align-items:center;gap:0.5rem}.igl-bulk-block__roomtype-name.sc-igl-bulk-block{text-align:left}.igl-bulk-block__unit-row.sc-igl-bulk-block{margin-left:1rem}.igl-bulk-block__unit-row--last.sc-igl-bulk-block{padding-bottom:0.25rem}.igl-bulk-block__dates-table.sc-igl-bulk-block{width:100%;border-collapse:collapse}.igl-bulk-block__date-cell.sc-igl-bulk-block{padding:0 0.5rem 0.5rem 0}.igl-bulk-block__date-action-cell.sc-igl-bulk-block{padding-bottom:0.5rem}.igl-bulk-block__dates-header.sc-igl-bulk-block{text-align:left;font-size:0.857rem;color:var(--wa-form-control-label-color);font-weight:var(--wa-form-control-label-font-weight);line-height:var(--wa-form-control-label-line-height)}`;

const IglBulkBlock = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeDrawer = index.createEvent(this, "closeDrawer");
        this.loadingChanged = index.createEvent(this, "loadingChanged");
    }
    formId;
    maxDatesLength = 8;
    property_id;
    selectedRoomTypes = new Map();
    selectedUnit = null;
    errors;
    blockState = 'block';
    dates = [{ from: null, to: null }];
    closeDrawer;
    loadingChanged;
    sidebar;
    dateRefs = [];
    reloadInterceptor;
    minDate = moment.hooks().format('YYYY-MM-DD');
    bookingService = new booking_store.BookingService();
    datesSchema = index$1.libExports.z.array(index$1.libExports.z.object({
        from: index$1.libExports.z
            .any()
            .refine((val) => moment.hooks.isMoment(val), {
            message: "Invalid 'from' date; expected a Moment object.",
        })
            .transform((val) => val.format('YYYY-MM-DD')),
        to: index$1.libExports.z
            .any()
            .refine((val) => moment.hooks.isMoment(val), {
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
            this.loadingChanged.emit(true);
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
                    property_id: calendarData.calendar_data.property.id,
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
            utils.showToast({
                type: 'success',
                title: locales_store.locales.entries.Lcz_RequestSubmittedSuccessfully,
                description: '',
            });
            this.loadingChanged.emit(false);
            this.closeDrawer.emit();
        }
        catch (error) {
            console.log(error);
            if (error instanceof index$1.libExports.ZodError) {
                this.datesSections.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
        return (index.h("form", { key: '105dc8652c30abbc90506957d65c660303fa45af', id: this.formId, class: "igl-bulk-block__form", onSubmit: e => {
                e.preventDefault();
                this.addBlockDates();
            } }, index.h("wa-radio-group", { key: '50e2126d789ba00a3b2c27523eca460945273627', size: "s", label: "Block or unblock a unit", orientation: "horizontal", name: "action" }, index.h("wa-radio", { key: '96d35bf2c86721b1a542c55bc4f043887899528f', style: { flex: '1 1 0%' }, appearance: "button", value: "block" }, "Block"), index.h("wa-radio", { key: '9f302f49740fb61e9dce0262d04588acae4947ab', style: { flex: '1 1 0%' }, appearance: "button", value: "unblock" }, "Unblock")), index.h("div", { key: 'bb3c786b9bca63baa95cb643e3f2cc5e67ae3ae6' }, this.errors === 'rooms' && (index.h("p", { key: 'b576f24ef72220b2474c70fc7fb4b6772a6dc91c', class: "igl-bulk-block__error" }, calendarData.calendar_data.is_vacation_rental ? locales_store.locales.entries.Lcz_PlzSelectOneListing : locales_store.locales.entries.Lcz_PlzSelectOneUnit)), index.h("wa-radio-group", { key: '120451c5c8767738f384ce606f269e0de316aa68', name: "unit", ref: el => (this.unitSections = el), onchange: e => {
                const [roomtypeId, unitId] = e.target.value?.toString().split('-');
                this.selectedUnit = {
                    roomtype_id: roomtypeId,
                    unit_id: unitId,
                };
            } }, calendarData.calendar_data.roomsInfo.map(roomType => {
            return (index.h(index.Fragment, null, index.h("div", { key: `roomTypeRow-${roomType.id}`, class: "igl-bulk-block__roomtype-row" }, index.h("div", { class: "igl-bulk-block__roomtype-choice" }, index.h("span", { class: "igl-bulk-block__roomtype-name" }, roomType.name))), roomType.physicalrooms.map((room, j) => {
                const rowStyle = j === roomType.physicalrooms.length - 1 ? 'igl-bulk-block__unit-row--last' : '';
                return (index.h("div", { key: `physicalRoom-${room.id}-${j}`, class: `igl-bulk-block__unit-row ${rowStyle}` }, index.h("div", { class: "igl-bulk-block__unit-choice" }, index.h("wa-radio", { value: `${roomType.id}-${room.id}`, "data-roomtype": roomType.id, checked: this.selectedUnit?.unit_id === room.id }, room.name))));
            })));
        }))), index.h("table", { key: '7911ea8e00186754c77a252da5a95ed02ea68d03', class: "igl-bulk-block__dates-table", ref: el => (this.datesSections = el) }, index.h("thead", { key: '8f7ca9e088ac8723b5e32cdfad7353f222ad4312' }, index.h("tr", { key: '1ed3f90748001f3afa2ab97fd5138a725678e50b' }, index.h("td", { key: '0f1a49d09be18307673a96577cd8f51852fe1307', class: "igl-bulk-block__dates-header" }, locales_store.locales.entries.Lcz_From), index.h("td", { key: '77a04e2315cd8d89c2214af54dcd08cee45d8ac8', class: "igl-bulk-block__dates-header" }, locales_store.locales.entries.Lcz_ToExclusive), index.h("td", { key: 'fc7bb8403c8095f2f2b665edaa933610392a80b7' }, this.dates.length !== this.maxDatesLength && this.blockState === 'block' && (index.h("ir-custom-button", { key: 'c96cab56502e58828e193abd219b69f6a71e7dc3', appearance: "plain", variant: "neutral", onClickHandler: () => {
                this.addDateRow();
            } }, index.h("wa-icon", { key: '55eee95e90dd5a98aeb7610f13fcb39fdc637558', name: "plus", style: { fontSize: '1.2rem' } })))))), index.h("tbody", { key: 'f37b7701c9e2189fde56fbece0e50da4055ad319' }, this.dates.map((d, i) => {
            if (!this.dateRefs[i]) {
                this.dateRefs[i] = {};
            }
            const fromDateMinDate = i > 0 ? (this.dates[i - 1]?.to.clone().add(1, 'days')?.format('YYYY-MM-DD') ?? this.minDate) : this.minDate;
            const toDateMinDate = this.dates[i].from ? this.dates[i]?.from.clone().add(1, 'days')?.format('YYYY-MM-DD') : this.minDate;
            return (index.h("tr", { key: `date_${i}` }, index.h("td", { class: "igl-bulk-block__date-cell" }, index.h("ir-date-select", { ref: el => {
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
                } })), index.h("td", { class: "igl-bulk-block__date-cell" }, index.h("ir-date-select", { forceDestroyOnUpdate: true, disabled: !d.from, ref: el => {
                    this.dateRefs[i].to = el;
                }, "data-testid": "pickup_arrival_date", date: d.to?.format('YYYY-MM-DD'), emitEmptyDate: true, minDate: toDateMinDate, "aria-invalid": String(this.errors === 'dates' && !d.to), onDateChanged: evt => {
                    evt.stopImmediatePropagation();
                    evt.stopPropagation();
                    this.handleDateChange({ index: i, date: evt.detail.start, key: 'to' });
                }, maxDate: d.from ? moment.hooks(d.from).add(3, 'months').format('YYYY-MM-DD') : undefined, onDatePickerFocus: e => {
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
                } })), i > 0 && (index.h("td", { class: "igl-bulk-block__date-action-cell" }, index.h("ir-custom-button", { appearance: "plain", variant: "neutral", onClickHandler: () => {
                    this.dates = this.dates.filter((_, j) => j !== i);
                } }, index.h("wa-icon", { name: "minus", style: { fontSize: '1.2rem' } }))))));
        })))));
    }
};
IglBulkBlock.style = iglBulkBlockCss();

const iglBulkStopSaleCss = () => `.sc-igl-bulk-stop-sale-h{display:flex;flex-direction:column;flex:1 1 0%;height:100%}.bulk-sheet-container.sc-igl-bulk-stop-sale{display:flex;flex-direction:column;flex:1;min-height:0;gap:1rem}.animated-container.sc-igl-bulk-stop-sale{transition:all 0.5s ease}.days-checkbox.sc-igl-bulk-stop-sale{gap:0.5rem}.bulk-stop-sale__date-label.sc-igl-bulk-stop-sale{font-size:0.857rem;color:var(--wa-form-control-label-color);font-weight:var(--wa-form-control-label-font-weight);line-height:var(--wa-form-control-label-line-height)}`;

const sheetCss = () => `.sc-igl-bulk-stop-sale-h{height:100%}.sheet-container.sc-igl-bulk-stop-sale{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-igl-bulk-stop-sale{height:-webkit-fill-available;height:100vh;height:100dvh}.sheet-footer.sc-igl-bulk-stop-sale{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-igl-bulk-stop-sale{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-igl-bulk-stop-sale{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-igl-bulk-stop-sale{flex-direction:row;align-items:center}}`;

const IglBulkStopSale = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeDrawer = index.createEvent(this, "closeDrawer");
        this.loadingChanged = index.createEvent(this, "loadingChanged");
    }
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
    minDate = moment.hooks().format('YYYY-MM-DD');
    bookingService = new booking_store.BookingService();
    getDayIndex(dateStr) {
        return moment.hooks(dateStr, 'YYYY-MM-DD').day();
    }
    datesSchema = index$1.libExports.z.array(index$1.libExports.z.object({
        from: index$1.libExports.z
            .any()
            .refine((val) => moment.hooks.isMoment(val), {
            message: "Invalid 'from' date; expected a Moment object.",
        })
            .transform((val) => val.format('YYYY-MM-DD')),
        to: index$1.libExports.z
            .any()
            .refine((val) => moment.hooks.isMoment(val), {
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
                const lastDay = moment.hooks(period.to, 'YYYY-MM-DD').add(1, 'days').format('YYYY-MM-DD');
                while (current !== lastDay) {
                    const nextDay = moment.hooks(current, 'YYYY-MM-DD').add(1, 'days').format('YYYY-MM-DD');
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
            const prevDisabledCells = new Map(booking.calendar_dates.disabled_cells);
            // Caches
            const roomsInfoById = new Map(calendarData.calendar_data.roomsInfo.map((rt, i) => [rt.id, { roomType: rt, index: i }]));
            const dayIndexByValue = new Map(booking.calendar_dates.days.map((day, i) => [day.value, i]));
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
                    const day = booking.calendar_dates.days[dayIndex];
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
            booking.calendar_dates['disabled_cells'] = new Map(prevDisabledCells);
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
            utils.showToast({
                type: 'success',
                title: locales_store.locales.entries.Lcz_RequestSubmittedSuccessfully,
                description: '',
            });
            this.loadingChanged.emit(false);
            this.closeDrawer.emit();
        }
        catch (error) {
            console.log(error);
            if (error instanceof index$1.libExports.ZodError) {
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
        return (index.h("form", { key: 'fb3b4ea551bf318b3629664deccbe3a646d640c4', id: this.formId, class: 'bulk-sheet-container', onSubmit: e => {
                e.preventDefault();
                this.addBlockDates();
            } }, index.h("div", { key: '22ae72f04a34edc2f7b515e24a4e151c856aa3b6', class: "sheet-body px-1" }, index.h("div", { key: 'c4901598bafaaa31007a11c837f87c876e83f37f', class: "text-muted text-left py-0 my-0" }, index.h("p", { key: '85ed6bcf3b70e87863febe1fe08c3e9dc5c490b9' }, "Select the types to stop or open sales for all related rate plans")), index.h("div", { key: 'a4943444de166e6f100f900737790940378a85a1' }, this.errors === 'rooms' && (index.h("p", { key: '523f32ef71f7909f3b9aa9f1caca78bb35693dc3', class: 'text-danger text-left smaller p-0 ', style: { 'margin-bottom': '0.5rem' } }, calendarData.calendar_data.is_vacation_rental ? locales_store.locales.entries.Lcz_PlzSelectOneListing : locales_store.locales.entries.Lcz_PlzSelectOneUnit)), index.h("table", { key: '9dfb8b4270400c6e7c26e4c453921513998f6712', ref: el => (this.unitSections = el) }, index.h("thead", { key: '5f36c31ce99816b08dc65c427204ced2a924ba92' }, index.h("tr", { key: '6225281790e35f1fdca6b6dac8553ad5aac99075' }, index.h("th", { key: '2402fce9644175bac5187ce39dd895510aa4c442', class: "sr-only" }, "choice"), index.h("th", { key: '1ec249bbe12557ba1929c7b76de2b0e50e12dad8', class: "sr-only" }, "room type"))), index.h("tbody", { key: 'c10757967a9289f73750840c9a0e087e8941b03d' }, calendarData.calendar_data.roomsInfo.map((roomType, i) => {
            const row_style = i === calendarData.calendar_data.roomsInfo.length - 1 ? '' : 'pb-1';
            return (index.h("tr", { key: roomType.id }, index.h("td", { class: `choice-row ${row_style}` }, index.h("div", { class: 'd-flex justify-content-end' }, index.h("wa-select", { onchange: e => {
                    const { value } = e.target;
                    const choice = value;
                    // drop any existing entry for this roomType
                    const rest = this.selectedRoomTypes.filter(entry => entry.id !== roomType.id);
                    // if they actually picked something, append it
                    if (choice) {
                        rest.push({ id: roomType.id, result: choice });
                    }
                    this.selectedRoomTypes = rest;
                }, size: "s", placeholder: `${locales_store.locales.entries.Lcz_Select}...` }, index.h("wa-option", { value: "open" }, locales_store.locales.entries.Lcz_Open), index.h("wa-option", { value: "closed" }, locales_store.locales.entries.Lcz_StopSale)))), index.h("td", { class: `pl-1 text-left ${row_style}` }, roomType.name)));
        })))), index.h("p", { key: 'ed745f5e64e55cd2bc2e8b748dbffd70927b7543', class: "text-left mt-2 text-muted" }, "Included days"), this.errors === 'weekdays' && index.h("p", { key: '1e4702cba82a4ab61d3e35f1a6f6ad1c02e6034a', class: 'text-danger text-left smaller m-0 p-0' }, "Please select at least one day"), index.h("ir-weekday-selector", { key: '88d5260c7baa7048cee6d193ec02c8ed464f046c', ref: el => (this.weekdaysSections = el), weekdays: Array.from(this.selectedWeekdays), onWeekdayChange: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.selectedWeekdays = new Set(e.detail);
            } }), index.h("table", { key: 'dd643bb266c722981592edd83380840dba948b2e', class: "mt-1", ref: el => (this.datesSections = el) }, index.h("thead", { key: '2cea1ecfdf764e103cdf8abad73ea792cf356465' }, index.h("tr", { key: 'cfc79f0b93cf28513fa452fd742133eb37f3eb8a' }, index.h("td", { key: '66efb7335eb3e3936eb050d1c5bc01fe9d5fff2f', class: "text-left bulk-stop-sale__date-label" }, locales_store.locales.entries.Lcz_From), index.h("td", { key: '31b05e35e94cbd4eea33c4fddf915eaf5d0acc5d', class: "text-left bulk-stop-sale__date-label" }, locales_store.locales.entries.Lcz_ToExclusive), index.h("td", { key: '8aca6e9b0a7c8a975b6f486db3ff09474ab2bd3f' }, this.dates.length !== this.maxDatesLength && (index.h("ir-custom-button", { key: '5f215e443a0ed83561dfd85b21ecb57e0e0ac9bd', appearance: "plain", variant: "neutral", onClickHandler: () => {
                this.addDateRow();
            } }, index.h("wa-icon", { key: '0d5a24763cd2045f318c3cfed596f8daefbf0b8a', name: "plus", style: { fontSize: '1.2rem' } })))))), index.h("tbody", { key: '20f75661870a6fed26db93a736de5e76105726d1' }, this.dates.map((d, i) => {
            if (!this.dateRefs[i]) {
                this.dateRefs[i] = {};
            }
            const fromDateMinDate = i > 0 ? (this.dates[i - 1]?.to.clone().add(1, 'days')?.format('YYYY-MM-DD') ?? this.minDate) : this.minDate;
            const toDateMinDate = this.dates[i].from ? this.dates[i]?.from.clone()?.format('YYYY-MM-DD') : this.minDate;
            return (index.h("tr", { key: `date_${i}` }, index.h("td", { class: "pr-1 pb-1" }, index.h("ir-date-select", { ref: el => {
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
                } })), index.h("td", { class: "pr-1 pb-1" }, index.h("ir-date-select", { forceDestroyOnUpdate: true, disabled: !d.from, ref: el => {
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
                } })), i > 0 && (index.h("td", { class: "pb-1" }, index.h("ir-custom-button", { appearance: "plain", variant: "neutral", onClickHandler: () => {
                    this.dates = this.dates.filter((_, j) => j !== i);
                } }, index.h("wa-icon", { name: "minus", style: { fontSize: '1.2rem' } }))))));
        }))))));
    }
};
IglBulkStopSale.style = iglBulkStopSaleCss() + sheetCss();

const irWeekdaySelectorCss = () => `.sc-ir-weekday-selector-h{display:block}.days-checkbox.sc-ir-weekday-selector{gap:0.5rem}`;

const IrWeekdaySelector = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.weekdayChange = index.createEvent(this, "weekdayChange");
    }
    /**
     * Initial list of selected weekdays (numeric values).
     */
    weekdays = [];
    /**
     * Internal state tracking currently selected weekdays.
     */
    selectedWeekdays = new Set(this.weekdays);
    /**
     * Emits an updated list of selected weekday values when the selection changes.
     *
     * Example:
     * ```tsx
     * <ir-weekday-selector onWeekdayChange={(e) => console.log(e.detail)} />
     * ```
     */
    weekdayChange;
    _weekdays = [
        { value: 1, label: 'M' },
        { value: 2, label: 'T' },
        { value: 3, label: 'W' },
        { value: 4, label: 'Th' },
        { value: 5, label: 'Fr' },
        { value: 6, label: 'Sa' },
        { value: 0, label: 'Su' },
    ];
    componentWillLoad() {
        if (this.weekdays) {
            this.selectedWeekdays = new Set(this.weekdays);
        }
    }
    handleWeekdayChange(newDays, oldDays) {
        if (newDays.length !== oldDays.length && newDays.length !== this.selectedWeekdays.size) {
            this.selectedWeekdays = new Set(newDays);
        }
    }
    /**
     * Toggles the selected state of a specific weekday.
     * Updates internal state and emits `weekdayChange` event.
     *
     * @param checked - Whether the checkbox is checked.
     * @param weekDay - The numeric value of the weekday.
     */
    toggleWeekDays({ checked, weekDay }) {
        const prev = new Set(this.selectedWeekdays);
        if (checked) {
            if (!this.selectedWeekdays.has(weekDay)) {
                prev.add(weekDay);
                this.selectedWeekdays = new Set(prev);
            }
        }
        else {
            prev.delete(weekDay);
            this.selectedWeekdays = new Set(prev);
        }
        this.weekdayChange.emit(Array.from(this.selectedWeekdays));
    }
    render() {
        return (index.h(index.Host, { key: '356378ceb75a00b626782a80a9455f6524a45a0a', class: "my-1 d-flex align-items-center", style: { gap: '1.1rem' } }, this._weekdays.map(w => (index.h("wa-checkbox", { checked: this.selectedWeekdays.has(w.value), defaultChecked: this.selectedWeekdays.has(w.value), onchange: e => this.toggleWeekDays({ checked: e.target.checked, weekDay: w.value }) }, w.label)))));
    }
    static get watchers() { return {
        "weekdays": [{
                "handleWeekdayChange": 0
            }]
    }; }
};
IrWeekdaySelector.style = irWeekdaySelectorCss();

exports.igl_bulk_block = IglBulkBlock;
exports.igl_bulk_stop_sale = IglBulkStopSale;
exports.ir_weekday_selector = IrWeekdaySelector;
