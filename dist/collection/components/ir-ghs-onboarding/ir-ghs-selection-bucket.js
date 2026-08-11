import { h } from "@stencil/core";
export class IrGhsSelectionBucket {
    selectedProperties = [];
    isGenerating = false;
    generateRequest;
    removeAll;
    removeProperty;
    render() {
        return (h("wa-card", { key: '8bad13e3edc295466096af92ed161a3aa517803c', class: "ir-ghs-selection-bucket__container" }, h("div", { key: 'a96b1fa63d94a183afb1e7fa73a95df35d5546a3', slot: "header", class: "ir-ghs-selection-bucket__header" }, h("div", { key: '83ad34778a21747fa555ef7af85da91783a92e1f', class: "ir-ghs-selection-bucket__header-left" }, h("h3", { key: '97b6746acad096396b80ed7c9c26b838d08b398d', class: "ir-ghs-selection-bucket__title" }, "To be added"), h("wa-badge", { key: '11bc40a31dd613f2579fb0aae2df4f28a95e762d', variant: "brand" }, this.selectedProperties.length)), h("div", { key: '6927ee7b144ddc4334b609ee2792696ca67612b8', class: "ir-ghs-selection-bucket__header-right" }, h("ir-custom-button", { key: 'c634f46728f91514aca828a5543d26dfe3b91ba8', type: "button", size: "s", variant: "brand", appearance: "filled", loading: this.isGenerating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.generateRequest.emit();
            }, disabled: this.selectedProperties.length === 0 }, "Generate request"))), h("div", { key: 'c067c082ede786911e9a3ce5d048d3c8d877dfcb', class: "ir-ghs-selection-bucket__body" }, h("div", { key: '8916b22b2a79c3e86a0bb182af68d0947d00ec61', class: "ir-ghs-selection-bucket__table-wrapper table--container" }, h("table", { key: 'd571a41a1a353249da9069f63459b04ae5073a54', class: "ir-ghs-selection-bucket__table table align-middle mb-0" }, h("thead", { key: 'c6584abd783d767c2a059ae8bbc3c461f670c09a' }, h("tr", { key: 'fed43387a085f55caeec3ac6a0b4bd0cf82b6e56', class: "ir-ghs-selection-bucket__header-row table-header" }, h("th", { key: 'e23fbac078a7149fd05b95449d685f9c20d91c74', class: "ir-ghs-selection-bucket__header-cell" }, "Property name"), h("th", { key: 'a94fb9bdc9e3fc8fec846e030e3786e9bafbfc3d', class: "ir-ghs-selection-bucket__header-cell ir-ghs-selection-bucket__header-cell--end", style: { width: '50px' } }, this.selectedProperties.length > 0 && (h("wa-button", { key: 'e486248112a592360fa72e78e732e143bc944b76', variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeAll.emit(), title: "Remove all" }, h("wa-icon", { key: 'f09410ca96fc6749c708e896b5483249e3dd0490', name: "trash" })))))), h("tbody", { key: 'c5805c95230a39819c0cb53a884c5a5274a6f4d8' }, this.selectedProperties.map(p => (h("tr", { class: "ir-ghs-selection-bucket__row ir-table-row" }, h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--bold", title: p.NAME }, p.NAME, h("div", { class: "ir-ghs-selection-bucket__property-aname", title: p.aname }, p.aname)), h("td", { class: "ir-ghs-selection-bucket__cell ir-ghs-selection-bucket__cell--end" }, h("wa-button", { variant: "danger", appearance: "plain", size: "s", onClick: () => this.removeProperty.emit(p.AC_ID), title: "Remove from list" }, h("wa-icon", { name: "trash" })))))), this.selectedProperties.length === 0 && (h("tr", { key: 'cbcc84794d76ad70a7de5dea5511bd2934495afc' }, h("td", { key: '9d68443551838e882059441ef74d8a7fc4e38f78', colSpan: 2, class: "ir-ghs-selection-bucket__empty-state" }, h("p", { key: '4c3cf06aa1e720418be1388fa288e08801951e12', class: "ir-ghs-selection-bucket__empty-text" }, "No properties selected yet."))))))))));
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
