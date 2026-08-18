import { h } from "@stencil/core";
export class IrGhsSelectionBucket {
    selectedProperties = [];
    isGenerating = false;
    generateRequest;
    removeAll;
    removeProperty;
    render() {
        return (h("wa-card", { key: '064fe3c29f4b300159d35df061d840deb14a249a', class: "ir-ghs-selection-bucket__container" }, h("div", { key: '3d0e2b0d17bdd77376ae82d5b2839b136feaa8ae', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: '71ac8ae1743f9ecf57644e3a6fa3f9f5fecaf71d', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: '6831e0161d87161c2c657714d305a3342f11afb9', class: "ir-ghs-selection-bucket__title" }, "To be added"), h("wa-badge", { key: '72fd2f2c6fee33968437b629ca6033a4f2d2de15', variant: "brand" }, this.selectedProperties.length)), h("div", { key: 'f1e4e3e67095dc730189cf2cd42f152fddf08eb6', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: '36e91444c988224de987e3983ade94fec5b24ee0', type: "button", size: "s", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, "Generate request"))), h("div", { key: '19c144bd83ddafe64078c18635313e3570a358bb', class: "ir-ghs-selection-bucket__body" }, h("div", { key: 'a50143ce7a9ecbeb90439a47924c466f7c01885c', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: 'a79edb79acd7d1c09ee8215f0865e6a60ef95738', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: 'ae4d4ddfaf1fae67065a3a80fd90bb000eecf6df' }, h("tr", { key: '23ca2c3e5af175eb1ae4a8c39aa59af4e69c43ac', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: '30251841da4b1e6778b742e10e346a5261cf14a8', class: "ir-ghs-selection-bucket__header-cell" }, "Property name"), h("th", { key: '052abe606243cc5490e2981007c491b0180ae1a7', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: '041550121699f350949f6545eafcfca7a64f9f11', variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeAll.emit(), title: "Remove all" }, h("wa-icon", { key: '3d59dd446403eabc51f64ba1e0c220167c76d8df', name: "trash" })))))), h("tbody", { key: '88c39ef94bdacd225508651d26d595e1859ef94c' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeProperty.emit(p.AC_ID), title: "Remove from list" }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: '48a4b81040b685a01663c025b0b4ba5f4fd203e5' }, h("td", { key: '59282fcc9f427a4b6a56ade7ab5565257390e3e8', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: 'b5d6ac4a5416cab73380bf18589424633b123342', class: "ir-ghs-selection-bucket__empty-text" }, "No properties selected yet."))))))))));
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
