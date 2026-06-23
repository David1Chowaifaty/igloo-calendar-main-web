import { h } from "@stencil/core";
export class IrGhsSelectionBucket {
    selectedProperties = [];
    isGenerating = false;
    generateRequest;
    removeAll;
    removeProperty;
    render() {
        return (h("wa-card", { key: 'fc81f963caa9c27c8cfc74ce47c604853b5760f1', class: "ir-ghs-selection-bucket__container" }, h("div", { key: '464596f8fa0078806b5c67f61a702ddcd22b6c80', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: 'f140209ddd86557c61fdcdbee3f13a61c53b7e95', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: 'd26ff9085695f54b8c5cff959138066eaf9024b7', class: "ir-ghs-selection-bucket__title" }, "To be added"), h("wa-badge", { key: '91028c434142180e0291790f40e532dc191813f2', variant: "brand" }, this.selectedProperties.length)), h("div", { key: '0bef7cdf243ff9744e40337cbc11a59154e7023a', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: '9589a56af5740479fcf9e3c04e905ac6351abc93', type: "button", size: "s", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, "Generate request"))), h("div", { key: '262b110d5e4b809b2c78e530b0fc8d50b167a09e', class: "ir-ghs-selection-bucket__body" }, h("div", { key: '33ab184211fd93bc564c323a0dc524d205bdb4c9', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: 'e053774098426f7ac03c3d6613551ced46bb1485', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: 'f01a0d530326aeda61997e0a8bb955e8cfd4f8b3' }, h("tr", { key: 'b1a8f118effd06bfd38707c709239384bcc9e9c1', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: '36ce5c2955d542457552401ed2f88eaa17357d47', class: "ir-ghs-selection-bucket__header-cell" }, "Property name"), h("th", { key: '76b1dc8e0da6469ac6157026674cb7e19d8b372b', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: '863b99af0c53d94c48100cd5fe62c9d1c5d56de9', variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeAll.emit(), title: "Remove all" }, h("wa-icon", { key: 'a116ae7bcfc3dd08d7d4e9f27dde47616997606c', name: "trash" })))))), h("tbody", { key: '851ae6d6100179802bfdac6b4df2e40d5ac16338' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeProperty.emit(p.AC_ID), title: "Remove from list" }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: 'd971d5dd450938600f9d2e12edfb289ebbc8289c' }, h("td", { key: '6169920aa5ef6bd10096edf6b335915f07f0504e', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: 'bf28bc2038910118878b1efe194293bfdd4a473a', class: "ir-ghs-selection-bucket__empty-text" }, "No properties selected yet."))))))))));
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
