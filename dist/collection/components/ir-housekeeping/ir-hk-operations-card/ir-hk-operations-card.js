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
        return (h(Host, { key: '68983808effed1a0d69aa94f4f6c7d97269d4504' }, h("wa-card", { key: '0dc52e3866253424ed602badded0aac3e4ef93c9', class: "" }, h("div", { key: 'd35b82c3629dd79454d23d7a8c1c4eed8e1a7b10', slot: "header" }, h("span", { key: '0805647cf3cdc8d54c064689c7bbfe91ae8652cc', class: "ops-header__title" }, "Operations Settings")), h("div", { key: 'd49fb28bae2ee2c0bb233e538f340db008c26136', class: "ops-settings" }, h("div", { key: 'c88bc2ef32526d6cfec268535be6bc5db11331aa', class: "ops-setting-item" }, h("div", { key: '1fca64d7bfe0dc27373bdc115594862af993f1d3', class: "ops-setting-item__info" }, h("span", { key: 'ff080b28b72d1f7bb2ccd5722103f1634f1727ed', class: "ops-setting-item__title" }, "Automatic Check-in & Check-out"), h("span", { key: '193e0b714513148849592321c3cc6fc1b26ce942', class: "ops-setting-item__subtitle" }, "Process guests automatically based on property rules")), h("div", { key: '375ea2643f5263efde90ff20b69c5999062d5a43', class: "ops-setting-item__controls" }, h("wa-select", { key: '31135bb3af0337485d653a4ac2ab47f812067e29', size: "small", style: { minWidth: '260px' }, value: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', defaultValue: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onchange: (e) => this.saveAutomaticCheckInCheckout(e) }, h("wa-option", { key: '890e594f0777b3999ca06ef0c6c8987839b2dbed', value: "auto" }, locales.entries.Lcz_YesAsPerPropertyPolicy), h("wa-option", { key: '24d352ce0f55dc7d87e9036f479dc256c654a079', value: "manual" }, locales.entries.Lcz_NoIWillDoItManually))))), h("div", { key: '83b6fa5c0aa2cbd41f5bd1be9731ff1ede875f07', class: "ops-tasks__header" }, h("p", { key: '7a0f899beae9eb18cad1f0c90f21463f1bcf372a', class: "ops-tasks__title" }, "Recurring Tasks"), h("p", { key: '659a97825b1bb0083aa671413ea15546bf6a10b4', class: "ops-tasks__subtitle" }, "Define your housekeeping tasks and frequency")), h("div", { key: '5b326ccb636e419bf28c118a60c0eff3dd5703bd', class: "ops-tasks__list" }, h("div", { key: '6e77afb946418bf1e05f653c7aead5bc9df9382a', class: "ops-task-row ops-task-row--locked" }, h("wa-badge", { key: 'f12b016552311932d62eca48682e6df99b360dd4', variant: "danger", appearance: "filled" }, "CL"), h("span", { key: 'dddf22028417251bc07c5af9582d24dd6ddf5ad4', class: "ops-task-locked-label" }, "Cleaning"), h("wa-select", { key: '323d08c30140a22190283f3031dde47db86f9190', class: "ops-task-select", size: "small", value: this.selectedCleaningFrequency, defaultValue: this.selectedCleaningFrequency, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedCleaningFrequency = e.target.value;
                this.dialog.openModal();
            } }, housekeeping_store?.hk_criteria?.cleaning_frequencies.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description)))), h("span", { key: 'd948b88a36b04864e4a6b1bea3ebf2eb2db3cae3' })), this.hkTasks.map((task, i) => (h("div", { key: i, class: "ops-task-row" }, h("wa-badge", { variant: i === 0 ? 'success' : 'brand', appearance: "filled" }, "T", i + 1), h("ir-input", { class: "ops-task-input", size: "small", placeholder: i === 0 ? 'Change sheets, ...' : 'Amenities refill, ...', maxlength: 30, value: task.name, onChange: (e) => {
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
            } })))))), h("ir-dialog", { key: 'db59e6a30f2b942cb34eb0a8e18d3cfdd2920f50', ref: el => (this.dialog = el), label: locales.entries.Lcz_Confirmation, lightDismiss: false }, h("span", { key: '30ea4a6ee2ef38f5db63d78f524fc6476b571f38' }, "This action will reschedule all cleaning tasks. Do you want to continue?"), h("div", { key: '8ac0cca0ffd97720ad2afb5f59bd36c48d699ef4', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '7e16750144d20e91476c377f40f907431deb41d7', size: "medium", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.selectedCleaningFrequency = (calendar_data.cleaning_frequency ?? housekeeping_store?.hk_criteria?.cleaning_frequencies?.[0])?.code ?? null;
                this.dialog.closeModal();
            } }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '35e837a117b55456a561a3a10ca8b0f674f4d70c', size: "medium", appearance: "filled", variant: "brand", loading: isRequestPending('/Set_Exposed_Cleaning_Frequency'), onClickHandler: () => this.saveCleaningFrequency() }, locales.entries.Lcz_Confirm)))));
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
