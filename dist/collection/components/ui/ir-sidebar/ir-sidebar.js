import { handleBodyOverflow } from "../../../utils/utils";
import { h } from "@stencil/core";
export class IrSidebar {
    el;
    /**
     * Identifier for the sidebar instance.
     */
    name;
    /**
     * Which side of the screen the sidebar appears on.
     * Options: `'left'` or `'right'`.
     */
    side = 'right';
    /**
     * Whether to show the close (X) button in the sidebar header.
     */
    showCloseButton = true;
    /**
     * Whether the sidebar is open.
     * Can be used with two-way binding.
     */
    open = false;
    /**
     * Inline styles applied to the sidebar container.
     */
    sidebarStyles;
    /**
     * Label text displayed in the sidebar header.
     */
    label;
    /**
     * Prevents the sidebar from closing when `toggleSidebar()` is called.
     * When true, emits `beforeSidebarClose` instead of toggling.
     */
    preventClose;
    /**
     * Event emitted when the sidebar is toggled open/closed.
     * Emits the current `open` state.
     */
    irSidebarToggle;
    /**
     * Event emitted *before* the sidebar attempts to close,
     * but only if `preventClose` is set to true.
     */
    beforeSidebarClose;
    sidebarRef;
    componentDidLoad() {
        this.applyStyles();
    }
    handleSidebarStylesChange() {
        this.applyStyles();
    }
    handleOpenChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            handleBodyOverflow(newValue);
        }
    }
    handleKeyDown(e) {
        if (e.key === 'Escape' && this.open) {
            e.stopImmediatePropagation();
            e.stopPropagation();
            return this.toggleSidebar();
        }
        else {
            return;
        }
    }
    /**
     * Toggles the sidebar's visibility.
     *
     * - If `preventClose` is true, emits `beforeSidebarClose` and does nothing else.
     * - Otherwise, emits `irSidebarToggle` with the current `open` state.
     *
     * Example:
     * ```ts
     * const el = document.querySelector('ir-sidebar');
     * await el.toggleSidebar();
     * ```
     */
    async toggleSidebar() {
        if (this.preventClose) {
            this.beforeSidebarClose.emit();
            return;
        }
        this.irSidebarToggle.emit(this.open);
    }
    /**
     * Applies inline styles defined in `sidebarStyles` to the sidebar container.
     */
    applyStyles() {
        for (const property in this.sidebarStyles) {
            if (this.sidebarStyles.hasOwnProperty(property)) {
                this.sidebarRef.style[property] = this.sidebarStyles[property];
            }
        }
    }
    render() {
        let className = '';
        if (this.open) {
            className = 'active';
        }
        else {
            className = '';
        }
        return [
            h("div", { key: '8ece6e9691649fe3c0489b063fbb958b512fd9c9', class: `backdrop ${className}`, onClick: () => {
                    this.toggleSidebar();
                } }),
            h("div", { key: '82af4b6353b18fa8f46961846832804f74512434', ref: el => (this.sidebarRef = el), class: `sidebar-${this.side} ${className}` }, this.showCloseButton && (h("div", { key: 'fb6ad5fe718cb3e29b6eecc85513ceaee5f9e2eb', class: 'sidebar-title' }, h("p", { key: '6b0a1487476388e24c67e8a12b39f1a8e249bedd', class: 'p-0 m-0' }, this.label), h("div", { key: '6ea4627a81e6e368d0b5fc4c18287bf10fe975f5', class: 'p-0 m-0 sidebar-icon-container' }, h("ir-icon", { key: 'd0778292b1073bf017ff417bb4778e9807c0c650', class: "", onIconClickHandler: () => {
                    this.toggleSidebar();
                } }, h("svg", { key: 'd223bb4267f5bc5b8d9281cf9b6acd1be98c341a', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, h("path", { key: 'eb65bc5d59ce270e0a9f5f8a7f1317fce78e8ffb', fill: "#6b6f82", d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))))), h("slot", { key: 'c77e707f7d4ca482346e8f4be14973b5434b18a8', name: "sidebar-body" })),
        ];
    }
    static get is() { return "ir-sidebar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-sidebar.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-sidebar.css"]
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
                    "text": "Identifier for the sidebar instance."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "name"
            },
            "side": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'right' | 'left'",
                    "resolved": "\"left\" | \"right\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Which side of the screen the sidebar appears on.\nOptions: `'left'` or `'right'`."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "side",
                "defaultValue": "'right'"
            },
            "showCloseButton": {
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
                    "text": "Whether to show the close (X) button in the sidebar header."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-close-button",
                "defaultValue": "true"
            },
            "open": {
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
                    "text": "Whether the sidebar is open.\nCan be used with two-way binding."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "open",
                "defaultValue": "false"
            },
            "sidebarStyles": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Partial<CSSStyleDeclaration>",
                    "resolved": "CSSStyleDeclaration",
                    "references": {
                        "Partial": {
                            "location": "global",
                            "id": "global::Partial"
                        },
                        "CSSStyleDeclaration": {
                            "location": "global",
                            "id": "global::CSSStyleDeclaration"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Inline styles applied to the sidebar container."
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
                    "text": "Label text displayed in the sidebar header."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label"
            },
            "preventClose": {
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
                    "text": "Prevents the sidebar from closing when `toggleSidebar()` is called.\nWhen true, emits `beforeSidebarClose` instead of toggling."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "prevent-close"
            }
        };
    }
    static get events() {
        return [{
                "method": "irSidebarToggle",
                "name": "irSidebarToggle",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when the sidebar is toggled open/closed.\nEmits the current `open` state."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "beforeSidebarClose",
                "name": "beforeSidebarClose",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted *before* the sidebar attempts to close,\nbut only if `preventClose` is set to true."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "toggleSidebar": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Toggles the sidebar's visibility.\n\n- If `preventClose` is true, emits `beforeSidebarClose` and does nothing else.\n- Otherwise, emits `irSidebarToggle` with the current `open` state.\n\nExample:\n```ts\nconst el = document.querySelector('ir-sidebar');\nawait el.toggleSidebar();\n```",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "sidebarStyles",
                "methodName": "handleSidebarStylesChange"
            }, {
                "propName": "open",
                "methodName": "handleOpenChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "keydown",
                "method": "handleKeyDown",
                "target": "body",
                "capture": false,
                "passive": false
            }];
    }
}
