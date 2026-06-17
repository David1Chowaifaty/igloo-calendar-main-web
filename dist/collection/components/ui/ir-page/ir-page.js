import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: 'f793c4edb7ab526ac33468b3793b6f44df81f4ea' }, h("ir-interceptor", { key: '71733dc55ff2dcaf2d7faf28f06e609ba26ef5b8' }), h("ir-toast", { key: '98999c1656927e896a01e353a1d4406e13c6257b' }), h("main", { key: '517572141c9cb6a9ddc8254f8cf5e366dde38021', class: "ir-page__container" }, h("header", { key: 'd9b867978e94cd5122d2f74702ed1d258922c6ce', class: "tax-page__header" }, h("slot", { key: 'ef668ba411b5d391e0ea646f0c4fb694ce8a2c3d', name: "heading" }, h("div", { key: '48292f2e8a22f51d9a1a975e6ff3b8482853d90f', class: "tax-page__heading" }, h("h3", { key: '5e9123161ef3e28d8deeb1159ae2c59ec10ca3fb', class: "page-title" }, this.label), this.description && (h("p", { key: '127881333a1526620f4766701ef95c5352da8d12', class: "page__description" }, this.description, h("slot", { key: '66637866158eee637254aad7de846baf65409ec6', name: "page-description" }))))), h("slot", { key: '784a772b021a8497907e8e845943b81da1df0fba', name: "page-header" })), h("div", { key: 'fc6f894dd680f5b6b872f449225366f342de8da1', part: "body", class: 'page-body' }, h("slot", { key: 'c798e85a35884f76e29ae6514c406d98c2f4f7b0' })))));
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
