import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { e as entryTypeFieldSchema, l as linkTypeFieldSchema, L as LINK_TYPES } from './ir-city-ledger-transaction-form.schema.js';
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
    get linkedIdOptions() {
        if (this.linkType === 'BOOKING')
            return this.bookingOptions;
        if (this.linkType === 'INVOICE')
            return this.unpaidInvoiceOptions;
        return [];
    }
    render() {
        return (h(Fragment, { key: '7f0750bb10d1a36697f1ef6a7dfd2222e159a725' }, h("div", { key: '44250d3306550af54e0da6c56f149c9e8b7d93cd', class: "field field--full-width" }, h("ir-validator", { key: '66303979b868e585580b21fcb33aeaa235986ef9', schema: entryTypeFieldSchema, value: this.entryType, valueEvent: "change" }, h("wa-radio-group", { key: '8a71b38757d3a35f6e14c6b5a9db76e8ebf16f3e', label: "Entry Type", orientation: "horizontal", size: "small", value: this.entryType, onchange: event => {
                this.fieldChange.emit({ entryType: event.target.value });
            } }, h("wa-radio", { key: '51b281b447fee81d8139aae2006e5c88c63e214e', value: "CR", appearance: "button", class: "entry-type --credit" }, "Credit"), h("wa-radio", { key: '4e1c63271ffeb19535e70246e1628de53badc5ff', value: "DB", appearance: "button", class: "entry-type --debit" }, "Debit")))), h("div", { key: '9beff7e8d1fa9d6aea062134fd2331ae90147128', class: "field" }, h("ir-validator", { key: 'd2e63e68595b7e44f893c0c5d6d5b07146cd990d', schema: linkTypeFieldSchema, value: this.linkType, valueEvent: "change" }, h("wa-select", { key: '5cf84d9202004ad785afbf0bfb45fbe0f89ee575', label: "Link Type", size: "small", value: this.linkType, onchange: event => {
                const linkType = event.target.value;
                this.fieldChange.emit({
                    linkType,
                    linkedId: linkType === 'NONE' ? undefined : this.linkedId,
                });
            } }, LINK_TYPES.map(lt => (h("wa-option", { key: lt, value: lt }, lt)))))), this.linkType !== 'NONE' && (h("div", { key: '7ecfb8ef9344ba7f07dfc88cda012eae7886e561', class: "field" }, h("wa-select", { key: '1bbf5ed7d6e019f4b5546394dc5c0e68967dc773', label: "Linked Record", size: "small", value: this.linkedId ?? '', onchange: event => {
                this.fieldChange.emit({ linkedId: event.target.value || undefined });
            } }, h("wa-option", { key: 'abafb23ee673d7aea657a9fde6fa4207fc169da8', value: "" }, "No linked record"), this.linkedIdOptions.map(option => (h("wa-option", { key: option.id, value: option.id }, option.label))))))));
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