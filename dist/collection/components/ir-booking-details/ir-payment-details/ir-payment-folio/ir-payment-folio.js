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
    async getPaymentTypes() {
        // Safety checks
        if (!Array.isArray(this.paymentTypes) || this.paymentTypes.length === 0) {
            this._paymentTypes = {};
            return;
        }
        // Local copy so we never mutate the prop
        const items = [...this.paymentTypes];
        // Helper: keep the order defined by the code arrays
        const byCodes = (codes) => codes.map(code => items.find(i => i.CODE_NAME === code)).filter((x) => Boolean(x));
        // Code groups
        const paymentsTypesCodes = ['001', '002', '003', '004', '005', '006', '007', '008'];
        const adjustmentsTypeCodes = ['009', '010', '011'];
        const cancellationTypesCodes = ['012', '013'];
        // Build the record in display order (Payments → Adjustments → Cancellations)
        let rec = {};
        if (this.mode === 'payment-action') {
            // Only payments for "payment-action"
            const payments = byCodes(paymentsTypesCodes);
            if (payments.length)
                rec['Payments'] = payments;
        }
        else {
            const payments = byCodes(paymentsTypesCodes);
            const adjustments = byCodes(adjustmentsTypeCodes);
            const cancellations = byCodes(cancellationTypesCodes);
            if (payments.length)
                rec['Payments'] = payments;
            if (adjustments.length)
                rec['Adjustments'] = adjustments;
            if (cancellations.length)
                rec['Cancellations'] = cancellations;
        }
        this._paymentTypes = rec;
    }
    renderDropdownItems() {
        console.log(this._paymentTypes);
        return Object.values(this._paymentTypes).map((p, idx) => (h(Fragment, null, p.map(pt => (h("ir-dropdown-item", { value: pt.CODE_NAME, class: "dropdown-item-payment" }, h("span", null, pt.CODE_VALUE_EN), h("span", { class: `payment-type-badge ${pt.NOTES === 'CR' ? 'credit-badge' : 'debit-badge'}` }, pt.NOTES === 'CR' ? 'credit' : 'debit')))), idx !== Object.values(this._paymentTypes).length - 1 && h("div", { class: "dropdown-divider" }))));
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
        return (h("form", { key: '705a0629410f540dbeeb60533e3e84390abe71de', class: 'sheet-container', onSubmit: async (e) => {
                e.preventDefault();
                this.savePayment();
            } }, h("ir-title", { key: 'd9b7f80f073653c5d95f1d635c8049981a207d14', class: "px-1 sheet-header", onCloseSideBar: () => this.closeModal.emit(null), label: this.mode === 'edit' ? 'Edit Folio Entry' : 'New Folio Entry', displayContext: "sidebar" }), h("section", { key: '0c57bb5169acfb77f21a64f09f62fad0bc55e39b', class: 'px-1 sheet-body d-flex flex-column', style: { gap: '1rem' } }, h("div", { key: '0179e606a4e21c7286e2ebe702d50361221093ef', class: 'd-flex w-fill', style: { gap: '0.5rem' } }, h("div", { key: '9459816c08b7d3a76438e887824a993c8be51cf9', class: "form-group  mb-0 flex-grow-1" }, h("div", { key: '930b847a6cab9943f0a7bc63332516b877dfd1e5', class: "input-group row m-0 flex-grow-1" }, h("div", { key: '780ad9fff1e21105ac28b1c6e0ab2d329efe3e19', class: `input-group-prepend col-4 col-md-3 p-0 text-dark border-0` }, h("label", { key: 'd1063e08312a3d9926b2d6ddceb0ecd7ccf464cc', class: `input-group-text flex-grow-1 text-dark border-theme ` }, "Date")), h("div", { key: '58f7122ace4ab23dd2939fb3b93cc8d061ba8cd3', class: "form-control  form-control-md col-10 flex-grow-1 d-flex align-items-center px-0 mx-0", style: { border: '0' } }, h("style", { key: 'ee67540597d7bc6bb764c68b0f938e09639a8629' }, `.ir-date-picker-trigger{
                    width:100%;}`), h("ir-date-picker", { key: '5cf131929611954ccb7527ee448b9c5a0c772f5e', "data-testid": "pickup_date", date: (_a = this.folioData) === null || _a === void 0 ? void 0 : _a.date, class: "w-100", emitEmptyDate: true, maxDate: moment().format('YYYY-MM-DD'), "aria-invalid": ((_b = this.errors) === null || _b === void 0 ? void 0 : _b.date) && !((_c = this.folioData) === null || _c === void 0 ? void 0 : _c.date) ? 'true' : 'false', onDateChanged: evt => {
                var _a;
                this.updateFolioData({ date: (_a = evt.detail.start) === null || _a === void 0 ? void 0 : _a.format('YYYY-MM-DD') });
            } }, h("input", { key: 'a213e5fb62c8da83516dddc0bec99360f463ae5a', type: "text", slot: "trigger", value: ((_d = this.folioData) === null || _d === void 0 ? void 0 : _d.date) ? moment((_e = this.folioData) === null || _e === void 0 ? void 0 : _e.date).format('MMM DD, YYYY') : null, class: `form-control w-100 input-sm ${((_f = this.errors) === null || _f === void 0 ? void 0 : _f.date) && !((_g = this.folioData) === null || _g === void 0 ? void 0 : _g.date) ? 'border-danger' : ''} text-left`, style: { borderTopLeftRadius: '0', borderBottomLeftRadius: '0', width: '100%' } })))))), h("div", { key: 'c926f9284e3a76fc0568296dae619aa4307f5924' }, h("ir-price-input", { key: '2c064c5ca6bd8b7d2a7038f13385438c0fe16be3', containerClassname: "row", labelContainerClassname: "col-4 col-md-3 p-0 text-dark border-0", minValue: 0, autoValidate: this.autoValidate, zod: this.folioSchema.pick({ amount: true }), wrapKey: "amount", label: "Amount", labelStyle: 'flex-grow-1 text-dark  border-theme', error: ((_h = this.errors) === null || _h === void 0 ? void 0 : _h.amount) && !((_j = this.folioData) === null || _j === void 0 ? void 0 : _j.amount), value: (_l = (_k = this.folioData) === null || _k === void 0 ? void 0 : _k.amount) === null || _l === void 0 ? void 0 : _l.toString(), currency: calendar_data.currency.symbol, onTextChange: e => this.updateFolioData({ amount: Number(e.detail) }) })), h("div", { key: '9c453112756614f556a2ba2818df5945f4ae9654' }, h("ir-dropdown", { key: '66871e51cb084088a253a7c2cc2477a027e38ccf', value: (_o = (_m = this.folioData) === null || _m === void 0 ? void 0 : _m.payment_type) === null || _o === void 0 ? void 0 : _o.code, disabled: ((_p = this.payment.payment_type) === null || _p === void 0 ? void 0 : _p.code) !== '001' && this.mode === 'payment-action', onOptionChange: this.handleDropdownChange.bind(this) }, h("div", { key: '34b7bccb85364cd916e5f9ad305e454840112f47', slot: "trigger", class: 'input-group row m-0 ' }, h("div", { key: '27f88300f1c2f8617ff250a40e822cc36b4cf819', class: `input-group-prepend col-4 col-md-3 p-0 text-dark border-0` }, h("label", { key: 'c6123fc3dac41d11d6012b508df2da7244528223', class: `input-group-text flex-grow-1 text-dark  border-theme` }, "Transaction type")), h("button", { key: 'd46cd4b43700ea4dd600e06ae2cd80982792ecad', type: "button", disabled: ((_q = this.payment.payment_type) === null || _q === void 0 ? void 0 : _q.code) !== '001' && this.mode === 'payment-action', class: `form-control  d-flex align-items-center cursor-pointer ${((_r = this.errors) === null || _r === void 0 ? void 0 : _r.designation) && !((_s = this.folioData) === null || _s === void 0 ? void 0 : _s.designation) ? 'border-danger' : ''}` }, ((_t = this.folioData) === null || _t === void 0 ? void 0 : _t.payment_type) ? h("span", null, (_u = this.folioData.payment_type) === null || _u === void 0 ? void 0 : _u.description) : h("span", null, "Select..."))), h("ir-dropdown-item", { key: '86c146a89d6e1012057a88b4ced8b42f1c1db7da', value: "" }, "Select..."), this.renderDropdownItems())), h("div", { key: '1feb3476505942139cddf98f3fefcf3c1ee330d6' }, h("ir-input-text", { key: 'f84d5088fb11cd3d09a62b0568fcfedc80bb50cf', value: (_v = this.folioData) === null || _v === void 0 ? void 0 : _v.reference, error: (_w = this.errors) === null || _w === void 0 ? void 0 : _w.reference_number, autoValidate: this.autoValidate, zod: this.folioSchema.pick({ reference: true }), label: "Reference", maxLength: 50, inputContainerStyle: {
                margin: '0',
            }, onTextChange: e => this.updateFolioData({ reference: e.detail }), labelWidth: 3, labelContainerClassname: 'col-4 col-md-3' }))), h("div", { key: 'e3a9d32afdbdbe691cce2390649d6b8337329506', class: 'sheet-footer' }, h("ir-button", { key: '2522b1b53cae72417fc5f6ba6a03903db0da8fe9', onClick: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `flex-fill`, text: 'Cancel', btn_color: "secondary" }), h("ir-button", { key: '19a6ccf0501617c6cfe71124ca968d01bbf56257', btn_styles: "justify-content-center align-items-center", class: 'flex-fill', isLoading: this.isLoading, text: 'Save', btn_color: "primary", btn_type: "submit" }))));
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
