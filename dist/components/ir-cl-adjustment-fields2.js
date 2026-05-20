import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { e as entryTypeFieldSchema } from './ir-city-ledger-transaction-form.schema.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';

const irClAdjustmentFieldsCss = ".sc-ir-cl-adjustment-fields-h{display:flex;flex-direction:column;gap:0.75rem;border-radius:0.625rem}.field.sc-ir-cl-adjustment-fields{display:grid;gap:0.35rem}.field--full-width.sc-ir-cl-adjustment-fields,.field--full-width.sc-ir-cl-adjustment-fields wa-radio-group.sc-ir-cl-adjustment-fields{width:100%}.field--full-width.sc-ir-cl-adjustment-fields wa-radio-group.sc-ir-cl-adjustment-fields wa-radio.sc-ir-cl-adjustment-fields{flex:1}.entry-type.--credit.sc-ir-cl-adjustment-fields:state(checked){background-color:var(--wa-color-success-fill-quiet);color:var(--wa-color-success-on-quiet);border-color:var(--wa-color-success-border-loud)}.entry-type.--debit.sc-ir-cl-adjustment-fields:state(checked){background-color:var(--wa-color-danger-fill-quiet);color:var(--wa-color-danger-on-quiet);border-color:var(--wa-color-danger-border-loud)}@keyframes slide-in{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}";
const IrClAdjustmentFieldsStyle0 = irClAdjustmentFieldsCss;

const IrClAdjustmentFields = /*@__PURE__*/ proxyCustomElement(class IrClAdjustmentFields extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.fieldChange = createEvent(this, "fieldChange", 7);
    }
    entryType = '';
    linkType = 'NONE';
    linkedId;
    bookingOptions = [];
    unpaidInvoiceOptions = [];
    fieldChange;
    // private get linkedIdOptions(): LinkedOption[] {
    //   if (this.linkType === 'BOOKING') return this.bookingOptions;
    //   if (this.linkType === 'INVOICE') return this.unpaidInvoiceOptions;
    //   return [];
    // }
    render() {
        return (h(Fragment, { key: 'a5afc66b20f5459849c58d18838a0df1145dedda' }, h("div", { key: '37b46cc67d4a4dbe88abdbc1ea8e7612b9849769', class: "field field--full-width" }, h("ir-validator", { key: '1e6bec068f66eef77e7e33ec12aeadcbd74c4775', schema: entryTypeFieldSchema, value: this.entryType, valueEvent: "change" }, h("wa-radio-group", { key: '5935dbb7a5379d76c368c01ae8e6cb66bd4bf4e2', label: "Entry Type", orientation: "horizontal", size: "small", value: this.entryType, onchange: event => {
                this.fieldChange.emit({ entryType: event.target.value });
            } }, h("wa-radio", { key: '35e785ee21ff4e5535e2227687a138df8f9ace26', value: "CR", appearance: "button", class: "entry-type --credit" }, "Credit"), h("wa-radio", { key: '0f20cfd8a304680e090a4da87f23eeb45d3d474b', value: "DB", appearance: "button", class: "entry-type --debit" }, "Debit"))))));
    }
    static get style() { return IrClAdjustmentFieldsStyle0; }
}, [2, "ir-cl-adjustment-fields", {
        "entryType": [1, "entry-type"],
        "linkType": [1, "link-type"],
        "linkedId": [1, "linked-id"],
        "bookingOptions": [16],
        "unpaidInvoiceOptions": [16]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-cl-adjustment-fields", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-cl-adjustment-fields":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrClAdjustmentFields);
            }
            break;
        case "ir-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrClAdjustmentFields as I, defineCustomElement as d };

//# sourceMappingURL=ir-cl-adjustment-fields2.js.map