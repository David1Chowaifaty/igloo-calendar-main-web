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
        return (h(Host, { key: 'cb7949e45bb9c31e5c2bd496419fe2d41b81c690' }, h("wa-card", { key: 'a740aac59798d986929c3c9b1efe15883e08698b', class: "" }, h("div", { key: 'eb9947ba6d0005325c85d3f1bb83b2a4e5028d8c', slot: "header" }, h("span", { key: 'cb7f0850ae899c1b08ab70551ac24d155cb6aab0', class: "ops-header__title" }, "Operations Settings")), h("div", { key: '9a6ae0dfaede74fa2f9637000f54b1d636cad70c', class: "ops-settings" }, h("div", { key: '95d34934b3dc807da0a42c6c5a899db6cf29b03e', class: "ops-setting-item" }, h("div", { key: '6c646b7a55f384f62251d3ecb1249042b59e5b43', class: "ops-setting-item__info" }, h("span", { key: 'f62b8c145f4cc44bf8b795f784a017ff88a7bda1', class: "ops-setting-item__title" }, "Automatic Check-in & Check-out"), h("span", { key: '630735196e423897b7530ee22c7af5df02453d36', class: "ops-setting-item__subtitle" }, "Process guests automatically based on property rules")), h("div", { key: '5dbae5f387f77dc8b9ded0b2d2774f7777ea6d22', class: "ops-setting-item__controls" }, h("wa-select", { key: 'ff3cd9becee85b829d1b7a7368e6faffb48b3d6a', size: "s", style: { minWidth: '260px' }, value: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', defaultValue: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onchange: (e) => this.saveAutomaticCheckInCheckout(e) }, h("wa-option", { key: '6cf36c633a31f9b8401ed8a09a0b2e4df29407b4', value: "auto" }, locales.entries.Lcz_YesAsPerPropertyPolicy), h("wa-option", { key: 'b72a525859898e28c590fa7be32ff1e75f6ac774', value: "manual" }, locales.entries.Lcz_NoIWillDoItManually))))), h("div", { key: '6f47dc02588518f95fd4daf2463fd3c85fe408bf', class: "ops-tasks__header" }, h("p", { key: 'c6c3493d3fa51aedf9019d86d6b5bb1327d3134e', class: "ops-tasks__title" }, "Recurring Tasks"), h("p", { key: '829db8f59c1844abe378781a8ffd51196995e3dc', class: "ops-tasks__subtitle" }, "Define your housekeeping tasks and frequency")), h("div", { key: '86d9683d7cb92980918a5f77bb091a5b653f074b', class: "ops-tasks__list" }, h("div", { key: '4dbcf350f3f9025b3d53944c219ad852aa38149f', class: "ops-task-row ops-task-row--locked" }, h("wa-badge", { key: '2ade3434ffbb6211aafe2284564c5c0d16da38ad', variant: "danger", appearance: "filled" }, "CL"), h("span", { key: '0189435be38a49d131fcf240c18d53d99d797c2e', class: "ops-task-locked-label" }, "Cleaning"), h("wa-select", { key: '0386d32a64a5bc538f602fafa829aab38f635dda', class: "ops-task-select", size: "s", value: this.selectedCleaningFrequency, defaultValue: this.selectedCleaningFrequency, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedCleaningFrequency = e.target.value;
                this.dialog.openModal();
            } }, housekeeping_store?.hk_criteria?.cleaning_frequencies.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description)))), h("span", { key: '997c389a8a6aa3c7d79228e78ab67d714d9cba53' })), this.hkTasks.map((task, i) => (h("div", { key: i, class: "ops-task-row" }, h("wa-badge", { variant: i === 0 ? 'success' : 'brand', appearance: "filled" }, "T", i + 1), h("ir-input", { class: "ops-task-input", size: "s", placeholder: i === 0 ? 'Change sheets, ...' : 'Amenities refill, ...', maxlength: 30, value: task.name, onChange: (e) => {
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
            } })))))), h("ir-dialog", { key: '0062d343ab43ac4acbf190d73d85e07c984f240a', ref: el => (this.dialog = el), label: locales.entries.Lcz_Confirmation, lightDismiss: false }, h("span", { key: '8e4bd53834eb62bfb511f0a539107fa6dfdf1230' }, "This action will reschedule all cleaning tasks. Do you want to continue?"), h("div", { key: 'a691b90beb6b72f29c7f17d85bea86103a33c609', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '6200066b4f78ae06a2b23ea76c6ed7459ddcf83b', size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.selectedCleaningFrequency = (calendar_data.cleaning_frequency ?? housekeeping_store?.hk_criteria?.cleaning_frequencies?.[0])?.code ?? null;
                this.dialog.closeModal();
            } }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: 'c36eaa12487180df9ca217c5ed9c4bc627f9bb57', size: "m", appearance: "filled", variant: "brand", loading: isRequestPending('/Set_Exposed_Cleaning_Frequency'), onClickHandler: () => this.saveCleaningFrequency() }, locales.entries.Lcz_Confirm)))));
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
