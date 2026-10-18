import { Host, h } from "@stencil/core";
import { t } from "../../../services/locale/t";
export class IrColumnAutocomplete {
    options = [];
    selectedValues = [];
    placeholder;
    selectAllLabel;
    emptyLabel;
    showSelectAll = true;
    triggerId;
    query = '';
    normalizedOptions = [];
    selected = [];
    queryChange;
    autocompleteSelectionChange;
    static instanceCount = 0;
    generatedTriggerId;
    componentWillLoad() {
        IrColumnAutocomplete.instanceCount += 1;
        this.generatedTriggerId = this.triggerId ?? `ir-column-autocomplete-trigger-${IrColumnAutocomplete.instanceCount}`;
        this.normalizedOptions = this.normalizeOptions(this.options);
        this.selected = this.normalizeSelection(this.selectedValues);
    }
    handleOptionsChange(newOptions) {
        this.normalizedOptions = this.normalizeOptions(newOptions);
        this.selected = this.selected.filter(item => this.normalizedOptions.includes(item));
    }
    handleSelectedValuesChange(newSelectedValues) {
        this.selected = this.normalizeSelection(newSelectedValues);
    }
    normalizeOptions(values = []) {
        const uniqueValues = new Set(values.filter(Boolean).map(v => String(v)));
        return Array.from(uniqueValues);
    }
    normalizeSelection(values = []) {
        if (!Array.isArray(values))
            return [];
        const uniqueValues = new Set(values.filter(Boolean).map(v => String(v)));
        return Array.from(uniqueValues).filter(v => this.normalizedOptions.includes(v));
    }
    get filteredOptions() {
        const trimmedQuery = this.query.trim().toLowerCase();
        if (!trimmedQuery)
            return this.normalizedOptions;
        return this.normalizedOptions.filter(option => option.toLowerCase().includes(trimmedQuery));
    }
    get areAllFilteredSelected() {
        const filtered = this.filteredOptions;
        if (!filtered.length)
            return false;
        return filtered.every(option => this.selected.includes(option));
    }
    get areSomeFilteredSelected() {
        const filtered = this.filteredOptions;
        if (!filtered.length)
            return false;
        const selectedCount = filtered.filter(option => this.selected.includes(option)).length;
        return selectedCount > 0 && selectedCount < filtered.length;
    }
    emitSelectionChange() {
        this.autocompleteSelectionChange.emit({
            query: this.query,
            selected: this.selected,
        });
    }
    onQueryInput = (event) => {
        this.query = (event.target?.value ?? '').toString();
        this.queryChange.emit(this.query);
    };
    onToggleAll = (event) => {
        const checked = event.target?.checked;
        const filtered = this.filteredOptions;
        const selectedSet = new Set(this.selected);
        if (checked) {
            filtered.forEach(value => selectedSet.add(value));
        }
        else {
            filtered.forEach(value => selectedSet.delete(value));
        }
        this.selected = Array.from(selectedSet);
        this.emitSelectionChange();
    };
    onToggleOption = (event, option) => {
        const checked = event.target?.checked;
        if (checked) {
            if (!this.selected.includes(option)) {
                this.selected = [...this.selected, option];
            }
        }
        else {
            this.selected = this.selected.filter(value => value !== option);
        }
        this.emitSelectionChange();
    };
    render() {
        const filteredOptions = this.filteredOptions;
        return (h(Host, { key: '3cc6b9b62f5dde56b9a5011aeae0e098d3b90df7' }, h("wa-popover", { key: '820e5d09133d8ae1d5aa1caf8445e04736714202', placement: "bottom", for: this.generatedTriggerId, class: "column-autocomplete__popover" }, h("div", { key: 'ba81cdf949d992d56c74a864389cb6a03266d69c', class: "column-autocomplete__input-container" }, h("wa-input", { key: '21a5d96c9db9be66d9e31866ec2a2d4406f229a8', size: "s", value: this.query, placeholder: this.placeholder || t('Lcz_SearchEllipsis', { fallback: 'Search...' }), oninput: this.onQueryInput })), h("div", { key: '59e00b6a6bb9d05e1cda107bc2a74266d043eeca', class: "column-autocomplete__list" }, this.showSelectAll && (h("wa-checkbox", { key: '1bb2ef06739226bfe87141194ee358d52ac6df94', checked: this.areAllFilteredSelected, indeterminate: this.areSomeFilteredSelected, onchange: this.onToggleAll }, this.selectAllLabel || t('Lcz_SelectAll', { fallback: 'Select all' }))), filteredOptions.length > 0 ? (filteredOptions.map(option => (h("wa-checkbox", { checked: this.selected.includes(option), onchange: event => this.onToggleOption(event, option) }, option)))) : (h("div", { class: "column-autocomplete__empty" }, this.emptyLabel || t('Lcz_NoResultsFound', { fallback: 'No results found' }))))), h("div", { key: 'cad8a75076acce1aa8f6c837e0d41410b1618e8c', id: this.generatedTriggerId }, h("slot", { key: '48a4e57a8e31559f4005deb6def62ed64e38ccc9', name: "trigger" }, h("wa-button", { key: '2d3682ef2db3ae84885b9f4a9e59a9e0af8ae4cf', size: "s", variant: "neutral", appearance: "plain", class: "header-button" }, h("wa-icon", { key: 'a326dd67016f0598aff592ae8d1c35e9476367d3', name: "filter" }))))));
    }
    static get is() { return "ir-column-autocomplete"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-column-autocomplete.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-column-autocomplete.css"]
        };
    }
    static get properties() {
        return {
            "options": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
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
                "defaultValue": "[]"
            },
            "selectedValues": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
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
                "defaultValue": "[]"
            },
            "placeholder": {
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
                "reflect": false,
                "attribute": "placeholder"
            },
            "selectAllLabel": {
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
                "reflect": false,
                "attribute": "select-all-label"
            },
            "emptyLabel": {
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
                "reflect": false,
                "attribute": "empty-label"
            },
            "showSelectAll": {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-select-all",
                "defaultValue": "true"
            },
            "triggerId": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "trigger-id"
            }
        };
    }
    static get states() {
        return {
            "query": {},
            "normalizedOptions": {},
            "selected": {}
        };
    }
    static get events() {
        return [{
                "method": "queryChange",
                "name": "queryChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "autocompleteSelectionChange",
                "name": "autocompleteSelectionChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "ColumnAutocompleteSelectionChange",
                    "resolved": "ColumnAutocompleteSelectionChange",
                    "references": {
                        "ColumnAutocompleteSelectionChange": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ir-table/ir-column-autocomplete/ir-column-autocomplete.tsx",
                            "id": "src/components/ir-table/ir-column-autocomplete/ir-column-autocomplete.tsx::ColumnAutocompleteSelectionChange"
                        }
                    }
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "options",
                "methodName": "handleOptionsChange"
            }, {
                "propName": "selectedValues",
                "methodName": "handleSelectedValuesChange"
            }];
    }
}
