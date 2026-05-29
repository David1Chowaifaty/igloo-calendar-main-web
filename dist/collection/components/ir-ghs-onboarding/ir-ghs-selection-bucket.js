import { h } from "@stencil/core";
export class IrGhsSelectionBucket {
    selectedProperties = [];
    isGenerating = false;
    generateRequest;
    removeAll;
    removeProperty;
    render() {
        return (h("div", { key: 'af4714e42aaea70126dd9ffce48b959e51703d5f', class: "card mb-0 overflow-hidden shadow-sm border-0 position-relative", style: { flex: '0 0 350px' } }, h("div", { key: 'c0bf871b9db201c41babfd0d0c6788967e82f2d8', class: "card-header bg-white py-2 px-3 border-bottom d-flex align-items-center justify-content-between flex-nowrap", style: { gap: '0.5rem' } }, h("div", { key: '129d39c5551a19562d0b29b091a6fe2155b62133', class: "d-flex align-items-center flex-nowrap overflow-hidden", style: { gap: '0.5rem' } }, h("h3", { key: '107f0ea02a58541346d31193ee141c8c56991934', class: "h6 fw-bold mb-0 text-dark text-nowrap" }, "To be added"), h("span", { key: '5c3bd7ab5774b5554d757ef3ce0533639e86da1f', class: "badge bg-primary text-white extra-small", style: { minWidth: '20px' } }, this.selectedProperties.length)), h("div", { key: '079ccaa0e4a9b3eac3fac59503f5eeac6be75739', class: "d-flex align-items-center", style: { gap: '0.75rem' } }, h("ir-custom-button", { key: '1623b15157e596a317c75327f35ab0527cb270ba', type: "button", size: "small", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, "Generate request"))), h("div", { key: 'b859f9bc349c741427c7f036ca2390300f97623f', class: "card-body p-0 position-relative overflow-auto", style: { maxHeight: '600px', minHeight: '400px' } }, h("div", { key: '645f2df4cdaf4c2e4faf8f7b26fa7c38c5cbe8b6', class: "table-container p-0 m-0 table-responsive bg-white" }, h("table", { key: '1e271a970e5f95679bb16de3debc8c9b7a1aaa63', class: "table align-middle mb-0" }, h("thead", { key: '48fd472d44580a4075d1e12f4c0fa614abf9b149' }, h("tr", { key: 'fed3e1de4bdaefc16f0ca3f64cd89c63d5a7a368', class: "table-header bg-light" }, h("th", { key: '31581c4f97bf1d61de174e65bcb9fcb8534a144f', class: "ps-3 text-start py-2 small fw-bold" }, "Property name"), h("th", { key: '011640573648a91572863199d86395a5ab5b3e95', class: "pe-3 text-end py-2 small fw-bold", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("button", { key: 'dc62d26453ced099b76e4fb6cdd80176a5839870', type: "button", class: "btn btn-sm btn-link text-danger p-0 d-inline-flex align-items-center justify-content-end", onClick: () => this.removeAll.emit(), title: "Remove all" }, h("svg", { key: '58d8aa3c103dfbeba4b38cf4274f2abdcbe9e606', xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, h("polyline", { key: '948faa721620d696e29212fc3e56338b5cb5d346', points: "3 6 5 6 21 6" }), h("path", { key: '4fd9e334048fb7db25659fc537c3cda41f844265', d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }))))))), h("tbody", { key: '078772fa2ce56d17219e8bff848c98a83648452b' }, this.selectedProperties.map(p => (h("tr", { class: "ir-table-row border-bottom" }, h("td", { class: "ps-3 text-dark text-start py-2 small font-weight-bold" }, p.NAME, h("div", { class: "text-muted extra-small fw-normal" }, p.aname)), h("td", { class: "pe-3 text-end py-2" }, h("button", { type: "button", class: "btn btn-sm btn-link text-danger p-0 d-inline-flex align-items-center justify-content-end", onClick: () => this.removeProperty.emit(p.AC_ID), title: "Remove from list" }, h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, h("polyline", { points: "3 6 5 6 21 6" }), h("path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }))))))), this.selectedProperties.length === 0 && (h("tr", { key: '3b9249d9a1bba2b6e9585af645060d1c7c8049a0' }, h("td", { key: '0fb4d17cc66ba47e2cb3f23649abfd0ac33eb176', colSpan: 2, class: "text-center p-4 text-muted border-0 bg-white" }, h("p", { key: 'f65625c8e156613207d4b5e4dd500a077edaa17a', class: "mb-0 small italic" }, "No properties selected yet."))))))))));
    }
    static get is() { return "ir-ghs-selection-bucket"; }
    static get encapsulation() { return "scoped"; }
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
