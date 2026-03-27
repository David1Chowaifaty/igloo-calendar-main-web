import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { T as Token } from './Token.js';
import { P as PropertyService } from './property.service.js';
import { d as defineCustomElement$f } from './ir-button2.js';
import { d as defineCustomElement$e } from './ir-custom-button2.js';
import { d as defineCustomElement$d } from './ir-icons2.js';
import { d as defineCustomElement$c } from './ir-input2.js';
import { d as defineCustomElement$b } from './ir-interceptor2.js';
import { d as defineCustomElement$a } from './ir-loading-screen2.js';
import { d as defineCustomElement$9 } from './ir-otp2.js';
import { d as defineCustomElement$8 } from './ir-otp-modal2.js';
import { d as defineCustomElement$7 } from './ir-spinner2.js';
import { d as defineCustomElement$6 } from './ir-toast2.js';
import { d as defineCustomElement$5 } from './ir-toast-alert2.js';
import { d as defineCustomElement$4 } from './ir-toast-provider2.js';
import { d as defineCustomElement$3 } from './ir-unbookable-rooms-data2.js';
import { d as defineCustomElement$2 } from './ir-unbookable-rooms-filters2.js';

const irUnbookableRoomsCss = ".sc-ir-unbookable-rooms-h{height:100% !important;overflow-y:auto !important}.ir-page__container.sc-ir-unbookable-rooms{height:100%;overflow-y:auto}.unbookable-rooms__content.sc-ir-unbookable-rooms{display:flex;flex-direction:column;gap:1rem}.summary.sc-ir-unbookable-rooms{display:grid;grid-template-columns:repeat(auto-fit, minmax(150px, 1fr));gap:12px}.summary__value.sc-ir-unbookable-rooms{display:block;font-size:1.3rem;font-weight:600}.summary__label.sc-ir-unbookable-rooms{font-size:0.82rem;color:#6a6256}@media (min-width: 768px){.unbookable-rooms__content.sc-ir-unbookable-rooms{flex-direction:row;align-items:flex-start}}";
const IrUnbookableRoomsStyle0 = irUnbookableRoomsCss;

const IrUnbookableRooms$1 = /*@__PURE__*/ proxyCustomElement(class IrUnbookableRooms extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
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
    static get watchers() { return {
        "ticket": ["ticketChanged"],
        "mode": ["modeChanged"],
        "property_id": ["propertyIdChanged"],
        "period_to_check": ["periodToCheckChanged"],
        "consecutive_period": ["consecutivePeriodChanged"]
    }; }
    static get style() { return IrUnbookableRoomsStyle0; }
}, [2, "ir-unbookable-rooms", {
        "ticket": [1],
        "propertyid": [2],
        "mode": [513],
        "period_to_check": [2],
        "consecutive_period": [2],
        "isLoading": [32],
        "errorMessage": [32],
        "unbookableRooms": [32],
        "allowedProperties": [32],
        "filters": [32],
        "progressFilters": [32],
        "lastUpdatedLabel": [32],
        "isPageLoading": [32]
    }, undefined, {
        "ticket": ["ticketChanged"],
        "mode": ["modeChanged"],
        "property_id": ["propertyIdChanged"],
        "period_to_check": ["periodToCheckChanged"],
        "consecutive_period": ["consecutivePeriodChanged"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-unbookable-rooms", "ir-button", "ir-custom-button", "ir-icons", "ir-input", "ir-interceptor", "ir-loading-screen", "ir-otp", "ir-otp-modal", "ir-spinner", "ir-toast", "ir-toast-alert", "ir-toast-provider", "ir-unbookable-rooms-data", "ir-unbookable-rooms-filters"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-unbookable-rooms":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrUnbookableRooms$1);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-loading-screen":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-otp-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-toast-alert":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-toast-provider":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-unbookable-rooms-data":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-unbookable-rooms-filters":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IrUnbookableRooms = IrUnbookableRooms$1;
const defineCustomElement = defineCustomElement$1;

export { IrUnbookableRooms, defineCustomElement };

//# sourceMappingURL=ir-unbookable-rooms.js.map