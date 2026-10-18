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
        return (h(Host, { key: '1188bc5d17cc75a4fd323506197f074ca1785a0f' }, h("wa-card", { key: '2a44a390ce6dccb1a02836c4665508962bad5394', appearance: "plain", class: "hk-operation__card" }, h("div", { key: 'cd4a398e87d7b2c523ad3e026b8b7e1a5b554d53', slot: "header" }, h("span", { key: '28bb5acffc73076cc2d15e7cc6e4941db1f48172', class: "ops-header__title" }, t('Lcz_OperationsSettings', { fallback: 'Operations Settings' }))), h("div", { key: '0e6de38943f1451ff957874b8f55733a28cff8b7', class: "ops-settings" }, h("div", { key: '909cf273913211e346b6ece4c80862603f1a51f3', class: "ops-setting-item" }, h("div", { key: '60112f3ce637a7b641f2852baf6e820a58e0cf9b', class: "ops-setting-item__info" }, h("span", { key: '4cfd7f99d1633f3217f8638211161560b710c851', class: "ops-setting-item__title" }, t('Lcz_AutomaticCheckInCheckout', { fallback: 'Automatic Check-in & Check-out' })), h("span", { key: '65ed38410ca57c8660b4949f6425e1c59ef80edb', class: "ops-setting-item__subtitle" }, t('Lcz_ProcessGuestsAutomaticallyBasedOnPropertyRules', { fallback: 'Process guests automatically based on property rules' }))), h("div", { key: 'eb56a8a75872ba58a2811c578bcff895f055ba51', class: "ops-setting-item__controls" }, h("wa-select", { key: '2bb399d40f4ef3780a06239dbfe55bd2f529d193', size: "s", style: { minWidth: '260px' }, value: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', defaultValue: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onchange: (e) => this.saveAutomaticCheckInCheckout(e) }, h("wa-option", { key: '97a5d7d465fad612bdc87a45fe018416507d40af', value: "auto" }, t('Lcz_YesAsPerPropertyPolicy', { fallback: 'Yes, as per the property policy.' })), h("wa-option", { key: '342d58c81f390d9afe1d049730a8e4c552119c96', value: "manual" }, t('Lcz_NoIWillDoItManually', { fallback: 'No, I will do it manually.' })))))), h("div", { key: '5164793bf090d913a53006ebbe374072ea462977', class: "ops-tasks__header" }, h("p", { key: '2f3aa8ce566917ffa5bb4c42a4e215d378e1a139', class: "ops-tasks__title" }, t('Lcz_RecurringTasks', { fallback: 'Recurring Tasks' })), h("p", { key: 'd9261a7e29038cce69553ba4765d27e0aa83bf7b', class: "ops-tasks__subtitle" }, t('Lcz_DefineYourHousekeepingTasksAndFrequency', { fallback: 'Define your housekeeping tasks and frequency' }))), h("div", { key: '691513e9aa370f0c21b53ede8b3c09c488c1a751', class: "ops-tasks__list" }, h("div", { key: '81ed7b664f434a97904d335c47c99e810848c18a', class: "ops-task-row ops-task-row--locked" }, h("wa-badge", { key: 'dd3e2253f217af93db189e4c485d0ee3831f1091', variant: "danger", appearance: "filled" }, t('Lcz_CleaningAbbreviation', { fallback: 'CL' })), h("span", { key: '9a5bdb3ce77d45a3ed8c6719ed86fd2effa80fc0', class: "ops-task-locked-label" }, t('Lcz_Cleaning', { fallback: 'Cleaning' })), h("wa-select", { key: 'b6d2be3860da0286e6ab34f05e6a7c93b14ac1b5', class: "ops-task-select", size: "s", value: this.selectedCleaningFrequency, defaultValue: this.selectedCleaningFrequency, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedCleaningFrequency = e.target.value;
                this.dialog.openModal();
            } }, housekeeping_store?.hk_criteria?.cleaning_frequencies.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description)))), h("span", { key: '6543738b0bb20a95dc51a83f2c4a8a54ea6f4503' })), this.hkTasks.map((task, i) => (h("div", { key: i, class: "ops-task-row" }, h("wa-badge", { variant: i === 0 ? 'success' : 'brand', appearance: "filled" }, t('Lcz_TaskAbbreviation', { fallback: 'T%1', params: [formatCount(i + 1)] })), h("ir-input", { class: "ops-task-input", size: "s", placeholder: i === 0 ? t('Lcz_ChangeSheetsPlaceholder', { fallback: 'Change sheets, ...' }) : t('Lcz_AmenitiesRefillPlaceholder', { fallback: 'Amenities refill, ...' }), maxlength: 30, value: task.name, onChange: (e) => {
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
            } })))))), h("ir-dialog", { key: 'ac59bc661c3c91dff879b83141da5902c3a742ce', ref: el => (this.dialog = el), label: t('Lcz_Confirmation', { fallback: 'Confirmation' }), lightDismiss: false }, h("span", { key: '352e345b29129a853e7c196a08eaed0c32f16c15' }, t('Lcz_RescheduleCleaningTasksConfirmation', { fallback: 'This action will reschedule all cleaning tasks. Do you want to continue?' })), h("div", { key: 'c555688fdd684e2f2f41662cb2748f257f4fadb0', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'ed133e9685fa1a7aa7c0a938696b7c6a2ac302fe', size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.selectedCleaningFrequency = (calendar_data.cleaning_frequency ?? housekeeping_store?.hk_criteria?.cleaning_frequencies?.[0])?.code ?? null;
                this.dialog.closeModal();
            } }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: 'bff2e7226be27a4db67b10203c748a81fae6005c', size: "m", appearance: "filled", variant: "brand", loading: isRequestPending('/Set_Exposed_Cleaning_Frequency'), onClickHandler: () => this.saveCleaningFrequency() }, t('Lcz_Confirm', { fallback: 'Confirm' }))))));
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
