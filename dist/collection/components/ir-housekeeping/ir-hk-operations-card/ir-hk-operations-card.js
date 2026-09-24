import { RoomService } from "../../../services/room.service";
import { PropertyService } from "../../../services/property.service";
import { HouseKeepingService } from "../../../services/housekeeping/index";
import calendar_data from "../../../stores/calendar-data";
import housekeeping_store from "../../../stores/housekeeping.store";
import { isRequestPending } from "../../../stores/ir-interceptor.store";
import { Host, h } from "@stencil/core";
import { showToast } from "../../../utils/utils";
import { t } from "../../../services/locale/t";
import { getSetupEntryLabel } from "../../../services/setup/index";
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
            showToast({ position: 'top-right', title: t('Lcz_SavedSuccessfully', { fallback: 'Saved Successfully' }), description: '', type: 'success' });
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
            showToast({ position: 'top-right', title: t('Lcz_SavedSuccessfully', { fallback: 'Saved Successfully' }), description: '', type: 'success' });
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
            showToast({ position: 'top-right', title: t('Lcz_SavedSuccessfully', { fallback: 'Saved Successfully' }), description: '', type: 'success' });
        }
        catch (error) {
            console.log(error);
        }
    }
    render() {
        return (h(Host, { key: '0bc584dbb894cadc979d3759291d89ddcbe6ff93' }, h("wa-card", { key: '64a8e741709cbd35ade732addce26bf9a17e14f1', appearance: "plain", class: "hk-operation__card" }, h("div", { key: '94a47fc2addecf2bc933bddec92e863f4210615e', slot: "header" }, h("span", { key: '5a262ceb5f1db00964013599995fa9f09ae71f3b', class: "ops-header__title" }, t('Lcz_OperationsSettings', { fallback: 'Operations Settings' }))), h("div", { key: '5652081320069ef74ca9967773b66516e0067e74', class: "ops-settings" }, h("div", { key: '6ec46152b1277fe9db0250a80b17bef2f4d4d9e7', class: "ops-setting-item" }, h("div", { key: 'ddc4c9247485b21b4916cf1723f8be1c8646c685', class: "ops-setting-item__info" }, h("span", { key: '370a92c48398eb6c29ac123c5c86f6508b1de2fb', class: "ops-setting-item__title" }, t('Lcz_AutomaticCheckInCheckout', { fallback: 'Automatic Check-in & Check-out' })), h("span", { key: '8c183aa6284a8dc6921240c339b6f65b4a8f5859', class: "ops-setting-item__subtitle" }, t('Lcz_ProcessGuestsAutomaticallyBasedOnPropertyRules', { fallback: 'Process guests automatically based on property rules' }))), h("div", { key: 'b41bcae2aa142467e9e06ce30441152ef835eb7e', class: "ops-setting-item__controls" }, h("wa-select", { key: '9323a035cb917452cead2334f99cf9a8b7f40348', size: "s", style: { minWidth: '260px' }, value: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', defaultValue: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onchange: (e) => this.saveAutomaticCheckInCheckout(e) }, h("wa-option", { key: '8981f1b2c658f322fea79280e9ccc21862accaf3', value: "auto" }, t('Lcz_YesAsPerPropertyPolicy', { fallback: 'Yes, as per the property policy.' })), h("wa-option", { key: 'ac737bd76f3aa0783b44a28a3f02cba2a68d1fb2', value: "manual" }, t('Lcz_NoIWillDoItManually', { fallback: 'No, I will do it manually.' })))))), h("div", { key: '0f333c2ecf08fa600abc6bf54d28f900ceecd1c0', class: "ops-tasks__header" }, h("p", { key: 'c5b4d3e5f26b3a329a884b5c0ad609c02ad29689', class: "ops-tasks__title" }, t('Lcz_RecurringTasks', { fallback: 'Recurring Tasks' })), h("p", { key: '55057208e6108ed61987d1d242642583fad2dd56', class: "ops-tasks__subtitle" }, t('Lcz_DefineYourHousekeepingTasksAndFrequency', { fallback: 'Define your housekeeping tasks and frequency' }))), h("div", { key: 'cd9fdcba5f8f829d5b011d22408490ac8b1d2904', class: "ops-tasks__list" }, h("div", { key: '242789931d038d524ffe44a4c28357f104de4c25', class: "ops-task-row ops-task-row--locked" }, h("wa-badge", { key: '273f559adcba7db45fc1b25a40082e2af4bf944e', variant: "danger", appearance: "filled" }, t('Lcz_CleaningAbbreviation', { fallback: 'CL' })), h("span", { key: 'e2c241314d607682f533febb9c7e2e129861afe1', class: "ops-task-locked-label" }, t('Lcz_Cleaning', { fallback: 'Cleaning' })), h("wa-select", { key: 'c50f6f13765886811915d61a50941ab9aec293e3', class: "ops-task-select", size: "s", value: this.selectedCleaningFrequency, defaultValue: this.selectedCleaningFrequency, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedCleaningFrequency = e.target.value;
                this.dialog.openModal();
            } }, housekeeping_store?.hk_criteria?.cleaning_frequencies.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description)))), h("span", { key: '05745e7b91592cd1dee036ede76e2323669d036c' })), this.hkTasks.map((task, i) => (h("div", { key: i, class: "ops-task-row" }, h("wa-badge", { variant: i === 0 ? 'success' : 'brand', appearance: "filled" }, "T", i + 1), h("ir-input", { class: "ops-task-input", size: "s", placeholder: i === 0 ? t('Lcz_ChangeSheetsPlaceholder', { fallback: 'Change sheets, ...' }) : t('Lcz_AmenitiesRefillPlaceholder', { fallback: 'Amenities refill, ...' }), maxlength: 30, value: task.name, onChange: (e) => {
                const updated = [...this.hkTasks];
                updated[i] = { ...updated[i], name: e.target.value };
                this.hkTasks = updated;
                this.saveHkTasks();
            } }), h("wa-select", { class: "ops-task-select", size: "s", value: task.frequency, defaultValue: task.frequency, placeholder: t('Lcz_Frequency', { fallback: 'Frequency' }), onchange: (e) => {
                const updated = [...this.hkTasks];
                updated[i] = { ...updated[i], frequency: e.target.value };
                this.hkTasks = updated;
                this.saveHkTasks();
            } }, this.frequencies.map(f => (h("wa-option", { key: f.CODE_NAME, value: f.CODE_NAME }, getSetupEntryLabel(f))))), h("wa-icon-button", { class: "ops-task-delete", name: "xmark", label: t('Lcz_RemoveTask', { fallback: 'Remove task' }), onClick: () => {
                const updated = [...this.hkTasks];
                updated[i] = { name: '', frequency: '' };
                this.hkTasks = updated;
                this.saveHkTasks();
            } })))))), h("ir-dialog", { key: 'fde67c7430890845374c10704de54059153cb31b', ref: el => (this.dialog = el), label: t('Lcz_Confirmation', { fallback: 'Confirmation' }), lightDismiss: false }, h("span", { key: '09721d1d86849348d513078cd6ac477bd5881f6c' }, t('Lcz_RescheduleCleaningTasksConfirmation', { fallback: 'This action will reschedule all cleaning tasks. Do you want to continue?' })), h("div", { key: 'afe451d42d3e964db346ad59e81b6e43e2b8e680', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '67f3aa571079bb31cfc4102bd4f692870155da03', size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.selectedCleaningFrequency = (calendar_data.cleaning_frequency ?? housekeeping_store?.hk_criteria?.cleaning_frequencies?.[0])?.code ?? null;
                this.dialog.closeModal();
            } }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: 'a6597d79b47934f87f348ab47a187e50f1a78f35', size: "m", appearance: "filled", variant: "brand", loading: isRequestPending('/Set_Exposed_Cleaning_Frequency'), onClickHandler: () => this.saveCleaningFrequency() }, t('Lcz_Confirm', { fallback: 'Confirm' }))))));
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
                    "original": "SetupEntries[]",
                    "resolved": "SetupEntries[]",
                    "references": {
                        "SetupEntries": {
                            "location": "import",
                            "path": "@/models/IBooking",
                            "id": "src/models/IBooking.ts::SetupEntries",
                            "referenceLocation": "SetupEntries"
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
