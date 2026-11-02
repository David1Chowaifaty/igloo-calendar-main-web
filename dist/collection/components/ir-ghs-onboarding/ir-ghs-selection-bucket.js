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
        return (h("wa-card", { key: 'b9d513ac089d2e2e907a44a9b7125b7a059ab4a0', class: "ir-ghs-selection-bucket__container" }, h("div", { key: 'fdacd57b999bfccd2eff0c7b2146bdad62f21f2d', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: '8c1ba5386ceb8458ac6f70ba2383fb98cacd5f9b', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: '920bc418c1362d19f9551d10e8db56c8fc7ed60f', class: "ir-ghs-selection-bucket__title" }, t('Lcz_ToBeAdded', { fallback: 'To be added' })), h("wa-badge", { key: '1e9a2142305ee4caf93e7da508ce085fdad0cb02', variant: "brand" }, formatCount(this.selectedProperties.length))), h("div", { key: '18a4f04833c7cb815f712d9685b6c6d5779b2ba9', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: 'fc4fffdbc11f6a187f8209236e0690889e28e24f', type: "button", size: "s", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, t('Lcz_GenerateRequest', { fallback: 'Generate request' })))), h("div", { key: '425ce0a792909ca4b6a9b31dbb2161741207cdc0', class: "ir-ghs-selection-bucket__body" }, h("div", { key: '56e1348f4c164829e2438ff3a965f5acf8336bc1', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: '09d6aa11a9b72d9009e006ae991eea04b5cd852c', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: '0650b3a76658aa15c065a5f8e0fff88c441056fa' }, h("tr", { key: '48096a9570d8ab6cead3443492516272d7d7f30d', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: 'd8dea14277754662d84947da3daad5ad3b62e729', class: "ir-ghs-selection-bucket__header-cell" }, t('Lcz_PropertyName', { fallback: 'Property name' })), h("th", { key: 'd693db306362969b7ff905c525152f911cb0afa7', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: 'c6b2e5414d72f125436e9c03f1b16cbd7d784af4', variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeAll.emit(), title: t('Lcz_RemoveAll', { fallback: 'Remove all' }) }, h("wa-icon", { key: '09d4ddd5f5bbd3dbecb46e91c94d2d969451ddb6', name: "trash" })))))), h("tbody", { key: 'd23d0072c1c7a9a6f5b5e5e70945702a7bfede53' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeProperty.emit(p.AC_ID), title: t('Lcz_RemoveFromList', { fallback: 'Remove from list' }) }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: 'b5a43157d522dee4a7384b572a7ad0f48df92e4b' }, h("td", { key: '1f0fa385e9a1744aa98088cf649ac0a64227726a', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: 'e0b8d6f2ffe9868bcef0bcb12167a5c30bd298c8', class: "ir-ghs-selection-bucket__empty-text" }, t('Lcz_NoPropertiesSelectedYet', { fallback: 'No properties selected yet.' })))))))))));
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
