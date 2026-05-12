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
        return (h(Fragment, { key: '285a91a66b401527fc4d34a455a3ec39290945f0' }, h("div", { key: '938358d4fac255ee9fe38deb13b5d752f29107cb', class: "field field--full-width" }, h("ir-validator", { key: 'a915120ae3e08ccf9933bbb057d3246d33847891', schema: entryTypeFieldSchema, value: this.entryType, valueEvent: "change" }, h("wa-radio-group", { key: '183195aaa609505b4d8398b8658d6fc8b7f4cd15', label: "Entry Type", orientation: "horizontal", size: "small", value: this.entryType, onchange: event => {
                this.fieldChange.emit({ entryType: event.target.value });
            } }, h("wa-radio", { key: '626c3488049c4501c5e736c925cf9bb9a08f823c', value: "CR", appearance: "button", class: "entry-type --credit" }, "Credit"), h("wa-radio", { key: 'b201866e68b594a48f96896c649c63e41573df84', value: "DB", appearance: "button", class: "entry-type --debit" }, "Debit"))))));
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