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
        return (h("form", { key: 'e1c84c7890c7cfc2f5aa5078a047a816b0dd592b', class: 'sheet-container', onSubmit: async (e) => {
                e.preventDefault();
                this.savePayment();
            } }, h("ir-title", { key: 'd12ced634a02f963c91022adfcd737c041ecb597', class: "px-1 sheet-header", onCloseSideBar: () => this.closeModal.emit(null), label: this.mode === 'edit' ? 'Edit Folio Entry' : 'New Folio Entry', displayContext: "sidebar" }), h("section", { key: '97019f88e50f2eb3fc6ff1b415c7ad6474cc888c', class: 'px-1 sheet-body d-flex flex-column', style: { gap: '1rem' } }, h("div", { key: '0f287b496edd5fb7ccebd762a0b396b7f6e4e4b2', class: 'd-flex w-fill', style: { gap: '0.5rem' } }, h("div", { key: 'a375c6596b0af47f901712e9209e63ef83856207', class: "form-group  mb-0 flex-grow-1" }, h("div", { key: '7c6bfbbf19c0a23d2034ee252710d565d9346949', class: "input-group row m-0 flex-grow-1" }, h("div", { key: 'c367fbf25a334f8c0ac5d3d6edb0179f6285c729', class: `input-group-prepend col-4 col-md-3 p-0 text-dark border-0` }, h("label", { key: '96f2dd4f118625c983afdf2a2886b5388186a420', class: `input-group-text flex-grow-1 text-dark border-theme ` }, "Date")), h("div", { key: '378f0c52ff077f7a58caf5988830872c252911fb', class: "form-control  form-control-md col-10 flex-grow-1 d-flex align-items-center px-0 mx-0", style: { border: '0' } }, h("style", { key: '0cfa4e5d3a661b0211eecbcd832bf02edee848f3' }, `.ir-date-picker-trigger{
                    width:100%;}`), h("ir-date-picker", { key: 'c5600e8967b850b5586ea7d834fff7d5336c7b2b', "data-testid": "pickup_date", date: (_a = this.folioData) === null || _a === void 0 ? void 0 : _a.date, class: "w-100", emitEmptyDate: true, maxDate: moment().format('YYYY-MM-DD'), "aria-invalid": ((_b = this.errors) === null || _b === void 0 ? void 0 : _b.date) && !((_c = this.folioData) === null || _c === void 0 ? void 0 : _c.date) ? 'true' : 'false', onDateChanged: evt => {
                var _a;
                this.updateFolioData({ date: (_a = evt.detail.start) === null || _a === void 0 ? void 0 : _a.format('YYYY-MM-DD') });
            } }, h("input", { key: '04765977c0fae1bce03c0d97c2f24b00ce7fa268', type: "text", slot: "trigger", value: ((_d = this.folioData) === null || _d === void 0 ? void 0 : _d.date) ? moment((_e = this.folioData) === null || _e === void 0 ? void 0 : _e.date).format('MMM DD, YYYY') : null, class: `form-control w-100 input-sm ${((_f = this.errors) === null || _f === void 0 ? void 0 : _f.date) && !((_g = this.folioData) === null || _g === void 0 ? void 0 : _g.date) ? 'border-danger' : ''} text-left`, style: { borderTopLeftRadius: '0', borderBottomLeftRadius: '0', width: '100%' } })))))), h("div", { key: 'dcb819771e7109fd19634f75fc965f3a1da870af' }, h("ir-price-input", { key: 'd86402c91b0749d837dca460539fb5937c0d78fa', containerClassname: "row", labelContainerClassname: "col-4 col-md-3 p-0 text-dark border-0", minValue: 0, autoValidate: this.autoValidate, zod: this.folioSchema.pick({ amount: true }), wrapKey: "amount", label: "Amount", labelStyle: 'flex-grow-1 text-dark  border-theme', error: ((_h = this.errors) === null || _h === void 0 ? void 0 : _h.amount) && !((_j = this.folioData) === null || _j === void 0 ? void 0 : _j.amount), value: (_l = (_k = this.folioData) === null || _k === void 0 ? void 0 : _k.amount) === null || _l === void 0 ? void 0 : _l.toString(), currency: calendar_data.currency.symbol, onTextChange: e => this.updateFolioData({ amount: Number(e.detail) }) })), h("div", { key: 'c9bab864bd545302c002115dfee00eb895c1cb5e' }, h("ir-dropdown", { key: '8f01d0fc49bb0a592ccfe75de0a58421dc75ff36', value: (_o = (_m = this.folioData) === null || _m === void 0 ? void 0 : _m.payment_type) === null || _o === void 0 ? void 0 : _o.code, disabled: this.mode === 'payment-action', onOptionChange: this.handleDropdownChange.bind(this) }, h("div", { key: '98fc6d5c1a3c19aa430dc36e3b4b587362e742a3', slot: "trigger", class: 'input-group row m-0 ' }, h("div", { key: 'be8fcb6e52426b049b70e67f9f7a78752a4a2aac', class: `input-group-prepend col-4 col-md-3 p-0 text-dark border-0` }, h("label", { key: 'ae03a1021c22ac6951fa7074320e2faad13b606e', class: `input-group-text flex-grow-1 text-dark  border-theme` }, "Transaction type")), h("button", { key: '38a40da6cd9886de7e902fee793130241b101fbd', type: "button", disabled: this.mode === 'payment-action', class: `form-control  d-flex align-items-center cursor-pointer ${((_p = this.errors) === null || _p === void 0 ? void 0 : _p.payment_type) && !((_r = (_q = this.folioData) === null || _q === void 0 ? void 0 : _q.payment_type) === null || _r === void 0 ? void 0 : _r.code) ? 'border-danger' : ''}` }, ((_s = this.folioData) === null || _s === void 0 ? void 0 : _s.payment_type) ? h("span", null, (_t = this.folioData.payment_type) === null || _t === void 0 ? void 0 : _t.description) : h("span", null, "Select..."))), h("ir-dropdown-item", { key: 'e8936c2afa223956068c2805c18d1179125cb40f', value: "" }, "Select..."), this.renderDropdownItems())), PAYMENT_TYPES_WITH_METHOD.includes((_v = (_u = this.folioData) === null || _u === void 0 ? void 0 : _u.payment_type) === null || _v === void 0 ? void 0 : _v.code) && (h("div", { key: '22937ac315e0b170827b8e2d97362abcb16ec75e' }, h("ir-dropdown", { key: 'b4e24815f6552f524dcfc162e1e8b3dee9c0d973', value: (_x = (_w = this.folioData) === null || _w === void 0 ? void 0 : _w.payment_method) === null || _x === void 0 ? void 0 : _x.code, onOptionChange: this.handlePaymentMethodDropdownChange.bind(this) }, h("button", { key: '68ba94542da9f244fd4f24a40768e66fefad9e8e', slot: "trigger", type: "button", class: `form-control d-flex align-items-center cursor-pointer ${((_y = this.errors) === null || _y === void 0 ? void 0 : _y.payment_method) && !((_0 = (_z = this.folioData) === null || _z === void 0 ? void 0 : _z.payment_method) === null || _0 === void 0 ? void 0 : _0.code) ? 'border-danger' : ''}` }, ((_1 = this.folioData) === null || _1 === void 0 ? void 0 : _1.payment_method) ? (h("span", null, (_2 = this.folioData.payment_method) === null || _2 === void 0 ? void 0 : _2.description)) : (h("span", null, "Select ", ((_4 = (_3 = this.folioData) === null || _3 === void 0 ? void 0 : _3.payment_type) === null || _4 === void 0 ? void 0 : _4.code) === '001' ? 'payment' : 'refund', " method..."))), h("ir-dropdown-item", { key: 'db5b774831893f8debde53818e740f4de5e8d9c2', value: "" }, "Select ", ((_5 = this.folioData.payment_type) === null || _5 === void 0 ? void 0 : _5.code) === '001' ? 'payment' : 'refund', " method..."), (_7 = (_6 = this.paymentEntries) === null || _6 === void 0 ? void 0 : _6.methods) === null || _7 === void 0 ? void 0 :
            _7.map(pt => {
                return (h("ir-dropdown-item", { value: pt.CODE_NAME, class: "dropdown-item-payment" }, h("span", null, pt.CODE_VALUE_EN)));
            })))), h("div", { key: '30413e9e5bbc1b5c8c30f752490be9ab136932a5' }, h("ir-input-text", { key: '1e9f4e43fde3252d0ecd084660766275608db352', value: (_8 = this.folioData) === null || _8 === void 0 ? void 0 : _8.reference, error: (_9 = this.errors) === null || _9 === void 0 ? void 0 : _9.reference_number, autoValidate: this.autoValidate, zod: this.folioSchema.pick({ reference: true }), label: "Reference", maxLength: 50, inputContainerStyle: {
                margin: '0',
            }, onTextChange: e => this.updateFolioData({ reference: e.detail }), labelWidth: 3, labelContainerClassname: 'col-4 col-md-3' }))), h("div", { key: '550aeba08fc8bc0e017f6425b0de416193b6b5de', class: 'sheet-footer' }, h("ir-button", { key: '89e3b207f9f1f9137da7d7d0547f015ca6af6bc9', onClick: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `flex-fill`, text: 'Cancel', btn_color: "secondary" }), h("ir-button", { key: 'a9756fc285fc03a67161638a23fcebae1a2ca9af', btn_styles: "justify-content-center align-items-center", class: 'flex-fill', isLoading: this.isLoading, text: 'Save', btn_color: "primary", btn_type: "submit" }))));
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
