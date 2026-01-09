import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './ir-input2.js';

const irPropertySwitcherDialogContentCss = ".sc-ir-property-switcher-dialog-content-h{display:block}.property-switcher__search-input.sc-ir-property-switcher-dialog-content{padding:1rem}.property-switcher__results.sc-ir-property-switcher-dialog-content{max-height:250px;min-height:150px;overflow-y:auto;padding-bottom:1rem}.property-switcher__status.sc-ir-property-switcher-dialog-content{padding:1rem;font-size:0.875rem;color:var(--ir-color-text-muted, #646464)}";
const IrPropertySwitcherDialogContentStyle0 = irPropertySwitcherDialogContentCss;

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
    linkedProperties = [];
    filteredProperties = [];
    searchTerm = '';
    highlightedIndex = -1;
    // private propertyService = new PropertyService();
    inputRef;
    componentWillLoad() {
        this.syncProperties(this.properties);
    }
    handleOpenChange(isOpen) {
        if (!isOpen) {
            return;
        }
        requestAnimationFrame(() => {
            this.inputRef?.focusInput();
            this.resetFilters();
        });
    }
    componentDidLoad() {
        this.inputRef?.focusInput();
    }
    handleSelectedPropertyIdChange() {
        this.syncHighlightedIndex();
    }
    handlePropertiesChange(newValue) {
        this.syncProperties(newValue);
    }
    syncProperties(properties = []) {
        this.linkedProperties = Array.isArray(properties) ? properties : [];
        this.applyFilters(true);
    }
    resetFilters() {
        this.searchTerm = '';
        this.applyFilters(true);
    }
    applyFilters(resetHighlight = false) {
        const query = this.searchTerm.trim().toLowerCase();
        const filtered = !query ? [...this.linkedProperties] : this.linkedProperties.filter(property => property.PROPERTY_NAME.toLowerCase().includes(query));
        this.filteredProperties = filtered;
        if (!filtered.length) {
            this.highlightedIndex = -1;
            return;
        }
        if (resetHighlight) {
            const selectedIndex = this.getSelectedIndex(filtered);
            this.highlightedIndex = selectedIndex >= 0 ? selectedIndex : 0;
        }
        else {
            this.syncHighlightedIndex();
        }
        requestAnimationFrame(() => this.ensureHighlightedVisible());
    }
    getSelectedIndex(list) {
        if (!this.selectedPropertyId) {
            return -1;
        }
        return list.findIndex(property => property.PROPERTY_ID === this.selectedPropertyId);
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
        this.applyFilters(true);
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
        this.propertySelected.emit(property);
    }
    renderStatus(text) {
        return h("div", { class: "property-switcher__status" }, text);
    }
    render() {
        return (h(Host, { key: '17502f9bfcbf8156d0da32e60729586056d45ce4' }, h("ir-input", { key: 'd4debcd6b465006498840ca7cda8b27777a203de', autofocus: true, ref: el => (this.inputRef = el), placeholder: "Find property", class: "property-switcher__search-input", value: this.searchTerm, "onText-change": this.handleSearchChange, onKeyDown: this.handleKeyDown, withClear: true }), h("div", { key: '327475c0a5d950d0ffd0ca462e96f0918b16bb87', tabIndex: -1, class: "property-switcher__results" }, !this.searchTerm && this.properties?.length > 0 && (h("div", { key: 'ad17da54346ffe5050c77d5cfc5c312d8fc7c282' }, h("p", { key: '45c45296c3cb7314a93e1442477499a55b143402', style: { padding: '1rem', margin: '0', paddingTop: '0' } }, h("small", { key: 'd4ce3c08b41004780ae4417ee25808802ee97899' }, "Linked Properties")), this.properties.map(property => {
            const label = `${property.PROPERTY_NAME} ${property.COUNTRY_NAME}`;
            return (h("wa-option", { onClick: () => this.selectProperty(property), selected: this.selectedPropertyId === property.PROPERTY_ID, value: property.PROPERTY_ID?.toString(), label: label }, label));
        }), h("wa-divider", { key: 'f1780e25e77bafd6bee4231c82e5921e60ef4e2b' }))), this.searchTerm && this.filteredProperties.length === 0 && this.renderStatus('No properties found'), this.filteredProperties.map((property, index) => {
            const label = `${property.PROPERTY_NAME} ${property.COUNTRY_NAME}`;
            return (h("wa-option", { onClick: () => this.selectProperty(property), selected: this.selectedPropertyId === property.PROPERTY_ID, current: this.highlightedIndex === index, value: property.PROPERTY_ID?.toString(), label: label }, label));
        }))));
    }
    static get watchers() { return {
        "open": ["handleOpenChange"],
        "selectedPropertyId": ["handleSelectedPropertyIdChange"],
        "properties": ["handlePropertiesChange"]
    }; }
    static get style() { return IrPropertySwitcherDialogContentStyle0; }
}, [2, "ir-property-switcher-dialog-content", {
        "open": [4],
        "selectedPropertyId": [2, "selected-property-id"],
        "properties": [16],
        "linkedProperties": [32],
        "filteredProperties": [32],
        "searchTerm": [32],
        "highlightedIndex": [32]
    }, undefined, {
        "open": ["handleOpenChange"],
        "selectedPropertyId": ["handleSelectedPropertyIdChange"],
        "properties": ["handlePropertiesChange"]
    }]);
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