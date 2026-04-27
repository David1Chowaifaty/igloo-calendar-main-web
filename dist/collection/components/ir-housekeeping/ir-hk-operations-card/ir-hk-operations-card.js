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
        return (h(Host, { key: '17fb19728d5785cce6e8bc6ec28c20ba1c2edcda' }, h("wa-card", { key: 'c29215ea23d929427acdc44d7b35ae580db32dfe', class: "" }, h("div", { key: '23fe340372dac2c820c25e1ca92ce38d2af3593d', slot: "header" }, h("span", { key: '447dabc91bf919e78946b04c39ed3cd4e5c5c40b', class: "ops-header__title" }, "Operations Settings")), h("div", { key: '4f2d2ae6b911909d6fe1389393e3bac88b71af1e', class: "ops-settings" }, h("div", { key: '0f68cdb302d25b704f6dbc072d058622b5fd4d10', class: "ops-setting-item" }, h("div", { key: '27cd6fc6354fcd96e8a5c49726dca3fe81ad6eb6', class: "ops-setting-item__info" }, h("span", { key: 'cfac7f2992bee17b65acc1984bbcc69b1cc59554', class: "ops-setting-item__title" }, "Automatic Check-in & Check-out"), h("span", { key: '0372581d776cc6339f7905db254c4396b772a874', class: "ops-setting-item__subtitle" }, "Process guests automatically based on property rules")), h("div", { key: '3d68b4db0297a6defbbf122c35278c27c20dd48a', class: "ops-setting-item__controls" }, h("wa-select", { key: '716af13893f64a9926d9cf96017e9637c42d9713', size: "small", style: { minWidth: '260px' }, value: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', defaultValue: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onchange: (e) => this.saveAutomaticCheckInCheckout(e) }, h("wa-option", { key: 'e8dcedb0d0603b9c540658d98ca6811444751973', value: "auto" }, locales.entries.Lcz_YesAsPerPropertyPolicy), h("wa-option", { key: 'bcb0c02ec496d77386ddfb06d041953e71009b00', value: "manual" }, locales.entries.Lcz_NoIWillDoItManually))))), h("div", { key: 'ebfdc89bb91637e43a541c387459af0b01664c79', class: "ops-tasks__header" }, h("p", { key: 'b38a9e217c01dc807d4172e81dac8902b20dd598', class: "ops-tasks__title" }, "Recurring Tasks"), h("p", { key: '65ff5722ef3505254833ee529c0a87a249ba8564', class: "ops-tasks__subtitle" }, "Define your housekeeping tasks and frequency")), h("div", { key: '9ce41398b1829472d3c9512a25f41328b0065f00', class: "ops-tasks__list" }, h("div", { key: 'b4c14b9782b1e5b70b82b53be39f3820e4b459b9', class: "ops-task-row ops-task-row--locked" }, h("wa-badge", { key: '80431d8b12c5a7754806392e974cea20ce250ac3', variant: "danger", appearance: "filled" }, "CL"), h("span", { key: '624070f9fa51a8c64ab6ece8599281ffa47c5c3c', class: "ops-task-locked-label" }, "Cleaning"), h("wa-select", { key: 'c0d52a892d99d8f57893a62d6de2710a472fcd26', class: "ops-task-select", size: "small", value: this.selectedCleaningFrequency, defaultValue: this.selectedCleaningFrequency, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedCleaningFrequency = e.target.value;
                this.dialog.openModal();
            } }, housekeeping_store?.hk_criteria?.cleaning_frequencies.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description)))), h("span", { key: '6eff053cf9d607c2b00e198f460f3e9b23b160ab' })), this.hkTasks.map((task, i) => (h("div", { key: i, class: "ops-task-row" }, h("wa-badge", { variant: i === 0 ? 'success' : 'brand', appearance: "filled" }, "T", i + 1), h("ir-input", { class: "ops-task-input", size: "small", placeholder: i === 0 ? 'Change sheets, ...' : 'Amenities refill, ...', maxlength: 30, value: task.name, onChange: (e) => {
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
            } })))))), h("ir-dialog", { key: 'e27fb45c0c1cea045bc7f20cbe8362dbc7d2ff9b', ref: el => (this.dialog = el), label: locales.entries.Lcz_Confirmation, lightDismiss: false }, h("span", { key: '51c4820575b011b8d2853aac8098dd1246d0a3f7' }, "This action will reschedule all cleaning tasks. Do you want to continue?"), h("div", { key: '725c797640a212552f5488dae4bf855badeeacff', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '1ae824f077a1284dbee71e89b9ff6d36f6ae9feb', size: "medium", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.selectedCleaningFrequency = (calendar_data.cleaning_frequency ?? housekeeping_store?.hk_criteria?.cleaning_frequencies?.[0])?.code ?? null;
                this.dialog.closeModal();
            } }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '551808874e146a1a1bc388ab496f45b45078cc97', size: "medium", appearance: "filled", variant: "brand", loading: isRequestPending('/Set_Exposed_Cleaning_Frequency'), onClickHandler: () => this.saveCleaningFrequency() }, locales.entries.Lcz_Confirm)))));
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
