import { h, Host } from "@stencil/core";
export class IrDropdown {
    el;
    value;
    disabled = false;
    caret = true;
    isOpen = false;
    selectedOption;
    focusedIndex = -1;
    itemChildren = [];
    mo = null;
    documentClickHandler;
    isComponentConnected = true;
    updateQueued = false;
    /**
     * Emitted when a user selects an option from the combobox.
     * The event payload contains the selected `DropdownItem` object.
     */
    optionChange;
    componentWillLoad() {
        this.selectedOption = this.value;
        this.documentClickHandler = this.handleDocumentClick.bind(this);
        this.collectItemChildren();
        // Optimized mutation observer with debouncing
        this.mo = new MutationObserver(() => {
            if (!this.updateQueued) {
                this.updateQueued = true;
                requestAnimationFrame(() => {
                    if (this.isComponentConnected) {
                        this.collectItemChildren();
                        this.updateQueued = false;
                    }
                });
            }
        });
        this.mo.observe(this.el, { childList: true, subtree: true });
    }
    componentDidLoad() {
        document.addEventListener('click', this.documentClickHandler, { passive: true });
        // Single RAF call instead of multiple setTimeouts
        requestAnimationFrame(() => {
            if (this.isComponentConnected) {
                this.updateItemElements();
                if (this.value) {
                    this.updateDropdownItemValue(this.value);
                }
            }
        });
    }
    disconnectedCallback() {
        this.isComponentConnected = false;
        document.removeEventListener('click', this.documentClickHandler);
        this.mo?.disconnect();
        this.mo = null;
    }
    handleDocumentKeyDown(event) {
        if (!this.isOpen || !this.isComponentConnected)
            return;
        if (event.key === 'Escape') {
            this.closeDropdown();
        }
    }
    handleDropdownItemSelect(ev) {
        if (!this.isComponentConnected)
            return;
        ev.stopPropagation();
        this.selectOption(ev.detail);
        ev.target.setAttribute('aria-selected', 'true');
    }
    handleDropdownItemRegister() {
        if (!this.isComponentConnected)
            return;
        this.collectItemChildren();
    }
    handleDropdownItemUnregister() {
        if (!this.isComponentConnected)
            return;
        this.collectItemChildren();
    }
    handleValueChange(newValue, oldValue) {
        if (newValue !== oldValue && this.isComponentConnected) {
            this.updateDropdownItemValue(newValue);
        }
    }
    updateDropdownItemValue(value) {
        // Clear previous selections immediately
        this.itemChildren.forEach(el => el.removeAttribute('aria-selected'));
        // Set new selection
        const el = this.itemChildren.find(el => el.value === value);
        if (el) {
            el.setAttribute('aria-selected', 'true');
        }
    }
    getSelectedItemIndex() {
        if (!this.value)
            return -1;
        return this.itemChildren.findIndex(item => item.value === this.value);
    }
    openDropdown() {
        try {
            this.isOpen = true;
            // Initialize focus to the currently selected item
            this.focusedIndex = this.getSelectedItemIndex();
            // Immediate update instead of setTimeout
            this.updateItemElements();
            // Auto-scroll to selected item if it exists
            if (this.focusedIndex >= 0) {
                requestAnimationFrame(() => {
                    this.scrollToSelectedItem();
                });
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    closeDropdown() {
        this.isOpen = false;
        this.focusedIndex = -1;
        this.removeItemFocus();
    }
    handleDocumentClick = (event) => {
        if (!this.isComponentConnected || !this.el.contains(event.target)) {
            this.closeDropdown();
        }
    };
    collectItemChildren() {
        if (!this.isComponentConnected)
            return;
        const items = Array.from(this.el.querySelectorAll('ir-dropdown-item'));
        this.itemChildren = items;
        // Immediate update instead of setTimeout
        this.updateItemElements();
    }
    updateItemElements() {
        if (!this.isComponentConnected)
            return;
        // Use the collected item children directly
        this.itemChildren.forEach((el, index) => {
            el.setAttribute('data-slot-index', String(index));
            el.setAttribute('role', 'option');
            el.setAttribute('tabindex', '-1');
        });
    }
    removeItemFocus() {
        this.itemChildren.forEach(element => {
            element.classList.remove('focused', 'active');
            // Don't remove aria-selected as it indicates selection, not focus
        });
    }
    focusItemElement(index) {
        this.removeItemFocus();
        if (index >= 0 && index < this.itemChildren.length) {
            const element = this.itemChildren[index];
            element.classList.add('focused');
            element.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
    }
    selectItemElement(index) {
        if (index >= 0 && index < this.itemChildren.length) {
            const element = this.itemChildren[index];
            element.click();
        }
    }
    scrollToSelectedItem() {
        if (this.focusedIndex >= 0 && this.focusedIndex < this.itemChildren.length) {
            const selectedElement = this.itemChildren[this.focusedIndex];
            if (selectedElement) {
                selectedElement.scrollIntoView({
                    block: 'nearest',
                    behavior: 'smooth',
                    inline: 'nearest',
                });
            }
        }
    }
    handleKeyDown = (event) => {
        if (!this.isComponentConnected || this.disabled)
            return;
        const maxIndex = this.itemChildren.length - 1;
        switch (event.key) {
            case 'ArrowDown':
                event.preventDefault();
                if (!this.isOpen) {
                    this.openDropdown();
                    // After opening, if we have a selection, start from next item
                    if (this.focusedIndex >= 0 && this.focusedIndex < maxIndex) {
                        this.focusedIndex++;
                        this.focusItemElement(this.focusedIndex);
                    }
                    else if (this.focusedIndex === -1) {
                        // No selection, start from first item
                        this.focusedIndex = 0;
                        this.focusItemElement(this.focusedIndex);
                    }
                    else if (this.focusedIndex === maxIndex) {
                        // At last item, wrap to first
                        this.focusedIndex = 0;
                        this.focusItemElement(this.focusedIndex);
                    }
                }
                else if (maxIndex >= 0) {
                    this.focusedIndex = this.focusedIndex < maxIndex ? this.focusedIndex + 1 : 0;
                    this.focusItemElement(this.focusedIndex);
                }
                break;
            case 'ArrowUp':
                event.preventDefault();
                if (!this.isOpen) {
                    this.openDropdown();
                    // After opening, if we have a selection, start from previous item
                    if (this.focusedIndex > 0) {
                        this.focusedIndex--;
                        this.focusItemElement(this.focusedIndex);
                    }
                    else if (this.focusedIndex === -1) {
                        // No selection, start from last item
                        this.focusedIndex = maxIndex;
                        this.focusItemElement(this.focusedIndex);
                    }
                    else if (this.focusedIndex === 0) {
                        // At first item, wrap to last
                        this.focusedIndex = maxIndex;
                        this.focusItemElement(this.focusedIndex);
                    }
                }
                else if (maxIndex >= 0) {
                    this.focusedIndex = this.focusedIndex > 0 ? this.focusedIndex - 1 : maxIndex;
                    this.focusItemElement(this.focusedIndex);
                }
                break;
            case 'Enter':
                event.preventDefault();
                if (this.isOpen && this.focusedIndex >= 0) {
                    this.selectItemElement(this.focusedIndex);
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
        this.value = option;
        this.optionChange.emit(option);
        this.closeDropdown();
    }
    render() {
        return (h(Host, { key: '881a39ac89d2f2c16fb796ed09855797b71bceb5', class: `dropdown ${this.isOpen ? 'show' : ''}` }, h("div", { key: '5093287c5066ae8ac8dbbed8cf31cd3c22c36650', onClick: () => {
                if (this.disabled)
                    return;
                if (this.isOpen) {
                    this.closeDropdown();
                }
                else {
                    this.openDropdown();
                }
            }, "aria-disabled": String(this.disabled), class: `dropdown-trigger ${this.disabled ? 'disabled' : ''}`, onKeyDown: this.handleKeyDown, tabindex: "0" }, h("slot", { key: '253f1e503ac60ae8a5dfe9cd634e539932206e40', name: "trigger" }), this.caret && (h("div", { key: 'de9487c07754f17e961886e7a2c5acaa698831a4', class: `caret-icon ${this.disabled ? 'disabled' : ''}` }, h("ir-icons", { key: 'ba71acc588398481593c1a12d28647514be07b20', name: !this.isOpen ? 'angle-down' : 'angle-up' })))), h("div", { key: 'afe28cdf062d7c6636298a8c71c0cea20073d327', class: "dropdown-menu", role: "listbox", "aria-expanded": this.isOpen.toString() }, h("slot", { key: '08591f85ffe9eea3541b5588115bed9d9cf04557' }))));
    }
    static get is() { return "ir-dropdown"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-dropdown.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-dropdown.css"]
        };
    }
    static get properties() {
        return {
            "value": {
                "type": "any",
                "mutable": true,
                "complexType": {
                    "original": "DropdownItem['value']",
                    "resolved": "number | string",
                    "references": {
                        "DropdownItem": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-dropdown/ir-dropdown.tsx",
                            "id": "src/components/ui/ir-dropdown/ir-dropdown.tsx::DropdownItem"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "value",
                "reflect": true
            },
            "disabled": {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "disabled",
                "reflect": true,
                "defaultValue": "false"
            },
            "caret": {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "caret",
                "reflect": true,
                "defaultValue": "true"
            }
        };
    }
    static get states() {
        return {
            "isOpen": {},
            "selectedOption": {},
            "focusedIndex": {},
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
                    "text": "Emitted when a user selects an option from the combobox.\nThe event payload contains the selected `DropdownItem` object."
                },
                "complexType": {
                    "original": "DropdownItem['value']",
                    "resolved": "number | string",
                    "references": {
                        "DropdownItem": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-dropdown/ir-dropdown.tsx",
                            "id": "src/components/ui/ir-dropdown/ir-dropdown.tsx::DropdownItem"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "handleValueChange"
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
                "name": "dropdownItemSelect",
                "method": "handleDropdownItemSelect",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "dropdownItemRegister",
                "method": "handleDropdownItemRegister",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "dropdownItemUnregister",
                "method": "handleDropdownItemUnregister",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-dropdown.js.map
