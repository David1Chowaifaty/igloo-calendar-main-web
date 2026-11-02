import { RoomService } from "../../../services/room.service";
import { PropertyService } from "../../../services/property.service";
import { HouseKeepingService } from "../../../services/housekeeping/index";
import calendar_data from "../../../stores/calendar-data";
import housekeeping_store from "../../../stores/housekeeping.store";
import { isRequestPending } from "../../../stores/ir-interceptor.store";
import { Host, h } from "@stencil/core";
import { showToast } from "../../../utils/utils";
import { formatCount } from "../../../utils/number";
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
        return (h(Host, { key: 'c2337a41a474e4c13e971543ab90ff46e369881b' }, h("wa-card", { key: '6bc168f31caecca5c21fe4cfbaebfac0b31da8cf', appearance: "plain", class: "hk-operation__card" }, h("div", { key: '9275c4a8ec2c6fbab4283c17f486e6567823ee48', slot: "header" }, h("span", { key: 'ecf2b49c2c593e8d832327a958e4fa88ec252f3d', class: "ops-header__title" }, t('Lcz_OperationsSettings', { fallback: 'Operations Settings' }))), h("div", { key: 'f0bf3264c9a936ce77ee9c0995d51bf86e2930d9', class: "ops-settings" }, h("div", { key: 'fafe47bab62337f7dba7eed9a66faf2b721a64eb', class: "ops-setting-item" }, h("div", { key: '0b5950524d4d8d854f2c82f4dec1a47e9f6bbccd', class: "ops-setting-item__info" }, h("span", { key: '9f07893eb29544c3a653c91deef33963942b66d7', class: "ops-setting-item__title" }, t('Lcz_AutomaticCheckInCheckout', { fallback: 'Automatic Check-in & Check-out' })), h("span", { key: '9aff82a3741670908c00df13cf53c33aceb93003', class: "ops-setting-item__subtitle" }, t('Lcz_ProcessGuestsAutomaticallyBasedOnPropertyRules', { fallback: 'Process guests automatically based on property rules' }))), h("div", { key: 'ae334450ae5f5e2fe363c6a29b815b8689bec3c4', class: "ops-setting-item__controls" }, h("wa-select", { key: '0f3639e0280e188fa0685b7adb712aa9682177dd', size: "s", style: { minWidth: '260px' }, value: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', defaultValue: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onchange: (e) => this.saveAutomaticCheckInCheckout(e) }, h("wa-option", { key: '5ab198d1cb5d0db8792ba417a278f5b00040e183', value: "auto" }, t('Lcz_YesAsPerPropertyPolicy', { fallback: 'Yes, as per the property policy.' })), h("wa-option", { key: '27bc7579e399ba281137886ec4b47b8831216a2c', value: "manual" }, t('Lcz_NoIWillDoItManually', { fallback: 'No, I will do it manually.' })))))), h("div", { key: '99c6327ddb764d274fdf1129978c0844ba3270fc', class: "ops-tasks__header" }, h("p", { key: 'ba591de1d93f9c4c47ba6bace9997528462e01d0', class: "ops-tasks__title" }, t('Lcz_RecurringTasks', { fallback: 'Recurring Tasks' })), h("p", { key: 'd91a8730838bb41dd9d1d776e526b8a96fc12fcb', class: "ops-tasks__subtitle" }, t('Lcz_DefineYourHousekeepingTasksAndFrequency', { fallback: 'Define your housekeeping tasks and frequency' }))), h("div", { key: '8b37a0ec226610cd612d56ec30af50fd0575f53e', class: "ops-tasks__list" }, h("div", { key: 'e6d1afbd150751d39e6f3d660d077d8bd893aaab', class: "ops-task-row ops-task-row--locked" }, h("wa-badge", { key: 'd430a6d1ef605014958f73d79801dc864fa68d0b', variant: "danger", appearance: "filled" }, t('Lcz_CleaningAbbreviation', { fallback: 'CL' })), h("span", { key: '1a52d006bc94e77b44dd5dbc52ff92bb34368b1a', class: "ops-task-locked-label" }, t('Lcz_Cleaning', { fallback: 'Cleaning' })), h("wa-select", { key: '938c420a9c5f891616d1c1929ea91c8a2243f8a6', class: "ops-task-select", size: "s", value: this.selectedCleaningFrequency, defaultValue: this.selectedCleaningFrequency, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedCleaningFrequency = e.target.value;
                this.dialog.openModal();
            } }, housekeeping_store?.hk_criteria?.cleaning_frequencies.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description)))), h("span", { key: 'e28804f48e54875c0c38ee832af050aaf097ab19' })), this.hkTasks.map((task, i) => (h("div", { key: i, class: "ops-task-row" }, h("wa-badge", { variant: i === 0 ? 'success' : 'brand', appearance: "filled" }, t('Lcz_TaskAbbreviation', { fallback: 'T%1', params: [formatCount(i + 1)] })), h("ir-input", { class: "ops-task-input", size: "s", placeholder: i === 0 ? t('Lcz_ChangeSheetsPlaceholder', { fallback: 'Change sheets, ...' }) : t('Lcz_AmenitiesRefillPlaceholder', { fallback: 'Amenities refill, ...' }), maxlength: 30, value: task.name, onChange: (e) => {
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
            } })))))), h("ir-dialog", { key: 'ffd18520c08a6261e39c8f4fa789f0ac4cd1b268', ref: el => (this.dialog = el), label: t('Lcz_Confirmation', { fallback: 'Confirmation' }), lightDismiss: false }, h("span", { key: '5db60552d557efb1a02139d4e6b87db71e83c516' }, t('Lcz_RescheduleCleaningTasksConfirmation', { fallback: 'This action will reschedule all cleaning tasks. Do you want to continue?' })), h("div", { key: 'f0cecc1213422f485e1dec71c330b1139d4015d4', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '0eeba3d600891a4d96b20580ffc6e270fd7019d0', size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.selectedCleaningFrequency = (calendar_data.cleaning_frequency ?? housekeeping_store?.hk_criteria?.cleaning_frequencies?.[0])?.code ?? null;
                this.dialog.closeModal();
            } }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: 'f6b6e90285d95188df501f1691c0e34884258ac8', size: "m", appearance: "filled", variant: "brand", loading: isRequestPending('/Set_Exposed_Cleaning_Frequency'), onClickHandler: () => this.saveCleaningFrequency() }, t('Lcz_Confirm', { fallback: 'Confirm' }))))));
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
