import { h, Host } from "@stencil/core";
import { ClassicEditor, AccessibilityHelp, Autoformat, AutoLink, Autosave, Bold, Essentials, Italic, Paragraph, SelectAll, TextTransformation, Undo, Underline, PageBreak, Enter, GeneralHtmlSupport, ShiftEnter, SourceEditing, FullPage, } from "ckeditor5";
export class IrTextEditor {
    constructor() {
        this.plugins = [];
        this.pluginsMode = 'add';
        this.toolbarItems = [];
        this.toolbarItemsMode = 'add';
        this.baseToolbarItems = ['undo', 'redo', '|', 'sourceEditing', '|', 'bold', 'italic', 'underline'];
        this.basePlugins = [
            SourceEditing,
            GeneralHtmlSupport,
            AccessibilityHelp,
            Autoformat,
            AutoLink,
            Autosave,
            Bold,
            Underline,
            PageBreak,
            Essentials,
            Enter,
            Italic,
            Paragraph,
            SelectAll,
            TextTransformation,
            Undo,
            ShiftEnter,
            FullPage,
        ];
    }
    componentDidLoad() {
        this.initEditor();
    }
    onValueChanged(newValue) {
        if (this.editorInstance) {
            const currentEditorValue = this.editorInstance.getData();
            if (newValue !== currentEditorValue) {
                this.editorInstance.setData(newValue);
            }
        }
    }
    onErrorChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            const editorElement = this.el.querySelector('.ck-content');
            if (editorElement) {
                console.log('first');
                editorElement.classList.toggle('error', newValue);
            }
        }
    }
    async initEditor() {
        const plugins = this.pluginsMode === 'replace' ? this.plugins : this.basePlugins.concat(this.plugins);
        const items = this.toolbarItemsMode === 'replace' ? this.toolbarItems : this.baseToolbarItems.concat(this.toolbarItems);
        const editorConfig = {
            toolbar: {
                items,
                shouldNotGroupWhenFull: false,
            },
            plugins,
            initialData: this.value,
            htmlSupport: {
                allow: [
                    {
                        name: /^(b|strong|br|p)$/,
                        attributes: true,
                        classes: true,
                        styles: true,
                    },
                ],
            },
            // licenseKey: '',
            placeholder: this.placeholder,
        };
        if (this.editorInstance) {
            return;
        }
        const editorElement = this.el.querySelector('#editor');
        try {
            this.editorInstance = await ClassicEditor.create(editorElement, editorConfig);
            this.editorInstance.editing.view.document.on('clipboardInput', (evt, data) => {
                const textData = data.dataTransfer.getData('text/plain');
                const htmlRegex = /<\/?[a-z][\s\S]*>/i;
                if (htmlRegex.test(textData)) {
                    // Process the text containing HTML tags
                    const fragment = this.editorInstance.data.htmlProcessor.toView(textData);
                    data.content = fragment;
                    // Prevent the default handling
                    evt.stop();
                    // Fire the 'inputTransformation' event manually
                    this.editorInstance.plugins.get('ClipboardPipeline').fire('inputTransformation', { content: fragment });
                }
            });
            this.editorInstance.model.document.on('change:data', () => {
                const editorData = this.editorInstance.getData();
                this.handletextChange(editorData);
            });
            this.editorInstance.plugins.get('Enter').fire('');
        }
        catch (error) {
            console.error('There was a problem initializing the editor:', error);
        }
    }
    handletextChange(data) {
        this.textChange.emit(data);
    }
    disconnectedCallback() {
        if (this.editorInstance) {
            this.editorInstance.destroy().catch((error) => {
                console.error('Error destroying editor:', error);
            });
        }
    }
    render() {
        return (h(Host, { key: 'da4f7fa01386c810a86c5a3dab3b6e9c38aee60c' }, h("div", { key: '74466b640dbdb07af04348581e31ec5ab17c83e7', id: "editor" })));
    }
    static get is() { return "ir-text-editor"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-text-editor.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-text-editor.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "value",
                "reflect": false
            },
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "placeholder",
                "reflect": false
            },
            "plugins": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "(string | PluginConstructor)[]",
                    "resolved": "(string | PluginConstructor)[]",
                    "references": {
                        "PluginConstructor": {
                            "location": "import",
                            "path": "ckeditor5",
                            "id": "node_modules::PluginConstructor"
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
                "setter": false,
                "defaultValue": "[]"
            },
            "pluginsMode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'replace' | 'add'",
                    "resolved": "\"add\" | \"replace\"",
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
                "attribute": "plugins-mode",
                "reflect": false,
                "defaultValue": "'add'"
            },
            "toolbarItems": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ToolbarConfigItem[]",
                    "resolved": "ToolbarConfigItem[]",
                    "references": {
                        "ToolbarConfigItem": {
                            "location": "import",
                            "path": "ckeditor5",
                            "id": "node_modules::ToolbarConfigItem"
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
                "setter": false,
                "defaultValue": "[]"
            },
            "toolbarItemsMode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'replace' | 'add'",
                    "resolved": "\"add\" | \"replace\"",
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
                "attribute": "toolbar-items-mode",
                "reflect": false,
                "defaultValue": "'add'"
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
                    "text": ""
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
                "methodName": "onValueChanged"
            }, {
                "propName": "error",
                "methodName": "onErrorChanged"
            }];
    }
}
//# sourceMappingURL=ir-text-editor.js.map
