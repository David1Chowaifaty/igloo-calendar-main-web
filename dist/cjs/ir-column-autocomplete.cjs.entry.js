'use strict';

var index = require('./index-OzksjAXP.js');

const irColumnAutocompleteCss = () => `.sc-ir-column-autocomplete-h{display:block}.column-autocomplete__list.sc-ir-column-autocomplete{display:flex;flex-direction:column;gap:0.5rem;margin-top:0.5rem;max-height:16rem;overflow:auto}.column-autocomplete__empty.sc-ir-column-autocomplete{color:var(--wa-color-text-quiet);font-size:var(--wa-font-size-s)}.column-autocomplete__list.sc-ir-column-autocomplete,.column-autocomplete__input-container.sc-ir-column-autocomplete{padding:1rem}.column-autocomplete__input-container.sc-ir-column-autocomplete{padding-bottom:0}.column-autocomplete__popover.sc-ir-column-autocomplete::part(body),.column-autocomplete__popover.sc-ir-column-autocomplete [part~="body"]{padding:0}`;

const IrColumnAutocomplete = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.queryChange = index.createEvent(this, "queryChange");
        this.autocompleteSelectionChange = index.createEvent(this, "autocompleteSelectionChange");
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
        return (index.h(index.Host, { key: 'a27f86b69dd79402d576b82f0c8f27493c29e231' }, index.h("wa-popover", { key: 'e760ed75072092d29c29bb59cd9f1bc1bfbabcc7', placement: "bottom", for: this.generatedTriggerId, class: "column-autocomplete__popover" }, index.h("div", { key: 'e9f43974fea1191f6db31210e3bca9a2fec5f2f4', class: "column-autocomplete__input-container" }, index.h("wa-input", { key: 'b5f60e2b9c4a37b8702a33f5d94f539f835e68ff', size: "small", value: this.query, placeholder: this.placeholder, oninput: this.onQueryInput })), index.h("div", { key: '15f84764256658a77d37427748b9f94f18794d25', class: "column-autocomplete__list" }, this.showSelectAll && (index.h("wa-checkbox", { key: 'ddd29195fc54e9393cdad3e2b4172e4ec62f065b', checked: this.areAllFilteredSelected, indeterminate: this.areSomeFilteredSelected, onchange: this.onToggleAll }, this.selectAllLabel)), filteredOptions.length > 0 ? (filteredOptions.map(option => (index.h("wa-checkbox", { checked: this.selected.includes(option), onchange: event => this.onToggleOption(event, option) }, option)))) : (index.h("div", { class: "column-autocomplete__empty" }, this.emptyLabel)))), index.h("div", { key: '6388bf252e39d69f3fa23377642affad324d0b08', id: this.generatedTriggerId }, index.h("slot", { key: '60b4d5501a32fb73ec4c432d9b10cd00864f5664', name: "trigger" }, index.h("wa-button", { key: '06c6ec446b4611b12b2ed9560eedf69e607f12b6', size: "small", variant: "neutral", appearance: "plain", class: "header-button" }, index.h("wa-icon", { key: '4c23d0ee5923a5cf8541759c36b5bd13b5aa46d6', name: "filter" }))))));
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
