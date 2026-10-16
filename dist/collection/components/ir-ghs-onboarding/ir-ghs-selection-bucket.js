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
        return (h("wa-card", { key: 'a61243ee016ca6c141988ff37a062186e9e3121d', class: "ir-ghs-selection-bucket__container" }, h("div", { key: 'bc4855d31ec39389fc17b0aa1cd9a066012c4687', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: '6d9232c193e77ed21b21eb2e87252d6f66b9a18f', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: '8d075bd206736beea441c30010fa255d831f824d', class: "ir-ghs-selection-bucket__title" }, t('Lcz_ToBeAdded', { fallback: 'To be added' })), h("wa-badge", { key: 'f3b9a746677a66d391b54a0822495c79c07832fc', variant: "brand" }, formatCount(this.selectedProperties.length))), h("div", { key: '338dbce3f7c7d8ce59ca9d9f3014d825046853d7', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: 'b43fe13af6eabc0dca1e00be3891c369a008648a', type: "button", size: "s", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, t('Lcz_GenerateRequest', { fallback: 'Generate request' })))), h("div", { key: '30989d19af81abd08b4935ced9a077986cbd5fe8', class: "ir-ghs-selection-bucket__body" }, h("div", { key: '1198532075eee7271743b46d24870e6cf9273e78', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: 'e08f6fe7a2182dce2159074e1629c00c2cf808d3', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: 'a6fb473504734b797114cf3a569b5bebf810f7b4' }, h("tr", { key: 'c0b2c04d0d430f449c6a4911b261c1f2358040c1', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: '51f4fbaac57cfa8369c37a124efa73018da6f0b1', class: "ir-ghs-selection-bucket__header-cell" }, t('Lcz_PropertyName', { fallback: 'Property name' })), h("th", { key: '67a9349615de16201440f1f58942e0be4b2b8341', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: 'e668fca3d0cf265e0dfb241699122fe2c58e681c', variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeAll.emit(), title: t('Lcz_RemoveAll', { fallback: 'Remove all' }) }, h("wa-icon", { key: '27790e19a66092e268514b8fdcade591acc47465', name: "trash" })))))), h("tbody", { key: '7cf15f8cc03f776bfd5bfe2f493cf4cf36b7e1fd' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeProperty.emit(p.AC_ID), title: t('Lcz_RemoveFromList', { fallback: 'Remove from list' }) }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: 'bbc6e7d51ee9c3fe48a4fafc6a7488325f11677b' }, h("td", { key: '0820253adc25dabcd80b1a34d5abcae7b3529933', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: '473f024a5e2c854c5eba79d5c439465ecc4f84be', class: "ir-ghs-selection-bucket__empty-text" }, t('Lcz_NoPropertiesSelectedYet', { fallback: 'No properties selected yet.' })))))))))));
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
