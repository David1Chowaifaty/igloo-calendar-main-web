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
        this.slotElements = [];
        this.itemChildren = [];
        this.mo = null;
        this.handleDocumentClick = (event) => {
            if (!this.el.contains(event.target)) {
                this.closeDropdown();
            }
        };
        this.handleKeyDown = (event) => {
            const maxIndex = this.slotElements.length - 1;
            switch (event.key) {
                case 'ArrowDown':
                    event.preventDefault();
                    if (!this.isOpen) {
                        this.openDropdown();
                    }
                    else {
                        this.focusedIndex = Math.min(this.focusedIndex + 1, maxIndex);
                        this.focusSlotElement(this.focusedIndex);
                    }
                    break;
                case 'ArrowUp':
                    event.preventDefault();
                    if (this.isOpen) {
                        this.focusedIndex = Math.max(this.focusedIndex - 1, 0);
                        this.focusSlotElement(this.focusedIndex);
                    }
                    else {
                        this.openDropdown();
                    }
                    break;
                case 'Enter':
                    event.preventDefault();
                    if (this.isOpen && this.focusedIndex >= 0) {
                        this.selectSlotElement(this.focusedIndex);
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
        this.collectItemChildren();
        this.selectedOption = this.value;
        // watch DOM changes to children
        this.mo = new MutationObserver(() => this.collectItemChildren());
        this.mo.observe(this.el, { childList: true, subtree: true });
    }
    componentDidLoad() {
        document.addEventListener('click', this.handleDocumentClick.bind(this));
        setTimeout(() => this.updateSlotElements(), 0);
        if (this.value) {
            setTimeout(() => this.updateDropdownItemValue(this.value), 100);
        }
    }
    disconnectedCallback() {
        var _a;
        document.removeEventListener('click', this.handleDocumentClick.bind(this));
        (_a = this.mo) === null || _a === void 0 ? void 0 : _a.disconnect();
    }
    handleDocumentKeyDown(event) {
        if (!this.isOpen)
            return;
        if (event.key === 'Escape') {
            this.closeDropdown();
        }
    }
    handleDropdownItemSelect(ev) {
        ev.stopPropagation();
        this.selectOption(ev.detail);
        ev.target.setAttribute('aria-selected', 'true');
    }
    handleDropdownItemRegister() {
        this.collectItemChildren();
    }
    handleDropdownItemUnregister() {
        this.collectItemChildren();
    }
    handleValueChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.updateDropdownItemValue(newValue);
        }
    }
    updateDropdownItemValue(value) {
        var _a;
        const el = (_a = this.slotElements) === null || _a === void 0 ? void 0 : _a.find(el => el.value === value);
        if (el) {
            el.setAttribute('aria-selected', 'true');
        }
    }
    openDropdown() {
        this.isOpen = true;
        this.focusedIndex = -1;
        setTimeout(() => this.updateSlotElements());
    }
    closeDropdown() {
        this.isOpen = false;
        this.focusedIndex = -1;
        this.removeSlotFocus();
    }
    collectItemChildren() {
        // find *direct or nested* items inside the dropdown container
        const items = Array.from(this.el.querySelectorAll('ir-dropdown-item'));
        this.itemChildren = items;
        setTimeout(() => this.updateSlotElementsForItems(), 0);
    }
    updateSlotElements() {
        if (!this.dropdownRef)
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
        this.value = option;
        this.optionChange.emit(option);
        this.closeDropdown();
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
    render() {
        return (h(Host, { key: 'bbdc5a9dfcf4ab2f38a5e8232fc57f7db92c8ec5', class: `dropdown ${this.isOpen ? 'show' : ''}` }, h("div", { key: 'a961cfe175d0bf879859f919b880ba73feb07757', onClick: () => {
                this.isOpen = !this.isOpen;
            }, class: "position-relative", onKeyDown: this.handleKeyDown }, h("slot", { key: '0bbb8a695f15daee3224e9ee2007bfcd16b8de75', name: "trigger" }), h("div", { key: '8ee8c6cac635d983a2adfa6b7c48591aa2fac7fd', class: "caret-icon" }, h("ir-icons", { key: 'c1bd87914dd22041b86624c155489dcf7ecbc2d6', name: !this.isOpen ? 'angle-down' : 'angle-up' }))), h("div", { key: '039a93750a8aa2ff1e6b3150c0c427d884d694d2', ref: el => (this.dropdownRef = el), class: "dropdown-menu" }, h("slot", { key: '809d03941b6bdf44f9e75d9e2643d85d3c5542d1' }))));
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
        "slotElements": [32],
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