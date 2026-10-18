'use strict';

var index = require('./index-IDeZZwEK.js');
var booking_service = require('./booking.service-BdID4BlA.js');
var calendarData = require('./calendar-data-ShS6b-Ns.js');
var moment = require('./moment-CdViwxPQ.js');
var t = require('./t-CqJPQrfm.js');
var utils = require('./utils-ZKsQb8eV.js');
var types = require('./types-BVJQZ50e.js');
var booking = require('./booking-DhSfYcY7.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./IBooking-hDE_y33g.js');
require('./calendar-dates-BxDGM1ix.js');
require('./commonSchemas-D4iFLV5-.js');
require('./locale-scope-Cch-vf1R.js');
require('./booking.dto-CUSvGTvD.js');
require('./type-Bj2x9EWc.js');
require('./ir-date-CbkOKs2C.js');
require('./language-observer-DKp37LIu.js');
require('./functions-CaNAUyCw.js');

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

const iglBulkBlockCss = () => `.sc-igl-bulk-block-h{display:flex;flex-direction:column;flex:1 1 0%;height:100%}.igl-bulk-block__form.sc-igl-bulk-block{display:flex;flex-direction:column;flex:1;min-height:0;gap:1rem;padding:0 1.5rem}.igl-bulk-block__action-row.sc-igl-bulk-block{display:flex;align-items:center;gap:0.5rem;padding-top:0;padding-bottom:0.25rem;color:var(--wa-color-neutral-60)}.igl-bulk-block__action-label.sc-igl-bulk-block{margin:0;padding:0;color:inherit}.igl-bulk-block__error.sc-igl-bulk-block{margin:0 0 0.5rem 0;padding:0;color:var(--wa-color-danger-60, #d64545);font-size:0.85rem;text-align:start}.igl-bulk-block__roomtype-row.sc-igl-bulk-block,.igl-bulk-block__unit-row.sc-igl-bulk-block{list-style:none}.igl-bulk-block__roomtype-name.sc-igl-bulk-block{margin-block:0.5rem}.igl-bulk-block__roomtype-choice.sc-igl-bulk-block,.igl-bulk-block__unit-choice.sc-igl-bulk-block{display:flex;align-items:center;gap:0.5rem}.igl-bulk-block__roomtype-name.sc-igl-bulk-block{text-align:start}.igl-bulk-block__unit-row.sc-igl-bulk-block{margin-inline-start:1rem}.igl-bulk-block__unit-row--last.sc-igl-bulk-block{padding-bottom:0.25rem}.igl-bulk-block__dates-table.sc-igl-bulk-block{width:100%;border-collapse:collapse}.igl-bulk-block__date-cell.sc-igl-bulk-block{padding:0 0.5rem 0.5rem 0}.igl-bulk-block__date-action-cell.sc-igl-bulk-block{padding-bottom:0.5rem}.igl-bulk-block__dates-header.sc-igl-bulk-block{text-align:start;font-size:0.857rem;color:var(--wa-form-control-label-color);font-weight:var(--wa-form-control-label-font-weight);line-height:var(--wa-form-control-label-line-height)}`;

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
    bookingService = new booking_service.BookingService();
    datesSchema = types.arrayType(types.objectType({
        from: types.anyType()
            .refine((val) => moment.hooks.isMoment(val), {
            message: "Invalid 'from' date; expected a Moment object.",
        })
            .transform((val) => val.format('YYYY-MM-DD')),
        to: types.anyType()
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
                title: t.t('Lcz_RequestSubmittedSuccessfully'),
                description: '',
            });
            this.loadingChanged.emit(false);
            this.closeDrawer.emit();
        }
        catch (error) {
            console.log(error);
            if (error instanceof types.ZodError) {
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
        return (index.h("form", { key: '0a7ea73f5d785819c14497d53b7364348024e387', id: this.formId, class: "igl-bulk-block__form", onSubmit: e => {
                e.preventDefault();
                this.addBlockDates();
            } }, index.h("wa-radio-group", { key: 'b6f748a6da7dd4c2d2c83bf59812f8010784d5a6', size: "s", label: t.t('Lcz_BlockOrUnblockAUnit', { fallback: 'Block or unblock a unit' }), orientation: "horizontal", name: "action" }, index.h("wa-radio", { key: '12acf82b9ca5127f81cffa4f69f3548f1d6c0613', style: { flex: '1 1 0%' }, appearance: "button", value: "block" }, t.t('Lcz_Block', { fallback: 'Block' })), index.h("wa-radio", { key: '1810bb8a95fc95c0bc75da6002de86b61829afec', style: { flex: '1 1 0%' }, appearance: "button", value: "unblock" }, t.t('Lcz_Unblock', { fallback: 'Unblock' }))), index.h("div", { key: '5512a27624e22b674d9b9b7ac02395488681adc7' }, this.errors === 'rooms' && index.h("p", { key: '1b2e1a347ce4a7ec19fb592b466fbf9d7b10724d', class: "igl-bulk-block__error" }, calendarData.calendar_data.is_vacation_rental ? t.t('Lcz_PlzSelectOneListing') : t.t('Lcz_PlzSelectOneUnit')), index.h("wa-radio-group", { key: 'f9691edbe3fb081382afcbcc442ffb7f5416ad01', name: "unit", ref: el => (this.unitSections = el), onchange: e => {
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
        }))), index.h("table", { key: '61ae776b131f392ebd66ed45f6f71f7b5a54570b', class: "igl-bulk-block__dates-table", ref: el => (this.datesSections = el) }, index.h("thead", { key: '85af40ff35bfd7737ba78a63dce1e1b1172771da' }, index.h("tr", { key: '169fc8193d2ddedd1a5686a6eba47022c3efd4ed' }, index.h("td", { key: '3b59ffdb686b496257a0ac0e865702d98b791177', class: "igl-bulk-block__dates-header" }, t.t('Lcz_From', { fallback: 'From' })), index.h("td", { key: '5095a5096cfbadc68af5f8e8c6690856cfba2906', class: "igl-bulk-block__dates-header" }, t.t('Lcz_ToExclusive')), index.h("td", { key: '00d32c0cff348e54262795d6d4aaed584489910f' }, this.dates.length !== this.maxDatesLength && this.blockState === 'block' && (index.h("ir-custom-button", { key: '8928b593b57118daf1e78fc6af03e72d8227d568', appearance: "plain", variant: "neutral", onClickHandler: () => {
                this.addDateRow();
            } }, index.h("wa-icon", { key: '9f0b9c79d2caa14bf7f23ecad19969a71d38f428', name: "plus", style: { fontSize: '1.2rem' } })))))), index.h("tbody", { key: '357f3d39e494e9652ca9fb3a72e04bd663606e66' }, this.dates.map((d, i) => {
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

const iglBulkStopSaleCss = () => `.sc-igl-bulk-stop-sale-h{display:flex;flex-direction:column;flex:1 1 0%;height:100%;text-align:start;padding-inline:var(--spacing)}.bulk-sheet-container.sc-igl-bulk-stop-sale{display:flex;flex-direction:column;flex:1;min-height:0;gap:var(--wa-space-m)}.animated-container.sc-igl-bulk-stop-sale{transition:all 0.5s ease}.days-checkbox.sc-igl-bulk-stop-sale{gap:0.5rem}.bulk-stop-sale__date-label.sc-igl-bulk-stop-sale{font-size:0.857rem;color:var(--wa-form-control-label-color);font-weight:var(--wa-form-control-label-font-weight);line-height:var(--wa-form-control-label-line-height)}.bulk-stop-sale__intro.sc-igl-bulk-stop-sale{color:var(--wa-color-neutral-60);padding-block:0;margin-block:0}.bulk-stop-sale__error.sc-igl-bulk-stop-sale{color:var(--wa-color-danger-60, #d64545);font-size:0.85rem;padding:0;margin:0}.bulk-stop-sale__error--spaced.sc-igl-bulk-stop-sale{margin-block-end:var(--wa-space-xs)}.bulk-stop-sale__choice-cell.sc-igl-bulk-stop-sale{display:flex;justify-content:flex-end}.bulk-stop-sale__name-td.sc-igl-bulk-stop-sale{padding-inline-start:var(--wa-space-m)}.bulk-stop-sale__cell--spaced.sc-igl-bulk-stop-sale{padding-block-end:var(--wa-space-2xs)}.bulk-stop-sale__section-label.sc-igl-bulk-stop-sale{margin-block-start:var(--wa-space-xs);color:var(--wa-color-neutral-60)}.bulk-stop-sale__dates-table.sc-igl-bulk-stop-sale{margin-block-start:var(--wa-space-2xs)}.bulk-stop-sale__date-cell.sc-igl-bulk-stop-sale{padding-inline-end:var(--wa-space-m);padding-block-end:var(--wa-space-xs)}.bulk-stop-sale__date-action-cell.sc-igl-bulk-stop-sale{padding-block-end:var(--wa-space-2xs)}.sr-only.sc-igl-bulk-stop-sale{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border-width:0}`;

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
    bookingService = new booking_service.BookingService();
    getDayIndex(dateStr) {
        return moment.hooks(dateStr, 'YYYY-MM-DD').day();
    }
    datesSchema = types.arrayType(types.objectType({
        from: types.anyType()
            .refine((val) => moment.hooks.isMoment(val), {
            message: "Invalid 'from' date; expected a Moment object.",
        })
            .transform((val) => val.format('YYYY-MM-DD')),
        to: types.anyType()
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
                title: t.t('Lcz_RequestSubmittedSuccessfully'),
                description: '',
            });
            this.loadingChanged.emit(false);
            this.closeDrawer.emit();
        }
        catch (error) {
            console.log(error);
            if (error instanceof types.ZodError) {
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
        return (index.h("form", { key: '4af94ce6d33aba136041ee1e3c520880d29fb115', id: this.formId, class: 'bulk-sheet-container', onSubmit: e => {
                e.preventDefault();
                this.addBlockDates();
            } }, index.h("div", { key: 'cfd1c0528b268f032c42164210a3433e54e88a81', class: "sheet-body bulk-stop-sale__body" }, index.h("div", { key: 'd2d0e119a735b462d9f9152973f4ee6983a804e7', class: "bulk-stop-sale__intro" }, index.h("p", { key: 'e94fc433e73631b760908df585b9dea96a0cf470' }, t.t('Lcz_SelectTypesToStopOrOpenSale', { fallback: 'Select the types to stop or open sales for all related rate plans' }))), index.h("div", { key: '7142b9f3f498d2a18663db3916004a73601ebd03' }, this.errors === 'rooms' && (index.h("p", { key: '7719c9e2cf5b63ff0d148fe7192355c317b31896', class: "bulk-stop-sale__error bulk-stop-sale__error--spaced" }, calendarData.calendar_data.is_vacation_rental ? t.t('Lcz_PlzSelectOneListing') : t.t('Lcz_PlzSelectOneUnit'))), index.h("table", { key: '9e876a8bcd232b98a4b5e84b2154cfabdace44b2', ref: el => (this.unitSections = el) }, index.h("thead", { key: '9c75ea7b809d7b0d76644e6a0d5ca000f9f9b031' }, index.h("tr", { key: '7fc41a463c06a384ac08cd336ac599f65aaa8c07' }, index.h("th", { key: '5f1f37bb6ba1453781cdfe05cd68f91a4cc8fed9', class: "sr-only" }, t.t('Lcz_Choice', { fallback: 'choice' })), index.h("th", { key: '1aac5dff6714338ffe5a573741eb4e0bc2611c5c', class: "sr-only" }, t.t('Lcz_RoomType', { fallback: 'room type' })))), index.h("tbody", { key: 'b4b0eec65f05d8fa78279a761b006a1d08003bd3' }, calendarData.calendar_data.roomsInfo.map((roomType, i) => {
            const isLastRoom = i === calendarData.calendar_data.roomsInfo.length - 1;
            return (index.h("tr", { key: roomType.id }, index.h("td", { class: { 'bulk-stop-sale__cell--spaced': !isLastRoom } }, index.h("div", { class: "bulk-stop-sale__choice-cell" }, index.h("wa-select", { onchange: e => {
                    const { value } = e.target;
                    const choice = value;
                    // drop any existing entry for this roomType
                    const rest = this.selectedRoomTypes.filter(entry => entry.id !== roomType.id);
                    // if they actually picked something, append it
                    if (choice) {
                        rest.push({ id: roomType.id, result: choice });
                    }
                    this.selectedRoomTypes = rest;
                }, size: "s", placeholder: `${t.t('Lcz_Select', { fallback: 'Select' })}...` }, index.h("wa-option", { value: "open" }, t.t('Lcz_Open')), index.h("wa-option", { value: "closed" }, t.t('Lcz_StopSale'))))), index.h("td", { class: { 'bulk-stop-sale__name-td': true, 'bulk-stop-sale__cell--spaced': !isLastRoom } }, roomType.name)));
        })))), index.h("p", { key: '06d318d903cfdfc730519632270f8e65f26806d2', class: "bulk-stop-sale__section-label" }, t.t('Lcz_IncludedDays', { fallback: 'Included days' })), this.errors === 'weekdays' && index.h("p", { key: 'f0abd19b08aff29337bbcccabb8adb0685919ac1', class: "bulk-stop-sale__error" }, t.t('Lcz_PleaseSelectAtLeastOneDay', { fallback: 'Please select at least one day' })), index.h("ir-weekday-selector", { key: '23ec6d5a1e743d6035f2cc4cc7ea63ea6ac6ac61', ref: el => (this.weekdaysSections = el), weekdays: Array.from(this.selectedWeekdays), onWeekdayChange: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.selectedWeekdays = new Set(e.detail);
            } }), index.h("table", { key: '8d4024966c6bf57204daac8ff0e929885564921c', class: "bulk-stop-sale__dates-table", ref: el => (this.datesSections = el) }, index.h("thead", { key: 'fb526df7ba78ecd879bbc7f5d2ddb00616b5a37a' }, index.h("tr", { key: 'b6031e2a49bba860a71547a0e36a04236b5d092f' }, index.h("td", { key: '33c0e74eb13beb77b74405cee3b1fba5244aa818', class: "bulk-stop-sale__date-label" }, t.t('Lcz_From', { fallback: 'From' })), index.h("td", { key: '2a707a835632cf0908d9cf1ced3016f90ca93e5b', class: "bulk-stop-sale__date-label" }, t.t('Lcz_ToExclusive')), index.h("td", { key: '1b259f3d8e21090d88a14c0f3a69648e686ca13e' }, this.dates.length !== this.maxDatesLength && (index.h("ir-custom-button", { key: '1d4272a007b42140580ca35ca4ccd1ed0848c20a', appearance: "plain", variant: "neutral", onClickHandler: () => {
                this.addDateRow();
            } }, index.h("wa-icon", { key: '8d7388d48d47c3a3b9758c72b7375c264dc0beb7', name: "plus", style: { fontSize: '1.2rem' } })))))), index.h("tbody", { key: '3f97e49b0a4ce125353487652011b6dd4dc5d713' }, this.dates.map((d, i) => {
            if (!this.dateRefs[i]) {
                this.dateRefs[i] = {};
            }
            const fromDateMinDate = i > 0 ? (this.dates[i - 1]?.to.clone().add(1, 'days')?.format('YYYY-MM-DD') ?? this.minDate) : this.minDate;
            const toDateMinDate = this.dates[i].from ? this.dates[i]?.from.clone()?.format('YYYY-MM-DD') : this.minDate;
            return (index.h("tr", { key: `date_${i}` }, index.h("td", { class: "bulk-stop-sale__date-cell" }, index.h("ir-date-select", { ref: el => {
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
                } })), index.h("td", { class: "bulk-stop-sale__date-cell" }, index.h("ir-date-select", { forceDestroyOnUpdate: true, disabled: !d.from, ref: el => {
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
                } })), i > 0 && (index.h("td", { class: "bulk-stop-sale__date-action-cell" }, index.h("ir-custom-button", { appearance: "plain", variant: "neutral", onClickHandler: () => {
                    this.dates = this.dates.filter((_, j) => j !== i);
                } }, index.h("wa-icon", { name: "minus", style: { fontSize: '1.2rem' } }))))));
        }))))));
    }
};
IglBulkStopSale.style = iglBulkStopSaleCss() + sheetCss();

exports.igl_bulk_block = IglBulkBlock;
exports.igl_bulk_stop_sale = IglBulkStopSale;
