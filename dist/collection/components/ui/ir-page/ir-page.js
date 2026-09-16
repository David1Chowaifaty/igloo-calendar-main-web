import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: '78b2a5c41cd42a71aa6deb3565239acf3408562d' }, h("ir-interceptor", { key: 'abd99dbe5c22ced41b828cd766fc9baa4c26dcea' }), h("ir-toast", { key: '03edf3d4fd91df6e69e500cebc9e31fd671da04a' }), h("main", { key: 'e5dd090b92a87a9bee41cc83d8d3dee51eb25462', part: "main", class: "ir-page__container" }, h("header", { key: '047e7796336a211cff510a430c5d8a486742fc60', part: "header", class: "tax-page__header" }, h("slot", { key: '1e9c6d03f56063cb41f61b33bfc3ffd487f85441', name: "heading" }, h("div", { key: '09bfbc74d4ecbf1582196e5c22933e2525dd2a6f', class: "tax-page__heading" }, h("h3", { key: '555ebdd51ce5ee55374de117b1db7cae433478a0', part: "title", class: "page-title" }, this.label), this.description && (h("p", { key: 'f17ba2f8e61c03e3442236c0c64b938d5d94cae5', part: "description", class: "page__description" }, this.description, h("slot", { key: '0aaa0dd702847ce47a1205d87793e9354ec58514', name: "page-description" }))))), h("slot", { key: 'f6d253f0ee9e00893490a7dfca67acebbe1e6a82', name: "page-header" })), h("div", { key: '727d3102a671daaa77c6a8ff8b0baf2d03f3da3a', part: "body", class: 'page-body' }, h("slot", { key: 'f0b2eced2563cb79bca3946de57fc97594cfa15e' })))));
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
