import calendar_data from "../../../../stores/calendar-data";
import { h } from "@stencil/core";
import moment from "moment";
import { z, ZodError } from "zod";
import { PaymentService } from "../../../../services/payment.service";
export class IrPaymentFolio {
    constructor() {
        this.payment = {
            date: moment().format('YYYY-MM-DD'),
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
                const date = moment(dateStr, 'YYYY-MM-DD', true);
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
    handleDropdownChange(e) {
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
            const payment_type = this.paymentTypes.find(pt => pt.CODE_NAME === value);
            if (!payment_type) {
                console.warn(`Invalid payment type ${e.detail}`);
                this.updateFolioData({
                    payment_type: null,
                });
                return;
            }
            console.log(payment_type);
            this.updateFolioData({
                payment_type: {
                    code: payment_type.CODE_NAME,
                    description: payment_type.CODE_VALUE_EN,
                    operation: payment_type.NOTES,
                },
            });
        }
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        return (h("form", { key: 'f5cd46af1ee8ffaea3ede8497bc30b8c858b188b', class: 'sheet-container', onSubmit: async (e) => {
                e.preventDefault();
                this.savePayment();
            } }, h("ir-title", { key: 'a4fc981427bab52aef4018ae9e776f4c13b8102c', class: "px-1 sheet-header", onCloseSideBar: () => this.closeModal.emit(null), label: 'Payment Folio', displayContext: "sidebar" }), h("section", { key: '3f2da46578401dc202e4f4ff656a12e9f3709be2', class: 'px-1 sheet-body d-flex flex-column', style: { gap: '1rem' } }, h("div", { key: '37e414e651d6226b4df55e1f3a36ec6e661e35cd', class: 'd-flex w-fill', style: { gap: '0.5rem' } }, h("div", { key: '4f69bf947e25ca9c0c94a84101313ce228f718bb', class: "form-group  mb-0 flex-grow-1" }, h("div", { key: 'af4eeb9f9bbf5e9f5915700695ea09301a9dbae4', class: "input-group row m-0 flex-grow-1" }, h("div", { key: '783d5b0041b1988d712cb1d75ef4c2f9067e4455', class: `input-group-prepend col-3 p-0 text-dark border-0` }, h("label", { key: 'f146394f9efc72609b1dfba6240fbf35bd3ab9ad', class: `input-group-text flex-grow-1 text-dark border-theme ` }, "Date")), h("div", { key: '2374ad306a147c962a7cfd4448a77e5979fb1623', class: "form-control  form-control-md col-10 flex-grow-1 d-flex align-items-center px-0 mx-0", style: { border: '0' } }, h("style", { key: '9bd383ae26f1670d750efec0e8dc830b4029f492' }, `.ir-date-picker-trigger{
                    width:100%;}`), h("ir-date-picker", { key: 'c025ebcddde145f7c21063d579cb1309f3e1ff44', "data-testid": "pickup_date", date: (_a = this.folioData) === null || _a === void 0 ? void 0 : _a.date, class: "w-100", emitEmptyDate: true, "aria-invalid": ((_b = this.errors) === null || _b === void 0 ? void 0 : _b.date) && !((_c = this.folioData) === null || _c === void 0 ? void 0 : _c.date) ? 'true' : 'false', onDateChanged: evt => {
                var _a;
                this.updateFolioData({ date: (_a = evt.detail.start) === null || _a === void 0 ? void 0 : _a.format('YYYY-MM-DD') });
            } }, h("input", { key: 'be39f926a3a46acc0b0dd0f1fa203d8c773f7530', type: "text", slot: "trigger", value: ((_d = this.folioData) === null || _d === void 0 ? void 0 : _d.date) ? moment((_e = this.folioData) === null || _e === void 0 ? void 0 : _e.date).format('MMM DD, YYYY') : null, class: `form-control w-100 input-sm ${((_f = this.errors) === null || _f === void 0 ? void 0 : _f.date) && !((_g = this.folioData) === null || _g === void 0 ? void 0 : _g.date) ? 'border-danger' : ''} text-left`, style: { borderTopLeftRadius: '0', borderBottomLeftRadius: '0', width: '100%' } })))))), h("div", { key: '1871b49659acb49925663d508ceed6c63efadeb5' }, h("style", { key: '1b05578375e074cde09c3d86c8fcce074e161716' }, `.price-label{
              width:133px !important;
              }`), h("ir-price-input", { key: 'ba7665f4f0e4d172c57bedc9f3e44ac055f5dd59', autoValidate: this.autoValidate, zod: this.folioSchema.pick({ amount: true }), wrapKey: "amount", label: "Amount", labelStyle: 'price-label', error: ((_h = this.errors) === null || _h === void 0 ? void 0 : _h.amount) && !((_j = this.folioData) === null || _j === void 0 ? void 0 : _j.amount), value: (_l = (_k = this.folioData) === null || _k === void 0 ? void 0 : _k.amount) === null || _l === void 0 ? void 0 : _l.toString(), currency: calendar_data.currency.symbol, onTextChange: e => this.updateFolioData({ amount: Number(e.detail) }) })), h("div", { key: 'dc5c00b266bdf93346ac8d945ade8fa273c1e3fc' }, h("ir-dropdown", { key: 'afa41f25a6cc21879fdb498534da1f9f3d03765d', value: (_m = this.folioData) === null || _m === void 0 ? void 0 : _m.designation, onOptionChange: this.handleDropdownChange.bind(this) }, h("div", { key: '0963d5e072c1e47f7ed5d2cc765b53b547c0dd50', slot: "trigger", class: 'input-group row m-0 ' }, h("div", { key: '5ca9d8c99aaa4c14583e9647fa41db278c52345b', class: `input-group-prepend col-3 p-0 text-dark border-0` }, h("label", { key: '1e7c1417fec8f8cd214f3934f7feda25281473b1', class: `input-group-text flex-grow-1 text-dark  border-theme` }, "Transaction type")), h("button", { key: 'f310fc1529aab91fc9f85750eea12a231c883b8a', type: "button", class: `form-control  d-flex align-items-center cursor-pointer ${((_o = this.errors) === null || _o === void 0 ? void 0 : _o.designation) && !((_p = this.folioData) === null || _p === void 0 ? void 0 : _p.designation) ? 'border-danger' : ''}` }, ((_q = this.folioData) === null || _q === void 0 ? void 0 : _q.payment_type) ? h("span", null, (_r = this.folioData.payment_type) === null || _r === void 0 ? void 0 : _r.description) : h("span", null, "Select..."))), h("ir-dropdown-item", { key: '64e3cee03932f016c5aa6e0f6e07c52b2acc91b8', value: "" }, "Select..."), this.paymentTypes.map(pt => (h("ir-dropdown-item", { value: pt.CODE_NAME, class: "dropdown-item-payment" }, h("span", null, pt.CODE_VALUE_EN), h("span", { class: `payment-type-badge ${pt.NOTES === 'CR' ? 'credit-badge' : 'debit-badge'}` }, pt.NOTES === 'CR' ? 'credit' : 'debit')))))), h("div", { key: '984d0b60ddc32979d7026cb9a30b214b12d68627' }, h("ir-input-text", { key: 'c0816ae76222d884cee2bf38dad26f9a60c926ca', value: (_s = this.folioData) === null || _s === void 0 ? void 0 : _s.reference, error: (_t = this.errors) === null || _t === void 0 ? void 0 : _t.reference_number, autoValidate: this.autoValidate, zod: this.folioSchema.pick({ reference: true }), label: "Reference", inputContainerStyle: {
                margin: '0',
            }, onTextChange: e => this.updateFolioData({ reference: e.detail }), labelWidth: 3 }))), h("div", { key: 'e7909bbdc39c93fe940f4a0706766c2a7bf0d909', class: 'sheet-footer' }, h("ir-button", { key: '616b218c926ea047b14d3f92e54cce1013718648', onClick: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `flex-fill`, text: 'Cancel', btn_color: "secondary" }), h("ir-button", { key: 'aa3f274d025b783701ac979a6ab97466ed228913', btn_styles: "justify-content-center align-items-center", class: 'flex-fill', isLoading: this.isLoading, text: 'Save', btn_color: "primary", btn_type: "submit" }))));
    }
    static get is() { return "ir-payment-folio"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-payment-folio.css", "../../../../common/sheet.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-payment-folio.css", "../../../../common/sheet.css"]
        };
    }
    static get properties() {
        return {
            "paymentTypes": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IEntries[]",
                    "resolved": "IEntries[]",
                    "references": {
                        "IEntries": {
                            "location": "import",
                            "path": "@/models/IBooking",
                            "id": "src/models/IBooking.ts::IEntries"
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
            },
            "bookingNumber": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                "attribute": "booking-number",
                "reflect": false
            },
            "payment": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IPayment",
                    "resolved": "IPayment",
                    "references": {
                        "IPayment": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::IPayment"
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
                "setter": false,
                "defaultValue": "{\n    date: moment().format('YYYY-MM-DD'),\n    amount: 0,\n    designation: undefined,\n    currency: null,\n    reference: null,\n    id: -1,\n  }"
            }
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "errors": {},
            "autoValidate": {},
            "folioData": {}
        };
    }
    static get events() {
        return [{
                "method": "closeModal",
                "name": "closeModal",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }, {
                "method": "resetBookingEvt",
                "name": "resetBookingEvt",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "payment",
                "methodName": "handlePaymentChange"
            }];
    }
}
//# sourceMappingURL=ir-payment-folio.js.map
