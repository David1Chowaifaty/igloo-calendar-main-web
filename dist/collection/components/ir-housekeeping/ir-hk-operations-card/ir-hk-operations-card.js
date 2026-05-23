import { RoomService } from "../../../services/room.service";
import { PropertyService } from "../../../services/property.service";
import { HouseKeepingService } from "../../../services/housekeeping.service";
import calendar_data from "../../../stores/calendar-data";
import housekeeping_store from "../../../stores/housekeeping.store";
import { isRequestPending } from "../../../stores/ir-interceptor.store";
import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
export class IrHkOperationsCard {
    frequencies = [];
    hkTasks = [
        { name: '', frequency: '' },
        { name: '', frequency: '' },
    ];
    selectedCleaningFrequency = null;
    toast;
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
            this.toast.emit({ position: 'top-right', title: 'Saved Successfully', description: '', type: 'success' });
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
            this.toast.emit({ position: 'top-right', title: 'Saved Successfully', description: '', type: 'success' });
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
            this.toast.emit({ position: 'top-right', title: 'Saved Successfully', description: '', type: 'success' });
        }
        catch (error) {
            console.log(error);
        }
    }
    render() {
        return (h(Host, { key: '2342b4eaaa9f34436459ab51752cccedfbb28ef4' }, h("wa-card", { key: '6fa98cd14343d7b7c360bf0a1d383eb34e947fd9', class: "" }, h("div", { key: '217d6bced0a7c70f8a713d2922666dc36a57ea6c', slot: "header" }, h("span", { key: '0e68c65449cdae8b77e9de9e332971793ccb652a', class: "ops-header__title" }, "Operations Settings")), h("div", { key: 'ae3949d35f432cdfbc817765dc8859425be03e7e', class: "ops-settings" }, h("div", { key: '9a21f93e964bb5c20471b5533fb0d0781145d4a7', class: "ops-setting-item" }, h("div", { key: 'ebb131415de9657d3c7dc56198411e4fd67e2218', class: "ops-setting-item__info" }, h("span", { key: '701434ffce6a52eec586c650054f36301a26661e', class: "ops-setting-item__title" }, "Automatic Check-in & Check-out"), h("span", { key: '6cbcac761cf709f045f924db35580cce1bcdae63', class: "ops-setting-item__subtitle" }, "Process guests automatically based on property rules")), h("div", { key: '5c0eb1e7e55d388f9977ba3f02b7198c3305c326', class: "ops-setting-item__controls" }, h("wa-select", { key: 'c2c0b8d8f7b86f10679897c5b9d05a861b406e85', size: "small", style: { minWidth: '260px' }, value: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', defaultValue: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onchange: (e) => this.saveAutomaticCheckInCheckout(e) }, h("wa-option", { key: '3fa52b81601948a627fecf1138eeddb8a3b207af', value: "auto" }, locales.entries.Lcz_YesAsPerPropertyPolicy), h("wa-option", { key: 'ee66507fba52bd6cb0ff4bb3b0134ded44bf6c88', value: "manual" }, locales.entries.Lcz_NoIWillDoItManually))))), h("div", { key: '1650f5f63d48d907c2f4564088fed09973ced57f', class: "ops-tasks__header" }, h("p", { key: 'eb2fe50a6c3472b7d74cf99c0daae8951ca00634', class: "ops-tasks__title" }, "Recurring Tasks"), h("p", { key: '3eea8e1ae665f959531fbb976ad2f6a09ff57bfc', class: "ops-tasks__subtitle" }, "Define your housekeeping tasks and frequency")), h("div", { key: '6e1c62eb95b3ed857973cbea5c36e5d2ecce510a', class: "ops-tasks__list" }, h("div", { key: '5c1683a3dba16dab124a2e7d127b096b5234525c', class: "ops-task-row ops-task-row--locked" }, h("wa-badge", { key: 'dbcfde22be49e4bc198cc88a2bdd62e08e92b937', variant: "danger", appearance: "filled" }, "CL"), h("span", { key: '802c43e38bad980c273e5cabfc86c66ef2f5aade', class: "ops-task-locked-label" }, "Cleaning"), h("wa-select", { key: 'b751b90e02ac429ed7ae5dff428ab0f47b57b4e7', class: "ops-task-select", size: "small", value: this.selectedCleaningFrequency, defaultValue: this.selectedCleaningFrequency, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedCleaningFrequency = e.target.value;
                this.dialog.openModal();
            } }, housekeeping_store?.hk_criteria?.cleaning_frequencies.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description)))), h("span", { key: '1f2dd48469d959022ff7a0594bfe5a1497356211' })), this.hkTasks.map((task, i) => (h("div", { key: i, class: "ops-task-row" }, h("wa-badge", { variant: i === 0 ? 'success' : 'brand', appearance: "filled" }, "T", i + 1), h("ir-input", { class: "ops-task-input", size: "small", placeholder: i === 0 ? 'Change sheets, ...' : 'Amenities refill, ...', maxlength: 30, value: task.name, onChange: (e) => {
                const updated = [...this.hkTasks];
                updated[i] = { ...updated[i], name: e.target.value };
                this.hkTasks = updated;
                this.saveHkTasks();
            } }), h("wa-select", { class: "ops-task-select", size: "small", value: task.frequency, defaultValue: task.frequency, placeholder: "Frequency", onchange: (e) => {
                const updated = [...this.hkTasks];
                updated[i] = { ...updated[i], frequency: e.target.value };
                this.hkTasks = updated;
                this.saveHkTasks();
            } }, this.frequencies.map(f => (h("wa-option", { key: f.CODE_NAME, value: f.CODE_NAME }, f.CODE_VALUE_EN)))), h("wa-icon-button", { class: "ops-task-delete", name: "xmark", label: "Remove task", onClick: () => {
                const updated = [...this.hkTasks];
                updated[i] = { name: '', frequency: '' };
                this.hkTasks = updated;
                this.saveHkTasks();
            } })))))), h("ir-dialog", { key: 'da247e1cdb2d51515a9730f4ea0bb9a4b07a6b2b', ref: el => (this.dialog = el), label: locales.entries.Lcz_Confirmation, lightDismiss: false }, h("span", { key: '1cd44e4aac463183605183e04d0b37d1a8e87104' }, "This action will reschedule all cleaning tasks. Do you want to continue?"), h("div", { key: '91c3dbc7e882694059cf9802097fdecfd9e72c3a', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '21c0c4b4142282819ef4e7c254d9e87d4ab0c5bf', size: "medium", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.selectedCleaningFrequency = (calendar_data.cleaning_frequency ?? housekeeping_store?.hk_criteria?.cleaning_frequencies?.[0])?.code ?? null;
                this.dialog.closeModal();
            } }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '6fa95931d7d3716a449c7ed3484d05e85c6fc0b2', size: "medium", appearance: "filled", variant: "brand", loading: isRequestPending('/Set_Exposed_Cleaning_Frequency'), onClickHandler: () => this.saveCleaningFrequency() }, locales.entries.Lcz_Confirm)))));
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
                            "id": "src/models/IBooking.ts::IEntries"
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
    static get events() {
        return [{
                "method": "toast",
                "name": "toast",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "IToast",
                    "resolved": "ICustomToast & Partial<IToastWithButton> | IDefaultToast & Partial<IToastWithButton>",
                    "references": {
                        "IToast": {
                            "location": "import",
                            "path": "@components/ui/ir-toast/toast",
                            "id": "src/components/ui/ir-toast/toast.ts::IToast"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=ir-hk-operations-card.js.map
