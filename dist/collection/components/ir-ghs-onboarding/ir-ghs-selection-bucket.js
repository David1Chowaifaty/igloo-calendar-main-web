import { h } from "@stencil/core";
export class IrGhsSelectionBucket {
    selectedProperties = [];
    isGenerating = false;
    generateRequest;
    removeAll;
    removeProperty;
    render() {
        return (h("wa-card", { key: '3ace1816a900111092f1fbfc9ab96422324e74f6', class: "ir-ghs-selection-bucket__container" }, h("div", { key: '73581afde12fdd92fd8d0726155f3b1ec2755b11', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: '4f5f378618058b84f767536f91c5e6c34009b97f', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: '4dbe5683dfbffbce89ba6e4ed400dbdc2c5e961a', class: "ir-ghs-selection-bucket__title" }, "To be added"), h("wa-badge", { key: '87ef0f5280bd08f4081191db7cc37af1b66c1917', variant: "brand" }, this.selectedProperties.length)), h("div", { key: '9f979060d29d844d1a0794b69eb453d3d80d45f5', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: '6a744926278bc06f55ec947eb402b24515e410d5', type: "button", size: "small", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, "Generate request"))), h("div", { key: '05ceb7730a1cac80603f6093fbfc7c4ab2310012', class: "ir-ghs-selection-bucket__body" }, h("div", { key: '4053249cf7bbd27e4af3a70a11bf265ee8b2ffd9', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: '391a3238cac2b6016d500fd0fe501db40ec9f483', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: 'daf4f8282f606fcd5b62cbea8ca908edc7eb0a04' }, h("tr", { key: 'd6dbc23e684138b30839db96a87157c0673e0ed9', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: '38c801ea75fb8d3106af6240f304fbd9b3dac00c', class: "ir-ghs-selection-bucket__header-cell" }, "Property name"), h("th", { key: '04b6f7f25afbbcdc2f4de6ff1f73d125d5c79166', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: 'ea7be25d66255d82db1935ceb07ca02d0fa4342f', variant: "danger", appearance: "plain", size: "small", onClick: () => this.removeAll.emit(), title: "Remove all" }, h("wa-icon", { key: '7679eb06ae7bb946a08de5b130b08a80d5f1dd2f', name: "trash" })))))), h("tbody", { key: 'c03f63c03247da9ee68174fa53b68b88a38f13c9' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "small", onClick: () => this.removeProperty.emit(p.AC_ID), title: "Remove from list" }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: '23cb57e7b765b3622baa2ee41ad46ea69ecc20ea' }, h("td", { key: '6cf2ec5ed3f1fe5506acd96b7ffb51e3e079f396', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: '68c22ca7f4a76802014188c828866228b6d7d67a', class: "ir-ghs-selection-bucket__empty-text" }, "No properties selected yet."))))))))));
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
