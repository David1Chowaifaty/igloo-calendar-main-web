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
        return (h(Host, { key: '697f7d3e694a8642fb5d0f80a72c51dbb033777a' }, h("wa-card", { key: 'c4b56e94c7921bf90eb08b1c5e4fd132ff5526e3', class: "" }, h("div", { key: 'fec7fbe0ef1a35cf3c2083ac47d6e51e3e18fa06', slot: "header" }, h("span", { key: '7cb437a3094fa18ae0836115f059fb13d374db15', class: "ops-header__title" }, "Operations Settings")), h("div", { key: '3b36b0f2f442e75b4657e91be3e35a6ada8ec658', class: "ops-settings" }, h("div", { key: '05da60250d7dea42d3f86e3ace4b173575fc2b9f', class: "ops-setting-item" }, h("div", { key: 'bf68145cde9272c6c982dccc155df3d729010a91', class: "ops-setting-item__info" }, h("span", { key: '439ed5ee1306a457554ddae5814d5ba67c54a224', class: "ops-setting-item__title" }, "Automatic Check-in & Check-out"), h("span", { key: '28365412fed295bfae42eea43c98d1caaf7ddac6', class: "ops-setting-item__subtitle" }, "Process guests automatically based on property rules")), h("div", { key: '82be5e21915b1493e55b6071328fb5f087b49943', class: "ops-setting-item__controls" }, h("wa-select", { key: '557561d82233fdee65dafb775206bea4e5f08892', size: "small", style: { minWidth: '260px' }, value: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', defaultValue: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onchange: (e) => this.saveAutomaticCheckInCheckout(e) }, h("wa-option", { key: '1d634a6caad0b4388299ed071be78b7460dd45eb', value: "auto" }, locales.entries.Lcz_YesAsPerPropertyPolicy), h("wa-option", { key: 'b590c626fabe884b38aa74bf3703041e5dccd777', value: "manual" }, locales.entries.Lcz_NoIWillDoItManually))))), h("div", { key: 'c0461c1b07a0c7e05e648f05de50607c3ff3d5eb', class: "ops-tasks__header" }, h("p", { key: 'e324cfcf59ce2fc4d91510322a60f2c8f01d84c0', class: "ops-tasks__title" }, "Recurring Tasks"), h("p", { key: 'b0139ae254558770147a9f6e7aa848d20784ddc2', class: "ops-tasks__subtitle" }, "Define your housekeeping tasks and frequency")), h("div", { key: '55efcbeac021d94d5e820590a3fb397f63573346', class: "ops-tasks__list" }, h("div", { key: '0c28f3be0140c70d08216789b572a5d865665957', class: "ops-task-row ops-task-row--locked" }, h("wa-badge", { key: '6bb9709581963288d0f238d47e3b135ebf1b9545', variant: "danger", appearance: "filled" }, "CL"), h("span", { key: 'ea62e142cecebf6857e66b5203310a82a22e6bd8', class: "ops-task-locked-label" }, "Cleaning"), h("wa-select", { key: '9e45719a262125dfac72bec7c5dc85a4642876df', class: "ops-task-select", size: "small", value: this.selectedCleaningFrequency, defaultValue: this.selectedCleaningFrequency, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedCleaningFrequency = e.target.value;
                this.dialog.openModal();
            } }, housekeeping_store?.hk_criteria?.cleaning_frequencies.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description)))), h("span", { key: 'd335663c0ab27d3310574341be44ffcda865d318' })), this.hkTasks.map((task, i) => (h("div", { key: i, class: "ops-task-row" }, h("wa-badge", { variant: i === 0 ? 'success' : 'brand', appearance: "filled" }, "T", i + 1), h("ir-input", { class: "ops-task-input", size: "small", placeholder: i === 0 ? 'Change sheets, ...' : 'Amenities refill, ...', maxlength: 30, value: task.name, onChange: (e) => {
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
            } })))))), h("ir-dialog", { key: 'c22ec97f7770d8bc3a318c40c74ca88fe0669d0e', ref: el => (this.dialog = el), label: locales.entries.Lcz_Confirmation, lightDismiss: false }, h("span", { key: '992bf95c9cfc238517fecb5ff2e8d3b39b9a6376' }, "This action will reschedule all cleaning tasks. Do you want to continue?"), h("div", { key: '12e7fe4328f4481a48cac05c5c7f0af117762414', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '265955e9e3b0e218e23e6f3d60995b37b21a94f9', size: "medium", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.selectedCleaningFrequency = (calendar_data.cleaning_frequency ?? housekeeping_store?.hk_criteria?.cleaning_frequencies?.[0])?.code ?? null;
                this.dialog.closeModal();
            } }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: 'ddc6bb2528e2390fba533ac1d5d3f7d85e4e9d65', size: "medium", appearance: "filled", variant: "brand", loading: isRequestPending('/Set_Exposed_Cleaning_Frequency'), onClickHandler: () => this.saveCleaningFrequency() }, locales.entries.Lcz_Confirm)))));
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
