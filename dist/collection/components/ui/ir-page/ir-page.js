import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: '5762a75e939ab6ce3ccf49b952f8b4f64954ee74' }, h("ir-interceptor", { key: 'ebfb5a7c3c5bdf7166544deb0ed08d8158f43241' }), h("ir-toast", { key: '4080e4a9c0488b9ad8af2f63f366064e27e1f8b5' }), h("main", { key: '92df3fe9c7864ef243b56e31b4fb03b9a5c15a75', class: "ir-page__container" }, h("header", { key: 'd5c26c747cc85ea1c87f577b827f29ce15bff232', class: "tax-page__header" }, h("slot", { key: 'ab900f65a722dbb3ec2c8cb9f81d09a1aac2e711', name: "heading" }, h("div", { key: '0315f97620a5fce6038ef5a24312c6a4fba4caf5', class: "tax-page__heading" }, h("h3", { key: 'b3d62e899a50346f96223ca8e4b49fdf8fb5364d', class: "page-title" }, this.label), this.description && h("p", { key: '2ce459007846f19b0b919512a2f62316aa3a25f3', class: "tax-page__subtitle" }, this.description))), h("slot", { key: 'f464537a18b10c36f34f698608f915550dd1d03b', name: "page-header" })), h("slot", { key: '1e544dee592e8ce33923347a5f01180b9906b577' }))));
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
