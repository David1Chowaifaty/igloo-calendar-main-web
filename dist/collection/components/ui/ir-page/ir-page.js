import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: '1bfd2dceb279b0727a3a05ace703da6ed2e22254' }, h("ir-interceptor", { key: 'ef9bcaffcefbc557b4cd4792322bb68fcc16d7bc' }), h("ir-toast", { key: '786a2814db82b01b9e8fac78700354c095f5523d' }), h("main", { key: '17dbe3c2029af497f70db7f7527b8b7ba4ac0db5', class: "ir-page__container" }, h("header", { key: '2edcef35d1fc7d172c09881db057649546884477', class: "tax-page__header" }, h("slot", { key: '5c4f80956dd0b4c777a9ef6f52baab9f2d4afb65', name: "heading" }, h("div", { key: '160d32db165f7e2be8fe53774c674f8f1aeb0a8a', class: "tax-page__heading" }, h("h3", { key: '7e072b3c184923f0f3b044da03c613482d6d1483', class: "page-title" }, this.label), this.description && (h("p", { key: '5409654daf6597855c80eb9c04571e5a6d4ee9f6', class: "page__description" }, this.description, h("slot", { key: '09f4323a3a4170ac8d1cfd98fbc37008b692b041', name: "page-description" }))))), h("slot", { key: 'e000cb52f25d5c5242953a7860af7d7a6b60c980', name: "page-header" })), h("div", { key: 'adb10127e931e62d07a81f1ca260ebc0b1573d28', part: "body", class: 'page-body' }, h("slot", { key: '653813cf5a540184b6fb30237554ab20bd29a961' })))));
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
