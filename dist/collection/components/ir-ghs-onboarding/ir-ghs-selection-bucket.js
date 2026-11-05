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
        return (h("wa-card", { key: 'e51028ca272009199bf5a6594c3b01a66d1112af', class: "ir-ghs-selection-bucket__container" }, h("div", { key: 'f9844a27369ab156c575df25a7f9d7e72129b587', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: '3d5a77c30ec6f836401633f4a88a192fd7e21a30', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: '5bbed5108a0efe30b96252b376fd518c7d1865ad', class: "ir-ghs-selection-bucket__title" }, t('Lcz_ToBeAdded', { fallback: 'To be added' })), h("wa-badge", { key: '68c4a681222acc3b8910b140dac5cdc7a44a3dac', variant: "brand" }, formatCount(this.selectedProperties.length))), h("div", { key: '99b776e5c702de676fa92a412b50c66cbc6e93e0', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: 'fab68d379768b9aef5b2d4281ffeb1df256d7e35', type: "button", size: "s", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, t('Lcz_GenerateRequest', { fallback: 'Generate request' })))), h("div", { key: 'e8450ae1e3802789e4b597332257fc8056a3bb4b', class: "ir-ghs-selection-bucket__body" }, h("div", { key: '9e0e331fadc570ae42c85af19c233d19869f46f7', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: '9eee10cfd3416c6d286ad3e64314ecd52b03b5cb', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: '7ebc5f12a3aa2d7d5353a5f4dae9791f0ce6a4d5' }, h("tr", { key: 'de493b1239b725f5de540adc47fbf547911ff60d', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: 'b059332f09420a41296f0abd21d62ef2e81332e0', class: "ir-ghs-selection-bucket__header-cell" }, t('Lcz_PropertyName', { fallback: 'Property name' })), h("th", { key: 'a4af5b9b5ec5612f26f7ecc3cadbcebe3a4b2728', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: '4543331a2c0a5d02493541c2021986deb2ce889c', variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeAll.emit(), title: t('Lcz_RemoveAll', { fallback: 'Remove all' }) }, h("wa-icon", { key: 'b81112ac6e7706b54a55097fe275eec161ed0a5e', name: "trash" })))))), h("tbody", { key: '7189a30f7f47bc198c21b8327f032153df452c8d' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeProperty.emit(p.AC_ID), title: t('Lcz_RemoveFromList', { fallback: 'Remove from list' }) }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: '5b7a1b2fa7e09d0ed79295d6fa8853e1d01e185b' }, h("td", { key: '54f4bed51f722c67360975220770ccbc780516d0', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: 'f6180888011c5e8b7c20327aed1cda2ffed64e57', class: "ir-ghs-selection-bucket__empty-text" }, t('Lcz_NoPropertiesSelectedYet', { fallback: 'No properties selected yet.' })))))))))));
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
