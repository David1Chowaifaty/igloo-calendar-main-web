import { h } from "@stencil/core";
export class IrGhsSelectionBucket {
    selectedProperties = [];
    isGenerating = false;
    generateRequest;
    removeAll;
    removeProperty;
    render() {
        return (h("wa-card", { key: '645ae4bdcbf70135d59d120845b920fae5be2ce8', class: "ir-ghs-selection-bucket__container" }, h("div", { key: '1d2ec458c29cbfbb534b51fcd344fa54901d2d9d', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: '6344b2a9a25ba37a27ed7f468bf8006639e698ab', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: '152f4e60a2a0cdfefb4b24e0e1d0825f5fbecb17', class: "ir-ghs-selection-bucket__title" }, "To be added"), h("wa-badge", { key: '194523940176fec6b6d45bdbc19d85b1cf0ad4af', variant: "brand" }, this.selectedProperties.length)), h("div", { key: '5f0b4c8ef848d89994b25358a618effe92016dd7', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: '0abc5818ec701ab141ec3c16d03a90385ef3bd0c', type: "button", size: "s", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, "Generate request"))), h("div", { key: '66c10832361eb33e778443218361a3739be828b6', class: "ir-ghs-selection-bucket__body" }, h("div", { key: 'e253fd169d7880eee32d395e783022c46da9a432', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: '42e5c4e9bf8fc3d398c750def965114f6e785072', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: '285f31f8b76ad4565ed85f9704065e19a2c0fd0c' }, h("tr", { key: '6ef605cf9f5502555a339bf79ab5949c4af2cc65', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: 'cafbfa18feecb3d0e1e69f4bab404a6c1beb1b43', class: "ir-ghs-selection-bucket__header-cell" }, "Property name"), h("th", { key: 'a2def53d87df7a3f1498bf4f30fab21a5db53f2a', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: '031846f6b4d6f3949ff25a5d73a16efecc68626a', variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeAll.emit(), title: "Remove all" }, h("wa-icon", { key: '3c972e06e9c491e2152bff04114230b2b65a5a55', name: "trash" })))))), h("tbody", { key: '03b63bf9aa9a154d12a4d1529453065045afa004' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeProperty.emit(p.AC_ID), title: "Remove from list" }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: 'b04d4aefb5c8ea522361783d7e80109c2228f6ed' }, h("td", { key: '2ce8b190b6eea83e9ae5d058de3652e851b68d41', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: '8a05eb1a68ec16dcfe8ef50a776a193661676adc', class: "ir-ghs-selection-bucket__empty-text" }, "No properties selected yet."))))))))));
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
