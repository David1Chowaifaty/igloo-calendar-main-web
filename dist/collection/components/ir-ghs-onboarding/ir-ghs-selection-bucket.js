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
        return (h("wa-card", { key: '55a95a6991cb7cca4039319826af5c0a2b09ebc1', class: "ir-ghs-selection-bucket__container" }, h("div", { key: '861f4baf4189782d2b14f9641a053c6655d0143f', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: 'df6bd2002584ecdc7b313eb42bf1db11993470a7', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: '1de4132d159278d964bc6e07acf60a94035a515c', class: "ir-ghs-selection-bucket__title" }, t('Lcz_ToBeAdded', { fallback: 'To be added' })), h("wa-badge", { key: '7847a1b159099d90939c7dc2a341880e1d0d220d', variant: "brand" }, formatCount(this.selectedProperties.length))), h("div", { key: '6b943dfcf58494aff935ffeb97cd8b68e25e8797', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: 'a2dcd1a19b275e6db09f5db81a95021ddad01906', type: "button", size: "s", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, t('Lcz_GenerateRequest', { fallback: 'Generate request' })))), h("div", { key: '9abc1a2db6cef4a77369a0f14bfd11197c40cc54', class: "ir-ghs-selection-bucket__body" }, h("div", { key: '02282575a3836e3393eedd90583db43a49dc12b4', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: '90d400ec6810bbc50722fbcbc6190dc13d2734fb', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: '66082d214f334afb5a74bd9113d2a396cc2c13fa' }, h("tr", { key: '87566120a2373dbde609e9bc218f1290c563ae0a', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: 'bd1d913778263a1cb7cffa595b6be66bc1d3b9dd', class: "ir-ghs-selection-bucket__header-cell" }, t('Lcz_PropertyName', { fallback: 'Property name' })), h("th", { key: '281c00b2b14117c0e0eabf7deca4e907c8c4fce1', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: '209d702a407dcb6be7f93dff0e9a8482e8903b6b', variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeAll.emit(), title: t('Lcz_RemoveAll', { fallback: 'Remove all' }) }, h("wa-icon", { key: '8be89369856bbc34c2c79e3885ce98fe169ccceb', name: "trash" })))))), h("tbody", { key: 'edf874b0b1d51c437bba3dd8b5fd957c643ab134' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeProperty.emit(p.AC_ID), title: t('Lcz_RemoveFromList', { fallback: 'Remove from list' }) }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: '06dd21ba0653fab018c6a6e356e51ffce70e44a3' }, h("td", { key: '2be386b6b3dfb477e885b0e8501a810408fcb4f3', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: '8331291b6ff9ecb225bcc6a38f3588a026e01a44', class: "ir-ghs-selection-bucket__empty-text" }, t('Lcz_NoPropertiesSelectedYet', { fallback: 'No properties selected yet.' })))))))))));
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
