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
        return (h(Host, { key: '05c76cd7fa6a5958c9e60b0ef698a62f7225e67a' }, h("wa-card", { key: '1a837ca6041cc6d3cb5887def7544187de0b09ac', class: "" }, h("div", { key: '1101efddc8ac522e5104a977f9b87a440dc20091', slot: "header" }, h("span", { key: '1813f75e7a4103a19368a80a5da1620e50dcc791', class: "ops-header__title" }, "Operations Settings")), h("div", { key: '8f1d7363fd2f51e7296dc9f7f44587f49f6bc6bf', class: "ops-settings" }, h("div", { key: 'a1aff72889951e48e81a592dc948010e5e345c94', class: "ops-setting-item" }, h("div", { key: '4d924d82b54cfd7079ceb714609e136fc5d26e8e', class: "ops-setting-item__info" }, h("span", { key: '8783687fb6fb134084611d88d9fa773a24bac41b', class: "ops-setting-item__title" }, "Automatic Check-in & Check-out"), h("span", { key: '30eceb2c12e0e062d780e22466fc5aa5daf08baf', class: "ops-setting-item__subtitle" }, "Process guests automatically based on property rules")), h("div", { key: '9badefc15e4c23b29eb5afb6580b4bf9e11607c0', class: "ops-setting-item__controls" }, h("wa-select", { key: 'c9650f23510aee043035dcdf6b9f81b6512b7104', size: "s", style: { minWidth: '260px' }, value: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', defaultValue: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onchange: (e) => this.saveAutomaticCheckInCheckout(e) }, h("wa-option", { key: '9ebc91b310ceca9b48592545be8f6bdd3fc76b90', value: "auto" }, locales.entries.Lcz_YesAsPerPropertyPolicy), h("wa-option", { key: 'a495c1e65e296df6678c368d52afdc871395e58f', value: "manual" }, locales.entries.Lcz_NoIWillDoItManually))))), h("div", { key: 'bd3f3530a07180f19e3621093bbf49af6fe1932d', class: "ops-tasks__header" }, h("p", { key: '49ede0f7ec34584f4c3e5c93666852b5e16bc72c', class: "ops-tasks__title" }, "Recurring Tasks"), h("p", { key: '464364822ad3100e1550b7fd14d89e6be01b01c8', class: "ops-tasks__subtitle" }, "Define your housekeeping tasks and frequency")), h("div", { key: '7ffefbe6a68649908f49a3d8db0a0919acdc90cc', class: "ops-tasks__list" }, h("div", { key: '7accdf875227c9a459773ac469e723ba70018ec5', class: "ops-task-row ops-task-row--locked" }, h("wa-badge", { key: '86e8d37aa5bc3ff33bef907ee9aded413de2a5a9', variant: "danger", appearance: "filled" }, "CL"), h("span", { key: '6b853166fba21b46023383d28121d4abe435e5f4', class: "ops-task-locked-label" }, "Cleaning"), h("wa-select", { key: 'd3e0df2ce60a930782d3fd2a629eaaf3cca96c1b', class: "ops-task-select", size: "s", value: this.selectedCleaningFrequency, defaultValue: this.selectedCleaningFrequency, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedCleaningFrequency = e.target.value;
                this.dialog.openModal();
            } }, housekeeping_store?.hk_criteria?.cleaning_frequencies.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description)))), h("span", { key: '6628f8017aa6207c894bdaf47957acbc60a06713' })), this.hkTasks.map((task, i) => (h("div", { key: i, class: "ops-task-row" }, h("wa-badge", { variant: i === 0 ? 'success' : 'brand', appearance: "filled" }, "T", i + 1), h("ir-input", { class: "ops-task-input", size: "s", placeholder: i === 0 ? 'Change sheets, ...' : 'Amenities refill, ...', maxlength: 30, value: task.name, onChange: (e) => {
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
            } })))))), h("ir-dialog", { key: 'e080102d0c5bbfde77be14d4ffedd276180f372a', ref: el => (this.dialog = el), label: locales.entries.Lcz_Confirmation, lightDismiss: false }, h("span", { key: '0d0bdc7757766c03d8c4d06144a2bb628d9c17c7' }, "This action will reschedule all cleaning tasks. Do you want to continue?"), h("div", { key: 'ad9fc911ac647f1c839efc443db13f912f1445ba', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '77f4379cf1928265e55d3ee90ca19c21be058eb6', size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.selectedCleaningFrequency = (calendar_data.cleaning_frequency ?? housekeeping_store?.hk_criteria?.cleaning_frequencies?.[0])?.code ?? null;
                this.dialog.closeModal();
            } }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: 'e47d39c2be68c5d52c4400d81b84f6de248db779', size: "m", appearance: "filled", variant: "brand", loading: isRequestPending('/Set_Exposed_Cleaning_Frequency'), onClickHandler: () => this.saveCleaningFrequency() }, locales.entries.Lcz_Confirm)))));
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
