import calendar_data from "../../../../stores/calendar-data";
import { Fragment, h } from "@stencil/core";
import moment from "moment";
import { z, ZodError } from "zod";
import { PaymentService } from "../../../../services/payment.service";
import { buildPaymentTypes } from "../../../../services/booking.service";
import { PAYMENT_TYPES_WITH_METHOD } from "../global.variables";
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
        this._paymentTypes = {};
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
        return (h("form", { key: 'c8d8f298bfb44e3022b346aed3f1f6844b01a3ec', class: 'sheet-container', onSubmit: async (e) => {
                e.preventDefault();
                this.savePayment();
            } }, h("ir-title", { key: '57e341bc2bc204314326165540dc8954ad05e11d', class: "px-1 sheet-header", onCloseSideBar: () => this.closeModal.emit(null), label: this.mode === 'edit' ? 'Edit Folio Entry' : 'New Folio Entry', displayContext: "sidebar" }), h("section", { key: 'dffd2837fa6a7bc8005a191e64a48e16c3c16bc6', class: 'px-1 sheet-body d-flex flex-column', style: { gap: '1rem' } }, h("div", { key: 'f9320a00189fc5e2fbed9a4a1af9c24b4496f221', class: 'd-flex w-fill', style: { gap: '0.5rem' } }, h("div", { key: 'ed79746f3a97263605ce27a725cba080cf8da999', class: "form-group  mb-0 flex-grow-1" }, h("div", { key: 'cf6a9144e9131c06503aefb0b00d6c2e08c6a1f9', class: "input-group row m-0 flex-grow-1" }, h("div", { key: '846e718fbadd9a815ba065edc1ce42866e37b689', class: `input-group-prepend col-4 col-md-3 p-0 text-dark border-0` }, h("label", { key: '734c4209cd76c1e453b696a19f227b5b6c3db200', class: `input-group-text flex-grow-1 text-dark border-theme ` }, "Date")), h("div", { key: '97c580259abedce0ac71e8bb417d84305932e102', class: "form-control  form-control-md col-10 flex-grow-1 d-flex align-items-center px-0 mx-0", style: { border: '0' } }, h("style", { key: '7c17bac59e73ff05096972fd7219882d0fd7dc57' }, `.ir-date-picker-trigger{
                    width:100%;}`), h("ir-date-picker", { key: 'cb15af13dc97f25dbd017feebadc7455fd5447e7', "data-testid": "pickup_date", date: (_a = this.folioData) === null || _a === void 0 ? void 0 : _a.date, class: "w-100", emitEmptyDate: true, maxDate: moment().format('YYYY-MM-DD'), "aria-invalid": ((_b = this.errors) === null || _b === void 0 ? void 0 : _b.date) && !((_c = this.folioData) === null || _c === void 0 ? void 0 : _c.date) ? 'true' : 'false', onDateChanged: evt => {
                var _a;
                this.updateFolioData({ date: (_a = evt.detail.start) === null || _a === void 0 ? void 0 : _a.format('YYYY-MM-DD') });
            } }, h("input", { key: '5b40bb500529caca8fc024b137cb80bb88beab16', type: "text", slot: "trigger", value: ((_d = this.folioData) === null || _d === void 0 ? void 0 : _d.date) ? moment((_e = this.folioData) === null || _e === void 0 ? void 0 : _e.date).format('MMM DD, YYYY') : null, class: `form-control w-100 input-sm ${((_f = this.errors) === null || _f === void 0 ? void 0 : _f.date) && !((_g = this.folioData) === null || _g === void 0 ? void 0 : _g.date) ? 'border-danger' : ''} text-left`, style: { borderTopLeftRadius: '0', borderBottomLeftRadius: '0', width: '100%' } })))))), h("div", { key: '12b0c21aabb0b4a2d5a548a63e03b7b3e382c461' }, h("ir-dropdown", { key: '6fb21918ac5ef5c4ce2b24ab2d1c4a90cb62c102', value: (_j = (_h = this.folioData) === null || _h === void 0 ? void 0 : _h.payment_type) === null || _j === void 0 ? void 0 : _j.code, disabled: this.mode === 'payment-action', onOptionChange: this.handleDropdownChange.bind(this) }, h("div", { key: 'b2d34a811d987f76c6e43a76aed5d51e1747da22', slot: "trigger", class: 'input-group row m-0 ' }, h("div", { key: '7ed8a1ae69bf32f0ad4ff4376ff0607d1eb2256f', class: `input-group-prepend col-4 col-md-3 p-0 text-dark border-0` }, h("label", { key: 'f15c473d58b61a739dd9956d4fd492f1901a7c59', class: `input-group-text flex-grow-1 text-dark  border-theme` }, "Transaction type")), h("button", { key: 'cf20039f44f9477a0dd49b517ac5451e5910cd22', type: "button", disabled: this.mode === 'payment-action', class: `form-control  d-flex align-items-center cursor-pointer ${((_k = this.errors) === null || _k === void 0 ? void 0 : _k.payment_type) && !((_m = (_l = this.folioData) === null || _l === void 0 ? void 0 : _l.payment_type) === null || _m === void 0 ? void 0 : _m.code) ? 'border-danger' : ''}` }, ((_o = this.folioData) === null || _o === void 0 ? void 0 : _o.payment_type) ? h("span", null, (_p = this.folioData.payment_type) === null || _p === void 0 ? void 0 : _p.description) : h("span", null, "Select..."))), h("ir-dropdown-item", { key: 'd119df67501ab4d1a607270ef9dd33663773e035', value: "" }, "Select..."), this.renderDropdownItems())), PAYMENT_TYPES_WITH_METHOD.includes((_r = (_q = this.folioData) === null || _q === void 0 ? void 0 : _q.payment_type) === null || _r === void 0 ? void 0 : _r.code) && (h("div", { key: '10c103046b04d415992892996cbe3bc303d58f60' }, h("ir-dropdown", { key: '40a6b620cdffe4d12e36dfae5d1868b773d9f073', value: (_t = (_s = this.folioData) === null || _s === void 0 ? void 0 : _s.payment_method) === null || _t === void 0 ? void 0 : _t.code, onOptionChange: this.handlePaymentMethodDropdownChange.bind(this) }, h("button", { key: '2940d6bd2c9084d78742ab238eaeced41f6f6606', slot: "trigger", type: "button", class: `form-control d-flex align-items-center cursor-pointer ${((_u = this.errors) === null || _u === void 0 ? void 0 : _u.payment_method) && !((_w = (_v = this.folioData) === null || _v === void 0 ? void 0 : _v.payment_method) === null || _w === void 0 ? void 0 : _w.code) ? 'border-danger' : ''}` }, ((_x = this.folioData) === null || _x === void 0 ? void 0 : _x.payment_method) ? (h("span", null, (_y = this.folioData.payment_method) === null || _y === void 0 ? void 0 : _y.description)) : (h("span", null, "Select ", ((_0 = (_z = this.folioData) === null || _z === void 0 ? void 0 : _z.payment_type) === null || _0 === void 0 ? void 0 : _0.code) === '001' ? 'payment' : 'refund', " method..."))), h("ir-dropdown-item", { key: '22da6c471569a3be769f4cf486b1eb4ae84e4718', value: "" }, "Select ", ((_1 = this.folioData.payment_type) === null || _1 === void 0 ? void 0 : _1.code) === '001' ? 'payment' : 'refund', " method..."), (_3 = (_2 = this.paymentEntries) === null || _2 === void 0 ? void 0 : _2.methods) === null || _3 === void 0 ? void 0 :
            _3.map(pt => {
                return (h("ir-dropdown-item", { value: pt.CODE_NAME, class: "dropdown-item-payment" }, h("span", null, pt.CODE_VALUE_EN)));
            })))), h("div", { key: 'dc26bec8c9ad38f283d7642e88941b1690e094b7' }, h("ir-price-input", { key: '9ee9407a096ce538869fcfe44275c9b6a09382b9', containerClassname: "row", labelContainerClassname: "col-4 col-md-3 p-0 text-dark border-0", minValue: 0, autoValidate: this.autoValidate, zod: this.folioSchema.pick({ amount: true }), wrapKey: "amount", label: "Amount", labelStyle: 'flex-grow-1 text-dark  border-theme', error: ((_4 = this.errors) === null || _4 === void 0 ? void 0 : _4.amount) && !((_5 = this.folioData) === null || _5 === void 0 ? void 0 : _5.amount), value: (_7 = (_6 = this.folioData) === null || _6 === void 0 ? void 0 : _6.amount) === null || _7 === void 0 ? void 0 : _7.toString(), currency: calendar_data.currency.symbol, onTextChange: e => this.updateFolioData({ amount: Number(e.detail) }) })), h("div", { key: 'd5d72cab96b15fe6585aaf0739ff041fa11b02ba' }, h("ir-input-text", { key: 'f3ff25898e74fdc1822c4526f182a523b8e4044c', value: (_8 = this.folioData) === null || _8 === void 0 ? void 0 : _8.reference, error: (_9 = this.errors) === null || _9 === void 0 ? void 0 : _9.reference_number, autoValidate: this.autoValidate, zod: this.folioSchema.pick({ reference: true }), label: "Reference", maxLength: 50, inputContainerStyle: {
                margin: '0',
            }, onTextChange: e => this.updateFolioData({ reference: e.detail }), labelWidth: 3, labelContainerClassname: 'col-4 col-md-3' }))), h("div", { key: '35d196987495b774b6bdc2863159862ed158de17', class: 'sheet-footer' }, h("ir-button", { key: '24617e816a4ae330786e56a4a42ea85f064b9e58', onClick: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `flex-fill`, text: 'Cancel', btn_color: "secondary" }), h("ir-button", { key: 'bcb7b8cc1d5bc41bc0306bad5d7f6e3762b66859', btn_styles: "justify-content-center align-items-center", class: 'flex-fill', isLoading: this.isLoading, text: 'Save', btn_color: "primary", btn_type: "submit" }))));
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
            "paymentEntries": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "PaymentEntries",
                    "resolved": "{ types: IEntries[]; groups: IEntries[]; methods: IEntries[]; }",
                    "references": {
                        "PaymentEntries": {
                            "location": "import",
                            "path": "../../types",
                            "id": "src/components/ir-booking-details/types.ts::PaymentEntries"
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
                    "original": "Payment",
                    "resolved": "{ id: number; date: string; amount: number; currency: ICurrency; designation: string; reference: string; book_nbr?: string; payment_gateway_code?: number; payment_type?: PaymentType; payment_method?: PaymentType; }",
                    "references": {
                        "Payment": {
                            "location": "import",
                            "path": "../../types",
                            "id": "src/components/ir-booking-details/types.ts::Payment"
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
            "folioData": {},
            "_paymentTypes": {}
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
            }, {
                "method": "resetExposedCancellationDueAmount",
                "name": "resetExposedCancellationDueAmount",
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
            }, {
                "propName": "paymentTypes",
                "methodName": "handlePaymentTypesChange"
            }];
    }
}
//# sourceMappingURL=ir-payment-folio.js.map
