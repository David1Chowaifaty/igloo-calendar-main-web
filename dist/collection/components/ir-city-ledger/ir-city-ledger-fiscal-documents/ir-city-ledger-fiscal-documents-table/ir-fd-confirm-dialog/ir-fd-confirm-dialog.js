import calendar_data from "../../../../../stores/calendar-data";
import { FdTypes } from "../../../../../types/enums";
import { h } from "@stencil/core";
import { t } from "../../../../../services/locale/t";
const CONFIGS = {
    'void': (doc, fdType) => ({
        title: fdType === FdTypes.Invoice ? t('Lcz_DocumentTypeCreditNote', { fallback: 'Credit Note' }) : t('Lcz_VoidDocumentTitle', { fallback: 'Void Document' }),
        message: t('Lcz_ConfirmVoidDocumentMessage', {
            fallback: 'Are you sure you want to void %1? This will issue a credit %2 and cannot be undone.',
            params: [doc, fdType === FdTypes.Invoice ? t('Lcz_NoteLowercase', { fallback: 'note' }) : t('Lcz_ReceiptLowercase', { fallback: 'receipt' })],
        }),
        confirmLabel: t('Lcz_Confirm', { fallback: 'Confirm' }),
        confirmVariant: 'danger',
    }),
    'delete-draft': doc => ({
        title: t('Lcz_DeleteDraftTitle', { fallback: 'Delete Draft' }),
        message: t('Lcz_ConfirmDeleteDraftMessage', { fallback: 'Are you sure you want to permanently delete draft %1? This action cannot be undone.', params: [doc] }),
        confirmLabel: t('Lcz_Delete', { fallback: 'Delete' }),
        confirmVariant: 'danger',
    }),
    'convert-to-invoice': doc => ({
        title: t('Lcz_ConvertToInvoice', { fallback: 'Convert to Invoice' }),
        message: t('Lcz_ConfirmConvertToInvoiceMessage', { fallback: 'Are you sure you want to convert %1 to an invoice? This action cannot be undone.', params: [doc] }),
        confirmLabel: t('Lcz_Convert', { fallback: 'Convert' }),
        confirmVariant: 'brand',
    }),
};
export class IrFdConfirmDialog {
    open = false;
    action = null;
    docNumber = t('Lcz_ThisDocumentFallback', { fallback: 'this document' });
    isConfirming = false;
    amount;
    fdType;
    voidType = FdTypes.CreditNote;
    goodwillAmount = '';
    confirmed;
    cancelled;
    render() {
        const config = this.action ? CONFIGS[this.action]?.(this.docNumber, this.fdType) : null;
        const showVoidOptions = this.action === 'void' && this.fdType !== FdTypes.Receipt;
        return (h("ir-dialog", { key: '97db860cf0e0a6463d284141ce33c2ca58d66f05', open: this.open, label: config?.title ?? '', lightDismiss: false, onIrDialogHide: () => {
                this.cancelled.emit();
            }, onIrDialogAfterHide: () => {
                this.voidType = FdTypes.CreditNote;
                this.goodwillAmount = null;
            } }, !showVoidOptions && h("p", { key: 'cc79c403cd56e08a2ec96fccfb85365c22cee0ef', class: "confirm-dialog__message" }, config?.message ?? ''), showVoidOptions && (h("div", { key: 'ffa6cacac5a452b15c47e396d4e6a6f129455b56', class: "void-options" }, h("wa-radio-group", { key: 'c2d02197fb45227dfa78c1cf5555e54bfd28a19a', defaultValue: this.voidType, value: this.voidType, onchange: (e) => (this.voidType = e.target.value) }, h("wa-radio", { key: '9611524127274c2d79383f6fdbd1e838f12da107', value: FdTypes.CreditNote }, h("p", { key: '27f86c307f5424bc6fc3849d72b8b644dabf417b', class: "confirm-dialog__radio-title" }, t('Lcz_CreditNoteToReverseInvoice', { fallback: 'Credit Note to reverse Invoice' }), " ", h("b", { key: '735e059d1f13c560762cf64218a9c4f2d1750592' }, this.docNumber)), h("p", { key: '8a32f909aaf371ae1bceb7ad1a1a82ca1d787302', class: "confirm-dialog__radio-hint" }, t('Lcz_CreditNoteReverseHint', { fallback: 'Issue a Credit Note to reverse the invoice and unlock all invoiced entries for future invoicing.' }))), h("wa-radio", { key: '346e3e4273d4b36bf9c6f258b89e82d510bd48c0', value: FdTypes.AdjustmentCredit }, h("p", { key: '58d15893beb4b5f0e7748ecaa38f0fdfd6ad9432', class: "confirm-dialog__radio-title" }, t('Lcz_AdjustmentCredit', { fallback: 'Adjustment Credit' })), h("p", { key: 'b31a6f20c224a06be73c9ed990df73d9ed513401', class: "confirm-dialog__radio-hint" }, t('Lcz_AdjustmentCreditHint', { fallback: 'Add a folio credit adjustment to create a fiscal credit note document related to' }), " ", h("b", { key: 'f990eeaed588c28d13f4e2dc31492cc67f20d170' }, this.docNumber)))), this.voidType === FdTypes.AdjustmentCredit && (h("ir-input", { key: '0518195839fbcb270cd31828bb7fd3ab88924500', style: { marginInlineStart: '1.5rem' }, max: this.amount, min: "0", mask: 'price', value: this.goodwillAmount, defaultValue: this.goodwillAmount, "onText-change": e => (this.goodwillAmount = e.detail) }, h("span", { key: '91465ff632cd2b7753855080c8ccbd61fb5cfdb4', slot: "start" }, calendar_data.property.currency.symbol))))), h("div", { key: 'f7197563caf256ed012187c9d153199a170fa076', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '03badb7a30b6c51aaf9093886f6c158904b4c516', size: "m", variant: "neutral", appearance: "filled", onClickHandler: () => this.cancelled.emit(), disabled: this.isConfirming }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: 'f85c0f206e65436cacac623bade8696349c219de', size: "m", variant: config?.confirmVariant ?? 'neutral', onClickHandler: () => this.confirmed.emit({
                amount: Number(this.goodwillAmount),
                voidType: this.voidType,
            }), loading: this.isConfirming }, config?.confirmLabel ?? t('Lcz_Confirm', { fallback: 'Confirm' })))));
    }
    static get is() { return "ir-fd-confirm-dialog"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-fd-confirm-dialog.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-fd-confirm-dialog.css"]
        };
    }
    static get properties() {
        return {
            "open": {
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
                "attribute": "open",
                "defaultValue": "false"
            },
            "action": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "FdConfirmAction | null",
                    "resolved": "\"convert-to-invoice\" | \"delete-draft\" | \"void\"",
                    "references": {
                        "FdConfirmAction": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ir-city-ledger/ir-city-ledger-fiscal-documents/ir-city-ledger-fiscal-documents-table/ir-fd-confirm-dialog/ir-fd-confirm-dialog.tsx",
                            "id": "src/components/ir-city-ledger/ir-city-ledger-fiscal-documents/ir-city-ledger-fiscal-documents-table/ir-fd-confirm-dialog/ir-fd-confirm-dialog.tsx::FdConfirmAction"
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
                "reflect": false,
                "attribute": "action",
                "defaultValue": "null"
            },
            "docNumber": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                "attribute": "doc-number",
                "defaultValue": "t('Lcz_ThisDocumentFallback', { fallback: 'this document' })"
            },
            "isConfirming": {
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
                "attribute": "is-confirming",
                "defaultValue": "false"
            },
            "amount": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "attribute": "amount"
            },
            "fdType": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                "attribute": "fd-type"
            }
        };
    }
    static get states() {
        return {
            "voidType": {},
            "goodwillAmount": {}
        };
    }
    static get events() {
        return [{
                "method": "confirmed",
                "name": "confirmed",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{\n    amount: number | null;\n    voidType: FdConfirmationVoidType;\n  }",
                    "resolved": "{ amount: number; voidType: FdConfirmationVoidType; }",
                    "references": {
                        "FdConfirmationVoidType": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ir-city-ledger/ir-city-ledger-fiscal-documents/ir-city-ledger-fiscal-documents-table/ir-fd-confirm-dialog/ir-fd-confirm-dialog.tsx",
                            "id": "src/components/ir-city-ledger/ir-city-ledger-fiscal-documents/ir-city-ledger-fiscal-documents-table/ir-fd-confirm-dialog/ir-fd-confirm-dialog.tsx::FdConfirmationVoidType"
                        }
                    }
                }
            }, {
                "method": "cancelled",
                "name": "cancelled",
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
            }];
    }
}
