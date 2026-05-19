'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const locales_store = require('./locales.store-32782582.js');
const v4 = require('./v4-9b297151.js');
const moment = require('./moment-1780b03a.js');
const utils = require('./utils-cf15d06a.js');
require('./index-fbf1fe1d.js');
require('./index-8bb117a0.js');
require('./calendar-data-70bc3b4b.js');
require('./type-87fd01b8.js');

const irFiltersPanelCss = ".sc-ir-filters-panel-h{display:block;height:100%}.filters-panel.sc-ir-filters-panel{height:100%}.filters-panel.sc-ir-filters-panel>.card.sc-ir-filters-panel{height:100%}.filters-panel__header.sc-ir-filters-panel{display:flex;align-items:center;justify-content:space-between}.filters-panel__title-group.sc-ir-filters-panel{display:flex;align-items:center;flex:1 1 auto;gap:0.5rem}.filters-panel__header-actions.sc-ir-filters-panel{display:flex;align-items:center;gap:0.5rem}.filters-panel__content.sc-ir-filters-panel{margin-top:0.5rem}.filters-panel__content.collapse.sc-ir-filters-panel:not(.show){display:none}.filters-panel__content-inner.sc-ir-filters-panel{display:flex;flex-direction:column}.filters-panel__footer.sc-ir-filters-panel{display:flex;align-items:center;gap:1rem;margin-top:0.75rem}.filters-panel__footer--start.sc-ir-filters-panel{justify-content:flex-start}.filters-panel__footer--center.sc-ir-filters-panel{justify-content:center}.filters-panel__footer--end.sc-ir-filters-panel{justify-content:flex-end}.filters-panel__footer--space-between.sc-ir-filters-panel{justify-content:space-between}.filters-panel__footer--space-around.sc-ir-filters-panel{justify-content:space-around}@media (min-width: 768px){.filters-panel--persistent.sc-ir-filters-panel .collapse-btn.sc-ir-filters-panel{display:none}.filters-panel--persistent.sc-ir-filters-panel .filters-panel__content.collapse.sc-ir-filters-panel:not(.show){display:block}}";
const IrFiltersPanelStyle0 = irFiltersPanelCss;

let panelId = 0;
const IrFiltersPanel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.filterToggle = index.createEvent(this, "irFilterToggle", 7);
        this.filterApply = index.createEvent(this, "irFilterApply", 7);
        this.filterReset = index.createEvent(this, "irFilterReset", 7);
    }
    /** Panel headline text */
    filterTitle = locales_store.locales.entries.Lcz_Filters;
    /** Optional custom collapse target id (useful for legacy CSS hooks) */
    collapseId;
    /** Show collapse toggle button */
    showCollapseButton = true;
    /** Collapse by default */
    defaultCollapsed = false;
    /** Controlled collapse state */
    collapsed;
    /** Keep content expanded on desktop and hide the collapse toggle */
    persistentOnDesktop = true;
    /** Optional extra class for the outer wrapper */
    panelClass;
    /** Optional extra class for the card wrapper */
    cardClass = 'sales-filters-card';
    /** Optional extra class for the header row */
    headerClass;
    /** Optional extra class for the filters content wrapper */
    contentClass;
    /** Space between content items */
    contentGap = '0.5rem';
    /** Align footer actions */
    actionsAlign = 'end';
    /** Hide the default footer actions */
    hideDefaultActions = false;
    /** Collapse icon when expanded */
    collapseIconOpen = 'open_eye';
    /** Collapse icon when collapsed */
    collapseIconClosed = 'closed_eye';
    /** Apply button copy */
    applyLabel = locales_store.locales.entries.Lcz_Apply;
    /** Reset button copy */
    resetLabel = locales_store.locales.entries.Lcz_Reset;
    /** Disable apply action */
    disableApply = false;
    /** Disable reset action */
    disableReset = false;
    /** Show loader inside apply button */
    isApplyLoading = false;
    /** Optional data test id suffix for default buttons */
    actionTestId = 'filter';
    filterToggle;
    filterApply;
    filterReset;
    internalCollapsed = false;
    generatedCollapseId = `ir-filters-panel-${++panelId}`;
    componentWillLoad() {
        this.internalCollapsed = this.collapsed ?? this.defaultCollapsed;
    }
    handleCollapsedChange(newValue) {
        if (typeof newValue === 'boolean' && newValue !== this.internalCollapsed) {
            this.internalCollapsed = newValue;
        }
    }
    get targetId() {
        return this.collapseId || this.generatedCollapseId;
    }
    toggleCollapse(event) {
        event?.stopPropagation();
        const next = !this.internalCollapsed;
        this.internalCollapsed = next;
        this.collapsed = next;
        this.filterToggle.emit({ collapsed: next });
    }
    handleReset(event) {
        event.stopPropagation();
        this.filterReset.emit();
    }
    handleApply(event) {
        event.stopPropagation();
        this.filterApply.emit();
    }
    renderDefaultIcon() {
        return (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })));
    }
    renderCollapseButton(collapsed) {
        if (!this.showCollapseButton) {
            return null;
        }
        return (index.h("ir-button", { variant: "icon", "aria-expanded": !collapsed ? 'true' : 'false', "aria-controls": this.targetId, class: "collapse-btn toggle-collapse-btn", icon_name: collapsed ? this.collapseIconClosed : this.collapseIconOpen, visibleBackgroundOnHover: true, onClickHandler: this.toggleCollapse.bind(this), btn_type: "button", style: { '--icon-size': '1.6rem' } }));
    }
    render() {
        const collapsed = this.internalCollapsed;
        const panelClasses = {
            'filters-panel': true,
            'filters-panel--persistent': this.persistentOnDesktop,
        };
        if (this.panelClass) {
            panelClasses[this.panelClass] = true;
        }
        const headerClasses = {
            'filters-panel__header': true,
        };
        if (this.headerClass) {
            headerClasses[this.headerClass] = true;
        }
        const contentWrapperClasses = {
            'filters-panel__content-inner': true,
        };
        if (this.contentClass) {
            contentWrapperClasses[this.contentClass] = true;
        }
        const footerClasses = {
            'filters-panel__footer': true,
            'filter-actions': true,
            'd-flex': true,
            'align-items-center': true,
            [`filters-panel__footer--${this.actionsAlign}`]: true,
        };
        const cardClass = `card mb-0 p-1 d-flex flex-column ${this.cardClass || ''}`.trim();
        return (index.h("div", { key: '1ebc1c95cdf91f6731b80fa36d24dc31a3529164', class: panelClasses }, index.h("div", { key: 'e16dc8105fdad94b39a1a3faaa4d395a887de1a0', class: cardClass }, index.h("div", { key: '4acb4ec3a66228cd10726017c78f8f8faf485207', class: headerClasses }, index.h("div", { key: 'f4e5f5c979c32486e1c44cd4de8040feeccabe66', class: "filters-panel__title-group" }, index.h("slot", { key: '0edab6679ff062f111ec7650fd6cb7647fba14cd', name: "header-icon" }, this.renderDefaultIcon()), this.filterTitle && index.h("h4", { key: '72c6c7944c7a69c4eec0136c5065965d94bd1730', class: "filters-panel__title m-0 p-0 flex-grow-1" }, this.filterTitle), index.h("slot", { key: 'c17b9f1e3549c86fd89419fe03fae8850d3f8afc', name: "header-title-extra" })), index.h("div", { key: '0798d1e7355c059d3690ab7f45b0c86d00808459', class: "filters-panel__header-actions" }, index.h("slot", { key: 'db054665161c986dfc2c0308e8b9fc17b519330b', name: "header-actions" }), this.renderCollapseButton(collapsed))), index.h("div", { key: '0c2f4b2a8c7926e3079e3fa8b9f2b53ed28b71e8', id: this.targetId, class: {
                'filters-panel__content': true,
                'collapse': true,
                'show': !collapsed,
            }, "aria-hidden": collapsed ? 'true' : 'false' }, index.h("div", { key: '9f6e25e7e87921f6c420ca8478a6fbba1387105d', class: contentWrapperClasses, style: { gap: this.contentGap } }, index.h("slot", { key: '8b47d9af9bd24959e5b7594cf3b8e0fdb0cc3a33' }), !this.hideDefaultActions && (index.h("div", { key: '0e0b0e650f3709a3e5e3116ad80a5e3746946982', class: footerClasses }, index.h("slot", { key: '845bd5ceb1188b7b5c34e06997d5397801656d0f', name: "actions" }, index.h("ir-button", { key: 'fe1fd5d4998961a1b5030e2707763b6ad6a93858', btn_type: "button", "data-testid": `${this.actionTestId}-reset`, text: this.resetLabel, size: "sm", btn_color: "secondary", btn_disabled: this.disableReset, onClickHandler: this.handleReset.bind(this) }), index.h("ir-button", { key: 'd4b948769ebdf2bc3ebf4e289a08d91f92b95e31', btn_type: "button", "data-testid": `${this.actionTestId}-apply`, isLoading: this.isApplyLoading, text: this.applyLabel, size: "sm", btn_disabled: this.disableApply, onClickHandler: this.handleApply.bind(this) })))))))));
    }
    static get watchers() { return {
        "collapsed": ["handleCollapsedChange"]
    }; }
};
IrFiltersPanel.style = IrFiltersPanelStyle0;

const irMComboboxCss = ".sc-ir-m-combobox-h{position:relative;display:block}.input-wrapper.sc-ir-m-combobox{position:relative;width:100%}.prefix-container.sc-ir-m-combobox,.suffix-container.sc-ir-m-combobox{position:absolute;top:0;bottom:0;display:inline-flex;align-items:center;color:var(--ir-combobox-affix-color, #6c757d);pointer-events:none}.dropdown-item.sc-ir-m-combobox{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.prefix-container.sc-ir-m-combobox{left:0.5rem}.suffix-container.sc-ir-m-combobox{right:0.5rem}.sc-ir-m-combobox-s>[slot='prefix'],.sc-ir-m-combobox-s>[slot='suffix']{display:inline-flex;width:var(--ir-combobox-affix-size, 1rem);height:var(--ir-combobox-affix-size, 1rem)}.has-prefix.sc-ir-m-combobox-h input.form-control.sc-ir-m-combobox{padding-left:calc(0.75rem + var(--ir-combobox-affix-size, 1rem))}.has-suffix.sc-ir-m-combobox-h input.form-control.sc-ir-m-combobox{padding-right:calc(0.75rem + var(--ir-combobox-affix-size, 1rem))}.dropdown.sc-ir-m-combobox{position:absolute;top:100%;left:0;z-index:1000;width:100%}.dropdown-menu.sc-ir-m-combobox{max-height:var(--ir-combobox-height, 200px);overflow-y:auto;min-width:100%;width:var(--ir-combobox-width, 100%) !important;scroll-behavior:smooth}.dropdown-item.loading.sc-ir-m-combobox,.dropdown-item.no-results.sc-ir-m-combobox{color:#6c757d;cursor:default;pointer-events:none}.dropdown-item.sc-ir-m-combobox{padding:0.5rem 1rem !important}.dropdown-item.active.sc-ir-m-combobox,.dropdown-item.sc-ir-m-combobox:active,.dropdown-item.focused.sc-ir-m-combobox{background-color:var(--blue, #1e9ff2) !important;color:white !important}[slot='dropdown-content'].sc-ir-m-combobox .dropdown-item.focused.sc-ir-m-combobox,[slot='dropdown-content'].sc-ir-m-combobox .dropdown-item.active.sc-ir-m-combobox{background-color:#1e9ff2 !important;color:white !important}[slot='dropdown-content'].sc-ir-m-combobox [data-option].focused.sc-ir-m-combobox,[slot='dropdown-content'].sc-ir-m-combobox [data-option].active.sc-ir-m-combobox{background-color:#1e9ff2 !important;color:white !important}";
const IrMComboboxStyle0 = irMComboboxCss;

const IrMCombobox = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.optionChange = index.createEvent(this, "optionChange", 7);
        this.searchQuery = index.createEvent(this, "searchQuery", 7);
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
        return (index.h(index.Host, { key: 'bb1762727513c29eac82733a4f6dec2308481a00', class: { 'has-prefix': this.hasPrefix, 'has-suffix': this.hasSuffix } }, index.h("div", { key: '6c1b5c1ab4d62c6aea567b05025a1b340061f218', class: "input-wrapper" }, index.h("span", { key: '719739ad5086b9e1d8691d2c50c01b5665890537', class: "prefix-container", "aria-hidden": !this.hasPrefix }, index.h("slot", { key: '6b7950bee2761eae5ac89380a34f4327c5057cb6', name: "prefix", ref: el => (this.prefixSlotRef = el) })), index.h("input", { key: 'ff29463b9fafe0ff3b8cf125db5ce3e897c0838d', ref: el => (this.inputRef = el), type: "text", class: "form-control", role: "combobox", id: this.id, value: this.selectedOption?.label || '', placeholder: this.placeholder, "aria-expanded": String(this.isOpen), "aria-autocomplete": "list", "aria-controls": this.dropdownId, "data-reference": "parent", "aria-haspopup": "listbox", "aria-activedescendant": this.focusedIndex >= 0 ? `${this.dropdownId}-option-${this.focusedIndex}` : null, "aria-label": "Combobox", "aria-required": true, onKeyDown: this.handleKeyDown, onInput: this.handleInput }), index.h("span", { key: '4eb7c4a849e3a6f3de0d0d0c608c954703997e70', class: "suffix-container", "aria-hidden": !this.hasSuffix }, index.h("slot", { key: '2b87c154bf99b7614eea8b866bd97f097df255c2', name: "suffix", ref: el => (this.suffixSlotRef = el) }))), index.h("div", { key: 'cd8bbf080235612026714fd914c22eb5951beddc', class: `dropdown ${this.isOpen ? 'show' : ''}` }, index.h("div", { key: '005a1324466613843906da661d19e893e71b85a1', ref: el => (this.dropdownRef = el), class: `dropdown-menu ${this.isOpen ? 'show' : ''}`, id: this.dropdownId, role: "listbox", "aria-expanded": String(this.isOpen) }, this.isCompositionMode ? (index.h("slot", null)) : this.useSlot ? (index.h("slot", { name: "dropdown-content" })) : ([
            this.loading && index.h("div", { class: "dropdown-item loading" }, "Loading..."),
            !this.loading && this.filteredOptions.length === 0 && index.h("div", { class: "dropdown-item no-results" }, "No results found"),
            !this.loading &&
                this.filteredOptions.map((option, index$1) => (index.h("button", { id: `${this.dropdownId}-option-${index$1}`, class: `dropdown-item ${this.focusedIndex === index$1 ? 'active' : ''}`, role: "option", "aria-selected": this.selectedOption?.value === option.value ? 'true' : 'false', onClick: () => this.selectOption(option), onMouseEnter: () => (this.focusedIndex = index$1), innerHTML: option.html_content }, option.html_content ? null : option.label))),
        ])))));
    }
    static get watchers() { return {
        "options": ["watchOptionsChanged"],
        "defaultOption": ["watchDefaultValueChanged"],
        "useSlot": ["watchUseSlotChanged"]
    }; }
};
IrMCombobox.style = IrMComboboxStyle0;

const irSalesByChannelFiltersCss = ".sc-ir-sales-by-channel-filters-h{display:block}";
const IrSalesByChannelFiltersStyle0 = irSalesByChannelFiltersCss;

const IrSalesByChannelFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.applyFilters = index.createEvent(this, "applyFilters", 7);
    }
    isLoading;
    baseFilters;
    allowedProperties;
    filters;
    window;
    applyFilters;
    componentWillLoad() {
        this.filters = { ...this.baseFilters };
        this.window = this.baseFilters.WINDOW;
    }
    updateFilter(params) {
        this.filters = { ...this.filters, ...params };
    }
    render() {
        console.log(this.filters);
        return (index.h("ir-filters-panel", { key: '5ec1e620f6f4c3e35d947260b2a3a770660adcb5', isApplyLoading: this.isLoading, onIrFilterApply: () => {
                this.applyFilters.emit(this.filters);
            }, onIrFilterReset: () => {
                this.filters = { ...this.baseFilters };
                this.applyFilters.emit(this.filters);
            } }, index.h("fieldset", { key: 'd467079b1dcb51777b9755c50d2e98d5cd3d8bf8', class: "pt-1 filter-group" }, index.h("label", { key: '32ca73d8d236e80676d488132ae8b5efce60c04d', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Rooms"), index.h("ir-select", { key: '0ecf5a153ff93e87e8a78d64e7847b146ec48a38', selectedValue: this.filters?.BOOK_CASE, selectId: "rooms", showFirstOption: false, onSelectChange: e => this.updateFilter({
                BOOK_CASE: e.detail,
            }), data: [
                { text: 'Booked', value: '001' },
                { text: 'Stayed', value: '002' },
            ] })), this.allowedProperties.length > 1 && (index.h("fieldset", { key: '1cb12f3da942a694c1e8a2f7aa7af24b80100d7b', class: "filter-group" }, index.h("label", { key: 'a62b6c5113b2df8c5439b8dc0c5f2004c77da52e', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Properties"), index.h("ir-m-combobox", { key: 'cbeac05f8821cac4c0b5f4dfdf529de31339d563', defaultOption: this.filters?.LIST_AC_ID?.length === this.allowedProperties?.length ? 'all' : this.filters?.LIST_AC_ID[0]?.toString(), onOptionChange: e => {
                const value = e.detail.value;
                if (value === 'all') {
                    this.updateFilter({
                        LIST_AC_ID: this.allowedProperties.map(p => p.id),
                    });
                }
                else
                    this.updateFilter({
                        LIST_AC_ID: this.allowedProperties.filter(e => e.id === Number(value)).map(p => p.id),
                    });
            }, options: [
                { label: 'All', value: 'all' },
                ...this.allowedProperties.map(p => ({
                    label: p.name,
                    value: p.id.toString(),
                })),
            ] }))), index.h("fieldset", { key: '247b63e09952ef25ece1117b36bc44d61835cc60', class: "filter-group" }, index.h("label", { key: 'db279143e192e6e1ef80e34d5bbdb32a75780d01', htmlFor: "period", class: "px-0 m-0", style: { paddingBottom: '0.25rem' } }, "Selected period"), index.h("div", { key: '28e6217fa18f75bc21e38004719f0f3f754a1291', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, index.h("ir-select", { key: '46f27cd895f047e4c4b24ec1bf746af2d1b8c4bd', selectedValue: this.window?.toString(), onSelectChange: e => {
                const dateDiff = Number(e.detail);
                const today = moment.hooks();
                this.updateFilter({
                    WINDOW: dateDiff,
                    TO_DATE: today.format('YYYY-MM-DD'),
                    FROM_DATE: today.add(-dateDiff, 'days').format('YYYY-MM-DD'),
                });
                this.window = e.detail;
            }, selectId: "period",
            // showFirstOption={false}
            firstOption: "...", data: [
                { text: 'For the past 7 days', value: '7' },
                { text: 'For the past 14 days', value: '14' },
                { text: 'For the past 30 days', value: '30' },
                { text: 'For the past 60 days', value: '60' },
                { text: 'For the past 90 days', value: '90' },
                { text: 'For the past 365 days', value: '365' },
            ] }), index.h("p", { key: '79d0eaefe8ab2aa7a8a813c17a453701d711f5d1', class: "m-0 p-0 text-center" }, "Or"), index.h("ir-range-picker", { key: 'dbbf31f0570597964074d45e20792ebbe34e1c01', onDateRangeChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { fromDate, toDate, wasFocused } = e.detail;
                this.updateFilter({
                    FROM_DATE: fromDate.format('YYYY-MM-DD'),
                    TO_DATE: toDate.format('YYYY-MM-DD'),
                });
                if (wasFocused)
                    this.window = null;
                // this.dates = { from: fromDate, to: toDate };
            }, fromDate: moment.hooks(this.filters.FROM_DATE, 'YYYY-MM-DD'), toDate: moment.hooks(this.filters.TO_DATE, 'YYYY-MM-DD'), maxDate: moment.hooks().format('YYYY-MM-DD'), withOverlay: false }))), index.h("div", { key: 'd7572a7f7607ccc7f8437e04b7012de2c2d63567', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, index.h("label", { key: 'a95023930ad1acc037db7da72ec2a2ced7f193da', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), index.h("ir-checkbox", { key: '72da7ced3d7c0bf3aaf36a4b09ba2a42028fee65', checked: this.filters?.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.detail });
            } }))));
    }
};
IrSalesByChannelFilters.style = IrSalesByChannelFiltersStyle0;

const irSalesByChannelTableCss = ".sc-ir-sales-by-channel-table-h{display:block;width:100%}.legend.sc-ir-sales-by-channel-table{height:12px;aspect-ratio:1;background:#000;border-radius:4px}.secondary.sc-ir-sales-by-channel-table{background:#6692b3}.channel-cell.sc-ir-sales-by-channel-table{width:100%}.task-row.sc-ir-sales-by-channel-table,.table.sc-ir-sales-by-channel-table th.sc-ir-sales-by-channel-table,.table.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{white-space:nowrap;max-width:max-content !important;padding:0.25rem 1rem !important}.sales-by-channel-table__progress-col.sc-ir-sales-by-channel-table{width:50%}.sales-by-channel-table__progress-col.single.sc-ir-sales-by-channel-table{display:none !important}@media (min-width: 768px){.sales-by-channel-table__progress-col.single.sc-ir-sales-by-channel-table{display:table-cell !important}}.outer-container.sc-ir-sales-by-channel-table{padding:1rem;box-sizing:border-box}.table.sc-ir-sales-by-channel-table tfoot.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{border-bottom:0}.flag.sc-ir-sales-by-channel-table{height:16px;width:23px;border-radius:3px}";
const IrSalesByChannelTableStyle0 = irSalesByChannelTableCss;

const tableCss = ".sc-ir-sales-by-channel-table-h{--ir-cell-padding:0.5rem 1rem}.ir-table-row.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-sales-by-channel-table{overflow-x:auto}.table.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.table.sc-ir-sales-by-channel-table tbody.sc-ir-sales-by-channel-table tr.sc-ir-sales-by-channel-table:last-child>td.sc-ir-sales-by-channel-table{border-bottom:0 !important}.table.sc-ir-sales-by-channel-table thead.sc-ir-sales-by-channel-table th.sc-ir-sales-by-channel-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-sales-by-channel-table thead.sc-ir-sales-by-channel-table th.sc-ir-sales-by-channel-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-sales-by-channel-table .empty-row.sc-ir-sales-by-channel-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-sales-by-channel-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-brand-fill-normal) !important}.selected.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-by-channel-table,.ir-table-row.sc-ir-sales-by-channel-table{transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-by-channel-table{text-transform:capitalize;cursor:pointer}.ir-table-row.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{transition-duration:var(--wa-transition-fast)}.table.sc-ir-sales-by-channel-table thead.sc-ir-sales-by-channel-table th.sortable.sc-ir-sales-by-channel-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-sales-by-channel-table thead.sc-ir-sales-by-channel-table th.sortable.sc-ir-sales-by-channel-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-sales-by-channel-table thead.sc-ir-sales-by-channel-table th.sortable.sc-ir-sales-by-channel-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.ir-table-row.sc-ir-sales-by-channel-table:hover td.sc-ir-sales-by-channel-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-sales-by-channel-table:hover td.sc-ir-sales-by-channel-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-sales-by-channel-table:active td.sc-ir-sales-by-channel-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.ir-table-row.sc-ir-sales-by-channel-table:hover td.sc-ir-sales-by-channel-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-sales-by-channel-table:active td.sc-ir-sales-by-channel-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-sales-by-channel-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-sales-by-channel-table svg.sc-ir-sales-by-channel-table{color:var(--wa-color-brand-fill-loud)}.sticky-column.sc-ir-sales-by-channel-table{position:sticky !important;right:0;background-color:white}.table--container.sc-ir-sales-by-channel-table,.data-table.sc-ir-sales-by-channel-table{height:100%}";
const IrSalesByChannelTableStyle1 = tableCss;

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
        const visibleRecords = this.records.slice(0, this.visibleCount);
        const isSingleProperty = this.mode === 'property';
        return (index.h("div", { key: '4e07a2f3d2fe1b6fb5412333f95783fc738bfef0', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, index.h("table", { key: 'e362e263bf74820497e05db7dac5244510066262', class: "table", "data-testid": "hk_tasks_table" }, index.h("thead", { key: '36404336c5f6612c078595a576eebe1a4f55a052', class: "table-header" }, index.h("tr", { key: 'd302ca6050f560b0e81d6fedf823d0408dee4f77' }, index.h("th", { key: '69d1b03f8cd7211e8ce9c6837a8c410fe82eaca9', class: "text-left" }, "Channel"), index.h("th", { key: 'a7248bfed90f247a55f4d68cf6acb5179fb75efd', class: "text-center" }, "Room nights"), index.h("th", { key: 'bfb649a52c6031d0c7646d7f6a936d12254d8e6e', class: "text-right" }, "Room Revenue"), index.h("th", { key: '3a809788b6c2c157014cd59f41bcdc36df7218bd', class: `sales-by-channel-table__progress-col ${!isSingleProperty ? 'single' : ''}` }))), index.h("tbody", { key: '5d52317a932d3281484411d1b6168c026f5ee473' }, this.records.length === 0 && (index.h("tr", { key: '1504f073d1422bd120587c89f217bae3a35441d1' }, index.h("td", { key: '14d43543ebce4b5353e0bd58c72d4865d374bec8', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.PCT.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.PCT.toString()).toFixed(2)}%` : null;
            return (index.h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true } }, index.h("td", { class: "text-left" }, index.h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, index.h("p", { class: `p-0 m-0 ${record.last_year?.SOURCE ? 'font-weight-bold' : ''}` }, record.SOURCE), record.last_year?.SOURCE && (index.h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.SOURCE)))), index.h("td", { class: "text-center" }, index.h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, index.h("p", { class: `p-0 m-0 ${record.last_year?.NIGHTS ? 'font-weight-bold' : ''}` }, record.NIGHTS), record.last_year?.NIGHTS && (index.h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.NIGHTS)))), index.h("td", { class: "text-right " }, index.h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, index.h("p", { class: `p-0 m-0 ${record.last_year?.REVENUE ? 'font-weight-bold' : ''}` }, utils.formatAmount(record.currency, record.REVENUE)), record.last_year?.REVENUE && (index.h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, utils.formatAmount(record.currency, record.last_year.REVENUE))))), index.h("td", { class: `sales-by-channel-table__progress-col ${!isSingleProperty ? 'single' : ''}` }, isSingleProperty && (index.h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.PCT && index.h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" }))))));
        })), isSingleProperty && (index.h("tfoot", { key: 'e9f322ee7d965d901bcb3822a67d928ae9b1d2c7' }, index.h("tr", { key: '3e83ce49b1c5357e387b8529d8664ef5bc006d03', style: { fontSize: '12px' } }, index.h("td", { key: '8f2d0171369661b7d710d04c3a777e05798e5246', colSpan: 4 }, index.h("div", { key: '32e4a25b224f2daaf53a735bc94d129b3cc318c1', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, index.h("div", { key: '0074639355158e1203bc02ae209ece8a8d9d46fd', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("div", { key: '3d19b4b6ba636c52a552a734adf3a64e1531803b', class: "legend bg-primary" }), index.h("p", { key: 'bc6150214687a44281b3802d920c03978505eb7d', class: "p-0 m-0" }, "Selected period ")), index.h("div", { key: 'ef0d25347f48e74cd93d58aa24f56521a595fbc6', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("div", { key: 'd7efa70251afd1309f2bf8d2aa4da01421ad221c', class: "legend secondary" }), index.h("p", { key: '0bc783d9de4e8a9b06f05a57f246045cf35de58b', class: "p-0 m-0" }, "Previous year")))))))), this.visibleCount < this.records.length && (index.h("div", { key: 'f8edca8b046a5f576f10ecb64d10c59bad099488', class: 'd-flex mx-auto' }, index.h("ir-button", { key: '1761e0ea6dfe6c2fb22fd62fc2a98c89b2f45a50', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
    }
    static get watchers() { return {
        "allowedProperties": ["handlePropertiesChange"]
    }; }
};
IrSalesByChannelTable.style = IrSalesByChannelTableStyle0 + IrSalesByChannelTableStyle1;

exports.ir_filters_panel = IrFiltersPanel;
exports.ir_m_combobox = IrMCombobox;
exports.ir_sales_by_channel_filters = IrSalesByChannelFilters;
exports.ir_sales_by_channel_table = IrSalesByChannelTable;

//# sourceMappingURL=ir-filters-panel_4.cjs.entry.js.map