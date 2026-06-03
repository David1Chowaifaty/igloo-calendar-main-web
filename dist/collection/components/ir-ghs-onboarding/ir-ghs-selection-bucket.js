import { h } from "@stencil/core";
export class IrGhsSelectionBucket {
    selectedProperties = [];
    isGenerating = false;
    generateRequest;
    removeAll;
    removeProperty;
    render() {
        return (h("wa-card", { key: '0edd928e17afd4bc99cef250615d871f81583145', class: "ir-ghs-selection-bucket__container" }, h("div", { key: '9d75c4ee617fca1249194ff425470d57c3bc334b', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: '572d421824fb366014c33833f243cdf9bdb67705', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: '84c2440599d55d34e2a958a16d50824a3e26508a', class: "ir-ghs-selection-bucket__title" }, "To be added"), h("wa-badge", { key: 'fc9c986542297234b8808c987be297af87446a8b', variant: "brand" }, this.selectedProperties.length)), h("div", { key: '8fc084eeb54053bfd3a10249cedccb9753134628', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: '2d094aa471282368e36f63d5d782aeeb1ad83a76', type: "button", size: "small", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, "Generate request"))), h("div", { key: 'f848f07408b5c3c758e25d6b82b507b0dfc08422', class: "ir-ghs-selection-bucket__body" }, h("div", { key: 'defb2b4eefc20656e7c23fc947e9890f928c7b68', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: 'bfd89fa2c043b4d0536a6af30444d9254fff3c69', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: 'f33be0f3d0c579ba0ba60b5cf6f9cabe3a4575bb' }, h("tr", { key: '79229b1a8c4baf50682b995ba2e8b393307a1166', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: '518d0bc6930180dc10ab470806c40ec47d44f818', class: "ir-ghs-selection-bucket__header-cell" }, "Property name"), h("th", { key: '2de11555307cb7053d70b4e5aaa9b759de73d817', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: '9384df65441dab0782fecbd3fdc9bb214365ec83', variant: "danger", appearance: "plain", size: "small", onClick: () => this.removeAll.emit(), title: "Remove all" }, h("wa-icon", { key: '6d0b0bf5d2246d274eb82f20e92311c7c362ce40', name: "trash" })))))), h("tbody", { key: 'f6293d5b277b6f9178c39c3cfbcdebcf102b6691' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "small", onClick: () => this.removeProperty.emit(p.AC_ID), title: "Remove from list" }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: '63619a6de4fb670538e303b22ba4028f47dfff05' }, h("td", { key: 'e3cdbff485dcc9b4c626a5ac24c483a700ad0f8c', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: 'a64b345b7aac0311f194ccb722ff649f7e91b09f', class: "ir-ghs-selection-bucket__empty-text" }, "No properties selected yet."))))))))));
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
