import { r as registerInstance, c as createEvent, h, H as Host } from './index-JbQjGrUG.js';

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
        return (h(Host, { key: 'c3295fb880ac18c8bdb53921478f2cb001c01258' }, h("wa-popover", { key: '31dc9ebdba76887e8334c5e495f5bfbabbf92a60', placement: "bottom", for: this.generatedTriggerId, class: "column-autocomplete__popover" }, h("div", { key: '75ebfaba66e3016842b747b653b4e032771ee588', class: "column-autocomplete__input-container" }, h("wa-input", { key: '604164d82791c0a33920c84f1cbfa15233a3d10f', size: "s", value: this.query, placeholder: this.placeholder, oninput: this.onQueryInput })), h("div", { key: '07de0636a48f82699802b80a08bff1843e4b15c7', class: "column-autocomplete__list" }, this.showSelectAll && (h("wa-checkbox", { key: 'bb24dec2a75ace7b5c426c4fff258acabe6db8f2', checked: this.areAllFilteredSelected, indeterminate: this.areSomeFilteredSelected, onchange: this.onToggleAll }, this.selectAllLabel)), filteredOptions.length > 0 ? (filteredOptions.map(option => (h("wa-checkbox", { checked: this.selected.includes(option), onchange: event => this.onToggleOption(event, option) }, option)))) : (h("div", { class: "column-autocomplete__empty" }, this.emptyLabel)))), h("div", { key: '10c7ce5acb6d88aaedf40eca8ff89d6fa3eb181c', id: this.generatedTriggerId }, h("slot", { key: '4236bb62093ba0c46322b90cb89fedfb2bd07e8d', name: "trigger" }, h("wa-button", { key: 'e71446f10a237bf2739246249fe367a6326618d4', size: "s", variant: "neutral", appearance: "plain", class: "header-button" }, h("wa-icon", { key: '7448238009e49727f5a9c8be40bf038f72e4ec76', name: "filter" }))))));
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
