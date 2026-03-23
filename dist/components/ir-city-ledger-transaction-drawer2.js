import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$8 } from './ir-city-ledger-transaction-form2.js';
import { d as defineCustomElement$7 } from './ir-custom-button2.js';
import { d as defineCustomElement$6 } from './ir-custom-date-range2.js';
import { d as defineCustomElement$5 } from './ir-date-select2.js';
import { d as defineCustomElement$4 } from './ir-drawer2.js';
import { d as defineCustomElement$3 } from './ir-input2.js';
import { d as defineCustomElement$2 } from './ir-spinner2.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';

const irCityLedgerTransactionDrawerCss = ".sc-ir-city-ledger-transaction-drawer-h{display:block}.city-ledger-transaction-drawer__footer.sc-ir-city-ledger-transaction-drawer{display:flex;gap:0.75rem}.city-ledger-transaction-drawer__btn.sc-ir-city-ledger-transaction-drawer{flex:1 1 0}";
const IrCityLedgerTransactionDrawerStyle0 = irCityLedgerTransactionDrawerCss;

const IrCityLedgerTransactionDrawer = /*@__PURE__*/ proxyCustomElement(class IrCityLedgerTransactionDrawer extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.closeDrawer = createEvent(this, "closeDrawer", 7);
        this.transactionSaved = createEvent(this, "transactionSaved", 7);
    }
    open = false;
    formId = 'city-ledger-transaction-form';
    drawerLabel = 'New Entry';
    agentId = null;
    initialTransactionType = 'OB';
    taxOptions = [];
    unpaidInvoiceOptions = [];
    bookingOptions = [];
    serviceCategoryOptions = [];
    currencySymbol = '$';
    closeDrawer;
    transactionSaved;
    stopEventPropagation(event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
    }
    render() {
        return (h("ir-drawer", { key: '551c8451da42302549876abd6034a9a7e0974c5f', open: this.open, label: this.drawerLabel, onDrawerHide: event => {
                this.stopEventPropagation(event);
                if (event.detail) {
                    this.closeDrawer.emit();
                }
            } }, this.open && (h("ir-city-ledger-transaction-form", { key: '1963e80bd15c1e4898d8116cf4cb65cf37e52c73', formId: this.formId, agentId: this.agentId, initialTransactionType: this.initialTransactionType, taxOptions: this.taxOptions, unpaidInvoiceOptions: this.unpaidInvoiceOptions, bookingOptions: this.bookingOptions, serviceCategoryOptions: this.serviceCategoryOptions, currencySymbol: this.currencySymbol, onTransactionSaved: () => {
                this.transactionSaved.emit();
                this.closeDrawer.emit();
            } })), h("div", { key: '812414640d144ea2eb1e9aa854e6d87f39b1a091', slot: "footer", class: 'ir__drawer-footer' }, h("ir-custom-button", { key: 'd21424a4a1e59256b628efb27c1d9f76d0f1358d', appearance: "filled", size: "medium", variant: "neutral", class: "city-ledger-transaction-drawer__btn", onClickHandler: () => this.closeDrawer.emit() }, "Cancel"), h("ir-custom-button", { key: '1c29cf7435341bff0dd7ad7eee08262e591cdb63', form: this.formId, size: "medium", type: "submit", variant: "brand", class: "city-ledger-transaction-drawer__btn" }, "Save"))));
    }
    static get style() { return IrCityLedgerTransactionDrawerStyle0; }
}, [2, "ir-city-ledger-transaction-drawer", {
        "open": [516],
        "formId": [1, "form-id"],
        "drawerLabel": [1, "drawer-label"],
        "agentId": [2, "agent-id"],
        "initialTransactionType": [1, "initial-transaction-type"],
        "taxOptions": [16],
        "unpaidInvoiceOptions": [16],
        "bookingOptions": [16],
        "serviceCategoryOptions": [16],
        "currencySymbol": [1, "currency-symbol"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-city-ledger-transaction-drawer", "ir-city-ledger-transaction-form", "ir-custom-button", "ir-custom-date-range", "ir-date-select", "ir-drawer", "ir-input", "ir-spinner", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-city-ledger-transaction-drawer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrCityLedgerTransactionDrawer);
            }
            break;
        case "ir-city-ledger-transaction-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-custom-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-date-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-spinner":
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

export { IrCityLedgerTransactionDrawer as I, defineCustomElement as d };

//# sourceMappingURL=ir-city-ledger-transaction-drawer2.js.map