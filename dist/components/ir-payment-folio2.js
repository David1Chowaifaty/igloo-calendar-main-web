import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { c as calendar_data } from './calendar-data.js';
import { h as hooks } from './moment.js';
import { z, Z as ZodError } from './index3.js';
import { P as PaymentService } from './payment.service.js';
import { d as defineCustomElement$9 } from './ir-button2.js';
import { d as defineCustomElement$8 } from './ir-date-picker2.js';
import { d as defineCustomElement$7 } from './ir-dropdown2.js';
import { d as defineCustomElement$6 } from './ir-dropdown-item2.js';
import { d as defineCustomElement$5 } from './ir-icon2.js';
import { d as defineCustomElement$4 } from './ir-icons2.js';
import { d as defineCustomElement$3 } from './ir-input-text2.js';
import { d as defineCustomElement$2 } from './ir-price-input2.js';
import { d as defineCustomElement$1 } from './ir-title2.js';

const irPaymentFolioCss = ".sc-ir-payment-folio-h{display:block;--payment-type-badge-bg:#ff4961}.payment-type-badge.sc-ir-payment-folio{background:var(--payment-type-badge-bg);color:white;padding:0.2rem 0.3rem !important;font-size:12px;border-radius:4px;margin:0;text-transform:capitalize}.credit-badge.sc-ir-payment-folio{--payment-type-badge-bg:#629a4c}.debit-badge.sc-ir-payment-folio{--payment-type-badge-bg:#ff4961}.dropdown-item-payment.sc-ir-payment-folio{display:flex;align-items:center;gap:1rem;box-sizing:border-box;justify-content:space-between}";
const IrPaymentFolioStyle0 = irPaymentFolioCss;

const sheetCss = ".sc-ir-payment-folio-h{height:100%}.sheet-container.sc-ir-payment-folio{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-ir-payment-folio{height:-webkit-fill-available;height:100vh;height:100dvh}.sheet-footer.sc-ir-payment-folio{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-ir-payment-folio{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-ir-payment-folio{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-ir-payment-folio{flex-direction:row;align-items:center}}";
const IrPaymentFolioStyle1 = sheetCss;

const IrPaymentFolio = /*@__PURE__*/ proxyCustomElement(class IrPaymentFolio extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.closeModal = createEvent(this, "closeModal", 7);
        this.resetBookingEvt = createEvent(this, "resetBookingEvt", 7);
        this.payment = {
            date: hooks().format('YYYY-MM-DD'),
            amount: 0,
            designation: undefined,
            currency: null,
            reference: null,
            id: -1,
        };
        this.autoValidate = false;
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
            amount: z.coerce.number().refine(a => a !== 0),
            reference: z.string().optional().nullable(),
            designation: z.string().min(1),
        });
        if (this.payment) {
            this.folioData = Object.assign({}, this.payment);
        }
    }
    handlePaymentChange(newValue, oldValue) {
        if (newValue !== oldValue && newValue) {
            this.folioData = Object.assign({}, newValue);
        }
    }
    updateFolioData(params) {
        this.folioData = Object.assign(Object.assign({}, this.folioData), params);
    }
    async savePayment() {
        var _a, _b;
        try {
            this.isLoading = true;
            this.autoValidate = true;
            if (this.errors) {
                this.errors = null;
            }
            this.folioSchema.parse((_a = this.folioData) !== null && _a !== void 0 ? _a : {});
            const payment_type = this.paymentTypes.find(p => p.CODE_NAME === this.folioData.designation);
            await this.paymentService.AddPayment(Object.assign(Object.assign({}, this.folioData), { currency: calendar_data.currency, reference: (_b = this.folioData.reference) !== null && _b !== void 0 ? _b : '', designation: payment_type.CODE_VALUE_EN, payment_type: {
                    code: payment_type.CODE_NAME,
                    description: payment_type.CODE_VALUE_EN,
                    operation: payment_type.NOTES,
                } }), this.bookingNumber);
            this.resetBookingEvt.emit(null);
            this.closeModal.emit(null);
        }
        catch (error) {
            const err = {};
            if (error instanceof ZodError) {
                console.log(error.issues);
                error.issues.forEach(e => {
                    err[e.path[0]] = true;
                });
            }
            this.errors = err;
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        console.log(this.payment);
        return (h("form", { key: '0fc47cc36545a64e9c7f8cbe52df2eab200f1333', class: 'sheet-container', onSubmit: async (e) => {
                e.preventDefault();
                this.savePayment();
            } }, h("ir-title", { key: '88410836bb82a53b78c0ce9b06a6f7047ed711d0', class: "px-1 sheet-header", onCloseSideBar: () => this.closeModal.emit(null), label: 'Payment Folio', displayContext: "sidebar" }), h("section", { key: '173bac1fc37a7d91c297a6a6f25d7515adf71544', class: 'px-1 sheet-body d-flex flex-column', style: { gap: '1rem' } }, h("div", { key: '0a7d2805397470b481c054d58f9108627b4a1b3f', class: 'd-flex w-fill', style: { gap: '0.5rem' } }, h("div", { key: 'ebeb5514a045892d7ee8693dc3a2463c4dac0db3', class: "form-group  mb-0 flex-grow-1" }, h("div", { key: 'cb607a5d78ece879d8506b184d8e46fc8283e8f4', class: "input-group row m-0 flex-grow-1" }, h("div", { key: 'dd26fc280154042f6a75f66c62fe526a7d5a4d4a', class: `input-group-prepend col-3 p-0 text-dark border-0` }, h("label", { key: '6945f5a613e52d4e65fa9cac13f8ae2db6840342', class: `input-group-text flex-grow-1 text-dark border-theme ` }, "Date")), h("div", { key: '56a37cda6befb73699171da8689934c3b71bea8b', class: "form-control  form-control-md col-10 flex-grow-1 d-flex align-items-center px-0 mx-0", style: { border: '0' } }, h("style", { key: '903f4b8b68a06e2e2145cf650dd9136383dd9e77' }, `.ir-date-picker-trigger{
                    width:100%;}`), h("ir-date-picker", { key: 'e08e0619cd29f080c9efb1302136669562bf5a89', "data-testid": "pickup_date", date: (_a = this.folioData) === null || _a === void 0 ? void 0 : _a.date, class: "w-100", emitEmptyDate: true, "aria-invalid": ((_b = this.errors) === null || _b === void 0 ? void 0 : _b.date) && !((_c = this.folioData) === null || _c === void 0 ? void 0 : _c.date) ? 'true' : 'false', onDateChanged: evt => {
                var _a;
                this.updateFolioData({ date: (_a = evt.detail.start) === null || _a === void 0 ? void 0 : _a.format('YYYY-MM-DD') });
            } }, h("input", { key: '444159157d6ea3984997f0b857f8cd1c5ffc0721', type: "text", slot: "trigger", value: ((_d = this.folioData) === null || _d === void 0 ? void 0 : _d.date) ? hooks((_e = this.folioData) === null || _e === void 0 ? void 0 : _e.date).format('MMM DD, YYYY') : null, class: `form-control w-100 input-sm ${((_f = this.errors) === null || _f === void 0 ? void 0 : _f.date) && !((_g = this.folioData) === null || _g === void 0 ? void 0 : _g.date) ? 'border-danger' : ''} text-left`, style: { borderTopLeftRadius: '0', borderBottomLeftRadius: '0', width: '100%' } })))))), h("div", { key: '6f4fa38a576cd8edf6bb97f4abcd003a8c987c95' }, h("style", { key: 'c5e82eb4c5d264374305bb36a267bc2dbfb6d8df' }, `.price-label{
              width:133px !important;
              }`), h("ir-price-input", { key: '84d07995c04b9273eba557e0706851abae53190a', autoValidate: this.autoValidate, zod: this.folioSchema.pick({ amount: true }), wrapKey: "amount", label: "Amount", labelStyle: 'price-label', error: ((_h = this.errors) === null || _h === void 0 ? void 0 : _h.amount) && !((_j = this.folioData) === null || _j === void 0 ? void 0 : _j.amount), value: (_l = (_k = this.folioData) === null || _k === void 0 ? void 0 : _k.amount) === null || _l === void 0 ? void 0 : _l.toString(), currency: calendar_data.currency.symbol, onTextChange: e => this.updateFolioData({ amount: Number(e.detail) }) })), h("div", { key: '9216198122e3ca8048144bc0c32b023ad5a562d7' }, h("ir-dropdown", { key: '0ffd80aa12929c68f83377fc992044df1a7212b2', value: (_m = this.folioData) === null || _m === void 0 ? void 0 : _m.designation, onOptionChange: e => {
                this.updateFolioData({ designation: e.detail.toString() });
                const payment_type = this.paymentTypes.find(pt => pt.CODE_NAME === e.detail);
                this.updateFolioData({
                    payment_type: {
                        code: payment_type.CODE_NAME,
                        description: payment_type.CODE_VALUE_EN,
                        operation: payment_type.NOTES,
                    },
                });
            } }, h("div", { key: 'c0b0269c0e964dc9dd7383fdd8c1aa7c969fac99', slot: "trigger", class: 'input-group row m-0 ' }, h("div", { key: '33f8c3e4ebb9741ebec7742c1303677829dff5d7', class: `input-group-prepend col-3 p-0 text-dark border-0` }, h("label", { key: 'b16d82df21103c95ab8fb2d343eb917f3491e26c', class: `input-group-text flex-grow-1 text-dark  border-theme` }, "Transaction type")), h("button", { key: 'e70ec356fabe6f2cca82381a4ffae744fdeb4442', type: "button", class: `form-control  d-flex align-items-center cursor-pointer ${((_o = this.errors) === null || _o === void 0 ? void 0 : _o.designation) && !((_p = this.folioData) === null || _p === void 0 ? void 0 : _p.designation) ? 'border-danger' : ''}` }, ((_q = this.folioData) === null || _q === void 0 ? void 0 : _q.payment_type) ? h("span", null, this.payment.payment_type.description) : h("span", null, "Select..."))), h("ir-dropdown-item", { key: 'a7638b9c78beb8cd4cece40a43a273abb1aee476', value: "" }, "Select..."), this.paymentTypes.map(pt => (h("ir-dropdown-item", { value: pt.CODE_NAME, class: "dropdown-item-payment" }, h("span", null, pt.CODE_VALUE_EN), h("span", { class: `payment-type-badge ${pt.NOTES === 'CR' ? 'credit-badge' : 'debit-badge'}` }, pt.NOTES === 'CR' ? 'credit' : 'debit')))))), h("div", { key: 'f957f45747b699b09148a796c02de744c0ccf034' }, h("ir-input-text", { key: '288901dd8ce1bcf45db7e3909c9a191e4d4ac973', value: (_r = this.folioData) === null || _r === void 0 ? void 0 : _r.reference, error: (_s = this.errors) === null || _s === void 0 ? void 0 : _s.reference_number, autoValidate: this.autoValidate, zod: this.folioSchema.pick({ reference: true }), label: "Reference", inputContainerStyle: {
                margin: '0',
            }, onTextChange: e => this.updateFolioData({ reference: e.detail }), labelWidth: 3 }))), h("div", { key: '38526844f83dd55cf394406a0ea7f7de1c098beb', class: 'sheet-footer' }, h("ir-button", { key: '4bee994095e449161c4eb6be399113746f8deb0d', onClick: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `flex-fill`, text: 'Cancel', btn_color: "secondary" }), h("ir-button", { key: 'a06e59726fcb7eeda47aede665980689efcf57a3', btn_styles: "justify-content-center align-items-center", class: 'flex-fill', isLoading: this.isLoading, text: 'Save', btn_color: "primary", btn_type: "submit" }))));
    }
    static get watchers() { return {
        "payment": ["handlePaymentChange"]
    }; }
    static get style() { return IrPaymentFolioStyle0 + IrPaymentFolioStyle1; }
}, [2, "ir-payment-folio", {
        "paymentTypes": [16],
        "bookingNumber": [1, "booking-number"],
        "payment": [16],
        "isLoading": [32],
        "errors": [32],
        "autoValidate": [32],
        "folioData": [32]
    }, undefined, {
        "payment": ["handlePaymentChange"]
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