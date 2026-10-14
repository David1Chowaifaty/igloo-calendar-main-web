import { r as registerInstance, c as createEvent, h, F as Fragment } from './index-DKZeCK8T.js';
import { B as BookingService } from './booking.service-Da_iCXks.js';
import { c as calendar_data } from './calendar-data-D8EnecFU.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import { t } from './t-DTGA0v_q.js';
import { h as showToast } from './utils-C5rtMj-W.js';
import { a as arrayType, o as objectType, g as anyType, Z as ZodError } from './types-CrHq6jOb.js';
import { c as calendar_dates } from './booking-CwvNpV9l.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './IBooking-BV3s3Tu5.js';
import './calendar-dates-D3hVfsrC.js';
import './commonSchemas-My88Vijq.js';
import './locales.store-DsOXxI8k.js';
import './booking.dto-DVIFh8qe.js';
import './type-W0yWfEBm.js';
import './ir-date-CdNwD9PM.js';
import './language-observer-CHgzsZkY.js';
import './functions-je-FdPG-.js';

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
    datesSchema = arrayType(objectType({
        from: anyType()
            .refine((val) => hooks.isMoment(val), {
            message: "Invalid 'from' date; expected a Moment object.",
        })
            .transform((val) => val.format('YYYY-MM-DD')),
        to: anyType()
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
                title: t('Lcz_RequestSubmittedSuccessfully'),
                description: '',
            });
            this.loadingChanged.emit(false);
            this.closeDrawer.emit();
        }
        catch (error) {
            console.log(error);
            if (error instanceof ZodError) {
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
        return (h("form", { key: '7dcb0d049376adb2a0ac48750d4e723b9d720f45', id: this.formId, class: "igl-bulk-block__form", onSubmit: e => {
                e.preventDefault();
                this.addBlockDates();
            } }, h("wa-radio-group", { key: 'ec8cff3dbdf422f8595f2042a2d80293b186be80', size: "s", label: t('Lcz_BlockOrUnblockAUnit', { fallback: 'Block or unblock a unit' }), orientation: "horizontal", name: "action" }, h("wa-radio", { key: '22ea6c63f114dcd7950d9bb599f9ab61f8b02e90', style: { flex: '1 1 0%' }, appearance: "button", value: "block" }, t('Lcz_Block', { fallback: 'Block' })), h("wa-radio", { key: '871f3bbd4b727c4519a6d95819633e3be2e75265', style: { flex: '1 1 0%' }, appearance: "button", value: "unblock" }, t('Lcz_Unblock', { fallback: 'Unblock' }))), h("div", { key: '6cdfa1bf8ca5af7b895135fc1752d5b60c244228' }, this.errors === 'rooms' && h("p", { key: '93dff5c204e74f25a8e3085f3a1f8f0f2c5bfafa', class: "igl-bulk-block__error" }, calendar_data.is_vacation_rental ? t('Lcz_PlzSelectOneListing') : t('Lcz_PlzSelectOneUnit')), h("wa-radio-group", { key: '62b91ce3d56e21cd3fca0a658cd1fbd02eb001a3', name: "unit", ref: el => (this.unitSections = el), onchange: e => {
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
        }))), h("table", { key: '43cd67c2645e0fb649b123308b991295598f7315', class: "igl-bulk-block__dates-table", ref: el => (this.datesSections = el) }, h("thead", { key: 'f9d030322d7377e43a61e79d617ff263c82cfec9' }, h("tr", { key: 'e38d120a6247aea1c9235b85974e0000745eae31' }, h("td", { key: '358e98d4d424ed2cf3a8f1c18fdd91e3dee2b105', class: "igl-bulk-block__dates-header" }, t('Lcz_From', { fallback: 'From' })), h("td", { key: 'cf828d67f42cd78e046288ad9b0c687b18f1f818', class: "igl-bulk-block__dates-header" }, t('Lcz_ToExclusive')), h("td", { key: '58da95e2eece542c1938c4d77574acefe5a00fc7' }, this.dates.length !== this.maxDatesLength && this.blockState === 'block' && (h("ir-custom-button", { key: '99ce34eb560d5ae5e3e350bf35cd31dafe455ec0', appearance: "plain", variant: "neutral", onClickHandler: () => {
                this.addDateRow();
            } }, h("wa-icon", { key: '8f9a6501a91c7dcf8a80e0596e5a1025215c452b', name: "plus", style: { fontSize: '1.2rem' } })))))), h("tbody", { key: 'bd693ed9ce67645940584d618a751f0f7880b68e' }, this.dates.map((d, i) => {
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

const iglBulkStopSaleCss = () => `.sc-igl-bulk-stop-sale-h{display:flex;flex-direction:column;flex:1 1 0%;height:100%;text-align:start;padding-inline:var(--spacing)}.bulk-sheet-container.sc-igl-bulk-stop-sale{display:flex;flex-direction:column;flex:1;min-height:0;gap:var(--wa-space-m)}.animated-container.sc-igl-bulk-stop-sale{transition:all 0.5s ease}.days-checkbox.sc-igl-bulk-stop-sale{gap:0.5rem}.bulk-stop-sale__date-label.sc-igl-bulk-stop-sale{font-size:0.857rem;color:var(--wa-form-control-label-color);font-weight:var(--wa-form-control-label-font-weight);line-height:var(--wa-form-control-label-line-height)}.bulk-stop-sale__intro.sc-igl-bulk-stop-sale{color:var(--wa-color-neutral-60);padding-block:0;margin-block:0}.bulk-stop-sale__error.sc-igl-bulk-stop-sale{color:var(--wa-color-danger-60, #d64545);font-size:0.85rem;padding:0;margin:0}.bulk-stop-sale__error--spaced.sc-igl-bulk-stop-sale{margin-block-end:var(--wa-space-xs)}.bulk-stop-sale__choice-cell.sc-igl-bulk-stop-sale{display:flex;justify-content:flex-end}.bulk-stop-sale__name-td.sc-igl-bulk-stop-sale{padding-inline-start:var(--wa-space-m)}.bulk-stop-sale__cell--spaced.sc-igl-bulk-stop-sale{padding-block-end:var(--wa-space-2xs)}.bulk-stop-sale__section-label.sc-igl-bulk-stop-sale{margin-block-start:var(--wa-space-xs);color:var(--wa-color-neutral-60)}.bulk-stop-sale__dates-table.sc-igl-bulk-stop-sale{margin-block-start:var(--wa-space-2xs)}.bulk-stop-sale__date-cell.sc-igl-bulk-stop-sale{padding-inline-end:var(--wa-space-m);padding-block-end:var(--wa-space-xs)}.bulk-stop-sale__date-action-cell.sc-igl-bulk-stop-sale{padding-block-end:var(--wa-space-2xs)}.sr-only.sc-igl-bulk-stop-sale{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border-width:0}`;

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
    datesSchema = arrayType(objectType({
        from: anyType()
            .refine((val) => hooks.isMoment(val), {
            message: "Invalid 'from' date; expected a Moment object.",
        })
            .transform((val) => val.format('YYYY-MM-DD')),
        to: anyType()
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
                title: t('Lcz_RequestSubmittedSuccessfully'),
                description: '',
            });
            this.loadingChanged.emit(false);
            this.closeDrawer.emit();
        }
        catch (error) {
            console.log(error);
            if (error instanceof ZodError) {
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
        return (h("form", { key: '3a4d74b5e6f22bc3e50ef4ff2e37e9b0af88b2a4', id: this.formId, class: 'bulk-sheet-container', onSubmit: e => {
                e.preventDefault();
                this.addBlockDates();
            } }, h("div", { key: 'a5b7717694232213277e758a34f525c7197f67e6', class: "sheet-body bulk-stop-sale__body" }, h("div", { key: 'e4698b0b5ee859496b5da3c4ca59efb9c903ad7c', class: "bulk-stop-sale__intro" }, h("p", { key: 'da36f91c36a76dcc832c535f58af58bea4561a71' }, t('Lcz_SelectTypesToStopOrOpenSale', { fallback: 'Select the types to stop or open sales for all related rate plans' }))), h("div", { key: 'df02449737f324b98359b66f743c10066a0f680c' }, this.errors === 'rooms' && (h("p", { key: '292017dbe3464548eb5f93b39df05b257c55c836', class: "bulk-stop-sale__error bulk-stop-sale__error--spaced" }, calendar_data.is_vacation_rental ? t('Lcz_PlzSelectOneListing') : t('Lcz_PlzSelectOneUnit'))), h("table", { key: '3c3630c9976d14568752450e5947ae56b0c710dd', ref: el => (this.unitSections = el) }, h("thead", { key: '5bd1165c1f973633c7021eca8b31576330ec1803' }, h("tr", { key: '99c668322446d2f06cc34e0b1474f3faf7cf50a9' }, h("th", { key: '3a7ac6413c55ca01e63f78e3cb4767567082eaa8', class: "sr-only" }, t('Lcz_Choice', { fallback: 'choice' })), h("th", { key: '029a94427ae0b9537474aa9af6a1c0da9956760c', class: "sr-only" }, t('Lcz_RoomType', { fallback: 'room type' })))), h("tbody", { key: '7b04866498bcbd27b95e685b10e4e2e304828a99' }, calendar_data.roomsInfo.map((roomType, i) => {
            const isLastRoom = i === calendar_data.roomsInfo.length - 1;
            return (h("tr", { key: roomType.id }, h("td", { class: { 'bulk-stop-sale__cell--spaced': !isLastRoom } }, h("div", { class: "bulk-stop-sale__choice-cell" }, h("wa-select", { onchange: e => {
                    const { value } = e.target;
                    const choice = value;
                    // drop any existing entry for this roomType
                    const rest = this.selectedRoomTypes.filter(entry => entry.id !== roomType.id);
                    // if they actually picked something, append it
                    if (choice) {
                        rest.push({ id: roomType.id, result: choice });
                    }
                    this.selectedRoomTypes = rest;
                }, size: "s", placeholder: `${t('Lcz_Select', { fallback: 'Select' })}...` }, h("wa-option", { value: "open" }, t('Lcz_Open')), h("wa-option", { value: "closed" }, t('Lcz_StopSale'))))), h("td", { class: { 'bulk-stop-sale__name-td': true, 'bulk-stop-sale__cell--spaced': !isLastRoom } }, roomType.name)));
        })))), h("p", { key: 'a92bda01224c2ddbf07a52980daa7a3dc79c5274', class: "bulk-stop-sale__section-label" }, t('Lcz_IncludedDays', { fallback: 'Included days' })), this.errors === 'weekdays' && h("p", { key: '9475cfcd91d181242ba9c85ca5488c3a2ee92f83', class: "bulk-stop-sale__error" }, t('Lcz_PleaseSelectAtLeastOneDay', { fallback: 'Please select at least one day' })), h("ir-weekday-selector", { key: '1107b828cecbaf51b6d2bd69c19e3e7e64b593a5', ref: el => (this.weekdaysSections = el), weekdays: Array.from(this.selectedWeekdays), onWeekdayChange: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.selectedWeekdays = new Set(e.detail);
            } }), h("table", { key: '92474c669fa9aa59ac931df737e1f01dceff249d', class: "bulk-stop-sale__dates-table", ref: el => (this.datesSections = el) }, h("thead", { key: 'e5d53cd1f5bf31cbecb3e195c69596be52463cbb' }, h("tr", { key: 'be9ab9e56042b4fe6fc12c90c90454bb36226bc1' }, h("td", { key: '216cd3a1441c42ac22e38fa5dd452fce777c796e', class: "bulk-stop-sale__date-label" }, t('Lcz_From', { fallback: 'From' })), h("td", { key: '467941a61bca7d787bfe91ee5668c7997dbb8b70', class: "bulk-stop-sale__date-label" }, t('Lcz_ToExclusive')), h("td", { key: 'cf6ab0fa1ef35e4c8eab11a0cf69acefcb148fd8' }, this.dates.length !== this.maxDatesLength && (h("ir-custom-button", { key: '8951cee6ebd9cc0c0805b5288fe64a620a384b0b', appearance: "plain", variant: "neutral", onClickHandler: () => {
                this.addDateRow();
            } }, h("wa-icon", { key: 'bdafd4cb4d0e181c70a8cd7eadeabde4e5e9dbcc', name: "plus", style: { fontSize: '1.2rem' } })))))), h("tbody", { key: 'd5fc571286e632c2d455da78b694bb8535236a25' }, this.dates.map((d, i) => {
            if (!this.dateRefs[i]) {
                this.dateRefs[i] = {};
            }
            const fromDateMinDate = i > 0 ? (this.dates[i - 1]?.to.clone().add(1, 'days')?.format('YYYY-MM-DD') ?? this.minDate) : this.minDate;
            const toDateMinDate = this.dates[i].from ? this.dates[i]?.from.clone()?.format('YYYY-MM-DD') : this.minDate;
            return (h("tr", { key: `date_${i}` }, h("td", { class: "bulk-stop-sale__date-cell" }, h("ir-date-select", { ref: el => {
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
                } })), h("td", { class: "bulk-stop-sale__date-cell" }, h("ir-date-select", { forceDestroyOnUpdate: true, disabled: !d.from, ref: el => {
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
                } })), i > 0 && (h("td", { class: "bulk-stop-sale__date-action-cell" }, h("ir-custom-button", { appearance: "plain", variant: "neutral", onClickHandler: () => {
                    this.dates = this.dates.filter((_, j) => j !== i);
                } }, h("wa-icon", { name: "minus", style: { fontSize: '1.2rem' } }))))));
        }))))));
    }
};
IglBulkStopSale.style = iglBulkStopSaleCss() + sheetCss();

export { IglBulkBlock as igl_bulk_block, IglBulkStopSale as igl_bulk_stop_sale };
