import { h } from "@stencil/core";
export class IrGhsSelectionBucket {
    selectedProperties = [];
    isGenerating = false;
    generateRequest;
    removeAll;
    removeProperty;
    render() {
        return (h("wa-card", { key: 'f50bb55cec1d40fbb68b1238a0fffe0beb1832e1', class: "ir-ghs-selection-bucket__container" }, h("div", { key: 'c1eea7a9a7c5ee573d8dff5c851857d73a7e3ed0', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: 'ac406c74c25d6843c5c51d4ab58ed7ab8fe950ce', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: '5957cafefc491a6aa98cd2ddddf8cad44cc0c641', class: "ir-ghs-selection-bucket__title" }, "To be added"), h("wa-badge", { key: '9f2d862582dd6325cdc31882840844660b355be2', variant: "brand" }, this.selectedProperties.length)), h("div", { key: 'b936f9b8631b7d74d121b7f0d3230276140cb916', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: '1748b7c0f0a0193b49524c9c800e370a55f58685', type: "button", size: "small", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, "Generate request"))), h("div", { key: 'a924f9e8d0be68ef86dc1bbd4c3c3ecc40bf29b8', class: "ir-ghs-selection-bucket__body" }, h("div", { key: '3b079db898bfd2062ff26249e1fc69be88c482c7', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: '5110db67e20e20ca3cadb52110fd68d90bd8581c', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: 'b078495b547b8403dd2177d8aa085e717d509bd9' }, h("tr", { key: 'eb045f1b52716a4943004544d8dfa79101e1839d', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: '6de244831c8a56f515bbe7eb48e37cf05cca3567', class: "ir-ghs-selection-bucket__header-cell" }, "Property name"), h("th", { key: 'c42dae07b930571f8f0efda2a05e6c207e5e216c', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: '59621c56701138e1b84178392fee63a00edd51d3', variant: "danger", appearance: "plain", size: "small", onClick: () => this.removeAll.emit(), title: "Remove all" }, h("wa-icon", { key: 'fe94c1fa9853e2308cc769833816e6759aea1bac', name: "trash" })))))), h("tbody", { key: 'e87b5505fec4d7d0786375662e9677e662200720' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "small", onClick: () => this.removeProperty.emit(p.AC_ID), title: "Remove from list" }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: '2b9762ccb782bee7346426b0a26dd909ac38870f' }, h("td", { key: '6dc9ced8d5c19f82774eead3ba11092a25864f2b', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: 'c3ad2656889afcdd45a7e582c00b3725cb855475', class: "ir-ghs-selection-bucket__empty-text" }, "No properties selected yet."))))))))));
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
