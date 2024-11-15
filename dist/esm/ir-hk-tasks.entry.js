import { r as registerInstance, h, H as Host, g as getElement } from './index-c553b3dc.js';
import { T as Token } from './Token-a382baa1.js';
import { H as HouseKeepingService, u as updateHKStore, h as housekeeping_store } from './housekeeping.service-0fce7ec1.js';
import { R as RoomService } from './room.service-f3b5fba8.js';
import { l as locales } from './locales.store-a1e3db22.js';
import './axios-ab377903.js';
import './index-1d7b1ff2.js';
import './calendar-data-666acc1f.js';

const irHkTasksCss = ".sc-ir-hk-tasks-h{display:block}.checkbox-container.sc-ir-hk-tasks{display:flex;align-items:center;justify-content:center}.table-container.sc-ir-hk-tasks{overflow-x:auto;max-width:100%;width:max-content}.table.sc-ir-hk-tasks,th.sc-ir-hk-tasks,td.sc-ir-hk-tasks{border-color:white !important}.select-container.sc-ir-hk-tasks{max-width:500px}@media only screen and (min-width: 900px){td.sc-ir-hk-tasks{min-width:140px !important;width:max-content !important}}@media only screen and (max-width: 900px){td.sc-ir-hk-tasks{min-width:100px !important}.table-container.sc-ir-hk-tasks{width:max-content !important}}";
const IrHkTasksStyle0 = irHkTasksCss;

const IrHkTasks = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.roomService = new RoomService();
        this.houseKeepingService = new HouseKeepingService();
        this.token = new Token();
        this.language = '';
        this.ticket = '';
        this.propertyid = undefined;
        this.p = undefined;
        this.isLoading = false;
        this.selectedDuration = '';
        this.selectedHouseKeeper = '0';
        this.selectedRoom = null;
        this.archiveOpened = false;
        this.property_id = undefined;
    }
    componentWillLoad() {
        if (this.ticket !== '') {
            this.token.setToken(this.ticket);
            this.initializeApp();
        }
    }
    async handleResetData(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { arrival, arrival_time, housekeeper, unit, status } = this.selectedRoom;
        this.houseKeepingService.executeHKAction({
            property_id: this.propertyid,
            arrival,
            arrival_time,
            housekeeper: {
                id: housekeeper.id,
            },
            status: {
                code: status.code,
            },
            unit: {
                id: unit.id,
            },
        });
        await this.houseKeepingService.getExposedHKSetup(this.property_id);
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
        this.initializeApp();
    }
    handleCheckChange(e, action) {
        if (e.detail) {
            this.selectedRoom = action;
            this.modalOpenTimeOut = setTimeout(() => {
                const modal = this.el.querySelector('ir-modal');
                if (modal) {
                    modal.openModal();
                }
            }, 50);
        }
    }
    handleCloseSidebar(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.archiveOpened = false;
    }
    disconnectedCallback() {
        if (this.modalOpenTimeOut) {
            clearTimeout(this.modalOpenTimeOut);
        }
    }
    async getPendingActions() {
        await this.houseKeepingService.getHKPendingActions({
            property_id: this.property_id,
            bracket: {
                code: this.selectedDuration,
            },
            housekeeper: {
                id: +this.selectedHouseKeeper,
            },
        });
    }
    async initializeApp() {
        try {
            this.isLoading = true;
            let propertyId = this.propertyid;
            if (!propertyId) {
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                });
                propertyId = propertyData.My_Result.id;
            }
            this.property_id = propertyId;
            updateHKStore('default_properties', { token: this.ticket, property_id: propertyId, language: this.language });
            const requests = [this.houseKeepingService.getExposedHKStatusCriteria(propertyId), this.roomService.fetchLanguage(this.language, ['_HK_FRONT'])];
            if (this.propertyid) {
                requests.unshift(this.roomService.getExposedProperty({
                    id: propertyId,
                    language: this.language,
                    is_backend: true,
                }));
            }
            await Promise.all(requests);
            this.selectedDuration = housekeeping_store.hk_tasks.brackets[0].code;
            await this.getPendingActions();
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    async handleConfirm(e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        e.stopPropagation();
        try {
            await this.getPendingActions();
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.selectedRoom = null;
        }
    }
    render() {
        var _a;
        if (this.isLoading) {
            return h("ir-loading-screen", null);
        }
        return (h(Host, null, h("ir-toast", null), h("ir-interceptor", null), h("section", { class: "p-2" }, h("ir-title", { class: "d-none d-md-flex", label: locales.entries.Lcz_HousekeepingTasks, justifyContent: "space-between" }, h("ir-button", { slot: "title-body", text: locales.entries.Lcz_Archive, size: "sm" })), h("div", { class: "d-flex align-items-center mb-2 justify-content-between d-md-none" }, h("ir-title", { class: "mb-0", label: locales.entries.Lcz_HousekeepingTasks, justifyContent: "space-between" }), h("ir-button", { slot: "title-body", text: locales.entries.Lcz_Archive, size: "sm", onClickHanlder: () => (this.archiveOpened = true) })), h("div", { class: "d-flex flex-column flex-sm-row align-items-center mb-1  select-container" }, h("ir-select", { selectedValue: this.selectedDuration, onSelectChange: e => {
                this.selectedDuration = e.detail;
                this.getPendingActions();
            }, data: housekeeping_store.hk_tasks.brackets.map(bracket => ({
                text: bracket.description,
                value: bracket.code,
            })), class: "mb-1 w-100 mb-sm-0", showFirstOption: false, LabelAvailable: false }), h("ir-select", { onSelectChange: e => {
                this.selectedHouseKeeper = e.detail;
                this.getPendingActions();
            }, selectedValue: this.selectedHouseKeeper, data: [
                { text: 'All housekeepers', value: '0' },
                ...housekeeping_store.hk_tasks.housekeepers.map(bracket => ({
                    text: bracket.name,
                    value: bracket.id.toString(),
                })),
            ], showFirstOption: false, LabelAvailable: false, class: "ml-sm-2 w-100" })), h("div", { class: "card p-1" }, h("div", { class: "table-container" }, h("table", { class: "table" }, h("thead", null, h("tr", null, h("th", { class: "text-left" }, locales.entries.Lcz_Unit), h("th", { class: "text-left" }, locales.entries.Lcz_Status), h("th", { class: "text-left" }, locales.entries.Lcz_Arrivaldate), h("th", { class: "text-left" }, locales.entries.Lcz_ArrivalTime), h("th", { class: "text-left" }, locales.entries.Lcz_Housekeeper), h("th", { class: "text-center" }, locales.entries.Lcz_Done))), h("tbody", null, (_a = housekeeping_store.pending_housekeepers) === null || _a === void 0 ? void 0 : _a.map(action => {
            var _a;
            return (h("tr", { key: action.housekeeper.id }, h("td", { class: "text-left" }, action.unit.name), h("td", { class: "text-left" }, action.status.description), h("td", { class: "text-left" }, action.arrival), h("td", { class: "text-left" }, action.arrival_time), h("td", { class: "text-left" }, action.housekeeper.name), h("td", null, h("div", { class: "checkbox-container" }, h("ir-checkbox", { onCheckChange: e => this.handleCheckChange(e, action), checked: ((_a = this.selectedRoom) === null || _a === void 0 ? void 0 : _a.unit.id) === action.unit.id })))));
        })))))), this.selectedRoom && (h("ir-modal", { leftBtnText: locales.entries.Lcz_No, rightBtnText: locales.entries.Lcz_Yes, onConfirmModal: this.handleConfirm.bind(this), onCancelModal: () => (this.selectedRoom = null), modalBody: `Is ${this.selectedRoom.unit.name} cleaned?` }))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrHkTasks.style = IrHkTasksStyle0;

export { IrHkTasks as ir_hk_tasks };

//# sourceMappingURL=ir-hk-tasks.entry.js.map