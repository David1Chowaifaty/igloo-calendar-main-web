import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './ir-cl-invoice-select2.js';
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
        // const noInvoices = this.fiscalDocuments.length === 0;
        return (h(Fragment, { key: '058b46b10d4b37a910d852c80e90985c1296fe2e' }, this.creditNoteMode === 'cancel-invoice' && (h("div", { key: '417e52d2c5c2f6ae27ee5a73ab03d734b4d58079', class: "field" }, h("ir-cl-invoice-select", { key: '8bf8b714ed97288adf4e458517021b8fba56f785', value: this.invoiceId ?? '', fiscalDocuments: this.fiscalDocuments, label: "Invoice", onInvoiceChange: event => {
                this.fieldChange.emit({ invoiceId: event.detail || undefined });
            }, hint: "Issuing this credit note will void the selected invoice and unlock all associated line items." })))));
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
    const components = ["ir-cl-credit-note-fields", "ir-cl-invoice-select", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-cl-credit-note-fields":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrClCreditNoteFields);
            }
            break;
        case "ir-cl-invoice-select":
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

export { IrClCreditNoteFields as I, defineCustomElement as d };

//# sourceMappingURL=ir-cl-credit-note-fields2.js.map