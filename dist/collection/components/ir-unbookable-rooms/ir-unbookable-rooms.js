import { Host, h } from "@stencil/core";
import Token from "../../models/Token";
import { PropertyService } from "../../services/property.service";
export class IrUnbookableRooms {
    ticket = '';
    propertyid;
    mode = 'default';
    //number in months
    period_to_check = 2;
    //number in days
    consecutive_period = 14;
    isLoading = false;
    errorMessage = '';
    unbookableRooms = [];
    allowedProperties = null;
    filters = { period_to_check: 2, consecutive_period: 14, country: 'all' };
    progressFilters = { period_to_check: 2, consecutive_period: 14 };
    lastUpdatedLabel = '';
    isPageLoading = true;
    tokenService = new Token();
    propertyService = new PropertyService();
    componentWillLoad() {
        this.filters = {
            country: 'all',
            period_to_check: this.normalizePositiveNumber(this.period_to_check, 2),
            consecutive_period: this.normalizePositiveNumber(this.consecutive_period, 14),
        };
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            this.initializeApp();
        }
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.tokenService.setToken(this.ticket);
        this.initializeApp();
    }
    modeChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.initializeApp();
    }
    propertyIdChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        if (this.resolveMode() === 'default') {
            this.initializeApp();
        }
    }
    periodToCheckChanged(newValue) {
        this.filters = { ...this.filters, period_to_check: this.normalizePositiveNumber(newValue, this.filters.period_to_check) };
    }
    consecutivePeriodChanged(newValue) {
        this.filters = { ...this.filters, consecutive_period: this.normalizePositiveNumber(newValue, this.filters.consecutive_period) };
    }
    normalizePositiveNumber(value, fallback) {
        const parsed = Number(value);
        if (Number.isFinite(parsed) && parsed > 0) {
            return Math.floor(parsed);
        }
        return fallback;
    }
    resolveMode() {
        return this.mode === 'mpo' ? 'mpo' : 'default';
    }
    async initializeApp() {
        if (!this.ticket) {
            return;
        }
        try {
            this.errorMessage = '';
            this.isLoading = true;
            this.unbookableRooms = [];
            if (this.resolveMode() === 'mpo') {
                this.allowedProperties = await this.propertyService.getExposedAllowedProperties();
            }
            else {
                this.allowedProperties = null;
            }
            await this.fetchUnbookableRooms();
        }
        catch (error) {
            console.error('Failed to load unbookable rooms', error);
            this.errorMessage = 'Unable to load unbookable rooms right now. Please try again.';
        }
        finally {
            this.isLoading = false;
            if (this.isPageLoading) {
                this.isPageLoading = false;
            }
        }
    }
    async fetchUnbookableRooms() {
        const propertyIds = this.getPropertyIds();
        if (!propertyIds.length) {
            this.unbookableRooms = [];
            this.errorMessage = this.resolveMode() === 'mpo' ? 'No properties available to check.' : 'Property ID is required to load unbookable rooms.';
            return;
        }
        const results = await this.propertyService.fetchUnBookableRooms({
            property_ids: propertyIds,
            period_to_check: this.filters.period_to_check * 30,
            consecutive_period: this.filters.consecutive_period,
        });
        this.unbookableRooms = results ?? [];
        this.lastUpdatedLabel = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    getPropertyIds() {
        if (this.resolveMode() === 'mpo') {
            return this.allowedProperties?.map(property => property.id) ?? [];
        }
        const propertyId = Number(this.propertyid);
        return Number.isFinite(propertyId) && propertyId > 0 ? [propertyId] : [];
    }
    handleFiltersChange = (event) => {
        this.filters = { ...this.filters, ...event.detail };
    };
    handleRefresh = async () => {
        this.isLoading = true;
        this.errorMessage = '';
        try {
            if (this.resolveMode() === 'mpo' && !this.allowedProperties) {
                this.allowedProperties = await this.propertyService.getExposedAllowedProperties();
            }
            await this.fetchUnbookableRooms();
            this.progressFilters = {
                period_to_check: this.filters.period_to_check,
                consecutive_period: this.filters.consecutive_period,
            };
        }
        catch (error) {
            console.error('Failed to refresh unbookable rooms', error);
            this.errorMessage = 'Unable to refresh unbookable rooms right now.';
        }
        finally {
            this.isLoading = false;
        }
    };
    handleFiltersReset = () => {
        this.filters = {
            country: 'all',
            consecutive_period: 14,
            period_to_check: 2,
        };
        this.handleRefresh();
    };
    render() {
        if (this.isPageLoading) {
            return h("ir-loading-screen", null);
        }
        const totalIssues = this.unbookableRooms?.length ?? 0;
        const propertiesWithIssues = new Set(this.unbookableRooms?.map(entry => entry.property_id)).size;
        return (h(Host, null, h("ir-toast", null), h("ir-interceptor", null), h("section", { class: "ir-page__container" }, h("h3", { class: "page-title" }, "Availability Alert"), this.mode === 'mpo' && (h("section", { class: "summary", "aria-live": "polite" }, h("wa-card", null, h("span", { class: "summary__value" }, totalIssues), h("span", { class: "summary__label" }, "room types affected")), h("wa-card", null, h("span", { class: "summary__value" }, propertiesWithIssues), h("span", { class: "summary__label" }, "properties impacted")))), h("section", { class: "unbookable-rooms__content" }, h("ir-unbookable-rooms-filters", { mode: this.mode, filters: this.filters, unbookableRooms: this.unbookableRooms, isLoading: this.isLoading, onFiltersChange: this.handleFiltersChange, onFiltersReset: this.handleFiltersReset, onFiltersSave: this.handleRefresh }), h("ir-unbookable-rooms-data", { mode: this.mode, isLoading: this.isLoading, errorMessage: this.errorMessage, unbookableRooms: this.unbookableRooms, allowedProperties: this.allowedProperties, filters: this.filters, progressFilters: this.progressFilters })))));
    }
    static get is() { return "ir-unbookable-rooms"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-unbookable-rooms.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-unbookable-rooms.css"]
        };
    }
    static get properties() {
        return {
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
            "mode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UnbookableRoomsMode",
                    "resolved": "\"default\" | \"mpo\"",
                    "references": {
                        "UnbookableRoomsMode": {
                            "location": "global",
                            "id": "global::UnbookableRoomsMode"
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
                "attribute": "mode",
                "reflect": true,
                "defaultValue": "'default'"
            },
            "period_to_check": {
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
                "attribute": "period_to_check",
                "reflect": false,
                "defaultValue": "2"
            },
            "consecutive_period": {
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
                "attribute": "consecutive_period",
                "reflect": false,
                "defaultValue": "14"
            }
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "errorMessage": {},
            "unbookableRooms": {},
            "allowedProperties": {},
            "filters": {},
            "progressFilters": {},
            "lastUpdatedLabel": {},
            "isPageLoading": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "ticket",
                "methodName": "ticketChanged"
            }, {
                "propName": "mode",
                "methodName": "modeChanged"
            }, {
                "propName": "property_id",
                "methodName": "propertyIdChanged"
            }, {
                "propName": "period_to_check",
                "methodName": "periodToCheckChanged"
            }, {
                "propName": "consecutive_period",
                "methodName": "consecutivePeriodChanged"
            }];
    }
}
//# sourceMappingURL=ir-unbookable-rooms.js.map
