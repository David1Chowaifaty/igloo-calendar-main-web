import { h } from "@stencil/core";
export class IrGhsSelectionBucket {
    selectedProperties = [];
    isGenerating = false;
    generateRequest;
    removeAll;
    removeProperty;
    render() {
        return (h("wa-card", { key: 'a36c4af57fb594770611a07d03678fbb96d8fc34', class: "ir-ghs-selection-bucket__container" }, h("div", { key: '492a9521af60e32b76f8fdc4fdea586c1bc8d104', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: 'cf0c95a076c8d1b3af14ff856eaab142a0d00ccd', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: 'd12bdd5e9a13bfa5aa9f81d1f569fe8452564c89', class: "ir-ghs-selection-bucket__title" }, "To be added"), h("wa-badge", { key: '109c2a80f54295ac3eba9d185d409e04a03ac8bf', variant: "brand" }, this.selectedProperties.length)), h("div", { key: 'bbf2cf7f1b73dc388c8ed71ac09cd6b50d1e2ec4', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: 'a00df9f31c6d9d263f1dce4d37cd2fc764b4172e', type: "button", size: "small", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, "Generate request"))), h("div", { key: '4650c5ba5b9a2ccde42a7da7b0789ae871cea5a5', class: "ir-ghs-selection-bucket__body" }, h("div", { key: 'e876b6b2bd5fed647a7c79fce491d0e174f3f671', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: 'a8000340fd12a100c9c383e54043de4ad9bd5c8b', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: 'bcce655ed31bd9e8bdaf6472d61078fa509b6ab2' }, h("tr", { key: 'c5130f7bca5674a8d8f31df33c5c4899d870c429', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: '7bb6fc3a3dec4d281ac72c8a375f7ee10b704330', class: "ir-ghs-selection-bucket__header-cell" }, "Property name"), h("th", { key: '8f330e319f7ed384ae59a65bf5c69e11d072f0b3', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: '88728473f774bfe42c635d1bc9e8bcdd461c9236', variant: "danger", appearance: "plain", size: "small", onClick: () => this.removeAll.emit(), title: "Remove all" }, h("wa-icon", { key: 'b7e3e48575a6af12322d861250d8522c8f3abda8', name: "trash" })))))), h("tbody", { key: '4e4d975a87904327dcb5c03bdae89d6b1f3cb2fd' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "small", onClick: () => this.removeProperty.emit(p.AC_ID), title: "Remove from list" }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: 'd683255e2a5cb7ea48723b8ed4d8cdb537df020d' }, h("td", { key: '9f99bee2a29b2397c20d9a1c8b58650ec34c0217', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: '68f3b17516f1b2aa20fcdcac812ff0cea29223d4', class: "ir-ghs-selection-bucket__empty-text" }, "No properties selected yet."))))))))));
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
