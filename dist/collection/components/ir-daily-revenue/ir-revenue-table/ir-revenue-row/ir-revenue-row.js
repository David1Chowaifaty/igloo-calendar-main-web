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
        return (h(Host, { key: '614664d34e0b1569a62e0f7683f4259677437039' }, h("ir-accordion", { key: 'be431d0995570d53f87132f77a657a0095ae399b', class: "ir-revenue-row__accordion" }, h("div", { key: '37df77d74e7f2ccf0e4603bab6d0abb93b3e9ce1', slot: "trigger", class: "ir-revenue-row__title" }, h("div", { key: 'ede927f068b36a050f9ffaa900c46d140025fa03', class: "ir-revenue-row__header-left" }, h("p", { key: '036006711806ccfb58aa55e72bfcd82bb7da5b97', class: "ir-revenue-row__group" }, this.groupName, ' ', h("wa-badge", { key: '48b38aca4101dbb0b061a5b7f256ff73662b9cbb', variant: "brand", "aria-label": t('Lcz_TransactionsCountAriaLabel', { fallback: '%1 transactions', params: [formatCount(this.payments.length)] }) }, formatCount(this.payments.length)))), h("p", { key: '1edafcb30bb1e333a73119c9c6ae675f62d69652', class: "ir-revenue-row__total" }, formatAmount(calendar_data.currency.symbol, total))), h("div", { key: '870235d1bd03b889b540d7463bed088560343498', class: "ir-revenue-row__details", id: this.contentId }, h("div", { key: '3af4c4e065ae6f0a540cdc9328b5fafd4edca301', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
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
