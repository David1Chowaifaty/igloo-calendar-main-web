import { createPopper } from "@popperjs/core";
import { h, Fragment } from "@stencil/core";
export class IrMenu {
    constructor() {
        this.data = [];
        this.menuItem = 'Toggle Menu';
        this.isDropdownVisible = false;
        this.searchQuery = '';
        this.selectedItemName = '';
        this.currentHighlightedIndex = -1;
        this.usingKeyboard = false;
    }
    componentWillLoad() {
        var _a;
        this.selectedItemName = (_a = this.data[0].item) !== null && _a !== void 0 ? _a : '';
    }
    handleKeyDown(event) {
        if (!this.isDropdownVisible) {
            return;
        }
        switch (event.key) {
            case 'ArrowDown':
                event.preventDefault();
                this.moveHighlight(1);
                break;
            case 'ArrowUp':
                event.preventDefault();
                this.moveHighlight(-1);
                break;
            case 'Enter':
                event.preventDefault();
                if (this.currentHighlightedIndex !== -1) {
                    this.selectItem(this.currentHighlightedIndex);
                }
                break;
            case 'Escape':
                event.preventDefault();
                event.stopPropagation();
                event.stopImmediatePropagation();
                this.closeDropdown();
                break;
            case 'Tab':
                this.closeDropdown();
                break;
        }
    }
    componentDidLoad() {
        this.popoverInstance = createPopper(this.buttonRef, this.contentElement, {
            placement: 'bottom-end',
            strategy: 'fixed',
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 4],
                    },
                },
                {
                    name: 'preventOverflow',
                    options: {
                        boundary: 'viewport',
                        padding: 10,
                    },
                },
            ],
        });
    }
    handleDocumentClick(event) {
        // const target = event.target as HTMLElement;
        // if (!this.el.contains(target)) {
        //   this.isDropdownVisible = false;
        // }
        const outsideClick = typeof event.composedPath === 'function' && !event.composedPath().includes(this.el);
        if (outsideClick && this.isDropdownVisible) {
            this.isDropdownVisible = false;
        }
    }
    handleMouseMove() {
        if (this.usingKeyboard)
            this.disableKeyboardPriority();
    }
    moveHighlight(delta) {
        let newIndex = this.currentHighlightedIndex;
        do {
            newIndex = (newIndex + delta + this.data.length) % this.data.length;
        } while (this.data[newIndex].disabled);
        this.currentHighlightedIndex = newIndex;
        this.scrollToItem(newIndex);
    }
    selectItem(index) {
        const item = this.data[index];
        if (item && !item.disabled) {
            this.selectedItemName = item.item;
            this.menuItemClick.emit(item.id);
            this.closeDropdown();
        }
    }
    closeDropdown() {
        this.isDropdownVisible = false;
        this.buttonRef.focus();
    }
    toggleDropdown() {
        this.isDropdownVisible = !this.isDropdownVisible;
        if (this.isDropdownVisible) {
            this.currentHighlightedIndex = -1;
            this.adjustPopoverPlacement();
        }
    }
    adjustPopoverPlacement() {
        requestAnimationFrame(() => {
            const rect = this.contentElement.getBoundingClientRect();
            if (rect.bottom > window.innerHeight) {
                this.popoverInstance.setOptions({
                    placement: 'top-end',
                });
            }
            else if (rect.top < 0) {
                this.popoverInstance.setOptions({
                    placement: 'bottom-end',
                });
            }
            this.popoverInstance.update();
        });
    }
    scrollToItem(index) {
        var _a;
        const item = (_a = this.listRef) === null || _a === void 0 ? void 0 : _a.querySelector(`li:nth-of-type(${index + 1})`);
        item === null || item === void 0 ? void 0 : item.scrollIntoView({ block: 'center' });
    }
    disableKeyboardPriority() {
        this.usingKeyboard = false;
    }
    disconnectedCallback() {
        if (this.popoverInstance) {
            this.popoverInstance.destroy();
        }
    }
    render() {
        return (h(Fragment, { key: '088b9531624965337757a46d2ecca7f7f013c2f0' }, h("button", { key: '6cffa90d963bb291853a428c704d71e73da43000', ref: el => (this.buttonRef = el), type: "button", "aria-haspopup": "listbox", "aria-expanded": this.isDropdownVisible ? 'true' : 'false', onClick: () => {
                this.toggleDropdown();
            } }, h("slot", { key: '791c9275dc19b1b55934153422fee3544f1b32ca', name: "menu-trigger" }, h("div", { key: '54e3257528c3fec41ab95015996c0d7c99b56403', class: "SelectTrigger" }, this.selectedItemName || this.menuItem, h("svg", { key: 'ec572e21c44850c51a3a67abf79c430b1cfede61', width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { key: '2291ba3c6c3d1c4eaaefbdaacfde97183947ff29', d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" }))))), h("div", { key: '5c619dc819996438fe2683a7b88ed59f9ccacc64', ref: el => (this.contentElement = el), class: "SelectContent", "data-state": this.isDropdownVisible ? 'open' : 'closed' }, this.isDropdownVisible && (h("ul", { key: 'dc87e053dcc5b7381e0122b789fcbd494ad0c415', role: "menu", ref: el => (this.listRef = el), tabindex: "-1" }, this.data.map((item, index) => (h("li", { "data-disabled": item.disabled, "data-state": this.currentHighlightedIndex === index ? 'checked' : 'unchecked', "data-highlighted": this.currentHighlightedIndex === index ? 'true' : 'false', class: 'menu-item', tabindex: -1, role: "menuitem", "aria-disabled": item.disabled ? 'true' : 'false', "aria-selected": this.selectedItemName === item.item ? 'true' : 'false', onClick: () => {
                this.selectItem(index);
                this.disableKeyboardPriority();
            }, onMouseOver: () => {
                if (item.disabled) {
                    return;
                }
                this.currentHighlightedIndex = index;
            } }, item.item, this.selectedItemName === item.item && (h("svg", { width: "20", height: "20", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z", fill: "var(--brand-600)", "fill-rule": "evenodd", "clip-rule": "evenodd" })))))))))));
    }
    static get is() { return "ir-menu"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-menu.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-menu.css"]
        };
    }
    static get properties() {
        return {
            "data": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IItems[]",
                    "resolved": "IItems[]",
                    "references": {
                        "IItems": {
                            "location": "global",
                            "id": "global::IItems"
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
                "defaultValue": "[]"
            },
            "menuItem": {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "menu-item",
                "reflect": true,
                "defaultValue": "'Toggle Menu'"
            }
        };
    }
    static get states() {
        return {
            "isDropdownVisible": {},
            "searchQuery": {},
            "selectedItemName": {},
            "currentHighlightedIndex": {},
            "usingKeyboard": {}
        };
    }
    static get events() {
        return [{
                "method": "menuItemClick",
                "name": "menuItemClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string | number",
                    "resolved": "number | string",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "keydown",
                "method": "handleKeyDown",
                "target": "body",
                "capture": false,
                "passive": false
            }, {
                "name": "click",
                "method": "handleDocumentClick",
                "target": "document",
                "capture": false,
                "passive": false
            }, {
                "name": "mousemove",
                "method": "handleMouseMove",
                "target": undefined,
                "capture": false,
                "passive": true
            }];
    }
}
//# sourceMappingURL=ir-menu.js.map
