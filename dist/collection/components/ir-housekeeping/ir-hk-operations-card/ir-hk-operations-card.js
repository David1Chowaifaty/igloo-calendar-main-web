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
        return (h(Host, { key: 'bde5874cf2ccd0935d0c7015214c354634d64981' }, h("wa-card", { key: 'a1268c43b4ae66db39500d71969ec2967b7ec14b', appearance: "plain", class: "hk-operation__card" }, h("div", { key: 'b991d39758e1f9905ac571bd0688a1ed53714bf1', slot: "header" }, h("span", { key: '4ce964b621f5f2ba39fb4da2651e12823fecdc22', class: "ops-header__title" }, "Operations Settings")), h("div", { key: '5666ad6a53563be8318836c30ba09a6493f48187', class: "ops-settings" }, h("div", { key: 'f9db64594e1a7d923872672bf7eb41eb9e9ea725', class: "ops-setting-item" }, h("div", { key: 'd86b72110223b404fa73c4b50eb35923cf7de432', class: "ops-setting-item__info" }, h("span", { key: 'ed65ce8358833489e006daba38f04d225f000cf1', class: "ops-setting-item__title" }, "Automatic Check-in & Check-out"), h("span", { key: 'b548687d5fc308f8fea964cb4c4117222f8c29f2', class: "ops-setting-item__subtitle" }, "Process guests automatically based on property rules")), h("div", { key: '759085880e21aa1402eed27b5da7d4eae32dd9d1', class: "ops-setting-item__controls" }, h("wa-select", { key: 'f11d8102cf845da5d116fbac14ba7d1b13da4cfc', size: "s", style: { minWidth: '260px' }, value: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', defaultValue: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onchange: (e) => this.saveAutomaticCheckInCheckout(e) }, h("wa-option", { key: 'f23e494ac86af17d97952dc4bd56b55ff7a18fec', value: "auto" }, locales.entries.Lcz_YesAsPerPropertyPolicy), h("wa-option", { key: '8e9e2bb9065ca6832e161925b0d505d670bdf941', value: "manual" }, locales.entries.Lcz_NoIWillDoItManually))))), h("div", { key: 'eec2c7c8c0d10f0300f96badb5b119e05d59222f', class: "ops-tasks__header" }, h("p", { key: '70b4a422b0f0e2bfaeef420b240e4e05b0fee600', class: "ops-tasks__title" }, "Recurring Tasks"), h("p", { key: 'f8ce8353869a0c7b7a1f5b79cb2e1234a964b9f9', class: "ops-tasks__subtitle" }, "Define your housekeeping tasks and frequency")), h("div", { key: 'c2af1ef9b4be73cdc92626299eab42137632a106', class: "ops-tasks__list" }, h("div", { key: 'a638ae33bf2035e00c5a7c1700ec8856ebe1dca6', class: "ops-task-row ops-task-row--locked" }, h("wa-badge", { key: '7642561166e73f8d22e65dfbfa4404433c7f9833', variant: "danger", appearance: "filled" }, "CL"), h("span", { key: '490000d6f06dd1610794020b17cd057ce6d624a1', class: "ops-task-locked-label" }, "Cleaning"), h("wa-select", { key: 'f1b616317b7a40e86e841c1fddac503eb30b5c15', class: "ops-task-select", size: "s", value: this.selectedCleaningFrequency, defaultValue: this.selectedCleaningFrequency, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedCleaningFrequency = e.target.value;
                this.dialog.openModal();
            } }, housekeeping_store?.hk_criteria?.cleaning_frequencies.map(v => (h("wa-option", { key: v.code, value: v.code }, v.description)))), h("span", { key: '784f25b751377eb441eeb7d4211866b4dcd9313d' })), this.hkTasks.map((task, i) => (h("div", { key: i, class: "ops-task-row" }, h("wa-badge", { variant: i === 0 ? 'success' : 'brand', appearance: "filled" }, "T", i + 1), h("ir-input", { class: "ops-task-input", size: "s", placeholder: i === 0 ? 'Change sheets, ...' : 'Amenities refill, ...', maxlength: 30, value: task.name, onChange: (e) => {
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
            } })))))), h("ir-dialog", { key: 'ced610c5002b2a37a5b1c52a8c28737a52f5522e', ref: el => (this.dialog = el), label: locales.entries.Lcz_Confirmation, lightDismiss: false }, h("span", { key: 'a7990ae303c60fcdfb4c290fad92aa06c8e017f2' }, "This action will reschedule all cleaning tasks. Do you want to continue?"), h("div", { key: 'e9720efae8983f8c93af75d300a794d1f2460ecc', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'd8558e8ea702471c7b916710b2b5055551c88189', size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => {
                this.selectedCleaningFrequency = (calendar_data.cleaning_frequency ?? housekeeping_store?.hk_criteria?.cleaning_frequencies?.[0])?.code ?? null;
                this.dialog.closeModal();
            } }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: 'ede130c862603c6ca9e2966a220ce91740dbbdd6', size: "m", appearance: "filled", variant: "brand", loading: isRequestPending('/Set_Exposed_Cleaning_Frequency'), onClickHandler: () => this.saveCleaningFrequency() }, locales.entries.Lcz_Confirm)))));
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
