import { h } from "@stencil/core";
export class IrGhsSelectionBucket {
    selectedProperties = [];
    isGenerating = false;
    generateRequest;
    removeAll;
    removeProperty;
    render() {
        return (h("wa-card", { key: 'a36c4af57fb594770611a07d03678fbb96d8fc34', class: "ir-ghs-selection-bucket__container" }, h("div", { key: '492a9521af60e32b76f8fdc4fdea586c1bc8d104', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: 'cf0c95a076c8d1b3af14ff856eaab142a0d00ccd', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: 'd12bdd5e9a13bfa5aa9f81d1f569fe8452564c89', class: "ir-ghs-selection-bucket__title" }, "To be added"), h("wa-badge", { key: '109c2a80f54295ac3eba9d185d409e04a03ac8bf', variant: "brand" }, this.selectedProperties.length)), h("div", { key: 'bbf2cf7f1b73dc388c8ed71ac09cd6b50d1e2ec4', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: '3a960dcf8ec811bfe46cc86ae45d64ebeb22ce34', type: "button", size: "s", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, "Generate request"))), h("div", { key: '68085157e27414b169b0cf04b35f1dbfc8a3791c', class: "ir-ghs-selection-bucket__body" }, h("div", { key: 'fe7f172de0a2153394901c6397bef41bda744d23', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: '0d8af754e849a8c8dbc63379982dbc7219294d0e', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: '219a0a9dedf2df0f44ec942c42ffc4caf3190f3c' }, h("tr", { key: '695176d1846eaab2ac9584a5174d49fe393d577f', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: '8c49fc2752d770b60db88ac33002f94c7ced2b47', class: "ir-ghs-selection-bucket__header-cell" }, "Property name"), h("th", { key: '595b6d8e769b51a7c50028c5173ce4feb58b3019', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: 'a855d9c95f081308300a7c9cc113259214539941', variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeAll.emit(), title: "Remove all" }, h("wa-icon", { key: 'db3f73d8722b772b0575aad8f6e18e5f525bcaae', name: "trash" })))))), h("tbody", { key: '34716b6f8c7a0e5b247e9f5c5dff8f6617d270ab' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeProperty.emit(p.AC_ID), title: "Remove from list" }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: '400e175589e33f59d1040a31333f66a79bc8d6a9' }, h("td", { key: 'f2ce5e651cbe669b0bcb949efc0a6f4d5cc2680d', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: '778e715558fb830900c6994c91016b39ee536776', class: "ir-ghs-selection-bucket__empty-text" }, "No properties selected yet."))))))))));
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
