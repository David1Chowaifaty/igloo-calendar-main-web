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
        return (h(Host, { key: 'c44468280a7cfb5cf772729853354b528b0e0552' }, h("wa-card", { key: '137f401f498c7983107024011c6be12d2c5d75a1', class: "" }, h("div", { key: '7d6ed608d41ef4c4e3c66359888bac7737d092d5', slot: "header" }, h("span", { key: '6b0d8100ec373fe655b96297a1afa1e00a2317aa', class: "ops-header__title" }, "Operations Settings")), h("div", { key: '97af184fab2ccc1c545ab904f9a8c14778aadc8d', class: "ops-settings" }, h("div", { key: '693c7f02579f9e12570f81a52baab16d8c3b1ba1', class: "ops-setting-item" }, h("div", { key: '33773e111eb2cb32bbaeee4320539023bdc6971a', class: "ops-setting-item__info" }, h("span", { key: 'baa17e08e912e53e7ff23841189ffa6ad3766521', class: "ops-setting-item__title" }, "Automatic Check-in & Check-out"), h("span", { key: '61eb3fa4a5303ca8217ea00db159dc866e6fcb5f', class: "ops-setting-item__subtitle" }, "Process guests automatically based on property rules")), h("div", { key: '43d7e75bdb32d30295b57555e8121ddb8d720410', class: "ops-setting-item__controls" }, h("wa-select", { key: 'a679d6621a03a38884f7701a858df579e1bafaa0', size: "s", style: { minWidth: '260px' }, value: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', defaultValue: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onchange: (e) => this.saveAutomaticCheckInCheckout(e) }, h("wa-option", { key: '5b22eeb3e07816dbdb917b559d9c85ca2cc47ff0', value: "auto" }, locales.entries.Lcz_YesAsPerPropertyPolicy), h("wa-option", { key: '42632069345619f9988991acec81745c9af9f418', value: "manual" }, locales.entries.Lcz_NoIWillDoItManually))))), h("div", { key: 'f54810b21b5a605166ea61f5e38cc0b1624adbe7', class: "ops-tasks__header" }, h("p", { key: '7fc576ec83a100af19223bd4020c9e1488812707', class: "ops-tasks__title" }, "Recurring Tasks"), h("p", { key: '2046f189d049bfbdf6248cfce536af259f11d3b4', class: "ops-tasks__subtitle" }, "Define your housekeeping tasks and frequency")), h("div", { key: '17bcba3076952f59c743abe65793be6a52b2128f', class: "ops-tasks__list" }, h("div", { key: 'e59adfdb7575fc4c7284a7d6f8fddf1e2b78540a', class: "ops-task-row ops-task-row--locked" }, h("wa-badge", { key: '649d1f1a88f4845a21c8c10bf76a463ce301affe', variant: "danger", appearance: "filled" }, "CL"), h("span", { key: 'ce28641d6ccdf76e97a48ff3b930dc5fe6567229', class: "ops-task-locked-label" }, "Cleaning"), h("wa-select", { key: '13c542b5232a5350ee4fe8a7e0f206faedeb361a', class: "ops-task-select", size: "s", value: this.selectedCleaningFrequency, defaultValue: this.selectedCleaningFrequency, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedCleaningFrequency = e.target.value;
                this.dialog.openModal();
            } }, housekeeping_store?.hk_criteria?.cleaning_frequencies.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description)))), h("span", { key: '14ee751b93835ca0d7cd6e871a5e09efa51b9912' })), this.hkTasks.map((task, i) => (h("div", { key: i, class: "ops-task-row" }, h("wa-badge", { variant: i === 0 ? 'success' : 'brand', appearance: "filled" }, "T", i + 1), h("ir-input", { class: "ops-task-input", size: "s", placeholder: i === 0 ? 'Change sheets, ...' : 'Amenities refill, ...', maxlength: 30, value: task.name, onChange: (e) => {
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
            } })))))), h("ir-dialog", { key: '6e10becb0654c54e05610e07e18e398f03eb7bc2', ref: el => (this.dialog = el), label: locales.entries.Lcz_Confirmation, lightDismiss: false }, h("span", { key: '59afaa05154e2a400abd8b09a648ed5e5d1d0714' }, "This action will reschedule all cleaning tasks. Do you want to continue?"), h("div", { key: '2e636dfbab52e5b5f4033d8f939e31a99e74432e', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'a8bc1a1d5d6e2aee23889de011b4a0adbf70fe07', size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.selectedCleaningFrequency = (calendar_data.cleaning_frequency ?? housekeeping_store?.hk_criteria?.cleaning_frequencies?.[0])?.code ?? null;
                this.dialog.closeModal();
            } }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: 'f32a6bd50e8fff636f7ff504d8c5befd8a4a8f6d', size: "m", appearance: "filled", variant: "brand", loading: isRequestPending('/Set_Exposed_Cleaning_Frequency'), onClickHandler: () => this.saveCleaningFrequency() }, locales.entries.Lcz_Confirm)))));
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
