'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index$1 = require('./index-35d81173.js');
const axios = require('./axios-6e678d52.js');
const index = require('./index-8bb117a0.js');
const booking_store = require('./booking.store-da99b883.js');
const Token = require('./Token-8fd11984.js');
require('./utils-32be062a.js');
require('./moment-1780b03a.js');
require('./calendar-data-70bc3b4b.js');
require('./index-fbf1fe1d.js');
require('./locales.store-32782582.js');
require('./type-53035218.js');
require('./booking-a54b7725.js');

index.z.object({
    AC_ID: index.z.number(),
    NAME: index.z.string(),
    aname: index.z.string(),
    level2: index.z.string().nullable().optional(),
    COUNTRY_ID: index.z.number(),
});
const Params_Get_GHS_Candidate_Properties_Schema = index.z.object({
    COUNTRY_ID: index.z.number().nullable().optional(),
});
const Params_Generate_GHS_Listing_For_Selection_Schema = index.z.object({
    Selected_AC_IDs: index.z.array(index.z.number()),
});

class GHSService {
    async Get_GHS_Candidate_Properties(params) {
        const validatedParams = Params_Get_GHS_Candidate_Properties_Schema.parse(params);
        const { data } = await axios.axios.post(`/Get_GHS_Candidate_Properties`, validatedParams);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result || [];
    }
    async Generate_GHS_Listing_For_Selection(params) {
        const validatedParams = Params_Generate_GHS_Listing_For_Selection_Schema.parse(params);
        const { data } = await axios.axios.post(`/Generate_GHS_Listing_For_Selection`, validatedParams);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
}

const irGhsOnboardingCss = ".sc-ir-ghs-onboarding-h{display:block;padding:20px;font-family:sans-serif}.ghs-container.sc-ir-ghs-onboarding{display:flex;flex-direction:column;gap:20px}.header-actions.sc-ir-ghs-onboarding{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #eee;padding-bottom:10px}h2.sc-ir-ghs-onboarding{margin:0;color:#333}.layout-grid.sc-ir-ghs-onboarding{display:flex;gap:20px}.sidebar.sc-ir-ghs-onboarding{width:250px;background:#f9f9f9;padding:15px;border-radius:8px;border:1px solid #e0e0e0}.sidebar.sc-ir-ghs-onboarding h3.sc-ir-ghs-onboarding{margin-top:0;font-size:1.1rem;color:#444}.filter-group.sc-ir-ghs-onboarding{margin-bottom:15px}.filter-group.sc-ir-ghs-onboarding label.sc-ir-ghs-onboarding{display:block;margin-bottom:5px;font-weight:bold}.form-control.sc-ir-ghs-onboarding{width:100%;padding:8px;border:1px solid #ccc;border-radius:4px}.filter-actions.sc-ir-ghs-onboarding{display:flex;gap:10px}.main-content.sc-ir-ghs-onboarding{flex:1}.table.sc-ir-ghs-onboarding{width:100%;border-collapse:collapse}.table.sc-ir-ghs-onboarding th.sc-ir-ghs-onboarding,.table.sc-ir-ghs-onboarding td.sc-ir-ghs-onboarding{padding:10px;text-align:left;border-bottom:1px solid #eee}.table.sc-ir-ghs-onboarding th.sc-ir-ghs-onboarding{background:#f5f5f5;font-weight:bold}.btn.sc-ir-ghs-onboarding{padding:8px 16px;border:none;border-radius:4px;cursor:pointer;font-size:14px}.btn.sc-ir-ghs-onboarding:disabled{opacity:0.5;cursor:not-allowed}.btn-primary.sc-ir-ghs-onboarding{background:#007bff;color:white}.btn-secondary.sc-ir-ghs-onboarding{background:#6c757d;color:white}.btn-outline.sc-ir-ghs-onboarding{background:transparent;border:1px solid #6c757d;color:#6c757d}.loading.sc-ir-ghs-onboarding{text-align:center;padding:20px;color:#666}.text-center.sc-ir-ghs-onboarding{text-align:center}";
const IrGhsOnboardingStyle0 = irGhsOnboardingCss;

const IrGhsOnboarding = class {
    constructor(hostRef) {
        index$1.registerInstance(this, hostRef);
        this.toast = index$1.createEvent(this, "toast", 7);
    }
    get el() { return index$1.getElement(this); }
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
    bookingService = new booking_store.BookingService();
    tokenService = new Token.Token();
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
                const cleanAxios = axios.axios.create();
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
            return index$1.h("ir-loading-screen", null);
        }
        return (index$1.h(index$1.Host, null, index$1.h("ir-toast", null), index$1.h("ir-interceptor", null), index$1.h("ir-dialog", { ref: el => (this.removeAllModal = el), label: "Confirmation", onIrDialogHide: () => this.removeAllModal.closeModal() }, index$1.h("div", { class: "p-0 d-flex flex-column align-items-center justify-content-center" }, index$1.h("p", { class: "m-0 text-center" }, "Are you sure you want to remove all selected properties from the list?")), index$1.h("div", { slot: "footer", class: "ir-dialog__footer" }, index$1.h("ir-custom-button", { type: "button", variant: "neutral", appearance: "filled", size: "medium", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.removeAllModal.closeModal();
            } }, "Cancel"), index$1.h("ir-custom-button", { type: "button", variant: "danger", appearance: "accent", size: "medium", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.handleConfirmRemoveAll();
            } }, "Confirm"))), index$1.h("section", { class: "p-2 d-flex flex-column", style: { gap: '1rem' } }, index$1.h("div", { class: "d-flex align-items-center justify-content-between" }, index$1.h("h3", { class: "mb-1 mb-md-0" }, "Google hotels request")), index$1.h("div", { class: "d-flex flex-column flex-lg-row mt-1", style: { gap: '1rem' } }, index$1.h("ir-ghs-filters", { countries: this.countries, selectedCountryId: this.selectedCountryId, isLoading: this.isLoading, onCountryChange: (e) => {
                this.selectedCountryId = e.detail;
                this.fetchProperties();
            }, onFilterApply: () => this.fetchProperties(), onFilterReset: () => {
                this.selectedCountryId = null;
                this.fetchProperties();
            } }), index$1.h("ir-ghs-candidate-table", { properties: this.properties, countries: this.countries, selectedCountryId: this.selectedCountryId, selectedProperties: this.selectedProperties, isLoading: this.isLoading, onToggleSelection: (e) => this.togglePropertySelection(e.detail), onToggleAll: (e) => this.handleToggleAll(e.detail) }), index$1.h("ir-ghs-selection-bucket", { selectedProperties: this.selectedProperties, isGenerating: this.isGenerating, onGenerateRequest: () => this.handleGenerateRequest(), onRemoveAll: () => this.handleRemoveAll(), onRemoveProperty: (e) => this.removePropertySelection(e.detail) })))));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrGhsOnboarding.style = IrGhsOnboardingStyle0;

exports.ir_ghs_onboarding = IrGhsOnboarding;

//# sourceMappingURL=ir-ghs-onboarding.cjs.entry.js.map