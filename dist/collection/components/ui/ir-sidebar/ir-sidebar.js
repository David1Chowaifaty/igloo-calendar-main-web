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
            h("div", { key: '5db00ea8750d30b09e7494d86fc9c7cdfe2e40d2', class: `backdrop ${className}`, onClick: () => {
                    this.toggleSidebar();
                } }),
            h("div", { key: 'daa6f87f6e358244923355d34d8db08a62488b0b', ref: el => (this.sidebarRef = el), class: `sidebar-${this.side} ${className}` }, this.showCloseButton && (h("div", { key: '486f6892822541cdf65c22026bcdb6bcbac6342a', class: 'sidebar-title' }, h("p", { key: 'e48919a833abe8b1011f8fc3595ec7b599e44412', class: 'p-0 m-0' }, this.label), h("div", { key: 'bfaa652df31a07e8c379ba06c001e0ae9194c71f', class: 'p-0 m-0 sidebar-icon-container' }, h("ir-icon", { key: '8b1ed368426c763f77417d2270bfa3c2444fe0f0', class: "", onIconClickHandler: () => {
                    this.toggleSidebar();
                } }, h("svg", { key: '70aa51630845c40cc38cc15b74f07e03c040961d', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, h("path", { key: '1318f8bfa0e18644c68e5438c8ce9d666c2a7ee9', fill: "#6b6f82", d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))))), h("slot", { key: 'f34aedb778eadcdf759bb6c015285b0fda90f80c', name: "sidebar-body" })),
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
