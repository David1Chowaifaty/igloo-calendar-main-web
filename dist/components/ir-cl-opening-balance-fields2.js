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
        return (h("div", { key: '55593d4d6a6c66de72e236dc407797d463237f55', class: "field field--full-width" }, h("ir-validator", { key: 'dbe417bc0575359e028d72ad443fe568dd38ed7a', schema: entryTypeFieldSchema, value: this.entryType, valueEvent: "change" }, h("wa-radio-group", { key: '775de53700516f89039c64c90e11bb1a18dc23ec', label: "Entry Type", orientation: "horizontal", size: "small", value: this.entryType, onchange: event => {
                this.fieldChange.emit({ entryType: event.target.value });
            } }, h("wa-radio", { key: '729a7dd6cbfe82db6064d254d947bd60f61e7a47', value: "CR", appearance: "button", class: "entry-type --credit" }, "Credit"), h("wa-radio", { key: '09a8da0fcedbb8ac58eae5f4fdd45f402030360d', value: "DB", appearance: "button", class: "entry-type --debit" }, "Debit")))));
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