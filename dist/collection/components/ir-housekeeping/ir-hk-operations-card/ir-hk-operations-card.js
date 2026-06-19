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
        return (h(Host, { key: 'f9edeb05f96c2b36356da0ec8a1826463ba9158a' }, h("wa-card", { key: 'e8e1f4bb9c7e0b25ae1186e77be687c939404bcd', class: "" }, h("div", { key: '2f0ec5c34a75869735287f9ab677177174cb56af', slot: "header" }, h("span", { key: 'ae5918c64b5b5b0a2efd9d81e0284e78e34d9265', class: "ops-header__title" }, "Operations Settings")), h("div", { key: '57547debe87dc2f818a809b56ac43ac714c0ade6', class: "ops-settings" }, h("div", { key: '68e705d05b24a60adbd136d7aae7eca99b10a1e5', class: "ops-setting-item" }, h("div", { key: '9ce56510be8769c39bd467f929aa60e4e5186f52', class: "ops-setting-item__info" }, h("span", { key: 'a68333e5dcb8aa4c41d8e29ad3e5059d70c12a8e', class: "ops-setting-item__title" }, "Automatic Check-in & Check-out"), h("span", { key: 'f8489c6d240371eeef15586bdb69ec9cd35e93b0', class: "ops-setting-item__subtitle" }, "Process guests automatically based on property rules")), h("div", { key: 'ccf6a2bfa02e1d787cbc695086054fd4d12213f7', class: "ops-setting-item__controls" }, h("wa-select", { key: '57925c554e9dc7149892807f728a3c8d36e942a5', size: "s", style: { minWidth: '260px' }, value: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', defaultValue: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onchange: (e) => this.saveAutomaticCheckInCheckout(e) }, h("wa-option", { key: '890827027fefa39d78edd26a80a4c034caf7ae05', value: "auto" }, locales.entries.Lcz_YesAsPerPropertyPolicy), h("wa-option", { key: '03d23fd895de55dab0fd5b0d05eea71ad005e0b8', value: "manual" }, locales.entries.Lcz_NoIWillDoItManually))))), h("div", { key: '6b9fc40ea8816385c2a16db3b30c729cea6381af', class: "ops-tasks__header" }, h("p", { key: 'e30dc08a7ccfcdc1a4951ccc37fdc430763a8560', class: "ops-tasks__title" }, "Recurring Tasks"), h("p", { key: '22347cb0520fd3c347ad0055107e40bd55c31272', class: "ops-tasks__subtitle" }, "Define your housekeeping tasks and frequency")), h("div", { key: 'b02f87b93ca408847be31415a1eab9eb9b0a249c', class: "ops-tasks__list" }, h("div", { key: '77a794d430cf61b9dc4edf4d948e08e66a1ab6f0', class: "ops-task-row ops-task-row--locked" }, h("wa-badge", { key: 'd36c4630898ab1cb87f0aff8c89bbd0ef56b3b36', variant: "danger", appearance: "filled" }, "CL"), h("span", { key: 'a71a59601fab1ba48a4ba3d595c3f7afd9a41625', class: "ops-task-locked-label" }, "Cleaning"), h("wa-select", { key: 'e1bb21bbd601107a368b87662cde03743ef6766e', class: "ops-task-select", size: "s", value: this.selectedCleaningFrequency, defaultValue: this.selectedCleaningFrequency, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedCleaningFrequency = e.target.value;
                this.dialog.openModal();
            } }, housekeeping_store?.hk_criteria?.cleaning_frequencies.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description)))), h("span", { key: 'a94a05d26d3f565d9cd4ba27b82b5524d39c0f75' })), this.hkTasks.map((task, i) => (h("div", { key: i, class: "ops-task-row" }, h("wa-badge", { variant: i === 0 ? 'success' : 'brand', appearance: "filled" }, "T", i + 1), h("ir-input", { class: "ops-task-input", size: "s", placeholder: i === 0 ? 'Change sheets, ...' : 'Amenities refill, ...', maxlength: 30, value: task.name, onChange: (e) => {
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
            } })))))), h("ir-dialog", { key: 'c140cad61c2ea47b72b675deb31824258df9e9f7', ref: el => (this.dialog = el), label: locales.entries.Lcz_Confirmation, lightDismiss: false }, h("span", { key: '64932b2f554a3e6fd346c7a3b7a6fbfb13e89e4d' }, "This action will reschedule all cleaning tasks. Do you want to continue?"), h("div", { key: '096c62cb27fdf4293e371acff7192ccced858919', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'adb64f9fa06220f9623665470ac1f3ad7b862eb4', size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.selectedCleaningFrequency = (calendar_data.cleaning_frequency ?? housekeeping_store?.hk_criteria?.cleaning_frequencies?.[0])?.code ?? null;
                this.dialog.closeModal();
            } }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '79ef0cf77bb5279a5606cf06ac8701d44837358e', size: "m", appearance: "filled", variant: "brand", loading: isRequestPending('/Set_Exposed_Cleaning_Frequency'), onClickHandler: () => this.saveCleaningFrequency() }, locales.entries.Lcz_Confirm)))));
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
