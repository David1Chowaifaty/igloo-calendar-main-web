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
        this.editorValue = '';
    }
    componentDidLoad() {
        const options = {
            modules: {
                toolbar: {
                    container: this.computedToolbar,
                    handlers: {
                        undo: () => {
                            if (this.editor) {
                                this.editor.history.undo();
                                this.updateHistoryButtons();
                            }
                        },
                        redo: () => {
                            if (this.editor) {
                                this.editor.history.redo();
                                this.updateHistoryButtons();
                            }
                        },
                    },
                },
                history: {
                    delay: 1000,
                    maxStack: 100,
                    userOnly: true,
                },
            },
            placeholder: this.placeholder,
            readOnly: !this.userCanEdit || this.readOnly,
            theme: 'snow',
        };
        const icons = Quill.import('ui/icons');
        icons['undo'] =
            '<svg title="undo" xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 512 512"><path class="ql-fill" d="M48.5 224L40 224c-13.3 0-24-10.7-24-24L16 72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8L48.5 224z" /></svg>'; // Replace '...' with actual SVG path
        icons['redo'] =
            '<svg title="redo" xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 512 512"><path class="ql-fill" d="M463.5 224l8.5 0c13.3 0 24-10.7 24-24l0-128c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8l119.5 0z"/></svg>';
        this.editor = new Quill(this.editorContainer, options);
        this.editor.getModule('toolbar').addHandler('undo', () => {
            this.editor.history.undo();
        });
        this.editor.getModule('toolbar').addHandler('redo', () => {
            this.editor.history.redo();
        });
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
            this.editorValue = html;
            this.textChange.emit(html);
        });
    }
    handleValueChange(newValue, oldValue) {
        if (!newValue) {
            this.setEditorValue(newValue);
            return;
        }
        if (newValue !== oldValue && newValue !== this.editorValue) {
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
        return this.toolbarConfig ? buildToolbar(this.toolbarConfig) : [[{ undo: 'ql-undo' }, { redo: 'ql-redo' }], ['bold', 'italic', 'underline', 'strike'], ['link'], ['clean']];
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
    updateHistoryButtons() {
        const undoButton = this.el.querySelector('.ql-undo');
        const redoButton = this.el.querySelector('.ql-redo');
        if (!this.editor)
            return;
        // Disable undo if there is no undo history
        if (this.editor.history.stack.undo.length === 0) {
            undoButton && (undoButton.disabled = true);
        }
        else {
            undoButton && (undoButton.disabled = false);
        }
        // Disable redo if there is no redo history
        if (this.editor.history.stack.redo.length === 0) {
            redoButton && (redoButton.disabled = true);
        }
        else {
            redoButton && (redoButton.disabled = false);
        }
    }
    render() {
        return (h("div", { key: '3034946bc58f13feb540ddc78b0874661d767b62', class: { 'editor-wrapper': true, 'error': this.error } }, h("div", { key: 'd6077805255266d64eaf3143304f1ed8b2dff348', ref: el => (this.editorContainer = el), class: "editor-container" })));
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
                            "path": "/__w/modified-ir-webcmp/modified-ir-webcmp/src/components/ui/ir-text-editor/ir-text-editor.tsx",
                            "id": "src/components/ui/ir-text-editor/ir-text-editor.tsx::ToolbarConfig"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Type-safe toolbar configuration.\nFor example, you can pass:\n\n{\n  bold: true,\n  italic: true,\n  underline: true,\n  strike: false,\n  link: true,\n  clean: true\n}"
                },
                "getter": false,
                "setter": false
            }
        };
    }
    static get states() {
        return {
            "editorValue": {}
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
