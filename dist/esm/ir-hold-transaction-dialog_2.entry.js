import { r as registerInstance, c as createEvent, h, H as Host, d as getElement } from './index-CaNXuIlM.js';
import { C as CityLedgerService } from './index-BS82VUZ7.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './enums-DjSFmz1B.js';
import './moment-Mki5YqAR.js';
import './index-DeW5X45W.js';
import './utils-B2NKY4In.js';
import './calendar-data-C4sU6rT3.js';
import './index-Cn49IR5D.js';
import './locales.store-VrM8jHuM.js';
import './type-D7rOPtKA.js';

const irHoldTransactionDialogCss = () => `.sc-ir-hold-transaction-dialog-h{display:contents}.hold-dialog__body.sc-ir-hold-transaction-dialog{display:flex;flex-direction:column;gap:0.875rem;font-size:0.875rem}.hold-dialog__details.sc-ir-hold-transaction-dialog{background:var(--wa-color-neutral-fill-quiet, #f9fafb);border:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);border-radius:0.5rem;overflow:hidden}.hold-dialog__detail-row.sc-ir-hold-transaction-dialog{display:flex;justify-content:space-between;padding:0.5rem 0.75rem;font-size:0.8125rem;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb)}.hold-dialog__detail-row.sc-ir-hold-transaction-dialog:last-child{border-bottom:0}.hold-dialog__detail-row.sc-ir-hold-transaction-dialog span.sc-ir-hold-transaction-dialog:first-child{color:var(--wa-color-text-quiet, #6b7280)}.hold-dialog__detail-row.sc-ir-hold-transaction-dialog span.sc-ir-hold-transaction-dialog:last-child{font-weight:500}`;

const IrHoldTransactionDialog = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.holdToggled = createEvent(this, "holdToggled");
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
        return (h(Host, { key: 'e4feda5ab7019ca81b824628eba79a41a49103ce' }, h("ir-dialog", { key: '96eff1affc1e6fb957f6c519d4699e8db55f9220', label: isHeld ? 'Revert Transaction' : 'Hold Transaction', ref: el => (this.dialogRef = el) }, h("div", { key: 'c7c825452a514c011e61fd3068520ca8430b62f4', class: "hold-dialog__body" }, isHeld ? (h("p", null, "Revert this transaction back to ", h("strong", null, "Unbilled"), " status? It will re-enter the billing queue.")) : (h("p", null, "Place this transaction on ", h("strong", null, "Hold"), "? It will be excluded from invoicing until released."))), h("div", { key: 'bda2380f0c320ca20ba532d466aadbb60c6161a7', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'b4c9a43837a7fc0d00cc53e39d9d2c882f4e04cb', size: "m", appearance: "filled", variant: "neutral", "data-dialog": "close" }, "Cancel"), h("ir-custom-button", { key: 'ec9c8607ea3d6580444bb6253bb7c221d92cb511', size: "m", loading: this.isLoading, onClickHandler: () => this.handleConfirm(), appearance: "accent", variant: "brand" }, "Confirm")))));
    }
};
IrHoldTransactionDialog.style = irHoldTransactionDialogCss();

const irInputCellCss = () => `:host{display:block;height:100%;width:100%}.cell-input{height:100%;width:100%}.cell-input:focus-within{z-index:10}.cell-input::part(wa-input){height:100%;z-index:1}.cell-input::part(base){height:100%;border-radius:0;border:0;font-size:1rem}.input-cell__container{height:100%;width:100%;box-sizing:border-box}.input-cell__container[data-active='false']{display:flex;flex-direction:column;align-items:end;justify-content:center;padding:var(--ir-cell-padding)}`;

const IrInputCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.cellValueChange = createEvent(this, "cellValueChange");
    }
    get el() { return getElement(this); }
    /** The value of the input. */
    value;
    /** Disables the input. */
    disabled;
    /** Mask for the input field (optional) */
    mask;
    active = false;
    slotState = new Map();
    cellValueChange;
    inputRef;
    slotObserver;
    SLOT_NAMES = ['label', 'start', 'end', 'clear-icon', 'hide-password-icon', 'show-password-icon', 'hint'];
    componentWillLoad() {
        this.updateSlotState();
    }
    componentDidLoad() {
        this.setupSlotListeners();
    }
    disconnectedCallback() {
        this.removeSlotListeners();
    }
    handleActiveChange() {
        if (this.active) {
            setTimeout(() => {
                this.inputRef?.focusInput();
            }, 100);
        }
    }
    hasSlot(name) {
        return !!this.el.querySelector(`[slot="${name}"]`);
    }
    setupSlotListeners() {
        // Listen to slotchange events on the host element
        this.el.addEventListener('slotchange', this.handleSlotChange);
        // Also use MutationObserver as a fallback for browsers that don't fire slotchange reliably
        this.slotObserver = new MutationObserver(this.handleSlotChange);
        this.slotObserver.observe(this.el, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['slot'],
        });
    }
    removeSlotListeners() {
        this.el.removeEventListener('slotchange', this.handleSlotChange);
        this.slotObserver?.disconnect();
    }
    handleSlotChange = () => {
        this.updateSlotState();
    };
    updateSlotState() {
        const newState = new Map();
        this.SLOT_NAMES.forEach(name => {
            newState.set(name, this.hasSlot(name));
        });
        this.slotState = newState;
    }
    render() {
        return (h("div", { key: 'bcadc18343b72c1548a36c9c61b3ad2ea99ac94b', onDblClick: () => {
                if (this.disabled) {
                    return;
                }
                if (!this.active) {
                    this.active = true;
                }
            }, "data-active": String(this.active), class: "input-cell__container" }, this.active ? (h("ir-input", { ref: el => (this.inputRef = el), mask: this.mask, class: "cell-input", value: this.value, "onText-change": e => {
                this.value = e.detail;
            }, "onInput-blur": () => {
                this.active = false;
            }, onChange: () => {
                this.cellValueChange.emit(this.value);
            } }, this.slotState.get('label') && h("slot", { name: "label", slot: "label" }), this.slotState.get('start') && h("slot", { name: "start", slot: "start" }), this.slotState.get('end') && h("slot", { name: "end", slot: "end" }), this.slotState.get('clear-icon') && h("slot", { name: "clear-icon", slot: "clear-icon" }), this.slotState.get('hide-password-icon') && h("slot", { name: "hide-password-icon", slot: "hide-password-icon" }), this.slotState.get('show-password-icon') && h("slot", { name: "show-password-icon", slot: "show-password-icon" }), this.slotState.get('hint') && h("slot", { name: "hint", slot: "hint" }))) : (h("slot", null))));
    }
    static get watchers() { return {
        "active": [{
                "handleActiveChange": 0
            }]
    }; }
};
IrInputCell.style = irInputCellCss();

export { IrHoldTransactionDialog as ir_hold_transaction_dialog, IrInputCell as ir_input_cell };
