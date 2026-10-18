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
        return (h("wa-card", { key: 'b88b7b87ddaf89ea13d7ed1ed2e1b0dd4fea4630', class: "ir-ghs-selection-bucket__container" }, h("div", { key: '25d13fa64d5be6dc261e97c101b13a8780ca2b16', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: '467b8518a9b8afc778b0a1f394e3b4b162f262d6', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: '598ccbfcc723e0de3cb7709b79403658abd7f981', class: "ir-ghs-selection-bucket__title" }, t('Lcz_ToBeAdded', { fallback: 'To be added' })), h("wa-badge", { key: '969c0a30e37644b210dc7a1d3895789588290cd3', variant: "brand" }, formatCount(this.selectedProperties.length))), h("div", { key: '6dda3f61b9862e05eb555b5c475bc33e9d758f18', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: 'b297c39c4732c4b533425dfd38d4a201b87aa259', type: "button", size: "s", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, t('Lcz_GenerateRequest', { fallback: 'Generate request' })))), h("div", { key: '660273d18f96393ff7cf303780d118a7e45b33d2', class: "ir-ghs-selection-bucket__body" }, h("div", { key: 'c6f491a6c3360078cd53c0c9e2a287f6114471f3', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: '350d75398aeb14442ab2af0ddfd41491299d309f', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: 'da03c68eede4857f50395b1199b62efad04c2789' }, h("tr", { key: '83a503879ee0ca9b20920f014b170592afb7be9e', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: '9dbf266d87183a477b3bc9e66ffa70913b8668d7', class: "ir-ghs-selection-bucket__header-cell" }, t('Lcz_PropertyName', { fallback: 'Property name' })), h("th", { key: '73899e7e874850508b52210c21043e5a6963b015', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: '4776a1af1342bbcc2ffa16682af5c9e0f812c141', variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeAll.emit(), title: t('Lcz_RemoveAll', { fallback: 'Remove all' }) }, h("wa-icon", { key: '20fbb8028d6bbd51cf71ab9fe1e8663710afddca', name: "trash" })))))), h("tbody", { key: '8292b41f0985e1275a491579d7b95e13dc7903d9' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeProperty.emit(p.AC_ID), title: t('Lcz_RemoveFromList', { fallback: 'Remove from list' }) }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: '7ebed6072f77b4161bd88b9a5c0acadd328936bc' }, h("td", { key: '886b580dc0723e714e8e1603364e4c61b253b2dc', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: 'fdc66f07549548377f763450b3f7333f66586ffa', class: "ir-ghs-selection-bucket__empty-text" }, t('Lcz_NoPropertiesSelectedYet', { fallback: 'No properties selected yet.' })))))))))));
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
