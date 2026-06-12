import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { C as CityLedgerService } from './index5.js';
import { d as defineCustomElement$2 } from './ir-custom-button2.js';
import { d as defineCustomElement$1 } from './ir-dialog2.js';

const irHoldTransactionDialogCss = ".sc-ir-hold-transaction-dialog-h{display:contents}.hold-dialog__body.sc-ir-hold-transaction-dialog{display:flex;flex-direction:column;gap:0.875rem;font-size:0.875rem}.hold-dialog__details.sc-ir-hold-transaction-dialog{background:var(--wa-color-neutral-fill-quiet, #f9fafb);border:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);border-radius:0.5rem;overflow:hidden}.hold-dialog__detail-row.sc-ir-hold-transaction-dialog{display:flex;justify-content:space-between;padding:0.5rem 0.75rem;font-size:0.8125rem;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb)}.hold-dialog__detail-row.sc-ir-hold-transaction-dialog:last-child{border-bottom:0}.hold-dialog__detail-row.sc-ir-hold-transaction-dialog span.sc-ir-hold-transaction-dialog:first-child{color:var(--wa-color-text-quiet, #6b7280)}.hold-dialog__detail-row.sc-ir-hold-transaction-dialog span.sc-ir-hold-transaction-dialog:last-child{font-weight:500}";
const IrHoldTransactionDialogStyle0 = irHoldTransactionDialogCss;

const IrHoldTransactionDialog = /*@__PURE__*/ proxyCustomElement(class IrHoldTransactionDialog extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.holdToggled = createEvent(this, "holdToggled", 7);
    }
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
        return (h(Host, { key: '072ecf1c9f680fe254503e09193416413381f2c5' }, h("ir-dialog", { key: '592f426a60440a731d9e821f936e504ebb905727', label: isHeld ? 'Revert Transaction' : 'Hold Transaction', ref: el => (this.dialogRef = el) }, h("div", { key: '97bda2ef494fe900922bfc39aebc6d594d114f10', class: "hold-dialog__body" }, isHeld ? (h("p", null, "Revert this transaction back to ", h("strong", null, "Unbilled"), " status? It will re-enter the billing queue.")) : (h("p", null, "Place this transaction on ", h("strong", null, "Hold"), "? It will be excluded from invoicing until released."))), h("div", { key: 'a2bc3f7fa27f8a5782d89c220fa28ecaf8ba9f2d', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '008126a38a9b8212f56271b2b70bb30af5163773', size: "medium", appearance: "filled", variant: "neutral", "data-dialog": "close" }, "Cancel"), h("ir-custom-button", { key: 'b7c75e2953f96ae712dc7de35f589bfbf72bd7c3', size: "medium", loading: this.isLoading, onClickHandler: () => this.handleConfirm(), appearance: "accent", variant: "brand" }, "Confirm")))));
    }
    static get style() { return IrHoldTransactionDialogStyle0; }
}, [2, "ir-hold-transaction-dialog", {
        "row": [16],
        "currencySymbol": [1, "currency-symbol"],
        "isLoading": [32],
        "openModal": [64],
        "closeModal": [64]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-hold-transaction-dialog", "ir-custom-button", "ir-dialog"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-hold-transaction-dialog":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrHoldTransactionDialog);
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrHoldTransactionDialog as I, defineCustomElement as d };

//# sourceMappingURL=ir-hold-transaction-dialog2.js.map