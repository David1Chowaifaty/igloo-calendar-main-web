import { h } from "@stencil/core";
export class IrGhsSelectionBucket {
    selectedProperties = [];
    isGenerating = false;
    generateRequest;
    removeAll;
    removeProperty;
    render() {
        return (h("wa-card", { key: '041c9e614e9313068ab9b88b3befd31b60ea67fa', class: "ir-ghs-selection-bucket__container" }, h("div", { key: 'b96e233c6ece4073beef143026d7cb0da3e5b4f5', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: '77c2f97531e9ff7e1c9b57762303e0a948585526', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: 'd70100105be16a629596db37cf38ff3acea1d9b7', class: "ir-ghs-selection-bucket__title" }, "To be added"), h("wa-badge", { key: 'd44fa98863624c5746dc27a6f2d5e8ff8fda0b39', variant: "brand" }, this.selectedProperties.length)), h("div", { key: '74b308c38c4c4a9871f9302dc8bb75df75d52dfb', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: '4279ade2d062e246dcbab6e2d06de9279f0c2ccd', type: "button", size: "s", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, "Generate request"))), h("div", { key: '2e819150985244d07115ac129e241fdbc150bb58', class: "ir-ghs-selection-bucket__body" }, h("div", { key: '9ce6154a2882ccac1d06b45696c53d80f242e510', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: '1e420e0af616cbf93ddddb4ae059c9bec747bca2', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: '1c967a1900b05a68130eddb0642dd221bb9d6f42' }, h("tr", { key: '3fcebf9737b8db0bd6aecbc80a039f4b146fc9ac', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: '083a357d60782c0c7a7689c0eef21afab0240751', class: "ir-ghs-selection-bucket__header-cell" }, "Property name"), h("th", { key: '0e8606a450d8c99a8a730e0d0cecd05c243ea93c', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: 'ea2feb8248412b525c2a00438f3f8d89a9363d14', variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeAll.emit(), title: "Remove all" }, h("wa-icon", { key: '36b9a10a7d08bf937ef052319c43c8b49767f2f1', name: "trash" })))))), h("tbody", { key: '46b793ee934b7c925fc9bef66dba4d70ab70b4e2' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeProperty.emit(p.AC_ID), title: "Remove from list" }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: '66335aea1be3f58f82157c9d2facea21077d4184' }, h("td", { key: '94016df191dc825c7d2e8dffa55ab0d9eb507d25', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: 'a1856ee1d7f6e3a4b871a70e8347b6edf9f6c00d', class: "ir-ghs-selection-bucket__empty-text" }, "No properties selected yet."))))))))));
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
