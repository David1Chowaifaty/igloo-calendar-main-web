import { Host, h } from "@stencil/core";
import { formatAmount, formatCount } from "../../../../utils/number";
import { t } from "../../../../services/locale/t";
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
        return (h(Host, { key: 'df1c1b6f70ff4c29bf915187baa362662ba44c73' }, h("ir-accordion", { key: '81e393fcddb6f87a21596b2ed9e1184dcc054e49', class: "ir-revenue-row__accordion" }, h("div", { key: '60ef042eee198df8ea81fe9605d4251d535d05b7', slot: "trigger", class: "ir-revenue-row__title" }, h("div", { key: '10a1edcaa3467d0c4ae0eb05908709563e8c177a', class: "ir-revenue-row__header-left" }, h("p", { key: '8584540e6c79636263ce88e65cfd1f95bdcb2f1e', class: "ir-revenue-row__group" }, this.groupName, ' ', h("wa-badge", { key: '091fe71346fc86f8ee8a70e11f5df9f26869ad3a', variant: "brand", "aria-label": t('Lcz_TransactionsCountAriaLabel', { fallback: '%1 transactions', params: [formatCount(this.payments.length)] }) }, formatCount(this.payments.length)))), h("p", { key: 'ef4054941b214852a06be5f3479557595e693a93', class: "ir-revenue-row__total" }, formatAmount(calendar_data.currency.symbol, total))), h("div", { key: '3259ad0dbf6222a2657c3c33ecf4469b3945c831', class: "ir-revenue-row__details", id: this.contentId }, h("div", { key: 'fc5dc146f6aee7a2dae6fa2f329b298032fb59e7', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
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
