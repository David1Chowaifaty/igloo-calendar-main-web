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
        return (h(Fragment, { key: '52dd7ca2640a74aa4976a6c19abcc6b6d8953723' }, h("div", { key: '3486737607c07d4a88623a1b0be55d333304986d', class: "field field--full-width" }, h("ir-validator", { key: '904e1ca1b9e4912acef3023f66383035815d2656', schema: entryTypeFieldSchema, value: this.entryType, valueEvent: "change" }, h("wa-radio-group", { key: 'd1f1c2d1bb3342c152ec663e7043a5b7966c2f35', label: "Entry Type", orientation: "horizontal", size: "small", value: this.entryType, onchange: event => {
                this.fieldChange.emit({ entryType: event.target.value });
            } }, h("wa-radio", { key: '7363e6bab43e9ce51c1832a0b4c70b98241aa451', value: "CR", appearance: "button", class: "entry-type --credit" }, "Credit"), h("wa-radio", { key: '1074c504508ba48c9021e8964cf78a95417e593b', value: "DB", appearance: "button", class: "entry-type --debit" }, "Debit")))), h("div", { key: '28bf628c2c0a1052c314bcdd82a646e2ba78a3a9', class: "field" }, h("ir-validator", { key: '43e5418c345eb966205ad65a012dfb1a3ab222f2', schema: linkTypeFieldSchema, value: this.linkType, valueEvent: "change" }, h("wa-select", { key: '926e30de05cdbd03081962c6717b77d05192f0b6', label: "Link Type", size: "small", value: this.linkType, onchange: event => {
                const linkType = event.target.value;
                this.fieldChange.emit({
                    linkType,
                    linkedId: linkType === 'NONE' ? undefined : this.linkedId,
                });
            } }, LINK_TYPES.map(lt => (h("wa-option", { key: lt, value: lt }, lt)))))), this.linkType !== 'NONE' && (h("div", { key: '034098d364ac370f1fc75fafd7e5b2cd9f70e7c4', class: "field" }, h("wa-select", { key: 'c0f1cd12e4101316d863833b20b69be9fae6ff80', label: "Linked Record", size: "small", value: this.linkedId ?? '', onchange: event => {
                this.fieldChange.emit({ linkedId: event.target.value || undefined });
            } }, h("wa-option", { key: 'd356515764c0400efdd250c8f4b28d1adf8a4c6a', value: "" }, "No linked record"), this.linkedIdOptions.map(option => (h("wa-option", { key: option.id, value: option.id }, option.label))))))));
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