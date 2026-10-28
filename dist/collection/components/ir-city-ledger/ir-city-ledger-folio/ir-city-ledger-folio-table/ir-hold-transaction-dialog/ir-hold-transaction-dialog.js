import { Host, h } from "@stencil/core";
import { CityLedgerService } from "../../../../../services/city-ledger/index";
import { t } from "../../../../../services/locale/t";
export class IrHoldTransactionDialog {
    row = null;
    currencySymbol = '$';
    isLoading = false;
    holdToggled;
    dialogRef;
    cityLedgerService = new CityLedgerService();
    async openModal() {
        this.dialogRef.openModal();
    }
    async closeModal() {
        this.dialogRef.closeModal();
    }
    async handleConfirm() {
        if (!this.row)
            return;
        const newIsHold = !this.row._raw.IS_HOLD;
        try {
            this.isLoading = true;
            await this.cityLedgerService.toggleCLTxHold({
                CL_TX_ID: this.row._raw.CL_TX_ID,
                IS_HOLD: newIsHold,
            });
            this.holdToggled.emit({ rowId: this.row._rowId, newIsHold });
            this.dialogRef.closeModal();
        }
        catch (error) {
            console.error('Failed to toggle hold status', error);
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        const isHeld = this.row?.status?.id === 'held';
        return (h(Host, { key: 'a66341c9a7c9624888ce598dbbf5f0a9b8ec180f' }, h("ir-dialog", { key: 'd780c08f2282d20b7a9de4cc889047f8861f2fcd', label: isHeld ? t('Lcz_RevertTransactionTitle', { fallback: 'Revert Transaction' }) : t('Lcz_HoldTransactionTitle', { fallback: 'Hold Transaction' }), ref: el => (this.dialogRef = el) }, h("div", { key: '1dd930f2aa9175c63db360815b6aff254a81fdd3', class: "hold-dialog__body" }, isHeld ? (h("p", null, t('Lcz_RevertToUnbilledConfirmMessage', { fallback: 'Revert this transaction back to Unbilled status? It will re-enter the billing queue.' }))) : (h("p", null, t('Lcz_HoldConfirmMessage', { fallback: 'Place this transaction on Hold? It will be excluded from invoicing until released.' })))), h("div", { key: '45ffd6ba51d6f363025099877106764b2cb0e6c0', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '0027ecb94ef63ad8cd5e34e0d35e1bc4fdc042bb', size: "m", appearance: "filled", variant: "neutral", "data-dialog": "close" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '982e1f6edd6f80e85cb5ae0d83538d309dc581a6', size: "m", loading: this.isLoading, onClickHandler: () => this.handleConfirm(), appearance: "accent", variant: "brand" }, t('Lcz_Confirm', { fallback: 'Confirm' }))))));
    }
    static get is() { return "ir-hold-transaction-dialog"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-hold-transaction-dialog.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-hold-transaction-dialog.css"]
        };
    }
    static get properties() {
        return {
            "row": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "FolioRow | null",
                    "resolved": "FolioRow",
                    "references": {
                        "FolioRow": {
                            "location": "import",
                            "path": "../../types",
                            "id": "src/components/ir-city-ledger/ir-city-ledger-folio/types.ts::FolioRow",
                            "referenceLocation": "FolioRow"
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
                "defaultValue": "null"
            },
            "currencySymbol": {
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
                "attribute": "currency-symbol",
                "defaultValue": "'$'"
            }
        };
    }
    static get states() {
        return {
            "isLoading": {}
        };
    }
    static get events() {
        return [{
                "method": "holdToggled",
                "name": "holdToggled",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ rowId: string; newIsHold: boolean }",
                    "resolved": "{ rowId: string; newIsHold: boolean; }",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "openModal": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "closeModal": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
}
