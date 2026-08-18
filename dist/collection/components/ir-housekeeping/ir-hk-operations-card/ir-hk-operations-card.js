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
        return (h(Host, { key: '6eaa5cab4d569de08c44a691c1f4cb854237ebd6' }, h("wa-card", { key: '4ed508bc1d98d8c2f93b3a32205aa47ae67fec3b', appearance: "plain", class: "hk-operation__card" }, h("div", { key: '9fb915e9c45ade66f15106272289b36be9b3b0c8', slot: "header" }, h("span", { key: '77824e4da0d4077f0fdd4cdc79e77b0d98cd97a3', class: "ops-header__title" }, "Operations Settings")), h("div", { key: '82cdc2583e7f4f06373dfc2fffc2467248e816eb', class: "ops-settings" }, h("div", { key: 'ffde223575245290d42e97661a7be0b1f0d5c961', class: "ops-setting-item" }, h("div", { key: '39068dd3a151c9568497cf039df62f3cbcd87d2e', class: "ops-setting-item__info" }, h("span", { key: 'd97088f5d8c71d2c1a7131dd6487629e306aea2b', class: "ops-setting-item__title" }, "Automatic Check-in & Check-out"), h("span", { key: 'd566151a5af7af2806d31bb1f9d6325cc8737989', class: "ops-setting-item__subtitle" }, "Process guests automatically based on property rules")), h("div", { key: '5356f6d48e48a8a37f0e0b92a39dfa4bda14554f', class: "ops-setting-item__controls" }, h("wa-select", { key: '589db946821236cbf997503607450d3eeeafcb40', size: "s", style: { minWidth: '260px' }, value: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', defaultValue: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onchange: (e) => this.saveAutomaticCheckInCheckout(e) }, h("wa-option", { key: '0820966d573ba8003b49cea8b6326babb4b354b9', value: "auto" }, locales.entries.Lcz_YesAsPerPropertyPolicy), h("wa-option", { key: '79e1882c632dfd784805abcbe4de3c0cf62621b4', value: "manual" }, locales.entries.Lcz_NoIWillDoItManually))))), h("div", { key: 'c1cd64dcda76a40a7c578c9b303d4feba6a855a8', class: "ops-tasks__header" }, h("p", { key: '0016eec3e14b194ae5f042152840a9eb40643108', class: "ops-tasks__title" }, "Recurring Tasks"), h("p", { key: 'a77e4ad469ca8dc620a21b5ef095972b0313e8e5', class: "ops-tasks__subtitle" }, "Define your housekeeping tasks and frequency")), h("div", { key: '2f0c3e7fa232585e557421055509cbafb297c890', class: "ops-tasks__list" }, h("div", { key: '53c5944e7a9fe1c1072f546835d28a3888434b05', class: "ops-task-row ops-task-row--locked" }, h("wa-badge", { key: '1280ac0a89262ac092985d95d45139d4bb7e3596', variant: "danger", appearance: "filled" }, "CL"), h("span", { key: 'cdcd5743633abe852d2394cab8a65fcacf04e43a', class: "ops-task-locked-label" }, "Cleaning"), h("wa-select", { key: '37ec4e14e84f51caefa3efa2674ff44ef9f87be4', class: "ops-task-select", size: "s", value: this.selectedCleaningFrequency, defaultValue: this.selectedCleaningFrequency, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedCleaningFrequency = e.target.value;
                this.dialog.openModal();
            } }, housekeeping_store?.hk_criteria?.cleaning_frequencies.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description)))), h("span", { key: '7520dbd6b1059c29ac53c7c524725ddcec43f5cf' })), this.hkTasks.map((task, i) => (h("div", { key: i, class: "ops-task-row" }, h("wa-badge", { variant: i === 0 ? 'success' : 'brand', appearance: "filled" }, "T", i + 1), h("ir-input", { class: "ops-task-input", size: "s", placeholder: i === 0 ? 'Change sheets, ...' : 'Amenities refill, ...', maxlength: 30, value: task.name, onChange: (e) => {
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
            } })))))), h("ir-dialog", { key: '892ca962ee518ce871eb77b30cfc0653b71b6785', ref: el => (this.dialog = el), label: locales.entries.Lcz_Confirmation, lightDismiss: false }, h("span", { key: 'f8cbaa1a5b9ac0dde923e7a1b714e227accac15b' }, "This action will reschedule all cleaning tasks. Do you want to continue?"), h("div", { key: '3770ab621a8ea38b55620a162daac7311ef37af7', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'c184c8bd2850ab083aa0520f94d427efbec50f87', size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.selectedCleaningFrequency = (calendar_data.cleaning_frequency ?? housekeeping_store?.hk_criteria?.cleaning_frequencies?.[0])?.code ?? null;
                this.dialog.closeModal();
            } }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '4193f3395c4a0ecff4f4ff1f3d92402130e90044', size: "m", appearance: "filled", variant: "brand", loading: isRequestPending('/Set_Exposed_Cleaning_Frequency'), onClickHandler: () => this.saveCleaningFrequency() }, locales.entries.Lcz_Confirm)))));
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
