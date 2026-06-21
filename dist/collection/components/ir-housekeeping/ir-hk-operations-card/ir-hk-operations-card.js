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
        return (h(Host, { key: '8010e5ba502b6281cbb47c414334aa75f5095678' }, h("wa-card", { key: '1c138d94580a28456d8c120d2a1cb0b61e97e789', class: "" }, h("div", { key: '228c644b00d49db055045ccd105ed2015f9cdf3a', slot: "header" }, h("span", { key: '361fb480e89d70cc0585b5bea08edf3c5323888b', class: "ops-header__title" }, "Operations Settings")), h("div", { key: '2bffd807b5328259d003ee16aa6e4b0a72c99620', class: "ops-settings" }, h("div", { key: 'ca0d02fd81075077695f0be9342403e7fad8d032', class: "ops-setting-item" }, h("div", { key: 'adfe17dd081669aca0a789cd1848c5650ef0bffd', class: "ops-setting-item__info" }, h("span", { key: 'f44d779c0c807ed7c22b890d9ec0ca24410d4020', class: "ops-setting-item__title" }, "Automatic Check-in & Check-out"), h("span", { key: 'ffb87525948bac44a9b0d5e947ef78b8f7f83cb6', class: "ops-setting-item__subtitle" }, "Process guests automatically based on property rules")), h("div", { key: 'cb14ecfc06a4853a322cc962a8fc901b758851cd', class: "ops-setting-item__controls" }, h("wa-select", { key: 'ef8e7df8575dbf8ca329df38cb4738d49fd3eb2d', size: "s", style: { minWidth: '260px' }, value: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', defaultValue: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onchange: (e) => this.saveAutomaticCheckInCheckout(e) }, h("wa-option", { key: 'cf5dd1939e5b5ee4ad0f9015b6d2e175d0154989', value: "auto" }, locales.entries.Lcz_YesAsPerPropertyPolicy), h("wa-option", { key: '1746ae721768f783aa491f02481b3fa1722edcf5', value: "manual" }, locales.entries.Lcz_NoIWillDoItManually))))), h("div", { key: 'c269cfd1e3cf2d8c9b8275c0c051da4062f64b66', class: "ops-tasks__header" }, h("p", { key: 'b011fde281c4fafa806e5e972359f4bea8719b93', class: "ops-tasks__title" }, "Recurring Tasks"), h("p", { key: '2b409177c414afc7b87f00428c3b79b7bbcad3aa', class: "ops-tasks__subtitle" }, "Define your housekeeping tasks and frequency")), h("div", { key: 'ccf710e3e593f11449dbcb8fca05ac78deab6d2a', class: "ops-tasks__list" }, h("div", { key: '35371abe34a158cd355f2518c277cb374c133ad7', class: "ops-task-row ops-task-row--locked" }, h("wa-badge", { key: '95f133e05e5c6b673d859c959362ab4305bf0bcb', variant: "danger", appearance: "filled" }, "CL"), h("span", { key: 'a487f702ce3b31e972684f1caa4a4bb869606090', class: "ops-task-locked-label" }, "Cleaning"), h("wa-select", { key: '8b93bd826628123de545fda8f184d05df6e6892a', class: "ops-task-select", size: "s", value: this.selectedCleaningFrequency, defaultValue: this.selectedCleaningFrequency, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedCleaningFrequency = e.target.value;
                this.dialog.openModal();
            } }, housekeeping_store?.hk_criteria?.cleaning_frequencies.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description)))), h("span", { key: '365ad14fa2647acfdb75d76b080ae46d88d0c7be' })), this.hkTasks.map((task, i) => (h("div", { key: i, class: "ops-task-row" }, h("wa-badge", { variant: i === 0 ? 'success' : 'brand', appearance: "filled" }, "T", i + 1), h("ir-input", { class: "ops-task-input", size: "s", placeholder: i === 0 ? 'Change sheets, ...' : 'Amenities refill, ...', maxlength: 30, value: task.name, onChange: (e) => {
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
            } })))))), h("ir-dialog", { key: 'ccb2448ca6a2220efebaa450e74a3a772c9887ab', ref: el => (this.dialog = el), label: locales.entries.Lcz_Confirmation, lightDismiss: false }, h("span", { key: '5f553aeb0017af3d3a1f99d62064d79f4edc666d' }, "This action will reschedule all cleaning tasks. Do you want to continue?"), h("div", { key: 'faf30a65b08a4259f97f35f45b308aee38cb578e', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'c7b2c45806b12c08f55fbf2d3bb8080404f37bed', size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.selectedCleaningFrequency = (calendar_data.cleaning_frequency ?? housekeeping_store?.hk_criteria?.cleaning_frequencies?.[0])?.code ?? null;
                this.dialog.closeModal();
            } }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '025d04d213821eb6b5a0c4c7a7326293b0bf7afd', size: "m", appearance: "filled", variant: "brand", loading: isRequestPending('/Set_Exposed_Cleaning_Frequency'), onClickHandler: () => this.saveCleaningFrequency() }, locales.entries.Lcz_Confirm)))));
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
