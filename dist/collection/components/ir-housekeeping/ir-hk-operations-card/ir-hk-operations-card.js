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
        return (h(Host, { key: 'a00a7d5dffe1500d6e6206abc15e87f96e3ee45d' }, h("wa-card", { key: 'eb7fdbb7cac6d98cebd844bfbca8b9c1c72a00ae', appearance: "plain", class: "hk-operation__card" }, h("div", { key: 'c17949cef157780c102ad658094a2cf0f27befbf', slot: "header" }, h("span", { key: 'ccbaf767882c5aa069ef47660d7a521d769ba338', class: "ops-header__title" }, "Operations Settings")), h("div", { key: 'b6461ba30de62aa16e677d2032ba2af0a52724ca', class: "ops-settings" }, h("div", { key: 'b414871bf8b45f507b837d127b6f1b5eed4954fe', class: "ops-setting-item" }, h("div", { key: '10a586bf7b80a7d4e05b50e6f4969b6244477f0f', class: "ops-setting-item__info" }, h("span", { key: '3d35b7726b5234d3210968fcc26c2fb09be3494b', class: "ops-setting-item__title" }, "Automatic Check-in & Check-out"), h("span", { key: '8da422788a45922e458cf1c1c48e730c95088e4c', class: "ops-setting-item__subtitle" }, "Process guests automatically based on property rules")), h("div", { key: '1f282ce4d05774f8d8c4bd1d33680958ca337d7b', class: "ops-setting-item__controls" }, h("wa-select", { key: 'da20a678ce2a24515ed381a732845d03c8391e1c', size: "s", style: { minWidth: '260px' }, value: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', defaultValue: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onchange: (e) => this.saveAutomaticCheckInCheckout(e) }, h("wa-option", { key: '503d1f59a9690ae8197a2e5b12090437f8ba480d', value: "auto" }, locales.entries.Lcz_YesAsPerPropertyPolicy), h("wa-option", { key: '4ab6d1c79b22197b6a673f1e611bc74d34a4e843', value: "manual" }, locales.entries.Lcz_NoIWillDoItManually))))), h("div", { key: '9be9e3d38425106ef11a8fc30cad6bd1c4eb50a6', class: "ops-tasks__header" }, h("p", { key: '45cf408ace6441bd63e054dee11ef033d12a65ba', class: "ops-tasks__title" }, "Recurring Tasks"), h("p", { key: '7ea400002c75a5e6ead0bf80fb45fa3212dbf665', class: "ops-tasks__subtitle" }, "Define your housekeeping tasks and frequency")), h("div", { key: 'a44fd59ab8615a47b2636d0e217fe24913517b25', class: "ops-tasks__list" }, h("div", { key: '3049e5739f1c3f8d5f3acaec0f8ffeb45ba231c7', class: "ops-task-row ops-task-row--locked" }, h("wa-badge", { key: '9418009aa8e253ca69a10f480ed8e50b1f93b0bd', variant: "danger", appearance: "filled" }, "CL"), h("span", { key: '61e5d421556308f4ac18f96d691d9e0d73f8c32d', class: "ops-task-locked-label" }, "Cleaning"), h("wa-select", { key: '8270739f1760731a859d1a57d105f2f7b4b54799', class: "ops-task-select", size: "s", value: this.selectedCleaningFrequency, defaultValue: this.selectedCleaningFrequency, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedCleaningFrequency = e.target.value;
                this.dialog.openModal();
            } }, housekeeping_store?.hk_criteria?.cleaning_frequencies.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description)))), h("span", { key: 'bf777dcaea72f53d287763ca95e54b7e477d1de8' })), this.hkTasks.map((task, i) => (h("div", { key: i, class: "ops-task-row" }, h("wa-badge", { variant: i === 0 ? 'success' : 'brand', appearance: "filled" }, "T", i + 1), h("ir-input", { class: "ops-task-input", size: "s", placeholder: i === 0 ? 'Change sheets, ...' : 'Amenities refill, ...', maxlength: 30, value: task.name, onChange: (e) => {
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
            } })))))), h("ir-dialog", { key: 'f02c009152c0a448b347ff58ec9a8ca759bfd00e', ref: el => (this.dialog = el), label: locales.entries.Lcz_Confirmation, lightDismiss: false }, h("span", { key: 'f8e14c136767a7604a836ab1f1ebcc56c34f105a' }, "This action will reschedule all cleaning tasks. Do you want to continue?"), h("div", { key: '7e48b940e6de109e6bfd34d91e2cf20f1ad18459', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '31885ed389d637ca14da05a827fd9f05d1ff657e', size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.selectedCleaningFrequency = (calendar_data.cleaning_frequency ?? housekeeping_store?.hk_criteria?.cleaning_frequencies?.[0])?.code ?? null;
                this.dialog.closeModal();
            } }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '7f525c8acb5c5428a613893fab65ae47f9c66d05', size: "m", appearance: "filled", variant: "brand", loading: isRequestPending('/Set_Exposed_Cleaning_Frequency'), onClickHandler: () => this.saveCleaningFrequency() }, locales.entries.Lcz_Confirm)))));
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
