import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: 'd6c36cccc9ccb3e9f89264b685dab753ee7b0e3d' }, h("ir-interceptor", { key: 'fd7c324797fe54f31a60887f197770552805a4dc' }), h("ir-toast", { key: '1cb065b4b83341240798bde5c997c79521c51c1e' }), h("main", { key: '6a4347af0699a84a136d5fb8b0c5f7c321363ba8', class: "ir-page__container" }, h("header", { key: '76bcca22905d151f81a1823049529c7b409ab0e2', class: "tax-page__header" }, h("slot", { key: '1afd8ea37b242af2a157d7ac2046eef2a726e96d', name: "heading" }, h("div", { key: '3f1181052591be88f3e04d0e04781d8fa63d5ff4', class: "tax-page__heading" }, h("h3", { key: 'c517ee7c7486e13e34a2cf877ffe0eb932956c2c', class: "page-title" }, this.label), this.description && (h("p", { key: '9b968681ae4cc9447b9d61cd24bf6afafec56c9c', class: "page__description" }, this.description, h("slot", { key: '64a13ddfe4abea76eae825f96a70217d258b19df', name: "page-description" }))))), h("slot", { key: '86d956773077f014cebc1510aeedfeee3fb0f93e', name: "page-header" })), h("div", { key: '477638b7f1321220d76298690a15fed6c7e1bff4', part: "body", class: 'page-body' }, h("slot", { key: 'f8fb54db3c61e6ade5cded21f24eef5529d54352' })))));
    }
    static get is() { return "ir-page"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-page.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-page.css"]
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
            "description": {
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
                "attribute": "description"
            }
        };
    }
}
