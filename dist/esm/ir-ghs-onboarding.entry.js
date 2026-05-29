import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from './index-7e96440e.js';
import { a as axios } from './axios-aa1335b8.js';
import { z } from './index-87419685.js';
import { B as BookingService } from './booking.store-09b578f6.js';
import { T as Token } from './Token-030c78a9.js';
import './utils-a8322ee9.js';
import './moment-ab846cee.js';
import './calendar-data-b1f645da.js';
import './index-f100e9d2.js';
import './locales.store-cb784e95.js';
import './type-501de9b6.js';
import './booking-35ec745c.js';

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

const IrGhsOnboarding = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.toast = createEvent(this, "toast", 7);
    }
    get el() { return getElement(this); }
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
};
IrGhsOnboarding.style = IrGhsOnboardingStyle0;

export { IrGhsOnboarding as ir_ghs_onboarding };

//# sourceMappingURL=ir-ghs-onboarding.entry.js.map