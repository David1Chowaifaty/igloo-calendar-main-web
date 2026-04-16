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
        return (h(Fragment, { key: 'dc2742a3cfec8dc23523f5190fbbc5563b7f135f' }, h("div", { key: '9607496bb237e875e474136b4f16a3659cadfd75', class: "field field--full-width" }, h("wa-radio-group", { key: '1cbad763008a1018676fc0d7fb93c0a1038e7e1f', label: "Credit Note Type", orientation: "horizontal", size: "small", value: this.creditNoteMode, onchange: e => {
                const val = e.target.value;
                this.fieldChange.emit({
                    creditNoteMode: val,
                    invoiceId: val === 'goodwill' ? undefined : this.invoiceId,
                });
            } }, h("wa-radio", { key: '7671ab4104e459195dce76169b036c403938deef', value: "cancel-invoice", appearance: "button", disabled: noInvoices || this.isFetchingFiscalDocs }, "Cancel invoice and unlock all items"), h("wa-radio", { key: '1347558e1e0b00688af64162574d895fcc9e3821', value: "goodwill", appearance: "button" }, "Goodwill credit"))), this.creditNoteMode === 'cancel-invoice' && (h("div", { key: 'b755b01dde3c5cf8584a99b97fd0d2d7bed73f57', class: "field" }, h("ir-validator", { key: '71e539c1b6a17c6d267bfa84b0712ba730eb3aa9', schema: invoiceIdRequiredFieldSchema, value: this.invoiceId ?? '', valueEvent: "change" }, h("wa-select", { key: '181fa41aae11a1a6c6920ebc29dc53ae23f77902', label: "Invoice", size: "small", required: true, value: this.invoiceId ?? '', onchange: event => {
                this.fieldChange.emit({ invoiceId: event.target.value || undefined });
            } }, h("wa-option", { key: '1f5a243c51e0b773ce7570bfabc6834c25279fc8', value: "" }, "Select invoice"), this.fiscalDocuments.map(doc => (h("wa-option", { key: doc.FD_ID, value: String(doc.FD_ID) }, doc.DOC_NUMBER, " \u2014 ", doc.FD_TYPE_NAME)))))))));
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