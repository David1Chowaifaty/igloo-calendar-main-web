import { h } from "@stencil/core";
export class IrGhsSelectionBucket {
    selectedProperties = [];
    isGenerating = false;
    generateRequest;
    removeAll;
    removeProperty;
    render() {
        return (h("wa-card", { key: 'ed67ccb44ab83f47b8313b0b4009bb0cff49c3c3', class: "ir-ghs-selection-bucket__container" }, h("div", { key: 'e383d06b3e14a3aea47feb70e17232494bb6d0c1', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: '82ad87262a177165b16841109a85dfc28006e129', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: '50bbc6cef243bf617066e237272892fa3bf2ebee', class: "ir-ghs-selection-bucket__title" }, "To be added"), h("wa-badge", { key: '743b8bb5271df8ba24e7143e254bca873ea3d1ba', variant: "brand" }, this.selectedProperties.length)), h("div", { key: '87bea0656c25d4df9369be505a173e33063314c6', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: '6e4c16b5c507b12de30acb70a3d4b8843920bd43', type: "button", size: "s", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, "Generate request"))), h("div", { key: 'd3591aaa8947dda2177bbf1b8f415f2b14a18a67', class: "ir-ghs-selection-bucket__body" }, h("div", { key: 'ad7d95c9e73dd6681eb0efc9f647085d289c0bb6', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: 'd354c410b4175b6be6445938e7e145c3a8cdf4b9', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: '430da6d14d85165ee61227ceaa91fc73eed38275' }, h("tr", { key: '8b98e88f24847377cb295d4347113dda4d9b6538', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: '23e9c5c3437d48e19db9d9ac46bd276387064da2', class: "ir-ghs-selection-bucket__header-cell" }, "Property name"), h("th", { key: '0211bda924b39941e91c5db003b7086257cacfa6', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: 'e4376c589347ce5539e72d56bf19f35cbca66874', variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeAll.emit(), title: "Remove all" }, h("wa-icon", { key: '87f7199c2b55fb113d426035f951203964cac0d8', name: "trash" })))))), h("tbody", { key: 'f1a339c9acaafa6138e9f40420acdfd5708e774f' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeProperty.emit(p.AC_ID), title: "Remove from list" }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: '37454128913c0c6560491ebf91b7ef8025519bc8' }, h("td", { key: 'ce0662d6cab51fa8fd12b3d5d374a319e6fcf50f', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: '40978e260a4549c6dcf6f7d4ff81fe55c339d8d3', class: "ir-ghs-selection-bucket__empty-text" }, "No properties selected yet."))))))))));
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
