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
        return (h(Host, { key: '05c76cd7fa6a5958c9e60b0ef698a62f7225e67a' }, h("wa-card", { key: '1a837ca6041cc6d3cb5887def7544187de0b09ac', class: "" }, h("div", { key: '1101efddc8ac522e5104a977f9b87a440dc20091', slot: "header" }, h("span", { key: '1813f75e7a4103a19368a80a5da1620e50dcc791', class: "ops-header__title" }, "Operations Settings")), h("div", { key: '8f1d7363fd2f51e7296dc9f7f44587f49f6bc6bf', class: "ops-settings" }, h("div", { key: 'a1aff72889951e48e81a592dc948010e5e345c94', class: "ops-setting-item" }, h("div", { key: '4d924d82b54cfd7079ceb714609e136fc5d26e8e', class: "ops-setting-item__info" }, h("span", { key: '8783687fb6fb134084611d88d9fa773a24bac41b', class: "ops-setting-item__title" }, "Automatic Check-in & Check-out"), h("span", { key: '30eceb2c12e0e062d780e22466fc5aa5daf08baf', class: "ops-setting-item__subtitle" }, "Process guests automatically based on property rules")), h("div", { key: '9badefc15e4c23b29eb5afb6580b4bf9e11607c0', class: "ops-setting-item__controls" }, h("wa-select", { key: 'f92e2afbb7d898d2b30581a6d969dc1cbbd1a36e', size: "small", style: { minWidth: '260px' }, value: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', defaultValue: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onchange: (e) => this.saveAutomaticCheckInCheckout(e) }, h("wa-option", { key: '860a9f7a13f3e98d512e278445ea05a50da3be1f', value: "auto" }, locales.entries.Lcz_YesAsPerPropertyPolicy), h("wa-option", { key: '415815e0455e22accf5c966a4535db3a9b82779c', value: "manual" }, locales.entries.Lcz_NoIWillDoItManually))))), h("div", { key: 'd3a7a8d28d4d852b1549dfbbf27d97c839fa340a', class: "ops-tasks__header" }, h("p", { key: '6df3ff5b047a068466bb24d4697937cf0efd146f', class: "ops-tasks__title" }, "Recurring Tasks"), h("p", { key: 'affbf7fbe0ee2bd24b1eebda97245d3263ed2d5f', class: "ops-tasks__subtitle" }, "Define your housekeeping tasks and frequency")), h("div", { key: '86a9f05aeb89919f560e1746a3642b3cdc87b30e', class: "ops-tasks__list" }, h("div", { key: '6881a8fb6b563725d620f4672a1cc60d81d68537', class: "ops-task-row ops-task-row--locked" }, h("wa-badge", { key: '582ba5a77a784df7ab6c855b34820598f2afeb94', variant: "danger", appearance: "filled" }, "CL"), h("span", { key: 'd2ea1bcbdd6e23e8364ad234a8c9b752ebf262c9', class: "ops-task-locked-label" }, "Cleaning"), h("wa-select", { key: 'af8625b757bbe91fa4b78a0ca22e2d55d9a108ce', class: "ops-task-select", size: "small", value: this.selectedCleaningFrequency, defaultValue: this.selectedCleaningFrequency, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedCleaningFrequency = e.target.value;
                this.dialog.openModal();
            } }, housekeeping_store?.hk_criteria?.cleaning_frequencies.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description)))), h("span", { key: '951e52c143df18779a99106af4da9cc38044fa77' })), this.hkTasks.map((task, i) => (h("div", { key: i, class: "ops-task-row" }, h("wa-badge", { variant: i === 0 ? 'success' : 'brand', appearance: "filled" }, "T", i + 1), h("ir-input", { class: "ops-task-input", size: "small", placeholder: i === 0 ? 'Change sheets, ...' : 'Amenities refill, ...', maxlength: 30, value: task.name, onChange: (e) => {
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
            } })))))), h("ir-dialog", { key: '074f2afc1222108460496686f0a57822da4bd8b9', ref: el => (this.dialog = el), label: locales.entries.Lcz_Confirmation, lightDismiss: false }, h("span", { key: '7f06cc14306223e171db3ffb3cd8f1f33b02ee22' }, "This action will reschedule all cleaning tasks. Do you want to continue?"), h("div", { key: 'c2997314596918185469b84db5368932196fcf20', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'c98c982997f559290a34badddec4acf0d13b9ae7', size: "medium", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.selectedCleaningFrequency = (calendar_data.cleaning_frequency ?? housekeeping_store?.hk_criteria?.cleaning_frequencies?.[0])?.code ?? null;
                this.dialog.closeModal();
            } }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '69e8dae91670cf10de8b30c6ff03331071c5572e', size: "medium", appearance: "filled", variant: "brand", loading: isRequestPending('/Set_Exposed_Cleaning_Frequency'), onClickHandler: () => this.saveCleaningFrequency() }, locales.entries.Lcz_Confirm)))));
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
}
//# sourceMappingURL=ir-hk-operations-card.js.map
