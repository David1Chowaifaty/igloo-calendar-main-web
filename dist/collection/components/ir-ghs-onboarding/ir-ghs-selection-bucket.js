import { h } from "@stencil/core";
export class IrGhsSelectionBucket {
    selectedProperties = [];
    isGenerating = false;
    generateRequest;
    removeAll;
    removeProperty;
    render() {
        return (h("wa-card", { key: 'f50bb55cec1d40fbb68b1238a0fffe0beb1832e1', class: "ir-ghs-selection-bucket__container" }, h("div", { key: 'c1eea7a9a7c5ee573d8dff5c851857d73a7e3ed0', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: 'ac406c74c25d6843c5c51d4ab58ed7ab8fe950ce', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: '5957cafefc491a6aa98cd2ddddf8cad44cc0c641', class: "ir-ghs-selection-bucket__title" }, "To be added"), h("wa-badge", { key: '9f2d862582dd6325cdc31882840844660b355be2', variant: "brand" }, this.selectedProperties.length)), h("div", { key: 'b936f9b8631b7d74d121b7f0d3230276140cb916', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: '5f109aeff9fa1341c46183f8251c4a70680acddb', type: "button", size: "s", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, "Generate request"))), h("div", { key: '707da9196d696286a2aa12ddd0cf3d40c743ccef', class: "ir-ghs-selection-bucket__body" }, h("div", { key: '5868ca29faaf73dd26920519564bf341414b1662', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: '22a6f6f49d2a5bce3a06000d05bd92f64e3f8f2e', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: 'cb41a97779525e366a86cbfa16380f191b46422f' }, h("tr", { key: '69cb144e90175b524901a49f3dccae969c0c235e', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: 'f0ee9da7c88468800be3fcb1ffb96355f77e7a4c', class: "ir-ghs-selection-bucket__header-cell" }, "Property name"), h("th", { key: '0970e5f5ffd149ce899e8f2200137f52b3f9f4ef', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: '93b023737a50c5b547ffedaa341d61448d999581', variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeAll.emit(), title: "Remove all" }, h("wa-icon", { key: '9bb7eda16f453d01ca2ba44ea39b8f31ad316244', name: "trash" })))))), h("tbody", { key: '3d88f41412d4de028edf0d75a02ab95a91ee7f4f' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeProperty.emit(p.AC_ID), title: "Remove from list" }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: 'abaa2cc06b0c59ca459d6a6d8f1d057fc580a2c0' }, h("td", { key: '06fcf3b6da3f54a01259c0356d21753560fde867', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: '78b6bb8899733993ad3d555bc82be0b869a47ff0', class: "ir-ghs-selection-bucket__empty-text" }, "No properties selected yet."))))))))));
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
