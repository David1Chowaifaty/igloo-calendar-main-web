import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: 'a7158b46ed9d886ab80722639c5418391fbd8ed9' }, h("ir-interceptor", { key: '2074020a92590de7675025e247e1bedf67f5a9aa' }), h("ir-toast", { key: '41fb2ac0362f196e6b17277f4a686edfe614f4cb' }), h("main", { key: '4e09e94529a67d9e3da17895aa6d2c68243230cb', class: "ir-page__container" }, h("header", { key: '1fdffd12d3f34c4534de0a456277e56fccd293d3', class: "tax-page__header" }, h("slot", { key: '90fd72dac4674bba14615389ed2ebd620e49acda', name: "heading" }, h("div", { key: 'eb682c5c10187880791e1322413ed6a3d8cbf560', class: "tax-page__heading" }, h("h3", { key: '7b2d77527f3761dc39b7ab626b66e9d56a91369f', class: "page-title" }, this.label), this.description && (h("p", { key: '9462c50d8e1da904f88c12cae60e74107ffacb23', class: "page__description" }, this.description, h("slot", { key: 'ba10d10f355bdfa2603323c09020f8cd0b829261', name: "page-description" }))))), h("slot", { key: 'fe7c5de925ca291d7ef2f04a09cc82058cee6554', name: "page-header" })), h("div", { key: '7ba6e725f578982fb23d3b6c699b6b5d5e7132af', part: "body", class: 'page-body' }, h("slot", { key: 'd9e5d17b4025eda5c8c0604bfb727354fc0cc76b' })))));
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
