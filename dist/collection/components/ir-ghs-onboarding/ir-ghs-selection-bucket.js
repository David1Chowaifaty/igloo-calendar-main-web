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
        return (h("wa-card", { key: '84e8e6f492debdb2096e1a32cb5ea6f9b1e33f57', class: "ir-ghs-selection-bucket__container" }, h("div", { key: 'f26cc16148578767a90b7062dd463fbceeccd31e', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: '2d1bcf7ec0d49cd728aaaa068254572cc2a9fc7e', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: 'b96abfca7efa2e8dbd12be8a258cdecc716de7a9', class: "ir-ghs-selection-bucket__title" }, t('Lcz_ToBeAdded', { fallback: 'To be added' })), h("wa-badge", { key: '39665f6a5d00c9c36ee7961942bce872ece32e6e', variant: "brand" }, formatCount(this.selectedProperties.length))), h("div", { key: 'e941b53c0abc11b8cef32a6b55d098755360aaf4', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: '06de211fe3c8a5320600ac83aa63de134e0c72fd', type: "button", size: "s", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, t('Lcz_GenerateRequest', { fallback: 'Generate request' })))), h("div", { key: '132d356f7bd1f99f9184fc734f36d6cb51976788', class: "ir-ghs-selection-bucket__body" }, h("div", { key: '5464210b86561236787450f957e41e8fdcefe85c', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: '3a847679403038438fdd15762e15f85e9f1fe14c', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: '8208daba12fb73a001fd2bdd2bdbdd7fc9add108' }, h("tr", { key: '38d6a726c01216ed008acbc87fe90851cc1d0dae', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: '6808203d5b8551b1a751616c67bc6d785515ae06', class: "ir-ghs-selection-bucket__header-cell" }, t('Lcz_PropertyName', { fallback: 'Property name' })), h("th", { key: 'a46e3fa337c39a417c4d45b6f6d8805448c0127d', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: '7d2af1e7de6cd063cb0603886e68abf5f9cee2cf', variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeAll.emit(), title: t('Lcz_RemoveAll', { fallback: 'Remove all' }) }, h("wa-icon", { key: '98fea1a69e438e3814bed77479f75940c233e5a4', name: "trash" })))))), h("tbody", { key: 'd35f348b98af9047cc152f97c71fff80424f9abc' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeProperty.emit(p.AC_ID), title: t('Lcz_RemoveFromList', { fallback: 'Remove from list' }) }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: '3e9ba87f05d17fd217c4a2cb36dc0bc9cb7745ef' }, h("td", { key: '2ae5bebe67d28ac05e2b141346615140844c9bb4', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: '0b78a09d4c1c21a194a8fa64fd25edbe11ccb668', class: "ir-ghs-selection-bucket__empty-text" }, t('Lcz_NoPropertiesSelectedYet', { fallback: 'No properties selected yet.' })))))))))));
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
