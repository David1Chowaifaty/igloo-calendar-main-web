import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: 'd5a782116df73ffc03a0791a94b93b9d68d78945' }, h("ir-interceptor", { key: 'd1f944bbaae3d2cba3ad79b7965dbfdce24ed881' }), h("ir-toast", { key: '354d221c045b4b51de76945241fa7e3bd0f9da7e' }), h("main", { key: '60726f9190dfccd06d8a706d5783e519dcdac233', class: "ir-page__container" }, h("header", { key: 'd58152ec6b68d6fd48ed706fb362fffe9de9b957', class: "tax-page__header" }, h("slot", { key: '22195521f46f00c7864a228be2364f9a5bb60763', name: "heading" }, h("div", { key: 'ada0cdd0553428b2eb9ed8da0afca4f30cac205a', class: "tax-page__heading" }, h("h3", { key: '3f4674e402f4d1259f62d8c304167f1e320d9d66', class: "page-title" }, this.label), this.description && h("p", { key: '813b257055a9e12e43c35842a454173a7b1edb3c', class: "tax-page__subtitle" }, this.description))), h("slot", { key: '5fc2d9e643feadf90322d6c4e87d25607fd54d21', name: "page-header" })), h("slot", { key: '6ff052c6a727087b2ebcd2ee20a8f798462f542a' }))));
    }
    static get is() { return "ir-page"; }
    static get encapsulation() { return "scoped"; }
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
                "attribute": "label",
                "reflect": false
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
                "attribute": "description",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=ir-page.js.map
