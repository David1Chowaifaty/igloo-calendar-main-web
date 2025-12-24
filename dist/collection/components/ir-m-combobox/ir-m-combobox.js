import { Host, h } from "@stencil/core";
import { v4 } from "uuid";
export class IrMCombobox {
    el;
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
        return (h(Host, { key: 'ca4fef4ef2aa1f65617927cbda620f8d9c3df275', class: { 'has-prefix': this.hasPrefix, 'has-suffix': this.hasSuffix } }, h("div", { key: 'ae6e64ab1f266aab6a711cfd75f35172a2faf194', class: "input-wrapper" }, h("span", { key: '9f85c376bdf8f221b92f6d2a96088eb319fe725f', class: "prefix-container", "aria-hidden": !this.hasPrefix }, h("slot", { key: 'eea5f5b48037fc97e5d4aa4f2f049e2d34efe579', name: "prefix", ref: el => (this.prefixSlotRef = el) })), h("input", { key: 'bfc3222385a1621ad20fd9333d27c59382138fb4', ref: el => (this.inputRef = el), type: "text", class: "form-control", role: "combobox", id: this.id, value: this.selectedOption?.label || '', placeholder: this.placeholder, "aria-expanded": String(this.isOpen), "aria-autocomplete": "list", "aria-controls": this.dropdownId, "data-reference": "parent", "aria-haspopup": "listbox", "aria-activedescendant": this.focusedIndex >= 0 ? `${this.dropdownId}-option-${this.focusedIndex}` : null, "aria-label": "Combobox", "aria-required": true, onKeyDown: this.handleKeyDown, onInput: this.handleInput }), h("span", { key: '0359524797f4810ea6dc993a13495682b6d1e983', class: "suffix-container", "aria-hidden": !this.hasSuffix }, h("slot", { key: '31ae470fb7edda781c919b5da5830b6122fb5fe0', name: "suffix", ref: el => (this.suffixSlotRef = el) }))), h("div", { key: 'b440b7a3c5ec218f837f7146b7b173a8d5afc3d6', class: `dropdown ${this.isOpen ? 'show' : ''}` }, h("div", { key: '7c45eee29abfac7b8451365ed1351c5ba1cc6903', ref: el => (this.dropdownRef = el), class: `dropdown-menu ${this.isOpen ? 'show' : ''}`, id: this.dropdownId, role: "listbox", "aria-expanded": String(this.isOpen) }, this.isCompositionMode ? (h("slot", null)) : this.useSlot ? (h("slot", { name: "dropdown-content" })) : ([
            this.loading && h("div", { class: "dropdown-item loading" }, "Loading..."),
            !this.loading && this.filteredOptions.length === 0 && h("div", { class: "dropdown-item no-results" }, "No results found"),
            !this.loading &&
                this.filteredOptions.map((option, index) => (h("button", { id: `${this.dropdownId}-option-${index}`, class: `dropdown-item ${this.focusedIndex === index ? 'active' : ''}`, role: "option", "aria-selected": this.selectedOption?.value === option.value ? 'true' : 'false', onClick: () => this.selectOption(option), onMouseEnter: () => (this.focusedIndex = index), innerHTML: option.html_content }, option.html_content ? null : option.label))),
        ])))));
    }
    static get is() { return "ir-m-combobox"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-m-combobox.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-m-combobox.css"]
        };
    }
    static get properties() {
        return {
            "placeholder": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Placeholder text displayed in the input when no option is selected."
                },
                "getter": false,
                "setter": false,
                "attribute": "placeholder",
                "reflect": false
            },
            "defaultOption": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ComboboxOption['value']",
                    "resolved": "string",
                    "references": {
                        "ComboboxOption": {
                            "location": "import",
                            "path": "./types",
                            "id": "src/components/ir-m-combobox/types.ts::ComboboxOption"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "default selected option for the combobox."
                },
                "getter": false,
                "setter": false,
                "attribute": "default-option",
                "reflect": false
            },
            "dataMode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "DataMode",
                    "resolved": "\"external\" | \"static\"",
                    "references": {
                        "DataMode": {
                            "location": "import",
                            "path": "./types",
                            "id": "src/components/ir-m-combobox/types.ts::DataMode"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "default",
                            "text": "'static'"
                        }],
                    "text": "Determines how the options are loaded into the component.\n- 'static': Uses the options passed through the `options` prop or the default internal list.\n- 'external': Emits search events for external handling, options updated via `options` prop."
                },
                "getter": false,
                "setter": false,
                "attribute": "data-mode",
                "reflect": false,
                "defaultValue": "'static'"
            },
            "options": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ComboboxOption[]",
                    "resolved": "ComboboxOption[]",
                    "references": {
                        "ComboboxOption": {
                            "location": "import",
                            "path": "./types",
                            "id": "src/components/ir-m-combobox/types.ts::ComboboxOption"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "List of available options for the combobox when using static data mode.\nIf empty, falls back to a default internal option list."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "debounceDelay": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "default",
                            "text": "300"
                        }],
                    "text": "Debounce delay in milliseconds for search events when using external data mode."
                },
                "getter": false,
                "setter": false,
                "attribute": "debounce-delay",
                "reflect": false,
                "defaultValue": "300"
            },
            "loading": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether to show loading state"
                },
                "getter": false,
                "setter": false,
                "attribute": "loading",
                "reflect": false,
                "defaultValue": "false"
            },
            "useSlot": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether to use slot content for custom dropdown rendering"
                },
                "getter": false,
                "setter": false,
                "attribute": "use-slot",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "isOpen": {},
            "selectedOption": {},
            "focusedIndex": {},
            "filteredOptions": {},
            "slotElements": {},
            "hasPrefix": {},
            "hasSuffix": {},
            "itemChildren": {}
        };
    }
    static get events() {
        return [{
                "method": "optionChange",
                "name": "optionChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when a user selects an option from the combobox.\nThe event payload contains the selected `ComboboxOption` object."
                },
                "complexType": {
                    "original": "ComboboxOption",
                    "resolved": "ComboboxOption",
                    "references": {
                        "ComboboxOption": {
                            "location": "import",
                            "path": "./types",
                            "id": "src/components/ir-m-combobox/types.ts::ComboboxOption"
                        }
                    }
                }
            }, {
                "method": "searchQuery",
                "name": "searchQuery",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the user types in the input field (debounced).\nUsed for external data fetching in 'external' data mode."
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "selectOptionFromSlot": {
                "complexType": {
                    "signature": "(option: ComboboxOption) => Promise<void>",
                    "parameters": [{
                            "name": "option",
                            "type": "ComboboxOption",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "ComboboxOption": {
                            "location": "import",
                            "path": "./types",
                            "id": "src/components/ir-m-combobox/types.ts::ComboboxOption"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Public method to select an option from external slot content",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "options",
                "methodName": "watchOptionsChanged"
            }, {
                "propName": "defaultOption",
                "methodName": "watchDefaultValueChanged"
            }, {
                "propName": "useSlot",
                "methodName": "watchUseSlotChanged"
            }];
    }
    static get listeners() {
        return [{
                "name": "keydown",
                "method": "handleDocumentKeyDown",
                "target": "document",
                "capture": false,
                "passive": false
            }, {
                "name": "comboboxItemSelect",
                "method": "handleComboboxItemSelect",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "comboboxItemRegister",
                "method": "handleComboboxItemRegister",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "comboboxItemUnregister",
                "method": "handleComboboxItemUnregister",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-m-combobox.js.map
