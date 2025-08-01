import { Host, h } from "@stencil/core";
export class IrTitle {
    constructor() {
        this.displayContext = 'default';
        this.justifyContent = 'start';
    }
    componentDidLoad() {
        this.el.style.justifyContent = this.justifyContent;
    }
    handleJustifyContentChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.el.style.justifyContent = newValue;
        }
    }
    render() {
        return (h(Host, { key: '061fe255c55700d73474b6df5597f706e6a98103' }, h("h4", { key: '3e62cb0aeccb11e998937eee1682634e80505cfd', class: "text-left label font-medium-2 py-0 my-0" }, this.label), this.displayContext === 'sidebar' && (h("ir-icon", { key: 'c052334fb2630153fdb78384b2344f7399e39fa9', class: 'close', onIconClickHandler: () => {
                this.closeSideBar.emit(null);
            } }, h("svg", { key: '799e01e60e6f83c6cb2d6107ac4e9553eb5ec2ca', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, h("path", { key: '4abf8f5c7bbbcdd077871cd069646e51edf42ef1', d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))), this.displayContext !== 'sidebar' && (h("div", { key: 'b4fb361217d9efb6eaf721f4d49c973b784d6380', class: 'title-body' }, h("slot", { key: '7ac06915bc7fa9f03dd08ea5f88c411c9be5f673', name: "title-body" })))));
    }
    static get is() { return "ir-title"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-title.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-title.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "label",
                "reflect": false
            },
            "borderShown": {
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
                "getter": false,
                "setter": false,
                "attribute": "border-shown",
                "reflect": true
            },
            "displayContext": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'default' | 'sidebar'",
                    "resolved": "\"default\" | \"sidebar\"",
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
                "attribute": "display-context",
                "reflect": true,
                "defaultValue": "'default'"
            },
            "justifyContent": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "| 'center'\n    | 'start'\n    | 'end'\n    | 'flex-start'\n    | 'flex-end'\n    | 'left'\n    | 'right'\n    | 'normal'\n    | 'space-between'\n    | 'space-around'\n    | 'space-evenly'\n    | 'stretch'\n    | 'safe center'\n    | 'unsafe center'",
                    "resolved": "\"center\" | \"end\" | \"flex-end\" | \"flex-start\" | \"left\" | \"normal\" | \"right\" | \"safe center\" | \"space-around\" | \"space-between\" | \"space-evenly\" | \"start\" | \"stretch\" | \"unsafe center\"",
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
                "attribute": "justify-content",
                "reflect": true,
                "defaultValue": "'start'"
            }
        };
    }
    static get events() {
        return [{
                "method": "closeSideBar",
                "name": "closeSideBar",
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
    static get watchers() {
        return [{
                "propName": "justifyContent",
                "methodName": "handleJustifyContentChange"
            }];
    }
}
//# sourceMappingURL=ir-title.js.map
