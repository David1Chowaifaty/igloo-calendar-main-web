import { h } from "@stencil/core";
export class IrGhsSelectionBucket {
    selectedProperties = [];
    isGenerating = false;
    generateRequest;
    removeAll;
    removeProperty;
    render() {
        return (h("wa-card", { key: 'e2cc0b6f808b925b246c8d74eaf03f9563b63bd8', class: "ir-ghs-selection-bucket__container" }, h("div", { key: '8956ebabac744f171ba9f5cb35df2a507ec6d8cc', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: 'f9695c008ab4c82cc1dd804cadedae1d0c82c813', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: '3dfeff1a146aa28a22b3bb4c3f2442a74c83acdf', class: "ir-ghs-selection-bucket__title" }, "To be added"), h("wa-badge", { key: '38f922081c093a41c06c58b13d68097758df1ea4', variant: "brand" }, this.selectedProperties.length)), h("div", { key: '2c4176db877a4f3c6a498fa7b685d6e614e87263', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: 'a4700eb2368d671099c1f3d015fd8c6bfb33d367', type: "button", size: "s", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, "Generate request"))), h("div", { key: '4bdb96de76daef22dcfd71d8106926dec7a51144', class: "ir-ghs-selection-bucket__body" }, h("div", { key: '63e3d065c36b5ee761a790df900a39a2f27babaa', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: '8986245f3b0dfc5dbc6a1a0e346e168fe6a1bb53', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: '5b45116d908c9c4bc495a6c0959a590b8b72fc55' }, h("tr", { key: '3aeb8f7f2b189194886890ecbbd107c028f2b057', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: '8fa467ba101f888800a3cdf56b1a6816bc8a54d6', class: "ir-ghs-selection-bucket__header-cell" }, "Property name"), h("th", { key: '88a894700152d46ca32230e8dc08d1e4849e5017', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: 'e6d46682cd3a6ffb272b7dacb7f25b5cafc64bf6', variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeAll.emit(), title: "Remove all" }, h("wa-icon", { key: '548ac2df65c24ee03f8e9eed6d5e9ee760a7606b', name: "trash" })))))), h("tbody", { key: '3704b80653c26ddf3a0986e559672e85fdcb4f18' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeProperty.emit(p.AC_ID), title: "Remove from list" }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: 'deb120b054a045767c87f9d84132a15cebfedf19' }, h("td", { key: '27dacd2d91dd21a01384b2609a886ea28500fb3a', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: '5496ebc3bfc1f35f9211a6f928cee9fadca3ee2e', class: "ir-ghs-selection-bucket__empty-text" }, "No properties selected yet."))))))))));
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
