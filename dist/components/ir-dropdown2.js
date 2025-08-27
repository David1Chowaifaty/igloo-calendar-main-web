import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './ir-icons2.js';

const irDropdownCss = ".dropdown-menu.sc-ir-dropdown{z-index:1000;width:100%;max-height:300px;overflow-y:auto}.dropdown.nav-item.show.sc-ir-dropdown .dropdown-menu.sc-ir-dropdown{display:block}.caret-icon.sc-ir-dropdown{position:absolute;top:50%;transform:translateY(-55%);right:0.25rem;z-index:99999}";
const IrDropdownStyle0 = irDropdownCss;

const IrDropdown = /*@__PURE__*/ proxyCustomElement(class IrDropdown extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.optionChange = createEvent(this, "optionChange", 7);
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
    selectOption(option) {
        this.selectedOption = option;
        this.value = option;
        this.optionChange.emit(option);
        this.closeDropdown();
    }
    render() {
        return (h(Host, { key: '1a33b040ad6134a70040e10c7b05ab94d304607d', class: `dropdown ${this.isOpen ? 'show' : ''}` }, h("div", { key: '0ced1d6c34523c365fe798303b75942a574cfe52', onClick: () => {
                if (this.isOpen) {
                    this.closeDropdown();
                }
                else {
                    this.openDropdown();
                }
            }, class: "position-relative", onKeyDown: this.handleKeyDown, tabindex: "0" }, h("slot", { key: '20cf8533b916d8681f4c4af811f4015c9fe086e0', name: "trigger" }), h("div", { key: 'e5a1523f72bc1ef04988767af797aa29c8f5a3b2', class: "caret-icon" }, h("ir-icons", { key: 'eb6b61ebf4f74bb5dd116f6781ddf9aa2a80c680', name: !this.isOpen ? 'angle-down' : 'angle-up' }))), h("div", { key: '3565626baba126c3d7c557e7b5ecc8aa39e9b112', class: "dropdown-menu", role: "listbox", "aria-expanded": this.isOpen.toString() }, h("slot", { key: '1837c4c9afc827ca9b962729912a769631e4e812' }))));
    }
    get el() { return this; }
    static get watchers() { return {
        "value": ["handleValueChange"]
    }; }
    static get style() { return IrDropdownStyle0; }
}, [6, "ir-dropdown", {
        "value": [1544],
        "isOpen": [32],
        "selectedOption": [32],
        "focusedIndex": [32],
        "itemChildren": [32]
    }, [[4, "keydown", "handleDocumentKeyDown"], [0, "dropdownItemSelect", "handleDropdownItemSelect"], [0, "dropdownItemRegister", "handleDropdownItemRegister"], [0, "dropdownItemUnregister", "handleDropdownItemUnregister"]], {
        "value": ["handleValueChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-dropdown", "ir-icons"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-dropdown":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrDropdown);
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrDropdown as I, defineCustomElement as d };

//# sourceMappingURL=ir-dropdown2.js.map