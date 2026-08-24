import { h } from "@stencil/core";
export class IrGhsSelectionBucket {
    selectedProperties = [];
    isGenerating = false;
    generateRequest;
    removeAll;
    removeProperty;
    render() {
        return (h("wa-card", { key: '3adb8d54f14effe0f27faa689bf02b83f5c2f35e', class: "ir-ghs-selection-bucket__container" }, h("div", { key: 'cd2126e554d7fc9f3af5e1788b0e7871d9918daa', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: '3932a8979b9762d3e2a30df6af0ef417828ccc64', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: '324fe67f05eaf85318d918b6a6c967fb10bb522c', class: "ir-ghs-selection-bucket__title" }, "To be added"), h("wa-badge", { key: '91949d93b434bc4392038097522d01ed4b88817b', variant: "brand" }, this.selectedProperties.length)), h("div", { key: '17b03b5d47c114f6d2be75201e7e360bc79797f4', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: 'b1e8ba856562ca6b8797d2050fff93a214cd6536', type: "button", size: "s", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, "Generate request"))), h("div", { key: 'b8d986bfc63fe2ffb0613a5885a28241125103a6', class: "ir-ghs-selection-bucket__body" }, h("div", { key: 'f68f2eef414220561c829272e2ff4f631c6dbd9d', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: 'f98e4679cb3d2a6e14af69f5fd75eb94c5f09759', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: 'f235c845cf99b48ad47fb40ccfdfce2eb440c52c' }, h("tr", { key: '47a10ccc51e4fdb64733888c22d051bb979f7ee8', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: '5e8fd589da4288485408f4e6259c6ae159f16171', class: "ir-ghs-selection-bucket__header-cell" }, "Property name"), h("th", { key: '8b24c3f9e0136bdceecb1c25024bc1f85c777f6d', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: 'f454f69e128c2d118dc9eb7006c859a59f43e000', variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeAll.emit(), title: "Remove all" }, h("wa-icon", { key: '597de54bddc25a6a9d149d5fd288111e79e289f6', name: "trash" })))))), h("tbody", { key: 'd82ad9f34cd0befd5a0e146d5c3a17d54e8756c7' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeProperty.emit(p.AC_ID), title: "Remove from list" }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: 'b3fdf3263b6e018bb3d0cfc92298891284276a20' }, h("td", { key: '85615c64d669e8381844523323b7ac31df999060', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: '8cebdd58c2e79d3ac7917771db86fa8da8e3893f', class: "ir-ghs-selection-bucket__empty-text" }, "No properties selected yet."))))))))));
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
