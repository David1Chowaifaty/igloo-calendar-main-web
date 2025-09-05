import { Host, h } from "@stencil/core";
import { v4 } from "uuid";
export class IrMCombobox {
    constructor() {
        /**
         * Determines how the options are loaded into the component.
         * - 'static': Uses the options passed through the `options` prop or the default internal list.
         * - 'external': Emits search events for external handling, options updated via `options` prop.
         *
         * @default 'static'
         */
        this.dataMode = 'static';
        /**
         * List of available options for the combobox when using static data mode.
         * If empty, falls back to a default internal option list.
         */
        this.options = [];
        /**
         * Debounce delay in milliseconds for search events when using external data mode.
         * @default 300
         */
        this.debounceDelay = 300;
        /**
         * Whether to show loading state
         */
        this.loading = false;
        /**
         * Whether to use slot content for custom dropdown rendering
         */
        this.useSlot = false;
        this.isOpen = false;
        this.focusedIndex = -1;
        this.filteredOptions = [];
        this.slotElements = [];
        this.hasPrefix = false;
        this.hasSuffix = false;
        this.itemChildren = [];
        this.id = v4();
        this.dropdownId = `dropdown-${this.id}`;
        this.mo = null;
        this.handleDocumentClick = (event) => {
            if (!this.el.contains(event.target)) {
                this.closeDropdown();
            }
        };
        this.updateAffixPresence = () => {
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
        this.handleKeyDown = (event) => {
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
        this.handleInput = (event) => {
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
    }
    /**
     * Public method to select an option from external slot content
     */
    async selectOptionFromSlot(option) {
        this.selectOption(option);
    }
    get isCompositionMode() {
        return this.itemChildren.length > 0;
    }
    watchOptionsChanged(newOptions) {
        this.filteredOptions = newOptions || [];
        if (this.useSlot) {
            this.updateSlotElements();
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
        var _a, _b;
        document.addEventListener('click', this.handleDocumentClick.bind(this));
        // existing stuff
        if (this.useSlot) {
            setTimeout(() => this.updateSlotElements(), 0);
        }
        setTimeout(() => this.updateAffixPresence(), 0);
        (_a = this.prefixSlotRef) === null || _a === void 0 ? void 0 : _a.addEventListener('slotchange', this.updateAffixPresence);
        (_b = this.suffixSlotRef) === null || _b === void 0 ? void 0 : _b.addEventListener('slotchange', this.updateAffixPresence);
    }
    disconnectedCallback() {
        var _a, _b, _c;
        document.removeEventListener('click', this.handleDocumentClick.bind(this));
        if (this.debounceTimeout)
            clearTimeout(this.debounceTimeout);
        (_a = this.prefixSlotRef) === null || _a === void 0 ? void 0 : _a.removeEventListener('slotchange', this.updateAffixPresence);
        (_b = this.suffixSlotRef) === null || _b === void 0 ? void 0 : _b.removeEventListener('slotchange', this.updateAffixPresence);
        (_c = this.mo) === null || _c === void 0 ? void 0 : _c.disconnect();
    }
    handleDocumentKeyDown(event) {
        var _a;
        if (!this.isOpen)
            return;
        if (event.key === 'Escape') {
            this.closeDropdown();
            (_a = this.inputRef) === null || _a === void 0 ? void 0 : _a.focus();
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
    initializeOptions() {
        this.filteredOptions = this.options.length > 0 ? this.options : [];
    }
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
    selectOption(option) {
        this.selectedOption = option;
        this.optionChange.emit(option);
        this.closeDropdown();
        this.inputRef.focus();
    }
    scrollToFocusedOption() {
        if (this.focusedIndex < 0 || !this.dropdownRef || this.useSlot)
            return;
        const focusedElement = this.dropdownRef.querySelector(`#${this.dropdownId}-option-${this.focusedIndex}`);
        if (focusedElement) {
            focusedElement.scrollIntoView({ block: 'nearest' });
        }
    }
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
        var _a;
        return (h(Host, { key: '5669a4bd9a5ed81afb585817ead9eb9dde8ab6f0', class: { 'has-prefix': this.hasPrefix, 'has-suffix': this.hasSuffix } }, h("div", { key: 'fbf51ce153f1d17589850579c25fab1241ba580f', class: "input-wrapper" }, h("span", { key: 'cfe878f63bdd1f1fca8649a2611e53e1c1a35f90', class: "prefix-container", "aria-hidden": !this.hasPrefix }, h("slot", { key: '2b321a056158bcecc003cd7d1fb3c4c35b627053', name: "prefix", ref: el => (this.prefixSlotRef = el) })), h("input", { key: '76dcfd078c5e12e350c2f9f47b4ced4135dd81d7', ref: el => (this.inputRef = el), type: "text", class: "form-control", role: "combobox", id: this.id, value: ((_a = this.selectedOption) === null || _a === void 0 ? void 0 : _a.label) || '', placeholder: this.placeholder, "aria-expanded": String(this.isOpen), "aria-autocomplete": "list", "aria-controls": this.dropdownId, "data-reference": "parent", "aria-haspopup": "listbox", "aria-activedescendant": this.focusedIndex >= 0 ? `${this.dropdownId}-option-${this.focusedIndex}` : null, "aria-label": "Combobox", "aria-required": true, onKeyDown: this.handleKeyDown, onInput: this.handleInput }), h("span", { key: '63941b0a25d5d01b1b8b74cde42de990565831d3', class: "suffix-container", "aria-hidden": !this.hasSuffix }, h("slot", { key: '42b888a0907c5ae0e2fe7978b4170f9d330b275d', name: "suffix", ref: el => (this.suffixSlotRef = el) }))), h("div", { key: '34ed9abf78ff70e93e459ba29c85545aa183b425', class: `dropdown ${this.isOpen ? 'show' : ''}` }, h("div", { key: '431fc4e316c0cfa72f622e22bb392febfcb15f39', ref: el => (this.dropdownRef = el), class: `dropdown-menu ${this.isOpen ? 'show' : ''}`, id: this.dropdownId, role: "listbox", "aria-expanded": String(this.isOpen) }, this.isCompositionMode ? (h("slot", null)) : this.useSlot ? (h("slot", { name: "dropdown-content" })) : ([
            this.loading && h("div", { class: "dropdown-item loading" }, "Loading..."),
            !this.loading && this.filteredOptions.length === 0 && h("div", { class: "dropdown-item no-results" }, "No results found"),
            !this.loading &&
                this.filteredOptions.map((option, index) => {
                    var _a;
                    return (h("button", { id: `${this.dropdownId}-option-${index}`, class: `dropdown-item ${this.focusedIndex === index ? 'active' : ''}`, role: "option", "aria-selected": ((_a = this.selectedOption) === null || _a === void 0 ? void 0 : _a.value) === option.value ? 'true' : 'false', onClick: () => this.selectOption(option), onMouseEnter: () => (this.focusedIndex = index), innerHTML: option.html_content }, option.html_content ? null : option.label));
                }),
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
