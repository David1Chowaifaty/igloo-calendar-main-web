import { h } from "@stencil/core";
export class IrGhsSelectionBucket {
    selectedProperties = [];
    isGenerating = false;
    generateRequest;
    removeAll;
    removeProperty;
    render() {
        return (h("wa-card", { key: '754dbf0a340c7431bf972d89909cf3cfc7d3e864', class: "ir-ghs-selection-bucket__container" }, h("div", { key: '3e30aeba2c77aedf16fcdd0c7d052bfc534ccf05', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: '403334f62b1c9c35fcd66b25b0e4ea502091eb56', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: 'd7380b55fb55c0e3445c8caa0202eec7d0698f77', class: "ir-ghs-selection-bucket__title" }, "To be added"), h("wa-badge", { key: 'eadb5a5db004565a2e2a385ac72b7da9b19420e6', variant: "brand" }, this.selectedProperties.length)), h("div", { key: '61bdf9e2430db71eac8ca729df68addd80f1f3db', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: 'a36bb92f3bea064e30e92f5ca12e8b05bc7c1621', type: "button", size: "s", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, "Generate request"))), h("div", { key: 'ce63db4f196946ef6af458e3e2d5b447338d320a', class: "ir-ghs-selection-bucket__body" }, h("div", { key: '5a7f0cc163cf80a3a65f4607956de93d179c95cc', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: '868ac6e627b8011a933eed4bcc4fe5a9f1c5ae61', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: '893ae7c1f563eea39675c95c951dbed1a319565e' }, h("tr", { key: '26b9fd64abbdda818ea616857e7458894c3a4b87', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: '2402f276b1baa501ed500d89d96011d89dd1d483', class: "ir-ghs-selection-bucket__header-cell" }, "Property name"), h("th", { key: '9df53b15ba9f3fed1b6ab76da86b14f2529b760e', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: '6b98b2cfe1e5edb3970842cf4f2b43ed8a845cac', variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeAll.emit(), title: "Remove all" }, h("wa-icon", { key: '8e431df573501799040ea53ddf71af79fd9f33b2', name: "trash" })))))), h("tbody", { key: '6929ea6db19e7e49750e81911fe51d94e9ec3d70' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeProperty.emit(p.AC_ID), title: "Remove from list" }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: '21e2fbefa87cd71deb97f05d215f8c1ed62babb9' }, h("td", { key: '37bacfb0b2ef087a9052ddec458a79f443ae6b07', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: '0c54a202b3dbf7ca21acd78f7d503c82e1aa75a4', class: "ir-ghs-selection-bucket__empty-text" }, "No properties selected yet."))))))))));
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
