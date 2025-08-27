import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './ir-icons2.js';

const irDropdownCss = ".dropdown-menu.sc-ir-dropdown{z-index:1000;width:100%;max-height:300px;overflow-y:auto}.dropdown.nav-item.show.sc-ir-dropdown .dropdown-menu.sc-ir-dropdown{display:block}.caret-icon.sc-ir-dropdown{position:absolute;top:50%;transform:translateY(-55%);right:0.25rem}";
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