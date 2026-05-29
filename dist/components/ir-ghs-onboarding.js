import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { a as axios } from './axios.js';
import { z } from './index2.js';
import { B as BookingService } from './booking.store.js';
import { T as Token } from './Token.js';
import { d as defineCustomElement$j } from './ir-button2.js';
import { d as defineCustomElement$i } from './ir-custom-button2.js';
import { d as defineCustomElement$h } from './ir-dialog2.js';
import { d as defineCustomElement$g } from './ir-ghs-candidate-table2.js';
import { d as defineCustomElement$f } from './ir-ghs-filters2.js';
import { d as defineCustomElement$e } from './ir-ghs-selection-bucket2.js';
import { d as defineCustomElement$d } from './ir-icons2.js';
import { d as defineCustomElement$c } from './ir-input2.js';
import { d as defineCustomElement$b } from './ir-interceptor2.js';
import { d as defineCustomElement$a } from './ir-loading-screen2.js';
import { d as defineCustomElement$9 } from './ir-otp2.js';
import { d as defineCustomElement$8 } from './ir-otp-modal2.js';
import { d as defineCustomElement$7 } from './ir-popover2.js';
import { d as defineCustomElement$6 } from './ir-select2.js';
import { d as defineCustomElement$5 } from './ir-spinner2.js';
import { d as defineCustomElement$4 } from './ir-toast2.js';
import { d as defineCustomElement$3 } from './ir-toast-alert2.js';
import { d as defineCustomElement$2 } from './ir-toast-provider2.js';

z.object({
    AC_ID: z.number(),
    NAME: z.string(),
    aname: z.string(),
    level2: z.string().nullable().optional(),
    COUNTRY_ID: z.number(),
});
const Params_Get_GHS_Candidate_Properties_Schema = z.object({
    COUNTRY_ID: z.number().nullable().optional(),
});
const Params_Generate_GHS_Listing_For_Selection_Schema = z.object({
    Selected_AC_IDs: z.array(z.number()),
});

class GHSService {
    async Get_GHS_Candidate_Properties(params) {
        const validatedParams = Params_Get_GHS_Candidate_Properties_Schema.parse(params);
        const { data } = await axios.post(`/Get_GHS_Candidate_Properties`, validatedParams);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result || [];
    }
    async Generate_GHS_Listing_For_Selection(params) {
        const validatedParams = Params_Generate_GHS_Listing_For_Selection_Schema.parse(params);
        const { data } = await axios.post(`/Generate_GHS_Listing_For_Selection`, validatedParams);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
}

const irGhsOnboardingCss = ".sc-ir-ghs-onboarding-h{display:block;padding:20px;font-family:sans-serif}.ghs-container.sc-ir-ghs-onboarding{display:flex;flex-direction:column;gap:20px}.header-actions.sc-ir-ghs-onboarding{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #eee;padding-bottom:10px}h2.sc-ir-ghs-onboarding{margin:0;color:#333}.layout-grid.sc-ir-ghs-onboarding{display:flex;gap:20px}.sidebar.sc-ir-ghs-onboarding{width:250px;background:#f9f9f9;padding:15px;border-radius:8px;border:1px solid #e0e0e0}.sidebar.sc-ir-ghs-onboarding h3.sc-ir-ghs-onboarding{margin-top:0;font-size:1.1rem;color:#444}.filter-group.sc-ir-ghs-onboarding{margin-bottom:15px}.filter-group.sc-ir-ghs-onboarding label.sc-ir-ghs-onboarding{display:block;margin-bottom:5px;font-weight:bold}.form-control.sc-ir-ghs-onboarding{width:100%;padding:8px;border:1px solid #ccc;border-radius:4px}.filter-actions.sc-ir-ghs-onboarding{display:flex;gap:10px}.main-content.sc-ir-ghs-onboarding{flex:1}.table.sc-ir-ghs-onboarding{width:100%;border-collapse:collapse}.table.sc-ir-ghs-onboarding th.sc-ir-ghs-onboarding,.table.sc-ir-ghs-onboarding td.sc-ir-ghs-onboarding{padding:10px;text-align:left;border-bottom:1px solid #eee}.table.sc-ir-ghs-onboarding th.sc-ir-ghs-onboarding{background:#f5f5f5;font-weight:bold}.btn.sc-ir-ghs-onboarding{padding:8px 16px;border:none;border-radius:4px;cursor:pointer;font-size:14px}.btn.sc-ir-ghs-onboarding:disabled{opacity:0.5;cursor:not-allowed}.btn-primary.sc-ir-ghs-onboarding{background:#007bff;color:white}.btn-secondary.sc-ir-ghs-onboarding{background:#6c757d;color:white}.btn-outline.sc-ir-ghs-onboarding{background:transparent;border:1px solid #6c757d;color:#6c757d}.loading.sc-ir-ghs-onboarding{text-align:center;padding:20px;color:#666}.text-center.sc-ir-ghs-onboarding{text-align:center}";
const IrGhsOnboardingStyle0 = irGhsOnboardingCss;

const IrGhsOnboarding$1 = /*@__PURE__*/ proxyCustomElement(class IrGhsOnboarding extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.toast = createEvent(this, "toast", 7);
    }
    get el() { return this; }
    ticket;
    baseurl;
    properties = [];
    countries = [];
    selectedCountryId = null;
    selectedProperties = [];
    isLoading = false;
    isGenerating = false;
    toast;
    ghsService = new GHSService();
    bookingService = new BookingService();
    tokenService = new Token();
    removeAllModal;
    ticketChanged(newValue) {
        if (newValue) {
            this.tokenService.setToken(newValue);
            this.init();
        }
    }
    async componentWillLoad() {
        if (this.baseurl) {
            this.tokenService.setBaseUrl(this.baseurl);
        }
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            await this.init();
        }
    }
    async init() {
        this.isLoading = true;
        try {
            const [allCountries, allProperties] = await Promise.all([
                this.bookingService.getCountries('EN'),
                this.ghsService.Get_GHS_Candidate_Properties({ COUNTRY_ID: null }),
            ]);
            const validCountryIds = new Set(allProperties.map(p => p.COUNTRY_ID));
            this.countries = allCountries
                .filter(c => validCountryIds.has(c.id))
                .sort((a, b) => a.name.localeCompare(b.name));
            this.properties = allProperties;
        }
        catch (error) {
            this.showToast('error', 'Initialization Error', error.message || 'Failed to load properties');
        }
        finally {
            this.isLoading = false;
        }
    }
    async fetchProperties() {
        this.isLoading = true;
        this.properties = [];
        try {
            const props = await this.ghsService.Get_GHS_Candidate_Properties({
                COUNTRY_ID: this.selectedCountryId,
            });
            this.properties = props;
        }
        catch (error) {
            this.showToast('error', 'Error', error.message || 'Failed to fetch properties');
        }
        finally {
            this.isLoading = false;
        }
    }
    handleToggleAll(selectAll) {
        if (selectAll) {
            const currentSelectedIds = this.selectedProperties.map(p => p.AC_ID);
            const newSelections = this.properties.filter(p => !currentSelectedIds.includes(p.AC_ID));
            this.selectedProperties = [...this.selectedProperties, ...newSelections];
        }
        else {
            const candidateIds = this.properties.map(p => p.AC_ID);
            this.selectedProperties = this.selectedProperties.filter(p => !candidateIds.includes(p.AC_ID));
        }
    }
    togglePropertySelection(property) {
        const index = this.selectedProperties.findIndex(p => p.AC_ID === property.AC_ID);
        if (index !== -1) {
            this.selectedProperties = this.selectedProperties.filter(p => p.AC_ID !== property.AC_ID);
        }
        else {
            this.selectedProperties = [...this.selectedProperties, property];
        }
    }
    removePropertySelection(acId) {
        this.selectedProperties = this.selectedProperties.filter(p => p.AC_ID !== acId);
    }
    handleRemoveAll() {
        if (this.selectedProperties.length === 0)
            return;
        this.removeAllModal.openModal();
    }
    handleConfirmRemoveAll() {
        this.selectedProperties = [];
        this.removeAllModal.closeModal();
    }
    async handleGenerateRequest() {
        if (this.selectedProperties.length === 0) {
            this.showToast('error', 'Selection Required', 'Please select at least one property.');
            return;
        }
        this.isGenerating = true;
        try {
            const downloadUrl = await this.ghsService.Generate_GHS_Listing_For_Selection({
                Selected_AC_IDs: this.selectedProperties.map(p => p.AC_ID),
            });
            if (downloadUrl) {
                // Create a clean axios instance to bypass global interceptors (avoiding network errors)
                const cleanAxios = axios.create();
                const response = await cleanAxios.get(downloadUrl, { responseType: 'blob' });
                // Create a local blob URL
                const blob = new Blob([response.data], { type: 'application/xml' });
                const localUrl = window.URL.createObjectURL(blob);
                // Trigger download of the local blob
                const a = document.createElement('a');
                a.href = localUrl;
                const filename = downloadUrl.split('/').pop() || 'ghs_onboarding.xml';
                a.setAttribute('download', filename);
                document.body.appendChild(a);
                a.click();
                // Clean up
                document.body.removeChild(a);
                window.URL.revokeObjectURL(localUrl);
                this.selectedProperties = [];
                await this.fetchProperties();
                this.showToast('success', 'Success', 'GHS onboarding request downloaded.');
            }
        }
        catch (error) {
            console.error('Download Error Details:', error);
            this.showToast('error', 'Generation Error', error.message || 'An error occurred while generating the request.');
        }
        finally {
            this.isGenerating = false;
        }
    }
    showToast(type, title, description) {
        this.toast.emit({
            type,
            title,
            description,
            position: 'top-right',
        });
    }
    render() {
        if (this.isLoading && this.properties.length === 0) {
            return h("ir-loading-screen", null);
        }
        return (h(Host, null, h("ir-toast", null), h("ir-interceptor", null), h("ir-dialog", { ref: el => (this.removeAllModal = el), label: "Confirmation", onIrDialogHide: () => this.removeAllModal.closeModal() }, h("div", { class: "p-0 d-flex flex-column align-items-center justify-content-center" }, h("p", { class: "m-0 text-center" }, "Are you sure you want to remove all selected properties from the list?")), h("div", { slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { type: "button", variant: "neutral", appearance: "filled", size: "medium", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.removeAllModal.closeModal();
            } }, "Cancel"), h("ir-custom-button", { type: "button", variant: "danger", appearance: "accent", size: "medium", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.handleConfirmRemoveAll();
            } }, "Confirm"))), h("section", { class: "p-2 d-flex flex-column", style: { gap: '1rem' } }, h("div", { class: "d-flex align-items-center justify-content-between" }, h("h3", { class: "mb-1 mb-md-0" }, "Google hotels request")), h("div", { class: "d-flex flex-column flex-lg-row mt-1", style: { gap: '1rem' } }, h("ir-ghs-filters", { countries: this.countries, selectedCountryId: this.selectedCountryId, isLoading: this.isLoading, onCountryChange: (e) => {
                this.selectedCountryId = e.detail;
                this.fetchProperties();
            }, onFilterApply: () => this.fetchProperties(), onFilterReset: () => {
                this.selectedCountryId = null;
                this.fetchProperties();
            } }), h("ir-ghs-candidate-table", { properties: this.properties, countries: this.countries, selectedCountryId: this.selectedCountryId, selectedProperties: this.selectedProperties, isLoading: this.isLoading, onToggleSelection: (e) => this.togglePropertySelection(e.detail), onToggleAll: (e) => this.handleToggleAll(e.detail) }), h("ir-ghs-selection-bucket", { selectedProperties: this.selectedProperties, isGenerating: this.isGenerating, onGenerateRequest: () => this.handleGenerateRequest(), onRemoveAll: () => this.handleRemoveAll(), onRemoveProperty: (e) => this.removePropertySelection(e.detail) })))));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
    static get style() { return IrGhsOnboardingStyle0; }
}, [2, "ir-ghs-onboarding", {
        "ticket": [1],
        "baseurl": [1],
        "properties": [32],
        "countries": [32],
        "selectedCountryId": [32],
        "selectedProperties": [32],
        "isLoading": [32],
        "isGenerating": [32]
    }, undefined, {
        "ticket": ["ticketChanged"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-ghs-onboarding", "ir-button", "ir-custom-button", "ir-dialog", "ir-ghs-candidate-table", "ir-ghs-filters", "ir-ghs-selection-bucket", "ir-icons", "ir-input", "ir-interceptor", "ir-loading-screen", "ir-otp", "ir-otp-modal", "ir-popover", "ir-select", "ir-spinner", "ir-toast", "ir-toast-alert", "ir-toast-provider"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-ghs-onboarding":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrGhsOnboarding$1);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-ghs-candidate-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-ghs-filters":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-ghs-selection-bucket":
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
        case "ir-popover":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-toast-alert":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-toast-provider":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IrGhsOnboarding = IrGhsOnboarding$1;
const defineCustomElement = defineCustomElement$1;

export { IrGhsOnboarding, defineCustomElement };

//# sourceMappingURL=ir-ghs-onboarding.js.map