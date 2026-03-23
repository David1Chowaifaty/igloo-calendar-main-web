'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');

const irColumnAutocompleteCss = ".sc-ir-column-autocomplete-h{display:block}.column-autocomplete__list.sc-ir-column-autocomplete{display:flex;flex-direction:column;gap:0.5rem;margin-top:0.5rem;max-height:16rem;overflow:auto}.column-autocomplete__empty.sc-ir-column-autocomplete{color:var(--wa-color-text-quiet);font-size:var(--wa-font-size-s)}.column-autocomplete__list.sc-ir-column-autocomplete,.column-autocomplete__input-container.sc-ir-column-autocomplete{padding:1rem}.column-autocomplete__input-container.sc-ir-column-autocomplete{padding-bottom:0}.column-autocomplete__popover.sc-ir-column-autocomplete::part(body){padding:0}";
const IrColumnAutocompleteStyle0 = irColumnAutocompleteCss;

const IrColumnAutocomplete = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.queryChange = index.createEvent(this, "queryChange", 7);
        this.autocompleteSelectionChange = index.createEvent(this, "autocompleteSelectionChange", 7);
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
        return (index.h(index.Host, { key: '25e6e6f7fd9d134f51b2b12e3804fe45cc9ee6a7' }, index.h("wa-popover", { key: '890633eae00fb2da4380d832dd203ab213a2a9be', placement: "bottom", for: this.generatedTriggerId, class: "column-autocomplete__popover" }, index.h("div", { key: 'e3ee8cbfffade874b712ad8895ae402bd71492c9', class: "column-autocomplete__input-container" }, index.h("wa-input", { key: '42b25f0a86f7663b6f3da74ecc31a0c0d3bfaad7', size: "small", value: this.query, placeholder: this.placeholder, oninput: this.onQueryInput })), index.h("div", { key: '860789d3fdb7d5094ba0d589b56250e5cf766f65', class: "column-autocomplete__list" }, this.showSelectAll && (index.h("wa-checkbox", { key: '16ea8d932dc6bc7ca5aa39755cac65b705bd79ad', checked: this.areAllFilteredSelected, indeterminate: this.areSomeFilteredSelected, onchange: this.onToggleAll }, this.selectAllLabel)), filteredOptions.length > 0 ? (filteredOptions.map(option => (index.h("wa-checkbox", { checked: this.selected.includes(option), onchange: event => this.onToggleOption(event, option) }, option)))) : (index.h("div", { class: "column-autocomplete__empty" }, this.emptyLabel)))), index.h("div", { key: '57e71f9d8eb45ca00900e9894dcc438f93af7d7d', id: this.generatedTriggerId }, index.h("slot", { key: 'e0e0447113546e0ec3cac76aecd5837d1f3e68d1', name: "trigger" }, index.h("wa-button", { key: 'b1a46c326d4c7266b0e41f563763d97f2dc20002', size: "small", variant: "neutral", appearance: "plain", class: "header-button" }, index.h("wa-icon", { key: 'e005f82986e426754328d7d99d5b16d1d4a2e60d', name: "filter" }))))));
    }
    static get watchers() { return {
        "options": ["handleOptionsChange"],
        "selectedValues": ["handleSelectedValuesChange"]
    }; }
};
IrColumnAutocomplete.style = IrColumnAutocompleteStyle0;

exports.ir_column_autocomplete = IrColumnAutocomplete;

//# sourceMappingURL=ir-column-autocomplete.cjs.entry.js.map