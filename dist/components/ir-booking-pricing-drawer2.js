import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$6 } from './ir-booking-pricing-form2.js';
import { d as defineCustomElement$5 } from './ir-custom-button2.js';
import { d as defineCustomElement$4 } from './ir-drawer2.js';
import { d as defineCustomElement$3 } from './ir-input2.js';
import { d as defineCustomElement$2 } from './ir-spinner2.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';

const irBookingPricingDrawerCss = ".sc-ir-booking-pricing-drawer-h{display:block}.pricing-drawer__footer.sc-ir-booking-pricing-drawer{display:flex;gap:0.75rem}.pricing-drawer__btn.sc-ir-booking-pricing-drawer{flex:1 1 0}";
const IrBookingPricingDrawerStyle0 = irBookingPricingDrawerCss;

const IrBookingPricingDrawer = /*@__PURE__*/ proxyCustomElement(class IrBookingPricingDrawer extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.closeDrawer = createEvent(this, "closeDrawer", 7);
        this.pricingSaved = createEvent(this, "pricingSaved", 7);
    }
    open = false;
    formId = 'booking-pricing-form';
    booking;
    room;
    agent = null;
    folioEntries = [];
    currencySymbol = '';
    saveDisabled = false;
    allItemsDisabled = false;
    closeDrawer;
    pricingSaved;
    get drawerLabel() {
        if (!this.room)
            return 'Edit Nightly Rates';
        const parts = [this.room.roomtype?.name, this.room.rateplan?.short_name].filter(Boolean);
        const unitName = this.room.unit?.name;
        if (unitName)
            parts.push(unitName);
        return parts.join(' ');
    }
    stopEventPropagation(event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
    }
    render() {
        return (h("ir-drawer", { key: '6e0ade3e7bdf88a975630e92fee57ad7e78faadd', open: this.open, label: this.drawerLabel, style: {
                '--ir-drawer-width': '40rem',
                '--ir-drawer-background-color': 'var(--wa-color-surface-default)',
                '--ir-drawer-padding-left': 'var(--spacing)',
                '--ir-drawer-padding-right': 'var(--spacing)',
                '--ir-drawer-padding-top': 'var(--spacing)',
                '--ir-drawer-padding-bottom': 'var(--spacing)',
            }, onDrawerHide: event => {
                this.stopEventPropagation(event);
                if (event.detail) {
                    this.allItemsDisabled = false;
                    this.closeDrawer.emit();
                }
            } }, this.open && (h("ir-booking-pricing-form", { key: '114b20c494fc61e84318866a46cd04bf928f97a5', formId: this.formId, booking: this.booking, room: this.room, agent: this.agent, folioEntries: this.folioEntries, currencySymbol: this.currencySymbol, onPricingSaved: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.pricingSaved.emit();
                this.closeDrawer.emit();
            }, onSubmitDisabledChange: (e) => {
                this.saveDisabled = e.detail;
            }, onAllDisabled: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.allItemsDisabled = e.detail;
            } })), h("div", { key: '1e23273651cdb78f6b3cf54b8c7562b2d41f6daf', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: 'b6d80ae7061bfc66b45bf94f7b59d554d71920bb', appearance: "filled", size: "medium", variant: "neutral", onClickHandler: () => this.closeDrawer.emit() }, "Cancel"), h("ir-custom-button", { key: '7d42108d6b05d3110ccc23871268c30052fb68aa', form: this.formId, size: "medium", type: "submit", variant: "brand", loading: this.saveDisabled, disabled: this.allItemsDisabled }, "Confirm"))));
    }
    static get style() { return IrBookingPricingDrawerStyle0; }
}, [2, "ir-booking-pricing-drawer", {
        "open": [516],
        "formId": [1, "form-id"],
        "booking": [16],
        "room": [16],
        "agent": [16],
        "folioEntries": [16],
        "currencySymbol": [1, "currency-symbol"],
        "saveDisabled": [32],
        "allItemsDisabled": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-booking-pricing-drawer", "ir-booking-pricing-form", "ir-custom-button", "ir-drawer", "ir-input", "ir-spinner", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-booking-pricing-drawer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBookingPricingDrawer);
            }
            break;
        case "ir-booking-pricing-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-custom-button":
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

export { IrBookingPricingDrawer as I, defineCustomElement as d };

//# sourceMappingURL=ir-booking-pricing-drawer2.js.map