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
        return (h(Host, { key: 'bafbbc675f23a63f27271734389f035dd78f101e' }, h("wa-card", { key: '08c893270b8cbfa8ed251c7b6f7cb81c336bba1c', class: "" }, h("div", { key: '6302637db10c8de36380565b17d180d13fdc8f33', slot: "header" }, h("span", { key: '0d44db1df033a3bb9791d827804a685201a8f000', class: "ops-header__title" }, "Operations Settings")), h("div", { key: 'de6872093068ccbbffbd42f67563fc08d058d426', class: "ops-settings" }, h("div", { key: '54bcf8c44a33acf9a739c65772ae3da932c2e952', class: "ops-setting-item" }, h("div", { key: '7af4dbd650a30866872fd4a4cf1325d41765fab8', class: "ops-setting-item__info" }, h("span", { key: '2e463c39fa2ea9791ea33b1096583704e59e9df2', class: "ops-setting-item__title" }, "Automatic Check-in & Check-out"), h("span", { key: 'ee48b2982723a6da5ab5b7b4ac7fc75805af6175', class: "ops-setting-item__subtitle" }, "Process guests automatically based on property rules")), h("div", { key: 'a06c7a8a124c2c3736c1bd62a84c5d75c00612c3', class: "ops-setting-item__controls" }, h("wa-select", { key: '448749a3870620633ead2f5912ce09f06570dae8', size: "small", style: { minWidth: '260px' }, value: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', defaultValue: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onchange: (e) => this.saveAutomaticCheckInCheckout(e) }, h("wa-option", { key: 'dcd69b09359955948d67a1d32692c7efb7b1b03f', value: "auto" }, locales.entries.Lcz_YesAsPerPropertyPolicy), h("wa-option", { key: 'e525dab32752d6fd22c784ac7a331d40f227b02e', value: "manual" }, locales.entries.Lcz_NoIWillDoItManually))))), h("div", { key: 'bfc9d390cc5b976a03a6d8da251774fa3cc84aa1', class: "ops-tasks__header" }, h("p", { key: '96a8721b55785466d6b73558a8cd91285d34b475', class: "ops-tasks__title" }, "Recurring Tasks"), h("p", { key: '19272e95ee903018e9c7225b6c095ae73d5b158f', class: "ops-tasks__subtitle" }, "Define your housekeeping tasks and frequency")), h("div", { key: '9a195dab7bdbf371160b33e75dc6a0e92b5d79d7', class: "ops-tasks__list" }, h("div", { key: '4a3c3e1768080e99e3fb1dcd7cae4ef9f43bb2b3', class: "ops-task-row ops-task-row--locked" }, h("wa-badge", { key: 'c7af1d5245f6cada3fa12bee6405fdcf779d40e2', variant: "danger", appearance: "filled" }, "CL"), h("span", { key: '9c6e3d06d52207e83acfa42d4d7653f212ec5b42', class: "ops-task-locked-label" }, "Cleaning"), h("wa-select", { key: 'b4b57fa1343c3319794a6e91cde66241fc02ceec', class: "ops-task-select", size: "small", value: this.selectedCleaningFrequency, defaultValue: this.selectedCleaningFrequency, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedCleaningFrequency = e.target.value;
                this.dialog.openModal();
            } }, housekeeping_store?.hk_criteria?.cleaning_frequencies.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description)))), h("span", { key: '6bd0178c2b7f1b72bbd8e2d10d21fde5da94ba9f' })), this.hkTasks.map((task, i) => (h("div", { key: i, class: "ops-task-row" }, h("wa-badge", { variant: i === 0 ? 'success' : 'brand', appearance: "filled" }, "T", i + 1), h("ir-input", { class: "ops-task-input", size: "small", placeholder: i === 0 ? 'Change sheets, ...' : 'Amenities refill, ...', maxlength: 30, value: task.name, onChange: (e) => {
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
            } })))))), h("ir-dialog", { key: '5f85c92982bfc1f07cf034fd1361e0fbeaa2dd36', ref: el => (this.dialog = el), label: locales.entries.Lcz_Confirmation, lightDismiss: false }, h("span", { key: 'ff64ada9c62e132bb88be986fcae0e5ae9045749' }, "This action will reschedule all cleaning tasks. Do you want to continue?"), h("div", { key: '40252d011592933592c3578be02216ef6019497f', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'cfe83e218a6417e1005ce6eda19a0907542aab47', size: "medium", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.selectedCleaningFrequency = (calendar_data.cleaning_frequency ?? housekeeping_store?.hk_criteria?.cleaning_frequencies?.[0])?.code ?? null;
                this.dialog.closeModal();
            } }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '97e95b3507285b00f140fdcb78e2df45781e8d77', size: "medium", appearance: "filled", variant: "brand", loading: isRequestPending('/Set_Exposed_Cleaning_Frequency'), onClickHandler: () => this.saveCleaningFrequency() }, locales.entries.Lcz_Confirm)))));
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
