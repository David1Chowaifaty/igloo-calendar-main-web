import { h } from "@stencil/core";
export class IrTextArea {
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
            return (h("fieldset", { class: "input-group" }, h("div", { class: `input-group-prepend col-${this.labelWidth} prepend-textarea` }, h("span", { class: "input-group-text ta-prepend-text" }, this.label)), h("textarea", { "data-testid": this.testId, value: this.value, class: `form-control`, style: { height: '7rem', ...this.styles }, maxLength: this.maxLength, onChange: e => this.textChange.emit(e.target.value), "aria-label": this.label })));
        }
        return (h("div", { class: 'form-group' }, h("label", null, this.label), h("textarea", { "data-testid": this.testId, style: this.styles, maxLength: this.maxLength, rows: this.rows, value: this.value, class: `form-control ${this.textareaClassname} ${this.error ? 'border-danger' : ''}`, placeholder: this.placeholder, onInput: e => this.textChange.emit(e.target.value) })));
    }
    static get is() { return "ir-textarea"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-textarea.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-textarea.css"]
        };
    }
    static get properties() {
        return {
            "rows": {
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
                    "text": "Number of visible text lines."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "rows",
                "defaultValue": "3"
            },
            "cols": {
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
                    "text": "Number of visible character columns."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "cols",
                "defaultValue": "5"
            },
            "text": {
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
                    "text": "Unused property, intended to store textarea text."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "text",
                "defaultValue": "''"
            },
            "label": {
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
                    "text": "Text label displayed above or beside the textarea."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label",
                "defaultValue": "'<label>'"
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
                    "text": "Placeholder text shown when input is empty."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "placeholder",
                "defaultValue": "'<placeholder>'"
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
                    "text": "Current value of the textarea (supports two-way binding)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "value",
                "defaultValue": "''"
            },
            "maxLength": {
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
                    "text": "Maximum number of characters allowed."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max-length",
                "defaultValue": "250"
            },
            "textareaClassname": {
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
                    "text": "Additional classes for the textarea element."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "textarea-classname"
            },
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'default' | 'prepend'",
                    "resolved": "\"default\" | \"prepend\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Layout style of the textarea:\n`'default'` shows label above, `'prepend'` shows label on the left."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "variant",
                "defaultValue": "'default'"
            },
            "labelWidth": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11",
                    "resolved": "1 | 10 | 11 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Width of the label in grid columns (for `variant=\"prepend\"`)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label-width",
                "defaultValue": "3"
            },
            "styles": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ [key: string]: string }",
                    "resolved": "{ [key: string]: string; }",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Inline styles applied directly to the textarea."
                },
                "getter": false,
                "setter": false
            },
            "testId": {
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
                    "text": "`data-testid` for targeting in tests."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "test-id"
            }
        };
    }
    static get states() {
        return {
            "error": {}
        };
    }
    static get events() {
        return [{
                "method": "textChange",
                "name": "textChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits when the textarea content changes.\n\nExample:\n```tsx\n<ir-textarea onTextChange={(e) => console.log(e.detail)} />\n```"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "aria-invalid",
                "methodName": "handleAriaInvalidChange"
            }];
    }
}
