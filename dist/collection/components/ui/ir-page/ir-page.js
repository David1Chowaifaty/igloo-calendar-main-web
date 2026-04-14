import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: '0e755068f1c08f8e63aaf715fe0754c72f02db61' }, h("ir-interceptor", { key: 'c1ca7b238adea7a4ecf74f82c24f60e675c57fb1' }), h("ir-toast", { key: '684e937edcd2d049a6d149e7a7f816955174c8ae' }), h("main", { key: 'e1be6e9eb163f12de3d4177c196b2dc8c0bb949d', class: "ir-page__container" }, h("header", { key: 'f5aaef36991d5983025b4b661b29616c3eb78062', class: "tax-page__header" }, h("slot", { key: '01481d49cec8f65a30416d64e375892f1abe51f7', name: "heading" }, h("div", { key: '579db8f499de3f8c66a2da1c2a1e4fa4024cbb32', class: "tax-page__heading" }, h("h3", { key: '064691160a70dadba4b85c8d4f52da23bb395559', class: "page-title" }, this.label), this.description && h("p", { key: '05285456b269cf837674318828b97f1ff4383abd', class: "tax-page__subtitle" }, this.description))), h("slot", { key: 'd90bf3c46d5d734ca0368ab274c24652ac5ba281', name: "page-header" })), h("slot", { key: '409e1103a30e19389657134592a81103629d0dad' }))));
    }
    static get is() { return "ir-page"; }
    static get encapsulation() { return "scoped"; }
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
