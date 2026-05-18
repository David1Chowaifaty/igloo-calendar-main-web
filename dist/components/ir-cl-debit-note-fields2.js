import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './ir-cl-invoice-select2.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';

const irClDebitNoteFieldsCss = ".sc-ir-cl-debit-note-fields-h{display:flex;flex-direction:column;gap:0.75rem;border-radius:0.625rem}.field.sc-ir-cl-debit-note-fields{display:grid;gap:0.35rem}.field--full-width.sc-ir-cl-debit-note-fields,.field--full-width.sc-ir-cl-debit-note-fields wa-radio-group.sc-ir-cl-debit-note-fields{width:100%}.field--full-width.sc-ir-cl-debit-note-fields wa-radio-group.sc-ir-cl-debit-note-fields wa-radio.sc-ir-cl-debit-note-fields{flex:1}.entry-type.--credit.sc-ir-cl-debit-note-fields:state(checked){background-color:var(--wa-color-success-fill-quiet);color:var(--wa-color-success-on-quiet);border-color:var(--wa-color-success-border-loud)}.entry-type.--debit.sc-ir-cl-debit-note-fields:state(checked){background-color:var(--wa-color-danger-fill-quiet);color:var(--wa-color-danger-on-quiet);border-color:var(--wa-color-danger-border-loud)}@keyframes slide-in{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}";
const IrClDebitNoteFieldsStyle0 = irClDebitNoteFieldsCss;

const IrClDebitNoteFields = /*@__PURE__*/ proxyCustomElement(class IrClDebitNoteFields extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.fieldChange = createEvent(this, "fieldChange", 7);
    }
    invoiceId;
    fiscalDocuments = [];
    fieldChange;
    render() {
        if (this.fiscalDocuments.length === 0) {
            return (h("wa-callout", { size: "small", variant: "warning" }, h("wa-icon", { slot: "icon", name: "triangle-exclamation" }), "No paid invoices are available. A debit note requires at least one paid invoice to reference. Please issue an invoice first, then return to create the debit note."));
        }
        return (h("div", { class: "field" }, h("ir-cl-invoice-select", { value: this.invoiceId ?? '', fiscalDocuments: this.fiscalDocuments, label: "Invoice", onInvoiceChange: event => {
                this.fieldChange.emit({ invoiceId: event.detail || undefined });
            } })));
    }
    static get style() { return IrClDebitNoteFieldsStyle0; }
}, [2, "ir-cl-debit-note-fields", {
        "invoiceId": [1, "invoice-id"],
        "fiscalDocuments": [16]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-cl-debit-note-fields", "ir-cl-invoice-select", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-cl-debit-note-fields":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrClDebitNoteFields);
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

export { IrClDebitNoteFields as I, defineCustomElement as d };

//# sourceMappingURL=ir-cl-debit-note-fields2.js.map