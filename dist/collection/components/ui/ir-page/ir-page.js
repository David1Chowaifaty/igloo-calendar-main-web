import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: 'fde8f8ceade3fe5df5784c6a6b6122fff0b3fd16' }, h("ir-interceptor", { key: 'd544ffd4de22dffc4538901444d91215cc844ca8' }), h("ir-toast", { key: 'd64ec87f1c40f1f7fa5f097db35a3a3dfd5f2c17' }), h("main", { key: '36aa78e43aaec235053987e01bb6a17a500f30c7', class: "ir-page__container" }, h("header", { key: 'b29d319eec64482e7894af0920a0c9b9cea7f80d', class: "tax-page__header" }, h("slot", { key: 'e9d662181b8aac169d29d41758925dbbd4dfdd07', name: "heading" }, h("div", { key: '307a00a9b5db99b9b7c2d58301f8f6fbac58557a', class: "tax-page__heading" }, h("h3", { key: '603b771cef20f074a7c31fa06d4238a27b8481a9', class: "page-title" }, this.label), this.description && (h("p", { key: '68d0376e6aedd8c4799dd26e9ad8f61d5b975a83', class: "page__description" }, this.description, h("slot", { key: '268b69aa1e65622bd2ba5b16058c58d69a2bca7d', name: "page-description" }))))), h("slot", { key: '4b6b74a2ef0ddeea18dcd02813a4413301eeba63', name: "page-header" })), h("div", { key: 'bcb5322c8c13d426286d96d9ded2135db5f26391', part: "body", class: 'page-body' }, h("slot", { key: 'cb6d2e143d0cbe8d68788bb01b04bd1c73702437' })))));
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
