import calendar_data from "../../../../stores/calendar-data";
import { Fragment, h } from "@stencil/core";
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
                return date.isValid() && !date.isAfter(moment(), 'dates');
            }, { message: `Invalid date` }),
            amount: z.coerce.number().refine(a => a !== 0),
            reference: z.string().optional().nullable(),
            designation: z.string().min(1),
            payment_type: z.object({
                code: z.string().min(3).max(4),
                description: z.string().min(1),
                operation: z.union([z.literal('CR'), z.literal('DB')]),
            }),
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
        var _a, _b, _c;
        try {
            this.isLoading = true;
            this.autoValidate = true;
            if (this.errors) {
                this.errors = null;
            }
            this.folioSchema.parse((_a = this.folioData) !== null && _a !== void 0 ? _a : {});
            await this.paymentService.AddPayment(Object.assign(Object.assign({}, this.folioData), { currency: calendar_data.currency, reference: (_b = this.folioData.reference) !== null && _b !== void 0 ? _b : '', designation: (_c = this.folioData.payment_type) === null || _c === void 0 ? void 0 : _c.description }), this.bookingNumber);
            this.resetBookingEvt.emit(null);
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
            this.updateFolioData({
                payment_type: {
                    code: payment_type.CODE_NAME,
                    description: payment_type.CODE_VALUE_EN,
                    operation: payment_type.NOTES,
                },
            });
        }
    }
    renderDropdownItems() {
        const dividerArray = ['011'];
        if (this.mode !== 'payment-action') {
            dividerArray.push('008');
        }
        let items = [...this.paymentTypes];
        if (this.mode === 'payment-action') {
            items = items.slice(0, 8);
        }
        return items.map(pt => (h(Fragment, null, h("ir-dropdown-item", { value: pt.CODE_NAME, class: "dropdown-item-payment" }, h("span", null, pt.CODE_VALUE_EN), h("span", { class: `payment-type-badge ${pt.NOTES === 'CR' ? 'credit-badge' : 'debit-badge'}` }, pt.NOTES === 'CR' ? 'credit' : 'debit')), dividerArray.includes(pt.CODE_NAME) && h("div", { class: "dropdown-divider" }))));
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
        return (h("form", { key: 'cddebc99f75eaa88978b46ed6e46acff4f53b987', class: 'sheet-container', onSubmit: async (e) => {
                e.preventDefault();
                this.savePayment();
            } }, h("ir-title", { key: 'c68011576d06d59f4b1c127b83424a7cc42b7169', class: "px-1 sheet-header", onCloseSideBar: () => this.closeModal.emit(null), label: this.mode === 'edit' ? 'Edit Folio Entry' : 'New Folio Entry', displayContext: "sidebar" }), h("section", { key: '3e2809073eb77709ca0c86784f15c736cf3e35a2', class: 'px-1 sheet-body d-flex flex-column', style: { gap: '1rem' } }, h("div", { key: 'c729caf80da683285c3fc412edb5fe6b9fa130ee', class: 'd-flex w-fill', style: { gap: '0.5rem' } }, h("div", { key: '5f8249ea60102abeb073dcca4ca8450e89f3cb2a', class: "form-group  mb-0 flex-grow-1" }, h("div", { key: 'e667ee091158c039e66a0b89e6564e2b4e050836', class: "input-group row m-0 flex-grow-1" }, h("div", { key: '7cf63550b9753fc87840bbe8f237cb602b9e7e0f', class: `input-group-prepend col-3 p-0 text-dark border-0` }, h("label", { key: '6302e10f3164881f9b81aef43e5cc4da3afffde8', class: `input-group-text flex-grow-1 text-dark border-theme ` }, "Date")), h("div", { key: '0352d9f28dcac31efd4bb092964fd84f8a798859', class: "form-control  form-control-md col-10 flex-grow-1 d-flex align-items-center px-0 mx-0", style: { border: '0' } }, h("style", { key: '5c9b5c7eaed89bdf8bff81c73d3452001c25da4d' }, `.ir-date-picker-trigger{
                    width:100%;}`), h("ir-date-picker", { key: '5c22589d608442d7828430fee1456fe1850ae7fb', "data-testid": "pickup_date", date: (_a = this.folioData) === null || _a === void 0 ? void 0 : _a.date, class: "w-100", emitEmptyDate: true, maxDate: moment().format('YYYY-MM-DD'), "aria-invalid": ((_b = this.errors) === null || _b === void 0 ? void 0 : _b.date) && !((_c = this.folioData) === null || _c === void 0 ? void 0 : _c.date) ? 'true' : 'false', onDateChanged: evt => {
                var _a;
                this.updateFolioData({ date: (_a = evt.detail.start) === null || _a === void 0 ? void 0 : _a.format('YYYY-MM-DD') });
            } }, h("input", { key: '0d7b12fb8a5a52737846d4a69d58f328b2b379e5', type: "text", slot: "trigger", value: ((_d = this.folioData) === null || _d === void 0 ? void 0 : _d.date) ? moment((_e = this.folioData) === null || _e === void 0 ? void 0 : _e.date).format('MMM DD, YYYY') : null, class: `form-control w-100 input-sm ${((_f = this.errors) === null || _f === void 0 ? void 0 : _f.date) && !((_g = this.folioData) === null || _g === void 0 ? void 0 : _g.date) ? 'border-danger' : ''} text-left`, style: { borderTopLeftRadius: '0', borderBottomLeftRadius: '0', width: '100%' } })))))), h("div", { key: '5132d5362c57f6db65fd737bba10ec86d22c3254' }, h("style", { key: '5b8c86215be582f70b36f9fc609bc7e3bc640f3e' }, `
                .price-label {
                  width: 94px !important;
                }
                @media (min-width: 768px) {
                  .price-label {
                    width: 133px !important;
                  }
                }
              `), h("ir-price-input", { key: 'd6aa04f773408b3e5f07d845ca0a10549ef2c904', minValue: 0, autoValidate: this.autoValidate, zod: this.folioSchema.pick({ amount: true }), wrapKey: "amount", label: "Amount", labelStyle: 'price-label', error: ((_h = this.errors) === null || _h === void 0 ? void 0 : _h.amount) && !((_j = this.folioData) === null || _j === void 0 ? void 0 : _j.amount), value: (_l = (_k = this.folioData) === null || _k === void 0 ? void 0 : _k.amount) === null || _l === void 0 ? void 0 : _l.toString(), currency: calendar_data.currency.symbol, onTextChange: e => this.updateFolioData({ amount: Number(e.detail) }) })), h("div", { key: '72643939008bfb945f340445cdff5d1373c44a3c' }, h("ir-dropdown", { key: 'beddb7773ea77189451d3b675a4a659ec549fa8e', value: (_o = (_m = this.folioData) === null || _m === void 0 ? void 0 : _m.payment_type) === null || _o === void 0 ? void 0 : _o.code, onOptionChange: this.handleDropdownChange.bind(this) }, h("div", { key: 'f8dd76441534dd3e38fee1677dd5e0b5b212e3ce', slot: "trigger", class: 'input-group row m-0 ' }, h("div", { key: '7d1ab51a7dc05d560a71dcae92c3d8fd4dcab738', class: `input-group-prepend col-3 p-0 text-dark border-0` }, h("label", { key: '1b5f10202a72fe686cfee80f90ff8bdcc6a07e79', class: `input-group-text flex-grow-1 text-dark  border-theme` }, "Transaction type")), h("button", { key: '2ebfd81e1ffc8c4dda81b649d0183afee480cd09', type: "button", class: `form-control  d-flex align-items-center cursor-pointer ${((_p = this.errors) === null || _p === void 0 ? void 0 : _p.designation) && !((_q = this.folioData) === null || _q === void 0 ? void 0 : _q.designation) ? 'border-danger' : ''}` }, ((_r = this.folioData) === null || _r === void 0 ? void 0 : _r.payment_type) ? h("span", null, (_s = this.folioData.payment_type) === null || _s === void 0 ? void 0 : _s.description) : h("span", null, "Select..."))), h("ir-dropdown-item", { key: '2f000fba5dd7f129d864dfe71ed1c3282d9d9d01', value: "" }, "Select..."), this.renderDropdownItems())), h("div", { key: 'a2a8a9d0881da7d3ef446010b0c211d41d331bc8' }, h("ir-input-text", { key: 'ba4644e49dcf17c4bcbd4d21b2acc82c9daf6177', value: (_t = this.folioData) === null || _t === void 0 ? void 0 : _t.reference, error: (_u = this.errors) === null || _u === void 0 ? void 0 : _u.reference_number, autoValidate: this.autoValidate, zod: this.folioSchema.pick({ reference: true }), label: "Reference", maxLength: 50, inputContainerStyle: {
                margin: '0',
            }, onTextChange: e => this.updateFolioData({ reference: e.detail }), labelWidth: 3 }))), h("div", { key: 'c525332ea3b0df30448a338db5b184ae3667c44d', class: 'sheet-footer' }, h("ir-button", { key: '00f63c0fa37d98b5d485187d857a9bb75efc0fe7', onClick: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `flex-fill`, text: 'Cancel', btn_color: "secondary" }), h("ir-button", { key: '35102755252171ecf521b6601645b555a760450d', btn_styles: "justify-content-center align-items-center", class: 'flex-fill', isLoading: this.isLoading, text: 'Save', btn_color: "primary", btn_type: "submit" }))));
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
            },
            "mode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "FolioEntryMode",
                    "resolved": "\"edit\" | \"new\" | \"payment-action\"",
                    "references": {
                        "FolioEntryMode": {
                            "location": "import",
                            "path": "../../types",
                            "id": "src/components/ir-booking-details/types.ts::FolioEntryMode"
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
                "attribute": "mode",
                "reflect": false
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
