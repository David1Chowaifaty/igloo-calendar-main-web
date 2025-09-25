import { Host, h } from "@stencil/core";
export class IrDropdownItem {
    constructor() {
        this.isComponentConnected = true;
        this.hasRegistered = false;
        /**
         * When true, visually hide the item (used for filtering).
         */
        this.hidden = false;
        this.handleClick = (event) => {
            event.stopPropagation();
            if (!this.isComponentConnected)
                return;
            this.dropdownItemSelect.emit(this.value);
        };
    }
    componentDidLoad() {
        if (this.isComponentConnected && !this.hasRegistered) {
            this.hasRegistered = true;
            // Use RAF to ensure parent is ready
            requestAnimationFrame(() => {
                if (this.isComponentConnected) {
                    this.dropdownItemRegister.emit();
                }
            });
        }
    }
    disconnectedCallback() {
        this.isComponentConnected = false;
        // Only emit unregister if we previously registered and parent might still be connected
        if (this.hasRegistered && this.el.parentElement) {
            // Check if parent dropdown still exists in DOM
            const parentDropdown = this.el.closest('ir-dropdown');
            if (parentDropdown && document.contains(parentDropdown)) {
                this.dropdownItemUnregister.emit();
            }
        }
        this.hasRegistered = false;
    }
    async matchesQuery(query) {
        var _a, _b;
        if (!this.isComponentConnected)
            return false;
        const q = query.toLowerCase();
        const hay = ((_b = (_a = this.label) !== null && _a !== void 0 ? _a : this.el.textContent) !== null && _b !== void 0 ? _b : '').toLowerCase();
        return hay.includes(q);
    }
    async setHidden(next) {
        if (this.isComponentConnected) {
            this.hidden = next;
        }
    }
    render() {
        return (h(Host, { key: '574b8e28334fdcbb334992fc1285459c54c1e222', role: "option", tabindex: "-1", "aria-selected": "false", class: { 'dropdown-item': true, 'hidden': this.hidden }, onClick: this.handleClick, "data-value": this.value }, this.html_content ? h("span", { innerHTML: this.html_content }) : h("slot", null)));
    }
    static get is() { return "ir-dropdown-item"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-dropdown-item.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-dropdown-item.css"]
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
                "method": "dropdownItemSelect",
                "name": "dropdownItemSelect",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emit when this item is chosen. Parent listens and closes dropdown."
                },
                "complexType": {
                    "original": "DropdownItem['value']",
                    "resolved": "number | string",
                    "references": {
                        "DropdownItem": {
                            "location": "import",
                            "path": "../ir-dropdown/ir-dropdown",
                            "id": "src/components/ui/ir-dropdown/ir-dropdown.tsx::DropdownItem"
                        }
                    }
                }
            }, {
                "method": "dropdownItemRegister",
                "name": "dropdownItemRegister",
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
                "method": "dropdownItemUnregister",
                "name": "dropdownItemUnregister",
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
//# sourceMappingURL=ir-dropdown-item.js.map
