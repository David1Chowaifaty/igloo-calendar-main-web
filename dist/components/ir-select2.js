import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { v as v4 } from './v4.js';

const irSelectCss = ".border-theme.sc-ir-select{border:1px solid #cacfe7}@keyframes bounce{0%,100%{transform:scale(1);animation-timing-function:cubic-bezier(0.8, 0, 1, 1)}50%{transform:scale(1.2);animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}}.bounce-3.sc-ir-select{animation:bounce 1s 1}";
const IrSelectStyle0 = irSelectCss;

const IrSelect = /*@__PURE__*/ proxyCustomElement(class IrSelect extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.selectChange = createEvent(this, "selectChange", 7);
        this.count = 0;
        this.name = undefined;
        this.data = undefined;
        this.label = '<label>';
        this.selectStyles = undefined;
        this.selectContainerStyle = undefined;
        this.selectedValue = null;
        this.required = undefined;
        this.LabelAvailable = true;
        this.firstOption = 'Select';
        this.selectStyle = true;
        this.showFirstOption = true;
        this.submited = false;
        this.size = 'md';
        this.textSize = 'md';
        this.labelPosition = 'left';
        this.labelBackground = null;
        this.labelColor = 'dark';
        this.labelBorder = 'theme';
        this.labelWidth = 3;
        this.select_id = v4();
        this.initial = true;
        this.valid = false;
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
        console.log(e.detail, this.select_id, e.detail === this.select_id);
        if (!this.selectEl || e.detail !== this.select_id) {
            return;
        }
        console.log('first1');
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.selectEl.classList.add('border-danger');
    }
    componentwillload() { }
    disconnectedCallback() { }
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
        let label = (h("div", { key: '46cffc49c14b1b6c650df291009efd57f434afc7', class: `input-group-prepend col-${this.labelWidth} p-0 text-${this.labelColor}` }, h("label", { key: '7dae5cf8c476506c700f21cd28a587d491e9a8b5', htmlFor: this.select_id, class: `input-group-text ${this.labelPosition === 'right' ? 'justify-content-end' : this.labelPosition === 'center' ? 'justify-content-center' : ''} ${this.labelBackground ? 'bg-' + this.labelBackground : ''} flex-grow-1 text-${this.labelColor} border-${this.labelBorder === 'none' ? 0 : this.labelBorder} ` }, this.label, this.required ? '*' : '')));
        if (this.selectStyle === false) {
            className = '';
        }
        if (this.required && !this.valid && !this.initial) {
            className = `${className} border-danger`;
        }
        if (!this.LabelAvailable) {
            label = '';
        }
        return (h("div", { key: 'd35ed83be598423da885022044a6b05625cd5cd1', class: `form-group m-0 ${this.selectContainerStyle}` }, h("div", { key: 'afb61c6fd726080f9469e3963530d2766679937b', class: "input-group row m-0" }, label, h("select", { key: '91a5823d89d626d2bb83353ac62f03f202d92fe6', ref: el => (this.selectEl = el), id: this.select_id, class: `${this.selectStyles} ${className} form-control-${this.size} text-${this.textSize} col-${this.LabelAvailable ? 12 - this.labelWidth : 12}`, onInput: this.handleSelectChange.bind(this), required: this.required }, this.showFirstOption && h("option", { key: 'cb7330db14af47b7e63a31a98a4a1ecf481a9a31', value: '' }, this.firstOption), this.data.map(item => {
            if (this.selectedValue === item.value) {
                return (h("option", { selected: true, value: item.value }, item.text));
            }
            else {
                return h("option", { value: item.value }, item.text);
            }
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