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
        return (h(Host, { key: '5291b213ec1304463fc8ecf3ff6dde634be19387' }, h("h4", { key: '10a556d3787ffb3c4c731c024f34b547d3185944', class: "text-left label font-medium-2 py-0 my-0" }, this.label), this.displayContext === 'sidebar' && (h("ir-icon", { key: '044c1a31e5cfb155bcafb6f3a15517f78b9275b9', class: 'close', onIconClickHandler: () => {
                this.closeSideBar.emit(null);
            } }, h("svg", { key: '41b3df039d7c2e47727e7f5fe154dafe4ce8938b', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, h("path", { key: '3dd3cb7f1aa3689c1d0a639cb9b387319fc6899b', d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))), this.displayContext !== 'sidebar' && (h("div", { key: 'e9fc9e50d46315c10d6a49d655f33a124978b25a', class: 'title-body' }, h("slot", { key: '5ab7dc116768e503b48c6420e6008526d58d9420', name: "title-body" })))));
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
