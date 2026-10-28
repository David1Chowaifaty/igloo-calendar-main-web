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
        return (h("wa-card", { key: '4c71068205c6f7d65da42437e42984653f89aea6', class: "ir-ghs-selection-bucket__container" }, h("div", { key: '245eb55cb2785cd14403daf18419db50dd0148ce', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: '1dd589ffe6e3be0728b4272a6cee41aeba1883c1', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: '246f0e080f6daca9684bf90cba53753a23411d25', class: "ir-ghs-selection-bucket__title" }, t('Lcz_ToBeAdded', { fallback: 'To be added' })), h("wa-badge", { key: '1137946a164a52f5d184da8f292157dc7c90f76f', variant: "brand" }, formatCount(this.selectedProperties.length))), h("div", { key: '87a3d8767c38fe1c503793d49d83a6dd6ab511c5', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: '97a0a2c18234bfed7db54ac7002f3a7e1ca2dd39', type: "button", size: "s", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, t('Lcz_GenerateRequest', { fallback: 'Generate request' })))), h("div", { key: 'e18fd26fd853c1691d51d2426c557db07c09d709', class: "ir-ghs-selection-bucket__body" }, h("div", { key: 'ec76589c1f8640a1a26d7bbca6f9d897f633173d', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: '9b23685e8f2beac3571167050bddf1f6c46f157b', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: 'bc72f72fd92481a62218b721773de406994c3e41' }, h("tr", { key: 'd01ec9aeda9c5e22bd9db23ea640e26289390a65', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: '0d1ee1a8b30cc2324cd60e5a1fe73c7249fc0de2', class: "ir-ghs-selection-bucket__header-cell" }, t('Lcz_PropertyName', { fallback: 'Property name' })), h("th", { key: '623657d0c04cb7ddb99550e8eca9a23d92c1bed7', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: '9ae82f03ea30e57e96bb22456262fcd78f81d567', variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeAll.emit(), title: t('Lcz_RemoveAll', { fallback: 'Remove all' }) }, h("wa-icon", { key: '337c33fc01118637cf45c256d53c796adebd2a0f', name: "trash" })))))), h("tbody", { key: '9f1630835366d718b1c2a2f304c2c3f6186c7cdd' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeProperty.emit(p.AC_ID), title: t('Lcz_RemoveFromList', { fallback: 'Remove from list' }) }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: '0177931b49bc158ac25c1ad472934aa081ef26eb' }, h("td", { key: 'e078f45392af4c4cbbee691227b1cdccf4186dc9', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: 'd34b5f361020a933973d17c867155b38c27fba79', class: "ir-ghs-selection-bucket__empty-text" }, t('Lcz_NoPropertiesSelectedYet', { fallback: 'No properties selected yet.' })))))))))));
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
