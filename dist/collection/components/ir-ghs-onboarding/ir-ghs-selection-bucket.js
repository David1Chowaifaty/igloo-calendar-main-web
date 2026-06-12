import { h } from "@stencil/core";
export class IrGhsSelectionBucket {
    selectedProperties = [];
    isGenerating = false;
    generateRequest;
    removeAll;
    removeProperty;
    render() {
        return (h("wa-card", { key: '67d047402c16a7efb0f6ff6a9b9cb5c3ad4aa926', class: "ir-ghs-selection-bucket__container" }, h("div", { key: 'bbd0d9f20ff0e63f77bac03a76f9aa2549072843', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: 'a80ceafa65dffc0536f4f40e399f6f2c2b6c44fa', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: '38dffddf3b41068c694e14d2e2cf5b262f385e6c', class: "ir-ghs-selection-bucket__title" }, "To be added"), h("wa-badge", { key: '99cfcb99ad87c7128c80a47b5b794e915a1216c0', variant: "brand" }, this.selectedProperties.length)), h("div", { key: '1665f0f19e40d982cbceaf7a627acb46aa5ae41a', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: '1ee56e7a4ecf10e7623388ebac2600028292515c', type: "button", size: "small", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, "Generate request"))), h("div", { key: '75c7f471ee1a390b23e87e3b85980977426e78a2', class: "ir-ghs-selection-bucket__body" }, h("div", { key: '7daafc6a461e0448c1b34b25695071a6a298a382', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: 'c280af2c25daf6c27be0032c87d11208306aeced', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: 'b45394217280b70577d31ae763a12ea8bce3c300' }, h("tr", { key: 'ea1fd2eaf5ccef633198649e23405d8bc8c074c2', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: '60eefb8987fc9a6939039318f3505f4a84d95f7b', class: "ir-ghs-selection-bucket__header-cell" }, "Property name"), h("th", { key: '997257cfaebf27ffba36a015e7d44ac7f6893440', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: '172592e526378a0a68481122ecc2a0c137e14211', variant: "danger", appearance: "plain", size: "small", onClick: () => this.removeAll.emit(), title: "Remove all" }, h("wa-icon", { key: 'a502a95d0b08bdbc83b1ccdba71c46ac18f9c0fd', name: "trash" })))))), h("tbody", { key: '775dfb61d85d0f883072c057460a04e708fe0fe1' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "small", onClick: () => this.removeProperty.emit(p.AC_ID), title: "Remove from list" }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: '09a3dce7cda85910bc0e073807ff7465f4158e9f' }, h("td", { key: '33157d861ce4feb59108a77ad5534166652dfc23', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: '90a67b1b15720a5da7263ee8fb3bb8dc713550d4', class: "ir-ghs-selection-bucket__empty-text" }, "No properties selected yet."))))))))));
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
