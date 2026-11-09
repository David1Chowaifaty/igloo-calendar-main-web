'use strict';

var index = require('./index-IDeZZwEK.js');
var index$1 = require('./index-9D7XLiv8.js');
var calendarData = require('./calendar-data-ShS6b-Ns.js');
var irInterceptor_store = require('./ir-interceptor.store-GIfc0Pi9.js');
var utils = require('./utils-BJ6tgqps.js');
var moment = require('./moment-CdViwxPQ.js');
var t = require('./t-CqJPQrfm.js');
var irDate = require('./ir-date-CbkOKs2C.js');
var v4 = require('./v4-_2BfiRUa.js');
var hkTasks_store = require('./hk-tasks.store-D2zoiWNo.js');
var number = require('./number-xBpNWk3H.js');
require('./types-BVJQZ50e.js');
require('./locale-scope-Cch-vf1R.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./commonSchemas-kIlurDum.js');
require('./locale.controller-BE9t6L_N.js');
require('./language-observer-DKp37LIu.js');
require('./booking.dto-CMx8s-oW.js');
require('./type-DxODN41W.js');
require('./calendar-dates-BxDGM1ix.js');

const irHkArchiveDrawerCss = () => `.sc-ir-hk-archive-drawer-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-hk-archive-drawer{overflow-x:auto}.table--container.sc-ir-hk-archive-drawer,.data-table.sc-ir-hk-archive-drawer{height:100%}.ir-table-row.sc-ir-hk-archive-drawer td.sc-ir-hk-archive-drawer{padding:var(--ir-cell-padding) !important;text-align:start;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-hk-archive-drawer td.sc-ir-hk-archive-drawer{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-hk-archive-drawer tbody.sc-ir-hk-archive-drawer tr.sc-ir-hk-archive-drawer:last-child>td.sc-ir-hk-archive-drawer{border-bottom:0 !important}.cell--align-start.sc-ir-hk-archive-drawer{text-align:start !important}.cell--align-center.sc-ir-hk-archive-drawer{text-align:center !important}.cell--align-end.sc-ir-hk-archive-drawer{text-align:end !important}.table.sc-ir-hk-archive-drawer thead.sc-ir-hk-archive-drawer th.sc-ir-hk-archive-drawer{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:start}.data-table.sc-ir-hk-archive-drawer thead.sc-ir-hk-archive-drawer th.sc-ir-hk-archive-drawer{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-hk-archive-drawer{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-hk-archive-drawer,.ir-table-row.sc-ir-hk-archive-drawer{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-hk-archive-drawer{text-transform:capitalize;cursor:pointer}.table.sc-ir-hk-archive-drawer thead.sc-ir-hk-archive-drawer th.sortable.sc-ir-hk-archive-drawer{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-hk-archive-drawer thead.sc-ir-hk-archive-drawer th.sortable.sc-ir-hk-archive-drawer:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-hk-archive-drawer thead.sc-ir-hk-archive-drawer th.sortable.sc-ir-hk-archive-drawer:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-hk-archive-drawer:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-hk-archive-drawer svg.sc-ir-hk-archive-drawer{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-hk-archive-drawer:hover td.sc-ir-hk-archive-drawer{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-hk-archive-drawer:hover td.sc-ir-hk-archive-drawer{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-hk-archive-drawer:active td.sc-ir-hk-archive-drawer{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-hk-archive-drawer td.sc-ir-hk-archive-drawer{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-hk-archive-drawer:hover td.sc-ir-hk-archive-drawer{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-hk-archive-drawer:active td.sc-ir-hk-archive-drawer{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-hk-archive-drawer .empty-row.sc-ir-hk-archive-drawer{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-hk-archive-drawer{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-hk-archive-drawer{position:sticky !important;inset-inline-end:0;background-color:var(--wa-color-surface-default, white)}.sc-ir-hk-archive-drawer-h{display:contents}.hk_archive__drawer.sc-ir-hk-archive-drawer::part(body),.hk_archive__drawer.sc-ir-hk-archive-drawer [part~="body"]{padding:0}.archive-content.sc-ir-hk-archive-drawer{display:flex;flex-direction:column}.filters.sc-ir-hk-archive-drawer{display:flex;flex-direction:column;gap:0.75rem;padding:1.5rem;padding-bottom:1.5rem;border-bottom:1px solid var(--wa-color-neutral-200, #e5e7eb)}.filters-row.sc-ir-hk-archive-drawer{display:flex;align-items:flex-end;gap:0.75rem;flex-wrap:wrap}.filters-row.sc-ir-hk-archive-drawer wa-select.sc-ir-hk-archive-drawer{flex:1;min-width:10rem}.filters-row.sc-ir-hk-archive-drawer ir-date-range-filter.sc-ir-hk-archive-drawer{flex:1;min-width:14rem}.filter-actions.sc-ir-hk-archive-drawer{display:flex;gap:0.5rem;flex-shrink:0}.table-wrapper.sc-ir-hk-archive-drawer{padding:1.5rem;padding-inline:0.75rem;padding-top:0;overflow-x:auto;-webkit-overflow-scrolling:touch}.archive-table.sc-ir-hk-archive-drawer{width:100%;border-collapse:collapse}.archive-table.sc-ir-hk-archive-drawer th.sc-ir-hk-archive-drawer,.archive-table.sc-ir-hk-archive-drawer td.sc-ir-hk-archive-drawer{white-space:nowrap;text-align:start;padding:0.4rem 0.75rem;border-bottom:1px solid var(--wa-color-neutral-200, #e5e7eb);font-size:var(--wa-font-size-s, 0.875rem)}.archive-table.sc-ir-hk-archive-drawer th.sc-ir-hk-archive-drawer{font-weight:600;color:var(--wa-color-neutral-600, #4b5563);border-bottom:2px solid var(--wa-color-neutral-200, #e5e7eb);padding-top:0}.archive-table.sc-ir-hk-archive-drawer tbody.sc-ir-hk-archive-drawer tr.sc-ir-hk-archive-drawer:last-child td.sc-ir-hk-archive-drawer{border-bottom:none}.archive-table.sc-ir-hk-archive-drawer tbody.sc-ir-hk-archive-drawer tr.sc-ir-hk-archive-drawer:hover td.sc-ir-hk-archive-drawer{background-color:var(--wa-color-neutral-50, #f9fafb)}.unit-name.sc-ir-hk-archive-drawer{max-width:100px;display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0;margin:0;text-align:start}`;

const IrHkArchiveDrawer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.drawerClosed = index.createEvent(this, "drawerClosed");
    }
    propertyId;
    language = 'en';
    ticket;
    open = false;
    filters = {
        from_date: null,
        to_date: null,
        filtered_by_hkm: [],
        filtered_by_unit: [],
    };
    data = [];
    isLoading = null;
    fetchedData = false;
    selectedBooking = null;
    drawerClosed;
    minSelectableDate = moment.hooks().subtract(90, 'days').format('YYYY-MM-DD');
    maxSelectableDate = moment.hooks().format('YYYY-MM-DD');
    houseKeepingService = new index$1.HouseKeepingService();
    units = [];
    componentWillLoad() {
        this.setUpUnits();
    }
    handleCloseBookingDetails(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.selectedBooking = null;
    }
    setUpUnits() {
        const units = [];
        calendarData.calendar_data.roomsInfo.forEach(r => {
            r.physicalrooms.forEach(room => {
                units.push({ id: room.id, name: room.name });
            });
        });
        this.units = units;
    }
    updateFilters(props) {
        this.filters = { ...this.filters, ...props };
    }
    async getArchivedTasks(export_to_excel = false) {
        const res = await this.houseKeepingService.getArchivedHKTasks({
            property_id: Number(this.propertyId),
            ...this.filters,
            is_export_to_excel: export_to_excel,
        });
        this.data = [...(res?.tasks || [])].map(t => ({ ...t, id: v4.v4() }));
        this.fetchedData = true;
        return { tasks: res?.tasks, url: res?.url };
    }
    async searchArchive() {
        try {
            this.isLoading = 'search';
            await this.getArchivedTasks();
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = null;
        }
    }
    async exportArchive() {
        try {
            this.isLoading = 'excel';
            const { url } = await this.getArchivedTasks(true);
            utils.downloadFile(url);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = null;
        }
    }
    render() {
        return (index.h(index.Host, { key: '4050d0f52ca40c3a3889e6b6daa3d1df2a961f83' }, index.h("ir-drawer", { key: 'dc2275320b22741430278e23ab79e40e7bfad4ca', open: this.open, label: t.t('Lcz_CleaningArchives90Days', { fallback: 'Cleaning Archives (90 days)' }), class: "hk_archive__drawer", onDrawerHide: () => this.drawerClosed.emit() }, index.h("div", { key: '267c442444620d2052b1eef9258e544950ea3c78', class: "archive-content" }, index.h("div", { key: '6c0bdbd6a5220755da2f68d0beb6e1f5d1390446', class: "filters" }, index.h("div", { key: '1f0117dbffc00207cfa939ec8ed74d7eaff4ef6f', class: "filters-row" }, index.h("wa-select", { key: '2e5ae53f4089f87d18470aa9d9f52a4915c05f89', size: "s", placeholder: t.t('Lcz_AllUnits', { fallback: 'All units' }), onchange: (e) => {
                const val = e.target.value;
                this.updateFilters({ filtered_by_unit: val === '000' ? [] : [Number(val)] });
            }, defaultValue: '000' }, index.h("wa-option", { key: '8bff72dd7e6c9d1e29815a3caaba113c30610c4e', value: "000" }, t.t('Lcz_AllUnits', { fallback: 'All units' })), this.units
            .slice()
            .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
            .map(v => (index.h("wa-option", { value: v.id.toString() }, v.name)))), index$1.housekeeping_store?.hk_criteria?.housekeepers.length > 1 && (index.h("wa-select", { key: 'd20a5a420c3f10d1dfc393bd1ad366add7323833', size: "s", defaultValue: '000', placeholder: t.t('Lcz_Allhousekeepers', { fallback: 'All housekeepers' }), onchange: (e) => {
                const val = e.target.value;
                this.updateFilters({ filtered_by_hkm: val === '000' ? [] : [Number(val)] });
            } }, index.h("wa-option", { key: 'ea39d315047fc9641aba8226299af9a774503dc4', value: "000" }, t.t('Lcz_Allhousekeepers', { fallback: 'All housekeepers' })), index$1.housekeeping_store.hk_criteria.housekeepers
            .slice()
            .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
            .map(v => (index.h("wa-option", { value: v.id.toString() }, v.name)))))), index.h("div", { key: 'a5a3d5304ce637a9c57cf9b4163d41e4f53d3155', class: "filters-row" }, index.h("ir-date-range-filter", { key: '5243ae39acf0975e09b21383b821cb289e417c3a', withClear: false, selectionMode: "auto", maxDate: this.maxSelectableDate, minDate: this.minSelectableDate, fromDate: this.filters.from_date, toDate: this.filters.to_date, onDatesChanged: e => this.updateFilters({ from_date: e.detail.from, to_date: e.detail.to }) }), index.h("div", { key: '15ab9ce690dac03267a047e9c497e17a841e9050', class: "filter-actions" }, index.h("ir-custom-button", { key: '677929ba02a12cdbeaabe0503b2700a19aa558b6', variant: "neutral", appearance: "outlined", loading: this.isLoading === 'search', onClickHandler: () => this.searchArchive() }, t.t('Lcz_Search', { fallback: 'Search' })), index.h("ir-custom-button", { key: 'c20bf1d193da76100a0bb627f0e8c05bf42c1375', variant: "neutral", appearance: "outlined", loading: this.isLoading === 'excel', onClickHandler: () => this.exportArchive() }, index.h("wa-icon", { key: '9c50c193cb9a6ee712576856b0cfa706511d0372', name: "download", slot: "start" }), t.t('Lcz_ExportToExcel', { fallback: 'Export' }))))), this.fetchedData && (index.h("div", { key: 'f1e090c3c6bdfe44aa4614367b05b2491f158d51', class: "results" }, this.data?.length === 0 && !irInterceptor_store.isRequestPending('/Get_Archived_HK_Tasks') ? (index.h("ir-empty-state", { message: t.t('Lcz_NoResultsFound', { fallback: 'No results found' }) })) : (index.h("div", { class: "table-wrapper" }, index.h("table", { class: "table data-table" }, index.h("thead", null, index.h("tr", null, index.h("th", null, t.t('Lcz_Period', { fallback: 'Period' })), index.h("th", null, t.t('Lcz_Housekeeper', { fallback: 'Housekeeper' })), index.h("th", null, t.t('Lcz_Unit', { fallback: 'Unit' })), index.h("th", null, t.t('Lcz_BookingNumber', { fallback: 'Booking #' })))), index.h("tbody", null, this.data?.map(d => (index.h("tr", { key: d.id, class: "ir-table-row" }, index.h("td", null, irDate.formatDate(d.date, 'MMM DD, YYYY')), index.h("td", null, d.house_keeper), index.h("td", null, index.h("ir-tooltip", { message: d.unit, customSlot: true, containerStyle: { width: 'fit-content' } }, index.h("span", { slot: "tooltip-trigger", class: "unit-name" }, d.unit))), index.h("td", null, d.booking_nbr ? (index.h("ir-custom-button", { link: true, onClickHandler: () => (this.selectedBooking = d.booking_nbr) }, d.booking_nbr.toString())) : (t.t('Lcz_WasVacant', { fallback: 'Was vacant' })))))))))))))), index.h("ir-booking-details-drawer", { key: '1109908d5be0624a4a9d3ef4c66358a758b2948d', open: !!this.selectedBooking, propertyId: Number(this.propertyId), bookingNumber: this.selectedBooking?.toString(), ticket: this.ticket, language: this.language, onBookingDetailsDrawerClosed: () => (this.selectedBooking = null) })));
    }
};
IrHkArchiveDrawer.style = irHkArchiveDrawerCss();

const irTasksCardCss = () => `.sc-ir-tasks-card-h{display:block}.task-card.sc-ir-tasks-card::part(body),.task-card.sc-ir-tasks-card [part~="body"]{padding:0.5rem 0.75rem}.task-card__body.sc-ir-tasks-card{display:flex;align-items:center;gap:0.875rem;min-height:2.75rem}.task-card__unit.sc-ir-tasks-card{display:flex;flex-direction:column;gap:0.1rem;min-width:0;flex:1}.task-card__unit-name.sc-ir-tasks-card{font-weight:700;font-size:var(--wa-font-size-m);color:var(--wa-color-text-normal);line-height:1.2;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0}.task-card__meta.sc-ir-tasks-card{display:flex;align-items:center;gap:0.25rem;flex-wrap:nowrap}.task-card__status.sc-ir-tasks-card{font-size:var(--wa-font-size-xs);font-weight:600;text-transform:uppercase;letter-spacing:0.04em;color:var(--wa-color-text-quiet);white-space:nowrap}.task-card__sep.sc-ir-tasks-card,.task-card__hint.sc-ir-tasks-card,.task-card__date.sc-ir-tasks-card{font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet);white-space:nowrap}.task-card__badges.sc-ir-tasks-card{display:flex;align-items:center;gap:0.25rem;flex-shrink:0}.task-card__guests.sc-ir-tasks-card{display:flex;gap:0.2rem;flex-shrink:0}.task-card__guest.sc-ir-tasks-card{display:flex;align-items:center;gap:0.25rem}.task-card__guest-icon.sc-ir-tasks-card{color:var(--wa-color-text-quiet);flex-shrink:0}.task-card__guest-count.sc-ir-tasks-card{font-size:var(--wa-font-size-m);font-weight:600;color:var(--wa-color-text-normal);line-height:1;min-width:1ch}.task-card__assign.sc-ir-tasks-card{display:flex;align-items:center;gap:0.375rem;flex:1;min-width:0;border-inline-start:1px solid var(--wa-color-surface-border);padding-inline-start:0.875rem}.task-card__assign-icon.sc-ir-tasks-card{flex-shrink:0;color:var(--wa-color-text-quiet);font-size:0.875rem}.task-card__hk-select.sc-ir-tasks-card{flex:1;min-width:0;max-width:11rem}.task-card__actions.sc-ir-tasks-card{display:flex;align-items:center;gap:0.5rem;flex-shrink:0}.task-card__clean-group.sc-ir-tasks-card{display:flex;align-items:center;gap:0.5rem}.task-card__clean-group.sc-ir-tasks-card ir-custom-button.sc-ir-tasks-card:first-child::part(base),.task-card__clean-group.sc-ir-tasks-card ir-custom-button.sc-ir-tasks-card:first-child [part~="base"]{border-radius:var(--wa-border-radius-m) 0 0 var(--wa-border-radius-m);border-inline-end:none}.task-card__clean-group.sc-ir-tasks-card ir-custom-button.sc-ir-tasks-card:last-child::part(base),.task-card__clean-group.sc-ir-tasks-card ir-custom-button.sc-ir-tasks-card:last-child [part~="base"]{border-radius:0 var(--wa-border-radius-m) var(--wa-border-radius-m) 0}@media (max-width: 639px){.task-card__body.sc-ir-tasks-card{flex-wrap:wrap;min-height:unset;gap:0.625rem}.task-card__unit.sc-ir-tasks-card{flex:1;min-width:0;max-width:unset}.task-card__unit-name.sc-ir-tasks-card{max-width:100%}.task-card__assign.sc-ir-tasks-card{border-inline-start:none;padding-inline-start:0;padding-top:0.5rem;width:100%;flex:0 0 100%}.task-card__hk-select.sc-ir-tasks-card{max-width:100%}.task-card__actions.sc-ir-tasks-card{width:100%;justify-content:flex-end}}`;

const IrTasksCard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.cleanSelectedTask = index.createEvent(this, "cleanSelectedTask");
        this.skipSelectedTask = index.createEvent(this, "skipSelectedTask");
        this.assignHousekeeper = index.createEvent(this, "assignHousekeeper");
    }
    task;
    isCheckable;
    isSkippable;
    cleanSelectedTask;
    skipSelectedTask;
    assignHousekeeper;
    // private taskBadges() {
    //   const config = [
    //     { code: 'CLN', variant: 'danger', label: 'CL' },
    //     { code: 'T1', variant: 'success', label: 'T1' },
    //     { code: 'T2', variant: 'brand', label: 'T2' },
    //   ] as const;
    //   const presentCodes = new Set([this.task.task_type?.code, ...(this.task.extra_task?.map(et => et.task_type?.code) ?? [])]);
    //   return config.map(({ code, variant, label }) => (
    //     <wa-badge key={code} variant={variant} appearance="filled" style={{ opacity: presentCodes.has(code) ? '1' : '0' }}>
    //       {label}
    //     </wa-badge>
    //   ));
    // }
    taskTypeBadge(code) {
        const config = {
            CLN: { variant: 'danger', label: t.t('Lcz_CleaningAbbreviation', { fallback: 'CL' }) },
            T1: { variant: 'success', label: t.t('Lcz_TaskAbbreviation', { fallback: 'T%1', params: [number.formatCount(1)] }) },
            T2: { variant: 'brand', label: t.t('Lcz_TaskAbbreviation', { fallback: 'T%1', params: [number.formatCount(2)] }) },
        };
        const { variant, label } = config[code] ?? { variant: 'neutral', label: code };
        return (index.h("wa-badge", { variant: variant, appearance: "filled" }, label));
    }
    get guests() {
        return [
            { count: this.task.adult, icon: 'person', label: t.t('Lcz_Ad', { fallback: 'Ad' }) },
            { count: this.task.child, icon: 'child', label: t.t('Lcz_Ch', { fallback: 'Ch' }) },
            { count: this.task.infant, icon: 'baby', label: t.t('Lcz_In', { fallback: 'In' }) },
        ].filter(g => g.count > 0);
    }
    render() {
        return (index.h("wa-card", { key: '4dc95c3c2db76bf2c372c4222611c03daed5960b', class: "task-card" }, index.h("div", { key: '1977b44d42f2818fa7539c7a75cf24f31607d14c', class: "task-card__body" }, index.h("div", { key: '7ccb9d7076d08f1e89d16efd990f894f73de3aa2', class: "task-card__unit" }, index.h("span", { key: '29c3fa78dd26d80ebc1576bc9d9a336c50cb1244', class: "task-card__unit-name" }, this.task.unit.name), index.h("div", { key: '75eba8ede83b6fe724f59390a3a44ef333ceb1a2', class: "task-card__meta" }, index.h("span", { key: 'f209c359163cdc5a6d53be9607f52a706025127e', class: "task-card__status" }, this.task.status.description), this.task.hint && index.h("span", { key: '6ec53b72f3974161d85fffdf254b3c37da1780a9', class: "task-card__sep" }, "\u00B7"), this.task.hint && index.h("span", { key: '7623d4984ec58e68b2b444ccae8f6cd3a1f7f491', class: "task-card__hint" }, this.task.hint))), index.h("div", { key: '061c420450e5e9e01924a099c1dc77c05aa500e1', class: "task-card__badges" }, this.taskTypeBadge(this.task.task_type?.code), this.task.extra_task?.map(et => this.taskTypeBadge(et.task_type?.code))), this.guests.length > 0 && (index.h("div", { key: '537b9af2379e4bcc94e89897f2ec29564f9873c6', class: "task-card__guests" }, this.guests.map(g => (index.h("div", { class: "task-card__guest" }, index.h("wa-icon", { name: g.icon, class: "task-card__guest-icon", style: { fontSize: `${Math.min(0.75 + g.count * 0.15, 1.4)}rem` } }), index.h("span", { class: "task-card__guest-count" }, number.formatCount(g.count))))))), index.h("div", { key: '5ecde67c3b31e67e7f52ae8c4546e097ce09dd58', class: "task-card__assign" }, index.h("wa-select", { key: 'dcb8a0f46b1c5d3ab53a7e0e4769a3255751b0dc', label: t.t('Lcz_Housekeeper', { fallback: 'Housekeeper' }), class: "task-card__hk-select", size: "s", placeholder: t.t('Lcz_Unassigned', { fallback: 'Unassigned' }), value: this.task.hkm_id ? String(this.task.hkm_id) : '0', defaultValue: this.task.hkm_id ? String(this.task.hkm_id) : '0', onchange: e => {
                const hkm_id = Number(e.target.value);
                this.assignHousekeeper.emit({ task: this.task, hkm_id });
            } }, index.h("wa-option", { key: '6ebc80e4ec523d8431f2f8823ebeec273c734827', value: "0" }, t.t('Lcz_Unassigned', { fallback: 'Unassigned' })), index$1.housekeeping_store.hk_criteria?.housekeepers
            .slice()
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(hk => (index.h("wa-option", { key: hk.id, value: String(hk.id) }, hk.name))))), index.h("div", { key: 'ede4f6a23fb46d3d30ed82ff16867a6ce6743a09', class: "task-card__actions" }, this.isSkippable && (index.h("ir-custom-button", { key: '5aa3933bb536b4f29c2b11f88c562531b8629783', variant: "neutral", appearance: "outlined", onClickHandler: () => this.skipSelectedTask.emit(this.task) }, t.t('Lcz_Skip', { fallback: 'Skip' }))), this.isCheckable && (index.h("div", { key: 'e6edaf5273811e88c9700698cf7b48ae439dc3cb', class: "task-card__clean-group" }, index.h("ir-custom-button", { key: 'c30d8a261668324462c036777da8c1ad5b633a6a', variant: "brand", appearance: "filled", onClickHandler: () => {
                hkTasks_store.toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            } }, t.t('Lcz_CleanAndInspect', { fallback: 'Clean & Inspect' })), index.h("ir-custom-button", { key: '1a4c074f0cad8a8f9c7491acda88a5318047cee4', variant: "brand", appearance: "accent", onClickHandler: () => {
                hkTasks_store.toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            } }, t.t('Lcz_Clean', { fallback: 'Clean' }))))))));
    }
};
IrTasksCard.style = irTasksCardCss();

const irTasksFiltersCss = () => `.sc-ir-tasks-filters-h{display:block;min-width:20vw;height:100%;flex:1}.filters__header.sc-ir-tasks-filters{display:flex;align-items:center;justify-content:space-between}.filters__title-group.sc-ir-tasks-filters{display:flex;align-items:center;gap:0.5rem}.filters__card.--collapsed.sc-ir-tasks-filters::part(body),.filters__card.--collapsed.sc-ir-tasks-filters [part~="body"]{display:none}.filters__icon.sc-ir-tasks-filters{width:1.125rem;height:1.125rem;flex-shrink:0;color:var(--wa-color-text-quiet)}.filters__title.sc-ir-tasks-filters{margin:0;font-size:var(--wa-font-size-m);font-weight:var(--wa-font-weight-heading);color:var(--wa-color-text-normal)}.filters__body.sc-ir-tasks-filters{display:flex;flex-direction:column;gap:0.75rem}.filters__body--collapsed.sc-ir-tasks-filters{display:none}.filters__actions.sc-ir-tasks-filters{display:flex;align-items:center;justify-content:flex-end;gap:0.75rem;padding-top:0.25rem}@media (min-width: 1024px){.filters__collapse-btn.sc-ir-tasks-filters{display:none}.filters__card.--collapsed.sc-ir-tasks-filters::part(body){display:block}.filters__body--collapsed.sc-ir-tasks-filters{display:flex}}`;

const IrTasksFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.applyFilters = index.createEvent(this, "applyFilters");
    }
    isLoading;
    filters = {
        cleaning_periods: {
            code: '',
        },
        housekeepers: '000',
        cleaning_frequencies: { code: '' },
        dusty_units: { code: '' },
        highlight_check_ins: { code: '' },
    };
    collapsed = false;
    applyFilters;
    baseFilters;
    componentWillLoad() {
        this.baseFilters = {
            cleaning_periods: index$1.housekeeping_store?.hk_criteria?.cleaning_periods[0],
            housekeepers: [],
            cleaning_frequencies: calendarData.calendar_data.cleaning_frequency ?? index$1.housekeeping_store?.hk_criteria?.cleaning_frequencies[0],
            dusty_units: index$1.housekeeping_store?.hk_criteria?.dusty_periods[0],
            highlight_check_ins: index$1.housekeeping_store?.hk_criteria?.highlight_checkin_options[0],
        };
        this.filters = { ...this.baseFilters, housekeepers: '000' };
    }
    updateFilter(params) {
        this.filters = { ...this.filters, ...params };
    }
    applyFiltersEvt(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.applyFilters.emit({
            ...this.filters,
            housekeepers: this.filters.housekeepers === '000' ? this.baseFilters.housekeepers : [{ id: Number(this.filters.housekeepers) }],
        });
    }
    resetFilters(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.filters = { ...this.baseFilters, housekeepers: '000' };
        this.applyFilters.emit({
            ...this.filters,
            housekeepers: this.filters.housekeepers === '000' ? this.baseFilters.housekeepers : [{ id: Number(this.filters.housekeepers) }],
        });
    }
    render() {
        return (index.h("ir-filter-card", { key: 'af9bd1b9d5005541fca9639b593ba2c486a94707' }, index.h("fieldset", { key: 'bf811139a4839c91d7914df937f9d8a8dcdab5d8' }, index.h("wa-select", { key: 'a779a26faf3104ca433027a6f243abd46e802995', label: t.t('Lcz_Period', { fallback: 'Period' }), size: "s", "data-testid": "period", value: this.filters?.cleaning_periods?.code, defaultValue: this.filters?.cleaning_periods?.code, onchange: e => this.updateFilter({ cleaning_periods: { code: e.target.value } }) }, index$1.housekeeping_store?.hk_criteria?.cleaning_periods.map(v => (index.h("wa-option", { key: v.code, value: v.code }, v.description))))), index$1.housekeeping_store?.hk_criteria?.housekeepers.length > 1 && (index.h("fieldset", { key: '618662475ef143c736a9e8f996e753c18039a7a0' }, index.h("wa-select", { key: '9bd6239dc7252a0340ab6b8d5620d4e3db60ffe7', label: t.t('Lcz_Housekeepers', { fallback: 'Housekeepers' }), size: "s", "data-testid": "housekeepers", value: this.filters?.housekeepers, defaultValue: this.filters?.housekeepers, onchange: e => this.updateFilter({ housekeepers: e.target.value }) }, index.h("wa-option", { key: 'd691414c590b48ab189c49e38c10607414145f28', value: "000" }, t.t('Lcz_Allhousekeepers', { fallback: 'All housekeepers' })), index$1.housekeeping_store?.hk_criteria?.housekeepers
            .slice()
            .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
            .map(v => (index.h("wa-option", { key: v.id, value: v.id.toString() }, v.name)))))), index.h("fieldset", { key: '51e4adde184875f41510ee25c60ad2e98e3b18ca' }, index.h("wa-select", { key: '21a8bca13cf2b5a40543f6ae07c590ff83b75176', label: t.t('Lcz_IncludeDustyUnits', { fallback: 'Include dusty units' }), size: "s", "data-testid": "dusty_units", value: this.filters?.dusty_units?.code, defaultValue: this.filters?.dusty_units?.code, onchange: e => this.updateFilter({ dusty_units: { code: e.target.value } }) }, index$1.housekeeping_store.hk_criteria?.dusty_periods?.map(v => (index.h("wa-option", { key: v.code, value: v.code }, v.description))))), index.h("fieldset", { key: '8c44b467142abbda64279fccb46ae7207c3c27c2' }, index.h("wa-select", { key: '4666d802df84fdc534ee5f9679cc9dc42ee815a7', label: t.t('Lcz_HighlightCheck-insFrom'), size: "s", "data-testid": "highlight_check_ins", value: this.filters?.highlight_check_ins?.code, defaultValue: this.filters?.highlight_check_ins?.code, onchange: e => this.updateFilter({ highlight_check_ins: { code: e.target.value } }) }, index$1.housekeeping_store.hk_criteria?.highlight_checkin_options?.map(v => (index.h("wa-option", { key: v.code, value: v.code }, v.description))))), index.h("div", { key: '7f1bd787d58ce91e2b970faaf93137aee89b44cb', slot: "footer" }, index.h("ir-custom-button", { key: 'd2f96b5ef00e3acca7c0cbd39c5c4933278d1aa1', variant: "neutral", appearance: "filled", "data-testid": "reset", onClickHandler: e => this.resetFilters(e) }, t.t('Lcz_Reset', { fallback: 'Reset' })), index.h("ir-custom-button", { key: '8d8f5e4443de67e01959bd6f100c5b0bb733c88e', variant: "brand", "data-testid": "apply", loading: this.isLoading, onClickHandler: e => this.applyFiltersEvt(e) }, t.t('Lcz_Apply', { fallback: 'Apply' })))));
    }
};
IrTasksFilters.style = irTasksFiltersCss();

const irTasksHeaderCss = () => `.sc-ir-tasks-header-h{display:flex;gap:1rem;flex-wrap:wrap}.action-buttons.sc-ir-tasks-header{display:flex;align-items:center}.search-filter-container.sc-ir-tasks-header{flex:1 1 0%}.clean-button.sc-ir-tasks-header{display:none}@media (min-width: 640px){.sc-ir-tasks-header-h{flex-direction:row;justify-content:space-between;align-items:center;margin-bottom:1rem}.search-filter-container.sc-ir-tasks-header{display:flex}.action-buttons.sc-ir-tasks-header{justify-content:stretch}.clean-button.sc-ir-tasks-header{display:flex}}`;

const IrTasksHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.headerButtonPress = index.createEvent(this, "headerButtonPress");
    }
    get el() { return index.getElement(this); }
    headerButtonPress;
    cleanAndInspectEl;
    cleanEl;
    prevSelectedCount = 0;
    componentDidRender() {
        const count = hkTasks_store.hkTasksStore.selectedTasks.length;
        if (count > this.prevSelectedCount) {
            if (!this.cleanAndInspectEl) {
                this.cleanAndInspectEl = this.el.querySelector('#cleanInspectAnimation');
            }
            if (!this.cleanEl) {
                this.cleanEl = this.el.querySelector('#cleanAnimation');
            }
            if (this.cleanAndInspectEl)
                this.cleanAndInspectEl.play = true;
            if (this.cleanEl)
                this.cleanEl.play = true;
        }
        this.prevSelectedCount = count;
    }
    render() {
        return (index.h(index.Host, { key: '8f254e2b5a5b76a74b35ba24dae7ede8bf704762' }, index.h("div", { key: '847f4f36b253840f9e8f2735bac7ab34bc897648', class: "search-filter-container", style: { gap: '1rem' } }, index.h("ir-input", { key: '22792cd9c35e18320bf12d5183c15f0a31ec3efb', placeholder: t.t('Lcz_SearchUnit', { fallback: 'Search unit' }), class: "search-filter-input", value: hkTasks_store.hkTasksStore.searchField, "onText-change": e => hkTasks_store.updateSearchField(e.detail) }, index.h("wa-icon", { key: 'aaf48e7d649d3aad8a4ba27b21343c77a2b11e33', name: "magnifying-glass", slot: "start" }))), index.h("div", { key: '81bce7535c0bac1ad3ccb3cfa4c19247055b720f', class: "action-buttons", style: { gap: '1rem' } }, index.h("ir-custom-button", { key: '765dc859921b2f6fce48490d5e7ca68190e3785b', appearance: "outlined", variant: "neutral", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'export' });
            } }, index.h("wa-icon", { key: '99f7a85f9b70e4bc423424f9315fce85a392af52', slot: "start", name: "download" }), t.t('Lcz_Export', { fallback: 'Export' })), index.h("ir-custom-button", { key: 'fae5bf6b14ba37a53a3f84dee1a05b200d538a68', appearance: "outlined", variant: "neutral", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'archive' });
            } }, t.t('Lcz_Archives', { fallback: 'Archives' })), index.h("wa-animation", { key: '544ec473cec49ff53297921493ce5a752f0e3cb1', iterations: 1, id: "cleanInspectAnimation", class: "clean-button", name: "rubberBand", easing: "ease-in-out", duration: 800 }, index.h("ir-custom-button", { key: '3f3c6592be60f7f6eda9060011e35754e4428860', appearance: "filled", variant: "brand", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'clean-inspect' });
            }, disabled: !(hkTasks_store.hkTasksStore.selectedTasks.length > 0) }, t.t('Lcz_CleanAndInspect', { fallback: 'Clean & Inspect' }))), index.h("wa-animation", { key: 'd0b303d9b224fd1bee54ac4fdd71de97b3f666e0', iterations: 1, id: "cleanAnimation", class: "clean-button", name: "rubberBand", easing: "ease-in-out", duration: 800 }, index.h("ir-custom-button", { key: '0c6bcf4b03001bda1a2c54976d1d0bec35eda914', disabled: !(hkTasks_store.hkTasksStore.selectedTasks.length > 0), onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'cleaned' });
            }, variant: "brand" }, t.t('Lcz_Cleaned', { fallback: 'Cleaned' }))))));
    }
};
IrTasksHeader.style = irTasksHeaderCss();

const irTasksTableCss = () => `.sc-ir-tasks-table-h{display:block;min-width:0;width:100%}.hk-owner-select.sc-ir-tasks-table{min-width:130px}.hk-dialog__connector.sc-ir-tasks-table{text-transform:lowercase}.hk-dialog-footer.sc-ir-tasks-table{display:flex;justify-content:flex-end;gap:0.5rem}.highlighted-unit.sc-ir-tasks-table{background:#000;color:white;padding:0.2rem 0.3rem;border-radius:4px}.task-table-row.sc-ir-tasks-table td.sc-ir-tasks-table{background:white !important}.task-table-row.sc-ir-tasks-table:hover td.sc-ir-tasks-table{background:#e2e6ea3f !important}.end-of-today-row.sc-ir-tasks-table td.sc-ir-tasks-table{border-width:3px !important}.th-sort-inner.sc-ir-tasks-table{display:flex;align-items:center;gap:0.5rem}.table-empty-state.sc-ir-tasks-table{display:flex;align-items:center;justify-content:center;height:300px}.empty-msg.sc-ir-tasks-table{text-align:center;color:var(--wa-color-text-quiet)}.mobile-date-group.sc-ir-tasks-table{display:flex;flex-direction:column;gap:0.75rem}.mobile-date-label.sc-ir-tasks-table{margin:0;font-size:1rem;font-weight:700;color:var(--wa-color-text-normal);padding:0 0.25rem}.mobile-tasks-container.sc-ir-tasks-table{display:flex;flex-direction:column;gap:1.5rem}.table-container.sc-ir-tasks-table{display:none;min-width:0;width:100%}.table-container.sc-ir-tasks-table::part(body),.table-container.sc-ir-tasks-table [part~="body"]{min-height:50vh;padding:0.5rem}.tasks__header.sc-ir-tasks-table{padding:1rem}@media (min-width: 640px){.mobile-tasks-container.sc-ir-tasks-table{display:none}.table-container.sc-ir-tasks-table{display:block;min-width:0}.table--container.sc-ir-tasks-table{overflow-x:auto;overflow-y:visible;width:100%}}.ir-text-start.sc-ir-tasks-table{text-align:start}`;

const tableCss = () => `.sc-ir-tasks-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-tasks-table{overflow-x:auto}.table--container.sc-ir-tasks-table,.data-table.sc-ir-tasks-table{height:100%}.ir-table-row.sc-ir-tasks-table td.sc-ir-tasks-table{padding:var(--ir-cell-padding) !important;text-align:start;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-tasks-table td.sc-ir-tasks-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-tasks-table tbody.sc-ir-tasks-table tr.sc-ir-tasks-table:last-child>td.sc-ir-tasks-table{border-bottom:0 !important}.cell--align-start.sc-ir-tasks-table{text-align:start !important}.cell--align-center.sc-ir-tasks-table{text-align:center !important}.cell--align-end.sc-ir-tasks-table{text-align:end !important}.table.sc-ir-tasks-table thead.sc-ir-tasks-table th.sc-ir-tasks-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:start}.data-table.sc-ir-tasks-table thead.sc-ir-tasks-table th.sc-ir-tasks-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-tasks-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-tasks-table,.ir-table-row.sc-ir-tasks-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-tasks-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-tasks-table thead.sc-ir-tasks-table th.sortable.sc-ir-tasks-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-tasks-table thead.sc-ir-tasks-table th.sortable.sc-ir-tasks-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-tasks-table thead.sc-ir-tasks-table th.sortable.sc-ir-tasks-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-tasks-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-tasks-table svg.sc-ir-tasks-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-tasks-table:hover td.sc-ir-tasks-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-tasks-table:hover td.sc-ir-tasks-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-tasks-table:active td.sc-ir-tasks-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-tasks-table td.sc-ir-tasks-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-tasks-table:hover td.sc-ir-tasks-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-tasks-table:active td.sc-ir-tasks-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-tasks-table .empty-row.sc-ir-tasks-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-tasks-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-tasks-table{position:sticky !important;inset-inline-end:0;background-color:var(--wa-color-surface-default, white)}`;

const IrTasksTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.animateCleanedButton = index.createEvent(this, "animateCleanedButton");
        this.rowSelectChange = index.createEvent(this, "rowSelectChange");
        this.sortingChanged = index.createEvent(this, "sortingChanged");
        this.skipSelectedTask = index.createEvent(this, "skipSelectedTask");
        this.toast = index.createEvent(this, "toast");
    }
    get el() { return index.getElement(this); }
    tasks = [];
    pendingChange = null;
    selectRevertKey = 0;
    animateCleanedButton;
    rowSelectChange;
    sortingChanged;
    skipSelectedTask;
    toast;
    houseKeepingService = new index$1.HouseKeepingService();
    dialog;
    componentWillLoad() {
        if (this.tasks && this.tasks.length > 0) {
            hkTasks_store.updateSorting('date', 'ASC');
        }
    }
    /**
     * Sorts the tasks by the given key. If no direction is provided,
     * it toggles between ascending and descending.
     */
    handleSort(key) {
        let newDirection = hkTasks_store.hkTasksStore.sorting.direction;
        // If we're clicking the same column, flip the direction. If a new column, default to ASC.
        if (hkTasks_store.hkTasksStore.sorting.field === key) {
            newDirection = hkTasks_store.hkTasksStore.sorting.direction === 'ASC' ? 'DESC' : 'ASC';
        }
        else {
            newDirection = 'ASC';
        }
        hkTasks_store.updateSorting(key, newDirection);
        this.sortingChanged.emit({ field: key, direction: newDirection });
    }
    handleClearSelectedHkTasks(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        hkTasks_store.clearSelectedTasks();
    }
    handleTasksChange(newTasks) {
        if (newTasks?.length) {
            hkTasks_store.clearSelectedTasks();
        }
    }
    /**
     * Helper to toggle selection for a single row.
     */
    toggleSelection(task) {
        hkTasks_store.toggleTaskSelection(task);
        this.emitSelectedTasks();
    }
    emitSelectedTasks() {
        this.rowSelectChange.emit(hkTasks_store.hkTasksStore.selectedTasks);
    }
    /**
     * Checks if every row is selected.
     */
    get allSelected() {
        return hkTasks_store.isAllTasksSelected();
    }
    /**
     * Toggles selection on all visible tasks at once.
     */
    toggleSelectAll() {
        if (this.allSelected) {
            hkTasks_store.clearSelectedTasks();
        }
        else {
            hkTasks_store.selectAllTasks(hkTasks_store.getCheckableTasks());
            this.animateCleanedButton.emit(null);
        }
        this.emitSelectedTasks();
    }
    /**
     * Determines if a task is checkable.
     */
    isCheckable(task) {
        return moment.hooks(task.date, 'YYYY-MM-DD').isSameOrBefore(moment.hooks(), 'days');
    }
    /**
     * Determines if a task is skippable.
     */
    isSkippable(task) {
        const isTodayTask = moment.hooks().isSame(moment.hooks(task.date, 'YYYY-MM-DD'), 'date');
        return isTodayTask && task.status.code === 'IH';
    }
    /**
     * Marks the boundary row/group between today's tasks and future tasks.
     * Only relevant when the list actually contains a date beyond today.
     */
    isEndOfTodayBoundary(currentDate, nextDate) {
        if (!nextDate) {
            return false;
        }
        const isCurrentToday = moment.hooks(currentDate, 'YYYY-MM-DD').isSame(moment.hooks(), 'date');
        const isNextFuture = moment.hooks(nextDate, 'YYYY-MM-DD').isAfter(moment.hooks(), 'date');
        return isCurrentToday && isNextFuture;
    }
    taskBadges(task) {
        const config = [
            { code: 'CLN', variant: 'danger', label: t.t('Lcz_CleaningAbbreviation', { fallback: 'CL' }) },
            { code: 'T1', variant: 'success', label: t.t('Lcz_TaskAbbreviation', { fallback: 'T%1', params: [number.formatCount(1)] }) },
            { code: 'T2', variant: 'brand', label: t.t('Lcz_TaskAbbreviation', { fallback: 'T%1', params: [number.formatCount(2)] }) },
        ];
        const presentCodes = new Set([task.task_type?.code, ...(task.extra_task?.map(et => et.task_type?.code) ?? [])]);
        return config.map(({ code, variant, label }) => (index.h("wa-badge", { key: code, variant: variant, appearance: "filled", style: { opacity: presentCodes.has(code) ? '1' : '0' } }, label)));
    }
    getHousekeeperName(hkmId) {
        if (!hkmId) {
            return t.t('Lcz_Unassigned', { fallback: 'Unassigned' });
        }
        return index$1.housekeeping_store?.hk_criteria?.housekeepers?.find(h => h.id === hkmId)?.name ?? t.t('Lcz_Unassigned', { fallback: 'Unassigned' });
    }
    async confirmOwnershipChange() {
        if (!this.pendingChange) {
            return;
        }
        const { task, hkmId } = this.pendingChange;
        try {
            const buildAssignment = (task) => {
                return {
                    PR_ID: task.unit.id,
                    DATE: task.date,
                    HK_TASK_TYPE_CODE: task.task_type.code,
                    HKM_ID: hkmId === 0 ? null : hkmId,
                };
            };
            await this.houseKeepingService.overrideHKTaskOwnership({
                property_id: calendarData.calendar_data.property.id,
                is_to_remove: hkmId === 0,
                assignments: [buildAssignment(task), ...(task.extra_task ?? []).map(buildAssignment)],
            });
            // Update the task locally in the store
            const updatedTasks = hkTasks_store.hkTasksStore.tasks.map(t => (t.id === task.id ? { ...t, hkm_id: hkmId, housekeeper: hkmId ? this.getHousekeeperName(hkmId) : null } : t));
            hkTasks_store.updateTasks(updatedTasks);
            this.toast.emit({ position: 'top-right', title: t.t('Lcz_SavedSuccessfully', { fallback: 'Saved Successfully' }), description: '', type: 'success' });
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.pendingChange = null;
            this.dialog.closeModal();
        }
    }
    render() {
        const haveManyHousekeepers = index$1.housekeeping_store?.hk_criteria?.housekeepers?.length > 1;
        const tasks = hkTasks_store.getPaginatedTasks();
        const mobileTasks = hkTasks_store.getMobileTasks();
        const housekeepers = index$1.housekeeping_store?.hk_criteria?.housekeepers ?? [];
        const pendingHkName = this.pendingChange ? this.getHousekeeperName(this.pendingChange.hkmId) : '';
        return (index.h(index.Host, { key: 'a8b52275fbcae11938c7a31bee09c85e7567bd3a' }, index.h("section", { key: '7b84836ca56ef7fba1651d80d0226642b7d36fc1', class: "mobile-tasks-container" }, index.h("wa-card", { key: 'ef4748268f9f609fb143bed95a71e3926dec0d2d' }, index.h("ir-tasks-header", { key: '82e0fd6a6641dbacab97ae2dc3ef21790cdfdb4b' })), mobileTasks?.length === 0 && index.h("p", { key: '9359f4ed2ea2327ffc113c2878dc4f6fc0f54862', class: "empty-msg" }, t.t('Lcz_NoTasksFound', { fallback: 'No tasks found ;)' })), (() => {
            const groups = [];
            for (const task of mobileTasks) {
                const last = groups[groups.length - 1];
                if (last && last.date === task.date) {
                    last.tasks.push(task);
                }
                else {
                    groups.push({ date: task.date, formattedDate: task.formatted_date, tasks: [task] });
                }
            }
            return groups.map((group, groupIndex) => {
                const nextGroup = groups[groupIndex + 1];
                const isEndOfToday = this.isEndOfTodayBoundary(group.date, nextGroup?.date);
                return (index.h("div", { key: group.date, class: { 'mobile-date-group': true, 'end-of-today-group': isEndOfToday } }, index.h("p", { class: "mobile-date-label" }, group.formattedDate), group.tasks.map(task => {
                    const isCheckable = this.isCheckable(task);
                    const isSkippable = this.isSkippable(task);
                    return index.h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
                })));
            });
        })(), index.h("ir-tasks-table-pagination", { key: '162bd50fc3090a81b44a9e3a7a9dfe927bfd7377' })), index.h("wa-card", { key: 'e15110d04bd0cda619ce3424e1cd0a26158674be', class: "table-container" }, index.h("ir-tasks-header", { key: '23adee5f60f9730fa6a1fa9343672079c4c2234d', class: "tasks__header" }), index.h("div", { key: '5f2348046c4778ceea5bd9df3949539576ba6711', class: "table--container" }, index.h("table", { key: '19a7f75fe0e4879f50ff1e8feceae1f7c754f9bd', class: "table data-table", "data-testid": "hk_tasks_table" }, index.h("thead", { key: '371c410c85e4cb6923db30765379cd60f5b7f15d', class: "table-header" }, index.h("tr", { key: '4e29ea0a2e662ee5fc5440a2422edc42f332acde' }, index.h("th", { key: 'e23188e8461539a8c6869b4dc3e883f4dc81deb4', class: 'task-row' }, index.h("wa-checkbox", { key: 'b1a5d926038ffd2ec23f9b101d3ddd166a22c2cc', indeterminate: hkTasks_store.hkTasksStore.selectedTasks.length > 0 && hkTasks_store.hkTasksStore.selectedTasks.length < hkTasks_store.getCheckableTasks().length, checked: this.allSelected, defaultChecked: this.allSelected, onchange: () => this.toggleSelectAll() })), index.h("th", { key: '544a3d388447bd76ad82d635b7417bb1f09a87a2', class: "" }, t.t('Lcz_Period', { fallback: 'Period' })), index.h("th", { key: '47160775462d4cf664ab299282ab34146e26dc9f', class: "" }, this.tasks.length > 1 && this.tasks.length + ' ', t.t('Lcz_Unit', { fallback: 'Unit' })), index.h("th", { key: 'c521d3a41a7f47ff38c6ba09b88f9b15093ee254', class: "sortable", onClick: () => this.handleSort('status') }, index.h("div", { key: 'd3ff0837039ac79b5aa77cc033f6763075e01956', class: "th-sort-inner" }, index.h("span", { key: 'acd1eeb0651409d61cbbe860124207628f2691cf' }, t.t('Lcz_Status', { fallback: 'Status' })), index.h("svg", { key: 'b3b585f617550acdc60ac456ac57ac3035fe6bbc', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, index.h("path", { key: '905ecf105ef2fef90c8eb7651f587b151d3ba02e', d: "m21 16-4 4-4-4" }), index.h("path", { key: '3ec4dabe7ff8ab8c178240c2c76076513bc9ea17', d: "M17 20V4" }), index.h("path", { key: 'bf6775626488f4f316d97aa421aa0cba0f6137b3', d: "m3 8 4-4 4 4" }), index.h("path", { key: 'ce17f12b201e32611c57a1bdcc8f41993b5cb5a0', d: "M7 4v16" })))), index.h("th", { key: '240301d314c9946ac8551a33337537b69afe6d5b', class: " ir-text-start" }, t.t('Lcz_Hint', { fallback: 'Hint' })), index.h("th", { key: '6c0eea4f268043b16537630bf713fcd3bc62fc5f', class: " ir-text-start" }, t.t('Lcz_Tasks', { fallback: 'Tasks' })), index.h("th", { key: '15e8e35f8a9c196e8e2cf3d619f9df05c04ef546', class: "ir-text-start" }, t.t('Lcz_Ad', { fallback: 'Ad' })), index.h("th", { key: 'd20bd097ae3e200c6d14244e469433eb04a6ed3e', class: "ir-text-start" }, t.t('Lcz_Ch', { fallback: 'Ch' })), index.h("th", { key: '1c9af146c6cc0771a9d1ba4e3b56d5c53d559269', class: "ir-text-start" }, t.t('Lcz_In', { fallback: 'In' })), haveManyHousekeepers && (index.h("th", { key: '117188ffd19490d30174f6cf0bb60bd368ced566', class: "sortable", onClick: () => this.handleSort('housekeeper') }, index.h("div", { key: '76aa9d12cb4af4875d0e4b08f1708108b6eacc08', class: "th-sort-inner" }, index.h("span", { key: '5806ba333bdd217e9eebced266b399e1545d38cd' }, t.t('Lcz_Housekeeper', { fallback: 'Housekeeper' })), index.h("svg", { key: 'e11b9f8078ce95d103459b7686b6390a9fc5a0fa', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, index.h("path", { key: '08cdce17a0661b9dfeef6e963c0835120378fddf', d: "m21 16-4 4-4-4" }), index.h("path", { key: '5b778f0ef08c73c4973097ee3507fafd5d84c17d', d: "M17 20V4" }), index.h("path", { key: 'd5310c89163ebe6fad477438829883addfe47647', d: "m3 8 4-4 4 4" }), index.h("path", { key: '2ad1cbe320724cefd89764983f71c1551eb87a2d', d: "M7 4v16" }))))), index.h("th", { key: 'cfd5a8c098087b70e258d63ef76517430f4a2ad8' }))), index.h("tbody", { key: '051ae01ef3a657944487d8d6382f3ca6013a268b' }, tasks.length === 0 && (index.h("tr", { key: 'f4334d82433389b9d33fa3144098ff16012d25b2', class: "ir-table-row" }, index.h("td", { key: '126b4cb478a22b1b10911dbfce4b0f4cf8880195', colSpan: 9 }, index.h("div", { key: '4521b60e1fbbcf59ddf0c54bd5db3d7e4e04635a', class: "table-empty-state" }, index.h("span", { key: '7c4c5e872649f28c91ca66e3abdf3fc04d550877' }, t.t('Lcz_NoTasksFound', { fallback: 'No tasks found ;)' })))))), tasks?.map((task, taskIndex) => {
            const isSelected = hkTasks_store.hkTasksStore.selectedTasks.some(t => t.id === task.id);
            const isCheckable = this.isCheckable(task);
            const isEndOfToday = this.isEndOfTodayBoundary(task.date, tasks[taskIndex + 1]?.date);
            return (index.h("tr", { "data-date": task.date, "data-testid": `hk_task_row`, "data-assigned": task.housekeeper ? 'true' : 'false', style: isCheckable && { cursor: 'pointer' }, onClick: () => {
                    if (!isCheckable) {
                        return;
                    }
                    this.toggleSelection(task);
                }, class: {
                    'selected': isSelected,
                    '--clickable': isCheckable,
                    'end-of-today-row': isEndOfToday,
                    'task-table-row ir-table-row ': true,
                }, key: task.id }, index.h("td", { class: "task-row " }, isCheckable && (index.h("wa-checkbox", { checked: isSelected, defaultChecked: isSelected, onchange: () => {
                    if (!isCheckable) {
                        return;
                    }
                    this.toggleSelection(task);
                } }))), index.h("td", { class: "task-row " }, task.formatted_date), index.h("td", { class: "task-row " }, index.h("span", { class: { 'highlighted-unit': task.is_highlight } }, task.unit.name)), index.h("td", { class: "task-row  ir-text-start" }, task?.status?.code === 'NC' ? (task?.base_status?.description ?? task.status.description) : task.status.description), index.h("td", { class: "task-row  ir-text-start" }, task.hint), index.h("td", { class: "task-row  ir-text-start" }, index.h("div", { class: "th-sort-inner" }, this.taskBadges(task))), index.h("td", { class: "task-row ir-text-start" }, number.formatCount(task.adult)), index.h("td", { class: "task-row ir-text-start" }, number.formatCount(task.child)), index.h("td", { class: "task-row ir-text-start" }, number.formatCount(task.infant)), haveManyHousekeepers && (index.h("td", { class: "task-row ", style: { textAlign: 'start' }, onClick: (e) => e.stopPropagation() }, index.h("wa-select", { key: `${task.id}-${this.selectRevertKey}`, class: "hk-owner-select", size: "s", value: String(task.hkm_id ?? 0), defaultValue: String(task.hkm_id ?? 0), onchange: (e) => {
                    e.stopPropagation();
                    const hkmId = Number(e.target.value);
                    this.pendingChange = { task, hkmId };
                    this.dialog.openModal();
                } }, index.h("wa-option", { value: "0" }, t.t('Lcz_Unassigned', { fallback: 'Unassigned' })), housekeepers
                .filter(housekeeper => housekeeper.is_active)
                .map(housekeeper => (index.h("wa-option", { key: housekeeper.id, value: String(housekeeper.id) }, housekeeper.name)))))), index.h("td", null, this.isSkippable(task) && (index.h("ir-custom-button", { onClick: e => {
                    e.stopPropagation();
                }, variant: "brand", appearance: "outlined", onClickHandler: () => {
                    this.skipSelectedTask.emit(task);
                } }, t.t('Lcz_Skip', { fallback: 'Skip' }))))));
        })))), index.h("div", { key: '1f915c546213f5ff2ffee9741484cf514daa1981', class: "data-table--pagination " }, index.h("ir-tasks-table-pagination", { key: 'ea0c3d10718f6ec7fb09a9cf457818e318012d7d' }))), index.h("ir-dialog", { key: 'b53c70ebe267a3de67315fb379c520e94334e788', ref: el => (this.dialog = el), label: t.t('Lcz_Confirmation', { fallback: 'Confirmation' }), lightDismiss: false }, index.h("span", { key: '42309bcb70c566e6755e29e94f0c82ac03f10f91' }, t.t('Lcz_Assign', { fallback: 'Assign' }), " ", index.h("strong", { key: 'd5289f08146999c74d7d1b390d73aecb9dcc74d4' }, this.pendingChange?.task?.unit?.name), ' ', index.h("span", { key: '498082f51a348ebf9ff8566b54dff83aee0bcc73', class: "hk-dialog__connector" }, t.t('Lcz_To', { fallback: 'To' })), " ", index.h("strong", { key: '349f057e6759e1826e398835e52ce2c20128f29c' }, pendingHkName), "?"), index.h("div", { key: '43b40eaf21dab76609e396d47bacb407c79980e7', slot: "footer", class: "hk-dialog-footer" }, index.h("ir-custom-button", { key: '777f303bc25c581d93cfd7894ca0e84c4f585f78', size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.pendingChange = null;
                this.selectRevertKey++;
                this.dialog.closeModal();
            } }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: '122f8676d88ea92966c47df03ff065897a1d8c5d', size: "m", appearance: "accent", variant: "brand", loading: irInterceptor_store.isRequestPending('/Override_HK_Task_Ownership'), onClickHandler: () => this.confirmOwnershipChange() }, t.t('Lcz_Confirm', { fallback: 'Confirm' }))))));
    }
    static get watchers() { return {
        "tasks": [{
                "handleTasksChange": 0
            }]
    }; }
};
IrTasksTable.style = irTasksTableCss() + tableCss();

const irTasksTablePaginationCss = () => `.sc-ir-tasks-table-pagination-h{display:block;margin-top:auto}.page-item.active.sc-ir-tasks-table-pagination .page-link.sc-ir-tasks-table-pagination{background-color:var(--blue)}.tasks-pagination.sc-ir-tasks-table-pagination{display:none !important}@media (min-width: 640px){.tasks-load-more.sc-ir-tasks-table-pagination{display:none}.tasks-pagination.sc-ir-tasks-table-pagination{display:flex !important}}`;

const IrTasksTablePagination = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        const { currentPage, pageSize, totalPages, mobileCurrentPage } = hkTasks_store.hkTasksStore.pagination;
        const totalTasks = hkTasks_store.hkTasksStore.tasks?.length ?? 0;
        const start = totalTasks === 0 ? 0 : (currentPage - 1) * pageSize + 1;
        const end = Math.min(currentPage * pageSize, totalTasks);
        const pageSizes = hkTasks_store.hkTasksStore.pagination.tasksList[0] > totalTasks ? hkTasks_store.hkTasksStore.pagination.tasksList.slice(0, 1) : hkTasks_store.hkTasksStore.pagination.tasksList;
        return (index.h(index.Host, { key: 'b5a2f40f38ab5084b7a3141bac4ff8356fc86856' }, hkTasks_store.shouldLoadMore() && (index.h("ir-custom-button", { key: 'a0d1a7f85d9d182fe9d45d2784f80e5d951a76cb', variant: "brand", size: "s", class: "tasks-load-more", onClickHandler: () => hkTasks_store.loadMoreTasks(mobileCurrentPage + 1) }, t.t('Lcz_LoadMore', { fallback: 'Load more' }))), index.h("ir-pagination", { key: 'c7584b0ae0f972ae8ca2d6979492545d0ab26c99', showing: {
                from: start,
                to: end,
            }, allowPageSizeChange: true,
            // class="tasks-pagination"
            total: totalTasks, pages: totalPages, pageSize: pageSize, currentPage: currentPage, pageSizes: pageSizes, onPageChange: e => hkTasks_store.updateCurrentPage(e.detail.currentPage), onPageSizeChange: e => hkTasks_store.updatePageSize(e.detail.pageSize), showTotalRecords: true, recordLabel: t.t('Lcz_Tasks') })));
    }
};
IrTasksTablePagination.style = irTasksTablePaginationCss();

exports.ir_hk_archive_drawer = IrHkArchiveDrawer;
exports.ir_tasks_card = IrTasksCard;
exports.ir_tasks_filters = IrTasksFilters;
exports.ir_tasks_header = IrTasksHeader;
exports.ir_tasks_table = IrTasksTable;
exports.ir_tasks_table_pagination = IrTasksTablePagination;
