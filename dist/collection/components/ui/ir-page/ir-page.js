import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: '12eef3d8b9bff04cdb3fca002d2c98d652d5f17a' }, h("ir-interceptor", { key: '4c9c16fc27e4eb1e9830221ba43f647977007a91' }), h("ir-toast", { key: '9b9036d0230a3769bb60aac1f02f0f2e79e0a515' }), h("main", { key: '6bb23be81c938d2293a3a7ab5e62320c1e6fb94c', class: "ir-page__container" }, h("header", { key: '2374ba471f113c4043149cb61917e5e79576b14e', class: "tax-page__header" }, h("slot", { key: '9d61c3c6437721fa398133ef604b57390922fe31', name: "heading" }, h("div", { key: 'd0477fa578cac9c59cfa5b83fdc7b473f8c48096', class: "tax-page__heading" }, h("h3", { key: 'a2f5c9181743edfe318da0af753e5bd98ddaa4df', class: "page-title" }, this.label), this.description && (h("p", { key: '4a15daa9988d0b2611dda9312bef29c69541921a', class: "page__description" }, this.description, h("slot", { key: '341e2eae68c375cc784098656f27b07d31724e32', name: "page-description" }))))), h("slot", { key: '98459b62dd126a67c7eadc60624c69597a819a05', name: "page-header" })), h("slot", { key: '9b77ff65b5f412ebb6315c94c1c2ba88885b23ba' }))));
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
