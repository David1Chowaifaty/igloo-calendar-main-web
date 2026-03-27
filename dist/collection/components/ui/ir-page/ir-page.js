import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: 'd9cd297e35185a6b18affbe773dbbdcdda56aaf9' }, h("ir-interceptor", { key: 'cafeda0eccada08c55f5541cc92ad66ee4ce1a58' }), h("ir-toast", { key: 'eac7278e563831a180e31017e3f6616d2fd85699' }), h("main", { key: '68eaee848c13146456a38591a38ad757974c9297', class: "ir-page__container" }, h("header", { key: '20e81a0b540a71f123d97acc503a2b234d8bbaaf', class: "tax-page__header" }, h("slot", { key: 'c59ce4bf3127a450856d99d4e81bed5b4df36da6', name: "heading" }, h("div", { key: 'ba3175d80f48934bde3003f4f1462b941d503c80', class: "tax-page__heading" }, h("h3", { key: '33791e7b424ba26e94a45ce282cd35525bd06df6', class: "page-title" }, this.label), this.description && h("p", { key: 'ba994ac3ce03962ec4a91512a9b699c868a3bf2b', class: "tax-page__subtitle" }, this.description))), h("slot", { key: 'f03a1d14eedcbd745a01d65cdd8a046c04e8b59a', name: "page-header" })), h("slot", { key: 'c2f75d8cc0e5b6eae6987f8d2baa72ef9ef50809' }))));
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
