import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { c as calendar_data } from './calendar-data.js';
import { h as hooks } from './moment.js';
import { z, Z as ZodError } from './index2.js';
import { P as PaymentService } from './payment.service.js';
import { Z as ZIEntrySchema } from './IBooking.js';
import { P as PAYMENT_TYPES_WITH_METHOD } from './global.variables.js';
import { d as defineCustomElement$3 } from './ir-custom-date-picker2.js';
import { d as defineCustomElement$2 } from './ir-input2.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';

/**
 * Builds a grouped payment types record from raw entries and groups.
 *
 * @param paymentEntries - The flat list of all available payment  entries.
 * @returns A record where each key is a group CODE_NAME and the value is the
 *          ordered array of payment type entries belonging to that group.
 *
 * @example
 * const result = buildPaymentTypes(paymentEntries);
 * // {
 * //   PAYMENTS: [ { CODE_NAME: "001", CODE_VALUE_EN: "Cash", ... }, ... ],
 * //   ADJUSTMENTS: [ ... ],
 * //   ...
 * // }
 */
function buildPaymentTypes(paymentEntries) {
    try {
        const { groups, types } = z
            .object({
            types: ZIEntrySchema.array().min(1),
            groups: ZIEntrySchema.array().min(1),
            methods: ZIEntrySchema.array().min(1),
        })
            .parse(paymentEntries);
        const items = [...types];
        const byCodes = (codes) => codes.map(code => items.find(i => i.CODE_NAME === code)).filter((x) => Boolean(x));
        const extractGroupCodes = (code) => {
            const paymentGroup = groups.find(pt => pt.CODE_NAME === code);
            return paymentGroup ? paymentGroup.CODE_VALUE_EN.split(',') : [];
        };
        let rec = {};
        groups.forEach(group => {
            // if (group.CODE_NAME === 'PAYMENTS') {
            //   rec[group.CODE_NAME] = methods.map(entry => ({
            //     ...entry,
            //     CODE_VALUE_EN: `Payment: ${entry.CODE_VALUE_EN}`,
            //   })) as IEntries[];
            // } else if (group.CODE_NAME === 'REFUND') {
            //   rec[group.CODE_NAME] = methods.map(entry => ({
            //     ...entry,
            //     CODE_VALUE_EN: `Refund: ${entry.CODE_VALUE_EN}`,
            //   })) as IEntries[];
            rec[group.CODE_NAME] = byCodes(extractGroupCodes(group.CODE_NAME));
        });
        return rec;
    }
    catch (error) {
        console.log(error);
        return {};
    }
}

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
        return (h("form", { key: '2e44edc22910e1566833c1941744c7be34b336b4', onSubmit: e => {
                e.preventDefault();
                const submitter = e.submitter;
                if (submitter?.value === 'save') {
                    this.savePayment();
                }
            }, class: "payment-folio__form", id: this.formId }, h("ir-custom-date-picker", { key: 'e976867a053257635d3505fbee72962e808585f3', id: this.controlIds.date, label: "Date", "aria-invalid": this.errors?.date && !this.folioData?.date ? 'true' : 'false', "data-testid": "pickup_date", onDateChanged: evt => {
                this.updateFolioData({ date: evt.detail.start?.format(DATE_FORMAT) });
            }, minDate: hooks().add(-2, 'months').format('YYYY-MM-DD'), emitEmptyDate: true, maxDate: this.today, date: this.folioData?.date }), h("ir-validator", { key: '6c51a1b3340e8c61ae8d4300e1bc17397d68d1fe', value: this.folioData?.payment_type?.code, autovalidate: this.autoValidate, schema: paymentTypeSchema.shape.code, valueEvent: "change wa-change select-change", blurEvent: "wa-hide" }, h("wa-select", { key: '604ff1d867d9956dff1f363bf5fd5309b7cc6c5a', id: this.controlIds.transactionType, size: "small", "onwa-hide": event => this.stopEventPropagation(event), "onwa-show": event => this.stopEventPropagation(event), placeholder: "Select...", label: "Transaction type", defaultValue: this.folioData?.payment_type?.code, value: this.folioData?.payment_type?.code, disabled: this.mode === 'payment-action', onchange: event => {
                this.stopEventPropagation(event);
                this.handleDropdownChange(event.target.value);
            } }, h("wa-option", { key: '4b216b40bfe973d34bc1ce18b192ae9f911ca598', value: "" }, "Select..."), this.renderDropdownItems())), this.requiresPaymentMethod(this.folioData?.payment_type?.code) && (h("ir-validator", { key: '82809b9a4904251a0eaad53dbe6ba1485e6a5448', value: this.folioData?.payment_method?.code ?? '', autovalidate: this.autoValidate, schema: paymentMethodSchema.shape.code, valueEvent: "change wa-change select-change", blurEvent: "wa-hide" }, h("wa-select", { key: '25528aca9eb3c10b5ad2ef869ff6d793145a001a', id: this.controlIds.paymentMethod, size: "small", label: `${this.folioData.payment_type?.code === '001' ? 'Payment' : 'Refund'} method`, "onwa-show": event => this.stopEventPropagation(event), "onwa-hide": event => this.stopEventPropagation(event), defaultValue: this.folioData?.payment_method?.code, value: this.folioData?.payment_method?.code ?? '', onchange: event => {
                this.stopEventPropagation(event);
                this.handlePaymentMethodDropdownChange(event.target.value);
            } }, h("wa-option", { key: 'b6f7b6e6c1dd124be98b256932c6d722bf373f1f', value: "" }, "Select..."), this.paymentEntries?.methods?.map(pt => {
            return (h("wa-option", { key: pt.CODE_NAME, label: pt.CODE_VALUE_EN, value: pt.CODE_NAME }, pt.CODE_VALUE_EN));
        })))), h("ir-validator", { key: '3dcc0c66b0894415cb1e727ce440b765e3b4bee5', value: this.folioData?.amount?.toString() ?? undefined, autovalidate: this.autoValidate, schema: folioBaseSchema.shape.amount, valueEvent: "text-change input input-change", blurEvent: "input-blur" }, h("ir-input", { key: '0ad018767d81daa2f1ea6e40b85a88a7118cf92c', id: this.controlIds.amount, "aria-invalid": String(!!this.errors?.amount), value: this.folioData?.amount?.toString() ?? '', label: "Amount", mask: "price", min: 0, "onText-change": e => this.updateFolioData({ amount: !e.detail ? undefined : Number(e.detail) }) }, h("span", { key: 'aef4b879ed5510636a632c77c71d49e5c9862d17', slot: "start" }, calendar_data.currency.symbol))), h("ir-validator", { key: 'a8df6928d78a53696daf2aa16d00ebde391ef9a5', value: this.folioData?.reference ?? '', autovalidate: this.autoValidate, schema: folioBaseSchema.shape.reference, valueEvent: "text-change input input-change", blurEvent: "input-blur" }, h("ir-input", { key: 'e314d99c9cdcb0d5eef225ce2798cf15eb8f493a', id: this.controlIds.reference, value: this.folioData?.reference ?? '', label: "Reference", maxlength: 50, "onText-change": e => this.updateFolioData({ reference: e.detail ?? '' }) }))));
    }
    static get watchers() { return {
        "payment": ["handlePaymentChange"],
        "paymentEntries": ["handlePaymentEntriesChange"]
    }; }
    static get style() { return IrPaymentFolioFormStyle0; }
}, [2, "ir-payment-folio-form", {
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