import { h } from "@stencil/core";
export class IrGhsSelectionBucket {
    selectedProperties = [];
    isGenerating = false;
    generateRequest;
    removeAll;
    removeProperty;
    render() {
        return (h("wa-card", { key: '62e104ddcd62391163fa519c7e56bf0cc22e706f', class: "ir-ghs-selection-bucket__container" }, h("div", { key: '8b6997ab63e3ceff2f946215089c7e71b9d6b694', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: 'cc1db27b0f0dec9a4b8b661a532215c7d7aaff73', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: '0858b20e6bef722d947a82288b8ef29798d490ea', class: "ir-ghs-selection-bucket__title" }, "To be added"), h("wa-badge", { key: '326ea06b7871cab403c3ba842c145eba7b3160a3', variant: "brand" }, this.selectedProperties.length)), h("div", { key: '50140c1a0a40b5ea5316cf6eb29bb152223deeed', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: '0415cb210d7f88cb2477fb060723dd988307dbd6', type: "button", size: "s", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, "Generate request"))), h("div", { key: 'ec402519adbb839eeb85ee9b49c132d2eb4d51db', class: "ir-ghs-selection-bucket__body" }, h("div", { key: '9ff921d82360384d6e1bfddafd595f6d04da2a4f', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: 'e6301eaa86b8038ebb4ba225075e2f544096c894', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: '90e489ceadd50631edebe51adec20046067b2172' }, h("tr", { key: 'ee83a211a9a5396fc589f2f8383c3c5fd10febde', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: 'de89cbacf5c0c1aa5473d41f5776bdd54dcefde7', class: "ir-ghs-selection-bucket__header-cell" }, "Property name"), h("th", { key: 'ff69c893e3979966fac66fc9bb203657803bc422', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: 'ff70e681a54efb40a9e3ba897881340aaecca91d', variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeAll.emit(), title: "Remove all" }, h("wa-icon", { key: 'e5ec229d3a9eeaa6edb712bad3905cac7b75497e', name: "trash" })))))), h("tbody", { key: 'e7c7b84c0ae97ea58b2aab80bf38e6becbcce7cc' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeProperty.emit(p.AC_ID), title: "Remove from list" }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: '276b2a49eca093d4bb5ba065b801ef055660d182' }, h("td", { key: '88b993cc233809e3fe4d97d77aab28e37a01b524', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: 'eeda51495ba709cab87aedaaad2e34b87b2e4058', class: "ir-ghs-selection-bucket__empty-text" }, "No properties selected yet."))))))))));
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
