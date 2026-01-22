import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from './index-7e96440e.js';
import { a as axios } from './axios-aa1335b8.js';
import { D as Debounce } from './debounce-542065c2.js';

const irPropertySwitcherDialogContentCss = ".sc-ir-property-switcher-dialog-content-h{display:block}.property-switcher__search-input.sc-ir-property-switcher-dialog-content{padding:1rem}.property-switcher__search-input.sc-ir-property-switcher-dialog-content::part(base){font-size:16px;height:32px}.property-switcher__status.sc-ir-property-switcher-dialog-content{padding:1rem;font-size:0.875rem;color:var(--ir-color-text-muted, #646464)}@media (min-width: 640px){.property-switcher__results.sc-ir-property-switcher-dialog-content{max-height:250px;min-height:150px;overflow-y:auto;padding-bottom:1rem}}";
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
const IrPropertySwitcherDialogContent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.propertySelected = createEvent(this, "propertySelected", 7);
        this.linkedPropertyChange = createEvent(this, "linkedPropertyChange", 7);
    }
    get el() { return getElement(this); }
    /** Whether the surrounding dialog is open. Used to focus and reset the search input as needed. */
    open = false;
    /** ID of the property that is currently selected in the parent component. */
    selectedPropertyId;
    /** Linked properties provided by the parent switcher. */
    properties = [];
    /** Emits whenever the user picks a property from the list. */
    propertySelected;
    linkedPropertyChange;
    filteredProperties = [];
    searchTerm = '';
    highlightedIndex = -1;
    inputRef;
    resetOnOpenFrame;
    focusOnLoadFrame;
    handleOpenChange(isOpen) {
        if (!isOpen) {
            return;
        }
        this.resetOnOpenFrame = requestAnimationFrame(() => {
            // this.inputRef?.focusInput();
            this.resetSearch();
        });
    }
    componentDidLoad() {
        this.focusOnLoadFrame = requestAnimationFrame(() => {
            this.inputRef?.focusInput();
        });
    }
    disconnectedCallback() {
        if (this.resetOnOpenFrame)
            cancelAnimationFrame(this.resetOnOpenFrame);
        if (this.focusOnLoadFrame)
            cancelAnimationFrame(this.focusOnLoadFrame);
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
        return (h(Host, { key: '47daa8547a4ef20867653794149b0fb47874098d' }, h("ir-input", { key: '96c727f22d28f9b11d69980bdbd0e72965fdb39a', autofocus: true, ref: el => (this.inputRef = el), placeholder: "Enter name or A number", class: "property-switcher__search-input", value: this.searchTerm, "onText-change": this.handleSearchChange, onKeyDown: this.handleKeyDown, withClear: true }), h("div", { key: '118d8e75bff2246c473dc90ba8c37b184a16e9dd', tabIndex: -1, class: "property-switcher__results" }, !this.searchTerm && this.properties?.length > 0 && (h("div", { key: 'e56b4ff3a15cf0340d1f2b6fec0cebab2a3b75a9' }, h("p", { key: '286aad3cf19361be3f7e3f711c42bf8d6bf03bf7', style: { padding: '1rem', margin: '0', paddingTop: '0' } }, "Linked Properties"), this.properties.map(property => {
            const label = `${property.name}`;
            return (h("wa-option", { onClick: () => {
                    // this.selectProperty(property as any);
                    this.linkedPropertyChange.emit(property);
                }, selected: this.selectedPropertyId === property.property_id, value: property.property_id?.toString(), label: label }, label));
        }))), this.searchTerm && this.filteredProperties.length === 0 && this.renderStatus('No properties found'), this.filteredProperties.map((property, index) => {
            const label = `${property.COUNTRY_CODE}: ${property.PROPERTY_NAME} - ${property.A_NAME}`;
            return (h("wa-option", { onClick: () => this.selectProperty(property), selected: this.selectedPropertyId === property.PROPERTY_ID, current: this.highlightedIndex === index, value: property.PROPERTY_ID?.toString(), label: label }, label));
        }))));
    }
    static get watchers() { return {
        "open": ["handleOpenChange"],
        "selectedPropertyId": ["handleSelectedPropertyIdChange"]
    }; }
};
__decorate([
    Debounce(300)
], IrPropertySwitcherDialogContent.prototype, "fetchProperties", null);
IrPropertySwitcherDialogContent.style = IrPropertySwitcherDialogContentStyle0;

export { IrPropertySwitcherDialogContent as ir_property_switcher_dialog_content };

//# sourceMappingURL=ir-property-switcher-dialog-content.entry.js.map