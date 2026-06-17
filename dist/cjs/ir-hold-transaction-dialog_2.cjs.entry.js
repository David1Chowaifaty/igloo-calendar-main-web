'use strict';

var index = require('./index-DtXemfU-.js');
var index$1 = require('./index-JIBncUOw.js');
require('./axios-C-Phc0sj.js');
require('./moment-CdViwxPQ.js');
require('./index-CLqkDPTC.js');
require('./utils-CsChIHgF.js');
require('./calendar-data--UuFzfsJ.js');
require('./index-koQJ3Kgt.js');
require('./locales.store-CtV5-KJh.js');
require('./type-Dy9pVS4V.js');

const irHoldTransactionDialogCss = () => `.sc-ir-hold-transaction-dialog-h{display:contents}.hold-dialog__body.sc-ir-hold-transaction-dialog{display:flex;flex-direction:column;gap:0.875rem;font-size:0.875rem}.hold-dialog__details.sc-ir-hold-transaction-dialog{background:var(--wa-color-neutral-fill-quiet, #f9fafb);border:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);border-radius:0.5rem;overflow:hidden}.hold-dialog__detail-row.sc-ir-hold-transaction-dialog{display:flex;justify-content:space-between;padding:0.5rem 0.75rem;font-size:0.8125rem;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb)}.hold-dialog__detail-row.sc-ir-hold-transaction-dialog:last-child{border-bottom:0}.hold-dialog__detail-row.sc-ir-hold-transaction-dialog span.sc-ir-hold-transaction-dialog:first-child{color:var(--wa-color-text-quiet, #6b7280)}.hold-dialog__detail-row.sc-ir-hold-transaction-dialog span.sc-ir-hold-transaction-dialog:last-child{font-weight:500}`;

const IrHoldTransactionDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.holdToggled = index.createEvent(this, "holdToggled");
    }
    row = null;
    currencySymbol = '$';
    isLoading = false;
    holdToggled;
    dialogRef;
    cityLedgerService = new index$1.CityLedgerService();
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
        return (index.h(index.Host, { key: '8aa02c787b5a6cce3019f9258cb3fd8094f90983' }, index.h("ir-dialog", { key: '04b0bd34b424899fe3758b912c6a653fe54b8075', label: isHeld ? 'Revert Transaction' : 'Hold Transaction', ref: el => (this.dialogRef = el) }, index.h("div", { key: '79bfd35d5c9f2181f30f770fa9fc30f631f86a5c', class: "hold-dialog__body" }, isHeld ? (index.h("p", null, "Revert this transaction back to ", index.h("strong", null, "Unbilled"), " status? It will re-enter the billing queue.")) : (index.h("p", null, "Place this transaction on ", index.h("strong", null, "Hold"), "? It will be excluded from invoicing until released."))), index.h("div", { key: '04c5e12416618c6fa755a13e1b5bca2bd6794295', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: '2607568beccdfa4cac1f07b06ff1b2b794f288d6', size: "m", appearance: "filled", variant: "neutral", "data-dialog": "close" }, "Cancel"), index.h("ir-custom-button", { key: '5670e46b10e844fb89c14353cfea53c3c8f3aad6', size: "m", loading: this.isLoading, onClickHandler: () => this.handleConfirm(), appearance: "accent", variant: "brand" }, "Confirm")))));
    }
};
IrHoldTransactionDialog.style = irHoldTransactionDialogCss();

const irInputCellCss = () => `:host{display:block;height:100%;width:100%}.cell-input{height:100%;width:100%}.cell-input:focus-within{z-index:10}.cell-input::part(wa-input){height:100%;z-index:1}.cell-input::part(base){height:100%;border-radius:0;border:0;font-size:1rem}.input-cell__container{height:100%;width:100%;box-sizing:border-box}.input-cell__container[data-active='false']{display:flex;flex-direction:column;align-items:end;justify-content:center;padding:var(--ir-cell-padding)}`;

const IrInputCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.cellValueChange = index.createEvent(this, "cellValueChange");
    }
    get el() { return index.getElement(this); }
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
        return (index.h("div", { key: 'cc4bddcf52d0b3fff79f0a5909fdad843e3c9ca8', onDblClick: () => {
                if (this.disabled) {
                    return;
                }
                if (!this.active) {
                    this.active = true;
                }
            }, "data-active": String(this.active), class: "input-cell__container" }, this.active ? (index.h("ir-input", { ref: el => (this.inputRef = el), mask: this.mask, class: "cell-input", value: this.value, "onText-change": e => {
                this.value = e.detail;
            }, "onInput-blur": () => {
                this.active = false;
            }, onChange: () => {
                this.cellValueChange.emit(this.value);
            } }, this.slotState.get('label') && index.h("slot", { name: "label", slot: "label" }), this.slotState.get('start') && index.h("slot", { name: "start", slot: "start" }), this.slotState.get('end') && index.h("slot", { name: "end", slot: "end" }), this.slotState.get('clear-icon') && index.h("slot", { name: "clear-icon", slot: "clear-icon" }), this.slotState.get('hide-password-icon') && index.h("slot", { name: "hide-password-icon", slot: "hide-password-icon" }), this.slotState.get('show-password-icon') && index.h("slot", { name: "show-password-icon", slot: "show-password-icon" }), this.slotState.get('hint') && index.h("slot", { name: "hint", slot: "hint" }))) : (index.h("slot", null))));
    }
    static get watchers() { return {
        "active": [{
                "handleActiveChange": 0
            }]
    }; }
};
IrInputCell.style = irInputCellCss();

exports.ir_hold_transaction_dialog = IrHoldTransactionDialog;
exports.ir_input_cell = IrInputCell;
