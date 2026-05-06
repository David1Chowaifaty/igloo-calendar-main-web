import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { e as entryTypeFieldSchema } from './ir-city-ledger-transaction-form.schema.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';

const irClOpeningBalanceFieldsCss = ".sc-ir-cl-opening-balance-fields-h{display:flex;flex-direction:column;gap:0.75rem;border-radius:0.625rem}.field.sc-ir-cl-opening-balance-fields{display:grid;gap:0.35rem}.field--full-width.sc-ir-cl-opening-balance-fields,.field--full-width.sc-ir-cl-opening-balance-fields wa-radio-group.sc-ir-cl-opening-balance-fields{width:100%}.field--full-width.sc-ir-cl-opening-balance-fields wa-radio-group.sc-ir-cl-opening-balance-fields wa-radio.sc-ir-cl-opening-balance-fields{flex:1}.entry-type.--credit.sc-ir-cl-opening-balance-fields:state(checked){background-color:var(--wa-color-success-fill-quiet);color:var(--wa-color-success-on-quiet);border-color:var(--wa-color-success-border-loud)}.entry-type.--debit.sc-ir-cl-opening-balance-fields:state(checked){background-color:var(--wa-color-danger-fill-quiet);color:var(--wa-color-danger-on-quiet);border-color:var(--wa-color-danger-border-loud)}@keyframes slide-in{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}";
const IrClOpeningBalanceFieldsStyle0 = irClOpeningBalanceFieldsCss;

const IrClOpeningBalanceFields = /*@__PURE__*/ proxyCustomElement(class IrClOpeningBalanceFields extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.fieldChange = createEvent(this, "fieldChange", 7);
    }
    entryType = '';
    fieldChange;
    render() {
        return (h("div", { key: 'd459653626aabe0ceedab433496fbb83bd4118e8', class: "field field--full-width" }, h("ir-validator", { key: '678829b1ac37a77fc06f5ddc747296e28e59b4d7', schema: entryTypeFieldSchema, value: this.entryType, valueEvent: "change" }, h("wa-radio-group", { key: '2641e44f245d52a3abb62c77312d74a70f503b48', label: "Entry Type", orientation: "horizontal", size: "small", value: this.entryType, onchange: event => {
                this.fieldChange.emit({ entryType: event.target.value });
            } }, h("wa-radio", { key: '21a1e38fd13379c469e880e701c668d9d3ab82bf', value: "CR", appearance: "button", class: "entry-type --credit" }, "Credit"), h("wa-radio", { key: 'ef194aa50c96e42863a229ef4999a54f979f22c3', value: "DB", appearance: "button", class: "entry-type --debit" }, "Debit")))));
    }
    static get style() { return IrClOpeningBalanceFieldsStyle0; }
}, [2, "ir-cl-opening-balance-fields", {
        "entryType": [1, "entry-type"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-cl-opening-balance-fields", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-cl-opening-balance-fields":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrClOpeningBalanceFields);
            }
            break;
        case "ir-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrClOpeningBalanceFields as I, defineCustomElement as d };

//# sourceMappingURL=ir-cl-opening-balance-fields2.js.map