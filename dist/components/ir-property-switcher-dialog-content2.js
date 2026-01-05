import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './ir-input2.js';

const irPropertySwitcherDialogContentCss = ".sc-ir-property-switcher-dialog-content-h{display:block}.property-switcher__search-input.sc-ir-property-switcher-dialog-content{padding:1rem}.property-switcher__results.sc-ir-property-switcher-dialog-content{max-height:250px;overflow-y:auto}.property-switcher__status.sc-ir-property-switcher-dialog-content{padding:1rem;font-size:0.875rem;color:var(--ir-color-text-muted, #646464)}";
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
    /** Emits whenever the user picks a property from the list. */
    propertySelected;
    properties = [];
    filteredProperties = [];
    searchTerm = '';
    highlightedIndex = -1;
    isLoading = false;
    error = null;
    // private propertyService = new PropertyService();
    inputRef;
    componentWillLoad() {
        this.loadProperties();
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
    handleSelectedPropertyIdChange() {
        this.syncHighlightedIndex();
    }
    async loadProperties() {
        this.isLoading = true;
        this.error = null;
        try {
            // const result = await this.propertyService.getExposedAllowedProperties();
            // this.properties = Array.isArray(result) ? result : [];
            // this.applyFilters(true);
        }
        catch (error) {
            console.error('Failed to fetch allowed properties', error);
            this.error = error?.message ?? 'Unable to fetch properties.';
            this.properties = [];
            this.applyFilters(true);
        }
        finally {
            this.isLoading = false;
        }
    }
    resetFilters() {
        this.searchTerm = '';
        this.applyFilters(true);
    }
    applyFilters(resetHighlight = false) {
        const query = this.searchTerm.trim().toLowerCase();
        const filtered = !query ? [...this.properties] : this.properties.filter(property => property.name.toLowerCase().includes(query));
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
        return list.findIndex(property => property.id === this.selectedPropertyId);
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
        return (h(Host, { key: '438ce00508583f6ed790c0d5b634fa50f0ae3a8a' }, h("ir-input", { key: 'dcab37451f5634e04a607f47a41195b76011d89b', autoFocus: true, ref: el => (this.inputRef = el), placeholder: "Find property", class: "property-switcher__search-input", value: this.searchTerm, "onText-change": this.handleSearchChange, onKeyDown: this.handleKeyDown, withClear: true }), h("div", { key: 'f27c04ac5af91b94cc5e45cd59021d0bf9f4260b', tabIndex: -1, class: "property-switcher__results" }, this.isLoading && this.renderStatus('Loading properties...'), !this.isLoading && this.error && this.renderStatus(this.error), !this.isLoading && !this.error && this.filteredProperties.length === 0 && this.renderStatus('No properties found'), !this.isLoading &&
            !this.error &&
            this.filteredProperties.map((property, index) => (h("wa-option", { value: property.id?.toString(), onClick: () => this.selectProperty(property), selected: this.selectedPropertyId === property.id, current: this.highlightedIndex === index }, property.name))))));
    }
    static get watchers() { return {
        "open": ["handleOpenChange"],
        "selectedPropertyId": ["handleSelectedPropertyIdChange"]
    }; }
    static get style() { return IrPropertySwitcherDialogContentStyle0; }
}, [2, "ir-property-switcher-dialog-content", {
        "open": [4],
        "selectedPropertyId": [2, "selected-property-id"],
        "properties": [32],
        "filteredProperties": [32],
        "searchTerm": [32],
        "highlightedIndex": [32],
        "isLoading": [32],
        "error": [32]
    }, undefined, {
        "open": ["handleOpenChange"],
        "selectedPropertyId": ["handleSelectedPropertyIdChange"]
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