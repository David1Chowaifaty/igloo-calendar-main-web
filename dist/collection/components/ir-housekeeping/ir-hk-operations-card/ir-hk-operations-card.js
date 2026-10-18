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
        return (h(Host, { key: 'a21453be99778b2cfb6d60ee0c59215fe313a6f5' }, h("wa-card", { key: '2b863f72b1c66d00f042cc2cf920c47c4e40941f', appearance: "plain", class: "hk-operation__card" }, h("div", { key: '579b52688c7ee8a48017437efefe69baf38dc4ea', slot: "header" }, h("span", { key: '887c257160c36f0de6772e5b59db42e98408f815', class: "ops-header__title" }, t('Lcz_OperationsSettings', { fallback: 'Operations Settings' }))), h("div", { key: '0872000437a2541eea2a0e0cd946b126a1cf2b77', class: "ops-settings" }, h("div", { key: 'de1858f53b99fca4688c45556618473d31a5fcbf', class: "ops-setting-item" }, h("div", { key: 'f6d49159a3626bb0156e90071a8266622cc699e0', class: "ops-setting-item__info" }, h("span", { key: 'e2649f5f6c187ed10bf1b1b9670e63d3993c487a', class: "ops-setting-item__title" }, t('Lcz_AutomaticCheckInCheckout', { fallback: 'Automatic Check-in & Check-out' })), h("span", { key: '7891a6d16b5af50351325ae8ab0b46f0712be3d3', class: "ops-setting-item__subtitle" }, t('Lcz_ProcessGuestsAutomaticallyBasedOnPropertyRules', { fallback: 'Process guests automatically based on property rules' }))), h("div", { key: 'd1aba0203c470a5bc9d6c1fbaae8130e6d675d7a', class: "ops-setting-item__controls" }, h("wa-select", { key: '60b4985adaa303c0eecff52ae4c33412f1dad833', size: "s", style: { minWidth: '260px' }, value: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', defaultValue: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onchange: (e) => this.saveAutomaticCheckInCheckout(e) }, h("wa-option", { key: '9622886d2da79afd99a506ec13ef31c9163106b9', value: "auto" }, t('Lcz_YesAsPerPropertyPolicy', { fallback: 'Yes, as per the property policy.' })), h("wa-option", { key: '9bf7a0d008294be94c013ff27a37a6b8dbeed464', value: "manual" }, t('Lcz_NoIWillDoItManually', { fallback: 'No, I will do it manually.' })))))), h("div", { key: 'c1cabc910f09fe167eec23fc1741a3604109c2be', class: "ops-tasks__header" }, h("p", { key: '8bce26d5c1d644012d114832479f27d9349ff030', class: "ops-tasks__title" }, t('Lcz_RecurringTasks', { fallback: 'Recurring Tasks' })), h("p", { key: 'aec59257ee5afa7e3485738958e9a865fef3b706', class: "ops-tasks__subtitle" }, t('Lcz_DefineYourHousekeepingTasksAndFrequency', { fallback: 'Define your housekeeping tasks and frequency' }))), h("div", { key: '3eb8d2b6bf0489778b669a67e97331451c5bc6b7', class: "ops-tasks__list" }, h("div", { key: 'fd8d4dce061bca86423f259e28216299232e9c25', class: "ops-task-row ops-task-row--locked" }, h("wa-badge", { key: 'e0ca43a1031e22b123c0ff7f3e136056d9c6826c', variant: "danger", appearance: "filled" }, t('Lcz_CleaningAbbreviation', { fallback: 'CL' })), h("span", { key: '470207519e09ada3344a310318b9fcf7518faddf', class: "ops-task-locked-label" }, t('Lcz_Cleaning', { fallback: 'Cleaning' })), h("wa-select", { key: '4259c9158bd579d71dff77ba9628afaf1b2c29fd', class: "ops-task-select", size: "s", value: this.selectedCleaningFrequency, defaultValue: this.selectedCleaningFrequency, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedCleaningFrequency = e.target.value;
                this.dialog.openModal();
            } }, housekeeping_store?.hk_criteria?.cleaning_frequencies.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description)))), h("span", { key: 'e4fa373f18303a08ce3caef3c63f1b53e10ac26d' })), this.hkTasks.map((task, i) => (h("div", { key: i, class: "ops-task-row" }, h("wa-badge", { variant: i === 0 ? 'success' : 'brand', appearance: "filled" }, t('Lcz_TaskAbbreviation', { fallback: 'T%1', params: [formatCount(i + 1)] })), h("ir-input", { class: "ops-task-input", size: "s", placeholder: i === 0 ? t('Lcz_ChangeSheetsPlaceholder', { fallback: 'Change sheets, ...' }) : t('Lcz_AmenitiesRefillPlaceholder', { fallback: 'Amenities refill, ...' }), maxlength: 30, value: task.name, onChange: (e) => {
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
            } })))))), h("ir-dialog", { key: '92001483eefe91d49eb0e1dca3b9bbf69608a80a', ref: el => (this.dialog = el), label: t('Lcz_Confirmation', { fallback: 'Confirmation' }), lightDismiss: false }, h("span", { key: '793a1f498722c675d6985d104ffbccceda782388' }, t('Lcz_RescheduleCleaningTasksConfirmation', { fallback: 'This action will reschedule all cleaning tasks. Do you want to continue?' })), h("div", { key: 'da4b60c930f3d6fe0900979b495d8ac3a70bf830', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '2099fbf0413e25b98a9579ca2d750f165da44eac', size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.selectedCleaningFrequency = (calendar_data.cleaning_frequency ?? housekeeping_store?.hk_criteria?.cleaning_frequencies?.[0])?.code ?? null;
                this.dialog.closeModal();
            } }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '59725eb3c165ec2a621639e5f11028103317ed59', size: "m", appearance: "filled", variant: "brand", loading: isRequestPending('/Set_Exposed_Cleaning_Frequency'), onClickHandler: () => this.saveCleaningFrequency() }, t('Lcz_Confirm', { fallback: 'Confirm' }))))));
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
