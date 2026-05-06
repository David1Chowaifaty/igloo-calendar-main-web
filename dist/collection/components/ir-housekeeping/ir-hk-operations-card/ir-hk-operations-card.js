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
        return (h(Host, { key: '7478b9dceb1d9ab6b1c37a7fa59a425b2cade832' }, h("wa-card", { key: '3b87347e569c5185ea61c2d62c202ca5e41a2421', class: "" }, h("div", { key: '403ac7719d0766442f2c5600188fa974433f0f15', slot: "header" }, h("span", { key: 'fb68670777631d3589daf056a87bc453d5fd1f97', class: "ops-header__title" }, "Operations Settings")), h("div", { key: 'bdd0658394a7114507f5d9375bdc1ec2de43cb1a', class: "ops-settings" }, h("div", { key: '180e9ab9cff8a900a07d4b98c07b132e848b1d1d', class: "ops-setting-item" }, h("div", { key: 'cbdf867d52a8935aeaa46af5f514dd01839abd90', class: "ops-setting-item__info" }, h("span", { key: 'ca97e93ffe19665cac24fa177cafa60753fb570d', class: "ops-setting-item__title" }, "Automatic Check-in & Check-out"), h("span", { key: '5c22ebd06e611272e4c578999c41dede5120a469', class: "ops-setting-item__subtitle" }, "Process guests automatically based on property rules")), h("div", { key: '26745b2279f2a43a2d1f51eb6f7ed96fd1268dd1', class: "ops-setting-item__controls" }, h("wa-select", { key: 'c1af291e60c3204777dc20ed6800666b8d64246e', size: "small", style: { minWidth: '260px' }, value: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', defaultValue: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onchange: (e) => this.saveAutomaticCheckInCheckout(e) }, h("wa-option", { key: 'e026dc4ae7e3909b6a4e55401adff61902c9ae11', value: "auto" }, locales.entries.Lcz_YesAsPerPropertyPolicy), h("wa-option", { key: '546ebe27cd35c942bf621d7e7cf326538d586bd2', value: "manual" }, locales.entries.Lcz_NoIWillDoItManually))))), h("div", { key: 'c292d099948eec90db74701d99d87bb2d9743e90', class: "ops-tasks__header" }, h("p", { key: '478d4e406374cf96c60c57f50a3552b2ae29224f', class: "ops-tasks__title" }, "Recurring Tasks"), h("p", { key: '986f9f220bd78bdeeb47ed24f57d69bd34abd16d', class: "ops-tasks__subtitle" }, "Define your housekeeping tasks and frequency")), h("div", { key: 'b5602b60bd570a206b9e026d71349963b8fbb8e8', class: "ops-tasks__list" }, h("div", { key: 'b6fd0d3173ccc287460b967a427c15a1de10f97a', class: "ops-task-row ops-task-row--locked" }, h("wa-badge", { key: 'b7bd10c5c4c510dc77f78ffe952e10e7b3dc7835', variant: "danger", appearance: "filled" }, "CL"), h("span", { key: '4b36d048eaa4b50de8f02b553acd14e996dde3f4', class: "ops-task-locked-label" }, "Cleaning"), h("wa-select", { key: '470eda2f46b9a7c4e61a4ed2855aff171d18b50a', class: "ops-task-select", size: "small", value: this.selectedCleaningFrequency, defaultValue: this.selectedCleaningFrequency, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedCleaningFrequency = e.target.value;
                this.dialog.openModal();
            } }, housekeeping_store?.hk_criteria?.cleaning_frequencies.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description)))), h("span", { key: 'c34c6d06694e7d347482ad753694a2f716c33396' })), this.hkTasks.map((task, i) => (h("div", { key: i, class: "ops-task-row" }, h("wa-badge", { variant: i === 0 ? 'success' : 'brand', appearance: "filled" }, "T", i + 1), h("ir-input", { class: "ops-task-input", size: "small", placeholder: i === 0 ? 'Change sheets, ...' : 'Amenities refill, ...', maxlength: 30, value: task.name, onChange: (e) => {
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
            } })))))), h("ir-dialog", { key: '80c334eb8993663bc91d33f948b3e7491619efdc', ref: el => (this.dialog = el), label: locales.entries.Lcz_Confirmation, lightDismiss: false }, h("span", { key: '27ce92539cf4350003978f1e0200e002e638d522' }, "This action will reschedule all cleaning tasks. Do you want to continue?"), h("div", { key: 'be02cd108c885863a34bfa384ad85e0d0c43979f', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '38e3568830fe3e628d3d20883aabc0ff6f920b2e', size: "medium", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.selectedCleaningFrequency = (calendar_data.cleaning_frequency ?? housekeeping_store?.hk_criteria?.cleaning_frequencies?.[0])?.code ?? null;
                this.dialog.closeModal();
            } }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '56950f421c59b57b685ad112f227ba4da3e0ecac', size: "medium", appearance: "filled", variant: "brand", loading: isRequestPending('/Set_Exposed_Cleaning_Frequency'), onClickHandler: () => this.saveCleaningFrequency() }, locales.entries.Lcz_Confirm)))));
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
