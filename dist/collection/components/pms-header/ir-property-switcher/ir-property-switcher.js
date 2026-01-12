import { Host, h } from "@stencil/core";
import axios from "axios";
import Token from "../../../models/Token";
export class IrPropertySwitcher {
    el;
    mode = 'dialog';
    ticket;
    baseUrl;
    open = false;
    selectedProperty;
    linkedProperties = [];
    displayMode = 'read-only';
    token = new Token();
    /** Emits whenever the user selects a new property */
    propertyChange;
    storagePoller;
    lastSelectedAcRaw = null;
    lastUserInfoRaw = null;
    async componentWillLoad() {
        if (this.baseUrl)
            this.token.setBaseUrl(this.baseUrl);
        if (this.ticket)
            this.token.setToken(this.ticket);
        // Try once immediately
        await this.pollLocalStorage();
        // Start polling only if data not ready yet
        if (!this.selectedProperty) {
            this.startStoragePolling();
        }
        // Listen for cross-tab updates
        window.addEventListener('storage', this.handleStorageEvent);
    }
    disconnectedCallback() {
        this.stopStoragePolling();
        window.removeEventListener('storage', this.handleStorageEvent);
    }
    /* --------------------------------------------
     * Watchers
     * -------------------------------------------- */
    async handleTicketChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.token.setToken(newValue);
            await this.pollLocalStorage();
            this.startStoragePolling();
        }
    }
    /* --------------------------------------------
     * LocalStorage polling logic
     * -------------------------------------------- */
    startStoragePolling() {
        if (this.storagePoller)
            return;
        this.storagePoller = window.setInterval(this.pollLocalStorage, 300);
    }
    stopStoragePolling() {
        if (this.storagePoller) {
            clearInterval(this.storagePoller);
            this.storagePoller = undefined;
        }
    }
    handleStorageEvent = () => {
        // Cross-tab change → re-enable polling briefly
        this.startStoragePolling();
    };
    pollLocalStorage = async () => {
        const selectedAcRaw = localStorage.getItem('_Selected_Ac');
        const userInfoRaw = localStorage.getItem('UserInfo_b');
        // Nothing changed → skip work
        if (selectedAcRaw === this.lastSelectedAcRaw && userInfoRaw === this.lastUserInfoRaw) {
            return;
        }
        this.lastSelectedAcRaw = selectedAcRaw;
        this.lastUserInfoRaw = userInfoRaw;
        if (!selectedAcRaw || !userInfoRaw) {
            return;
        }
        let selectedAc;
        try {
            selectedAc = JSON.parse(selectedAcRaw);
        }
        catch {
            return;
        }
        // ✅ Storage is now valid
        this.updateSelectedProperty(selectedAc);
        await this.fetchLinkedProperties(selectedAc.AC_ID);
        this.resolveDisplayMode(true);
        // 🛑 Stop polling once initialized
        this.stopStoragePolling();
    };
    updateSelectedProperty(selectedAc) {
        this.selectedProperty = {
            A_NAME: selectedAc.My_User?.USERNAME ?? '',
            COUNTRY_CODE: selectedAc.COUNTRY_ID,
            COUNTRY_NAME: selectedAc.My_Country?.L1_NAME_REF ?? '',
            PROPERTY_ID: selectedAc.AC_ID,
            PROPERTY_NAME: selectedAc.NAME,
        };
    }
    async fetchLinkedProperties(acId) {
        try {
            const { data } = await axios.post('/Fetch_Linked_Properties', {
                AC_ID: acId,
            });
            if (data.ExceptionMsg) {
                throw new Error(data.ExceptionMsg);
            }
            this.linkedProperties = Array.isArray(data.My_Result) ? data.My_Result : [];
        }
        catch (error) {
            console.error('Failed to fetch linked properties', error);
            this.linkedProperties = [];
        }
    }
    resolveDisplayMode(hasSelectedAc) {
        const userInfoRaw = localStorage.getItem('UserInfo_b');
        let userInfo = null;
        try {
            if (userInfoRaw)
                userInfo = JSON.parse(userInfoRaw);
        }
        catch {
            /* noop */
        }
        const userTypeCode = String(userInfo?.USER_TYPE_CODE ?? '');
        if (userTypeCode === '1' || userTypeCode === '4') {
            this.displayMode = 'dialog';
            return;
        }
        if (!hasSelectedAc || !this.linkedProperties.length) {
            this.displayMode = 'read-only';
            return;
        }
        this.displayMode = 'dropdown';
    }
    handlePropertySelected = async (event) => {
        await this.applySelectedProperty(event.detail);
    };
    handleDropdownSelect = async (event) => {
        const selectedId = Number(event.detail);
        const property = this.linkedProperties.find(p => p.PROPERTY_ID === selectedId);
        if (!property)
            return;
        await this.applySelectedProperty(property);
    };
    async applySelectedProperty(property) {
        this.selectedProperty = property;
        this.open = false;
        try {
            const { data } = await axios.post('/Get_Ac_By_AC_ID_Adv', {
                AC_ID: property.PROPERTY_ID,
                Bypass_Caching: true,
                IS_BACK_OFFICE: true,
            });
            if (data.ExceptionMsg) {
                throw new Error(data.ExceptionMsg);
            }
            localStorage.setItem('_Selected_Ac', JSON.stringify(data.My_Result ?? data));
        }
        catch (error) {
            console.error('Failed to fetch selected property details', error);
        }
        this.propertyChange.emit(property);
        // Re-init via polling-safe path
        this.startStoragePolling();
    }
    renderReadOnly() {
        return h("p", { class: "property-switcher__trigger" }, this.selectedProperty?.PROPERTY_NAME ?? 'Property');
    }
    trigger() {
        return (h("ir-custom-button", { withCaret: true, variant: "neutral", appearance: "plain", onClickHandler: () => (this.open = !this.open) }, h("p", { class: "property-switcher__trigger" }, this.selectedProperty?.PROPERTY_NAME ?? 'Select property')));
    }
    render() {
        return (h(Host, { key: '19d06785c05b1c90a7480b44079f13299277c5ad' }, this.displayMode === 'read-only' && this.renderReadOnly(), this.displayMode === 'dropdown' && (h("ir-select", { key: 'eddb8768b12f415a940d5a41f7c27a34d4102176', showFirstOption: false, selectedValue: this.selectedProperty?.PROPERTY_ID?.toString() ?? '', data: this.linkedProperties.map(p => ({
                value: p.PROPERTY_ID?.toString(),
                text: `${p.PROPERTY_NAME} ${p.COUNTRY_NAME}`,
            })), onSelectChange: this.handleDropdownSelect })), this.displayMode === 'dialog' && (h("div", { key: '4e962aa95cc8e9c9c9687cb08adc8b269414a7bc' }, this.trigger(), h("ir-dialog", { key: '59feb30f8a293fd4551a4fb089b8f48ac6f0f237', withoutHeader: true, open: this.open, label: "Find property", class: "property-switcher__dialog", onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.open = false;
            } }, this.open && (h("ir-property-switcher-dialog-content", { key: 'a18672e11a5582dcc8ab516163d71b195a12a964', open: this.open, selectedPropertyId: this.selectedProperty?.PROPERTY_ID, properties: this.linkedProperties, onPropertySelected: this.handlePropertySelected })))))));
    }
    static get is() { return "ir-property-switcher"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-property-switcher.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-property-switcher.css"]
        };
    }
    static get properties() {
        return {
            "mode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'dropdown' | 'dialog'",
                    "resolved": "\"dialog\" | \"dropdown\"",
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
                "attribute": "mode",
                "reflect": false,
                "defaultValue": "'dialog'"
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
            "open": {},
            "selectedProperty": {},
            "linkedProperties": {},
            "displayMode": {}
        };
    }
    static get events() {
        return [{
                "method": "propertyChange",
                "name": "propertyChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits whenever the user selects a new property"
                },
                "complexType": {
                    "original": "FetchedProperty",
                    "resolved": "{ A_NAME: string; COUNTRY_CODE: string; COUNTRY_NAME: string; PROPERTY_ID: number; PROPERTY_NAME: string; }",
                    "references": {
                        "FetchedProperty": {
                            "location": "import",
                            "path": "@/services/property.service",
                            "id": "src/services/property.service.ts::FetchedProperty"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "ticket",
                "methodName": "handleTicketChange"
            }];
    }
}
//# sourceMappingURL=ir-property-switcher.js.map
