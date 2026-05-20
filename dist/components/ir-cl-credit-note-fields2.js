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
        const noInvoices = this.fiscalDocuments.length === 0;
        return (h(Fragment, { key: 'b83773a4f9dac0ff8cdd97aa1d744b76f2a0f9b5' }, h("div", { key: '7c4e0db43aa9fe1abf090786d70c330b9f22be18', class: "field field--full-width" }, h("wa-radio-group", { key: '5e78f440061ea780e53ca630cd12743ec9428fc2', label: "Credit Note Type", orientation: "horizontal", size: "small", value: this.creditNoteMode, onchange: e => {
                const val = e.target.value;
                this.fieldChange.emit({
                    creditNoteMode: val,
                    invoiceId: val === 'goodwill' ? undefined : this.invoiceId,
                });
            } }, h("wa-radio", { key: '1cbd698b0bba7933c387d2ca1a95c7bf8109f690', value: "cancel-invoice", appearance: "button", disabled: noInvoices || this.isFetchingFiscalDocs }, "Cancel invoice and unlock all items"), h("wa-radio", { key: '018d06ebf0ef04eb4f702edfd2d341a83590c425', value: "goodwill", appearance: "button" }, "Goodwill credit"))), this.creditNoteMode === 'cancel-invoice' && (h("div", { key: 'f9e0179c3b46e40c7d85a459f65d1987f12b933f', class: "field" }, h("ir-cl-invoice-select", { key: '7475909528490c9fbf6e7b2189b3caeaa2a09c90', value: this.invoiceId ?? '', fiscalDocuments: this.fiscalDocuments, label: "Invoice", onInvoiceChange: event => {
                this.fieldChange.emit({ invoiceId: event.detail || undefined });
            } })))));
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