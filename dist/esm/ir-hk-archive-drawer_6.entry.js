import { r as registerInstance, c as createEvent, h, H as Host, a as getElement } from './index-DKZeCK8T.js';
import { H as HouseKeepingService, h as housekeeping_store } from './index-DlulRlHT.js';
import { c as calendar_data } from './calendar-data-D4DbXAhg.js';
import { i as isRequestPending } from './ir-interceptor.store-DjDNm9TC.js';
import { f as downloadFile } from './utils-C5T893Le.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import { t } from './t-Bvz1wS_D.js';
import { f as formatDate } from './ir-date-CY_qGQ63.js';
import { v as v4 } from './v4-CK3_k8jD.js';
import { t as toggleTaskSelection, h as hkTasksStore, u as updateSearchField, a as updateSorting, c as clearSelectedTasks, i as isAllTasksSelected, s as selectAllTasks, g as getCheckableTasks, b as updateTasks, d as getPaginatedTasks, e as getMobileTasks, f as updatePageSize, j as updateCurrentPage, k as shouldLoadMore, l as loadMoreTasks } from './hk-tasks.store-CFjww9HB.js';
import { b as formatCount } from './number-0UrU_yO2.js';
import './types-DFSK8b1u.js';
import './locale-scope-Jre4lb6k.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './commonSchemas-B3RVKogc.js';
import './booking.dto-VzFWIl64.js';
import './type-B1KlYN_1.js';
import './calendar-dates-D3hVfsrC.js';
import './language-observer-CHgzsZkY.js';

const irHkArchiveDrawerCss = () => `.sc-ir-hk-archive-drawer-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-hk-archive-drawer{overflow-x:auto}.table--container.sc-ir-hk-archive-drawer,.data-table.sc-ir-hk-archive-drawer{height:100%}.ir-table-row.sc-ir-hk-archive-drawer td.sc-ir-hk-archive-drawer{padding:var(--ir-cell-padding) !important;text-align:start;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-hk-archive-drawer td.sc-ir-hk-archive-drawer{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-hk-archive-drawer tbody.sc-ir-hk-archive-drawer tr.sc-ir-hk-archive-drawer:last-child>td.sc-ir-hk-archive-drawer{border-bottom:0 !important}.cell--align-start.sc-ir-hk-archive-drawer{text-align:start !important}.cell--align-center.sc-ir-hk-archive-drawer{text-align:center !important}.cell--align-end.sc-ir-hk-archive-drawer{text-align:end !important}.table.sc-ir-hk-archive-drawer thead.sc-ir-hk-archive-drawer th.sc-ir-hk-archive-drawer{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:start}.data-table.sc-ir-hk-archive-drawer thead.sc-ir-hk-archive-drawer th.sc-ir-hk-archive-drawer{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-hk-archive-drawer{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-hk-archive-drawer,.ir-table-row.sc-ir-hk-archive-drawer{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-hk-archive-drawer{text-transform:capitalize;cursor:pointer}.table.sc-ir-hk-archive-drawer thead.sc-ir-hk-archive-drawer th.sortable.sc-ir-hk-archive-drawer{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-hk-archive-drawer thead.sc-ir-hk-archive-drawer th.sortable.sc-ir-hk-archive-drawer:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-hk-archive-drawer thead.sc-ir-hk-archive-drawer th.sortable.sc-ir-hk-archive-drawer:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-hk-archive-drawer:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-hk-archive-drawer svg.sc-ir-hk-archive-drawer{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-hk-archive-drawer:hover td.sc-ir-hk-archive-drawer{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-hk-archive-drawer:hover td.sc-ir-hk-archive-drawer{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-hk-archive-drawer:active td.sc-ir-hk-archive-drawer{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-hk-archive-drawer td.sc-ir-hk-archive-drawer{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-hk-archive-drawer:hover td.sc-ir-hk-archive-drawer{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-hk-archive-drawer:active td.sc-ir-hk-archive-drawer{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-hk-archive-drawer .empty-row.sc-ir-hk-archive-drawer{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-hk-archive-drawer{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-hk-archive-drawer{position:sticky !important;inset-inline-end:0;background-color:var(--wa-color-surface-default, white)}.sc-ir-hk-archive-drawer-h{display:contents}.hk_archive__drawer.sc-ir-hk-archive-drawer::part(body),.hk_archive__drawer.sc-ir-hk-archive-drawer [part~="body"]{padding:0}.archive-content.sc-ir-hk-archive-drawer{display:flex;flex-direction:column}.filters.sc-ir-hk-archive-drawer{display:flex;flex-direction:column;gap:0.75rem;padding:1.5rem;padding-bottom:1.5rem;border-bottom:1px solid var(--wa-color-neutral-200, #e5e7eb)}.filters-row.sc-ir-hk-archive-drawer{display:flex;align-items:flex-end;gap:0.75rem;flex-wrap:wrap}.filters-row.sc-ir-hk-archive-drawer wa-select.sc-ir-hk-archive-drawer{flex:1;min-width:10rem}.filters-row.sc-ir-hk-archive-drawer ir-date-range-filter.sc-ir-hk-archive-drawer{flex:1;min-width:14rem}.filter-actions.sc-ir-hk-archive-drawer{display:flex;gap:0.5rem;flex-shrink:0}.table-wrapper.sc-ir-hk-archive-drawer{padding:1.5rem;padding-inline:0.75rem;padding-top:0;overflow-x:auto;-webkit-overflow-scrolling:touch}.archive-table.sc-ir-hk-archive-drawer{width:100%;border-collapse:collapse}.archive-table.sc-ir-hk-archive-drawer th.sc-ir-hk-archive-drawer,.archive-table.sc-ir-hk-archive-drawer td.sc-ir-hk-archive-drawer{white-space:nowrap;text-align:start;padding:0.4rem 0.75rem;border-bottom:1px solid var(--wa-color-neutral-200, #e5e7eb);font-size:var(--wa-font-size-s, 0.875rem)}.archive-table.sc-ir-hk-archive-drawer th.sc-ir-hk-archive-drawer{font-weight:600;color:var(--wa-color-neutral-600, #4b5563);border-bottom:2px solid var(--wa-color-neutral-200, #e5e7eb);padding-top:0}.archive-table.sc-ir-hk-archive-drawer tbody.sc-ir-hk-archive-drawer tr.sc-ir-hk-archive-drawer:last-child td.sc-ir-hk-archive-drawer{border-bottom:none}.archive-table.sc-ir-hk-archive-drawer tbody.sc-ir-hk-archive-drawer tr.sc-ir-hk-archive-drawer:hover td.sc-ir-hk-archive-drawer{background-color:var(--wa-color-neutral-50, #f9fafb)}.unit-name.sc-ir-hk-archive-drawer{max-width:100px;display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0;margin:0;text-align:start}`;

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
        return (h(Host, { key: '4cd81ee3f9da67a25fc4d6d3f21687de3fc4c45b' }, h("ir-drawer", { key: 'c091d8267297b771596537d9349c43523be11e50', open: this.open, label: t('Lcz_CleaningArchives90Days', { fallback: 'Cleaning Archives (90 days)' }), class: "hk_archive__drawer", onDrawerHide: () => this.drawerClosed.emit() }, h("div", { key: '69d736da5800b6f9570cde157f35d7a779242b57', class: "archive-content" }, h("div", { key: 'cbf0a8131cc976961c8b2804b4b3562d900048a9', class: "filters" }, h("div", { key: 'b4f67e53774fc3ca80b01071d43b4146df3be8d5', class: "filters-row" }, h("wa-select", { key: '1dd0f8814a1dd11edb266fa0081b52c9f8f3e822', size: "s", placeholder: t('Lcz_AllUnits', { fallback: 'All units' }), onchange: (e) => {
                const val = e.target.value;
                this.updateFilters({ filtered_by_unit: val === '000' ? [] : [Number(val)] });
            }, defaultValue: '000' }, h("wa-option", { key: '396e25ab6169c415cce049deb6c7f585b984a9bd', value: "000" }, t('Lcz_AllUnits', { fallback: 'All units' })), this.units
            .slice()
            .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
            .map(v => (h("wa-option", { value: v.id.toString() }, v.name)))), housekeeping_store?.hk_criteria?.housekeepers.length > 1 && (h("wa-select", { key: '4688aabe9afe75ee44a03d3f81cab72fe52342ff', size: "s", defaultValue: '000', placeholder: t('Lcz_Allhousekeepers', { fallback: 'All housekeepers' }), onchange: (e) => {
                const val = e.target.value;
                this.updateFilters({ filtered_by_hkm: val === '000' ? [] : [Number(val)] });
            } }, h("wa-option", { key: 'e1ebbb5418b4ed8a80dd0c3e34c3dcd0a093f08b', value: "000" }, t('Lcz_Allhousekeepers', { fallback: 'All housekeepers' })), housekeeping_store.hk_criteria.housekeepers
            .slice()
            .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
            .map(v => (h("wa-option", { value: v.id.toString() }, v.name)))))), h("div", { key: '5d45ba72b32964cf702cfb1d124e51e647892e87', class: "filters-row" }, h("ir-date-range-filter", { key: '660ccadb3eeb97cf8d5474b0de86859c2fdf6b8d', withClear: false, selectionMode: "auto", maxDate: this.maxSelectableDate, minDate: this.minSelectableDate, fromDate: this.filters.from_date, toDate: this.filters.to_date, onDatesChanged: e => this.updateFilters({ from_date: e.detail.from, to_date: e.detail.to }) }), h("div", { key: '44571704e8775b922060190a4b1e3e09e6d260f8', class: "filter-actions" }, h("ir-custom-button", { key: '8a9455014b097a39e615f05778e55a5f118e7d4d', variant: "neutral", appearance: "outlined", loading: this.isLoading === 'search', onClickHandler: () => this.searchArchive() }, t('Lcz_Search', { fallback: 'Search' })), h("ir-custom-button", { key: '2c9a6eefb08c5d39468a5cf84cb8f81924b25276', variant: "neutral", appearance: "outlined", loading: this.isLoading === 'excel', onClickHandler: () => this.exportArchive() }, h("wa-icon", { key: 'e582db4f809ded47ecfae48632a7133965835499', name: "download", slot: "start" }), t('Lcz_ExportToExcel', { fallback: 'Export' }))))), this.fetchedData && (h("div", { key: '2971061526a2727fefb64e231b9588e15292a137', class: "results" }, this.data?.length === 0 && !isRequestPending('/Get_Archived_HK_Tasks') ? (h("ir-empty-state", { message: t('Lcz_NoResultsFound', { fallback: 'No results found' }) })) : (h("div", { class: "table-wrapper" }, h("table", { class: "table data-table" }, h("thead", null, h("tr", null, h("th", null, t('Lcz_Period', { fallback: 'Period' })), h("th", null, t('Lcz_Housekeeper', { fallback: 'Housekeeper' })), h("th", null, t('Lcz_Unit', { fallback: 'Unit' })), h("th", null, t('Lcz_BookingNumber', { fallback: 'Booking #' })))), h("tbody", null, this.data?.map(d => (h("tr", { key: d.id, class: "ir-table-row" }, h("td", null, formatDate(d.date, 'MMM DD, YYYY')), h("td", null, d.house_keeper), h("td", null, h("ir-tooltip", { message: d.unit, customSlot: true, containerStyle: { width: 'fit-content' } }, h("span", { slot: "tooltip-trigger", class: "unit-name" }, d.unit))), h("td", null, d.booking_nbr ? (h("ir-custom-button", { link: true, onClickHandler: () => (this.selectedBooking = d.booking_nbr) }, d.booking_nbr.toString())) : (t('Lcz_WasVacant', { fallback: 'Was vacant' })))))))))))))), h("ir-booking-details-drawer", { key: '9ef06e4062dca7f3665301747b530c3f5c62812f', open: !!this.selectedBooking, propertyId: Number(this.propertyId), bookingNumber: this.selectedBooking?.toString(), ticket: this.ticket, language: this.language, onBookingDetailsDrawerClosed: () => (this.selectedBooking = null) })));
    }
};
IrHkArchiveDrawer.style = irHkArchiveDrawerCss();

const irTasksCardCss = () => `.sc-ir-tasks-card-h{display:block}.task-card.sc-ir-tasks-card::part(body),.task-card.sc-ir-tasks-card [part~="body"]{padding:0.5rem 0.75rem}.task-card__body.sc-ir-tasks-card{display:flex;align-items:center;gap:0.875rem;min-height:2.75rem}.task-card__unit.sc-ir-tasks-card{display:flex;flex-direction:column;gap:0.1rem;min-width:0;flex:1}.task-card__unit-name.sc-ir-tasks-card{font-weight:700;font-size:var(--wa-font-size-m);color:var(--wa-color-text-normal);line-height:1.2;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0}.task-card__meta.sc-ir-tasks-card{display:flex;align-items:center;gap:0.25rem;flex-wrap:nowrap}.task-card__status.sc-ir-tasks-card{font-size:var(--wa-font-size-xs);font-weight:600;text-transform:uppercase;letter-spacing:0.04em;color:var(--wa-color-text-quiet);white-space:nowrap}.task-card__sep.sc-ir-tasks-card,.task-card__hint.sc-ir-tasks-card,.task-card__date.sc-ir-tasks-card{font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet);white-space:nowrap}.task-card__badges.sc-ir-tasks-card{display:flex;align-items:center;gap:0.25rem;flex-shrink:0}.task-card__guests.sc-ir-tasks-card{display:flex;gap:0.2rem;flex-shrink:0}.task-card__guest.sc-ir-tasks-card{display:flex;align-items:center;gap:0.25rem}.task-card__guest-icon.sc-ir-tasks-card{color:var(--wa-color-text-quiet);flex-shrink:0}.task-card__guest-count.sc-ir-tasks-card{font-size:var(--wa-font-size-m);font-weight:600;color:var(--wa-color-text-normal);line-height:1;min-width:1ch}.task-card__assign.sc-ir-tasks-card{display:flex;align-items:center;gap:0.375rem;flex:1;min-width:0;border-inline-start:1px solid var(--wa-color-surface-border);padding-inline-start:0.875rem}.task-card__assign-icon.sc-ir-tasks-card{flex-shrink:0;color:var(--wa-color-text-quiet);font-size:0.875rem}.task-card__hk-select.sc-ir-tasks-card{flex:1;min-width:0;max-width:11rem}.task-card__actions.sc-ir-tasks-card{display:flex;align-items:center;gap:0.5rem;flex-shrink:0}.task-card__clean-group.sc-ir-tasks-card{display:flex;align-items:center;gap:0.5rem}.task-card__clean-group.sc-ir-tasks-card ir-custom-button.sc-ir-tasks-card:first-child::part(base),.task-card__clean-group.sc-ir-tasks-card ir-custom-button.sc-ir-tasks-card:first-child [part~="base"]{border-radius:var(--wa-border-radius-m) 0 0 var(--wa-border-radius-m);border-inline-end:none}.task-card__clean-group.sc-ir-tasks-card ir-custom-button.sc-ir-tasks-card:last-child::part(base),.task-card__clean-group.sc-ir-tasks-card ir-custom-button.sc-ir-tasks-card:last-child [part~="base"]{border-radius:0 var(--wa-border-radius-m) var(--wa-border-radius-m) 0}@media (max-width: 639px){.task-card__body.sc-ir-tasks-card{flex-wrap:wrap;min-height:unset;gap:0.625rem}.task-card__unit.sc-ir-tasks-card{flex:1;min-width:0;max-width:unset}.task-card__unit-name.sc-ir-tasks-card{max-width:100%}.task-card__assign.sc-ir-tasks-card{border-inline-start:none;padding-inline-start:0;padding-top:0.5rem;width:100%;flex:0 0 100%}.task-card__hk-select.sc-ir-tasks-card{max-width:100%}.task-card__actions.sc-ir-tasks-card{width:100%;justify-content:flex-end}}`;

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
            CLN: { variant: 'danger', label: t('Lcz_CleaningAbbreviation', { fallback: 'CL' }) },
            T1: { variant: 'success', label: t('Lcz_TaskAbbreviation', { fallback: 'T%1', params: [formatCount(1)] }) },
            T2: { variant: 'brand', label: t('Lcz_TaskAbbreviation', { fallback: 'T%1', params: [formatCount(2)] }) },
        };
        const { variant, label } = config[code] ?? { variant: 'neutral', label: code };
        return (h("wa-badge", { variant: variant, appearance: "filled" }, label));
    }
    get guests() {
        return [
            { count: this.task.adult, icon: 'person', label: t('Lcz_Ad', { fallback: 'Ad' }) },
            { count: this.task.child, icon: 'child', label: t('Lcz_Ch', { fallback: 'Ch' }) },
            { count: this.task.infant, icon: 'baby', label: t('Lcz_In', { fallback: 'In' }) },
        ].filter(g => g.count > 0);
    }
    render() {
        return (h("wa-card", { key: '5e6a07b27f226b7f98fe6914cc5d943869b58ae6', class: "task-card" }, h("div", { key: '1442b7166265c0400d09dde8bf12b4acf625183c', class: "task-card__body" }, h("div", { key: 'd125e4df66adea0a7a55fedf565ac26e74709e92', class: "task-card__unit" }, h("span", { key: 'd3ca46fb13cf41a479d5a04acbf5f55b5c1bc3b1', class: "task-card__unit-name" }, this.task.unit.name), h("div", { key: 'f0b65b032f5badf974d5fa99e3cf1f90b79a02f5', class: "task-card__meta" }, h("span", { key: '1c390aa61a5676e13be181ab2c4b4ff1148d8cd1', class: "task-card__status" }, this.task.status.description), this.task.hint && h("span", { key: 'ad36d28c942273533cdec29a6adf7c9cb36cdd7e', class: "task-card__sep" }, "\u00B7"), this.task.hint && h("span", { key: 'a6f815780a0c1e157916e79740191994d132e800', class: "task-card__hint" }, this.task.hint))), h("div", { key: '368e923137a5c9825b3e28350bd6ba3e557218a6', class: "task-card__badges" }, this.taskTypeBadge(this.task.task_type?.code), this.task.extra_task?.map(et => this.taskTypeBadge(et.task_type?.code))), this.guests.length > 0 && (h("div", { key: '3147e87e80cf15fa73e9d4ca23f66555ecf4100f', class: "task-card__guests" }, this.guests.map(g => (h("div", { class: "task-card__guest" }, h("wa-icon", { name: g.icon, class: "task-card__guest-icon", style: { fontSize: `${Math.min(0.75 + g.count * 0.15, 1.4)}rem` } }), h("span", { class: "task-card__guest-count" }, formatCount(g.count))))))), h("div", { key: 'ca6ab65a05803eee0ab8f020b3e0cb6c3873a2cc', class: "task-card__assign" }, h("wa-select", { key: 'f3fe6af53120becb952dbaca123f4b50d7856329', label: t('Lcz_Housekeeper', { fallback: 'Housekeeper' }), class: "task-card__hk-select", size: "s", placeholder: t('Lcz_Unassigned', { fallback: 'Unassigned' }), value: this.task.hkm_id ? String(this.task.hkm_id) : '0', defaultValue: this.task.hkm_id ? String(this.task.hkm_id) : '0', onchange: e => {
                const hkm_id = Number(e.target.value);
                this.assignHousekeeper.emit({ task: this.task, hkm_id });
            } }, h("wa-option", { key: 'aac1e05b3cd7f2dc4e59c162317b0c48e8f9139b', value: "0" }, t('Lcz_Unassigned', { fallback: 'Unassigned' })), housekeeping_store.hk_criteria?.housekeepers
            .slice()
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(hk => (h("wa-option", { key: hk.id, value: String(hk.id) }, hk.name))))), h("div", { key: 'c002253b4aa5dfd4c07370ea7ea254ca0bff78a5', class: "task-card__actions" }, this.isSkippable && (h("ir-custom-button", { key: '456cb863b654b9693ccb34d7429734f992abb868', variant: "neutral", appearance: "outlined", onClickHandler: () => this.skipSelectedTask.emit(this.task) }, t('Lcz_Skip', { fallback: 'Skip' }))), this.isCheckable && (h("div", { key: 'e7228b3ae92385f6e859c52e2f261a1185bc1c7b', class: "task-card__clean-group" }, h("ir-custom-button", { key: 'd500dfc190ffa217295a9fbf2755119dbee694c8', variant: "brand", appearance: "filled", onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            } }, t('Lcz_CleanAndInspect', { fallback: 'Clean & Inspect' })), h("ir-custom-button", { key: 'b72c008198d7f2f9cd2a1661d99f5ddda25f9220', variant: "brand", appearance: "accent", onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            } }, t('Lcz_Clean', { fallback: 'Clean' }))))))));
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
        return (h("ir-filter-card", { key: '42fe554cee26af65393dc6ac2ffd572d1b0e3e5d' }, h("fieldset", { key: 'fabaa3327e3aef03cb676714c1f3420b9711cff0' }, h("wa-select", { key: 'b1066cb5ce6c097f1f070cb9bd14852dadfa14b7', label: t('Lcz_Period', { fallback: 'Period' }), size: "s", "data-testid": "period", value: this.filters?.cleaning_periods?.code, defaultValue: this.filters?.cleaning_periods?.code, onchange: e => this.updateFilter({ cleaning_periods: { code: e.target.value } }) }, housekeeping_store?.hk_criteria?.cleaning_periods.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description))))), housekeeping_store?.hk_criteria?.housekeepers.length > 1 && (h("fieldset", { key: 'c60addec72717ece1f6027389b6cc68af3ff623d' }, h("wa-select", { key: '32dd6d534d9f07049764e1c2940caccc79b0e4ff', label: t('Lcz_Housekeepers', { fallback: 'Housekeepers' }), size: "s", "data-testid": "housekeepers", value: this.filters?.housekeepers, defaultValue: this.filters?.housekeepers, onchange: e => this.updateFilter({ housekeepers: e.target.value }) }, h("wa-option", { key: '024eefc5e802ad1cbf2fc58850e42ed4aec225d6', value: "000" }, t('Lcz_Allhousekeepers', { fallback: 'All housekeepers' })), housekeeping_store?.hk_criteria?.housekeepers
            .slice()
            .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
            .map(v => (h("wa-option", { key: v.id, value: v.id.toString() }, v.name)))))), h("fieldset", { key: '4013bafb66cc57d8bc5a658292ddd5bc65bfd529' }, h("wa-select", { key: 'cfb97b3f71f9d68d15cf30b240b2b8c6354da5c8', label: t('Lcz_IncludeDustyUnits', { fallback: 'Include dusty units' }), size: "s", "data-testid": "dusty_units", value: this.filters?.dusty_units?.code, defaultValue: this.filters?.dusty_units?.code, onchange: e => this.updateFilter({ dusty_units: { code: e.target.value } }) }, housekeeping_store.hk_criteria?.dusty_periods?.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description))))), h("fieldset", { key: 'abc0a8daa6a55866766ecb33c22505b14b7c7328' }, h("wa-select", { key: 'df07559006bb3d9e59695e40f883e9e2dfdb821c', label: t('Lcz_HighlightCheck-insFrom'), size: "s", "data-testid": "highlight_check_ins", value: this.filters?.highlight_check_ins?.code, defaultValue: this.filters?.highlight_check_ins?.code, onchange: e => this.updateFilter({ highlight_check_ins: { code: e.target.value } }) }, housekeeping_store.hk_criteria?.highlight_checkin_options?.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description))))), h("div", { key: '8ab623900decf78e9276edce52b0fb5f7e9f7a33', slot: "footer" }, h("ir-custom-button", { key: 'a6aa076c0654dde32e230a8149632d70013e97d4', variant: "neutral", appearance: "filled", "data-testid": "reset", onClickHandler: e => this.resetFilters(e) }, t('Lcz_Reset', { fallback: 'Reset' })), h("ir-custom-button", { key: '50528fbcb6d37886ae17e58cabe0f5ccadfe6c13', variant: "brand", "data-testid": "apply", loading: this.isLoading, onClickHandler: e => this.applyFiltersEvt(e) }, t('Lcz_Apply', { fallback: 'Apply' })))));
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
        return (h(Host, { key: '61fed777c712eaee7d4757e243f531a64f01021a' }, h("div", { key: '76a6cf485669433b60f1cb081e275bd6d8c521e1', class: "search-filter-container", style: { gap: '1rem' } }, h("ir-input", { key: '2e5d34581104fdf3e56ff7f7780f2137b42a5053', placeholder: t('Lcz_SearchUnit', { fallback: 'Search unit' }), class: "search-filter-input", value: hkTasksStore.searchField, "onText-change": e => updateSearchField(e.detail) }, h("wa-icon", { key: 'd70851f897fabd3bab1cef73590e62fd5c302c1f', name: "magnifying-glass", slot: "start" }))), h("div", { key: '463a8cffc1a4e77cf1be08f4c38c78097423bae1', class: "action-buttons", style: { gap: '1rem' } }, h("ir-custom-button", { key: '883fde504b105eed13a5808f6a43278a259bd18b', appearance: "outlined", variant: "neutral", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'export' });
            } }, h("wa-icon", { key: '04e0ca2853e6fa15af6861c7aff729cd6d32941e', slot: "start", name: "download" }), t('Lcz_Export', { fallback: 'Export' })), h("ir-custom-button", { key: '57f8d01b1d71d3d045f3938238cde5ab4c16f7fd', appearance: "outlined", variant: "neutral", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'archive' });
            } }, t('Lcz_Archives', { fallback: 'Archives' })), h("wa-animation", { key: 'da3ed3c80c9fb749ce49b75ce324a23029f39aaf', iterations: 1, id: "cleanInspectAnimation", class: "clean-button", name: "rubberBand", easing: "ease-in-out", duration: 800 }, h("ir-custom-button", { key: 'ced857cfd52fabb163317d065b547d38991064bd', appearance: "filled", variant: "brand", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'clean-inspect' });
            }, disabled: !(hkTasksStore.selectedTasks.length > 0) }, t('Lcz_CleanAndInspect', { fallback: 'Clean & Inspect' }))), h("wa-animation", { key: '4a29f76825c082a47d9a0d3e55e9fae22e3dad86', iterations: 1, id: "cleanAnimation", class: "clean-button", name: "rubberBand", easing: "ease-in-out", duration: 800 }, h("ir-custom-button", { key: 'b08f6a1a38ffbe9ab25193e7bac6d7db70f7a405', disabled: !(hkTasksStore.selectedTasks.length > 0), onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'cleaned' });
            }, variant: "brand" }, t('Lcz_Cleaned', { fallback: 'Cleaned' }))))));
    }
};
IrTasksHeader.style = irTasksHeaderCss();

const irTasksTableCss = () => `.sc-ir-tasks-table-h{display:block;min-width:0;width:100%}.hk-owner-select.sc-ir-tasks-table{min-width:130px}.hk-dialog__connector.sc-ir-tasks-table{text-transform:lowercase}.hk-dialog-footer.sc-ir-tasks-table{display:flex;justify-content:flex-end;gap:0.5rem}.highlighted-unit.sc-ir-tasks-table{background:#000;color:white;padding:0.2rem 0.3rem;border-radius:4px}.task-table-row.sc-ir-tasks-table td.sc-ir-tasks-table{background:white !important}.task-table-row.sc-ir-tasks-table:hover td.sc-ir-tasks-table{background:#e2e6ea3f !important}.end-of-today-row.sc-ir-tasks-table td.sc-ir-tasks-table{border-width:3px !important}.th-sort-inner.sc-ir-tasks-table{display:flex;align-items:center;gap:0.5rem}.table-empty-state.sc-ir-tasks-table{display:flex;align-items:center;justify-content:center;height:300px}.empty-msg.sc-ir-tasks-table{text-align:center;color:var(--wa-color-text-quiet)}.mobile-date-group.sc-ir-tasks-table{display:flex;flex-direction:column;gap:0.75rem}.mobile-date-label.sc-ir-tasks-table{margin:0;font-size:1rem;font-weight:700;color:var(--wa-color-text-normal);padding:0 0.25rem}.mobile-tasks-container.sc-ir-tasks-table{display:flex;flex-direction:column;gap:1.5rem}.table-container.sc-ir-tasks-table{display:none;min-width:0;width:100%}.table-container.sc-ir-tasks-table::part(body),.table-container.sc-ir-tasks-table [part~="body"]{min-height:50vh;padding:0.5rem}.tasks__header.sc-ir-tasks-table{padding:1rem}@media (min-width: 640px){.mobile-tasks-container.sc-ir-tasks-table{display:none}.table-container.sc-ir-tasks-table{display:block;min-width:0}.table--container.sc-ir-tasks-table{overflow-x:auto;overflow-y:visible;width:100%}}.ir-text-start.sc-ir-tasks-table{text-align:start}`;

const tableCss = () => `.sc-ir-tasks-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-tasks-table{overflow-x:auto}.table--container.sc-ir-tasks-table,.data-table.sc-ir-tasks-table{height:100%}.ir-table-row.sc-ir-tasks-table td.sc-ir-tasks-table{padding:var(--ir-cell-padding) !important;text-align:start;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-tasks-table td.sc-ir-tasks-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-tasks-table tbody.sc-ir-tasks-table tr.sc-ir-tasks-table:last-child>td.sc-ir-tasks-table{border-bottom:0 !important}.cell--align-start.sc-ir-tasks-table{text-align:start !important}.cell--align-center.sc-ir-tasks-table{text-align:center !important}.cell--align-end.sc-ir-tasks-table{text-align:end !important}.table.sc-ir-tasks-table thead.sc-ir-tasks-table th.sc-ir-tasks-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:start}.data-table.sc-ir-tasks-table thead.sc-ir-tasks-table th.sc-ir-tasks-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-tasks-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-tasks-table,.ir-table-row.sc-ir-tasks-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-tasks-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-tasks-table thead.sc-ir-tasks-table th.sortable.sc-ir-tasks-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-tasks-table thead.sc-ir-tasks-table th.sortable.sc-ir-tasks-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-tasks-table thead.sc-ir-tasks-table th.sortable.sc-ir-tasks-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-tasks-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-tasks-table svg.sc-ir-tasks-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-tasks-table:hover td.sc-ir-tasks-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-tasks-table:hover td.sc-ir-tasks-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-tasks-table:active td.sc-ir-tasks-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-tasks-table td.sc-ir-tasks-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-tasks-table:hover td.sc-ir-tasks-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-tasks-table:active td.sc-ir-tasks-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-tasks-table .empty-row.sc-ir-tasks-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-tasks-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-tasks-table{position:sticky !important;inset-inline-end:0;background-color:var(--wa-color-surface-default, white)}`;

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
    /**
     * Marks the boundary row/group between today's tasks and future tasks.
     * Only relevant when the list actually contains a date beyond today.
     */
    isEndOfTodayBoundary(currentDate, nextDate) {
        if (!nextDate) {
            return false;
        }
        const isCurrentToday = hooks(currentDate, 'YYYY-MM-DD').isSame(hooks(), 'date');
        const isNextFuture = hooks(nextDate, 'YYYY-MM-DD').isAfter(hooks(), 'date');
        return isCurrentToday && isNextFuture;
    }
    taskBadges(task) {
        const config = [
            { code: 'CLN', variant: 'danger', label: t('Lcz_CleaningAbbreviation', { fallback: 'CL' }) },
            { code: 'T1', variant: 'success', label: t('Lcz_TaskAbbreviation', { fallback: 'T%1', params: [formatCount(1)] }) },
            { code: 'T2', variant: 'brand', label: t('Lcz_TaskAbbreviation', { fallback: 'T%1', params: [formatCount(2)] }) },
        ];
        const presentCodes = new Set([task.task_type?.code, ...(task.extra_task?.map(et => et.task_type?.code) ?? [])]);
        return config.map(({ code, variant, label }) => (h("wa-badge", { key: code, variant: variant, appearance: "filled", style: { opacity: presentCodes.has(code) ? '1' : '0' } }, label)));
    }
    getHousekeeperName(hkmId) {
        if (!hkmId) {
            return t('Lcz_Unassigned', { fallback: 'Unassigned' });
        }
        return housekeeping_store?.hk_criteria?.housekeepers?.find(h => h.id === hkmId)?.name ?? t('Lcz_Unassigned', { fallback: 'Unassigned' });
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
            this.toast.emit({ position: 'top-right', title: t('Lcz_SavedSuccessfully', { fallback: 'Saved Successfully' }), description: '', type: 'success' });
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
        return (h(Host, { key: '4cf9fc6e2325c3ebf71886bacbf3f945641ae366' }, h("section", { key: '5530a1756f0b37fc6eb6be22e715e1208303cd1e', class: "mobile-tasks-container" }, h("wa-card", { key: 'ca9d0b39bc47b5b537f3dc773dedc19b2ce4dba7' }, h("ir-tasks-header", { key: '26c5eb0b6abcd40cada1e58ee28d16f8ff5f5d4b' })), mobileTasks?.length === 0 && h("p", { key: 'a6f11ae4021d7c62a4cbbbf37d575f8a943aad51', class: "empty-msg" }, t('Lcz_NoTasksFound', { fallback: 'No tasks found ;)' })), (() => {
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
                return (h("div", { key: group.date, class: { 'mobile-date-group': true, 'end-of-today-group': isEndOfToday } }, h("p", { class: "mobile-date-label" }, group.formattedDate), group.tasks.map(task => {
                    const isCheckable = this.isCheckable(task);
                    const isSkippable = this.isSkippable(task);
                    return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
                })));
            });
        })(), h("ir-tasks-table-pagination", { key: '1025f918f1c01e49fba54f383d782f981596cdf6' })), h("wa-card", { key: 'a506e6c236fe64d42270244fdc6372f6eb87500b', class: "table-container" }, h("ir-tasks-header", { key: 'd79e97d63910523e576812d210e76bca0e7d20fe', class: "tasks__header" }), h("div", { key: 'c8209f4da520766c2b4c32c4e82d53bb32220f9b', class: "table--container" }, h("table", { key: 'bf96e14071e3d1ba98ed90ee7689db0ad422fafa', class: "table data-table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'd6637b9df015c0a00d8630017b6ea1b980b5a1f0', class: "table-header" }, h("tr", { key: '5126f76e9f8faa9d778783726d12f2980ed0b9f6' }, h("th", { key: '22788e9ae2f438dab8dcb73c3563277dd5ef91b2', class: 'task-row' }, h("wa-checkbox", { key: 'c81cc7429c87fd7898ab1c0bfffc4db88b5b0d24', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, defaultChecked: this.allSelected, onchange: () => this.toggleSelectAll() })), h("th", { key: 'e5535ef0c3d48a5c49205ffc0941958f53813aa5', class: "" }, t('Lcz_Period', { fallback: 'Period' })), h("th", { key: 'f0ffbe2cc64d3455c2f3de6ad4923384b2bb9ed3', class: "" }, this.tasks.length > 1 && this.tasks.length + ' ', t('Lcz_Unit', { fallback: 'Unit' })), h("th", { key: '8cdd5d54d8036d6fea82e2270af941cae9e5f22a', class: "sortable", onClick: () => this.handleSort('status') }, h("div", { key: '92bd35d61a963db947be5fdeb80d2967606d2984', class: "th-sort-inner" }, h("span", { key: '94a97c0fcd802cec7d8e3163b710489959b93d66' }, t('Lcz_Status', { fallback: 'Status' })), h("svg", { key: '40e98d20d3d8faee46b14f58446b13766edb64d2', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'cfefb06eaa989322bab34708727364abeebb5246', d: "m21 16-4 4-4-4" }), h("path", { key: '6b87c5e895b87317735358a5218b2d553d484a43', d: "M17 20V4" }), h("path", { key: 'c8c2c3b12dcc187bffd6ea87bfbcb669bef37bf8', d: "m3 8 4-4 4 4" }), h("path", { key: '761d93fdb9c2cd93e154d14977be8bba684f2292', d: "M7 4v16" })))), h("th", { key: 'd5fbdec97cd17d418018466a6eb8458ddcc32a19', class: " ir-text-start" }, t('Lcz_Hint', { fallback: 'Hint' })), h("th", { key: 'bfb5f30356fe602d323c32fa2f239143e1e0ac8e', class: " ir-text-start" }, t('Lcz_Tasks', { fallback: 'Tasks' })), h("th", { key: '280687287494bc011a5b41a4093e187956d0b427', class: "ir-text-start" }, t('Lcz_Ad', { fallback: 'Ad' })), h("th", { key: 'fc77c13a6adc35c80d41aa648a22a7a2ff7ee22d', class: "ir-text-start" }, t('Lcz_Ch', { fallback: 'Ch' })), h("th", { key: 'e1ef87cb1b7b8d0e2d7639b39d0e58527bda59e4', class: "ir-text-start" }, t('Lcz_In', { fallback: 'In' })), haveManyHousekeepers && (h("th", { key: 'f449ce653e12c8a4eed1a62242493a94a8340d9e', class: "sortable", onClick: () => this.handleSort('housekeeper') }, h("div", { key: '0c76589c4c4c4baa79a4afa33d873cce575db2b5', class: "th-sort-inner" }, h("span", { key: 'e895cff4d43cea4d9e89a90c3f28a8dc4442a59e' }, t('Lcz_Housekeeper', { fallback: 'Housekeeper' })), h("svg", { key: '937702fb134561e0f40da9099b1c8787fe4c6994', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '2f1a2fb48fd3d46328abddac8b4072bc29170877', d: "m21 16-4 4-4-4" }), h("path", { key: '7a20f4bdb4ae3a5a860d3923cfcee50e82b0b3e3', d: "M17 20V4" }), h("path", { key: 'c26c13fc7852c18e01aedd6ffc1e047484358a8f', d: "m3 8 4-4 4 4" }), h("path", { key: '41d9ae0e371d9e1b507965a5292a1d471b2bad37', d: "M7 4v16" }))))), h("th", { key: '915841beb3b6342f7db2d5259c781a3fd253ac45' }))), h("tbody", { key: '53a5563a3e01fd0cd83ccac3ae60e4e985b7399d' }, tasks.length === 0 && (h("tr", { key: 'be845a3b5511043747c14c8a02a40a20dceb666e', class: "ir-table-row" }, h("td", { key: '775d1963db2fb6cd8cedb45ee028aec1b552fb81', colSpan: 9 }, h("div", { key: '2acdbc77e494a2738649e4ebf0704d1d774f014b', class: "table-empty-state" }, h("span", { key: '1f94560be53a16a40505c15e6668d2da75d26678' }, t('Lcz_NoTasksFound', { fallback: 'No tasks found ;)' })))))), tasks?.map((task, taskIndex) => {
            const isSelected = hkTasksStore.selectedTasks.some(t => t.id === task.id);
            const isCheckable = this.isCheckable(task);
            const isEndOfToday = this.isEndOfTodayBoundary(task.date, tasks[taskIndex + 1]?.date);
            return (h("tr", { "data-date": task.date, "data-testid": `hk_task_row`, "data-assigned": task.housekeeper ? 'true' : 'false', style: isCheckable && { cursor: 'pointer' }, onClick: () => {
                    if (!isCheckable) {
                        return;
                    }
                    this.toggleSelection(task);
                }, class: {
                    'selected': isSelected,
                    '--clickable': isCheckable,
                    'end-of-today-row': isEndOfToday,
                    'task-table-row ir-table-row ': true,
                }, key: task.id }, h("td", { class: "task-row " }, isCheckable && (h("wa-checkbox", { checked: isSelected, defaultChecked: isSelected, onchange: () => {
                    if (!isCheckable) {
                        return;
                    }
                    this.toggleSelection(task);
                } }))), h("td", { class: "task-row " }, task.formatted_date), h("td", { class: "task-row " }, h("span", { class: { 'highlighted-unit': task.is_highlight } }, task.unit.name)), h("td", { class: "task-row  ir-text-start" }, task?.status?.code === 'NC' ? (task?.base_status?.description ?? task.status.description) : task.status.description), h("td", { class: "task-row  ir-text-start" }, task.hint), h("td", { class: "task-row  ir-text-start" }, h("div", { class: "th-sort-inner" }, this.taskBadges(task))), h("td", { class: "task-row ir-text-start" }, formatCount(task.adult)), h("td", { class: "task-row ir-text-start" }, formatCount(task.child)), h("td", { class: "task-row ir-text-start" }, formatCount(task.infant)), haveManyHousekeepers && (h("td", { class: "task-row ", style: { textAlign: 'start' }, onClick: (e) => e.stopPropagation() }, h("wa-select", { key: `${task.id}-${this.selectRevertKey}`, class: "hk-owner-select", size: "s", value: String(task.hkm_id ?? 0), defaultValue: String(task.hkm_id ?? 0), onchange: (e) => {
                    e.stopPropagation();
                    const hkmId = Number(e.target.value);
                    this.pendingChange = { task, hkmId };
                    this.dialog.openModal();
                } }, h("wa-option", { value: "0" }, t('Lcz_Unassigned', { fallback: 'Unassigned' })), housekeepers
                .filter(housekeeper => housekeeper.is_active)
                .map(housekeeper => (h("wa-option", { key: housekeeper.id, value: String(housekeeper.id) }, housekeeper.name)))))), h("td", null, this.isSkippable(task) && (h("ir-custom-button", { onClick: e => {
                    e.stopPropagation();
                }, variant: "brand", appearance: "outlined", onClickHandler: () => {
                    this.skipSelectedTask.emit(task);
                } }, t('Lcz_Skip', { fallback: 'Skip' }))))));
        })))), h("div", { key: 'd2c5e606532015a94d8fcf34e37ae10a1829a2b2', class: "data-table--pagination " }, h("ir-tasks-table-pagination", { key: '862d515e52296212413640b6a81931af7e188f7d' }))), h("ir-dialog", { key: '3c1f106ed22ceb5cc0c04f974dc4452707653419', ref: el => (this.dialog = el), label: t('Lcz_Confirmation', { fallback: 'Confirmation' }), lightDismiss: false }, h("span", { key: 'ff7fb5cea934565f2bb9085273e9f1235971346a' }, t('Lcz_Assign', { fallback: 'Assign' }), " ", h("strong", { key: 'daa1cc41f8e180dadeabf02e05f01af477a570ba' }, this.pendingChange?.task?.unit?.name), ' ', h("span", { key: '020445171920df33caeaab75e900a8449d903ceb', class: "hk-dialog__connector" }, t('Lcz_To', { fallback: 'To' })), " ", h("strong", { key: 'c9e6a5a763308640262fe899b640bbf589546243' }, pendingHkName), "?"), h("div", { key: '6a72ae77a54168193b10433cae006fe7370e94d6', slot: "footer", class: "hk-dialog-footer" }, h("ir-custom-button", { key: '36817d13f51cdf39eade7b7c30d92055df5074b3', size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.pendingChange = null;
                this.selectRevertKey++;
                this.dialog.closeModal();
            } }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '357c6d207d972c6dc8d406ed543a551b99cc73f3', size: "m", appearance: "accent", variant: "brand", loading: isRequestPending('/Override_HK_Task_Ownership'), onClickHandler: () => this.confirmOwnershipChange() }, t('Lcz_Confirm', { fallback: 'Confirm' }))))));
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
        return (h(Host, { key: 'fd64834d1173a0a9be4f108ed642cce752d81b97' }, shouldLoadMore() && (h("ir-custom-button", { key: '8e24e7baa68413bd1497bb207c9ea6f4951d98e4', variant: "brand", size: "s", class: "tasks-load-more", onClickHandler: () => loadMoreTasks(mobileCurrentPage + 1) }, t('Lcz_LoadMore', { fallback: 'Load more' }))), h("ir-pagination", { key: 'a4f4c0e30557fe37693a2715693e1facb8740054', showing: {
                from: start,
                to: end,
            }, allowPageSizeChange: true,
            // class="tasks-pagination"
            total: totalTasks, pages: totalPages, pageSize: pageSize, currentPage: currentPage, pageSizes: pageSizes, onPageChange: e => updateCurrentPage(e.detail.currentPage), onPageSizeChange: e => updatePageSize(e.detail.pageSize), showTotalRecords: true, recordLabel: t('Lcz_Tasks') })));
    }
};
IrTasksTablePagination.style = irTasksTablePaginationCss();

export { IrHkArchiveDrawer as ir_hk_archive_drawer, IrTasksCard as ir_tasks_card, IrTasksFilters as ir_tasks_filters, IrTasksHeader as ir_tasks_header, IrTasksTable as ir_tasks_table, IrTasksTablePagination as ir_tasks_table_pagination };
