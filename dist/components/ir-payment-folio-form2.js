import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { c as calendar_data } from './calendar-data.js';
import { h as hooks } from './moment.js';
import { z, Z as ZodError } from './index2.js';
import { P as PaymentService } from './payment.service.js';
import { b as buildPaymentTypes } from './utils2.js';
import { P as PAYMENT_TYPES_WITH_METHOD } from './global.variables.js';
import { d as defineCustomElement$3 } from './ir-custom-date-picker2.js';
import { d as defineCustomElement$2 } from './ir-input2.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';

const irPaymentFolioFormCss = ".sc-ir-payment-folio-form-h{display:block;--payment-type-badge-bg:#ff4961;text-align:start}.payment-type-badge.sc-ir-payment-folio-form{background:var(--payment-type-badge-bg);color:white;padding:0.2rem 0.3rem !important;font-size:12px;border-radius:4px;margin:0;text-transform:capitalize}.credit-badge.sc-ir-payment-folio-form{--payment-type-badge-bg:#629a4c}.debit-badge.sc-ir-payment-folio-form{--payment-type-badge-bg:#ff4961}.dropdown-item-payment.sc-ir-payment-folio-form{display:flex;align-items:center;gap:1rem;box-sizing:border-box;justify-content:space-between}.input-group-text.sc-ir-payment-folio-form{border-color:#cacfe7 !important}.payment-folio__payment-type-option.sc-ir-payment-folio-form{display:flex;align-items:center;justify-content:space-between}.payment-folio__form.sc-ir-payment-folio-form{display:grid;gap:var(--wa-space-m, 1rem)}";
const IrPaymentFolioFormStyle0 = irPaymentFolioFormCss;

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
        const date = hooks(dateStr, DATE_FORMAT, true);
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
const IrPaymentFolioForm = /*@__PURE__*/ proxyCustomElement(class IrPaymentFolioForm extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.closeModal = createEvent(this, "closeModal", 7);
        this.resetBookingEvt = createEvent(this, "resetBookingEvt", 7);
        this.resetExposedCancellationDueAmount = createEvent(this, "resetExposedCancellationDueAmount", 7);
        this.loadingChanged = createEvent(this, "loadingChanged", 7);
    }
    booking;
    paymentEntries;
    bookingNumber;
    formId;
    payment = {
        date: hooks().format(DATE_FORMAT),
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
    today = hooks().format(DATE_FORMAT);
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
        return (h("form", { key: 'd1ae72302294e9e89d9f00b8dc7957ebb4e493bd', onSubmit: e => {
                e.preventDefault();
                const submitter = e.submitter;
                if (submitter?.value === 'save') {
                    this.savePayment();
                }
            }, class: "payment-folio__form", id: this.formId }, h("ir-custom-date-picker", { key: '851f0a58db20d170e665c19866c55bc51d947682', id: this.controlIds.date, label: "Date", "aria-invalid": this.errors?.date && !this.folioData?.date ? 'true' : 'false', "data-testid": "pickup_date", onDateChanged: evt => {
                this.updateFolioData({ date: evt.detail.start?.format(DATE_FORMAT) });
            }, minDate: hooks().add(-2, 'months').format('YYYY-MM-DD'), emitEmptyDate: true, maxDate: this.today, date: this.folioData?.date }), h("ir-validator", { key: '16a67db8c9909527b29cf19e8727aeaf08b6cdb9', value: this.folioData?.payment_type?.code, autovalidate: this.autoValidate, schema: paymentTypeSchema.shape.code, valueEvent: "change wa-change select-change", blurEvent: "wa-hide" }, h("wa-select", { key: '9ae0040c6296a5fe9c3d7c28dc52ce174158b2d6', id: this.controlIds.transactionType, size: "small", "onwa-hide": event => this.stopEventPropagation(event), "onwa-show": event => this.stopEventPropagation(event), placeholder: "Select...", label: "Transaction type", defaultValue: this.folioData?.payment_type?.code, value: this.folioData?.payment_type?.code, disabled: this.mode === 'payment-action', onchange: event => {
                this.stopEventPropagation(event);
                this.handleDropdownChange(event.target.value);
            } }, h("wa-option", { key: 'bbfe4cf849737a52c7734927cc3f3a55381b3803', value: "" }, "Select..."), this.renderDropdownItems())), this.requiresPaymentMethod(this.folioData?.payment_type?.code) && (h("ir-validator", { key: '3bd41e4379e49e476b52966bec492a200cf116f5', value: this.folioData?.payment_method?.code ?? '', autovalidate: this.autoValidate, schema: paymentMethodSchema.shape.code, valueEvent: "change wa-change select-change", blurEvent: "wa-hide" }, h("wa-select", { key: '251dbc130c9737ececcb0a1b1cb7db1946254811', id: this.controlIds.paymentMethod, size: "small", label: `${this.folioData.payment_type?.code === '001' ? 'Payment' : 'Refund'} method`, "onwa-show": event => this.stopEventPropagation(event), "onwa-hide": event => this.stopEventPropagation(event), defaultValue: this.folioData?.payment_method?.code, value: this.folioData?.payment_method?.code ?? '', onchange: event => {
                this.stopEventPropagation(event);
                this.handlePaymentMethodDropdownChange(event.target.value);
            } }, h("wa-option", { key: '288d54a8d4bbe11afe084b752fac20f3932ac0f2', value: "" }, "Select..."), this.paymentEntries?.methods?.map(pt => {
            return (h("wa-option", { key: pt.CODE_NAME, label: pt.CODE_VALUE_EN, value: pt.CODE_NAME }, pt.CODE_VALUE_EN));
        })))), h("ir-validator", { key: '4486ca299575cf4a371001a67ad8f92113f601e4', value: this.folioData?.amount?.toString() ?? undefined, autovalidate: this.autoValidate, schema: folioBaseSchema.shape.amount, valueEvent: "text-change input input-change", blurEvent: "input-blur" }, h("ir-input", { key: 'b4c218fe98928dbf17694fb7dfe8169f9dbb6645', id: this.controlIds.amount, "aria-invalid": String(!!this.errors?.amount), value: this.folioData?.amount?.toString() ?? '', label: "Amount", mask: "price", min: 0, "onText-change": e => this.updateFolioData({ amount: !e.detail ? undefined : Number(e.detail) }) }, h("span", { key: '896e8ae5d65c7314e04177619b40c50a1b88fb03', slot: "start" }, calendar_data.currency.symbol))), h("ir-validator", { key: '56fa057c2a3445a7ae3c711c97aff18072a4ae21', value: this.folioData?.reference ?? '', autovalidate: this.autoValidate, schema: folioBaseSchema.shape.reference, valueEvent: "text-change input input-change", blurEvent: "input-blur" }, h("ir-input", { key: 'dcbfe1c79199ca376013b2fd5c2c61eb9b3aad21', id: this.controlIds.reference, value: this.folioData?.reference ?? '', label: "Reference", maxlength: 50, "onText-change": e => this.updateFolioData({ reference: e.detail ?? '' }) }))));
    }
    static get watchers() { return {
        "payment": ["handlePaymentChange"],
        "paymentEntries": ["handlePaymentEntriesChange"]
    }; }
    static get style() { return IrPaymentFolioFormStyle0; }
}, [2, "ir-payment-folio-form", {
        "booking": [16],
        "paymentEntries": [16],
        "bookingNumber": [1, "booking-number"],
        "formId": [1, "form-id"],
        "payment": [16],
        "mode": [1],
        "isLoading": [32],
        "errors": [32],
        "autoValidate": [32],
        "folioData": [32],
        "_paymentTypes": [32]
    }, undefined, {
        "payment": ["handlePaymentChange"],
        "paymentEntries": ["handlePaymentEntriesChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-payment-folio-form", "ir-custom-date-picker", "ir-input", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-payment-folio-form":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPaymentFolioForm);
            }
            break;
        case "ir-custom-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrPaymentFolioForm as I, defineCustomElement as d };

//# sourceMappingURL=ir-payment-folio-form2.js.map