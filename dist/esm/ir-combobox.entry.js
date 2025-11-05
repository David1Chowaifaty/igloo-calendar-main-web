import { r as registerInstance, c as createEvent, h, F as Fragment, g as getElement } from './index-60982d00.js';
import { l as locales } from './locales.store-629477c2.js';
import { v as v4 } from './v4-964634d6.js';
import './index-c4cf83be.js';

const irComboboxCss = ".sc-ir-combobox-h{display:block;position:relative;padding:0;margin:0;box-sizing:border-box}ul.sc-ir-combobox{position:absolute;box-sizing:border-box;margin:0;margin-top:2px;width:max-content;max-height:80px;border-radius:0.21rem;z-index:10000;padding:1px;background:white;box-shadow:0px 8px 16px 0px rgba(0, 0, 0, 0.2);padding:5px 0;max-height:250px;overflow-y:auto;min-width:100%}ul[data-position='bottom-right'].sc-ir-combobox{right:0}.list-item-image.sc-ir-combobox{height:1rem;aspect-ratio:4/3;border-radius:4px;margin-right:10px}.dropdown-item.sc-ir-combobox{cursor:pointer}ul.sc-ir-combobox li.sc-ir-combobox,span.sc-ir-combobox,loader-container.sc-ir-combobox{padding:0px 16px;margin:0px;margin-top:2px;width:100%;border-radius:2px}ul.sc-ir-combobox li.sc-ir-combobox{cursor:pointer}ul.sc-ir-combobox li.sc-ir-combobox{display:flex;align-items:center;flex-wrap:wrap;gap:3px}ul.sc-ir-combobox li.sc-ir-combobox p.sc-ir-combobox{margin:0;padding:0}ul.sc-ir-combobox li.sc-ir-combobox:hover{background:#f4f5fa}ul.sc-ir-combobox li[data-selected].sc-ir-combobox,ul.sc-ir-combobox li[data-selected].sc-ir-combobox:hover{color:#fff;text-decoration:none;background-color:#666ee8}";
const IrComboboxStyle0 = irComboboxCss;

const IrCombobox = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.comboboxValueChange = createEvent(this, "comboboxValueChange", 7);
        this.inputCleared = createEvent(this, "inputCleared", 7);
        this.toast = createEvent(this, "toast", 7);
        /**
         * The list of items displayed in the combobox.
         */
        this.data = [];
        /**
         * Debounce duration in milliseconds for search input.
         */
        this.duration = 300;
        /**
         * Disables the combobox input when set to true.
         */
        this.disabled = false;
        /**
         * Autofocuses the input field when true.
         */
        this.autoFocus = false;
        /**
         * Unique identifier for the input element.
         */
        this.input_id = v4();
        /**
         * The index of the currently selected item.
         */
        this.selectedIndex = -1;
        /**
         * Tracks the actual focused index during keyboard navigation.
         */
        this.actualIndex = -1;
        /**
         * Whether the dropdown is visible.
         */
        this.isComboBoxVisible = false;
        /**
         * Indicates if the component is in loading state.
         */
        this.isLoading = true;
        /**
         * The current input value typed by the user.
         */
        this.inputValue = '';
        /**
         * Filtered list based on user input.
         */
        this.filteredData = [];
        /**
         * Determines if the input should automatically receive focus.
         */
        this.componentShouldAutoFocus = false;
    }
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
        var _a, _b, _c, _d;
        clearTimeout(this.debounceTimer);
        clearTimeout(this.blurTimeout);
        (_a = this.inputRef) === null || _a === void 0 ? void 0 : _a.removeEventListener('blur', this.handleBlur);
        (_b = this.inputRef) === null || _b === void 0 ? void 0 : _b.removeEventListener('click', this.selectItem);
        (_c = this.inputRef) === null || _c === void 0 ? void 0 : _c.removeEventListener('keydown', this.handleKeyDown);
        (_d = this.inputRef) === null || _d === void 0 ? void 0 : _d.removeEventListener('focus', this.handleFocus);
    }
    /**
     * Handles keyboard navigation and selection inside the combobox.
     */
    handleKeyDown(event) {
        var _a;
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
                    (_a = this.inputRef) === null || _a === void 0 ? void 0 : _a.blur();
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
            var _a;
            (_a = this.inputRef) === null || _a === void 0 ? void 0 : _a.focus();
        });
    }
    /**
     * Scrolls the selected item into view when navigating.
     */
    adjustScrollPosition() {
        var _a;
        const selectedItem = (_a = this.el) === null || _a === void 0 ? void 0 : _a.querySelector(`[data-selected]`);
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
        var _a;
        if (withBlur) {
            (_a = this.inputRef) === null || _a === void 0 ? void 0 : _a.blur();
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
        var _a;
        if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowRight') {
            this.selectItem(index);
            event.preventDefault();
        }
        else if (event.key === 'Escape') {
            this.isComboBoxVisible = false;
            (_a = this.inputRef) === null || _a === void 0 ? void 0 : _a.blur();
            event.preventDefault();
        }
    }
    /**
     * Renders the dropdown list.
     */
    renderDropdown() {
        var _a;
        if (!this.isComboBoxVisible) {
            return null;
        }
        return (h("ul", { "data-position": this.filteredData.length > 0 && this.filteredData[0].occupancy ? 'bottom-right' : 'bottom-left' }, (_a = this.filteredData) === null || _a === void 0 ? void 0 :
            _a.map((d, index) => (h("li", { onMouseEnter: () => (this.selectedIndex = index), role: "button", key: d.id, onKeyDown: e => this.handleItemKeyDown(e, index), "data-selected": this.selectedIndex === index, tabIndex: 0, onClick: () => this.selectItem(index) }, d.image && h("img", { src: d.image, class: 'list-item-image' }), h("p", null, d.name), d.occupancy && (h(Fragment, null, h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { fill: 'currentColor', d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" })), h("p", null, d.occupancy)))))), this.filteredData.length === 0 && !this.isLoading && h("span", { class: 'text-center' }, locales.entries.Lcz_NoResultsFound)));
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
        return (h("form", { key: '92bd213ddc171558ecc1553744c714c3f6399f18', onSubmit: this.handleSubmit.bind(this), class: "m-0 p-0" }, h("input", { key: '8bf925077672a67a2460e86fc666f82ba321998e', type: "text", class: "form-control bg-white", id: this.input_id, ref: el => (this.inputRef = el), disabled: this.disabled, value: this.value, placeholder: this.placeholder, onKeyDown: this.handleKeyDown.bind(this), onBlur: this.handleBlur.bind(this), onInput: this.handleInputChange.bind(this), onFocus: this.handleFocus.bind(this), autoFocus: this.autoFocus }), this.renderDropdown()));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "isComboBoxVisible": ["watchHandler"]
    }; }
};
IrCombobox.style = IrComboboxStyle0;

export { IrCombobox as ir_combobox };

//# sourceMappingURL=ir-combobox.entry.js.map