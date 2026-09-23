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
            }, disabled: this.selectedProperties.length === 0 }, t('Lcz_GenerateRequest', { fallback: 'Generate request' })))), h("div", { key: '31ab75936ec12c79832fe5c87731ab9d0462d2ad', class: "ir-ghs-selection-bucket__body" }, h("div", { key: 'a29494ec0b4cfd2d6d4c10ea9996167a68d4def9', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: 'e6a73628d5d7bff98a232fd0dbee49dab4108c95', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: 'c40c93015b3e160dc8733732e0ffa49055fe63a4' }, h("tr", { key: '9290fe814d16c2473482525772d2b2255001d41f', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: '79d7a4a75d121ef3810e7f780843b372fb68050f', class: "ir-ghs-selection-bucket__header-cell" }, "Property name"), h("th", { key: 'd2429a0e6308a237cb0f895a3d24376ca7a556dc', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: 'ba1a78b2e21d932b4971e8ed9528a4edef7fa824', variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeAll.emit(), title: t('Lcz_RemoveAll', { fallback: 'Remove all' }) }, h("wa-icon", { key: '426a873a74fd2c8bbf8223e96954001d7a273595', name: "trash" })))))), h("tbody", { key: '80eaffc57581111893916881003792410db6aac1' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeProperty.emit(p.AC_ID), title: t('Lcz_RemoveFromList', { fallback: 'Remove from list' }) }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: 'cad6b2af5b91a329fb93831f989f9e897c1963d5' }, h("td", { key: '6cdec98fba2f5bd6e0bb2d665650853329ff7402', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: 'a8d4b650ef7166a62742a3a131f256fbd9ef4b3e', class: "ir-ghs-selection-bucket__empty-text" }, t('Lcz_NoPropertiesSelectedYet', { fallback: 'No properties selected yet.' })))))))))));
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
