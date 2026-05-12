import { r as registerInstance, c as createEvent, h, H as Host } from './index-7e96440e.js';

const irColumnAutocompleteCss = ".sc-ir-column-autocomplete-h{display:block}.column-autocomplete__list.sc-ir-column-autocomplete{display:flex;flex-direction:column;gap:0.5rem;margin-top:0.5rem;max-height:16rem;overflow:auto}.column-autocomplete__empty.sc-ir-column-autocomplete{color:var(--wa-color-text-quiet);font-size:var(--wa-font-size-s)}.column-autocomplete__list.sc-ir-column-autocomplete,.column-autocomplete__input-container.sc-ir-column-autocomplete{padding:1rem}.column-autocomplete__input-container.sc-ir-column-autocomplete{padding-bottom:0}.column-autocomplete__popover.sc-ir-column-autocomplete::part(body){padding:0}";
const IrColumnAutocompleteStyle0 = irColumnAutocompleteCss;

const IrColumnAutocomplete = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.queryChange = createEvent(this, "queryChange", 7);
        this.autocompleteSelectionChange = createEvent(this, "autocompleteSelectionChange", 7);
    }
    options = [];
    selectedValues = [];
    placeholder = 'Search...';
    selectAllLabel = 'Select all';
    emptyLabel = 'No results found';
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
        return (h(Host, { key: '9bf1bd264eabd07242b6625943116fa1278d5a42' }, h("wa-popover", { key: 'f341ea9af1c0484098d54f6a9fa54aec7dbe0d8c', placement: "bottom", for: this.generatedTriggerId, class: "column-autocomplete__popover" }, h("div", { key: '9805dd4ffd1e14e9069f94c5319074443ad9311b', class: "column-autocomplete__input-container" }, h("wa-input", { key: '061af130bee792f87b184cef7fb0036cb1e6bc74', size: "small", value: this.query, placeholder: this.placeholder, oninput: this.onQueryInput })), h("div", { key: '81b8c0474af23f78ee124d267cd4a5b7810f578b', class: "column-autocomplete__list" }, this.showSelectAll && (h("wa-checkbox", { key: '3bdebade7b823e50162cd5690303c1b69fbda06c', checked: this.areAllFilteredSelected, indeterminate: this.areSomeFilteredSelected, onchange: this.onToggleAll }, this.selectAllLabel)), filteredOptions.length > 0 ? (filteredOptions.map(option => (h("wa-checkbox", { checked: this.selected.includes(option), onchange: event => this.onToggleOption(event, option) }, option)))) : (h("div", { class: "column-autocomplete__empty" }, this.emptyLabel)))), h("div", { key: '2253499bd6fd953feba0cc8f29ca6451f4dcd6b5', id: this.generatedTriggerId }, h("slot", { key: 'f663b80d4c115b054f743b54b56d46792e24aabe', name: "trigger" }, h("wa-button", { key: '495f1eb1dddf66c0118b876942c71e2024e8e7b6', size: "small", variant: "neutral", appearance: "plain", class: "header-button" }, h("wa-icon", { key: 'a6ba6d0bd732cc0e32b6a523c59669e02531f3bb', name: "filter" }))))));
    }
    static get watchers() { return {
        "options": ["handleOptionsChange"],
        "selectedValues": ["handleSelectedValuesChange"]
    }; }
};
IrColumnAutocomplete.style = IrColumnAutocompleteStyle0;

export { IrColumnAutocomplete as ir_column_autocomplete };

//# sourceMappingURL=ir-column-autocomplete.entry.js.map