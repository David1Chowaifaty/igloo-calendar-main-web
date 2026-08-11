import { r as registerInstance, c as createEvent, h, H as Host } from './index-BxxIyJIp.js';

const irColumnAutocompleteCss = () => `.sc-ir-column-autocomplete-h{display:block}.column-autocomplete__list.sc-ir-column-autocomplete{display:flex;flex-direction:column;gap:0.5rem;margin-top:0.5rem;max-height:16rem;overflow:auto}.column-autocomplete__empty.sc-ir-column-autocomplete{color:var(--wa-color-text-quiet);font-size:var(--wa-font-size-s)}.column-autocomplete__list.sc-ir-column-autocomplete,.column-autocomplete__input-container.sc-ir-column-autocomplete{padding:1rem}.column-autocomplete__input-container.sc-ir-column-autocomplete{padding-bottom:0}.column-autocomplete__popover.sc-ir-column-autocomplete::part(body),.column-autocomplete__popover.sc-ir-column-autocomplete [part~="body"]{padding:0}`;

const IrColumnAutocomplete = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.queryChange = createEvent(this, "queryChange");
        this.autocompleteSelectionChange = createEvent(this, "autocompleteSelectionChange");
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
        return (h(Host, { key: '80c5c8e3bb6e8f9652474431bf2aca9c3a3904df' }, h("wa-popover", { key: 'ae0c761d17c59a825d03c92dc214c45f8fb1da67', placement: "bottom", for: this.generatedTriggerId, class: "column-autocomplete__popover" }, h("div", { key: '99d11a9f6496ff12d5f9c5658956a781f0266253', class: "column-autocomplete__input-container" }, h("wa-input", { key: '04400489f3ae594621f4a4d42db48453ae36f71e', size: "s", value: this.query, placeholder: this.placeholder, oninput: this.onQueryInput })), h("div", { key: 'fbb7e00811e78c1580e9c59611b12281d0c6a7ed', class: "column-autocomplete__list" }, this.showSelectAll && (h("wa-checkbox", { key: 'd26462e01ab2a59ceca8a5ace2e53b559b6daca7', checked: this.areAllFilteredSelected, indeterminate: this.areSomeFilteredSelected, onchange: this.onToggleAll }, this.selectAllLabel)), filteredOptions.length > 0 ? (filteredOptions.map(option => (h("wa-checkbox", { checked: this.selected.includes(option), onchange: event => this.onToggleOption(event, option) }, option)))) : (h("div", { class: "column-autocomplete__empty" }, this.emptyLabel)))), h("div", { key: '2feb08277db6582f418be36388a1ccc516aeb4cd', id: this.generatedTriggerId }, h("slot", { key: 'e92463eb56894aadbe3b0a90b510b2d30cea4dd9', name: "trigger" }, h("wa-button", { key: '87c2b3111840dadb0c80a298a06b4f6161cdbc1c', size: "s", variant: "neutral", appearance: "plain", class: "header-button" }, h("wa-icon", { key: 'f97b2b74f1b9dc25830f39bfae738d880cbbfad1', name: "filter" }))))));
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

export { IrColumnAutocomplete as ir_column_autocomplete };
