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
        return (h(Fragment, { key: '42a70f427badc68ff8631265aba03be061b6358f' }, h("div", { key: 'c4778e31e08e0741a464ad32cdc031e28e1ad113', class: "field field--full-width" }, h("ir-validator", { key: '622d9193fe60d05ceb9c3d0327cb32bb27e3543f', schema: entryTypeFieldSchema, value: this.entryType, valueEvent: "change" }, h("wa-radio-group", { key: '4c1be4bfd1d5f00678545e6c18fcaccbd4589e1c', label: "Entry Type", orientation: "horizontal", size: "small", value: this.entryType, onchange: event => {
                this.fieldChange.emit({ entryType: event.target.value });
            } }, h("wa-radio", { key: '04e17e8aa0a861f0dae18e16036ca40431068bd8', value: "CR", appearance: "button", class: "entry-type --credit" }, "Credit"), h("wa-radio", { key: '2c30329ba231eae246b66906c4b64e0911bb6924', value: "DB", appearance: "button", class: "entry-type --debit" }, "Debit"))))));
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