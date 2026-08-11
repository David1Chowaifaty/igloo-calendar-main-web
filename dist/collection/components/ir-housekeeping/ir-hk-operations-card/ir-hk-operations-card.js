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
        return (h(Host, { key: '6581f1092048b8b3fc5c41e751b7c3df0c9faf90' }, h("wa-card", { key: '4bd0eefe50622c4dda27eea62c5d1e9aa8aa19e0', appearance: "plain", class: "hk-operation__card" }, h("div", { key: '2716bda7caad1a8356e9711eda3885275d9043a7', slot: "header" }, h("span", { key: '78923508a11c1c6a081150b15e51b7ae8fa746da', class: "ops-header__title" }, "Operations Settings")), h("div", { key: 'c635e9f02338e4def779834dde9973016b500509', class: "ops-settings" }, h("div", { key: 'eb6cdda92502262a65e07ee8cbebd8d14c72c6f2', class: "ops-setting-item" }, h("div", { key: 'b92d6c0b9b0f6b1209628897467d5912872b892b', class: "ops-setting-item__info" }, h("span", { key: '3c612ddb7b47e57910b7b9cc72360cd5e1babdf7', class: "ops-setting-item__title" }, "Automatic Check-in & Check-out"), h("span", { key: '5b91310c5b4994e9256e9ab2f749ca4fb9c6bd12', class: "ops-setting-item__subtitle" }, "Process guests automatically based on property rules")), h("div", { key: 'ccd2e413555746569b2871518c9b702484b3f7da', class: "ops-setting-item__controls" }, h("wa-select", { key: '9679bd2f07bb8c9f736dbf3fd4db26a12ef3e913', size: "s", style: { minWidth: '260px' }, value: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', defaultValue: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onchange: (e) => this.saveAutomaticCheckInCheckout(e) }, h("wa-option", { key: '425cb36ea399fbe8aca2c96ff393360afd89a4af', value: "auto" }, locales.entries.Lcz_YesAsPerPropertyPolicy), h("wa-option", { key: '0131532449d589bacf61a077be06dbfd8f954465', value: "manual" }, locales.entries.Lcz_NoIWillDoItManually))))), h("div", { key: 'd62e67d1be9da4702bf73884e2ad7543b1f39b39', class: "ops-tasks__header" }, h("p", { key: '03131e2c9f6576d8fd0b476389f24957922f8ff7', class: "ops-tasks__title" }, "Recurring Tasks"), h("p", { key: '781c7da8ce5298958c91d018a21bcc96a5e17757', class: "ops-tasks__subtitle" }, "Define your housekeeping tasks and frequency")), h("div", { key: '0e3e8ac0147a73ee5b2f18180c335cb70faa5084', class: "ops-tasks__list" }, h("div", { key: 'e220c790ba1ff5cf6b9aad41ea656380e0f1b029', class: "ops-task-row ops-task-row--locked" }, h("wa-badge", { key: '4165c2ba22ce4014ffcd08597685aad9b60ba097', variant: "danger", appearance: "filled" }, "CL"), h("span", { key: '91dc2f5cc69bb5cfa79c6fab61ca721a71b0ef2a', class: "ops-task-locked-label" }, "Cleaning"), h("wa-select", { key: '5fa0de1e070fffa2ada526f8cbca1b03dfec5889', class: "ops-task-select", size: "s", value: this.selectedCleaningFrequency, defaultValue: this.selectedCleaningFrequency, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedCleaningFrequency = e.target.value;
                this.dialog.openModal();
            } }, housekeeping_store?.hk_criteria?.cleaning_frequencies.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description)))), h("span", { key: '4d5c89462b8e5fb2251da862dce57826955e70a1' })), this.hkTasks.map((task, i) => (h("div", { key: i, class: "ops-task-row" }, h("wa-badge", { variant: i === 0 ? 'success' : 'brand', appearance: "filled" }, "T", i + 1), h("ir-input", { class: "ops-task-input", size: "s", placeholder: i === 0 ? 'Change sheets, ...' : 'Amenities refill, ...', maxlength: 30, value: task.name, onChange: (e) => {
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
            } })))))), h("ir-dialog", { key: '6041394d9cea56e08b667f57fea1f9d17f6f5f98', ref: el => (this.dialog = el), label: locales.entries.Lcz_Confirmation, lightDismiss: false }, h("span", { key: 'bdfb5e5e161870738e10f2253a3f7b4734789b44' }, "This action will reschedule all cleaning tasks. Do you want to continue?"), h("div", { key: 'fbf3c20e85f1af7499be7f043835cce26805a4ab', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'e5f27a7e3eef362f19c39e4e95e0db94e130468d', size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.selectedCleaningFrequency = (calendar_data.cleaning_frequency ?? housekeeping_store?.hk_criteria?.cleaning_frequencies?.[0])?.code ?? null;
                this.dialog.closeModal();
            } }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '0af57a334ed8d3da35a4ff4d9203e828147a40d9', size: "m", appearance: "filled", variant: "brand", loading: isRequestPending('/Set_Exposed_Cleaning_Frequency'), onClickHandler: () => this.saveCleaningFrequency() }, locales.entries.Lcz_Confirm)))));
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
