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
        return (h(Host, { key: 'b0b6916c41b5fea7948c6f4b9b7f0205bfb295a0' }, h("wa-card", { key: 'c9bb67e290273450d9882814e0de548421e9bbd8', class: "" }, h("div", { key: '85521d4ddbf789b4297db811fd1a8db2ac52f89d', slot: "header" }, h("span", { key: '234e3a4a1fdb44df2a26ee21e345614c59675df0', class: "ops-header__title" }, "Operations Settings")), h("div", { key: '099e4a7f123d2167845cab73d2cf1b71aee1a83c', class: "ops-settings" }, h("div", { key: 'd6c84ece85a3e2090d90a5ccff6eb6b8b9a4ddb5', class: "ops-setting-item" }, h("div", { key: '9e7de6b97c1468393c919a8b76647c2aa7ebc950', class: "ops-setting-item__info" }, h("span", { key: '539dc27cca52fcb5cb563124e08ab1d37c2c0908', class: "ops-setting-item__title" }, "Automatic Check-in & Check-out"), h("span", { key: 'fa9872bb7e2fa257594b5405acfdedeea3f8bf8d', class: "ops-setting-item__subtitle" }, "Process guests automatically based on property rules")), h("div", { key: '410d4d6ac2c6e4bd16d662ecb7bfa45c731df708', class: "ops-setting-item__controls" }, h("wa-select", { key: '6107550944b5f8ca131212f32b0a57c8d8d4e511', size: "s", style: { minWidth: '260px' }, value: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', defaultValue: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onchange: (e) => this.saveAutomaticCheckInCheckout(e) }, h("wa-option", { key: '487b728fff9b8904cee03f3b0d234f0a31489290', value: "auto" }, locales.entries.Lcz_YesAsPerPropertyPolicy), h("wa-option", { key: '42848b3358c82a202340f5964b2d93d4319d1b9d', value: "manual" }, locales.entries.Lcz_NoIWillDoItManually))))), h("div", { key: '6ad04c49612f1282b6c7f25cafa50beb92222a63', class: "ops-tasks__header" }, h("p", { key: '0c74966bc6725d26a4983318e3bb3a489c99cb5d', class: "ops-tasks__title" }, "Recurring Tasks"), h("p", { key: '86e259fbee8fe4ea39ce78066b4b2a72f6ccfe36', class: "ops-tasks__subtitle" }, "Define your housekeeping tasks and frequency")), h("div", { key: '9f4b9967862c33d77f9be7e2fe582c2e72d2c688', class: "ops-tasks__list" }, h("div", { key: 'bb400478a6e87559b0f16c9e6946cb94eed210c9', class: "ops-task-row ops-task-row--locked" }, h("wa-badge", { key: 'f7c2a2469e896f59b4b0803b85f77074f2e90c13', variant: "danger", appearance: "filled" }, "CL"), h("span", { key: 'd6025372ab28d4d27045aed58153ed80fb93cff2', class: "ops-task-locked-label" }, "Cleaning"), h("wa-select", { key: 'a1423944dd3a5ef7791a7c21f18ac42b73b08afc', class: "ops-task-select", size: "s", value: this.selectedCleaningFrequency, defaultValue: this.selectedCleaningFrequency, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedCleaningFrequency = e.target.value;
                this.dialog.openModal();
            } }, housekeeping_store?.hk_criteria?.cleaning_frequencies.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description)))), h("span", { key: 'a5f4ef99fe680d547c863efa8bb7df88d38868b9' })), this.hkTasks.map((task, i) => (h("div", { key: i, class: "ops-task-row" }, h("wa-badge", { variant: i === 0 ? 'success' : 'brand', appearance: "filled" }, "T", i + 1), h("ir-input", { class: "ops-task-input", size: "s", placeholder: i === 0 ? 'Change sheets, ...' : 'Amenities refill, ...', maxlength: 30, value: task.name, onChange: (e) => {
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
            } })))))), h("ir-dialog", { key: '6e5136c33cca41ff35d80a5e3b5d11ffeaa58c17', ref: el => (this.dialog = el), label: locales.entries.Lcz_Confirmation, lightDismiss: false }, h("span", { key: '90818f95e62b83ed1e3687220143b423eae5572d' }, "This action will reschedule all cleaning tasks. Do you want to continue?"), h("div", { key: '5799b321c2fbee5cb68df7866eb0106ab1f47a01', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'b8398e399ae25480234172bdda6c451401ee9e52', size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.selectedCleaningFrequency = (calendar_data.cleaning_frequency ?? housekeeping_store?.hk_criteria?.cleaning_frequencies?.[0])?.code ?? null;
                this.dialog.closeModal();
            } }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '0ee7415cc917d9f1d21811f37c1cb421bdd39542', size: "m", appearance: "filled", variant: "brand", loading: isRequestPending('/Set_Exposed_Cleaning_Frequency'), onClickHandler: () => this.saveCleaningFrequency() }, locales.entries.Lcz_Confirm)))));
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
