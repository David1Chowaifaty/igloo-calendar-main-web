import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: '662257dae60a7534bc6203d28abef7e52a830243' }, h("ir-interceptor", { key: '4b3b5d63ce522162867caf786643316d6b313f64' }), h("ir-toast", { key: 'f2dd3c3405fb257b365a951641d66ec4d6240722' }), h("main", { key: '9549036a3d626d58eedd8c59d0ea493dac3bf146', class: "ir-page__container" }, h("header", { key: '30a5ed90b0e62ffca1b07362d164a73a23e6d322', class: "tax-page__header" }, h("slot", { key: 'fa5fe79063dfc4822da7f3d31b96dbc83d348408', name: "heading" }, h("div", { key: 'ef5388e7a551289ace40fd55e41f1f175259b526', class: "tax-page__heading" }, h("h3", { key: '339ad620de26670d6392e3ec979c16f4b8cceeea', class: "page-title" }, this.label), this.description && (h("p", { key: '798f90036fb019904fd79163fa15149273709f20', class: "page__description" }, this.description, h("slot", { key: '24e6c71b6ad51bac0bd3f81036e0cd4d0d8e6e03', name: "page-description" }))))), h("slot", { key: '5c0365ea66f7c09caf5830ccbfc926f5e78dfb6d', name: "page-header" })), h("div", { key: '34f7645d8a32e54ba9405b569a0bfdbcd3805fa4', part: "body", class: 'page-body' }, h("slot", { key: '7fc7c26ca30f04e32b7b10b342877123c666f4ce' })))));
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
