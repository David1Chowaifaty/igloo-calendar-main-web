import { h } from "@stencil/core";
export class IrGhsSelectionBucket {
    selectedProperties = [];
    isGenerating = false;
    generateRequest;
    removeAll;
    removeProperty;
    render() {
        return (h("wa-card", { key: '9a1d93236dfee48cea69bd1b37d24da15a98a660', class: "ir-ghs-selection-bucket__container" }, h("div", { key: 'de5f3252ae7f56fbd659e68356970363b02e1c6c', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: '413f608c698896d6a25b42df9e558ca38ec2cb9b', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: '7b0902235020f63ddaaa13c30a5c7cd3682460eb', class: "ir-ghs-selection-bucket__title" }, "To be added"), h("wa-badge", { key: 'f71cf1aa4ab2bae5b5d50a393ba1c1df6eedc9fe', variant: "brand" }, this.selectedProperties.length)), h("div", { key: '798129911023566d06bbe11b5fae7ae117ebcf53', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: '91ec67c423e44baa8394a4eb6e89098b217d9436', type: "button", size: "small", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, "Generate request"))), h("div", { key: 'f0d53f4d9457826a44e2e040f37194dd315d2d94', class: "ir-ghs-selection-bucket__body" }, h("div", { key: '33eb1a9a3764236c1ad37b29a862aaa975b8948b', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: 'cebed057ba675c67dc7da15334baf878fd76d618', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: '2373ecc732f16dc244106c1c277a231a976b05e3' }, h("tr", { key: 'c20003ab1a1f15cd282aeef70c22840a68a4513b', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: 'a1bd2b754d05f837fb8e11248e61ea3cef6dead9', class: "ir-ghs-selection-bucket__header-cell" }, "Property name"), h("th", { key: 'c5a8a4ea41e2ea1a6350eb942295e20184e14da7', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: '881fedf2b71c2471c49706ae9de040d5e3bababe', variant: "danger", appearance: "plain", size: "small", onClick: () => this.removeAll.emit(), title: "Remove all" }, h("wa-icon", { key: '133c5c405b6c5a42cecbb2b612e8e366565c7fba', name: "trash" })))))), h("tbody", { key: '47bbc7220be719ec2c985f268512ba5e9a91ef72' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "small", onClick: () => this.removeProperty.emit(p.AC_ID), title: "Remove from list" }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: 'f4f553f36b1ab817e4a5442a5876b7c523b9cab6' }, h("td", { key: '40314dbae193ef1a38962799c2e8084b71e04546', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: '3705633277f02eefd484c017b97e711405a34834', class: "ir-ghs-selection-bucket__empty-text" }, "No properties selected yet."))))))))));
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
