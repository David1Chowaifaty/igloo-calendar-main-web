import Token from "../../models/Token";
import { HouseKeepingService } from "../../services/housekeeping.service";
import { RoomService } from "../../services/room.service";
import calendar_data from "../../stores/calendar-data";
import housekeeping_store, { updateHKStore } from "../../stores/housekeeping.store";
import { Host, h } from "@stencil/core";
import locales from "../../stores/locales.store";
import { PropertyService } from "../../services/property.service";
import { isRequestPending } from "../../stores/ir-interceptor.store";
export class IrHousekeeping {
    language = '';
    ticket = '';
    propertyid;
    p;
    baseUrl;
    isLoading = false;
    toast;
    roomService = new RoomService();
    houseKeepingService = new HouseKeepingService();
    propertyService = new PropertyService();
    token = new Token();
    modal;
    selectedCleaningFrequency;
    componentWillLoad() {
        if (this.baseUrl) {
            this.token.setBaseUrl(this.baseUrl);
        }
        if (this.ticket !== '') {
            this.token.setToken(this.ticket);
            this.initializeApp();
        }
    }
    async handleResetData(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.houseKeepingService.getExposedHKSetup(this.propertyid);
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
        this.initializeApp();
    }
    async initializeApp() {
        try {
            this.isLoading = true;
            let propertyId = this.propertyid;
            if (!propertyId) {
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                    include_sales_rate_plans: true,
                });
                propertyId = propertyData.My_Result.id;
            }
            updateHKStore('default_properties', { token: this.ticket, property_id: propertyId, language: this.language });
            const requests = [];
            if (calendar_data.housekeeping_enabled) {
                requests.push(this.houseKeepingService.getExposedHKSetup(propertyId));
            }
            requests.push(this.roomService.fetchLanguage(this.language, ['_HK_FRONT', '_PMS_FRONT']));
            if (this.propertyid) {
                requests.push(this.roomService.getExposedProperty({
                    id: propertyId,
                    language: this.language,
                    is_backend: true,
                    include_sales_rate_plans: true,
                }));
            }
            await Promise.all(requests);
            this.selectedCleaningFrequency = calendar_data.cleaning_frequency?.code;
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    async saveAutomaticCheckInCheckout(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        try {
            await this.roomService.SetAutomaticCheckInOut({
                property_id: housekeeping_store.default_properties.property_id,
                flag: e.detail === 'auto',
            });
            this.toast.emit({
                position: 'top-right',
                title: 'Saved Successfully',
                description: '',
                type: 'success',
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    async saveCleaningFrequency(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        try {
            await this.propertyService.setExposedCleaningFrequency({
                property_id: housekeeping_store.default_properties.property_id,
                code: this.selectedCleaningFrequency,
            });
            calendar_data.cleaning_frequency = { code: this.selectedCleaningFrequency, description: '' };
            this.toast.emit({
                position: 'top-right',
                title: 'Saved Successfully',
                description: '',
                type: 'success',
            });
            this.modal.closeModal();
        }
        catch (error) {
            console.log(error);
        }
    }
    render() {
        if (this.isLoading) {
            return h("ir-loading-screen", null);
        }
        console.log(calendar_data.cleaning_frequency);
        return (h(Host, null, h("ir-interceptor", null), h("ir-toast", null), h("section", { class: "p-1" }, h("h3", { class: "mb-2" }, locales.entries.Lcz_HouseKeepingAndCheckInSetup), h("div", { class: "card p-1" }, h("ir-title", { borderShown: true, label: "Operations Settings" }), h("div", { class: 'd-flex align-items-center mb-1' }, h("p", { class: "my-0 py-0 mr-1" }, locales.entries.Lcz_CheckInOutGuestsAutomatically), h("ir-select", { showFirstOption: false, selectedValue: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onSelectChange: e => this.saveAutomaticCheckInCheckout(e), data: [
                { text: locales.entries.Lcz_YesAsPerPropertyPolicy, value: 'auto' },
                { text: locales.entries.Lcz_NoIWillDoItManually, value: 'manual' },
            ] })), h("div", { class: 'd-flex align-items-center' }, h("p", { class: "my-0 py-0 mr-1" }, locales.entries.Lcz_CleaningFrequency, ":"), h("ir-select", { showFirstOption: false, selectedValue: this.selectedCleaningFrequency, onSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedCleaningFrequency = e.detail;
                this.modal.openModal();
            }, data: housekeeping_store?.hk_criteria?.cleaning_frequencies.map(v => ({
                text: v.description,
                value: v.code,
            })) }))), calendar_data.housekeeping_enabled && h("ir-hk-team", { class: "mb-1" }), h("ir-modal", { autoClose: false, ref: el => (this.modal = el), isLoading: isRequestPending('/Set_Exposed_Cleaning_Frequency'), onConfirmModal: this.saveCleaningFrequency.bind(this), iconAvailable: true, onCancelModal: () => {
                this.selectedCleaningFrequency = calendar_data.cleaning_frequency?.code;
            }, icon: "ft-alert-triangle danger h1", leftBtnText: locales.entries.Lcz_Cancel, rightBtnText: locales.entries.Lcz_Confirm, leftBtnColor: "secondary", rightBtnColor: 'primary', modalTitle: locales.entries.Lcz_Confirmation, modalBody: 'This action will reschedule all cleaning tasks. Do you want to continue?' }))));
    }
    static get is() { return "ir-housekeeping"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-housekeeping.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-housekeeping.css"]
        };
    }
    static get properties() {
        return {
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "language",
                "reflect": false,
                "defaultValue": "''"
            },
            "ticket": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "ticket",
                "reflect": false,
                "defaultValue": "''"
            },
            "propertyid": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "propertyid",
                "reflect": false
            },
            "p": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "p",
                "reflect": false
            },
            "baseUrl": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "base-url",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "isLoading": {}
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
    static get watchers() {
        return [{
                "propName": "ticket",
                "methodName": "ticketChanged"
            }];
    }
    static get listeners() {
        return [{
                "name": "resetData",
                "method": "handleResetData",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-housekeeping.js.map
