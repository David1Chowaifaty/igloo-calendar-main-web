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
        return (h("wa-card", { key: '6a4ccfcf2dd5349d9356b7878ca072cb3ddb809c', class: "ir-ghs-selection-bucket__container" }, h("div", { key: '4866050c74ad2f94bb5b00f3a6ec875c2565b673', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: 'f98702f16a3445b13c6d9a28412e57133d68acb1', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: '10c273e406fc5222277dd3d3ed6174c1b4baef8a', class: "ir-ghs-selection-bucket__title" }, t('Lcz_ToBeAdded', { fallback: 'To be added' })), h("wa-badge", { key: 'b3c4947fdb1037f03eafb3d4569223360cdb0133', variant: "brand" }, formatCount(this.selectedProperties.length))), h("div", { key: '19f1427ef01bddd47264781e7b9366750e2e7b93', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: '7ec3e3da0bed0c401e363dd4793d4f549168adb9', type: "button", size: "s", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, t('Lcz_GenerateRequest', { fallback: 'Generate request' })))), h("div", { key: '2070b94505178e561503d19fe93bad1c380f760c', class: "ir-ghs-selection-bucket__body" }, h("div", { key: '1acb5940d9f8eb1bd1d531fa3cfe9411e67f2900', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: 'd113f605b2de24969ca6628add9ae947b2646a71', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: '12a412bfd28b85b7610518290ba9a2a58af8d3b4' }, h("tr", { key: 'a0fee783453489511ab8b410fe46c56295c4df5b', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: 'f31e3783b0f9c2c6c28be536586ec884edbfa35c', class: "ir-ghs-selection-bucket__header-cell" }, t('Lcz_PropertyName', { fallback: 'Property name' })), h("th", { key: 'a64d142c41c9b91a3004a8965692b1b253c59029', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: 'dd097f5c32c3ee7742f70eb86160c5fbc8398a4e', variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeAll.emit(), title: t('Lcz_RemoveAll', { fallback: 'Remove all' }) }, h("wa-icon", { key: 'fb975db8665e6830f8f7d7ba85e65b905fa91cce', name: "trash" })))))), h("tbody", { key: 'd12a6d91ec0a1845321f95157f2685ff73e58e49' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeProperty.emit(p.AC_ID), title: t('Lcz_RemoveFromList', { fallback: 'Remove from list' }) }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: 'd174ce8ceae745b5951b9789aa973952eacf87fe' }, h("td", { key: 'cac4ee151d1efe22444329b9976fb64a7282afa4', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: 'b53fdcda10be79ced191e0dc1917a664bfdaa51f', class: "ir-ghs-selection-bucket__empty-text" }, t('Lcz_NoPropertiesSelectedYet', { fallback: 'No properties selected yet.' })))))))))));
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
