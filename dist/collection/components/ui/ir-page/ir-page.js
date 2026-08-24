import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: '665bd9c6eb46932bddf05c8ecc56ce1ee258526e' }, h("ir-interceptor", { key: '0bff71bd02ae27a778014ace95ff13452568ab2d' }), h("ir-toast", { key: '75b871eeadd51e03bb5cfcf20b65f881288846be' }), h("main", { key: '3d3496d2e74ec5bb8667bd7a484a6e5d79e261d1', part: "main", class: "ir-page__container" }, h("header", { key: 'bafffdd15580c53b568ae7bd7951922504f73917', part: "header", class: "tax-page__header" }, h("slot", { key: '54192604b266fdb823008cf344dc60a01d5e285d', name: "heading" }, h("div", { key: '90e31edb73c0096119e19d9eab069b60ee927d76', class: "tax-page__heading" }, h("h3", { key: '10a00dd0c5808fdd007207286313d67460a21bdb', part: "title", class: "page-title" }, this.label), this.description && (h("p", { key: '0bb1ddc8af2fea72e7218dacac18f13d0f4f2c38', part: "description", class: "page__description" }, this.description, h("slot", { key: '8d5554765752fda90eca939e784cbe0d33884bad', name: "page-description" }))))), h("slot", { key: '57d1f230d330c895b0e43d6b4ad57f96bd8eba49', name: "page-header" })), h("div", { key: '5c6160565aae43e14e147cb6fad54a4452ed9107', part: "body", class: 'page-body' }, h("slot", { key: '78b989e15c8f69c731626a414f193fdc6c6b00a5' })))));
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
