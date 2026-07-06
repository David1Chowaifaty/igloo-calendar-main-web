import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: '15b86c948d519bffe2f7a4717769cceacf3f9baf' }, h("ir-interceptor", { key: '3e0cc442662a6f4a030ec47eff8e96e92446b56c' }), h("ir-toast", { key: 'c6a711b23cdbebdc328e05397177b27e3f9372a2' }), h("main", { key: '983f28b0a39abbd871cceb842600ce9fb6342afb', class: "ir-page__container" }, h("header", { key: '72ee0ff4af53d219be540bee85b36824dc54aced', class: "tax-page__header" }, h("slot", { key: '6973156049ef2211a3a4880dffaaa0c42aa00f93', name: "heading" }, h("div", { key: 'aab13db647014d01e9e83a1b4235dd79535f7d6a', class: "tax-page__heading" }, h("h3", { key: 'e0a8ff6035f803cfc0a97d02e9476249be4c3914', class: "page-title" }, this.label), this.description && (h("p", { key: 'e6c56dc764b90ab44d6e43656e3562c3c0ef84dc', class: "page__description" }, this.description, h("slot", { key: '8257c0481e29c3deab2c9ae12d9479c537b8ad35', name: "page-description" }))))), h("slot", { key: 'e9fa54d69df25e2151c0cd70633140a9fbe2969e', name: "page-header" })), h("div", { key: '8f135a8bf295f829c8f24e12f084e367d11d8ec9', part: "body", class: 'page-body' }, h("slot", { key: 'c4e1cf063f40301618c222acb5e426677d6f7ee1' })))));
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
