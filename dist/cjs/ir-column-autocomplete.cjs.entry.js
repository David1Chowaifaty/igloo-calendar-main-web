'use strict';

var index = require('./index-IDeZZwEK.js');
var t = require('./t-CqJPQrfm.js');
require('./locale-scope-Cch-vf1R.js');

const irColumnAutocompleteCss = () => `.sc-ir-column-autocomplete-h{display:block}.column-autocomplete__list.sc-ir-column-autocomplete{display:flex;flex-direction:column;gap:0.5rem;margin-top:0.5rem;max-height:16rem;overflow:auto}.column-autocomplete__empty.sc-ir-column-autocomplete{color:var(--wa-color-text-quiet);font-size:var(--wa-font-size-s)}.column-autocomplete__list.sc-ir-column-autocomplete,.column-autocomplete__input-container.sc-ir-column-autocomplete{padding:1rem}.column-autocomplete__input-container.sc-ir-column-autocomplete{padding-bottom:0}.column-autocomplete__popover.sc-ir-column-autocomplete::part(body),.column-autocomplete__popover.sc-ir-column-autocomplete [part~="body"]{padding:0}`;

const IrColumnAutocomplete = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.queryChange = index.createEvent(this, "queryChange");
        this.autocompleteSelectionChange = index.createEvent(this, "autocompleteSelectionChange");
    }
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
        return (index.h(index.Host, { key: '513b8fad2d3a25c95a0a842ed8bbbc980f7ed665' }, index.h("wa-popover", { key: 'd87b9a962465d2a4c3fefc0f57f8fae214c1a3da', placement: "bottom", for: this.generatedTriggerId, class: "column-autocomplete__popover" }, index.h("div", { key: '2c2e834018a42d09794e1513eb35ebdf0ec6cab2', class: "column-autocomplete__input-container" }, index.h("wa-input", { key: '616efb72ac6a64561051251d71d8199473006eef', size: "s", value: this.query, placeholder: this.placeholder || t.t('Lcz_SearchEllipsis', { fallback: 'Search...' }), oninput: this.onQueryInput })), index.h("div", { key: '44d348684e3b428ef399a64769e6ccaf1a292574', class: "column-autocomplete__list" }, this.showSelectAll && (index.h("wa-checkbox", { key: 'f8467a4acdab961ba192dd9322c0932e854cd3f3', checked: this.areAllFilteredSelected, indeterminate: this.areSomeFilteredSelected, onchange: this.onToggleAll }, this.selectAllLabel || t.t('Lcz_SelectAll', { fallback: 'Select all' }))), filteredOptions.length > 0 ? (filteredOptions.map(option => (index.h("wa-checkbox", { checked: this.selected.includes(option), onchange: event => this.onToggleOption(event, option) }, option)))) : (index.h("div", { class: "column-autocomplete__empty" }, this.emptyLabel || t.t('Lcz_NoResultsFound', { fallback: 'No results found' }))))), index.h("div", { key: '8b88060ff194214ff85ab89fc80423a649ebe9ad', id: this.generatedTriggerId }, index.h("slot", { key: '17cae3b5e7ec7e1c2122f651e0b1e2042753f5e5', name: "trigger" }, index.h("wa-button", { key: '602ca888012b2afbf68e7f6e16e35020b36f9e40', size: "s", variant: "neutral", appearance: "plain", class: "header-button" }, index.h("wa-icon", { key: '82e486bbe3c7478575246aa719b7b7779612743d', name: "filter" }))))));
    }
    static get watchers() { return {
        "options": [{
                "handleOptionsChange": 0
            }],
        "selectedValues": [{
                "handleSelectedValuesChange": 0
            }]
    }; }
};
IrColumnAutocomplete.style = irColumnAutocompleteCss();

exports.ir_column_autocomplete = IrColumnAutocomplete;
