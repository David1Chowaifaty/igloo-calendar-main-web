import calendar_data from "../../../../../stores/calendar-data";
import { FdTypes } from "../../../../../types/enums";
import { h } from "@stencil/core";
const CONFIGS = {
    'void': (doc, fdType) => ({
        title: fdType === FdTypes.Invoice ? 'Credit Note' : 'Void Document',
        message: `Are you sure you want to void ${doc}? This will issue a credit ${fdType === FdTypes.Invoice ? 'note' : 'receipt'} and cannot be undone.`,
        confirmLabel: 'Confirm',
        confirmVariant: 'danger',
    }),
    'delete-draft': doc => ({
        title: 'Delete Draft',
        message: `Are you sure you want to permanently delete draft ${doc}? This action cannot be undone.`,
        confirmLabel: 'Delete',
        confirmVariant: 'danger',
    }),
    'convert-to-invoice': doc => ({
        title: 'Convert to Invoice',
        message: `Are you sure you want to convert ${doc} to an invoice? This action cannot be undone.`,
        confirmLabel: 'Convert',
        confirmVariant: 'brand',
    }),
};
export class IrFdConfirmDialog {
    open = false;
    action = null;
    docNumber = 'this document';
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
        return (h("ir-dialog", { key: '6f3d5f8bde6b2de35821849783f49b6796ee20ea', open: this.open, label: config?.title ?? '', lightDismiss: false, onIrDialogHide: () => {
                this.cancelled.emit();
            }, onIrDialogAfterHide: () => {
                this.voidType = FdTypes.CreditNote;
                this.goodwillAmount = null;
            } }, !showVoidOptions && h("p", { key: '4adea64266802e774614b7b6a1d246086e9b843a', class: "confirm-dialog__message" }, config?.message ?? ''), showVoidOptions && (h("div", { key: '1ec4de1e94d660d8aee94dba1fe4a94804ba5eb2', class: "void-options" }, h("wa-radio-group", { key: '1af01ee4f944ca54cbd104cd702931636d84a96e', defaultValue: this.voidType, value: this.voidType, onchange: (e) => (this.voidType = e.target.value) }, h("wa-radio", { key: '278552c81b2c9b3766b5fcef72c387651ffeda3c', value: FdTypes.CreditNote }, h("p", { key: 'abef3e962de8efc90dffe0a663ebc95b319edf4d', class: "confirm-dialog__radio-title" }, "Credit Note to reverse Invoice ", h("b", { key: '0991b95e69774484f5e26b4840b77e1ed7b96d68' }, this.docNumber)), h("p", { key: '777ad4f513c0e3e40408b5870bdd0b17ee1009d7', class: "confirm-dialog__radio-hint" }, "Issue a Credit Note to reverse the invoice and unlock all invoiced entries for future invoicing.")), h("wa-radio", { key: '6dad8bc7fd8c7d48a280d1a95150fc502c59dde3', value: FdTypes.AdjustmentCredit }, h("p", { key: 'cbee00eb005fc88eea08d0c01dbdef27eef69262', class: "confirm-dialog__radio-title" }, "Adjustment Credit"), h("p", { key: '4bc6c05ae609965aac2fa55ea927f20e98e8b55f', class: "confirm-dialog__radio-hint" }, "Add a folio credit adjustment to create a fiscal credit note document related to ", h("b", { key: 'a6f920f182c61e6bf4c0ba6cb9a37023646a6fda' }, this.docNumber)))), this.voidType === FdTypes.AdjustmentCredit && (h("ir-input", { key: 'aeaa452edc37a3317a956ca89de8ac88f3f97dac', style: { marginLeft: '1.5rem' }, max: this.amount, min: "0", mask: 'price', value: this.goodwillAmount, defaultValue: this.goodwillAmount, "onText-change": e => (this.goodwillAmount = e.detail) }, h("span", { key: 'f50fb8ea1f034f7e19f425c238dfb5a1caaf2e2d', slot: "start" }, calendar_data.property.currency.symbol))))), h("div", { key: 'cb1f898c4b488e6709a4c150f40d5146dfcbe773', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '517bfcb0a074702b9b36abdd427c16d43b126909', size: "m", variant: "neutral", appearance: "filled", onClickHandler: () => this.cancelled.emit(), disabled: this.isConfirming }, "Cancel"), h("ir-custom-button", { key: '784d7be9a5d9fa26192cf5a83af06b105b243782', size: "m", variant: config?.confirmVariant ?? 'neutral', onClickHandler: () => this.confirmed.emit({
                amount: Number(this.goodwillAmount),
                voidType: this.voidType,
            }), loading: this.isConfirming }, config?.confirmLabel ?? 'Confirm'))));
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
                "defaultValue": "'this document'"
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
