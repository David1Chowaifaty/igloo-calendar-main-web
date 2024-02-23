import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const irSelectCss = ".border-theme.sc-ir-select{border:1px solid #cacfe7}";
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
        this.submited = false;
        this.size = 'md';
        this.textSize = 'md';
        this.labelPosition = 'left';
        this.labelBackground = null;
        this.labelColor = 'dark';
        this.labelBorder = 'theme';
        this.labelWidth = 3;
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
    componentwillload() { }
    disconnectedCallback() { }
    handleSelectChange(event) {
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
        let label = (h("div", { key: '91f7cf485371806400c49eadcbb9d8dc4b62d701', class: `input-group-prepend col-${this.labelWidth} p-0 text-${this.labelColor}` }, h("label", { key: 'fab2c125ffe7b7cf25f69933cc009880b305202e', class: `input-group-text ${this.labelPosition === 'right' ? 'justify-content-end' : this.labelPosition === 'center' ? 'justify-content-center' : ''} ${this.labelBackground ? 'bg-' + this.labelBackground : ''} flex-grow-1 text-${this.labelColor} border-${this.labelBorder === 'none' ? 0 : this.labelBorder} ` }, this.label, this.required ? '*' : '')));
        if (this.selectStyle === false) {
            className = '';
        }
        if (this.required && !this.valid && !this.initial) {
            className = `${className} border-danger`;
        }
        if (!this.LabelAvailable) {
            label = '';
        }
        return (h("div", { key: '9cac17648e5d005f73dba8a8321f89fd1d134abd', class: `form-group m-0 ${this.selectContainerStyle}` }, h("div", { key: '9511b4f3a54774349cac17740636170293472c41', class: "input-group row m-0" }, label, h("select", { key: '31e324927666a5acb51f7eb3534f3b5d0d1d6593', class: `${this.selectStyles} ${className} form-control-${this.size} text-${this.textSize} col-${this.LabelAvailable ? 12 - this.labelWidth : 12}`, onInput: this.handleSelectChange.bind(this), required: this.required }, h("option", { key: 'a390682b9065aa7fa15d1f1cc416aea0277e32f4', value: '' }, this.firstOption), this.data.map(item => {
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
        "submited": [4],
        "size": [1],
        "textSize": [1, "text-size"],
        "labelPosition": [1, "label-position"],
        "labelBackground": [1, "label-background"],
        "labelColor": [1, "label-color"],
        "labelBorder": [1, "label-border"],
        "labelWidth": [2, "label-width"],
        "initial": [32],
        "valid": [32]
    }, undefined, {
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