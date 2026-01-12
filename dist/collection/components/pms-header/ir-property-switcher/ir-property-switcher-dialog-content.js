var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Host, h } from "@stencil/core";
import { Debounce } from "../../../decorators/debounce";
import axios from "axios";
/**
 * Internal component responsible for rendering the searchable list of properties inside the switcher dialog.
 * It owns the data fetching, filtering and keyboard navigation logic so the parent dialog stays lean.
 */
export class IrPropertySwitcherDialogContent {
    el;
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
    static get is() { return "ir-property-switcher-dialog-content"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-property-switcher-dialog-content.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-property-switcher-dialog-content.css"]
        };
    }
    static get properties() {
        return {
            "open": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether the surrounding dialog is open. Used to focus and reset the search input as needed."
                },
                "getter": false,
                "setter": false,
                "attribute": "open",
                "reflect": false,
                "defaultValue": "false"
            },
            "selectedPropertyId": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "ID of the property that is currently selected in the parent component."
                },
                "getter": false,
                "setter": false,
                "attribute": "selected-property-id",
                "reflect": false
            },
            "properties": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "LinkedProperty[]",
                    "resolved": "LinkedProperty[]",
                    "references": {
                        "LinkedProperty": {
                            "location": "import",
                            "path": "@/services/property.service",
                            "id": "src/services/property.service.ts::LinkedProperty"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Linked properties provided by the parent switcher."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            }
        };
    }
    static get states() {
        return {
            "filteredProperties": {},
            "searchTerm": {},
            "highlightedIndex": {}
        };
    }
    static get events() {
        return [{
                "method": "propertySelected",
                "name": "propertySelected",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits whenever the user picks a property from the list."
                },
                "complexType": {
                    "original": "FetchedProperty['PROPERTY_ID']",
                    "resolved": "number",
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
                "propName": "open",
                "methodName": "handleOpenChange"
            }, {
                "propName": "selectedPropertyId",
                "methodName": "handleSelectedPropertyIdChange"
            }];
    }
}
__decorate([
    Debounce(300)
], IrPropertySwitcherDialogContent.prototype, "fetchProperties", null);
//# sourceMappingURL=ir-property-switcher-dialog-content.js.map
