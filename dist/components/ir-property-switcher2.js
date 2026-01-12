import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { T as Token } from './Token.js';
import { a as axios } from './axios.js';
import { d as defineCustomElement$5 } from './ir-custom-button2.js';
import { d as defineCustomElement$4 } from './ir-dialog2.js';
import { d as defineCustomElement$3 } from './ir-input2.js';
import { d as defineCustomElement$2 } from './ir-property-switcher-dialog-content2.js';
import { d as defineCustomElement$1 } from './ir-select2.js';

const irPropertySwitcherCss = ".sc-ir-property-switcher-h{display:block}.property-switcher__trigger.sc-ir-property-switcher{width:200px;padding:0;margin:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.property-switcher__dialog.sc-ir-property-switcher::part(body){padding:0}";
const IrPropertySwitcherStyle0 = irPropertySwitcherCss;

const IrPropertySwitcher = /*@__PURE__*/ proxyCustomElement(class IrPropertySwitcher extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.propertyChange = createEvent(this, "propertyChange", 7);
    }
    get el() { return this; }
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
        if (this.ticket)
            this.token.setToken(this.ticket);
        // Try once immediately
        await this.pollSelectedAcStorage();
        this.pollUserInfoStorage();
        // Start polling only if data not ready yet
        if (!this.selectedProperty) {
            this.startSelectedAcPolling();
        }
        if (!this.lastUserInfoRaw) {
            this.startUserInfoPolling();
        }
        // Listen for cross-tab updates
        window.addEventListener('storage', this.handleStorageEvent);
    }
    disconnectedCallback() {
        this.stopSelectedAcPolling();
        this.stopUserInfoPolling();
        window.removeEventListener('storage', this.handleStorageEvent);
    }
    /* --------------------------------------------
     * Watchers
     * -------------------------------------------- */
    async handleTicketChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.token.setToken(newValue);
            await this.pollSelectedAcStorage();
            this.startSelectedAcPolling();
            this.startUserInfoPolling();
        }
    }
    /* --------------------------------------------
     * LocalStorage polling logic
     * -------------------------------------------- */
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
        return (h(Host, { key: '2c6bb2d45054cd7b79b48d8163f4a245290098fa' }, this.displayMode === 'read-only' && this.renderReadOnly(), this.displayMode === 'dropdown' && (h("ir-select", { key: '8f44fd3d5ecaeb60e0c4b2beb108587021da5e1a', showFirstOption: false, selectedValue: this.selectedProperty?.PROPERTY_ID?.toString() ?? '', data: this.linkedProperties.map(p => ({
                value: p.PROPERTY_ID?.toString(),
                text: `${p.PROPERTY_NAME} ${p.COUNTRY_NAME}`,
            })), onSelectChange: this.handleDropdownSelect })), this.displayMode === 'dialog' && (h("div", { key: 'e20cb517dadc78a17dd0644e1f1a947a24ca2e3a' }, this.trigger(), h("ir-dialog", { key: 'b9391ba45bc8afdca3013e338f81fd65c73b12a0', withoutHeader: true, open: this.open, label: "Find property", class: "property-switcher__dialog", onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.open = false;
            } }, this.open && (h("ir-property-switcher-dialog-content", { key: '6b74212240464cd33041c3880ca948939a4e50d9', open: this.open, selectedPropertyId: this.selectedProperty?.PROPERTY_ID, properties: this.linkedProperties, onPropertySelected: this.handlePropertySelected })))))));
    }
    static get watchers() { return {
        "ticket": ["handleTicketChange"]
    }; }
    static get style() { return IrPropertySwitcherStyle0; }
}, [2, "ir-property-switcher", {
        "mode": [1],
        "ticket": [1],
        "baseUrl": [1, "base-url"],
        "open": [32],
        "selectedProperty": [32],
        "linkedProperties": [32],
        "displayMode": [32]
    }, undefined, {
        "ticket": ["handleTicketChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-property-switcher", "ir-custom-button", "ir-dialog", "ir-input", "ir-property-switcher-dialog-content", "ir-select"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-property-switcher":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPropertySwitcher);
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-property-switcher-dialog-content":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrPropertySwitcher as I, defineCustomElement as d };

//# sourceMappingURL=ir-property-switcher2.js.map