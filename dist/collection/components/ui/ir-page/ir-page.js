import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: 'c9aa3cd1fdb23f78bf6d1023825c6a529f8cf1f3' }, h("ir-interceptor", { key: 'a4b5c5698791affc8d61141b4ff5854f133681f0' }), h("ir-toast", { key: '18248155f36d91f584c6e4aaadd14677a1512a53' }), h("main", { key: '60d0438fac9a53e2d2bd2cd64019ed3c859d42a6', class: "ir-page__container" }, h("header", { key: '86f0a669abc279c3bc7328a490b37562c0117eac', class: "tax-page__header" }, h("slot", { key: 'a70fb72caf316ede633f765aecd86abc7c69efae', name: "heading" }, h("div", { key: 'c8a85e87a17d338992f9062c863276991eb9be71', class: "tax-page__heading" }, h("h3", { key: 'ab890f5169e58dbcad39ad89cc3633f23a1638f7', class: "page-title" }, this.label), this.description && (h("p", { key: '28fd9f2efebeb29c06f66e3fd9b58e4229f0695b', class: "page__description" }, this.description, h("slot", { key: '25ce9b2a5f93fe17fae5c7bdd2adc807ce80baa0', name: "page-description" }))))), h("slot", { key: '04ccb780091bd566bb290cac225c82dd978262b5', name: "page-header" })), h("div", { key: 'a6c644e94c99fb7963dddba068ce61ee5e299909', part: "body", class: 'page-body' }, h("slot", { key: 'e4b42225cb330d793fe09c71a28c755cea01cf9e' })))));
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
