import { h } from "@stencil/core";
export class IrGhsSelectionBucket {
    selectedProperties = [];
    isGenerating = false;
    generateRequest;
    removeAll;
    removeProperty;
    render() {
        return (h("wa-card", { key: 'f17480b44d545ccf2c64cc1e692d3a3d163285d0', class: "ir-ghs-selection-bucket__container" }, h("div", { key: 'c7ca22562ca489268ba31acfde6e85c1f3abaf4f', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: '4ee24c69e16e5ce2a9dd1170863a4c1cbb13b908', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: 'cd9091fbc8cc644551aef175f873b2e5428e4139', class: "ir-ghs-selection-bucket__title" }, "To be added"), h("wa-badge", { key: '05a797c3d59a8a073febd30133f6c0f82e2279eb', variant: "brand" }, this.selectedProperties.length)), h("div", { key: '2f0983dac7a96924a5cc931045bbaca2cbd993d1', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: 'b5a81993debbc4cb7c253613d72b86cd0e57eb67', type: "button", size: "small", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, "Generate request"))), h("div", { key: 'b6ab684b9e136c7115a4bbd3f056cfd6601e39be', class: "ir-ghs-selection-bucket__body" }, h("div", { key: 'aa7e4bf97fb4f70b73e2749bfc67517513a8824b', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: '2ee10cd65221b3181a4918e28d486ffa2ba867a8', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: 'e26326eb6965df3c50933c426453a4218ef45b8f' }, h("tr", { key: '34e45f9dc15ffee28abbd24cc39611cdda2191f6', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: 'd9e6d1bde404be0580f3c07cba16030310f37639', class: "ir-ghs-selection-bucket__header-cell" }, "Property name"), h("th", { key: '2edd35751dc901b317cba9a63c27c5845b3ab3ef', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: 'a407dbbd393c0b8cacdaa7ae06ebf68947a6d86d', variant: "danger", appearance: "plain", size: "small", onClick: () => this.removeAll.emit(), title: "Remove all" }, h("wa-icon", { key: 'be887690c69dfc61274a43a15ebe4ed1f7f82c2e', name: "trash" })))))), h("tbody", { key: '66b4406416e8585807862a2ac8cb3d4e21a98c86' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "small", onClick: () => this.removeProperty.emit(p.AC_ID), title: "Remove from list" }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: '60997f3c34fded860aa1328d2e8321d5111a13b9' }, h("td", { key: 'eb9d21575b7ba6a7ecbf50a2dacb6dbf67789170', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: 'ab7b0977f8666b10dcbd75bd0878c41bf9340d2a', class: "ir-ghs-selection-bucket__empty-text" }, "No properties selected yet."))))))))));
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
