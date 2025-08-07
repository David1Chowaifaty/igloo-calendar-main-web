import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { v as v4 } from './v4.js';

const irSelectCss = ".border-theme.sc-ir-select{border:1px solid #cacfe7}@keyframes bounce{0%,100%{transform:scale(1);animation-timing-function:cubic-bezier(0.8, 0, 1, 1)}50%{transform:scale(1.2);animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}}.bounce-3.sc-ir-select{animation:bounce 1s 1}";
const IrSelectStyle0 = irSelectCss;

const IrSelect = /*@__PURE__*/ proxyCustomElement(class IrSelect extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.selectChange = createEvent(this, "selectChange", 7);
        // Text shown in the label
        this.label = '<label>';
        // Selected value of the select
        this.selectedValue = null;
        // Whether to render the label
        this.LabelAvailable = true;
        // Placeholder text for the first option
        this.firstOption = 'Select';
        // Enable/disable default form styling
        this.selectStyle = true;
        // Whether to show the first placeholder option
        this.showFirstOption = true;
        // Set to true when the form is submitted
        this.submited = false;
        // Size of the select: 'sm' | 'md' | 'lg'
        this.size = 'md';
        // Size of the text: 'sm' | 'md' | 'lg'
        this.textSize = 'md';
        // Position of the label
        this.labelPosition = 'left';
        // Background color of the label
        this.labelBackground = null;
        // Text color of the label
        this.labelColor = 'dark';
        // Border color of the label
        this.labelBorder = 'theme';
        // Width of the label (Bootstrap cols)
        this.labelWidth = 3;
        // Unique ID for the select element
        this.select_id = v4();
        // Whether the select has an error state
        this.error = false;
        // Tracks if the field has been touched
        this.initial = true;
        // Tracks if the field is valid
        this.valid = false;
        this.count = 0;
    }
    watchHandler(newValue) {
        if (newValue !== null && this.required) {
            this.valid = true;
        }
    }
    watchHandler2(newValue) {
        if (newValue && this.required) {
            this.initial = false;
        }
    }
    handleButtonAnimation(e) {
        if (!this.selectEl || e.detail !== this.select_id) {
            return;
        }
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.selectEl.classList.add('border-danger');
    }
    // Handle select change event
    // Example: onInput={this.handleSelectChange.bind(this)}
    handleSelectChange(event) {
        this.selectEl.classList.remove('border-danger');
        if (this.required) {
            this.initial = false;
            this.valid = event.target.checkValidity();
            this.selectedValue = event.target.value;
            this.selectChange.emit(this.selectedValue);
        }
        else {
            this.selectedValue = event.target.value;
            this.selectChange.emit(this.selectedValue);
        }
    }
    render() {
        let className = 'form-control';
        let label = (h("div", { key: '96e4252b5c9b2cce4e0ccd11b0256f5768b8e8ae', class: `input-group-prepend col-${this.labelWidth} p-0 text-${this.labelColor}` }, h("label", { key: '5586a5fde69e6fb2602edf5a26397bf1b3f115c8', htmlFor: this.select_id, class: `input-group-text ${this.labelPosition === 'right' ? 'justify-content-end' : this.labelPosition === 'center' ? 'justify-content-center' : ''} ${this.labelBackground ? 'bg-' + this.labelBackground : ''} flex-grow-1 text-${this.labelColor} border-${this.labelBorder === 'none' ? 0 : this.labelBorder} ` }, this.label, this.required ? '*' : '')));
        if (this.selectStyle === false) {
            className = '';
        }
        if (this.required && !this.valid && !this.initial) {
            className = `${className} border-danger`;
        }
        if (!this.LabelAvailable) {
            label = '';
        }
        return (h("div", { key: '0bf4165e6a31c6f231db0f45f6d00db38686f2cd', class: `form-group m-0 ${this.selectContainerStyle}` }, h("div", { key: 'f82fa2a5b4cfd26c524b645e49a370ab7c4a7252', class: "input-group row m-0" }, label, h("select", { key: '3dbe51b9c44b6b289205e3e195ec3cff95d1e353', disabled: this.disabled, "aria-invalid": this.error ? 'true' : 'false', "data-testid": this.testId, style: this.selectForcedStyles, ref: el => (this.selectEl = el), id: this.select_id, class: `${this.selectStyles} ${this.error ? 'border-danger' : ''} ${className} form-control-${this.size} text-${this.textSize} col-${this.LabelAvailable ? 12 - this.labelWidth : 12}`, onInput: this.handleSelectChange.bind(this), required: this.required }, this.showFirstOption && h("option", { key: '51872b181721872cfc897a3385f7eeec7f5686d1', value: '' }, this.firstOption), this.data.map(item => {
            return (h("option", { selected: this.selectedValue === item.value, value: item.value }, item.text));
        })))));
    }
    static get watchers() { return {
        "selectedValue": ["watchHandler"],
        "submited": ["watchHandler2"]
    }; }
    static get style() { return IrSelectStyle0; }
}, [2, "ir-select", {
        "name": [1],
        "data": [16],
        "label": [1],
        "selectStyles": [1, "select-styles"],
        "selectForcedStyles": [16],
        "selectContainerStyle": [1, "select-container-style"],
        "selectedValue": [1544, "selected-value"],
        "required": [4],
        "LabelAvailable": [4, "label-available"],
        "firstOption": [1, "first-option"],
        "selectStyle": [4, "select-style"],
        "showFirstOption": [4, "show-first-option"],
        "submited": [4],
        "size": [1],
        "textSize": [1, "text-size"],
        "labelPosition": [1, "label-position"],
        "labelBackground": [1, "label-background"],
        "labelColor": [1, "label-color"],
        "labelBorder": [1, "label-border"],
        "labelWidth": [2, "label-width"],
        "select_id": [1],
        "testId": [1, "test-id"],
        "disabled": [4],
        "error": [1028],
        "initial": [32],
        "valid": [32]
    }, [[16, "animateIrSelect", "handleButtonAnimation"]], {
        "selectedValue": ["watchHandler"],
        "submited": ["watchHandler2"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-select"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-select":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrSelect);
            }
            break;
    } });
}

export { IrSelect as I, defineCustomElement as d };

//# sourceMappingURL=ir-select2.js.map