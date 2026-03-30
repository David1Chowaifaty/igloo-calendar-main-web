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
        return (index.h(index.Host, { key: '8eb1ac407fd82cb3750ad6f9b6ea32ac52bff831' }, index.h("wa-popover", { key: '4a2495727ba9bdabf1b217d52f4cb5ab903ec52d', placement: "bottom", for: this.generatedTriggerId, class: "column-autocomplete__popover" }, index.h("div", { key: 'a45cb9b742623c5ae5c60e85aeee3ff262638b21', class: "column-autocomplete__input-container" }, index.h("wa-input", { key: 'd8860aad6f77a6c1823cc271c64a54f15b741f31', size: "small", value: this.query, placeholder: this.placeholder, oninput: this.onQueryInput })), index.h("div", { key: 'ed526e714dd243624fe0b6ca7e655d64ed58ff15', class: "column-autocomplete__list" }, this.showSelectAll && (index.h("wa-checkbox", { key: 'd3f6248fbee2c6d70507fbe76405ed092ca11bb0', checked: this.areAllFilteredSelected, indeterminate: this.areSomeFilteredSelected, onchange: this.onToggleAll }, this.selectAllLabel)), filteredOptions.length > 0 ? (filteredOptions.map(option => (index.h("wa-checkbox", { checked: this.selected.includes(option), onchange: event => this.onToggleOption(event, option) }, option)))) : (index.h("div", { class: "column-autocomplete__empty" }, this.emptyLabel)))), index.h("div", { key: 'd6d1c4d54fb6b498e618b67c97f5058d09f2ba47', id: this.generatedTriggerId }, index.h("slot", { key: '7de42cdb231550c40d805c8f5650ca01f3f34a17', name: "trigger" }, index.h("wa-button", { key: '3d3a77292bd87432e82e01b6bccd7a55ba8a4342', size: "small", variant: "neutral", appearance: "plain", class: "header-button" }, index.h("wa-icon", { key: '9dce73da8e95a4065755eabe2d3706cc42602f60', name: "filter" }))))));
    }
    static get watchers() { return {
        "options": ["handleOptionsChange"],
        "selectedValues": ["handleSelectedValuesChange"]
    }; }
};
IrColumnAutocomplete.style = IrColumnAutocompleteStyle0;

exports.ir_column_autocomplete = IrColumnAutocomplete;

//# sourceMappingURL=ir-column-autocomplete.cjs.entry.js.map