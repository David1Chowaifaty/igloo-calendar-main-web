import { Host, h } from "@stencil/core";
import { CityLedgerService } from "../../../../../services/city-ledger/index";
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
        const isHeld = this.row?.status?.label === 'Held';
        return (h(Host, { key: '77ac2ff7cd29649c06510c3d074ae9004663e6ad' }, h("ir-dialog", { key: '00a9a859955db57189e28e653d4e420332dc69a4', label: isHeld ? 'Revert Transaction' : 'Hold Transaction', ref: el => (this.dialogRef = el) }, h("div", { key: '02846f526142f1a37ae55b9cfec8ef229b8fe1af', class: "hold-dialog__body" }, isHeld ? (h("p", null, "Revert this transaction back to ", h("strong", null, "Unbilled"), " status? It will re-enter the billing queue.")) : (h("p", null, "Place this transaction on ", h("strong", null, "Hold"), "? It will be excluded from invoicing until released."))), h("div", { key: '4933f2704e4199381fc0b5b902561c96f0d02d08', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '7ea61413eafc1ea2d8f50082118f644473798763', size: "m", appearance: "filled", variant: "neutral", "data-dialog": "close" }, "Cancel"), h("ir-custom-button", { key: 'f16d0fd39bf162389a5413b8af8a85bd458e8a70', size: "m", loading: this.isLoading, onClickHandler: () => this.handleConfirm(), appearance: "accent", variant: "brand" }, "Confirm")))));
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
