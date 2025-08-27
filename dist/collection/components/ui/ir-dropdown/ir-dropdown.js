import { h, Host } from "@stencil/core";
export class IrDropdown {
    constructor() {
        this.isOpen = false;
        this.focusedIndex = -1;
        this.itemChildren = [];
        this.mo = null;
        this.isComponentConnected = true;
        this.updateQueued = false;
        this.handleDocumentClick = (event) => {
            if (!this.isComponentConnected || !this.el.contains(event.target)) {
                this.closeDropdown();
            }
        };
        this.handleKeyDown = (event) => {
            if (!this.isComponentConnected)
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
    }
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
        var _a;
        this.isComponentConnected = false;
        document.removeEventListener('click', this.documentClickHandler);
        (_a = this.mo) === null || _a === void 0 ? void 0 : _a.disconnect();
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
        this.isOpen = true;
        // Initialize focus to the currently selected item
        this.focusedIndex = this.getSelectedItemIndex();
        // Immediate update instead of setTimeout
        this.updateItemElements();
    }
    closeDropdown() {
        this.isOpen = false;
        this.focusedIndex = -1;
        this.removeItemFocus();
    }
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
            element.classList.add('focused', 'active');
            element.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
    }
    selectItemElement(index) {
        if (index >= 0 && index < this.itemChildren.length) {
            const element = this.itemChildren[index];
            element.click();
        }
    }
    selectOption(option) {
        this.selectedOption = option;
        this.value = option;
        this.optionChange.emit(option);
        this.closeDropdown();
    }
    render() {
        return (h(Host, { key: '6c35b16f6d5314a05b196e190869ce95665c590a', class: `dropdown ${this.isOpen ? 'show' : ''}` }, h("div", { key: '97807dbc37fd98cc42b1f24c5d4d3acadbf02b2d', onClick: () => {
                this.isOpen = !this.isOpen;
                if (this.isOpen) {
                    this.updateItemElements();
                }
            }, class: "position-relative", onKeyDown: this.handleKeyDown, tabindex: "0" }, h("slot", { key: 'a079f0ab0a07175d88649d297229af8cc7a2b436', name: "trigger" }), h("div", { key: '7e5114844c851b390b0c725146e8a9da678e8356', class: "caret-icon" }, h("ir-icons", { key: '5f438886e6c8cf639421af4985e449d61e9df02f', name: !this.isOpen ? 'angle-down' : 'angle-up' }))), h("div", { key: '3d2986a71639d4cb292422b06be31b74049481b2', class: "dropdown-menu", role: "listbox", "aria-expanded": this.isOpen.toString() }, h("slot", { key: 'a3d1d0a6a0659976183e9d5b4122a231893dcd5d' }))));
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
                            "path": "/home/runner/work/modified-ir-webcmp/modified-ir-webcmp/src/components/ui/ir-dropdown/ir-dropdown.tsx",
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
                            "path": "/home/runner/work/modified-ir-webcmp/modified-ir-webcmp/src/components/ui/ir-dropdown/ir-dropdown.tsx",
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
