'use strict';

var index = require('./index-DYQrLNin.js');
var v4 = require('./v4-_2BfiRUa.js');
var moment = require('./moment-CdViwxPQ.js');
var locales_store = require('./locales.store-6IlEbCjL.js');
var utils = require('./utils-DgT4kKsD.js');
require('./index-C59pxKl1.js');
require('./index-CLqkDPTC.js');
require('./calendar-data-R3j-WBLW.js');
require('./type-Dy9pVS4V.js');

const irMComboboxCss = () => `.sc-ir-m-combobox-h{position:relative;display:block}.input-wrapper.sc-ir-m-combobox{position:relative;width:100%}.prefix-container.sc-ir-m-combobox,.suffix-container.sc-ir-m-combobox{position:absolute;top:0;bottom:0;display:inline-flex;align-items:center;color:var(--ir-combobox-affix-color, #6c757d);pointer-events:none}.dropdown-item.sc-ir-m-combobox{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.prefix-container.sc-ir-m-combobox{left:0.5rem}.suffix-container.sc-ir-m-combobox{right:0.5rem}.sc-ir-m-combobox-s>[slot='prefix'],.sc-ir-m-combobox-s>[slot='suffix']{display:inline-flex;width:var(--ir-combobox-affix-size, 1rem);height:var(--ir-combobox-affix-size, 1rem)}.has-prefix.sc-ir-m-combobox-h input.form-control.sc-ir-m-combobox{padding-left:calc(0.75rem + var(--ir-combobox-affix-size, 1rem))}.has-suffix.sc-ir-m-combobox-h input.form-control.sc-ir-m-combobox{padding-right:calc(0.75rem + var(--ir-combobox-affix-size, 1rem))}.dropdown.sc-ir-m-combobox{position:absolute;top:100%;left:0;z-index:1000;width:100%}.dropdown-menu.sc-ir-m-combobox{max-height:var(--ir-combobox-height, 200px);overflow-y:auto;min-width:100%;width:var(--ir-combobox-width, 100%) !important;scroll-behavior:smooth}.dropdown-item.loading.sc-ir-m-combobox,.dropdown-item.no-results.sc-ir-m-combobox{color:#6c757d;cursor:default;pointer-events:none}.dropdown-item.sc-ir-m-combobox{padding:0.5rem 1rem !important}.dropdown-item.active.sc-ir-m-combobox,.dropdown-item.sc-ir-m-combobox:active,.dropdown-item.focused.sc-ir-m-combobox{background-color:var(--blue, #1e9ff2) !important;color:white !important}[slot='dropdown-content'].sc-ir-m-combobox .dropdown-item.focused.sc-ir-m-combobox,[slot='dropdown-content'].sc-ir-m-combobox .dropdown-item.active.sc-ir-m-combobox{background-color:#1e9ff2 !important;color:white !important}[slot='dropdown-content'].sc-ir-m-combobox [data-option].focused.sc-ir-m-combobox,[slot='dropdown-content'].sc-ir-m-combobox [data-option].active.sc-ir-m-combobox{background-color:#1e9ff2 !important;color:white !important}`;

const IrMCombobox = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.optionChange = index.createEvent(this, "optionChange");
        this.searchQuery = index.createEvent(this, "searchQuery");
    }
    get el() { return index.getElement(this); }
    /**
     * Placeholder text displayed in the input when no option is selected.
     */
    placeholder;
    /**
     * default selected option for the combobox.
     */
    defaultOption;
    /**
     * Determines how the options are loaded into the component.
     * - 'static': Uses the options passed through the `options` prop or the default internal list.
     * - 'external': Emits search events for external handling, options updated via `options` prop.
     *
     * @default 'static'
     */
    dataMode = 'static';
    /**
     * List of available options for the combobox when using static data mode.
     * If empty, falls back to a default internal option list.
     */
    options = [];
    /**
     * Debounce delay in milliseconds for search events when using external data mode.
     * @default 300
     */
    debounceDelay = 300;
    /**
     * Whether to show loading state
     */
    loading = false;
    /**
     * Whether to use slot content for custom dropdown rendering
     */
    useSlot = false;
    isOpen = false;
    selectedOption;
    focusedIndex = -1;
    filteredOptions = [];
    slotElements = [];
    hasPrefix = false;
    hasSuffix = false;
    itemChildren = [];
    /**
     * Emitted when a user selects an option from the combobox.
     * The event payload contains the selected `ComboboxOption` object.
     */
    optionChange;
    /**
     * Emitted when the user types in the input field (debounced).
     * Used for external data fetching in 'external' data mode.
     */
    searchQuery;
    /**
     * Public method to select an option from external slot content
     */
    async selectOptionFromSlot(option) {
        this.selectOption(option);
    }
    inputRef;
    dropdownRef;
    id = v4.v4();
    dropdownId = `dropdown-${this.id}`;
    debounceTimeout;
    prefixSlotRef;
    suffixSlotRef;
    mo = null;
    get isCompositionMode() {
        return this.itemChildren.length > 0;
    }
    watchOptionsChanged(newOptions) {
        this.filteredOptions = newOptions || [];
        if (this.useSlot) {
            this.updateSlotElements();
        }
    }
    watchDefaultValueChanged(newOption) {
        if (newOption !== this.selectedOption.value) {
            this.applyDefaultOption();
        }
    }
    watchUseSlotChanged() {
        if (this.useSlot) {
            setTimeout(() => this.updateSlotElements(), 0);
        }
    }
    componentWillLoad() {
        this.initializeOptions();
        // discover items on first paint
        this.collectItemChildren();
        // watch DOM changes to children
        this.mo = new MutationObserver(() => this.collectItemChildren());
        this.mo.observe(this.el, { childList: true, subtree: true });
    }
    componentDidLoad() {
        document.addEventListener('click', this.handleDocumentClick.bind(this));
        // existing stuff
        if (this.useSlot) {
            setTimeout(() => this.updateSlotElements(), 0);
        }
        setTimeout(() => this.updateAffixPresence(), 0);
        setTimeout(() => {
            this.applyDefaultOption();
        }, 0);
        this.prefixSlotRef?.addEventListener('slotchange', this.updateAffixPresence);
        this.suffixSlotRef?.addEventListener('slotchange', this.updateAffixPresence);
    }
    disconnectedCallback() {
        document.removeEventListener('click', this.handleDocumentClick.bind(this));
        if (this.debounceTimeout)
            clearTimeout(this.debounceTimeout);
        this.prefixSlotRef?.removeEventListener('slotchange', this.updateAffixPresence);
        this.suffixSlotRef?.removeEventListener('slotchange', this.updateAffixPresence);
        this.mo?.disconnect();
    }
    handleDocumentKeyDown(event) {
        if (!this.isOpen)
            return;
        if (event.key === 'Escape') {
            this.closeDropdown();
            this.inputRef?.focus();
        }
    }
    handleComboboxItemSelect(ev) {
        ev.stopPropagation();
        console.log(ev.detail);
        this.selectOption(ev.detail);
    }
    handleComboboxItemRegister() {
        this.collectItemChildren();
    }
    handleComboboxItemUnregister() {
        this.collectItemChildren();
    }
    applyDefaultOption() {
        if (!this.defaultOption || !Array.isArray(this.options))
            return;
        const opt = this.options.find(o => o.value === this.defaultOption);
        if (opt)
            this.selectedOption = { ...opt };
    }
    initializeOptions() {
        this.filteredOptions = this.options.length > 0 ? this.options : [];
    }
    handleDocumentClick = (event) => {
        if (!this.el.contains(event.target)) {
            this.closeDropdown();
        }
    };
    // private openDropdown() {
    //   this.isOpen = true;
    //   if (this.useSlot) {
    //     this.focusedIndex = -1;
    //     setTimeout(() => this.updateSlotElements(), 0);
    //   } else {
    //     this.focusedIndex = this.selectedOption ? this.filteredOptions.findIndex(v => v.value === this.selectedOption.value) : -1;
    //   }
    // }
    openDropdown() {
        this.isOpen = true;
        if (this.isCompositionMode || this.useSlot) {
            this.focusedIndex = -1;
            setTimeout(() => (this.isCompositionMode ? this.updateSlotElementsForItems() : this.updateSlotElements()), 0);
        }
        else {
            this.focusedIndex = this.selectedOption ? this.filteredOptions.findIndex(v => v.value === this.selectedOption.value) : -1;
        }
    }
    emitSearchQuery(query) {
        if (this.debounceTimeout) {
            clearTimeout(this.debounceTimeout);
        }
        this.debounceTimeout = setTimeout(() => {
            this.searchQuery.emit(query);
        }, this.debounceDelay);
    }
    closeDropdown() {
        this.isOpen = false;
        this.focusedIndex = -1;
        this.removeSlotFocus();
    }
    updateSlotElements() {
        if (!this.useSlot || !this.dropdownRef)
            return;
        const slotElement = this.dropdownRef.querySelector('slot[name="dropdown-content"]');
        if (slotElement) {
            const assignedElements = slotElement.assignedElements
                ? slotElement.assignedElements()
                : Array.from(this.el.querySelectorAll('[slot="dropdown-content"] [data-option]'));
            this.slotElements = assignedElements.length > 0 ? assignedElements : Array.from(this.dropdownRef.querySelectorAll('[data-option], .dropdown-item[style*="cursor"]'));
            this.slotElements.forEach((element, index) => {
                element.setAttribute('data-slot-index', index.toString());
                element.setAttribute('role', 'option');
                element.setAttribute('tabindex', '-1');
            });
        }
    }
    updateAffixPresence = () => {
        try {
            const prefixAssigned = this.prefixSlotRef && this.prefixSlotRef.assignedElements
                ? this.prefixSlotRef.assignedElements()
                : Array.from(this.el.querySelectorAll('[slot="prefix"]'));
            const suffixAssigned = this.suffixSlotRef && this.suffixSlotRef.assignedElements
                ? this.suffixSlotRef.assignedElements()
                : Array.from(this.el.querySelectorAll('[slot="suffix"]'));
            this.hasPrefix = Array.isArray(prefixAssigned) ? prefixAssigned.length > 0 : false;
            this.hasSuffix = Array.isArray(suffixAssigned) ? suffixAssigned.length > 0 : false;
        }
        catch (e) {
            const prefixFallback = this.el.querySelector('[slot="prefix"]');
            const suffixFallback = this.el.querySelector('[slot="suffix"]');
            this.hasPrefix = !!prefixFallback;
            this.hasSuffix = !!suffixFallback;
        }
    };
    removeSlotFocus() {
        this.slotElements.forEach(element => {
            element.classList.remove('focused', 'active');
            element.removeAttribute('aria-selected');
        });
    }
    focusSlotElement(index) {
        this.removeSlotFocus();
        if (index >= 0 && index < this.slotElements.length) {
            const element = this.slotElements[index];
            element.classList.add('focused', 'active');
            element.setAttribute('aria-selected', 'true');
            element.scrollIntoView({ block: 'nearest' });
        }
    }
    selectSlotElement(index) {
        if (index >= 0 && index < this.slotElements.length) {
            const element = this.slotElements[index];
            element.click();
        }
    }
    handleKeyDown = (event) => {
        const maxIndex = this.useSlot ? this.slotElements.length - 1 : this.filteredOptions.length - 1;
        switch (event.key) {
            case 'ArrowDown':
                event.preventDefault();
                if (!this.isOpen) {
                    this.openDropdown();
                }
                else {
                    this.focusedIndex = Math.min(this.focusedIndex + 1, maxIndex);
                    if (this.useSlot) {
                        this.focusSlotElement(this.focusedIndex);
                    }
                    else {
                        this.scrollToFocusedOption();
                    }
                }
                break;
            case 'ArrowUp':
                event.preventDefault();
                if (this.isOpen) {
                    this.focusedIndex = Math.max(this.focusedIndex - 1, 0);
                    if (this.useSlot) {
                        this.focusSlotElement(this.focusedIndex);
                    }
                    else {
                        this.scrollToFocusedOption();
                    }
                }
                break;
            case 'Enter':
                event.preventDefault();
                if (this.isOpen && this.focusedIndex >= 0) {
                    if (this.useSlot) {
                        this.selectSlotElement(this.focusedIndex);
                    }
                    else {
                        this.selectOption(this.filteredOptions[this.focusedIndex]);
                    }
                }
                else if (!this.isOpen) {
                    this.openDropdown();
                }
                break;
            case 'Escape':
                event.preventDefault();
                this.closeDropdown();
                break;
            case 'Tab':
                if (this.isOpen) {
                    this.closeDropdown();
                }
                break;
        }
    };
    selectOption(option) {
        this.selectedOption = option;
        this.optionChange.emit(option);
        this.closeDropdown();
        this.inputRef?.focus();
    }
    scrollToFocusedOption() {
        if (this.focusedIndex < 0 || !this.dropdownRef || this.useSlot)
            return;
        const focusedElement = this.dropdownRef.querySelector(`#${this.dropdownId}-option-${this.focusedIndex}`);
        if (focusedElement) {
            focusedElement.scrollIntoView({ block: 'nearest' });
        }
    }
    // private handleInput = (event: Event) => {
    //   const target = event.target as HTMLInputElement;
    //   const value = target.value;
    //   if (this.dataMode === 'external') {
    //     this.emitSearchQuery(value);
    //   } else {
    //     const allOptions = this.options.length > 0 ? this.options : [];
    //     this.filteredOptions = value ? allOptions.filter(option => option.label.toLowerCase().includes(value.toLowerCase())) : allOptions;
    //   }
    //   this.focusedIndex = -1;
    //   if (!this.isOpen) {
    //     this.openDropdown();
    //   }
    // };
    handleInput = (event) => {
        const target = event.target;
        const value = target.value;
        if (this.dataMode === 'external' && !this.isCompositionMode) {
            this.emitSearchQuery(value);
        }
        else if (this.isCompositionMode) {
            // composition mode: filter child items
            this.filterComposition(value);
        }
        else {
            // static options mode (existing behavior)
            const allOptions = this.options.length > 0 ? this.options : [];
            this.filteredOptions = value ? allOptions.filter(option => option.label.toLowerCase().includes(value.toLowerCase())) : allOptions;
        }
        this.focusedIndex = -1;
        if (!this.isOpen) {
            this.openDropdown();
        }
    };
    collectItemChildren() {
        // find *direct or nested* items inside the dropdown container
        const items = Array.from(this.el.querySelectorAll('ir-m-combobox-item'));
        this.itemChildren = items;
        console.log(items);
        // when in composition mode, use slot-like navigation on the items
        if (this.isCompositionMode) {
            this.useSlot = true; // leverage your existing slot-based keyboard handling
            setTimeout(() => this.updateSlotElementsForItems(), 0);
        }
    }
    updateSlotElementsForItems() {
        // Treat the child items as "slot elements" for nav
        this.slotElements = this.itemChildren;
        // index and decorate for ARIA & focus handling
        this.slotElements.forEach((el, index) => {
            el.setAttribute('data-slot-index', String(index));
            el.setAttribute('role', 'option');
            el.setAttribute('tabindex', '-1');
        });
    }
    async filterComposition(query) {
        // Hide/show each child according to its own matching logic
        const results = await Promise.all(this.itemChildren.map(item => item.matchesQuery(query)));
        await Promise.all(this.itemChildren.map((item, i) => item.setHidden(query ? !results[i] : false)));
        // refresh slotElements (only visible items should be navigable)
        this.updateSlotElementsForItems();
    }
    render() {
        return (index.h(index.Host, { key: 'ba70ab7fe4730cdb6b3e023d967860b10a2c3d0a', class: { 'has-prefix': this.hasPrefix, 'has-suffix': this.hasSuffix } }, index.h("div", { key: '2e7b0092c9ca7cb8577e9a3f61eec7e66af0db5c', class: "input-wrapper" }, index.h("span", { key: 'e902358139c97d7055ad94e70c5a2f22bffc8a8e', class: "prefix-container", "aria-hidden": !this.hasPrefix }, index.h("slot", { key: 'adf25c0c089fe8b58130f55ea28011e3b4bf5260', name: "prefix", ref: el => (this.prefixSlotRef = el) })), index.h("input", { key: '73cc39f992a82d1c761f8f8a6bc4ae9176b6ecbc', ref: el => (this.inputRef = el), type: "text", class: "form-control", role: "combobox", id: this.id, value: this.selectedOption?.label || '', placeholder: this.placeholder, "aria-expanded": String(this.isOpen), "aria-autocomplete": "list", "aria-controls": this.dropdownId, "data-reference": "parent", "aria-haspopup": "listbox", "aria-activedescendant": this.focusedIndex >= 0 ? `${this.dropdownId}-option-${this.focusedIndex}` : null, "aria-label": "Combobox", "aria-required": true, onKeyDown: this.handleKeyDown, onInput: this.handleInput }), index.h("span", { key: '1fc248ce53f5dc04e499e4d4de7e32587b623cff', class: "suffix-container", "aria-hidden": !this.hasSuffix }, index.h("slot", { key: 'cc73517678cf2ee1fc4671965ae8469448aa73e1', name: "suffix", ref: el => (this.suffixSlotRef = el) }))), index.h("div", { key: 'f92d49db46909936eb414b22125b7f2501f28206', class: `dropdown ${this.isOpen ? 'show' : ''}` }, index.h("div", { key: '9176951c19b6c052b08e8103edb68b47edad4ec4', ref: el => (this.dropdownRef = el), class: `dropdown-menu ${this.isOpen ? 'show' : ''}`, id: this.dropdownId, role: "listbox", "aria-expanded": String(this.isOpen) }, this.isCompositionMode ? (index.h("slot", null)) : this.useSlot ? (index.h("slot", { name: "dropdown-content" })) : ([
            this.loading && index.h("div", { class: "dropdown-item loading" }, "Loading..."),
            !this.loading && this.filteredOptions.length === 0 && index.h("div", { class: "dropdown-item no-results" }, "No results found"),
            !this.loading &&
                this.filteredOptions.map((option, index$1) => (index.h("button", { id: `${this.dropdownId}-option-${index$1}`, class: `dropdown-item ${this.focusedIndex === index$1 ? 'active' : ''}`, role: "option", "aria-selected": this.selectedOption?.value === option.value ? 'true' : 'false', onClick: () => this.selectOption(option), onMouseEnter: () => (this.focusedIndex = index$1), innerHTML: option.html_content }, option.html_content ? null : option.label))),
        ])))));
    }
    static get watchers() { return {
        "options": [{
                "watchOptionsChanged": 0
            }],
        "defaultOption": [{
                "watchDefaultValueChanged": 0
            }],
        "useSlot": [{
                "watchUseSlotChanged": 0
            }]
    }; }
};
IrMCombobox.style = irMComboboxCss();

const irSalesByChannelFiltersCss = () => `.sc-ir-sales-by-channel-filters-h{display:block}.or-divider.sc-ir-sales-by-channel-filters{display:flex;align-items:center;gap:0.5rem}.or-divider__line.sc-ir-sales-by-channel-filters{flex:1;height:1px;background-color:var(--wa-color-surface-border, #dee2e6)}.or-divider__text.sc-ir-sales-by-channel-filters{font-size:var(--wa-font-size-xs, 0.75rem);color:var(--wa-color-text-quiet, #6c757d);white-space:nowrap;text-transform:uppercase;letter-spacing:0.05em}`;

const IrSalesByChannelFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.applyFilters = index.createEvent(this, "applyFilters");
    }
    isLoading;
    baseFilters;
    allowedProperties;
    filters;
    window;
    applyFilters;
    componentWillLoad() {
        this.filters = { ...this.baseFilters };
        this.window = this.baseFilters.WINDOW.toString();
    }
    updateFilter(params) {
        this.filters = { ...this.filters, ...params };
    }
    applyFiltersEvt(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.applyFilters.emit(this.filters);
    }
    resetFilters(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.filters = { ...this.baseFilters };
        this.window = this.baseFilters.WINDOW.toString();
        this.applyFilters.emit(this.filters);
    }
    quickDates = [
        {
            label: '7 Days Ago',
            getDate: () => moment.hooks().subtract(7, 'days'),
        },
        {
            label: '14 Days Ago',
            getDate: () => moment.hooks().subtract(14, 'days'),
        },
        {
            label: '30 Days Ago',
            getDate: () => moment.hooks().subtract(30, 'days'),
        },
        {
            label: '60 Days Ago',
            getDate: () => moment.hooks().subtract(60, 'days'),
        },
        {
            label: '90 Days Ago',
            getDate: () => moment.hooks().subtract(90, 'days'),
        },
        {
            label: '1 Year Ago',
            getDate: () => moment.hooks().subtract(365, 'days'),
        },
    ];
    render() {
        return (index.h("ir-filter-card", { key: '149b2b564a166a26d9c31888f7cfed54f8fd83fc' }, index.h("wa-radio-group", { key: 'b9ad28646e4cba38768f570abc7248b245b08259', label: "Rooms", orientation: "horizontal", size: "s", style: { width: '100%' }, value: this.filters?.BOOK_CASE, onchange: (e) => {
                this.updateFilter({ BOOK_CASE: e.target.value });
            } }, index.h("wa-radio", { key: 'e4cf9b1e72c352e1079fd7a89233d5e51daf1770', style: { flex: '1 1 0%' }, appearance: "button", value: "001" }, "Booked"), index.h("wa-radio", { key: '86822a154eb8dfb28a819429b491415fd047ea8b', style: { flex: '1 1 0%' }, appearance: "button", value: "002" }, "Stayed")), this.allowedProperties.length > 1 && (index.h("ir-m-combobox", { key: '0e317856b2a459aa6b3a59aa36ed33ada4e68c1f', defaultOption: this.filters?.LIST_AC_ID?.length === this.allowedProperties?.length ? 'all' : this.filters?.LIST_AC_ID[0]?.toString(), onOptionChange: e => {
                const value = e.detail.value;
                if (value === 'all') {
                    this.updateFilter({ LIST_AC_ID: this.allowedProperties.map(p => p.id) });
                }
                else {
                    this.updateFilter({ LIST_AC_ID: this.allowedProperties.filter(p => p.id === Number(value)).map(p => p.id) });
                }
            }, options: [
                { label: 'All', value: 'all' },
                ...this.allowedProperties.map(p => ({
                    label: p.name,
                    value: p.id.toString(),
                })),
            ] })), index.h("wa-select", { key: '3c5187af03ec2c7c71946f07bcde99ee4f8c6129', label: "Selected period", size: "s", value: this.window, defaultValue: this.window, onchange: (e) => {
                const val = e.target.value;
                const dateDiff = Number(val);
                this.updateFilter({
                    WINDOW: dateDiff,
                    TO_DATE: moment.hooks().format('YYYY-MM-DD'),
                    FROM_DATE: moment.hooks().subtract(dateDiff, 'days').format('YYYY-MM-DD'),
                });
                this.window = val;
            } }, index.h("wa-option", { key: 'b78d6f9fa2c888700ed60ddfc88577defef498c7', value: "7" }, "For the past 7 days"), index.h("wa-option", { key: '4a299c90bb68544c91a9c041254b3051d87da255', value: "14" }, "For the past 14 days"), index.h("wa-option", { key: 'b8db4693124f5d1403fc3fe598bfb96c55681fe1', value: "30" }, "For the past 30 days"), index.h("wa-option", { key: '70770d90900e8c07fb95f4ace745d6117fde3136', value: "60" }, "For the past 60 days"), index.h("wa-option", { key: '5f7d1ea02bc8c6bac7f37f7e5797841829512994', value: "90" }, "For the past 90 days"), index.h("wa-option", { key: '041c74167e65ec69cf4cec383b4be3da10eee555', value: "365" }, "For the past 365 days")), index.h("div", { key: '552e60ced5f65932b7271e750a11d465e06921c8', class: "or-divider" }, index.h("span", { key: '4dfcb45ec3ef5a1a653dd69e3fcf29e0b2511208', class: "or-divider__line" }), index.h("span", { key: '2ac1766c1eebc133931223252816515204c93aa5', class: "or-divider__text" }, "Or"), index.h("span", { key: '1fc809ce1650f8e6702ae7cd549f298421cafee0', class: "or-divider__line" })), index.h("ir-date-range-filter", { key: 'fc01491362d78ecd5dc554fcccf66ce40168a1fc', label: 'Date range', fromDate: this.filters?.FROM_DATE, toDate: this.filters?.TO_DATE, maxDate: moment.hooks().format('YYYY-MM-DD'), selectionMode: "auto", quickDates: this.quickDates, withClear: false, onDatesChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { from, to } = e.detail;
                this.updateFilter({ FROM_DATE: from, TO_DATE: to });
                this.window = '';
            } }), index.h("wa-checkbox", { key: '2b9adb5d165bdb41a1d9d4ded7ed0381400b499f', checked: this.filters?.include_previous_year, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.target.checked });
            } }, "Compare with previous year"), index.h("div", { key: '30cbd3c97db1be1543922eeb9e7e4d087be617db', slot: "footer" }, index.h("ir-custom-button", { key: '4a76a48e4ad2096e92a67dc4cd4da827a9b66e80', variant: "neutral", appearance: "outlined", onClickHandler: e => this.resetFilters(e) }, locales_store.locales.entries?.Lcz_Reset ?? 'Reset'), index.h("ir-custom-button", { key: 'd7e71babd19e11e6583e73f6e7ee9788db8536d0', variant: "brand", loading: this.isLoading, onClickHandler: e => this.applyFiltersEvt(e) }, locales_store.locales.entries?.Lcz_Apply ?? 'Apply'))));
    }
};
IrSalesByChannelFilters.style = irSalesByChannelFiltersCss();

const irSalesByChannelSummaryCss = () => `.sc-ir-sales-by-channel-summary-h{display:block}.summary-row.sc-ir-sales-by-channel-summary{display:flex;flex-direction:column;align-items:stretch;gap:1rem}.summary-metric.sc-ir-sales-by-channel-summary{flex:1}@media (min-width: 640px){.summary-row.sc-ir-sales-by-channel-summary{flex-direction:row}}`;

const IrSalesByChannelSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    records = [];
    filters;
    sum(field, lastYear = false) {
        return (this.records ?? []).reduce((acc, r) => {
            const val = lastYear ? (r.last_year ? r.last_year[field] : 0) : r[field];
            return acc + (val ?? 0);
        }, 0);
    }
    render() {
        const totalNights = this.sum('NIGHTS');
        const totalRevenue = this.sum('REVENUE');
        const lastYearNights = this.sum('NIGHTS', true);
        const lastYearRevenue = this.sum('REVENUE', true);
        const currency = this.records?.[0]?.currency;
        const hasLastYear = Boolean(this.records?.length && this.filters?.include_previous_year);
        return (index.h("div", { key: '8e18f44f05fcd1b9aeb8cf183145bc39b32eed32', class: "summary-row" }, index.h("ir-metric-card", { key: '0edcac3590b258a5a3c043a892da8547f34bc29d', class: "summary-metric", icon: "moon", label: "Total Room Nights", value: totalNights.toString(), trend: hasLastYear ? utils.calculateTrend(totalNights, lastYearNights) : undefined, trendLabel: "vs last year", caption: hasLastYear ? `Last year: ${lastYearNights}` : undefined }), index.h("ir-metric-card", { key: '1dabc43fa6d66ec5c5742fd2ef86d2641d788097', class: "summary-metric", icon: "money-bill", label: "Total Revenue", value: utils.formatAmount(currency, totalRevenue), trend: hasLastYear ? utils.calculateTrend(totalRevenue, lastYearRevenue) : undefined, trendLabel: "vs last year", caption: hasLastYear ? `Last year: ${utils.formatAmount(currency, lastYearRevenue)}` : undefined }), index.h("ir-metric-card", { key: 'b4b3f215ab58d931b3ae93d9bdf16de435925166', class: "summary-metric", icon: "chart-bar", label: "Sources", value: (this.records?.length ?? 0).toString() })));
    }
};
IrSalesByChannelSummary.style = irSalesByChannelSummaryCss();

const irSalesByChannelTableCss = () => `.sc-ir-sales-by-channel-table-h{display:block;width:100%}.channel-table__scroll.sc-ir-sales-by-channel-table{overflow-x:auto}.channel-table__card.sc-ir-sales-by-channel-table{min-height:50vh}.channel-table__card.sc-ir-sales-by-channel-table::part(body),.channel-table__card.sc-ir-sales-by-channel-table [part~="body"]{padding:0.5rem}.channel-table__empty-wrapper.sc-ir-sales-by-channel-table{display:flex;align-items:center;justify-content:center;min-height:300px}.cell--left.sc-ir-sales-by-channel-table{text-align:left}.cell--center.sc-ir-sales-by-channel-table{text-align:center}.cell--right.sc-ir-sales-by-channel-table{text-align:right}.cell-stack.sc-ir-sales-by-channel-table{display:flex;flex-direction:column;gap:0.25rem}.cell-stack.sc-ir-sales-by-channel-table p.sc-ir-sales-by-channel-table{margin:0;padding:0}.value--primary.sc-ir-sales-by-channel-table{font-weight:600}.value--previous.sc-ir-sales-by-channel-table{color:var(--wa-color-brand-text-normal)}.occ-row.sc-ir-sales-by-channel-table{display:flex;align-items:center;gap:0.5rem}.occ-label.sc-ir-sales-by-channel-table{width:8ch;flex-shrink:0}.occ-bar.sc-ir-sales-by-channel-table{flex:1 1 0%}.occ-bar--previous.sc-ir-sales-by-channel-table{--indicator-color:var(--wa-color-brand-fill-normal)}.sales-by-channel-table__progress-col.sc-ir-sales-by-channel-table{width:35%}.sales-by-channel-table__progress-col.single.sc-ir-sales-by-channel-table{display:none !important}@media (min-width: 768px){.sales-by-channel-table__progress-col.single.sc-ir-sales-by-channel-table{display:table-cell !important}}.legend-cell.sc-ir-sales-by-channel-table{white-space:nowrap}.legend-row.sc-ir-sales-by-channel-table{display:flex;align-items:center;justify-content:flex-end;gap:1rem;padding-top:0.5rem}.legend-item.sc-ir-sales-by-channel-table{display:flex;align-items:center;gap:0.5rem}.legend-item.sc-ir-sales-by-channel-table p.sc-ir-sales-by-channel-table{margin:0;padding:0}.legend-dot.sc-ir-sales-by-channel-table{height:12px;aspect-ratio:1;border-radius:4px}.legend-dot--current.sc-ir-sales-by-channel-table{background:var(--wa-color-brand-fill-loud)}.legend-dot--previous.sc-ir-sales-by-channel-table{background:var(--wa-color-brand-fill-normal)}.channel-table__load-more.sc-ir-sales-by-channel-table{display:flex;justify-content:center;padding:1rem}.task-row.sc-ir-sales-by-channel-table,.table.sc-ir-sales-by-channel-table th.sc-ir-sales-by-channel-table,.table.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{white-space:nowrap;max-width:max-content !important;padding:0.25rem 1rem !important}.table.sc-ir-sales-by-channel-table tfoot.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{border-bottom:0}`;

const tableCss = () => `.sc-ir-sales-by-channel-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-sales-by-channel-table{overflow-x:auto}.table--container.sc-ir-sales-by-channel-table,.data-table.sc-ir-sales-by-channel-table{height:100%}.ir-table-row.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-sales-by-channel-table tbody.sc-ir-sales-by-channel-table tr.sc-ir-sales-by-channel-table:last-child>td.sc-ir-sales-by-channel-table{border-bottom:0 !important}.table.sc-ir-sales-by-channel-table thead.sc-ir-sales-by-channel-table th.sc-ir-sales-by-channel-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-sales-by-channel-table thead.sc-ir-sales-by-channel-table th.sc-ir-sales-by-channel-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-sales-by-channel-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-sales-by-channel-table,.ir-table-row.sc-ir-sales-by-channel-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-by-channel-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-sales-by-channel-table thead.sc-ir-sales-by-channel-table th.sortable.sc-ir-sales-by-channel-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-sales-by-channel-table thead.sc-ir-sales-by-channel-table th.sortable.sc-ir-sales-by-channel-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-sales-by-channel-table thead.sc-ir-sales-by-channel-table th.sortable.sc-ir-sales-by-channel-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-sales-by-channel-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-sales-by-channel-table svg.sc-ir-sales-by-channel-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-sales-by-channel-table:hover td.sc-ir-sales-by-channel-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-sales-by-channel-table:hover td.sc-ir-sales-by-channel-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-sales-by-channel-table:active td.sc-ir-sales-by-channel-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-sales-by-channel-table:hover td.sc-ir-sales-by-channel-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-sales-by-channel-table:active td.sc-ir-sales-by-channel-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-sales-by-channel-table .empty-row.sc-ir-sales-by-channel-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-sales-by-channel-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-sales-by-channel-table{position:sticky !important;right:0;background-color:white}`;

const IrSalesByChannelTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    records;
    allowedProperties;
    mode;
    visibleCount = 10;
    properties = new Map();
    componentWillLoad() {
        this.setupProperties();
    }
    handlePropertiesChange() {
        this.setupProperties();
    }
    setupProperties() {
        const map = new Map();
        for (const property of this.allowedProperties) {
            map.set(property.id, property.name);
        }
        this.properties = new Map(map);
    }
    handleLoadMore = () => {
        this.visibleCount = Math.min(this.visibleCount + 10, this.records.length);
    };
    render() {
        const records = this.records ?? [];
        const visibleRecords = records.slice(0, this.visibleCount);
        const isSingleProperty = this.mode === 'property';
        if (records.length === 0) {
            return (index.h("wa-card", { class: "channel-table__card" }, index.h("div", { class: "channel-table__empty-wrapper" }, index.h("ir-empty-state", { message: "No sales data found." }))));
        }
        return (index.h("wa-card", { class: "channel-table__card" }, index.h("div", { class: "channel-table__scroll" }, index.h("table", { class: "table data-table", "data-testid": "hk_tasks_table" }, index.h("thead", { class: "table-header" }, index.h("tr", null, index.h("th", { class: "cell--left" }, "Source"), index.h("th", { class: "cell--center" }, "Room nights"), index.h("th", { class: "cell--right" }, "Room Revenue"), index.h("th", { class: `sales-by-channel-table__progress-col ${!isSingleProperty ? 'single' : ''}` }))), index.h("tbody", null, visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.PCT.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.PCT.toString()).toFixed(2)}%` : null;
            return (index.h("tr", { "data-testid": "record_row", class: { 'task-table-row ir-table-row': true } }, index.h("td", { class: "cell--left" }, index.h("div", { class: "cell-stack" }, index.h("p", { class: record.last_year?.SOURCE ? 'value--primary' : '' }, record.SOURCE), record.last_year?.SOURCE && index.h("p", { class: "value--previous" }, record.last_year.SOURCE))), index.h("td", { class: "cell--center" }, index.h("div", { class: "cell-stack" }, index.h("p", { class: record.last_year?.NIGHTS ? 'value--primary' : '' }, record.NIGHTS), record.last_year?.NIGHTS && index.h("p", { class: "value--previous" }, record.last_year.NIGHTS))), index.h("td", { class: "cell--right" }, index.h("div", { class: "cell-stack" }, index.h("p", { class: record.last_year?.REVENUE ? 'value--primary' : '' }, utils.formatAmount(record.currency, record.REVENUE)), record.last_year?.REVENUE && index.h("p", { class: "value--previous" }, utils.formatAmount(record.currency, record.last_year.REVENUE)))), index.h("td", { class: `sales-by-channel-table__progress-col ${!isSingleProperty ? 'single' : ''}` }, isSingleProperty && (index.h("div", { class: "cell-stack" }, index.h("div", { class: "occ-row" }, index.h("span", { class: "occ-label" }, mainPercentage), index.h("wa-progress-bar", { class: "occ-bar", value: parseFloat(record.PCT.toString()) })), record.last_year?.PCT && (index.h("div", { class: "occ-row" }, index.h("span", { class: "occ-label" }, secondaryPercentage), index.h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(record.last_year.PCT.toString()) }))))))));
        })), isSingleProperty && (index.h("tfoot", null, index.h("tr", { style: { fontSize: '12px' } }, index.h("td", { colSpan: 3 }), index.h("td", { class: "legend-cell" }, index.h("div", { class: "legend-row" }, index.h("div", { class: "legend-item" }, index.h("div", { class: "legend-dot legend-dot--current" }), index.h("p", null, "Selected period")), index.h("div", { class: "legend-item" }, index.h("div", { class: "legend-dot legend-dot--previous" }), index.h("p", null, "Previous year")))))))), this.visibleCount < records.length && (index.h("div", { class: "channel-table__load-more" }, index.h("ir-custom-button", { variant: "neutral", appearance: "outlined", size: "s", onClickHandler: this.handleLoadMore }, "Load More"))))));
    }
    static get watchers() { return {
        "allowedProperties": [{
                "handlePropertiesChange": 0
            }]
    }; }
};
IrSalesByChannelTable.style = irSalesByChannelTableCss() + tableCss();

exports.ir_m_combobox = IrMCombobox;
exports.ir_sales_by_channel_filters = IrSalesByChannelFilters;
exports.ir_sales_by_channel_summary = IrSalesByChannelSummary;
exports.ir_sales_by_channel_table = IrSalesByChannelTable;
