'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const calendarData = require('./calendar-data-70bc3b4b.js');
const utils = require('./utils-7364dac0.js');
const moment = require('./moment-1780b03a.js');
const locales_store = require('./locales.store-32782582.js');
require('./index-fbf1fe1d.js');
require('./index-8bb117a0.js');
require('./type-393ac773.js');

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
        return index.h(index.Host, { key: '1dc3f4a96c8496c4cfa943cb1b21c47dcce75843' }, this.buttons.map(button => this.renderButton(button)));
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
        return (index.h(index.Host, { key: 'df5453bee74a833b45dde48c009b0ba2232c6882' }, this.label && index.h("p", { key: '1cd6781e6bc78dc6d19e83369652dfe47c0a4517', class: "cell-label" }, this.label, ":"), this.removeBalance && this.financial.due_amount !== 0 ? null : (index.h("p", { class: "ir-price", style: { fontWeight: '400' } }, utils.formatAmount(this.currencySymbol, this.removeBalance ? 0 : this.financial.gross_total))), index.h("div", { key: '84ec6b6d4ffb970d5c4409418765e008bbb547fb', class: "balance_button-container" }, ['003', '004'].includes(this.statusCode) && this.isDirect
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
                }, style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "small", variant: "danger", appearance: "outlined" }, utils.formatAmount(this.currencySymbol, this.financial.due_amount))))));
    }
};
IrBalanceCell.style = IrBalanceCellStyle0;

const irBookedByCellCss = ".sc-ir-booked-by-cell-h{box-sizing:border-box !important}.sc-ir-booked-by-cell-h *.sc-ir-booked-by-cell,.sc-ir-booked-by-cell-h *.sc-ir-booked-by-cell::before,.sc-ir-booked-by-cell-h *.sc-ir-booked-by-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-booked-by-cell{display:none !important}.sc-ir-booked-by-cell-h{display:block;font-size:0.93rem}[display='inline'].sc-ir-booked-by-cell-h{display:inline-flex;align-items:center;gap:1rem}.booked-by-source__logo.sc-ir-booked-by-cell{width:1.5625rem}.booked-by-cell__description.sc-ir-booked-by-cell{font-size:0.875rem}.cell-label.sc-ir-booked-by-cell{font-weight:700}.booked-by-source__private-note.sc-ir-booked-by-cell{height:0.5rem;width:0.5rem;border-radius:50%;background:rgb(244, 213, 82);display:inline-flex;padding:0;margin:0}.booked-by-source__container.sc-ir-booked-by-cell{display:flex;align-items:center;gap:0.5rem}.booked-by-cell__button.sc-ir-booked-by-cell:focus{outline:none}.booked-by-cell__button.sc-ir-booked-by-cell:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}.booked-by-cell__button.sc-ir-booked-by-cell{display:inline-flex;align-items:center;justify-content:center;height:fit-content;padding:0;font-family:inherit;font-size:var(--wa-form-control-value-font-size);font-weight:var(--wa-font-weight-action);line-height:calc(var(--wa-form-control-height) - var(--border-width) * 2);text-decoration:none;vertical-align:middle;white-space:nowrap;border-style:var(--wa-border-style);border-width:max(1px, var(--wa-form-control-border-width));border-radius:var(--wa-form-control-border-radius);transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing);cursor:pointer;user-select:none;-webkit-user-select:none;color:var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));background-color:transparent;border-color:transparent}.booked-by-cell__button.sc-ir-booked-by-cell:hover{color:var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-brand-fill-quiet))}.booked-by-cell__button.sc-ir-booked-by-cell:active{color:var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-brand-fill-quiet)), var(--wa-color-mix-active))}";
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
        return (index.h(index.Host, { key: '4e576e13560681fe8e378fa7ac922404c9109b4f' }, this.label && index.h("p", { key: 'c498d70515252ceb967618f6a64f5d121b36703d', class: "cell-label" }, this.label, ":"), index.h("div", { key: '6c435567079ac44c08e5654737228a96316435f6', class: "booked-by-source__container" }, this.clickableGuest ? (index.h("button", { class: "booked-by-cell__button", onClick: this.handleGuestClick.bind(this) }, guest)) : (index.h("p", null, guest)), this.showRepeatGuestBadge && (index.h(index.Fragment, { key: '486058a758f11e6abf0bd1851573085128ffb1c5' }, index.h("wa-tooltip", { key: '663d99985e85337d7302fb02c9e7cbbc5bc8eb72', for: repeatGuestBadgeId }, `${locales_store.locales.entries.Lcz_BookingsNbr}`.replace('%1', this.guest.nbr_confirmed_bookings.toString())), index.h("wa-icon", { key: '8ca26287a8e354621cf9af9ea8e303c9c0badc8f', name: "heart", style: { color: '#FB0AAD' }, id: repeatGuestBadgeId }))), this.showPersons && (index.h("p", { key: '14dab95f04f2fdfc018c082e76a9dcc403881900' }, this.totalPersons, locales_store.locales.entries.Lcz_P)), this.showPrivateNoteDot && index.h("span", { key: 'd2591a1994f197142cf4ea829b5b4b9a5d757e8d', class: "booked-by-source__private-note" })), index.h("div", { key: 'c18c733fc0f2ee051a2bd8baf6e17d899b68ec2f', class: "booked-by-source__container" }, this.showLoyaltyIcon && (index.h(index.Fragment, { key: '4e586e3ed22a458aa877b4f613e61556d745984d' }, index.h("wa-tooltip", { key: 'bc8e5b40f71d1d51647574425695772b4fc74ad9', for: loyaltyBadgeId }, locales_store.locales.entries.Lcz_LoyaltyDiscountApplied), index.h("wa-icon", { key: '63bbf743b037329aab30a390ade38a483d157d22', name: "heart", variant: "regular", style: { color: '#fc6c85' }, id: loyaltyBadgeId }))), this.showPromoIcon && (index.h(index.Fragment, { key: '5178af7c242cee2c9c32d12a9554ed16c4c81115' }, index.h("wa-tooltip", { key: '47407f07757790d1f723baf3cfa6a07269d5bf4f', for: couponBadgeId }, locales_store.locales.entries.Lcz_Coupon, ": ", this.promoKey), index.h("wa-icon", { key: 'ac32d6ff55f789f225e0bd2ab7cf6dc2ef28a9f6', id: couponBadgeId, name: "ticket" }))))));
    }
};
IrBookedByCell.style = IrBookedByCellStyle0;

const irBookingNumberCellCss = ".sc-ir-booking-number-cell-h{box-sizing:border-box !important}.sc-ir-booking-number-cell-h *.sc-ir-booking-number-cell,.sc-ir-booking-number-cell-h *.sc-ir-booking-number-cell::before,.sc-ir-booking-number-cell-h *.sc-ir-booking-number-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-booking-number-cell{display:none !important}.sc-ir-booking-number-cell-h{display:flex;gap:1rem;align-items:center;font-size:0.93rem}.booking-nbr-cell__channel_nbr.sc-ir-booking-number-cell{font-size:0.75rem;padding:0;margin:0}.booking-nbr-cell__container.sc-ir-booking-number-cell{display:flex;flex-direction:column;align-self:flex-start}.booked-by-source__logo.sc-ir-booking-number-cell{width:1.5625rem;background-color:white}.booking-nbr-cell__button.sc-ir-booking-number-cell:focus{outline:none}.booking-nbr-cell__button.sc-ir-booking-number-cell:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}.booking-nbr-cell__button.sc-ir-booking-number-cell{display:inline-flex;align-items:center;justify-content:center;height:fit-content;padding:0;font-family:inherit;font-size:var(--wa-form-control-value-font-size);font-weight:var(--wa-font-weight-action);line-height:calc(var(--wa-form-control-height) - var(--border-width) * 2);text-decoration:none;vertical-align:middle;white-space:nowrap;border-style:var(--wa-border-style);border-width:max(1px, var(--wa-form-control-border-width));border-radius:var(--wa-form-control-border-radius);transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing);cursor:pointer;user-select:none;-webkit-user-select:none;color:var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));background-color:transparent;border-color:transparent}.booking-nbr-cell__button.sc-ir-booking-number-cell:hover{color:var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-brand-fill-quiet))}.booking-nbr-cell__button.sc-ir-booking-number-cell:active{color:var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-brand-fill-quiet)), var(--wa-color-mix-active))}";
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
        return (index.h(index.Host, { key: '2316a11a41afd8fe900b62fa973ee084c86eed74' }, this.channelBookingNumber && index.h("wa-tooltip", { key: 'f058d9e004681995692b378324fdaea569a6a11e', for: `source-logo__${this.bookingNumber}` }, this.origin.Label), index.h("img", { key: 'e20b042cc4b532d2f293c035cd477439ed822681', class: "booked-by-source__logo", id: `source-logo__${this.bookingNumber}`, src: this.origin.Icon, alt: this.origin.Label }), index.h("div", { key: '4fd773d499a8975ca5bafa8f09f16d772bd6a31b', class: "booking-nbr-cell__container" }, index.h("div", { key: '9691bd92a9598c15a5bae2543caa5976fe354e6a', style: { width: 'fit-content' } }, index.h("button", { key: 'b5a3aa623d452d616587d99a80d7dd5b7782887a', class: "booking-nbr-cell__button", onClick: () => this.openBookingDetails.emit(this.bookingNumber) }, this.bookingNumber)), index.h("p", { key: '35c21c45122804e212976de4cdc4f738c8e56b01', class: "booking-nbr-cell__channel_nbr" }, this.channelBookingNumber ? this.channelBookingNumber : this.origin.Label))));
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
        return (index.h(index.Host, { key: 'c53f97ab0c3e61ff9d781330fc16cf82476c86c6' }, index.h("div", { key: 'a0b863e111c982dc55719d058c0768cb32016c5a', class: "date-cell__container" }, this.checkInLabel && index.h("span", { key: 'dd8b6839bc7de7a8589f11ce768d421cf8512240', class: "date-cell__label" }, this.checkInLabel, ": "), index.h("p", { key: '1a6891dfe0cb9c3c4dc0bf52f2c4f7eaca17110c', style: { fontWeight: this.overdueCheckin ? 'bold' : 'auto' } }, this.formatDate(this.checkIn))), index.h("div", { key: '39e7e301b9fb27847efb4fd946119e6644f9ae98', class: "date-cell__container" }, this.checkoutLabel && index.h("span", { key: 'ee1905433c9b92fe644a320f40c852750f92f2f3', class: "date-cell__label" }, this.checkoutLabel, ": "), index.h("p", { key: '7d0c5a6dbd1b3786c3b173720863a5b18e557dab', style: { fontWeight: this.overdueCheckout ? 'bold' : 'auto' } }, this.formatDate(this.checkOut)))));
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
        return (index.h(index.Host, { key: '629d4d84a9d4b0d90dfdedef39373871433a139f' }, this.name.first_name, " ", this.name.last_name));
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
    showDeparture = false;
    render() {
        return (index.h(index.Host, { key: '9a27ec4480564b147d997af50f36dc95f65bf521' }, index.h("p", { key: 'f8c4bd5c2321530d8b4f373ab63f5d5e1c5e19c5' }, this.room.roomtype.name), this.room.unit && index.h("ir-unit-tag", { key: '98ecbd8671b740b748315b764b9ef31887b9d33e', unit: this.room.unit.name }), this.showDeparture && this.room?.departure_time?.description && index.h("span", { key: 'b8f21cd7389d64fc4d47f4b8a312be9b573ee7a0' }, this.room?.departure_time?.description)));
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