import { h } from "@stencil/core";
export class IrMenuDrawer {
    open;
    componentWillLoad() {
        document.addEventListener('keydown', this.handleDocumentKeyDown);
    }
    disconnectedCallback() {
        document.removeEventListener('keydown', this.handleDocumentKeyDown);
    }
    handleDocumentKeyDown = (e) => {
        const isModifierPressed = e.ctrlKey || e.metaKey;
        if (isModifierPressed && e.key === 'b') {
            e.preventDefault();
            this.open = !this.open;
        }
    };
    async openDrawer() {
        this.open = true;
    }
    render() {
        return (h("ir-drawer", { key: 'dc349fd87dafde9f94e2567466f79051dfd31cee', class: "menu__drawer", open: this.open, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.open = false;
            }, style: { '--ir-drawer-width': '25rem' }, placement: "start" }, h("slot", { key: '344e190cd75f3f60ca7c9c02e2c7c65811298635', name: "label", slot: "label" }), h("slot", { key: 'd9a53e347422fc23f9888e26bd5dc7cb3d7e229e' }), h("slot", { key: 'd26676db84985ff4ca61ae79aad42b6715edb9f6', name: "footer", slot: "footer" })));
    }
    static get is() { return "ir-menu-drawer"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-menu-drawer.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-menu-drawer.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "open",
                "reflect": true
            }
        };
    }
    static get methods() {
        return {
            "openDrawer": {
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
                    "text": "",
                    "tags": []
                }
            }
        };
    }
}
//# sourceMappingURL=ir-menu-drawer.js.map
