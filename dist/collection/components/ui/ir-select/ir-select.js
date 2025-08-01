import { h } from "@stencil/core";
import { v4 } from "uuid";
export class IrSelect {
    constructor() {
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
        let label = (h("div", { key: 'e3d5a5c021d32bc85e77261b0c2cad01dd180b86', class: `input-group-prepend col-${this.labelWidth} p-0 text-${this.labelColor}` }, h("label", { key: '6df8ea822224b52329330e23f133835c72edb8ee', htmlFor: this.select_id, class: `input-group-text ${this.labelPosition === 'right' ? 'justify-content-end' : this.labelPosition === 'center' ? 'justify-content-center' : ''} ${this.labelBackground ? 'bg-' + this.labelBackground : ''} flex-grow-1 text-${this.labelColor} border-${this.labelBorder === 'none' ? 0 : this.labelBorder} ` }, this.label, this.required ? '*' : '')));
        if (this.selectStyle === false) {
            className = '';
        }
        if (this.required && !this.valid && !this.initial) {
            className = `${className} border-danger`;
        }
        if (!this.LabelAvailable) {
            label = '';
        }
        return (h("div", { key: '9b25ca4f5fa4f24c73de929a401fd26225b8056e', class: `form-group m-0 ${this.selectContainerStyle}` }, h("div", { key: '687568afac998ac213499644ce2c9fbeb4bdd3ee', class: "input-group row m-0" }, label, h("select", { key: 'fd05cf2feae5044b766d65455ab7f993c623f62b', disabled: this.disabled, "aria-invalid": this.error ? 'true' : 'false', "data-testid": this.testId, style: this.selectForcedStyles, ref: el => (this.selectEl = el), id: this.select_id, class: `${this.selectStyles} ${this.error ? 'border-danger' : ''} ${className} form-control-${this.size} text-${this.textSize} col-${this.LabelAvailable ? 12 - this.labelWidth : 12}`, onInput: this.handleSelectChange.bind(this), required: this.required }, this.showFirstOption && h("option", { key: 'e52e8091fc775feec60b0885aad5201d4fc7e679', value: '' }, this.firstOption), this.data.map(item => {
            if (this.selectedValue === item.value) {
                return (h("option", { selected: true, value: item.value }, item.text));
            }
            else {
                return h("option", { value: item.value }, item.text);
            }
        })))));
    }
    static get is() { return "ir-select"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-select.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-select.css"]
        };
    }
    static get properties() {
        return {
            "name": {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "name",
                "reflect": false
            },
            "data": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "selectOption[]",
                    "resolved": "selectOption[]",
                    "references": {
                        "selectOption": {
                            "location": "import",
                            "path": "@/common/models",
                            "id": "src/common/models.ts::selectOption"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "label",
                "reflect": false,
                "defaultValue": "'<label>'"
            },
            "selectStyles": {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "select-styles",
                "reflect": false
            },
            "selectForcedStyles": {
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
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "selectContainerStyle": {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "select-container-style",
                "reflect": false
            },
            "selectedValue": {
                "type": "any",
                "mutable": true,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "selected-value",
                "reflect": true,
                "defaultValue": "null"
            },
            "required": {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "required",
                "reflect": false
            },
            "LabelAvailable": {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "label-available",
                "reflect": false,
                "defaultValue": "true"
            },
            "firstOption": {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "first-option",
                "reflect": false,
                "defaultValue": "'Select'"
            },
            "selectStyle": {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "select-style",
                "reflect": false,
                "defaultValue": "true"
            },
            "showFirstOption": {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "show-first-option",
                "reflect": false,
                "defaultValue": "true"
            },
            "submited": {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "submited",
                "reflect": false,
                "defaultValue": "false"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'sm' | 'md' | 'lg'",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "size",
                "reflect": false,
                "defaultValue": "'md'"
            },
            "textSize": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'sm' | 'md' | 'lg'",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "text-size",
                "reflect": false,
                "defaultValue": "'md'"
            },
            "labelPosition": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'left' | 'right' | 'center'",
                    "resolved": "\"center\" | \"left\" | \"right\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "label-position",
                "reflect": false,
                "defaultValue": "'left'"
            },
            "labelBackground": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | null",
                    "resolved": "\"danger\" | \"dark\" | \"info\" | \"light\" | \"primary\" | \"secondary\" | \"success\" | \"warning\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "label-background",
                "reflect": false,
                "defaultValue": "null"
            },
            "labelColor": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'",
                    "resolved": "\"danger\" | \"dark\" | \"info\" | \"light\" | \"primary\" | \"secondary\" | \"success\" | \"warning\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "label-color",
                "reflect": false,
                "defaultValue": "'dark'"
            },
            "labelBorder": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'theme' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'none'",
                    "resolved": "\"danger\" | \"dark\" | \"info\" | \"light\" | \"none\" | \"primary\" | \"secondary\" | \"success\" | \"theme\" | \"warning\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "label-border",
                "reflect": false,
                "defaultValue": "'theme'"
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "label-width",
                "reflect": false,
                "defaultValue": "3"
            },
            "select_id": {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "select_id",
                "reflect": false,
                "defaultValue": "v4()"
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "test-id",
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "disabled",
                "reflect": false
            },
            "error": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "error",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "initial": {},
            "valid": {}
        };
    }
    static get events() {
        return [{
                "method": "selectChange",
                "name": "selectChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "selectedValue",
                "methodName": "watchHandler"
            }, {
                "propName": "submited",
                "methodName": "watchHandler2"
            }];
    }
    static get listeners() {
        return [{
                "name": "animateIrSelect",
                "method": "handleButtonAnimation",
                "target": "body",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-select.js.map
