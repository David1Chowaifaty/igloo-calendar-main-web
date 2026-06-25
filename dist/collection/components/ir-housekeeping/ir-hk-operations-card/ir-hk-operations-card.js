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
        return (h(Host, { key: '5917733912ad1b0de8522fb729413257a8a7d4f7' }, h("wa-card", { key: '20a1f89bcc037c06018dd62ed4fd4ca45be0cc6d', class: "" }, h("div", { key: '2bf843d5ef20484054f788840fd26082e6bdb0d4', slot: "header" }, h("span", { key: '8305c7d409dd520f38d77e805c8b155a883de3f9', class: "ops-header__title" }, "Operations Settings")), h("div", { key: 'ad3bf755d4d89cabe5c52aa94d1d9c3b8d36f316', class: "ops-settings" }, h("div", { key: '5e72625dae69d5870143511eb80c5888575ff13a', class: "ops-setting-item" }, h("div", { key: 'e9f1d0e4b71c1720c323b18302035ce21c522189', class: "ops-setting-item__info" }, h("span", { key: 'a174d88c5be6a4b120fb299047bf638d91335883', class: "ops-setting-item__title" }, "Automatic Check-in & Check-out"), h("span", { key: 'a7da422e7b03fd0823726e7799c766322c50af04', class: "ops-setting-item__subtitle" }, "Process guests automatically based on property rules")), h("div", { key: '68c5f16a007e52ab6cff61fc5d40ba730609274d', class: "ops-setting-item__controls" }, h("wa-select", { key: '00442184b895a15cace50e6afce1eb0b90973c9c', size: "s", style: { minWidth: '260px' }, value: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', defaultValue: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onchange: (e) => this.saveAutomaticCheckInCheckout(e) }, h("wa-option", { key: 'e654d0cc202bd416b9fc94736fd5bf3a602b4c17', value: "auto" }, locales.entries.Lcz_YesAsPerPropertyPolicy), h("wa-option", { key: '5985d18cb522c1957b5f730dd8970368b08a35f8', value: "manual" }, locales.entries.Lcz_NoIWillDoItManually))))), h("div", { key: '34f048858a7d8425dcdc86904fb8a1ae94d54c6d', class: "ops-tasks__header" }, h("p", { key: '0a8ed767a7134972f920a465da7ba7121ff69ac4', class: "ops-tasks__title" }, "Recurring Tasks"), h("p", { key: 'fd0f9381551a9db392dafe16e943a6976e680ca6', class: "ops-tasks__subtitle" }, "Define your housekeeping tasks and frequency")), h("div", { key: '9f3c56a7f64e2cf5da56e7850a4b7d10734cdc70', class: "ops-tasks__list" }, h("div", { key: '014d9aa787fd50b5e1800e7d1ed759ffe0c5ce3c', class: "ops-task-row ops-task-row--locked" }, h("wa-badge", { key: '70edb550f270fb8faf270569161eda0be13064db', variant: "danger", appearance: "filled" }, "CL"), h("span", { key: 'd90e9e4daee034c8a562912a1c67f769c04faf15', class: "ops-task-locked-label" }, "Cleaning"), h("wa-select", { key: 'ed3f4e74ece04e99c26cd5eaa4b7345121e94fac', class: "ops-task-select", size: "s", value: this.selectedCleaningFrequency, defaultValue: this.selectedCleaningFrequency, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedCleaningFrequency = e.target.value;
                this.dialog.openModal();
            } }, housekeeping_store?.hk_criteria?.cleaning_frequencies.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description)))), h("span", { key: 'aab2a5d4012a494807e04e286eaf2269939eb7b7' })), this.hkTasks.map((task, i) => (h("div", { key: i, class: "ops-task-row" }, h("wa-badge", { variant: i === 0 ? 'success' : 'brand', appearance: "filled" }, "T", i + 1), h("ir-input", { class: "ops-task-input", size: "s", placeholder: i === 0 ? 'Change sheets, ...' : 'Amenities refill, ...', maxlength: 30, value: task.name, onChange: (e) => {
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
            } })))))), h("ir-dialog", { key: 'b013268aece84ca91f11fac39275bed551941cfd', ref: el => (this.dialog = el), label: locales.entries.Lcz_Confirmation, lightDismiss: false }, h("span", { key: 'ca5b3c63e2c1186652158af0fe2ec8916fff751e' }, "This action will reschedule all cleaning tasks. Do you want to continue?"), h("div", { key: '98b0230d12d23ca1e195380caef15bfef9946a84', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '0b1bab060833f060032f0156572e0e5a08a0e873', size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.selectedCleaningFrequency = (calendar_data.cleaning_frequency ?? housekeeping_store?.hk_criteria?.cleaning_frequencies?.[0])?.code ?? null;
                this.dialog.closeModal();
            } }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: 'f2393245af32c10decc2769ae49befc1688ff466', size: "m", appearance: "filled", variant: "brand", loading: isRequestPending('/Set_Exposed_Cleaning_Frequency'), onClickHandler: () => this.saveCleaningFrequency() }, locales.entries.Lcz_Confirm)))));
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
