import { h } from "@stencil/core";
export class IrGhsSelectionBucket {
    selectedProperties = [];
    isGenerating = false;
    generateRequest;
    removeAll;
    removeProperty;
    render() {
        return (h("wa-card", { key: '43aa7178d2089e964271ac01aa06939c791f741b', class: "ir-ghs-selection-bucket__container" }, h("div", { key: '89a256408739c088470ba18980d60e5baf8818ea', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: '531df76c05003473ff7f5e41ce833f7ad779f7f8', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: 'cec0449816994d9e4fce88ab9cad24dd529a2df1', class: "ir-ghs-selection-bucket__title" }, "To be added"), h("wa-badge", { key: '337c06e2cc9d8de7e12ee79d0592242e95c5a4b3', variant: "brand" }, this.selectedProperties.length)), h("div", { key: 'b6e087ac807c05401369f73fba853822965bd2a1', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: 'd7f23ba33420c46ebd7404ca22cb64c5d541e457', type: "button", size: "s", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, "Generate request"))), h("div", { key: 'a7d89173742a586581255287c16e3cb640e1016a', class: "ir-ghs-selection-bucket__body" }, h("div", { key: '73a1602a4733bf4c8e35c4e71867d8e36a04982d', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: 'f35e4761310add23118f7c7ba96bf7a0d1fb33d2', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: '286f24cbb7373953635848808056016e04c99e5d' }, h("tr", { key: '87c249d795be884c3b73a0f02abd22800eedcde9', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: 'df3e6d781aa4b236c90c9ec1cc977d2595c54162', class: "ir-ghs-selection-bucket__header-cell" }, "Property name"), h("th", { key: 'd8f91749a3f28bc4fe4f637a87af85e51d1d3ea1', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: 'ac1f9469d71cc890424d3e7cc8b1093265eb13fd', variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeAll.emit(), title: "Remove all" }, h("wa-icon", { key: '9bad40c71d2e2a41fe018aa8173e0601ffd5bc08', name: "trash" })))))), h("tbody", { key: '389412891184e81f088e7bd0a21d627e6f51a091' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeProperty.emit(p.AC_ID), title: "Remove from list" }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: '513b0d212d5be8a5d2fc4a9dd9880057628a8aba' }, h("td", { key: '7568a2c21a568740fd4202981b14db95cdbcba9a', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: '4c47a82f8c0ca0fd9e020c8271a2028903573404', class: "ir-ghs-selection-bucket__empty-text" }, "No properties selected yet."))))))))));
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
                    "resolved": "{ NAME?: string; AC_ID?: number; aname?: string; level2?: string; COUNTRY_ID?: number; }[]",
                    "references": {
                        "GHS_Candidate_Property": {
                            "location": "import",
                            "path": "../../services/ghs/types",
                            "id": "src/services/ghs/types.ts::GHS_Candidate_Property",
                            "referenceLocation": "GHS_Candidate_Property"
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
                "reflect": false,
                "attribute": "is-generating",
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
