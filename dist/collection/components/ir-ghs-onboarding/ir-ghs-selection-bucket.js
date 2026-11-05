import { h } from "@stencil/core";
import { t } from "../../services/locale/t";
import { formatCount } from "../../utils/number";
export class IrGhsSelectionBucket {
    selectedProperties = [];
    isGenerating = false;
    generateRequest;
    removeAll;
    removeProperty;
    render() {
        return (h("wa-card", { key: '97d5f434d245349de310cf12b61765bfab377ee3', class: "ir-ghs-selection-bucket__container" }, h("div", { key: '3848398e0a26b1e4efc09b8a8fdeaff662bfc9f0', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: 'b2713204349b634ccfee85e5830e0a468835164a', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: '022fe1c614bcc027678d0f7a3a3c0da89204b380', class: "ir-ghs-selection-bucket__title" }, t('Lcz_ToBeAdded', { fallback: 'To be added' })), h("wa-badge", { key: '777cd4fbb27b1c6658690bd471bae2f6ab214c58', variant: "brand" }, formatCount(this.selectedProperties.length))), h("div", { key: 'f0267dc9dd18afc0e9efe3c2f113310f4b0f43b6', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: '62886d00a96d648d5464ea2fac97a289dbc1a519', type: "button", size: "s", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, t('Lcz_GenerateRequest', { fallback: 'Generate request' })))), h("div", { key: 'b54adec1347f384fe1d4e9d9a87c7329bc98c0ae', class: "ir-ghs-selection-bucket__body" }, h("div", { key: '8d314a65fbfff61f879e348a8daff7404e106413', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: '08957f670cdad16dc5b4dcbe80f80372038b1bdc', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: '68bda80f2ab6ce834705399b3af0ac8cfa12c2e8' }, h("tr", { key: '1a74bb0e22f8c10ef653f5243da75df823227f5d', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: '7bc3652be3f58900e8e0b44d0938cb38f93f2746', class: "ir-ghs-selection-bucket__header-cell" }, t('Lcz_PropertyName', { fallback: 'Property name' })), h("th", { key: '5a136ac7d5b8ea05b417724dcbeeafbe206eceb1', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: '0c37c703dfebaaa286c97e0fa3078e0162687c1b', variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeAll.emit(), title: t('Lcz_RemoveAll', { fallback: 'Remove all' }) }, h("wa-icon", { key: 'a447cb490fb56a2647d05ab2957e7dff60918cd3', name: "trash" })))))), h("tbody", { key: '8844c13ef6fc2e739fa343979d4c938c02cf11c2' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeProperty.emit(p.AC_ID), title: t('Lcz_RemoveFromList', { fallback: 'Remove from list' }) }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: 'e7f61013060dc6dcc5af93d8a1b03c73fee011ad' }, h("td", { key: '2879edc5e07e7ded4ab1431cb9fc916fb7e9f3dd', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: '8c1c99cb255a7efa28c5de4227962e0e87861a2c', class: "ir-ghs-selection-bucket__empty-text" }, t('Lcz_NoPropertiesSelectedYet', { fallback: 'No properties selected yet.' })))))))))));
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
