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
        return (h("wa-card", { key: '210794a7afb8b08485fc9ae7da89218693a7b1f8', class: "ir-ghs-selection-bucket__container" }, h("div", { key: '87c7928db397c043f9a68a5cfadade5f932d3b6f', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: '5f7543162b18414e25e4ca6d831f6a4e402bb0f5', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: '224d516d31244e11cd8044d651c344c2c0b5b0aa', class: "ir-ghs-selection-bucket__title" }, t('Lcz_ToBeAdded', { fallback: 'To be added' })), h("wa-badge", { key: '37a56e7e0c1208f6d9178d44cca12114f7a9c0c6', variant: "brand" }, formatCount(this.selectedProperties.length))), h("div", { key: 'b23416022a59a252a4e2306d1e980b57500e17d5', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: 'fbd60e38e36cc51aa209009898b6bf0783d9acd2', type: "button", size: "s", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, t('Lcz_GenerateRequest', { fallback: 'Generate request' })))), h("div", { key: '1eedb958af307a8219e9b65cf5efcfb2a5ddf18c', class: "ir-ghs-selection-bucket__body" }, h("div", { key: '00970a6e9e2affe6a284ebfb4a12f33b362a5f0d', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: 'c647353850578d133a6ee3528d82457df5433c64', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: '401fe507313207ebe24b687cd06a98621453bd3a' }, h("tr", { key: '34f1f14276a2ea94e493d731c46c6753335bc43e', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: '01388a9ee0d006a5af2d59b207dc069dbda591b0', class: "ir-ghs-selection-bucket__header-cell" }, t('Lcz_PropertyName', { fallback: 'Property name' })), h("th", { key: 'bcfe86229b472468aaf1df5760704d32eedfe54d', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: '5e4a30313b45126b573010607cf7d1c088b3c870', variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeAll.emit(), title: t('Lcz_RemoveAll', { fallback: 'Remove all' }) }, h("wa-icon", { key: 'fe49a1174abda1583702dd73f330a40376516271', name: "trash" })))))), h("tbody", { key: 'c9e79c1ddbaf8c1857e800573a3c017bf00ea678' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeProperty.emit(p.AC_ID), title: t('Lcz_RemoveFromList', { fallback: 'Remove from list' }) }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: 'd3c7a96ef112d5b93d2102a0f3ea8f8349e5ced9' }, h("td", { key: 'e0f1bbea73590625618a67c08cfb6ad8c87d63e2', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: 'ca5add5a895318dfe19a2e3aab0b6c0492345856', class: "ir-ghs-selection-bucket__empty-text" }, t('Lcz_NoPropertiesSelectedYet', { fallback: 'No properties selected yet.' })))))))))));
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
