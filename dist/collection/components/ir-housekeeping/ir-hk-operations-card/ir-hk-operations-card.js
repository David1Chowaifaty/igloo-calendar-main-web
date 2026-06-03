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
        return (h(Host, { key: 'c446f929ce92e49ecec3f1fe247884bebe716a83' }, h("wa-card", { key: 'de6e3b6b541e893b0b6578f09a27ff203e6703df', class: "" }, h("div", { key: '613d21940bf80781fa5c1fa54d9a637ea6ff02a6', slot: "header" }, h("span", { key: '1834e020f4dad4db41083c9c8a0732b2b2ba768d', class: "ops-header__title" }, "Operations Settings")), h("div", { key: '5beaf9fba3215789b31c24b047c639560a136f6a', class: "ops-settings" }, h("div", { key: 'e70c2cb3d5420cf476c4505d4f40eea5d97c9115', class: "ops-setting-item" }, h("div", { key: '9bb02e1d87addb09ac2becf32f400fa40e1eba41', class: "ops-setting-item__info" }, h("span", { key: '5f174d3fc9db5f4adb39e25ffcbf0a5cb3f30d0a', class: "ops-setting-item__title" }, "Automatic Check-in & Check-out"), h("span", { key: '5991f956e14f8362aa46310e83c7c36083a16c4d', class: "ops-setting-item__subtitle" }, "Process guests automatically based on property rules")), h("div", { key: 'f070a5dc79a653adb93a09ba8de906f4bcd2ae6f', class: "ops-setting-item__controls" }, h("wa-select", { key: '6138922efecf0dfcfc5c69f05a59a40fb8bdd52c', size: "small", style: { minWidth: '260px' }, value: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', defaultValue: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onchange: (e) => this.saveAutomaticCheckInCheckout(e) }, h("wa-option", { key: '55d4934b45c5d7ed59d885bbda69cc139b10679b', value: "auto" }, locales.entries.Lcz_YesAsPerPropertyPolicy), h("wa-option", { key: 'b8c5c2283885dc2c7431b8ae06e7e5057f630d32', value: "manual" }, locales.entries.Lcz_NoIWillDoItManually))))), h("div", { key: 'ac5a4ceead028f079308d3e240460dc7fc7282e6', class: "ops-tasks__header" }, h("p", { key: '60e34236ec3a639c976c99b0f7c349caf0d73695', class: "ops-tasks__title" }, "Recurring Tasks"), h("p", { key: '4813ff4c6fde50478e376d50441c5b3676fc1ac5', class: "ops-tasks__subtitle" }, "Define your housekeeping tasks and frequency")), h("div", { key: '2404ccff82679a583d5d9b79060673e130b14843', class: "ops-tasks__list" }, h("div", { key: '3159bf650f68224648b604d2411cee1a26ac422d', class: "ops-task-row ops-task-row--locked" }, h("wa-badge", { key: '232bf92de4a8dc25d0b5b0054b6e35aa0923ef54', variant: "danger", appearance: "filled" }, "CL"), h("span", { key: '0cd8f20901af006409322d0ce0a968d022c810c6', class: "ops-task-locked-label" }, "Cleaning"), h("wa-select", { key: '6df84585ea1c109317fe0073e780d41ddbafb70e', class: "ops-task-select", size: "small", value: this.selectedCleaningFrequency, defaultValue: this.selectedCleaningFrequency, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedCleaningFrequency = e.target.value;
                this.dialog.openModal();
            } }, housekeeping_store?.hk_criteria?.cleaning_frequencies.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description)))), h("span", { key: 'fb3e13c94210a8c6dc0c0c424421d098c347ebef' })), this.hkTasks.map((task, i) => (h("div", { key: i, class: "ops-task-row" }, h("wa-badge", { variant: i === 0 ? 'success' : 'brand', appearance: "filled" }, "T", i + 1), h("ir-input", { class: "ops-task-input", size: "small", placeholder: i === 0 ? 'Change sheets, ...' : 'Amenities refill, ...', maxlength: 30, value: task.name, onChange: (e) => {
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
            } })))))), h("ir-dialog", { key: '005b76dae8644d4577aa1fd94b39b6f5dbbd77ea', ref: el => (this.dialog = el), label: locales.entries.Lcz_Confirmation, lightDismiss: false }, h("span", { key: 'f78f19829a2d1b1d95fb6da1412ac75329a62a89' }, "This action will reschedule all cleaning tasks. Do you want to continue?"), h("div", { key: 'deaea9572543f97fb462676b3614a8d3e4055e62', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '36b752d2d35b7072f8a4c236fee7d054a210f940', size: "medium", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.selectedCleaningFrequency = (calendar_data.cleaning_frequency ?? housekeeping_store?.hk_criteria?.cleaning_frequencies?.[0])?.code ?? null;
                this.dialog.closeModal();
            } }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '648ddab3d54eca68017e70b86c67d5ab25f3ffaf', size: "medium", appearance: "filled", variant: "brand", loading: isRequestPending('/Set_Exposed_Cleaning_Frequency'), onClickHandler: () => this.saveCleaningFrequency() }, locales.entries.Lcz_Confirm)))));
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
