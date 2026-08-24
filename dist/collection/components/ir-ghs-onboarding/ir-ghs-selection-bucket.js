import { h } from "@stencil/core";
export class IrGhsSelectionBucket {
    selectedProperties = [];
    isGenerating = false;
    generateRequest;
    removeAll;
    removeProperty;
    render() {
        return (h("wa-card", { key: 'bb06e4fa40feba7ac2668a40ef2f11483a15d468', class: "ir-ghs-selection-bucket__container" }, h("div", { key: 'd70d724e1ac883c9ee7b4173694895fcb5e1c14d', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: '314cee94efadb16896153ca0bf94ba74c7ebc122', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: 'fe213a6f6f0e936321235a17e2bf13263f7ac495', class: "ir-ghs-selection-bucket__title" }, "To be added"), h("wa-badge", { key: '31d3afd1582f9b3832b656675cbc14397366ed81', variant: "brand" }, this.selectedProperties.length)), h("div", { key: 'fa4c82016769c7f244f14d327427c8a26fc8f537', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: '9a8e7408d7a814378b1d9246bbbd4d82f5efc5c2', type: "button", size: "s", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, "Generate request"))), h("div", { key: 'c7ea5c13ec874e9bfef1590f3e3f3efdfd8eb4e7', class: "ir-ghs-selection-bucket__body" }, h("div", { key: 'e02b756a58298c117b5f09aece6ce3504d14df50', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: 'e8ac9f485bdabddef233c8cedcabe83be8fbc9ad', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: '01875a2c30c5a0f4fac9fc37982b690b79c395ee' }, h("tr", { key: '03b21aa4b920368d806e3223d0d2283eea4a1dab', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: '06d66d002750460a7c3926f7b7e35047a66088d4', class: "ir-ghs-selection-bucket__header-cell" }, "Property name"), h("th", { key: 'b4ecd4eecfcad6ee0dd96f068e8f527df5e5abcf', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: 'ffc0ade3e880e061eba3e4de2a6b4463ec78bf82', variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeAll.emit(), title: "Remove all" }, h("wa-icon", { key: 'e0df6a374f48e4c8cc6faae852c4c2df5fcc651b', name: "trash" })))))), h("tbody", { key: '7083882560e5f7bf41457a468dc1572649324f50' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeProperty.emit(p.AC_ID), title: "Remove from list" }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: '497ce82159ddf7b8710a42989f1fe5eb13fc9e49' }, h("td", { key: '6d791059dc5e26fae93cb6572f85630cde371b59', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: '40b67aabbf173227f60d5a4958b8b33574eeb6fe', class: "ir-ghs-selection-bucket__empty-text" }, "No properties selected yet."))))))))));
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
