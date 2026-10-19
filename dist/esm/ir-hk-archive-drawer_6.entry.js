import { r as registerInstance, c as createEvent, h, H as Host, a as getElement } from './index-DKZeCK8T.js';
import { H as HouseKeepingService, h as housekeeping_store } from './index-BrKEtqyG.js';
import { c as calendar_data } from './calendar-data-D4DbXAhg.js';
import { i as isRequestPending } from './ir-interceptor.store-DjDNm9TC.js';
import { f as downloadFile } from './utils-CAiEa-WB.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import { t } from './t-Bvz1wS_D.js';
import { f as formatDate } from './ir-date-CY_qGQ63.js';
import { v as v4 } from './v4-CK3_k8jD.js';
import { t as toggleTaskSelection, h as hkTasksStore, u as updateSearchField, a as updateSorting, c as clearSelectedTasks, i as isAllTasksSelected, s as selectAllTasks, g as getCheckableTasks, b as updateTasks, d as getPaginatedTasks, e as getMobileTasks, f as updatePageSize, j as updateCurrentPage, k as shouldLoadMore, l as loadMoreTasks } from './hk-tasks.store-CFjww9HB.js';
import { b as formatCount } from './number-0UrU_yO2.js';
import './types-BLb1NO3I.js';
import './locale-scope-Jre4lb6k.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './commonSchemas-BNnUj2OT.js';
import './booking.dto-DQx6bzbY.js';
import './type-D_dKkSLY.js';
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
        return (h(Host, { key: '0e47c8ce0980f85db57589b29a1b429fed7a992a' }, h("ir-drawer", { key: 'fc3814259cfc023a6c46da99906f285184099505', open: this.open, label: t('Lcz_CleaningArchives90Days', { fallback: 'Cleaning Archives (90 days)' }), class: "hk_archive__drawer", onDrawerHide: () => this.drawerClosed.emit() }, h("div", { key: '18360cdce25f792edabd9ff6f3825dc111e3db04', class: "archive-content" }, h("div", { key: '6d1a9cf65df0637a0dd730e996a6e722ff57df27', class: "filters" }, h("div", { key: 'defee4fc07b92cc775238444448f18604236c74c', class: "filters-row" }, h("wa-select", { key: '84c32c0116431dd512fa506af87b39987021d750', size: "s", placeholder: t('Lcz_AllUnits', { fallback: 'All units' }), onchange: (e) => {
                const val = e.target.value;
                this.updateFilters({ filtered_by_unit: val === '000' ? [] : [Number(val)] });
            }, defaultValue: '000' }, h("wa-option", { key: 'b5338fd94c74a5e9d9256d920f4bc65a007d9a5e', value: "000" }, t('Lcz_AllUnits', { fallback: 'All units' })), this.units
            .slice()
            .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
            .map(v => (h("wa-option", { value: v.id.toString() }, v.name)))), housekeeping_store?.hk_criteria?.housekeepers.length > 1 && (h("wa-select", { key: '5387de6272ae0024ead4e1f4c391134d7f80fb42', size: "s", defaultValue: '000', placeholder: t('Lcz_Allhousekeepers', { fallback: 'All housekeepers' }), onchange: (e) => {
                const val = e.target.value;
                this.updateFilters({ filtered_by_hkm: val === '000' ? [] : [Number(val)] });
            } }, h("wa-option", { key: '5fb49d061ce7d60bdf86c918f92845c5c8fe89ee', value: "000" }, t('Lcz_Allhousekeepers', { fallback: 'All housekeepers' })), housekeeping_store.hk_criteria.housekeepers
            .slice()
            .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
            .map(v => (h("wa-option", { value: v.id.toString() }, v.name)))))), h("div", { key: '7c9093c8a71e3418c635edefe37708d2a945c6fd', class: "filters-row" }, h("ir-date-range-filter", { key: '537737e84de1fc69296adca7bb041d9792da5a07', withClear: false, selectionMode: "auto", maxDate: this.maxSelectableDate, minDate: this.minSelectableDate, fromDate: this.filters.from_date, toDate: this.filters.to_date, onDatesChanged: e => this.updateFilters({ from_date: e.detail.from, to_date: e.detail.to }) }), h("div", { key: 'e8914b5cbf332f1a6512e28a310e5fd519ee6a7b', class: "filter-actions" }, h("ir-custom-button", { key: '3099a04f50446921e5a77c0b684456fc0e251bd4', variant: "neutral", appearance: "outlined", loading: this.isLoading === 'search', onClickHandler: () => this.searchArchive() }, t('Lcz_Search', { fallback: 'Search' })), h("ir-custom-button", { key: '0dee83f134d9189d5e3998d8aaa2be8cd32530ce', variant: "neutral", appearance: "outlined", loading: this.isLoading === 'excel', onClickHandler: () => this.exportArchive() }, h("wa-icon", { key: 'd4bc04b4066edbf7c97acc5689ed6f61d078cf02', name: "download", slot: "start" }), t('Lcz_ExportToExcel', { fallback: 'Export' }))))), this.fetchedData && (h("div", { key: 'a067da376fc5c1da8af41a2afac2f9944229c19b', class: "results" }, this.data?.length === 0 && !isRequestPending('/Get_Archived_HK_Tasks') ? (h("ir-empty-state", { message: t('Lcz_NoResultsFound', { fallback: 'No results found' }) })) : (h("div", { class: "table-wrapper" }, h("table", { class: "table data-table" }, h("thead", null, h("tr", null, h("th", null, t('Lcz_Period', { fallback: 'Period' })), h("th", null, t('Lcz_Housekeeper', { fallback: 'Housekeeper' })), h("th", null, t('Lcz_Unit', { fallback: 'Unit' })), h("th", null, t('Lcz_BookingNumber', { fallback: 'Booking #' })))), h("tbody", null, this.data?.map(d => (h("tr", { key: d.id, class: "ir-table-row" }, h("td", null, formatDate(d.date, 'MMM DD, YYYY')), h("td", null, d.house_keeper), h("td", null, h("ir-tooltip", { message: d.unit, customSlot: true, containerStyle: { width: 'fit-content' } }, h("span", { slot: "tooltip-trigger", class: "unit-name" }, d.unit))), h("td", null, d.booking_nbr ? (h("ir-custom-button", { link: true, onClickHandler: () => (this.selectedBooking = d.booking_nbr) }, d.booking_nbr.toString())) : (t('Lcz_WasVacant', { fallback: 'Was vacant' })))))))))))))), h("ir-booking-details-drawer", { key: '818d6b47990d1865f5f1645ae7e6419e517d067b', open: !!this.selectedBooking, propertyId: Number(this.propertyId), bookingNumber: this.selectedBooking?.toString(), ticket: this.ticket, language: this.language, onBookingDetailsDrawerClosed: () => (this.selectedBooking = null) })));
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
        return (h("wa-card", { key: '1057d4e3f47612bbb43ca124164c97c61ccb59ac', class: "task-card" }, h("div", { key: 'f273efe9b590d4733eb4e01da7a442eba3fd2717', class: "task-card__body" }, h("div", { key: '0f845ac7b772455eea2c86ea94ccf056598ad0b6', class: "task-card__unit" }, h("span", { key: '4c4fbe9fa6fba96a96234bd5e94f66fa40dae961', class: "task-card__unit-name" }, this.task.unit.name), h("div", { key: '90f391ef702f8f47cf9a880fbb6226079e5d6cb7', class: "task-card__meta" }, h("span", { key: 'ac90284e16a9b0cc57c66f9bbbc518936faae767', class: "task-card__status" }, this.task.status.description), this.task.hint && h("span", { key: 'cef3b3913ec40ca10b4546095262806989311123', class: "task-card__sep" }, "\u00B7"), this.task.hint && h("span", { key: 'caf202aaf72caa8198c7c342f42f1a88c1dbafc0', class: "task-card__hint" }, this.task.hint))), h("div", { key: 'bfc8e8c85a7ef4e0bec3adbcbdbb6e9b1f5eb09f', class: "task-card__badges" }, this.taskTypeBadge(this.task.task_type?.code), this.task.extra_task?.map(et => this.taskTypeBadge(et.task_type?.code))), this.guests.length > 0 && (h("div", { key: '0a6ee0213761fcb52161f01202e6173885963f55', class: "task-card__guests" }, this.guests.map(g => (h("div", { class: "task-card__guest" }, h("wa-icon", { name: g.icon, class: "task-card__guest-icon", style: { fontSize: `${Math.min(0.75 + g.count * 0.15, 1.4)}rem` } }), h("span", { class: "task-card__guest-count" }, formatCount(g.count))))))), h("div", { key: '6187d6a41733e591045c77f379ff60e2b3f4738a', class: "task-card__assign" }, h("wa-select", { key: '12e8ebdeb697ca7e88a5f6bb65d6d580f7bf1568', label: t('Lcz_Housekeeper', { fallback: 'Housekeeper' }), class: "task-card__hk-select", size: "s", placeholder: t('Lcz_Unassigned', { fallback: 'Unassigned' }), value: this.task.hkm_id ? String(this.task.hkm_id) : '0', defaultValue: this.task.hkm_id ? String(this.task.hkm_id) : '0', onchange: e => {
                const hkm_id = Number(e.target.value);
                this.assignHousekeeper.emit({ task: this.task, hkm_id });
            } }, h("wa-option", { key: '1af7eccdb2f9ff4ef71a5d4d9e994591ab606d42', value: "0" }, t('Lcz_Unassigned', { fallback: 'Unassigned' })), housekeeping_store.hk_criteria?.housekeepers
            .slice()
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(hk => (h("wa-option", { key: hk.id, value: String(hk.id) }, hk.name))))), h("div", { key: 'eae11905a0c739212d83831e6087d02ef6d43b94', class: "task-card__actions" }, this.isSkippable && (h("ir-custom-button", { key: '0c58e116945dc895cb984669918807a0743903a0', variant: "neutral", appearance: "outlined", onClickHandler: () => this.skipSelectedTask.emit(this.task) }, t('Lcz_Skip', { fallback: 'Skip' }))), this.isCheckable && (h("div", { key: 'efab68a87e4c0c2c39ce53bf839de906b6dfcdc8', class: "task-card__clean-group" }, h("ir-custom-button", { key: '6a96a6aee9ab775448e85e603634c88a480069d8', variant: "brand", appearance: "filled", onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            } }, t('Lcz_CleanAndInspect', { fallback: 'Clean & Inspect' })), h("ir-custom-button", { key: 'f0500ea728fc96aaca6ce6c0e2a924c9723c4790', variant: "brand", appearance: "accent", onClickHandler: () => {
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
        return (h("ir-filter-card", { key: '9e6cce4b596eaf2d7a9de6d4f74e83b637d433b7' }, h("fieldset", { key: '0478e7a2f5ac2d7a7dfc7becf2ed62e5f4fcada3' }, h("wa-select", { key: '1a186c95378ace2f82b99cebb8ebfac5812601d1', label: t('Lcz_Period', { fallback: 'Period' }), size: "s", "data-testid": "period", value: this.filters?.cleaning_periods?.code, defaultValue: this.filters?.cleaning_periods?.code, onchange: e => this.updateFilter({ cleaning_periods: { code: e.target.value } }) }, housekeeping_store?.hk_criteria?.cleaning_periods.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description))))), housekeeping_store?.hk_criteria?.housekeepers.length > 1 && (h("fieldset", { key: '79f77070d115cd485feba1a48dab02555829317f' }, h("wa-select", { key: 'a36b7e145ec137020d3768676d25780cd7b20cac', label: t('Lcz_Housekeepers', { fallback: 'Housekeepers' }), size: "s", "data-testid": "housekeepers", value: this.filters?.housekeepers, defaultValue: this.filters?.housekeepers, onchange: e => this.updateFilter({ housekeepers: e.target.value }) }, h("wa-option", { key: '8819c60ee48bdf87848e6a0d85fcf908ab945833', value: "000" }, t('Lcz_Allhousekeepers', { fallback: 'All housekeepers' })), housekeeping_store?.hk_criteria?.housekeepers
            .slice()
            .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
            .map(v => (h("wa-option", { key: v.id, value: v.id.toString() }, v.name)))))), h("fieldset", { key: 'b16b543779e54baf497b4d8b552219e779316b71' }, h("wa-select", { key: '3f16d18837f3efe0acc6bbfed1d68db658b581f3', label: t('Lcz_IncludeDustyUnits', { fallback: 'Include dusty units' }), size: "s", "data-testid": "dusty_units", value: this.filters?.dusty_units?.code, defaultValue: this.filters?.dusty_units?.code, onchange: e => this.updateFilter({ dusty_units: { code: e.target.value } }) }, housekeeping_store.hk_criteria?.dusty_periods?.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description))))), h("fieldset", { key: '3f9a3a3d41734eed893838560a4c4094e95a3afe' }, h("wa-select", { key: 'eca1be460871fc0413e8de02299f437124266c2f', label: t('Lcz_HighlightCheck-insFrom'), size: "s", "data-testid": "highlight_check_ins", value: this.filters?.highlight_check_ins?.code, defaultValue: this.filters?.highlight_check_ins?.code, onchange: e => this.updateFilter({ highlight_check_ins: { code: e.target.value } }) }, housekeeping_store.hk_criteria?.highlight_checkin_options?.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description))))), h("div", { key: '5828b588dd6d4728985813279f3262091dc2d300', slot: "footer" }, h("ir-custom-button", { key: 'f37fa2e67f1528378a8748922037c99af8287d40', variant: "neutral", appearance: "filled", "data-testid": "reset", onClickHandler: e => this.resetFilters(e) }, t('Lcz_Reset', { fallback: 'Reset' })), h("ir-custom-button", { key: 'a773c5ca56eb1d270c8f8e7960e0c730043bd5c9', variant: "brand", "data-testid": "apply", loading: this.isLoading, onClickHandler: e => this.applyFiltersEvt(e) }, t('Lcz_Apply', { fallback: 'Apply' })))));
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
        return (h(Host, { key: '82d67d6cef735761e8cfeb084036e4931e36fb74' }, h("div", { key: 'f437c11583f17c33cd2c387d69dde98d93b2ea16', class: "search-filter-container", style: { gap: '1rem' } }, h("ir-input", { key: '6777a9ae89eed5901fe7fc6655e298436ee16ae4', placeholder: t('Lcz_SearchUnit', { fallback: 'Search unit' }), class: "search-filter-input", value: hkTasksStore.searchField, "onText-change": e => updateSearchField(e.detail) }, h("wa-icon", { key: '53060c7522d1553a7ec121d348a5523222a5f97d', name: "magnifying-glass", slot: "start" }))), h("div", { key: '8231b03f8e1f9ae0a13b9c766455f7ee95d497d4', class: "action-buttons", style: { gap: '1rem' } }, h("ir-custom-button", { key: '79796a9bffb46f7974bf0b6c2793c7e403500e81', appearance: "outlined", variant: "neutral", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'export' });
            } }, h("wa-icon", { key: '843da67528e9d5b3eb9405bc8d370764c8ab8c24', slot: "start", name: "download" }), t('Lcz_Export', { fallback: 'Export' })), h("ir-custom-button", { key: 'cecb39c42105f956e39942e5c75c488d8b0bda2b', appearance: "outlined", variant: "neutral", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'archive' });
            } }, t('Lcz_Archives', { fallback: 'Archives' })), h("wa-animation", { key: 'f35f44983f0b778c0b332b8b1655c61245a11ba8', iterations: 1, id: "cleanInspectAnimation", class: "clean-button", name: "rubberBand", easing: "ease-in-out", duration: 800 }, h("ir-custom-button", { key: '43338c655236663dfa0aedf27fd6eceb25812cbd', appearance: "filled", variant: "brand", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'clean-inspect' });
            }, disabled: !(hkTasksStore.selectedTasks.length > 0) }, t('Lcz_CleanAndInspect', { fallback: 'Clean & Inspect' }))), h("wa-animation", { key: 'c0de4b5a576160d38b7eec0c554532bba26ab9b9', iterations: 1, id: "cleanAnimation", class: "clean-button", name: "rubberBand", easing: "ease-in-out", duration: 800 }, h("ir-custom-button", { key: '2126d5a56b0ab90b9e93c1ee226f9c76f599a150', disabled: !(hkTasksStore.selectedTasks.length > 0), onClickHandler: e => {
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
        return (h(Host, { key: '3d48f7dec63ece60ed7ebec970b608a7cf6c39e3' }, h("section", { key: '72baa5d97aed88323cec91247ba985cd8569d618', class: "mobile-tasks-container" }, h("wa-card", { key: 'a2122d6c83c096bd17653ed613864ef98adf06b2' }, h("ir-tasks-header", { key: '6ed48e21b4d039a51845efe5c4b8175419c1b31c' })), mobileTasks?.length === 0 && h("p", { key: '99b504f12a3696fb38c5e51960323a4972e73871', class: "empty-msg" }, t('Lcz_NoTasksFound', { fallback: 'No tasks found ;)' })), (() => {
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
        })(), h("ir-tasks-table-pagination", { key: '7df3a2db3881de6a939bd3240ebc978d4d1f367f' })), h("wa-card", { key: '9f32a5e53db3d9bd7ce5eea591d86bd2a975a242', class: "table-container" }, h("ir-tasks-header", { key: 'fd11b69b2a68b2d7c182141770d4a83587578c86', class: "tasks__header" }), h("div", { key: 'e93cf22953ce982cc668ed7d493935c184b08703', class: "table--container" }, h("table", { key: '6aff9541b89926365ad0761dc893fcaee616ed22', class: "table data-table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'fd996d3c896df3225cd75287de030faf7c67c1b5', class: "table-header" }, h("tr", { key: '0c88a5d8159dbcad3aa1a72e1262c4097334b120' }, h("th", { key: 'c4042b769d38d688a14c3c50b3d05a8c0c0a9f2f', class: 'task-row' }, h("wa-checkbox", { key: '5c9e61cae1d60f980e00383372105c35ed8e5c0d', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, defaultChecked: this.allSelected, onchange: () => this.toggleSelectAll() })), h("th", { key: 'cd921abe5b1827a825bc607eb0a5a8b069759876', class: "" }, t('Lcz_Period', { fallback: 'Period' })), h("th", { key: '5fc19914815130a2ea03dcb926cd61765d58d9aa', class: "" }, this.tasks.length > 1 && this.tasks.length + ' ', t('Lcz_Unit', { fallback: 'Unit' })), h("th", { key: 'ae3517ecfaa8647880dd1e1204893c9548d5e371', class: "sortable", onClick: () => this.handleSort('status') }, h("div", { key: '589e3268ebc86ad77be9cdfcbfffc5630359982e', class: "th-sort-inner" }, h("span", { key: 'ae15b8157f6e8e53e1f64f85be411aaf2f633ece' }, t('Lcz_Status', { fallback: 'Status' })), h("svg", { key: '737926c16a94b63aeb7c24fcf3538df16470d2ba', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'ca3e6802bcd915458865e37dcdce5e4a2e82ee9b', d: "m21 16-4 4-4-4" }), h("path", { key: '540e0c649e9a2eae6171632c9294d622c110ecbb', d: "M17 20V4" }), h("path", { key: '775e2fea9bef1e2403ee7459c171153c7069c069', d: "m3 8 4-4 4 4" }), h("path", { key: 'a815b98d6bca23620ee7eeda426e863dbeecc1f0', d: "M7 4v16" })))), h("th", { key: '381e0303523b1ecfb7cf876410090693bf2b6e59', class: " ir-text-start" }, t('Lcz_Hint', { fallback: 'Hint' })), h("th", { key: '95f4c2bedb1f1e27f1e4ad1aef3c7dab0257db61', class: " ir-text-start" }, t('Lcz_Tasks', { fallback: 'Tasks' })), h("th", { key: '66d9978fb967095ad454af15aa775e1a11e77ab8', class: "ir-text-start" }, t('Lcz_Ad', { fallback: 'Ad' })), h("th", { key: '752a08ca7a56ff783b74ee3e9b7b3178517bbd30', class: "ir-text-start" }, t('Lcz_Ch', { fallback: 'Ch' })), h("th", { key: '31c750a6ab7eb38cdeb059bd4ddad5d71a1aa15a', class: "ir-text-start" }, t('Lcz_In', { fallback: 'In' })), haveManyHousekeepers && (h("th", { key: '9f1dd5fd9cb99111c0966cbc0e88477346b211fc', class: "sortable", onClick: () => this.handleSort('housekeeper') }, h("div", { key: '18286247a3acea20a3b0d53d99e33405cbd6a7a3', class: "th-sort-inner" }, h("span", { key: '7754c837e6cfd762a30e80205460286923a33d5c' }, t('Lcz_Housekeeper', { fallback: 'Housekeeper' })), h("svg", { key: '83fee6ee61a8cd468c1c86dbe1f1b08c2fd86048', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'f89eaf5ff10fb3cddc0caaedb2e98983346feeb6', d: "m21 16-4 4-4-4" }), h("path", { key: 'afd2485d8559922ef8a64a613099f17ecc173fb2', d: "M17 20V4" }), h("path", { key: 'ac7ec88ec07bd5d76a985d045e585292b1f18f23', d: "m3 8 4-4 4 4" }), h("path", { key: '7b2286a1daeac8f5a8f3f2760ecd39616e160d53', d: "M7 4v16" }))))), h("th", { key: 'b302b6c65c4b826c7bc1da3bfc471345debb9237' }))), h("tbody", { key: 'a356cd5635d135b7a3063a841a67385deb24bc3e' }, tasks.length === 0 && (h("tr", { key: '447b8b03f3b3fe7a5a1374c2534f665e14f45d89', class: "ir-table-row" }, h("td", { key: '1a2c73cdf578575b84801b80d6a1ace29fb2c80f', colSpan: 9 }, h("div", { key: '1584134588569dbd063ac6bcf87bc6a097b72f06', class: "table-empty-state" }, h("span", { key: '6b89a1abd279bd56fd6b1f0b4a852df4b7eb07a8' }, t('Lcz_NoTasksFound', { fallback: 'No tasks found ;)' })))))), tasks?.map((task, taskIndex) => {
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
        })))), h("div", { key: '6a3101746bb4f2e98cfc1480eed1e01bdeab0e01', class: "data-table--pagination " }, h("ir-tasks-table-pagination", { key: '38e3c2dbb17f8454b9a2e0868ca4a1f264cbcb3f' }))), h("ir-dialog", { key: 'ea1a5929e512bf676fb077c179d6bad42e8c442d', ref: el => (this.dialog = el), label: t('Lcz_Confirmation', { fallback: 'Confirmation' }), lightDismiss: false }, h("span", { key: '16709c5854e8388ad518f41b7f19c80d5fef1875' }, t('Lcz_Assign', { fallback: 'Assign' }), " ", h("strong", { key: 'd8cbb0d1671d114f8e8e2d7e0380848409203260' }, this.pendingChange?.task?.unit?.name), ' ', h("span", { key: '2ccbeca2550422674b9fbd9cf285976c476d9909', class: "hk-dialog__connector" }, t('Lcz_To', { fallback: 'To' })), " ", h("strong", { key: '75744de821dbb1edae83d8d4cbb7fe63a7a00da9' }, pendingHkName), "?"), h("div", { key: 'ec53b4759e8bd056d218c2aa51968b4c450acad9', slot: "footer", class: "hk-dialog-footer" }, h("ir-custom-button", { key: '56931b7a465ea6112b306177369828404b4af672', size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.pendingChange = null;
                this.selectRevertKey++;
                this.dialog.closeModal();
            } }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '5dfaed390a75be606840f8f614347a2710b3fe4c', size: "m", appearance: "accent", variant: "brand", loading: isRequestPending('/Override_HK_Task_Ownership'), onClickHandler: () => this.confirmOwnershipChange() }, t('Lcz_Confirm', { fallback: 'Confirm' }))))));
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
        return (h(Host, { key: '71d35041e29ea133ecc8f7aeb2fbfce4e6d00206' }, shouldLoadMore() && (h("ir-custom-button", { key: 'e4edd9285cd3c6ff0a8a73a0008232159b5541b6', variant: "brand", size: "s", class: "tasks-load-more", onClickHandler: () => loadMoreTasks(mobileCurrentPage + 1) }, t('Lcz_LoadMore', { fallback: 'Load more' }))), h("ir-pagination", { key: '08dd7dd0ca09bade31d8e5e57925f3cf7a6225f3', showing: {
                from: start,
                to: end,
            }, allowPageSizeChange: true,
            // class="tasks-pagination"
            total: totalTasks, pages: totalPages, pageSize: pageSize, currentPage: currentPage, pageSizes: pageSizes, onPageChange: e => updateCurrentPage(e.detail.currentPage), onPageSizeChange: e => updatePageSize(e.detail.pageSize), showTotalRecords: true, recordLabel: t('Lcz_Tasks') })));
    }
};
IrTasksTablePagination.style = irTasksTablePaginationCss();

export { IrHkArchiveDrawer as ir_hk_archive_drawer, IrTasksCard as ir_tasks_card, IrTasksFilters as ir_tasks_filters, IrTasksHeader as ir_tasks_header, IrTasksTable as ir_tasks_table, IrTasksTablePagination as ir_tasks_table_pagination };
