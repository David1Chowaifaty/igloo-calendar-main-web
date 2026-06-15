import { Host, h } from "@stencil/core";
import axios from "axios";
import { GHSService } from "../../services/ghs/ghs.service";
import { BookingService } from "../../services/booking-service/booking.service";
import Token from "../../models/Token";
import { showToast } from "../../utils/utils";
export class IrGhsOnboarding {
    el;
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
    static get is() { return "ir-ghs-onboarding"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-ghs-onboarding.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-ghs-onboarding.css"]
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
                "reflect": false
            },
            "baseurl": {
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
                "attribute": "baseurl",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "properties": {},
            "countries": {},
            "selectedCountryId": {},
            "selectedProperties": {},
            "isPageLoading": {},
            "isDataLoading": {},
            "isGenerating": {},
            "isActivating": {},
            "propertyToActivate": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "ticket",
                "methodName": "ticketChanged"
            }];
    }
}
//# sourceMappingURL=ir-ghs-onboarding.js.map
