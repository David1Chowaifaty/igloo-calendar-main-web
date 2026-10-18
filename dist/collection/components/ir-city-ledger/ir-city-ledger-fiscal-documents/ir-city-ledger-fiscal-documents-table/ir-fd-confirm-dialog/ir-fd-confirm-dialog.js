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
        return (h("ir-dialog", { key: 'da11282afbe0651954911e3e064f18506e7f3131', open: this.open, label: config?.title ?? '', lightDismiss: false, onIrDialogHide: () => {
                this.cancelled.emit();
            }, onIrDialogAfterHide: () => {
                this.voidType = FdTypes.CreditNote;
                this.goodwillAmount = null;
            } }, !showVoidOptions && h("p", { key: 'bd79df8c831323706db3cab396e75d74d7a27f39', class: "confirm-dialog__message" }, config?.message ?? ''), showVoidOptions && (h("div", { key: '1ad39cabee96177a903dbc3e72930821332f0b0d', class: "void-options" }, h("wa-radio-group", { key: 'f549b955b6ab2a230e94356e673ab4b36f41568d', defaultValue: this.voidType, value: this.voidType, onchange: (e) => (this.voidType = e.target.value) }, h("wa-radio", { key: 'c7e58f8a18121605a757ba713521c621023ee7e1', value: FdTypes.CreditNote }, h("p", { key: '95877fdd5d8fae809fdb21ed38e7d68990339cc2', class: "confirm-dialog__radio-title" }, t('Lcz_CreditNoteToReverseInvoice', { fallback: 'Credit Note to reverse Invoice' }), " ", h("b", { key: 'fb9cc912a3f9be73da52167e330e549bfe0914b2' }, this.docNumber)), h("p", { key: '5cea768ee93a20a94c5e0ac785741e00f43af52d', class: "confirm-dialog__radio-hint" }, t('Lcz_CreditNoteReverseHint', { fallback: 'Issue a Credit Note to reverse the invoice and unlock all invoiced entries for future invoicing.' }))), h("wa-radio", { key: '4ccb439d73c4a7baae4a03401304243661240baa', value: FdTypes.AdjustmentCredit }, h("p", { key: '3b12103c7d50c85fbcc5ab4cda3d7d6331a77027', class: "confirm-dialog__radio-title" }, t('Lcz_AdjustmentCredit', { fallback: 'Adjustment Credit' })), h("p", { key: '855ea3506c93dcc7eaadccebff882dc16f404f9b', class: "confirm-dialog__radio-hint" }, t('Lcz_AdjustmentCreditHint', { fallback: 'Add a folio credit adjustment to create a fiscal credit note document related to' }), " ", h("b", { key: 'c3051b0504531b2ba9bd62d70f7a4980f81d96a9' }, this.docNumber)))), this.voidType === FdTypes.AdjustmentCredit && (h("ir-input", { key: '8bc1491d6ecbca2398bc6221c9c396d4f189ae3c', style: { marginInlineStart: '1.5rem' }, max: this.amount, min: "0", mask: 'price', value: this.goodwillAmount, defaultValue: this.goodwillAmount, "onText-change": e => (this.goodwillAmount = e.detail) }, h("span", { key: '0b3124c5b32e492547f44b95eb114194f4b8ee1c', slot: "start" }, calendar_data.property.currency.symbol))))), h("div", { key: 'bd715e6965198314fde48318188d99040acf67f5', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '38abf87eb4017840851eb44264ae12295c899a2d', size: "m", variant: "neutral", appearance: "filled", onClickHandler: () => this.cancelled.emit(), disabled: this.isConfirming }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '6bd6487a6e44e42ed4cb81f0a7f2f10fa3f612a4', size: "m", variant: config?.confirmVariant ?? 'neutral', onClickHandler: () => this.confirmed.emit({
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
