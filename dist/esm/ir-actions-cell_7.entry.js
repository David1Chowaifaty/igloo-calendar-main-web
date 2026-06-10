import { r as registerInstance, c as createEvent, h, H as Host, F as Fragment } from './index-7e96440e.js';
import { c as calendar_data } from './calendar-data-b1f645da.js';
import { f as formatAmount } from './utils-e8aa1a47.js';
import { h as hooks } from './moment-ab846cee.js';
import { l as locales } from './locales.store-cb784e95.js';
import './index-f100e9d2.js';
import './index-87419685.js';
import './type-501de9b6.js';

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
        return h(Host, { key: '7335002522bd2fee39ebf5b52522fbb5df656477' }, this.buttons.map(button => this.renderButton(button)));
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
        return (h(Host, { key: 'c0048c3afa8930df5e6f3f1e778f170b49585c6f' }, this.label && h("p", { key: 'ca5d21e2b67bf780762b49dc7343fd217e4ce7fc', class: "cell-label" }, this.label, ":"), this.removeBalance && this.financial.due_amount !== 0 ? null : (h("p", { class: "ir-price", style: { fontWeight: '400' } }, formatAmount(this.currencySymbol, this.removeBalance ? 0 : this.financial.gross_total))), h("div", { key: '67133e11d66930f1de177999f6150058fab9b657', class: "balance_button-container" }, ['003', '004'].includes(this.statusCode) && this.isDirect
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
                }, style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "small", variant: "danger", appearance: "outlined" }, h("span", null, this.financial.cancelation_penality_as_if_today < 0 ? 'Refund' : 'Charge', " "), formatAmount(this.currencySymbol, Math.abs(this.financial.cancelation_penality_as_if_today))))
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
                                }, style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "small", variant: "danger", appearance: "outlined" }, formatAmount(this.currencySymbol, this.financial.due_amount)));
                    }
                }, style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "small", variant: "danger", appearance: "outlined" }, formatAmount(this.currencySymbol, this.guestFinancial?.due_amount))))));
    }
};
IrBalanceCell.style = IrBalanceCellStyle0;

const irBookedByCellCss = ".sc-ir-booked-by-cell-h{box-sizing:border-box !important}.sc-ir-booked-by-cell-h *.sc-ir-booked-by-cell,.sc-ir-booked-by-cell-h *.sc-ir-booked-by-cell::before,.sc-ir-booked-by-cell-h *.sc-ir-booked-by-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-booked-by-cell{display:none !important}.sc-ir-booked-by-cell-h{display:block;font-size:0.93rem}[display='inline'].sc-ir-booked-by-cell-h{display:inline-flex;align-items:center;gap:1rem}.booked-by-source__logo.sc-ir-booked-by-cell{width:1.5625rem}.booked-by-cell__description.sc-ir-booked-by-cell{font-size:0.875rem}.cell-label.sc-ir-booked-by-cell{font-weight:700}.booked-by-source__private-note.sc-ir-booked-by-cell{height:0.5rem;width:0.5rem;border-radius:50%;background:rgb(244, 213, 82);display:inline-flex;padding:0;margin:0}.booked-by-source__container.sc-ir-booked-by-cell{display:flex;align-items:center;gap:0.5rem}.booked-by-cell__button.sc-ir-booked-by-cell:focus{outline:none}.booked-by-cell__button.sc-ir-booked-by-cell:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}.booked-by-cell__button.sc-ir-booked-by-cell{display:inline-flex;align-items:center;justify-content:center;height:fit-content;padding:0;font-family:inherit;font-size:var(--wa-form-control-value-font-size);font-weight:var(--wa-font-weight-action);line-height:calc(var(--wa-form-control-height) - var(--border-width) * 2);text-decoration:none;vertical-align:middle;white-space:nowrap;border-style:var(--wa-border-style);border-width:max(1px, var(--wa-form-control-border-width));border-radius:var(--wa-form-control-border-radius);transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing);cursor:pointer;user-select:none;-webkit-user-select:none;color:var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));background-color:transparent;border-color:transparent}.booked-by-cell__button.sc-ir-booked-by-cell:hover{color:var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-brand-fill-quiet))}.booked-by-source__contact.sc-ir-booked-by-cell wa-icon.sc-ir-booked-by-cell{font-size:1.25rem}.booked-by-source__contact.sc-ir-booked-by-cell a.sc-ir-booked-by-cell:first-child wa-icon.sc-ir-booked-by-cell{font-size:1rem}.booked-by-cell__button.sc-ir-booked-by-cell:active{color:var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-brand-fill-quiet)), var(--wa-color-mix-active))}@media (width >= 640px){.booked-by-cell__button.--mobile-only.sc-ir-booked-by-cell{display:none}}";
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
     * Show phone and WhatsApp contact icons.
     * When shown, phone links via `tel:` and WhatsApp via `https://wa.me/`.
     */
    showContactIcons = false;
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
        return (h(Host, { key: 'e18b0e416c26fb9a12311f1aeab06d515246a34c' }, this.label && h("p", { key: '2ca5657df9cccc995c98fbeb89efc5c770ad2c42', class: "cell-label" }, this.label, ":"), h("div", { key: '8fe7fba58fbe44c718be5223ce86a125303ca6c5', class: "booked-by-source__container" }, this.clickableGuest ? (h("button", { class: "booked-by-cell__button", onClick: this.handleGuestClick.bind(this) }, guest)) : (h("p", null, guest)), this.showRepeatGuestBadge && (h(Fragment, { key: '72de85dccddb45e35a84ccec392cdca2f57f322d' }, h("wa-tooltip", { key: '1097d908da5ddf8d8241fc19574913f7cacf9107', for: repeatGuestBadgeId }, `${locales.entries.Lcz_BookingsNbr}`.replace('%1', this.guest.nbr_confirmed_bookings.toString())), h("wa-icon", { key: 'c59cd0c765aefc053676ab5d5a51334d19d540a8', name: "heart", style: { color: '#FB0AAD' }, id: repeatGuestBadgeId }))), this.showPersons && (h("p", { key: '7b373c9c0df0a464a01ade08ffb6d369230bd99d' }, this.totalPersons, locales.entries.Lcz_P)), this.showPrivateNoteDot && h("span", { key: '94e15276c3ee673a4c645b2412619ebc36931337', class: "booked-by-source__private-note" })), this.showContactIcons && this.guest.country_phone_prefix && this.guest.mobile_without_prefix && (h("div", { key: '77ef4de9073136f8914aea823ec35dc438bbbfdc', class: "booked-by-source__container booked-by-source__contact" }, h("a", { key: '7252789add4eb8a8a19478095c2e72107628b8fa', class: "booked-by-cell__button --mobile-only", href: `tel:${this.guest.country_phone_prefix}${this.guest.mobile_without_prefix.replace(/\s+/g, '')}` }, h("wa-icon", { key: '3b87e8efff50e2a465eab8266a63c6020581c928', name: "phone" })), h("a", { key: '412b4a8f321a925a1d23c45f88375f7a4ada4a52', class: "booked-by-cell__button", href: `https://wa.me/${this.guest.country_phone_prefix.replace('+', '')}${this.guest.mobile_without_prefix.replace(/\s+/g, '')}`, target: "_blank", rel: "noopener noreferrer" }, h("wa-icon", { key: '10282861c3eddc2e122f41b8f084c30a08a7ea1a', name: "whatsapp", family: "brands" })))), h("div", { key: '0a1f233ef1224c6df252824aac358c1cf5efdba6', class: "booked-by-source__container" }, this.showLoyaltyIcon && (h(Fragment, { key: 'f440680f24603d9c7c277f5aea7b0db41c542be2' }, h("wa-tooltip", { key: '73ed58032cc6f45da001c82d7890547a7db93975', for: loyaltyBadgeId }, locales.entries.Lcz_LoyaltyDiscountApplied), h("wa-icon", { key: 'abf0a751cd4f788bf87126c02afce823d5cebae7', name: "heart", variant: "regular", style: { color: '#fc6c85' }, id: loyaltyBadgeId }))), this.showPromoIcon && (h(Fragment, { key: '73fb7f69fbe337a6c9686a226753df9d2995fa0f' }, h("wa-tooltip", { key: '4bad51c61c31deb8d98038834cd6528e4649cb16', for: couponBadgeId }, locales.entries.Lcz_Coupon, ": ", this.promoKey), h("wa-icon", { key: 'ba0b9646ea7e38d8f88b03cfec5fdf1af23e2ca5', id: couponBadgeId, name: "ticket" }))))));
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
        return (h(Host, { key: '11944971de1ebb7f357ce9334d49db71fa5604eb' }, this.channelBookingNumber && h("wa-tooltip", { key: '4cffc0a8c3b21eaffd34000136d9ff1b996da950', for: `source-logo__${this.bookingNumber}` }, this.origin.Label), h("img", { key: '51e0df4499a1146a26ea87d4897851a3fda9fe0f', class: "booked-by-source__logo", id: `source-logo__${this.bookingNumber}`, src: this.origin.Icon, alt: this.origin.Label }), h("div", { key: 'cd2dc03ee03d3201bc9348df4d23f9182026b917', class: "booking-nbr-cell__container" }, h("div", { key: 'ce4806e282adefa03b3c3e163ef98d2d8ea99f1b', style: { width: 'fit-content' } }, h("button", { key: 'b51f601436828e05313b8eb193de8ba998a36c78', class: "booking-nbr-cell__button", onClick: () => this.openBookingDetails.emit(this.bookingNumber) }, this.bookingNumber)), h("p", { key: '851a0bd359c1f28eb5325bdb02d83ca784993bb8', class: "booking-nbr-cell__channel_nbr" }, this.channelBookingNumber ? this.channelBookingNumber : this.origin.Label))));
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
        return (h(Host, { key: 'c25de910ec926f67378deeed14ee086a0876fcce' }, h("div", { key: '5cd2a8451c8d70f47d7aa1d63e9dfc53bfde8818', class: "date-cell__container" }, this.checkInLabel && h("span", { key: '6035f6abd9b778e5b1381b4598f8e3c91224486c', class: "date-cell__label" }, this.checkInLabel, ": "), h("p", { key: '87373ff659415fe0c6614d87c133a1e083043999', style: { fontWeight: this.overdueCheckin ? 'bold' : 'auto' } }, this.formatDate(this.checkIn))), h("div", { key: 'b3c5b928d86e8788dfdf59072e6bcf6bef3956cd', class: "date-cell__container" }, this.checkoutLabel && h("span", { key: '39d761aece41759e1d1fa989fbd89537a213dc46', class: "date-cell__label" }, this.checkoutLabel, ": "), h("p", { key: 'a7047cce7bb09fee1ca509955a22d8432f91a0a3', style: { fontWeight: this.overdueCheckout ? 'bold' : 'auto' } }, this.formatDate(this.checkOut)))));
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
        return (h(Host, { key: '13c8b083e65ba07c5cbee8a2e66385528997bb03' }, this.name.first_name, " ", this.name.last_name));
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
    showDeparture = false;
    render() {
        return (h(Host, { key: 'f3b8e82a20c3c817f3cfccbd52a7be19748812f0' }, h("p", { key: '3453160df887ca5517070eaca057d1afdc7ce897' }, this.room.roomtype.name), this.room.unit && h("ir-unit-tag", { key: '5d4e36b3d4b3aa3a4dceabd2ecac80496bb6370a', unit: this.room.unit.name }), this.showDeparture && this.room?.departure_time?.description && h("span", { key: '4989512860b17f937082e0caf40e93816f01ab6d' }, this.room?.departure_time?.description)));
    }
};
IrUnitCell.style = IrUnitCellStyle0;

export { IrActionsCell as ir_actions_cell, IrBalanceCell as ir_balance_cell, IrBookedByCell as ir_booked_by_cell, IrBookingNumberCell as ir_booking_number_cell, IrDatesCell as ir_dates_cell, IrGuestNameCell as ir_guest_name_cell, IrUnitCell as ir_unit_cell };

//# sourceMappingURL=ir-actions-cell_7.entry.js.map