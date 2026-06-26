import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: 'a5b629315c0d7a80ef9f23ed264b0cd3b5270bd0' }, h("ir-interceptor", { key: '9681139976140bd486ff1cb7756e4e3158664b69' }), h("ir-toast", { key: 'f52e36076c7a62ba9301de5b080457a56f338958' }), h("main", { key: 'c714147631e6a1ad6d85c2664fad7cd306c2a9a6', class: "ir-page__container" }, h("header", { key: '6e8b0f87e99438831bd39b38c4ddee73b8f28408', class: "tax-page__header" }, h("slot", { key: '2d320a5ba16b469b75e751b194beab92348d95c3', name: "heading" }, h("div", { key: '36bcb214f19aa87991d5bd85a5ed2234556a2ad2', class: "tax-page__heading" }, h("h3", { key: '05f7d389d717167f5d61de1182a956ac608ca994', class: "page-title" }, this.label), this.description && (h("p", { key: '0aad22b51d0c04a9ee91cde6f14a5d316c804314', class: "page__description" }, this.description, h("slot", { key: '3cbc28ad52d50af18746ba69283b5619845dedd2', name: "page-description" }))))), h("slot", { key: '02e5b0ac22b5eb82f9c5614cbad20f400366e1fb', name: "page-header" })), h("div", { key: 'f6c1394cc9922e047281549b0b8471e3405760ee', part: "body", class: 'page-body' }, h("slot", { key: '7d93f2b210b9f2f6c12e06ffc899e528cfd91f2f' })))));
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
