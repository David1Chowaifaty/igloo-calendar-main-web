import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: '15f69423d11ae9599dfaf2caacaf1fc8e11cdefa' }, h("ir-interceptor", { key: 'c81e4abe716b57cc8a6ca8a19d03b0efb6da01a9' }), h("ir-toast", { key: '9b46e81ce9315ee5295818391447cb61585bbf46' }), h("main", { key: '5e43f2d259206cfb935bd7b3e110f6ba02263894', class: "ir-page__container" }, h("header", { key: '91ef0c4483acc37fb672087200210ec1a6a901da', class: "tax-page__header" }, h("slot", { key: 'ea0e293902b8927143b39796864b27122889cc48', name: "heading" }, h("div", { key: '8ffcaa36edc52f65da249db413046a2770f11078', class: "tax-page__heading" }, h("h3", { key: '6ba5c28b943c56f27d9084476e22589d3f7823e0', class: "page-title" }, this.label), this.description && (h("p", { key: 'c2d86f350ce3a282cd22af54f8d7525b77d043ad', class: "page__description" }, this.description, h("slot", { key: 'c7d473399f2b93af53c68b223ff2ee3bff8a79eb', name: "page-description" }))))), h("slot", { key: 'e2fee387342a472be6ef957081ce4a3be158d5f0', name: "page-header" })), h("slot", { key: '1b20308db48548542b3e1ed1ee41e22d0de52dc3' }))));
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
