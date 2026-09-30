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
        return (h("wa-card", { key: '27073577ad2aa74e60e0fedab73a08c4f6370543', class: "ir-ghs-selection-bucket__container" }, h("div", { key: '713df08ba343fef7f0e612dd2c96aa1ed7de3848', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: 'a83a7b34bbd586321e950ece699e2f579a3cde31', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: '24edea198a680e2aff727fe3b30f90baa2ff7b6f', class: "ir-ghs-selection-bucket__title" }, t('Lcz_ToBeAdded', { fallback: 'To be added' })), h("wa-badge", { key: 'a1e3658a0c693333ba47097126b071dc70ba50d1', variant: "brand" }, formatCount(this.selectedProperties.length))), h("div", { key: 'e36a0df07e46c94be9112bbbf3a146fd2a231128', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: '12c582acbc92ea265497f12b4eb9c22273fef4cc', type: "button", size: "s", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, t('Lcz_GenerateRequest', { fallback: 'Generate request' })))), h("div", { key: '31ab75936ec12c79832fe5c87731ab9d0462d2ad', class: "ir-ghs-selection-bucket__body" }, h("div", { key: 'a29494ec0b4cfd2d6d4c10ea9996167a68d4def9', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: 'e6a73628d5d7bff98a232fd0dbee49dab4108c95', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: 'c40c93015b3e160dc8733732e0ffa49055fe63a4' }, h("tr", { key: '9290fe814d16c2473482525772d2b2255001d41f', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: '79d7a4a75d121ef3810e7f780843b372fb68050f', class: "ir-ghs-selection-bucket__header-cell" }, t('Lcz_PropertyName', { fallback: 'Property name' })), h("th", { key: 'a78642fceb6fd787db7b14ebede51c4b57935d9b', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: '58dd5c0f91f5ec8740375dd6336c5a092ccdd91f', variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeAll.emit(), title: t('Lcz_RemoveAll', { fallback: 'Remove all' }) }, h("wa-icon", { key: '36b8e8e4037754b95a49bc522548f8ba64a2ed14', name: "trash" })))))), h("tbody", { key: '859af94afb6ba9cbc07219e6836cd2c5f8262efa' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeProperty.emit(p.AC_ID), title: t('Lcz_RemoveFromList', { fallback: 'Remove from list' }) }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: '538441d366778691158cd1848ea9cbb737a7a2ad' }, h("td", { key: '2f4ceb837a9a2d62841be711c600ce594db501c4', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: '8e011b3db89aeebb1b94146d64c41688aa48c9cd', class: "ir-ghs-selection-bucket__empty-text" }, t('Lcz_NoPropertiesSelectedYet', { fallback: 'No properties selected yet.' })))))))))));
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
                    "resolved": "{ NAME?: string; AC_ID?: number; aname?: string; level2?: string; COUNTRY_ID?: number; }[]",
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
