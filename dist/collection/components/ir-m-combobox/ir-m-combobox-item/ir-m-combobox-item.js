// src/components/ir-m-combobox-item/ir-m-combobox-item.tsx
import { h, Host } from "@stencil/core";
export class IrMComboboxItem {
    constructor() {
        /**
         * When true, visually hide the item (used for filtering).
         */
        this.hidden = false;
        this.handleClick = () => {
            this.comboboxItemSelect.emit(this.toOption());
        };
    }
    componentDidLoad() {
        this.comboboxItemRegister.emit();
    }
    disconnectedCallback() {
        this.comboboxItemUnregister.emit();
    }
    toOption() {
        var _a, _b;
        const label = ((_b = (_a = this.label) !== null && _a !== void 0 ? _a : this.el.textContent) !== null && _b !== void 0 ? _b : '').trim();
        return {
            value: this.value,
            label,
            html_content: this.html_content,
        };
    }
    async matchesQuery(query) {
        var _a, _b;
        const q = query.toLowerCase();
        const hay = ((_b = (_a = this.label) !== null && _a !== void 0 ? _a : this.el.textContent) !== null && _b !== void 0 ? _b : '').toLowerCase();
        return hay.includes(q);
    }
    async setHidden(next) {
        this.hidden = next;
    }
    render() {
        // Render either provided html_content or the slotted content
        return (h(Host, { key: 'e86ec76787bcacc6a184c6f34d71720816c5b0c8', role: "option", tabindex: "-1", "aria-selected": "false", class: { 'dropdown-item': true }, onClick: this.handleClick }, this.html_content ? h("span", { innerHTML: this.html_content }) : h("slot", null)));
    }
    static get is() { return "ir-m-combobox-item"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-m-combobox-item.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-m-combobox-item.css"]
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
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Required value for the option"
                },
                "getter": false,
                "setter": false,
                "attribute": "value",
                "reflect": false
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Optional label (falls back to textContent)"
                },
                "getter": false,
                "setter": false,
                "attribute": "label",
                "reflect": false
            },
            "html_content": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Optional html_content (when you want rich content);\nIf omitted, the component will render its own slot content."
                },
                "getter": false,
                "setter": false,
                "attribute": "html_content",
                "reflect": false
            },
            "hidden": {
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
                    "text": "When true, visually hide the item (used for filtering)."
                },
                "getter": false,
                "setter": false,
                "attribute": "hidden",
                "reflect": true,
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "comboboxItemSelect",
                "name": "comboboxItemSelect",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emit when this item is chosen. Parent listens and closes dropdown."
                },
                "complexType": {
                    "original": "ComboboxOption",
                    "resolved": "ComboboxOption",
                    "references": {
                        "ComboboxOption": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-m-combobox/types.ts::ComboboxOption"
                        }
                    }
                }
            }, {
                "method": "comboboxItemRegister",
                "name": "comboboxItemRegister",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Inform the parent this item exists (parent will index and manage focus)"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "comboboxItemUnregister",
                "name": "comboboxItemUnregister",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Inform the parent this item is gone"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "matchesQuery": {
                "complexType": {
                    "signature": "(query: string) => Promise<boolean>",
                    "parameters": [{
                            "name": "query",
                            "type": "string",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<boolean>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "setHidden": {
                "complexType": {
                    "signature": "(next: boolean) => Promise<void>",
                    "parameters": [{
                            "name": "next",
                            "type": "boolean",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=ir-m-combobox-item.js.map
