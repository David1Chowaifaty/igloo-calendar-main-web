import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { c as calendar_data } from './calendar-data.js';
import { h as hooks } from './moment.js';
import { z, Z as ZodError } from './index3.js';
import { P as PaymentService } from './payment.service.js';
import { b as buildPaymentTypes } from './booking.service.js';
import { P as PAYMENT_TYPES_WITH_METHOD } from './global.variables.js';
import { d as defineCustomElement$9 } from './ir-button2.js';
import { d as defineCustomElement$8 } from './ir-date-picker2.js';
import { d as defineCustomElement$7 } from './ir-dropdown2.js';
import { d as defineCustomElement$6 } from './ir-dropdown-item2.js';
import { d as defineCustomElement$5 } from './ir-icon2.js';
import { d as defineCustomElement$4 } from './ir-icons2.js';
import { d as defineCustomElement$3 } from './ir-input-text2.js';
import { d as defineCustomElement$2 } from './ir-price-input2.js';
import { d as defineCustomElement$1 } from './ir-title2.js';

const irPaymentFolioCss = ".sc-ir-payment-folio-h{display:block;--payment-type-badge-bg:#ff4961}.payment-type-badge.sc-ir-payment-folio{background:var(--payment-type-badge-bg);color:white;padding:0.2rem 0.3rem !important;font-size:12px;border-radius:4px;margin:0;text-transform:capitalize}.credit-badge.sc-ir-payment-folio{--payment-type-badge-bg:#629a4c}.debit-badge.sc-ir-payment-folio{--payment-type-badge-bg:#ff4961}.dropdown-item-payment.sc-ir-payment-folio{display:flex;align-items:center;gap:1rem;box-sizing:border-box;justify-content:space-between}.input-group-text.sc-ir-payment-folio{border-color:#cacfe7 !important}";
const IrPaymentFolioStyle0 = irPaymentFolioCss;

const sheetCss = ".sc-ir-payment-folio-h{height:100%}.sheet-container.sc-ir-payment-folio{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-ir-payment-folio{height:-webkit-fill-available;height:100vh;height:100dvh}.sheet-footer.sc-ir-payment-folio{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-ir-payment-folio{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-ir-payment-folio{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-ir-payment-folio{flex-direction:row;align-items:center}}";
const IrPaymentFolioStyle1 = sheetCss;

const IrPaymentFolio = /*@__PURE__*/ proxyCustomElement(class IrPaymentFolio extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.closeModal = createEvent(this, "closeModal", 7);
        this.resetBookingEvt = createEvent(this, "resetBookingEvt", 7);
        this.resetExposedCancellationDueAmount = createEvent(this, "resetExposedCancellationDueAmount", 7);
        this.payment = {
            date: hooks().format('YYYY-MM-DD'),
            amount: 0,
            designation: undefined,
            currency: null,
            reference: null,
            id: -1,
        };
        this.autoValidate = false;
        this._paymentTypes = {};
        this.paymentService = new PaymentService();
    }
    componentWillLoad() {
        this.folioSchema = z.object({
            date: z
                .string()
                .regex(/^\d{4}-\d{2}-\d{2}$/)
                .refine(dateStr => {
                const date = hooks(dateStr, 'YYYY-MM-DD', true);
                return date.isValid();
            }, { message: `Invalid date` }),
            amount: z.coerce.number().refine(a => a >= 0),
            reference: z.string().optional().nullable(),
            // designation: z.string().min(1),
            payment_type: z.object({
                code: z.string().min(3).max(4),
                description: z.string().min(1),
                operation: z.union([z.literal('CR'), z.literal('DB')]),
            }),
            payment_method: z.object({
                code: z.string().min(3).max(4),
                description: z.string().min(1),
            }),
        });
        if (this.payment) {
            this.folioData = Object.assign({}, this.payment);
        }
        this.getPaymentTypes();
    }
    handlePaymentChange(newValue, oldValue) {
        if (newValue !== oldValue && newValue) {
            this.folioData = Object.assign({}, newValue);
            this.getPaymentTypes();
        }
    }
    handlePaymentTypesChange(newValue, oldValue) {
        if (newValue !== oldValue && newValue) {
            this.getPaymentTypes();
        }
    }
    updateFolioData(params) {
        this.folioData = Object.assign(Object.assign({}, this.folioData), params);
    }
    async savePayment() {
        var _a, _b, _c;
        try {
            this.isLoading = true;
            this.autoValidate = true;
            if (this.errors) {
                this.errors = null;
            }
            this.folioSchema.parse((_a = this.folioData) !== null && _a !== void 0 ? _a : {});
            await this.paymentService.AddPayment(Object.assign(Object.assign({}, this.folioData), { currency: calendar_data.currency, reference: (_b = this.folioData.reference) !== null && _b !== void 0 ? _b : '', designation: ((_c = this.folioData.payment_type) === null || _c === void 0 ? void 0 : _c.description) || '' }), this.bookingNumber);
            this.resetBookingEvt.emit(null);
            this.resetExposedCancellationDueAmount.emit(null);
            this.closeModal.emit(null);
        }
        catch (error) {
            const err = {};
            if (error instanceof ZodError) {
                error.issues.forEach(e => {
                    err[e.path[0]] = true;
                });
            }
            console.error(error);
            this.errors = err;
        }
        finally {
            this.isLoading = false;
        }
    }
    handleDropdownChange(e) {
        var _a;
        e.stopImmediatePropagation();
        e.stopPropagation();
        const value = e.detail.toString();
        console.log(value);
        this.updateFolioData({ designation: value });
        if (!e.detail) {
            this.updateFolioData({
                payment_type: null,
            });
        }
        else {
            const payment_type = (_a = this.paymentEntries) === null || _a === void 0 ? void 0 : _a.types.find(pt => pt.CODE_NAME === value);
            if (!payment_type) {
                console.warn(`Invalid payment type ${e.detail}`);
                this.updateFolioData({
                    payment_type: null,
                });
                return;
            }
            this.updateFolioData({
                payment_type: {
                    code: payment_type.CODE_NAME,
                    description: payment_type.CODE_VALUE_EN,
                    operation: payment_type.NOTES,
                },
                payment_method: PAYMENT_TYPES_WITH_METHOD.includes(payment_type.CODE_NAME)
                    ? undefined
                    : {
                        code: this.paymentEntries.methods[0].CODE_NAME,
                        description: this.paymentEntries.methods[0].CODE_VALUE_EN,
                        operation: this.paymentEntries.methods[0].NOTES,
                    },
            });
        }
    }
    handlePaymentMethodDropdownChange(e) {
        var _a;
        e.stopImmediatePropagation();
        e.stopPropagation();
        const value = e.detail.toString();
        const payment_method = (_a = this.paymentEntries) === null || _a === void 0 ? void 0 : _a.methods.find(pt => pt.CODE_NAME === value);
        if (!payment_method) {
            console.warn(`Invalid payment method ${e.detail}`);
            this.updateFolioData({
                payment_type: null,
            });
            return;
        }
        this.updateFolioData({
            payment_method: {
                code: payment_method.CODE_NAME,
                description: payment_method.CODE_VALUE_EN,
                operation: payment_method.NOTES,
            },
        });
    }
    async getPaymentTypes() {
        var _a;
        const rec = buildPaymentTypes(this.paymentEntries);
        if (this.mode === 'payment-action' && ((_a = this.payment.payment_type) === null || _a === void 0 ? void 0 : _a.code) === '001') {
            const { PAYMENTS, CANCELLATION } = rec;
            return (this._paymentTypes = {
                PAYMENTS,
                CANCELLATION,
            });
        }
        this._paymentTypes = rec;
    }
    renderDropdownItems() {
        return Object.values(this._paymentTypes).map((p, idx) => (h(Fragment, null, p.map(pt => (h("ir-dropdown-item", { value: pt.CODE_NAME, class: "dropdown-item-payment" }, h("span", null, pt.CODE_VALUE_EN), h("span", { class: `payment-type-badge ${pt.NOTES === 'CR' ? 'credit-badge' : 'debit-badge'}` }, pt.NOTES === 'CR' ? 'credit' : 'debit')))), idx !== Object.values(this._paymentTypes).length - 1 && h("div", { class: "dropdown-divider" }))));
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9;
        return (h("form", { key: 'f40884ae756ee33dec916e99f104a1e6581bb265', class: 'sheet-container', onSubmit: async (e) => {
                e.preventDefault();
                this.savePayment();
            } }, h("ir-title", { key: 'cfe0387d78be97832c75963e44e33529a4f428c9', class: "px-1 sheet-header", onCloseSideBar: () => this.closeModal.emit(null), label: this.mode === 'edit' ? 'Edit Folio Entry' : 'New Folio Entry', displayContext: "sidebar" }), h("section", { key: 'c86458c4b0789c26bceb3b85cfcd66d361dffa81', class: 'px-1 sheet-body d-flex flex-column', style: { gap: '1rem' } }, h("div", { key: '73ca30a899d884dfcd3a6d09de7e5eb927816335', class: 'd-flex w-fill', style: { gap: '0.5rem' } }, h("div", { key: '9cef0e985725a89ea68219970ab029250f269b09', class: "form-group  mb-0 flex-grow-1" }, h("div", { key: '6b7f60a2821a84a279c8f1089a83ef16659f9995', class: "input-group row m-0 flex-grow-1" }, h("div", { key: '64f3711f78919f296d06937f850c9e92d935acc4', class: `input-group-prepend col-4 col-md-3 p-0 text-dark border-0` }, h("label", { key: '702875a8e61b86596ea624bd0496d41ba25c3e58', class: `input-group-text flex-grow-1 text-dark border-theme ` }, "Date")), h("div", { key: '210375f148d0f3f426462f0df5c064d8c3de1e68', class: "form-control  form-control-md col-10 flex-grow-1 d-flex align-items-center px-0 mx-0", style: { border: '0' } }, h("style", { key: '9c134b045b46dc3571b7c4b4e4dd79c1b2dfe172' }, `.ir-date-picker-trigger{
                    width:100%;}`), h("ir-date-picker", { key: '9db2bf8957502c1f7d125e1ec29df73be9c06bfd', "data-testid": "pickup_date", date: (_a = this.folioData) === null || _a === void 0 ? void 0 : _a.date, class: "w-100", emitEmptyDate: true, maxDate: hooks().format('YYYY-MM-DD'), "aria-invalid": ((_b = this.errors) === null || _b === void 0 ? void 0 : _b.date) && !((_c = this.folioData) === null || _c === void 0 ? void 0 : _c.date) ? 'true' : 'false', onDateChanged: evt => {
                var _a;
                this.updateFolioData({ date: (_a = evt.detail.start) === null || _a === void 0 ? void 0 : _a.format('YYYY-MM-DD') });
            } }, h("input", { key: '71b3174a7729f4c75c38f492fb1508c1a00e841f', type: "text", slot: "trigger", value: ((_d = this.folioData) === null || _d === void 0 ? void 0 : _d.date) ? hooks((_e = this.folioData) === null || _e === void 0 ? void 0 : _e.date).format('MMM DD, YYYY') : null, class: `form-control w-100 input-sm ${((_f = this.errors) === null || _f === void 0 ? void 0 : _f.date) && !((_g = this.folioData) === null || _g === void 0 ? void 0 : _g.date) ? 'border-danger' : ''} text-left`, style: { borderTopLeftRadius: '0', borderBottomLeftRadius: '0', width: '100%' } })))))), h("div", { key: 'f33d4da51512d71d5ec8f934e00c645e20590448' }, h("ir-dropdown", { key: '0ca034d414005bbb9a0a9f8735034d85eb54ca95', value: (_j = (_h = this.folioData) === null || _h === void 0 ? void 0 : _h.payment_type) === null || _j === void 0 ? void 0 : _j.code, disabled: this.mode === 'payment-action', onOptionChange: this.handleDropdownChange.bind(this) }, h("div", { key: 'a6c212a8da36317301faa91d02aad64d68c57f67', slot: "trigger", class: 'input-group row m-0 ' }, h("div", { key: '37623d01e63245133239addfe5ef6a90274a854d', class: `input-group-prepend col-4 col-md-3 p-0 text-dark border-0` }, h("label", { key: 'bf7729d16cfe258915232ba83f197ff96cde2c8d', class: `input-group-text flex-grow-1 text-dark  border-theme` }, "Transaction type")), h("button", { key: '7af752b7119d86ed8ac8f08ed3a7ffd586b40fd1', type: "button", disabled: this.mode === 'payment-action', class: `form-control  d-flex align-items-center cursor-pointer ${((_k = this.errors) === null || _k === void 0 ? void 0 : _k.payment_type) && !((_m = (_l = this.folioData) === null || _l === void 0 ? void 0 : _l.payment_type) === null || _m === void 0 ? void 0 : _m.code) ? 'border-danger' : ''}` }, ((_o = this.folioData) === null || _o === void 0 ? void 0 : _o.payment_type) ? h("span", null, (_p = this.folioData.payment_type) === null || _p === void 0 ? void 0 : _p.description) : h("span", null, "Select..."))), h("ir-dropdown-item", { key: '2cb31eb525689404c544c0b3c6f8e2e678771bea', value: "" }, "Select..."), this.renderDropdownItems())), PAYMENT_TYPES_WITH_METHOD.includes((_r = (_q = this.folioData) === null || _q === void 0 ? void 0 : _q.payment_type) === null || _r === void 0 ? void 0 : _r.code) && (h("div", { key: 'f37145e31c684eccc5d3ac36add676a0e126bcb5' }, h("ir-dropdown", { key: '8860e301f2163db3856de1d79b7e80dd2a3eee0f', value: (_t = (_s = this.folioData) === null || _s === void 0 ? void 0 : _s.payment_method) === null || _t === void 0 ? void 0 : _t.code, onOptionChange: this.handlePaymentMethodDropdownChange.bind(this) }, h("button", { key: 'e58e98bf1245b3e076849c958cf23b088d373ba4', slot: "trigger", type: "button", class: `form-control d-flex align-items-center cursor-pointer ${((_u = this.errors) === null || _u === void 0 ? void 0 : _u.payment_method) && !((_w = (_v = this.folioData) === null || _v === void 0 ? void 0 : _v.payment_method) === null || _w === void 0 ? void 0 : _w.code) ? 'border-danger' : ''}` }, ((_x = this.folioData) === null || _x === void 0 ? void 0 : _x.payment_method) ? (h("span", null, (_y = this.folioData.payment_method) === null || _y === void 0 ? void 0 : _y.description)) : (h("span", null, "Select ", ((_0 = (_z = this.folioData) === null || _z === void 0 ? void 0 : _z.payment_type) === null || _0 === void 0 ? void 0 : _0.code) === '001' ? 'payment' : 'refund', " method..."))), h("ir-dropdown-item", { key: '933ddf081d8c66ca244d4caf6d52e9fe9931a793', value: "" }, "Select ", ((_1 = this.folioData.payment_type) === null || _1 === void 0 ? void 0 : _1.code) === '001' ? 'payment' : 'refund', " method..."), (_3 = (_2 = this.paymentEntries) === null || _2 === void 0 ? void 0 : _2.methods) === null || _3 === void 0 ? void 0 :
            _3.map(pt => {
                return (h("ir-dropdown-item", { value: pt.CODE_NAME, class: "dropdown-item-payment" }, h("span", null, pt.CODE_VALUE_EN)));
            })))), h("div", { key: '93d48e4c3583ba2325230bc76f7275db062e03f4' }, h("ir-price-input", { key: 'b691cb26af662f11d036745031a954e910a86aec', containerClassname: "row", labelContainerClassname: "col-4 col-md-3 p-0 text-dark border-0", minValue: 0, autoValidate: this.autoValidate, zod: this.folioSchema.pick({ amount: true }), wrapKey: "amount", label: "Amount", labelStyle: 'flex-grow-1 text-dark  border-theme', error: ((_4 = this.errors) === null || _4 === void 0 ? void 0 : _4.amount) && !((_5 = this.folioData) === null || _5 === void 0 ? void 0 : _5.amount), value: (_7 = (_6 = this.folioData) === null || _6 === void 0 ? void 0 : _6.amount) === null || _7 === void 0 ? void 0 : _7.toString(), currency: calendar_data.currency.symbol, onTextChange: e => this.updateFolioData({ amount: Number(e.detail) }) })), h("div", { key: '8fcbba7978c829e541ce4a9c689695bc25ca4212' }, h("ir-input-text", { key: '164568ee59585699982305ad6491b2b5a467dab4', value: (_8 = this.folioData) === null || _8 === void 0 ? void 0 : _8.reference, error: (_9 = this.errors) === null || _9 === void 0 ? void 0 : _9.reference_number, autoValidate: this.autoValidate, zod: this.folioSchema.pick({ reference: true }), label: "Reference", maxLength: 50, inputContainerStyle: {
                margin: '0',
            }, onTextChange: e => this.updateFolioData({ reference: e.detail }), labelWidth: 3, labelContainerClassname: 'col-4 col-md-3' }))), h("div", { key: '9eec15b16bd957a91da04ea94dd65f0cb6d03b3b', class: 'sheet-footer' }, h("ir-button", { key: 'e62344641cf855a87461f77d5b647657c2561c35', onClick: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `flex-fill`, text: 'Cancel', btn_color: "secondary" }), h("ir-button", { key: 'd66611638b87449377e720f45083137ccdd641a6', btn_styles: "justify-content-center align-items-center", class: 'flex-fill', isLoading: this.isLoading, text: 'Save', btn_color: "primary", btn_type: "submit" }))));
    }
    static get watchers() { return {
        "payment": ["handlePaymentChange"],
        "paymentTypes": ["handlePaymentTypesChange"]
    }; }
    static get style() { return IrPaymentFolioStyle0 + IrPaymentFolioStyle1; }
}, [2, "ir-payment-folio", {
        "paymentEntries": [16],
        "bookingNumber": [1, "booking-number"],
        "payment": [16],
        "mode": [1],
        "isLoading": [32],
        "errors": [32],
        "autoValidate": [32],
        "folioData": [32],
        "_paymentTypes": [32]
    }, undefined, {
        "payment": ["handlePaymentChange"],
        "paymentTypes": ["handlePaymentTypesChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-payment-folio", "ir-button", "ir-date-picker", "ir-dropdown", "ir-dropdown-item", "ir-icon", "ir-icons", "ir-input-text", "ir-price-input", "ir-title"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-payment-folio":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPaymentFolio);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-dropdown":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-dropdown-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-price-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-title":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrPaymentFolio as I, defineCustomElement as d };

//# sourceMappingURL=ir-payment-folio2.js.map