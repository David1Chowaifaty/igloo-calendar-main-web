'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3978a3f8.js');

const irTextareaCss = ".prepend-textarea.sc-ir-textarea{padding:0 !important}.ta-prepend-text.sc-ir-textarea{width:100%}";
const IrTextareaStyle0 = irTextareaCss;

const IrTextArea = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.textChange = index.createEvent(this, "textChange", 7);
    }
    /**
     * Number of visible text lines.
     */
    rows = 3;
    /**
     * Number of visible character columns.
     */
    cols = 5;
    /**
     * Unused property, intended to store textarea text.
     */
    text = '';
    /**
     * Text label displayed above or beside the textarea.
     */
    label = '<label>';
    /**
     * Placeholder text shown when input is empty.
     */
    placeholder = '<placeholder>';
    /**
     * Current value of the textarea (supports two-way binding).
     */
    value = '';
    /**
     * Maximum number of characters allowed.
     */
    maxLength = 250;
    /**
     * Additional classes for the textarea element.
     */
    textareaClassname;
    /**
     * Layout style of the textarea:
     * `'default'` shows label above, `'prepend'` shows label on the left.
     */
    variant = 'default';
    /**
     * Width of the label in grid columns (for `variant="prepend"`).
     */
    labelWidth = 3;
    /**
     * Inline styles applied directly to the textarea.
     */
    styles;
    /**
     * `data-testid` for targeting in tests.
     */
    testId;
    /**
     * Indicates if the field is in an error state.
     */
    error = false;
    /**
     * Emits when the textarea content changes.
     *
     * Example:
     * ```tsx
     * <ir-textarea onTextChange={(e) => console.log(e.detail)} />
     * ```
     */
    textChange;
    handleAriaInvalidChange(newValue) {
        this.error = newValue === 'true';
    }
    render() {
        if (this.variant === 'prepend') {
            return (index.h("fieldset", { class: "input-group" }, index.h("div", { class: `input-group-prepend col-${this.labelWidth} prepend-textarea` }, index.h("span", { class: "input-group-text ta-prepend-text" }, this.label)), index.h("textarea", { "data-testid": this.testId, value: this.value, class: `form-control`, style: { height: '7rem', ...this.styles }, maxLength: this.maxLength, onChange: e => this.textChange.emit(e.target.value), "aria-label": this.label })));
        }
        return (index.h("div", { class: 'form-group' }, index.h("label", null, this.label), index.h("textarea", { "data-testid": this.testId, style: this.styles, maxLength: this.maxLength, rows: this.rows, value: this.value, class: `form-control ${this.textareaClassname} ${this.error ? 'border-danger' : ''}`, placeholder: this.placeholder, onInput: e => this.textChange.emit(e.target.value) })));
    }
    static get watchers() { return {
        "aria-invalid": ["handleAriaInvalidChange"]
    }; }
};
IrTextArea.style = IrTextareaStyle0;

exports.ir_textarea = IrTextArea;

//# sourceMappingURL=ir-textarea.cjs.entry.js.map