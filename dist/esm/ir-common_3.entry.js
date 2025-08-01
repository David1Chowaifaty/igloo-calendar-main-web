import { r as registerInstance, h, H as Host, c as createEvent, g as getElement } from './index-0a4a209a.js';

const onlineResources = [
    // {
    //   isJS: true,
    //   link: "https://x.igloorooms.com/manage/micro/app-assets/required/assets/scripts/jquery.min.js",
    // },
    {
        isCSS: true,
        link: 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i%7CQuicksand:300,400,500,700',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/bootstrap.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/bootstrap-extended.css',
    },
    { isCSS: true, link: 'https://x.igloorooms.com/app-assets/css/colors.css' },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/core/menu/menu-types/horizontal-menu.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/core/colors/palette-gradient.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/components.css',
    },
    { isCSS: true, link: 'https://x.igloorooms.com/assets/css/style.css' },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/vendors/css/forms/icheck/icheck.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/vendors/css/forms/icheck/custom.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/pages/login-register.css',
    },
    // {
    //   isCSS: true,
    //   link: 'https://x.igloorooms.com/manage/micro/app-assets/required/assets/scripts/daterangepicker/daterangepicker.css',
    // },
    // {
    //   isJS: true,
    //   link: "https://x.igloorooms.com/manage/micro/app-assets/required/assets/scripts/daterangepicker/moment.min.js",
    // },
    // {
    //   isJS: true,
    //   link: "https://x.igloorooms.com/manage/micro/app-assets/required/assets/scripts/daterangepicker/daterangepicker.js",
    // },
];

const IrCommon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.extraResources = '';
        this.resources = onlineResources;
    }
    componentWillLoad() {
        this.parseRefs();
    }
    componentDidLoad() {
        this.initializeStyles();
    }
    hrefsChanged() {
        this.parseRefs();
        this.initializeStyles();
    }
    parseRefs() {
        if (this.extraResources !== '')
            this.resources.push(JSON.parse(this.extraResources));
    }
    appendTag(tagName, attributes) {
        const tag = document.createElement(tagName);
        const selectorParts = [];
        Object.keys(attributes).forEach(attr => {
            tag.setAttribute(attr, attributes[attr]);
            selectorParts.push(`[${attr}="${attributes[attr]}"]`);
        });
        const selector = `${tagName}${selectorParts.join('')}`;
        const existingTag = document.querySelector(selector);
        if (!existingTag) {
            document.head.appendChild(tag);
        }
    }
    initializeStyles() {
        this.resources.forEach(res => {
            if (res.isCSS) {
                this.appendTag('link', {
                    href: res.link,
                    rel: 'stylesheet',
                    type: 'text/css',
                });
            }
            if (res.isJS) {
                this.appendTag('script', {
                    src: res.link,
                });
            }
        });
    }
    render() {
        return (h(Host, { key: '03d1bfea8e30ca6a86083e3d2f446dd80be9c677' }, h("slot", { key: '022c32577b2feb0be6573e94d4555000e85d7216' })));
    }
    static get watchers() { return {
        "extraResources": ["hrefsChanged"]
    }; }
};

const irMComboboxCss = ".sc-ir-m-combobox-h{display:block;font-family:'Segoe UI', SegoeUI, 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:1rem;line-height:1.4}.sc-ir-m-combobox-h *.sc-ir-m-combobox,.sc-ir-m-combobox-h *.sc-ir-m-combobox::before,.sc-ir-m-combobox-h *.sc-ir-m-combobox::after{box-sizing:border-box}.combo.sc-ir-m-combobox{display:block;margin-bottom:1.5em;max-width:400px;position:relative}.combo.sc-ir-m-combobox::after{border-bottom:2px solid rgba(0, 0, 0, 0.5);border-right:2px solid rgba(0, 0, 0, 0.5);content:'';display:block;height:12px;pointer-events:none;position:absolute;right:16px;top:50%;transform:translate(0, -65%) rotate(45deg);width:12px}.combo-input.sc-ir-m-combobox{background-color:#f5f5f5;border:2px solid rgba(0, 0, 0, 0.5);border-radius:4px;display:block;font-size:1em;min-height:calc(1.4em + 26px);padding:12px 16px 14px;text-align:left;width:100%}.open.sc-ir-m-combobox .combo-input.sc-ir-m-combobox{border-radius:4px 4px 0 0}.combo-input.sc-ir-m-combobox:focus{border-color:#e60023;box-shadow:0 0 4px 2px #e60023;outline:5px solid transparent}.combo-label.sc-ir-m-combobox{display:block;font-size:20px;font-weight:100;margin-bottom:0.25em}.combo-menu.sc-ir-m-combobox{background-color:#f5f5f5;border:1px solid rgba(0, 0, 0, 0.42);border-radius:0 0 4px 4px;display:none;max-height:300px;overflow-y:scroll;left:0;position:absolute;top:100%;width:100%;z-index:100}.open.sc-ir-m-combobox .combo-menu.sc-ir-m-combobox{display:block}.combo-option.sc-ir-m-combobox{padding:10px 12px 12px}.combo-option.option-current.sc-ir-m-combobox,.combo-option.sc-ir-m-combobox:hover{background-color:rgba(0, 0, 0, 0.1)}.combo-option.option-selected.sc-ir-m-combobox{padding-right:30px;position:relative}.combo-option.option-selected.sc-ir-m-combobox::after{border-bottom:2px solid #000;border-right:2px solid #000;content:'';height:16px;position:absolute;right:15px;top:50%;transform:translate(0, -50%) rotate(45deg);width:8px}.selected-options.sc-ir-m-combobox{list-style-type:none;margin:0;max-width:400px;padding:0}.selected-options.sc-ir-m-combobox li.sc-ir-m-combobox{display:inline-block;margin-bottom:5px}.remove-option.sc-ir-m-combobox{background-color:#ff3d3d;border:1px solid #ff3d3d;border-radius:3px;color:#fff;font-size:0.75em;font-weight:bold;margin-bottom:6px;margin-right:6px;padding:0.25em 1.75em 0.25em 0.25em;position:relative}.remove-option.sc-ir-m-combobox:focus{border-color:#baa1dd;box-shadow:0 0 3px 1px #ff3d3d;outline:3px solid transparent}.remove-option.sc-ir-m-combobox::before,.remove-option.sc-ir-m-combobox::after{border-right:2px solid #fff;content:'';height:1em;right:0.75em;position:absolute;top:50%;width:0}.remove-option.sc-ir-m-combobox::before{transform:translate(0, -50%) rotate(45deg)}.remove-option.sc-ir-m-combobox::after{transform:translate(0, -50%) rotate(-45deg)}";
const IrMComboboxStyle0 = irMComboboxCss;

const IrMCombobox = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.irChange = createEvent(this, "irChange", 7);
        this.irInput = createEvent(this, "irInput", 7);
        this.irFocus = createEvent(this, "irFocus", 7);
        this.irBlur = createEvent(this, "irBlur", 7);
        this.type = 'select';
        this.label = '';
        this.placeholder = '';
        this.options = [];
        this.value = '';
        this.disabled = false;
        this.readonly = false;
        this.isOpen = false;
        this.activeOptionIndex = -1;
        this.inputValue = '';
        this.selectedOptions = [];
        this.comboboxId = `combo-${Math.random().toString(36).substr(2, 9)}`;
        this.listboxId = `listbox-${this.comboboxId}`;
        this.labelId = `label-${this.comboboxId}`;
    }
    componentWillLoad() {
        this.initializeValue();
    }
    handleDocumentClick(event) {
        if (!this.el.contains(event.target)) {
            this.isOpen = false;
        }
    }
    handleKeyDown(event) {
        switch (event.key) {
            case 'ArrowDown':
                event.preventDefault();
                this.navigateOptions(1);
                break;
            case 'ArrowUp':
                event.preventDefault();
                this.navigateOptions(-1);
                break;
            case 'Enter':
                event.preventDefault();
                this.selectCurrentOption();
                break;
            case 'Escape':
                this.isOpen = false;
                break;
        }
    }
    initializeValue() {
        if (this.type === 'multiselect' && Array.isArray(this.value)) {
            this.selectedOptions = this.options.filter(option => this.value.includes(option.value));
        }
        else if (typeof this.value === 'string') {
            this.inputValue = this.value;
            const selectedOption = this.options.find(option => option.value === this.value);
            if (selectedOption && this.type === 'multiselect') {
                this.selectedOptions = [selectedOption];
            }
        }
    }
    navigateOptions(direction) {
        if (!this.isOpen) {
            this.isOpen = true;
            return;
        }
        const newIndex = this.activeOptionIndex + direction;
        if (newIndex >= 0 && newIndex < this.options.length) {
            this.activeOptionIndex = newIndex;
        }
    }
    selectCurrentOption() {
        if (this.activeOptionIndex >= 0 && this.activeOptionIndex < this.options.length) {
            this.selectOption(this.options[this.activeOptionIndex]);
        }
    }
    selectOption(option) {
        if (option.disabled)
            return;
        if (this.type === 'multiselect') {
            const isSelected = this.selectedOptions.some(selected => selected.value === option.value);
            if (isSelected) {
                this.selectedOptions = this.selectedOptions.filter(selected => selected.value !== option.value);
            }
            else {
                this.selectedOptions = [...this.selectedOptions, option];
            }
            this.irChange.emit(this.selectedOptions.map(opt => opt.value));
        }
        else {
            this.inputValue = option.label;
            this.isOpen = false;
            this.irChange.emit(option.value);
        }
    }
    handleInputChange(event) {
        const target = event.target;
        this.inputValue = target.value;
        this.irInput.emit(this.inputValue);
        if (!this.isOpen) {
            this.isOpen = true;
        }
    }
    handleInputFocus() {
        this.irFocus.emit();
        if (this.type !== 'editable' || this.options.length > 0) {
            this.isOpen = true;
        }
    }
    handleInputBlur() {
        this.irBlur.emit();
    }
    toggleCombobox() {
        if (!this.disabled) {
            this.isOpen = !this.isOpen;
        }
    }
    removeSelectedOption(option) {
        this.selectedOptions = this.selectedOptions.filter(selected => selected.value !== option.value);
        this.irChange.emit(this.selectedOptions.map(opt => opt.value));
    }
    getFilteredOptions() {
        if (this.type !== 'editable' || !this.inputValue) {
            return this.options;
        }
        return this.options.filter(option => option.label.toLowerCase().includes(this.inputValue.toLowerCase()));
    }
    render() {
        const filteredOptions = this.getFilteredOptions();
        return (h(Host, { key: 'ae60fb815292975a7cc9ee6ffb19cd01e2cf4b8a' }, this.label && (h("label", { key: '945bf90e3385714e6e3489be8c73bcdaca5882c6', id: this.labelId, class: "combo-label" }, this.label)), this.type === 'multiselect' && this.selectedOptions.length > 0 && (h("ul", { key: '58d0c9cf223ec839b6cef0c96b772746cd6932ec', class: "selected-options" }, this.selectedOptions.map(option => (h("li", { key: option.value }, h("button", { type: "button", class: "remove-option", onClick: () => this.removeSelectedOption(option), "aria-label": `Remove ${option.label}` }, option.label)))))), h("div", { key: 'c02cb1f863bb61e2cde3773ada4f821d96a2c322', class: `combo ${this.isOpen ? 'open' : ''}` }, this.type === 'select' ? (h("div", { id: this.comboboxId, class: "combo-input", role: "combobox", "aria-expanded": this.isOpen.toString(), "aria-haspopup": "listbox", "aria-controls": this.listboxId, "aria-labelledby": this.label ? this.labelId : undefined, tabindex: this.disabled ? -1 : 0, onClick: () => this.toggleCombobox(), onFocus: () => this.handleInputFocus(), onBlur: () => this.handleInputBlur() }, this.inputValue || this.placeholder)) : (h("input", { id: this.comboboxId, class: "combo-input", type: "text", role: "combobox", "aria-expanded": this.isOpen.toString(), "aria-haspopup": "listbox", "aria-controls": this.listboxId, "aria-labelledby": this.label ? this.labelId : undefined, value: this.inputValue, placeholder: this.placeholder, disabled: this.disabled, readonly: this.readonly, onInput: (e) => this.handleInputChange(e), onFocus: () => this.handleInputFocus(), onBlur: () => this.handleInputBlur() })), this.isOpen && (h("div", { key: '9b18cffa2b6a546755fae64a09e61a09690e2e4f', class: "combo-menu", role: "listbox", id: this.listboxId }, filteredOptions.map((option, index) => (h("div", { key: option.value, class: `combo-option ${index === this.activeOptionIndex ? 'option-current' : ''} ${this.type === 'multiselect' && this.selectedOptions.some(selected => selected.value === option.value)
                ? 'option-selected'
                : ''}`, role: "option", "aria-selected": this.type === 'multiselect'
                ? this.selectedOptions.some(selected => selected.value === option.value).toString()
                : (this.inputValue === option.label).toString(), onClick: () => this.selectOption(option) }, option.label))), filteredOptions.length === 0 && (h("div", { key: '5245bdc7f8b4588873f1562a2c0d068b9b92c40e', class: "combo-option" }, "No options available")))))));
    }
    get el() { return getElement(this); }
};
IrMCombobox.style = IrMComboboxStyle0;

const irTestCmpCss = ".sc-ir-test-cmp-h{display:block}";
const IrTestCmpStyle0 = irTestCmpCss;

const IrTestCmp = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '8ff5f8ef17ae84cd6fa7ced627aaf1612086e967', class: "card p-4" }, h("ir-m-combobox", { key: 'bf1550b4cbe3a6d5c1e9782ccbc2b21f1e27b3c1' })));
    }
};
IrTestCmp.style = IrTestCmpStyle0;

export { IrCommon as ir_common, IrMCombobox as ir_m_combobox, IrTestCmp as ir_test_cmp };

//# sourceMappingURL=ir-common_3.entry.js.map