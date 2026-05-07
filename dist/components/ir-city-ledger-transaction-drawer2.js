import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$d } from './ir-air-date-picker2.js';
import { d as defineCustomElement$c } from './ir-city-ledger-transaction-form2.js';
import { d as defineCustomElement$b } from './ir-cl-adjustment-fields2.js';
import { d as defineCustomElement$a } from './ir-cl-credit-note-fields2.js';
import { d as defineCustomElement$9 } from './ir-cl-debit-note-fields2.js';
import { d as defineCustomElement$8 } from './ir-cl-opening-balance-fields2.js';
import { d as defineCustomElement$7 } from './ir-cl-payment-fields2.js';
import { d as defineCustomElement$6 } from './ir-custom-button2.js';
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
    agent = null;
    booking = null;
    initialTransactionType = 'OB';
    unpaidInvoiceOptions = [];
    bookingOptions = [];
    serviceCategoryOptions = [];
    transaction = null;
    saveDisabled = false;
    closeDrawer;
    transactionSaved;
    stopEventPropagation(event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
    }
    render() {
        return (h("ir-drawer", { key: '65824ab24e19c27bd183e154d6adcd9e7c7edaa2', open: this.open, style: {
                '--ir-drawer-width': '40rem',
                '--ir-drawer-background-color': 'var(--wa-color-surface-default)',
                '--ir-drawer-padding-left': 'var(--spacing)',
                '--ir-drawer-padding-right': 'var(--spacing)',
                '--ir-drawer-padding-top': 'var(--spacing)',
                '--ir-drawer-padding-bottom': 'var(--spacing)',
            }, label: this.drawerLabel, onDrawerHide: event => {
                this.stopEventPropagation(event);
                if (event.detail) {
                    this.closeDrawer.emit();
                }
            } }, this.open && (h("ir-city-ledger-transaction-form", { key: '1ccc370f300e6788cdd1af5f4bfe19b1aa4e766a', booking: this.booking, formId: this.formId, agent: this.agent, initialTransactionType: this.initialTransactionType, unpaidInvoiceOptions: this.unpaidInvoiceOptions, bookingOptions: this.bookingOptions, serviceCategoryOptions: this.serviceCategoryOptions, transaction: this.transaction, onTransactionSaved: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.transactionSaved.emit();
                this.closeDrawer.emit();
            }, onSubmitDisabledChange: (e) => {
                this.saveDisabled = e.detail;
            } })), h("div", { key: 'f757e6261ef5a2fd3bd2dc5ad149b4e0b88ffa24', slot: "footer", class: 'ir__drawer-footer' }, h("ir-custom-button", { key: 'c665b1747bf8580f7ea7885ac17915b9445248d5', appearance: "filled", size: "medium", variant: "neutral", class: "city-ledger-transaction-drawer__btn", onClickHandler: () => this.closeDrawer.emit() }, "Cancel"), h("ir-custom-button", { key: '67fd66b10177841407aafc749261836f87ea7cac', form: this.formId, size: "medium", type: "submit", variant: "brand", class: "city-ledger-transaction-drawer__btn", disabled: this.saveDisabled }, "Save"))));
    }
    static get style() { return IrCityLedgerTransactionDrawerStyle0; }
}, [2, "ir-city-ledger-transaction-drawer", {
        "open": [516],
        "formId": [1, "form-id"],
        "drawerLabel": [1, "drawer-label"],
        "agent": [16],
        "booking": [16],
        "initialTransactionType": [1, "initial-transaction-type"],
        "unpaidInvoiceOptions": [16],
        "bookingOptions": [16],
        "serviceCategoryOptions": [16],
        "transaction": [16],
        "saveDisabled": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-city-ledger-transaction-drawer", "ir-air-date-picker", "ir-city-ledger-transaction-form", "ir-cl-adjustment-fields", "ir-cl-credit-note-fields", "ir-cl-debit-note-fields", "ir-cl-opening-balance-fields", "ir-cl-payment-fields", "ir-custom-button", "ir-date-select", "ir-drawer", "ir-input", "ir-spinner", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-city-ledger-transaction-drawer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrCityLedgerTransactionDrawer);
            }
            break;
        case "ir-air-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-city-ledger-transaction-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-cl-adjustment-fields":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-cl-credit-note-fields":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-cl-debit-note-fields":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-cl-opening-balance-fields":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-cl-payment-fields":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-custom-button":
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