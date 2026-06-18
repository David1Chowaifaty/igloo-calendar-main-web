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
        return (h(Host, { key: '449657b64b3caf8ebba6ff0be9947772b177c7d8' }, h("wa-card", { key: '52ed5ebb4b838b0fe67efd2576a48e7c724520ad', class: "" }, h("div", { key: '70cdc8348b7f815c20ce2b90db7e7561c50d3895', slot: "header" }, h("span", { key: '0a8698a304a5db62e676c7f21f820a1a0bd6efbb', class: "ops-header__title" }, "Operations Settings")), h("div", { key: 'c85141b9e8a364e372d6e80da1846032aacae673', class: "ops-settings" }, h("div", { key: 'b810c6aecbc02e8180e1b630d93fc0256eac8908', class: "ops-setting-item" }, h("div", { key: '5cdfb72a5a6bd78a37381c380d2366f217f7d5f6', class: "ops-setting-item__info" }, h("span", { key: '4b7bb5ee00cdcefd34f61f7a37281e1e863c7c34', class: "ops-setting-item__title" }, "Automatic Check-in & Check-out"), h("span", { key: '6570b73c013a56258e1cee9b7ba64b18b8064f0b', class: "ops-setting-item__subtitle" }, "Process guests automatically based on property rules")), h("div", { key: '0b4f6ab1793e7a26f10274fde2bd38709e97c24e', class: "ops-setting-item__controls" }, h("wa-select", { key: '9bbea912e9cd934e8165ac17db0cd740e7ec8aff', size: "s", style: { minWidth: '260px' }, value: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', defaultValue: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onchange: (e) => this.saveAutomaticCheckInCheckout(e) }, h("wa-option", { key: '8c837787a7b5977e03499ee79f729f1be94e0e53', value: "auto" }, locales.entries.Lcz_YesAsPerPropertyPolicy), h("wa-option", { key: '297b1999d609ec138b40e23f8e728007a3e8d321', value: "manual" }, locales.entries.Lcz_NoIWillDoItManually))))), h("div", { key: 'cbf7280b58984de6b6b15341f1d37119b58fb022', class: "ops-tasks__header" }, h("p", { key: '9d0fcf3ce218520974a83c256467a8afc2085811', class: "ops-tasks__title" }, "Recurring Tasks"), h("p", { key: 'b3a913b31e351147dd4527ac9c787b60994542e2', class: "ops-tasks__subtitle" }, "Define your housekeeping tasks and frequency")), h("div", { key: '21c051b3e5026bb7b78f14bff8ddd5c9133c2355', class: "ops-tasks__list" }, h("div", { key: 'f28abec5ebeef59eafe11f79f125ed96094b956b', class: "ops-task-row ops-task-row--locked" }, h("wa-badge", { key: '42844de490fb5ab5b8558735df81220747d55562', variant: "danger", appearance: "filled" }, "CL"), h("span", { key: 'e766b1933923a654562e8e4192ea01a4629f6d88', class: "ops-task-locked-label" }, "Cleaning"), h("wa-select", { key: 'c16c1ac06b2b50882dd42065157bd50d74bd210f', class: "ops-task-select", size: "s", value: this.selectedCleaningFrequency, defaultValue: this.selectedCleaningFrequency, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedCleaningFrequency = e.target.value;
                this.dialog.openModal();
            } }, housekeeping_store?.hk_criteria?.cleaning_frequencies.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description)))), h("span", { key: '51aa62335bb7fbc094ed4eed0cc22d0c81ecb1c3' })), this.hkTasks.map((task, i) => (h("div", { key: i, class: "ops-task-row" }, h("wa-badge", { variant: i === 0 ? 'success' : 'brand', appearance: "filled" }, "T", i + 1), h("ir-input", { class: "ops-task-input", size: "s", placeholder: i === 0 ? 'Change sheets, ...' : 'Amenities refill, ...', maxlength: 30, value: task.name, onChange: (e) => {
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
            } })))))), h("ir-dialog", { key: 'a8752a77b1f1d157f14494d4e077fb21d71d827e', ref: el => (this.dialog = el), label: locales.entries.Lcz_Confirmation, lightDismiss: false }, h("span", { key: '4264c4437ebaf517473e3f1edc58a781af2a3d24' }, "This action will reschedule all cleaning tasks. Do you want to continue?"), h("div", { key: '4b1906012910e15982b0f4f178324827b380391d', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'b35d95c668da34202f26210cf20f0a8c98fe7f72', size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.selectedCleaningFrequency = (calendar_data.cleaning_frequency ?? housekeeping_store?.hk_criteria?.cleaning_frequencies?.[0])?.code ?? null;
                this.dialog.closeModal();
            } }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: 'ad70e49bc9ef7edd339b44e38583154aa02b8029', size: "m", appearance: "filled", variant: "brand", loading: isRequestPending('/Set_Exposed_Cleaning_Frequency'), onClickHandler: () => this.saveCleaningFrequency() }, locales.entries.Lcz_Confirm)))));
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
