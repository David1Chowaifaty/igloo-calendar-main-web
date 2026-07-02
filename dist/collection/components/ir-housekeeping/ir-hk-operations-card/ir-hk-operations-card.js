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
        return (h(Host, { key: '8ac0a44ec018af13a4864685771141daa1a0a95d' }, h("wa-card", { key: 'd3a626cd2c5c1e4a1bbaf97228ddaf5696f00e2f', class: "" }, h("div", { key: '429157e16a9b6672643d10e1239345e66b5aab2e', slot: "header" }, h("span", { key: 'd294c910aed167bcb34f85d396bde1286dd6f44e', class: "ops-header__title" }, "Operations Settings")), h("div", { key: '261270740482af4cc75c8035d66e0a265dbc533b', class: "ops-settings" }, h("div", { key: '464a62f68ebd3ebdc96cdd1daf7d208a2f5fbc4b', class: "ops-setting-item" }, h("div", { key: 'b8c606815fb16be28b6e21da5841077e99ef39e2', class: "ops-setting-item__info" }, h("span", { key: '83f5f4151829ad883696327b42317c377c11acb7', class: "ops-setting-item__title" }, "Automatic Check-in & Check-out"), h("span", { key: 'bf67aea809a6fd98763e1089c44c080c258a31d7', class: "ops-setting-item__subtitle" }, "Process guests automatically based on property rules")), h("div", { key: '5b19074c15cf28cec9064539c6cf740000c5c330', class: "ops-setting-item__controls" }, h("wa-select", { key: '4f6fba17f254f1746cc37d61ae4e2ccda18517e7', size: "s", style: { minWidth: '260px' }, value: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', defaultValue: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onchange: (e) => this.saveAutomaticCheckInCheckout(e) }, h("wa-option", { key: '8036f3c0011b305caf47d4434535c2d7cdf07acf', value: "auto" }, locales.entries.Lcz_YesAsPerPropertyPolicy), h("wa-option", { key: '8d8eb27b518fc7243735fd5595d8e803736482a1', value: "manual" }, locales.entries.Lcz_NoIWillDoItManually))))), h("div", { key: '8d02f389db3e74ab0262b6c1eb5809118733bf67', class: "ops-tasks__header" }, h("p", { key: '513e932dda09fbb3266fb2340a00c52aca41e999', class: "ops-tasks__title" }, "Recurring Tasks"), h("p", { key: 'a846ace8e3d8c50d6cf3ed0a3f36be7d58d2e1a6', class: "ops-tasks__subtitle" }, "Define your housekeeping tasks and frequency")), h("div", { key: '1eaaef976a4d047e759564ab3c857bef48b2f32d', class: "ops-tasks__list" }, h("div", { key: 'c10cc0c9e25273ee30b3932db62bbf1097e160d3', class: "ops-task-row ops-task-row--locked" }, h("wa-badge", { key: '2c316576610cfceb0427bd68cf1473d299774c6e', variant: "danger", appearance: "filled" }, "CL"), h("span", { key: '769f67ed928e5284851e2a684247d809c42754a7', class: "ops-task-locked-label" }, "Cleaning"), h("wa-select", { key: '0c4c714a8d12a4f35f186b515dd2c2ce69675229', class: "ops-task-select", size: "s", value: this.selectedCleaningFrequency, defaultValue: this.selectedCleaningFrequency, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedCleaningFrequency = e.target.value;
                this.dialog.openModal();
            } }, housekeeping_store?.hk_criteria?.cleaning_frequencies.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description)))), h("span", { key: '7f4eb00b0e2c0c39f7a8e98d5e7b7a0be2c7e228' })), this.hkTasks.map((task, i) => (h("div", { key: i, class: "ops-task-row" }, h("wa-badge", { variant: i === 0 ? 'success' : 'brand', appearance: "filled" }, "T", i + 1), h("ir-input", { class: "ops-task-input", size: "s", placeholder: i === 0 ? 'Change sheets, ...' : 'Amenities refill, ...', maxlength: 30, value: task.name, onChange: (e) => {
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
            } })))))), h("ir-dialog", { key: '49fe39cdd4cf9550d48a627fc9a317a5ca087dad', ref: el => (this.dialog = el), label: locales.entries.Lcz_Confirmation, lightDismiss: false }, h("span", { key: '141c24c3f23b0d68f977a0ae8780ecd53e807318' }, "This action will reschedule all cleaning tasks. Do you want to continue?"), h("div", { key: '262ea310957f5845250e7f1a0cf303f3689e1e93', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '82840c17a47263b9d7b07eb09fbddc25c1bc5b7b', size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.selectedCleaningFrequency = (calendar_data.cleaning_frequency ?? housekeeping_store?.hk_criteria?.cleaning_frequencies?.[0])?.code ?? null;
                this.dialog.closeModal();
            } }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '670129ae6aa0b9bc4c185ca6530b8421be250b45', size: "m", appearance: "filled", variant: "brand", loading: isRequestPending('/Set_Exposed_Cleaning_Frequency'), onClickHandler: () => this.saveCleaningFrequency() }, locales.entries.Lcz_Confirm)))));
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
