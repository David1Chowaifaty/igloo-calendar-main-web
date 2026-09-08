import { h } from "@stencil/core";
export class IrGhsSelectionBucket {
    selectedProperties = [];
    isGenerating = false;
    generateRequest;
    removeAll;
    removeProperty;
    render() {
        return (h("wa-card", { key: 'f2e0c621f1848cc66678f878e9706ec5413cce02', class: "ir-ghs-selection-bucket__container" }, h("div", { key: 'a71538cd6ddc79b67f4bf495cbd31742173e3fb0', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: 'be0e5c7e06501045199dcbbdee18768ac4fca637', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: 'd2f874075ce0d6c88487008953841f30e0848454', class: "ir-ghs-selection-bucket__title" }, "To be added"), h("wa-badge", { key: '4fdd06d6a8156ecf4c485a62107af6c313a2138a', variant: "brand" }, this.selectedProperties.length)), h("div", { key: '71cf1ec0b6413817325acf52476c7b34139164db', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: '01860deff0b308f02401393497595ab69aeb6618', type: "button", size: "s", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, "Generate request"))), h("div", { key: '5db0124e7e9ee11f0a48efb873656c0d988b7243', class: "ir-ghs-selection-bucket__body" }, h("div", { key: 'dc46e93c651762ee37b96ece93b9407c14df3281', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: 'a53f4840326c54250cd2d48ec6bae32c84e5cc05', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: '8410500169d71944e0d6ff6256bba7bd7036a1e2' }, h("tr", { key: '69a64e9b2c6133ba535f4e6f6cb798923092b78f', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: '93c4422ba3f0fc08d415e738aad18519a16229b9', class: "ir-ghs-selection-bucket__header-cell" }, "Property name"), h("th", { key: '10c7c3a613367b670ac566d3ea9b216095356f73', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: '82b6173f11c50fd3734fff306d24736c7595f88b', variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeAll.emit(), title: "Remove all" }, h("wa-icon", { key: '39671721cffe88f20f74008a18ae66efc84b4a19', name: "trash" })))))), h("tbody", { key: '6ec20231b62c056ebbb3062d484fd7a947d1f62d' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeProperty.emit(p.AC_ID), title: "Remove from list" }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: '302c759dd8e088abb3cc72322a888e2fd6eca379' }, h("td", { key: '3bc3f33a4191873cdcee58bb7be10df21b7d055d', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: '9ae2ea3689cd1cae2a5e1366b8ba058676f069b1', class: "ir-ghs-selection-bucket__empty-text" }, "No properties selected yet."))))))))));
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
