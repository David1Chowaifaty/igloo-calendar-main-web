import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$7 } from './igl-rate-extender-form2.js';
import { d as defineCustomElement$6 } from './ir-custom-button2.js';
import { d as defineCustomElement$5 } from './ir-drawer2.js';
import { d as defineCustomElement$4 } from './ir-input2.js';
import { d as defineCustomElement$3 } from './ir-spinner2.js';
import { d as defineCustomElement$2 } from './ir-unit-tag2.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';

const iglRateExtenderDrawerCss = ".sc-igl-rate-extender-drawer-h{display:block}";
const IglRateExtenderDrawerStyle0 = iglRateExtenderDrawerCss;

const IglRateExtenderDrawer = /*@__PURE__*/ proxyCustomElement(class IglRateExtenderDrawer extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.closeRoomNightsDialog = createEvent(this, "closeRoomNightsDialog", 7);
    }
    open = false;
    bookingNumber;
    propertyId;
    language;
    identifier;
    toDate;
    fromDate;
    pool;
    ticket;
    defaultDates;
    isLoading = false;
    hasInventory = false;
    closeRoomNightsDialog;
    get label() {
        return `Adding Room Nights`;
    }
    handleDrawerHide = (e) => {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.hasInventory = false;
        this.closeRoomNightsDialog.emit({ type: 'cancel', pool: this.pool });
    };
    render() {
        return (h("ir-drawer", { key: '493f45f208238cec14e2dfbc5b432188a2a9c80a', open: this.open, label: this.label, onDrawerHide: this.handleDrawerHide }, this.open && (h("igl-rate-extender-form", { key: '9cb8519958073772244658768c949f3d7575dae4', bookingNumber: this.bookingNumber, propertyId: this.propertyId, language: this.language, identifier: this.identifier, toDate: this.toDate, fromDate: this.fromDate, pool: this.pool, defaultDates: this.defaultDates, onLoadingChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isLoading = e.detail;
            }, onAvailabilityChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.hasInventory = e.detail;
            }, onCloseRoomNightsDialog: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeRoomNightsDialog.emit(e.detail);
            } })), h("div", { key: 'a4def2787a054cd687aabc45e1ef5920e0716138', slot: "footer", class: 'ir__drawer-footer' }, h("ir-custom-button", { key: 'eea2af1fb4e39ca8dab1367a09176058bc6dda79', size: "medium", appearance: "filled", variant: "neutral", "data-drawer": "close" }, "Cancel"), h("ir-custom-button", { key: 'aa824f589a9b14684bfdf28fe5b7103b1aa95d7f', loading: this.isLoading, disabled: !this.hasInventory, size: "medium", type: "submit", form: "rate-extender-form", appearance: "accent", variant: "brand" }, "Confirm"))));
    }
    static get style() { return IglRateExtenderDrawerStyle0; }
}, [2, "igl-rate-extender-drawer", {
        "open": [4],
        "bookingNumber": [1, "booking-number"],
        "propertyId": [2, "property-id"],
        "language": [1],
        "identifier": [1],
        "toDate": [1, "to-date"],
        "fromDate": [1, "from-date"],
        "pool": [1],
        "ticket": [1],
        "defaultDates": [16],
        "isLoading": [32],
        "hasInventory": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["igl-rate-extender-drawer", "igl-rate-extender-form", "ir-custom-button", "ir-drawer", "ir-input", "ir-spinner", "ir-unit-tag", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-rate-extender-drawer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglRateExtenderDrawer);
            }
            break;
        case "igl-rate-extender-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-unit-tag":
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

export { IglRateExtenderDrawer as I, defineCustomElement as d };

//# sourceMappingURL=igl-rate-extender-drawer2.js.map