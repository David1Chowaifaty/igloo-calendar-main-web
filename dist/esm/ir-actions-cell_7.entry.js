import { r as registerInstance, c as createEvent, h, H as Host, F as Fragment } from './index-b3dce66a.js';
import { c as calendar_data } from './calendar-data-8a36a1b2.js';
import { f as formatAmount } from './utils-75858065.js';
import { h as hooks } from './moment-ab846cee.js';
import { l as locales } from './locales.store-f4150353.js';
import './index-a124d225.js';
import './index-1e1f097b.js';

const irActionsCellCss = ".sc-ir-actions-cell-h{box-sizing:border-box !important}.sc-ir-actions-cell-h *.sc-ir-actions-cell,.sc-ir-actions-cell-h *.sc-ir-actions-cell::before,.sc-ir-actions-cell-h *.sc-ir-actions-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-actions-cell{display:none !important}.sc-ir-actions-cell-h{display:flex;justify-content:flex-end}";
const IrActionsCellStyle0 = irActionsCellCss;

const IrActionsCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.irAction = createEvent(this, "irAction", 7);
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
        return h(Host, { key: '1c58c46599d31a3db75481fe76b8a48e1f84f573' }, this.buttons.map(button => this.renderButton(button)));
    }
};
IrActionsCell.style = IrActionsCellStyle0;

const irBalanceCellCss = ".sc-ir-balance-cell-h{box-sizing:border-box !important}.sc-ir-balance-cell-h *.sc-ir-balance-cell,.sc-ir-balance-cell-h *.sc-ir-balance-cell::before,.sc-ir-balance-cell-h *.sc-ir-balance-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-balance-cell{display:none !important}.sc-ir-balance-cell-h{display:flex;flex-direction:column;align-items:center;font-size:0.93rem}[display='inline'].sc-ir-balance-cell-h{display:flex;flex-direction:row;gap:0.5rem}.cell-label.sc-ir-balance-cell{font-weight:700}.balance_button-container.sc-ir-balance-cell{display:flex;align-items:center;justify-content:flex-end}";
const IrBalanceCellStyle0 = irBalanceCellCss;

const IrBalanceCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.payBookingBalance = createEvent(this, "payBookingBalance", 7);
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
        return (h(Host, { key: '7eedefb15997dc7cbecea425578b1d6965fc7dda' }, this.label && h("p", { key: 'd23bb22a20626af21929ff0b2e4a8464833616e3', class: "cell-label" }, this.label, ":"), this.removeBalance && this.financial.due_amount !== 0 ? null : (h("p", { class: "ir-price", style: { fontWeight: '400' } }, formatAmount(this.currencySymbol, this.removeBalance ? 0 : this.financial.gross_total))), h("div", { key: '92c288d2ce2f52c76017f06da56c3ba7fb128cb9', class: "balance_button-container" }, ['003', '004'].includes(this.statusCode) && this.isDirect
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
                }, style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "small", variant: "danger", appearance: "outlined" }, h("span", null, this.financial.cancelation_penality_as_if_today < 0 ? 'Refund' : 'Charge', " "), formatAmount(this.currencySymbol, Math.abs(this.financial.cancelation_penality_as_if_today))))
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
                }, style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "small", variant: "danger", appearance: "outlined" }, formatAmount(this.currencySymbol, this.financial.due_amount))))));
    }
};
IrBalanceCell.style = IrBalanceCellStyle0;

const irBookedByCellCss = ".sc-ir-booked-by-cell-h{box-sizing:border-box !important}.sc-ir-booked-by-cell-h *.sc-ir-booked-by-cell,.sc-ir-booked-by-cell-h *.sc-ir-booked-by-cell::before,.sc-ir-booked-by-cell-h *.sc-ir-booked-by-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-booked-by-cell{display:none !important}.sc-ir-booked-by-cell-h{display:block;font-size:0.93rem}[display='inline'].sc-ir-booked-by-cell-h{display:inline-flex;align-items:center;gap:1rem}.booked-by-source__logo.sc-ir-booked-by-cell{width:1.5625rem}.booked-by-cell__description.sc-ir-booked-by-cell{font-size:0.875rem}.cell-label.sc-ir-booked-by-cell{font-weight:700}.booked-by-source__private-note.sc-ir-booked-by-cell{height:0.5rem;width:0.5rem;border-radius:50%;background:rgb(244, 213, 82);display:inline-flex;padding:0;margin:0}.booked-by-source__container.sc-ir-booked-by-cell{display:flex;align-items:center;gap:0.5rem}.booked-by-cell__button.sc-ir-booked-by-cell:focus{outline:none}.booked-by-cell__button.sc-ir-booked-by-cell:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}.booked-by-cell__button.sc-ir-booked-by-cell{display:inline-flex;align-items:center;justify-content:center;height:fit-content;padding:0;font-family:inherit;font-size:var(--wa-form-control-value-font-size);font-weight:var(--wa-font-weight-action);line-height:calc(var(--wa-form-control-height) - var(--border-width) * 2);text-decoration:none;vertical-align:middle;white-space:nowrap;border-style:var(--wa-border-style);border-width:max(1px, var(--wa-form-control-border-width));border-radius:var(--wa-form-control-border-radius);transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing);cursor:pointer;user-select:none;-webkit-user-select:none;color:var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));background-color:transparent;border-color:transparent}.booked-by-cell__button.sc-ir-booked-by-cell:hover{color:var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-brand-fill-quiet))}.booked-by-cell__button.sc-ir-booked-by-cell:active{color:var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-brand-fill-quiet)), var(--wa-color-mix-active))}";
const IrBookedByCellStyle0 = irBookedByCellCss;

const IrBookedByCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.guestSelected = createEvent(this, "guestSelected", 7);
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
        return (h(Host, { key: 'e66326ba9bce84a3aeba4fac97315c3f887e4d7c' }, this.label && h("p", { key: 'b51c0d48eb4b8b7be91f7c55214360d2e6887563', class: "cell-label" }, this.label, ":"), h("div", { key: 'f246d08779c2844f982bd493873348523955f633', class: "booked-by-source__container" }, this.clickableGuest ? (h("button", { class: "booked-by-cell__button", onClick: this.handleGuestClick.bind(this) }, guest)) : (h("p", null, guest)), this.showRepeatGuestBadge && (h(Fragment, { key: 'f96c02463e473950c08815e20930e3b6f9b29540' }, h("wa-tooltip", { key: 'c82d315292f10e918a9a6f3cd2d5cf999579ac5f', for: repeatGuestBadgeId }, `${locales.entries.Lcz_BookingsNbr}`.replace('%1', this.guest.nbr_confirmed_bookings.toString())), h("wa-icon", { key: '40465c66d927b75e57329c223845bdd287331e59', name: "heart", style: { color: '#FB0AAD' }, id: repeatGuestBadgeId }))), this.showPersons && (h("p", { key: '8668ec67ff4fb6f4a3f017904264836886ac5bec' }, this.totalPersons, locales.entries.Lcz_P)), this.showPrivateNoteDot && h("span", { key: '95f74f705a1eda800c2752203ecded06e59e5fca', class: "booked-by-source__private-note" })), h("div", { key: 'acdb367fa2954da384a64a24046cfa18d201ed58', class: "booked-by-source__container" }, this.showLoyaltyIcon && (h(Fragment, { key: '8230de1b73f806b29df08023d1c82e5ebdb26e46' }, h("wa-tooltip", { key: '5d067abae6d1c77b9bc19c9c0f2f8c0f9be8ceef', for: loyaltyBadgeId }, locales.entries.Lcz_LoyaltyDiscountApplied), h("wa-icon", { key: '90fd23d21b093c873cfcdb5951191da66ec582df', name: "heart", variant: "regular", style: { color: '#fc6c85' }, id: loyaltyBadgeId }))), this.showPromoIcon && (h(Fragment, { key: '69f42efac61a3908b1e0e625c57ed310b4c47ed5' }, h("wa-tooltip", { key: 'ff07e688c5d220a3b4721b7c81cd866ca489d46e', for: couponBadgeId }, locales.entries.Lcz_Coupon, ": ", this.promoKey), h("wa-icon", { key: 'dc33741d6f5e6fbf879f2c778d8c50fd025dfe81', id: couponBadgeId, name: "ticket" }))))));
    }
};
IrBookedByCell.style = IrBookedByCellStyle0;

const irBookingNumberCellCss = ".sc-ir-booking-number-cell-h{box-sizing:border-box !important}.sc-ir-booking-number-cell-h *.sc-ir-booking-number-cell,.sc-ir-booking-number-cell-h *.sc-ir-booking-number-cell::before,.sc-ir-booking-number-cell-h *.sc-ir-booking-number-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-booking-number-cell{display:none !important}.sc-ir-booking-number-cell-h{display:flex;gap:1rem;align-items:center;font-size:0.93rem}.booking-nbr-cell__channel_nbr.sc-ir-booking-number-cell{font-size:0.75rem;padding:0;margin:0}.booking-nbr-cell__container.sc-ir-booking-number-cell{display:flex;flex-direction:column;align-self:flex-start}.booked-by-source__logo.sc-ir-booking-number-cell{width:1.5625rem;background-color:white}.booking-nbr-cell__button.sc-ir-booking-number-cell:focus{outline:none}.booking-nbr-cell__button.sc-ir-booking-number-cell:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}.booking-nbr-cell__button.sc-ir-booking-number-cell{display:inline-flex;align-items:center;justify-content:center;height:fit-content;padding:0;font-family:inherit;font-size:var(--wa-form-control-value-font-size);font-weight:var(--wa-font-weight-action);line-height:calc(var(--wa-form-control-height) - var(--border-width) * 2);text-decoration:none;vertical-align:middle;white-space:nowrap;border-style:var(--wa-border-style);border-width:max(1px, var(--wa-form-control-border-width));border-radius:var(--wa-form-control-border-radius);transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing);cursor:pointer;user-select:none;-webkit-user-select:none;color:var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));background-color:transparent;border-color:transparent}.booking-nbr-cell__button.sc-ir-booking-number-cell:hover{color:var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-brand-fill-quiet))}.booking-nbr-cell__button.sc-ir-booking-number-cell:active{color:var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-brand-fill-quiet)), var(--wa-color-mix-active))}";
const IrBookingNumberCellStyle0 = irBookingNumberCellCss;

const IrBookingNumberCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.openBookingDetails = createEvent(this, "openBookingDetails", 7);
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
        return (h(Host, { key: 'bdd34d908ab3ee83a9534cbaa02f4f5795f5041c' }, this.channelBookingNumber && h("wa-tooltip", { key: 'c8ab068625999f447a51bd54c53637033b1dcec6', for: `source-logo__${this.bookingNumber}` }, this.origin.Label), h("img", { key: '7770c70ba3c8cd061c605dd78a9baa93af3605e2', class: "booked-by-source__logo", id: `source-logo__${this.bookingNumber}`, src: this.origin.Icon, alt: this.origin.Label }), h("div", { key: 'fa0dc08b7b2dad48335b2420e995c88541789c4f', class: "booking-nbr-cell__container" }, h("div", { key: 'a7b9940db797fbebab0f06dadb575a572c57a8b5', style: { width: 'fit-content' } }, h("button", { key: 'c5016aeea4d6f0189f90f832bb36b77d4bf3a47c', class: "booking-nbr-cell__button", onClick: () => this.openBookingDetails.emit(this.bookingNumber) }, this.bookingNumber)), h("p", { key: '73a7e9ab6874db07b403cc02fcf1f32b5f84bbdf', class: "booking-nbr-cell__channel_nbr" }, this.channelBookingNumber ? this.channelBookingNumber : this.origin.Label))));
    }
};
IrBookingNumberCell.style = IrBookingNumberCellStyle0;

const irDatesCellCss = ".sc-ir-dates-cell-h{box-sizing:border-box !important}.sc-ir-dates-cell-h *.sc-ir-dates-cell,.sc-ir-dates-cell-h *.sc-ir-dates-cell::before,.sc-ir-dates-cell-h *.sc-ir-dates-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-dates-cell{display:none !important}.sc-ir-dates-cell-h{display:block;font-size:0.93rem}[display='inline'].sc-ir-dates-cell-h{display:inline-flex;align-items:center;justify-content:space-between;gap:1rem}.date-cell__container.sc-ir-dates-cell{display:flex;align-items:center;gap:0.25rem}.date-cell__label.sc-ir-dates-cell{font-weight:700}";
const IrDatesCellStyle0 = irDatesCellCss;

const IrDatesCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    display = 'block';
    checkIn;
    checkOut;
    checkInLabel;
    checkoutLabel;
    overdueCheckin;
    overdueCheckout;
    formatDate(date) {
        return hooks(date, 'YYYY-MM-DD').format('DD MMM YYYY');
    }
    render() {
        return (h(Host, { key: '1b21ecf1c04b92bdbc3f823c0b4786f07124f19c' }, h("div", { key: '632d12e6c9c32c923ed73f6aff9045b403c7d7c0', class: "date-cell__container" }, this.checkInLabel && h("span", { key: '67953cf12535319a864e3b77cabd2d4106cd9e94', class: "date-cell__label" }, this.checkInLabel, ": "), h("p", { key: '45a72085a153649ab7fb9c480c98ed0b5166386d', style: { fontWeight: this.overdueCheckin ? 'bold' : 'auto' } }, this.formatDate(this.checkIn))), h("div", { key: '95fe913c915489c1c08fd6e476d17563b11be256', class: "date-cell__container" }, this.checkoutLabel && h("span", { key: 'b1996921683cf5a8eb1584152e1a225b4f892f71', class: "date-cell__label" }, this.checkoutLabel, ": "), h("p", { key: 'bce0aca022e7c62d606ff72ee51eda51e92cea62', style: { fontWeight: this.overdueCheckout ? 'bold' : 'auto' } }, this.formatDate(this.checkOut)))));
    }
};
IrDatesCell.style = IrDatesCellStyle0;

const irGuestNameCellCss = ".sc-ir-guest-name-cell-h{box-sizing:border-box !important}.sc-ir-guest-name-cell-h *.sc-ir-guest-name-cell,.sc-ir-guest-name-cell-h *.sc-ir-guest-name-cell::before,.sc-ir-guest-name-cell-h *.sc-ir-guest-name-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-guest-name-cell{display:none !important}.sc-ir-guest-name-cell-h{display:block;font-size:0.93rem}";
const IrGuestNameCellStyle0 = irGuestNameCellCss;

const IrGuestNameCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    name;
    render() {
        return (h(Host, { key: '323d4eb564e16be41f66ff1d237b0fe381e381e3' }, this.name.first_name, " ", this.name.last_name));
    }
};
IrGuestNameCell.style = IrGuestNameCellStyle0;

const irUnitCellCss = ".sc-ir-unit-cell-h{box-sizing:border-box !important}.sc-ir-unit-cell-h *.sc-ir-unit-cell,.sc-ir-unit-cell-h *.sc-ir-unit-cell::before,.sc-ir-unit-cell-h *.sc-ir-unit-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-unit-cell{display:none !important}.sc-ir-unit-cell-h{display:flex;align-items:center;gap:0.5rem;font-size:0.93rem}";
const IrUnitCellStyle0 = irUnitCellCss;

const IrUnitCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    room;
    render() {
        return (h(Host, { key: '26eaf531b10ac1478ab6edfd76f9a16eeb4702be' }, h("p", { key: '9e09d538b3bf36118a5e65e48d755923d0b3fdc7' }, this.room.roomtype.name), this.room.unit && h("ir-unit-tag", { key: 'c1c8a4daea62dd2327e78f5cf9e7eb6d57e8bcbe', unit: this.room.unit.name })));
    }
};
IrUnitCell.style = IrUnitCellStyle0;

export { IrActionsCell as ir_actions_cell, IrBalanceCell as ir_balance_cell, IrBookedByCell as ir_booked_by_cell, IrBookingNumberCell as ir_booking_number_cell, IrDatesCell as ir_dates_cell, IrGuestNameCell as ir_guest_name_cell, IrUnitCell as ir_unit_cell };

//# sourceMappingURL=ir-actions-cell_7.entry.js.map