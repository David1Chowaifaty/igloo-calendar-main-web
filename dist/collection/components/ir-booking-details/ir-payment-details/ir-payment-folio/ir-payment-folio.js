import calendar_data from "../../../../stores/calendar-data";
import { Fragment, h } from "@stencil/core";
import moment from "moment";
import { z, ZodError } from "zod";
import { PaymentService } from "../../../../services/payment.service";
import { buildPaymentTypes } from "../../../../services/booking.service";
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
        var _a;
        const rec = buildPaymentTypes(this.paymentTypes, this.paymentTypesGroups);
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
        return (h("form", { key: '2a8187232925f8b7be05a5d4c83701abcf27dac4', class: 'sheet-container', onSubmit: async (e) => {
                e.preventDefault();
                this.savePayment();
            } }, h("ir-title", { key: '92fef2faa274657a0074ebd4ad6fac4c2f62f720', class: "px-1 sheet-header", onCloseSideBar: () => this.closeModal.emit(null), label: this.mode === 'edit' ? 'Edit Folio Entry' : 'New Folio Entry', displayContext: "sidebar" }), h("section", { key: '112e4ed8720629d140992b968dd620552faa78f6', class: 'px-1 sheet-body d-flex flex-column', style: { gap: '1rem' } }, h("div", { key: '4c945b8c692f638d45deb09af009b58bc73e2021', class: 'd-flex w-fill', style: { gap: '0.5rem' } }, h("div", { key: 'f38b5fb806b2b2d6d346e1ea3eff9974b59f0052', class: "form-group  mb-0 flex-grow-1" }, h("div", { key: '1e1f6b27ce91fa6d76a52120c0e873aed05a3c77', class: "input-group row m-0 flex-grow-1" }, h("div", { key: 'b3eee69e897bc52904d1d68c8995b969f98c873b', class: `input-group-prepend col-4 col-md-3 p-0 text-dark border-0` }, h("label", { key: '7fbc7d39b3dee408e6c364e00fe95654b1eb8614', class: `input-group-text flex-grow-1 text-dark border-theme ` }, "Date")), h("div", { key: '29a341c6f1fa1254f10e6131e58ee66b8da0146f', class: "form-control  form-control-md col-10 flex-grow-1 d-flex align-items-center px-0 mx-0", style: { border: '0' } }, h("style", { key: 'ea035d76ff516b1090ceff85159b820e168d3d2b' }, `.ir-date-picker-trigger{
                    width:100%;}`), h("ir-date-picker", { key: '81d8bf5dc04ad2c7a9374a2a4fd562c3e5b5b1be', "data-testid": "pickup_date", date: (_a = this.folioData) === null || _a === void 0 ? void 0 : _a.date, class: "w-100", emitEmptyDate: true, maxDate: moment().format('YYYY-MM-DD'), "aria-invalid": ((_b = this.errors) === null || _b === void 0 ? void 0 : _b.date) && !((_c = this.folioData) === null || _c === void 0 ? void 0 : _c.date) ? 'true' : 'false', onDateChanged: evt => {
                var _a;
                this.updateFolioData({ date: (_a = evt.detail.start) === null || _a === void 0 ? void 0 : _a.format('YYYY-MM-DD') });
            } }, h("input", { key: 'dd9652b2b802aae27573855b3e5b01a8cfc267ee', type: "text", slot: "trigger", value: ((_d = this.folioData) === null || _d === void 0 ? void 0 : _d.date) ? moment((_e = this.folioData) === null || _e === void 0 ? void 0 : _e.date).format('MMM DD, YYYY') : null, class: `form-control w-100 input-sm ${((_f = this.errors) === null || _f === void 0 ? void 0 : _f.date) && !((_g = this.folioData) === null || _g === void 0 ? void 0 : _g.date) ? 'border-danger' : ''} text-left`, style: { borderTopLeftRadius: '0', borderBottomLeftRadius: '0', width: '100%' } })))))), h("div", { key: 'a5dc2a3e812d896d805ed7bba1b163666f6fb268' }, h("ir-price-input", { key: 'd660d9a7c33fac2a5695470532c5418db78ffa20', containerClassname: "row", labelContainerClassname: "col-4 col-md-3 p-0 text-dark border-0", minValue: 0, autoValidate: this.autoValidate, zod: this.folioSchema.pick({ amount: true }), wrapKey: "amount", label: "Amount", labelStyle: 'flex-grow-1 text-dark  border-theme', error: ((_h = this.errors) === null || _h === void 0 ? void 0 : _h.amount) && !((_j = this.folioData) === null || _j === void 0 ? void 0 : _j.amount), value: (_l = (_k = this.folioData) === null || _k === void 0 ? void 0 : _k.amount) === null || _l === void 0 ? void 0 : _l.toString(), currency: calendar_data.currency.symbol, onTextChange: e => this.updateFolioData({ amount: Number(e.detail) }) })), h("div", { key: 'e34b0067245388db1d9e31cf1510b7e3d079cc07' }, h("ir-dropdown", { key: '327379f38b2657d7b6fe46a79097f732d9ac0e51', value: (_o = (_m = this.folioData) === null || _m === void 0 ? void 0 : _m.payment_type) === null || _o === void 0 ? void 0 : _o.code, disabled: ((_p = this.payment.payment_type) === null || _p === void 0 ? void 0 : _p.code) !== '001' && this.mode === 'payment-action', onOptionChange: this.handleDropdownChange.bind(this) }, h("div", { key: '6b2c28631618121d8323c317af777552133032c2', slot: "trigger", class: 'input-group row m-0 ' }, h("div", { key: '6d4fb964b368f2d6f96246a4c493ac7e09233b97', class: `input-group-prepend col-4 col-md-3 p-0 text-dark border-0` }, h("label", { key: 'b045229e9e50cb4bb4665185279f8397e9bed1d6', class: `input-group-text flex-grow-1 text-dark  border-theme` }, "Transaction type")), h("button", { key: 'eb5c06f1d7c43a85a940534148833a74f0f2035d', type: "button", disabled: ((_q = this.payment.payment_type) === null || _q === void 0 ? void 0 : _q.code) !== '001' && this.mode === 'payment-action', class: `form-control  d-flex align-items-center cursor-pointer ${((_r = this.errors) === null || _r === void 0 ? void 0 : _r.designation) && !((_s = this.folioData) === null || _s === void 0 ? void 0 : _s.designation) ? 'border-danger' : ''}` }, ((_t = this.folioData) === null || _t === void 0 ? void 0 : _t.payment_type) ? h("span", null, (_u = this.folioData.payment_type) === null || _u === void 0 ? void 0 : _u.description) : h("span", null, "Select..."))), h("ir-dropdown-item", { key: 'd8660579f05776e7e60080be5920bdd7b5a9fece', value: "" }, "Select..."), this.renderDropdownItems())), h("div", { key: '7f9f5ab7178e8acba7035b75b405a4ae50783da2' }, h("ir-input-text", { key: '0fa31134e58e80cc826add4baa65f08f8fe50744', value: (_v = this.folioData) === null || _v === void 0 ? void 0 : _v.reference, error: (_w = this.errors) === null || _w === void 0 ? void 0 : _w.reference_number, autoValidate: this.autoValidate, zod: this.folioSchema.pick({ reference: true }), label: "Reference", maxLength: 50, inputContainerStyle: {
                margin: '0',
            }, onTextChange: e => this.updateFolioData({ reference: e.detail }), labelWidth: 3, labelContainerClassname: 'col-4 col-md-3' }))), h("div", { key: '9462a08e75bfd69770c700b1cce1ef3aab9a6e79', class: 'sheet-footer' }, h("ir-button", { key: 'ee88fc7781c1ea7367e6d3e65997d9d997fff9a4', onClick: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `flex-fill`, text: 'Cancel', btn_color: "secondary" }), h("ir-button", { key: '3966efadcc73a1c243511ba5a9634b7f5a1aa003', btn_styles: "justify-content-center align-items-center", class: 'flex-fill', isLoading: this.isLoading, text: 'Save', btn_color: "primary", btn_type: "submit" }))));
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
            "paymentTypesGroups": {
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
