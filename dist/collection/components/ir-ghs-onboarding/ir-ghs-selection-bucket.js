import { h } from "@stencil/core";
export class IrGhsSelectionBucket {
    selectedProperties = [];
    isGenerating = false;
    generateRequest;
    removeAll;
    removeProperty;
    render() {
        return (h("wa-card", { key: '62e104ddcd62391163fa519c7e56bf0cc22e706f', class: "ir-ghs-selection-bucket__container" }, h("div", { key: '8b6997ab63e3ceff2f946215089c7e71b9d6b694', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: 'cc1db27b0f0dec9a4b8b661a532215c7d7aaff73', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: '0858b20e6bef722d947a82288b8ef29798d490ea', class: "ir-ghs-selection-bucket__title" }, "To be added"), h("wa-badge", { key: '326ea06b7871cab403c3ba842c145eba7b3160a3', variant: "brand" }, this.selectedProperties.length)), h("div", { key: '50140c1a0a40b5ea5316cf6eb29bb152223deeed', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: 'ac39a8509abbec256bae78c37e958e57bd877d43', type: "button", size: "small", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, "Generate request"))), h("div", { key: '52598c73c05fd2a239c495a9b851858348e28d7c', class: "ir-ghs-selection-bucket__body" }, h("div", { key: '3beb3d400a00d7971331392f0716fa7a2602f4b0', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: '79b5cd4f2c876e2e752c909d718baf2de941b0c2', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: '21cd12ccf87b2800213975c687497f30d9a64fa5' }, h("tr", { key: '00a05141cb1c62b4c82c9b6213ca1cedc5aca9fc', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: 'dbcd5a9e07be9dc8a3a6667476cb3b03112cd302', class: "ir-ghs-selection-bucket__header-cell" }, "Property name"), h("th", { key: 'b220c3b97b7abc63b593668576f84c4fd6a65542', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: '5e0881b26789d852dcaa4c89c3b351eb7c34f7d7', variant: "danger", appearance: "plain", size: "small", onClick: () => this.removeAll.emit(), title: "Remove all" }, h("wa-icon", { key: 'a030e90641b044c0c4f84fd1fdf9a7d1946072d8', name: "trash" })))))), h("tbody", { key: 'df2c0c7c838e3513906a6cbd6f26985c49f24702' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "small", onClick: () => this.removeProperty.emit(p.AC_ID), title: "Remove from list" }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: 'ee80af8547bbc671e2488a4714a4350f27eadbcd' }, h("td", { key: 'e406d4fd7d4e69b24d9661692c3e759ecf8b353d', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: 'b1a0348674fe9120ca4e6e22c53204d57893190a', class: "ir-ghs-selection-bucket__empty-text" }, "No properties selected yet."))))))))));
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
