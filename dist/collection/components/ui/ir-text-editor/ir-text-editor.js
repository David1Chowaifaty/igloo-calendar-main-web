import { h, Host } from "@stencil/core";
import { ClassicEditor, AccessibilityHelp, Autoformat, AutoLink, Autosave, Bold, Essentials, Italic, Paragraph, SelectAll, TextTransformation, Undo, Underline, PageBreak, Enter, GeneralHtmlSupport, ShiftEnter, SourceEditing, FullPage, } from "ckeditor5";
export class IrTextEditor {
    constructor() {
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
        this.value = undefined;
        this.error = undefined;
        this.placeholder = undefined;
        this.plugins = [];
        this.pluginsMode = 'add';
        this.toolbarItems = [];
        this.toolbarItemsMode = 'add';
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
        return (h(Host, { key: '3be01d07e9efe2db844b859ace0f44e8e3a12803' }, h("div", { key: '651a8a2793a1a466a860134166f8987445c4a58f', id: "editor" })));
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
