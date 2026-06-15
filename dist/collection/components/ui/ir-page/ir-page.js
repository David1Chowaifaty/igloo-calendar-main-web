import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: '22df40847b12a7a5742a40ca1ddd1c4c0cd1cfd6' }, h("ir-interceptor", { key: '34649d072de53d18a638a06e2b0ad8164f70b249' }), h("ir-toast", { key: '303d022f778223c1ba66e8244f95d6d8d88ba5fe' }), h("main", { key: '6e76fe65f279452c0f2b375172b7ccdf50f4464a', class: "ir-page__container" }, h("header", { key: '7e2d9e59fbd4ade9df4910dc6ddcaea518d0b8c7', class: "tax-page__header" }, h("slot", { key: 'b837d4bd05fe9ccde71b2c606ddbb0fe4055ad7b', name: "heading" }, h("div", { key: '34c84c1ae615af3cd43bb2bf156d2fadf2fead31', class: "tax-page__heading" }, h("h3", { key: '1ffef38aded4b1f0967c5b5559e8c90fe847d894', class: "page-title" }, this.label), this.description && (h("p", { key: '57bf0e2a9e4e9b8f79e0e9aa4d78d223da0a3d66', class: "page__description" }, this.description, h("slot", { key: '545aaeefb0219d0753c2d9bd4e17ce92ddfff783', name: "page-description" }))))), h("slot", { key: '0ed60e4797fcebe70f88152a104334e4c75cd9f3', name: "page-header" })), h("div", { key: '6cd5b1570dcfa80ae0bc8b47ce688e406388b224', part: "body", class: 'page-body' }, h("slot", { key: '97bc6441c9e93941abf33763344a9472f8db2427' })))));
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
