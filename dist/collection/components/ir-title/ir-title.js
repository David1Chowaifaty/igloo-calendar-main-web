import { Host, h } from "@stencil/core";
export class IrTitle {
    constructor() {
        this.label = undefined;
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
        return (h(Host, { key: '81509bbd7b51011d2e1d2a6164f39c0892d697e5' }, h("h4", { key: 'aa5da49734e8e91ca1da74dfccd74b5d6f888e22', class: "text-left font-medium-2 py-0 my-0" }, this.label), this.displayContext === 'sidebar' && (h("ir-icon", { key: 'cf40cdf80af7bc96d1313c848da243458ce8f9ba', class: 'close', onIconClickHandler: () => {
                this.closeSideBar.emit(null);
            } }, h("svg", { key: '61b715dade9d4b684045c8eeed68df4e6dd6bee9', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, h("path", { key: 'd7362d18871ed628781427e463fbbc965a3c24bc', d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))), this.displayContext !== 'sidebar' && (h("div", { key: '78f805203bbf01fa928ed2a65e66626938443914', class: 'title-body' }, h("slot", { key: '6d49a37f7ea569a09f748bd04fcf8e82cf698e3f', name: "title-body" })))));
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
                "attribute": "label",
                "reflect": false
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
                "attribute": "display-context",
                "reflect": true,
                "defaultValue": "'default'"
            },
            "justifyContent": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "| 'center'\r\n    | 'start'\r\n    | 'end'\r\n    | 'flex-start'\r\n    | 'flex-end'\r\n    | 'left'\r\n    | 'right'\r\n    | 'normal'\r\n    | 'space-between'\r\n    | 'space-around'\r\n    | 'space-evenly'\r\n    | 'stretch'\r\n    | 'safe center'\r\n    | 'unsafe center'",
                    "resolved": "\"center\" | \"end\" | \"flex-end\" | \"flex-start\" | \"left\" | \"normal\" | \"right\" | \"safe center\" | \"space-around\" | \"space-between\" | \"space-evenly\" | \"start\" | \"stretch\" | \"unsafe center\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
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
