import { h } from "@stencil/core";
export class IrGhsSelectionBucket {
    selectedProperties = [];
    isGenerating = false;
    generateRequest;
    removeAll;
    removeProperty;
    render() {
        return (h("wa-card", { key: 'e766738c22c6dc769840903fcf6ff633e3a2fcf4', class: "ir-ghs-selection-bucket__container" }, h("div", { key: 'be7603f1fe4dbc21287d6f50d6a3c6f4bece84e5', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: '2ee382658b8b2fac86af0763bd5e3dd5f1f3c6a8', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: '8af97f53d4c58346d868560391de888bce12ff13', class: "ir-ghs-selection-bucket__title" }, "To be added"), h("wa-badge", { key: 'fd30c3b42c4741c87f1e2fbae5e9611eacad71e8', variant: "brand" }, this.selectedProperties.length)), h("div", { key: 'fdd7940da89d03de0c7f616403bd6ce8f91edc21', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: '1800d973eadd272ef0b67f923eb8c43db4d5e75a', type: "button", size: "small", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, "Generate request"))), h("div", { key: '6e66c0217097bcbf3e55bb6eca16470ac43937fb', class: "ir-ghs-selection-bucket__body" }, h("div", { key: '07c769ea47e55548084e6b6c5f2570c72d35b136', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: '16c19b16f62a6806a47eeb973850b3aa2c861e12', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: '9ef9337f2a86038885516c350f4cba9919ac94d1' }, h("tr", { key: '7ab4d5520fb27ac45de8a1f73c7ebccd536dc0ef', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: 'a752d30f20fa43028edcfece5f527f5d82013606', class: "ir-ghs-selection-bucket__header-cell" }, "Property name"), h("th", { key: 'eaae0d4a1f4bd57dc30072fe0b7e532fb3973627', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: '0eedd547210f57a3f163a768b4baf822991c5fb8', variant: "danger", appearance: "plain", size: "small", onClick: () => this.removeAll.emit(), title: "Remove all" }, h("wa-icon", { key: 'cb2fa362e197e9444c1d158abc7611de3bf725b9', name: "trash" })))))), h("tbody", { key: '3cae39f760332df20b007c1a2f5f4f50a6d91abf' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "small", onClick: () => this.removeProperty.emit(p.AC_ID), title: "Remove from list" }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: 'acb631d3e649c5632de04e3fa37eb388088b672a' }, h("td", { key: '490a4f870faece139bcd815cc5b4bf8992fcf205', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: 'ba9c8fbc148eb77e3d65381f5d71cf4b5d995170', class: "ir-ghs-selection-bucket__empty-text" }, "No properties selected yet."))))))))));
    }
    static get is() { return "ir-ghs-selection-bucket"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-ghs-selection-bucket.css", "../../common/table.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-ghs-selection-bucket.css", "../../common/table.css"]
        };
    }
    static get properties() {
        return {
            "selectedProperties": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "GHS_Candidate_Property[]",
                    "resolved": "{ AC_ID?: number; NAME?: string; aname?: string; level2?: string; COUNTRY_ID?: number; }[]",
                    "references": {
                        "GHS_Candidate_Property": {
                            "location": "import",
                            "path": "../../services/ghs/types",
                            "id": "src/services/ghs/types.ts::GHS_Candidate_Property"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "isGenerating": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "attribute": "is-generating",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "generateRequest",
                "name": "generateRequest",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "removeAll",
                "name": "removeAll",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "removeProperty",
                "name": "removeProperty",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=ir-ghs-selection-bucket.js.map
