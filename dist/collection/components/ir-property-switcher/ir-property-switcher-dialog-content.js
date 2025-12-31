import { Host, h } from "@stencil/core";
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
        return (h(Host, { key: '70f4bf5e041abcd706b827379c1012990c850990' }, h("ir-input", { key: '50c53acaf05e56e971668e6b68e609ded835819c', autoFocus: true, ref: el => (this.inputRef = el), placeholder: "Find property", class: "property-switcher__search-input", value: this.searchTerm, "onText-change": this.handleSearchChange, onKeyDown: this.handleKeyDown, withClear: true }), h("div", { key: 'f5ac7f567f066bbbda66cf511462d01b3ce5842b', tabIndex: -1, class: "property-switcher__results" }, this.isLoading && this.renderStatus('Loading properties...'), !this.isLoading && this.error && this.renderStatus(this.error), !this.isLoading && !this.error && this.filteredProperties.length === 0 && this.renderStatus('No properties found'), !this.isLoading &&
            !this.error &&
            this.filteredProperties.map((property, index) => (h("wa-option", { value: property.id?.toString(), onClick: () => this.selectProperty(property), selected: this.selectedPropertyId === property.id, current: this.highlightedIndex === index }, property.name))))));
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
            }
        };
    }
    static get states() {
        return {
            "properties": {},
            "filteredProperties": {},
            "searchTerm": {},
            "highlightedIndex": {},
            "isLoading": {},
            "error": {}
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
                    "original": "AllowedProperty",
                    "resolved": "{ name?: string; id?: number; }",
                    "references": {
                        "AllowedProperty": {
                            "location": "global",
                            "id": "global::AllowedProperty"
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
//# sourceMappingURL=ir-property-switcher-dialog-content.js.map
