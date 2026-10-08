'use strict';

var index = require('./index-CQkpA5n3.js');
var index$1 = require('./index-Dn9o_etw.js');
var calendarData = require('./calendar-data-Br2L_0sg.js');
var irInterceptor_store = require('./ir-interceptor.store-B6XUQQuI.js');
var utils = require('./utils-HVSePjFf.js');
var moment = require('./moment-CdViwxPQ.js');
var t = require('./t-wyGILxEL.js');
var irDate = require('./ir-date-wIaf9EWb.js');
var v4 = require('./v4-_2BfiRUa.js');
var hkTasks_store = require('./hk-tasks.store-ClfPoXUn.js');
var number = require('./number-BAlv3tpP.js');
require('./types-BVJQZ50e.js');
require('./locale-scope-C7rmpwuA.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./commonSchemas-D4iFLV5-.js');
require('./booking.dto-CUSvGTvD.js');
require('./type-Bj2x9EWc.js');
require('./calendar-dates-BxDGM1ix.js');
require('./language-observer-DKp37LIu.js');

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
        return (index.h(index.Host, { key: '43b17418ca991d3c9ac4a63e49b44ae30c5552b0' }, index.h("ir-drawer", { key: '938a06b4b9040c8248b90d38a4bac520d4be4198', open: this.open, label: t.t('Lcz_CleaningArchives90Days', { fallback: 'Cleaning Archives (90 days)' }), class: "hk_archive__drawer", onDrawerHide: () => this.drawerClosed.emit() }, index.h("div", { key: '679728ef90437639c67efef973d9057039a58e1f', class: "archive-content" }, index.h("div", { key: '5b9f6c85647aa44b5459a0330e71a1abaa4f5e88', class: "filters" }, index.h("div", { key: '762c12e86f364a0b5fdd9b5c3a92cfa2e210520f', class: "filters-row" }, index.h("wa-select", { key: '7d9cd2c0886d216085e6917a4fdd2a6fa10481ce', size: "s", placeholder: t.t('Lcz_AllUnits', { fallback: 'All units' }), onchange: (e) => {
                const val = e.target.value;
                this.updateFilters({ filtered_by_unit: val === '000' ? [] : [Number(val)] });
            }, defaultValue: '000' }, index.h("wa-option", { key: '2f79df12ab40433b9fc5a923879d1e155890287a', value: "000" }, t.t('Lcz_AllUnits', { fallback: 'All units' })), this.units
            .slice()
            .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
            .map(v => (index.h("wa-option", { value: v.id.toString() }, v.name)))), index$1.housekeeping_store?.hk_criteria?.housekeepers.length > 1 && (index.h("wa-select", { key: 'e0384b7586f33e4ed1990b37817391b9285b9389', size: "s", defaultValue: '000', placeholder: t.t('Lcz_Allhousekeepers', { fallback: 'All housekeepers' }), onchange: (e) => {
                const val = e.target.value;
                this.updateFilters({ filtered_by_hkm: val === '000' ? [] : [Number(val)] });
            } }, index.h("wa-option", { key: '936d1be4b784b5a9e589f53e91fc8045c8829487', value: "000" }, t.t('Lcz_Allhousekeepers', { fallback: 'All housekeepers' })), index$1.housekeeping_store.hk_criteria.housekeepers
            .slice()
            .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
            .map(v => (index.h("wa-option", { value: v.id.toString() }, v.name)))))), index.h("div", { key: 'b897d56c6670084f4501c8e1e17a36718db69b21', class: "filters-row" }, index.h("ir-date-range-filter", { key: 'ba84507d3a6348ef01d55381613d72d14297b9d5', withClear: false, selectionMode: "auto", maxDate: this.maxSelectableDate, minDate: this.minSelectableDate, fromDate: this.filters.from_date, toDate: this.filters.to_date, onDatesChanged: e => this.updateFilters({ from_date: e.detail.from, to_date: e.detail.to }) }), index.h("div", { key: 'ecc3a16ffff09b9cca4cffdba3a9f15d5d349b82', class: "filter-actions" }, index.h("ir-custom-button", { key: '1de6d0eb5d829f37d742e97cc29da9337f10f1da', variant: "neutral", appearance: "outlined", loading: this.isLoading === 'search', onClickHandler: () => this.searchArchive() }, t.t('Lcz_Search', { fallback: 'Search' })), index.h("ir-custom-button", { key: 'd7ef2e43f1f80f7edcc5232d84b52b3fcc355e9e', variant: "neutral", appearance: "outlined", loading: this.isLoading === 'excel', onClickHandler: () => this.exportArchive() }, index.h("wa-icon", { key: 'dccee8181a4ff3740c9c25e7c25845cf4c0707b8', name: "download", slot: "start" }), t.t('Lcz_ExportToExcel', { fallback: 'Export' }))))), this.fetchedData && (index.h("div", { key: 'd6be7e03edaddedc8599b97019704119e13c3034', class: "results" }, this.data?.length === 0 && !irInterceptor_store.isRequestPending('/Get_Archived_HK_Tasks') ? (index.h("ir-empty-state", { message: t.t('Lcz_NoResultsFound', { fallback: 'No results found' }) })) : (index.h("div", { class: "table-wrapper" }, index.h("table", { class: "table data-table" }, index.h("thead", null, index.h("tr", null, index.h("th", null, t.t('Lcz_Period', { fallback: 'Period' })), index.h("th", null, t.t('Lcz_Housekeeper', { fallback: 'Housekeeper' })), index.h("th", null, t.t('Lcz_Unit', { fallback: 'Unit' })), index.h("th", null, t.t('Lcz_BookingNumber', { fallback: 'Booking #' })))), index.h("tbody", null, this.data?.map(d => (index.h("tr", { key: d.id, class: "ir-table-row" }, index.h("td", null, irDate.formatDate(d.date, 'MMM DD, YYYY')), index.h("td", null, d.house_keeper), index.h("td", null, index.h("ir-tooltip", { message: d.unit, customSlot: true, containerStyle: { width: 'fit-content' } }, index.h("span", { slot: "tooltip-trigger", class: "unit-name" }, d.unit))), index.h("td", null, d.booking_nbr ? (index.h("ir-custom-button", { link: true, onClickHandler: () => (this.selectedBooking = d.booking_nbr) }, d.booking_nbr.toString())) : (t.t('Lcz_WasVacant', { fallback: 'Was vacant' })))))))))))))), index.h("ir-booking-details-drawer", { key: 'afa09d789697ae0b48740871e692f18609c15f77', open: !!this.selectedBooking, propertyId: Number(this.propertyId), bookingNumber: this.selectedBooking?.toString(), ticket: this.ticket, language: this.language, onBookingDetailsDrawerClosed: () => (this.selectedBooking = null) })));
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
        return (index.h("wa-card", { key: 'b4e5962d29af89315adfbf38cad51382adcc3057', class: "task-card" }, index.h("div", { key: '7476ed3c465966bc6bbea3e2608d05aff0dd9a33', class: "task-card__body" }, index.h("div", { key: '56aa93577d6b412f40ba8df6ae8f195a2ebd99a4', class: "task-card__unit" }, index.h("span", { key: '65c838a65fc3c4806baf68c2b183fccd6169d2cc', class: "task-card__unit-name" }, this.task.unit.name), index.h("div", { key: 'e24c94df5cb92dd77e8320e4605e127a85dfd0a2', class: "task-card__meta" }, index.h("span", { key: '6836622d6a7d6af1c6d9161fe05d611faf7a23b0', class: "task-card__status" }, this.task.status.description), this.task.hint && index.h("span", { key: 'ea0b284a4ee073ddd1031e3dd9a1f6fd19a970aa', class: "task-card__sep" }, "\u00B7"), this.task.hint && index.h("span", { key: '28f29f2b44614c7885f24481e1c77ffec7bc06b9', class: "task-card__hint" }, this.task.hint))), index.h("div", { key: 'b4bd48998acbf90683dd6be83b182f14804dd49c', class: "task-card__badges" }, this.taskTypeBadge(this.task.task_type?.code), this.task.extra_task?.map(et => this.taskTypeBadge(et.task_type?.code))), this.guests.length > 0 && (index.h("div", { key: 'a9433df72d305d05a0048a514c437456ef3c4e62', class: "task-card__guests" }, this.guests.map(g => (index.h("div", { class: "task-card__guest" }, index.h("wa-icon", { name: g.icon, class: "task-card__guest-icon", style: { fontSize: `${Math.min(0.75 + g.count * 0.15, 1.4)}rem` } }), index.h("span", { class: "task-card__guest-count" }, number.formatCount(g.count))))))), index.h("div", { key: '7600312dd9589df904b3d4a6337a4eba15958227', class: "task-card__assign" }, index.h("wa-select", { key: 'b28eea1f3905c6aa2adc76589f887e0b56a999c9', label: t.t('Lcz_Housekeeper', { fallback: 'Housekeeper' }), class: "task-card__hk-select", size: "s", placeholder: t.t('Lcz_Unassigned', { fallback: 'Unassigned' }), value: this.task.hkm_id ? String(this.task.hkm_id) : '0', defaultValue: this.task.hkm_id ? String(this.task.hkm_id) : '0', onchange: e => {
                const hkm_id = Number(e.target.value);
                this.assignHousekeeper.emit({ task: this.task, hkm_id });
            } }, index.h("wa-option", { key: '8d9dc723e8c68c0c42ebf71a58f79156fa3f381e', value: "0" }, t.t('Lcz_Unassigned', { fallback: 'Unassigned' })), index$1.housekeeping_store.hk_criteria?.housekeepers
            .slice()
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(hk => (index.h("wa-option", { key: hk.id, value: String(hk.id) }, hk.name))))), index.h("div", { key: '7a225340274e507591d02eae96b7fb63625cc8cf', class: "task-card__actions" }, this.isSkippable && (index.h("ir-custom-button", { key: '043836fa9c981d71712849ab2dc68cc95dedeb99', variant: "neutral", appearance: "outlined", onClickHandler: () => this.skipSelectedTask.emit(this.task) }, t.t('Lcz_Skip', { fallback: 'Skip' }))), this.isCheckable && (index.h("div", { key: 'b3042a19391325879baa2f9a3efdb4a98090963b', class: "task-card__clean-group" }, index.h("ir-custom-button", { key: '1e4d204a773b1bbf9dae4acc40e4d44dc14048b6', variant: "brand", appearance: "filled", onClickHandler: () => {
                hkTasks_store.toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            } }, t.t('Lcz_CleanAndInspect', { fallback: 'Clean & Inspect' })), index.h("ir-custom-button", { key: '03f18cfba4ff5e07c6b32121f00d2c8cda770a25', variant: "brand", appearance: "accent", onClickHandler: () => {
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
        return (index.h("ir-filter-card", { key: 'f1a75df737be04e40c226b832e98e90f06613aab' }, index.h("fieldset", { key: 'b9e23c5a9ca660f6306b07747404b9956ac0eae7' }, index.h("wa-select", { key: '34de193858b18107d19055dc2551e01e04e3d767', label: t.t('Lcz_Period', { fallback: 'Period' }), size: "s", "data-testid": "period", value: this.filters?.cleaning_periods?.code, defaultValue: this.filters?.cleaning_periods?.code, onchange: e => this.updateFilter({ cleaning_periods: { code: e.target.value } }) }, index$1.housekeeping_store?.hk_criteria?.cleaning_periods.map(v => (index.h("wa-option", { key: v.code, value: v.code }, v.description))))), index$1.housekeeping_store?.hk_criteria?.housekeepers.length > 1 && (index.h("fieldset", { key: 'efefa88b578d218ab9404666bfc2a812cbb9209a' }, index.h("wa-select", { key: '59f4e10c2a4a271c252a71a8a3a2cdc579ec6282', label: t.t('Lcz_Housekeepers', { fallback: 'Housekeepers' }), size: "s", "data-testid": "housekeepers", value: this.filters?.housekeepers, defaultValue: this.filters?.housekeepers, onchange: e => this.updateFilter({ housekeepers: e.target.value }) }, index.h("wa-option", { key: '2e5684a5f7090ead08aefcdf5a39cb5e9611bc6a', value: "000" }, t.t('Lcz_Allhousekeepers', { fallback: 'All housekeepers' })), index$1.housekeeping_store?.hk_criteria?.housekeepers
            .slice()
            .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
            .map(v => (index.h("wa-option", { key: v.id, value: v.id.toString() }, v.name)))))), index.h("fieldset", { key: '89f7d054ce3294d46c6194facccda0073f5438af' }, index.h("wa-select", { key: '526783b7cc48b165a09257788994e35f27b6da90', label: t.t('Lcz_IncludeDustyUnits', { fallback: 'Include dusty units' }), size: "s", "data-testid": "dusty_units", value: this.filters?.dusty_units?.code, defaultValue: this.filters?.dusty_units?.code, onchange: e => this.updateFilter({ dusty_units: { code: e.target.value } }) }, index$1.housekeeping_store.hk_criteria?.dusty_periods?.map(v => (index.h("wa-option", { key: v.code, value: v.code }, v.description))))), index.h("fieldset", { key: '3304f846c67afe6813631c9216c59681e8d8dadc' }, index.h("wa-select", { key: '7259bc62bae478da3a1d1f3327eb5d066beedfdc', label: t.t('Lcz_HighlightCheck-insFrom'), size: "s", "data-testid": "highlight_check_ins", value: this.filters?.highlight_check_ins?.code, defaultValue: this.filters?.highlight_check_ins?.code, onchange: e => this.updateFilter({ highlight_check_ins: { code: e.target.value } }) }, index$1.housekeeping_store.hk_criteria?.highlight_checkin_options?.map(v => (index.h("wa-option", { key: v.code, value: v.code }, v.description))))), index.h("div", { key: '960b18c1e2da6eef397d74bd16350948152b0c1f', slot: "footer" }, index.h("ir-custom-button", { key: '6f0eeb14e49c182fd44dde1bb36a3e2b938b7442', variant: "neutral", appearance: "filled", "data-testid": "reset", onClickHandler: e => this.resetFilters(e) }, t.t('Lcz_Reset', { fallback: 'Reset' })), index.h("ir-custom-button", { key: 'b0d5c476e74f9f8ca576ad60284946df3e7b818f', variant: "brand", "data-testid": "apply", loading: this.isLoading, onClickHandler: e => this.applyFiltersEvt(e) }, t.t('Lcz_Apply', { fallback: 'Apply' })))));
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
        return (index.h(index.Host, { key: '98dff74987019cf54c940b1dff6458932a50a5cd' }, index.h("div", { key: 'db7d124cbe69acd4aee6b13ddbcdd3484c18b633', class: "search-filter-container", style: { gap: '1rem' } }, index.h("ir-input", { key: 'eb441648be8461148a0ea947dcd11f57e0d6de12', placeholder: t.t('Lcz_SearchUnit', { fallback: 'Search unit' }), class: "search-filter-input", value: hkTasks_store.hkTasksStore.searchField, "onText-change": e => hkTasks_store.updateSearchField(e.detail) }, index.h("wa-icon", { key: '1591f2cd0c4f4031421e22acce58956633b4b3ff', name: "magnifying-glass", slot: "start" }))), index.h("div", { key: '65196d838a64d66bbaa1410026c0105048a58b7f', class: "action-buttons", style: { gap: '1rem' } }, index.h("ir-custom-button", { key: '0a06a101ed90846b471bd4eb0976fff3db3e7577', appearance: "outlined", variant: "neutral", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'export' });
            } }, index.h("wa-icon", { key: '89fd5f4d5381051f7ad2e3c22c309a1debb48652', slot: "start", name: "download" }), t.t('Lcz_Export', { fallback: 'Export' })), index.h("ir-custom-button", { key: 'db48b75c303377cfdbcedef31b36e36448078452', appearance: "outlined", variant: "neutral", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'archive' });
            } }, t.t('Lcz_Archives', { fallback: 'Archives' })), index.h("wa-animation", { key: '1e0fcaa141dc7477c7170837829dcd290d63b86b', iterations: 1, id: "cleanInspectAnimation", class: "clean-button", name: "rubberBand", easing: "ease-in-out", duration: 800 }, index.h("ir-custom-button", { key: 'a060e639f51ca9cd6029436739bac6e6b52649dc', appearance: "filled", variant: "brand", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'clean-inspect' });
            }, disabled: !(hkTasks_store.hkTasksStore.selectedTasks.length > 0) }, t.t('Lcz_CleanAndInspect', { fallback: 'Clean & Inspect' }))), index.h("wa-animation", { key: 'a04195eb3470db13305f5b26677ba5ea6b191665', iterations: 1, id: "cleanAnimation", class: "clean-button", name: "rubberBand", easing: "ease-in-out", duration: 800 }, index.h("ir-custom-button", { key: '0d6a44ade1e2d4362aae1fe27875617096956f19', disabled: !(hkTasks_store.hkTasksStore.selectedTasks.length > 0), onClickHandler: e => {
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
        return (index.h(index.Host, { key: '9e135679da7ac11d02aa796346a017710fae1b31' }, index.h("section", { key: '38a75069e1dad1dfab64b37c55d12557709e871b', class: "mobile-tasks-container" }, index.h("wa-card", { key: 'e393d8a7374bb2bcf5e6787a88b96a99fecf73d2' }, index.h("ir-tasks-header", { key: 'a76c126fdf5b9b054f84657d706e8135810ae220' })), mobileTasks?.length === 0 && index.h("p", { key: '5a9bc75ea0d0a5b442f8d049ddc64ce1d6f12b9d', class: "empty-msg" }, t.t('Lcz_NoTasksFound', { fallback: 'No tasks found ;)' })), (() => {
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
        })(), index.h("ir-tasks-table-pagination", { key: '4e6c7527e1100c2b10adbdccd5e845b45fed83bf' })), index.h("wa-card", { key: '36600acfa788bc6dea00d144918fd6108ee89ba5', class: "table-container" }, index.h("ir-tasks-header", { key: 'afbf0c4a73d3cefc57697afb5991f2d59774a038', class: "tasks__header" }), index.h("div", { key: '9ecf14ebfceef92b402a43b16719e1dd65053102', class: "table--container" }, index.h("table", { key: '638213a25977b1baa712b174073354aee2958231', class: "table data-table", "data-testid": "hk_tasks_table" }, index.h("thead", { key: '45cb0de52443c2f0ca5efd83576cd84a1fddcdbc', class: "table-header" }, index.h("tr", { key: '6a110a01351ad0907160b4f9fb5b1ca6426073fd' }, index.h("th", { key: '386f0b10498357b505ed5fa92c818771c79a3f2c', class: 'task-row' }, index.h("wa-checkbox", { key: 'db44aa929e5934eb060e173bf91141f1a96a62b1', indeterminate: hkTasks_store.hkTasksStore.selectedTasks.length > 0 && hkTasks_store.hkTasksStore.selectedTasks.length < hkTasks_store.getCheckableTasks().length, checked: this.allSelected, defaultChecked: this.allSelected, onchange: () => this.toggleSelectAll() })), index.h("th", { key: 'c776b96b8c99e71f43889bc0fd1393119c20af7b', class: "" }, t.t('Lcz_Period', { fallback: 'Period' })), index.h("th", { key: '0672dc507d34d0d4f3db9b417f435db0357d97a5', class: "" }, this.tasks.length > 1 && this.tasks.length + ' ', t.t('Lcz_Unit', { fallback: 'Unit' })), index.h("th", { key: '0aca838c35f9710d19344115381fba6d56ad35a5', class: "sortable", onClick: () => this.handleSort('status') }, index.h("div", { key: '1a1e5417bd44a17143827cda2e706344d8c33e4f', class: "th-sort-inner" }, index.h("span", { key: '9bd29d8905d71bfca3175eba909e5bef7b53759c' }, t.t('Lcz_Status', { fallback: 'Status' })), index.h("svg", { key: 'f0652cdcd150d9df10c6fe6a763b79fbeac46c86', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, index.h("path", { key: '27b063679e95c7fa639fc598c54a3c6bb1e3280c', d: "m21 16-4 4-4-4" }), index.h("path", { key: '09c1a9bb7691fbf174639cfe03e4fafcdfa3ff80', d: "M17 20V4" }), index.h("path", { key: '46fe28105190ea20af352f30da7097b0294c82bc', d: "m3 8 4-4 4 4" }), index.h("path", { key: '7bfa5a1e47851cee3e462064acbd31f16db9d557', d: "M7 4v16" })))), index.h("th", { key: '08761c63e77190ce4a20c1ab7364c6b67171d2aa', class: " ir-text-start" }, t.t('Lcz_Hint', { fallback: 'Hint' })), index.h("th", { key: 'fe2df33ad9595846e65b191db61c3fb7c3c72833', class: " ir-text-start" }, t.t('Lcz_Tasks', { fallback: 'Tasks' })), index.h("th", { key: '662f6c5e6af2ea16d06ae65e6aaf1d8fd2879cb6', class: "ir-text-start" }, t.t('Lcz_Ad', { fallback: 'Ad' })), index.h("th", { key: '69f296a6626257f614e9de1c1fd5bab60cfbabd5', class: "ir-text-start" }, t.t('Lcz_Ch', { fallback: 'Ch' })), index.h("th", { key: '2e062ecf7861beb51a4e29db94223a024667d1d9', class: "ir-text-start" }, t.t('Lcz_In', { fallback: 'In' })), haveManyHousekeepers && (index.h("th", { key: '9ba11df33cb33ec00edda9f8971fe9d2535087d8', class: "sortable", onClick: () => this.handleSort('housekeeper') }, index.h("div", { key: 'ade9e8b012f10c7c72425d53dc9df8eef42ac4c1', class: "th-sort-inner" }, index.h("span", { key: 'fe9a484a250e32ba10a0dcd2ee02996d1483f501' }, t.t('Lcz_Housekeeper', { fallback: 'Housekeeper' })), index.h("svg", { key: 'b7ae84cb69eca550d28697686b63b32c5c902777', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, index.h("path", { key: 'f3c3362d677c9c0e682b6492acf1ee8185dcb55a', d: "m21 16-4 4-4-4" }), index.h("path", { key: '19cb474dbe39166e6a205d198efaa7c586dbd6e9', d: "M17 20V4" }), index.h("path", { key: '13d340c2794771ce4046cc3e33359bc101c89046', d: "m3 8 4-4 4 4" }), index.h("path", { key: '61b6ba6c655701a426d16279bd93790701076a94', d: "M7 4v16" }))))), index.h("th", { key: 'b743d31114269c720deadaadd64a40c50c612691' }))), index.h("tbody", { key: 'b6fee429a1decd0f08ebf083c97460875bbb3458' }, tasks.length === 0 && (index.h("tr", { key: '3fe42d09d480b1ab24dcdd1fcf6537a7430b0aa8', class: "ir-table-row" }, index.h("td", { key: '6b59be29b2c9156756f188b645f1c4d37effe013', colSpan: 9 }, index.h("div", { key: '57b6d08fab616e75aed813787ab1c61662a7df51', class: "table-empty-state" }, index.h("span", { key: '344ef347eb1a0ad49ec04bd2a536cf74ee83938b' }, t.t('Lcz_NoTasksFound', { fallback: 'No tasks found ;)' })))))), tasks?.map((task, taskIndex) => {
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
        })))), index.h("div", { key: '203d067f2d8bc5a77bf8a67452fa2fa8ed694c02', class: "data-table--pagination " }, index.h("ir-tasks-table-pagination", { key: 'ea3f878446eb45659397a7795010cc5de99473f4' }))), index.h("ir-dialog", { key: '9bc2001774af492b8f01f2959cf309c4bb95ce1a', ref: el => (this.dialog = el), label: t.t('Lcz_Confirmation', { fallback: 'Confirmation' }), lightDismiss: false }, index.h("span", { key: '904b551c2d856701ba6ff0577c64742c1683e8c1' }, t.t('Lcz_Assign', { fallback: 'Assign' }), " ", index.h("strong", { key: '79bdcb2c7fe4e5060f9e688e877221e8c38097f4' }, this.pendingChange?.task?.unit?.name), ' ', index.h("span", { key: '92c49e9835251a15a69a62595861f2ce0bdc235b', class: "hk-dialog__connector" }, t.t('Lcz_To', { fallback: 'To' })), " ", index.h("strong", { key: '8492a0143839f39618d4416dcccb1c05662e6252' }, pendingHkName), "?"), index.h("div", { key: '08433a95061e5b61c30738d2a89c1c6b3ca8f3fe', slot: "footer", class: "hk-dialog-footer" }, index.h("ir-custom-button", { key: '289ddb04c5f709a8b0c11f5e53489fb801345ac1', size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.pendingChange = null;
                this.selectRevertKey++;
                this.dialog.closeModal();
            } }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: '7332c05d5fe0a7b24ae99c6327d9b7c5d6b2d116', size: "m", appearance: "accent", variant: "brand", loading: irInterceptor_store.isRequestPending('/Override_HK_Task_Ownership'), onClickHandler: () => this.confirmOwnershipChange() }, t.t('Lcz_Confirm', { fallback: 'Confirm' }))))));
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
        return (index.h(index.Host, { key: '763554c58f9c0e2bd222201b81e6d59f42ad8a8f' }, hkTasks_store.shouldLoadMore() && (index.h("ir-custom-button", { key: '98b33acd1f6417bc3b6ce313b8297b2f5242b994', variant: "brand", size: "s", class: "tasks-load-more", onClickHandler: () => hkTasks_store.loadMoreTasks(mobileCurrentPage + 1) }, t.t('Lcz_LoadMore', { fallback: 'Load more' }))), index.h("ir-pagination", { key: '55d9971bd95e99d9fa86324bf65bfe3778143795', showing: {
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
