import { h } from "@stencil/core";
export class IrGhsSelectionBucket {
    selectedProperties = [];
    isGenerating = false;
    generateRequest;
    removeAll;
    removeProperty;
    render() {
        return (h("wa-card", { key: '9eb6979e1aa0e2775f667afa6e5a9710a4908bf7', class: "ir-ghs-selection-bucket__container" }, h("div", { key: 'ee614513f0bbae6029126614be49f659dd3fdb45', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: 'd75ff1b06f57af7bfc3d0180b4af8d1379348e6a', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: '3f85cd2d0953d39d153cde7ea55037655929f74a', class: "ir-ghs-selection-bucket__title" }, "To be added"), h("wa-badge", { key: 'f63012d9adcd5d8e804d69a0f95a62a829f29926', variant: "brand" }, this.selectedProperties.length)), h("div", { key: '6456f72dc77fe40e99c0cae15633097298758d21', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: '0edae96128d6b0c65f1c156bc59ddcd1e5c3dff7', type: "button", size: "small", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, "Generate request"))), h("div", { key: 'd93e8a44f59bec681429c9154850ad860445521d', class: "ir-ghs-selection-bucket__body" }, h("div", { key: 'fa873eb0d90283c4f4abd0098e4c38663f6e09d3', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: '5f44bca53fda465bf27e3943778740ee763f5b57', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: 'bc1da4740df74c7b806600d6f3509d3ae8e73c2c' }, h("tr", { key: 'f8766f7fcea73089f1755098266ed4440d60f725', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: '9b93cbd4b3041b6a23b057cf26b369ff0f21dd4a', class: "ir-ghs-selection-bucket__header-cell" }, "Property name"), h("th", { key: '957600a9f55aa42e67078f8e0c1f561ee86da83d', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: 'e6a04502303918b92c4e84d030bae981286025b9', variant: "danger", appearance: "plain", size: "small", onClick: () => this.removeAll.emit(), title: "Remove all" }, h("wa-icon", { key: 'ea17d8f59e858cad690aca2da32cbc3602a8c34c', name: "trash" })))))), h("tbody", { key: '72eef365af066126100468bb2377ae4144b6f756' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "small", onClick: () => this.removeProperty.emit(p.AC_ID), title: "Remove from list" }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: '9a077328ce1f53133752ae15a65b586d77d8e7d0' }, h("td", { key: 'ad8f14ca4becef9999ee28782147829f3674c26e', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: '75b706c7da6c5143e2a8fdf1452c11f81be1d184', class: "ir-ghs-selection-bucket__empty-text" }, "No properties selected yet."))))))))));
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
