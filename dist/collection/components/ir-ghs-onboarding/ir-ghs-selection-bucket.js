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
        return (h("wa-card", { key: '565badf6587ade9af67858ecf2c5de2bfe51f397', class: "ir-ghs-selection-bucket__container" }, h("div", { key: '5c9336ef1cb9f921045e6c225f69af6237f19afc', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: '4d16c533911571c71658f325bb71d25362054951', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: '3754739b49c78bcc10e3e0d0f29f7426a3ee6f1d', class: "ir-ghs-selection-bucket__title" }, t('Lcz_ToBeAdded', { fallback: 'To be added' })), h("wa-badge", { key: 'a8fb0948fb3a8697d7bc53bbf2c278f2443068b6', variant: "brand" }, formatCount(this.selectedProperties.length))), h("div", { key: 'fc86deceaee0978d72c2a5cb8959bd3c816a1bf1', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: '2d4885662a6d17aa4ff22e45bf9744f61c6ef3a5', type: "button", size: "s", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, t('Lcz_GenerateRequest', { fallback: 'Generate request' })))), h("div", { key: 'c653850802215e22163f39183462620cb2013e3f', class: "ir-ghs-selection-bucket__body" }, h("div", { key: '49990ace1ae24575e30cb270c3302c28e52e998e', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: '16668fbb82ac727749a6887e1e295c1c1a195337', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: 'b547881270fb9c47c61c667710373033a050deca' }, h("tr", { key: 'dcaada1712a56ba875148c192300c4b3cd48dbc8', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: 'c186c5621f95701ebac19812819d6431187bc3ad', class: "ir-ghs-selection-bucket__header-cell" }, t('Lcz_PropertyName', { fallback: 'Property name' })), h("th", { key: '001f8c0c946bdfd69f977054614a4b0c57a059f5', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: 'cc14f35c0fe8bf93041a835c06757a6285c64df3', variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeAll.emit(), title: t('Lcz_RemoveAll', { fallback: 'Remove all' }) }, h("wa-icon", { key: '0d54b2cbbffea6f2f46c71e3a90d8126ade0d4a3', name: "trash" })))))), h("tbody", { key: '979c63485278a545376ad7bd3c36ac26a35b837e' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeProperty.emit(p.AC_ID), title: t('Lcz_RemoveFromList', { fallback: 'Remove from list' }) }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: '0bc786e1a651ab28aaa873bca1ec25bcce68f3d6' }, h("td", { key: 'f2da03514da60f38314a73d1481450eda8b11598', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: '2bcac8d6cbd3676fcad6bac7ae6075eb486f723f', class: "ir-ghs-selection-bucket__empty-text" }, t('Lcz_NoPropertiesSelectedYet', { fallback: 'No properties selected yet.' })))))))))));
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
                    "resolved": "{ AC_ID?: number; aname?: string; NAME?: string; level2?: string; COUNTRY_ID?: number; }[]",
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
