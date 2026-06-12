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
        return (h(Host, { key: 'b48560731f9e58d23df1a5f8afc528345a650fb3' }, h("wa-card", { key: 'c647242c222078e499c2a63c8adb05be542ad077', class: "" }, h("div", { key: 'cd517f6dcb82ddb7d317b5a742d59127b34f7a8d', slot: "header" }, h("span", { key: 'abeaa415804c414f55f1aa290c3966be3e4ed8aa', class: "ops-header__title" }, "Operations Settings")), h("div", { key: 'ac81293e2916e81b69ed7b6bab64e475cdae4e86', class: "ops-settings" }, h("div", { key: 'ffcf3b1bcf16c0ff3da1c1e035df47415c65b862', class: "ops-setting-item" }, h("div", { key: '059a885133595bbe10b65308874ecc0112e03d37', class: "ops-setting-item__info" }, h("span", { key: '27a6ff9c01e3b5a5f0f7daa2236bd34af91c64ee', class: "ops-setting-item__title" }, "Automatic Check-in & Check-out"), h("span", { key: 'bf6db230faf2bfb4a4fa4386441a726b36fc92c4', class: "ops-setting-item__subtitle" }, "Process guests automatically based on property rules")), h("div", { key: 'f1f16e05365cd321b96252e12e43cc473407bc6e', class: "ops-setting-item__controls" }, h("wa-select", { key: 'f9c7ac8dbfd5562458ed7f53bd48693437ef9182', size: "small", style: { minWidth: '260px' }, value: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', defaultValue: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onchange: (e) => this.saveAutomaticCheckInCheckout(e) }, h("wa-option", { key: '23a6b757c8c678409b91876ad5581a3751682854', value: "auto" }, locales.entries.Lcz_YesAsPerPropertyPolicy), h("wa-option", { key: '94a0ae981e02f526404ebb979a425d1ff2cc2c5f', value: "manual" }, locales.entries.Lcz_NoIWillDoItManually))))), h("div", { key: '053895949e4f8f80699cb5c830344c6abacd886d', class: "ops-tasks__header" }, h("p", { key: '5e01ed9c7ea5cb623a035df8c20c1ea1a83e293f', class: "ops-tasks__title" }, "Recurring Tasks"), h("p", { key: '3f04789cdac456006f5bf0b0f0afb681c833f0d5', class: "ops-tasks__subtitle" }, "Define your housekeeping tasks and frequency")), h("div", { key: '0ad5e13299f31ee36e1883ae394528c5ecaeda7b', class: "ops-tasks__list" }, h("div", { key: '6f8ecf7f40d1eb3e5cd1ec5d3d33acf23e0c1a9f', class: "ops-task-row ops-task-row--locked" }, h("wa-badge", { key: 'c8854149bb2bba236e7517f1527224c3a23bc5cc', variant: "danger", appearance: "filled" }, "CL"), h("span", { key: 'c2d8e32bc5f8662329c7a89f041262ea43af7aa9', class: "ops-task-locked-label" }, "Cleaning"), h("wa-select", { key: '364d74ff05804c0a1df2793df74a0d1da04693b2', class: "ops-task-select", size: "small", value: this.selectedCleaningFrequency, defaultValue: this.selectedCleaningFrequency, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedCleaningFrequency = e.target.value;
                this.dialog.openModal();
            } }, housekeeping_store?.hk_criteria?.cleaning_frequencies.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description)))), h("span", { key: 'd59ab329bbb44a80a318b7d6a69cebb8e4185709' })), this.hkTasks.map((task, i) => (h("div", { key: i, class: "ops-task-row" }, h("wa-badge", { variant: i === 0 ? 'success' : 'brand', appearance: "filled" }, "T", i + 1), h("ir-input", { class: "ops-task-input", size: "small", placeholder: i === 0 ? 'Change sheets, ...' : 'Amenities refill, ...', maxlength: 30, value: task.name, onChange: (e) => {
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
            } })))))), h("ir-dialog", { key: '63ba827908cdd1058703eda54a5f10fdbf114885', ref: el => (this.dialog = el), label: locales.entries.Lcz_Confirmation, lightDismiss: false }, h("span", { key: 'e727bbe4fcf66c2375e670e559e58d0817fb566e' }, "This action will reschedule all cleaning tasks. Do you want to continue?"), h("div", { key: '59ff7ebe3422723cad2d10b8d4ca3927325fba84', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '869e577865dcf63af7c6ac93c9208cda841ad809', size: "medium", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.selectedCleaningFrequency = (calendar_data.cleaning_frequency ?? housekeeping_store?.hk_criteria?.cleaning_frequencies?.[0])?.code ?? null;
                this.dialog.closeModal();
            } }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: 'ef610ba1e3d2d7f50d265aff2e5ff47eb130c77d', size: "medium", appearance: "filled", variant: "brand", loading: isRequestPending('/Set_Exposed_Cleaning_Frequency'), onClickHandler: () => this.saveCleaningFrequency() }, locales.entries.Lcz_Confirm)))));
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
