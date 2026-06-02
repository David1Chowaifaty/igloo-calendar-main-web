import { h } from "@stencil/core";
export class IrGhsSelectionBucket {
    selectedProperties = [];
    isGenerating = false;
    generateRequest;
    removeAll;
    removeProperty;
    render() {
        return (h("wa-card", { key: '68322543bc283d68ab3db327ed1a8723c86d6683', class: "ir-ghs-selection-bucket__container" }, h("div", { key: '433ab068f251ba1664bd2250b434d3cd866ab361', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: '2330138baee49d153c1e5ff07f2d7db3d5daeae4', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: '734425c1e2458af24e13acb78d31410e54a5d29a', class: "ir-ghs-selection-bucket__title" }, "To be added"), h("wa-badge", { key: 'ecc1ed4cf73d4c29d608451811180b0fa9e821f4', variant: "brand" }, this.selectedProperties.length)), h("div", { key: 'f4458bb33cbd60189725addda3e771418533bad7', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: 'f6f1a655e45b5c61c07736973044180e2e19a9d4', type: "button", size: "small", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, "Generate request"))), h("div", { key: '197707fa4851d41c9a0d8830b08f54bd5dc9cf50', class: "ir-ghs-selection-bucket__body" }, h("div", { key: 'e39918d243393a1696cacff2d0f389284c988a64', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: '53ad26fe8155fcc21ceb8612a0e73cead0c8d3ad', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: '574b652f03500c6998778e4d9b0d4f2665cca352' }, h("tr", { key: 'b3f8cfe22a504cc32475a163fcff6b2b120dccd0', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: '1ae96eaed61f5299418f9daebe1207489add7c8f', class: "ir-ghs-selection-bucket__header-cell" }, "Property name"), h("th", { key: '7d11da6ded025eb462fb1e1ac6d2a65a2e91c3fa', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: '53a2746d37a442c5a7688d6e9b0981aa31e4fce9', variant: "danger", appearance: "plain", size: "small", onClick: () => this.removeAll.emit(), title: "Remove all" }, h("wa-icon", { key: '48c200567bbd426d758f4dccd101f5e485614216', name: "trash" })))))), h("tbody", { key: 'a43688e443bbe0fa4cfd323cdff83aced472840c' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "small", onClick: () => this.removeProperty.emit(p.AC_ID), title: "Remove from list" }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: '079350f4a6c665dc704ec72d4a1ed5da23d621dd' }, h("td", { key: '8f18b8a19c3085c9aff066d1f05c681defa2280b', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: '032a01c7132087f3bf98f660c64bf59e73fa8d27', class: "ir-ghs-selection-bucket__empty-text" }, "No properties selected yet."))))))))));
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
