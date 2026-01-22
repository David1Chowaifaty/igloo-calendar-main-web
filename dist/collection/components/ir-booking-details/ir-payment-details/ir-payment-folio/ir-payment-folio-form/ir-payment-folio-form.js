import calendar_data from "../../../../../stores/calendar-data";
import { Fragment, h } from "@stencil/core";
import moment from "moment";
import { z, ZodError } from "zod";
import { PaymentService } from "../../../../../services/payment.service";
import { buildPaymentTypes } from "../../../../../services/booking-service/utils";
import { PAYMENT_TYPES_WITH_METHOD } from "../../global.variables";
const DATE_FORMAT = 'YYYY-MM-DD';
const requiresPaymentMethodCode = (code) => {
    if (!code) {
        return false;
    }
    return PAYMENT_TYPES_WITH_METHOD.includes(code);
};
const paymentTypeSchema = z.object({
    code: z.string().min(3).max(4),
    description: z.string(),
    operation: z.union([z.literal('CR'), z.literal('DB')]),
});
const paymentMethodSchema = z.object({
    code: z.string().min(3).max(4),
    description: z.string(),
    operation: z.string().optional().nullable(),
});
const folioBaseSchema = z.object({
    id: z.number().nullable().optional(),
    system_id: z.number().nullable().optional(),
    date: z
        .string()
        .regex(/^\d{4}-\d{2}-\d{2}$/)
        .refine(dateStr => {
        const date = moment(dateStr, DATE_FORMAT, true);
        return date.isValid();
    }, { message: `Invalid date` }),
    amount: z.coerce.number().min(0),
    reference: z.string().optional().nullable(),
    payment_type: paymentTypeSchema,
    payment_method: paymentMethodSchema.nullable().optional(),
});
const folioValidationSchema = folioBaseSchema.superRefine((data, ctx) => {
    if (requiresPaymentMethodCode(data.payment_type?.code) && !data.payment_method?.code) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['payment_method'],
            message: 'Payment method is required for this transaction type.',
        });
    }
});
let folioFormInstanceCounter = 0;
export class IrPaymentFolioForm {
    paymentEntries;
    bookingNumber;
    formId;
    payment = {
        date: moment().format(DATE_FORMAT),
        amount: 0,
        designation: undefined,
        currency: null,
        reference: null,
        id: -1,
    };
    mode;
    isLoading = null;
    errors = {};
    autoValidate = false;
    folioData;
    _paymentTypes = {};
    closeModal;
    resetBookingEvt;
    resetExposedCancellationDueAmount;
    loadingChanged;
    today = moment().format(DATE_FORMAT);
    paymentService = new PaymentService();
    componentId = `ir-payment-folio-form-${++folioFormInstanceCounter}`;
    controlIds = {
        date: `${this.componentId}-date`,
        transactionType: `${this.componentId}-transaction-type`,
        paymentMethod: `${this.componentId}-payment-method`,
        amount: `${this.componentId}-amount`,
        reference: `${this.componentId}-reference`,
    };
    componentWillLoad() {
        if (this.payment) {
            this.folioData = { ...this.payment };
        }
        this.syncPaymentTypes();
    }
    handlePaymentChange(newValue, oldValue) {
        if (newValue !== oldValue && newValue) {
            this.folioData = { ...newValue };
            this.syncPaymentTypes();
        }
    }
    handlePaymentEntriesChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.syncPaymentTypes();
        }
    }
    updateFolioData(params) {
        this.folioData = { ...(this.folioData ?? {}), ...params };
    }
    requiresPaymentMethod(code) {
        return requiresPaymentMethodCode(code);
    }
    getDefaultPaymentMethod() {
        const method = this.paymentEntries?.methods?.[0];
        if (!method) {
            return null;
        }
        return {
            code: method.CODE_NAME,
            description: method.CODE_VALUE_EN,
            operation: method.NOTES,
        };
    }
    stopEventPropagation(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
    }
    syncPaymentTypes() {
        if (!this.paymentEntries) {
            this._paymentTypes = {};
            return;
        }
        const mappedTypes = buildPaymentTypes(this.paymentEntries);
        if (this.mode === 'payment-action' && this.payment?.payment_type?.code === '001') {
            const { PAYMENTS, CANCELLATION } = mappedTypes;
            this._paymentTypes = { PAYMENTS, CANCELLATION };
            return;
        }
        this._paymentTypes = mappedTypes;
    }
    async savePayment(print = false) {
        try {
            this.isLoading = print ? 'save-print' : 'save';
            this.loadingChanged.emit(this.isLoading);
            this.autoValidate = true;
            this.errors = {};
            const parsedData = folioValidationSchema.parse({ ...(this.folioData ?? {}), amount: this.folioData?.amount ?? undefined });
            const { payment_type, payment_method, ...rest } = parsedData;
            const payload = {
                ...rest,
                payment_type: payment_type,
                payment_method: payment_method ? payment_method : undefined,
                id: rest.id ?? this.payment?.id ?? -1,
                date: rest.date ?? this.payment?.date ?? this.today,
                system_id: rest.system_id ?? this.payment?.system_id ?? undefined,
                amount: rest.amount ?? 0,
                currency: calendar_data.currency,
                reference: rest.reference ?? '',
                designation: payment_type?.description || '',
            };
            await this.paymentService.AddPayment(payload, this.bookingNumber);
            this.resetBookingEvt.emit(null);
            this.resetExposedCancellationDueAmount.emit({ booking_nbr: this.bookingNumber });
            this.closeModal.emit();
        }
        catch (error) {
            const err = {};
            if (error instanceof ZodError) {
                error.issues.forEach(e => {
                    const field = e.path[0]?.toString();
                    if (field) {
                        err[field] = true;
                    }
                });
            }
            console.error('Failed to save payment folio entry', error);
            this.errors = err;
        }
        finally {
            this.isLoading = null;
            this.loadingChanged.emit(null);
        }
    }
    handleDropdownChange(value) {
        this.updateFolioData({ designation: value });
        if (!value) {
            this.updateFolioData({
                payment_type: null,
                payment_method: null,
            });
            return;
        }
        const selectedType = this.paymentEntries?.types?.find(pt => pt.CODE_NAME === value);
        if (!selectedType) {
            console.warn(`Invalid payment type ${value}`);
            this.updateFolioData({
                payment_type: null,
                payment_method: null,
            });
            return;
        }
        this.updateFolioData({
            payment_type: {
                code: selectedType.CODE_NAME,
                description: selectedType.CODE_VALUE_EN,
                operation: selectedType.NOTES,
            },
            payment_method: this.requiresPaymentMethod(selectedType.CODE_NAME) ? null : this.getDefaultPaymentMethod(),
        });
    }
    handlePaymentMethodDropdownChange(value) {
        const payment_method = this.paymentEntries?.methods?.find(pt => pt.CODE_NAME === value);
        if (!payment_method) {
            console.warn(`Invalid payment method ${value}`);
            this.updateFolioData({ payment_method: null });
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
    renderDropdownItems() {
        const groups = Object.values(this._paymentTypes ?? {});
        if (!groups.length) {
            return null;
        }
        return groups.map((p, idx) => (h(Fragment, null, p.map(pt => (h("wa-option", { key: pt.CODE_NAME, value: pt.CODE_NAME, label: pt.CODE_VALUE_EN }, h("div", { class: 'payment-folio__payment-type-option' }, h("span", null, pt.CODE_VALUE_EN), h("wa-badge", { variant: pt.NOTES === 'CR' ? 'success' : 'danger', style: { fontSize: 'var(--wa-font-size-s)' } }, pt.NOTES === 'CR' ? 'credit' : 'debit'))))), idx !== Object.values(this._paymentTypes).length - 1 && h("wa-divider", null))));
    }
    render() {
        // const isNewPayment = this.folioData?.payment_type?.code === '001' && this.folioData.id === -1;
        return (h("form", { key: 'cad9216a3bdef499c8089d000cd3a7b8b7cd81e6', onSubmit: e => {
                e.preventDefault();
                const submitter = e.submitter;
                if (submitter?.value === 'save') {
                    this.savePayment();
                }
                else if (submitter?.value === 'saveAndPrint') {
                    // this.savePayment(true);
                }
            }, class: "payment-folio__form", id: this.formId }, h("ir-custom-date-picker", { key: '35014b17d7288cc4ac0d232012a074b2b9f7ab19', id: this.controlIds.date, label: "Date", "aria-invalid": this.errors?.date && !this.folioData?.date ? 'true' : 'false', "data-testid": "pickup_date", onDateChanged: evt => {
                this.updateFolioData({ date: evt.detail.start?.format(DATE_FORMAT) });
            }, minDate: moment().add(-2, 'months').format('YYYY-MM-DD'), emitEmptyDate: true, maxDate: this.today, date: this.folioData?.date }), h("ir-validator", { key: '18b6f694ced37accb39196aa0cc8f09941b53f1e', value: this.folioData?.payment_type?.code, autovalidate: this.autoValidate, schema: paymentTypeSchema.shape.code, valueEvent: "change wa-change select-change", blurEvent: "wa-hide" }, h("wa-select", { key: '6ec61bba550c12c015c9ae9fb59dc9fae191ac57', id: this.controlIds.transactionType, size: "small", "onwa-hide": event => this.stopEventPropagation(event), "onwa-show": event => this.stopEventPropagation(event), placeholder: "Select...", label: "Transaction type", defaultValue: this.folioData?.payment_type?.code, value: this.folioData?.payment_type?.code, disabled: this.mode === 'payment-action', onchange: event => {
                this.stopEventPropagation(event);
                this.handleDropdownChange(event.target.value);
            } }, h("wa-option", { key: '1862903ce31cd32b62df913d356fc5f63ff9dac8', value: "" }, "Select..."), this.renderDropdownItems())), this.requiresPaymentMethod(this.folioData?.payment_type?.code) && (h("ir-validator", { key: '8f3e9dd74346e1b81f778d82ea04afef4f2b5d9e', value: this.folioData?.payment_method?.code ?? '', autovalidate: this.autoValidate, schema: paymentMethodSchema.shape.code, valueEvent: "change wa-change select-change", blurEvent: "wa-hide" }, h("wa-select", { key: '18def3757faece98a8dbaeb7836e64ec84ae3690', id: this.controlIds.paymentMethod, size: "small", label: `${this.folioData.payment_type?.code === '001' ? 'Payment' : 'Refund'} method`, "onwa-show": event => this.stopEventPropagation(event), "onwa-hide": event => this.stopEventPropagation(event), defaultValue: this.folioData?.payment_method?.code, value: this.folioData?.payment_method?.code ?? '', onchange: event => {
                this.stopEventPropagation(event);
                this.handlePaymentMethodDropdownChange(event.target.value);
            } }, h("wa-option", { key: '35586097f028fda2e4e579273b8e7bc403c19a6f', value: "" }, "Select..."), this.paymentEntries?.methods?.map(pt => {
            return (h("wa-option", { key: pt.CODE_NAME, label: pt.CODE_VALUE_EN, value: pt.CODE_NAME }, pt.CODE_VALUE_EN));
        })))), h("ir-validator", { key: '1cfed486311b5a6f24434455bb687d46c5b35850', value: this.folioData?.amount?.toString() ?? undefined, autovalidate: this.autoValidate, schema: folioBaseSchema.shape.amount, valueEvent: "text-change input input-change", blurEvent: "input-blur" }, h("ir-input", { key: '9fedda82b5962d45b41711785578bc7407d71f78', id: this.controlIds.amount, "aria-invalid": String(!!this.errors?.amount), value: this.folioData?.amount?.toString() ?? '', label: "Amount", mask: "price", min: 0, "onText-change": e => this.updateFolioData({ amount: !e.detail ? undefined : Number(e.detail) }) }, h("span", { key: '14b9603fbfd594826a73f11c6291bd942912d58d', slot: "start" }, calendar_data.currency.symbol))), h("ir-validator", { key: '841856126ee72858cdb9e40bc9b32551c8045a2f', value: this.folioData?.reference ?? '', autovalidate: this.autoValidate, schema: folioBaseSchema.shape.reference, valueEvent: "text-change input input-change", blurEvent: "input-blur" }, h("ir-input", { key: 'abbd3386e8e690c80bd188c9b70d6ceeb2f07801', id: this.controlIds.reference, value: this.folioData?.reference ?? '', label: "Reference", maxlength: 50, "onText-change": e => this.updateFolioData({ reference: e.detail ?? '' }) }))));
    }
    static get is() { return "ir-payment-folio-form"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-payment-folio-form.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-payment-folio-form.css"]
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
                            "path": "../../../types",
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
            "formId": {
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
                "attribute": "form-id",
                "reflect": false
            },
            "payment": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Payment",
                    "resolved": "{ system_id?: number; id: number; date: string; amount: number; currency: ICurrency; designation: string; reference: string; book_nbr?: string; payment_gateway_code?: number; payment_type?: PaymentType; payment_method?: PaymentType; receipt_nbr?: string; is_receipt_issued?: boolean; }",
                    "references": {
                        "Payment": {
                            "location": "import",
                            "path": "../../../types",
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
                "defaultValue": "{\n    date: moment().format(DATE_FORMAT),\n    amount: 0,\n    designation: undefined,\n    currency: null,\n    reference: null,\n    id: -1,\n  }"
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
                            "path": "../../../types",
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
                    "original": "Pick<Booking, 'booking_nbr'>",
                    "resolved": "{ booking_nbr: string; }",
                    "references": {
                        "Pick": {
                            "location": "global",
                            "id": "global::Pick"
                        },
                        "Booking": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Booking"
                        }
                    }
                }
            }, {
                "method": "loadingChanged",
                "name": "loadingChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "'save' | 'save-print' | null",
                    "resolved": "\"save\" | \"save-print\"",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "payment",
                "methodName": "handlePaymentChange"
            }, {
                "propName": "paymentEntries",
                "methodName": "handlePaymentEntriesChange"
            }];
    }
}
//# sourceMappingURL=ir-payment-folio-form.js.map
