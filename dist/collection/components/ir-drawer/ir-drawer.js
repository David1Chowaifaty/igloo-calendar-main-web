import { h } from "@stencil/core";
export class IrDrawer {
    constructor() {
        this.showDrawer = false;
        /**
         * The placement of the drawer
         */
        this.placement = 'right';
        /**
         * Is the drawer open?
         */
        this.open = false;
        this.toggleDrawer = () => {
            this.open = !this.open;
            this.showDrawer = this.open;
            this.drawerChange.emit(this.open);
        };
    }
    componentDidLoad() {
        if (this.open) {
            this.showDrawer = true;
        }
    }
    handleKeyDown(ev) {
        if (this.open) {
            if (ev.key === 'Escape' || ev.key === 'Esc') {
                this.closeDrawer();
                this.drawerCloseRequested.emit();
            }
        }
    }
    openHandler(newValue) {
        this.showDrawer = newValue;
    }
    async closeDrawer() {
        this.open = false;
        this.showDrawer = false;
        this.drawerChange.emit(this.open);
    }
    render() {
        return (h("div", { key: '72d32f70a04dac07cb0438ad610872aa65a15cec', class: { 'app-drawer': true, 'app-drawer--open': this.showDrawer }, "aria-hidden": !this.showDrawer }, h("div", { key: 'ef01795f5bbcbcc40b1fafbe08d08c4ae1e0c261', class: "app-drawer-overlay", onClick: () => this.closeDrawer(), "aria-hidden": !this.showDrawer, tabindex: this.showDrawer ? '0' : '-1' }), h("div", { key: '6a494d09cf1e56f3006d0326731580a8596ba163', class: `app-drawer-content app-drawer-content--${this.placement}`, role: "dialog", "aria-modal": "true", "aria-labelledby": "drawer-title" }, h("div", { key: '64a25676bcb28ced6a0ce10069544f7a7ca08c72', class: "app-drawer-header" }, h("slot", { key: '39b43d0d29466acb7b8ca7b5c3039c5e43b42109', name: "header" }, h("h2", { key: '67181f363a692c6da405a8df90289aa558e3294f', id: "drawer-title" }, this.drawerTitle))), h("div", { key: '58f0607f7d5d3e3c097227e2e3a3cf8689690da1', class: "app-drawer-body" }, h("slot", { key: 'ae026adfb8234529c4556c654dc7fdf1741d6f02' })), h("div", { key: '56ad70eef93a11dd527039ad1a7ceb54cc160c24', class: "app-drawer-footer" }, h("slot", { key: '2e60d4b058cd1c6426000c3f0784a880ead390a5', name: "footer" })))));
    }
    static get is() { return "ir-drawer"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-drawer.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-drawer.css"]
        };
    }
    static get properties() {
        return {
            "drawerTitle": {
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
                    "text": "The title of the drawer"
                },
                "getter": false,
                "setter": false,
                "attribute": "drawer-title",
                "reflect": false
            },
            "placement": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'left' | 'right'",
                    "resolved": "\"left\" | \"right\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The placement of the drawer"
                },
                "getter": false,
                "setter": false,
                "attribute": "placement",
                "reflect": false,
                "defaultValue": "'right'"
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
                    "text": "Is the drawer open?"
                },
                "getter": false,
                "setter": false,
                "attribute": "open",
                "reflect": true,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "showDrawer": {}
        };
    }
    static get events() {
        return [{
                "method": "drawerChange",
                "name": "drawerChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the drawer visibility changes."
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }, {
                "method": "drawerCloseRequested",
                "name": "drawerCloseRequested",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the drawer is requested to be closed via keyboard"
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
            "closeDrawer": {
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
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "open",
                "methodName": "openHandler"
            }];
    }
    static get listeners() {
        return [{
                "name": "keydown",
                "method": "handleKeyDown",
                "target": "document",
                "capture": false,
                "passive": true
            }];
    }
}
//# sourceMappingURL=ir-drawer.js.map
