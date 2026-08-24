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
        return (h(Host, { key: '14e3aa7a904a92c5224919c492306bc534f3064d' }, h("wa-card", { key: 'e7116b47bdc60757c6df70022e28dcc534fce35f', appearance: "plain", class: "hk-operation__card" }, h("div", { key: '0e5ec2e4fcaf371878d776f8d26000e9ab8b31bc', slot: "header" }, h("span", { key: '0c160c5bf44a602da3afa46190334a32eac3b79a', class: "ops-header__title" }, "Operations Settings")), h("div", { key: 'a2366086feb56036ca1b2eb99ff013158d34a9d0', class: "ops-settings" }, h("div", { key: '3110749c4153d1f2934953b8db80309b5db79dff', class: "ops-setting-item" }, h("div", { key: 'f6151ff1157b4c93b626af128ef6b6b1b8936992', class: "ops-setting-item__info" }, h("span", { key: 'aaf772175a5182009b3c98fbd1a03e688a65f2c4', class: "ops-setting-item__title" }, "Automatic Check-in & Check-out"), h("span", { key: 'd094afe2651c3f23c1f3b49d28c271daf9efdcbf', class: "ops-setting-item__subtitle" }, "Process guests automatically based on property rules")), h("div", { key: '821980b521c83842686a78815e8b97253f291b6d', class: "ops-setting-item__controls" }, h("wa-select", { key: '3d3caf93212efcad8aa48dd13507d1b72ddf961f', size: "s", style: { minWidth: '260px' }, value: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', defaultValue: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onchange: (e) => this.saveAutomaticCheckInCheckout(e) }, h("wa-option", { key: '3f07c3788e7c943a917bb3f1243d69e35efac086', value: "auto" }, locales.entries.Lcz_YesAsPerPropertyPolicy), h("wa-option", { key: '1691fbac80c98e25388c8d6bddb01c93b0aa0943', value: "manual" }, locales.entries.Lcz_NoIWillDoItManually))))), h("div", { key: '5ba3734449d456ad2adc8330a4a3d392f8e3d7c2', class: "ops-tasks__header" }, h("p", { key: '4ce651b6c9daba60bd0e3b21d4b14aa63a208c92', class: "ops-tasks__title" }, "Recurring Tasks"), h("p", { key: '8f868482f601d11c99828705b459663199030aea', class: "ops-tasks__subtitle" }, "Define your housekeeping tasks and frequency")), h("div", { key: '2f1c4bb14cdf38c08fa3f8d7923b5597fbd18910', class: "ops-tasks__list" }, h("div", { key: 'c8c11a2f8c4dab9041c4fa756971fcbede2ff523', class: "ops-task-row ops-task-row--locked" }, h("wa-badge", { key: '2baf96f4f63e3cae2d2dd56ae47566dd502c7175', variant: "danger", appearance: "filled" }, "CL"), h("span", { key: 'abf177174309621ad26a668c77731b5d6decc25c', class: "ops-task-locked-label" }, "Cleaning"), h("wa-select", { key: '6fafee7e0f3b63887944eb11806bbb75fd99f5b7', class: "ops-task-select", size: "s", value: this.selectedCleaningFrequency, defaultValue: this.selectedCleaningFrequency, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedCleaningFrequency = e.target.value;
                this.dialog.openModal();
            } }, housekeeping_store?.hk_criteria?.cleaning_frequencies.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description)))), h("span", { key: 'bfd005542f7228b24e116efbfb857e252d007761' })), this.hkTasks.map((task, i) => (h("div", { key: i, class: "ops-task-row" }, h("wa-badge", { variant: i === 0 ? 'success' : 'brand', appearance: "filled" }, "T", i + 1), h("ir-input", { class: "ops-task-input", size: "s", placeholder: i === 0 ? 'Change sheets, ...' : 'Amenities refill, ...', maxlength: 30, value: task.name, onChange: (e) => {
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
            } })))))), h("ir-dialog", { key: 'a3b5cfc3676f4409bbe32bde7f78b9a2f548174d', ref: el => (this.dialog = el), label: locales.entries.Lcz_Confirmation, lightDismiss: false }, h("span", { key: '77d355896db930498967d728d84e4a00f8076ba2' }, "This action will reschedule all cleaning tasks. Do you want to continue?"), h("div", { key: 'b6f0f40e3b52e3f54cca9c4f6580a7ab8cff6a57', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '1ce5c8fc2881450e0d3801e446d3f22a4b117953', size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.selectedCleaningFrequency = (calendar_data.cleaning_frequency ?? housekeeping_store?.hk_criteria?.cleaning_frequencies?.[0])?.code ?? null;
                this.dialog.closeModal();
            } }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '49e1cd1f64d12fcee6a83555491fe738c9fbf00e', size: "m", appearance: "filled", variant: "brand", loading: isRequestPending('/Set_Exposed_Cleaning_Frequency'), onClickHandler: () => this.saveCleaningFrequency() }, locales.entries.Lcz_Confirm)))));
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
