import { FdTypes } from "../../../../../types/enums";
import { h } from "@stencil/core";
const CONFIGS = {
    'void': (doc, fdType) => ({
        title: 'Void Document',
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
    fdType;
    confirmed;
    cancelled;
    render() {
        const config = this.action ? CONFIGS[this.action]?.(this.docNumber, this.fdType) : null;
        return (h("ir-dialog", { key: '921a48b0c3ae484a3f02ed2c384cc3995c3e4a63', open: this.open, label: config?.title ?? '', lightDismiss: false, onIrDialogHide: () => this.cancelled.emit() }, h("p", { key: '451955a49c6cb1893199d97680dd2859898246d1', class: "confirm-dialog__message" }, config?.message ?? ''), h("div", { key: '5c6aa93aa4c243ba7b594a1ca8e4492e7697ad86', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '8650ce4b72b43953e95222eea00bd9f6ac1490e9', size: "medium", variant: "neutral", appearance: "filled", onClickHandler: () => this.cancelled.emit(), disabled: this.isConfirming }, "Cancel"), h("ir-custom-button", { key: '85a4f398346631fa5803a32a72f7ee89874571e2', size: "medium", variant: config?.confirmVariant ?? 'neutral', onClickHandler: () => this.confirmed.emit(), loading: this.isConfirming }, config?.confirmLabel ?? 'Confirm'))));
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
                    "original": "void",
                    "resolved": "void",
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
