import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: '6424bcea41c487258cdaad4df8dd9fe40b604cf7' }, h("ir-interceptor", { key: '6cd85e0064f310ce5ece96bf5935f63ab81433d3' }), h("ir-toast", { key: '93aab2a85f33ac611f367887c11f927146545ff5' }), h("main", { key: '3a43b4b68546c4b163bd797d3e512b6498597fa3', part: "main", class: "ir-page__container" }, h("header", { key: '1ed32c2d097e74fed33ab76c49b85fd4720a5332', part: "header", class: "tax-page__header" }, h("slot", { key: 'a14820bf69705efcfebd3854999e477f4e8d3661', name: "heading" }, h("div", { key: '2f432161be80fa886a96d6341304d5ebaf1e94ef', class: "tax-page__heading" }, h("h3", { key: 'fe546de06d999e3d412c1c686cae989bdf7131d6', part: "title", class: "page-title" }, this.label), this.description && (h("p", { key: 'bfeac5313690b1b8c7df94e3df591286c4f80f6f', part: "description", class: "page__description" }, this.description, h("slot", { key: '0aaea8aded7ae9f401fc809f1d50bca96ce6c1d7', name: "page-description" }))))), h("slot", { key: '31baff9f9e4ad52ae04d8442665df61bbb2cef8f', name: "page-header" })), h("div", { key: '05b3fa3644f7831ade3d2751bdff43e8e0098fcf', part: "body", class: 'page-body' }, h("slot", { key: 'fa4f550e3754dc29d8ff9d2aa62937a443d193a2' })))));
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
