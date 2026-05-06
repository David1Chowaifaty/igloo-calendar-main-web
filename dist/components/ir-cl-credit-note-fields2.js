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
        return (h(Fragment, { key: 'a1d1c20fb2ee11b50db62acf6f20393e562b7f39' }, h("div", { key: 'd33a15c351e5405816db9e118601fb34bd157a95', class: "field field--full-width" }, h("wa-radio-group", { key: '85ff551a0d189187ceae50758e4ba5479f073069', label: "Credit Note Type", orientation: "horizontal", size: "small", value: this.creditNoteMode, onchange: e => {
                const val = e.target.value;
                this.fieldChange.emit({
                    creditNoteMode: val,
                    invoiceId: val === 'goodwill' ? undefined : this.invoiceId,
                });
            } }, h("wa-radio", { key: 'e500c9337c92f05636ffd5142fb7816079f8eb9b', value: "cancel-invoice", appearance: "button", disabled: noInvoices || this.isFetchingFiscalDocs }, "Cancel invoice and unlock all items"), h("wa-radio", { key: '4aa4aeb0e7b85ff8cfd602818a4d64acfacd56df', value: "goodwill", appearance: "button" }, "Goodwill credit"))), this.creditNoteMode === 'cancel-invoice' && (h("div", { key: '54a317bc6160893576fb5f85a22e8bc946a48381', class: "field" }, h("ir-validator", { key: '2028057b092ad3792ae62de133dde8966c5aae20', schema: invoiceIdRequiredFieldSchema, value: this.invoiceId ?? '', valueEvent: "change" }, h("wa-select", { key: 'fa4f7e6f5f106023afcfd041fb6fdb994518c08b', label: "Invoice", size: "small", required: true, value: this.invoiceId ?? '', onchange: event => {
                this.fieldChange.emit({ invoiceId: event.target.value || undefined });
            } }, h("wa-option", { key: '60b6d57de054512d0fb774404ec141630486f40c', value: "" }, "Select invoice"), this.fiscalDocuments.map(doc => (h("wa-option", { key: doc.FD_ID, value: String(doc.FD_ID) }, doc.DOC_NUMBER, " \u2014 ", doc.FD_TYPE_NAME)))))))));
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