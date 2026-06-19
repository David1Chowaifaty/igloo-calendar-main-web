import { h } from "@stencil/core";
export class IrGhsSelectionBucket {
    selectedProperties = [];
    isGenerating = false;
    generateRequest;
    removeAll;
    removeProperty;
    render() {
        return (h("wa-card", { key: '57841df44b66f27522b85e4a861a16ea047f690c', class: "ir-ghs-selection-bucket__container" }, h("div", { key: '2fcaa1f4e4a8b1c8ace9b8bfeede1e37196b5b06', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: '512b8896344e76e6eda3cb780917c826b5c2b879', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: '7264ca83198a5a9965688dfa6d088a4952985b2e', class: "ir-ghs-selection-bucket__title" }, "To be added"), h("wa-badge", { key: '856b10b103024400de84484c4e0aa768150ee238', variant: "brand" }, this.selectedProperties.length)), h("div", { key: '6791d75bbba45fc348503d88994197ccc4a11eb7', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: '4f9431b6c5641343ad8a210dcca82ff68cc8fd27', type: "button", size: "s", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, "Generate request"))), h("div", { key: '319ae18fe1a1d8bb112781e89f504461d807cafd', class: "ir-ghs-selection-bucket__body" }, h("div", { key: '62bf12d6130770e4d4ec9f44d710e203d99604f2', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: '36705883f8d1fe0049343d5ba8d5e2b36d6ece03', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: 'fca5d0029662733e314ba48899f5a85cf6c773f2' }, h("tr", { key: '55419fb14f9ddeb19f0d1b29caeccffb3a65a389', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: 'b27b8e8a9733fde04673fcd0e04bf129a5740417', class: "ir-ghs-selection-bucket__header-cell" }, "Property name"), h("th", { key: '75a2f9b4472d42cd457eff90239126024d6aa381', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: '3dec9d499c5a0c6e757f92f04fb78563485c3afc', variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeAll.emit(), title: "Remove all" }, h("wa-icon", { key: '120e3e6e040087c80950660ee81f3e010a852ec0', name: "trash" })))))), h("tbody", { key: 'eda0fab7062b72d80a115a26f82711837d257767' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeProperty.emit(p.AC_ID), title: "Remove from list" }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: 'c370a6626b1df513a33ffc6e9e8038ceb1cee580' }, h("td", { key: 'ca7b42ed4a82f824804f209fe5b3a80a55b16058', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: '35dd8d97208012d2c03fb6ffac38854ef794e5aa', class: "ir-ghs-selection-bucket__empty-text" }, "No properties selected yet."))))))))));
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
