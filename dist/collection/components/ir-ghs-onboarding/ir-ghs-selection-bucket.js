import { h } from "@stencil/core";
export class IrGhsSelectionBucket {
    selectedProperties = [];
    isGenerating = false;
    generateRequest;
    removeAll;
    removeProperty;
    render() {
        return (h("wa-card", { key: '4b618a5f942dfc0f32815b779873e7d7814b6b20', class: "ir-ghs-selection-bucket__container" }, h("div", { key: '131e67ffcb1deede455b582544df3521e47f1cd6', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: 'afc329a3da85aac952fe42900879c3785f968e01', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: 'a730841fc8c7013c220152161f3519a2424866a2', class: "ir-ghs-selection-bucket__title" }, "To be added"), h("wa-badge", { key: '8be48afe6e571893035b61ce99468a22b4562e63', variant: "brand" }, this.selectedProperties.length)), h("div", { key: 'f3e508ca7a45a985def95790fd3d16a1d0b7546c', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: '659fbd64723b4a2b617d8e07a5f092d3a8891f08', type: "button", size: "s", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, "Generate request"))), h("div", { key: '4f9ba360e0f5c1c09b194f1054d94847e9728cf4', class: "ir-ghs-selection-bucket__body" }, h("div", { key: '0f801da89427f924efba6904ca1d056afe66f891', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: 'e7d13b927fef46679b0f78e8400c6aced907f1f3', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: '7ef7e3a05ea84c032362fe2552dbf7fbce8cd4c8' }, h("tr", { key: '7cdbd3291899780af42110939ecb08c62754eff4', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: 'd6fdd737237d3650ab1b97e5952a383ee445efce', class: "ir-ghs-selection-bucket__header-cell" }, "Property name"), h("th", { key: '79a5747b65b9dfeaa03819441338972e1a9fb168', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: '02479119846dfc6e942ea7da0992823f91a19559', variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeAll.emit(), title: "Remove all" }, h("wa-icon", { key: '25c74758e306c47659a6c8ab854f85f7e107c365', name: "trash" })))))), h("tbody", { key: 'dbde19bb30a011d9be10c4966bf3a3bc98823b07' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeProperty.emit(p.AC_ID), title: "Remove from list" }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: '56a2d75fc9e5191975370a63d3af042373041326' }, h("td", { key: '7bc20ce64474fd9e5a116a64d9272f43d3679ad6', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: 'c07bb673a73af61ce3c1e96ffc82c36126d90383', class: "ir-ghs-selection-bucket__empty-text" }, "No properties selected yet."))))))))));
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
