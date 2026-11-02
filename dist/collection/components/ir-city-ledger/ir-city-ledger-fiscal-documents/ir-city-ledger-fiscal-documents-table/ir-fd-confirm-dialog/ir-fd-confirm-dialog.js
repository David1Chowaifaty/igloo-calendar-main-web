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
        return (h("ir-dialog", { key: '5327c6f73badbc775decfdde47c24e749dd38969', open: this.open, label: config?.title ?? '', lightDismiss: false, onIrDialogHide: () => {
                this.cancelled.emit();
            }, onIrDialogAfterHide: () => {
                this.voidType = FdTypes.CreditNote;
                this.goodwillAmount = null;
            } }, !showVoidOptions && h("p", { key: '64f21b250f67a95c869b01ff8460797591506921', class: "confirm-dialog__message" }, config?.message ?? ''), showVoidOptions && (h("div", { key: '7a73049e3948fa6753932b46094e453e7c83c80f', class: "void-options" }, h("wa-radio-group", { key: 'a23673b0e93b9dab24c3323d51564e3b8f266814', defaultValue: this.voidType, value: this.voidType, onchange: (e) => (this.voidType = e.target.value) }, h("wa-radio", { key: '0101b81735a44a9872c507ab965f338c36553334', value: FdTypes.CreditNote }, h("p", { key: '9b005a25d6d6474ea512075e51ef8d1ce076efe2', class: "confirm-dialog__radio-title" }, t('Lcz_CreditNoteToReverseInvoice', { fallback: 'Credit Note to reverse Invoice' }), " ", h("b", { key: '85ef801891cae16c480704c052866d4e16ad7276' }, this.docNumber)), h("p", { key: '835675dd07477c848aaee43e0a696531be0bce66', class: "confirm-dialog__radio-hint" }, t('Lcz_CreditNoteReverseHint', { fallback: 'Issue a Credit Note to reverse the invoice and unlock all invoiced entries for future invoicing.' }))), h("wa-radio", { key: 'f6a75608370d70ec0181f97250416cb826cf7001', value: FdTypes.AdjustmentCredit }, h("p", { key: '1e294e494339e8ffe5ad302503fcd0df947fba91', class: "confirm-dialog__radio-title" }, t('Lcz_AdjustmentCredit', { fallback: 'Adjustment Credit' })), h("p", { key: '813d80edeac1534d1f59ec8690841653dc8f2348', class: "confirm-dialog__radio-hint" }, t('Lcz_AdjustmentCreditHint', { fallback: 'Add a folio credit adjustment to create a fiscal credit note document related to' }), " ", h("b", { key: '082abc43c26b84c34631c0f72c3f80e321a19557' }, this.docNumber)))), this.voidType === FdTypes.AdjustmentCredit && (h("ir-input", { key: '1a8a783f51a58bb87127cae950cd016302c69e8b', style: { marginInlineStart: '1.5rem' }, max: this.amount, min: "0", mask: 'price', value: this.goodwillAmount, defaultValue: this.goodwillAmount, "onText-change": e => (this.goodwillAmount = e.detail) }, h("span", { key: '92708bfa907004baad30b792b18158c9e9be840b', slot: "start" }, calendar_data.property.currency.symbol))))), h("div", { key: '79b49966cc18bf2ff4abcb99afc333d5c098b70a', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '1487425989ba4e35a16e5056485f0fd22f517aa0', size: "m", variant: "neutral", appearance: "filled", onClickHandler: () => this.cancelled.emit(), disabled: this.isConfirming }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '3dd3ec3d02d5cbd8ea82cad4defcdaf630de13c3', size: "m", variant: config?.confirmVariant ?? 'neutral', onClickHandler: () => this.confirmed.emit({
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
