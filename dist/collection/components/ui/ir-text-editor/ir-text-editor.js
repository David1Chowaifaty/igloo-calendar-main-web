import { h } from "@stencil/core";
import Quill from "quill";
function buildToolbar(config) {
    const toolbar = [];
    const textFormats = [];
    if (config.bold)
        textFormats.push('bold');
    if (config.italic)
        textFormats.push('italic');
    if (config.underline)
        textFormats.push('underline');
    if (config.strike)
        textFormats.push('strike');
    if (textFormats.length) {
        toolbar.push(textFormats);
    }
    if (config.link)
        toolbar.push(['link']);
    if (config.image)
        toolbar.push(['image']);
    if (config.video)
        toolbar.push(['video']);
    if (config.clean)
        toolbar.push(['clean']);
    return toolbar;
}
export class IrTextEditor {
    constructor() {
        /** Initial HTML content */
        this.value = '';
        /** If true, makes the editor read-only */
        this.readOnly = false;
        /** Determines if the current user can edit the content */
        this.userCanEdit = true;
    }
    componentDidLoad() {
        const options = {
            modules: {
                toolbar: this.computedToolbar,
            },
            placeholder: this.placeholder,
            readOnly: !this.userCanEdit || this.readOnly,
            theme: 'snow',
        };
        this.editor = new Quill(this.editorContainer, options);
        if (this.value) {
            this.setEditorValue(this.value);
        }
        this.editor.on('text-change', (_, __, source) => {
            if (source === 'user' && this.maxLength) {
                const plainText = this.editor.getText();
                const effectiveLength = plainText.endsWith('\n') ? plainText.length - 1 : plainText.length;
                if (effectiveLength > this.maxLength) {
                    const excess = effectiveLength - this.maxLength;
                    this.editor.deleteText(this.maxLength, excess, 'user');
                    return;
                }
            }
            const html = this.editor.root.innerHTML;
            this.textChange.emit(html);
        });
    }
    handleValueChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.setEditorValue(newValue);
        }
    }
    onReadOnlyChange(newVal) {
        if (this.editor) {
            this.editor.enable(this.userCanEdit && !newVal);
        }
    }
    onUserCanEditChange(newVal) {
        if (this.editor) {
            this.editor.enable(newVal && !this.readOnly);
        }
    }
    disconnectedCallback() {
        if (this.editor) {
            this.editor = null;
        }
    }
    get computedToolbar() {
        return this.toolbarConfig ? buildToolbar(this.toolbarConfig) : [['bold', 'italic', 'underline', 'strike'], ['link'], ['clean']];
    }
    setEditorValue(value) {
        if (!this.editor) {
            return;
        }
        this.editor.clipboard.dangerouslyPasteHTML(value);
        requestAnimationFrame(() => {
            const length = this.editor.getLength();
            this.editor.setSelection(length - 1, 0);
        });
    }
    render() {
        return (h("div", { key: '31e1e65c3ad2653854595df1faddef9cf35f6bb4', class: { 'editor-wrapper': true, 'error': this.error } }, h("div", { key: '6899c7bd5c3c3cbd2bc0a190389992e09a090b45', ref: el => (this.editorContainer = el), class: "editor-container" })));
    }
    static get is() { return "ir-text-editor"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-text-editor.css", "quill.snow.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-text-editor.css", "quill.snow.css"]
        };
    }
    static get properties() {
        return {
            "error": {
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
                "attribute": "error",
                "reflect": false
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "max-length",
                "reflect": false
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
                    "text": "Initial HTML content"
                },
                "getter": false,
                "setter": false,
                "attribute": "value",
                "reflect": false,
                "defaultValue": "''"
            },
            "readOnly": {
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
                    "text": "If true, makes the editor read-only"
                },
                "getter": false,
                "setter": false,
                "attribute": "read-only",
                "reflect": false,
                "defaultValue": "false"
            },
            "userCanEdit": {
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
                    "text": "Determines if the current user can edit the content"
                },
                "getter": false,
                "setter": false,
                "attribute": "user-can-edit",
                "reflect": false,
                "defaultValue": "true"
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
                    "text": "Placeholder text"
                },
                "getter": false,
                "setter": false,
                "attribute": "placeholder",
                "reflect": false
            },
            "toolbarConfig": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ToolbarConfig",
                    "resolved": "ToolbarConfig",
                    "references": {
                        "ToolbarConfig": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/work-rony/modified-ir-webcmp/src/components/ui/ir-text-editor/ir-text-editor.tsx",
                            "id": "src/components/ui/ir-text-editor/ir-text-editor.tsx::ToolbarConfig"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Type-safe toolbar configuration.\r\nFor example, you can pass:\r\n\r\n{\r\n  bold: true,\r\n  italic: true,\r\n  underline: true,\r\n  strike: false,\r\n  link: true,\r\n  clean: true\r\n}"
                },
                "getter": false,
                "setter": false
            }
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
                    "text": "Emits current HTML content whenever it changes"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "handleValueChange"
            }, {
                "propName": "readOnly",
                "methodName": "onReadOnlyChange"
            }, {
                "propName": "userCanEdit",
                "methodName": "onUserCanEditChange"
            }];
    }
}
//# sourceMappingURL=ir-text-editor.js.map
