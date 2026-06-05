import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: 'dd72e40aee3d4461fe142c323860aa8edd6781de' }, h("ir-interceptor", { key: 'e7feaea5b671292aac0300aae75c6a1c22eef5c0' }), h("ir-toast", { key: '99cfc01e221f02743b2dc0828e3e4ede2be007e4' }), h("main", { key: 'a59abd78df19a5530ff4a99269e0133c42674d94', class: "ir-page__container" }, h("header", { key: 'db31fbb6d9c73e742acd5befdbfd5d776075bafa', class: "tax-page__header" }, h("slot", { key: '3d880af4c2df49c89be16fb314a586a40eaabe7b', name: "heading" }, h("div", { key: 'd3f52c370c3ee0aad9787b1e9803346053ef07b2', class: "tax-page__heading" }, h("h3", { key: 'c172ffef8a92094d04c1336c8094038e193404a2', class: "page-title" }, this.label), this.description && (h("p", { key: 'ecbec22b76e31b6448e9bfa75381c37233729b6c', class: "page__description" }, this.description, h("slot", { key: 'f8c14bd6bb47cbca0466fa1330f6b4d38ee0cda4', name: "page-description" }))))), h("slot", { key: '58ff43c561d934cf859d8aa0559101ce7adb23d5', name: "page-header" })), h("slot", { key: '5d2d55e82066977d435cba2a1e5b691474bd4e28' }))));
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
