import { h } from "@stencil/core";
export class IrGhsSelectionBucket {
    selectedProperties = [];
    isGenerating = false;
    generateRequest;
    removeAll;
    removeProperty;
    render() {
        return (h("wa-card", { key: 'f3824a043bee81e2aa75a44446ceae64ffa2f41f', class: "ir-ghs-selection-bucket__container" }, h("div", { key: '70824b80a45fd2cf196b6fe89ceb4a5352f80b4e', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: '00bfd87e18a5208a1e2c57ccb0dcc1db140f5ebe', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: '42792f6cb9d9c83ec16c1ffc242d9dbc3fc94c39', class: "ir-ghs-selection-bucket__title" }, "To be added"), h("wa-badge", { key: 'cea83f4137703b6b2ba1e83459ef0a9d7a2a6cdb', variant: "brand" }, this.selectedProperties.length)), h("div", { key: '4fc0788f53f60e4b8e9e541ddb9fa5aa0130c427', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: '7ffcdfae3c6c18840519c11dc44a8d8e82684992', type: "button", size: "small", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, "Generate request"))), h("div", { key: '238ad0dc5894cfec8b734aff72ee23b7d9e469f5', class: "ir-ghs-selection-bucket__body" }, h("div", { key: '026c57f96a2bea68a7dfb67fc2180ef485ae44ea', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: 'ff1e808c8dc402df689f75a1731be6a079ee7267', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: '02ecd49b1f5fb781f4d5f12b531fb4ed89d58dff' }, h("tr", { key: '1a5b42f1145b09b0607c715393fb1acfd6117566', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: 'cd42a31580de51b609468d2c7910ee07a4216e97', class: "ir-ghs-selection-bucket__header-cell" }, "Property name"), h("th", { key: '10a4611a6448455edd6d371eb2a2b0d4520845d1', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: 'baa31b08bc181e48d8260cb017d15c322e01eaed', variant: "danger", appearance: "plain", size: "small", onClick: () => this.removeAll.emit(), title: "Remove all" }, h("wa-icon", { key: '8b9d1e9cc024aaf8a9e14c10633e4812d358da60', name: "trash" })))))), h("tbody", { key: 'd18bf3f907642f05b73fff5c43013602a137892b' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "small", onClick: () => this.removeProperty.emit(p.AC_ID), title: "Remove from list" }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: '97b3bb367caca7bde2ff77fa8ded4ae6a560ffcb' }, h("td", { key: '9a41899c8d413909b830602e06a73bbadbae8356', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: 'e5a0db2cbf47e1f110d0ba377cffd164587423c1', class: "ir-ghs-selection-bucket__empty-text" }, "No properties selected yet."))))))))));
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
