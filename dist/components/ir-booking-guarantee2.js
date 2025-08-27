import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { F as toFloat } from './utils.js';
import { l as locales } from './locales.store.js';
import { c as calendar_data } from './calendar-data.js';
import { d as defineCustomElement$3 } from './ir-button2.js';
import { d as defineCustomElement$2 } from './ir-icons2.js';
import { d as defineCustomElement$1 } from './ir-label2.js';

const irBookingGuaranteeCss = ".sc-ir-booking-guarantee-h{display:block}.sc-ir-booking-guarantee-h{font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}.sc-ir-booking-guarantee-h *.sc-ir-booking-guarantee{font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}";
const IrBookingGuaranteeStyle0 = irBookingGuaranteeCss;

const IrBookingGuarantee = /*@__PURE__*/ proxyCustomElement(class IrBookingGuarantee extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.collapsed = false;
        this.paymentDetailsUrl = '';
        this.paymentExceptionMessage = '';
    }
    async componentWillLoad() {
    }
    formatCurrency(amount, currency, locale = 'en-US') {
        if (!currency || amount < 0) {
            return '';
        }
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(amount);
    }
    checkPaymentCode(value) {
        var _a, _b, _c;
        return (_c = (_b = (_a = calendar_data.allowed_payment_methods) === null || _a === void 0 ? void 0 : _a.find(pm => pm.code === value)) === null || _b === void 0 ? void 0 : _b.description) !== null && _c !== void 0 ? _c : null;
    }
    getPaymentMethod() {
        var _a, _b, _c, _d;
        let paymentMethod = null;
        const payment_code = (_b = (_a = this.booking) === null || _a === void 0 ? void 0 : _a.extras) === null || _b === void 0 ? void 0 : _b.find(e => e.key === 'payment_code');
        if (this.booking.agent) {
            const code = (_d = (_c = this.booking) === null || _c === void 0 ? void 0 : _c.extras) === null || _d === void 0 ? void 0 : _d.find(e => e.key === 'agent_payment_mode');
            if (code) {
                paymentMethod = code.value === '001' ? locales.entries.Lcz_OnCredit : payment_code ? this.checkPaymentCode(payment_code.value) : null;
            }
        }
        else if (payment_code) {
            paymentMethod = this.checkPaymentCode(payment_code.value);
        }
        return paymentMethod;
    }
    async handleToggleCollapse() {
        if (!this.booking.is_direct && this.booking.channel_booking_nbr && !this.booking.guest.cci && !this.collapsed) {
            this.paymentDetailsUrl = await this.bookingService.getPCICardInfoURL(this.booking.booking_nbr);
        }
        this.collapsed = !this.collapsed;
    }
    shouldShowGuarantee() {
        const paymentMethod = this.booking.is_direct ? this.getPaymentMethod() : null;
        return this.booking.is_direct ? Boolean(paymentMethod || this.booking.guest.cci) : true;
    }
    shouldShowToggleButton() {
        return !this.booking.is_direct || (this.booking.is_direct && this.booking.guest.cci);
    }
    renderCreditCardInfo() {
        const { cci } = this.booking.guest;
        if (!cci)
            return null;
        return [
            h("div", null, cci && 'Card:', " ", h("span", null, cci.nbr || ''), cci.expiry_month && ' Expiry: ', h("span", null, cci.expiry_month || '', cci.expiry_year && '/' + cci.expiry_year)),
            h("div", null, cci.holder_name && 'Name:', " ", h("span", null, cci.holder_name || ''), cci.cvc && ' - CVC:', " ", h("span", null, cci.cvc || '')),
        ];
    }
    renderCollapsedContent() {
        if (this.booking.guest.cci) {
            return this.renderCreditCardInfo();
        }
        if (this.paymentDetailsUrl) {
            return h("iframe", { src: this.paymentDetailsUrl, width: "100%", class: "iframeHeight", frameborder: "0", name: "payment" });
        }
        return h("div", { class: "text-center" }, this.paymentExceptionMessage);
    }
    renderOtaGuarantee() {
        var _a, _b, _c;
        const { ota_guarante } = this.booking;
        if (!ota_guarante || this.booking.is_direct)
            return null;
        return (h("div", null, h("ir-label", { content: ota_guarante.card_type + `${ota_guarante.is_virtual ? ' (virtual)' : ''}`, labelText: `${locales.entries.Lcz_CardType}:` }), h("ir-label", { content: ota_guarante.cardholder_name, labelText: `${locales.entries.Lcz_CardHolderName}:` }), h("ir-label", { content: ota_guarante.card_number, labelText: `${locales.entries.Lcz_CardNumber}:` }), h("ir-label", { content: this.formatCurrency(toFloat(Number((_a = ota_guarante.meta) === null || _a === void 0 ? void 0 : _a.virtual_card_current_balance), Number((_b = ota_guarante.meta) === null || _b === void 0 ? void 0 : _b.virtual_card_decimal_places)), (_c = ota_guarante.meta) === null || _c === void 0 ? void 0 : _c.virtual_card_currency_code), labelText: `${locales.entries.Lcz_CardBalance}:` })));
    }
    render() {
        if (!this.shouldShowGuarantee()) {
            return null;
        }
        const paymentMethod = this.booking.is_direct ? this.getPaymentMethod() : null;
        return (h("div", { class: "mb-1" }, h("div", { class: "d-flex align-items-center" }, h("span", { class: "mr-1 font-medium" }, locales.entries.Lcz_BookingGuarantee, paymentMethod && h("span", null, ": ", paymentMethod)), this.shouldShowToggleButton() && (h("ir-button", { id: "drawer-icon", "data-toggle": "collapse", "data-target": ".guarrantee", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "myCollapse", class: "sm-padding-right pointer", variant: "icon", icon_name: "credit_card", onClickHandler: this.handleToggleCollapse.bind(this) }))), h("div", { class: "collapse guarrantee" }, this.renderCollapsedContent()), this.renderOtaGuarantee()));
    }
    static get style() { return IrBookingGuaranteeStyle0; }
}, [2, "ir-booking-guarantee", {
        "booking": [16],
        "bookingService": [16],
        "collapsed": [32],
        "paymentDetailsUrl": [32],
        "paymentExceptionMessage": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-booking-guarantee", "ir-button", "ir-icons", "ir-label"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-booking-guarantee":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBookingGuarantee);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrBookingGuarantee as I, defineCustomElement as d };

//# sourceMappingURL=ir-booking-guarantee2.js.map