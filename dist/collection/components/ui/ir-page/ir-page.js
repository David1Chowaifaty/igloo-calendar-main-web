import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: 'c884b2eae22afc7309ee8a910a1abcc4e3c51189' }, h("ir-interceptor", { key: 'cafedfe207b0b349a79a0f5fdf0df4ebb977c123' }), h("ir-toast", { key: '364ddccd8faadc0849029ca156cbdd0720c533c2' }), h("main", { key: '728d0db1d7116f9624823767c2f4ad613b3445b9', part: "main", class: "ir-page__container" }, h("header", { key: 'a589a69727e662c2615cf5d6f8ffc132fd22dabc', part: "header", class: "tax-page__header" }, h("slot", { key: '7bb452d09ec33c448a6945eae9127b1b4497efda', name: "heading" }, h("div", { key: '6d543ec9efb062b5ba8073526e680ba2b7f68fd4', class: "tax-page__heading" }, h("h3", { key: '42bf0b2253d554bf534b4fc6dc3f429792ececa0', part: "title", class: "page-title" }, this.label), this.description && (h("p", { key: '1e5a9bc2ba5d98974fbbf83e06d35f49efbb264c', part: "description", class: "page__description" }, this.description, h("slot", { key: '41834c766b97a6eb614e0a1721001591cf29f123', name: "page-description" }))))), h("slot", { key: '44328be3706b91fd011d9c7b09aed1f64318badb', name: "page-header" })), h("div", { key: 'b6d1ffe6f04198223636045d77fa538353fed9c6', part: "body", class: 'page-body' }, h("slot", { key: '73613ceab24356a75cef4fa2fcdd74bd262da021' })))));
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
