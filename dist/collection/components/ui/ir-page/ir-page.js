import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: '8ba878e35d7331169b0e493caeb5addf4460b98c' }, h("ir-interceptor", { key: '952adf54385145ba4f760a4aea2810ecf35a373d' }), h("ir-toast", { key: 'b82ddc19f3ff0783634709a663fbcbf76630e592' }), h("main", { key: '548f19ea0d21a18721c06d85530a4f9592402fa5', class: "ir-page__container" }, h("header", { key: '1ba86c34ed0e450eebf8e906851a906882ece951', class: "tax-page__header" }, h("slot", { key: '28d88288414a7bdd0615d8d8d6b42d9d64179c3e', name: "heading" }, h("div", { key: '86fa7744e382c9c8301ea43aaafeffd97592386a', class: "tax-page__heading" }, h("h3", { key: '9f81106da13a51452e051713b90bf3b025828682', class: "page-title" }, this.label), this.description && h("p", { key: 'f30e861035df70594a5a73ab266e1efc25493913', class: "tax-page__subtitle" }, this.description))), h("slot", { key: '39fe7a13579f0861bc3fe46d61f326336a20e096', name: "page-header" })), h("slot", { key: '3550b90d40c8be6dacb144eded8469947c0d7b15' }))));
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
