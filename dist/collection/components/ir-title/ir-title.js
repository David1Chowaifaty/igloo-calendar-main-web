import { Host, h } from "@stencil/core";
export class IrTitle {
    label;
    borderShown;
    displayContext = 'default';
    justifyContent = 'start';
    closeSideBar;
    el;
    componentDidLoad() {
        this.el.style.justifyContent = this.justifyContent;
    }
    handleJustifyContentChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.el.style.justifyContent = newValue;
        }
    }
    render() {
        return (h(Host, { key: 'eb4ef33053b86a340f6732fe1dce4133613aa7fa' }, h("h4", { key: '4d65e38cfc96143b2916e8950b994aafa55b1270', class: "text-left label font-medium-2 py-0 my-0" }, this.label), this.displayContext === 'sidebar' && (h("ir-icon", { key: '2f689cafd9fa4483bc4fc1ef742242b62c1ee6ea', class: 'close', onIconClickHandler: () => {
                this.closeSideBar.emit(null);
            } }, h("svg", { key: '7ec73d2540e45e6d3c3108f7e69ba10062153932', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, h("path", { key: 'a23eeead2834b400da440e22a8e2366f545d53d6', d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))), this.displayContext !== 'sidebar' && (h("div", { key: '8fb06c9d3de6804ac1f4a1070b7577587a894e39', class: 'title-body' }, h("slot", { key: 'fa29aaced1533911ffc920f1a19f60239adbadf8', name: "title-body" })))));
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
                "reflect": false,
                "attribute": "label"
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
                "reflect": true,
                "attribute": "border-shown"
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
                "reflect": true,
                "attribute": "display-context",
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
                "reflect": true,
                "attribute": "justify-content",
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
