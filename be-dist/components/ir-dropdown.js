import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const irDropdownCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.absolute{position:absolute}.relative{position:relative}.block{display:block}.flex{display:flex}.hidden{display:none}.border{border-width:1px}.outline{outline-style:solid}:host{display:block;position:relative}button,div,li,ul{all:unset;box-sizing:border-box}.search-container{display:flex;gap:5px;height:40px;margin-bottom:5px;padding:10px;position:relative;z-index:2000}.SelectTrigger,.search-container{align-items:center;border:1px solid var(--gray-300,#d0d5dd);width:100%}.SelectTrigger{border-radius:var(--radius,8px);display:inline-flex;font-size:16px;justify-content:space-between;line-height:1;padding:10px 14px}.SelectTrigger:active,.SelectTrigger:focus{border-color:var(--brand-300,#84caff);box-shadow:0 1px 2px 0 rgba(0,0,0,.1),0 0 0 4px var(--brand-100,#d1e9ff)}.SelectContent{background:#fff;border:1px solid var(--gray-300);border-radius:8px;box-shadow:0 10px 38px -10px rgba(22,23,24,.35),0 10px 20px -15px rgba(22,23,24,.2);left:0;max-height:250px;overflow-y:auto;position:absolute;width:100%;z-index:99999}.combobox-item{align-items:center;display:flex;justify-content:space-between;line-height:1;padding:10px 14px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.combobox-item[data-highlighted=true]{background-color:var(--gray-50);color:var(--gray-900)}.combobox-item[data-disabled]{color:var(--gray-300)}input{background:hsl(var(--background));border:0;color:hsl(var(--foreground));flex:1;overflow:hidden}input:focus{outline:none}.combobox-content{background-color:#fff;border:1px solid hsl(var(--border));border-radius:var(--radius);box-shadow:0 10px 38px -10px rgba(22,23,24,.35),0 10px 20px -15px rgba(22,23,24,.2);margin:0;max-height:200px;opacity:0;overflow:auto;position:absolute;width:100%;z-index:99999999999}.combobox-content::-webkit-scrollbar{display:none}.combobox-content:hover::-webkit-scrollbar{display:block}.combobox-content ul{margin:0;padding:0}.combobox-viewport{padding:0 5px}.combobox-content[data-visibility=hide],.combobox-content[data-visibility=show]{animation-duration:.1s;animation-fill-mode:forwards;animation-timing-function:ease-in-out}.combobox-content[data-visibility=show]{animation-name:fadeIn}.combobox-content[data-visibility=hide]{animation-name:fadeOut}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}.static{position:static}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}";
const IrDropdownStyle0 = irDropdownCss;

const IrDropdown$1 = /*@__PURE__*/ proxyCustomElement(class IrDropdown extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.itemSelect = createEvent(this, "itemSelect", 7);
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
        return (h("div", { key: 'dbd9ec1ddb6f09e7cc1fd2e90274b2006741bef6', class: "dropdown-container" }, h("button", { key: 'f7cca2702c1a7f180c2f06aabc77c33e5ac7c288', ref: el => (this.buttonRef = el), type: "button", class: "SelectTrigger", "aria-haspopup": "listbox", "aria-expanded": this.isDropdownVisible.toString(), onClick: () => this.toggleDropdown() }, h("slot", { key: 'c2125be2a8b4c8dfc52e9434d05f7c7c2c24373a', name: "dropdown-trigger-body" }, this.selectedItemName || this.dropdownTitle), h("svg", { key: '16f7aa343945e61ee957d28020cf9fb4dbb9bd36', width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { key: 'b46e84a02ead7c18eb3cf9f3fa321e88447bebe2', d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" }))), this.isDropdownVisible && (h("ul", { class: "SelectContent", role: "listbox", ref: el => (this.listRef = el), tabindex: "-1" }, this.itemNames.map((item, index) => (h("li", { "data-disabled": item.disabled, "data-state": this.currentHighlightedIndex === index ? 'checked' : 'unchecked', "data-highlighted": this.currentHighlightedIndex === index ? 'true' : 'false', class: 'combobox-item', tabindex: item.disabled ? -1 : 0, role: "option", "aria-disabled": item.disabled ? 'true' : 'false', "aria-selected": this.selectedItemName === item.item ? 'true' : 'false', onClick: () => {
                this.selectItem(index);
                this.disableKeyboardPriority();
            }, onMouseOver: () => {
                if (!this.usingKeyboard && !item.disabled) {
                    this.currentHighlightedIndex = index;
                }
            } }, item.item, this.selectedItemName === item.item && (h("svg", { width: "20", height: "20", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z", fill: "var(--brand-600)", "fill-rule": "evenodd", "clip-rule": "evenodd" }))))))))));
    }
    get el() { return this; }
    static get style() { return IrDropdownStyle0; }
}, [1, "ir-dropdown", {
        "itemNames": [16],
        "rtl": [1540],
        "search": [516],
        "dropdownTitle": [513, "dropdown-title"],
        "isDropdownVisible": [32],
        "searchQuery": [32],
        "selectedItemName": [32],
        "currentHighlightedIndex": [32],
        "usingKeyboard": [32]
    }, [[0, "keydown", "handleKeyDown"], [16, "click", "handleClickOutside"], [1, "mousemove", "handleMouseMove"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-dropdown"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-dropdown":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrDropdown$1);
            }
            break;
    } });
}

const IrDropdown = IrDropdown$1;
const defineCustomElement = defineCustomElement$1;

export { IrDropdown, defineCustomElement };

//# sourceMappingURL=ir-dropdown.js.map