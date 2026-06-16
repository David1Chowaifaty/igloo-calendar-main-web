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
        return (h(Host, { key: 'cb7949e45bb9c31e5c2bd496419fe2d41b81c690' }, h("wa-card", { key: 'a740aac59798d986929c3c9b1efe15883e08698b', class: "" }, h("div", { key: 'eb9947ba6d0005325c85d3f1bb83b2a4e5028d8c', slot: "header" }, h("span", { key: 'cb7f0850ae899c1b08ab70551ac24d155cb6aab0', class: "ops-header__title" }, "Operations Settings")), h("div", { key: '9a6ae0dfaede74fa2f9637000f54b1d636cad70c', class: "ops-settings" }, h("div", { key: '95d34934b3dc807da0a42c6c5a899db6cf29b03e', class: "ops-setting-item" }, h("div", { key: '6c646b7a55f384f62251d3ecb1249042b59e5b43', class: "ops-setting-item__info" }, h("span", { key: 'f62b8c145f4cc44bf8b795f784a017ff88a7bda1', class: "ops-setting-item__title" }, "Automatic Check-in & Check-out"), h("span", { key: '630735196e423897b7530ee22c7af5df02453d36', class: "ops-setting-item__subtitle" }, "Process guests automatically based on property rules")), h("div", { key: '5dbae5f387f77dc8b9ded0b2d2774f7777ea6d22', class: "ops-setting-item__controls" }, h("wa-select", { key: 'c3d771bd727b20dc2128f5391a7f111853e537b7', size: "small", style: { minWidth: '260px' }, value: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', defaultValue: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onchange: (e) => this.saveAutomaticCheckInCheckout(e) }, h("wa-option", { key: '7b85c90e6ea6c47123e9ee66c0af135a6c5e88ab', value: "auto" }, locales.entries.Lcz_YesAsPerPropertyPolicy), h("wa-option", { key: '9e66c4cdf83d46833746bfb1b4ad9005169b0dfe', value: "manual" }, locales.entries.Lcz_NoIWillDoItManually))))), h("div", { key: 'd11f659af86fcae6259e58eefc311c563b774833', class: "ops-tasks__header" }, h("p", { key: '5cebda8b45b820446a3099b24e562c68077ff85b', class: "ops-tasks__title" }, "Recurring Tasks"), h("p", { key: '2796af24f0b3cb91edcf43cf7733c9fe4e090fcf', class: "ops-tasks__subtitle" }, "Define your housekeeping tasks and frequency")), h("div", { key: 'cb3c643241b74ab96153c8110ad12a544ef86c00', class: "ops-tasks__list" }, h("div", { key: '6977049b97c55f45b56531334a0d8ca6eec35bd7', class: "ops-task-row ops-task-row--locked" }, h("wa-badge", { key: 'a1f253d60ac16c3220bfa0d87292f767fe575912', variant: "danger", appearance: "filled" }, "CL"), h("span", { key: '2ca88e313cad658107b06490903db3c283cb1f43', class: "ops-task-locked-label" }, "Cleaning"), h("wa-select", { key: '413dc5140018e9a9688eda43aeb3948317f1311f', class: "ops-task-select", size: "small", value: this.selectedCleaningFrequency, defaultValue: this.selectedCleaningFrequency, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedCleaningFrequency = e.target.value;
                this.dialog.openModal();
            } }, housekeeping_store?.hk_criteria?.cleaning_frequencies.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description)))), h("span", { key: '99f8be0d7ecbdc74137535643cb56af97e8e3ddb' })), this.hkTasks.map((task, i) => (h("div", { key: i, class: "ops-task-row" }, h("wa-badge", { variant: i === 0 ? 'success' : 'brand', appearance: "filled" }, "T", i + 1), h("ir-input", { class: "ops-task-input", size: "small", placeholder: i === 0 ? 'Change sheets, ...' : 'Amenities refill, ...', maxlength: 30, value: task.name, onChange: (e) => {
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
            } })))))), h("ir-dialog", { key: '3058a7f89f0140ade23dd41c2adb6c1e8b802d1d', ref: el => (this.dialog = el), label: locales.entries.Lcz_Confirmation, lightDismiss: false }, h("span", { key: '517cf569fae0ca20182fe0bb276c0e4b2a4036aa' }, "This action will reschedule all cleaning tasks. Do you want to continue?"), h("div", { key: 'c99410bdd6c0936b1a45d603e5d6d4af7791303e', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '259a5174246be365f6b8a23ba94cf1281b39d979', size: "medium", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.selectedCleaningFrequency = (calendar_data.cleaning_frequency ?? housekeeping_store?.hk_criteria?.cleaning_frequencies?.[0])?.code ?? null;
                this.dialog.closeModal();
            } }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '5fd321a284c16078746175411b5f8e9c9427c01d', size: "medium", appearance: "filled", variant: "brand", loading: isRequestPending('/Set_Exposed_Cleaning_Frequency'), onClickHandler: () => this.saveCleaningFrequency() }, locales.entries.Lcz_Confirm)))));
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
