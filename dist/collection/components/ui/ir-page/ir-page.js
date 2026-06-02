import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: '6dd8c2275360d58e2960f4f29a38a5471958f214' }, h("ir-interceptor", { key: '765f2ed4fa7555bce209a9e543bab8629107df58' }), h("ir-toast", { key: '60869f09ea526792dfddbe847597f4f6611d3b32' }), h("main", { key: '3d2d52b0f32dc8aa6413801f27b2197b6d275363', class: "ir-page__container" }, h("header", { key: 'f7089b49a774d2a497edd9eb9f86cd00b4186f84', class: "tax-page__header" }, h("slot", { key: 'd39a7ad4e6eda7d4a3e863b485ef3e58d6d97510', name: "heading" }, h("div", { key: 'fc75ea38de88be309a2bf61f37709e61dba209af', class: "tax-page__heading" }, h("h3", { key: '22799ebece5a7ce7bd7216f855eabc485871aa47', class: "page-title" }, this.label), this.description && (h("p", { key: 'ef32f2a0782cc646846134000078149acc75b7db', class: "page__description" }, this.description, h("slot", { key: 'ac6a0a55345c6480b3c7eb16eb035f9333304006', name: "page-description" }))))), h("slot", { key: '07a004c75387c32a8ea84950e83743ede6aa11b8', name: "page-header" })), h("slot", { key: '188d09509c9fbd0cdcdb2005a03f3edd3ed8ac8f' }))));
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
