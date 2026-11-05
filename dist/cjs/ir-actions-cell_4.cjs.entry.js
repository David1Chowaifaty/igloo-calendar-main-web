'use strict';

var index = require('./index-IDeZZwEK.js');
var t = require('./t-CqJPQrfm.js');
var calendarData = require('./calendar-data-ShS6b-Ns.js');
var moment = require('./moment-CdViwxPQ.js');
require('./booking.dto-CMx8s-oW.js');
require('./ir-date-CbkOKs2C.js');
require('./locale-scope-Cch-vf1R.js');
var number = require('./number-xBpNWk3H.js');
require('./type-DxODN41W.js');
require('./types-BVJQZ50e.js');
require('./language-observer-DKp37LIu.js');
require('./_commonjsHelpers-BJu3ubxk.js');

const irActionsCellCss = () => `.sc-ir-actions-cell-h{box-sizing:border-box !important}.sc-ir-actions-cell-h *.sc-ir-actions-cell,.sc-ir-actions-cell-h *.sc-ir-actions-cell::before,.sc-ir-actions-cell-h *.sc-ir-actions-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-actions-cell{display:none !important}.sc-ir-actions-cell-h{display:flex;justify-content:flex-end}`;

const IrActionsCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.irAction = index.createEvent(this, "irAction");
    }
    buttons = [];
    irAction;
    getLabel(type) {
        switch (type) {
            case 'check_in':
                return t.t('Lcz_CheckIn', { fallback: 'Check in' });
            case 'check_out':
                return t.t('Lcz_CheckOut', { fallback: 'Check out' });
            case 'overdue_check_in':
                return t.t('Lcz_OverdueCheckIn', { fallback: 'Overdue check-in' });
            case 'overdue_check_out':
                return t.t('Lcz_OverdueCheckOut', { fallback: 'Overdue check-out' });
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
        return (index.h("ir-custom-button", { variant: variant, appearance: appearance, "data-action": type, onClick: () => this.onClick(type) }, label !== 'icon' && label, type === 'edit' && index.h("wa-icon", { name: "edit", style: { fontSize: '1.2rem' } }), type === 'delete' && index.h("wa-icon", { name: "trash-can", style: { fontSize: '1.2rem' } })));
    }
    render() {
        return index.h(index.Host, { key: '024c70ac6e42a3cc62db315c39c3fbdc96bf3bb2' }, this.buttons.map(button => this.renderButton(button)));
    }
};
IrActionsCell.style = irActionsCellCss();

const irBalanceCellCss = () => `.sc-ir-balance-cell-h{box-sizing:border-box !important}.sc-ir-balance-cell-h *.sc-ir-balance-cell,.sc-ir-balance-cell-h *.sc-ir-balance-cell::before,.sc-ir-balance-cell-h *.sc-ir-balance-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-balance-cell{display:none !important}.sc-ir-balance-cell-h{display:flex;flex-direction:column;align-items:center;font-size:0.93rem}[display='inline'].sc-ir-balance-cell-h{display:flex;flex-direction:row;gap:0.5rem}.cell-label.sc-ir-balance-cell{font-weight:700}.balance_button-container.sc-ir-balance-cell{display:flex;align-items:center;justify-content:flex-end}.ir-price.sc-ir-balance-cell,.amount.sc-ir-balance-cell{direction:ltr;unicode-bidi:isolate;font-variant-numeric:tabular-nums}`;

const IrBalanceCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.payBookingBalance = index.createEvent(this, "payBookingBalance");
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
    /** Date (`YYYY-MM-DD`) the payment is recorded on, e.g. the dashboard's selected day. Defaults to today. */
    paymentDate;
    payBookingBalance;
    /** A balance amount is actionable only when it is a non-zero, non-null number. */
    hasAmount(value) {
        return value !== null && value !== undefined && value !== 0;
    }
    get recordDate() {
        return this.paymentDate || moment.hooks().format('YYYY-MM-DD');
    }
    render() {
        return (index.h(index.Host, { key: '10416bf05f8544670e587184569f7f0e99ee6707' }, this.label && index.h("p", { key: 'fecb5125b3b531ca1f91db34326354afe2a9447a', class: "cell-label" }, this.label, ":"), this.removeBalance && this.financial.due_amount !== 0 ? null : (index.h("p", { class: "ir-price", style: { fontWeight: '400' } }, number.formatAmount(this.currencySymbol, this.removeBalance ? 0 : this.financial.gross_total))), index.h("div", { key: '54d54718a5eed1a3b70fea0acd150f345e991691', class: "balance_button-container" }, ['003', '004'].includes(this.statusCode) && this.isDirect
            ? this.hasAmount(this.financial.cancelation_penality_as_if_today) &&
                this.hasAmount(this.financial.due_amount) && (index.h("ir-custom-button", { onClickHandler: () => {
                    this.payBookingBalance.emit({
                        booking_nbr: this.bookingNumber,
                        payment: {
                            amount: Math.abs(this.financial.cancelation_penality_as_if_today),
                            currency: calendarData.calendar_data.property.currency,
                            date: this.recordDate,
                            designation: null,
                            payment_method: null,
                            payment_type: { code: this.financial.cancelation_penality_as_if_today < 0 ? '010' : '001', description: null, operation: 'CR' },
                            id: -1,
                            reference: '',
                        },
                    });
                }, style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "s", variant: "danger", appearance: "outlined" }, index.h("span", null, this.financial.cancelation_penality_as_if_today < 0 ? t.t('Lcz_Refund', { fallback: 'Refund' }) : t.t('Lcz_Charge', { fallback: 'Charge' }), " "), index.h("span", { class: "amount" }, number.formatAmount(this.currencySymbol, Math.abs(this.financial.cancelation_penality_as_if_today)))))
            : this.hasAmount(this.guestFinancial?.due_amount) && (index.h("ir-custom-button", { onClickHandler: () => {
                    this.payBookingBalance.emit({
                        booking_nbr: this.bookingNumber,
                        payment: {
                            amount: Math.abs(this.guestFinancial?.due_amount),
                            currency: calendarData.calendar_data.property.currency,
                            date: this.recordDate,
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
                                this.financial.due_amount !== 0 && (index.h("ir-custom-button", { onClickHandler: () => {
                                    this.payBookingBalance.emit({
                                        booking_nbr: this.bookingNumber,
                                        payment: {
                                            amount: Math.abs(this.financial.cancelation_penality_as_if_today),
                                            currency: calendarData.calendar_data.property.currency,
                                            date: this.recordDate,
                                            designation: null,
                                            payment_method: null,
                                            payment_type: { code: this.financial.cancelation_penality_as_if_today < 0 ? '010' : '001', description: null, operation: null },
                                            id: -1,
                                            reference: '',
                                        },
                                    });
                                }, style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "s", variant: "danger", appearance: "outlined" }, index.h("span", null, this.financial.cancelation_penality_as_if_today < 0 ? t.t('Lcz_Refund', { fallback: 'Refund' }) : t.t('Lcz_Charge', { fallback: 'Charge' }), ' '), index.h("span", { class: "amount" }, number.formatAmount(this.currencySymbol, Math.abs(this.financial.cancelation_penality_as_if_today)))))
                            : this.financial.due_amount !== 0 && (index.h("ir-custom-button", { onClickHandler: () => {
                                    this.payBookingBalance.emit({
                                        booking_nbr: this.bookingNumber,
                                        payment: {
                                            amount: Math.abs(this.financial.due_amount),
                                            currency: calendarData.calendar_data.property.currency,
                                            date: this.recordDate,
                                            designation: null,
                                            payment_method: null,
                                            payment_type: { code: '001', description: null, operation: null },
                                            id: -1,
                                            reference: '',
                                        },
                                    });
                                }, style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "s", variant: "danger", appearance: "outlined" }, index.h("span", { class: "amount" }, number.formatAmount(this.currencySymbol, this.financial.due_amount))));
                    }
                }, style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "s", variant: "danger", appearance: "outlined" }, index.h("span", { class: "amount" }, number.formatAmount(this.currencySymbol, this.guestFinancial?.due_amount)))))));
    }
};
IrBalanceCell.style = irBalanceCellCss();

const irGuestNameCellCss = () => `.sc-ir-guest-name-cell-h{box-sizing:border-box !important}.sc-ir-guest-name-cell-h *.sc-ir-guest-name-cell,.sc-ir-guest-name-cell-h *.sc-ir-guest-name-cell::before,.sc-ir-guest-name-cell-h *.sc-ir-guest-name-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-guest-name-cell{display:none !important}.sc-ir-guest-name-cell-h{display:block;font-size:0.93rem}`;

const IrGuestNameCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    name;
    render() {
        return (index.h(index.Host, { key: '9af808f41a3aaa5dca451571b30925503155f88a' }, this.name.first_name, " ", this.name.last_name));
    }
};
IrGuestNameCell.style = irGuestNameCellCss();

const irUnitCellCss = () => `.sc-ir-unit-cell-h{box-sizing:border-box !important}.sc-ir-unit-cell-h *.sc-ir-unit-cell,.sc-ir-unit-cell-h *.sc-ir-unit-cell::before,.sc-ir-unit-cell-h *.sc-ir-unit-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-unit-cell{display:none !important}.sc-ir-unit-cell-h{display:flex;align-items:center;gap:0.5rem;font-size:0.93rem}`;

const IrUnitCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    room;
    showDeparture = false;
    render() {
        return (index.h(index.Host, { key: 'ac68830a957c3f9ba638b871d1a4786eb19745a4' }, index.h("p", { key: 'ba7270213fbb5e651c82eb2b99be8d4ce0025ca0' }, this.room.roomtype.name), this.room.unit && index.h("ir-unit-tag", { key: '18a961a79548d0215c0cc54b899a4d211f8a1c27', unit: this.room.unit.name }), this.showDeparture && this.room?.departure_time?.description && index.h("span", { key: 'b2597154ec04eda8df286a200a113146d1983bd6' }, this.room?.departure_time?.description)));
    }
};
IrUnitCell.style = irUnitCellCss();

exports.ir_actions_cell = IrActionsCell;
exports.ir_balance_cell = IrBalanceCell;
exports.ir_guest_name_cell = IrGuestNameCell;
exports.ir_unit_cell = IrUnitCell;
