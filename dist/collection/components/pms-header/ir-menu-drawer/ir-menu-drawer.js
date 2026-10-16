import { h } from "@stencil/core";
export class IrMenuDrawer {
    open;
    menuOpenChanged;
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
    handleOpenChange() {
        this.menuOpenChanged.emit(this.open);
    }
    render() {
        return (h("ir-drawer", { key: 'fc360bfcb816db57ed70a0bb325fb273104cb304', class: "menu__drawer", open: this.open, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.open = false;
            }, style: { '--ir-drawer-width': '25rem' }, placement: "start" }, h("slot", { key: '2acbe0740fe867511058cb4fb00e111f6404519d', name: "label", slot: "label" }), h("slot", { key: '3b194a6ab9004b4de291c6d9b1f2467b34ab083a' }), h("slot", { key: '2743f7ce9bef8ac0d78ec2f274b946b5e7723df3', name: "footer", slot: "footer" })));
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
                "reflect": true,
                "attribute": "open"
            }
        };
    }
    static get events() {
        return [{
                "method": "menuOpenChanged",
                "name": "menuOpenChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }];
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
    static get watchers() {
        return [{
                "propName": "open",
                "methodName": "handleOpenChange"
            }];
    }
}
