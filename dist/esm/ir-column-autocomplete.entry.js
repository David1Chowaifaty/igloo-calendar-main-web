import { r as registerInstance, c as createEvent, h, H as Host } from './index-CeHdrJeH.js';
import { t } from './t-CHjay2ar.js';
import './locales.store-CXJn6ls-.js';

const irColumnAutocompleteCss = () => `.sc-ir-column-autocomplete-h{display:block}.column-autocomplete__list.sc-ir-column-autocomplete{display:flex;flex-direction:column;gap:0.5rem;margin-top:0.5rem;max-height:16rem;overflow:auto}.column-autocomplete__empty.sc-ir-column-autocomplete{color:var(--wa-color-text-quiet);font-size:var(--wa-font-size-s)}.column-autocomplete__list.sc-ir-column-autocomplete,.column-autocomplete__input-container.sc-ir-column-autocomplete{padding:1rem}.column-autocomplete__input-container.sc-ir-column-autocomplete{padding-bottom:0}.column-autocomplete__popover.sc-ir-column-autocomplete::part(body),.column-autocomplete__popover.sc-ir-column-autocomplete [part~="body"]{padding:0}`;

const IrColumnAutocomplete = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.queryChange = createEvent(this, "queryChange");
        this.autocompleteSelectionChange = createEvent(this, "autocompleteSelectionChange");
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
        return (h(Host, { key: '5c056bc5ab3b81aaf84c2d5106cd484d1b29aa0b' }, h("wa-popover", { key: 'cba461bab930144ad174d0e7ce3cfe7057098892', placement: "bottom", for: this.generatedTriggerId, class: "column-autocomplete__popover" }, h("div", { key: '0464194d0297a4ce532c5c892641f2026c9cf620', class: "column-autocomplete__input-container" }, h("wa-input", { key: 'e0709046563188db67c06448fa4ecd159ab463db', size: "s", value: this.query, placeholder: this.placeholder || t('Lcz_SearchEllipsis', { fallback: 'Search...' }), oninput: this.onQueryInput })), h("div", { key: '22fbea2fd651b6600a927315de890b9e94f6c4ec', class: "column-autocomplete__list" }, this.showSelectAll && (h("wa-checkbox", { key: '3ec150b842cee21d1c05cfca2bc2519438b73c68', checked: this.areAllFilteredSelected, indeterminate: this.areSomeFilteredSelected, onchange: this.onToggleAll }, this.selectAllLabel || t('Lcz_SelectAll', { fallback: 'Select all' }))), filteredOptions.length > 0 ? (filteredOptions.map(option => (h("wa-checkbox", { checked: this.selected.includes(option), onchange: event => this.onToggleOption(event, option) }, option)))) : (h("div", { class: "column-autocomplete__empty" }, this.emptyLabel || t('Lcz_NoResultsFound', { fallback: 'No results found' }))))), h("div", { key: '18eeb499cf565c580f488adbced67747b3a9aba6', id: this.generatedTriggerId }, h("slot", { key: 'c6ca023b639126de0f6273401b54ce5cfa0e8cf7', name: "trigger" }, h("wa-button", { key: '4b6b7898591b0877d7d6aacfcfcb4b811c76acf8', size: "s", variant: "neutral", appearance: "plain", class: "header-button" }, h("wa-icon", { key: '5f3d60c56f5e42fb88d5b38e32a393574aa42fd0', name: "filter" }))))));
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
