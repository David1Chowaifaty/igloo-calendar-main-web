import { r as registerInstance, c as createEvent, h } from './index-0a4a209a.js';

const irTextareaCss = ".prepend-textarea.sc-ir-textarea{padding:0 !important}.ta-prepend-text.sc-ir-textarea{width:100%}";
const IrTextareaStyle0 = irTextareaCss;

const IrTextArea = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.textChange = createEvent(this, "textChange", 7);
        this.rows = 3;
        this.cols = 5;
        this.text = '';
        this.label = '<label>';
        this.placeholder = '<placeholder>';
        this.value = '';
        this.maxLength = 250;
        this.variant = 'default';
        this.labelWidth = 3;
        this.error = false;
    }
    handleAriaInvalidChange(newValue) {
        this.error = newValue === 'true';
    }
    connectedCallback() { }
    disconnectedCallback() { }
    render() {
        if (this.variant === 'prepend') {
            return (h("fieldset", { class: "input-group" }, h("div", { class: `input-group-prepend col-${this.labelWidth} prepend-textarea` }, h("span", { class: "input-group-text ta-prepend-text" }, this.label)), h("textarea", { "data-testid": this.testId, value: this.value, class: `form-control`, style: Object.assign({ height: '7rem' }, this.styles), maxLength: this.maxLength, onChange: e => this.textChange.emit(e.target.value), "aria-label": this.label })));
        }
        return (h("div", { class: 'form-group' }, h("label", null, this.label), h("textarea", { "data-testid": this.testId, style: this.styles, maxLength: this.maxLength, rows: this.rows, value: this.value, class: `form-control ${this.textareaClassname} ${this.error ? 'border-danger' : ''}`, placeholder: this.placeholder, onInput: e => this.textChange.emit(e.target.value) })));
    }
    static get watchers() { return {
        "aria-invalid": ["handleAriaInvalidChange"]
    }; }
};
IrTextArea.style = IrTextareaStyle0;

export { IrTextArea as ir_textarea };

//# sourceMappingURL=ir-textarea.entry.js.map