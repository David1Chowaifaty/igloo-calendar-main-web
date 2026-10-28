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
        return (h(Host, { key: '0d89f76a457bbaa5c1331ef2a0e49900238abba2' }, h("ir-accordion", { key: '087e6394f5e358eff16e0a439224d318224c1213', class: "ir-revenue-row__accordion" }, h("div", { key: 'ef36c5124e8e7082c5a6126f96423da4c7cc5b05', slot: "trigger", class: "ir-revenue-row__title" }, h("div", { key: '49f79668ebe181a7cacad856ec251a54c508b236', class: "ir-revenue-row__header-left" }, h("p", { key: 'dd91ae3f3c6f32130e64d5d8b7a1b4fc865bca71', class: "ir-revenue-row__group" }, this.groupName, ' ', h("wa-badge", { key: '1fd5c26980e8c446bbe4dc66bbb55e7167f6da77', variant: "brand", "aria-label": t('Lcz_TransactionsCountAriaLabel', { fallback: '%1 transactions', params: [formatCount(this.payments.length)] }) }, formatCount(this.payments.length)))), h("p", { key: '3f91fa8feab63c9ff470ee020a06c2aeb58f8e78', class: "ir-revenue-row__total" }, formatAmount(calendar_data.currency.symbol, total))), h("div", { key: 'c989c4354d5bb2e09efaa6bcaa72f13a9af99601', class: "ir-revenue-row__details", id: this.contentId }, h("div", { key: 'a4a176c9c295dd18a66546763e7fbff935672fd4', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
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
