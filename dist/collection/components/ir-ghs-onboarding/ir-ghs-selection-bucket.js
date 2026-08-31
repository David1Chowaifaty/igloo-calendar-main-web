import { h } from "@stencil/core";
export class IrGhsSelectionBucket {
    selectedProperties = [];
    isGenerating = false;
    generateRequest;
    removeAll;
    removeProperty;
    render() {
        return (h("wa-card", { key: '84d050fe08db3fe42c89dc4746c1d8c6d8a0f2d0', class: "ir-ghs-selection-bucket__container" }, h("div", { key: 'd9d3c7f98a0dd4f63041b325f6d95fd1b9982e93', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: '0284c67e5329c8a3ed31fde51fec61742fd3308a', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: '8a1fcb25ea7510f2e7aeacdd4d45e42596e626da', class: "ir-ghs-selection-bucket__title" }, "To be added"), h("wa-badge", { key: '67515e364b5ecb9f07d4899b4d95420d03a5386a', variant: "brand" }, this.selectedProperties.length)), h("div", { key: '0a04cbece606b93c9ffec57192fb0f49be7476b8', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: '4fff014f5b89f1c8cae479c462420bef9c1fd72d', type: "button", size: "s", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, "Generate request"))), h("div", { key: '5b42a097952cc15d8b607c57f7cae2353b16a8cc', class: "ir-ghs-selection-bucket__body" }, h("div", { key: 'bb43919aef56623c77e66075744117dfba16e254', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: '96051a1adbb4117935da5b68e5831aa75776616a', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: '05f2f6b8f3b07d1b1c0378a1246d696954b133a7' }, h("tr", { key: '46df55b41c39bb763addb0e26184f1a3e8ddaf1c', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: '4aa25aadea4634a41ef17b3ddcb8b9cd2f4bcd52', class: "ir-ghs-selection-bucket__header-cell" }, "Property name"), h("th", { key: '8ca951233a5215e6563d897c3b516ad82d4493e2', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: '709741fb0dbd0cc4fb55faab91e6e3b3560a3707', variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeAll.emit(), title: "Remove all" }, h("wa-icon", { key: '919d7384b6abe644274607cb49c432847b741ab9', name: "trash" })))))), h("tbody", { key: '3b8cc7cf9de77802b17815a8ab299630683bfe8c' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeProperty.emit(p.AC_ID), title: "Remove from list" }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: '2da094b3b1e46cca43a9c57f239f5b034f063dfe' }, h("td", { key: 'f2a1cef0a8765eba657d83f3dcf8fab3c88d2af3', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: '8327792ebd556e436fd23759a3a5cd901bfa0b7d', class: "ir-ghs-selection-bucket__empty-text" }, "No properties selected yet."))))))))));
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
