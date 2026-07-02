import { h } from "@stencil/core";
export class IrGhsSelectionBucket {
    selectedProperties = [];
    isGenerating = false;
    generateRequest;
    removeAll;
    removeProperty;
    render() {
        return (h("wa-card", { key: '1b5a365fee5a852fa229c10537056915c35306e6', class: "ir-ghs-selection-bucket__container" }, h("div", { key: 'a669f7fdd9ef96254ae48017443250b4267391b5', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: 'a92f71ba522105ee7429a5a2cdf0955e7cf8439d', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: 'a09b9d27ef902a2be2bc2cd540109af0f410d7c8', class: "ir-ghs-selection-bucket__title" }, "To be added"), h("wa-badge", { key: '146bfe8295e27c21b82d545f2367f74dbc3b6b67', variant: "brand" }, this.selectedProperties.length)), h("div", { key: '950e669298143b30e6d24c5e1af8fafaec30978f', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: 'a21222e79e0fc7b1985cb082d08d1ea65e1b2fe4', type: "button", size: "s", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, "Generate request"))), h("div", { key: '8acb1a2daf6c587c275691cd58a730a0283be361', class: "ir-ghs-selection-bucket__body" }, h("div", { key: '88e16ebca0a3158822675d4852700b03fef8c3a7', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: 'cca858648f60e72d2f5c9c18c5cb7b247ffbd616', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: 'ebfb18dcd9f1e611b032bd6c307789cfd2d1dacf' }, h("tr", { key: '3ebb3d16c369a3bf1d4484ecbfc60d1b3f99804d', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: '5c552d15075fc636689a6e37c1f7b6f71748e108', class: "ir-ghs-selection-bucket__header-cell" }, "Property name"), h("th", { key: '82887405a239bd80808c5729fc5878ca4da87c1d', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: '0463c2a2c8219adef31c7019d7c6349dffc4f739', variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeAll.emit(), title: "Remove all" }, h("wa-icon", { key: '888da1eb06e78eeb797c5f5df61e02060376702a', name: "trash" })))))), h("tbody", { key: '3c48032fc03c48ab9f36c6699487cebf71bc9c84' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeProperty.emit(p.AC_ID), title: "Remove from list" }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: 'f1ec82b97b24de5ea4e808b23393a33da5262dfc' }, h("td", { key: '846f4454d7b0bc0ceaef00eed22eff875bbaf2d2', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: 'd83b3475edc5f4987cdd7c2f97b068e663e4be4e', class: "ir-ghs-selection-bucket__empty-text" }, "No properties selected yet."))))))))));
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
