import { Host, h } from "@stencil/core";
const FD_VARIANT_MAP = {
    PAID: 'success',
    ISSUED: 'brand',
    SENT: 'brand',
    DRAFT: 'neutral',
    PARTIAL: 'warning',
    VOID: 'danger',
};
function isFolioRow(tx) {
    return 'status' in tx && tx.status != null && typeof tx.status === 'object';
}
function resolveStatus(tx) {
    if (isFolioRow(tx)) {
        return {
            label: tx.status.label,
            variant: tx.status.variant,
            showLock: tx.status.id === 'billed',
        };
    }
    return {
        label: tx.FD_STATUS_NAME ?? tx.FD_STATUS_CODE ?? '',
        variant: FD_VARIANT_MAP[tx.FD_STATUS_CODE?.toUpperCase() ?? ''] ?? 'neutral',
        showLock: false,
    };
}
export class IrClStatusTag {
    transaction;
    size = 'extra-small';
    render() {
        if (!this.transaction)
            return null;
        const { label, variant, showLock } = resolveStatus(this.transaction);
        return (h(Host, null, h("wa-tag", { size: 's', className: `${this.size === 'default' ? '' : 'cl-status-tag__xs'}`, variant: variant }, label, showLock && h("wa-icon", { name: "lock" }))));
    }
    static get is() { return "ir-cl-status-tag"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-cl-status-tag.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-cl-status-tag.css"]
        };
    }
    static get properties() {
        return {
            "transaction": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "FolioRow | FiscalDocument",
                    "resolved": "FolioRow | { FROM_DATE?: string; TO_DATE?: string; BOOK_NBR?: string; AGENCY_ID?: number; CURRENCY_ID?: number; AGENCY_NAME?: string; CREDIT?: number; CREDIT_DISPLAY?: string; CURRENCY_CODE?: string; DEBIT?: number; DEBIT_DISPLAY?: string; DOC_NUMBER?: string; EXTERNAL_REF?: string; FD_ID?: number; FD_STATUS_CODE?: string; FD_STATUS_NAME?: string; FD_TYPE_CODE?: string; FD_TYPE_NAME?: string; ISSUE_DATE?: string; ISSUE_DATE_DISPLAY?: string; IS_PRINTED?: boolean; NET_AMOUNT?: number; NET_AMOUNT_DISPLAY?: string; TAX_AMOUNT?: number; TAX_AMOUNT_DISPLAY?: string; TOTAL_AMOUNT?: number; BALANCE_BEFORE_TX?: number; BALANCE_AFTER_TX?: number; }",
                    "references": {
                        "FolioRow": {
                            "location": "import",
                            "path": "../ir-city-ledger-folio/types",
                            "id": "src/components/ir-city-ledger/ir-city-ledger-folio/types.ts::FolioRow",
                            "referenceLocation": "FolioRow"
                        },
                        "FiscalDocument": {
                            "location": "import",
                            "path": "@/services/city-ledger",
                            "id": "src/services/city-ledger/index.ts::FiscalDocument",
                            "referenceLocation": "FiscalDocument"
                        }
                    }
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'default' | 'extra-small'",
                    "resolved": "\"default\" | \"extra-small\"",
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
                "attribute": "size",
                "defaultValue": "'extra-small'"
            }
        };
    }
}
