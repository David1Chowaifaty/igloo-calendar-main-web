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
        return (h(Host, { key: '05b80422c6566cb2449b75bc0dfee7dccffaafa0' }, h("wa-card", { key: '0e1859930257d06f49219ea53032b983869e949b', class: "" }, h("div", { key: 'e65748412b40bf27cb5be7ce2d938fcd38d8e989', slot: "header" }, h("span", { key: 'd6578ea5b695832b90781b6267437910cf8fcf27', class: "ops-header__title" }, "Operations Settings")), h("div", { key: '71313e64fb7d1bbc4ac28b5f3f5ebd098755c48c', class: "ops-settings" }, h("div", { key: '25af052289e4239dc510380d0af3eaf37521dff6', class: "ops-setting-item" }, h("div", { key: '4d39ecd960b0713c3b1df3828b492a16d8fd8ce8', class: "ops-setting-item__info" }, h("span", { key: '2af4ad4a2ec50d50b60a84f7b691fc6f73a99de2', class: "ops-setting-item__title" }, "Automatic Check-in & Check-out"), h("span", { key: '422835a5405bc653cb4d039d75afee29d1676215', class: "ops-setting-item__subtitle" }, "Process guests automatically based on property rules")), h("div", { key: 'e25efec1216251b503837534dfec00451eccbe55', class: "ops-setting-item__controls" }, h("wa-select", { key: '7ab26baf270eeb6342fb75d69a6a55b13d250968', size: "s", style: { minWidth: '260px' }, value: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', defaultValue: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onchange: (e) => this.saveAutomaticCheckInCheckout(e) }, h("wa-option", { key: '6079003c68004f05f9aac189727fa348c6b84eda', value: "auto" }, locales.entries.Lcz_YesAsPerPropertyPolicy), h("wa-option", { key: '06f5f7a55334d9a78043d0a2221b21e10c2350b9', value: "manual" }, locales.entries.Lcz_NoIWillDoItManually))))), h("div", { key: '340d1676a3540564d0e1ff1965d0cb5bc4f7d502', class: "ops-tasks__header" }, h("p", { key: '756d1fb0c5ed0670df22037778d2572266efc012', class: "ops-tasks__title" }, "Recurring Tasks"), h("p", { key: '490e3a4d07623c098a92bbb6e500c3b52431e9c8', class: "ops-tasks__subtitle" }, "Define your housekeeping tasks and frequency")), h("div", { key: '445d15218c6b688d770cac7b37fe8820d4f58fee', class: "ops-tasks__list" }, h("div", { key: '01a6a5e500f3cbec344259b3b8763190ecd6d698', class: "ops-task-row ops-task-row--locked" }, h("wa-badge", { key: '9c579f7f21789dceb1ac48898e4f18d1c102c583', variant: "danger", appearance: "filled" }, "CL"), h("span", { key: '9aa9b57d617b0cce5cf3dcaa64d815dac0e1e393', class: "ops-task-locked-label" }, "Cleaning"), h("wa-select", { key: '208f63a5d8082a510430358211c2162bd8eb378d', class: "ops-task-select", size: "s", value: this.selectedCleaningFrequency, defaultValue: this.selectedCleaningFrequency, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedCleaningFrequency = e.target.value;
                this.dialog.openModal();
            } }, housekeeping_store?.hk_criteria?.cleaning_frequencies.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description)))), h("span", { key: '82f8d2badf439c7c81f1bf66c6fe1e680d6562ca' })), this.hkTasks.map((task, i) => (h("div", { key: i, class: "ops-task-row" }, h("wa-badge", { variant: i === 0 ? 'success' : 'brand', appearance: "filled" }, "T", i + 1), h("ir-input", { class: "ops-task-input", size: "s", placeholder: i === 0 ? 'Change sheets, ...' : 'Amenities refill, ...', maxlength: 30, value: task.name, onChange: (e) => {
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
            } })))))), h("ir-dialog", { key: '593f53acbe9fc5e960d05e1aedd2bf604c7f1ca8', ref: el => (this.dialog = el), label: locales.entries.Lcz_Confirmation, lightDismiss: false }, h("span", { key: 'a9aec73a3c7a5767f526349ff6e3908c3c4301ae' }, "This action will reschedule all cleaning tasks. Do you want to continue?"), h("div", { key: '96c887975e10f7510d984893b49e8a65ca1f7efa', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'da14726cddcb40b6358625ec7102b5158829595d', size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.selectedCleaningFrequency = (calendar_data.cleaning_frequency ?? housekeeping_store?.hk_criteria?.cleaning_frequencies?.[0])?.code ?? null;
                this.dialog.closeModal();
            } }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '3330b8e550691d74f75e586124fcda7b2cd137be', size: "m", appearance: "filled", variant: "brand", loading: isRequestPending('/Set_Exposed_Cleaning_Frequency'), onClickHandler: () => this.saveCleaningFrequency() }, locales.entries.Lcz_Confirm)))));
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
