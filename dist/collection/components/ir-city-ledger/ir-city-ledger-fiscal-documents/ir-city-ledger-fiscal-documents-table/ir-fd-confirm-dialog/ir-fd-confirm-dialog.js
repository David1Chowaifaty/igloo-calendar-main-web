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
        return (h("ir-dialog", { key: 'd72f8c074008c83056e29f814a04a0479d334c87', open: this.open, label: config?.title ?? '', lightDismiss: false, onIrDialogHide: () => {
                this.cancelled.emit();
            }, onIrDialogAfterHide: () => {
                this.voidType = FdTypes.CreditNote;
                this.goodwillAmount = null;
            } }, !showVoidOptions && h("p", { key: 'a793407875a9ea83353c1b0c12c6742c6bec2393', class: "confirm-dialog__message" }, config?.message ?? ''), showVoidOptions && (h("div", { key: '8db59c2ef876f118937359bc265b4c5e49d815eb', class: "void-options" }, h("wa-radio-group", { key: 'aa2f093be1b6edf2547eb37c6582c29d8e729d59', defaultValue: this.voidType, value: this.voidType, onchange: (e) => (this.voidType = e.target.value) }, h("wa-radio", { key: '97a81111c1affd667f17463c88256b77808abe01', value: FdTypes.CreditNote }, h("p", { key: '016cb2c80e84b85541fedb56e01a3997cf0509b9', class: "confirm-dialog__radio-title" }, t('Lcz_CreditNoteToReverseInvoice', { fallback: 'Credit Note to reverse Invoice' }), " ", h("b", { key: '28570ae5e93960a4dc43accf121b8185566eb682' }, this.docNumber)), h("p", { key: '21abc9ac4b38a6b34d0ea7de63b4e4847c2af8a2', class: "confirm-dialog__radio-hint" }, t('Lcz_CreditNoteReverseHint', { fallback: 'Issue a Credit Note to reverse the invoice and unlock all invoiced entries for future invoicing.' }))), h("wa-radio", { key: '0fb4a726206b5cd4dd8d575149a1d0a940548844', value: FdTypes.AdjustmentCredit }, h("p", { key: '8b5d4736e7fdd17d8ff04e61b2cfa3762cf5d73b', class: "confirm-dialog__radio-title" }, t('Lcz_AdjustmentCredit', { fallback: 'Adjustment Credit' })), h("p", { key: '4ab3ba30ee1b7fee77009735695babe5fcc29d96', class: "confirm-dialog__radio-hint" }, t('Lcz_AdjustmentCreditHint', { fallback: 'Add a folio credit adjustment to create a fiscal credit note document related to' }), " ", h("b", { key: '10f5d99b5a910fdeca55fc064f801dda1ef684a5' }, this.docNumber)))), this.voidType === FdTypes.AdjustmentCredit && (h("ir-input", { key: 'e26dbb20fb68d4282b3e00c5580435bde12ad190', style: { marginInlineStart: '1.5rem' }, max: this.amount, min: "0", mask: 'price', value: this.goodwillAmount, defaultValue: this.goodwillAmount, "onText-change": e => (this.goodwillAmount = e.detail) }, h("span", { key: '98bbe0b04ab54e195da5d9389ff840b8ab409d03', slot: "start" }, calendar_data.property.currency.symbol))))), h("div", { key: 'd0320c139a66c7609bd0694619063d309ca6033f', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '43de112f7a5f050f16a48db93f1f9f4ab5fa8d06', size: "m", variant: "neutral", appearance: "filled", onClickHandler: () => this.cancelled.emit(), disabled: this.isConfirming }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: 'b61f1a020a38a82a065ab996923fe7060241d5c6', size: "m", variant: config?.confirmVariant ?? 'neutral', onClickHandler: () => this.confirmed.emit({
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
