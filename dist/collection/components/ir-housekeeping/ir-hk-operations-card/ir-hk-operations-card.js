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
        return (h(Host, { key: '48ce5c9f52618d940627e7e542c6dc7a91ceacdd' }, h("wa-card", { key: 'ffcaadd6e4ac7401b5c0f5a61493575a5eb96e99', class: "" }, h("div", { key: '93ebe598af8cab088643efcbfff476ce29d7a0ed', slot: "header" }, h("span", { key: '07885e6f0534bd5f83ff59f46a13756869779b29', class: "ops-header__title" }, "Operations Settings")), h("div", { key: 'cff7c617523a23f46240bfb22960cf3541b6d13a', class: "ops-settings" }, h("div", { key: '96da0e488176e4b009f2d43825cb39da7d6e393c', class: "ops-setting-item" }, h("div", { key: '9fa5c16667a5858b49bb8740ab265c8f22f29cbf', class: "ops-setting-item__info" }, h("span", { key: '8dcbea39faae759ca6a89bdf071508db0b80adb9', class: "ops-setting-item__title" }, "Automatic Check-in & Check-out"), h("span", { key: '715fad10502f4d0d4b2d6828fd8d0832217e905c', class: "ops-setting-item__subtitle" }, "Process guests automatically based on property rules")), h("div", { key: 'a0ffe734537c30871d8945c39d253ce3449a6e15', class: "ops-setting-item__controls" }, h("wa-select", { key: '2b6fbb8faef31a19d22b6fc391b25ffdc06474bd', size: "small", style: { minWidth: '260px' }, value: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', defaultValue: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onchange: (e) => this.saveAutomaticCheckInCheckout(e) }, h("wa-option", { key: '231e5f1fddfe489d8690760dab5a7823c1147681', value: "auto" }, locales.entries.Lcz_YesAsPerPropertyPolicy), h("wa-option", { key: 'e76cf139e1791c48fc42c2cee39bdbd6a6bb5c37', value: "manual" }, locales.entries.Lcz_NoIWillDoItManually))))), h("div", { key: '0cce0dc0eeac9ab76836a756975577df284544f1', class: "ops-tasks__header" }, h("p", { key: '20d5467fa553e5839e1bc91f1896120ccb906226', class: "ops-tasks__title" }, "Recurring Tasks"), h("p", { key: 'd9a35e522d73c5970b4f10dcded756f45fb39881', class: "ops-tasks__subtitle" }, "Define your housekeeping tasks and frequency")), h("div", { key: '72e50c3657c6f5155107ee5c3b26f3ce735e8355', class: "ops-tasks__list" }, h("div", { key: '2bcc50b6ffb5f02f668db72843c449c5da23c3de', class: "ops-task-row ops-task-row--locked" }, h("wa-badge", { key: 'b6ad9b63f109d9006ebc99b6edf6d611253bad9c', variant: "danger", appearance: "filled" }, "CL"), h("span", { key: 'aeaa9864c0d811ddebd73de39e423e2d8519b45f', class: "ops-task-locked-label" }, "Cleaning"), h("wa-select", { key: '73bbaf56fd8f4b94134cf1073940d8061d8995e3', class: "ops-task-select", size: "small", value: this.selectedCleaningFrequency, defaultValue: this.selectedCleaningFrequency, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedCleaningFrequency = e.target.value;
                this.dialog.openModal();
            } }, housekeeping_store?.hk_criteria?.cleaning_frequencies.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description)))), h("span", { key: 'b44534e0dca18e61631d84dc5fe83a71d8a49289' })), this.hkTasks.map((task, i) => (h("div", { key: i, class: "ops-task-row" }, h("wa-badge", { variant: i === 0 ? 'success' : 'brand', appearance: "filled" }, "T", i + 1), h("ir-input", { class: "ops-task-input", size: "small", placeholder: i === 0 ? 'Change sheets, ...' : 'Amenities refill, ...', maxlength: 30, value: task.name, onChange: (e) => {
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
            } })))))), h("ir-dialog", { key: 'aad9b9e6a77280fa8fafb1fae76374acee4f8de2', ref: el => (this.dialog = el), label: locales.entries.Lcz_Confirmation, lightDismiss: false }, h("span", { key: '23d03432cbce5976f8ee884ab59cb4721ac4f858' }, "This action will reschedule all cleaning tasks. Do you want to continue?"), h("div", { key: '1a014c332c1cc45656d0428ddceb8a05a4302fe3', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'b62c34a4e95f7d93422866cf81996b68e8bf317e', size: "medium", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.selectedCleaningFrequency = (calendar_data.cleaning_frequency ?? housekeeping_store?.hk_criteria?.cleaning_frequencies?.[0])?.code ?? null;
                this.dialog.closeModal();
            } }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: 'a06a94ab497d79a621c9a11d78e05b088acf6eb1', size: "medium", appearance: "filled", variant: "brand", loading: isRequestPending('/Set_Exposed_Cleaning_Frequency'), onClickHandler: () => this.saveCleaningFrequency() }, locales.entries.Lcz_Confirm)))));
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
