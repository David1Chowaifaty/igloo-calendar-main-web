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
        return (h(Fragment, { key: 'e99008a0f1fcfdac3e367b2780e86763f76ecec3' }, h("div", { key: '2b920def4476c32efe5c3f91a87bf3670dd6eb7f', class: "field field--full-width" }, h("ir-validator", { key: 'ef1420892ddad3ff3c693efb06fa878a156af9b3', schema: entryTypeFieldSchema, value: this.entryType, valueEvent: "change" }, h("wa-radio-group", { key: '212c5ec5c34f40ed1fbb612e62569b431104aa33', label: "Entry Type", orientation: "horizontal", size: "small", value: this.entryType, onchange: event => {
                this.fieldChange.emit({ entryType: event.target.value });
            } }, h("wa-radio", { key: '9577bf83d16da5d179920fa4aad6c1c02e217f78', value: "CR", appearance: "button", class: "entry-type --credit" }, "Credit"), h("wa-radio", { key: 'c6ca3ec310551d84191ab39d6ced7583334ce528', value: "DB", appearance: "button", class: "entry-type --debit" }, "Debit")))), h("div", { key: '38bf5cda3e61c80d7cad69463b0e4c9bc111e24a', class: "field" }, h("ir-validator", { key: 'c14f33d4d3fd13679bd7d3c897fe65874a7ce479', schema: linkTypeFieldSchema, value: this.linkType, valueEvent: "change" }, h("wa-select", { key: 'b3421057f25e25b36264c3c4bb9ddc1a4da6d275', label: "Link Type", size: "small", value: this.linkType, onchange: event => {
                const linkType = event.target.value;
                this.fieldChange.emit({
                    linkType,
                    linkedId: linkType === 'NONE' ? undefined : this.linkedId,
                });
            } }, LINK_TYPES.map(lt => (h("wa-option", { key: lt, value: lt }, lt)))))), this.linkType !== 'NONE' && (h("div", { key: 'ed4e2483a7992d50c4049e46cd3c08bb2f92da3a', class: "field" }, h("wa-select", { key: 'baedc8d36d8ed567f102cbc920f4cce0302b0658', label: "Linked Record", size: "small", value: this.linkedId ?? '', onchange: event => {
                this.fieldChange.emit({ linkedId: event.target.value || undefined });
            } }, h("wa-option", { key: '96455865b26d4b8636788401547183b262034388', value: "" }, "No linked record"), this.linkedIdOptions.map(option => (h("wa-option", { key: option.id, value: option.id }, option.label))))))));
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