import ApiClient from "../../models/ApiClient";
import { HouseKeepingService } from "../../services/housekeeping.service";
import { RoomService } from "../../services/room.service";
import calendar_data from "../../stores/calendar-data";
import { updateHKStore } from "../../stores/housekeeping.store";
import { h } from "@stencil/core";
import locales from "../../stores/locales.store";
import { SetupService } from "../../services/setup/index";
export class IrHousekeeping {
    language = '';
    ticket = '';
    propertyid;
    p;
    baseUrl;
    isLoading = false;
    frequencies = [];
    roomService = new RoomService();
    houseKeepingService = new HouseKeepingService();
    setupService = new SetupService();
    ApiClient = new ApiClient();
    componentWillLoad() {
        if (this.baseUrl) {
            this.ApiClient.setBaseUrl(this.baseUrl);
        }
        if (this.ticket !== '') {
            this.ApiClient.setApiClient(this.ticket);
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
        this.ApiClient.setApiClient(this.ticket);
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
            updateHKStore('default_properties', { ApiClient: this.ticket, property_id: propertyId, language: this.language });
            const [frequencies] = await Promise.all([
                this.setupService.getSetupEntriesByTableName('_HK_FREQUENCY'),
                this.roomService.fetchLanguage(this.language, ['_HK_FRONT', '_PMS_FRONT']),
                this.propertyid &&
                    this.roomService.getExposedProperty({
                        id: propertyId,
                        language: this.language,
                        is_backend: true,
                        include_sales_rate_plans: true,
                    }),
                calendar_data.housekeeping_enabled && this.houseKeepingService.getExposedHKSetup(propertyId),
            ]);
            this.frequencies = frequencies;
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        if (this.isLoading) {
            return h("ir-loading-screen", null);
        }
        return (h("ir-page", { label: locales.entries.Lcz_HouseKeepingAndCheckInSetup }, h("ir-hk-operations-card", { frequencies: this.frequencies }), calendar_data.housekeeping_enabled && h("ir-hk-team", null)));
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
                "reflect": false,
                "attribute": "language",
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
                "reflect": false,
                "attribute": "ticket",
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
                "reflect": false,
                "attribute": "propertyid"
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
                "reflect": false,
                "attribute": "p"
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
                "reflect": false,
                "attribute": "base-url"
            }
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "frequencies": {}
        };
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
