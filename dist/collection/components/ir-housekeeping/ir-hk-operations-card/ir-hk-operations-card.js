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
        return (h(Host, { key: '55e096f0a44174bf31ffe7d837b4dad1c7e3fc81' }, h("wa-card", { key: '3fe230f83048c615766ee9faf0072edaa9a29533', appearance: "plain", class: "hk-operation__card" }, h("div", { key: 'f1db0c0fcf7acf41fb9329582476a3d5f2a6685d', slot: "header" }, h("span", { key: 'd8d4cf487372ec4ed074fc9db885cd51aba18575', class: "ops-header__title" }, "Operations Settings")), h("div", { key: '07fcbfa0561a474cd843ece1b5055dbbb58f64b6', class: "ops-settings" }, h("div", { key: 'a19c6dfdb11a3b63e9628dcd6ab8a1a6e9c8715a', class: "ops-setting-item" }, h("div", { key: '7e7844ffc8b565b4f1ad3e42245ec29a0a6d319d', class: "ops-setting-item__info" }, h("span", { key: '1d41638a18d9c5ca68ed6e57e59de9af4b09e6ec', class: "ops-setting-item__title" }, "Automatic Check-in & Check-out"), h("span", { key: '524e88cecf6543f9fa593a9c4e0712885fce10a1', class: "ops-setting-item__subtitle" }, "Process guests automatically based on property rules")), h("div", { key: '8858da12b05ad8d17a2ace7bdf5a9cc47d29522d', class: "ops-setting-item__controls" }, h("wa-select", { key: '2e040945dcf31da7610a07f7df986903594a91d2', size: "s", style: { minWidth: '260px' }, value: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', defaultValue: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onchange: (e) => this.saveAutomaticCheckInCheckout(e) }, h("wa-option", { key: '1777bdd98aea69c795236fd524f949c183af5339', value: "auto" }, locales.entries.Lcz_YesAsPerPropertyPolicy), h("wa-option", { key: '211f188fd21dd75f91e8255471c78eeee7121f95', value: "manual" }, locales.entries.Lcz_NoIWillDoItManually))))), h("div", { key: '07bd885f05ea56e083b562bd1daf10481c785edd', class: "ops-tasks__header" }, h("p", { key: 'ccecf941a60391627ba9a1a84c8865bbb23ebfd3', class: "ops-tasks__title" }, "Recurring Tasks"), h("p", { key: '7a799a640760de77b9366cf14a766c8ee1cd10a7', class: "ops-tasks__subtitle" }, "Define your housekeeping tasks and frequency")), h("div", { key: '2875c4a3e86df264e19addc9992d080488aec9dd', class: "ops-tasks__list" }, h("div", { key: '7299530d381a5e7ee245570d2feaa0ba951c2785', class: "ops-task-row ops-task-row--locked" }, h("wa-badge", { key: '4b5e6f1ac830935a44580ee4b66a7879c629f944', variant: "danger", appearance: "filled" }, "CL"), h("span", { key: '8e950735acd0cf8c1de34be7eb66f576287a207b', class: "ops-task-locked-label" }, "Cleaning"), h("wa-select", { key: '0db254a3dd5c65b0e3dda3af8daf630b5c52160a', class: "ops-task-select", size: "s", value: this.selectedCleaningFrequency, defaultValue: this.selectedCleaningFrequency, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedCleaningFrequency = e.target.value;
                this.dialog.openModal();
            } }, housekeeping_store?.hk_criteria?.cleaning_frequencies.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description)))), h("span", { key: '106b94949374e4b23c9283fd4ed502b49037dd79' })), this.hkTasks.map((task, i) => (h("div", { key: i, class: "ops-task-row" }, h("wa-badge", { variant: i === 0 ? 'success' : 'brand', appearance: "filled" }, "T", i + 1), h("ir-input", { class: "ops-task-input", size: "s", placeholder: i === 0 ? 'Change sheets, ...' : 'Amenities refill, ...', maxlength: 30, value: task.name, onChange: (e) => {
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
            } })))))), h("ir-dialog", { key: 'f1f278e20d6e5cee5966e2e898de202c32085e66', ref: el => (this.dialog = el), label: locales.entries.Lcz_Confirmation, lightDismiss: false }, h("span", { key: '442262c1f29d66927e18a54e6868053a2d0bc791' }, "This action will reschedule all cleaning tasks. Do you want to continue?"), h("div", { key: 'ab49c98c4920edb5bfd715d0867d26103920d680', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'e713e388406ce4e1bdffd04595ff4c2bbf395ea5', size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.selectedCleaningFrequency = (calendar_data.cleaning_frequency ?? housekeeping_store?.hk_criteria?.cleaning_frequencies?.[0])?.code ?? null;
                this.dialog.closeModal();
            } }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '0e25a59c8861f3190afd4b3fd3f4b38d177e6901', size: "m", appearance: "filled", variant: "brand", loading: isRequestPending('/Set_Exposed_Cleaning_Frequency'), onClickHandler: () => this.saveCleaningFrequency() }, locales.entries.Lcz_Confirm)))));
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
