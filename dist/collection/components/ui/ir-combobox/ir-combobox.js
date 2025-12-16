import locales from "../../../stores/locales.store";
import { h, Fragment } from "@stencil/core";
import { v4 } from "uuid";
export class IrCombobox {
    el;
    /**
     * The list of items displayed in the combobox.
     */
    data = [];
    /**
     * Debounce duration in milliseconds for search input.
     */
    duration = 300;
    /**
     * Placeholder text for the input field.
     */
    placeholder;
    /**
     * The current value of the input field.
     */
    value;
    /**
     * Disables the combobox input when set to true.
     */
    disabled = false;
    /**
     * Autofocuses the input field when true.
     */
    autoFocus = false;
    /**
     * Unique identifier for the input element.
     */
    input_id = v4();
    /**
     * The index of the currently selected item.
     */
    selectedIndex = -1;
    /**
     * Tracks the actual focused index during keyboard navigation.
     */
    actualIndex = -1;
    /**
     * Whether the dropdown is visible.
     */
    isComboBoxVisible = false;
    /**
     * Indicates if the component is in loading state.
     */
    isLoading = true;
    /**
     * Whether a selection was made before blur.
     */
    isItemSelected;
    /**
     * The current input value typed by the user.
     */
    inputValue = '';
    /**
     * Filtered list based on user input.
     */
    filteredData = [];
    /**
     * Determines if the input should automatically receive focus.
     */
    componentShouldAutoFocus = false;
    /**
     * Emitted when a selection is made from the combobox.
     */
    comboboxValueChange;
    /**
     * Emitted when the input is cleared by the user.
     */
    inputCleared;
    /**
     * Emits a toast notification.
     */
    toast;
    inputRef;
    debounceTimer;
    blurTimeout;
    componentWillLoad() {
        this.filteredData = this.data;
    }
    componentDidLoad() {
        if (this.autoFocus) {
            this.focusInput();
        }
    }
    watchHandler(newValue, oldValue) {
        if (newValue !== oldValue && newValue === true) {
            this.focusInput();
        }
    }
    handleDocumentClick(event) {
        const target = event.target;
        if (!this.el.contains(target)) {
            this.isComboBoxVisible = false;
        }
    }
    disconnectedCallback() {
        clearTimeout(this.debounceTimer);
        clearTimeout(this.blurTimeout);
        this.inputRef?.removeEventListener('blur', this.handleBlur);
        this.inputRef?.removeEventListener('click', this.selectItem);
        this.inputRef?.removeEventListener('keydown', this.handleKeyDown);
        this.inputRef?.removeEventListener('focus', this.handleFocus);
    }
    /**
     * Handles keyboard navigation and selection inside the combobox.
     */
    handleKeyDown(event) {
        const dataSize = this.filteredData.length;
        if (dataSize > 0) {
            switch (event.key) {
                case 'ArrowUp':
                    event.preventDefault();
                    this.selectedIndex = (this.selectedIndex - 1 + dataSize) % dataSize;
                    this.adjustScrollPosition();
                    break;
                case 'ArrowDown':
                    event.preventDefault();
                    this.selectedIndex = (this.selectedIndex + 1) % dataSize;
                    this.adjustScrollPosition();
                    break;
                // case 'Enter':
                // case ' ':
                // case 'ArrowRight':
                //   event.preventDefault();
                //   this.selectItem(this.selectedIndex);
                //   break;
                case 'Escape':
                    event.stopImmediatePropagation();
                    event.stopPropagation();
                    this.inputRef?.blur();
                    this.isComboBoxVisible = false;
                    break;
            }
        }
    }
    /**
     * Focuses the combobox input element.
     */
    focusInput() {
        requestAnimationFrame(() => {
            this.inputRef?.focus();
        });
    }
    /**
     * Scrolls the selected item into view when navigating.
     */
    adjustScrollPosition() {
        const selectedItem = this.el?.querySelector(`[data-selected]`);
        if (!selectedItem)
            return;
        selectedItem.scrollIntoView({
            block: 'center',
        });
    }
    /**
     * Selects an item at the given index.
     */
    selectItem(index) {
        if (this.filteredData[index]) {
            this.isItemSelected = true;
            this.comboboxValueChange.emit({ key: 'select', data: this.filteredData[index].id });
            this.inputValue = '';
            this.resetCombobox();
            if (this.autoFocus) {
                this.focusInput();
            }
        }
    }
    /**
     * Debounces calls to the fetch data function.
     */
    debounceFetchData() {
        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(() => {
            this.fetchData();
        }, this.duration);
    }
    /**
     * Makes the dropdown visible on input focus.
     */
    handleFocus() {
        this.isComboBoxVisible = true;
    }
    /**
     * Resets the combobox state and optionally blurs the input.
     */
    resetCombobox(withBlur = true) {
        if (withBlur) {
            this.inputRef?.blur();
        }
        this.selectedIndex = -1;
        this.isComboBoxVisible = false;
    }
    /**
     * Filters data based on input value.
     */
    async fetchData() {
        try {
            this.isLoading = true;
            this.filteredData = this.data.filter(d => d.name.toLowerCase().startsWith(this.inputValue));
            this.selectedIndex = -1;
        }
        catch (error) {
            console.log('error', error);
        }
        finally {
            this.isLoading = false;
        }
    }
    /**
     * Updates input value and triggers search.
     */
    handleInputChange(event) {
        this.inputValue = event.target.value;
        if (this.inputValue) {
            this.debounceFetchData();
        }
        else {
            this.filteredData = this.data;
        }
    }
    /**
     * Clears input or resets dropdown if nothing selected on blur.
     */
    handleBlur() {
        this.blurTimeout = setTimeout(() => {
            if (!this.isItemSelected) {
                this.inputValue = '';
                this.resetCombobox();
            }
            else {
                this.isItemSelected = false;
            }
        }, 300);
    }
    /**
     * Handles key navigation on individual items.
     */
    handleItemKeyDown(event, index) {
        if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowRight') {
            this.selectItem(index);
            event.preventDefault();
        }
        else if (event.key === 'Escape') {
            this.isComboBoxVisible = false;
            this.inputRef?.blur();
            event.preventDefault();
        }
    }
    /**
     * Renders the dropdown list.
     */
    renderDropdown() {
        if (!this.isComboBoxVisible) {
            return null;
        }
        return (h("ul", { "data-position": this.filteredData.length > 0 && this.filteredData[0].occupancy ? 'bottom-right' : 'bottom-left' }, this.filteredData?.map((d, index) => (h("li", { onMouseEnter: () => (this.selectedIndex = index), role: "button", key: d.id, onKeyDown: e => this.handleItemKeyDown(e, index), "data-selected": this.selectedIndex === index, tabIndex: 0, onClick: () => this.selectItem(index) }, d.image && h("img", { src: d.image, class: 'list-item-image' }), h("p", null, d.name), d.occupancy && (h(Fragment, null, h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { fill: 'currentColor', d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" })), h("p", null, d.occupancy)))))), this.filteredData.length === 0 && !this.isLoading && h("span", { class: 'text-center' }, locales.entries.Lcz_NoResultsFound)));
    }
    /**
     * Handles form submission by selecting the highlighted item.
     */
    handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('object');
        if (!this.filteredData.length) {
            return;
        }
        this.selectItem(this.selectedIndex === -1 ? 0 : this.selectedIndex);
    }
    render() {
        return (h("form", { key: 'bc4bbf4a70cb6385687d034493085ebd4273ec72', onSubmit: this.handleSubmit.bind(this), class: "m-0 p-0" }, h("input", { key: 'c89d1bee4a6ad0d25b504d82e9bcfd3e55a44a11', type: "text", class: "form-control bg-white", id: this.input_id, ref: el => (this.inputRef = el), disabled: this.disabled, value: this.value, placeholder: this.placeholder, onKeyDown: this.handleKeyDown.bind(this), onBlur: this.handleBlur.bind(this), onInput: this.handleInputChange.bind(this), onFocus: this.handleFocus.bind(this), autoFocus: this.autoFocus }), this.renderDropdown()));
    }
    static get is() { return "ir-combobox"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-combobox.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-combobox.css"]
        };
    }
    static get properties() {
        return {
            "data": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "ComboboxItem[]",
                    "resolved": "ComboboxItem[]",
                    "references": {
                        "ComboboxItem": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-combobox/ir-combobox.tsx",
                            "id": "src/components/ui/ir-combobox/ir-combobox.tsx::ComboboxItem"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The list of items displayed in the combobox."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "duration": {
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
                    "tags": [],
                    "text": "Debounce duration in milliseconds for search input."
                },
                "getter": false,
                "setter": false,
                "attribute": "duration",
                "reflect": false,
                "defaultValue": "300"
            },
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
                    "text": "Placeholder text for the input field."
                },
                "getter": false,
                "setter": false,
                "attribute": "placeholder",
                "reflect": false
            },
            "value": {
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
                    "text": "The current value of the input field."
                },
                "getter": false,
                "setter": false,
                "attribute": "value",
                "reflect": false
            },
            "disabled": {
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
                    "text": "Disables the combobox input when set to true."
                },
                "getter": false,
                "setter": false,
                "attribute": "disabled",
                "reflect": false,
                "defaultValue": "false"
            },
            "autoFocus": {
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
                    "text": "Autofocuses the input field when true."
                },
                "getter": false,
                "setter": false,
                "attribute": "auto-focus",
                "reflect": false,
                "defaultValue": "false"
            },
            "input_id": {
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
                    "text": "Unique identifier for the input element."
                },
                "getter": false,
                "setter": false,
                "attribute": "input_id",
                "reflect": false,
                "defaultValue": "v4()"
            }
        };
    }
    static get states() {
        return {
            "selectedIndex": {},
            "actualIndex": {},
            "isComboBoxVisible": {},
            "isLoading": {},
            "isItemSelected": {},
            "inputValue": {},
            "filteredData": {},
            "componentShouldAutoFocus": {}
        };
    }
    static get events() {
        return [{
                "method": "comboboxValueChange",
                "name": "comboboxValueChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when a selection is made from the combobox."
                },
                "complexType": {
                    "original": "{ key: string; data: unknown }",
                    "resolved": "{ key: string; data: unknown; }",
                    "references": {}
                }
            }, {
                "method": "inputCleared",
                "name": "inputCleared",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the input is cleared by the user."
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }, {
                "method": "toast",
                "name": "toast",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits a toast notification."
                },
                "complexType": {
                    "original": "IToast",
                    "resolved": "ICustomToast & Partial<IToastWithButton> | IDefaultToast & Partial<IToastWithButton>",
                    "references": {
                        "IToast": {
                            "location": "import",
                            "path": "@/components",
                            "id": "src/components.d.ts::IToast"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "isComboBoxVisible",
                "methodName": "watchHandler"
            }];
    }
    static get listeners() {
        return [{
                "name": "click",
                "method": "handleDocumentClick",
                "target": "document",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-combobox.js.map
