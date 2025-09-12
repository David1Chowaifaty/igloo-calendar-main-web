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
            amount: z.coerce.number().refine(a => a !== 0),
            reference: z.string().optional().nullable(),
            designation: z.string().min(1),
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
            await this.paymentService.AddPayment(Object.assign(Object.assign({}, this.folioData), { currency: calendar_data.currency, reference: (_b = this.folioData.reference) !== null && _b !== void 0 ? _b : '', designation: (_c = this.folioData.payment_type) === null || _c === void 0 ? void 0 : _c.description }), this.bookingNumber);
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12;
        return (h("form", { key: '29db5447060e62206e7447ee152c6a31a2987c3e', class: 'sheet-container', onSubmit: async (e) => {
                e.preventDefault();
                this.savePayment();
            } }, h("ir-title", { key: '512d9e692ab1ac9c4007e8b3dec50728bc59a427', class: "px-1 sheet-header", onCloseSideBar: () => this.closeModal.emit(null), label: this.mode === 'edit' ? 'Edit Folio Entry' : 'New Folio Entry', displayContext: "sidebar" }), h("section", { key: '810b2a344b1863691ff950b62a939d54bee0f340', class: 'px-1 sheet-body d-flex flex-column', style: { gap: '1rem' } }, h("div", { key: '1aa317ecdf36e56b8cbf78440e8d077ae1f790be', class: 'd-flex w-fill', style: { gap: '0.5rem' } }, h("div", { key: 'f34c68edd64d9578feb1142e85a8572e35ce778e', class: "form-group  mb-0 flex-grow-1" }, h("div", { key: 'b23ca3adabc966f62ee04408fca2ddf8a052620e', class: "input-group row m-0 flex-grow-1" }, h("div", { key: '6a5f072eb9647fc939a95c3ff190fe13b75cb3a7', class: `input-group-prepend col-4 col-md-3 p-0 text-dark border-0` }, h("label", { key: 'c43a1746acbe15213bb0c4f40ab23459e187ce88', class: `input-group-text flex-grow-1 text-dark border-theme ` }, "Date")), h("div", { key: 'c7ea7e10467b80578e409d91a9dbf72c34f29194', class: "form-control  form-control-md col-10 flex-grow-1 d-flex align-items-center px-0 mx-0", style: { border: '0' } }, h("style", { key: '7a961d83bb2d092aeb7e0dd0deb17ac16c7df9e1' }, `.ir-date-picker-trigger{
                    width:100%;}`), h("ir-date-picker", { key: '752a5ac9f4d79a9a7ab62cf9cf6573bf937fc348', "data-testid": "pickup_date", date: (_a = this.folioData) === null || _a === void 0 ? void 0 : _a.date, class: "w-100", emitEmptyDate: true, maxDate: moment().format('YYYY-MM-DD'), "aria-invalid": ((_b = this.errors) === null || _b === void 0 ? void 0 : _b.date) && !((_c = this.folioData) === null || _c === void 0 ? void 0 : _c.date) ? 'true' : 'false', onDateChanged: evt => {
                var _a;
                this.updateFolioData({ date: (_a = evt.detail.start) === null || _a === void 0 ? void 0 : _a.format('YYYY-MM-DD') });
            } }, h("input", { key: '0c0c362ce8c9d4d9284adf4cdb9996c3d92cdc56', type: "text", slot: "trigger", value: ((_d = this.folioData) === null || _d === void 0 ? void 0 : _d.date) ? moment((_e = this.folioData) === null || _e === void 0 ? void 0 : _e.date).format('MMM DD, YYYY') : null, class: `form-control w-100 input-sm ${((_f = this.errors) === null || _f === void 0 ? void 0 : _f.date) && !((_g = this.folioData) === null || _g === void 0 ? void 0 : _g.date) ? 'border-danger' : ''} text-left`, style: { borderTopLeftRadius: '0', borderBottomLeftRadius: '0', width: '100%' } })))))), h("div", { key: '3d58d14782935aacc085bdd6d1bf8116a3680f76' }, h("ir-price-input", { key: '8737a8f273d43bf3a399466b57ac2b88d5e8f4e7', containerClassname: "row", labelContainerClassname: "col-4 col-md-3 p-0 text-dark border-0", minValue: 0, autoValidate: this.autoValidate, zod: this.folioSchema.pick({ amount: true }), wrapKey: "amount", label: "Amount", labelStyle: 'flex-grow-1 text-dark  border-theme', error: ((_h = this.errors) === null || _h === void 0 ? void 0 : _h.amount) && !((_j = this.folioData) === null || _j === void 0 ? void 0 : _j.amount), value: (_l = (_k = this.folioData) === null || _k === void 0 ? void 0 : _k.amount) === null || _l === void 0 ? void 0 : _l.toString(), currency: calendar_data.currency.symbol, onTextChange: e => this.updateFolioData({ amount: Number(e.detail) }) })), h("div", { key: '595ad16ea55ad04b9c982d95d70235ba15124803' }, h("ir-dropdown", { key: '940b4adf76259f5842c9a432ef366ec76c5bcb1a', value: (_o = (_m = this.folioData) === null || _m === void 0 ? void 0 : _m.payment_type) === null || _o === void 0 ? void 0 : _o.code, disabled: ((_p = this.payment.payment_type) === null || _p === void 0 ? void 0 : _p.code) !== '001' && this.mode === 'payment-action', onOptionChange: this.handleDropdownChange.bind(this) }, h("div", { key: '03b656cf905050fe16e58b8b430475ab4617fcd7', slot: "trigger", class: 'input-group row m-0 ' }, h("div", { key: '78808927b6660d1bb1551f03623b8673653a620b', class: `input-group-prepend col-4 col-md-3 p-0 text-dark border-0` }, h("label", { key: '54f13016897abfe15168299aac671f35c186b31c', class: `input-group-text flex-grow-1 text-dark  border-theme` }, "Transaction type")), h("button", { key: '5be78b684a84f21399017660d0f4f952c3d0d6c5', type: "button", disabled: ((_q = this.payment.payment_type) === null || _q === void 0 ? void 0 : _q.code) !== '001' && this.mode === 'payment-action', class: `form-control  d-flex align-items-center cursor-pointer ${((_r = this.errors) === null || _r === void 0 ? void 0 : _r.designation) && !((_s = this.folioData) === null || _s === void 0 ? void 0 : _s.designation) ? 'border-danger' : ''}` }, ((_t = this.folioData) === null || _t === void 0 ? void 0 : _t.payment_type) ? h("span", null, (_u = this.folioData.payment_type) === null || _u === void 0 ? void 0 : _u.description) : h("span", null, "Select..."))), h("ir-dropdown-item", { key: 'c4f52a491a71c86e1d28024bba73b78bb837a8e1', value: "" }, "Select..."), this.renderDropdownItems())), PAYMENT_TYPES_WITH_METHOD.includes((_w = (_v = this.folioData) === null || _v === void 0 ? void 0 : _v.payment_type) === null || _w === void 0 ? void 0 : _w.code) && (h("div", { key: 'b0bf06e52a72587bc0f09c010c894985979b6cfc' }, h("ir-dropdown", { key: '707ec699dfab9e22c52ae04eb02f3fe639ad9bb4', value: (_y = (_x = this.folioData) === null || _x === void 0 ? void 0 : _x.payment_type) === null || _y === void 0 ? void 0 : _y.code, disabled: ((_z = this.payment.payment_type) === null || _z === void 0 ? void 0 : _z.code) !== '001' && this.mode === 'payment-action', onOptionChange: this.handlePaymentMethodDropdownChange.bind(this) }, h("button", { key: 'b538162b53989bd5a2a130f01e50d74fe3d5c1db', slot: "trigger", type: "button", disabled: ((_0 = this.payment.payment_type) === null || _0 === void 0 ? void 0 : _0.code) !== '001' && this.mode === 'payment-action', class: `form-control d-flex align-items-center cursor-pointer ${((_1 = this.errors) === null || _1 === void 0 ? void 0 : _1.payment_method) && !((_3 = (_2 = this.folioData) === null || _2 === void 0 ? void 0 : _2.payment_method) === null || _3 === void 0 ? void 0 : _3.code) ? 'border-danger' : ''}` }, ((_4 = this.folioData) === null || _4 === void 0 ? void 0 : _4.payment_method) ? (h("span", null, (_5 = this.folioData.payment_method) === null || _5 === void 0 ? void 0 : _5.description)) : (h("span", null, "Select ", ((_7 = (_6 = this.folioData) === null || _6 === void 0 ? void 0 : _6.payment_type) === null || _7 === void 0 ? void 0 : _7.code) === '001' ? 'payment' : 'refund', " method..."))), h("ir-dropdown-item", { key: 'b5658c580891fce77fb961399e554ad2d05ee27f', value: "" }, "Select ", ((_8 = this.folioData.payment_type) === null || _8 === void 0 ? void 0 : _8.code) === '001' ? 'payment' : 'refund', " method..."), (_10 = (_9 = this.paymentEntries) === null || _9 === void 0 ? void 0 : _9.methods) === null || _10 === void 0 ? void 0 :
            _10.map(pt => {
                return (h("ir-dropdown-item", { value: pt.CODE_NAME, class: "dropdown-item-payment" }, h("span", null, pt.CODE_VALUE_EN)));
            })))), h("div", { key: 'ffcec366d134cc71e9cb276a4b3d36b53ff825a1' }, h("ir-input-text", { key: '10dd2ce615f884d1f434caa0947960f4df9c88b2', value: (_11 = this.folioData) === null || _11 === void 0 ? void 0 : _11.reference, error: (_12 = this.errors) === null || _12 === void 0 ? void 0 : _12.reference_number, autoValidate: this.autoValidate, zod: this.folioSchema.pick({ reference: true }), label: "Reference", maxLength: 50, inputContainerStyle: {
                margin: '0',
            }, onTextChange: e => this.updateFolioData({ reference: e.detail }), labelWidth: 3, labelContainerClassname: 'col-4 col-md-3' }))), h("div", { key: '6635b0807712e8e9c3f3b17a5f8af08f3f3c9821', class: 'sheet-footer' }, h("ir-button", { key: 'dca24fb7e1ba4a8b55aed99eb129bf7c6faeca8b', onClick: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `flex-fill`, text: 'Cancel', btn_color: "secondary" }), h("ir-button", { key: '7a4a218d53efa80828f0fcd19f25f282b69bf15f', btn_styles: "justify-content-center align-items-center", class: 'flex-fill', isLoading: this.isLoading, text: 'Save', btn_color: "primary", btn_type: "submit" }))));
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
