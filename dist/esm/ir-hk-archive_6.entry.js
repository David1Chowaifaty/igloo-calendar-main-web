import { r as registerInstance, h, F as Fragment, H as Host, c as createEvent, g as getElement } from './index-7e96440e.js';
import { H as HouseKeepingService, h as housekeeping_store } from './housekeeping.service-0e645d86.js';
import { c as calendar_data } from './calendar-data-b1f645da.js';
import { a as isRequestPending } from './ir-interceptor.store-b1961d27.js';
import { l as locales } from './locales.store-cb784e95.js';
import { b as downloadFile } from './utils-da0c0412.js';
import { h as hooks } from './moment-ab846cee.js';
import { v as v4 } from './v4-964634d6.js';
import { t as toggleTaskSelection, h as hkTasksStore, b as updateSearchField, d as updateSorting, c as clearSelectedTasks, i as isAllTasksSelected, e as selectAllTasks, g as getCheckableTasks, u as updateTasks, f as getPaginatedTasks, j as getMobileTasks, k as updateCurrentPage, l as updatePageSize, m as shouldLoadMore, n as loadMoreTasks } from './hk-tasks.store-7c962578.js';
import './index-87419685.js';
import './index-f100e9d2.js';
import './axios-aa1335b8.js';
import './type-501de9b6.js';

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
        return (h(Host, { key: '3b46769c19e300461007be8ad845eeb78555879e' }, h("ir-title", { key: 'e3c0e015ed0423804753d705b04bba87413f9bf7', class: "px-1", label: "Cleaning Archives (90 days)", displayContext: "sidebar" }), h("section", { key: 'fd1c3fdcf6aab4e04c142340e4e6caf214b63922', class: "px-1" }, h("div", { key: '0a7a9715a3f810bb0fc695115916e382b97dfee4', class: "d-flex" }, h("ir-select", { key: '30883e96de5f07875180fcfe9573d147145173fd', class: "w-100", showFirstOption: false, data: [
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
            } }), housekeeping_store?.hk_criteria?.housekeepers.length > 1 && (h("ir-select", { key: '3f0669fe4269434c4e2219821abe70148f69a1e9', class: "ml-1 w-100", selectedValue: this.filters?.filtered_by_hkm?.length === housekeeping_store.hk_criteria.housekeepers.length ? '000' : this.filters?.filtered_by_hkm[0]?.toString(), showFirstOption: false, data: [
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
            } }))), h("div", { key: '5b7d77028d73deb6045f2179cfc93b76eaf95ace', class: "d-flex mt-1 align-items-center" }, h("ir-range-picker", { key: '9444ca7e04793f45a4a853b57f30308b9dfdf840', maxDate: hooks().format('YYYY-MM-DD'), minDate: this.minSelectableDate, class: "mr-1", fromDate: this.filters.from_date ? hooks(this.filters.from_date, 'YYYY-MM-DD') : null, toDate: this.filters.to_date ? hooks(this.filters.to_date, 'YYYY-MM-DD') : null }), h("ir-button", { key: '6da1a5295a298f69f9049af07c35a83698d64224', title: locales.entries?.Lcz_Search, variant: "icon", icon_name: "search", class: "mr-1", isLoading: this.isLoading === 'search', onClickHandler: e => this.searchArchive(e) }), h("ir-button", { key: '1afa646956aac899c8984e59901c373542f670cf', title: locales.entries?.Lcz_ExportToExcel, variant: "icon", icon_name: "file", isLoading: this.isLoading === 'excel', onClickHandler: e => this.exportArchive(e) })), this.fetchedData && (h(Fragment, { key: '12c6c7ca603d1c266a489093d1e52c4fc21a19e1' }, this.data?.length === 0 && !isRequestPending('/Get_Archived_HK_Tasks') ? (h("p", { class: 'text-center mt-2' }, locales.entries.Lcz_NoResultsFound)) : (h("table", { class: "mt-2 table" }, h("thead", null, h("th", { class: "pl-0" }, locales.entries.Lcz_Period), h("th", null, locales.entries.Lcz_Housekeeper), h("th", null, locales.entries.Lcz_Unit), h("th", null, locales.entries.Lcz_BookingNumber)), h("tbody", null, this.data?.map(d => (h("tr", { key: d.id }, h("td", { class: "pl-0" }, d.date), h("td", null, d.house_keeper), h("td", null, h("ir-tooltip", { message: d.unit, customSlot: true, containerStyle: { width: 'fit-content' } }, h("span", { slot: "tooltip-trigger", class: `unit-name` }, d.unit))), h("td", null, d.booking_nbr ? (h("ir-button", { btn_color: "link", btnStyle: {
                width: 'fit-content',
                padding: '0',
                margin: '0',
            }, labelStyle: {
                padding: '0',
            }, text: d.booking_nbr.toString(), onClick: () => {
                this.selectedBooking = d.booking_nbr;
                // window.open(`https://x.igloorooms.com/manage/acbookingeditV2.aspx?BN=${d.booking_nbr}`, '_blank');
            } })) : (locales.entries.Lcz_WasVacant))))))))))), h("ir-sidebar", { key: '425c0acd54a5fe30b289df20283906f80b58f4e2', onIrSidebarToggle: this.handleSideBarToggle.bind(this), open: !!this.selectedBooking, showCloseButton: false, sidebarStyles: {
                width: '80rem',
                background: '#F2F3F8',
            } }, this.selectedBooking && (h("ir-booking-details", { key: '69252bf6f999155dd007a41e64677346e42985cb', slot: "sidebar-body", hasPrint: true, hasReceipt: true, hasCloseButton: true, onCloseSidebar: () => (this.selectedBooking = null), is_from_front_desk: true, propertyid: Number(this.propertyId), hasRoomEdit: true, hasRoomDelete: true, bookingNumber: this.selectedBooking?.toString(), language: this.language, hasRoomAdd: true, ticket: this.ticket })))));
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
        return (h("wa-card", { key: '83629b9281f98b36196ecf2017b50923e3015b6c', class: "task-card" }, h("div", { key: '35230a31891b4463c4e17949b29146dc40184580', class: "task-card__body" }, h("div", { key: '0b7cb43e5b5c7b79a036e0d44b4836d6e6656b27', class: "task-card__unit" }, h("span", { key: '00652a79990f6a6ec8197661f3c2a03701bec260', class: "task-card__unit-name" }, this.task.unit.name), h("div", { key: '94324dc188db422dd6213c3bf0a242d42c5b4d64', class: "task-card__meta" }, h("span", { key: 'ec0602d0a29cf64b835efe2f97d52a0f19547413', class: "task-card__status" }, this.task.status.description), this.task.hint && h("span", { key: '88f698d7e30fd304850b6c588189e9d2a0436655', class: "task-card__sep" }, "\u00B7"), this.task.hint && h("span", { key: '1317326331fa8e143a01aad5c09d949cbad782a6', class: "task-card__hint" }, this.task.hint))), h("div", { key: 'cd73ffe9c44c9330106f36ade6b4b32074046954', class: "task-card__badges" }, this.taskTypeBadge(this.task.task_type?.code), this.task.extra_task?.map(et => this.taskTypeBadge(et.task_type?.code))), this.guests.length > 0 && (h("div", { key: '390233b771563d00ef93a78d7d62d14e10738e8c', class: "task-card__guests" }, this.guests.map(g => (h("div", { class: "task-card__guest" }, h("wa-icon", { name: g.icon, class: "task-card__guest-icon", style: { fontSize: `${Math.min(0.75 + g.count * 0.15, 1.4)}rem` } }), h("span", { class: "task-card__guest-count" }, g.count)))))), h("div", { key: 'de0f3503a59fadf28b173aa40bb6d4f1b317bb09', class: "task-card__assign" }, h("wa-select", { key: 'dbc5e0c74988c083c1cc7036b7f67d34eaed75a1', label: "Housekeeper", class: "task-card__hk-select", size: "small", placeholder: "Unassigned", value: this.task.hkm_id ? String(this.task.hkm_id) : '0', defaultValue: this.task.hkm_id ? String(this.task.hkm_id) : '0', onchange: e => {
                const hkm_id = Number(e.target.value);
                this.assignHousekeeper.emit({ task: this.task, hkm_id });
            } }, h("wa-option", { key: 'c88b56320404870e21f867321153663aad2bd665', value: "0" }, locales.entries.Lcz_Unassigned), housekeeping_store.hk_criteria?.housekeepers
            .slice()
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(hk => (h("wa-option", { key: hk.id, value: String(hk.id) }, hk.name))))), h("div", { key: '5d8a598be4bc6159a9dc3d0bc62fd61768a42759', class: "task-card__actions" }, this.isSkippable && (h("ir-custom-button", { key: 'be4ab50812a8beca4bb6b3df58194b0d52b7b086', variant: "neutral", appearance: "outlined", onClickHandler: () => this.skipSelectedTask.emit(this.task) }, "Skip")), this.isCheckable && (h("div", { key: 'a76dbffca0bf30168767987561860fa28da197aa', class: "task-card__clean-group" }, h("ir-custom-button", { key: '5d32d620c4c8a805d9d133c81dc8c99d666dfa2d', variant: "brand", appearance: "filled", onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '004' });
            } }, "Clean & Inspect"), h("ir-custom-button", { key: '50c14eec7ba27083d3c5b1abbc9d22d9e92cf921', variant: "brand", appearance: "accent", onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit({ task: this.task, status: '001' });
            } }, "Clean")))))));
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
        return (h("wa-card", { key: '285847f1ab690e6014a8935fbcab5b535494d6c6', class: `filters__card ${this.collapsed ? '--collapsed' : ''}` }, h("div", { key: '35350ce49325a75c26fb83370630cfeeb2962e11', class: "filters__header", slot: "header" }, h("div", { key: '77def97636bc561bc2706b71a838e3268d095101', class: "filters__title-group" }, h("wa-icon", { key: '5c9ef5b4476b9fd1a34dbae5552a2a0108cc027d', name: "filter", style: { fontSize: '1rem' } }), h("h4", { key: '13fe14e1232ed8295d960924f3aebb3501069648', class: "filters__title" }, locales.entries.Lcz_Filters)), h("ir-custom-button", { key: '6cf99008683026af9d481cba9363fadd695a56c3', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, h("wa-icon", { key: 'ffb770893ef5cd32880700e164ede8ec58e81487', style: { fontSize: '1rem' }, name: !this.collapsed ? 'eye-slash' : 'eye' }))), h("div", { key: '96cb11055bc02cce36d708ca673ecd16bbfd1b22', class: `filters__body${this.collapsed ? ' filters__body--collapsed' : ''}`, id: "hkTasksFiltersCollapse" }, h("fieldset", { key: 'c4e8d2b541a0cefc746b320a3affb624154afd4d' }, h("wa-select", { key: '4ff49628d9aba79fa98baf975e4abe391e9c788a', label: locales.entries.Lcz_Period, size: "small", "data-testid": "period", value: this.filters?.cleaning_periods?.code, defaultValue: this.filters?.cleaning_periods?.code, onchange: e => this.updateFilter({ cleaning_periods: { code: e.target.value } }) }, housekeeping_store?.hk_criteria?.cleaning_periods.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description))))), housekeeping_store?.hk_criteria?.housekeepers.length > 1 && (h("fieldset", { key: '221e31f5d714b14a2dd46c097daef51c395016fd' }, h("wa-select", { key: 'd6f73ae92031a7635d6ebe11a9d90c417841334a', label: locales.entries.Lcz_Housekeepers, size: "small", "data-testid": "housekeepers", value: this.filters?.housekeepers, defaultValue: this.filters?.housekeepers, onchange: e => this.updateFilter({ housekeepers: e.target.value }) }, h("wa-option", { key: '01482f3820b77c62611541d1a8bdde1063f7899f', value: "000" }, locales.entries.Lcz_Allhousekeepers), housekeeping_store?.hk_criteria?.housekeepers
            .slice()
            .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
            .map(v => (h("wa-option", { key: v.id, value: v.id.toString() }, v.name)))))), h("fieldset", { key: '0910089981d6f3a101bc7ccb5d2b7e4823094327' }, h("wa-select", { key: '16b3d8640bafdd27d5c0dd2ac3b6c658db41a391', label: "Include dusty units", size: "small", "data-testid": "dusty_units", value: this.filters?.dusty_units?.code, defaultValue: this.filters?.dusty_units?.code, onchange: e => this.updateFilter({ dusty_units: { code: e.target.value } }) }, housekeeping_store.hk_criteria?.dusty_periods?.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description))))), h("fieldset", { key: '2c91c9847368ed1794001af879dae8b0a1e2fa88' }, h("wa-select", { key: '0f589d6b8607444a08546fc37d6c4a07ff9513c2', label: locales.entries['Lcz_HighlightCheck-insFrom'], size: "small", "data-testid": "highlight_check_ins", value: this.filters?.highlight_check_ins?.code, defaultValue: this.filters?.highlight_check_ins?.code, onchange: e => this.updateFilter({ highlight_check_ins: { code: e.target.value } }) }, housekeeping_store.hk_criteria?.highlight_checkin_options?.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description))))), h("div", { key: '646eae86250dc2db24145f3548968f4db14e9401', class: "filters__actions" }, h("ir-custom-button", { key: '6e27c9ac98694f3563877e4b9595a0c7405c5241', variant: "neutral", appearance: "filled", "data-testid": "reset", onClickHandler: e => this.resetFilters(e) }, locales.entries.Lcz_Reset), h("ir-custom-button", { key: 'ac866f21623a7352aea09dd3c1acfef2a2e3c31d', variant: "brand", "data-testid": "apply", loading: this.isLoading, onClickHandler: e => this.applyFiltersEvt(e) }, locales.entries.Lcz_Apply)))));
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
        return (h(Host, { key: '0a09af7bb1d825b11488d703a5b1e99b7d93ab6e' }, h("div", { key: '6a126b81bab7dc2e9b38fdffd1130a7631da0b01', class: "search-filter-container", style: { gap: '1rem' } }, h("ir-input", { key: 'e03834daa1aae2c568ee12f17230d75f170cd450', placeholder: "Search unit", class: "search-filter-input", value: hkTasksStore.searchField, "onText-change": e => updateSearchField(e.detail) }, h("wa-icon", { key: '79b7984121df80a20f25e9aeb60b22ac7101d2bc', name: "magnifying-glass", slot: "start" }))), h("div", { key: '7dd4426279218e559d9fbb1ead0a1ce1427a2349', class: "action-buttons", style: { gap: '1rem' } }, h("ir-custom-button", { key: 'f1c581f3edf529ea3533810352a88d56e2187ff6', appearance: "outlined", variant: "neutral", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'export' });
            } }, h("wa-icon", { key: 'ba048df1c6755117b64e837591d9b848da3165ef', slot: "end", name: "file-excel" }), locales.entries.Lcz_Export), h("ir-custom-button", { key: 'dd04cf318328c2ed43a44ee79f04dfc79da18bc8', appearance: "outlined", variant: "neutral", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'archive' });
            } }, locales.entries.Lcz_Archives), h("wa-animation", { key: '6fa792f7276c09e7a83943321886dbc549a8bfd9', iterations: 1, id: "cleanInspectAnimation", class: "clean-button", name: "rubberBand", easing: "ease-in-out", duration: 800 }, h("ir-custom-button", { key: '14368bd8edc3c766cb1b6272d0ffe4b593fe65c3', appearance: "filled", variant: "brand", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'clean-inspect' });
            }, disabled: !(hkTasksStore.selectedTasks.length > 0) }, "Clean & Inspect")), h("wa-animation", { key: '261b27a7882194961400a9df529ddade6272075d', iterations: 1, id: "cleanAnimation", class: "clean-button", name: "rubberBand", easing: "ease-in-out", duration: 800 }, h("ir-custom-button", { key: '6d0d8c39134723c82fdc13ad88ed9eaf87fae52f', disabled: !(hkTasksStore.selectedTasks.length > 0), onClickHandler: e => {
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
        return (h(Host, { key: '16d20af0dbc1f097fee30ef6fa5978cdd41c7618' }, h("section", { key: '93a309c7ac932e0bb6a2e3301c8f8fe27a8bf2a0', class: "mobile-tasks-container" }, h("wa-card", { key: '03ba98b5a078670d7059dcb2859bc1bde0ecfd6f' }, h("ir-tasks-header", { key: '8f382a1fea8c4db7451115a4b9e3bccb04e3f6f2' })), mobileTasks?.length === 0 && h("p", { key: '370826fa7657629cd60a8838dc2a187ae9a4de90', class: "empty-msg" }, locales.entries.Lcz_NoTasksFound), (() => {
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
        })(), h("ir-tasks-table-pagination", { key: 'b912de9e55f9ce9a2d0213a986e970c2df51c382' })), h("wa-card", { key: '0c6515c55af3e7af04deb0c176e2271f3e20b5b9', class: "table-container" }, h("ir-tasks-header", { key: '169abc83a3447ec7e656536f8679797064bff057' }), h("div", { key: '2138a56f961d4cdb87bdc3eeb7a29cd82d371b9e', class: "table--container" }, h("table", { key: 'ab86b160d875e14bad185d9355cb3d0b38718961', class: "table data-table", "data-testid": "hk_tasks_table" }, h("thead", { key: '78a9212778f0fb8150257d15b2b3612b97d69c75', class: "table-header" }, h("tr", { key: '1095b2e1e0e78263cd8399d3d2d5041defc85667' }, h("th", { key: 'd64ed37116a020f0a108a0cae997b0a93a6d3877', class: 'task-row' }, h("wa-checkbox", { key: 'f7b0eb533a782ae9d8608595affb50de0baf29f4', indeterminate: hkTasksStore.selectedTasks.length > 0 && hkTasksStore.selectedTasks.length < getCheckableTasks().length, checked: this.allSelected, defaultChecked: this.allSelected, onchange: () => this.toggleSelectAll() })), h("th", { key: '664c040244d064c50a9e58e62255e721ad0eafc2', class: "" }, locales.entries.Lcz_Period), h("th", { key: '9f8f3e77a6ca3dd8600f2993e4703fcae6eae6b6', class: "" }, this.tasks.length > 1 && this.tasks.length + ' ', locales.entries.Lcz_Unit), h("th", { key: 'a67bde48caed08ade019380975288af71fa31ef2', class: "sortable", onClick: () => this.handleSort('status') }, h("div", { key: '259299a6264625dc44b231ddec5406649b006b6e', class: "th-sort-inner" }, h("span", { key: '7c0eb433d66c3120975ad87b02b59bbfaff7acef' }, locales.entries.Lcz_Status), h("svg", { key: '6cf73f560b7d5b04a0376e9c1bbf0ce590a14952', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'cf771b2c211827b8a517bd2e71a905981b3a7954', d: "m21 16-4 4-4-4" }), h("path", { key: 'd6e265b98a97cad150658c1a1e78c762d2755352', d: "M17 20V4" }), h("path", { key: 'fc4b1244a8a78e41e8a737721c62575e8682812d', d: "m3 8 4-4 4 4" }), h("path", { key: '6aca7e4ec299858ae838061e8534264e7e495f7d', d: "M7 4v16" })))), h("th", { key: 'eaaf1ee75198193f72a02062232e5accf2daf3e4', class: " text-left" }, locales.entries.Lcz_Hint), h("th", { key: '3f57c99ddf0dd63c0362b07835dffe9050765c0b', class: " text-left" }, "Tasks"), h("th", { key: '2a222907c069c198a09dd650eb3ce22d7aaf7e47', class: "text-left" }, locales.entries.Lcz_A, "d"), h("th", { key: '22bc56c2bdb4fc2d60daba6f598c1ff2729242c0', class: "text-left" }, locales.entries.Lcz_C, "h"), h("th", { key: '2eeae75634ae242318f642e1b6b16852dc1659a0', class: "text-left text-left" }, locales.entries.Lcz_I, "n"), haveManyHousekeepers && (h("th", { key: '8d5b509c96ae305f125c945e7144aaf0135786b4', class: "sortable", onClick: () => this.handleSort('housekeeper') }, h("div", { key: 'e99d90b788ca66e39d4ffe9161d9800e9ae26734', class: "th-sort-inner" }, h("span", { key: '2535e7df838cb844a2c991a0d93e4a3c707cafa4' }, locales.entries.Lcz_Housekeeper), h("svg", { key: 'd635aba674a1803e22321fbba50badd9cf2960ba', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '9f03ef47c58c180e9eb16093af2f603527074bfd', d: "m21 16-4 4-4-4" }), h("path", { key: '0da79b1a0e5e955bc8d615c91fc33891b0d30132', d: "M17 20V4" }), h("path", { key: '2e68c0621bc1be5119db9ffea1dab10b6fa2383c', d: "m3 8 4-4 4 4" }), h("path", { key: 'deee5a1de4d48c26cdaadade24b2c3bb97f4a063', d: "M7 4v16" }))))), h("th", { key: '89e042c64e9089bae31ed032001d1d8464b33b37' }))), h("tbody", { key: '4ad13ab8ceed2318ffe9f37a57f31b0ed9479d08' }, tasks.length === 0 && (h("tr", { key: 'f65d422e414eb3f3f5517afca44d2ca842c521fc', class: "ir-table-row" }, h("td", { key: '064e7c69f28f472665a592b310c7890fa2141dc4', colSpan: 9 }, h("div", { key: 'e614b15c4892c24129ae62d30cb2fd51bea4ce04', class: "table-empty-state" }, h("span", { key: '206838d3d9a0395104b7ef45ffb005063f9a9b85' }, locales.entries.Lcz_NoTasksFound))))), tasks?.map(task => {
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
        })))), h("div", { key: '4a5ebbcd7c5a9b1e7d0eb953de1aaaee20122b4e', class: "data-table--pagination " }, h("ir-tasks-table-pagination", { key: '87c36d3cccbc840162cf99f7d6f6e438779280b9' }))), h("ir-dialog", { key: '271ef0c41e5184c69550ffe303c2e464733efb1a', ref: el => (this.dialog = el), label: locales.entries.Lcz_Confirmation, lightDismiss: false }, h("span", { key: '7240220d4cf166cc8360ab1463f82fbbc4ad17cb' }, locales.entries.Lcz_Assign, " ", h("strong", { key: 'b91917fabfa5acf11ebbd6d2605f33371d72d1c3' }, this.pendingChange?.task?.unit?.name), " ", 'to', " ", h("strong", { key: '46e32e5688ba49c3ee577518e5f13cd975da03cf' }, pendingHkName), "?"), h("div", { key: '100d70d18464554b2d89537dfc56a56d625d7329', slot: "footer", class: "hk-dialog-footer" }, h("ir-custom-button", { key: 'a9a20200075599c2cd2d7d5c66cc5b81dbb959fa', size: "medium", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.pendingChange = null;
                this.selectRevertKey++;
                this.dialog.closeModal();
            } }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '9d34af34037293d1b5cb0e2b9f59cab19d074d6c', size: "medium", appearance: "accent", variant: "brand", loading: isRequestPending('/Override_HK_Task_Ownership'), onClickHandler: () => this.confirmOwnershipChange() }, locales.entries.Lcz_Confirm)))));
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
        return (h(Host, { key: '95d75487df90045d313825ff21eceee66146b02c' }, shouldLoadMore() && h("ir-button", { key: '2a71831a5600e9259fc714cbd5e0bf6d445cb82a', size: "sm", class: "tasks-load-more", text: "Load more", onClickHandler: () => loadMoreTasks(mobileCurrentPage + 1) }), h("ir-pagination", { key: 'b1a2cd1dc36bd1a6835ba2d6d4e310c7cc08ab1c', showing: {
                from: start,
                to: end,
            }, class: "tasks-pagination", total: totalTasks, pages: totalPages, pageSize: pageSize, currentPage: currentPage, pageSizes: pageSizes, onPageChange: e => updateCurrentPage(e.detail.currentPage), onPageSizeChange: e => updatePageSize(e.detail.pageSize), showTotalRecords: true, recordLabel: "tasks" })));
    }
};
IrTasksTablePagination.style = IrTasksTablePaginationStyle0;

export { IrHkArchive as ir_hk_archive, IrTasksCard as ir_tasks_card, IrTasksFilters as ir_tasks_filters, IrTasksHeader as ir_tasks_header, IrTasksTable as ir_tasks_table, IrTasksTablePagination as ir_tasks_table_pagination };

//# sourceMappingURL=ir-hk-archive_6.entry.js.map