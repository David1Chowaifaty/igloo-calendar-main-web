import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { a as axios } from './axios.js';
import { z } from './index2.js';
import { B as BookingService } from './booking.store.js';
import { T as Token } from './Token.js';
import { s as showToast } from './utils.js';
import { d as defineCustomElement$f } from './ir-button2.js';
import { d as defineCustomElement$e } from './ir-custom-button2.js';
import { d as defineCustomElement$d } from './ir-dialog2.js';
import { d as defineCustomElement$c } from './ir-ghs-candidate-table2.js';
import { d as defineCustomElement$b } from './ir-ghs-selection-bucket2.js';
import { d as defineCustomElement$a } from './ir-icons2.js';
import { d as defineCustomElement$9 } from './ir-input2.js';
import { d as defineCustomElement$8 } from './ir-interceptor2.js';
import { d as defineCustomElement$7 } from './ir-loading-screen2.js';
import { d as defineCustomElement$6 } from './ir-otp2.js';
import { d as defineCustomElement$5 } from './ir-otp-modal2.js';
import { d as defineCustomElement$4 } from './ir-spinner2.js';
import { d as defineCustomElement$3 } from './ir-toast2.js';
import { d as defineCustomElement$2 } from './ir-toast-item2.js';
import { d as defineCustomElement$1 } from './ir-toast-provider2.js';

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
const Params_Update_GHS_Enablement_Schema = z.object({
    AC_ID: z.number(),
    IS_ENABLED: z.boolean(),
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
    async Update_GHS_Enablement(params) {
        const validatedParams = Params_Update_GHS_Enablement_Schema.parse(params);
        const { data } = await axios.post(`/Update_GHS_Enablement`, validatedParams);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
    }
}

const irGhsOnboardingCss = ".sc-ir-ghs-onboarding-h{display:block;box-sizing:border-box}*.sc-ir-ghs-onboarding,*.sc-ir-ghs-onboarding::before,*.sc-ir-ghs-onboarding::after{box-sizing:inherit}.ir-ghs-onboarding__container.sc-ir-ghs-onboarding{padding:var(--wa-space-m);display:flex;flex-direction:column;gap:var(--wa-space-m)}.ir-ghs-onboarding__header.sc-ir-ghs-onboarding{display:flex;align-items:center;justify-content:space-between}.ir-ghs-onboarding__title.sc-ir-ghs-onboarding{margin:0;font-size:var(--wa-font-size-large);margin-bottom:var(--wa-space-xs);color:var(--wa-color-neutral-900)}.ir-ghs-onboarding__content.sc-ir-ghs-onboarding{display:flex;flex-direction:column;gap:var(--wa-space-m);margin-top:var(--wa-space-m)}.ir-ghs-onboarding__main-row.sc-ir-ghs-onboarding{display:flex;flex-direction:column;gap:var(--wa-space-m);align-items:stretch}@media (min-width: 992px){.ir-ghs-onboarding__main-row.sc-ir-ghs-onboarding{flex-direction:row;align-items:flex-start}.ir-ghs-onboarding__candidate-table.sc-ir-ghs-onboarding{flex:0 0 calc(60% - var(--wa-space-m) / 2);min-width:0}.ir-ghs-onboarding__selection-bucket.sc-ir-ghs-onboarding{flex:0 0 calc(40% - var(--wa-space-m) / 2);min-width:0}}.ir-ghs-onboarding__dialog-body.sc-ir-ghs-onboarding{padding:0;display:flex;flex-direction:column;align-items:center;justify-content:center}.ir-ghs-onboarding__dialog-footer.sc-ir-ghs-onboarding{display:flex;gap:var(--wa-space-s);justify-content:flex-end}";
const IrGhsOnboardingStyle0 = irGhsOnboardingCss;

const IrGhsOnboarding = /*@__PURE__*/ proxyCustomElement(class IrGhsOnboarding extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    get el() { return this; }
    ticket;
    baseurl;
    properties = [];
    countries = [];
    selectedCountryId = null;
    selectedProperties = [];
    isPageLoading = false;
    isDataLoading = false;
    isGenerating = false;
    isActivating = false;
    propertyToActivate = null;
    ghsService = new GHSService();
    bookingService = new BookingService();
    tokenService = new Token();
    removeAllModal;
    activateModal;
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
        this.isPageLoading = true;
        try {
            const [allCountries, allProperties] = await Promise.all([this.bookingService.getCountries('EN'), this.ghsService.Get_GHS_Candidate_Properties({ COUNTRY_ID: null })]);
            const validCountryIds = new Set(allProperties.map(p => p.COUNTRY_ID));
            this.countries = allCountries.filter(c => validCountryIds.has(c.id)).sort((a, b) => a.name.localeCompare(b.name));
            this.properties = allProperties;
        }
        catch (error) {
            this.showToast('error', 'Initialization Error', error.message || 'Failed to load properties');
        }
        finally {
            this.isPageLoading = false;
        }
    }
    async fetchProperties() {
        this.isDataLoading = true;
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
            this.isDataLoading = false;
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
    handleActivateProperty(property) {
        this.propertyToActivate = property;
        this.activateModal.openModal();
    }
    async handleConfirmActivate() {
        if (!this.propertyToActivate)
            return;
        this.isActivating = true;
        try {
            await this.ghsService.Update_GHS_Enablement({
                AC_ID: this.propertyToActivate.AC_ID,
                IS_ENABLED: true,
            });
            this.showToast('success', 'Success', `${this.propertyToActivate.NAME} GHS has been activated.`);
            const activatedId = this.propertyToActivate.AC_ID;
            this.properties = this.properties.filter(p => p.AC_ID !== activatedId);
            this.selectedProperties = this.selectedProperties.filter(p => p.AC_ID !== activatedId);
        }
        catch (error) {
            this.showToast('error', 'Activation Error', error.message || 'Failed to activate property');
        }
        finally {
            this.isActivating = false;
            this.propertyToActivate = null;
            this.activateModal.closeModal();
        }
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
            this.showToast('error', 'Generation Error', error.message || 'An error occurred while generating the request.');
        }
        finally {
            this.isGenerating = false;
        }
    }
    showToast(type, title, description) {
        showToast({
            type,
            title,
            description,
            position: 'top-right',
        });
    }
    render() {
        if (this.isPageLoading) {
            return h("ir-loading-screen", null);
        }
        return (h(Host, null, h("ir-toast", null), h("ir-interceptor", null), h("ir-dialog", { ref: el => (this.activateModal = el), label: "Activation Confirmation", onIrDialogHide: () => {
                this.propertyToActivate = null;
                this.activateModal.closeModal();
            } }, h("div", { class: "ir-ghs-onboarding__dialog-body" }, h("p", { class: "m-0 text-center" }, "Are you sure you want to ", h("strong", null, "activate"), " GHS for ", h("span", { class: "text-primary" }, this.propertyToActivate?.NAME), "?"), h("p", { class: "small text-muted mt-2 mb-0" }, "This will enable real-time synchronization with Google.")), h("div", { slot: "footer", class: "ir-ghs-onboarding__dialog-footer" }, h("ir-custom-button", { type: "button", variant: "neutral", appearance: "filled", size: "medium", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.propertyToActivate = null;
                this.activateModal.closeModal();
            } }, "Cancel"), h("ir-custom-button", { type: "button", variant: "success", appearance: "accent", size: "medium", loading: this.isActivating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.handleConfirmActivate();
            } }, "Activate"))), h("ir-dialog", { ref: el => (this.removeAllModal = el), label: "Confirmation", onIrDialogHide: () => this.removeAllModal.closeModal() }, h("div", { class: "ir-ghs-onboarding__dialog-body" }, h("p", { class: "m-0 text-center" }, "Are you sure you want to remove all selected properties from the list?")), h("div", { slot: "footer", class: "ir-ghs-onboarding__dialog-footer" }, h("ir-custom-button", { type: "button", variant: "neutral", appearance: "filled", size: "medium", onClickHandler: (e) => {
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
            } }, "Confirm"))), h("section", { class: "ir-ghs-onboarding__container" }, h("div", { class: "ir-ghs-onboarding__header" }, h("h3", { class: "ir-ghs-onboarding__title" }, "Google hotels request")), h("div", { class: "ir-ghs-onboarding__content" }, h("div", { class: "ir-ghs-onboarding__main-row" }, h("ir-ghs-candidate-table", { class: "ir-ghs-onboarding__candidate-table", properties: this.properties, countries: this.countries, selectedCountryId: this.selectedCountryId, selectedProperties: this.selectedProperties, propertyToActivate: this.propertyToActivate, isLoading: this.isDataLoading, baseUrl: this.baseurl, onToggleSelection: e => this.togglePropertySelection(e.detail), onToggleAll: e => this.handleToggleAll(e.detail), onActivateProperty: e => this.handleActivateProperty(e.detail), onCountryChange: e => {
                this.selectedCountryId = e.detail;
                this.fetchProperties();
            } }), h("ir-ghs-selection-bucket", { class: "ir-ghs-onboarding__selection-bucket", selectedProperties: this.selectedProperties, isGenerating: this.isGenerating, onGenerateRequest: () => this.handleGenerateRequest(), onRemoveAll: () => this.handleRemoveAll(), onRemoveProperty: e => this.removePropertySelection(e.detail) }))))));
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
        "isPageLoading": [32],
        "isDataLoading": [32],
        "isGenerating": [32],
        "isActivating": [32],
        "propertyToActivate": [32]
    }, undefined, {
        "ticket": ["ticketChanged"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-ghs-onboarding", "ir-button", "ir-custom-button", "ir-dialog", "ir-ghs-candidate-table", "ir-ghs-selection-bucket", "ir-icons", "ir-input", "ir-interceptor", "ir-loading-screen", "ir-otp", "ir-otp-modal", "ir-spinner", "ir-toast", "ir-toast-item", "ir-toast-provider"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-ghs-onboarding":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrGhsOnboarding);
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
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-ghs-candidate-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-ghs-selection-bucket":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-loading-screen":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-otp-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-toast-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-toast-provider":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrGhsOnboarding as I, defineCustomElement as d };

//# sourceMappingURL=ir-ghs-onboarding2.js.map