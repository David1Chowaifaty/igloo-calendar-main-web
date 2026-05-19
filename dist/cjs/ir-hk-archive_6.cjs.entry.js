'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const housekeeping_service = require('./housekeeping.service-8d06557d.js');
const calendarData = require('./calendar-data-70bc3b4b.js');
const irInterceptor_store = require('./ir-interceptor.store-d60f5a34.js');
const locales_store = require('./locales.store-32782582.js');
const utils = require('./utils-cf15d06a.js');
const moment = require('./moment-1780b03a.js');
const v4 = require('./v4-9b297151.js');
const hkTasks_store = require('./hk-tasks.store-3e893ff1.js');
require('./index-8bb117a0.js');
require('./index-fbf1fe1d.js');
require('./axios-6e678d52.js');
require('./type-87fd01b8.js');

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
        return (index.h(index.Host, { key: '20f87642e58424a4a28843df150604cba3615cf0' }, index.h("ir-title", { key: 'e738aae90a67adf2761e91227a06842f9b68f8a2', class: "px-1", label: "Cleaning Archives (90 days)", displayContext: "sidebar" }), index.h("section", { key: '6d11021baa2875d88e86b890cbee8d29f5efbdb2', class: "px-1" }, index.h("div", { key: '66e278d17fb53e6cc5d36c913c42d4a3c0a2f82b', class: "d-flex" }, index.h("ir-select", { key: 'adcd8b76f60c3a27ad7cf0bfa182f41c8ee4e2b1', class: "w-100", showFirstOption: false, data: [
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
            } }), housekeeping_service.housekeeping_store?.hk_criteria?.housekeepers.length > 1 && (index.h("ir-select", { key: '8d72faacddc2cdcd8e306f2cd5295b6c1ebbcaf7', class: "ml-1 w-100", selectedValue: this.filters?.filtered_by_hkm?.length === housekeeping_service.housekeeping_store.hk_criteria.housekeepers.length ? '000' : this.filters?.filtered_by_hkm[0]?.toString(), showFirstOption: false, data: [
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
            } }))), index.h("div", { key: '765850ff54272baf2769c682c298da88a7d0a7cd', class: "d-flex mt-1 align-items-center" }, index.h("ir-range-picker", { key: '7367f9485f469972415ba8e9c60c081fb3152181', maxDate: moment.hooks().format('YYYY-MM-DD'), minDate: this.minSelectableDate, class: "mr-1", fromDate: this.filters.from_date ? moment.hooks(this.filters.from_date, 'YYYY-MM-DD') : null, toDate: this.filters.to_date ? moment.hooks(this.filters.to_date, 'YYYY-MM-DD') : null }), index.h("ir-button", { key: '6b25988fea1702725cee07e916cb4b42bc29086e', title: locales_store.locales.entries?.Lcz_Search, variant: "icon", icon_name: "search", class: "mr-1", isLoading: this.isLoading === 'search', onClickHandler: e => this.searchArchive(e) }), index.h("ir-button", { key: '340e636134b2f4e8b8dde393e16bbc097e62bed1', title: locales_store.locales.entries?.Lcz_ExportToExcel, variant: "icon", icon_name: "file", isLoading: this.isLoading === 'excel', onClickHandler: e => this.exportArchive(e) })), this.fetchedData && (index.h(index.Fragment, { key: '6267965438e72e286e8ba180495ba04764aa360d' }, this.data?.length === 0 && !irInterceptor_store.isRequestPending('/Get_Archived_HK_Tasks') ? (index.h("p", { class: 'text-center mt-2' }, locales_store.locales.entries.Lcz_NoResultsFound)) : (index.h("table", { class: "mt-2 table" }, index.h("thead", null, index.h("th", { class: "pl-0" }, locales_store.locales.entries.Lcz_Period), index.h("th", null, locales_store.locales.entries.Lcz_Housekeeper), index.h("th", null, locales_store.locales.entries.Lcz_Unit), index.h("th", null, locales_store.locales.entries.Lcz_BookingNumber)), index.h("tbody", null, this.data?.map(d => (index.h("tr", { key: d.id }, index.h("td", { class: "pl-0" }, d.date), index.h("td", null, d.house_keeper), index.h("td", null, index.h("ir-tooltip", { message: d.unit, customSlot: true, containerStyle: { width: 'fit-content' } }, index.h("span", { slot: "tooltip-trigger", class: `unit-name` }, d.unit))), index.h("td", null, d.booking_nbr ? (index.h("ir-button", { btn_color: "link", btnStyle: {
                width: 'fit-content',
                padding: '0',
                margin: '0',
            }, labelStyle: {
                padding: '0',
            }, text: d.booking_nbr.toString(), onClick: () => {
                this.selectedBooking = d.booking_nbr;
                // window.open(`https://x.igloorooms.com/manage/acbookingeditV2.aspx?BN=${d.booking_nbr}`, '_blank');
            } })) : (locales_store.locales.entries.Lcz_WasVacant))))))))))), index.h("ir-sidebar", { key: 'a162baef8578c3dc9166f35468f3e47a475db58d', onIrSidebarToggle: this.handleSideBarToggle.bind(this), open: !!this.selectedBooking, showCloseButton: false, sidebarStyles: {
                width: '80rem',
                background: '#F2F3F8',
            } }, this.selectedBooking && (index.h("ir-booking-details", { key: 'da38dbd14d95bcbcb9053c613d883b2868d2248f', slot: "sidebar-body", hasPrint: true, hasReceipt: true, hasCloseButton: true, onCloseSidebar: () => (this.selectedBooking = null), is_from_front_desk: true, propertyid: Number(this.propertyId), hasRoomEdit: true, hasRoomDelete: true, bookingNumber: this.selectedBooking?.toString(), language: this.language, hasRoomAdd: true, ticket: this.ticket })))));
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
        return (index.h("wa-card", { key: 'a289bbf826a71729cb7b5af715343d1ded02483b', class: "task-card" }, index.h("div", { key: '597a8fd9b306963e0b2971d700ab8ab3b0569f67', class: "task-card__body" }, index.h("div", { key: '14604f168cf861ab93a51bc4492c2dd210129214', class: "task-card__unit" }, index.h("span", { key: '15b1e4cba4414f34c03a55d4ac154cce92ece5ae', class: "task-card__unit-name" }, this.task.unit.name), index.h("div", { key: '514b8e7b65c44f1d37ed87d8fe51a800f217f85f', class: "task-card__meta" }, index.h("span", { key: '00395846d86a688d3fc9cf0bc9e641608d9352c3', class: "task-card__status" }, this.task.status.description), this.task.hint && index.h("span", { key: 'c40ffc44a88bc068df24121e0fed700ccf6acd8b', class: "task-card__sep" }, "\u00B7"), this.task.hint && index.h("span", { key: '46ef1a7f2e8f53041efbb7b6e86ab3523799b483', class: "task-card__hint" }, this.task.hint))), index.h("div", { key: '29fe86c3177b7ebc901e98a574f6e910a56da243', class: "task-card__badges" }, this.taskTypeBadge(this.task.task_type?.code), this.task.extra_task?.map(et => this.taskTypeBadge(et.task_type?.code))), this.guests.length > 0 && (index.h("div", { key: '3616f01ac07572c7e20a54874e380ae195b4d222', class: "task-card__guests" }, this.guests.map(g => (index.h("div", { class: "task-card__guest" }, index.h("wa-icon", { name: g.icon, class: "task-card__guest-icon", style: { fontSize: `${Math.min(0.75 + g.count * 0.15, 1.4)}rem` } }), index.h("span", { class: "task-card__guest-count" }, g.count)))))), index.h("div", { key: 'b1a9ecd29e56ad1e3cdc10b8223fedc4cd9f742e', class: "task-card__assign" }, index.h("wa-select", { key: '573506a0a948bb551f139100db56e0c3c7bb33bb', label: "Housekeeper", class: "task-card__hk-select", size: "small", placeholder: "Unassigned", value: this.task.hkm_id ? String(this.task.hkm_id) : '0', defaultValue: this.task.hkm_id ? String(this.task.hkm_id) : '0', onchange: e => {
                const hkm_id = Number(e.target.value);
                this.assignHousekeeper.emit({ task: this.task, hkm_id });
            } }, index.h("wa-option", { key: 'fb40dc5f54bc2a573278bf510417f7c3f72877d8', value: "0" }, locales_store.locales.entries.Lcz_Unassigned), housekeeping_service.housekeeping_store.hk_criteria?.housekeepers
            .slice()
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(hk => (index.h("wa-option", { key: hk.id, value: String(hk.id) }, hk.name))))), index.h("div", { key: '93cc7f78c4e5cbf61bebd534962aa381c751dde8', class: "task-card__actions" }, this.isSkippable && (index.h("ir-custom-button", { key: '917a1758fbce8136bb3ab2de27f72845e6fea8b8', variant: "neutral", appearance: "outlined", onClickHandler: () => this.skipSelectedTask.emit(this.task) }, "Skip")), this.isCheckable && (index.h("div", { key: '430d01ee26f89009a3879c4d0f1d352fee1997c6', class: "task-card__clean-group" }, index.h("ir-custom-button", { key: 'bf0afe3cdee1a2db9d4f115b37ac1b541ab10b23', variant: "brand", appearance: "filled", onClickHandler: () => {
                hkTasks_store.toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            } }, "Clean & Inspect"), index.h("ir-custom-button", { key: 'd7ab1d51d867609b2a828d89c236e358f59c924b', variant: "brand", appearance: "accent", onClickHandler: () => {
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
        return (index.h("wa-card", { key: '3d2af85277a5a45ef1e714cc9ed05d2778aae020', class: `filters__card ${this.collapsed ? '--collapsed' : ''}` }, index.h("div", { key: 'd17188d0a924aba15d0e13f41bff4c717cc4ad94', class: "filters__header", slot: "header" }, index.h("div", { key: '5a95a5b53c8482d70f4eb8991181422b33454744', class: "filters__title-group" }, index.h("wa-icon", { key: 'a8bc4e6526eff750b508b8b53e5acb2c059e0e17', name: "filter", style: { fontSize: '1rem' } }), index.h("h4", { key: 'b16002fa8f3415cb97efb044c76d607a735a298d', class: "filters__title" }, locales_store.locales.entries.Lcz_Filters)), index.h("ir-custom-button", { key: 'dd13dba01ce6f72db7df890969e44975cd3a0fe8', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, index.h("wa-icon", { key: '886efb142386c38b0e97e9e98e738ea989e2090d', style: { fontSize: '1rem' }, name: !this.collapsed ? 'eye-slash' : 'eye' }))), index.h("div", { key: '897d7708063009228f964f7144cc3af59fc5fa71', class: `filters__body${this.collapsed ? ' filters__body--collapsed' : ''}`, id: "hkTasksFiltersCollapse" }, index.h("fieldset", { key: '41a02a022b8e310a5ff239ffea574ef0dbd19530' }, index.h("wa-select", { key: '40848b99c06e1ff5de22636c9f25fd8ffcadbdba', label: locales_store.locales.entries.Lcz_Period, size: "small", "data-testid": "period", value: this.filters?.cleaning_periods?.code, defaultValue: this.filters?.cleaning_periods?.code, onchange: e => this.updateFilter({ cleaning_periods: { code: e.target.value } }) }, housekeeping_service.housekeeping_store?.hk_criteria?.cleaning_periods.map(v => (index.h("wa-option", { key: v.code, value: v.code }, v.description))))), housekeeping_service.housekeeping_store?.hk_criteria?.housekeepers.length > 1 && (index.h("fieldset", { key: 'a0c67cbcf6917ec8bd0a4f6202d917f2fad02955' }, index.h("wa-select", { key: '9263c805261e14e5e5a28c5e7b809848d017ba24', label: locales_store.locales.entries.Lcz_Housekeepers, size: "small", "data-testid": "housekeepers", value: this.filters?.housekeepers, defaultValue: this.filters?.housekeepers, onchange: e => this.updateFilter({ housekeepers: e.target.value }) }, index.h("wa-option", { key: '9ba1b0c2b873ce43614979bfc89333aeb1320771', value: "000" }, locales_store.locales.entries.Lcz_Allhousekeepers), housekeeping_service.housekeeping_store?.hk_criteria?.housekeepers
            .slice()
            .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
            .map(v => (index.h("wa-option", { key: v.id, value: v.id.toString() }, v.name)))))), index.h("fieldset", { key: '79984551840931d00ca1ddd15107d7a7c4a44d3e' }, index.h("wa-select", { key: '15453083b3dc2eba2f0aecc3c0a8090a3da86c09', label: "Include dusty units", size: "small", "data-testid": "dusty_units", value: this.filters?.dusty_units?.code, defaultValue: this.filters?.dusty_units?.code, onchange: e => this.updateFilter({ dusty_units: { code: e.target.value } }) }, housekeeping_service.housekeeping_store.hk_criteria?.dusty_periods?.map(v => (index.h("wa-option", { key: v.code, value: v.code }, v.description))))), index.h("fieldset", { key: 'cb99c07da17330d59287e08e86ee9d8b17200c76' }, index.h("wa-select", { key: '44a8757b2aca418c6c06d55a261dd5fd395478a3', label: locales_store.locales.entries['Lcz_HighlightCheck-insFrom'], size: "small", "data-testid": "highlight_check_ins", value: this.filters?.highlight_check_ins?.code, defaultValue: this.filters?.highlight_check_ins?.code, onchange: e => this.updateFilter({ highlight_check_ins: { code: e.target.value } }) }, housekeeping_service.housekeeping_store.hk_criteria?.highlight_checkin_options?.map(v => (index.h("wa-option", { key: v.code, value: v.code }, v.description))))), index.h("div", { key: 'fca5b9d673165dfabf201d4f8db0211ab1e07e9c', class: "filters__actions" }, index.h("ir-custom-button", { key: 'bbffb44e611f7077290b43068aee79abd19c3b20', variant: "neutral", appearance: "filled", "data-testid": "reset", onClickHandler: e => this.resetFilters(e) }, locales_store.locales.entries.Lcz_Reset), index.h("ir-custom-button", { key: '741236e681b7c5ed5b4f6706c940332cbf166418', variant: "brand", "data-testid": "apply", loading: this.isLoading, onClickHandler: e => this.applyFiltersEvt(e) }, locales_store.locales.entries.Lcz_Apply)))));
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
        return (index.h(index.Host, { key: '49118edfaff4915a4f7ad3da545735ede48e417c' }, index.h("div", { key: '596c2a256fda43d6404862ac87f8376784c011c6', class: "search-filter-container", style: { gap: '1rem' } }, index.h("ir-input", { key: '9fbac07135def05b674119ed358e8b0f4ddebd11', placeholder: "Search unit", class: "search-filter-input", value: hkTasks_store.hkTasksStore.searchField, "onText-change": e => hkTasks_store.updateSearchField(e.detail) }, index.h("wa-icon", { key: '3969dfbeeaf7c740fbfd820aa29c1850722ebc5e', name: "magnifying-glass", slot: "start" }))), index.h("div", { key: 'ec2960571722f4050c33b63cb4f2df4f390a2a87', class: "action-buttons", style: { gap: '1rem' } }, index.h("ir-custom-button", { key: 'a49b76a16861d04d995955c61c0f8828bd903376', appearance: "outlined", variant: "neutral", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'export' });
            } }, index.h("wa-icon", { key: '779c96896ff50b5b494001e2d555f281513b5c0c', slot: "end", name: "file-excel" }), locales_store.locales.entries.Lcz_Export), index.h("ir-custom-button", { key: '8e6840b467de56eaa46fc25598e44fde1f63f12e', appearance: "outlined", variant: "neutral", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'archive' });
            } }, locales_store.locales.entries.Lcz_Archives), index.h("wa-animation", { key: 'f28b9e8ac9c8d8957f4f254765d419ef3bf898bb', iterations: 1, id: "cleanInspectAnimation", class: "clean-button", name: "rubberBand", easing: "ease-in-out", duration: 800 }, index.h("ir-custom-button", { key: '34e08f76d310bc67c1ef701245304a71d5974004', appearance: "filled", variant: "brand", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'clean-inspect' });
            }, disabled: !(hkTasks_store.hkTasksStore.selectedTasks.length > 0) }, "Clean & Inspect")), index.h("wa-animation", { key: '86694eee7a4deb02e5ba97aa4b844ed7b7678454', iterations: 1, id: "cleanAnimation", class: "clean-button", name: "rubberBand", easing: "ease-in-out", duration: 800 }, index.h("ir-custom-button", { key: 'de34d80a4f2a26ad6347bd71a4f78bbca7c84d66', disabled: !(hkTasks_store.hkTasksStore.selectedTasks.length > 0), onClickHandler: e => {
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
        return (index.h(index.Host, { key: '54336560313828f1a89555e04c7e59bb7fbb4f8b' }, index.h("section", { key: '7a289aab434a6362324c3d983fd66f8fc656a5f9', class: "mobile-tasks-container" }, index.h("wa-card", { key: '1df30bed5d732fc82b364991363ec1b187c4b7cd' }, index.h("ir-tasks-header", { key: 'bb559b0de34f386b7d4c1d7d0aa2f69dd67c8d6f' })), mobileTasks?.length === 0 && index.h("p", { key: 'da4e801b5667cbd3cbd9c87c6ef2472f78c06d7b', class: "empty-msg" }, locales_store.locales.entries.Lcz_NoTasksFound), (() => {
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
        })(), index.h("ir-tasks-table-pagination", { key: '90075154ec64e4c144f3c4f5a8095fca4c179f97' })), index.h("wa-card", { key: '85f95f534a166ebfad04ba721910a84291105a26', class: "table-container" }, index.h("ir-tasks-header", { key: 'd75d38e51bebb119cc1775f98b3f8253d7806ab3' }), index.h("div", { key: '142e69923468c7d93ef47992d0a4c85212e8658f', class: "table--container" }, index.h("table", { key: '28d37461e2e2fb31f67ed548646c77729640df42', class: "table data-table", "data-testid": "hk_tasks_table" }, index.h("thead", { key: 'd4a094c21dea7346f70015aa63ab11ef2043ff5c', class: "table-header" }, index.h("tr", { key: '7b6f30d0fccbc8db464d63b297e1f1f665a41cd1' }, index.h("th", { key: 'a8de48a747d624faa25f041e2fe8cefd7afdc817', class: 'task-row' }, index.h("wa-checkbox", { key: '0ce1d39532969065b1b591764432bda00d14804a', indeterminate: hkTasks_store.hkTasksStore.selectedTasks.length > 0 && hkTasks_store.hkTasksStore.selectedTasks.length < hkTasks_store.getCheckableTasks().length, checked: this.allSelected, defaultChecked: this.allSelected, onchange: () => this.toggleSelectAll() })), index.h("th", { key: 'db89bc1b1dc70c7f8e163a5b04160b42be1551fd', class: "" }, locales_store.locales.entries.Lcz_Period), index.h("th", { key: 'de033076d5146502d8e046832f11c0b6d11e112b', class: "" }, this.tasks.length > 1 && this.tasks.length + ' ', locales_store.locales.entries.Lcz_Unit), index.h("th", { key: 'df1f044b00464d446d54d2542c9ebb57a9363425', class: "sortable", onClick: () => this.handleSort('status') }, index.h("div", { key: '1eb4c72ba216a875a04365b7c3457665d7bb1e41', class: "th-sort-inner" }, index.h("span", { key: 'ca5b48e2d0f3416cec1d952d6a8bcf530a487acc' }, locales_store.locales.entries.Lcz_Status), index.h("svg", { key: '47eb5e81753720fab5403928305712d3cc5ea2d9', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, index.h("path", { key: '97946a5738e44270752ac6b422176c5b8b8d30d9', d: "m21 16-4 4-4-4" }), index.h("path", { key: '084eb6dcfaebe908fa90e84129e7074d26aa06e3', d: "M17 20V4" }), index.h("path", { key: '7ecbc115f4e812c45248a35821a50647f0bfcdbc', d: "m3 8 4-4 4 4" }), index.h("path", { key: '9ec7d292aecb129995f33ba1b705b60c2e1712b6', d: "M7 4v16" })))), index.h("th", { key: '1e25351bea6ad9b7ca9633f23398614b3f42f07e', class: " text-left" }, locales_store.locales.entries.Lcz_Hint), index.h("th", { key: 'd523f1dc69f31d891744f3444769234e25f5328a', class: " text-left" }, "Tasks"), index.h("th", { key: '0d09bfa42e573cfce2783b904760be26f2f60e23', class: "text-left" }, locales_store.locales.entries.Lcz_A, "d"), index.h("th", { key: 'ed48b9a7bfd8e904376eefdc9fc8fc3b197031b6', class: "text-left" }, locales_store.locales.entries.Lcz_C, "h"), index.h("th", { key: 'b5423af617e2858be8f43a7856dca0dc75504bad', class: "text-left text-left" }, locales_store.locales.entries.Lcz_I, "n"), haveManyHousekeepers && (index.h("th", { key: '46d217bf8e4b8224f161e82124ef0fa143281196', class: "sortable", onClick: () => this.handleSort('housekeeper') }, index.h("div", { key: '15ba05bfe7de9a40702403b95ed139ead57db044', class: "th-sort-inner" }, index.h("span", { key: '399a0f337e2ce9c1ecb4212be097500f4476ef51' }, locales_store.locales.entries.Lcz_Housekeeper), index.h("svg", { key: '5299d30dbae06c89ed667ae6949fb4ccd231c92e', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, index.h("path", { key: '47e19491590ab98afb60bff6b4180a45c4b7a8b1', d: "m21 16-4 4-4-4" }), index.h("path", { key: '4ccf2d45bd34e4af85e91bf6973f6990666f0be9', d: "M17 20V4" }), index.h("path", { key: 'cd7bd105328c7078dbad2176d96d7401301c7de2', d: "m3 8 4-4 4 4" }), index.h("path", { key: '7ab85744ada9149797494bb4ffc37fc7bc78bcaf', d: "M7 4v16" }))))), index.h("th", { key: '6366c648743531fbbe3f126ca36c5768da6ab60c' }))), index.h("tbody", { key: 'cd6c6a59980062b7121305bf3c5872cf74fa21e2' }, tasks.length === 0 && (index.h("tr", { key: '758b00180cae104a303400c8fcfc2e7482dee35c', class: "ir-table-row" }, index.h("td", { key: '55a439875e1ac1c0e11cca072552bb0276363a77', colSpan: 9 }, index.h("div", { key: '712e172525aca341c921a56f34547d8826e42f00', class: "table-empty-state" }, index.h("span", { key: '2e1ed3437fe6c7bac873c372e5dcbf3642577c5b' }, locales_store.locales.entries.Lcz_NoTasksFound))))), tasks?.map(task => {
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
        })))), index.h("div", { key: 'fbc3ae1d6d0a1d3f05903dca6782d6a848446d73', class: "data-table--pagination " }, index.h("ir-tasks-table-pagination", { key: '0706aae6af0a65adf2d14ccba21f9e05f3ef040b' }))), index.h("ir-dialog", { key: '258c25f3a0a1ab29efa7a9eaffe95909889fa520', ref: el => (this.dialog = el), label: locales_store.locales.entries.Lcz_Confirmation, lightDismiss: false }, index.h("span", { key: '796e40bdde65fda90fbf6604594f391a1bba4581' }, locales_store.locales.entries.Lcz_Assign, " ", index.h("strong", { key: '989c81e65758f06a107f1a258e40726f9cbeeb1b' }, this.pendingChange?.task?.unit?.name), " ", 'to', " ", index.h("strong", { key: '3ea3de9078e25ca0f8c1e6264a450bef1bb5d098' }, pendingHkName), "?"), index.h("div", { key: '3d7eb3bf26ea50a8257a95f28b008c175f4c13c2', slot: "footer", class: "hk-dialog-footer" }, index.h("ir-custom-button", { key: '236437db906eb65192795c2c112b072859ad1e5b', size: "medium", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.pendingChange = null;
                this.selectRevertKey++;
                this.dialog.closeModal();
            } }, locales_store.locales.entries.Lcz_Cancel), index.h("ir-custom-button", { key: '42cde16616474471566d9866a9f4b64ab0c7978b', size: "medium", appearance: "accent", variant: "brand", loading: irInterceptor_store.isRequestPending('/Override_HK_Task_Ownership'), onClickHandler: () => this.confirmOwnershipChange() }, locales_store.locales.entries.Lcz_Confirm)))));
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
        return (index.h(index.Host, { key: '1017c82eb9496c295379fb38bcb1338151eb5848' }, hkTasks_store.shouldLoadMore() && index.h("ir-button", { key: 'd6618371daffdea33313be53c20b44d16f97e486', size: "sm", class: "tasks-load-more", text: "Load more", onClickHandler: () => hkTasks_store.loadMoreTasks(mobileCurrentPage + 1) }), index.h("ir-pagination", { key: '09f72823b6ac6112024d427c1f76f51492bed7ae', showing: {
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