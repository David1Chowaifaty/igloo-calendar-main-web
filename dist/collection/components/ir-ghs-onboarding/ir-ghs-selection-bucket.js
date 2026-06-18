import { h } from "@stencil/core";
export class IrGhsSelectionBucket {
    selectedProperties = [];
    isGenerating = false;
    generateRequest;
    removeAll;
    removeProperty;
    render() {
        return (h("wa-card", { key: '5668d09717386296cf6f8ceaf2091631edc902c7', class: "ir-ghs-selection-bucket__container" }, h("div", { key: '9efe0d57b7590429c22bca4d08db337d69d6a2fb', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: '324c6056581500af7b8f6d2fcfcb865002a0376f', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: 'd6b8287ac0af6c3859a34b36e18a55e75ea505a9', class: "ir-ghs-selection-bucket__title" }, "To be added"), h("wa-badge", { key: '458d1cf294fe17cef50ac3c1f6fc4d020da1856a', variant: "brand" }, this.selectedProperties.length)), h("div", { key: '1f3b043b44d527d4c1112aa883655f1db93c4526', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: '466e7339f4a66ad823bfcdd0a487bc08f803eb07', type: "button", size: "s", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, "Generate request"))), h("div", { key: 'f4534e6f1ae89246daae126548a16f79625e6ce7', class: "ir-ghs-selection-bucket__body" }, h("div", { key: '0aa398736e652d2868baa45ce57db8d8b552d6a5', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: 'ac35de43e5aacf8c97bda3d324d27f6d012f275d', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: '1272448c3b61edd8b9f75cc0de2d37bae4ebb010' }, h("tr", { key: '74a462fc7accd6e4a92e99de235ef1465943d267', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: '62c0f72ef8cd42f502e6f5700034fccff08aed12', class: "ir-ghs-selection-bucket__header-cell" }, "Property name"), h("th", { key: '12889341e335c20b099501841ca470741b7cf4ae', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: '1db797fdcafa024cddf2b052bc827ad7139e2a9f', variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeAll.emit(), title: "Remove all" }, h("wa-icon", { key: '21ac2a04c6f842670a20f7ae303ceb81e99af7d3', name: "trash" })))))), h("tbody", { key: 'cfcc473545b14503bb3167b4070ecbb1cc1b5a7e' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeProperty.emit(p.AC_ID), title: "Remove from list" }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: 'cb7d13ac5422bbb4860138d30d800bec4a849d2b' }, h("td", { key: 'b8337b9f0fd39f884a984a3722ca9b830d52ee44', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: '958ddcafb48380184496417b1762d6651c816465', class: "ir-ghs-selection-bucket__empty-text" }, "No properties selected yet."))))))))));
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
