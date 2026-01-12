import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { a as axios } from './axios.js';
import { T as Token } from './Token.js';
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
    /** Emits whenever the user selects a new property from the switcher dialog. */
    propertyChange;
    async componentWillLoad() {
        if (this.baseUrl)
            this.token.setBaseUrl(this.baseUrl);
        if (this.ticket) {
            this.token.setToken(this.ticket);
            await this.initializeLinkedProperties();
        }
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.token.setToken(this.ticket);
            this.initializeLinkedProperties();
        }
    }
    getStoredSelectedAc() {
        const raw = localStorage.getItem('_Selected_Ac');
        if (!raw) {
            return null;
        }
        try {
            return JSON.parse(raw);
        }
        catch (error) {
            console.error('Failed to parse _Selected_Ac from localStorage', error);
            return null;
        }
    }
    updateSelectedProperty(selectedAc) {
        this.selectedProperty = {
            A_NAME: selectedAc.My_User?.USERNAME ?? '',
            COUNTRY_CODE: selectedAc.COUNTRY_ID,
            COUNTRY_NAME: selectedAc.My_Country?.L1_NAME_REF ?? '',
            PROPERTY_ID: selectedAc.AC_ID,
            PROPERTY_NAME: selectedAc.NAME,
        };
    }
    async initializeLinkedProperties() {
        const selectedAc = this.getStoredSelectedAc();
        if (!selectedAc) {
            this.linkedProperties = [];
            this.resolveDisplayMode(false);
            return;
        }
        this.updateSelectedProperty(selectedAc);
        await this.fetchLinkedProperties(selectedAc.AC_ID);
        this.resolveDisplayMode(true);
    }
    async fetchLinkedProperties(acId) {
        try {
            const { data } = await axios.post('/Fetch_Linked_Properties', { AC_ID: acId });
            if (data.ExceptionMsg !== '') {
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
        if (userInfoRaw) {
            try {
                userInfo = JSON.parse(userInfoRaw);
            }
            catch (error) {
                console.error('Failed to parse UserInfo_b from localStorage', error);
            }
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
    trigger() {
        return (h("ir-custom-button", { onClickHandler: () => {
                this.open = !this.open;
            }, withCaret: true, variant: "neutral", appearance: "plain" }, h("p", { class: "property-switcher__trigger" }, this.selectedProperty?.PROPERTY_NAME ?? 'Select property')));
    }
    handlePropertySelected = async (event) => {
        await this.applySelectedProperty(event.detail);
    };
    handleDropdownSelect = async (event) => {
        const selectedId = Number(event.detail);
        const property = this.linkedProperties.find(item => item.PROPERTY_ID === selectedId);
        if (!property) {
            return;
        }
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
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            localStorage.setItem('_Selected_Ac', JSON.stringify(data.My_Result ?? data));
        }
        catch (error) {
            console.error('Failed to fetch selected property details', error);
        }
        this.propertyChange.emit(property);
        await this.initializeLinkedProperties();
    }
    renderReadOnly() {
        return h("p", { class: "property-switcher__trigger" }, this.selectedProperty?.PROPERTY_NAME ?? 'Property');
    }
    render() {
        console.log(this.selectedProperty);
        return (h(Host, { key: '9d1b5872e971bab9b2288dca3513a22a1c787b61' }, this.displayMode === 'read-only' && this.renderReadOnly(), this.displayMode === 'dropdown' && (h("ir-select", { key: '6c794799f77dc21b2a4ffff7bf50fde1a3b54fef', showFirstOption: false, selectedValue: this.selectedProperty?.PROPERTY_ID?.toString() ?? '', data: this.linkedProperties.map(property => ({
                value: property.PROPERTY_ID?.toString(),
                text: `${property.PROPERTY_NAME} ${property.COUNTRY_NAME}`,
            })), onSelectChange: this.handleDropdownSelect })), this.displayMode === 'dialog' && (h("div", { key: 'b1ec022e702cd9a9307067dc660ee7d506b391df' }, this.trigger(), h("ir-dialog", { key: '1ab49d17a866fb7fa5caf757b55e000b195aaf73', onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.open = false;
            }, withoutHeader: true, open: this.open, label: "Find property", class: "property-switcher__dialog" }, this.open && (h("ir-property-switcher-dialog-content", { key: 'd5c8713e572341de5367eedb5924592e2d78b517', open: this.open, selectedPropertyId: this.selectedProperty?.PROPERTY_ID, properties: this.linkedProperties, onPropertySelected: this.handlePropertySelected })))))));
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