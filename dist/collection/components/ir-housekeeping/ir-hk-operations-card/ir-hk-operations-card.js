import { RoomService } from "../../../services/room.service";
import { PropertyService } from "../../../services/property.service";
import { HouseKeepingService } from "../../../services/housekeeping.service";
import calendar_data from "../../../stores/calendar-data";
import housekeeping_store from "../../../stores/housekeeping.store";
import { isRequestPending } from "../../../stores/ir-interceptor.store";
import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
export class IrHkOperationsCard {
    frequencies = [];
    hkTasks = [
        { name: '', frequency: '' },
        { name: '', frequency: '' },
    ];
    selectedCleaningFrequency = null;
    toast;
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
            this.toast.emit({ position: 'top-right', title: 'Saved Successfully', description: '', type: 'success' });
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
            this.toast.emit({ position: 'top-right', title: 'Saved Successfully', description: '', type: 'success' });
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
            this.toast.emit({ position: 'top-right', title: 'Saved Successfully', description: '', type: 'success' });
        }
        catch (error) {
            console.log(error);
        }
    }
    render() {
        return (h(Host, { key: 'd42e3c693c08d4522a8f063024e74b8040f1f1b2' }, h("wa-card", { key: 'a19acbef8d2f5f1394ace0051cbb559454b570e6', class: "" }, h("div", { key: 'a5be19ccf3c9e52e825e76a2399403acd8502d10', slot: "header" }, h("span", { key: '8f0d5b135a59df34712446718294ea7881ad6773', class: "ops-header__title" }, "Operations Settings")), h("div", { key: '77d7870c45bf56c8a5f9448c45e91c5c779b7982', class: "ops-settings" }, h("div", { key: '83ea1ceb5c782eb4de9d128e3927bb6d5a5d3a42', class: "ops-setting-item" }, h("div", { key: '24928dd650f79114c02baf0d02fda8472de91cbe', class: "ops-setting-item__info" }, h("span", { key: '1467c9347ad6ad817ccbd9cf2d10e1ed5620ed16', class: "ops-setting-item__title" }, "Automatic Check-in & Check-out"), h("span", { key: 'a75cac9f6c2f07fc4f9132ffe0977fbf66a1c92f', class: "ops-setting-item__subtitle" }, "Process guests automatically based on property rules")), h("div", { key: 'c33dc4f03b4cb3289a8ba57f3796e557867a6a4d', class: "ops-setting-item__controls" }, h("wa-select", { key: '33342bf9aa1d0667d3ea0aa90b37b61f67782cdb', size: "small", style: { minWidth: '260px' }, value: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', defaultValue: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onchange: (e) => this.saveAutomaticCheckInCheckout(e) }, h("wa-option", { key: '0345fe6c0b4ade9222c2b4c78289b90d7dc36544', value: "auto" }, locales.entries.Lcz_YesAsPerPropertyPolicy), h("wa-option", { key: 'ca95f9a5d42f0adfeec4ce7e2ecbc1874855d4e0', value: "manual" }, locales.entries.Lcz_NoIWillDoItManually))))), h("div", { key: '2ce462f18052f4bfb486e7d42f21516e25a61f9d', class: "ops-tasks__header" }, h("p", { key: '8b31b2e7c6427d0e97969306227776f4bf23538a', class: "ops-tasks__title" }, "Recurring Tasks"), h("p", { key: 'e52c94af37918b3df77d767c889dcb4b3b8c3e80', class: "ops-tasks__subtitle" }, "Define your housekeeping tasks and frequency")), h("div", { key: '7f4dbe288c8a8580c8de6fa8d7764e113b3de233', class: "ops-tasks__list" }, h("div", { key: '2f68f9819cb8d24d3f34e3940a81e3bbadb2b49e', class: "ops-task-row ops-task-row--locked" }, h("wa-badge", { key: '5109d8b4f9a9382f68fc5781e4619c1ace297029', variant: "danger", appearance: "filled" }, "CL"), h("span", { key: '2fc343295733c7674f2e83cafd299aa86c26d98a', class: "ops-task-locked-label" }, "Cleaning"), h("wa-select", { key: '9b2de7d650419e61d52c8be4143e3e7b93fec7e8', class: "ops-task-select", size: "small", value: this.selectedCleaningFrequency, defaultValue: this.selectedCleaningFrequency, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedCleaningFrequency = e.target.value;
                this.dialog.openModal();
            } }, housekeeping_store?.hk_criteria?.cleaning_frequencies.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description)))), h("span", { key: '9ba5480b4b2c31071fa9e8d064a9318dbb48fce5' })), this.hkTasks.map((task, i) => (h("div", { key: i, class: "ops-task-row" }, h("wa-badge", { variant: i === 0 ? 'success' : 'brand', appearance: "filled" }, "T", i + 1), h("ir-input", { class: "ops-task-input", size: "small", placeholder: i === 0 ? 'Change sheets, ...' : 'Amenities refill, ...', maxlength: 30, value: task.name, onChange: (e) => {
                const updated = [...this.hkTasks];
                updated[i] = { ...updated[i], name: e.target.value };
                this.hkTasks = updated;
                this.saveHkTasks();
            } }), h("wa-select", { class: "ops-task-select", size: "small", value: task.frequency, defaultValue: task.frequency, placeholder: "Frequency", onchange: (e) => {
                const updated = [...this.hkTasks];
                updated[i] = { ...updated[i], frequency: e.target.value };
                this.hkTasks = updated;
                this.saveHkTasks();
            } }, this.frequencies.map(f => (h("wa-option", { key: f.CODE_NAME, value: f.CODE_NAME }, f.CODE_VALUE_EN)))), h("wa-icon-button", { class: "ops-task-delete", name: "xmark", label: "Remove task", onClick: () => {
                const updated = [...this.hkTasks];
                updated[i] = { name: '', frequency: '' };
                this.hkTasks = updated;
                this.saveHkTasks();
            } })))))), h("ir-dialog", { key: '0301e4a77c8d1f0c6afac3d5073e97209b0ac763', ref: el => (this.dialog = el), label: locales.entries.Lcz_Confirmation, lightDismiss: false }, h("span", { key: '9d82dc1ec48027c8e84256aaeca76606989acaf7' }, "This action will reschedule all cleaning tasks. Do you want to continue?"), h("div", { key: 'e651f0378eedb45fc3fba2a16b885921e9d7c70f', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '9750442c3c9f0c529b17fba599a1d7ea70da9930', size: "medium", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.selectedCleaningFrequency = (calendar_data.cleaning_frequency ?? housekeeping_store?.hk_criteria?.cleaning_frequencies?.[0])?.code ?? null;
                this.dialog.closeModal();
            } }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: 'a43623eadf37e8e1b425e88f0cf365f9f4ef89a1', size: "medium", appearance: "filled", variant: "brand", loading: isRequestPending('/Set_Exposed_Cleaning_Frequency'), onClickHandler: () => this.saveCleaningFrequency() }, locales.entries.Lcz_Confirm)))));
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
                            "id": "src/models/IBooking.ts::IEntries"
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
    static get events() {
        return [{
                "method": "toast",
                "name": "toast",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "IToast",
                    "resolved": "ICustomToast & Partial<IToastWithButton> | IDefaultToast & Partial<IToastWithButton>",
                    "references": {
                        "IToast": {
                            "location": "import",
                            "path": "@components/ui/ir-toast/toast",
                            "id": "src/components/ui/ir-toast/toast.ts::IToast"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=ir-hk-operations-card.js.map
