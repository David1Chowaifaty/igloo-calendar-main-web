import { h } from "@stencil/core";
export class IrDropdown {
    constructor() {
        this.itemNames = [
            { item: 'Settings' },
            { item: 'Profile' },
            { item: 'Notifications', disabled: true },
            { item: 'Messages' },
            { item: 'Support', disabled: true },
            { item: 'Account' },
            { item: 'Dashboard' },
            { item: 'Logout' },
            { item: 'Help' },
            { item: 'Feedback' },
            { item: 'Settings1' },
            { item: 'Profile1' },
            { item: 'Notifications1' },
            { item: 'Messages1' },
            { item: 'Support1' },
            { item: 'Account1' },
            { item: 'Dashboard1' },
            { item: 'Logout1' },
            { item: 'Help1' },
            { item: 'Feedback1' },
            { item: 'Settings2' },
            { item: 'Profile2' },
            { item: 'Notifications2' },
            { item: 'Messages2' },
            { item: 'Support2' },
            { item: 'Account2' },
            { item: 'Dashboard2' },
            { item: 'Logout2' },
            { item: 'Help2' },
            { item: 'Feedback2' },
        ];
        this.rtl = false;
        this.search = true;
        this.dropdownTitle = 'Toggle DropDown';
        this.isDropdownVisible = false;
        this.searchQuery = '';
        this.selectedItemName = '';
        this.currentHighlightedIndex = -1;
        this.usingKeyboard = false;
    }
    handleKeyDown(event) {
        this.usingKeyboard = true;
        if (this.isDropdownVisible) {
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
                    if (this.isDropdownVisible) {
                        event.stopPropagation();
                        event.stopImmediatePropagation();
                    }
                    this.closeDropdown();
                    break;
                case 'Tab':
                    this.closeDropdown();
                    break;
            }
        }
    }
    handleClickOutside(event) {
        const outsideClick = typeof event.composedPath === 'function' && !event.composedPath().includes(this.el);
        if (outsideClick && this.isDropdownVisible) {
            event.stopPropagation();
            event.stopImmediatePropagation();
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
            newIndex = (newIndex + delta + this.itemNames.length) % this.itemNames.length;
        } while (this.itemNames[newIndex].disabled);
        this.currentHighlightedIndex = newIndex;
        this.scrollToItem(newIndex);
    }
    selectItem(index) {
        const item = this.itemNames[index];
        if (item && !item.disabled) {
            this.selectedItemName = item.item;
            this.itemSelect.emit(item.item);
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
            setTimeout(() => {
                this.calculateDropdownPosition();
                this.listRef.focus();
            }, 10);
        }
    }
    scrollToItem(index) {
        var _a;
        const item = (_a = this.listRef) === null || _a === void 0 ? void 0 : _a.querySelector(`li:nth-of-type(${index + 1})`);
        item === null || item === void 0 ? void 0 : item.scrollIntoView({ block: 'center' });
    }
    disableKeyboardPriority() {
        this.usingKeyboard = false;
    }
    calculateDropdownPosition() {
        const buttonRect = this.el.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const spaceAbove = buttonRect.top;
        const spaceBelow = viewportHeight - buttonRect.bottom;
        const dropdownHeight = 200;
        if (spaceBelow >= dropdownHeight || spaceBelow > spaceAbove) {
            this.listRef.setAttribute('data-position', 'below');
        }
        else {
            this.listRef.setAttribute('data-position', 'above');
        }
    }
    render() {
        return (h("div", { key: '5bd209efe511bf2edd569e1acdc02fc5da9c0322', class: "dropdown-container" }, h("button", { key: '24257541747c1f356fa1c5941d9772b53f5fdfba', ref: el => (this.buttonRef = el), type: "button", class: "SelectTrigger", "aria-haspopup": "listbox", "aria-expanded": this.isDropdownVisible.toString(), onClick: () => this.toggleDropdown() }, h("slot", { key: 'f7b3e5feb451261fc4b88f586b5c953e63b4eec9', name: "dropdown-trigger-body" }, this.selectedItemName || this.dropdownTitle), h("svg", { key: 'eee7ccc97d186340f235c520dcb77216576f5654', width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { key: '2a79274a97a66d279e99663218738ee0c6216992', d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" }))), this.isDropdownVisible && (h("ul", { class: "SelectContent", role: "listbox", ref: el => (this.listRef = el), tabindex: "-1" }, this.itemNames.map((item, index) => (h("li", { "data-disabled": item.disabled, "data-state": this.currentHighlightedIndex === index ? 'checked' : 'unchecked', "data-highlighted": this.currentHighlightedIndex === index ? 'true' : 'false', class: 'combobox-item', tabindex: item.disabled ? -1 : 0, role: "option", "aria-disabled": item.disabled ? 'true' : 'false', "aria-selected": this.selectedItemName === item.item ? 'true' : 'false', onClick: () => {
                this.selectItem(index);
                this.disableKeyboardPriority();
            }, onMouseOver: () => {
                if (!this.usingKeyboard && !item.disabled) {
                    this.currentHighlightedIndex = index;
                }
            } }, item.item, this.selectedItemName === item.item && (h("svg", { width: "20", height: "20", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z", fill: "var(--brand-600)", "fill-rule": "evenodd", "clip-rule": "evenodd" }))))))))));
    }
    static get is() { return "ir-dropdown"; }
    static get encapsulation() { return "shadow"; }
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
            "itemNames": {
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
                "defaultValue": "[\r\n    { item: 'Settings' },\r\n    { item: 'Profile' },\r\n    { item: 'Notifications', disabled: true },\r\n    { item: 'Messages' },\r\n    { item: 'Support', disabled: true },\r\n    { item: 'Account' },\r\n    { item: 'Dashboard' },\r\n    { item: 'Logout' },\r\n    { item: 'Help' },\r\n    { item: 'Feedback' },\r\n    { item: 'Settings1' },\r\n    { item: 'Profile1' },\r\n    { item: 'Notifications1' },\r\n    { item: 'Messages1' },\r\n    { item: 'Support1' },\r\n    { item: 'Account1' },\r\n    { item: 'Dashboard1' },\r\n    { item: 'Logout1' },\r\n    { item: 'Help1' },\r\n    { item: 'Feedback1' },\r\n    { item: 'Settings2' },\r\n    { item: 'Profile2' },\r\n    { item: 'Notifications2' },\r\n    { item: 'Messages2' },\r\n    { item: 'Support2' },\r\n    { item: 'Account2' },\r\n    { item: 'Dashboard2' },\r\n    { item: 'Logout2' },\r\n    { item: 'Help2' },\r\n    { item: 'Feedback2' },\r\n  ]"
            },
            "rtl": {
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
                "attribute": "rtl",
                "reflect": true,
                "defaultValue": "false"
            },
            "search": {
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
                    "text": ""
                },
                "attribute": "search",
                "reflect": true,
                "defaultValue": "true"
            },
            "dropdownTitle": {
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
                "attribute": "dropdown-title",
                "reflect": true,
                "defaultValue": "'Toggle DropDown'"
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
                "method": "itemSelect",
                "name": "itemSelect",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "keydown",
                "method": "handleKeyDown",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "click",
                "method": "handleClickOutside",
                "target": "body",
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
//# sourceMappingURL=ir-dropdown.js.map
