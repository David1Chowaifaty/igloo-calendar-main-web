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
        return (h(Host, { key: 'fb0029b47b8690546fda40bcf31e338116334599' }, h("wa-card", { key: '05866c58381f3c4d6ac4fdb4f16786e0e1b19bdc', class: "" }, h("div", { key: '6c9f6cc80caa9b3e653e0eb1225f19ed37bc4d24', slot: "header" }, h("span", { key: '74062d1d1b053788ef95ef9f3045107bd16642d9', class: "ops-header__title" }, "Operations Settings")), h("div", { key: 'aa055c14bf8516ee8e8c2c2df29cfb54e7a379ab', class: "ops-settings" }, h("div", { key: '3320ddc95797511dfcdb72574b70e348d01d84cf', class: "ops-setting-item" }, h("div", { key: '3fab1c8671a5294fd8abe42a21053a073abfbdfd', class: "ops-setting-item__info" }, h("span", { key: 'e46e2acd1c4a289685347ab2b8db21bc47182745', class: "ops-setting-item__title" }, "Automatic Check-in & Check-out"), h("span", { key: '92b3e23de7151a62095abf369a0da44fa278e2f6', class: "ops-setting-item__subtitle" }, "Process guests automatically based on property rules")), h("div", { key: 'e7fcaa0d58a994d6b7995e1546c427e4b8fd31e7', class: "ops-setting-item__controls" }, h("wa-select", { key: 'ba107e619cd620f3da44c70bb231f0ca48bbe05e', size: "s", style: { minWidth: '260px' }, value: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', defaultValue: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onchange: (e) => this.saveAutomaticCheckInCheckout(e) }, h("wa-option", { key: 'e4d5117acca9357c5d7cccd783c8992f43e9acbd', value: "auto" }, locales.entries.Lcz_YesAsPerPropertyPolicy), h("wa-option", { key: '72b2f39d2cef7ad510b6dcfff73d6519ea4317bf', value: "manual" }, locales.entries.Lcz_NoIWillDoItManually))))), h("div", { key: '548940550c4d585da585692358179e1143e913bc', class: "ops-tasks__header" }, h("p", { key: '33c8087fd1e68be7e2c234379c0f041f8d7885e0', class: "ops-tasks__title" }, "Recurring Tasks"), h("p", { key: '920fd998fb6aa8bbb7374e077a4518458c3dc0a4', class: "ops-tasks__subtitle" }, "Define your housekeeping tasks and frequency")), h("div", { key: '6cf9e6fb3c5e372fbc4711b74a08f630f587faad', class: "ops-tasks__list" }, h("div", { key: 'dbba84e87a1881e2859fc9e994314a6274f17035', class: "ops-task-row ops-task-row--locked" }, h("wa-badge", { key: '03cf5b9c1dd3c2a750d140d4103478ef980285ae', variant: "danger", appearance: "filled" }, "CL"), h("span", { key: '153c099aa4391d4fd3344e0863093ee34f261fb8', class: "ops-task-locked-label" }, "Cleaning"), h("wa-select", { key: '79c503a4772616d464ef191dff49fb529c67a655', class: "ops-task-select", size: "s", value: this.selectedCleaningFrequency, defaultValue: this.selectedCleaningFrequency, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedCleaningFrequency = e.target.value;
                this.dialog.openModal();
            } }, housekeeping_store?.hk_criteria?.cleaning_frequencies.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description)))), h("span", { key: '22e5843ea93eaca34150d9e9ba7dad6233c41e20' })), this.hkTasks.map((task, i) => (h("div", { key: i, class: "ops-task-row" }, h("wa-badge", { variant: i === 0 ? 'success' : 'brand', appearance: "filled" }, "T", i + 1), h("ir-input", { class: "ops-task-input", size: "s", placeholder: i === 0 ? 'Change sheets, ...' : 'Amenities refill, ...', maxlength: 30, value: task.name, onChange: (e) => {
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
            } })))))), h("ir-dialog", { key: 'f8a4d172f40b8195c4542f64036d804648ef223f', ref: el => (this.dialog = el), label: locales.entries.Lcz_Confirmation, lightDismiss: false }, h("span", { key: '11902831ed3d281e7e4e40c6101544f0b67304aa' }, "This action will reschedule all cleaning tasks. Do you want to continue?"), h("div", { key: 'd3d424aa1643c6df69cb95af5b441076e54535b6', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'e91efa032f79e58422863786bf0a923cb2e8ac9d', size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.selectedCleaningFrequency = (calendar_data.cleaning_frequency ?? housekeeping_store?.hk_criteria?.cleaning_frequencies?.[0])?.code ?? null;
                this.dialog.closeModal();
            } }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '825ed05aa1511fabd8330976e26871ab33df3a5c', size: "m", appearance: "filled", variant: "brand", loading: isRequestPending('/Set_Exposed_Cleaning_Frequency'), onClickHandler: () => this.saveCleaningFrequency() }, locales.entries.Lcz_Confirm)))));
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
