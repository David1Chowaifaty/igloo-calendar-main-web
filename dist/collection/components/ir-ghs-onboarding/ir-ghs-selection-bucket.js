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
        return (h("wa-card", { key: '602d9c0d34120f36a85ec71c6a4ba3d447263fbc', class: "ir-ghs-selection-bucket__container" }, h("div", { key: '9743321b50d4966e8001f5f2624f12bb67716b88', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: '5857d825d5490fdb279bac4fb3f0ab0033f645dc', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: '4187ec79a0a7a61589a462a1c48fd7b329c1d76c', class: "ir-ghs-selection-bucket__title" }, t('Lcz_ToBeAdded', { fallback: 'To be added' })), h("wa-badge", { key: '38f71e2ec0be2ac1fead478415e338b72c982c2a', variant: "brand" }, formatCount(this.selectedProperties.length))), h("div", { key: 'ef2afb3968b04555cb38ebd65bf0e02c213a5627', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: '488c1422801e5c2a758061124e2aabcc26699ff7', type: "button", size: "s", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, t('Lcz_GenerateRequest', { fallback: 'Generate request' })))), h("div", { key: '51c6fcff35d6f9a83830f897020ccd8aa3ec035a', class: "ir-ghs-selection-bucket__body" }, h("div", { key: '58ad1ccc75fc408b437780d7b679cef8192b826c', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: '7ff872c2aa1f6ea51a2b60021dcf8b0ff213cb01', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: '85639035532f95238baa048e94eb281e04cbfd56' }, h("tr", { key: '747d083b2d5c0b5a4caa5171f3990237efdc360b', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: 'c96181fd1a758cbb6a501225f751fda954254329', class: "ir-ghs-selection-bucket__header-cell" }, t('Lcz_PropertyName', { fallback: 'Property name' })), h("th", { key: '5d4aa710dca62686267a5dd73d56b7b288d5c987', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: 'f8440d629e20965cb1a1b57519323a3bd3ec2edc', variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeAll.emit(), title: t('Lcz_RemoveAll', { fallback: 'Remove all' }) }, h("wa-icon", { key: '093c177cd2ebcae5c281d3e6e337fb9bd4a6d0c9', name: "trash" })))))), h("tbody", { key: '54c57a710bc6ec32603e07f19cc0f060cbe2a8a8' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeProperty.emit(p.AC_ID), title: t('Lcz_RemoveFromList', { fallback: 'Remove from list' }) }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: '87d8a79c3b2b35ef636c5a81903345ff689b7adf' }, h("td", { key: 'b4234069a11ce1aea9a2071adf920c338a7e1f1f', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: '3a6017faa026fdc89986ea43549529c54cb7bf2f', class: "ir-ghs-selection-bucket__empty-text" }, t('Lcz_NoPropertiesSelectedYet', { fallback: 'No properties selected yet.' })))))))))));
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
