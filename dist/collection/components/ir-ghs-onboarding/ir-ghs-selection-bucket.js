import { h } from "@stencil/core";
export class IrGhsSelectionBucket {
    selectedProperties = [];
    isGenerating = false;
    generateRequest;
    removeAll;
    removeProperty;
    render() {
        return (h("wa-card", { key: '4b618a5f942dfc0f32815b779873e7d7814b6b20', class: "ir-ghs-selection-bucket__container" }, h("div", { key: '131e67ffcb1deede455b582544df3521e47f1cd6', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: 'afc329a3da85aac952fe42900879c3785f968e01', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: 'a730841fc8c7013c220152161f3519a2424866a2', class: "ir-ghs-selection-bucket__title" }, "To be added"), h("wa-badge", { key: '8be48afe6e571893035b61ce99468a22b4562e63', variant: "brand" }, this.selectedProperties.length)), h("div", { key: 'f3e508ca7a45a985def95790fd3d16a1d0b7546c', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: 'a935bea343264450a40356acae39759477cc6fbf', type: "button", size: "small", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, "Generate request"))), h("div", { key: '8684fb7e2ba186159a5ed6009335b51c7c948258', class: "ir-ghs-selection-bucket__body" }, h("div", { key: '258ba011b7d971890d2198e5798ad08a40849e31', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: 'fa384134f2dd31fad7c8c9161d3171275a6133b8', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: 'd84eb8007c546f3564ff3e1b2e54ea8ee8aafc1a' }, h("tr", { key: '38400f923832f4b89d5a85db223a64bcca1d2151', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: 'bc9269bccaed2b33b6fd9955f04c06f1fc1b391e', class: "ir-ghs-selection-bucket__header-cell" }, "Property name"), h("th", { key: 'a1128b59f90825206459917e365ced81903556f6', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: 'b4e697d3d1efe61297d354384abfbfbbad48cb6d', variant: "danger", appearance: "plain", size: "small", onClick: () => this.removeAll.emit(), title: "Remove all" }, h("wa-icon", { key: '0a5300191b193da1c060052479626f50cbec961d', name: "trash" })))))), h("tbody", { key: '46939acf05bc2e7d3704041d4e35406a5432b349' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "small", onClick: () => this.removeProperty.emit(p.AC_ID), title: "Remove from list" }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: '216fc6d8ee21e2f3a1c05b1851a992e373ed048e' }, h("td", { key: '6b3294c94ca4f9be93778fe29333b8fa2159b728', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: '4179c9e034b3abec9376b0ecc08492d389415a05', class: "ir-ghs-selection-bucket__empty-text" }, "No properties selected yet."))))))))));
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
