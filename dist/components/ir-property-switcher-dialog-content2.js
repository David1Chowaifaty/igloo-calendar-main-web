import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { D as Debounce } from './debounce.js';
import { a as axios } from './axios.js';
import { d as defineCustomElement$1 } from './ir-input2.js';

const irPropertySwitcherDialogContentCss = ".sc-ir-property-switcher-dialog-content-h{display:block}.property-switcher__search-input.sc-ir-property-switcher-dialog-content{padding:1rem}.property-switcher__results.sc-ir-property-switcher-dialog-content{max-height:250px;min-height:150px;overflow-y:auto;padding-bottom:1rem}.property-switcher__status.sc-ir-property-switcher-dialog-content{padding:1rem;font-size:0.875rem;color:var(--ir-color-text-muted, #646464)}";
const IrPropertySwitcherDialogContentStyle0 = irPropertySwitcherDialogContentCss;

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const IrPropertySwitcherDialogContent = /*@__PURE__*/ proxyCustomElement(class IrPropertySwitcherDialogContent extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.propertySelected = createEvent(this, "propertySelected", 7);
    }
    get el() { return this; }
    /** Whether the surrounding dialog is open. Used to focus and reset the search input as needed. */
    open = false;
    /** ID of the property that is currently selected in the parent component. */
    selectedPropertyId;
    /** Linked properties provided by the parent switcher. */
    properties = [];
    /** Emits whenever the user picks a property from the list. */
    propertySelected;
    filteredProperties = [];
    searchTerm = '';
    highlightedIndex = -1;
    inputRef;
    handleOpenChange(isOpen) {
        if (!isOpen) {
            return;
        }
        requestAnimationFrame(() => {
            this.inputRef?.focusInput();
            this.resetSearch();
        });
    }
    componentDidLoad() {
        this.inputRef?.focusInput();
    }
    handleSelectedPropertyIdChange() {
        this.syncHighlightedIndex();
    }
    resetSearch() {
        this.searchTerm = '';
        this.filteredProperties = [];
        this.highlightedIndex = -1;
    }
    async fetchProperties(searchTerm) {
        const query = searchTerm.trim();
        if (!query) {
            this.filteredProperties = [];
            this.highlightedIndex = -1;
            return;
        }
        try {
            const { data } = await axios.post('/Fetch_Properties', { SEARCH_TERM: query });
            const properties = data.My_Result;
            this.filteredProperties = properties;
        }
        catch (error) {
            console.error('Failed to fetch properties', error);
            this.filteredProperties = [];
        }
        if (!this.filteredProperties.length) {
            this.highlightedIndex = -1;
            return;
        }
        const selectedIndex = this.getSelectedIndex(this.filteredProperties);
        this.highlightedIndex = selectedIndex >= 0 ? selectedIndex : 0;
        requestAnimationFrame(() => this.ensureHighlightedVisible());
    }
    getSelectedIndex(list) {
        if (!this.selectedPropertyId) {
            return -1;
        }
        return list.findIndex(property => this.getPropertyId(property) === this.selectedPropertyId);
    }
    syncHighlightedIndex() {
        if (!this.filteredProperties.length) {
            this.highlightedIndex = -1;
            return;
        }
        const selectedIndex = this.getSelectedIndex(this.filteredProperties);
        if (selectedIndex >= 0) {
            this.highlightedIndex = selectedIndex;
            return;
        }
        this.highlightedIndex = Math.min(Math.max(this.highlightedIndex, 0), this.filteredProperties.length - 1);
    }
    handleSearchChange = (event) => {
        this.searchTerm = event.detail ?? '';
        this.fetchProperties(this.searchTerm);
    };
    handleKeyDown = (event) => {
        if (!this.filteredProperties.length) {
            return;
        }
        switch (event.key) {
            case 'ArrowDown':
                event.preventDefault();
                this.highlightedIndex = Math.min(this.filteredProperties.length - 1, this.highlightedIndex + 1);
                this.ensureHighlightedVisible();
                break;
            case 'ArrowUp':
                event.preventDefault();
                this.highlightedIndex = Math.max(0, this.highlightedIndex - 1);
                this.ensureHighlightedVisible();
                break;
            case 'Enter':
                event.preventDefault();
                this.selectProperty(this.filteredProperties[this.highlightedIndex]);
                break;
        }
    };
    ensureHighlightedVisible() {
        if (this.highlightedIndex < 0) {
            return;
        }
        const options = this.el.querySelectorAll('wa-option');
        const option = options?.[this.highlightedIndex];
        option?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }
    selectProperty(property) {
        if (!property) {
            return;
        }
        const propertyId = this.getPropertyId(property);
        if (typeof propertyId !== 'number') {
            return;
        }
        this.propertySelected.emit(propertyId);
    }
    getPropertyId(property) {
        return 'PROPERTY_ID' in property ? property.PROPERTY_ID : property.property_id;
    }
    renderStatus(text) {
        return h("div", { class: "property-switcher__status" }, text);
    }
    render() {
        return (h(Host, { key: '357614e8ffd5c2532314764d707cc9891adb08e0' }, h("ir-input", { key: 'e988582f9b6964c985107ca374318134857c8e3b', autofocus: true, ref: el => (this.inputRef = el), placeholder: "Find property", class: "property-switcher__search-input", value: this.searchTerm, "onText-change": this.handleSearchChange, onKeyDown: this.handleKeyDown, withClear: true }), h("div", { key: '6d17451c07890eb7ded920e1daf565d3b1c6f66c', tabIndex: -1, class: "property-switcher__results" }, !this.searchTerm && this.properties?.length > 0 && (h("div", { key: '51daa281f5e9cf9220b4c6aea80942004352aa52' }, h("p", { key: 'd21ee71a25b47506e77b239a6778eba5833f61d4', style: { padding: '1rem', margin: '0', paddingTop: '0' } }, h("small", { key: 'f14c7f9255987397cd48acdb126f50b7002209a9' }, "Linked Properties")), this.properties.map(property => {
            const label = `${property.name}`;
            return (h("wa-option", { onClick: () => this.selectProperty(property), selected: this.selectedPropertyId === property.property_id, value: property.property_id?.toString(), label: label }, label));
        }), h("wa-divider", { key: 'c3468e6a7858f6c298e275224c67a0d677725eec' }))), this.searchTerm && this.filteredProperties.length === 0 && this.renderStatus('No properties found'), this.filteredProperties.map((property, index) => {
            const label = `${property.PROPERTY_NAME} ${property.COUNTRY_NAME}`;
            return (h("wa-option", { onClick: () => this.selectProperty(property), selected: this.selectedPropertyId === property.PROPERTY_ID, current: this.highlightedIndex === index, value: property.PROPERTY_ID?.toString(), label: label }, label));
        }))));
    }
    static get watchers() { return {
        "open": ["handleOpenChange"],
        "selectedPropertyId": ["handleSelectedPropertyIdChange"]
    }; }
    static get style() { return IrPropertySwitcherDialogContentStyle0; }
}, [2, "ir-property-switcher-dialog-content", {
        "open": [4],
        "selectedPropertyId": [2, "selected-property-id"],
        "properties": [16],
        "filteredProperties": [32],
        "searchTerm": [32],
        "highlightedIndex": [32]
    }, undefined, {
        "open": ["handleOpenChange"],
        "selectedPropertyId": ["handleSelectedPropertyIdChange"]
    }]);
__decorate([
    Debounce(300)
], IrPropertySwitcherDialogContent.prototype, "fetchProperties", null);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-property-switcher-dialog-content", "ir-input"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-property-switcher-dialog-content":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPropertySwitcherDialogContent);
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrPropertySwitcherDialogContent as I, defineCustomElement as d };

//# sourceMappingURL=ir-property-switcher-dialog-content2.js.map