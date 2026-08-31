import { RoomService } from "../../../services/room.service";
import { PropertyService } from "../../../services/property.service";
import { HouseKeepingService } from "../../../services/housekeeping.service";
import calendar_data from "../../../stores/calendar-data";
import housekeeping_store from "../../../stores/housekeeping.store";
import { isRequestPending } from "../../../stores/ir-interceptor.store";
import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
import { showToast } from "../../../utils/utils";
export class IrHkOperationsCard {
    frequencies = [];
    hkTasks = [
        { name: '', frequency: '' },
        { name: '', frequency: '' },
    ];
    selectedCleaningFrequency = null;
    roomService = new RoomService();
    propertyService = new PropertyService();
    houseKeepingService = new HouseKeepingService();
    dialog;
    componentWillLoad() {
        const criteria = housekeeping_store.hk_criteria;
        this.hkTasks = [
            { name: criteria?.t1_config?.label ?? '', frequency: criteria?.t1_config?.freq ?? '' },
            { name: criteria?.t2_config?.label ?? '', frequency: criteria?.t2_config?.freq ?? '' },
        ];
        this.selectedCleaningFrequency = (calendar_data.cleaning_frequency ?? criteria?.cleaning_frequencies?.[0])?.code ?? null;
    }
    async saveAutomaticCheckInCheckout(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const target = e.target;
        const flag = target.value === 'auto';
        try {
            await this.roomService.SetAutomaticCheckInOut({
                property_id: housekeeping_store.default_properties.property_id,
                flag,
            });
            showToast({ position: 'top-right', title: 'Saved Successfully', description: '', type: 'success' });
        }
        catch (error) {
            console.log(error);
        }
    }
    async saveCleaningFrequency() {
        try {
            await this.propertyService.setExposedCleaningFrequency({
                property_id: housekeeping_store.default_properties.property_id,
                code: this.selectedCleaningFrequency,
            });
            calendar_data.cleaning_frequency = { code: this.selectedCleaningFrequency, description: '' };
            showToast({ position: 'top-right', title: 'Saved Successfully', description: '', type: 'success' });
            this.dialog.closeModal();
        }
        catch (error) {
            console.log(error);
        }
    }
    async saveHkTasks() {
        const [t1, t2] = this.hkTasks;
        try {
            await this.houseKeepingService.setHKTaskLabels({
                property_id: housekeeping_store.default_properties.property_id,
                t1_label: t1.name,
                t1_freq: t1.frequency,
                t2_label: t2.name,
                t2_freq: t2.frequency,
            });
            showToast({ position: 'top-right', title: 'Saved Successfully', description: '', type: 'success' });
        }
        catch (error) {
            console.log(error);
        }
    }
    render() {
        return (h(Host, { key: 'faf844271f7d472acf8706eac8bdc8036fe65303' }, h("wa-card", { key: '0a482546a48ba978df31579b1f13c8144c7ea524', appearance: "plain", class: "hk-operation__card" }, h("div", { key: '296ff41aabd3ee9e995778fa39828e9f4592ed29', slot: "header" }, h("span", { key: '3a319947b93db5c646c6630aad05a8168ea48876', class: "ops-header__title" }, "Operations Settings")), h("div", { key: '1ed3b6ffd8e23e52f2ebe81bfacb0ce9a9dacf16', class: "ops-settings" }, h("div", { key: '67bb610f8d80f368263375aeb1794778b7db94eb', class: "ops-setting-item" }, h("div", { key: 'cbf647285ee2b7026d821781273ac16d923aca54', class: "ops-setting-item__info" }, h("span", { key: '151efc239ccb5a46498aba308923c27bb2e8a850', class: "ops-setting-item__title" }, "Automatic Check-in & Check-out"), h("span", { key: '465f61e7484db5b6e836ccb1639e9e2f73d95c26', class: "ops-setting-item__subtitle" }, "Process guests automatically based on property rules")), h("div", { key: '786dc9580e55d5da1737f451e098e1e9e6bc2ec8', class: "ops-setting-item__controls" }, h("wa-select", { key: '1ab3b08f82c52df97592912d55a70d124a063b0c', size: "s", style: { minWidth: '260px' }, value: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', defaultValue: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onchange: (e) => this.saveAutomaticCheckInCheckout(e) }, h("wa-option", { key: '15fba5fd113e1afb4b42a955e77cb795c9702af1', value: "auto" }, locales.entries.Lcz_YesAsPerPropertyPolicy), h("wa-option", { key: '4fbb141bafe60eaf2889f7117981dc795bcab1f9', value: "manual" }, locales.entries.Lcz_NoIWillDoItManually))))), h("div", { key: '0513da7a111aabc1f790452cd32ea77d77bc4b34', class: "ops-tasks__header" }, h("p", { key: '6b371ba4d71342c19b3ebe95a62ac1576731e423', class: "ops-tasks__title" }, "Recurring Tasks"), h("p", { key: '31b8fac5887a945d64843f937d3262c62e2df111', class: "ops-tasks__subtitle" }, "Define your housekeeping tasks and frequency")), h("div", { key: '6e42baa50c54e2522c3e06af157fb5e59036ac08', class: "ops-tasks__list" }, h("div", { key: '8098825e76a11ba92dfaad9f562f103e460b69f1', class: "ops-task-row ops-task-row--locked" }, h("wa-badge", { key: 'bbb3f07fe932c84e6c76f6b7fb092ca4951d9faf', variant: "danger", appearance: "filled" }, "CL"), h("span", { key: 'd758546c9792cd5f6e4cfd08ef2911e7351f2419', class: "ops-task-locked-label" }, "Cleaning"), h("wa-select", { key: 'dee1bfd240aa5d64eefca6a44294f1bf2d2e1277', class: "ops-task-select", size: "s", value: this.selectedCleaningFrequency, defaultValue: this.selectedCleaningFrequency, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedCleaningFrequency = e.target.value;
                this.dialog.openModal();
            } }, housekeeping_store?.hk_criteria?.cleaning_frequencies.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description)))), h("span", { key: '5bdd5bcbf038e7f3e975b1625aef58c7249c2b51' })), this.hkTasks.map((task, i) => (h("div", { key: i, class: "ops-task-row" }, h("wa-badge", { variant: i === 0 ? 'success' : 'brand', appearance: "filled" }, "T", i + 1), h("ir-input", { class: "ops-task-input", size: "s", placeholder: i === 0 ? 'Change sheets, ...' : 'Amenities refill, ...', maxlength: 30, value: task.name, onChange: (e) => {
                const updated = [...this.hkTasks];
                updated[i] = { ...updated[i], name: e.target.value };
                this.hkTasks = updated;
                this.saveHkTasks();
            } }), h("wa-select", { class: "ops-task-select", size: "s", value: task.frequency, defaultValue: task.frequency, placeholder: "Frequency", onchange: (e) => {
                const updated = [...this.hkTasks];
                updated[i] = { ...updated[i], frequency: e.target.value };
                this.hkTasks = updated;
                this.saveHkTasks();
            } }, this.frequencies.map(f => (h("wa-option", { key: f.CODE_NAME, value: f.CODE_NAME }, f.CODE_VALUE_EN)))), h("wa-icon-button", { class: "ops-task-delete", name: "xmark", label: "Remove task", onClick: () => {
                const updated = [...this.hkTasks];
                updated[i] = { name: '', frequency: '' };
                this.hkTasks = updated;
                this.saveHkTasks();
            } })))))), h("ir-dialog", { key: '7d62cbe307662dfa05243c3f01a58535904792c5', ref: el => (this.dialog = el), label: locales.entries.Lcz_Confirmation, lightDismiss: false }, h("span", { key: '40b2d99a2a452198fdb3d988476402affe093e9b' }, "This action will reschedule all cleaning tasks. Do you want to continue?"), h("div", { key: 'f3c4c7fedc9fb13bf85d45b958d002da1f126cc5', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '19c2c64339e187bf387f216a5f5c977e6b542d8c', size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.selectedCleaningFrequency = (calendar_data.cleaning_frequency ?? housekeeping_store?.hk_criteria?.cleaning_frequencies?.[0])?.code ?? null;
                this.dialog.closeModal();
            } }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '978bd1a55bb8d1c8f6bfc9d21f5e7b13a29bb0e7', size: "m", appearance: "filled", variant: "brand", loading: isRequestPending('/Set_Exposed_Cleaning_Frequency'), onClickHandler: () => this.saveCleaningFrequency() }, locales.entries.Lcz_Confirm)))));
    }
    static get is() { return "ir-hk-operations-card"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-hk-operations-card.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-hk-operations-card.css"]
        };
    }
    static get properties() {
        return {
            "frequencies": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IEntries[]",
                    "resolved": "IEntries[]",
                    "references": {
                        "IEntries": {
                            "location": "import",
                            "path": "@/models/IBooking",
                            "id": "src/models/IBooking.ts::IEntries",
                            "referenceLocation": "IEntries"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            }
        };
    }
    static get states() {
        return {
            "hkTasks": {},
            "selectedCleaningFrequency": {}
        };
    }
}
