import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../utils/utils";
import calendar_data from "../../../../stores/calendar-data";
let accId = 0;
export class IrRevenueRow {
    host;
    /** Array of payments for this method group */
    payments = [];
    /** Group display name (e.g., "Credit Card") */
    groupName;
    contentId = `ir-rr-content-${++accId}`;
    render() {
        const total = this.payments.reduce((prev, curr) => prev + curr.amount, 0);
        return (h(Host, { key: '81bac977874c682b21edd17f70ca01f67f4ecd18' }, h("ir-accordion", { key: '402f89a6d3ddc5358a181428752052013b3e3209', class: "ir-revenue-row__accordion" }, h("div", { key: '819b8a489e1d6d2e06fa8751f7c227c2ac279214', slot: "trigger", class: "ir-revenue-row__title" }, h("div", { key: '1c51ade16e211d0cde6c2eb2c0ca42d1de5f1731', class: "ir-revenue-row__header-left" }, h("p", { key: '3c1669620da2a9ad03f1d1aa95deab37d0db2aa2', class: "ir-revenue-row__group" }, this.groupName, ' ', h("wa-badge", { key: '78f5d75b12ae4be1ec1a5610794f44f95f2f8b8f', variant: "brand", "aria-label": `${this.payments.length} transactions` }, this.payments.length))), h("p", { key: '520535ceff6844b13e58044c240e7103b9230bdc', class: "ir-revenue-row__total" }, formatAmount(calendar_data.currency.symbol, total))), h("div", { key: 'bd69600936afa62274742c019cdd24583837f665', class: "ir-revenue-row__details", id: this.contentId }, h("div", { key: 'c10b4f35beaa7db87e833a088bb9d6292e059c0b', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
    }
    static get is() { return "ir-revenue-row"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-revenue-row.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-revenue-row.css"]
        };
    }
    static get properties() {
        return {
            "payments": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "FolioPayment[]",
                    "resolved": "FolioPayment[]",
                    "references": {
                        "FolioPayment": {
                            "location": "import",
                            "path": "../../types",
                            "id": "src/components/ir-daily-revenue/types.ts::FolioPayment",
                            "referenceLocation": "FolioPayment"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Array of payments for this method group"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "groupName": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Group display name (e.g., \"Credit Card\")"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "group-name"
            }
        };
    }
    static get elementRef() { return "host"; }
}
