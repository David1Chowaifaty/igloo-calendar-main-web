import { Host, h } from "@stencil/core";
import Token from "../../../models/Token";
import axios from "axios";
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
    userInfoPoller;
    lastSelectedAcRaw = null;
    lastUserInfoRaw = null;
    async componentWillLoad() {
        if (this.baseUrl)
            this.token.setBaseUrl(this.baseUrl);
        if (this.ticket) {
            this.token.setToken(this.ticket);
            this.init();
        }
        // Listen for cross-tab updates
        window.addEventListener('storage', this.handleStorageEvent);
    }
    disconnectedCallback() {
        this.stopSelectedAcPolling();
        this.stopUserInfoPolling();
        window.removeEventListener('storage', this.handleStorageEvent);
    }
    async handleTicketChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.token.setToken(newValue);
            this.init();
        }
    }
    async init() {
        await this.pollSelectedAcStorage();
        this.pollUserInfoStorage();
        if (!this.selectedProperty) {
            this.startSelectedAcPolling();
        }
        if (!this.lastUserInfoRaw) {
            this.startUserInfoPolling();
        }
    }
    startSelectedAcPolling() {
        if (this.storagePoller)
            return;
        this.storagePoller = window.setInterval(this.pollSelectedAcStorage, 300);
    }
    stopSelectedAcPolling() {
        if (this.storagePoller) {
            clearInterval(this.storagePoller);
            this.storagePoller = undefined;
        }
    }
    startUserInfoPolling() {
        if (this.userInfoPoller)
            return;
        this.userInfoPoller = window.setInterval(this.pollUserInfoStorage, 300);
    }
    stopUserInfoPolling() {
        if (this.userInfoPoller) {
            clearInterval(this.userInfoPoller);
            this.userInfoPoller = undefined;
        }
    }
    handleStorageEvent = () => {
        // Cross-tab change - re-enable polling briefly
        this.startSelectedAcPolling();
        this.startUserInfoPolling();
    };
    pollSelectedAcStorage = async () => {
        const selectedAcRaw = localStorage.getItem('_Selected_Ac');
        // Nothing changed - skip work
        if (selectedAcRaw === this.lastSelectedAcRaw) {
            return;
        }
        this.lastSelectedAcRaw = selectedAcRaw;
        if (!selectedAcRaw) {
            return;
        }
        let selectedAc;
        try {
            selectedAc = JSON.parse(selectedAcRaw);
        }
        catch {
            return;
        }
        // ? Storage is now valid
        this.updateSelectedProperty(selectedAc);
        await this.fetchLinkedProperties(selectedAc.AC_ID);
        this.resolveDisplayMode(true);
        // ?? Stop polling once initialized
        this.stopSelectedAcPolling();
    };
    pollUserInfoStorage = () => {
        const userInfoRaw = localStorage.getItem('UserInfo_b');
        if (userInfoRaw === this.lastUserInfoRaw) {
            return;
        }
        this.lastUserInfoRaw = userInfoRaw;
        if (!userInfoRaw) {
            return;
        }
        this.resolveDisplayMode(!!this.selectedProperty);
        this.stopUserInfoPolling();
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
            const { data } = await axios.post(`${this.baseUrl ?? ''}/Fetch_Linked_Properties`, {
                property_id: acId,
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
        event.stopImmediatePropagation();
        event.stopPropagation();
        await this.applySelectedProperty(event.detail);
    };
    handleDropdownSelect = async (event) => {
        const selectedId = Number(event.detail.item.value);
        const property = this.linkedProperties.find(p => p.property_id === selectedId);
        if (!property)
            return;
        await this.applySelectedProperty(property.property_id);
    };
    async applySelectedProperty(propertyId) {
        this.open = false;
        try {
            const { data } = await axios.post(`${this.baseUrl ?? ''}/Get_Ac_By_AC_ID_Adv`, {
                AC_ID: propertyId,
                Bypass_Caching: true,
                IS_BACK_OFFICE: true,
            });
            if (data.ExceptionMsg) {
                throw new Error(data.ExceptionMsg);
            }
            const property = data.My_Result;
            localStorage.setItem('_Selected_Ac', JSON.stringify(property));
            this.propertyChange.emit(property);
            this.updateSelectedProperty(property);
        }
        catch (error) {
            console.error('Failed to fetch selected property details', error);
        }
        // Re-init via polling-safe path
        this.startSelectedAcPolling();
        this.startUserInfoPolling();
    }
    renderReadOnly() {
        return h("p", { class: "property-switcher__trigger" }, this.selectedProperty?.PROPERTY_NAME ?? 'Property');
    }
    trigger() {
        return (h("ir-custom-button", { withCaret: true, variant: "neutral", appearance: "plain", onClickHandler: () => (this.open = !this.open) }, h("p", { class: "property-switcher__trigger" }, this.selectedProperty?.PROPERTY_NAME ?? 'Select property')));
    }
    render() {
        return (h(Host, { key: 'e84539385daf18e70cf74ac9128956e230c5fdfb' }, this.displayMode === 'read-only' && this.renderReadOnly(), this.displayMode === 'dropdown' && (h("wa-dropdown", { key: '75dac4652970804a45fb42ef8238a6d0ed3b6818', "onwa-hide": e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
            }, "onwa-select": e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.handleDropdownSelect(e);
            } }, h("ir-custom-button", { key: '23577c9b80df9e53dbeffd0dec07efa681053861', slot: "trigger", withCaret: true, variant: "neutral", appearance: "plain" }, this.selectedProperty?.PROPERTY_NAME), this.linkedProperties?.map(property => (h("wa-dropdown-item", { value: property.property_id?.toString(), key: `dropdown-item-${property.property_id}` }, property.name))))), this.displayMode === 'dialog' && (h("div", { key: '35d206ff86407189aeb48df2204be429c2492afa' }, this.trigger(), h("ir-dialog", { key: 'b6ac09abe4c28270a179663244470871c55f1e62', withoutHeader: true, open: this.open, label: "Find property", class: "property-switcher__dialog", onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.open = false;
            } }, this.open && (h("ir-property-switcher-dialog-content", { key: '0e0da1dd2689e56903c9e38d2788724aea947c99', open: this.open, selectedPropertyId: this.selectedProperty?.PROPERTY_ID, properties: this.linkedProperties, onPropertySelected: this.handlePropertySelected })))))));
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
