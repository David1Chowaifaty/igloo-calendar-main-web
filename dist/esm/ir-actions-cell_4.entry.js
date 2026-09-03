import { r as registerInstance, c as createEvent, h, H as Host } from './index-BYqrdgY9.js';
import { c as calendar_data } from './calendar-data-BebdClG4.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import './locales.store-C9qsbKR0.js';
import './booking.dto-DpE31yhG.js';
import './ir-date-_0rd4VZd.js';
import { f as formatAmount } from './number-DuxNax9Y.js';
import './index-CimhgHoX.js';
import './index-DeW5X45W.js';
import './type-D7rOPtKA.js';
import './_commonjsHelpers-BFTU3MAI.js';

const irActionsCellCss = () => `.sc-ir-actions-cell-h{box-sizing:border-box !important}.sc-ir-actions-cell-h *.sc-ir-actions-cell,.sc-ir-actions-cell-h *.sc-ir-actions-cell::before,.sc-ir-actions-cell-h *.sc-ir-actions-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-actions-cell{display:none !important}.sc-ir-actions-cell-h{display:flex;justify-content:flex-end}`;

const IrActionsCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.irAction = createEvent(this, "irAction");
    }
    buttons = [];
    irAction;
    getLabel(type) {
        switch (type) {
            case 'check_in':
                return 'Check in';
            case 'check_out':
                return 'Check out';
            case 'overdue_check_in':
                return 'Overdue check-in';
            case 'overdue_check_out':
                return 'Overdue check-out';
            case 'edit':
                return 'icon';
            case 'delete':
                return 'icon';
            default:
                return '';
        }
    }
    getVariant(type) {
        switch (type) {
            case 'overdue_check_in':
            case 'overdue_check_out':
                return 'neutral';
            case 'edit':
                return 'neutral';
            case 'delete':
                return 'danger';
            default:
                return 'brand';
        }
    }
    getAppearance(type) {
        switch (type) {
            case 'edit':
            case 'delete':
                return 'plain';
            default:
                return 'accent';
        }
    }
    onClick(action) {
        this.irAction.emit({ action });
    }
    renderButton(type) {
        const label = this.getLabel(type);
        const variant = this.getVariant(type);
        const appearance = this.getAppearance(type);
        if (!label)
            return null;
        return (h("ir-custom-button", { variant: variant, appearance: appearance, "data-action": type, onClick: () => this.onClick(type) }, label !== 'icon' && label, type === 'edit' && h("wa-icon", { name: "edit", style: { fontSize: '1.2rem' } }), type === 'delete' && h("wa-icon", { name: "trash-can", style: { fontSize: '1.2rem' } })));
    }
    render() {
        return h(Host, { key: 'd1c4e09be320e280932ee965f97dea9b966eb068' }, this.buttons.map(button => this.renderButton(button)));
    }
};
IrActionsCell.style = irActionsCellCss();

const irBalanceCellCss = () => `.sc-ir-balance-cell-h{box-sizing:border-box !important}.sc-ir-balance-cell-h *.sc-ir-balance-cell,.sc-ir-balance-cell-h *.sc-ir-balance-cell::before,.sc-ir-balance-cell-h *.sc-ir-balance-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-balance-cell{display:none !important}.sc-ir-balance-cell-h{display:flex;flex-direction:column;align-items:center;font-size:0.93rem}[display='inline'].sc-ir-balance-cell-h{display:flex;flex-direction:row;gap:0.5rem}.cell-label.sc-ir-balance-cell{font-weight:700}.balance_button-container.sc-ir-balance-cell{display:flex;align-items:center;justify-content:flex-end}`;

const IrBalanceCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.payBookingBalance = createEvent(this, "payBookingBalance");
    }
    label;
    display = 'block';
    financial;
    guestFinancial;
    statusCode;
    isDirect;
    bookingNumber;
    currencySymbol;
    removeBalance;
    payBookingBalance;
    /** A balance amount is actionable only when it is a non-zero, non-null number. */
    hasAmount(value) {
        return value !== null && value !== undefined && value !== 0;
    }
    render() {
        return (h(Host, { key: '36f55b285852f09ba5329afc9cb0cb0824745228' }, this.label && h("p", { key: 'd1dd58d922ccaffa18a6a564c2e684a9e6ada161', class: "cell-label" }, this.label, ":"), this.removeBalance && this.financial.due_amount !== 0 ? null : (h("p", { class: "ir-price", style: { fontWeight: '400' } }, formatAmount(this.currencySymbol, this.removeBalance ? 0 : this.financial.gross_total))), h("div", { key: 'baa34ad84db178abb00ffba3eae3081a2abfd8bf', class: "balance_button-container" }, ['003', '004'].includes(this.statusCode) && this.isDirect
            ? this.hasAmount(this.financial.cancelation_penality_as_if_today) &&
                this.hasAmount(this.financial.due_amount) && (h("ir-custom-button", { onClickHandler: () => {
                    this.payBookingBalance.emit({
                        booking_nbr: this.bookingNumber,
                        payment: {
                            amount: Math.abs(this.financial.cancelation_penality_as_if_today),
                            currency: calendar_data.property.currency,
                            date: hooks().format('YYYY-MM-DD'),
                            designation: null,
                            payment_method: null,
                            payment_type: { code: this.financial.cancelation_penality_as_if_today < 0 ? '010' : '001', description: null, operation: 'CR' },
                            id: -1,
                            reference: '',
                        },
                    });
                }, style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "s", variant: "danger", appearance: "outlined" }, h("span", null, this.financial.cancelation_penality_as_if_today < 0 ? 'Refund' : 'Charge', " "), formatAmount(this.currencySymbol, Math.abs(this.financial.cancelation_penality_as_if_today))))
            : this.hasAmount(this.guestFinancial?.due_amount) && (h("ir-custom-button", { onClickHandler: () => {
                    this.payBookingBalance.emit({
                        booking_nbr: this.bookingNumber,
                        payment: {
                            amount: Math.abs(this.guestFinancial?.due_amount),
                            currency: calendar_data.property.currency,
                            date: hooks().format('YYYY-MM-DD'),
                            designation: null,
                            payment_method: null,
                            payment_type: { code: '001', description: null, operation: 'CR' },
                            id: -1,
                            reference: '',
                        },
                    });
                    {
                        ['003', '004'].includes(this.statusCode) && this.isDirect
                            ? this.financial.cancelation_penality_as_if_today !== 0 &&
                                this.financial.due_amount !== 0 && (h("ir-custom-button", { onClickHandler: () => {
                                    this.payBookingBalance.emit({
                                        booking_nbr: this.bookingNumber,
                                        payment: {
                                            amount: Math.abs(this.financial.cancelation_penality_as_if_today),
                                            currency: calendar_data.property.currency,
                                            date: hooks().format('YYYY-MM-DD'),
                                            designation: null,
                                            payment_method: null,
                                            payment_type: { code: this.financial.cancelation_penality_as_if_today < 0 ? '010' : '001', description: null, operation: null },
                                            id: -1,
                                            reference: '',
                                        },
                                    });
                                }, style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "s", variant: "danger", appearance: "outlined" }, h("span", null, this.financial.cancelation_penality_as_if_today < 0 ? 'Refund' : 'Charge', " "), formatAmount(this.currencySymbol, Math.abs(this.financial.cancelation_penality_as_if_today))))
                            : this.financial.due_amount !== 0 && (h("ir-custom-button", { onClickHandler: () => {
                                    this.payBookingBalance.emit({
                                        booking_nbr: this.bookingNumber,
                                        payment: {
                                            amount: Math.abs(this.financial.due_amount),
                                            currency: calendar_data.property.currency,
                                            date: hooks().format('YYYY-MM-DD'),
                                            designation: null,
                                            payment_method: null,
                                            payment_type: { code: '001', description: null, operation: null },
                                            id: -1,
                                            reference: '',
                                        },
                                    });
                                }, style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "s", variant: "danger", appearance: "outlined" }, formatAmount(this.currencySymbol, this.financial.due_amount)));
                    }
                }, style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "s", variant: "danger", appearance: "outlined" }, formatAmount(this.currencySymbol, this.guestFinancial?.due_amount))))));
    }
};
IrBalanceCell.style = irBalanceCellCss();

const irGuestNameCellCss = () => `.sc-ir-guest-name-cell-h{box-sizing:border-box !important}.sc-ir-guest-name-cell-h *.sc-ir-guest-name-cell,.sc-ir-guest-name-cell-h *.sc-ir-guest-name-cell::before,.sc-ir-guest-name-cell-h *.sc-ir-guest-name-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-guest-name-cell{display:none !important}.sc-ir-guest-name-cell-h{display:block;font-size:0.93rem}`;

const IrGuestNameCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    name;
    render() {
        return (h(Host, { key: '304c0d732c864433bcbaa4d900821f2373f53db4' }, this.name.first_name, " ", this.name.last_name));
    }
};
IrGuestNameCell.style = irGuestNameCellCss();

const irUnitCellCss = () => `.sc-ir-unit-cell-h{box-sizing:border-box !important}.sc-ir-unit-cell-h *.sc-ir-unit-cell,.sc-ir-unit-cell-h *.sc-ir-unit-cell::before,.sc-ir-unit-cell-h *.sc-ir-unit-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-unit-cell{display:none !important}.sc-ir-unit-cell-h{display:flex;align-items:center;gap:0.5rem;font-size:0.93rem}`;

const IrUnitCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    room;
    showDeparture = false;
    render() {
        return (h(Host, { key: '0a832e098bbf9c924a9fa2da0bc88b41b3dd0cfc' }, h("p", { key: 'ef487b4ede93dd1f184d784b03bb240013b5d744' }, this.room.roomtype.name), this.room.unit && h("ir-unit-tag", { key: '21066cb0cc7a09ad116c6b7ff6cc37a24500fd1f', unit: this.room.unit.name }), this.showDeparture && this.room?.departure_time?.description && h("span", { key: 'f509030739ae10ac8aa0e4ff70158e2c6e4a4ea5' }, this.room?.departure_time?.description)));
    }
};
IrUnitCell.style = irUnitCellCss();

export { IrActionsCell as ir_actions_cell, IrBalanceCell as ir_balance_cell, IrGuestNameCell as ir_guest_name_cell, IrUnitCell as ir_unit_cell };
