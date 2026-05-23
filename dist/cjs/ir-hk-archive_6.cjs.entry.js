'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const housekeeping_service = require('./housekeeping.service-8d06557d.js');
const calendarData = require('./calendar-data-70bc3b4b.js');
const irInterceptor_store = require('./ir-interceptor.store-d60f5a34.js');
const locales_store = require('./locales.store-32782582.js');
const utils = require('./utils-8f5b1099.js');
const moment = require('./moment-1780b03a.js');
const v4 = require('./v4-9b297151.js');
const hkTasks_store = require('./hk-tasks.store-3e893ff1.js');
require('./index-8bb117a0.js');
require('./index-fbf1fe1d.js');
require('./axios-6e678d52.js');
require('./type-53035218.js');

const irHkArchiveCss = ".sc-ir-hk-archive-h{display:block}.unit-name.sc-ir-hk-archive{max-width:100px;display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 !important;margin:0 !important;text-align:start}.table.sc-ir-hk-archive th.sc-ir-hk-archive,.table.sc-ir-hk-archive td.sc-ir-hk-archive{white-space:nowrap;width:fit-content;max-width:max-content !important;border:0;text-align:start;background-color:white;padding:0.25rem !important}.table.sc-ir-hk-archive th.sc-ir-hk-archive:first-child,.table.sc-ir-hk-archive td.sc-ir-hk-archive:first-child{padding-left:0 !important}";
const IrHkArchiveStyle0 = irHkArchiveCss;

const IrHkArchive = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
    minSelectableDate = moment.hooks().subtract(90, 'days').toDate();
    houseKeepingService = new housekeeping_service.HouseKeepingService();
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
        calendarData.calendar_data.roomsInfo.forEach(r => {
            r.physicalrooms.forEach(room => {
                units.push({ id: room.id, name: room.name });
            });
        });
        this.units = units;
    }
    async getArchivedTasks(export_to_excel = false) {
        const res = await this.houseKeepingService.getArchivedHKTasks({ property_id: Number(this.propertyId), ...this.filters, is_export_to_excel: export_to_excel });
        this.data = [...(res?.tasks || [])]?.map(t => ({ ...t, id: v4.v4() }));
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
        return (index.h(index.Host, { key: '8dd06612400d3b69ce9e614b598bdea38fd6d6c2' }, index.h("ir-title", { key: '44114b52e26245a461f9c3f3dbf6851037055e13', class: "px-1", label: "Cleaning Archives (90 days)", displayContext: "sidebar" }), index.h("section", { key: 'e70b4c29819e43edfcf34fb42985660e27dbe1cc', class: "px-1" }, index.h("div", { key: '019c7f9ce6b25c2903dfcdd2359b70b188298cf2', class: "d-flex" }, index.h("ir-select", { key: '2cb8fe2e4dba34957158dd1319a01455caf4cd97', class: "w-100", showFirstOption: false, data: [
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
            } }), housekeeping_service.housekeeping_store?.hk_criteria?.housekeepers.length > 1 && (index.h("ir-select", { key: 'be1aa1f9d88364043eb6bd2cb99d5f99a18e1a2e', class: "ml-1 w-100", selectedValue: this.filters?.filtered_by_hkm?.length === housekeeping_service.housekeeping_store.hk_criteria.housekeepers.length ? '000' : this.filters?.filtered_by_hkm[0]?.toString(), showFirstOption: false, data: [
                { text: 'All housekeepers', value: '000' },
                ...housekeeping_service.housekeeping_store?.hk_criteria?.housekeepers
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
            } }))), index.h("div", { key: '0a07d9fd5721e9430fc9455e4f89f920ffa5a642', class: "d-flex mt-1 align-items-center" }, index.h("ir-range-picker", { key: '4157f5738197e0919b8bb7e145dc093809054c61', maxDate: moment.hooks().format('YYYY-MM-DD'), minDate: this.minSelectableDate, class: "mr-1", fromDate: this.filters.from_date ? moment.hooks(this.filters.from_date, 'YYYY-MM-DD') : null, toDate: this.filters.to_date ? moment.hooks(this.filters.to_date, 'YYYY-MM-DD') : null }), index.h("ir-button", { key: '2adb9e7028148fcf0720b3e1334284fc51e5ada1', title: locales_store.locales.entries?.Lcz_Search, variant: "icon", icon_name: "search", class: "mr-1", isLoading: this.isLoading === 'search', onClickHandler: e => this.searchArchive(e) }), index.h("ir-button", { key: '9e220dbe13c2028eb58a423effbbe306adf6d544', title: locales_store.locales.entries?.Lcz_ExportToExcel, variant: "icon", icon_name: "file", isLoading: this.isLoading === 'excel', onClickHandler: e => this.exportArchive(e) })), this.fetchedData && (index.h(index.Fragment, { key: '9a5bd18df2bf55b432c5f48cc53d36b89c59e2f5' }, this.data?.length === 0 && !irInterceptor_store.isRequestPending('/Get_Archived_HK_Tasks') ? (index.h("p", { class: 'text-center mt-2' }, locales_store.locales.entries.Lcz_NoResultsFound)) : (index.h("table", { class: "mt-2 table" }, index.h("thead", null, index.h("th", { class: "pl-0" }, locales_store.locales.entries.Lcz_Period), index.h("th", null, locales_store.locales.entries.Lcz_Housekeeper), index.h("th", null, locales_store.locales.entries.Lcz_Unit), index.h("th", null, locales_store.locales.entries.Lcz_BookingNumber)), index.h("tbody", null, this.data?.map(d => (index.h("tr", { key: d.id }, index.h("td", { class: "pl-0" }, d.date), index.h("td", null, d.house_keeper), index.h("td", null, index.h("ir-tooltip", { message: d.unit, customSlot: true, containerStyle: { width: 'fit-content' } }, index.h("span", { slot: "tooltip-trigger", class: `unit-name` }, d.unit))), index.h("td", null, d.booking_nbr ? (index.h("ir-button", { btn_color: "link", btnStyle: {
                width: 'fit-content',
                padding: '0',
                margin: '0',
            }, labelStyle: {
                padding: '0',
            }, text: d.booking_nbr.toString(), onClick: () => {
                this.selectedBooking = d.booking_nbr;
                // window.open(`https://x.igloorooms.com/manage/acbookingeditV2.aspx?BN=${d.booking_nbr}`, '_blank');
            } })) : (locales_store.locales.entries.Lcz_WasVacant))))))))))), index.h("ir-sidebar", { key: '7cfe2cefdbafeb9101c5fd6092645e147d5471df', onIrSidebarToggle: this.handleSideBarToggle.bind(this), open: !!this.selectedBooking, showCloseButton: false, sidebarStyles: {
                width: '80rem',
                background: '#F2F3F8',
            } }, this.selectedBooking && (index.h("ir-booking-details", { key: 'cd28a69b7ca7a18d5891f8d2999a1f5210417f21', slot: "sidebar-body", hasPrint: true, hasReceipt: true, hasCloseButton: true, onCloseSidebar: () => (this.selectedBooking = null), is_from_front_desk: true, propertyid: Number(this.propertyId), hasRoomEdit: true, hasRoomDelete: true, bookingNumber: this.selectedBooking?.toString(), language: this.language, hasRoomAdd: true, ticket: this.ticket })))));
    }
};
IrHkArchive.style = IrHkArchiveStyle0;

const irTasksCardCss = ".sc-ir-tasks-card-h{display:block}.task-card.sc-ir-tasks-card::part(body){padding:0.5rem 0.75rem}.task-card__body.sc-ir-tasks-card{display:flex;align-items:center;gap:0.875rem;min-height:2.75rem}.task-card__unit.sc-ir-tasks-card{display:flex;flex-direction:column;gap:0.1rem;min-width:0;flex:1}.task-card__unit-name.sc-ir-tasks-card{font-weight:700;font-size:var(--wa-font-size-m);color:var(--wa-color-text-normal);line-height:1.2;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0}.task-card__meta.sc-ir-tasks-card{display:flex;align-items:center;gap:0.25rem;flex-wrap:nowrap}.task-card__status.sc-ir-tasks-card{font-size:var(--wa-font-size-xs);font-weight:600;text-transform:uppercase;letter-spacing:0.04em;color:var(--wa-color-text-quiet);white-space:nowrap}.task-card__sep.sc-ir-tasks-card,.task-card__hint.sc-ir-tasks-card,.task-card__date.sc-ir-tasks-card{font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet);white-space:nowrap}.task-card__badges.sc-ir-tasks-card{display:flex;align-items:center;gap:0.25rem;flex-shrink:0}.task-card__guests.sc-ir-tasks-card{display:flex;gap:0.2rem;flex-shrink:0}.task-card__guest.sc-ir-tasks-card{display:flex;align-items:center;gap:0.25rem}.task-card__guest-icon.sc-ir-tasks-card{color:var(--wa-color-text-quiet);flex-shrink:0}.task-card__guest-count.sc-ir-tasks-card{font-size:var(--wa-font-size-m);font-weight:600;color:var(--wa-color-text-normal);line-height:1;min-width:1ch}.task-card__assign.sc-ir-tasks-card{display:flex;align-items:center;gap:0.375rem;flex:1;min-width:0;border-left:1px solid var(--wa-color-surface-border);padding-left:0.875rem}.task-card__assign-icon.sc-ir-tasks-card{flex-shrink:0;color:var(--wa-color-text-quiet);font-size:0.875rem}.task-card__hk-select.sc-ir-tasks-card{flex:1;min-width:0;max-width:11rem}.task-card__actions.sc-ir-tasks-card{display:flex;align-items:center;gap:0.5rem;flex-shrink:0}.task-card__clean-group.sc-ir-tasks-card{display:flex;align-items:center;gap:0.5rem}.task-card__clean-group.sc-ir-tasks-card ir-custom-button.sc-ir-tasks-card:first-child::part(base){border-radius:var(--wa-border-radius-m) 0 0 var(--wa-border-radius-m);border-right:none}.task-card__clean-group.sc-ir-tasks-card ir-custom-button.sc-ir-tasks-card:last-child::part(base){border-radius:0 var(--wa-border-radius-m) var(--wa-border-radius-m) 0}@media (max-width: 639px){.task-card__body.sc-ir-tasks-card{flex-wrap:wrap;min-height:unset;gap:0.625rem}.task-card__unit.sc-ir-tasks-card{flex:1;min-width:0;max-width:unset}.task-card__unit-name.sc-ir-tasks-card{max-width:100%}.task-card__assign.sc-ir-tasks-card{border-left:none;padding-left:0;padding-top:0.5rem;width:100%;flex:0 0 100%}.task-card__hk-select.sc-ir-tasks-card{max-width:100%}.task-card__actions.sc-ir-tasks-card{width:100%;justify-content:flex-end}}";
const IrTasksCardStyle0 = irTasksCardCss;

const IrTasksCard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.cleanSelectedTask = index.createEvent(this, "cleanSelectedTask", 7);
        this.skipSelectedTask = index.createEvent(this, "skipSelectedTask", 7);
        this.assignHousekeeper = index.createEvent(this, "assignHousekeeper", 7);
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
        return (index.h("wa-badge", { variant: variant, appearance: "filled" }, label));
    }
    get guests() {
        return [
            { count: this.task.adult, icon: 'person', label: 'Ad' },
            { count: this.task.child, icon: 'child', label: 'Ch' },
            { count: this.task.infant, icon: 'baby', label: 'In' },
        ].filter(g => g.count > 0);
    }
    render() {
        return (index.h("wa-card", { key: 'ce3667c460330b87cae3622bfd2edd3a35856e86', class: "task-card" }, index.h("div", { key: '788515a96d566145ba0ec385fac66a110c26462c', class: "task-card__body" }, index.h("div", { key: '2bef97a49da9506d4bd55cdb67127d20583b2051', class: "task-card__unit" }, index.h("span", { key: '5dfc1292aeba88d2737e0d4cd927b71771a3011e', class: "task-card__unit-name" }, this.task.unit.name), index.h("div", { key: '73f6069addd93365d70caca32a43af53f2e9a412', class: "task-card__meta" }, index.h("span", { key: 'ec8fef88a9db1ad17d3d8d979492d399ab3940c2', class: "task-card__status" }, this.task.status.description), this.task.hint && index.h("span", { key: 'e0e65653ca29a2699c3c2a7bf2fbff05de756537', class: "task-card__sep" }, "\u00B7"), this.task.hint && index.h("span", { key: '358bed0b1478a09d39d0d6a5d59d44c60e19e603', class: "task-card__hint" }, this.task.hint))), index.h("div", { key: '2079d003f4fdbd7d7a4ca1301396fa3faba5fe1b', class: "task-card__badges" }, this.taskTypeBadge(this.task.task_type?.code), this.task.extra_task?.map(et => this.taskTypeBadge(et.task_type?.code))), this.guests.length > 0 && (index.h("div", { key: '454dd93fa5c7a66dd3a49a1426589aef0b7d61d1', class: "task-card__guests" }, this.guests.map(g => (index.h("div", { class: "task-card__guest" }, index.h("wa-icon", { name: g.icon, class: "task-card__guest-icon", style: { fontSize: `${Math.min(0.75 + g.count * 0.15, 1.4)}rem` } }), index.h("span", { class: "task-card__guest-count" }, g.count)))))), index.h("div", { key: '97fb3e53110b9923c376c969e49792c0bf7b85f1', class: "task-card__assign" }, index.h("wa-select", { key: '1751881efd7370d2e8f9d373ba82f0dbebb013a1', label: "Housekeeper", class: "task-card__hk-select", size: "small", placeholder: "Unassigned", value: this.task.hkm_id ? String(this.task.hkm_id) : '0', defaultValue: this.task.hkm_id ? String(this.task.hkm_id) : '0', onchange: e => {
                const hkm_id = Number(e.target.value);
                this.assignHousekeeper.emit({ task: this.task, hkm_id });
            } }, index.h("wa-option", { key: 'e9fb3ae8db4eff2c6a81d072d2d3f0f51242e082', value: "0" }, locales_store.locales.entries.Lcz_Unassigned), housekeeping_service.housekeeping_store.hk_criteria?.housekeepers
            .slice()
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(hk => (index.h("wa-option", { key: hk.id, value: String(hk.id) }, hk.name))))), index.h("div", { key: 'e8a1e08f2086ce3d9c4e10571ab931c653688c9f', class: "task-card__actions" }, this.isSkippable && (index.h("ir-custom-button", { key: 'f764ff385ca21bab66b7b902009cb3b80c406c57', variant: "neutral", appearance: "outlined", onClickHandler: () => this.skipSelectedTask.emit(this.task) }, "Skip")), this.isCheckable && (index.h("div", { key: '74492ab8ab891750f2dcbff014e1f61419445a5f', class: "task-card__clean-group" }, index.h("ir-custom-button", { key: '6e7db202efb0920c502fa512498b5f1079789e19', variant: "brand", appearance: "filled", onClickHandler: () => {
                hkTasks_store.toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            } }, "Clean & Inspect"), index.h("ir-custom-button", { key: 'c7e60d9d07c02a8237ef0db0fdaa42b3b3196f3d', variant: "brand", appearance: "accent", onClickHandler: () => {
                hkTasks_store.toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            } }, "Clean")))))));
    }
};
IrTasksCard.style = IrTasksCardStyle0;

const irTasksFiltersCss = ".sc-ir-tasks-filters-h{display:block;min-width:20vw;height:100%;flex:1}.filters__header.sc-ir-tasks-filters{display:flex;align-items:center;justify-content:space-between}.filters__title-group.sc-ir-tasks-filters{display:flex;align-items:center;gap:0.5rem}.filters__card.--collapsed.sc-ir-tasks-filters::part(body){display:none}.filters__icon.sc-ir-tasks-filters{width:1.125rem;height:1.125rem;flex-shrink:0;color:var(--wa-color-text-quiet)}.filters__title.sc-ir-tasks-filters{margin:0;font-size:var(--wa-font-size-m);font-weight:var(--wa-font-weight-heading);color:var(--wa-color-text-normal)}.filters__body.sc-ir-tasks-filters{display:flex;flex-direction:column;gap:0.75rem}.filters__body--collapsed.sc-ir-tasks-filters{display:none}.filters__actions.sc-ir-tasks-filters{display:flex;align-items:center;justify-content:flex-end;gap:0.75rem;padding-top:0.25rem}@media (min-width: 1024px){.filters__collapse-btn.sc-ir-tasks-filters{display:none}.filters__card.--collapsed.sc-ir-tasks-filters::part(body){display:block}.filters__body--collapsed.sc-ir-tasks-filters{display:flex}}";
const IrTasksFiltersStyle0 = irTasksFiltersCss;

const IrTasksFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.applyFilters = index.createEvent(this, "applyFilters", 7);
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
            cleaning_periods: housekeeping_service.housekeeping_store?.hk_criteria?.cleaning_periods[0],
            housekeepers: [],
            cleaning_frequencies: calendarData.calendar_data.cleaning_frequency ?? housekeeping_service.housekeeping_store?.hk_criteria?.cleaning_frequencies[0],
            dusty_units: housekeeping_service.housekeeping_store?.hk_criteria?.dusty_periods[0],
            highlight_check_ins: housekeeping_service.housekeeping_store?.hk_criteria?.highlight_checkin_options[0],
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
        return (index.h("wa-card", { key: '37684b0eacdb68422e5f1831de5919e365840d8b', class: `filters__card ${this.collapsed ? '--collapsed' : ''}` }, index.h("div", { key: 'b3f703a049360410efe097f81f57c7207666201c', class: "filters__header", slot: "header" }, index.h("div", { key: 'ecb9bc40c7c9dfb1490d10ad4a2f4045853df987', class: "filters__title-group" }, index.h("wa-icon", { key: '368d59366f645aa25c80053abde0cef620971658', name: "filter", style: { fontSize: '1rem' } }), index.h("h4", { key: 'c6b7b6ef034fc4bc0651ac0c71701447a810324e', class: "filters__title" }, locales_store.locales.entries.Lcz_Filters)), index.h("ir-custom-button", { key: 'aed02a75eb9614dc8771460e4dc46e301021a31c', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, index.h("wa-icon", { key: '5b6a1d4a7a85d0f6786dbb1c341a375f417a44d7', style: { fontSize: '1rem' }, name: !this.collapsed ? 'eye-slash' : 'eye' }))), index.h("div", { key: '8aa75acbde04758a6dd1a709530baf47b31ea507', class: `filters__body${this.collapsed ? ' filters__body--collapsed' : ''}`, id: "hkTasksFiltersCollapse" }, index.h("fieldset", { key: '5fee923fd2a52f9cae33e94e1fada6f56d66873a' }, index.h("wa-select", { key: '57eef614c6c6f01748d06959f134ddf65a170e8c', label: locales_store.locales.entries.Lcz_Period, size: "small", "data-testid": "period", value: this.filters?.cleaning_periods?.code, defaultValue: this.filters?.cleaning_periods?.code, onchange: e => this.updateFilter({ cleaning_periods: { code: e.target.value } }) }, housekeeping_service.housekeeping_store?.hk_criteria?.cleaning_periods.map(v => (index.h("wa-option", { key: v.code, value: v.code }, v.description))))), housekeeping_service.housekeeping_store?.hk_criteria?.housekeepers.length > 1 && (index.h("fieldset", { key: 'e208fd70504202e5117fe1f9ede784f5a5d2a4f4' }, index.h("wa-select", { key: '14747cc0d18ae808595d7c8e1f1d3a7b79548acb', label: locales_store.locales.entries.Lcz_Housekeepers, size: "small", "data-testid": "housekeepers", value: this.filters?.housekeepers, defaultValue: this.filters?.housekeepers, onchange: e => this.updateFilter({ housekeepers: e.target.value }) }, index.h("wa-option", { key: '4d179a9a0fa2eebd947ca53320c3802974e7f8c2', value: "000" }, locales_store.locales.entries.Lcz_Allhousekeepers), housekeeping_service.housekeeping_store?.hk_criteria?.housekeepers
            .slice()
            .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
            .map(v => (index.h("wa-option", { key: v.id, value: v.id.toString() }, v.name)))))), index.h("fieldset", { key: 'd101c5be3d3ff0e19046bfc570cad58dea8b581a' }, index.h("wa-select", { key: '7f36a88780b08ece52cb047fb0587bd9538c596b', label: "Include dusty units", size: "small", "data-testid": "dusty_units", value: this.filters?.dusty_units?.code, defaultValue: this.filters?.dusty_units?.code, onchange: e => this.updateFilter({ dusty_units: { code: e.target.value } }) }, housekeeping_service.housekeeping_store.hk_criteria?.dusty_periods?.map(v => (index.h("wa-option", { key: v.code, value: v.code }, v.description))))), index.h("fieldset", { key: '7a1f7650b71b33ac868a51e189cd283ffa68f0da' }, index.h("wa-select", { key: '0c78af2ec6c6bf232c687435b7dbc37b45106762', label: locales_store.locales.entries['Lcz_HighlightCheck-insFrom'], size: "small", "data-testid": "highlight_check_ins", value: this.filters?.highlight_check_ins?.code, defaultValue: this.filters?.highlight_check_ins?.code, onchange: e => this.updateFilter({ highlight_check_ins: { code: e.target.value } }) }, housekeeping_service.housekeeping_store.hk_criteria?.highlight_checkin_options?.map(v => (index.h("wa-option", { key: v.code, value: v.code }, v.description))))), index.h("div", { key: 'b88468ad5f3dc7fb914eae15cd18e582c46c6900', class: "filters__actions" }, index.h("ir-custom-button", { key: 'e7fb8e80f2e6cf5a0b68bd78d0733d22f3e295a9', variant: "neutral", appearance: "filled", "data-testid": "reset", onClickHandler: e => this.resetFilters(e) }, locales_store.locales.entries.Lcz_Reset), index.h("ir-custom-button", { key: '9574674fedc93b163fe19751c956d13e435bcc9f', variant: "brand", "data-testid": "apply", loading: this.isLoading, onClickHandler: e => this.applyFiltersEvt(e) }, locales_store.locales.entries.Lcz_Apply)))));
    }
};
IrTasksFilters.style = IrTasksFiltersStyle0;

const irTasksHeaderCss = ".sc-ir-tasks-header-h{display:flex;gap:1rem;flex-wrap:wrap}.action-buttons.sc-ir-tasks-header{display:flex;align-items:center}.search-filter-container.sc-ir-tasks-header{flex:1 1 0%}.clean-button.sc-ir-tasks-header{display:none}@media (min-width: 640px){.sc-ir-tasks-header-h{flex-direction:row;justify-content:space-between;align-items:center;margin-bottom:1rem}.search-filter-container.sc-ir-tasks-header{display:flex}.action-buttons.sc-ir-tasks-header{justify-content:stretch}.clean-button.sc-ir-tasks-header{display:flex}}";
const IrTasksHeaderStyle0 = irTasksHeaderCss;

const IrTasksHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.headerButtonPress = index.createEvent(this, "headerButtonPress", 7);
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
        return (index.h(index.Host, { key: 'c1c6a1cd6b7e40a49fdf0ca0e06d6d44860027f8' }, index.h("div", { key: '5bf3f7e2762056e6b6be0e24ca53e3429e5d9960', class: "search-filter-container", style: { gap: '1rem' } }, index.h("ir-input", { key: '6bc7fcadf445e265cda47669be1a7fac6f1c6366', placeholder: "Search unit", class: "search-filter-input", value: hkTasks_store.hkTasksStore.searchField, "onText-change": e => hkTasks_store.updateSearchField(e.detail) }, index.h("wa-icon", { key: 'b2c6743599618a074aac09ee9d0b80fdf9451a7f', name: "magnifying-glass", slot: "start" }))), index.h("div", { key: '23b2946988511e566afafc95258e5ed1c3543bfb', class: "action-buttons", style: { gap: '1rem' } }, index.h("ir-custom-button", { key: 'b00af7c2dc4636a5089b2b0f8fc0ffa126778cc5', appearance: "outlined", variant: "neutral", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'export' });
            } }, index.h("wa-icon", { key: '012d3fa6c018b3e1dccd50e27a280141b936946c', slot: "end", name: "file-excel" }), locales_store.locales.entries.Lcz_Export), index.h("ir-custom-button", { key: '53688246decbc36514039016963146c3532181c3', appearance: "outlined", variant: "neutral", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'archive' });
            } }, locales_store.locales.entries.Lcz_Archives), index.h("wa-animation", { key: 'e18d0b63f89d81f1369539ae0ef296d002e79d40', iterations: 1, id: "cleanInspectAnimation", class: "clean-button", name: "rubberBand", easing: "ease-in-out", duration: 800 }, index.h("ir-custom-button", { key: 'da706fedbfc4b2e03292ca023731664746f0f6f1', appearance: "filled", variant: "brand", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'clean-inspect' });
            }, disabled: !(hkTasks_store.hkTasksStore.selectedTasks.length > 0) }, "Clean & Inspect")), index.h("wa-animation", { key: '3cb3248c8798650b983136e2d4c3335db766dccd', iterations: 1, id: "cleanAnimation", class: "clean-button", name: "rubberBand", easing: "ease-in-out", duration: 800 }, index.h("ir-custom-button", { key: '7002106ed7eed6cab2060c3767c6789f65334927', disabled: !(hkTasks_store.hkTasksStore.selectedTasks.length > 0), onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'cleaned' });
            }, variant: "brand" }, "Cleaned")))));
    }
};
IrTasksHeader.style = IrTasksHeaderStyle0;

const irTasksTableCss = ".sc-ir-tasks-table-h{display:block;min-width:0;width:100%}.hk-owner-select.sc-ir-tasks-table{min-width:130px}.hk-dialog-footer.sc-ir-tasks-table{display:flex;justify-content:flex-end;gap:0.5rem}.highlighted-unit.sc-ir-tasks-table{background:#000;color:white;padding:0.2rem 0.3rem;border-radius:4px}.task-table-row.sc-ir-tasks-table td.sc-ir-tasks-table{background:white !important}.task-table-row.sc-ir-tasks-table:hover td.sc-ir-tasks-table{background:#e2e6ea3f !important}.th-sort-inner.sc-ir-tasks-table{display:flex;align-items:center;gap:0.5rem}.table-empty-state.sc-ir-tasks-table{display:flex;align-items:center;justify-content:center;height:300px}.empty-msg.sc-ir-tasks-table{text-align:center;color:var(--wa-color-text-quiet)}.mobile-date-group.sc-ir-tasks-table{display:flex;flex-direction:column;gap:0.75rem}.mobile-date-label.sc-ir-tasks-table{margin:0;font-size:1rem;font-weight:700;color:var(--wa-color-text-normal);padding:0 0.25rem}.mobile-tasks-container.sc-ir-tasks-table{display:flex;flex-direction:column;gap:1.5rem}.table-container.sc-ir-tasks-table{display:none;min-width:0;width:100%}@media (min-width: 640px){.mobile-tasks-container.sc-ir-tasks-table{display:none}.table-container.sc-ir-tasks-table{display:block;min-width:0}.table--container.sc-ir-tasks-table{overflow-x:auto;overflow-y:visible;width:100%}}";
const IrTasksTableStyle0 = irTasksTableCss;

const tableCss = ".sc-ir-tasks-table-h{--ir-cell-padding:0.5rem 1rem}.ir-table-row.sc-ir-tasks-table td.sc-ir-tasks-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-tasks-table{overflow-x:auto}.table.sc-ir-tasks-table td.sc-ir-tasks-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.table.sc-ir-tasks-table tbody.sc-ir-tasks-table tr.sc-ir-tasks-table:last-child>td.sc-ir-tasks-table{border-bottom:0 !important}.table.sc-ir-tasks-table thead.sc-ir-tasks-table th.sc-ir-tasks-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-tasks-table thead.sc-ir-tasks-table th.sc-ir-tasks-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-tasks-table .empty-row.sc-ir-tasks-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-tasks-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-tasks-table td.sc-ir-tasks-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-brand-fill-normal) !important}.selected.sc-ir-tasks-table td.sc-ir-tasks-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-tasks-table,.ir-table-row.sc-ir-tasks-table{transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-tasks-table{text-transform:capitalize;cursor:pointer}.ir-table-row.sc-ir-tasks-table td.sc-ir-tasks-table{transition-duration:var(--wa-transition-fast)}.table.sc-ir-tasks-table thead.sc-ir-tasks-table th.sortable.sc-ir-tasks-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-tasks-table thead.sc-ir-tasks-table th.sortable.sc-ir-tasks-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-tasks-table thead.sc-ir-tasks-table th.sortable.sc-ir-tasks-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.ir-table-row.sc-ir-tasks-table:hover td.sc-ir-tasks-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-tasks-table:hover td.sc-ir-tasks-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-tasks-table:active td.sc-ir-tasks-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.ir-table-row.sc-ir-tasks-table:hover td.sc-ir-tasks-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-tasks-table:active td.sc-ir-tasks-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-tasks-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-tasks-table svg.sc-ir-tasks-table{color:var(--wa-color-brand-fill-loud)}.sticky-column.sc-ir-tasks-table{position:sticky !important;right:0;background-color:white}.table--container.sc-ir-tasks-table,.data-table.sc-ir-tasks-table{height:100%}";
const IrTasksTableStyle1 = tableCss;

const IrTasksTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.animateCleanedButton = index.createEvent(this, "animateCleanedButton", 7);
        this.rowSelectChange = index.createEvent(this, "rowSelectChange", 7);
        this.sortingChanged = index.createEvent(this, "sortingChanged", 7);
        this.skipSelectedTask = index.createEvent(this, "skipSelectedTask", 7);
        this.toast = index.createEvent(this, "toast", 7);
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
    houseKeepingService = new housekeeping_service.HouseKeepingService();
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
    taskBadges(task) {
        const config = [
            { code: 'CLN', variant: 'danger', label: 'CL' },
            { code: 'T1', variant: 'success', label: 'T1' },
            { code: 'T2', variant: 'brand', label: 'T2' },
        ];
        const presentCodes = new Set([task.task_type?.code, ...(task.extra_task?.map(et => et.task_type?.code) ?? [])]);
        return config.map(({ code, variant, label }) => (index.h("wa-badge", { key: code, variant: variant, appearance: "filled", style: { opacity: presentCodes.has(code) ? '1' : '0' } }, label)));
    }
    getHousekeeperName(hkmId) {
        if (!hkmId) {
            return locales_store.locales.entries.Lcz_Unassigned;
        }
        return housekeeping_service.housekeeping_store?.hk_criteria?.housekeepers?.find(h => h.id === hkmId)?.name ?? locales_store.locales.entries.Lcz_Unassigned;
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
        const haveManyHousekeepers = housekeeping_service.housekeeping_store?.hk_criteria?.housekeepers?.length > 1;
        const tasks = hkTasks_store.getPaginatedTasks();
        const mobileTasks = hkTasks_store.getMobileTasks();
        const housekeepers = housekeeping_service.housekeeping_store?.hk_criteria?.housekeepers ?? [];
        const pendingHkName = this.pendingChange ? this.getHousekeeperName(this.pendingChange.hkmId) : '';
        return (index.h(index.Host, { key: 'aa03b5dc2d4be13027c4999ce983122b26b314b1' }, index.h("section", { key: 'ffd21d19574bdc04fcfac8d3d21129a94b1f4ac6', class: "mobile-tasks-container" }, index.h("wa-card", { key: 'd04b1ffbc6886d6a6221f27c8e2ada502a638426' }, index.h("ir-tasks-header", { key: 'db79bc447b07359181f8e2d80d19dc123321c99e' })), mobileTasks?.length === 0 && index.h("p", { key: '82522e295026e1b95327fe728a8a95e65587eb48', class: "empty-msg" }, locales_store.locales.entries.Lcz_NoTasksFound), (() => {
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
            return groups.map(group => (index.h("div", { key: group.date, class: "mobile-date-group" }, index.h("p", { class: "mobile-date-label" }, group.formattedDate), group.tasks.map(task => {
                const isCheckable = this.isCheckable(task);
                const isSkippable = this.isSkippable(task);
                return index.h("ir-tasks-card", { task: task, isSkippable: isSkippable, key: task.id, isCheckable: isCheckable });
            }))));
        })(), index.h("ir-tasks-table-pagination", { key: '8a8914339433d028a1b4ed12a55a59bb5e68e5e4' })), index.h("wa-card", { key: 'f0dac56f90b492839edbba3e330e338f3e3a6c5e', class: "table-container" }, index.h("ir-tasks-header", { key: '166601140d2d9df03559aad69de2d018db544b5a' }), index.h("div", { key: '599224a44e22f6e27071eb7e195b6a644ad728ff', class: "table--container" }, index.h("table", { key: 'ca0d05dd36ca9774f46bc8e17efda697608f1c54', class: "table data-table", "data-testid": "hk_tasks_table" }, index.h("thead", { key: 'ae6c5f3b6b7d233a0d8aaf5cedd15019817fbc74', class: "table-header" }, index.h("tr", { key: '4476df316b96e2bd823526badc92f9d56d4cc95b' }, index.h("th", { key: '63b0e982a5359292033aaa28425da4f7d0054100', class: 'task-row' }, index.h("wa-checkbox", { key: 'd2d13cda5754d8a27f9af82888f05fbe332fdcf5', indeterminate: hkTasks_store.hkTasksStore.selectedTasks.length > 0 && hkTasks_store.hkTasksStore.selectedTasks.length < hkTasks_store.getCheckableTasks().length, checked: this.allSelected, defaultChecked: this.allSelected, onchange: () => this.toggleSelectAll() })), index.h("th", { key: '93849d431b439431b6a4977c70b9c85f38e0f323', class: "" }, locales_store.locales.entries.Lcz_Period), index.h("th", { key: 'b2a7b7dc71030780af095abff28bb2a6622033e8', class: "" }, this.tasks.length > 1 && this.tasks.length + ' ', locales_store.locales.entries.Lcz_Unit), index.h("th", { key: 'bd4de5528e4719a696084182d04cce4dab598505', class: "sortable", onClick: () => this.handleSort('status') }, index.h("div", { key: 'e42e7cf8e20ef2953c32646d4d12db63ab62341e', class: "th-sort-inner" }, index.h("span", { key: 'd10d099cd3f53ea2a369ae42218da0fc72e38264' }, locales_store.locales.entries.Lcz_Status), index.h("svg", { key: 'f58b1c33a6b497a5e8561de5b496af6a3dbf1cf4', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, index.h("path", { key: '98776c7a187adbc632182bb6274a8b634999acf9', d: "m21 16-4 4-4-4" }), index.h("path", { key: 'f65a32aaca44d7d496f005286f44ba4360b7c6b1', d: "M17 20V4" }), index.h("path", { key: '34c23fc50189942f44b7187c7ba1821263034ec0', d: "m3 8 4-4 4 4" }), index.h("path", { key: '482ecad4a4ffb7c8cdef9915280cdf71b4defa12', d: "M7 4v16" })))), index.h("th", { key: '8ac77383d47a0bc20806d890672d8e57c2c6ccf4', class: " text-left" }, locales_store.locales.entries.Lcz_Hint), index.h("th", { key: 'fd6dee2e835f04c5de69a4d4ee7a88ac2e41c285', class: " text-left" }, "Tasks"), index.h("th", { key: '19240415505a7e7237c4b462458b4133883b3c90', class: "text-left" }, locales_store.locales.entries.Lcz_A, "d"), index.h("th", { key: 'a4dd71c91a9868b44f1c1e11414bdfc00b23fefd', class: "text-left" }, locales_store.locales.entries.Lcz_C, "h"), index.h("th", { key: 'e41014adaffb7b21e5301d3d705656c7e1782357', class: "text-left text-left" }, locales_store.locales.entries.Lcz_I, "n"), haveManyHousekeepers && (index.h("th", { key: 'f8b8a1fa6def263d1c8d0301cc03bc28572727d6', class: "sortable", onClick: () => this.handleSort('housekeeper') }, index.h("div", { key: '1d45d5da3cec41c0d38fb5edbd22dcae1a249532', class: "th-sort-inner" }, index.h("span", { key: '18d30e1b79e9785a21252a7833c5b0571201be0d' }, locales_store.locales.entries.Lcz_Housekeeper), index.h("svg", { key: '97c3525db924fd05530bfec7e18ec98a95ffd62c', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, index.h("path", { key: '806322e6c1972202f22f7878f7fb0ddf1906ee96', d: "m21 16-4 4-4-4" }), index.h("path", { key: 'fbaead666a163a3653cd9260b19e0deec3632587', d: "M17 20V4" }), index.h("path", { key: 'd76aa9dffd427e3a724e30efa9bd8d627ded579b', d: "m3 8 4-4 4 4" }), index.h("path", { key: '4481d2bbc019adc1a431e5f7b49536a3bbb39f52', d: "M7 4v16" }))))), index.h("th", { key: 'd22ae9883116cd02479c61d35ed257b2811c8799' }))), index.h("tbody", { key: 'ea724cfb9e94f9d9947cd274f10f5a3b38031242' }, tasks.length === 0 && (index.h("tr", { key: '1fbe7536f04306a7111197597238a1218f2243cc', class: "ir-table-row" }, index.h("td", { key: 'bfc184632eb04239949701cd408a88f3188b0175', colSpan: 9 }, index.h("div", { key: 'fbc20b489af232512935a17a98b3edfef98883cb', class: "table-empty-state" }, index.h("span", { key: '01ae7cfd975d2cfe08e10d21d2a99f36dae2cfde' }, locales_store.locales.entries.Lcz_NoTasksFound))))), tasks?.map(task => {
            const isSelected = hkTasks_store.hkTasksStore.selectedTasks.some(t => t.id === task.id);
            const isCheckable = this.isCheckable(task);
            return (index.h("tr", { "data-date": task.date, "data-testid": `hk_task_row`, "data-assigned": task.housekeeper ? 'true' : 'false', style: isCheckable && { cursor: 'pointer' }, onClick: () => {
                    if (!isCheckable) {
                        return;
                    }
                    this.toggleSelection(task);
                }, class: { 'selected': isSelected, '--clickable': isCheckable, 'task-table-row ir-table-row ': true }, key: task.id }, index.h("td", { class: "task-row " }, isCheckable && (index.h("wa-checkbox", { checked: isSelected, defaultChecked: isSelected, onchange: () => {
                    if (!isCheckable) {
                        return;
                    }
                    this.toggleSelection(task);
                } }))), index.h("td", { class: "task-row " }, task.formatted_date), index.h("td", { class: "task-row " }, index.h("span", { class: { 'highlighted-unit': task.is_highlight } }, task.unit.name)), index.h("td", { class: "task-row  text-left" }, task.status.description), index.h("td", { class: "task-row  text-left" }, task.hint), index.h("td", { class: "task-row  text-left" }, index.h("div", { class: "th-sort-inner" }, this.taskBadges(task))), index.h("td", { class: "task-row text-left" }, task.adult), index.h("td", { class: "task-row text-left" }, task.child), index.h("td", { class: "task-row text-left" }, task.infant), haveManyHousekeepers && (index.h("td", { class: "task-row ", style: { textAlign: 'start' }, onClick: (e) => e.stopPropagation() }, index.h("wa-select", { key: `${task.id}-${this.selectRevertKey}`, class: "hk-owner-select", size: "small", value: String(task.hkm_id ?? 0), defaultValue: String(task.hkm_id ?? 0), onchange: (e) => {
                    e.stopPropagation();
                    const hkmId = Number(e.target.value);
                    this.pendingChange = { task, hkmId };
                    this.dialog.openModal();
                } }, index.h("wa-option", { value: "0" }, locales_store.locales.entries.Lcz_Unassigned), housekeepers
                .filter(housekeeper => housekeeper.is_active)
                .map(housekeeper => (index.h("wa-option", { key: housekeeper.id, value: String(housekeeper.id) }, housekeeper.name)))))), index.h("td", null, this.isSkippable(task) && (index.h("ir-custom-button", { onClick: e => {
                    e.stopPropagation();
                }, variant: "brand", appearance: "outlined", onClickHandler: () => {
                    this.skipSelectedTask.emit(task);
                } }, "Skip")))));
        })))), index.h("div", { key: '453894c3b5d5da6df02dd11a29c8f4075c3cf814', class: "data-table--pagination " }, index.h("ir-tasks-table-pagination", { key: 'ff8b08b7c6d454e70dd3f5f3b25201977c16fe60' }))), index.h("ir-dialog", { key: '7e127a2b6a9fdc38c246f226d7ea87b40c80aeb3', ref: el => (this.dialog = el), label: locales_store.locales.entries.Lcz_Confirmation, lightDismiss: false }, index.h("span", { key: 'f63d86605471fc10c0f73fc8faa3256dea025e25' }, locales_store.locales.entries.Lcz_Assign, " ", index.h("strong", { key: '71fe23594de119eeb3a5cf2eeebfa38136facfae' }, this.pendingChange?.task?.unit?.name), " ", 'to', " ", index.h("strong", { key: 'e4644b490e78b0ba078e21412db4563dcb8ded1b' }, pendingHkName), "?"), index.h("div", { key: 'e209e148a7ea4b7d7871831040470ff28f0e80e9', slot: "footer", class: "hk-dialog-footer" }, index.h("ir-custom-button", { key: '68e2bbe698147f2926a4ca4421d1c41f4ee05dd2', size: "medium", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.pendingChange = null;
                this.selectRevertKey++;
                this.dialog.closeModal();
            } }, locales_store.locales.entries.Lcz_Cancel), index.h("ir-custom-button", { key: '72abb4999f026615abe13d0a9d82ee18dabfec59', size: "medium", appearance: "accent", variant: "brand", loading: irInterceptor_store.isRequestPending('/Override_HK_Task_Ownership'), onClickHandler: () => this.confirmOwnershipChange() }, locales_store.locales.entries.Lcz_Confirm)))));
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
        index.registerInstance(this, hostRef);
    }
    render() {
        const { currentPage, pageSize, totalPages, mobileCurrentPage } = hkTasks_store.hkTasksStore.pagination;
        const totalTasks = hkTasks_store.hkTasksStore.tasks?.length ?? 0;
        const start = totalTasks === 0 ? 0 : (currentPage - 1) * pageSize + 1;
        const end = Math.min(currentPage * pageSize, totalTasks);
        const pageSizes = hkTasks_store.hkTasksStore.pagination.tasksList[0] > totalTasks ? hkTasks_store.hkTasksStore.pagination.tasksList.slice(0, 1) : hkTasks_store.hkTasksStore.pagination.tasksList;
        return (index.h(index.Host, { key: '3d9dd7c4ee356d621a8fe4ac96edc0f96cf5db67' }, hkTasks_store.shouldLoadMore() && index.h("ir-button", { key: '07bd5e47a3a41e6c72be2f0717fc7721dbe28f78', size: "sm", class: "tasks-load-more", text: "Load more", onClickHandler: () => hkTasks_store.loadMoreTasks(mobileCurrentPage + 1) }), index.h("ir-pagination", { key: 'b85cdbd7d4a752702d7fc19e37ccbb3b1b551dc7', showing: {
                from: start,
                to: end,
            }, class: "tasks-pagination", total: totalTasks, pages: totalPages, pageSize: pageSize, currentPage: currentPage, pageSizes: pageSizes, onPageChange: e => hkTasks_store.updateCurrentPage(e.detail.currentPage), onPageSizeChange: e => hkTasks_store.updatePageSize(e.detail.pageSize), showTotalRecords: true, recordLabel: "tasks" })));
    }
};
IrTasksTablePagination.style = IrTasksTablePaginationStyle0;

exports.ir_hk_archive = IrHkArchive;
exports.ir_tasks_card = IrTasksCard;
exports.ir_tasks_filters = IrTasksFilters;
exports.ir_tasks_header = IrTasksHeader;
exports.ir_tasks_table = IrTasksTable;
exports.ir_tasks_table_pagination = IrTasksTablePagination;

//# sourceMappingURL=ir-hk-archive_6.cjs.entry.js.map