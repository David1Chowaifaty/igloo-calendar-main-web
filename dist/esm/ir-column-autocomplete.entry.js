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
        return (h(Host, { key: '0a5e0facc460a4302eaa1d745b74745a73c12dfc' }, h("wa-popover", { key: '81fa9333f669242534dc637ee2a2478b2a50958d', placement: "bottom", for: this.generatedTriggerId, class: "column-autocomplete__popover" }, h("div", { key: 'd76cff47e6a3a9fb24d245177765519ea4f84052', class: "column-autocomplete__input-container" }, h("wa-input", { key: '47a7cf761b3232cc0a830487e381be34c72ec2c3', size: "small", value: this.query, placeholder: this.placeholder, oninput: this.onQueryInput })), h("div", { key: '685afbdd344e115189fb0382597c40fbeb1bbd12', class: "column-autocomplete__list" }, this.showSelectAll && (h("wa-checkbox", { key: 'd8646f57d8ec5ecc686d43911b1052aabc8bbdf9', checked: this.areAllFilteredSelected, indeterminate: this.areSomeFilteredSelected, onchange: this.onToggleAll }, this.selectAllLabel)), filteredOptions.length > 0 ? (filteredOptions.map(option => (h("wa-checkbox", { checked: this.selected.includes(option), onchange: event => this.onToggleOption(event, option) }, option)))) : (h("div", { class: "column-autocomplete__empty" }, this.emptyLabel)))), h("div", { key: '1cdc73236998f2b2f0f6ded6c4aa1d2a73ad3ae4', id: this.generatedTriggerId }, h("slot", { key: '8251b24b38b2bd0738d2d5070d9a14c881843bd8', name: "trigger" }, h("wa-button", { key: '2b545fc3a9e618e41f43c113f50d4a4adeae024d', size: "small", variant: "neutral", appearance: "plain", class: "header-button" }, h("wa-icon", { key: '098706798f1320e2ef7eb05884d1cfb68cbe9d3b', name: "filter" }))))));
    }
    static get watchers() { return {
        "options": ["handleOptionsChange"],
        "selectedValues": ["handleSelectedValuesChange"]
    }; }
};
IrColumnAutocomplete.style = IrColumnAutocompleteStyle0;

export { IrColumnAutocomplete as ir_column_autocomplete };

//# sourceMappingURL=ir-column-autocomplete.entry.js.map