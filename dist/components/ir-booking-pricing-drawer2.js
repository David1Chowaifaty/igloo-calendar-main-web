import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$5 } from './ir-booking-pricing-form2.js';
import { d as defineCustomElement$4 } from './ir-custom-button2.js';
import { d as defineCustomElement$3 } from './ir-drawer2.js';
import { d as defineCustomElement$2 } from './ir-input2.js';
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
        return (h("ir-drawer", { key: 'ae3d3777e452d0684cc9976bef2cfb3e9ce8ea36', open: this.open, label: this.drawerLabel, style: {
                '--ir-drawer-width': '40rem',
                '--ir-drawer-background-color': 'var(--wa-color-surface-default)',
                '--ir-drawer-padding-left': 'var(--spacing)',
                '--ir-drawer-padding-right': 'var(--spacing)',
                '--ir-drawer-padding-top': 'var(--spacing)',
                '--ir-drawer-padding-bottom': 'var(--spacing)',
            }, onDrawerHide: event => {
                this.stopEventPropagation(event);
                if (event.detail) {
                    this.closeDrawer.emit();
                }
            } }, this.open && (h("ir-booking-pricing-form", { key: 'a0966e678a26fec79d44f7a18e3237ef2a8a795a', formId: this.formId, booking: this.booking, room: this.room, agent: this.agent, folioEntries: this.folioEntries, currencySymbol: this.currencySymbol, onPricingSaved: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.pricingSaved.emit();
                this.closeDrawer.emit();
            }, onSubmitDisabledChange: (e) => {
                this.saveDisabled = e.detail;
            } })), h("div", { key: '043fa9526244ec890339f4a860df99425f2636ed', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: '7a5cc1375908460832ec805f3d702e9f59abef27', appearance: "filled", size: "medium", variant: "neutral", onClickHandler: () => this.closeDrawer.emit() }, "Cancel"), h("ir-custom-button", { key: '2236af999f359eca146b5779a9676939d9d72723', form: this.formId, size: "medium", type: "submit", variant: "brand", loading: this.saveDisabled }, "Confirm"))));
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
        "saveDisabled": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-booking-pricing-drawer", "ir-booking-pricing-form", "ir-custom-button", "ir-drawer", "ir-input", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-booking-pricing-drawer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBookingPricingDrawer);
            }
            break;
        case "ir-booking-pricing-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-input":
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