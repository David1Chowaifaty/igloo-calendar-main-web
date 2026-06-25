import { h } from "@stencil/core";
export class IrGhsSelectionBucket {
    selectedProperties = [];
    isGenerating = false;
    generateRequest;
    removeAll;
    removeProperty;
    render() {
        return (h("wa-card", { key: '0d4f7b20048c79a86114071e0007fece6c96549b', class: "ir-ghs-selection-bucket__container" }, h("div", { key: 'af0dea96c1a3444979f9203b7d68237c1a5f94e5', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: 'cb7c98597b19e47ea9b40c280e8a850d3e5ac8e5', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: 'fd739eb51dbccc064d969a6745c025e48cc0aa1b', class: "ir-ghs-selection-bucket__title" }, "To be added"), h("wa-badge", { key: '5b4ba079902cbd84769695d9ae58332913283101', variant: "brand" }, this.selectedProperties.length)), h("div", { key: 'edf338cec95c6b984cfe6e2b1bca1c9492e0164e', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: 'e7ab1b6acc825b5676775a8adc7f3380fa4342fe', type: "button", size: "s", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, "Generate request"))), h("div", { key: '27a1e4a374f7d92136af8987d1b2515f20f768cd', class: "ir-ghs-selection-bucket__body" }, h("div", { key: '39ed752d17915c3c5611afd3365ea9266d325586', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: '4cb5cff70ec50edaa7e7d41f9074c3d9131341e6', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: '021ddf16770387b5ebf9130337787d83f612ea4d' }, h("tr", { key: '5e230370373851c4bea18af09691c897c1ae8468', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: '1b22ef43e6e94c8579d3046c134b2637df703cc8', class: "ir-ghs-selection-bucket__header-cell" }, "Property name"), h("th", { key: '2767a32fcc82d0b4d7ce6c9680c50a9e36c39ce0', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: 'ab38bb3df164b72bf52b7696f9cd5df8ac413fbd', variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeAll.emit(), title: "Remove all" }, h("wa-icon", { key: '2f9d709396c77a073e4ee70166ddaf48cae7b1bd', name: "trash" })))))), h("tbody", { key: '62fa341bf590862fb6acbf1d8426a70c71200394' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeProperty.emit(p.AC_ID), title: "Remove from list" }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: 'a1fa52dcb4104ec33420cfcd434f04dd2dd93757' }, h("td", { key: 'b6ed0d0f86020fe1f20cb45268e5dfdbe089007a', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: 'e865d8bc41ac7e4cd3062ddeb90e84c849357323', class: "ir-ghs-selection-bucket__empty-text" }, "No properties selected yet."))))))))));
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
