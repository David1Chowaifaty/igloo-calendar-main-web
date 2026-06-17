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
        return (h(Host, { key: '697f7d3e694a8642fb5d0f80a72c51dbb033777a' }, h("wa-card", { key: 'c4b56e94c7921bf90eb08b1c5e4fd132ff5526e3', class: "" }, h("div", { key: 'fec7fbe0ef1a35cf3c2083ac47d6e51e3e18fa06', slot: "header" }, h("span", { key: '7cb437a3094fa18ae0836115f059fb13d374db15', class: "ops-header__title" }, "Operations Settings")), h("div", { key: '3b36b0f2f442e75b4657e91be3e35a6ada8ec658', class: "ops-settings" }, h("div", { key: '05da60250d7dea42d3f86e3ace4b173575fc2b9f', class: "ops-setting-item" }, h("div", { key: 'bf68145cde9272c6c982dccc155df3d729010a91', class: "ops-setting-item__info" }, h("span", { key: '439ed5ee1306a457554ddae5814d5ba67c54a224', class: "ops-setting-item__title" }, "Automatic Check-in & Check-out"), h("span", { key: '28365412fed295bfae42eea43c98d1caaf7ddac6', class: "ops-setting-item__subtitle" }, "Process guests automatically based on property rules")), h("div", { key: '82be5e21915b1493e55b6071328fb5f087b49943', class: "ops-setting-item__controls" }, h("wa-select", { key: 'e7b7a9d54d64ba5803fcdcdab84ec0f3c6244ba0', size: "s", style: { minWidth: '260px' }, value: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', defaultValue: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onchange: (e) => this.saveAutomaticCheckInCheckout(e) }, h("wa-option", { key: '67830c7a4724da529d25d51b2fd6b036da905848', value: "auto" }, locales.entries.Lcz_YesAsPerPropertyPolicy), h("wa-option", { key: '6ea9128dd39d477f3abceb139035c36965715781', value: "manual" }, locales.entries.Lcz_NoIWillDoItManually))))), h("div", { key: 'ae182bc285acf4fac4c5e7cda765cec5ca5bf406', class: "ops-tasks__header" }, h("p", { key: 'b6339efae60901124204084da4fe31a17fc2d838', class: "ops-tasks__title" }, "Recurring Tasks"), h("p", { key: '338916ec07d85a26608516c3f0b0015c83554551', class: "ops-tasks__subtitle" }, "Define your housekeeping tasks and frequency")), h("div", { key: 'c4d860a9353fa5e1c814dc4fa52bfe6dfecb9a6d', class: "ops-tasks__list" }, h("div", { key: '2064a5388e1d880d7f0b35d206c9d895fd4e94c4', class: "ops-task-row ops-task-row--locked" }, h("wa-badge", { key: 'c645bf234fd856c32f1b4f17402a5c7629b8a216', variant: "danger", appearance: "filled" }, "CL"), h("span", { key: '3d63dd83b0167a76fce925f726f8c23a543e6c28', class: "ops-task-locked-label" }, "Cleaning"), h("wa-select", { key: '7c74d7ee9e8452e0def87494e9f54b1f90be7191', class: "ops-task-select", size: "s", value: this.selectedCleaningFrequency, defaultValue: this.selectedCleaningFrequency, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedCleaningFrequency = e.target.value;
                this.dialog.openModal();
            } }, housekeeping_store?.hk_criteria?.cleaning_frequencies.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description)))), h("span", { key: 'b0f9c277812da9ea54d5987f39c972233018d9c6' })), this.hkTasks.map((task, i) => (h("div", { key: i, class: "ops-task-row" }, h("wa-badge", { variant: i === 0 ? 'success' : 'brand', appearance: "filled" }, "T", i + 1), h("ir-input", { class: "ops-task-input", size: "s", placeholder: i === 0 ? 'Change sheets, ...' : 'Amenities refill, ...', maxlength: 30, value: task.name, onChange: (e) => {
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
            } })))))), h("ir-dialog", { key: 'befb2132541bef736b6a2e1f8a97804fd532a5aa', ref: el => (this.dialog = el), label: locales.entries.Lcz_Confirmation, lightDismiss: false }, h("span", { key: '97d692751853cb456b1609ebd7fca05b622d5a03' }, "This action will reschedule all cleaning tasks. Do you want to continue?"), h("div", { key: 'a02c252b91a0b93ac1498066fcbc4e259b78f59d', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'd21837468de076d8e4c756d2ea3b47280a8213a0', size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.selectedCleaningFrequency = (calendar_data.cleaning_frequency ?? housekeeping_store?.hk_criteria?.cleaning_frequencies?.[0])?.code ?? null;
                this.dialog.closeModal();
            } }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: 'babe5febdfe2f29c42b0c96e81f3a3547c9613b1', size: "m", appearance: "filled", variant: "brand", loading: isRequestPending('/Set_Exposed_Cleaning_Frequency'), onClickHandler: () => this.saveCleaningFrequency() }, locales.entries.Lcz_Confirm)))));
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
