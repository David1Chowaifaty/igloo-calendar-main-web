'use strict';

var index = require('./index-Du1V06mp.js');
var calendarData = require('./calendar-data-CeBvVadE.js');
var utils = require('./utils-EjuW-lx0.js');
var moment = require('./moment-CdViwxPQ.js');
require('./index-BTAleJGz.js');
require('./index-CLqkDPTC.js');
require('./locales.store-CYcHBWUG.js');
require('./type-Dy9pVS4V.js');

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
        return (index.h("ir-custom-button", { variant: variant, appearance: appearance, "data-action": type, onClick: () => this.onClick(type) }, label !== 'icon' && label, type === 'edit' && index.h("wa-icon", { name: "edit", style: { fontSize: '1.2rem' } }), type === 'delete' && index.h("wa-icon", { name: "trash-can", style: { fontSize: '1.2rem' } })));
    }
    render() {
        return index.h(index.Host, { key: 'd1c4e09be320e280932ee965f97dea9b966eb068' }, this.buttons.map(button => this.renderButton(button)));
    }
};
IrActionsCell.style = irActionsCellCss();

const irBalanceCellCss = () => `.sc-ir-balance-cell-h{box-sizing:border-box !important}.sc-ir-balance-cell-h *.sc-ir-balance-cell,.sc-ir-balance-cell-h *.sc-ir-balance-cell::before,.sc-ir-balance-cell-h *.sc-ir-balance-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-balance-cell{display:none !important}.sc-ir-balance-cell-h{display:flex;flex-direction:column;align-items:center;font-size:0.93rem}[display='inline'].sc-ir-balance-cell-h{display:flex;flex-direction:row;gap:0.5rem}.cell-label.sc-ir-balance-cell{font-weight:700}.balance_button-container.sc-ir-balance-cell{display:flex;align-items:center;justify-content:flex-end}`;

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
    payBookingBalance;
    /** A balance amount is actionable only when it is a non-zero, non-null number. */
    hasAmount(value) {
        return value !== null && value !== undefined && value !== 0;
    }
    render() {
        return (index.h(index.Host, { key: '61d5364e9f56f9c506ec7bf96ad172bd82572650' }, this.label && index.h("p", { key: 'a5a5519ccba677cc965d76c6c40fa327d6e95476', class: "cell-label" }, this.label, ":"), this.removeBalance && this.financial.due_amount !== 0 ? null : (index.h("p", { class: "ir-price", style: { fontWeight: '400' } }, utils.formatAmount(this.currencySymbol, this.removeBalance ? 0 : this.financial.gross_total))), index.h("div", { key: '21e9349dffd3293e35aabf00b3094c81ae099edc', class: "balance_button-container" }, ['003', '004'].includes(this.statusCode) && this.isDirect
            ? this.hasAmount(this.financial.cancelation_penality_as_if_today) &&
                this.hasAmount(this.financial.due_amount) && (index.h("ir-custom-button", { onClickHandler: () => {
                    this.payBookingBalance.emit({
                        booking_nbr: this.bookingNumber,
                        payment: {
                            amount: Math.abs(this.financial.cancelation_penality_as_if_today),
                            currency: calendarData.calendar_data.property.currency,
                            date: moment.hooks().format('YYYY-MM-DD'),
                            designation: null,
                            payment_method: null,
                            payment_type: { code: this.financial.cancelation_penality_as_if_today < 0 ? '010' : '001', description: null, operation: 'CR' },
                            id: -1,
                            reference: '',
                        },
                    });
                }, style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "s", variant: "danger", appearance: "outlined" }, index.h("span", null, this.financial.cancelation_penality_as_if_today < 0 ? 'Refund' : 'Charge', " "), utils.formatAmount(this.currencySymbol, Math.abs(this.financial.cancelation_penality_as_if_today))))
            : this.hasAmount(this.guestFinancial?.due_amount) && (index.h("ir-custom-button", { onClickHandler: () => {
                    this.payBookingBalance.emit({
                        booking_nbr: this.bookingNumber,
                        payment: {
                            amount: Math.abs(this.guestFinancial?.due_amount),
                            currency: calendarData.calendar_data.property.currency,
                            date: moment.hooks().format('YYYY-MM-DD'),
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
                                            date: moment.hooks().format('YYYY-MM-DD'),
                                            designation: null,
                                            payment_method: null,
                                            payment_type: { code: this.financial.cancelation_penality_as_if_today < 0 ? '010' : '001', description: null, operation: null },
                                            id: -1,
                                            reference: '',
                                        },
                                    });
                                }, style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "s", variant: "danger", appearance: "outlined" }, index.h("span", null, this.financial.cancelation_penality_as_if_today < 0 ? 'Refund' : 'Charge', " "), utils.formatAmount(this.currencySymbol, Math.abs(this.financial.cancelation_penality_as_if_today))))
                            : this.financial.due_amount !== 0 && (index.h("ir-custom-button", { onClickHandler: () => {
                                    this.payBookingBalance.emit({
                                        booking_nbr: this.bookingNumber,
                                        payment: {
                                            amount: Math.abs(this.financial.due_amount),
                                            currency: calendarData.calendar_data.property.currency,
                                            date: moment.hooks().format('YYYY-MM-DD'),
                                            designation: null,
                                            payment_method: null,
                                            payment_type: { code: '001', description: null, operation: null },
                                            id: -1,
                                            reference: '',
                                        },
                                    });
                                }, style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "s", variant: "danger", appearance: "outlined" }, utils.formatAmount(this.currencySymbol, this.financial.due_amount)));
                    }
                }, style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "s", variant: "danger", appearance: "outlined" }, utils.formatAmount(this.currencySymbol, this.guestFinancial?.due_amount))))));
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
        return (index.h(index.Host, { key: '4579f7370c7a18d24631c39ff9738d135cc9d777' }, this.name.first_name, " ", this.name.last_name));
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
        return (index.h(index.Host, { key: '9739ea5db28469f994d729743a0296a1175fc021' }, index.h("p", { key: 'bc8d35f5d0ee958c996f621fda0f72916cd29730' }, this.room.roomtype.name), this.room.unit && index.h("ir-unit-tag", { key: '0889724058323653a17299c2fe28ebaaadd62d90', unit: this.room.unit.name }), this.showDeparture && this.room?.departure_time?.description && index.h("span", { key: 'd8b6db717700756cdbf250fadc43f82421e03c79' }, this.room?.departure_time?.description)));
    }
};
IrUnitCell.style = irUnitCellCss();

exports.ir_actions_cell = IrActionsCell;
exports.ir_balance_cell = IrBalanceCell;
exports.ir_guest_name_cell = IrGuestNameCell;
exports.ir_unit_cell = IrUnitCell;
