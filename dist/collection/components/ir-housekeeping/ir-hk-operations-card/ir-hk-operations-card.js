import { RoomService } from "../../../services/room.service";
import { PropertyService } from "../../../services/property.service";
import { HouseKeepingService } from "../../../services/housekeeping.service";
import calendar_data from "../../../stores/calendar-data";
import housekeeping_store from "../../../stores/housekeeping.store";
import { isRequestPending } from "../../../stores/ir-interceptor.store";
import { Host, h } from "@stencil/core";
import { showToast } from "../../../utils/utils";
import { t } from "../../../services/locale/t";
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
        return (h(Host, { key: '46aad71cd2077e5e3fd77064de2ae0de9865b26d' }, h("wa-card", { key: 'b6ccfc70b6629fdf7dcd05c9f903d78cece3bd8c', appearance: "plain", class: "hk-operation__card" }, h("div", { key: '68e41f7d605cfaed01c447f2b484f772e7b64cff', slot: "header" }, h("span", { key: '146faca2b3d732fb2e77b6d120d137e0c34dd623', class: "ops-header__title" }, "Operations Settings")), h("div", { key: 'fc5ad675ea67d48f4f33fc3b292c4e57a342d6dc', class: "ops-settings" }, h("div", { key: 'cbe1bec422dd1b921d098c93f646d13f1d154788', class: "ops-setting-item" }, h("div", { key: 'b2c84019eade855271c7503cd90a32425a5c615b', class: "ops-setting-item__info" }, h("span", { key: '37ca4564b334a11a6fb3d0471e947ab77c86d7ca', class: "ops-setting-item__title" }, "Automatic Check-in & Check-out"), h("span", { key: '96cacffd8020ee3be6dc53019d9af5dba91fc078', class: "ops-setting-item__subtitle" }, "Process guests automatically based on property rules")), h("div", { key: '099c41a3e8a73e7d92561acae26542e49740f137', class: "ops-setting-item__controls" }, h("wa-select", { key: '9cf43a079b1b0cdbba6381a0ff8d9fba568236cb', size: "s", style: { minWidth: '260px' }, value: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', defaultValue: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onchange: (e) => this.saveAutomaticCheckInCheckout(e) }, h("wa-option", { key: '44892a538a693dc2275b95c545be79caff094d1b', value: "auto" }, t('Lcz_YesAsPerPropertyPolicy')), h("wa-option", { key: '2c30a9fcfbb4f66b6bd6a38bc31f2433d758c6e3', value: "manual" }, t('Lcz_NoIWillDoItManually')))))), h("div", { key: 'b05009169272b05af7c7f137dd715c71e36b5692', class: "ops-tasks__header" }, h("p", { key: '41327308e8f96f541874b71def55414b82e44406', class: "ops-tasks__title" }, "Recurring Tasks"), h("p", { key: 'c53733a1372fbe8579790bb942a97860adf8ed40', class: "ops-tasks__subtitle" }, "Define your housekeeping tasks and frequency")), h("div", { key: '75226fef88fc1c6989f02455c1c33b843c274d27', class: "ops-tasks__list" }, h("div", { key: 'afb2d46abf7e54bb4f3297fafd6af8526e9ad751', class: "ops-task-row ops-task-row--locked" }, h("wa-badge", { key: '1c689f3284986bbc7b9a31c0082a6872cd38bdc7', variant: "danger", appearance: "filled" }, "CL"), h("span", { key: 'c17223d1e4d34c94ac0f8dd8d72a1e1b9f6749b1', class: "ops-task-locked-label" }, "Cleaning"), h("wa-select", { key: 'dd05d1e22b69ba5863d9277f875845dc3e607d93', class: "ops-task-select", size: "s", value: this.selectedCleaningFrequency, defaultValue: this.selectedCleaningFrequency, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedCleaningFrequency = e.target.value;
                this.dialog.openModal();
            } }, housekeeping_store?.hk_criteria?.cleaning_frequencies.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description)))), h("span", { key: '9c65d01aa2e955ddbd2d8ff9fcd315a3cc2bc588' })), this.hkTasks.map((task, i) => (h("div", { key: i, class: "ops-task-row" }, h("wa-badge", { variant: i === 0 ? 'success' : 'brand', appearance: "filled" }, "T", i + 1), h("ir-input", { class: "ops-task-input", size: "s", placeholder: i === 0 ? 'Change sheets, ...' : 'Amenities refill, ...', maxlength: 30, value: task.name, onChange: (e) => {
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
            } })))))), h("ir-dialog", { key: '05300953bd00e790d252a1898a44d37cacc4e00d', ref: el => (this.dialog = el), label: t('Lcz_Confirmation'), lightDismiss: false }, h("span", { key: 'ecf9fd2875e78a83a704fabdaf099481648a271e' }, "This action will reschedule all cleaning tasks. Do you want to continue?"), h("div", { key: '2e21ac9dac646bc22d69bf83f58e87dce88df70e', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '5b674d32938295df499f18ab0981fcb72d8d0713', size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.selectedCleaningFrequency = (calendar_data.cleaning_frequency ?? housekeeping_store?.hk_criteria?.cleaning_frequencies?.[0])?.code ?? null;
                this.dialog.closeModal();
            } }, t('Lcz_Cancel')), h("ir-custom-button", { key: '74545ff2e25a6edbcdd2f219e3441a889deaa420', size: "m", appearance: "filled", variant: "brand", loading: isRequestPending('/Set_Exposed_Cleaning_Frequency'), onClickHandler: () => this.saveCleaningFrequency() }, t('Lcz_Confirm'))))));
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
                    "original": "SetupEntries[]",
                    "resolved": "SetupEntries[]",
                    "references": {
                        "SetupEntries": {
                            "location": "import",
                            "path": "@/models/IBooking",
                            "id": "src/models/IBooking.ts::SetupEntries",
                            "referenceLocation": "SetupEntries"
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
