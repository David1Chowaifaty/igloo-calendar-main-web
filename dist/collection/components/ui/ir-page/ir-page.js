import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: '45d09d8caa5d3a9cf29b227e70aa95064d9614fc' }, h("ir-interceptor", { key: '233fd8e0658c0b9277763d0b95af3a3c08e64720' }), h("ir-toast", { key: 'b6f8160d35402621768a5b5c873c3d4dc69e8c55' }), h("main", { key: 'e3ba16f4aa60bdd48059cf1a42786b83184cb369', class: "ir-page__container" }, h("header", { key: '8fa87bdd352cfbbea6e20767e4d3823c6f2aa612', class: "tax-page__header" }, h("slot", { key: 'bc25de4ad193923273d9b159c62a0e5e252eefc6', name: "heading" }, h("div", { key: 'f6fa482ce9a4754f17df8471b93add88b0c0ecd0', class: "tax-page__heading" }, h("h3", { key: '41e42ebccb24f429efddbab5823387a0dc7bcd0b', class: "page-title" }, this.label), this.description && (h("p", { key: 'cb368e6437a928a3b3e9409c1a055bf43f4483c1', class: "page__description" }, this.description, h("slot", { key: '84b2926bc8d14c915897d85efc9b779e17d53cef', name: "page-description" }))))), h("slot", { key: '266c17bde0f439c0abd731bbe06d0bd4c514c363', name: "page-header" })), h("slot", { key: '86f7b8e7bff9fc3fba2b44ed49862859e845795c' }))));
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
