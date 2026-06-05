import { h } from "@stencil/core";
export class IrGhsSelectionBucket {
    selectedProperties = [];
    isGenerating = false;
    generateRequest;
    removeAll;
    removeProperty;
    render() {
        return (h("wa-card", { key: '1055f9e939387af8e7a4c2e2bbaf26c1b423dc54', class: "ir-ghs-selection-bucket__container" }, h("div", { key: '637b67dd0ad3ec4fbec21e294af86a98943fcc02', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: 'edeeda223e052bf83a3f1e5a7d859f8eafd39c76', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: '80cdd164b086b8037b6ee62526ae0c35454025ae', class: "ir-ghs-selection-bucket__title" }, "To be added"), h("wa-badge", { key: '6d580d9732c95c5010e78bb84ab85cce6fdfa9e2', variant: "brand" }, this.selectedProperties.length)), h("div", { key: 'bbf80a51a79d51d895327c65691fcdc04ea04d34', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: '06c4798c35b370ee5f3ff5eeddf6d5732c894374', type: "button", size: "small", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, "Generate request"))), h("div", { key: '31d990be34ef57a2faa96ecc69482b218f98210e', class: "ir-ghs-selection-bucket__body" }, h("div", { key: 'd8878af0b20c3dadedec3d194b0e638274c52e46', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: '571dff72ce7ebc38a283c84bc4ce5358e4a4a966', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: '5bb16fd464e7dd9af014baae544e6fa150c874b9' }, h("tr", { key: '3637f8c0e1bb1a8c1d116a887bb069ec6aaa561f', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: '40c281bff8339ff2d5991d54cc6b8b7ec9f62141', class: "ir-ghs-selection-bucket__header-cell" }, "Property name"), h("th", { key: 'c72c784336ce51a1916ca16ca3fd1f7240c1aa75', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: 'ed5e81f04e7f2bdcfcf68d6ab6456d0501e94d91', variant: "danger", appearance: "plain", size: "small", onClick: () => this.removeAll.emit(), title: "Remove all" }, h("wa-icon", { key: 'e4b10729c51b6dad7231c2a58bd54ecb19ee8b6d', name: "trash" })))))), h("tbody", { key: '593cc3bc1ba2c7627550303f0a478f36974dc2be' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "small", onClick: () => this.removeProperty.emit(p.AC_ID), title: "Remove from list" }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: '72c65f6d82bb657e9958866df9460dc2106f5e0f' }, h("td", { key: 'de064dad5e709a5349f996eafc760b9467465667', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: 'ad808a1f51e56a5044110c769b2301958e7481b4', class: "ir-ghs-selection-bucket__empty-text" }, "No properties selected yet."))))))))));
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
