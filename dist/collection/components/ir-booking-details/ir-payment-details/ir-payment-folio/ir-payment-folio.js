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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8;
        return (h("form", { key: '79b51fe2adc2f3cbde541969fc61d5fc1b76edc7', class: 'sheet-container', onSubmit: async (e) => {
                e.preventDefault();
                this.savePayment();
            } }, h("ir-title", { key: '65b9b0eb92bf56a8f95bd98e9a07a2c37f83e124', class: "px-1 sheet-header", onCloseSideBar: () => this.closeModal.emit(null), label: this.mode === 'edit' ? 'Edit Folio Entry' : 'New Folio Entry', displayContext: "sidebar" }), h("section", { key: 'b6ca6f6d02b5b194fbc463b8eb4dd61d44fffc47', class: 'px-1 sheet-body d-flex flex-column', style: { gap: '1rem' } }, h("div", { key: 'd6e8cb95440105496267fe61a49623283bbf5717', class: 'd-flex w-fill', style: { gap: '0.5rem' } }, h("div", { key: '6f0bcc85da066725031d59408aec77d034c6e7fe', class: "form-group  mb-0 flex-grow-1" }, h("div", { key: 'e6ad9281698c070dc96b3a2401dd61e1d1e226d5', class: "input-group row m-0 flex-grow-1" }, h("div", { key: '380f10642369699503ead55a212a999fe883166a', class: `input-group-prepend col-4 col-md-3 p-0 text-dark border-0` }, h("label", { key: '3075f2d0866197f91fff706fd1bc8c474abf3a60', class: `input-group-text flex-grow-1 text-dark border-theme ` }, "Date")), h("div", { key: '1ab66a5de25dbb15bcb38738fddb232a70c06272', class: "form-control  form-control-md col-10 flex-grow-1 d-flex align-items-center px-0 mx-0", style: { border: '0' } }, h("style", { key: 'a03b9d974ee1fd84fd98d08c9fb2e066890ada66' }, `.ir-date-picker-trigger{
                    width:100%;}`), h("ir-date-picker", { key: '05e437d65691b5ecbe0155b8b93bfa447a54d77d', "data-testid": "pickup_date", date: (_a = this.folioData) === null || _a === void 0 ? void 0 : _a.date, class: "w-100", emitEmptyDate: true, maxDate: moment().format('YYYY-MM-DD'), "aria-invalid": ((_b = this.errors) === null || _b === void 0 ? void 0 : _b.date) && !((_c = this.folioData) === null || _c === void 0 ? void 0 : _c.date) ? 'true' : 'false', onDateChanged: evt => {
                var _a;
                this.updateFolioData({ date: (_a = evt.detail.start) === null || _a === void 0 ? void 0 : _a.format('YYYY-MM-DD') });
            } }, h("input", { key: '2d6c3a19e00e522111b589613bc0b32211e0662a', type: "text", slot: "trigger", value: ((_d = this.folioData) === null || _d === void 0 ? void 0 : _d.date) ? moment((_e = this.folioData) === null || _e === void 0 ? void 0 : _e.date).format('MMM DD, YYYY') : null, class: `form-control w-100 input-sm ${((_f = this.errors) === null || _f === void 0 ? void 0 : _f.date) && !((_g = this.folioData) === null || _g === void 0 ? void 0 : _g.date) ? 'border-danger' : ''} text-left`, style: { borderTopLeftRadius: '0', borderBottomLeftRadius: '0', width: '100%' } })))))), h("div", { key: '51079e178559930fad1a254a90033de852118664' }, h("ir-price-input", { key: '92f186f64442e76c0ca9e75512fca3df1961f013', containerClassname: "row", labelContainerClassname: "col-4 col-md-3 p-0 text-dark border-0", minValue: 0, autoValidate: this.autoValidate, zod: this.folioSchema.pick({ amount: true }), wrapKey: "amount", label: "Amount", labelStyle: 'flex-grow-1 text-dark  border-theme', error: ((_h = this.errors) === null || _h === void 0 ? void 0 : _h.amount) && !((_j = this.folioData) === null || _j === void 0 ? void 0 : _j.amount), value: (_l = (_k = this.folioData) === null || _k === void 0 ? void 0 : _k.amount) === null || _l === void 0 ? void 0 : _l.toString(), currency: calendar_data.currency.symbol, onTextChange: e => this.updateFolioData({ amount: Number(e.detail) }) })), h("div", { key: 'ed264fb9cfea25e8d16f264c58e5ca411417f7f4' }, h("ir-dropdown", { key: '2c48343e88dd7dd08d8c15f531712d4027e8c7a0', value: (_o = (_m = this.folioData) === null || _m === void 0 ? void 0 : _m.payment_type) === null || _o === void 0 ? void 0 : _o.code, disabled: this.mode === 'payment-action', onOptionChange: this.handleDropdownChange.bind(this) }, h("div", { key: '2f630f30ce4252bb014eacb64f50c9a191a378b7', slot: "trigger", class: 'input-group row m-0 ' }, h("div", { key: '3ad117fc398724b095db3a199950a5923575cf97', class: `input-group-prepend col-4 col-md-3 p-0 text-dark border-0` }, h("label", { key: 'de6989ff92cc03ffebaa0d11285067fe70eec486', class: `input-group-text flex-grow-1 text-dark  border-theme` }, "Transaction type")), h("button", { key: '07c14bb9b3410187033e2ec8a163192cc3fafc1e', type: "button", disabled: this.mode === 'payment-action', class: `form-control  d-flex align-items-center cursor-pointer ${((_p = this.errors) === null || _p === void 0 ? void 0 : _p.designation) && !((_q = this.folioData) === null || _q === void 0 ? void 0 : _q.designation) ? 'border-danger' : ''}` }, ((_r = this.folioData) === null || _r === void 0 ? void 0 : _r.payment_type) ? h("span", null, (_s = this.folioData.payment_type) === null || _s === void 0 ? void 0 : _s.description) : h("span", null, "Select..."))), h("ir-dropdown-item", { key: 'a40828b4090fee75768fec240ec4586dae40361a', value: "" }, "Select..."), this.renderDropdownItems())), PAYMENT_TYPES_WITH_METHOD.includes((_u = (_t = this.folioData) === null || _t === void 0 ? void 0 : _t.payment_type) === null || _u === void 0 ? void 0 : _u.code) && (h("div", { key: '13803cd8386f6c5ba07c60cb6f8d7625dd3f5740' }, h("ir-dropdown", { key: '7ac18e6a451cf7108ad46b16be06418314b77880', value: (_w = (_v = this.folioData) === null || _v === void 0 ? void 0 : _v.payment_method) === null || _w === void 0 ? void 0 : _w.code, onOptionChange: this.handlePaymentMethodDropdownChange.bind(this) }, h("button", { key: '13f8991e3d0fe4ef21b2474578ee76ee4a7529c0', slot: "trigger", type: "button", class: `form-control d-flex align-items-center cursor-pointer ${((_x = this.errors) === null || _x === void 0 ? void 0 : _x.payment_method) && !((_z = (_y = this.folioData) === null || _y === void 0 ? void 0 : _y.payment_method) === null || _z === void 0 ? void 0 : _z.code) ? 'border-danger' : ''}` }, ((_0 = this.folioData) === null || _0 === void 0 ? void 0 : _0.payment_method) ? (h("span", null, (_1 = this.folioData.payment_method) === null || _1 === void 0 ? void 0 : _1.description)) : (h("span", null, "Select ", ((_3 = (_2 = this.folioData) === null || _2 === void 0 ? void 0 : _2.payment_type) === null || _3 === void 0 ? void 0 : _3.code) === '001' ? 'payment' : 'refund', " method..."))), h("ir-dropdown-item", { key: '9028df4d59506d25f96c0b2106224a93de1f8e58', value: "" }, "Select ", ((_4 = this.folioData.payment_type) === null || _4 === void 0 ? void 0 : _4.code) === '001' ? 'payment' : 'refund', " method..."), (_6 = (_5 = this.paymentEntries) === null || _5 === void 0 ? void 0 : _5.methods) === null || _6 === void 0 ? void 0 :
            _6.map(pt => {
                return (h("ir-dropdown-item", { value: pt.CODE_NAME, class: "dropdown-item-payment" }, h("span", null, pt.CODE_VALUE_EN)));
            })))), h("div", { key: 'bca81e1f421fe70fc3ddbdbc3284b6ca4ed459a4' }, h("ir-input-text", { key: '11bafb606f8e037ca92aa47e6797520b9013c292', value: (_7 = this.folioData) === null || _7 === void 0 ? void 0 : _7.reference, error: (_8 = this.errors) === null || _8 === void 0 ? void 0 : _8.reference_number, autoValidate: this.autoValidate, zod: this.folioSchema.pick({ reference: true }), label: "Reference", maxLength: 50, inputContainerStyle: {
                margin: '0',
            }, onTextChange: e => this.updateFolioData({ reference: e.detail }), labelWidth: 3, labelContainerClassname: 'col-4 col-md-3' }))), h("div", { key: '5cfa2f7a570ed5fc8131e7d1ef88926bef2c16c2', class: 'sheet-footer' }, h("ir-button", { key: '9859a28eb6daa14d210fe1924c11ebe05cb4d99c', onClick: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `flex-fill`, text: 'Cancel', btn_color: "secondary" }), h("ir-button", { key: '638c1741d4b6f88906e553f9282f8b401e3e0c49', btn_styles: "justify-content-center align-items-center", class: 'flex-fill', isLoading: this.isLoading, text: 'Save', btn_color: "primary", btn_type: "submit" }))));
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
