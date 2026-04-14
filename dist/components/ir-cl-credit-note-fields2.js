import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { i as invoiceIdRequiredFieldSchema } from './ir-city-ledger-transaction-form.schema.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';

const irClCreditNoteFieldsCss = ".sc-ir-cl-credit-note-fields-h{display:flex;flex-direction:column;gap:0.75rem;border-radius:0.625rem}.field.sc-ir-cl-credit-note-fields{display:grid;gap:0.35rem}.field--full-width.sc-ir-cl-credit-note-fields,.field--full-width.sc-ir-cl-credit-note-fields wa-radio-group.sc-ir-cl-credit-note-fields{width:100%}.field--full-width.sc-ir-cl-credit-note-fields wa-radio-group.sc-ir-cl-credit-note-fields wa-radio.sc-ir-cl-credit-note-fields{flex:1}.entry-type.--credit.sc-ir-cl-credit-note-fields:state(checked){background-color:var(--wa-color-success-fill-quiet);color:var(--wa-color-success-on-quiet);border-color:var(--wa-color-success-border-loud)}.entry-type.--debit.sc-ir-cl-credit-note-fields:state(checked){background-color:var(--wa-color-danger-fill-quiet);color:var(--wa-color-danger-on-quiet);border-color:var(--wa-color-danger-border-loud)}@keyframes slide-in{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}";
const IrClCreditNoteFieldsStyle0 = irClCreditNoteFieldsCss;

const IrClCreditNoteFields = /*@__PURE__*/ proxyCustomElement(class IrClCreditNoteFields extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.fieldChange = createEvent(this, "fieldChange", 7);
    }
    creditNoteMode = 'cancel-invoice';
    invoiceId;
    fiscalDocuments = [];
    isFetchingFiscalDocs = false;
    fieldChange;
    render() {
        const noInvoices = this.fiscalDocuments.length === 0;
        return (h(Fragment, { key: 'e615417f0861e545e766d00bb9716368877324d0' }, h("div", { key: 'c4229af69879e72e7edd02ca3448354f72838840', class: "field field--full-width" }, h("wa-radio-group", { key: '3928a8132efd5786664256561a08433a1b2a37d0', label: "Credit Note Type", orientation: "horizontal", size: "small", value: this.creditNoteMode, onchange: e => {
                const val = e.target.value;
                this.fieldChange.emit({
                    creditNoteMode: val,
                    invoiceId: val === 'goodwill' ? undefined : this.invoiceId,
                });
            } }, h("wa-radio", { key: '446a7db9f1f0fa757ed0a8c13b6d57fdbed34a9b', value: "cancel-invoice", appearance: "button", disabled: noInvoices || this.isFetchingFiscalDocs }, "Cancel invoice and unlock all items"), h("wa-radio", { key: 'a8b9a05ca2a015470051478b46c3d297fccd5851', value: "goodwill", appearance: "button" }, "Goodwill credit"))), this.creditNoteMode === 'cancel-invoice' && (h("div", { key: 'bd5bda400583826bb8a5a6f936ca09d1b2736b23', class: "field" }, h("ir-validator", { key: 'c85ed1049bf9f02217b3e17cb6af00308aa66d20', schema: invoiceIdRequiredFieldSchema, value: this.invoiceId ?? '', valueEvent: "change" }, h("wa-select", { key: '4add2f7c0616bdfcdeacc98b1fc97121a805e6b8', label: "Invoice", size: "small", required: true, value: this.invoiceId ?? '', onchange: event => {
                this.fieldChange.emit({ invoiceId: event.target.value || undefined });
            } }, h("wa-option", { key: '088139bd0d4644f677b6cdaff49b1a192a98edc1', value: "" }, "Select invoice"), this.fiscalDocuments.map(doc => (h("wa-option", { key: doc.FD_ID, value: String(doc.FD_ID) }, doc.DOC_NUMBER, " \u2014 ", doc.FD_TYPE_NAME)))))))));
    }
    static get style() { return IrClCreditNoteFieldsStyle0; }
}, [2, "ir-cl-credit-note-fields", {
        "creditNoteMode": [1, "credit-note-mode"],
        "invoiceId": [1, "invoice-id"],
        "fiscalDocuments": [16],
        "isFetchingFiscalDocs": [4, "is-fetching-fiscal-docs"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-cl-credit-note-fields", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-cl-credit-note-fields":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrClCreditNoteFields);
            }
            break;
        case "ir-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrClCreditNoteFields as I, defineCustomElement as d };

//# sourceMappingURL=ir-cl-credit-note-fields2.js.map