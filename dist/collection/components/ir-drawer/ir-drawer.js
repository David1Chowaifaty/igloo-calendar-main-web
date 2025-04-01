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
        return (h("div", { key: '36125a8d73d0691b58728ab004d3c273932f34b9', class: { 'app-drawer': true, 'app-drawer--open': this.showDrawer }, "aria-hidden": !this.showDrawer }, h("div", { key: 'd6550f45af2e752bfa6d23a219e4ca9468fec778', class: "app-drawer-overlay", onClick: () => this.closeDrawer(), "aria-hidden": !this.showDrawer, tabindex: this.showDrawer ? '0' : '-1' }), h("div", { key: 'db31610cabeebedc1d8f6cff2e4467227c131a1d', class: `app-drawer-content app-drawer-content--${this.placement}`, role: "dialog", "aria-modal": "true", "aria-labelledby": "drawer-title" }, h("div", { key: 'a96a8493725d78148b3c79b730fc39e51859635b', class: "app-drawer-header" }, h("slot", { key: '4e03da5feb1883f6d43483fa40136148372f0a7c', name: "header" }, h("h2", { key: '5d20e621eaf4299f4710b49faab38103e9b026ac', id: "drawer-title" }, this.drawerTitle))), h("div", { key: '54af734239add147d354d8523a02c0775204ba77', class: "app-drawer-body" }, h("slot", { key: 'c716ccdbffe2849fc71bba96eda3bf7dc76e720e' })), h("div", { key: '7937364e84788ae907b6f77e254f9c57f4b9fd64', class: "app-drawer-footer" }, h("slot", { key: '84fff7d0fded1cdd167870f75615456a7d87c140', name: "footer" })))));
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
