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
        return (h(Host, { key: 'fbe9a85b2d4e01f2be4c382a17b26cb5dd3eeeb3' }, h("ir-accordion", { key: '56867e8247f9dfd3f3e0c1d5e5f08640893f8ac5', class: "ir-revenue-row__accordion" }, h("div", { key: '9b339d99a48c110e8436001963a349a61dd15a63', slot: "trigger", class: "ir-revenue-row__title" }, h("div", { key: 'ad1229dd52cf365076d076ff8f0770f68b5949d5', class: "ir-revenue-row__header-left" }, h("p", { key: '03743e3481abe673787e2d4de4032e84d8b3a2fa', class: "ir-revenue-row__group" }, this.groupName, ' ', h("wa-badge", { key: '862dfd0893c03b59428c84c2bfc911e4c955788d', variant: "brand", "aria-label": t('Lcz_TransactionsCountAriaLabel', { fallback: '%1 transactions', params: [formatCount(this.payments.length)] }) }, formatCount(this.payments.length)))), h("p", { key: 'c03da0c40ef868b17207623de9a64fd0c30521c0', class: "ir-revenue-row__total" }, formatAmount(calendar_data.currency.symbol, total))), h("div", { key: 'a69f2342ffd79c3532819e3e5c91eec4f0cbb25e', class: "ir-revenue-row__details", id: this.contentId }, h("div", { key: '9f55736b1c5bce0e87b4248e17184e40c3726e04', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
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
