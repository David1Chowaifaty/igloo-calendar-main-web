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
        return (h(Host, { key: '38f6a708524be7d3d0f8b876b6ddbb74ebb82ee2' }, h("wa-card", { key: 'e8384bc555554b1c7b213ccaed4e3207768e7a7a', class: "" }, h("div", { key: '4babd4b43725dae31b28803559f4d43a8909f1fe', slot: "header" }, h("span", { key: '9f6bc684c5366345ae285fc858bdea6ba3e35296', class: "ops-header__title" }, "Operations Settings")), h("div", { key: '5430e517902682610e19688710519f4a2993e178', class: "ops-settings" }, h("div", { key: '9acf8a941ca90a6faf38deab9f534f73077f5e51', class: "ops-setting-item" }, h("div", { key: '38bbd03582e91bacbedad20f2dc8fe36594e3878', class: "ops-setting-item__info" }, h("span", { key: '30a263ee686dc832bd03a24dc6e404c636f756f8', class: "ops-setting-item__title" }, "Automatic Check-in & Check-out"), h("span", { key: '7d4b9c51de32ba71c612e42528d9ec03a54ae32f', class: "ops-setting-item__subtitle" }, "Process guests automatically based on property rules")), h("div", { key: '1d4cf254ed1fbdc5e4841a100bd0b03b7c969dd8', class: "ops-setting-item__controls" }, h("wa-select", { key: 'cd3c16b2f53d4806e8b07f3c8938bb3ebb55c9c8', size: "s", style: { minWidth: '260px' }, value: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', defaultValue: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onchange: (e) => this.saveAutomaticCheckInCheckout(e) }, h("wa-option", { key: '472add3d9b3e34fe71ce756a3dbc6a8dc24d42f4', value: "auto" }, locales.entries.Lcz_YesAsPerPropertyPolicy), h("wa-option", { key: '2c3ce0c6612a4b1116b11e9a70e165b9e9269751', value: "manual" }, locales.entries.Lcz_NoIWillDoItManually))))), h("div", { key: '171ece228d075debdddc47c7a0b8be69c4b6ca81', class: "ops-tasks__header" }, h("p", { key: '7e368b4f232fa5b5e733d41f75dbef558d8c6c5c', class: "ops-tasks__title" }, "Recurring Tasks"), h("p", { key: 'faf4f1998bc547acd11f1b441d2c761d3a8c04b1', class: "ops-tasks__subtitle" }, "Define your housekeeping tasks and frequency")), h("div", { key: '29b7599c53ea12d8672afbaa6bba6ab916b43469', class: "ops-tasks__list" }, h("div", { key: '62047339f9bb6206f867e4a4cdead89bfe3421ca', class: "ops-task-row ops-task-row--locked" }, h("wa-badge", { key: 'ff57bd022532f35d88cad28cb983f3f5ba4deaa8', variant: "danger", appearance: "filled" }, "CL"), h("span", { key: '35edaaa5aee55b743f0ca3b96874d2adb69f1b22', class: "ops-task-locked-label" }, "Cleaning"), h("wa-select", { key: 'a2a61c11027ab72c937c7a40b2abcd03a8cba483', class: "ops-task-select", size: "s", value: this.selectedCleaningFrequency, defaultValue: this.selectedCleaningFrequency, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedCleaningFrequency = e.target.value;
                this.dialog.openModal();
            } }, housekeeping_store?.hk_criteria?.cleaning_frequencies.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description)))), h("span", { key: 'e8cd96d9cb5de83736b976db44e5439669746a4f' })), this.hkTasks.map((task, i) => (h("div", { key: i, class: "ops-task-row" }, h("wa-badge", { variant: i === 0 ? 'success' : 'brand', appearance: "filled" }, "T", i + 1), h("ir-input", { class: "ops-task-input", size: "s", placeholder: i === 0 ? 'Change sheets, ...' : 'Amenities refill, ...', maxlength: 30, value: task.name, onChange: (e) => {
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
            } })))))), h("ir-dialog", { key: 'ee86b02e33118a65762251c246a89bf5c4d0ad19', ref: el => (this.dialog = el), label: locales.entries.Lcz_Confirmation, lightDismiss: false }, h("span", { key: 'dc3453c97213685a6eb7ee1d8cb11b2353d1349b' }, "This action will reschedule all cleaning tasks. Do you want to continue?"), h("div", { key: '2a85107a025e964269828da51a615493896716c9', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'd69358123037f174146840cacd0c8dd90954f958', size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.selectedCleaningFrequency = (calendar_data.cleaning_frequency ?? housekeeping_store?.hk_criteria?.cleaning_frequencies?.[0])?.code ?? null;
                this.dialog.closeModal();
            } }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '8755dd64fdb3d852fa803d94900672cb10b856b7', size: "m", appearance: "filled", variant: "brand", loading: isRequestPending('/Set_Exposed_Cleaning_Frequency'), onClickHandler: () => this.saveCleaningFrequency() }, locales.entries.Lcz_Confirm)))));
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
