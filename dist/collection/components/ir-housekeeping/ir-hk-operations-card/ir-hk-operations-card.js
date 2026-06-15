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
        return (h(Host, { key: '6d9e6fbf5a40097303c124f46ae452283598371f' }, h("wa-card", { key: 'a7623c772e1f695bf7d7b96f7034d86b3f2e3aa4', class: "" }, h("div", { key: '11b3ce3060a4c69437c9b831b74b80276090b313', slot: "header" }, h("span", { key: 'fe4b8d1dc933fd48d04879a0fac151b6581a039c', class: "ops-header__title" }, "Operations Settings")), h("div", { key: '6df118093a3c0984a6d98b9650bc4e7aeb09eb34', class: "ops-settings" }, h("div", { key: 'd03dc8b6bfbe72a8c1c3d68372e17ceb228fca6f', class: "ops-setting-item" }, h("div", { key: 'ba3887689144b3c97d50e02d061dc778e0abe7af', class: "ops-setting-item__info" }, h("span", { key: '2d88df92b0343ac24966ea912ee8088c5c5695c3', class: "ops-setting-item__title" }, "Automatic Check-in & Check-out"), h("span", { key: '7a91fcb1e7f8f8355041a149b7251263b84db626', class: "ops-setting-item__subtitle" }, "Process guests automatically based on property rules")), h("div", { key: 'f19b9f40c4f1e1128d485a9122c342ca93aca6a0', class: "ops-setting-item__controls" }, h("wa-select", { key: '16524e9706225c3c3e9aa1e5220b8a40e8f69189', size: "small", style: { minWidth: '260px' }, value: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', defaultValue: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onchange: (e) => this.saveAutomaticCheckInCheckout(e) }, h("wa-option", { key: '9238e73f45c61c9fccb4b3d149e8e5226a52cf5e', value: "auto" }, locales.entries.Lcz_YesAsPerPropertyPolicy), h("wa-option", { key: '8ae1308a0a4e73312ccba50bfcb3634e937b62a8', value: "manual" }, locales.entries.Lcz_NoIWillDoItManually))))), h("div", { key: '738f7ade351cbbf25431f7a34d3a4a705154f5c2', class: "ops-tasks__header" }, h("p", { key: 'c7b20dc6ba192fdbd072a48445ea2641175a4437', class: "ops-tasks__title" }, "Recurring Tasks"), h("p", { key: 'ae1d45c200549231c5c85f2ad68f3e0b0731683a', class: "ops-tasks__subtitle" }, "Define your housekeeping tasks and frequency")), h("div", { key: '300b6e197afb62054d11755ded9437aea62f6d6d', class: "ops-tasks__list" }, h("div", { key: '20e117649f66e56bf8a8b39d78d52d30a785a11e', class: "ops-task-row ops-task-row--locked" }, h("wa-badge", { key: '2933614de701ec7e578e6eac9687fc991b27e067', variant: "danger", appearance: "filled" }, "CL"), h("span", { key: 'c7c74cf3189dd3e57146baf77d03043357fb8f86', class: "ops-task-locked-label" }, "Cleaning"), h("wa-select", { key: 'c531c59e91a8847865f81ce97ab586da1742459d', class: "ops-task-select", size: "small", value: this.selectedCleaningFrequency, defaultValue: this.selectedCleaningFrequency, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedCleaningFrequency = e.target.value;
                this.dialog.openModal();
            } }, housekeeping_store?.hk_criteria?.cleaning_frequencies.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description)))), h("span", { key: '8ab9ed81000748d489800e93098ba2ee1b9f35e7' })), this.hkTasks.map((task, i) => (h("div", { key: i, class: "ops-task-row" }, h("wa-badge", { variant: i === 0 ? 'success' : 'brand', appearance: "filled" }, "T", i + 1), h("ir-input", { class: "ops-task-input", size: "small", placeholder: i === 0 ? 'Change sheets, ...' : 'Amenities refill, ...', maxlength: 30, value: task.name, onChange: (e) => {
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
            } })))))), h("ir-dialog", { key: '7e464f6026002271f75f29e1b3bc5711b3ddf425', ref: el => (this.dialog = el), label: locales.entries.Lcz_Confirmation, lightDismiss: false }, h("span", { key: 'b778cd030f81b0a864642c0bfd531c03ae1a1fe3' }, "This action will reschedule all cleaning tasks. Do you want to continue?"), h("div", { key: '36b3fdf11a6c5dd5611338c182dc0b7594e1a6d4', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '85f753b6958234647a9cbafb20d451ec8c8e75f7', size: "medium", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.selectedCleaningFrequency = (calendar_data.cleaning_frequency ?? housekeeping_store?.hk_criteria?.cleaning_frequencies?.[0])?.code ?? null;
                this.dialog.closeModal();
            } }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '46502df058f276eeb5f9021cbeff72c6acc2946a', size: "medium", appearance: "filled", variant: "brand", loading: isRequestPending('/Set_Exposed_Cleaning_Frequency'), onClickHandler: () => this.saveCleaningFrequency() }, locales.entries.Lcz_Confirm)))));
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
}
//# sourceMappingURL=ir-hk-operations-card.js.map
