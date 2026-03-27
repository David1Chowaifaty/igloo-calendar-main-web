import { r as registerInstance, h, F as Fragment, H as Host, c as createEvent, g as getElement } from './index-7e96440e.js';
import { H as HouseKeepingService, h as housekeeping_store } from './housekeeping.service-b4e8d599.js';
import { c as calendar_data } from './calendar-data-2ae53dc9.js';
import { i as isRequestPending } from './ir-interceptor.store-1376ed6c.js';
import { l as locales } from './locales.store-cb784e95.js';
import { l as downloadFile } from './utils-4dd4655a.js';
import { h as hooks } from './moment-ab846cee.js';
import { v as v4 } from './v4-964634d6.js';
import { t as toggleTaskSelection, h as hkTasksStore, b as updateSearchField, d as updateSorting, c as clearSelectedTasks, i as isAllTasksSelected, e as selectAllTasks, g as getCheckableTasks, u as updateTasks, f as getPaginatedTasks, j as getMobileTasks, k as updateCurrentPage, l as updatePageSize, m as shouldLoadMore, n as loadMoreTasks } from './hk-tasks.store-2266a681.js';
import './index-87419685.js';
import './index-f100e9d2.js';
import './axios-aa1335b8.js';
import './type-f926f853.js';

const irHkArchiveCss = ".sc-ir-hk-archive-h{display:block}.unit-name.sc-ir-hk-archive{max-width:100px;display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 !important;margin:0 !important;text-align:start}.table.sc-ir-hk-archive th.sc-ir-hk-archive,.table.sc-ir-hk-archive td.sc-ir-hk-archive{white-space:nowrap;width:fit-content;max-width:max-content !important;border:0;text-align:start;background-color:white;padding:0.25rem !important}.table.sc-ir-hk-archive th.sc-ir-hk-archive:first-child,.table.sc-ir-hk-archive td.sc-ir-hk-archive:first-child{padding-left:0 !important}";
const IrHkArchiveStyle0 = irHkArchiveCss;

const IrHkArchive = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    propertyId;
    language = 'en';
    ticket;
    filters = {
        from_date: null,
        to_date: null,
        filtered_by_hkm: [],
        filtered_by_unit: [],
    };
    data = [];
    isLoading = null;
    fetchedData = false;
    selectedBooking;
    minSelectableDate = hooks().subtract(90, 'days').toDate();
    houseKeepingService = new HouseKeepingService();
    units = [];
    handleSideBarToggle(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.selectedBooking = null;
    }
    componentWillLoad() {
        this.setUpUnits();
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
    async getArchivedTasks(export_to_excel = false) {
        const res = await this.houseKeepingService.getArchivedHKTasks({ property_id: Number(this.propertyId), ...this.filters, is_export_to_excel: export_to_excel });
        this.data = [...(res?.tasks || [])]?.map(t => ({ ...t, id: v4() }));
        this.fetchedData = true;
        return { tasks: res?.tasks, url: res?.url };
    }
    handleDateRangeChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { fromDate, toDate } = e.detail;
        this.updateFilters({
            from_date: fromDate ? fromDate.format('YYYY-MM-DD') : null,
            to_date: toDate ? toDate.format('YYYY-MM-DD') : null,
        });
    }
    updateFilters(props) {
        this.filters = { ...this.filters, ...props };
    }
    async searchArchive(e) {
        try {
            e.stopImmediatePropagation();
            e.stopPropagation();
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
    async exportArchive(e) {
        try {
            e.stopImmediatePropagation();
            e.stopPropagation();
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
        return (h(Host, { key: '676710d61ae1f106c6f483d40ddac71f1a4a2422' }, h("ir-title", { key: 'f28d1a83262464064f2379940667ca0399bb402c', class: "px-1", label: "Cleaning Archives (90 days)", displayContext: "sidebar" }), h("section", { key: '00ba67a7c657a0280aa15641a4abcba8b465958d', class: "px-1" }, h("div", { key: '0073d603f1fc9757a34a5c79ea8b3227c2a7535d', class: "d-flex" }, h("ir-select", { key: 'f012f58b1e58479152038cd14ebc4f862e1beffb', class: "w-100", showFirstOption: false, data: [
                { text: 'All units', value: '000' },
                ,
                ...this.units
                    ?.map(v => ({
                    text: v.name,
                    value: v.id.toString(),
                }))
                    .sort((a, b) => a.text.toLowerCase().localeCompare(b.text.toLowerCase())),
            ], onSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                if (e.detail === '000') {
                    this.updateFilters({ filtered_by_unit: [] });
                }
                else {
                    this.updateFilters({ filtered_by_unit: [e.detail] });
                }
            } }), housekeeping_store?.hk_criteria?.housekeepers.length > 1 && (h("ir-select", { key: '704741fc607216991750e2b5b0482046829917f5', class: "ml-1 w-100", selectedValue: this.filters?.filtered_by_hkm?.length === housekeeping_store.hk_criteria.housekeepers.length ? '000' : this.filters?.filtered_by_hkm[0]?.toString(), showFirstOption: false, data: [
                { text: 'All housekeepers', value: '000' },
                ...housekeeping_store?.hk_criteria?.housekeepers
                    .map(v => ({
                    text: v.name,
                    value: v.id.toString(),
                }))
                    .sort((a, b) => a.text.toLowerCase().localeCompare(b.text.toLowerCase())),
            ], onSelectChange: e => {
                if (e.detail === '000') {
                    this.updateFilters({ filtered_by_hkm: [] });
                }
                else {
                    this.updateFilters({ filtered_by_hkm: [e.detail] });
                }
            } }))), h("div", { key: 'ab0e6d34600d4bc9acfea95e4eb577795ba949a3', class: "d-flex mt-1 align-items-center" }, h("ir-range-picker", { key: '828e2873e51bac98302b319572f53bd546b11560', maxDate: hooks().format('YYYY-MM-DD'), minDate: this.minSelectableDate, class: "mr-1", fromDate: this.filters.from_date ? hooks(this.filters.from_date, 'YYYY-MM-DD') : null, toDate: this.filters.to_date ? hooks(this.filters.to_date, 'YYYY-MM-DD') : null }), h("ir-button", { key: '19b7616edcc71c5df1379e7e1f0c42f7bd81a755', title: locales.entries?.Lcz_Search, variant: "icon", icon_name: "search", class: "mr-1", isLoading: this.isLoading === 'search', onClickHandler: e => this.searchArchive(e) }), h("ir-button", { key: '6ecc508180513f610f8a6572af19f2ab6c726db5', title: locales.entries?.Lcz_ExportToExcel, variant: "icon", icon_name: "file", isLoading: this.isLoading === 'excel', onClickHandler: e => this.exportArchive(e) })), this.fetchedData && (h(Fragment, { key: 'cb7a2d7b002af5cb622459158bb16e244733b26d' }, this.data?.length === 0 && !isRequestPending('/Get_Archived_HK_Tasks') ? (h("p", { class: 'text-center mt-2' }, locales.entries.Lcz_NoResultsFound)) : (h("table", { class: "mt-2 table" }, h("thead", null, h("th", { class: "pl-0" }, locales.entries.Lcz_Period), h("th", null, locales.entries.Lcz_Housekeeper), h("th", null, locales.entries.Lcz_Unit), h("th", null, locales.entries.Lcz_BookingNumber)), h("tbody", null, this.data?.map(d => (h("tr", { key: d.id }, h("td", { class: "pl-0" }, d.date), h("td", null, d.house_keeper), h("td", null, h("ir-tooltip", { message: d.unit, customSlot: true, containerStyle: { width: 'fit-content' } }, h("span", { slot: "tooltip-trigger", class: `unit-name` }, d.unit))), h("td", null, d.booking_nbr ? (h("ir-button", { btn_color: "link", btnStyle: {
                width: 'fit-content',
                padding: '0',
                margin: '0',
            }, labelStyle: {
                padding: '0',
            }, text: d.booking_nbr.toString(), onClick: () => {
                this.selectedBooking = d.booking_nbr;
                // window.open(`https://x.igloorooms.com/manage/acbookingeditV2.aspx?BN=${d.booking_nbr}`, '_blank');
            } })) : (locales.entries.Lcz_WasVacant))))))))))), h("ir-sidebar", { key: 'da64df989bdf60c1f22a951e373d21f4804b9132', onIrSidebarToggle: this.handleSideBarToggle.bind(this), open: !!this.selectedBooking, showCloseButton: false, sidebarStyles: {
                width: '80rem',
                background: '#F2F3F8',
            } }, this.selectedBooking && (h("ir-booking-details", { key: '453d57aa3641c33d85727bc1adf4356dd5446d0b', slot: "sidebar-body", hasPrint: true, hasReceipt: true, hasCloseButton: true, onCloseSidebar: () => (this.selectedBooking = null), is_from_front_desk: true, propertyid: Number(this.propertyId), hasRoomEdit: true, hasRoomDelete: true, bookingNumber: this.selectedBooking?.toString(), language: this.language, hasRoomAdd: true, ticket: this.ticket })))));
    }
};
IrHkArchive.style = IrHkArchiveStyle0;

const irTasksCardCss = ".sc-ir-tasks-card-h{display:block}.task-card.sc-ir-tasks-card::part(body){padding:0.5rem 0.75rem}.task-card__body.sc-ir-tasks-card{display:flex;align-items:center;gap:0.875rem;min-height:2.75rem}.task-card__unit.sc-ir-tasks-card{display:flex;flex-direction:column;gap:0.1rem;min-width:0;flex:1}.task-card__unit-name.sc-ir-tasks-card{font-weight:700;font-size:var(--wa-font-size-m);color:var(--wa-color-text-normal);line-height:1.2;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0}.task-card__meta.sc-ir-tasks-card{display:flex;align-items:center;gap:0.25rem;flex-wrap:nowrap}.task-card__status.sc-ir-tasks-card{font-size:var(--wa-font-size-xs);font-weight:600;text-transform:uppercase;letter-spacing:0.04em;color:var(--wa-color-text-quiet);white-space:nowrap}.task-card__sep.sc-ir-tasks-card,.task-card__hint.sc-ir-tasks-card,.task-card__date.sc-ir-tasks-card{font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet);white-space:nowrap}.task-card__badges.sc-ir-tasks-card{display:flex;align-items:center;gap:0.25rem;flex-shrink:0}.task-card__guests.sc-ir-tasks-card{display:flex;gap:0.2rem;flex-shrink:0}.task-card__guest.sc-ir-tasks-card{display:flex;align-items:center;gap:0.25rem}.task-card__guest-icon.sc-ir-tasks-card{color:var(--wa-color-text-quiet);flex-shrink:0}.task-card__guest-count.sc-ir-tasks-card{font-size:var(--wa-font-size-m);font-weight:600;color:var(--wa-color-text-normal);line-height:1;min-width:1ch}.task-card__assign.sc-ir-tasks-card{display:flex;align-items:center;gap:0.375rem;flex:1;min-width:0;border-left:1px solid var(--wa-color-surface-border);padding-left:0.875rem}.task-card__assign-icon.sc-ir-tasks-card{flex-shrink:0;color:var(--wa-color-text-quiet);font-size:0.875rem}.task-card__hk-select.sc-ir-tasks-card{flex:1;min-width:0;max-width:11rem}.task-card__actions.sc-ir-tasks-card{display:flex;align-items:center;gap:0.5rem;flex-shrink:0}.task-card__clean-group.sc-ir-tasks-card{display:flex;align-items:center;gap:0.5rem}.task-card__clean-group.sc-ir-tasks-card ir-custom-button.sc-ir-tasks-card:first-child::part(base){border-radius:var(--wa-border-radius-m) 0 0 var(--wa-border-radius-m);border-right:none}.task-card__clean-group.sc-ir-tasks-card ir-custom-button.sc-ir-tasks-card:last-child::part(base){border-radius:0 var(--wa-border-radius-m) var(--wa-border-radius-m) 0}@media (max-width: 639px){.task-card__body.sc-ir-tasks-card{flex-wrap:wrap;min-height:unset;gap:0.625rem}.task-card__unit.sc-ir-tasks-card{flex:1;min-width:0;max-width:unset}.task-card__unit-name.sc-ir-tasks-card{max-width:100%}.task-card__assign.sc-ir-tasks-card{border-left:none;padding-left:0;padding-top:0.5rem;width:100%;flex:0 0 100%}.task-card__hk-select.sc-ir-tasks-card{max-width:100%}.task-card__actions.sc-ir-tasks-card{width:100%;justify-content:flex-end}}";
const IrTasksCardStyle0 = irTasksCardCss;

const IrTasksCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.cleanSelectedTask = createEvent(this, "cleanSelectedTask", 7);
        this.skipSelectedTask = createEvent(this, "skipSelectedTask", 7);
        this.assignHousekeeper = createEvent(this, "assignHousekeeper", 7);
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
        return (h("wa-card", { key: '68a862ccda6bc148b5adc1aa7d590e9336a01230', class: "task-card" }, h("div", { key: '3545f4d8524ca6be14b9bd383d863bbf9e4a5df6', class: "task-card__body" }, h("div", { key: '5b2f88a6f5cf539e93ca875064d3ca1db08edc0a', class: "task-card__unit" }, h("span", { key: 'c394e1715b0bde657046ac08eff34a2037e0d217', class: "task-card__unit-name" }, this.task.unit.name), h("div", { key: '14cdf7d8f0b6bea7a55bb5053ea3d027b00477ef', class: "task-card__meta" }, h("span", { key: 'dd09bf1428c9263b4fd1f000ce4beb3a76da2f7d', class: "task-card__status" }, this.task.status.description), this.task.hint && h("span", { key: 'ba451dbf79a2865a23fc425afc4c5a800e7c02ee', class: "task-card__sep" }, "\u00B7"), this.task.hint && h("span", { key: '030b7820b66bec254cb537e0be1e4d59ac48214b', class: "task-card__hint" }, this.task.hint), h("span", { key: '0746bad605e4592beb91df06cbe36c9bfb7fd21b', class: "task-card__sep" }, "\u00B7"), h("span", { key: '7e9794531160b423b83d3b6b2b0b38ec6702a4eb', class: "task-card__date" }, this.task.formatted_date))), h("div", { key: '1039f67770f589e8ed6f3cc8dcd7cc985232c27e', class: "task-card__badges" }, this.taskTypeBadge(this.task.task_type?.code), this.task.extra_task?.map(et => this.taskTypeBadge(et.task_type?.code))), this.guests.length > 0 && (h("div", { key: '1d063d038e98f006de6dcf3403dd0fc2850b8f95', class: "task-card__guests" }, this.guests.map(g => (h("div", { class: "task-card__guest" }, h("wa-icon", { name: g.icon, class: "task-card__guest-icon", style: { fontSize: `${Math.min(0.75 + g.count * 0.15, 1.4)}rem` } }), h("span", { class: "task-card__guest-count" }, g.count)))))), h("div", { key: '72139e6cb75d7614f0fc09c42399384e409db415', class: "task-card__assign" }, h("wa-select", { key: 'c1d7ae4483651b2009ffc5703e990ad07d1291e4', label: "Housekeeper", class: "task-card__hk-select", size: "small", placeholder: "Unassigned", value: this.task.hkm_id ? String(this.task.hkm_id) : '0', defaultValue: this.task.hkm_id ? String(this.task.hkm_id) : '0', onchange: e => {
                const hkm_id = Number(e.target.value);
                this.assignHousekeeper.emit({ task: this.task, hkm_id });
            } }, h("wa-option", { key: '85c6210feb4117c0892b0654398265a32d647f0b', value: "0" }, locales.entries.Lcz_Unassigned), housekeeping_store.hk_criteria?.housekeepers
            .slice()
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(hk => (h("wa-option", { key: hk.id, value: String(hk.id) }, hk.name))))), h("div", { key: '89454e525c0664308206453827edc4ecb0a53936', class: "task-card__actions" }, this.isCheckable && (h("div", { key: '8308102f7e0d5a8ee0dd505d3b28238212c7798f', class: "task-card__clean-group" }, h("ir-custom-button", { key: '7f7261f34fd17f0f2247c2a3b948998ad2375dec', variant: "brand", appearance: "outlined", onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            } }, "Clean"), h("ir-custom-button", { key: '915496e771ec6f92d49e164212a8dd71c6e44545', variant: "brand", appearance: "filled", onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            } }, "Clean & Inspect"))), this.isSkippable && (h("ir-custom-button", { key: '923d7f35f6ff8bc46e1d243322bf76d7232565f5', variant: "neutral", appearance: "outlined", onClickHandler: () => this.skipSelectedTask.emit(this.task) }, "Skip"))))));
    }
};
IrTasksCard.style = IrTasksCardStyle0;

const irTasksFiltersCss = ".sc-ir-tasks-filters-h{display:block;min-width:20vw;height:100%;flex:1}.filters__header.sc-ir-tasks-filters{display:flex;align-items:center;justify-content:space-between}.filters__title-group.sc-ir-tasks-filters{display:flex;align-items:center;gap:0.5rem}.filters__card.--collapsed.sc-ir-tasks-filters::part(body){display:none}.filters__icon.sc-ir-tasks-filters{width:1.125rem;height:1.125rem;flex-shrink:0;color:var(--wa-color-text-quiet)}.filters__title.sc-ir-tasks-filters{margin:0;font-size:var(--wa-font-size-m);font-weight:var(--wa-font-weight-heading);color:var(--wa-color-text-normal)}.filters__body.sc-ir-tasks-filters{display:flex;flex-direction:column;gap:0.75rem}.filters__body--collapsed.sc-ir-tasks-filters{display:none}.filters__actions.sc-ir-tasks-filters{display:flex;align-items:center;justify-content:flex-end;gap:0.75rem;padding-top:0.25rem}@media (min-width: 1024px){.filters__collapse-btn.sc-ir-tasks-filters{display:none}.filters__card.--collapsed.sc-ir-tasks-filters::part(body){display:block}.filters__body--collapsed.sc-ir-tasks-filters{display:flex}}";
const IrTasksFiltersStyle0 = irTasksFiltersCss;

const IrTasksFilters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.applyFilters = createEvent(this, "applyFilters", 7);
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
        return (h("wa-card", { key: '0510db01a2dcba7e008b6aff4dc80702609e6d54', class: `filters__card ${this.collapsed ? '--collapsed' : ''}` }, h("div", { key: '1352405b19197238455b77b7139e3da58c0ca52d', class: "filters__header", slot: "header" }, h("div", { key: '7c0ef59b27be329c693582bedc84a905cc2ce2a9', class: "filters__title-group" }, h("wa-icon", { key: '0c1f6f6f4b0ec66392126741b9e4ddebf48a28c3', name: "filter", style: { fontSize: '1rem' } }), h("h4", { key: 'b7e63a5f0d0fe1ec08266cef05b04405da0fd276', class: "filters__title" }, locales.entries.Lcz_Filters)), h("ir-custom-button", { key: '6eaa5d1106652ee90b8718beabf8cad0ff239c31', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, h("wa-icon", { key: 'e88d07702172d2ced3f0e9678416c7cd628dd78c', style: { fontSize: '1rem' }, name: !this.collapsed ? 'eye-slash' : 'eye' }))), h("div", { key: '520ca861b25b7be3bea0a8c9248d567f786da895', class: `filters__body${this.collapsed ? ' filters__body--collapsed' : ''}`, id: "hkTasksFiltersCollapse" }, h("fieldset", { key: '0f36dcca827a3c8b35d1ee86a2579057bf2ddeb8' }, h("wa-select", { key: '64f49068cde4930793a64707a830cd02905f4c1f', label: locales.entries.Lcz_Period, size: "small", "data-testid": "period", value: this.filters?.cleaning_periods?.code, defaultValue: this.filters?.cleaning_periods?.code, onchange: e => this.updateFilter({ cleaning_periods: { code: e.target.value } }) }, housekeeping_store?.hk_criteria?.cleaning_periods.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description))))), housekeeping_store?.hk_criteria?.housekeepers.length > 1 && (h("fieldset", { key: 'ef90230f9e7c1f9ccd86fe8025dc25ef86e5314b' }, h("wa-select", { key: '9abb06b4b0a6f15bbee9f15e1d7d281bf10e9907', label: locales.entries.Lcz_Housekeepers, size: "small", "data-testid": "housekeepers", value: this.filters?.housekeepers, defaultValue: this.filters?.housekeepers, onchange: e => this.updateFilter({ housekeepers: e.target.value }) }, h("wa-option", { key: '4ae6c1f9f813b6f6f24933b0b4341997c757255d', value: "000" }, locales.entries.Lcz_Allhousekeepers), housekeeping_store?.hk_criteria?.housekeepers
            .slice()
            .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
            .map(v => (h("wa-option", { key: v.id, value: v.id.toString() }, v.name)))))), h("fieldset", { key: '18d28f47934e427e389ee8c5b50f638c123da6b8' }, h("wa-select", { key: '08285a16b0fafdc41a17593ba4181dc84039bf31', label: "Include dusty units", size: "small", "data-testid": "dusty_units", value: this.filters?.dusty_units?.code, defaultValue: this.filters?.dusty_units?.code, onchange: e => this.updateFilter({ dusty_units: { code: e.target.value } }) }, housekeeping_store.hk_criteria?.dusty_periods?.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description))))), h("fieldset", { key: 'e239b1cbcbe9f471ab6627dd4ccc027907aa1012' }, h("wa-select", { key: '98680ec722159e387ffa25ef7eb056f985b69516', label: locales.entries['Lcz_HighlightCheck-insFrom'], size: "small", "data-testid": "highlight_check_ins", value: this.filters?.highlight_check_ins?.code, defaultValue: this.filters?.highlight_check_ins?.code, onchange: e => this.updateFilter({ highlight_check_ins: { code: e.target.value } }) }, housekeeping_store.hk_criteria?.highlight_checkin_options?.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description))))), h("div", { key: 'c9f9d95bf9eb8bf2f25c6d249c5b02fdd4aa40e8', class: "filters__actions" }, h("ir-custom-button", { key: '72f283d7510460adb77821bb6ad841b5ade43fec', variant: "neutral", appearance: "filled", "data-testid": "reset", onClickHandler: e => this.resetFilters(e) }, locales.entries.Lcz_Reset), h("ir-custom-button", { key: '21f8e26c4375a04dbaad8e6136230a2f6fc122c7', variant: "brand", "data-testid": "apply", loading: this.isLoading, onClickHandler: e => this.applyFiltersEvt(e) }, locales.entries.Lcz_Apply)))));
    }
};
IrTasksFilters.style = IrTasksFiltersStyle0;

const irTasksHeaderCss = ".sc-ir-tasks-header-h{display:flex;gap:1rem;flex-wrap:wrap}.action-buttons.sc-ir-tasks-header{display:flex;align-items:center}.search-filter-container.sc-ir-tasks-header{flex:1 1 0%}.clean-button.sc-ir-tasks-header{display:none}@media (min-width: 640px){.sc-ir-tasks-header-h{flex-direction:row;justify-content:space-between;align-items:center;margin-bottom:1rem}.search-filter-container.sc-ir-tasks-header{display:flex}.action-buttons.sc-ir-tasks-header{justify-content:stretch}.clean-button.sc-ir-tasks-header{display:flex}}";
const IrTasksHeaderStyle0 = irTasksHeaderCss;

const IrTasksHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.headerButtonPress = createEvent(this, "headerButtonPress", 7);
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
        return (h(Host, { key: 'ac6125f62b939b79ec8b17b2b504f630f85456cd' }, h("div", { key: '52be48caa2ce6c5d910413c19dcef6d58831ef7d', class: "search-filter-container", style: { gap: '1rem' } }, h("ir-input", { key: '50786e98f1430751a652d9cc4f5c121a7000a9d5', placeholder: "Search unit", class: "search-filter-input", value: hkTasksStore.searchField, "onText-change": e => updateSearchField(e.detail) }, h("wa-icon", { key: 'eba0e2e91f9ae8a7b6be33ad1cf70980225931d3', name: "magnifying-glass", slot: "start" }))), h("div", { key: '713e49f4ec459ca5cc892bdb30e4e1afb6743c8e', class: "action-buttons", style: { gap: '1rem' } }, h("ir-custom-button", { key: 'b6cafd124bc5f6fbe10bf94ccaf6572e9367e74a', appearance: "outlined", variant: "neutral", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'export' });
            } }, h("wa-icon", { key: 'aaa8b0900826200d20bd7f44c294613df57d0fb2', slot: "end", name: "file-excel" }), locales.entries.Lcz_Export), h("ir-custom-button", { key: 'ffa8c967f9cc06cd6f960611993333021a59787e', appearance: "outlined", variant: "neutral", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'archive' });
            } }, locales.entries.Lcz_Archives), h("wa-animation", { key: '16b0a77f5d8ef914dfea35085ae53e59dc3dc971', iterations: 1, id: "cleanInspectAnimation", class: "clean-button", name: "rubberBand", easing: "ease-in-out", duration: 800 }, h("ir-custom-button", { key: '4896aa448386bed8f3e7187a7b431f75879cbac0', appearance: "filled", variant: "brand", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'clean-inspect' });
            }, disabled: !(hkTasksStore.selectedTasks.length > 0) }, "Clean & Inspect")), h("wa-animation", { key: '6fd1743f40a95ad094dd7424896a4df4bb2ecf1c', iterations: 1, id: "cleanAnimation", class: "clean-button", name: "rubberBand", easing: "ease-in-out", duration: 800 }, h("ir-custom-button", { key: '310584b210ae9a40793b375aba84ff8fbfd290dc', disabled: !(hkTasksStore.selectedTasks.length > 0), onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'cleaned' });
            }, variant: "brand" }, "Cleaned")))));
    }
};
IrTasksHeader.style = IrTasksHeaderStyle0;

const irTasksTableCss = ".sc-ir-tasks-table-h{display:block;min-width:0;width:100%}.hk-owner-select.sc-ir-tasks-table{min-width:130px}.hk-dialog-footer.sc-ir-tasks-table{display:flex;justify-content:flex-end;gap:0.5rem}.highlighted-unit.sc-ir-tasks-table{background:#000;color:white;padding:0.2rem 0.3rem;border-radius:4px}.task-table-row.sc-ir-tasks-table td.sc-ir-tasks-table{background:white !important}.task-table-row.sc-ir-tasks-table:hover td.sc-ir-tasks-table{background:#e2e6ea3f !important}.th-sort-inner.sc-ir-tasks-table{display:flex;align-items:center;gap:0.5rem}.table-empty-state.sc-ir-tasks-table{display:flex;align-items:center;justify-content:center;height:300px}.empty-msg.sc-ir-tasks-table{text-align:center;color:var(--wa-color-text-quiet)}.mobile-tasks-container.sc-ir-tasks-table{display:flex;flex-direction:column;gap:1rem}.table-container.sc-ir-tasks-table{display:none;min-width:0;width:100%}@media (min-width: 640px){.mobile-tasks-container.sc-ir-tasks-table{display:none}.table-container.sc-ir-tasks-table{display:block;min-width:0}.table--container.sc-ir-tasks-table{overflow-x:auto;overflow-y:visible;width:100%}}";
const IrTasksTableStyle0 = irTasksTableCss;

const tableCss = ".sc-ir-tasks-table-h{--ir-cell-padding:0.5rem 1rem}.ir-table-row.sc-ir-tasks-table td.sc-ir-tasks-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-tasks-table{overflow-x:auto}.table.sc-ir-tasks-table td.sc-ir-tasks-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.table.sc-ir-tasks-table tbody.sc-ir-tasks-table tr.sc-ir-tasks-table:last-child>td.sc-ir-tasks-table{border-bottom:0 !important}.table.sc-ir-tasks-table thead.sc-ir-tasks-table th.sc-ir-tasks-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-tasks-table thead.sc-ir-tasks-table th.sc-ir-tasks-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-tasks-table .empty-row.sc-ir-tasks-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-tasks-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-tasks-table td.sc-ir-tasks-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-brand-fill-normal) !important}.selected.sc-ir-tasks-table td.sc-ir-tasks-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-tasks-table,.ir-table-row.sc-ir-tasks-table{transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-tasks-table{text-transform:capitalize;cursor:pointer}.ir-table-row.sc-ir-tasks-table td.sc-ir-tasks-table{transition-duration:var(--wa-transition-fast)}.table.sc-ir-tasks-table thead.sc-ir-tasks-table th.sortable.sc-ir-tasks-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-tasks-table thead.sc-ir-tasks-table th.sortable.sc-ir-tasks-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-tasks-table thead.sc-ir-tasks-table th.sortable.sc-ir-tasks-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.ir-table-row.sc-ir-tasks-table:hover td.sc-ir-tasks-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-tasks-table:hover td.sc-ir-tasks-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-tasks-table:active td.sc-ir-tasks-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.ir-table-row.sc-ir-tasks-table:hover td.sc-ir-tasks-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-tasks-table:active td.sc-ir-tasks-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-tasks-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-tasks-table svg.sc-ir-tasks-table{color:var(--wa-color-brand-fill-loud)}.sticky-column.sc-ir-tasks-table{position:sticky !important;right:0;background-color:white}.table--container.sc-ir-tasks-table,.data-table.sc-ir-tasks-table{height:100%}";
const IrTasksTableStyle1 = tableCss;

const IrTasksTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.animateCleanedButton = createEvent(this, "animateCleanedButton", 7);
        this.rowSelectChange = createEvent(this, "rowSelectChange", 7);
        this.sortingChanged = createEvent(this, "sortingChanged", 7);
        this.skipSelectedTask = createEvent(this, "skipSelectedTask", 7);
        this.toast = createEvent(this, "toast", 7);
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
                assignment: [buildAssignment(task), ...(task.extra_task ?? []).map(buildAssignment)],
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
        return (h(Host, { key: '789fc15ec36dd4a7e8f9c38132ec3cda52939211' }, h("section", { key: 'd215d59b720c990e67cc78fdf22ff3028b07d589', class: "mobile-tasks-container" }, h("wa-card", { key: 'bf7024cb83ce4b2f60f5ee0165ce92db556fc450' }, h("ir-tasks-header", { key: '5fa18ef089d3ec0a6594096e633a8f237e3a74d2' })), mobileTasks?.length === 0 && h("p", { key: '90535c447b16c2904b28bbb3cf6ed7e78c0e1891', class: "empty-msg" }, locales.entries.Lcz_NoTasksFound), mobileTasks.map(task => {
            const isCheckable = this.isCheckable(task);
            const isSkippable = this.isSkippable(task);
            return h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
        }), h("ir-tasks-table-pagination", { key: 'e8bf9f3627e7d07a526582f8d63ee66bb412fbba' })), h("wa-card", { key: '992d043476eda61350f18eee3fc105bbb0cef76a', class: "table-container" }, h("ir-tasks-header", { key: '8732d2e5bad8c6f8a9fc8ff7686fa491184edf6e' }), h("div", { key: 'b321e0c8d2f498258c8c17a8741117ca62bec73b', class: "table--container" }, h("table", { key: 'cdf786891abae31b964e917c044ce1e663bf93f3', class: "table data-table", "data-testid": "hk_tasks_table" }, h("thead", { key: '80f055eb7618acce6fc09104a2d7059b9bbbef95', class: "table-header" }, h("tr", { key: 'c559b2fae552cccef6a4d638bd0f85dbe77d1fb6' }, h("th", { key: 'f3a6b4ae086ff7e552d5055394cd06c7e960a9a8', class: 'task-row' }, h("wa-checkbox", { key: '63d262d4b77667657865200e8faef0bf8527e153', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, defaultChecked: this.allSelected, onchange: () => this.toggleSelectAll() })), h("th", { key: '3398728d6075764f6376374df8e77a106c9f1181', class: "" }, locales.entries.Lcz_Period), h("th", { key: '4a49e5b83fce616521dde739334e146eb52a71ef', class: "" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: '80869bb6f7434e6aa9f49b6ec824e638446a0fb2', class: "sortable", onClick: () => this.handleSort('status') }, h("div", { key: 'a06a6c9d5ecbabbcea98e8ed149356c930d144eb', class: "th-sort-inner" }, h("span", { key: 'bc883f34b1e1b5f7232a7720d24673ec5a98f1ce' }, locales.entries.Lcz_Status), h("svg", { key: 'c36158c6358b6a46f765e0b1b132f5a426ae6111', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '286c5af937a9801aab5b13822738085b6aa5d9a3', d: "m21 16-4 4-4-4" }), h("path", { key: '531c335f3c50151c662ee7b976507b01d38e52f4', d: "M17 20V4" }), h("path", { key: 'f390e607397b7857521b74f26f1ce76423030347', d: "m3 8 4-4 4 4" }), h("path", { key: '445292f36e636e2b26abbd2b3fd83a18723439f6', d: "M7 4v16" })))), h("th", { key: '993d66643c32036ff6585e43a7f5a2862b1209fc', class: " text-left" }, locales.entries.Lcz_Hint), h("th", { key: '8f423f0b73abb116695845211ca5e08366e80dd0', class: " text-left" }, "Tasks"), h("th", { key: '42ef9c899f553aa205c9fc4a4157586c1390a25c', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '9824d126a63a2f346bd82214d3def9af1e66b284', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: '89627a9a5bc6d91f9fabf1ee483c000e12681241', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: 'f2cb1cf62b3c141a12a9fda7fbef2eaef7d90a68', class: "sortable", onClick: () => this.handleSort('housekeeper') }, h("div", { key: 'e98ae7756d8d34f185f59715fc716cadc2c07c90', class: "th-sort-inner" }, h("span", { key: 'a7c8240178a959a8a8ad9fd9d3cdc182c52615a9' }, locales.entries.Lcz_Housekeeper), h("svg", { key: '9563586eb6d9b7059cceaa15aee91d58766a0d10', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'e811c0eb50efe80921df1ae65604b1c4c072ce04', d: "m21 16-4 4-4-4" }), h("path", { key: '3ff2f853086255e33b177e311fd60a7a0c720b7d', d: "M17 20V4" }), h("path", { key: '78ffbcecae0075d37c336ae305ab2dafbf0ebd65', d: "m3 8 4-4 4 4" }), h("path", { key: '5ddadfb1661659ee57b65d99f9bb6d572fee6de6', d: "M7 4v16" }))))), h("th", { key: '4738051cf4728ecfcab84fced619f197217f0d4c' }))), h("tbody", { key: '5e575eee1aabae19902b0f44dd28d43f39872711' }, tasks.length === 0 && (h("tr", { key: '9b7a7f7d02862c3c6860e2bad5f601aaa333c980', class: "ir-table-row" }, h("td", { key: '3c47dd6e2f37135cacca35c725efc6b751ce11ee', colSpan: 9 }, h("div", { key: '37f359c41580505b13754ccd316e22c9f97a57b0', class: "table-empty-state" }, h("span", { key: '873e763871b6ba578a61b8d329fe563c4b251cc7' }, locales.entries.Lcz_NoTasksFound))))), tasks?.map(task => {
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
                } }))), h("td", { class: "task-row " }, task.formatted_date), h("td", { class: "task-row " }, h("span", { class: { 'highlighted-unit': task.is_highlight } }, task.unit.name)), h("td", { class: "task-row  text-left" }, task.status.description), h("td", { class: "task-row  text-left" }, task.hint), h("td", { class: "task-row  text-left" }, h("div", { class: "th-sort-inner" }, this.taskBadges(task))), h("td", { class: "task-row text-left" }, task.adult), h("td", { class: "task-row text-left" }, task.child), h("td", { class: "task-row text-left" }, task.infant), haveManyHousekeepers && (h("td", { class: "task-row ", style: { textAlign: 'start' }, onClick: (e) => e.stopPropagation() }, h("wa-select", { key: `${task.id}-${this.selectRevertKey}`, class: "hk-owner-select", size: "small", value: String(task.hkm_id ?? 0), defaultValue: String(task.hkm_id ?? 0), onchange: (e) => {
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
        })))), h("div", { key: 'aef4dcb2effb03b4f2a46dde5cb8e8f7f87c5bcf', class: "data-table--pagination " }, h("ir-tasks-table-pagination", { key: '3bd18125e651db3d8a264c933d7869f54f54c011' }))), h("ir-dialog", { key: 'be488bd77cfed95f476fd6894d6073312e10cb77', ref: el => (this.dialog = el), label: locales.entries.Lcz_Confirmation, lightDismiss: false }, h("span", { key: '9d01a502e3e932a659dce840040a28f5a0d68859' }, locales.entries.Lcz_Assign, " ", h("strong", { key: 'a04cb93d7dd29bb37a33d00154f6fe2260bb9341' }, this.pendingChange?.task?.unit?.name), " ", 'to', " ", h("strong", { key: '177aa767a76d2d07490906dea45bc0c08769af84' }, pendingHkName), "?"), h("div", { key: '45921c78666fd2a46c7240334968623533bacf10', slot: "footer", class: "hk-dialog-footer" }, h("ir-custom-button", { key: 'dcb5c53d95b599c641c863d492cd4850ade7ccc1', size: "medium", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.pendingChange = null;
                this.selectRevertKey++;
                this.dialog.closeModal();
            } }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: 'fc9b566adf88e1d0e4619706d510ddc0a942d2ad', size: "medium", appearance: "accent", variant: "brand", loading: isRequestPending('/Override_HK_Task_Ownership'), onClickHandler: () => this.confirmOwnershipChange() }, locales.entries.Lcz_Confirm)))));
    }
    static get watchers() { return {
        "tasks": ["handleTasksChange"]
    }; }
};
IrTasksTable.style = IrTasksTableStyle0 + IrTasksTableStyle1;

const irTasksTablePaginationCss = ".sc-ir-tasks-table-pagination-h{display:block;margin-top:auto}.page-item.active.sc-ir-tasks-table-pagination .page-link.sc-ir-tasks-table-pagination{background-color:var(--blue)}.tasks-pagination.sc-ir-tasks-table-pagination{display:none !important}@media (min-width: 640px){.tasks-load-more.sc-ir-tasks-table-pagination{display:none}.tasks-pagination.sc-ir-tasks-table-pagination{display:flex !important}}";
const IrTasksTablePaginationStyle0 = irTasksTablePaginationCss;

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
        return (h(Host, { key: '909b64b13ac3de37cd96da09057d4213022cbcd4' }, shouldLoadMore() && h("ir-button", { key: 'bb80566d7c849ffd5cccc2ae186068a53de4a267', size: "sm", class: "tasks-load-more", text: "Load more", onClickHandler: () => loadMoreTasks(mobileCurrentPage + 1) }), h("ir-pagination", { key: '5b5a5cdba10908f4fc35aedf0f7e3b1029f6ab28', showing: {
                from: start,
                to: end,
            }, class: "tasks-pagination", total: totalTasks, pages: totalPages, pageSize: pageSize, currentPage: currentPage, pageSizes: pageSizes, onPageChange: e => updateCurrentPage(e.detail.currentPage), onPageSizeChange: e => updatePageSize(e.detail.pageSize), showTotalRecords: true, recordLabel: "tasks" })));
    }
};
IrTasksTablePagination.style = IrTasksTablePaginationStyle0;

export { IrHkArchive as ir_hk_archive, IrTasksCard as ir_tasks_card, IrTasksFilters as ir_tasks_filters, IrTasksHeader as ir_tasks_header, IrTasksTable as ir_tasks_table, IrTasksTablePagination as ir_tasks_table_pagination };

//# sourceMappingURL=ir-hk-archive_6.entry.js.map