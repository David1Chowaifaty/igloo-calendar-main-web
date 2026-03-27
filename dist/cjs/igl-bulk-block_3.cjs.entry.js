'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const booking_service = require('./booking.service-4b732a09.js');
const calendarData = require('./calendar-data-0598de26.js');
const moment = require('./moment-1780b03a.js');
const index$1 = require('./index-8bb117a0.js');
const locales_store = require('./locales.store-32782582.js');
const booking = require('./booking-77542ea5.js');
require('./axios-6e678d52.js');
require('./utils-dc8cc4b1.js');
require('./type-393ac773.js');
require('./index-fbf1fe1d.js');

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

const iglBulkBlockCss = ".sc-igl-bulk-block-h{display:flex;flex-direction:column;flex:1 1 0%;height:100%}.igl-bulk-block__form.sc-igl-bulk-block{display:flex;flex-direction:column;flex:1;min-height:0;gap:1rem;padding:0 1.5rem}.igl-bulk-block__action-row.sc-igl-bulk-block{display:flex;align-items:center;gap:0.5rem;padding-top:0;padding-bottom:0.25rem;color:var(--wa-color-neutral-60)}.igl-bulk-block__action-label.sc-igl-bulk-block{margin:0;padding:0;color:inherit}.igl-bulk-block__error.sc-igl-bulk-block{margin:0 0 0.5rem 0;padding:0;color:var(--wa-color-danger-60, #d64545);font-size:0.85rem;text-align:left}.igl-bulk-block__roomtype-row.sc-igl-bulk-block,.igl-bulk-block__unit-row.sc-igl-bulk-block{list-style:none}.igl-bulk-block__roomtype-name.sc-igl-bulk-block{margin-block:0.5rem}.igl-bulk-block__roomtype-choice.sc-igl-bulk-block,.igl-bulk-block__unit-choice.sc-igl-bulk-block{display:flex;align-items:center;gap:0.5rem}.igl-bulk-block__roomtype-name.sc-igl-bulk-block{text-align:left}.igl-bulk-block__unit-row.sc-igl-bulk-block{margin-left:1rem}.igl-bulk-block__unit-row--last.sc-igl-bulk-block{padding-bottom:0.25rem}.igl-bulk-block__dates-table.sc-igl-bulk-block{width:100%;border-collapse:collapse}.igl-bulk-block__date-cell.sc-igl-bulk-block{padding:0 0.5rem 0.5rem 0}.igl-bulk-block__date-action-cell.sc-igl-bulk-block{padding-bottom:0.5rem}.igl-bulk-block__dates-header.sc-igl-bulk-block{text-align:left;font-size:0.857rem;color:var(--wa-form-control-label-color);font-weight:var(--wa-form-control-label-font-weight);line-height:var(--wa-form-control-label-line-height)}";
const IglBulkBlockStyle0 = iglBulkBlockCss;

const IglBulkBlock = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeDrawer = index.createEvent(this, "closeDrawer", 7);
        this.toast = index.createEvent(this, "toast", 7);
        this.loadingChanged = index.createEvent(this, "loadingChanged", 7);
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
    toast;
    loadingChanged;
    sidebar;
    dateRefs = [];
    reloadInterceptor;
    minDate = moment.hooks().format('YYYY-MM-DD');
    bookingService = new booking_service.BookingService();
    datesSchema = index$1.z.array(index$1.z.object({
        from: index$1.z
            .any()
            .refine((val) => moment.hooks.isMoment(val), {
            message: "Invalid 'from' date; expected a Moment object.",
        })
            .transform((val) => val.format('YYYY-MM-DD')),
        to: index$1.z
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
            this.toast.emit({
                type: 'success',
                title: locales_store.locales.entries.Lcz_RequestSubmittedSuccessfully,
                description: '',
            });
            this.loadingChanged.emit(false);
            this.closeDrawer.emit();
        }
        catch (error) {
            console.log(error);
            if (error instanceof index$1.ZodError) {
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
        return (index.h("form", { key: '5a59d106a32d78b7d65153b3095c861009b01ac6', id: this.formId, class: "igl-bulk-block__form", onSubmit: e => {
                e.preventDefault();
                this.addBlockDates();
            } }, index.h("wa-radio-group", { key: 'e98623f55f92a535547f93b1dfc437012f69b35c', size: "small", label: "Block or unblock a unit", orientation: "horizontal", name: "action" }, index.h("wa-radio", { key: '54c64eefa32cf0f61f9a3b69c69b4d2cb7967f4b', style: { flex: '1 1 0%' }, appearance: "button", value: "block" }, "Block"), index.h("wa-radio", { key: 'b8ca71689334d2bd7a82247e1803016d7aab0442', style: { flex: '1 1 0%' }, appearance: "button", value: "unblock" }, "Unblock")), index.h("div", { key: '5be4b6c9f9d73b0640a060cf9ea2cdadb934ec0c' }, this.errors === 'rooms' && (index.h("p", { key: '06d2efc0e64d750ab9fb56649146bd23d73d44ee', class: "igl-bulk-block__error" }, calendarData.calendar_data.is_vacation_rental ? locales_store.locales.entries.Lcz_PlzSelectOneListing : locales_store.locales.entries.Lcz_PlzSelectOneUnit)), index.h("wa-radio-group", { key: 'ac8cdab35c4b78c8810765ee97ab6ec9b01ccc84', name: "unit", ref: el => (this.unitSections = el), onchange: e => {
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
        }))), index.h("table", { key: '2670027a743746c67890fde575984146e5da6e27', class: "igl-bulk-block__dates-table", ref: el => (this.datesSections = el) }, index.h("thead", { key: 'a75a29c366b19bb2a9c94b4dc0f44651a619c4c3' }, index.h("tr", { key: '923763d792b9f379dcdceb39d93ad4991d50530d' }, index.h("td", { key: '6831688c4c069ad03eeec2723fc567f18ce8aaa8', class: "igl-bulk-block__dates-header" }, locales_store.locales.entries.Lcz_From), index.h("td", { key: '4d7d4839108e0c5ffc546c6587280a2814eec94a', class: "igl-bulk-block__dates-header" }, locales_store.locales.entries.Lcz_ToExclusive), index.h("td", { key: '8fb56e2341807b23b52ce750edc6cc5ace127c46' }, this.dates.length !== this.maxDatesLength && this.blockState === 'block' && (index.h("ir-custom-button", { key: 'f0ccdd348e85ce62571001ccd7b2206c52db4ac1', appearance: "plain", variant: "neutral", onClickHandler: () => {
                this.addDateRow();
            } }, index.h("wa-icon", { key: '5a6239234696708809506d7d9178b1c8b8ee5eac', name: "plus", style: { fontSize: '1.2rem' } })))))), index.h("tbody", { key: 'c6c8f42214fa09033da886741a1a53001619258b' }, this.dates.map((d, i) => {
            if (!this.dateRefs[i]) {
                this.dateRefs[i] = {};
            }
            const fromDateMinDate = i > 0 ? this.dates[i - 1]?.to.clone().add(1, 'days')?.format('YYYY-MM-DD') ?? this.minDate : this.minDate;
            const toDateMinDate = this.dates[i].from ? this.dates[i]?.from.clone().add(1, 'days')?.format('YYYY-MM-DD') : this.minDate;
            return (index.h("tr", { key: `date_${i}` }, index.h("td", { class: "igl-bulk-block__date-cell" }, index.h("ir-custom-date-picker", { ref: el => {
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
                } })), index.h("td", { class: "igl-bulk-block__date-cell" }, index.h("ir-custom-date-picker", { forceDestroyOnUpdate: true, disabled: !d.from, ref: el => {
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
                        this.dateRefs[index]?.from?.openDatePicker();
                        return;
                    }
                    if (!this.dates[index]?.to) {
                        this.dateRefs[index].to.openDatePicker();
                    }
                } })), i > 0 && (index.h("td", { class: "igl-bulk-block__date-action-cell" }, index.h("ir-custom-button", { appearance: "plain", variant: "neutral", onClickHandler: () => {
                    this.dates = this.dates.filter((_, j) => j !== i);
                } }, index.h("wa-icon", { name: "minus", style: { fontSize: '1.2rem' } }))))));
        })))));
    }
};
IglBulkBlock.style = IglBulkBlockStyle0;

const iglBulkStopSaleCss = ".sc-igl-bulk-stop-sale-h{display:flex;flex-direction:column;flex:1 1 0%;height:100%}.bulk-sheet-container.sc-igl-bulk-stop-sale{display:flex;flex-direction:column;flex:1;min-height:0;gap:1rem}.animated-container.sc-igl-bulk-stop-sale{transition:all 0.5s ease}.days-checkbox.sc-igl-bulk-stop-sale{gap:0.5rem}.bulk-stop-sale__date-label.sc-igl-bulk-stop-sale{font-size:0.857rem;color:var(--wa-form-control-label-color);font-weight:var(--wa-form-control-label-font-weight);line-height:var(--wa-form-control-label-line-height)}";
const IglBulkStopSaleStyle0 = iglBulkStopSaleCss;

const sheetCss = ".sc-igl-bulk-stop-sale-h{height:100%}.sheet-container.sc-igl-bulk-stop-sale{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-igl-bulk-stop-sale{height:-webkit-fill-available;height:100vh;height:100dvh}.sheet-footer.sc-igl-bulk-stop-sale{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-igl-bulk-stop-sale{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-igl-bulk-stop-sale{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-igl-bulk-stop-sale{flex-direction:row;align-items:center}}";
const IglBulkStopSaleStyle1 = sheetCss;

const IglBulkStopSale = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeDrawer = index.createEvent(this, "closeDrawer", 7);
        this.toast = index.createEvent(this, "toast", 7);
        this.loadingChanged = index.createEvent(this, "loadingChanged", 7);
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
    toast;
    loadingChanged;
    sidebar;
    dateRefs = [];
    // private allRoomTypes: SelectedRooms[] = [];
    reloadInterceptor;
    minDate = moment.hooks().format('YYYY-MM-DD');
    bookingService = new booking_service.BookingService();
    getDayIndex(dateStr) {
        return moment.hooks(dateStr, 'YYYY-MM-DD').day();
    }
    datesSchema = index$1.z.array(index$1.z.object({
        from: index$1.z
            .any()
            .refine((val) => moment.hooks.isMoment(val), {
            message: "Invalid 'from' date; expected a Moment object.",
        })
            .transform((val) => val.format('YYYY-MM-DD')),
        to: index$1.z
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
            this.toast.emit({
                type: 'success',
                title: locales_store.locales.entries.Lcz_RequestSubmittedSuccessfully,
                description: '',
            });
            this.loadingChanged.emit(false);
            this.closeDrawer.emit();
        }
        catch (error) {
            console.log(error);
            if (error instanceof index$1.ZodError) {
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
        return (index.h("form", { key: 'f897beb412beb043c9ec204fd7c8a75f36b083b4', id: this.formId, class: 'bulk-sheet-container', onSubmit: e => {
                e.preventDefault();
                this.addBlockDates();
            } }, index.h("div", { key: '7d49e37b72bc596d59b5eb2d9be379989c1343ce', class: "sheet-body px-1" }, index.h("div", { key: '59103ae35aa475cfc0bfac4e77edb12fd6fd96f2', class: "text-muted text-left py-0 my-0" }, index.h("p", { key: 'aca75c7d3cdfab9916148a10cb7ec43258f4a717' }, "Select the types to stop or open sales for all related rate plans")), index.h("div", { key: '7d0be7a3a3a65d1ca9531950a9c0e850c58bd19a' }, this.errors === 'rooms' && (index.h("p", { key: 'be117def38bc78ab41733f46772a4d54b4fd19b6', class: 'text-danger text-left smaller p-0 ', style: { 'margin-bottom': '0.5rem' } }, calendarData.calendar_data.is_vacation_rental ? locales_store.locales.entries.Lcz_PlzSelectOneListing : locales_store.locales.entries.Lcz_PlzSelectOneUnit)), index.h("table", { key: 'f9e2682264a0d47dd0a4a804fe79f0db1901329d', ref: el => (this.unitSections = el) }, index.h("thead", { key: '6a8d83640bf66c35c2ee4abb55b47099d62244ca' }, index.h("tr", { key: 'd428488db8d3e699c79f2328d20e02dcd54ef18e' }, index.h("th", { key: '3050fca5f5ed8d1dbf3528a20198493eb2aa6304', class: "sr-only" }, "choice"), index.h("th", { key: '0612dc791bb853f162216ea3045d24cc29c29f24', class: "sr-only" }, "room type"))), index.h("tbody", { key: '27d32c7d51a441420f79386017f543de235c9e0b' }, calendarData.calendar_data.roomsInfo.map((roomType, i) => {
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
                }, size: "small", placeholder: `${locales_store.locales.entries.Lcz_Select}...` }, index.h("wa-option", { value: "open" }, locales_store.locales.entries.Lcz_Open), index.h("wa-option", { value: "closed" }, locales_store.locales.entries.Lcz_StopSale)))), index.h("td", { class: `pl-1 text-left ${row_style}` }, roomType.name)));
        })))), index.h("p", { key: '89f30d61b3138afcf35402b796048f5f88ca6a64', class: "text-left mt-2 text-muted" }, "Included days"), this.errors === 'weekdays' && index.h("p", { key: '55dab40d960680a8bddbf6d308d432d4df482861', class: 'text-danger text-left smaller m-0 p-0' }, "Please select at least one day"), index.h("ir-weekday-selector", { key: '6df0bda8de2738020142ab70466bb09fb30094c8', ref: el => (this.weekdaysSections = el), weekdays: Array.from(this.selectedWeekdays), onWeekdayChange: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.selectedWeekdays = new Set(e.detail);
            } }), index.h("table", { key: '57987e2e1f872781c8beb66257b26d740d99a835', class: "mt-1", ref: el => (this.datesSections = el) }, index.h("thead", { key: 'c3ba3bb5387aa030f0110604e49b7db2df449725' }, index.h("tr", { key: '09510bad03a796451171ee6fc2dcf10e4fcd72bc' }, index.h("td", { key: '1bcb79cc1df3e326691bf351233aaa526479fef0', class: "text-left bulk-stop-sale__date-label" }, locales_store.locales.entries.Lcz_From), index.h("td", { key: '909b631a5168e78e20ffa1e3fcf0a5c1c09732e2', class: "text-left bulk-stop-sale__date-label" }, locales_store.locales.entries.Lcz_ToExclusive), index.h("td", { key: 'a391142116b29853415376c7afefc6d99686c4cb' }, this.dates.length !== this.maxDatesLength && (index.h("ir-custom-button", { key: '6e0f0c45aaba59780c46fb670876d674856e5460', appearance: "plain", variant: "neutral", onClickHandler: () => {
                this.addDateRow();
            } }, index.h("wa-icon", { key: '8ba9707794e13c4c32a544d840c0428a82aa237f', name: "plus", style: { fontSize: '1.2rem' } })))))), index.h("tbody", { key: '03d0bfb5b6195cfe3b6e0d562f546ab4178eee47' }, this.dates.map((d, i) => {
            if (!this.dateRefs[i]) {
                this.dateRefs[i] = {};
            }
            const fromDateMinDate = i > 0 ? this.dates[i - 1]?.to.clone().add(1, 'days')?.format('YYYY-MM-DD') ?? this.minDate : this.minDate;
            const toDateMinDate = this.dates[i].from ? this.dates[i]?.from.clone()?.format('YYYY-MM-DD') : this.minDate;
            return (index.h("tr", { key: `date_${i}` }, index.h("td", { class: "pr-1 pb-1" }, index.h("ir-custom-date-picker", { ref: el => {
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
                } })), index.h("td", { class: "pr-1 pb-1" }, index.h("ir-custom-date-picker", { forceDestroyOnUpdate: true, disabled: !d.from, ref: el => {
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
                } })), i > 0 && (index.h("td", { class: "pb-1" }, index.h("ir-custom-button", { appearance: "plain", variant: "neutral", onClickHandler: () => {
                    this.dates = this.dates.filter((_, j) => j !== i);
                } }, index.h("wa-icon", { name: "minus", style: { fontSize: '1.2rem' } }))))));
        }))))));
    }
};
IglBulkStopSale.style = IglBulkStopSaleStyle0 + IglBulkStopSaleStyle1;

const irWeekdaySelectorCss = ".sc-ir-weekday-selector-h{display:block}.days-checkbox.sc-ir-weekday-selector{gap:0.5rem}";
const IrWeekdaySelectorStyle0 = irWeekdaySelectorCss;

const IrWeekdaySelector = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.weekdayChange = index.createEvent(this, "weekdayChange", 7);
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
        return (index.h(index.Host, { key: '683372c50f0e39db49acedabf989bfc198f79e4d', class: "my-1 d-flex align-items-center", style: { gap: '1.1rem' } }, this._weekdays.map(w => (index.h("wa-checkbox", { checked: this.selectedWeekdays.has(w.value), defaultChecked: this.selectedWeekdays.has(w.value), onchange: e => this.toggleWeekDays({ checked: e.target.checked, weekDay: w.value }) }, w.label)))));
    }
    static get watchers() { return {
        "weekdays": ["handleWeekdayChange"]
    }; }
};
IrWeekdaySelector.style = IrWeekdaySelectorStyle0;

exports.igl_bulk_block = IglBulkBlock;
exports.igl_bulk_stop_sale = IglBulkStopSale;
exports.ir_weekday_selector = IrWeekdaySelector;

//# sourceMappingURL=igl-bulk-block_3.cjs.entry.js.map