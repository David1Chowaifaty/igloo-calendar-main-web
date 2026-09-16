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
        return (h("wa-card", { key: '1c41d2e22a2ade22e182da742e880fb05665adf9', class: "ir-ghs-selection-bucket__container" }, h("div", { key: 'd0f4b86ec5672dfe40171f4975b2159dc620776f', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: '3bab20832099f39582f616608327fe8c6c72e2af', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: 'ea14e0a5cd1b08d7e59255598999619a822dcab0', class: "ir-ghs-selection-bucket__title" }, t('Lcz_ToBeAdded', { fallback: 'To be added' })), h("wa-badge", { key: 'd69f4712e5692fd632f17d167814b3be5daeeb49', variant: "brand" }, formatCount(this.selectedProperties.length))), h("div", { key: '68911d3945f79279d935a3656ee017b9df6a31c9', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: 'a24960279db255182af1f451b4f6afdff419986f', type: "button", size: "s", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, t('Lcz_GenerateRequest', { fallback: 'Generate request' })))), h("div", { key: 'feb25010f67aa4829deaedfa6f0fc3f105fdf3b4', class: "ir-ghs-selection-bucket__body" }, h("div", { key: 'fffb827074966eb149cd07d42780f84c012b5b7e', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: '4dedc1a40e04cdbe18be1d33555565ff0acb9f74', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: '6b16a1cd0b16920fcf38a665b2fa58b3dc22061f' }, h("tr", { key: '1cd83f91c6511e2820ee936519d1edcdb8d0ecce', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: 'ce183dda05a2609e940dbcf45841682f20fb25f0', class: "ir-ghs-selection-bucket__header-cell" }, "Property name"), h("th", { key: '015575d1a0e0ca2429581f9ed9f394f15575ce07', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: '5c8fdac95193f9e497c49694bfe2f654feebfaf1', variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeAll.emit(), title: t('Lcz_RemoveAll', { fallback: 'Remove all' }) }, h("wa-icon", { key: '93bb1ff815edd48ac9db04d20d5685e170f4fb7c', name: "trash" })))))), h("tbody", { key: 'ccca714904eff1d93c2d5c2a2462940d4183e00b' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeProperty.emit(p.AC_ID), title: t('Lcz_RemoveFromList', { fallback: 'Remove from list' }) }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: '920e6202c782a1ab9f54838c9a21f8d861af4568' }, h("td", { key: 'd9cbb05ae79d92cb786c6516e81cb2ea01fe5914', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: 'be24c005de07ea39e037d18864b9aa3d9b9f56ac', class: "ir-ghs-selection-bucket__empty-text" }, t('Lcz_NoPropertiesSelectedYet', { fallback: 'No properties selected yet.' })))))))))));
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
