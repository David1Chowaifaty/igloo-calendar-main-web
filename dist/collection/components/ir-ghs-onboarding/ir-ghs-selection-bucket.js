import { h } from "@stencil/core";
export class IrGhsSelectionBucket {
    selectedProperties = [];
    isGenerating = false;
    generateRequest;
    removeAll;
    removeProperty;
    render() {
        return (h("wa-card", { key: '432202861d25a956365d4df6e3c690e6e69617af', class: "ir-ghs-selection-bucket__container" }, h("div", { key: '15465f39bda1e3296f2f7881e0a1bfffd1480915', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: 'fcb6c96876a43731be300392c5f18b5509fb2c0d', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: '9d5e8e8f65db1435fad100cb5fb6620f10869410', class: "ir-ghs-selection-bucket__title" }, "To be added"), h("wa-badge", { key: 'ec0a822f347761263cd4f5573673a7c908fcee9d', variant: "brand" }, this.selectedProperties.length)), h("div", { key: '1b76ccb41755f1ea960ad490adb9c805d83f1189', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: '3ce75555f69b02fd3f8e80b413b553ce9218d9e8', type: "button", size: "s", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, "Generate request"))), h("div", { key: '731591fcb70ee318093e5f44c083d547e2e91650', class: "ir-ghs-selection-bucket__body" }, h("div", { key: 'd478d7178388a7c8534cefb7673637742cf2aea1', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: '8d9d7539b99bb276aa7aa3568b20e3e189e04ef0', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: '0c5726bc6b8b5ff11d815f84a81369aab6b41a60' }, h("tr", { key: '1c6f931fd5bf2d0d982b8a0d003963a31d08b863', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: '1c0ef7d3042b8759fac30ce27b870d715c3d75b5', class: "ir-ghs-selection-bucket__header-cell" }, "Property name"), h("th", { key: '1822d274c03db898d6f573634f51ecaf2cf10ae0', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: '00698a0ef7b37e17d1905e3ba16e67fe226251f1', variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeAll.emit(), title: "Remove all" }, h("wa-icon", { key: '17b4e3f8236a387802cf2dc422d4cb2cfb1ca274', name: "trash" })))))), h("tbody", { key: '982ce3145fe2b5f5d9203f78a1b301e1f3055fc1' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeProperty.emit(p.AC_ID), title: "Remove from list" }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: '32b69e4ee4c36197e8bcbc18f772dfd706c1ea28' }, h("td", { key: '0fe7822bf1ace04a2cb20b1461ebc99b753f12e0', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: '33bf02fc1b37dc1287c0b3aea0c9b23d7bece842', class: "ir-ghs-selection-bucket__empty-text" }, "No properties selected yet."))))))))));
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
