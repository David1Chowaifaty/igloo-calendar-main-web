'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3978a3f8.js');
const calendarData = require('./calendar-data-e7cdcfec.js');
const utils = require('./utils-9892967b.js');
const moment = require('./moment-1780b03a.js');
const locales_store = require('./locales.store-4eb57996.js');
require('./index-6299b0f7.js');
require('./index-8bb117a0.js');
require('./axios-6e678d52.js');

const irActionsCellCss = ".sc-ir-actions-cell-h{box-sizing:border-box !important}.sc-ir-actions-cell-h *.sc-ir-actions-cell,.sc-ir-actions-cell-h *.sc-ir-actions-cell::before,.sc-ir-actions-cell-h *.sc-ir-actions-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-actions-cell{display:none !important}.sc-ir-actions-cell-h{display:flex;justify-content:flex-end}";
const IrActionsCellStyle0 = irActionsCellCss;

const IrActionsCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.irAction = index.createEvent(this, "irAction", 7);
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
        return index.h(index.Host, { key: '31b5ce9a9f4d8c7b8eb872026634c35448aba570' }, this.buttons.map(button => this.renderButton(button)));
    }
};
IrActionsCell.style = IrActionsCellStyle0;

const irBalanceCellCss = ".sc-ir-balance-cell-h{box-sizing:border-box !important}.sc-ir-balance-cell-h *.sc-ir-balance-cell,.sc-ir-balance-cell-h *.sc-ir-balance-cell::before,.sc-ir-balance-cell-h *.sc-ir-balance-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-balance-cell{display:none !important}.sc-ir-balance-cell-h{display:flex;flex-direction:column;align-items:center;font-size:0.93rem}[display='inline'].sc-ir-balance-cell-h{display:flex;flex-direction:row;gap:0.5rem}.cell-label.sc-ir-balance-cell{font-weight:700}.balance_button-container.sc-ir-balance-cell{display:flex;align-items:center;justify-content:flex-end}";
const IrBalanceCellStyle0 = irBalanceCellCss;

const IrBalanceCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.payBookingBalance = index.createEvent(this, "payBookingBalance", 7);
    }
    label;
    display = 'block';
    financial;
    statusCode;
    isDirect;
    bookingNumber;
    currencySymbol;
    removeBalance;
    payBookingBalance;
    render() {
        return (index.h(index.Host, { key: '4ab8444e90aae1a62b05d53f185309bf3de48f47' }, this.label && index.h("p", { key: 'f9b9f542cf0c00721d3ce75988fbc4dd1fc36fdb', class: "cell-label" }, this.label, ":"), this.removeBalance && this.isDirect && this.financial.due_amount !== 0 ? null : (index.h("p", { class: "ir-price", style: { fontWeight: '400' } }, utils.formatAmount(this.currencySymbol, this.removeBalance ? 0 : this.financial.gross_total))), index.h("div", { key: '7e9b5dcbf91b48a872ffb556e5d0f8ea057cd1bc', class: "balance_button-container" }, ['003', '004'].includes(this.statusCode) && this.isDirect
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
                }, style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "small", variant: "danger", appearance: "outlined" }, index.h("span", null, this.financial.cancelation_penality_as_if_today < 0 ? 'Refund' : 'Charge', " "), utils.formatAmount(this.currencySymbol, Math.abs(this.financial.cancelation_penality_as_if_today))))
            : this.financial.due_amount !== 0 && (index.h("ir-custom-button", { onClickHandler: () => {
                    this.payBookingBalance.emit({
                        booking_nbr: this.bookingNumber,
                        payment: {
                            amount: this.financial.due_amount,
                            currency: calendarData.calendar_data.property.currency,
                            date: moment.hooks().format('YYYY-MM-DD'),
                            designation: null,
                            payment_method: null,
                            payment_type: { code: '001', description: null, operation: null },
                            id: -1,
                            reference: '',
                        },
                    });
                }, style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "small", variant: "danger", appearance: "outlined" }, utils.formatAmount(this.currencySymbol, this.financial.due_amount))))));
    }
};
IrBalanceCell.style = IrBalanceCellStyle0;

const irBookedByCellCss = ".sc-ir-booked-by-cell-h{box-sizing:border-box !important}.sc-ir-booked-by-cell-h *.sc-ir-booked-by-cell,.sc-ir-booked-by-cell-h *.sc-ir-booked-by-cell::before,.sc-ir-booked-by-cell-h *.sc-ir-booked-by-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-booked-by-cell{display:none !important}.sc-ir-booked-by-cell-h{display:block;font-size:0.93rem}[display='inline'].sc-ir-booked-by-cell-h{display:inline-flex;align-items:center;gap:1rem}.booked-by-source__logo.sc-ir-booked-by-cell{width:1.5625rem}.booked-by-cell__description.sc-ir-booked-by-cell{font-size:0.875rem}.cell-label.sc-ir-booked-by-cell{font-weight:700}.booked-by-source__private-note.sc-ir-booked-by-cell{height:0.5rem;width:0.5rem;border-radius:50%;background:rgb(244, 213, 82);display:inline-flex;padding:0;margin:0}.booked-by-source__container.sc-ir-booked-by-cell{display:flex;align-items:center;gap:0.5rem}";
const IrBookedByCellStyle0 = irBookedByCellCss;

const IrBookedByCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.guestSelected = index.createEvent(this, "guestSelected", 7);
    }
    label;
    cellId;
    display = 'block';
    /**
     * Guest associated with this booking.
     */
    guest;
    /**
     * Unique identifier for this cell. Used for tooltip scoping.
     */
    identifier;
    /**
     * Total number of persons staying (adults + children).
     */
    totalPersons;
    /**
     * Promo key if a promo/coupon was applied.
     */
    promoKey;
    /**
     * Show pink heart icon if guest has repeated bookings.
     */
    showRepeatGuestBadge = false;
    /**
     * Show total persons count (e.g. "3P").
     */
    showPersons = false;
    /**
     * Show yellow dot indicating the booking has a private note.
     */
    showPrivateNoteDot = false;
    /**
     * Show loyalty discount icon (pink heart-outline).
     */
    showLoyaltyIcon = false;
    /**
     * Show promo/coupon icon.
     */
    showPromoIcon = false;
    /**
     * Makes the guest name clickable.
     * Emits `openGuestDetails` when clicked.
     */
    clickableGuest = false;
    /**
     * Emitted when the guest name is clicked.
     * Sends the `identifier` for parent lookup.
     */
    guestSelected;
    handleGuestClick(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.guestSelected.emit(this.identifier);
    }
    render() {
        const repeatGuestBadgeId = `repeat-guest-badge-${this.guest.id}_${this.cellId ?? this.identifier}`;
        const loyaltyBadgeId = `loyalty-badge-${this.guest.id}_${this.cellId ?? this.identifier}`;
        const couponBadgeId = `coupon-badge-${this.guest.id}_${this.cellId ?? this.identifier}`;
        const guest = `${this.guest.first_name} ${this.guest.last_name}`;
        return (index.h(index.Host, { key: '5f6b216712658df5d041c5b536209b3199c38d87' }, this.label && index.h("p", { key: '86b1d7cd12080c12382b4264bfd10c186ade7c3d', class: "cell-label" }, this.label, ":"), index.h("div", { key: '93ed60893d72766184059d67aef74f5c42e73621', class: "booked-by-source__container" }, this.clickableGuest ? (index.h("ir-custom-button", { size: "medium", onClickHandler: this.handleGuestClick.bind(this), variant: "brand", appearance: "plain", link: true }, guest)) : (index.h("p", null, guest)), this.showRepeatGuestBadge && (index.h(index.Fragment, { key: 'dd75e12d4128a82f03d1ee98e513d2f4d03c3906' }, index.h("wa-tooltip", { key: 'ffba07a22cf57f3c05545c8eec0e9e6267ef5164', for: repeatGuestBadgeId }, `${locales_store.locales.entries.Lcz_BookingsNbr}`.replace('%1', this.guest.nbr_confirmed_bookings.toString())), index.h("wa-icon", { key: 'afed225ed346246e9e5290cf4d686499024c0b20', name: "heart", style: { color: '#FB0AAD' }, id: repeatGuestBadgeId }))), this.showPersons && (index.h("p", { key: '2c874f0333e11f4d6e590b30b3433b15794f21e5' }, this.totalPersons, locales_store.locales.entries.Lcz_P)), this.showPrivateNoteDot && index.h("span", { key: 'e1255365fb7cb101b3e028ec7047da3a5fb9bb19', class: "booked-by-source__private-note" })), index.h("div", { key: '3e1f80a5346907c8adcaef975e8d584ffc705776', class: "booked-by-source__container" }, this.showLoyaltyIcon && (index.h(index.Fragment, { key: '82a21bf8a5b8ff6ced78a1229c5b2e882f3b29df' }, index.h("wa-tooltip", { key: 'c0ec654b3c8cddce024635a2fe525e9b5c82fa10', for: loyaltyBadgeId }, locales_store.locales.entries.Lcz_LoyaltyDiscountApplied), index.h("wa-icon", { key: '5d87807310e8a21049e71f4f8fd195635b84aaaf', name: "heart", variant: "regular", style: { color: '#fc6c85' }, id: loyaltyBadgeId }))), this.showPromoIcon && (index.h(index.Fragment, { key: '2a328b0160d0580767c8cb82af3eced92cb286d1' }, index.h("wa-tooltip", { key: 'f87728c847e8870925bcffb897876db2416f112f', for: couponBadgeId }, locales_store.locales.entries.Lcz_Coupon, ": ", this.promoKey), index.h("wa-icon", { key: '9c3ce772ed7e80bd5edf03bf308af3cd137e600d', id: couponBadgeId, name: "ticket" }))))));
    }
};
IrBookedByCell.style = IrBookedByCellStyle0;

const irBookingNumberCellCss = ".sc-ir-booking-number-cell-h{box-sizing:border-box !important}.sc-ir-booking-number-cell-h *.sc-ir-booking-number-cell,.sc-ir-booking-number-cell-h *.sc-ir-booking-number-cell::before,.sc-ir-booking-number-cell-h *.sc-ir-booking-number-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-booking-number-cell{display:none !important}.sc-ir-booking-number-cell-h{display:flex;gap:1rem;align-items:center;font-size:0.93rem}.booking-nbr-cell__channel_nbr.sc-ir-booking-number-cell{font-size:0.75rem;padding:0;margin:0}.booking-nbr-cell__container.sc-ir-booking-number-cell{display:flex;flex-direction:column;align-self:flex-start}.booked-by-source__logo.sc-ir-booking-number-cell{width:1.5625rem;background-color:white}";
const IrBookingNumberCellStyle0 = irBookingNumberCellCss;

const IrBookingNumberCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.openBookingDetails = index.createEvent(this, "openBookingDetails", 7);
    }
    bookingNumber;
    /**
     * Source of the booking (e.g. website, channel).
     */
    source;
    /**
     * Origin metadata containing label + icon used as logo.
     */
    origin;
    channelBookingNumber;
    openBookingDetails;
    render() {
        return (index.h(index.Host, { key: '300fd093ec20fd9606aec88c32c2e54181a0c77d' }, this.channelBookingNumber && index.h("wa-tooltip", { key: '9d6685357b539a2c7880c6f53885b071fc50938d', for: `source-logo__${this.bookingNumber}` }, this.origin.Label), index.h("img", { key: '64fa2ef619a5c642eb8c88ae7b6b97c889642456', class: "booked-by-source__logo", id: `source-logo__${this.bookingNumber}`, src: this.origin.Icon, alt: this.origin.Label }), index.h("div", { key: '94059ff69e1091d201786a3d4c2fca813d4f6d15', class: "booking-nbr-cell__container" }, index.h("div", { key: '0875e126df583f42132d67556bfb055b9cd1e1cd', style: { width: 'fit-content' } }, index.h("ir-custom-button", { key: '8c7a1203c4b05215630acfc05e6bc3cd911dbe1d', size: "medium", onClickHandler: () => this.openBookingDetails.emit(this.bookingNumber), link: true, variant: "brand", appearance: "plain" }, this.bookingNumber)), index.h("p", { key: 'ba929307e668285d52da50ccf48b2c8181145216', class: "booking-nbr-cell__channel_nbr" }, this.channelBookingNumber ? this.channelBookingNumber : this.origin.Label))));
    }
};
IrBookingNumberCell.style = IrBookingNumberCellStyle0;

const irDatesCellCss = ".sc-ir-dates-cell-h{box-sizing:border-box !important}.sc-ir-dates-cell-h *.sc-ir-dates-cell,.sc-ir-dates-cell-h *.sc-ir-dates-cell::before,.sc-ir-dates-cell-h *.sc-ir-dates-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-dates-cell{display:none !important}.sc-ir-dates-cell-h{display:block;font-size:0.93rem}[display='inline'].sc-ir-dates-cell-h{display:inline-flex;align-items:center;justify-content:space-between;gap:1rem}.date-cell__container.sc-ir-dates-cell{display:flex;align-items:center;gap:0.25rem}.date-cell__label.sc-ir-dates-cell{font-weight:700}";
const IrDatesCellStyle0 = irDatesCellCss;

const IrDatesCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    display = 'block';
    checkIn;
    checkOut;
    checkInLabel;
    checkoutLabel;
    overdueCheckin;
    overdueCheckout;
    formatDate(date) {
        return moment.hooks(date, 'YYYY-MM-DD').format('DD MMM YYYY');
    }
    render() {
        return (index.h(index.Host, { key: '3878055edd7556cbb9922911dca50cd51951f1ec' }, index.h("div", { key: '7eaa4c6e706283924500f9bef64595047ddb5e0d', class: "date-cell__container" }, this.checkInLabel && index.h("span", { key: '324cd74ed89af0f913c276e979d453cdb16f397b', class: "date-cell__label" }, this.checkInLabel, ": "), index.h("p", { key: '1a8be26af7e3938d84ac63e889d2aaa5e0b4c9e9', style: { fontWeight: this.overdueCheckin ? 'bold' : 'auto' } }, this.formatDate(this.checkIn))), index.h("div", { key: 'f18d20dd8274dd55cb51d8d3a618906b4222af59', class: "date-cell__container" }, this.checkoutLabel && index.h("span", { key: 'f32b4e0b5d25a882a5e205883957b358d29de03f', class: "date-cell__label" }, this.checkoutLabel, ": "), index.h("p", { key: 'cb3ba279e39b1f4df352559abca951fa5a527e1c', style: { fontWeight: this.overdueCheckout ? 'bold' : 'auto' } }, this.formatDate(this.checkOut)))));
    }
};
IrDatesCell.style = IrDatesCellStyle0;

const irGuestNameCellCss = ".sc-ir-guest-name-cell-h{box-sizing:border-box !important}.sc-ir-guest-name-cell-h *.sc-ir-guest-name-cell,.sc-ir-guest-name-cell-h *.sc-ir-guest-name-cell::before,.sc-ir-guest-name-cell-h *.sc-ir-guest-name-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-guest-name-cell{display:none !important}.sc-ir-guest-name-cell-h{display:block;font-size:0.93rem}";
const IrGuestNameCellStyle0 = irGuestNameCellCss;

const IrGuestNameCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    name;
    render() {
        return (index.h(index.Host, { key: 'b7c26091e368ee233c4271ede95011c0df0c1d10' }, this.name.first_name, " ", this.name.last_name));
    }
};
IrGuestNameCell.style = IrGuestNameCellStyle0;

const irUnitCellCss = ".sc-ir-unit-cell-h{box-sizing:border-box !important}.sc-ir-unit-cell-h *.sc-ir-unit-cell,.sc-ir-unit-cell-h *.sc-ir-unit-cell::before,.sc-ir-unit-cell-h *.sc-ir-unit-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-unit-cell{display:none !important}.sc-ir-unit-cell-h{display:flex;align-items:center;gap:0.5rem;font-size:0.93rem}";
const IrUnitCellStyle0 = irUnitCellCss;

const IrUnitCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    room;
    render() {
        return (index.h(index.Host, { key: '970e02c69389d18235d6b2df859d434c0abb2e6a' }, index.h("p", { key: '23e3940673997812163b24eb3a02243c3ca2e8b3' }, this.room.roomtype.name), this.room.unit && index.h("ir-unit-tag", { key: '1a66f9333cc0dd888684cf35766c1316d5542f18', unit: this.room.unit.name })));
    }
};
IrUnitCell.style = IrUnitCellStyle0;

exports.ir_actions_cell = IrActionsCell;
exports.ir_balance_cell = IrBalanceCell;
exports.ir_booked_by_cell = IrBookedByCell;
exports.ir_booking_number_cell = IrBookingNumberCell;
exports.ir_dates_cell = IrDatesCell;
exports.ir_guest_name_cell = IrGuestNameCell;
exports.ir_unit_cell = IrUnitCell;

//# sourceMappingURL=ir-actions-cell_7.cjs.entry.js.map