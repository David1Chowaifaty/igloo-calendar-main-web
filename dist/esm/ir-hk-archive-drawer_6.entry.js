import { r as registerInstance, c as createEvent, h, H as Host, d as getElement } from './index-D7D7fhZS.js';
import { H as HouseKeepingService, h as housekeeping_store } from './housekeeping.service-I641YNVz.js';
import { c as calendar_data } from './calendar-data-15-64PrB.js';
import { i as isRequestPending } from './ir-interceptor.store-B5mzcEc4.js';
import { l as locales } from './locales.store-C0aS6UDK.js';
import { l as downloadFile } from './utils-DvzWTdKJ.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import { v as v4 } from './v4-CK3_k8jD.js';
import { t as toggleTaskSelection, h as hkTasksStore, u as updateSearchField, a as updateSorting, c as clearSelectedTasks, i as isAllTasksSelected, s as selectAllTasks, g as getCheckableTasks, b as updateTasks, d as getPaginatedTasks, e as getMobileTasks, f as updatePageSize, j as updateCurrentPage, k as shouldLoadMore, l as loadMoreTasks } from './hk-tasks.store-CoxZOI4b.js';
import './index-DeW5X45W.js';
import './index-TzZ5wfUy.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './type-D7rOPtKA.js';

const irHkArchiveDrawerCss = () => `.sc-ir-hk-archive-drawer-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-hk-archive-drawer{overflow-x:auto}.table--container.sc-ir-hk-archive-drawer,.data-table.sc-ir-hk-archive-drawer{height:100%}.ir-table-row.sc-ir-hk-archive-drawer td.sc-ir-hk-archive-drawer{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-hk-archive-drawer td.sc-ir-hk-archive-drawer{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-hk-archive-drawer tbody.sc-ir-hk-archive-drawer tr.sc-ir-hk-archive-drawer:last-child>td.sc-ir-hk-archive-drawer{border-bottom:0 !important}.table.sc-ir-hk-archive-drawer thead.sc-ir-hk-archive-drawer th.sc-ir-hk-archive-drawer{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-hk-archive-drawer thead.sc-ir-hk-archive-drawer th.sc-ir-hk-archive-drawer{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-hk-archive-drawer{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-hk-archive-drawer,.ir-table-row.sc-ir-hk-archive-drawer{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-hk-archive-drawer{text-transform:capitalize;cursor:pointer}.table.sc-ir-hk-archive-drawer thead.sc-ir-hk-archive-drawer th.sortable.sc-ir-hk-archive-drawer{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-hk-archive-drawer thead.sc-ir-hk-archive-drawer th.sortable.sc-ir-hk-archive-drawer:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-hk-archive-drawer thead.sc-ir-hk-archive-drawer th.sortable.sc-ir-hk-archive-drawer:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-hk-archive-drawer:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-hk-archive-drawer svg.sc-ir-hk-archive-drawer{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-hk-archive-drawer:hover td.sc-ir-hk-archive-drawer{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-hk-archive-drawer:hover td.sc-ir-hk-archive-drawer{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-hk-archive-drawer:active td.sc-ir-hk-archive-drawer{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-hk-archive-drawer td.sc-ir-hk-archive-drawer{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-hk-archive-drawer:hover td.sc-ir-hk-archive-drawer{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-hk-archive-drawer:active td.sc-ir-hk-archive-drawer{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-hk-archive-drawer .empty-row.sc-ir-hk-archive-drawer{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-hk-archive-drawer{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-hk-archive-drawer{position:sticky !important;right:0;background-color:white}.sc-ir-hk-archive-drawer-h{display:contents}.hk_archive__drawer.sc-ir-hk-archive-drawer::part(body),.hk_archive__drawer.sc-ir-hk-archive-drawer [part~="body"]{padding:0}.archive-content.sc-ir-hk-archive-drawer{display:flex;flex-direction:column}.filters.sc-ir-hk-archive-drawer{display:flex;flex-direction:column;gap:0.75rem;padding:1.5rem;padding-bottom:1.5rem;border-bottom:1px solid var(--wa-color-neutral-200, #e5e7eb)}.filters-row.sc-ir-hk-archive-drawer{display:flex;align-items:flex-end;gap:0.75rem;flex-wrap:wrap}.filters-row.sc-ir-hk-archive-drawer wa-select.sc-ir-hk-archive-drawer{flex:1;min-width:10rem}.filters-row.sc-ir-hk-archive-drawer ir-date-range-filter.sc-ir-hk-archive-drawer{flex:1;min-width:14rem}.filter-actions.sc-ir-hk-archive-drawer{display:flex;gap:0.5rem;flex-shrink:0}.table-wrapper.sc-ir-hk-archive-drawer{padding:1.5rem;padding-inline:0.75rem;padding-top:0;overflow-x:auto;-webkit-overflow-scrolling:touch}.archive-table.sc-ir-hk-archive-drawer{width:100%;border-collapse:collapse}.archive-table.sc-ir-hk-archive-drawer th.sc-ir-hk-archive-drawer,.archive-table.sc-ir-hk-archive-drawer td.sc-ir-hk-archive-drawer{white-space:nowrap;text-align:start;padding:0.4rem 0.75rem;border-bottom:1px solid var(--wa-color-neutral-200, #e5e7eb);font-size:var(--wa-font-size-s, 0.875rem)}.archive-table.sc-ir-hk-archive-drawer th.sc-ir-hk-archive-drawer{font-weight:600;color:var(--wa-color-neutral-600, #4b5563);border-bottom:2px solid var(--wa-color-neutral-200, #e5e7eb);padding-top:0}.archive-table.sc-ir-hk-archive-drawer tbody.sc-ir-hk-archive-drawer tr.sc-ir-hk-archive-drawer:last-child td.sc-ir-hk-archive-drawer{border-bottom:none}.archive-table.sc-ir-hk-archive-drawer tbody.sc-ir-hk-archive-drawer tr.sc-ir-hk-archive-drawer:hover td.sc-ir-hk-archive-drawer{background-color:var(--wa-color-neutral-50, #f9fafb)}.unit-name.sc-ir-hk-archive-drawer{max-width:100px;display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0;margin:0;text-align:start}`;

const IrHkArchiveDrawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.drawerClosed = createEvent(this, "drawerClosed");
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
    minSelectableDate = hooks().subtract(90, 'days').format('YYYY-MM-DD');
    maxSelectableDate = hooks().format('YYYY-MM-DD');
    houseKeepingService = new HouseKeepingService();
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
        calendar_data.roomsInfo.forEach(r => {
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
        this.data = [...(res?.tasks || [])].map(t => ({ ...t, id: v4() }));
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
            downloadFile(url);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = null;
        }
    }
    render() {
        return (h(Host, { key: 'cdc38dbd16f6650907f111f313d3f7d2c31d06cf' }, h("ir-drawer", { key: 'b6c0fae20bbf2554f42fa936d948d85869761a4b', open: this.open, label: "Cleaning Archives (90 days)", class: "hk_archive__drawer", onDrawerHide: () => this.drawerClosed.emit() }, h("div", { key: 'd33b845ea18531acaf70d2f369d578111d29cd7c', class: "archive-content" }, h("div", { key: '2e43714a0a76b1d9bcaed94c1ffe8aa9d8845e16', class: "filters" }, h("div", { key: 'c94bc006c766d0d7d95421aa4378038c708253dc', class: "filters-row" }, h("wa-select", { key: '5593959c209a3ecb143b21cb4972ac21276251c5', size: "s", placeholder: "All units", onchange: (e) => {
                const val = e.target.value;
                this.updateFilters({ filtered_by_unit: val === '000' ? [] : [Number(val)] });
            }, defaultValue: '000' }, h("wa-option", { key: 'c2e2788ca6eb43ea95afe8546e15686670fd2625', value: "000" }, "All units"), this.units
            .slice()
            .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
            .map(v => (h("wa-option", { value: v.id.toString() }, v.name)))), housekeeping_store?.hk_criteria?.housekeepers.length > 1 && (h("wa-select", { key: '47837de8f21097c6c60b27d97d6f943fcf19c434', size: "s", defaultValue: '000', placeholder: "All housekeepers", onchange: (e) => {
                const val = e.target.value;
                this.updateFilters({ filtered_by_hkm: val === '000' ? [] : [Number(val)] });
            } }, h("wa-option", { key: '92d3a4d4b3ef9ea04f66f7526d23b8d590042edf', value: "000" }, "All housekeepers"), housekeeping_store.hk_criteria.housekeepers
            .slice()
            .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
            .map(v => (h("wa-option", { value: v.id.toString() }, v.name)))))), h("div", { key: '9c8a9ab62f2e61cf89532adaf873bf4970f9efc8', class: "filters-row" }, h("ir-date-range-filter", { key: '171208c345c470cef909793642796798581d2b55', withClear: false, selectionMode: "auto", maxDate: this.maxSelectableDate, minDate: this.minSelectableDate, fromDate: this.filters.from_date, toDate: this.filters.to_date, onDatesChanged: e => this.updateFilters({ from_date: e.detail.from, to_date: e.detail.to }) }), h("div", { key: 'fbfbfdd3b0358262c6b69cac12f2a2323a87ab11', class: "filter-actions" }, h("ir-custom-button", { key: '5862f156343978f7d346ca3d7dc239159aa39042', variant: "neutral", appearance: "outlined", loading: this.isLoading === 'search', onClickHandler: () => this.searchArchive() }, locales.entries?.Lcz_Search ?? 'Search'), h("ir-custom-button", { key: 'cf19541d364b8ca010a5fb1a3010e4f3579b1926', variant: "neutral", appearance: "outlined", loading: this.isLoading === 'excel', onClickHandler: () => this.exportArchive() }, h("wa-icon", { key: '0f2aa24b46ba498607e4081f602ca9469e7e1fb9', name: "download", slot: "start" }), locales.entries?.Lcz_ExportToExcel ?? 'Export')))), this.fetchedData && (h("div", { key: '9c78c1b5780332d8e3e247e576adb16b8d7e0245', class: "results" }, this.data?.length === 0 && !isRequestPending('/Get_Archived_HK_Tasks') ? (h("ir-empty-state", { message: locales.entries?.Lcz_NoResultsFound ?? 'No results found' })) : (h("div", { class: "table-wrapper" }, h("table", { class: "table data-table" }, h("thead", null, h("tr", null, h("th", null, locales.entries?.Lcz_Period ?? 'Period'), h("th", null, locales.entries?.Lcz_Housekeeper ?? 'Housekeeper'), h("th", null, locales.entries?.Lcz_Unit ?? 'Unit'), h("th", null, locales.entries?.Lcz_BookingNumber ?? 'Booking #'))), h("tbody", null, this.data?.map(d => (h("tr", { key: d.id, class: "ir-table-row" }, h("td", null, d.date), h("td", null, d.house_keeper), h("td", null, h("ir-tooltip", { message: d.unit, customSlot: true, containerStyle: { width: 'fit-content' } }, h("span", { slot: "tooltip-trigger", class: "unit-name" }, d.unit))), h("td", null, d.booking_nbr ? (h("ir-custom-button", { link: true, onClickHandler: () => (this.selectedBooking = d.booking_nbr) }, d.booking_nbr.toString())) : (locales.entries?.Lcz_WasVacant))))))))))))), h("ir-booking-details-drawer", { key: 'f2d6b6c41f5f1051233e319e126fda53879badd2', open: !!this.selectedBooking, propertyId: Number(this.propertyId), bookingNumber: this.selectedBooking?.toString(), ticket: this.ticket, language: this.language, onBookingDetailsDrawerClosed: () => (this.selectedBooking = null) })));
    }
};
IrHkArchiveDrawer.style = irHkArchiveDrawerCss();

const irTasksCardCss = () => `.sc-ir-tasks-card-h{display:block}.task-card.sc-ir-tasks-card::part(body),.task-card.sc-ir-tasks-card [part~="body"]{padding:0.5rem 0.75rem}.task-card__body.sc-ir-tasks-card{display:flex;align-items:center;gap:0.875rem;min-height:2.75rem}.task-card__unit.sc-ir-tasks-card{display:flex;flex-direction:column;gap:0.1rem;min-width:0;flex:1}.task-card__unit-name.sc-ir-tasks-card{font-weight:700;font-size:var(--wa-font-size-m);color:var(--wa-color-text-normal);line-height:1.2;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0}.task-card__meta.sc-ir-tasks-card{display:flex;align-items:center;gap:0.25rem;flex-wrap:nowrap}.task-card__status.sc-ir-tasks-card{font-size:var(--wa-font-size-xs);font-weight:600;text-transform:uppercase;letter-spacing:0.04em;color:var(--wa-color-text-quiet);white-space:nowrap}.task-card__sep.sc-ir-tasks-card,.task-card__hint.sc-ir-tasks-card,.task-card__date.sc-ir-tasks-card{font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet);white-space:nowrap}.task-card__badges.sc-ir-tasks-card{display:flex;align-items:center;gap:0.25rem;flex-shrink:0}.task-card__guests.sc-ir-tasks-card{display:flex;gap:0.2rem;flex-shrink:0}.task-card__guest.sc-ir-tasks-card{display:flex;align-items:center;gap:0.25rem}.task-card__guest-icon.sc-ir-tasks-card{color:var(--wa-color-text-quiet);flex-shrink:0}.task-card__guest-count.sc-ir-tasks-card{font-size:var(--wa-font-size-m);font-weight:600;color:var(--wa-color-text-normal);line-height:1;min-width:1ch}.task-card__assign.sc-ir-tasks-card{display:flex;align-items:center;gap:0.375rem;flex:1;min-width:0;border-left:1px solid var(--wa-color-surface-border);padding-left:0.875rem}.task-card__assign-icon.sc-ir-tasks-card{flex-shrink:0;color:var(--wa-color-text-quiet);font-size:0.875rem}.task-card__hk-select.sc-ir-tasks-card{flex:1;min-width:0;max-width:11rem}.task-card__actions.sc-ir-tasks-card{display:flex;align-items:center;gap:0.5rem;flex-shrink:0}.task-card__clean-group.sc-ir-tasks-card{display:flex;align-items:center;gap:0.5rem}.task-card__clean-group.sc-ir-tasks-card ir-custom-button.sc-ir-tasks-card:first-child::part(base),.task-card__clean-group.sc-ir-tasks-card ir-custom-button.sc-ir-tasks-card:first-child [part~="base"]{border-radius:var(--wa-border-radius-m) 0 0 var(--wa-border-radius-m);border-right:none}.task-card__clean-group.sc-ir-tasks-card ir-custom-button.sc-ir-tasks-card:last-child::part(base),.task-card__clean-group.sc-ir-tasks-card ir-custom-button.sc-ir-tasks-card:last-child [part~="base"]{border-radius:0 var(--wa-border-radius-m) var(--wa-border-radius-m) 0}@media (max-width: 639px){.task-card__body.sc-ir-tasks-card{flex-wrap:wrap;min-height:unset;gap:0.625rem}.task-card__unit.sc-ir-tasks-card{flex:1;min-width:0;max-width:unset}.task-card__unit-name.sc-ir-tasks-card{max-width:100%}.task-card__assign.sc-ir-tasks-card{border-left:none;padding-left:0;padding-top:0.5rem;width:100%;flex:0 0 100%}.task-card__hk-select.sc-ir-tasks-card{max-width:100%}.task-card__actions.sc-ir-tasks-card{width:100%;justify-content:flex-end}}`;

const IrTasksCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.cleanSelectedTask = createEvent(this, "cleanSelectedTask");
        this.skipSelectedTask = createEvent(this, "skipSelectedTask");
        this.assignHousekeeper = createEvent(this, "assignHousekeeper");
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
            CLN: { variant: 'danger', label: 'CL' },
            T1: { variant: 'success', label: 'T1' },
            T2: { variant: 'brand', label: 'T2' },
        };
        const { variant, label } = config[code] ?? { variant: 'neutral', label: code };
        return (h("wa-badge", { variant: variant, appearance: "filled" }, label));
    }
    get guests() {
        return [
            { count: this.task.adult, icon: 'person', label: 'Ad' },
            { count: this.task.child, icon: 'child', label: 'Ch' },
            { count: this.task.infant, icon: 'baby', label: 'In' },
        ].filter(g => g.count > 0);
    }
    render() {
        return (h("wa-card", { key: '8833cf78631b098d1c443c26860d00b37dd8ef0a', class: "task-card" }, h("div", { key: 'ee6b9a643d88a2c8ecd597846fef27660dd59e16', class: "task-card__body" }, h("div", { key: 'd50966cb9a46682b730091341945bebb86e62c9a', class: "task-card__unit" }, h("span", { key: '9c2d3fa18dd5bdfec3d025468887ba9140b8367c', class: "task-card__unit-name" }, this.task.unit.name), h("div", { key: 'f9b9aac06893ecc244551199a7420a418fa69f35', class: "task-card__meta" }, h("span", { key: 'c41fe090d01a06f22bf76e2790075f6c1c188b48', class: "task-card__status" }, this.task.status.description), this.task.hint && h("span", { key: 'eb8ae0a9bd41919ab2dc6ebd29f588078ea99fb6', class: "task-card__sep" }, "\u00B7"), this.task.hint && h("span", { key: 'ff04b77c5ae5c8b69c91d31da3a83a1d182ca67c', class: "task-card__hint" }, this.task.hint))), h("div", { key: '0f388f93ee309b38b805a951f25e511699d94fd3', class: "task-card__badges" }, this.taskTypeBadge(this.task.task_type?.code), this.task.extra_task?.map(et => this.taskTypeBadge(et.task_type?.code))), this.guests.length > 0 && (h("div", { key: '9749437ecf5e600bf2fd1de6f397d656bfdb5a93', class: "task-card__guests" }, this.guests.map(g => (h("div", { class: "task-card__guest" }, h("wa-icon", { name: g.icon, class: "task-card__guest-icon", style: { fontSize: `${Math.min(0.75 + g.count * 0.15, 1.4)}rem` } }), h("span", { class: "task-card__guest-count" }, g.count)))))), h("div", { key: 'ae4071de67261b7187e6b83410676548b4cf416c', class: "task-card__assign" }, h("wa-select", { key: '77793c160f9db4909b54fa9f53fd35acb9518131', label: "Housekeeper", class: "task-card__hk-select", size: "s", placeholder: "Unassigned", value: this.task.hkm_id ? String(this.task.hkm_id) : '0', defaultValue: this.task.hkm_id ? String(this.task.hkm_id) : '0', onchange: e => {
                const hkm_id = Number(e.target.value);
                this.assignHousekeeper.emit({ task: this.task, hkm_id });
            } }, h("wa-option", { key: 'b3cac545629ec0162cd1a399a2fcbac8098da569', value: "0" }, locales.entries.Lcz_Unassigned), housekeeping_store.hk_criteria?.housekeepers
            .slice()
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(hk => (h("wa-option", { key: hk.id, value: String(hk.id) }, hk.name))))), h("div", { key: '3cecd1b1706d4d58ad8d3c610c7d26ab2c7c9f58', class: "task-card__actions" }, this.isSkippable && (h("ir-custom-button", { key: 'f831ba5d3933bfa4be395f83f87233794a0f1234', variant: "neutral", appearance: "outlined", onClickHandler: () => this.skipSelectedTask.emit(this.task) }, "Skip")), this.isCheckable && (h("div", { key: '60e2ffd66d383dbe16e63de9556c8c8d424a6d05', class: "task-card__clean-group" }, h("ir-custom-button", { key: '8ccfba493a9637d8b75c4f3094c6879ea3009907', variant: "brand", appearance: "filled", onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            } }, "Clean & Inspect"), h("ir-custom-button", { key: '67d42680c2282d1bbc7042a00db50c9204af7bc4', variant: "brand", appearance: "accent", onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            } }, "Clean")))))));
    }
};
IrTasksCard.style = irTasksCardCss();

const irTasksFiltersCss = () => `.sc-ir-tasks-filters-h{display:block;min-width:20vw;height:100%;flex:1}.filters__header.sc-ir-tasks-filters{display:flex;align-items:center;justify-content:space-between}.filters__title-group.sc-ir-tasks-filters{display:flex;align-items:center;gap:0.5rem}.filters__card.--collapsed.sc-ir-tasks-filters::part(body),.filters__card.--collapsed.sc-ir-tasks-filters [part~="body"]{display:none}.filters__icon.sc-ir-tasks-filters{width:1.125rem;height:1.125rem;flex-shrink:0;color:var(--wa-color-text-quiet)}.filters__title.sc-ir-tasks-filters{margin:0;font-size:var(--wa-font-size-m);font-weight:var(--wa-font-weight-heading);color:var(--wa-color-text-normal)}.filters__body.sc-ir-tasks-filters{display:flex;flex-direction:column;gap:0.75rem}.filters__body--collapsed.sc-ir-tasks-filters{display:none}.filters__actions.sc-ir-tasks-filters{display:flex;align-items:center;justify-content:flex-end;gap:0.75rem;padding-top:0.25rem}@media (min-width: 1024px){.filters__collapse-btn.sc-ir-tasks-filters{display:none}.filters__card.--collapsed.sc-ir-tasks-filters::part(body){display:block}.filters__body--collapsed.sc-ir-tasks-filters{display:flex}}`;

const IrTasksFilters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.applyFilters = createEvent(this, "applyFilters");
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
            cleaning_periods: housekeeping_store?.hk_criteria?.cleaning_periods[0],
            housekeepers: [],
            cleaning_frequencies: calendar_data.cleaning_frequency ?? housekeeping_store?.hk_criteria?.cleaning_frequencies[0],
            dusty_units: housekeeping_store?.hk_criteria?.dusty_periods[0],
            highlight_check_ins: housekeeping_store?.hk_criteria?.highlight_checkin_options[0],
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
        return (h("ir-filter-card", { key: 'a27a69504629744d6aa2df78c6ed1b6b2010556a' }, h("fieldset", { key: '189f6dee59e0bf99b26caf71c94d25da16f67b7a' }, h("wa-select", { key: '3c0f39293d2e6cf014a175d8cb3515c528de75e6', label: locales.entries.Lcz_Period, size: "s", "data-testid": "period", value: this.filters?.cleaning_periods?.code, defaultValue: this.filters?.cleaning_periods?.code, onchange: e => this.updateFilter({ cleaning_periods: { code: e.target.value } }) }, housekeeping_store?.hk_criteria?.cleaning_periods.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description))))), housekeeping_store?.hk_criteria?.housekeepers.length > 1 && (h("fieldset", { key: '2051c543c25ec946842194636a96c10f70325b61' }, h("wa-select", { key: 'd227ceba6df27a1183dff7242e25b8a63d32e100', label: locales.entries.Lcz_Housekeepers, size: "s", "data-testid": "housekeepers", value: this.filters?.housekeepers, defaultValue: this.filters?.housekeepers, onchange: e => this.updateFilter({ housekeepers: e.target.value }) }, h("wa-option", { key: '0a058976a8c71c382a494f800e1fe9e6f77534d9', value: "000" }, locales.entries.Lcz_Allhousekeepers), housekeeping_store?.hk_criteria?.housekeepers
            .slice()
            .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
            .map(v => (h("wa-option", { key: v.id, value: v.id.toString() }, v.name)))))), h("fieldset", { key: '1d1fce78a15da83e94ec5c2c00aa6a2d28cc44b3' }, h("wa-select", { key: '823eef71ffbd5842a082ee89a925d991ed3521fe', label: "Include dusty units", size: "s", "data-testid": "dusty_units", value: this.filters?.dusty_units?.code, defaultValue: this.filters?.dusty_units?.code, onchange: e => this.updateFilter({ dusty_units: { code: e.target.value } }) }, housekeeping_store.hk_criteria?.dusty_periods?.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description))))), h("fieldset", { key: '87e899e11006bace3507070e481897516fe49303' }, h("wa-select", { key: 'afb32bcfd34240599a8954526c21ef1bec4c6f09', label: locales.entries['Lcz_HighlightCheck-insFrom'], size: "s", "data-testid": "highlight_check_ins", value: this.filters?.highlight_check_ins?.code, defaultValue: this.filters?.highlight_check_ins?.code, onchange: e => this.updateFilter({ highlight_check_ins: { code: e.target.value } }) }, housekeeping_store.hk_criteria?.highlight_checkin_options?.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description))))), h("div", { key: '67c9da09c42683e71055eddc31222295989651f4', slot: "footer" }, h("ir-custom-button", { key: '7f5208ee6bbea464d93cd01799cf024599832baa', variant: "neutral", appearance: "filled", "data-testid": "reset", onClickHandler: e => this.resetFilters(e) }, locales.entries.Lcz_Reset), h("ir-custom-button", { key: '2fe0c58ba579a2f7c0139d120409018ec9b89175', variant: "brand", "data-testid": "apply", loading: this.isLoading, onClickHandler: e => this.applyFiltersEvt(e) }, locales.entries.Lcz_Apply))));
    }
};
IrTasksFilters.style = irTasksFiltersCss();

const irTasksHeaderCss = () => `.sc-ir-tasks-header-h{display:flex;gap:1rem;flex-wrap:wrap}.action-buttons.sc-ir-tasks-header{display:flex;align-items:center}.search-filter-container.sc-ir-tasks-header{flex:1 1 0%}.clean-button.sc-ir-tasks-header{display:none}@media (min-width: 640px){.sc-ir-tasks-header-h{flex-direction:row;justify-content:space-between;align-items:center;margin-bottom:1rem}.search-filter-container.sc-ir-tasks-header{display:flex}.action-buttons.sc-ir-tasks-header{justify-content:stretch}.clean-button.sc-ir-tasks-header{display:flex}}`;

const IrTasksHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.headerButtonPress = createEvent(this, "headerButtonPress");
    }
    get el() { return getElement(this); }
    headerButtonPress;
    cleanAndInspectEl;
    cleanEl;
    prevSelectedCount = 0;
    componentDidRender() {
        const count = hkTasksStore.selectedTasks.length;
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
        return (h(Host, { key: '34c59e4dc39a476719b875805d04d2f2630dc928' }, h("div", { key: '480863256b379232e85511bf2d1ffa5b4d87ac5c', class: "search-filter-container", style: { gap: '1rem' } }, h("ir-input", { key: '0719f50f693c3c7ef23d9924b7ac09307f7b3323', placeholder: "Search unit", class: "search-filter-input", value: hkTasksStore.searchField, "onText-change": e => updateSearchField(e.detail) }, h("wa-icon", { key: 'c11ba405a5f58a472403b70fe495a125cd1b32d1', name: "magnifying-glass", slot: "start" }))), h("div", { key: 'c8636b2b7713339ade452961b6f1534ca5f893ea', class: "action-buttons", style: { gap: '1rem' } }, h("ir-custom-button", { key: '13b25a9a1949743b96835a42487d8f0f8f7d4ccf', appearance: "outlined", variant: "neutral", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'export' });
            } }, h("wa-icon", { key: '98dae79686e1991ca876ddab43a6f4ed9db9af62', slot: "start", name: "download" }), locales.entries.Lcz_Export), h("ir-custom-button", { key: '0e1c5ff28671a5b4905bcbeb52a59f361f4d5fcf', appearance: "outlined", variant: "neutral", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'archive' });
            } }, locales.entries.Lcz_Archives), h("wa-animation", { key: 'f0dd9103c779a081f644a2779c0211e80c8ebda7', iterations: 1, id: "cleanInspectAnimation", class: "clean-button", name: "rubberBand", easing: "ease-in-out", duration: 800 }, h("ir-custom-button", { key: '25c0d498d320d66f0e99c78af0fd83546afbe9fd', appearance: "filled", variant: "brand", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'clean-inspect' });
            }, disabled: !(hkTasksStore.selectedTasks.length > 0) }, "Clean & Inspect")), h("wa-animation", { key: 'c8183f27eea2588629c500dba9c27bb0b61448d5', iterations: 1, id: "cleanAnimation", class: "clean-button", name: "rubberBand", easing: "ease-in-out", duration: 800 }, h("ir-custom-button", { key: 'ecbe4c9c345e1f9ab6bd6726ef62efe6afdd8e4e', disabled: !(hkTasksStore.selectedTasks.length > 0), onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'cleaned' });
            }, variant: "brand" }, "Cleaned")))));
    }
};
IrTasksHeader.style = irTasksHeaderCss();

const irTasksTableCss = () => `.sc-ir-tasks-table-h{display:block;min-width:0;width:100%}.hk-owner-select.sc-ir-tasks-table{min-width:130px}.hk-dialog-footer.sc-ir-tasks-table{display:flex;justify-content:flex-end;gap:0.5rem}.highlighted-unit.sc-ir-tasks-table{background:#000;color:white;padding:0.2rem 0.3rem;border-radius:4px}.task-table-row.sc-ir-tasks-table td.sc-ir-tasks-table{background:white !important}.task-table-row.sc-ir-tasks-table:hover td.sc-ir-tasks-table{background:#e2e6ea3f !important}.th-sort-inner.sc-ir-tasks-table{display:flex;align-items:center;gap:0.5rem}.table-empty-state.sc-ir-tasks-table{display:flex;align-items:center;justify-content:center;height:300px}.empty-msg.sc-ir-tasks-table{text-align:center;color:var(--wa-color-text-quiet)}.mobile-date-group.sc-ir-tasks-table{display:flex;flex-direction:column;gap:0.75rem}.mobile-date-label.sc-ir-tasks-table{margin:0;font-size:1rem;font-weight:700;color:var(--wa-color-text-normal);padding:0 0.25rem}.mobile-tasks-container.sc-ir-tasks-table{display:flex;flex-direction:column;gap:1.5rem}.table-container.sc-ir-tasks-table{display:none;min-width:0;width:100%}.table-container.sc-ir-tasks-table::part(body),.table-container.sc-ir-tasks-table [part~="body"]{min-height:50vh;padding:0.5rem}.tasks__header.sc-ir-tasks-table{padding:1rem}@media (min-width: 640px){.mobile-tasks-container.sc-ir-tasks-table{display:none}.table-container.sc-ir-tasks-table{display:block;min-width:0}.table--container.sc-ir-tasks-table{overflow-x:auto;overflow-y:visible;width:100%}}`;

const tableCss = () => `.sc-ir-tasks-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-tasks-table{overflow-x:auto}.table--container.sc-ir-tasks-table,.data-table.sc-ir-tasks-table{height:100%}.ir-table-row.sc-ir-tasks-table td.sc-ir-tasks-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-tasks-table td.sc-ir-tasks-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-tasks-table tbody.sc-ir-tasks-table tr.sc-ir-tasks-table:last-child>td.sc-ir-tasks-table{border-bottom:0 !important}.table.sc-ir-tasks-table thead.sc-ir-tasks-table th.sc-ir-tasks-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-tasks-table thead.sc-ir-tasks-table th.sc-ir-tasks-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-tasks-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-tasks-table,.ir-table-row.sc-ir-tasks-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-tasks-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-tasks-table thead.sc-ir-tasks-table th.sortable.sc-ir-tasks-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-tasks-table thead.sc-ir-tasks-table th.sortable.sc-ir-tasks-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-tasks-table thead.sc-ir-tasks-table th.sortable.sc-ir-tasks-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-tasks-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-tasks-table svg.sc-ir-tasks-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-tasks-table:hover td.sc-ir-tasks-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-tasks-table:hover td.sc-ir-tasks-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-tasks-table:active td.sc-ir-tasks-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-tasks-table td.sc-ir-tasks-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-tasks-table:hover td.sc-ir-tasks-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-tasks-table:active td.sc-ir-tasks-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-tasks-table .empty-row.sc-ir-tasks-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-tasks-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-tasks-table{position:sticky !important;right:0;background-color:white}`;

const IrTasksTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.animateCleanedButton = createEvent(this, "animateCleanedButton");
        this.rowSelectChange = createEvent(this, "rowSelectChange");
        this.sortingChanged = createEvent(this, "sortingChanged");
        this.skipSelectedTask = createEvent(this, "skipSelectedTask");
        this.toast = createEvent(this, "toast");
    }
    get el() { return getElement(this); }
    tasks = [];
    pendingChange = null;
    selectRevertKey = 0;
    animateCleanedButton;
    rowSelectChange;
    sortingChanged;
    skipSelectedTask;
    toast;
    houseKeepingService = new HouseKeepingService();
    dialog;
    componentWillLoad() {
        if (this.tasks && this.tasks.length > 0) {
            updateSorting('date', 'ASC');
        }
    }
    /**
     * Sorts the tasks by the given key. If no direction is provided,
     * it toggles between ascending and descending.
     */
    handleSort(key) {
        let newDirection = hkTasksStore.sorting.direction;
        // If we're clicking the same column, flip the direction. If a new column, default to ASC.
        if (hkTasksStore.sorting.field === key) {
            newDirection = hkTasksStore.sorting.direction === 'ASC' ? 'DESC' : 'ASC';
        }
        else {
            newDirection = 'ASC';
        }
        updateSorting(key, newDirection);
        this.sortingChanged.emit({ field: key, direction: newDirection });
    }
    handleClearSelectedHkTasks(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        clearSelectedTasks();
    }
    handleTasksChange(newTasks) {
        if (newTasks?.length) {
            clearSelectedTasks();
        }
    }
    /**
     * Helper to toggle selection for a single row.
     */
    toggleSelection(task) {
        toggleTaskSelection(task);
        this.emitSelectedTasks();
    }
    emitSelectedTasks() {
        this.rowSelectChange.emit(hkTasksStore.selectedTasks);
    }
    /**
     * Checks if every row is selected.
     */
    get allSelected() {
        return isAllTasksSelected();
    }
    /**
     * Toggles selection on all visible tasks at once.
     */
    toggleSelectAll() {
        if (this.allSelected) {
            clearSelectedTasks();
        }
        else {
            selectAllTasks(getCheckableTasks());
            this.animateCleanedButton.emit(null);
        }
        this.emitSelectedTasks();
    }
    /**
     * Determines if a task is checkable.
     */
    isCheckable(task) {
        return hooks(task.date, 'YYYY-MM-DD').isSameOrBefore(hooks(), 'days');
    }
    /**
     * Determines if a task is skippable.
     */
    isSkippable(task) {
        const isTodayTask = hooks().isSame(hooks(task.date, 'YYYY-MM-DD'), 'date');
        return isTodayTask && task.status.code === 'IH';
    }
    taskBadges(task) {
        const config = [
            { code: 'CLN', variant: 'danger', label: 'CL' },
            { code: 'T1', variant: 'success', label: 'T1' },
            { code: 'T2', variant: 'brand', label: 'T2' },
        ];
        const presentCodes = new Set([task.task_type?.code, ...(task.extra_task?.map(et => et.task_type?.code) ?? [])]);
        return config.map(({ code, variant, label }) => (h("wa-badge", { key: code, variant: variant, appearance: "filled", style: { opacity: presentCodes.has(code) ? '1' : '0' } }, label)));
    }
    getHousekeeperName(hkmId) {
        if (!hkmId) {
            return locales.entries.Lcz_Unassigned;
        }
        return housekeeping_store?.hk_criteria?.housekeepers?.find(h => h.id === hkmId)?.name ?? locales.entries.Lcz_Unassigned;
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
                property_id: calendar_data.property.id,
                is_to_remove: hkmId === 0,
                assignments: [buildAssignment(task), ...(task.extra_task ?? []).map(buildAssignment)],
            });
            // Update the task locally in the store
            const updatedTasks = hkTasksStore.tasks.map(t => (t.id === task.id ? { ...t, hkm_id: hkmId, housekeeper: hkmId ? this.getHousekeeperName(hkmId) : null } : t));
            updateTasks(updatedTasks);
            this.toast.emit({ position: 'top-right', title: 'Saved Successfully', description: '', type: 'success' });
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
        const haveManyHousekeepers = housekeeping_store?.hk_criteria?.housekeepers?.length > 1;
        const tasks = getPaginatedTasks();
        const mobileTasks = getMobileTasks();
        const housekeepers = housekeeping_store?.hk_criteria?.housekeepers ?? [];
        const pendingHkName = this.pendingChange ? this.getHousekeeperName(this.pendingChange.hkmId) : '';
        return (h(Host, { key: 'f5ba340b72ebd85ec783a16196af97475358c1d9' }, h("section", { key: '694a7c5cb63a3c9d07853586362f1d411c7379d8', class: "mobile-tasks-container" }, h("wa-card", { key: '899a155bddca521df2eae679e10ddbd305fefd10' }, h("ir-tasks-header", { key: 'b9074939da200a1d3077104bb7683f02529a6062' })), mobileTasks?.length === 0 && h("p", { key: '3c8123c6a4641c0adc245ee59fe6f8df690e8c53', class: "empty-msg" }, locales.entries.Lcz_NoTasksFound), (() => {
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
            return groups.map(group => (h("div", { key: group.date, class: "mobile-date-group" }, h("p", { class: "mobile-date-label" }, group.formattedDate), group.tasks.map(task => {
                const isCheckable = this.isCheckable(task);
                const isSkippable = this.isSkippable(task);
                return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
            }))));
        })(), h("ir-tasks-table-pagination", { key: 'cbdd9694f99d9f1436dd6915bef1e866f741beea' })), h("wa-card", { key: '189f41dc85b9f9d18dae9ec573e06b93222aaf3b', class: "table-container" }, h("ir-tasks-header", { key: 'ddd22c5808c65a514085ea45ff4ba131fe41eab7', class: "tasks__header" }), h("div", { key: 'd00891286a6171f542321ba8f0ce57afba557877', class: "table--container" }, h("table", { key: 'bd59de41846364bf0b676a9b599f8816caa5de0a', class: "table data-table", "data-testid": "hk_tasks_table" }, h("thead", { key: '5cc81b0e834d414bb8a5ec689f81ac1ad8337891', class: "table-header" }, h("tr", { key: '0926345d4adee6939526722c7affe0403435f1e1' }, h("th", { key: 'c53f3359e9ed2b07c996d54c5ba2fdcb69dbd334', class: 'task-row' }, h("wa-checkbox", { key: '9453094ac8df92a9ae49e7613c60085930863d1d', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, defaultChecked: this.allSelected, onchange: () => this.toggleSelectAll() })), h("th", { key: '4e6f4768b8cfa9ff06cc1de361f4032958a174aa', class: "" }, locales.entries.Lcz_Period), h("th", { key: '466413c21684f077a6c859720cc835987e574bb9', class: "" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '156096ede54d2b840a0ea434b262ffba35ed4de5', class: "sortable", onClick: () => this.handleSort('status') }, h("div", { key: '4faaa413e6d535195591b5aa5a0379730af48e4e', class: "th-sort-inner" }, h("span", { key: '99a32bfc284fe29b34e0c3e6630f9abb1f408cc2' }, locales.entries.Lcz_Status), h("svg", { key: '4b447595065c43bbbb938c5e06fd9c10edc2ffc0', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'a8843586914835148eef23f58908ebe103998c4c', d: "m21 16-4 4-4-4" }), h("path", { key: '93bc09d4cd813f9b469c49249e480d23f1d46779', d: "M17 20V4" }), h("path", { key: '7a058c26884d360cd489a643cb03ef18570d27da', d: "m3 8 4-4 4 4" }), h("path", { key: '09a7c739515b0f6b2c2cc1cebbf73e2eccf2f936', d: "M7 4v16" })))), h("th", { key: 'c216a1eb93ce3e68501e53ba2960d0338db63c2b', class: " text-left" }, locales.entries.Lcz_Hint), h("th", { key: '6836e94a47a8a1375896695b7ab48790e437929e', class: " text-left" }, "Tasks"), h("th", { key: 'fe30945fbbdbc00df0787a5b2320139b841ad5d8', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: 'c51d75c6e8c312dde9aed1870e16dca3f0a0f3b1', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: '98927adcec10bc62c9f768a9892d1d919042cea0', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: 'e2dc43b8e00247ce267f750b9a5c18278fdde19d', class: "sortable", onClick: () => this.handleSort('housekeeper') }, h("div", { key: '3e6dd1e154b59ff5f2ca0899ecea32cc37f68854', class: "th-sort-inner" }, h("span", { key: '6567fb8389c5a79e943fa6072b02e4be22a685d1' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '51c3cd0ce52eb8da6ec12216b6057210ea884129', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '81f962fe9aaa103e06cd1fd8e6109be71f28af03', d: "m21 16-4 4-4-4" }), h("path", { key: 'f8e83c78e2787c83c1083b3f8474fe1b916a90af', d: "M17 20V4" }), h("path", { key: '7e08bbc74bc08c52fb76ffbf824c11d619dce2ad', d: "m3 8 4-4 4 4" }), h("path", { key: 'b7b67589be0d42f33ce1eca6e86a666748701b15', d: "M7 4v16" }))))), h("th", { key: '881160b25ec04b851662ee214d268ab6e5a9010f' }))), h("tbody", { key: '4e0431d8a4a09e769a4b70242b913abbdd54cad0' }, tasks.length === 0 && (h("tr", { key: '737127a5bde7c7f5e71741058fec76a8f858326d', class: "ir-table-row" }, h("td", { key: 'cd1bd37b2f037de21cf2620b1472f028f95a62ca', colSpan: 9 }, h("div", { key: '202503eb02167d6007b06fba0188a81f24dfe28f', class: "table-empty-state" }, h("span", { key: '6ab32ec218c5ed9856f482f476c10e99fe16bef9' }, locales.entries.Lcz_NoTasksFound))))), tasks?.map(task => {
            const isSelected = hkTasksStore.selectedTasks.some(t => t.id === task.id);
            const isCheckable = this.isCheckable(task);
            return (h("tr", { "data-date": task.date, "data-testid": `hk_task_row`, "data-assigned": task.housekeeper ? 'true' : 'false', style: isCheckable && { cursor: 'pointer' }, onClick: () => {
                    if (!isCheckable) {
                        return;
                    }
                    this.toggleSelection(task);
                }, class: { 'selected': isSelected, '--clickable': isCheckable, 'task-table-row ir-table-row ': true }, key: task.id }, h("td", { class: "task-row " }, isCheckable && (h("wa-checkbox", { checked: isSelected, defaultChecked: isSelected, onchange: () => {
                    if (!isCheckable) {
                        return;
                    }
                    this.toggleSelection(task);
                } }))), h("td", { class: "task-row " }, task.formatted_date), h("td", { class: "task-row " }, h("span", { class: { 'highlighted-unit': task.is_highlight } }, task.unit.name)), h("td", { class: "task-row  text-left" }, task.status.description), h("td", { class: "task-row  text-left" }, task.hint), h("td", { class: "task-row  text-left" }, h("div", { class: "th-sort-inner" }, this.taskBadges(task))), h("td", { class: "task-row text-left" }, task.adult), h("td", { class: "task-row text-left" }, task.child), h("td", { class: "task-row text-left" }, task.infant), haveManyHousekeepers && (h("td", { class: "task-row ", style: { textAlign: 'start' }, onClick: (e) => e.stopPropagation() }, h("wa-select", { key: `${task.id}-${this.selectRevertKey}`, class: "hk-owner-select", size: "s", value: String(task.hkm_id ?? 0), defaultValue: String(task.hkm_id ?? 0), onchange: (e) => {
                    e.stopPropagation();
                    const hkmId = Number(e.target.value);
                    this.pendingChange = { task, hkmId };
                    this.dialog.openModal();
                } }, h("wa-option", { value: "0" }, locales.entries.Lcz_Unassigned), housekeepers
                .filter(housekeeper => housekeeper.is_active)
                .map(housekeeper => (h("wa-option", { key: housekeeper.id, value: String(housekeeper.id) }, housekeeper.name)))))), h("td", null, this.isSkippable(task) && (h("ir-custom-button", { onClick: e => {
                    e.stopPropagation();
                }, variant: "brand", appearance: "outlined", onClickHandler: () => {
                    this.skipSelectedTask.emit(task);
                } }, "Skip")))));
        })))), h("div", { key: '9c0b49a6439137800767ef95746551fa3a86233c', class: "data-table--pagination " }, h("ir-tasks-table-pagination", { key: 'e297bb42c58a60c1da2e85c2e659e3117877e769' }))), h("ir-dialog", { key: '622ec1708980416f769c641a0d0c117e30f2b7f6', ref: el => (this.dialog = el), label: locales.entries.Lcz_Confirmation, lightDismiss: false }, h("span", { key: 'd851c686549a83db2f78d599b95d2ad26b14cc35' }, locales.entries.Lcz_Assign, " ", h("strong", { key: 'fcc70f5f443ac76e172ff36f3b507a8b59a2426e' }, this.pendingChange?.task?.unit?.name), " ", 'to', " ", h("strong", { key: 'cd30ea6a7f31172d20e269803e4f4f6a7582dfa9' }, pendingHkName), "?"), h("div", { key: 'a0e76c8645293d517d123a7426de006518309657', slot: "footer", class: "hk-dialog-footer" }, h("ir-custom-button", { key: 'e7e558097d774202c240df1a1d1de6ab8dc4faf2', size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.pendingChange = null;
                this.selectRevertKey++;
                this.dialog.closeModal();
            } }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: 'abc8ac52a4f419b1a085c00a5648ffeaedde2896', size: "m", appearance: "accent", variant: "brand", loading: isRequestPending('/Override_HK_Task_Ownership'), onClickHandler: () => this.confirmOwnershipChange() }, locales.entries.Lcz_Confirm)))));
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
        registerInstance(this, hostRef);
    }
    render() {
        const { currentPage, pageSize, totalPages, mobileCurrentPage } = hkTasksStore.pagination;
        const totalTasks = hkTasksStore.tasks?.length ?? 0;
        const start = totalTasks === 0 ? 0 : (currentPage - 1) * pageSize + 1;
        const end = Math.min(currentPage * pageSize, totalTasks);
        const pageSizes = hkTasksStore.pagination.tasksList[0] > totalTasks ? hkTasksStore.pagination.tasksList.slice(0, 1) : hkTasksStore.pagination.tasksList;
        return (h(Host, { key: '2b056bb0d9204930fe83b8e48d299a881ab45606' }, shouldLoadMore() && h("ir-button", { key: '404742b6fadb6ae54e37a68056dec76c8c7229b7', size: "sm", class: "tasks-load-more", text: "Load more", onClickHandler: () => loadMoreTasks(mobileCurrentPage + 1) }), h("ir-pagination", { key: 'aee28291a6ea0d01672c6af5814ca2c9d386e687', showing: {
                from: start,
                to: end,
            }, class: "tasks-pagination", total: totalTasks, pages: totalPages, pageSize: pageSize, currentPage: currentPage, pageSizes: pageSizes, onPageChange: e => updateCurrentPage(e.detail.currentPage), onPageSizeChange: e => updatePageSize(e.detail.pageSize), showTotalRecords: true, recordLabel: "tasks" })));
    }
};
IrTasksTablePagination.style = irTasksTablePaginationCss();

export { IrHkArchiveDrawer as ir_hk_archive_drawer, IrTasksCard as ir_tasks_card, IrTasksFilters as ir_tasks_filters, IrTasksHeader as ir_tasks_header, IrTasksTable as ir_tasks_table, IrTasksTablePagination as ir_tasks_table_pagination };
