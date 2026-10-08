import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: '96ba8ec93642427b0cffb89b93354e185f2919ed' }, h("ir-interceptor", { key: '5c6dcf8b4d05f71e9783a615566cadd0c9ed9c02' }), h("ir-toast", { key: '80ad10630d26782f45f037148fb6c2b97df76c47' }), h("main", { key: 'a6bfd55a1a7b164b73fe1592479cd3bbd800dd7a', part: "main", class: "ir-page__container" }, h("header", { key: 'b7f316c3ae2ee9cc098145e4f963f283ec091842', part: "header", class: "tax-page__header" }, h("slot", { key: '90f9a2962779ecb569ca5d019e65fd61e4d937e4', name: "heading" }, h("div", { key: '21900ed8c331fe3398029c3cce83bccd7019edd0', class: "tax-page__heading" }, h("h3", { key: '4a95199041ab0adee0a286534f24dfcc337ba11e', part: "title", class: "page-title" }, this.label), this.description && (h("p", { key: 'a9bee0df5f97401d04f7bdf747f0fd6194c03d6c', part: "description", class: "page__description" }, this.description, h("slot", { key: '5dea753e89922671c2c84835f14b5ca4f979f73f', name: "page-description" }))))), h("slot", { key: '0281dbd004021753c1094ef9417bf12fcd49fc36', name: "page-header" })), h("div", { key: '342695c048e9daf1fcde3f89383ae8a232c4c3f0', part: "body", class: 'page-body' }, h("slot", { key: '596845479e809c68023b64d248e9ec9d7d6ed82f' })))));
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
