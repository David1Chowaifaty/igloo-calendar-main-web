import { r as registerInstance, a as createEvent, i as getElement, h, e as Host } from './index-7b3961ed.js';
import { T as Token } from './Token-add81d36.js';
import { H as HouseKeepingService } from './housekeeping.service-0ce1e0a7.js';
import { R as RoomService } from './room.service-1f08b13d.js';
import { h as housekeeping_store } from './housekeeping.store-9565c156.js';
import { l as locales } from './locales.store-daef23cc.js';
import { h as hooks } from './moment-ab846cee.js';
import { v as v4 } from './index-05b40732.js';
import { l as downloadFile } from './utils-7eaed9ad.js';
import { s as setLoading, u as updateTasks, h as hkTasksStore, c as clearSelectedTasks, a as updateSelectedTasks } from './hk-tasks.store-c7c0934a.js';
import { c as calendar_data } from './calendar-data-cdc01d0d.js';
import './index-5ba472df.js';
import './index-40c31d5b.js';
import './index-17663a35.js';

const irHkTasksCss = ".sc-ir-hk-tasks-h{display:block;box-sizing:border-box}.sc-ir-hk-tasks-h *.sc-ir-hk-tasks{box-sizing:border-box}.tasks-view.sc-ir-hk-tasks{display:flex;flex-direction:column;gap:1rem;min-width:0}.tasks-table-wrapper.sc-ir-hk-tasks{display:flex;flex-direction:column;flex:1;min-width:0;width:100%}@media (min-width: 1024px){.tasks-view.sc-ir-hk-tasks{flex-direction:row;align-items:flex-start}.tasks-table-wrapper.sc-ir-hk-tasks{flex:3;min-width:0}}";

const IrHkTasks = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.clearSelectedHkTasks = createEvent(this, "clearSelectedHkTasks", 7);
    }
    get el() { return getElement(this); }
    language = '';
    ticket = '';
    propertyid;
    p;
    baseUrl;
    isLoading = false;
    isCleaningLoading = false;
    selectedDuration = '';
    selectedHouseKeeper = '0';
    selectedRoom = null;
    archiveOpened = false;
    property_id;
    isSidebarOpen;
    isApplyFiltersLoading;
    filters;
    modalCauses;
    clearSelectedHkTasks;
    hkNameCache = {};
    roomService = new RoomService();
    houseKeepingService = new HouseKeepingService();
    token = new Token();
    table_sorting = new Map();
    modal;
    componentWillLoad() {
        if (this.baseUrl) {
            this.token.setBaseUrl(this.baseUrl);
        }
        if (this.ticket !== '') {
            this.token.setToken(this.ticket);
            this.init();
        }
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
        this.init();
    }
    handleCloseSidebar(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.isSidebarOpen = false;
    }
    handleSortingChanged(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { field, direction } = e.detail;
        console.log(e.detail);
        if (field === 'date') {
            return;
        }
        this.table_sorting.set(field, direction);
    }
    handleSkipSelectedTask(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.modalCauses = { task: e.detail, cause: 'skip' };
        this.modal?.openModal();
    }
    async init() {
        try {
            this.isLoading = true;
            setLoading(true);
            let propertyId = this.propertyid;
            if (!this.propertyid && !this.p) {
                throw new Error('Property ID or username is required');
            }
            // let roomResp = null;
            if (!propertyId) {
                console.log(propertyId);
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                });
                // roomResp = propertyData;
                propertyId = propertyData.My_Result.id;
            }
            this.property_id = propertyId;
            const requests = [this.houseKeepingService.getExposedHKSetup(this.property_id), this.roomService.fetchLanguage(this.language)];
            if (this.propertyid) {
                requests.push(this.roomService.getExposedProperty({
                    id: this.propertyid,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                }));
            }
            await Promise.all(requests);
            const tasksResult = await this.houseKeepingService.getHkTasks({
                property_id: this.property_id,
                from_date: hooks().format('YYYY-MM-DD'),
                to_date: hooks().format('YYYY-MM-DD'),
                housekeepers: [],
                cleaning_frequency: (calendar_data.cleaning_frequency ?? housekeeping_store?.hk_criteria?.cleaning_frequencies[0])?.code,
                dusty_window: housekeeping_store?.hk_criteria?.dusty_periods[0]?.code,
                highlight_window: housekeeping_store?.hk_criteria?.highlight_checkin_options[0]?.code,
            });
            // updateTaskList();
            if (tasksResult?.tasks) {
                this.updateTasks(tasksResult.tasks);
            }
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = false;
            setLoading(false);
        }
    }
    buildHousekeeperNameCache() {
        this.hkNameCache = {};
        housekeeping_store.hk_criteria?.housekeepers?.forEach(hk => {
            if (hk.id != null && hk.name != null) {
                this.hkNameCache[hk.id] = hk.name;
            }
        });
    }
    groupTasks(tasks) {
        const groups = new Map();
        for (const task of tasks) {
            const key = `${task.date}__${task.unit.id}`;
            if (!groups.has(key)) {
                groups.set(key, []);
            }
            groups.get(key).push(task);
        }
        const result = [];
        for (const group of groups.values()) {
            const cln = group.find(t => t.task_type?.code === 'CLN');
            const t1 = group.find(t => t.task_type?.code === 'T1');
            const t2 = group.find(t => t.task_type?.code === 'T2');
            if (cln) {
                const extra = [];
                if (t1)
                    extra.push(t1);
                if (t2)
                    extra.push(t2);
                result.push({ ...cln, extra_task: extra.length > 0 ? extra : null });
            }
            else if (t1) {
                result.push({ ...t1, extra_task: t2 ? [t2] : null });
            }
            else if (t2) {
                result.push({ ...t2, extra_task: null });
            }
        }
        return result;
    }
    updateTasks(tasks) {
        this.buildHousekeeperNameCache();
        const mapped = tasks.map(t => ({
            ...t,
            id: v4(),
            housekeeper: (() => {
                const name = this.hkNameCache[t.hkm_id];
                if (name) {
                    return name;
                }
                const hkName = housekeeping_store.hk_criteria?.housekeepers?.find(hk => hk.id === t.hkm_id)?.name;
                this.hkNameCache[t.hkm_id] = hkName;
                return hkName;
            })(),
        }));
        console.log(this.groupTasks(mapped));
        updateTasks([...this.groupTasks(mapped)]);
    }
    async handleHeaderButtonPress(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { name } = e.detail;
        switch (name) {
            case 'cleaned':
            case 'clean-inspect':
                this.modal?.openModal();
                this.modalCauses = {
                    task: null,
                    cause: 'clean',
                    status: name === 'clean-inspect' ? '004' : '001',
                };
                break;
            case 'export':
                const sortingArray = Array.from(this.table_sorting.entries()).map(([key, value]) => ({
                    key,
                    value,
                }));
                console.log(sortingArray);
                const { url } = await this.fetchTasksWithFilters(true);
                downloadFile(url);
                break;
            case 'archive':
                this.isSidebarOpen = true;
                break;
        }
    }
    handleSelectedTaskCleaningEvent(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.modalCauses = { ...e.detail, cause: 'clean' };
        this.modal?.openModal();
    }
    async handleModalConfirmation() {
        try {
            if (hkTasksStore.selectedTasks.length === 0) {
                return;
            }
            this.isCleaningLoading = true;
            if (this.modalCauses?.cause === 'skip') {
                const { booking_nbr, date, unit, extra_task } = this.modalCauses.task;
                await this.houseKeepingService.skipHKTasks({
                    property_id: calendar_data.property.id,
                    tasks_to_skip: [{ unit_id: unit.id, booking_nbr, date }, ...(extra_task ?? []).map(t => ({ unit_id: t.unit.id, booking_nbr: t.booking_nbr, date: t.date }))],
                });
            }
            else {
                await this.houseKeepingService.executeHKAction({
                    actions: hkTasksStore.selectedTasks
                        .flatMap(t => [t, ...(t.extra_task ?? [])])
                        .map(t => ({
                        description: 'Cleaned',
                        hkm_id: t.hkm_id === 0 ? null : t.hkm_id,
                        unit_id: t.unit.id,
                        booking_nbr: t.booking_nbr,
                        status: this.modalCauses?.status ?? '001',
                        hk_task_type_code: t.task_type.code,
                    })),
                });
            }
            await this.fetchTasksWithFilters();
        }
        finally {
            clearSelectedTasks();
            if (this.modalCauses) {
                this.modalCauses = null;
            }
            this.isCleaningLoading = false;
            // this.clearSelectedTasks.emit();
            this.modal.closeModal();
        }
    }
    async applyFilters(e) {
        try {
            this.isApplyFiltersLoading = true;
            e.stopImmediatePropagation();
            e.stopPropagation();
            this.filters = { ...e.detail };
            await this.fetchTasksWithFilters();
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isApplyFiltersLoading = false;
        }
    }
    async fetchTasksWithFilters(export_to_excel = false) {
        const { cleaning_periods, housekeepers, cleaning_frequencies, dusty_units, highlight_check_ins } = this.filters ?? {};
        const { tasks, url } = await this.houseKeepingService.getHkTasks({
            housekeepers,
            cleaning_frequency: cleaning_frequencies?.code,
            dusty_window: dusty_units?.code,
            highlight_window: highlight_check_ins?.code,
            property_id: this.property_id,
            from_date: hooks().format('YYYY-MM-DD'),
            to_date: cleaning_periods?.code || hooks().format('YYYY-MM-DD'),
            is_export_to_excel: export_to_excel,
        });
        console.log(tasks);
        if (tasks) {
            this.updateTasks(tasks);
        }
        return { tasks, url };
    }
    render() {
        if (this.isLoading) {
            return h("ir-loading-screen", null);
        }
        return (h(Host, { "data-testid": "hk_tasks_base" }, h("ir-toast", null), h("ir-interceptor", null), h("section", { class: "ir-page__container " }, h("h3", { class: "page-title" }, "Housekeeping Tasks"), h("div", { class: "tasks-view" }, h("ir-tasks-filters", { isLoading: this.isApplyFiltersLoading, onApplyFilters: e => {
                this.applyFilters(e);
            } }), h("div", { class: "tasks-table-wrapper" }, h("ir-tasks-table", { onRowSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                updateSelectedTasks(e.detail);
            } })))), h("ir-dialog", { ref: el => (this.modal = el), label: locales.entries.Lcz_Confirmation, lightDismiss: false }, h("span", null, this.modalCauses
            ? this.modalCauses?.cause === 'clean'
                ? this.modalCauses.task
                    ? `Update ${this.modalCauses?.task?.unit?.name} to Clean`
                    : 'Update selected unit(s) to Clean'
                : 'Skip cleaning and reschedule for tomorrow.'
            : 'Update selected unit(s) to Clean'), h("div", { slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { size: "medium", appearance: "filled", variant: "neutral", onClickHandler: () => {
                if (this.modalCauses) {
                    clearSelectedTasks();
                    this.modalCauses = null;
                }
                this.modal.closeModal();
            } }, locales.entries.Lcz_Cancel), h("ir-custom-button", { size: "medium", appearance: "accent", variant: "brand", loading: this.isCleaningLoading, onClickHandler: this.handleModalConfirmation.bind(this) }, locales.entries.Lcz_Confirm))), h("ir-sidebar", { open: this.isSidebarOpen, id: "editGuestInfo", onIrSidebarToggle: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isSidebarOpen = false;
            },
            // sidebarStyles={{
            //   width: '80vw',
            // }}
            showCloseButton: false }, this.isSidebarOpen && h("ir-hk-archive", { ticket: this.token.getToken(), propertyId: this.property_id, slot: "sidebar-body" }))));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrHkTasks.style = irHkTasksCss;

export { IrHkTasks as ir_hk_tasks };

//# sourceMappingURL=ir-hk-tasks.entry.js.map