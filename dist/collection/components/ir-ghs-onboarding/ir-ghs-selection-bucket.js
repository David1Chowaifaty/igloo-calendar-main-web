import { h } from "@stencil/core";
export class IrGhsSelectionBucket {
    selectedProperties = [];
    isGenerating = false;
    generateRequest;
    removeAll;
    removeProperty;
    render() {
        return (h("wa-card", { key: '29857fff54da4ce5146091fd4bd77a75664fe170', class: "ir-ghs-selection-bucket__container" }, h("div", { key: 'd73e59dbfed4a581d4676187b5437388d5730f5b', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: 'd28348ceff93da3d30302daee9295908564f442a', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: '74030a1ef8ebbada63fa1fbe045cdef171c65734', class: "ir-ghs-selection-bucket__title" }, "To be added"), h("wa-badge", { key: 'cfc40173918b1b579fed4fcba7c2dec6af47a3ba', variant: "brand" }, this.selectedProperties.length)), h("div", { key: 'e44ce9b6785323d76c6d0c0585fa3fed2651f39f', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: '823682dd656cc1732d6dbbbf7e10c0294b0fd630', type: "button", size: "small", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, "Generate request"))), h("div", { key: '503a7ab9e938dd86609c1890e5d33beef82b1c8e', class: "ir-ghs-selection-bucket__body" }, h("div", { key: 'be6082c47417b50f65c7dd86d78136d640e31c9d', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: 'a75c6cba4c06a13ea719de437c164bb4416f7e2b', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: '397eb16dfe6f68b0cf87ad18b6297b8907a28ce7' }, h("tr", { key: 'c6769d63db7747f1a5dcdcb49d27e6a1fe83e7bd', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: '8e4c7fdd161a5ab17484acad637e75fa59c82cc4', class: "ir-ghs-selection-bucket__header-cell" }, "Property name"), h("th", { key: '4a8862f64bdd4660c3e06c97c22f8bbb1380bd04', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: '6664b636e430d7a3fe35f052329e04eaa95d781c', variant: "danger", appearance: "plain", size: "small", onClick: () => this.removeAll.emit(), title: "Remove all" }, h("wa-icon", { key: 'd77a69db5d755d97e93c3998c815ea7a101d3db3', name: "trash" })))))), h("tbody", { key: '63d52c7715d5854dee0f0c90de95eb51a57ef988' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "small", onClick: () => this.removeProperty.emit(p.AC_ID), title: "Remove from list" }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: '967f5b1c8967c851fb19f715e8acd3bb1c64bf2b' }, h("td", { key: '19f44ead0d8993eaa6138287e8b9397aefb18cc5', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: '8acec9c095e36fc0e92699b17d86a459a92cbc8c', class: "ir-ghs-selection-bucket__empty-text" }, "No properties selected yet."))))))))));
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
