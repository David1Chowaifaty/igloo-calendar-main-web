import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: 'c2dd0dfa4525cf242572e94f912f8a730dc692c0' }, h("ir-interceptor", { key: '4083b34bf2d5c31efb06815c1887fdaa2b6d0027' }), h("ir-toast", { key: 'fb99da63f404c85160e4b3552a22b07c29f6469e' }), h("main", { key: '82b37036667681de4251195bd20e5190f28e919b', class: "ir-page__container" }, h("header", { key: 'b1c49c0e2799d35ad7fa655acb7154da2eaaf0fa', class: "tax-page__header" }, h("slot", { key: '64925c0880560ddd8737e8d24b4e394497e3e4b8', name: "heading" }, h("div", { key: '820a721d84fdeeafe173c510d90d935fe6c0ea83', class: "tax-page__heading" }, h("h3", { key: '3355fd176268e7d2ee2696138539b62be598f613', class: "page-title" }, this.label), this.description && (h("p", { key: '610af2d9866f02fbdc7b9c7eb2bde1a08b6b3587', class: "page__description" }, this.description, h("slot", { key: 'f12f8de2fcd959d614d905bb6e507cac7f6154a5', name: "page-description" }))))), h("slot", { key: '47bf333daa1d7c6b64a10a3f40628c8bd63a99ea', name: "page-header" })), h("div", { key: '4e14a2eede5fb42779f7013b1fd0ad34dedfc027', part: "body", class: 'page-body' }, h("slot", { key: '0b0e922e2c29a3f2295db799800aa5db140ed454' })))));
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
