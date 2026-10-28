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
        return (h(Host, { key: '5ffc08b112956ef2b3d1c5e8b1f8b3a459ef728b' }, h("wa-card", { key: '30dc97426f26b88966c0dd7becb9f05fba59e6bc', appearance: "plain", class: "hk-operation__card" }, h("div", { key: 'a71059a4d4e694677246cef860dbedd43fe0a4d5', slot: "header" }, h("span", { key: 'b0cd0ffa81172903ba70bddc9e1c6069d0aa681c', class: "ops-header__title" }, t('Lcz_OperationsSettings', { fallback: 'Operations Settings' }))), h("div", { key: '9951976e90cb1181a0e99d72a6b5f0b6695476a5', class: "ops-settings" }, h("div", { key: 'e26187df75ec2f7efa06446cca3db54a1ee12bbd', class: "ops-setting-item" }, h("div", { key: '7439959f7584bb578c8fd5b71970467346a201f7', class: "ops-setting-item__info" }, h("span", { key: 'fbdcd981f572b0f5d034d9c518ed16a8974fbcba', class: "ops-setting-item__title" }, t('Lcz_AutomaticCheckInCheckout', { fallback: 'Automatic Check-in & Check-out' })), h("span", { key: '052b00b32bbe628b4202934579c3e18a002197d5', class: "ops-setting-item__subtitle" }, t('Lcz_ProcessGuestsAutomaticallyBasedOnPropertyRules', { fallback: 'Process guests automatically based on property rules' }))), h("div", { key: '004874acbd23ddcbe8fcb93836747611a6a47bb6', class: "ops-setting-item__controls" }, h("wa-select", { key: '351ac04869857209fc05a5984ca4d2280d8e112b', size: "s", style: { minWidth: '260px' }, value: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', defaultValue: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onchange: (e) => this.saveAutomaticCheckInCheckout(e) }, h("wa-option", { key: '5b69e83169b34353a0bd1349425f3b22ad1c2361', value: "auto" }, t('Lcz_YesAsPerPropertyPolicy', { fallback: 'Yes, as per the property policy.' })), h("wa-option", { key: '78c6cf6a7d134fe39fc568ff118f2b64245fd99e', value: "manual" }, t('Lcz_NoIWillDoItManually', { fallback: 'No, I will do it manually.' })))))), h("div", { key: 'cf2f467eacb58522dc17ad2dc44ce9daae13dc8b', class: "ops-tasks__header" }, h("p", { key: 'cbde6ae9926d46143a6931dd993a382235d7a37c', class: "ops-tasks__title" }, t('Lcz_RecurringTasks', { fallback: 'Recurring Tasks' })), h("p", { key: '6098e4d1efbf1ea236458f243fe35cb91287d54b', class: "ops-tasks__subtitle" }, t('Lcz_DefineYourHousekeepingTasksAndFrequency', { fallback: 'Define your housekeeping tasks and frequency' }))), h("div", { key: 'd7e19f9b9f51e3fccd16577952157597aac37df1', class: "ops-tasks__list" }, h("div", { key: '5ebeec9afeba8e3bc8b04e742b9c638e8ad4de22', class: "ops-task-row ops-task-row--locked" }, h("wa-badge", { key: 'e49d3dc7db17fef599eabaa41392d28308ec4685', variant: "danger", appearance: "filled" }, t('Lcz_CleaningAbbreviation', { fallback: 'CL' })), h("span", { key: 'e66fe68585998070abb6c0741fbdb52b1a423303', class: "ops-task-locked-label" }, t('Lcz_Cleaning', { fallback: 'Cleaning' })), h("wa-select", { key: '37590fb349f4b283a2df88b569bc28f22d43afed', class: "ops-task-select", size: "s", value: this.selectedCleaningFrequency, defaultValue: this.selectedCleaningFrequency, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedCleaningFrequency = e.target.value;
                this.dialog.openModal();
            } }, housekeeping_store?.hk_criteria?.cleaning_frequencies.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description)))), h("span", { key: 'f880208ec3ce55627577fa350021afe7b2dfceb2' })), this.hkTasks.map((task, i) => (h("div", { key: i, class: "ops-task-row" }, h("wa-badge", { variant: i === 0 ? 'success' : 'brand', appearance: "filled" }, t('Lcz_TaskAbbreviation', { fallback: 'T%1', params: [formatCount(i + 1)] })), h("ir-input", { class: "ops-task-input", size: "s", placeholder: i === 0 ? t('Lcz_ChangeSheetsPlaceholder', { fallback: 'Change sheets, ...' }) : t('Lcz_AmenitiesRefillPlaceholder', { fallback: 'Amenities refill, ...' }), maxlength: 30, value: task.name, onChange: (e) => {
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
            } })))))), h("ir-dialog", { key: 'ec7fa1078805e02b45aac9150253c30b463f4adb', ref: el => (this.dialog = el), label: t('Lcz_Confirmation', { fallback: 'Confirmation' }), lightDismiss: false }, h("span", { key: '2f036768836b7cbf19aad8d50957937c07b46cd5' }, t('Lcz_RescheduleCleaningTasksConfirmation', { fallback: 'This action will reschedule all cleaning tasks. Do you want to continue?' })), h("div", { key: 'ada97de95db92b1c16562cbef3b0444e4b816f73', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'e3ac93e6c31abbac42edeafc36c585fb5f0437a6', size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.selectedCleaningFrequency = (calendar_data.cleaning_frequency ?? housekeeping_store?.hk_criteria?.cleaning_frequencies?.[0])?.code ?? null;
                this.dialog.closeModal();
            } }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '1277e23754a850887a7fced1fc2c79878135911a', size: "m", appearance: "filled", variant: "brand", loading: isRequestPending('/Set_Exposed_Cleaning_Frequency'), onClickHandler: () => this.saveCleaningFrequency() }, t('Lcz_Confirm', { fallback: 'Confirm' }))))));
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
