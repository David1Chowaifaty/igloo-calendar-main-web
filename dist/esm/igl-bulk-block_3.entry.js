import { r as registerInstance, c as createEvent, h, F as Fragment, H as Host } from './index-Nexq2OjX.js';
import { B as BookingService } from './booking.store-CvDLuSL3.js';
import { c as calendar_data } from './calendar-data-CPCc-_Kx.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import { l as libExports } from './index-DeW5X45W.js';
import { l as locales } from './locales.store-flvFxs7J.js';
import { k as showToast } from './utils-CRe_zSvY.js';
import { e as calendar_dates } from './booking-D8tDiK7e.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './index-BX-r5OtJ.js';
import './type-D7rOPtKA.js';

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
        registerInstance(this, hostRef);
        this.closeDrawer = createEvent(this, "closeDrawer");
        this.loadingChanged = createEvent(this, "loadingChanged");
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
    minDate = hooks().format('YYYY-MM-DD');
    bookingService = new BookingService();
    datesSchema = libExports.z.array(libExports.z.object({
        from: libExports.z
            .any()
            .refine((val) => hooks.isMoment(val), {
            message: "Invalid 'from' date; expected a Moment object.",
        })
            .transform((val) => val.format('YYYY-MM-DD')),
        to: libExports.z
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
            showToast({
                type: 'success',
                title: locales.entries.Lcz_RequestSubmittedSuccessfully,
                description: '',
            });
            this.loadingChanged.emit(false);
            this.closeDrawer.emit();
        }
        catch (error) {
            console.log(error);
            if (error instanceof libExports.ZodError) {
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
        return (h("form", { key: 'f8215fb146f0e5b6d8af2c92fd0c2aaeede1af7b', id: this.formId, class: "igl-bulk-block__form", onSubmit: e => {
                e.preventDefault();
                this.addBlockDates();
            } }, h("wa-radio-group", { key: '8f282bf4fd0b319fab56c5f64af375f449177cd8', size: "s", label: "Block or unblock a unit", orientation: "horizontal", name: "action" }, h("wa-radio", { key: '3b50f028520d1be121be171f29bd9677f299a798', style: { flex: '1 1 0%' }, appearance: "button", value: "block" }, "Block"), h("wa-radio", { key: 'ecf865b711b4c7d566d1a3467fad594e027bbf8f', style: { flex: '1 1 0%' }, appearance: "button", value: "unblock" }, "Unblock")), h("div", { key: '8d1bb3572b43ce2026a0fdea0275ca4ade5d214a' }, this.errors === 'rooms' && (h("p", { key: 'c076c294026c5b1945f61c767369d3713550d93f', class: "igl-bulk-block__error" }, calendar_data.is_vacation_rental ? locales.entries.Lcz_PlzSelectOneListing : locales.entries.Lcz_PlzSelectOneUnit)), h("wa-radio-group", { key: 'cb798093e50fbab60d3a194be8e93a7c1a317335', name: "unit", ref: el => (this.unitSections = el), onchange: e => {
                const [roomtypeId, unitId] = e.target.value?.toString().split('-');
                this.selectedUnit = {
                    roomtype_id: roomtypeId,
                    unit_id: unitId,
                };
            } }, calendar_data.roomsInfo.map(roomType => {
            return (h(Fragment, null, h("div", { key: `roomTypeRow-${roomType.id}`, class: "igl-bulk-block__roomtype-row" }, h("div", { class: "igl-bulk-block__roomtype-choice" }, h("span", { class: "igl-bulk-block__roomtype-name" }, roomType.name))), roomType.physicalrooms.map((room, j) => {
                const rowStyle = j === roomType.physicalrooms.length - 1 ? 'igl-bulk-block__unit-row--last' : '';
                return (h("div", { key: `physicalRoom-${room.id}-${j}`, class: `igl-bulk-block__unit-row ${rowStyle}` }, h("div", { class: "igl-bulk-block__unit-choice" }, h("wa-radio", { value: `${roomType.id}-${room.id}`, "data-roomtype": roomType.id, checked: this.selectedUnit?.unit_id === room.id }, room.name))));
            })));
        }))), h("table", { key: '360a01289f665a3bc55962158677c69fd74795b7', class: "igl-bulk-block__dates-table", ref: el => (this.datesSections = el) }, h("thead", { key: 'ab0cc46d1e0a8a3ee4aa40a53eee6db9d40c00f9' }, h("tr", { key: '8d5bd093b022c6785514cb69ba373d833814daa5' }, h("td", { key: 'ba78db41f144aeb1d04ef8cd4d0a3273294e0488', class: "igl-bulk-block__dates-header" }, locales.entries.Lcz_From), h("td", { key: '1f076e1f9cde4558d45aa95730d3df6c0ab084fe', class: "igl-bulk-block__dates-header" }, locales.entries.Lcz_ToExclusive), h("td", { key: 'bb39faaf7dd64ad74a3c2897b8c4116ee22d4f0d' }, this.dates.length !== this.maxDatesLength && this.blockState === 'block' && (h("ir-custom-button", { key: 'a560f87e5aa187cbfd60133e6a8e27bfd40b5a5b', appearance: "plain", variant: "neutral", onClickHandler: () => {
                this.addDateRow();
            } }, h("wa-icon", { key: '6eaa08763c91716cb75b9497f669c898b6abf467', name: "plus", style: { fontSize: '1.2rem' } })))))), h("tbody", { key: 'ec4789632f6681001ef25b5d64f3579454150a12' }, this.dates.map((d, i) => {
            if (!this.dateRefs[i]) {
                this.dateRefs[i] = {};
            }
            const fromDateMinDate = i > 0 ? (this.dates[i - 1]?.to.clone().add(1, 'days')?.format('YYYY-MM-DD') ?? this.minDate) : this.minDate;
            const toDateMinDate = this.dates[i].from ? this.dates[i]?.from.clone().add(1, 'days')?.format('YYYY-MM-DD') : this.minDate;
            return (h("tr", { key: `date_${i}` }, h("td", { class: "igl-bulk-block__date-cell" }, h("ir-date-select", { ref: el => {
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
                } })), h("td", { class: "igl-bulk-block__date-cell" }, h("ir-date-select", { forceDestroyOnUpdate: true, disabled: !d.from, ref: el => {
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
                        this.dateRefs[index]?.from?.show();
                        return;
                    }
                    if (!this.dates[index]?.to) {
                        this.dateRefs[index].to.show();
                    }
                } })), i > 0 && (h("td", { class: "igl-bulk-block__date-action-cell" }, h("ir-custom-button", { appearance: "plain", variant: "neutral", onClickHandler: () => {
                    this.dates = this.dates.filter((_, j) => j !== i);
                } }, h("wa-icon", { name: "minus", style: { fontSize: '1.2rem' } }))))));
        })))));
    }
};
IglBulkBlock.style = iglBulkBlockCss();

const iglBulkStopSaleCss = () => `.sc-igl-bulk-stop-sale-h{display:flex;flex-direction:column;flex:1 1 0%;height:100%}.bulk-sheet-container.sc-igl-bulk-stop-sale{display:flex;flex-direction:column;flex:1;min-height:0;gap:1rem}.animated-container.sc-igl-bulk-stop-sale{transition:all 0.5s ease}.days-checkbox.sc-igl-bulk-stop-sale{gap:0.5rem}.bulk-stop-sale__date-label.sc-igl-bulk-stop-sale{font-size:0.857rem;color:var(--wa-form-control-label-color);font-weight:var(--wa-form-control-label-font-weight);line-height:var(--wa-form-control-label-line-height)}`;

const sheetCss = () => `.sc-igl-bulk-stop-sale-h{height:100%}.sheet-container.sc-igl-bulk-stop-sale{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-igl-bulk-stop-sale{height:-webkit-fill-available;height:100vh;height:100dvh}.sheet-footer.sc-igl-bulk-stop-sale{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-igl-bulk-stop-sale{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-igl-bulk-stop-sale{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-igl-bulk-stop-sale{flex-direction:row;align-items:center}}`;

const IglBulkStopSale = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeDrawer = createEvent(this, "closeDrawer");
        this.loadingChanged = createEvent(this, "loadingChanged");
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
    minDate = hooks().format('YYYY-MM-DD');
    bookingService = new BookingService();
    getDayIndex(dateStr) {
        return hooks(dateStr, 'YYYY-MM-DD').day();
    }
    datesSchema = libExports.z.array(libExports.z.object({
        from: libExports.z
            .any()
            .refine((val) => hooks.isMoment(val), {
            message: "Invalid 'from' date; expected a Moment object.",
        })
            .transform((val) => val.format('YYYY-MM-DD')),
        to: libExports.z
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
            showToast({
                type: 'success',
                title: locales.entries.Lcz_RequestSubmittedSuccessfully,
                description: '',
            });
            this.loadingChanged.emit(false);
            this.closeDrawer.emit();
        }
        catch (error) {
            console.log(error);
            if (error instanceof libExports.ZodError) {
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
        return (h("form", { key: '8af99983321c2476cc3a07a8284defaaa8e91f0c', id: this.formId, class: 'bulk-sheet-container', onSubmit: e => {
                e.preventDefault();
                this.addBlockDates();
            } }, h("div", { key: 'e4e83bcf38f81817e325dd1959038969e93f7207', class: "sheet-body px-1" }, h("div", { key: '760645ded41b9d63f81150e33a7b30d63e18aacc', class: "text-muted text-left py-0 my-0" }, h("p", { key: 'e84afafe8356bfc9c4d1e8d29cdd227f92f1c2e1' }, "Select the types to stop or open sales for all related rate plans")), h("div", { key: 'e8b40dcf58bb124a8ce8de44feb1203a27f492f6' }, this.errors === 'rooms' && (h("p", { key: '5b7e05f73f3d1582582cf61448ee732712efa0eb', class: 'text-danger text-left smaller p-0 ', style: { 'margin-bottom': '0.5rem' } }, calendar_data.is_vacation_rental ? locales.entries.Lcz_PlzSelectOneListing : locales.entries.Lcz_PlzSelectOneUnit)), h("table", { key: '81390f7ee75411b86ebaeb5941bef7154fa07758', ref: el => (this.unitSections = el) }, h("thead", { key: 'd0792a6a01eabd6e541cdd8d72c4f8745e80b6d6' }, h("tr", { key: '290988f98c21d667522e341267f7cee00fa0cbd4' }, h("th", { key: '924c9231faa8b61bf97dd42efd555c027adad5e0', class: "sr-only" }, "choice"), h("th", { key: '63a6c1462a2167706ee304087c3b08c772681174', class: "sr-only" }, "room type"))), h("tbody", { key: '242071b31ea7e306c208d12607872055c5dacb01' }, calendar_data.roomsInfo.map((roomType, i) => {
            const row_style = i === calendar_data.roomsInfo.length - 1 ? '' : 'pb-1';
            return (h("tr", { key: roomType.id }, h("td", { class: `choice-row ${row_style}` }, h("div", { class: 'd-flex justify-content-end' }, h("wa-select", { onchange: e => {
                    const { value } = e.target;
                    const choice = value;
                    // drop any existing entry for this roomType
                    const rest = this.selectedRoomTypes.filter(entry => entry.id !== roomType.id);
                    // if they actually picked something, append it
                    if (choice) {
                        rest.push({ id: roomType.id, result: choice });
                    }
                    this.selectedRoomTypes = rest;
                }, size: "s", placeholder: `${locales.entries.Lcz_Select}...` }, h("wa-option", { value: "open" }, locales.entries.Lcz_Open), h("wa-option", { value: "closed" }, locales.entries.Lcz_StopSale)))), h("td", { class: `pl-1 text-left ${row_style}` }, roomType.name)));
        })))), h("p", { key: '2bd1b774454f3510ba6fd2d5c03f17d59f57fb55', class: "text-left mt-2 text-muted" }, "Included days"), this.errors === 'weekdays' && h("p", { key: 'fb1237d03da01a2b0174168be7a76255acf0162f', class: 'text-danger text-left smaller m-0 p-0' }, "Please select at least one day"), h("ir-weekday-selector", { key: '629f8a5dd7a974125bd36d779081e07588a2fef8', ref: el => (this.weekdaysSections = el), weekdays: Array.from(this.selectedWeekdays), onWeekdayChange: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.selectedWeekdays = new Set(e.detail);
            } }), h("table", { key: 'c47a1842866873458dab920325be5ca2f0de5156', class: "mt-1", ref: el => (this.datesSections = el) }, h("thead", { key: 'd685f922c18b85e5dbae00316ac8c8af7f3d35d4' }, h("tr", { key: '32a52b0071f1b59a491645349b3a05d224ef7acb' }, h("td", { key: 'b363c6e69998da15ab213dcb6c740883dfc1246c', class: "text-left bulk-stop-sale__date-label" }, locales.entries.Lcz_From), h("td", { key: '4b6c1f58ac4886c65159183f248d2975d7ce0c14', class: "text-left bulk-stop-sale__date-label" }, locales.entries.Lcz_ToExclusive), h("td", { key: '6dbf677fe76539f7977720db91e0af01f3ee73c7' }, this.dates.length !== this.maxDatesLength && (h("ir-custom-button", { key: 'f935ccb23a5ab9fb8e45365cfcec027949c0a8fa', appearance: "plain", variant: "neutral", onClickHandler: () => {
                this.addDateRow();
            } }, h("wa-icon", { key: 'cdfa79a4dbe81eda7f09a9b81197269a4fc620d2', name: "plus", style: { fontSize: '1.2rem' } })))))), h("tbody", { key: 'ca570366568cacd8968e1b4d2dfd43797c0a922e' }, this.dates.map((d, i) => {
            if (!this.dateRefs[i]) {
                this.dateRefs[i] = {};
            }
            const fromDateMinDate = i > 0 ? (this.dates[i - 1]?.to.clone().add(1, 'days')?.format('YYYY-MM-DD') ?? this.minDate) : this.minDate;
            const toDateMinDate = this.dates[i].from ? this.dates[i]?.from.clone()?.format('YYYY-MM-DD') : this.minDate;
            return (h("tr", { key: `date_${i}` }, h("td", { class: "pr-1 pb-1" }, h("ir-date-select", { ref: el => {
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
                } })), h("td", { class: "pr-1 pb-1" }, h("ir-date-select", { forceDestroyOnUpdate: true, disabled: !d.from, ref: el => {
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
                } })), i > 0 && (h("td", { class: "pb-1" }, h("ir-custom-button", { appearance: "plain", variant: "neutral", onClickHandler: () => {
                    this.dates = this.dates.filter((_, j) => j !== i);
                } }, h("wa-icon", { name: "minus", style: { fontSize: '1.2rem' } }))))));
        }))))));
    }
};
IglBulkStopSale.style = iglBulkStopSaleCss() + sheetCss();

const irWeekdaySelectorCss = () => `.sc-ir-weekday-selector-h{display:block}.days-checkbox.sc-ir-weekday-selector{gap:0.5rem}`;

const IrWeekdaySelector = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.weekdayChange = createEvent(this, "weekdayChange");
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
        return (h(Host, { key: '79bdb6961ce758cddc36089dfbbf23207f9688ef', class: "my-1 d-flex align-items-center", style: { gap: '1.1rem' } }, this._weekdays.map(w => (h("wa-checkbox", { checked: this.selectedWeekdays.has(w.value), defaultChecked: this.selectedWeekdays.has(w.value), onchange: e => this.toggleWeekDays({ checked: e.target.checked, weekDay: w.value }) }, w.label)))));
    }
    static get watchers() { return {
        "weekdays": [{
                "handleWeekdayChange": 0
            }]
    }; }
};
IrWeekdaySelector.style = irWeekdaySelectorCss();

export { IglBulkBlock as igl_bulk_block, IglBulkStopSale as igl_bulk_stop_sale, IrWeekdaySelector as ir_weekday_selector };
