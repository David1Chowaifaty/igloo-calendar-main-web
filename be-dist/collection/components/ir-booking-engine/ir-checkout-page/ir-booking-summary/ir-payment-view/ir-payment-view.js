import app_store from "../../../../../stores/app.store";
import booking_store from "../../../../../stores/booking";
import { checkout_store } from "../../../../../stores/checkout.store";
import localizedWords from "../../../../../stores/localization.store";
import { ZCreditCardSchemaWithCvc } from "../../../../../validators/checkout.validator";
import { h } from "@stencil/core";
import IMask from "imask";
export class IrPaymentView {
    constructor() {
        this.prepaymentAmount = 0;
        this.cardType = '';
        this.imageLoadError = false;
    }
    componentWillLoad() {
        this.setPaymentMethod();
        if (!checkout_store.payment) {
            checkout_store.payment = {
                code: this.selectedPaymentMethod,
            };
        }
    }
    handlePrePaymentAmount(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.setPaymentMethod();
        }
    }
    setPaymentMethod() {
        const { paymentMethods } = this.setPaymentDetails();
        let selectedMethodCode = null;
        if ((this.prepaymentAmount === 0 && paymentMethods.length === 1 && paymentMethods[0].is_payment_gateway) ||
            (this.prepaymentAmount === 0 && !paymentMethods.some(pm => !pm.is_payment_gateway))) {
            return null;
        }
        if (paymentMethods.length > 0) {
            const [firstMethod, secondMethod] = paymentMethods;
            selectedMethodCode = firstMethod.code === '000' && secondMethod ? secondMethod.code : firstMethod.code;
        }
        this.selectedPaymentMethod = selectedMethodCode;
    }
    setPaymentDetails() {
        const paymentMethods = app_store.property.allowed_payment_methods.filter(p => p.is_active) || [];
        const filteredMap = paymentMethods
            .filter(apm => !(apm.is_payment_gateway && this.prepaymentAmount === 0)) // Filter out inactive gateways for zero prepayment
            .map(apm => ({
            id: apm.code,
            value: apm.is_payment_gateway
                ? localizedWords.entries[`Lcz_Pay_${apm.code}`] || localizedWords.entries.Lcz_PayByCard
                : ['001', '004'].includes(apm.code)
                    ? localizedWords.entries.Lcz_SecureByCard
                    : apm.description,
        }));
        const paymentDetails = {
            paymentMethods,
            filteredMap,
        };
        this.paymentDetails = paymentDetails;
        return paymentDetails;
    }
    getExpiryMask() {
        const currentYear = new Date().getFullYear() % 100;
        return {
            mask: 'MM/YY',
            blocks: {
                MM: {
                    mask: IMask.MaskedRange,
                    from: 1,
                    to: 12,
                    maxLength: 2,
                    placeholderChar: 'M',
                },
                YY: {
                    mask: IMask.MaskedRange,
                    from: currentYear,
                    to: 99,
                    maxLength: 2,
                    placeholderChar: 'Y',
                },
            },
            lazy: false,
            placeholderChar: '_',
        };
    }
    handlePaymentSelectionChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const payment_code = e.detail;
        this.selectedPaymentMethod = payment_code;
        this.imageLoadError = false;
        checkout_store.payment.code = payment_code;
    }
    renderPaymentMethod() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        if (app_store.property.allowed_payment_methods.length === 0) {
            return;
        }
        const method = (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.allowed_payment_methods.find(apm => apm.code === this.selectedPaymentMethod);
        if (this.selectedPaymentMethod === '000') {
            return h("p", { class: "text-center" }, localizedWords.entries.Lcz_NoDepositRequired);
        }
        if (this.selectedPaymentMethod === '001' || this.selectedPaymentMethod === '004')
            return (h("form", { class: "flex w-full gap-4", key: method.code }, h("div", { class: 'flex-1 space-y-4' }, h("fieldset", null, h("ir-input", { placeholder: "", onTextChanged: e => {
                    checkout_store.payment = Object.assign(Object.assign({}, checkout_store.payment), { cardHolderName: e.detail });
                }, autocomplete: "cc-name", "data-state": ((_b = this.errors) === null || _b === void 0 ? void 0 : _b.cardHolderName) ? 'error' : '', label: localizedWords.entries.Lcz_NameOnCard, class: "w-full", onInputBlur: e => {
                    var _a;
                    const cardHolderNameSchema = ZCreditCardSchemaWithCvc.pick({ cardHolderName: true });
                    const cardHolderNameValidation = cardHolderNameSchema.safeParse({ cardHolderName: (_a = checkout_store.payment) === null || _a === void 0 ? void 0 : _a.cardHolderName });
                    const target = e.target;
                    if (!cardHolderNameValidation.success) {
                        target.setAttribute('data-state', 'error');
                        target.setAttribute('aria-invalid', 'true');
                    }
                    else {
                        if (target.hasAttribute('aria-invalid')) {
                            target.setAttribute('aria-invalid', 'false');
                        }
                    }
                }, onInputFocus: e => {
                    const target = e.target;
                    if (target.hasAttribute('data-state'))
                        target.removeAttribute('data-state');
                } })), h("ir-credit-card-input", { "data-state": ((_c = this.errors) === null || _c === void 0 ? void 0 : _c.cardNumber) ? 'error' : '', onCreditCardChange: e => {
                    const { cardType, value } = e.detail;
                    this.cardType = cardType;
                    checkout_store.payment = Object.assign(Object.assign({}, checkout_store.payment), { cardNumber: value });
                } }), h("div", { class: "flex flex-col gap-2.5 sm:flex-row sm:items-center" }, h("fieldset", { class: "w-full" }, h("ir-input", { autocomplete: "cc-exp", "data-state": ((_d = this.errors) === null || _d === void 0 ? void 0 : _d.expiryDate) ? 'error' : '', type: "text", value: "", placeholder: "MM/YY", mask: this.getExpiryMask(), label: localizedWords.entries.Lcz_ExpirationDate, class: "w-full", rightIcon: true, onTextChanged: e => {
                    checkout_store.payment = Object.assign(Object.assign({}, checkout_store.payment), { expiry_month: e.detail, expiry_year: e.detail });
                }, onInputBlur: e => {
                    var _a;
                    const expiryDateSchema = ZCreditCardSchemaWithCvc.pick({ expiryDate: true });
                    const expiryDateValidation = expiryDateSchema.safeParse({ expiryDate: (_a = checkout_store.payment) === null || _a === void 0 ? void 0 : _a.expiry_month });
                    const target = e.target;
                    if (!expiryDateValidation.success) {
                        target.setAttribute('data-state', 'error');
                        target.setAttribute('aria-invalid', 'true');
                    }
                    else {
                        if (target.hasAttribute('aria-invalid')) {
                            target.setAttribute('aria-invalid', 'false');
                        }
                    }
                }, onInputFocus: e => {
                    const target = e.target;
                    if (target.hasAttribute('data-state'))
                        target.removeAttribute('data-state');
                } }, h("svg", { slot: "right-icon", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M2 7C2 6.20435 2.31607 5.44129 2.87868 4.87868C3.44129 4.31607 4.20435 4 5 4H19C19.7956 4 20.5587 4.31607 21.1213 4.87868C21.6839 5.44129 22 6.20435 22 7V8H2V7ZM2 10V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V10H2ZM7 12C6.73478 12 6.48043 12.1054 6.29289 12.2929C6.10536 12.4804 6 12.7348 6 13C6 13.2652 6.10536 13.5196 6.29289 13.7071C6.48043 13.8946 6.73478 14 7 14H12C12.2652 14 12.5196 13.8946 12.7071 13.7071C12.8946 13.5196 13 13.2652 13 13C13 12.7348 12.8946 12.4804 12.7071 12.2929C12.5196 12.1054 12.2652 12 12 12H7Z", fill: "#EAECF0" }), h("rect", { x: "14.5", y: "11.5", width: "6", height: "3", rx: "0.5", stroke: "#FE4F42" }))))))));
        if (this.selectedPaymentMethod === '005') {
            return (h("div", { class: "flex w-full gap-4" }, h("div", { class: "flex-1 space-y-1.5" }, ((_f = (_e = this.paymentDetails) === null || _e === void 0 ? void 0 : _e.filteredMap) === null || _f === void 0 ? void 0 : _f.length) === 1 && h("p", null, method.description), h("p", { class: "text-xs text-gray-700", innerHTML: ((_h = (_g = method.localizables) === null || _g === void 0 ? void 0 : _g.find(d => d.language.code.toLowerCase() === app_store.userPreferences.language_id.toLowerCase())) === null || _h === void 0 ? void 0 : _h.description) ||
                    ((_k = (_j = method.localizables) === null || _j === void 0 ? void 0 : _j.find(d => d.language.code.toLowerCase() === 'en')) === null || _k === void 0 ? void 0 : _k.description) }))));
        }
    }
    renderPaymentOptions() {
        var _a, _b;
        const { filteredMap, paymentMethods } = this.paymentDetails;
        const paymentLength = paymentMethods.length;
        if ((this.prepaymentAmount === 0 && !paymentMethods.some(pm => !pm.is_payment_gateway)) || paymentLength === 0) {
            return h("p", { class: "text-center" }, localizedWords.entries.Lcz_NoDepositRequired);
        }
        if (paymentLength === 1 && paymentMethods[0].is_payment_gateway) {
            return h("p", { class: 'text-center' }, `${(_a = localizedWords.entries[`Lcz_Pay_${paymentMethods[0].code}`]) !== null && _a !== void 0 ? _a : localizedWords.entries.Lcz_PayByCard}`);
        }
        // if (paymentLength === 1 && paymentMethods[0].code === '001') {
        //   return <p>{localizedWords.entries.Lcz_SecureByCard}</p>;
        // }
        if (paymentLength > 1) {
            if (filteredMap.length === 0) {
                return h("p", { class: "text-center" }, localizedWords.entries.Lcz_NoDepositRequired);
            }
            else if (filteredMap.length === 1 && ['001', '005'].includes(filteredMap[0].id)) {
                return null;
            }
            return (h("ir-select", { variant: "double-line", value: this.selectedPaymentMethod.toString(), label: localizedWords.entries.Lcz_SelectYourPaymentMethod, data: filteredMap, onValueChange: this.handlePaymentSelectionChange.bind(this) }));
        }
        const paymentOption = app_store.property.allowed_payment_methods[0];
        if (this.prepaymentAmount === 0 && paymentOption.is_payment_gateway) {
            return h("p", { class: "text-center" }, localizedWords.entries.Lcz_NoDepositRequired);
        }
        if (paymentOption.is_payment_gateway) {
            return h("p", { class: "text-center" }, `${(_b = localizedWords.entries[`Lcz_Pay_${paymentOption.code}`]) !== null && _b !== void 0 ? _b : localizedWords.entries.Lcz_PayByCard}`, " ");
        }
        return null;
    }
    render() {
        var _a, _b, _c, _d, _e;
        const hasAgentWithCode001 = booking_store.bookingAvailabilityParams.agent && booking_store.bookingAvailabilityParams.agent.payment_mode.code === '001';
        const selectedPaymentMethodImage = (_c = (_b = (_a = app_store === null || app_store === void 0 ? void 0 : app_store.property) === null || _a === void 0 ? void 0 : _a.allowed_payment_methods) === null || _b === void 0 ? void 0 : _b.find(p => p.code === this.selectedPaymentMethod)) === null || _c === void 0 ? void 0 : _c.img_url;
        return (h("div", { key: '6bc06af738050254f5ba92822a6e62884beae228', class: "w-full space-y-4 rounded-md border border-solid bg-white  p-4" }, !hasAgentWithCode001 && this.prepaymentAmount === 0 && this.selectedPaymentMethod === '001' && h("p", { key: 'dbb22896b5beafb50325dd1c7936de72d537095a' }, localizedWords.entries.Lcz_PaymentSecurity), !hasAgentWithCode001 && this.renderPaymentOptions(), !hasAgentWithCode001 && this.renderPaymentMethod(), hasAgentWithCode001 && h("p", { key: '23302209608ad73cde038661f002fb10722a02da', class: 'text-center' }, localizedWords.entries.Lcz_OnCredit), this.cardType !== '' &&
            this.cardType === 'AMEX' &&
            !app_store.property.allowed_cards.find(c => { var _a; return c.name.toLowerCase().includes(this.cardType === 'AMEX' ? 'american express' : (_a = this.cardType) === null || _a === void 0 ? void 0 : _a.toLowerCase()); }) && (h("p", { key: '23e4857a42e57dd12ad3e8070fd577875ee8c2b6', class: 'text-red-500' }, localizedWords.entries.Lcz_CardTypeNotSupport, ' ', (_e = (_d = app_store.property) === null || _d === void 0 ? void 0 : _d.allowed_cards) === null || _e === void 0 ? void 0 :
            _e.map((c, i) => { var _a; return `${c.name}${i < ((_a = app_store.property) === null || _a === void 0 ? void 0 : _a.allowed_cards.length) - 1 ? ', ' : ''}`; }))), selectedPaymentMethodImage && !this.imageLoadError && (h("img", { key: '820aefa88204329c490051a706b1de76121bc8d0', style: {
                maxWidth: '270px',
                marginLeft: 'auto',
                marginRight: 'auto',
                height: '24px',
            }, src: selectedPaymentMethodImage, onError: () => {
                this.imageLoadError = true;
            }, onLoad: () => {
                this.imageLoadError = false;
            } }))));
    }
    static get is() { return "ir-payment-view"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-payment-view.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-payment-view.css"]
        };
    }
    static get properties() {
        return {
            "prepaymentAmount": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "prepayment-amount",
                "reflect": false,
                "defaultValue": "0"
            },
            "errors": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Record<string, ZodIssue>",
                    "resolved": "{ [x: string]: ZodIssue; }",
                    "references": {
                        "Record": {
                            "location": "global",
                            "id": "global::Record"
                        },
                        "ZodIssue": {
                            "location": "import",
                            "path": "zod",
                            "id": "node_modules::ZodIssue"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            }
        };
    }
    static get states() {
        return {
            "selectedPaymentMethod": {},
            "cardType": {},
            "paymentDetails": {},
            "imageLoadError": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "prepaymentAmount",
                "methodName": "handlePrePaymentAmount"
            }];
    }
}
//# sourceMappingURL=ir-payment-view.js.map
