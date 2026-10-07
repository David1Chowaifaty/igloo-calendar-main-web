import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-CeHdrJeH.js';
import { t } from './t-BVYK64UG.js';
import { v as v4 } from './v4-CK3_k8jD.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import { b as formatCount, f as formatAmount, d as formatPercent } from './number-D2n6n8dr.js';
import { q as calculateTrend } from './utils-VLa8HWRW.js';
import './calendar-data-Cdv5kmxH.js';
import './booking.dto-D-ACWjZx.js';
import './ir-date-NNCOayR_.js';
import './locale-scope-CapRuPkM.js';
import './calendar-dates-D3hVfsrC.js';
import './types-Clk7NCXk.js';
import './type-o1ai24d7.js';
import './language-observer-CHgzsZkY.js';
import './_commonjsHelpers-BFTU3MAI.js';

const irMComboboxCss = () => `.sc-ir-m-combobox-h{position:relative;display:block}.input-wrapper.sc-ir-m-combobox{position:relative;width:100%}.prefix-container.sc-ir-m-combobox,.suffix-container.sc-ir-m-combobox{position:absolute;top:0;bottom:0;display:inline-flex;align-items:center;color:var(--ir-combobox-affix-color, #6c757d);pointer-events:none}.dropdown-item.sc-ir-m-combobox{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.prefix-container.sc-ir-m-combobox{inset-inline-start:0.5rem}.suffix-container.sc-ir-m-combobox{inset-inline-end:0.5rem}.sc-ir-m-combobox-s>[slot='prefix'],.sc-ir-m-combobox-s>[slot='suffix']{display:inline-flex;width:var(--ir-combobox-affix-size, 1rem);height:var(--ir-combobox-affix-size, 1rem)}.has-prefix.sc-ir-m-combobox-h input.form-control.sc-ir-m-combobox{padding-inline-start:calc(0.75rem + var(--ir-combobox-affix-size, 1rem))}.has-suffix.sc-ir-m-combobox-h input.form-control.sc-ir-m-combobox{padding-inline-end:calc(0.75rem + var(--ir-combobox-affix-size, 1rem))}.dropdown.sc-ir-m-combobox{position:absolute;top:100%;inset-inline-start:0;z-index:1000;width:100%}.dropdown-menu.sc-ir-m-combobox{max-height:var(--ir-combobox-height, 200px);overflow-y:auto;min-width:100%;width:var(--ir-combobox-width, 100%) !important;scroll-behavior:smooth}.dropdown-item.loading.sc-ir-m-combobox,.dropdown-item.no-results.sc-ir-m-combobox{color:#6c757d;cursor:default;pointer-events:none}.dropdown-item.sc-ir-m-combobox{padding:0.5rem 1rem !important}.dropdown-item.active.sc-ir-m-combobox,.dropdown-item.sc-ir-m-combobox:active,.dropdown-item.focused.sc-ir-m-combobox{background-color:var(--blue, #1e9ff2) !important;color:white !important}[slot='dropdown-content'].sc-ir-m-combobox .dropdown-item.focused.sc-ir-m-combobox,[slot='dropdown-content'].sc-ir-m-combobox .dropdown-item.active.sc-ir-m-combobox{background-color:#1e9ff2 !important;color:white !important}[slot='dropdown-content'].sc-ir-m-combobox [data-option].focused.sc-ir-m-combobox,[slot='dropdown-content'].sc-ir-m-combobox [data-option].active.sc-ir-m-combobox{background-color:#1e9ff2 !important;color:white !important}`;

const IrMCombobox = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.optionChange = createEvent(this, "optionChange");
        this.searchQuery = createEvent(this, "searchQuery");
    }
    get el() { return getElement(this); }
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
    id = v4();
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
        return (h(Host, { key: 'b0272b4d599989f625bb3e487c4723600a363acb', class: { 'has-prefix': this.hasPrefix, 'has-suffix': this.hasSuffix } }, h("div", { key: 'a19b964c935a04592f65a62f6abaeecf05d45275', class: "input-wrapper" }, h("span", { key: '345801a588ae51798445b670309f9ca0c1a6ee71', class: "prefix-container", "aria-hidden": !this.hasPrefix }, h("slot", { key: '597bff794fb200cec62e185b9ba451ab3daf8246', name: "prefix", ref: el => (this.prefixSlotRef = el) })), h("input", { key: '71f92b58c896a5c18b44025857c0278a097a1cf9', ref: el => (this.inputRef = el), type: "text", class: "form-control", role: "combobox", id: this.id, value: this.selectedOption?.label || '', placeholder: this.placeholder, "aria-expanded": String(this.isOpen), "aria-autocomplete": "list", "aria-controls": this.dropdownId, "data-reference": "parent", "aria-haspopup": "listbox", "aria-activedescendant": this.focusedIndex >= 0 ? `${this.dropdownId}-option-${this.focusedIndex}` : null, "aria-label": t('Lcz_Combobox', { fallback: 'Combobox' }), "aria-required": true, onKeyDown: this.handleKeyDown, onInput: this.handleInput }), h("span", { key: '10f6d8c8ea2f1ab8df3b20146340c9b1df357d16', class: "suffix-container", "aria-hidden": !this.hasSuffix }, h("slot", { key: '9ac7df3f4f7322cb5440606698a5f00bec8ed575', name: "suffix", ref: el => (this.suffixSlotRef = el) }))), h("div", { key: '95fd2a853feb736ed2022f8a48742491759c1e3e', class: `dropdown ${this.isOpen ? 'show' : ''}` }, h("div", { key: '96f10575b91f0bca49cfc86d0c29114eec8a860b', ref: el => (this.dropdownRef = el), class: `dropdown-menu ${this.isOpen ? 'show' : ''}`, id: this.dropdownId, role: "listbox", "aria-expanded": String(this.isOpen) }, this.isCompositionMode ? (h("slot", null)) : this.useSlot ? (h("slot", { name: "dropdown-content" })) : ([
            this.loading && h("div", { class: "dropdown-item loading" }, t('Lcz_Loading', { fallback: 'Loading...' })),
            !this.loading && this.filteredOptions.length === 0 && h("div", { class: "dropdown-item no-results" }, t('Lcz_NoResultsFound', { fallback: 'No results found' })),
            !this.loading &&
                this.filteredOptions.map((option, index) => (h("button", { id: `${this.dropdownId}-option-${index}`, class: `dropdown-item ${this.focusedIndex === index ? 'active' : ''}`, role: "option", "aria-selected": this.selectedOption?.value === option.value ? 'true' : 'false', onClick: () => this.selectOption(option), onMouseEnter: () => (this.focusedIndex = index), innerHTML: option.html_content }, option.html_content ? null : option.label))),
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
        registerInstance(this, hostRef);
        this.applyFilters = createEvent(this, "applyFilters");
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
    get quickDates() {
        return [
            ...[7, 14, 30, 60, 90].map(days => ({
                label: t('Lcz_DaysAgo', { fallback: '%1 Days Ago', params: [formatCount(days)] }),
                getDate: () => hooks().subtract(days, 'days'),
            })),
            {
                label: t('Lcz_YearAgo', { fallback: '%1 Year Ago', params: [formatCount(1)] }),
                getDate: () => hooks().subtract(365, 'days'),
            },
        ];
    }
    render() {
        return (h("ir-filter-card", { key: '6f3a1d4e5adab751ba440e1167722ead2ef8b1cd' }, h("wa-radio-group", { key: '546bbb840c00cc191011281be742799ab7509906', label: t('Lcz_Rooms', { fallback: 'Rooms' }), orientation: "horizontal", size: "s", style: { width: '100%' }, value: this.filters?.BOOK_CASE, onchange: (e) => {
                this.updateFilter({ BOOK_CASE: e.target.value });
            } }, h("wa-radio", { key: 'b4ef384f1e3a420bfecbeb1c04187a83b94f16d9', style: { flex: '1 1 0%' }, appearance: "button", value: "001" }, t('Lcz_Booked', { fallback: 'Booked' })), h("wa-radio", { key: 'f8c607b1df9e33fd4ed5fc01450d69c05b8efe39', style: { flex: '1 1 0%' }, appearance: "button", value: "002" }, t('Lcz_Stayed', { fallback: 'Stayed' }))), this.allowedProperties.length > 1 && (h("ir-m-combobox", { key: '586221019c52952f109338a2d0868cd6fb0046e4', defaultOption: this.filters?.LIST_AC_ID?.length === this.allowedProperties?.length ? 'all' : this.filters?.LIST_AC_ID[0]?.toString(), onOptionChange: e => {
                const value = e.detail.value;
                if (value === 'all') {
                    this.updateFilter({ LIST_AC_ID: this.allowedProperties.map(p => p.id) });
                }
                else {
                    this.updateFilter({ LIST_AC_ID: this.allowedProperties.filter(p => p.id === Number(value)).map(p => p.id) });
                }
            }, options: [
                { label: t('Lcz_All', { fallback: 'All' }), value: 'all' },
                ...this.allowedProperties.map(p => ({
                    label: p.name,
                    value: p.id.toString(),
                })),
            ] })), h("wa-select", { key: '390fbc210e4ce1db8f795182f55e1b410459794c', label: t('Lcz_SelectedPeriod', { fallback: 'Selected period' }), size: "s", value: this.window, defaultValue: this.window, onchange: (e) => {
                const val = e.target.value;
                const dateDiff = Number(val);
                this.updateFilter({
                    WINDOW: dateDiff,
                    TO_DATE: hooks().format('YYYY-MM-DD'),
                    FROM_DATE: hooks().subtract(dateDiff, 'days').format('YYYY-MM-DD'),
                });
                this.window = val;
            } }, h("wa-option", { key: 'c100e39180487360ed5a1137c0d099b48395a2b9', value: "7" }, t('Lcz_ForThePastNDays', { fallback: 'For the past %1 days', params: [formatCount(7)] })), h("wa-option", { key: '574dcebe1d5c796d45ebc703e2f669dd475a9798', value: "14" }, t('Lcz_ForThePastNDays', { fallback: 'For the past %1 days', params: [formatCount(14)] })), h("wa-option", { key: 'b9c20da5044692d47410e7faa52516651a941176', value: "30" }, t('Lcz_ForThePastNDays', { fallback: 'For the past %1 days', params: [formatCount(30)] })), h("wa-option", { key: '439300ef96c06743389b010af83002e965a676ef', value: "60" }, t('Lcz_ForThePastNDays', { fallback: 'For the past %1 days', params: [formatCount(60)] })), h("wa-option", { key: 'fc4772f1eb384b352a80b68b7021a88c6f87bab0', value: "90" }, t('Lcz_ForThePastNDays', { fallback: 'For the past %1 days', params: [formatCount(90)] })), h("wa-option", { key: '886d760dcb9d948ba57c0554d0d16aae4989740d', value: "365" }, t('Lcz_ForThePastNDays', { fallback: 'For the past %1 days', params: [formatCount(365)] }))), h("div", { key: 'f5326bf6aca30718bf04a31a2209897dfc1e142c', class: "or-divider" }, h("span", { key: 'ae2ece2f2c10223a55d181f3c9e94b181450fe94', class: "or-divider__line" }), h("span", { key: 'af5de4483f252379bdbfa361f8df21c8b5fbae84', class: "or-divider__text" }, t('Lcz_Or', { fallback: 'Or' })), h("span", { key: '9c47ac2e8d7104403f0062b40cb77a838fdd59ff', class: "or-divider__line" })), h("ir-date-range-filter", { key: '75dc103c5826b2452e8ca3a8c872219306b5bd27', label: t('Lcz_DateRange', { fallback: 'Date range' }), fromDate: this.filters?.FROM_DATE, toDate: this.filters?.TO_DATE, maxDate: hooks().format('YYYY-MM-DD'), selectionMode: "auto", quickDates: this.quickDates, withClear: false, onDatesChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { from, to } = e.detail;
                this.updateFilter({ FROM_DATE: from, TO_DATE: to });
                this.window = '';
            } }), h("wa-checkbox", { key: '584a15fc6e7ce0296b0c2c05db94cb8d301f8a9e', checked: this.filters?.include_previous_year, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.target.checked });
            } }, t('Lcz_CompareWithPreviousYear', { fallback: 'Compare with previous year' })), h("div", { key: 'fbbb426ac86830b127ea858673287faec3124c08', slot: "footer" }, h("ir-custom-button", { key: '8f9af317d27b6131b349d27db3f3fd84de45f056', variant: "neutral", appearance: "outlined", onClickHandler: e => this.resetFilters(e) }, t('Lcz_Reset', { fallback: 'Reset' })), h("ir-custom-button", { key: '8ace3056ac566ce116bdd8be43e5ef11f85e9718', variant: "brand", loading: this.isLoading, onClickHandler: e => this.applyFiltersEvt(e) }, t('Lcz_Apply', { fallback: 'Apply' })))));
    }
};
IrSalesByChannelFilters.style = irSalesByChannelFiltersCss();

const irSalesByChannelSummaryCss = () => `.sc-ir-sales-by-channel-summary-h{display:block}.summary-row.sc-ir-sales-by-channel-summary{display:flex;flex-direction:column;align-items:stretch;gap:1rem}.summary-metric.sc-ir-sales-by-channel-summary{flex:1}@media (min-width: 640px){.summary-row.sc-ir-sales-by-channel-summary{flex-direction:row}}`;

const IrSalesByChannelSummary = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("div", { key: '97adb7d671ea8bd59ade3be69c538e7f0e2d92ac', class: "summary-row" }, h("ir-metric-card", { key: 'faf05b53f61902ca9de16b58a1a474f4d534fa47', class: "summary-metric", icon: "moon", label: t('Lcz_TotalRoomNights', { fallback: 'Total Room Nights' }), value: formatCount(totalNights), trend: hasLastYear ? calculateTrend(totalNights, lastYearNights) : undefined, trendLabel: t('Lcz_VsLastYear', { fallback: 'vs last year' }), caption: hasLastYear ? `${t('Lcz_LastYear', { fallback: 'Last year:' })} ${formatCount(lastYearNights)}` : undefined }), h("ir-metric-card", { key: 'ee5c93cfee87d934af25cec2266a53f85af76597', class: "summary-metric", icon: "money-bill", label: t('Lcz_TotalRevenue', { fallback: 'Total Revenue' }), value: formatAmount(currency, totalRevenue), trend: hasLastYear ? calculateTrend(totalRevenue, lastYearRevenue) : undefined, trendLabel: t('Lcz_VsLastYear', { fallback: 'vs last year' }), caption: hasLastYear ? `${t('Lcz_LastYear', { fallback: 'Last year:' })} ${formatAmount(currency, lastYearRevenue)}` : undefined }), h("ir-metric-card", { key: '5641e4be5729577e9725a11291fb51047439a341', class: "summary-metric", icon: "chart-bar", label: t('Lcz_Sources', { fallback: 'Sources' }), value: formatCount(this.records?.length ?? 0) })));
    }
};
IrSalesByChannelSummary.style = irSalesByChannelSummaryCss();

const irSalesByChannelTableCss = () => `.sc-ir-sales-by-channel-table-h{display:block;width:100%}.channel-table__scroll.sc-ir-sales-by-channel-table{overflow-x:auto}.channel-table__card.sc-ir-sales-by-channel-table{min-height:50vh}.channel-table__card.sc-ir-sales-by-channel-table::part(body),.channel-table__card.sc-ir-sales-by-channel-table [part~="body"]{padding:0.5rem}.channel-table__empty-wrapper.sc-ir-sales-by-channel-table{display:flex;align-items:center;justify-content:center;min-height:300px}.booked-by-source__logo.sc-ir-sales-by-channel-table{width:1.5625rem;background-color:white}.cell--left.sc-ir-sales-by-channel-table{text-align:start}.cell--center.sc-ir-sales-by-channel-table{text-align:center}.cell--right.sc-ir-sales-by-channel-table{text-align:end}.cell-stack.sc-ir-sales-by-channel-table{display:flex;flex-direction:column;gap:0.25rem}.cell-stack.--source.sc-ir-sales-by-channel-table{flex-direction:row;align-items:center;gap:0.5rem}.cell-stack.sc-ir-sales-by-channel-table p.sc-ir-sales-by-channel-table{margin:0;padding:0}.value--primary.sc-ir-sales-by-channel-table{font-weight:600}.value--previous.sc-ir-sales-by-channel-table{color:var(--wa-color-brand-text-normal)}.occ-row.sc-ir-sales-by-channel-table{display:flex;align-items:center;gap:0.5rem}.occ-label.sc-ir-sales-by-channel-table{width:8ch;flex-shrink:0}.occ-bar.sc-ir-sales-by-channel-table{flex:1 1 0%}.occ-bar--previous.sc-ir-sales-by-channel-table{--indicator-color:var(--wa-color-brand-fill-normal)}.sales-by-channel-table__progress-col.sc-ir-sales-by-channel-table{width:35%}.sales-by-channel-table__progress-col.single.sc-ir-sales-by-channel-table{display:none !important}@media (min-width: 768px){.sales-by-channel-table__progress-col.single.sc-ir-sales-by-channel-table{display:table-cell !important}}.legend-cell.sc-ir-sales-by-channel-table{white-space:nowrap}.legend-row.sc-ir-sales-by-channel-table{display:flex;align-items:center;justify-content:flex-end;gap:1rem;padding-top:0.5rem}.legend-item.sc-ir-sales-by-channel-table{display:flex;align-items:center;gap:0.5rem}.legend-item.sc-ir-sales-by-channel-table p.sc-ir-sales-by-channel-table{margin:0;padding:0}.legend-dot.sc-ir-sales-by-channel-table{height:12px;aspect-ratio:1;border-radius:4px}.legend-dot--current.sc-ir-sales-by-channel-table{background:var(--wa-color-brand-fill-loud)}.legend-dot--previous.sc-ir-sales-by-channel-table{background:var(--wa-color-brand-fill-normal)}.channel-table__load-more.sc-ir-sales-by-channel-table{display:flex;justify-content:center;padding:1rem}.task-row.sc-ir-sales-by-channel-table,.table.sc-ir-sales-by-channel-table th.sc-ir-sales-by-channel-table,.table.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{white-space:nowrap;max-width:max-content !important;padding:0.25rem 1rem !important}.table.sc-ir-sales-by-channel-table tfoot.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{border-bottom:0}`;

const tableCss = () => `.sc-ir-sales-by-channel-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-sales-by-channel-table{overflow-x:auto}.table--container.sc-ir-sales-by-channel-table,.data-table.sc-ir-sales-by-channel-table{height:100%}.ir-table-row.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{padding:var(--ir-cell-padding) !important;text-align:start;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-sales-by-channel-table tbody.sc-ir-sales-by-channel-table tr.sc-ir-sales-by-channel-table:last-child>td.sc-ir-sales-by-channel-table{border-bottom:0 !important}.cell--align-start.sc-ir-sales-by-channel-table{text-align:start !important}.cell--align-center.sc-ir-sales-by-channel-table{text-align:center !important}.cell--align-end.sc-ir-sales-by-channel-table{text-align:end !important}.table.sc-ir-sales-by-channel-table thead.sc-ir-sales-by-channel-table th.sc-ir-sales-by-channel-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:start}.data-table.sc-ir-sales-by-channel-table thead.sc-ir-sales-by-channel-table th.sc-ir-sales-by-channel-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-sales-by-channel-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-sales-by-channel-table,.ir-table-row.sc-ir-sales-by-channel-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-by-channel-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-sales-by-channel-table thead.sc-ir-sales-by-channel-table th.sortable.sc-ir-sales-by-channel-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-sales-by-channel-table thead.sc-ir-sales-by-channel-table th.sortable.sc-ir-sales-by-channel-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-sales-by-channel-table thead.sc-ir-sales-by-channel-table th.sortable.sc-ir-sales-by-channel-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-sales-by-channel-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-sales-by-channel-table svg.sc-ir-sales-by-channel-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-sales-by-channel-table:hover td.sc-ir-sales-by-channel-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-sales-by-channel-table:hover td.sc-ir-sales-by-channel-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-sales-by-channel-table:active td.sc-ir-sales-by-channel-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-sales-by-channel-table:hover td.sc-ir-sales-by-channel-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-sales-by-channel-table:active td.sc-ir-sales-by-channel-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-sales-by-channel-table .empty-row.sc-ir-sales-by-channel-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-sales-by-channel-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-sales-by-channel-table{position:sticky !important;inset-inline-end:0;background-color:var(--wa-color-surface-default, white)}`;

const IrSalesByChannelTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
            return (h("wa-card", { class: "channel-table__card" }, h("div", { class: "channel-table__empty-wrapper" }, h("ir-empty-state", { message: t('Lcz_NoSalesDataFound', { fallback: 'No sales data found.' }) }))));
        }
        return (h("wa-card", { class: "channel-table__card" }, h("div", { class: "channel-table__scroll" }, h("table", { class: "table data-table", "data-testid": "hk_tasks_table" }, h("thead", { class: "table-header" }, h("tr", null, h("th", { class: "cell--left" }, t('Lcz_Source', { fallback: 'Source' })), h("th", { class: "cell--center" }, t('Lcz_RoomNights', { fallback: 'Room nights' })), h("th", { class: "cell--right" }, t('Lcz_RoomRevenue', { fallback: 'Room Revenue' })), h("th", { class: `sales-by-channel-table__progress-col ${!isSingleProperty ? 'single' : ''}` }))), h("tbody", null, visibleRecords.map(record => {
            const mainPercentage = formatPercent(parseFloat(record.PCT.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            const secondaryPercentage = record.last_year
                ? formatPercent(parseFloat(record.last_year.PCT.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                : null;
            return (h("tr", { "data-testid": "record_row", class: { 'task-table-row ir-table-row': true } }, h("td", { class: "cell--left" }, h("div", { class: "cell-stack --source" }, h("img", { class: "booked-by-source__logo", id: `source-logo__`, src: record.SOURCE_ICON, alt: record.SOURCE }), h("p", null, record.SOURCE))), h("td", { class: "cell--center" }, h("div", { class: "cell-stack" }, h("p", { class: record.last_year?.NIGHTS ? 'value--primary' : '' }, formatCount(record.NIGHTS)), record.last_year?.NIGHTS && h("p", { class: "value--previous" }, formatCount(record.last_year.NIGHTS)))), h("td", { class: "cell--right" }, h("div", { class: "cell-stack" }, h("p", { class: record.last_year?.REVENUE ? 'value--primary' : '' }, formatAmount(record.currency, record.REVENUE)), record.last_year?.REVENUE && h("p", { class: "value--previous" }, formatAmount(record.currency, record.last_year.REVENUE)))), h("td", { class: `sales-by-channel-table__progress-col ${!isSingleProperty ? 'single' : ''}` }, isSingleProperty && (h("div", { class: "cell-stack" }, h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, mainPercentage), h("wa-progress-bar", { class: "occ-bar", value: parseFloat(record.PCT.toString()) })), record.last_year?.PCT && (h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, secondaryPercentage), h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(record.last_year.PCT.toString()) }))))))));
        })), isSingleProperty && (h("tfoot", null, h("tr", { style: { fontSize: '12px' } }, h("td", { colSpan: 3 }), h("td", { class: "legend-cell" }, h("div", { class: "legend-row" }, h("div", { class: "legend-item" }, h("div", { class: "legend-dot legend-dot--current" }), h("p", null, t('Lcz_SelectedPeriod', { fallback: 'Selected period' }))), h("div", { class: "legend-item" }, h("div", { class: "legend-dot legend-dot--previous" }), h("p", null, t('Lcz_PreviousYear', { fallback: 'Previous year' }))))))))), this.visibleCount < records.length && (h("div", { class: "channel-table__load-more" }, h("ir-custom-button", { variant: "neutral", appearance: "outlined", size: "s", onClickHandler: this.handleLoadMore }, t('Lcz_LoadMore', { fallback: 'Load more' })))))));
    }
    static get watchers() { return {
        "allowedProperties": [{
                "handlePropertiesChange": 0
            }]
    }; }
};
IrSalesByChannelTable.style = irSalesByChannelTableCss() + tableCss();

export { IrMCombobox as ir_m_combobox, IrSalesByChannelFilters as ir_sales_by_channel_filters, IrSalesByChannelSummary as ir_sales_by_channel_summary, IrSalesByChannelTable as ir_sales_by_channel_table };
