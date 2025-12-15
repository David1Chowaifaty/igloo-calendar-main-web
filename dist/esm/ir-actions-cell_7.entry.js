import { r as registerInstance, c as createEvent, h, H as Host, F as Fragment } from './index-b3dce66a.js';
import { c as calendar_data } from './calendar-data-8a36a1b2.js';
import { f as formatAmount } from './utils-74b435e5.js';
import { h as hooks } from './moment-ab846cee.js';
import { l as locales } from './locales.store-f4150353.js';
import './index-a124d225.js';
import './index-1e1f097b.js';
import './axios-aa1335b8.js';

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
        return h(Host, { key: '109d238e40d993d7cd814a69b5f620d1b67c9dfd' }, this.buttons.map(button => this.renderButton(button)));
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
    payBookingBalance;
    render() {
        return (h(Host, { key: '4f9a23d9d628185a4fb0384afc326a7f309d83b2' }, this.label && h("p", { key: 'b8fec0e1af877be02dc9607b6298468a6eb09489', class: "cell-label" }, this.label, ":"), h("p", { key: 'c71dfed5f434f21c58554ef724ec93f30610b4d0', class: "ir-price" }, formatAmount(this.currencySymbol, this.financial.gross_total)), h("div", { key: 'e49b0804f89b1f2205072b2693ecdeae87f0f344', class: "balance_button-container" }, ['003', '004'].includes(this.statusCode) && this.isDirect
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
                            amount: this.financial.due_amount,
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

const irBookedByCellCss = ".sc-ir-booked-by-cell-h{box-sizing:border-box !important}.sc-ir-booked-by-cell-h *.sc-ir-booked-by-cell,.sc-ir-booked-by-cell-h *.sc-ir-booked-by-cell::before,.sc-ir-booked-by-cell-h *.sc-ir-booked-by-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-booked-by-cell{display:none !important}.sc-ir-booked-by-cell-h{display:block;font-size:0.93rem}[display='inline'].sc-ir-booked-by-cell-h{display:inline-flex;align-items:center;gap:1rem}.booked-by-source__logo.sc-ir-booked-by-cell{width:1.5625rem}.booked-by-cell__description.sc-ir-booked-by-cell{font-size:0.875rem}.cell-label.sc-ir-booked-by-cell{font-weight:700}.booked-by-source__private-note.sc-ir-booked-by-cell{height:0.5rem;width:0.5rem;border-radius:50%;background:rgb(244, 213, 82);display:inline-flex;padding:0;margin:0}.booked-by-source__container.sc-ir-booked-by-cell{display:flex;align-items:center;gap:0.5rem}";
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
        return (h(Host, { key: 'a7da181b93f38a26ecf0051bbbda43e315c45796' }, this.label && h("p", { key: 'bd894a37a4b626f1404453017fc7e8c905788fcd', class: "cell-label" }, this.label, ":"), h("div", { key: '6691810031d0b11990d6e61e61b1e8ca20c6994f', class: "booked-by-source__container" }, this.clickableGuest ? (h("ir-custom-button", { size: "medium", onClickHandler: this.handleGuestClick.bind(this), variant: "brand", appearance: "plain", link: true }, guest)) : (h("p", null, guest)), this.showRepeatGuestBadge && (h(Fragment, { key: 'e75b539c4c69755f818714fea7de73d1edc6c87b' }, h("wa-tooltip", { key: 'e654bfe3c0216b8216609eec4084aec2ec0355dc', for: repeatGuestBadgeId }, `${locales.entries.Lcz_BookingsNbr}`.replace('%1', this.guest.nbr_confirmed_bookings.toString())), h("wa-icon", { key: 'fe15de6c3ed4015dc89522b8ed3706555bc8e365', name: "heart", style: { color: '#FB0AAD' }, id: repeatGuestBadgeId }))), this.showPersons && (h("p", { key: '749aae8bdc5dfe662dc1583450afc55bcbe5211a' }, this.totalPersons, locales.entries.Lcz_P)), this.showPrivateNoteDot && h("span", { key: '6a2b32712911e400d1d9312cee53bf4e4840a2eb', class: "booked-by-source__private-note" })), h("div", { key: 'f011f3d71d05ff2fdfb6c325cc951e590cb1d826', class: "booked-by-source__container" }, this.showLoyaltyIcon && (h(Fragment, { key: '36ad2f9f3fd42c1f81ef9a0ca7fc2ff7b5bad424' }, h("wa-tooltip", { key: '6a58fdbbceb7b29856d87fa686acb6da5e08e7e1', for: loyaltyBadgeId }, locales.entries.Lcz_LoyaltyDiscountApplied), h("wa-icon", { key: 'a1742f846ca554fc4daadc481f7d9362535a2a60', name: "heart", variant: "regular", style: { color: '#fc6c85' }, id: loyaltyBadgeId }))), this.showPromoIcon && (h(Fragment, { key: 'a1f155bd2fd18e812130d8c6d661d3c9b0ae8b21' }, h("wa-tooltip", { key: 'f94db10ed0dc7f98013cf34ab8b4e89066ece45c', for: couponBadgeId }, locales.entries.Lcz_Coupon, ": ", this.promoKey), h("wa-icon", { key: 'e90a7e78a86b4c99a25781a69b5d05d3696d3d81', id: couponBadgeId, name: "ticket" }))))));
    }
};
IrBookedByCell.style = IrBookedByCellStyle0;

const irBookingNumberCellCss = ".sc-ir-booking-number-cell-h{box-sizing:border-box !important}.sc-ir-booking-number-cell-h *.sc-ir-booking-number-cell,.sc-ir-booking-number-cell-h *.sc-ir-booking-number-cell::before,.sc-ir-booking-number-cell-h *.sc-ir-booking-number-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-booking-number-cell{display:none !important}.sc-ir-booking-number-cell-h{display:flex;gap:1rem;align-items:center;font-size:0.93rem}.booking-nbr-cell__channel_nbr.sc-ir-booking-number-cell{font-size:0.75rem;padding:0;margin:0}.booking-nbr-cell__container.sc-ir-booking-number-cell{display:flex;flex-direction:column;align-self:flex-start}.booked-by-source__logo.sc-ir-booking-number-cell{width:1.5625rem;background-color:white}";
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
        return (h(Host, { key: '8d5e589668d320d2eeaef140866bd23dac17c870' }, this.channelBookingNumber && h("wa-tooltip", { key: 'd69686418330a3fa672f5ff58fa521b31fdf78ea', for: `source-logo__${this.bookingNumber}` }, this.origin.Label), h("img", { key: '33a3a11582ae993765e27e7a36acc9550c520e5a', class: "booked-by-source__logo", id: `source-logo__${this.bookingNumber}`, src: this.origin.Icon, alt: this.origin.Label }), h("div", { key: '177d90a185d98a2e6fdb4421c33adcd7e913602a', class: "booking-nbr-cell__container" }, h("div", { key: 'aa18a485329bc04346436f186f4c3c6eb96c3eaf', style: { width: 'fit-content' } }, h("ir-custom-button", { key: '2b5a990cac08513268db8bda66d1431fed3ea347', size: "medium", onClickHandler: () => this.openBookingDetails.emit(this.bookingNumber), link: true, variant: "brand", appearance: "plain" }, this.bookingNumber)), h("p", { key: 'dd96aac37f7ee66635700b9997b11afee692e3c0', class: "booking-nbr-cell__channel_nbr" }, this.channelBookingNumber ? this.channelBookingNumber : this.origin.Label))));
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
        return (h(Host, { key: 'd86023e3d99d712f32a87c8f90617190a1d56172' }, h("div", { key: '41a3fb5f3829d37bf69a32a05a6f76b0b7ee9714', class: "date-cell__container" }, this.checkInLabel && h("span", { key: '2d03bfd666d7d70e806ffaa58a17015b75a25cc0', class: "date-cell__label" }, this.checkInLabel, ": "), h("p", { key: '55da509ef28be91f53385d916284acc3cd0fb4eb', style: { fontWeight: this.overdueCheckin ? 'bold' : 'auto' } }, this.formatDate(this.checkIn))), h("div", { key: '962ad3f270f369f00d38783289b9f5479497acbe', class: "date-cell__container" }, this.checkoutLabel && h("span", { key: 'a5168bbd6c553be7328dd8b8edf02702005148fd', class: "date-cell__label" }, this.checkoutLabel, ": "), h("p", { key: '46a9887656e8afea9914cb7cd7523f7a5983cc68', style: { fontWeight: this.overdueCheckout ? 'bold' : 'auto' } }, this.formatDate(this.checkOut)))));
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
        return (h(Host, { key: 'a30355df08a4d48448e4be70dfb5586601defb6d' }, this.name.first_name, " ", this.name.last_name));
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
        return (h(Host, { key: '9b63dfba11934608ae10fd0ae922bd869fe2ea36' }, h("p", { key: 'c10da448b217dc954978629c56ed2320898d112c' }, this.room.roomtype.name), this.room.unit && h("ir-unit-tag", { key: '95fe9292b6ea0eb1c605dcf51d73e26645cd0373', unit: this.room.unit.name })));
    }
};
IrUnitCell.style = IrUnitCellStyle0;

export { IrActionsCell as ir_actions_cell, IrBalanceCell as ir_balance_cell, IrBookedByCell as ir_booked_by_cell, IrBookingNumberCell as ir_booking_number_cell, IrDatesCell as ir_dates_cell, IrGuestNameCell as ir_guest_name_cell, IrUnitCell as ir_unit_cell };

//# sourceMappingURL=ir-actions-cell_7.entry.js.map