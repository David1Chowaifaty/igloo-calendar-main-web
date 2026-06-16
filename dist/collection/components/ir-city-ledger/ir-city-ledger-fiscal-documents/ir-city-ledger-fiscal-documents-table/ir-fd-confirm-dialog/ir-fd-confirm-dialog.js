import calendar_data from "../../../../../stores/calendar-data";
import { FdTypes } from "../../../../../types/enums";
import { h } from "@stencil/core";
const CONFIGS = {
    'void': (doc, fdType) => ({
        title: fdType === FdTypes.Invoice ? 'Credit Note' : 'Void Document',
        message: `Are you sure you want to void ${doc}? This will issue a credit ${fdType === FdTypes.Invoice ? 'note' : 'receipt'} and cannot be undone.`,
        confirmLabel: 'Void',
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
    voidType = 'credit-note';
    goodwillAmount = '';
    confirmed;
    cancelled;
    render() {
        const config = this.action ? CONFIGS[this.action]?.(this.docNumber, this.fdType) : null;
        const showVoidOptions = this.action === 'void' && this.fdType !== FdTypes.Receipt;
        return (h("ir-dialog", { key: '032522a9700e80c9967cd3510d015d7d46b2c1e4', open: this.open, label: config?.title ?? '', lightDismiss: false, onIrDialogHide: () => {
                this.cancelled.emit();
            }, onIrDialogAfterHide: () => {
                this.voidType = 'credit-note';
                this.goodwillAmount = null;
            } }, h("p", { key: '45f1ce167a8d14e033c754cc4d42468871ee3c63', class: "confirm-dialog__message" }, config?.message ?? ''), showVoidOptions && (h("div", { key: '6d286f6a73233ed2a7fd016c385cd76b8f468d19', class: "void-options" }, h("wa-radio-group", { key: '7d046955381e1037b66b56ac0aca3856fc721630', defaultValue: this.voidType, value: this.voidType, onchange: (e) => (this.voidType = e.target.value) }, h("wa-radio", { key: 'c257bb35af7b9aa5ce167c00bfb2d89d4e9fa786', value: "credit-note" }, "Credit Note"), h("wa-radio", { key: 'a704c900790dad1856209572047f5424e827d34c', value: "goodwill" }, "Goodwill Credit")), this.voidType === 'goodwill' && (h("ir-input", { key: '899b9797e79fc6fd078aa35b517a8c750fc223d4', max: this.amount, min: "0", mask: 'price', value: this.goodwillAmount, onInput: (e) => (this.goodwillAmount = e.target.value) }, h("span", { key: '07f4339c774c2803f4b3547347eb0420ad2106ca', slot: "start" }, calendar_data.property.currency.symbol))))), h("div", { key: '5a9a6f383da39006a5b93322414239a403470c0b', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '6b59abdd0f0b8ea1dd44e0b821250c4b98026c31', size: "medium", variant: "neutral", appearance: "filled", onClickHandler: () => this.cancelled.emit(), disabled: this.isConfirming }, "Cancel"), h("ir-custom-button", { key: 'ffbf422dc23c48030f7ecfcf100a28559785f345', size: "medium", variant: config?.confirmVariant ?? 'neutral', onClickHandler: () => this.confirmed.emit({
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
                "attribute": "open",
                "reflect": false,
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
                "attribute": "action",
                "reflect": false,
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
                "attribute": "doc-number",
                "reflect": false,
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
                "attribute": "is-confirming",
                "reflect": false,
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
                "attribute": "amount",
                "reflect": false
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
                "attribute": "fd-type",
                "reflect": false
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
                    "original": "{\n    amount: number | null;\n    voidType: 'credit-note' | 'goodwill';\n  }",
                    "resolved": "{ amount: number; voidType: \"credit-note\" | \"goodwill\"; }",
                    "references": {}
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
//# sourceMappingURL=ir-fd-confirm-dialog.js.map
