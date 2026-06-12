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
        return (h("ir-drawer", { key: '296cc9cd814c0edaeda0696b3ce57a1fe9a9a4d1', open: this.open, label: this.label, onDrawerHide: this.handleDrawerHide }, this.open && (h("igl-rate-extender-form", { key: 'b1a6dec09a747202f34757a955f6e51dc9049ee6', bookingNumber: this.bookingNumber, propertyId: this.propertyId, language: this.language, identifier: this.identifier, toDate: this.toDate, fromDate: this.fromDate, pool: this.pool, defaultDates: this.defaultDates, onLoadingChanged: e => {
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
            } })), h("div", { key: 'ef7ac702de2c60893271edccd5d56af5fe2b8b3e', slot: "footer", class: 'ir__drawer-footer' }, h("ir-custom-button", { key: '19ffcf69066079c647e8600a874417689e000b48', size: "medium", appearance: "filled", variant: "neutral", "data-drawer": "close" }, "Cancel"), h("ir-custom-button", { key: 'd739f0f8511ec0bd613b78aa4ffde5a12ca30af5', loading: this.isLoading, disabled: !this.hasInventory, size: "medium", type: "submit", form: "rate-extender-form", appearance: "accent", variant: "brand" }, "Confirm"))));
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