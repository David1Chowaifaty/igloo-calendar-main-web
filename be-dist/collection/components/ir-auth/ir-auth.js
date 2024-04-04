import { Host, h } from "@stencil/core";
export class IrAuth {
    constructor() {
        this.authState = 'login';
        this.animationDirection = '';
    }
    handleNavigation(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (this.authState === 'login' && e.detail !== 'login') {
            this.animationDirection = 'slide-right';
        }
        else if (this.authState !== 'login' && e.detail === 'login') {
            this.animationDirection = 'slide-left';
        }
        this.authState = e.detail;
    }
    render() {
        return (h(Host, { key: 'cf26cfea31c42ff80e589e08a766850c0759b198' }, h("div", { key: '4b481cfe169a4b3c9dc92f7503b61ba7e1617ba5', class: `auth-container ${this.animationDirection} p-4 sm:p-6` }, this.authState === 'login' ? h("ir-signin", null) : h("ir-signup", null))));
    }
    static get is() { return "ir-auth"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-auth.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-auth.css"]
        };
    }
    static get states() {
        return {
            "authState": {},
            "animationDirection": {}
        };
    }
    static get events() {
        return [{
                "method": "closeDialog",
                "name": "closeDialog",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "navigate",
                "method": "handleNavigation",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-auth.js.map
