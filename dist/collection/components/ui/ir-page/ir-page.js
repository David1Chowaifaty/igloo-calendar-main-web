import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: '02945a4dbb7fd31f551edc8a5551db258548d1f1' }, h("ir-interceptor", { key: '098acd730b314207272e7bb295d2f1e57b66582e' }), h("ir-toast", { key: 'ca4494015c9bcfd426d39bd0b0b65a8b6f3552b0' }), h("main", { key: 'e08fb94b278bc54f33241bb2f232d1c452765e50', class: "ir-page__container" }, h("header", { key: '49a975e1491e22671af6675ddfe1b0aab3841570', class: "tax-page__header" }, h("slot", { key: 'f2a433173613c65712a752c19c2e05c68f1b968a', name: "heading" }, h("div", { key: 'e378778be1f90803838a9b0b6490732805ce95fe', class: "tax-page__heading" }, h("h3", { key: '51073718cf1fcca8a1bab5dd42839fb2ac927b53', class: "page-title" }, this.label), this.description && (h("p", { key: 'e52f5a534cad3e530ba05c15ddd54b2bff1e4366', class: "page__description" }, this.description, h("slot", { key: '4da1c6249228a7dfbf383675598a487f6d691886', name: "page-description" }))))), h("slot", { key: '095529393d845ad4c463b4b2569ebae124755618', name: "page-header" })), h("slot", { key: '2483f061ee559ecbea9c8db2d298b3ecf606c456' }))));
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
