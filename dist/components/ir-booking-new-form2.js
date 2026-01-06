import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { l as locales } from './locales.store.js';
import { d as defineCustomElement$r } from './igl-application-info2.js';
import { d as defineCustomElement$q } from './igl-date-range2.js';
import { d as defineCustomElement$p } from './igl-rate-plan2.js';
import { d as defineCustomElement$o } from './igl-room-type2.js';
import { d as defineCustomElement$n } from './ir-air-date-picker2.js';
import { d as defineCustomElement$m } from './ir-booking-editor2.js';
import { d as defineCustomElement$l } from './ir-booking-editor-drawer2.js';
import { d as defineCustomElement$k } from './ir-booking-editor-form2.js';
import { d as defineCustomElement$j } from './ir-booking-editor-guest-form2.js';
import { d as defineCustomElement$i } from './ir-booking-editor-header2.js';
import { d as defineCustomElement$h } from './ir-button2.js';
import { d as defineCustomElement$g } from './ir-country-picker2.js';
import { d as defineCustomElement$f } from './ir-custom-button2.js';
import { d as defineCustomElement$e } from './ir-date-select2.js';
import { d as defineCustomElement$d } from './ir-date-view2.js';
import { d as defineCustomElement$c } from './ir-drawer2.js';
import { d as defineCustomElement$b } from './ir-icons2.js';
import { d as defineCustomElement$a } from './ir-input2.js';
import { d as defineCustomElement$9 } from './ir-input-text2.js';
import { d as defineCustomElement$8 } from './ir-interceptor2.js';
import { d as defineCustomElement$7 } from './ir-mobile-input2.js';
import { d as defineCustomElement$6 } from './ir-otp2.js';
import { d as defineCustomElement$5 } from './ir-otp-modal2.js';
import { d as defineCustomElement$4 } from './ir-picker2.js';
import { d as defineCustomElement$3 } from './ir-picker-item2.js';
import { d as defineCustomElement$2 } from './ir-spinner2.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';

const irBookingNewFormCss = ".sc-ir-booking-new-form-h{display:block}";
const IrBookingNewFormStyle0 = irBookingNewFormCss;

const IrBookingNewForm = /*@__PURE__*/ proxyCustomElement(class IrBookingNewForm extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    ticket;
    propertyid;
    language;
    bookingItem = null;
    handleTriggerClicked() {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        this.bookingItem = {
            FROM_DATE: undefined,
            defaultDateRange: {
                fromDate: new Date(),
                fromDateStr: '',
                toDate: tomorrow,
                toDateStr: '',
                dateDifference: 0,
                message: '',
            },
            TO_DATE: undefined,
            EMAIL: '',
            event_type: 'PLUS_BOOKING',
            ID: '',
            NAME: '',
            PHONE: '',
            REFERENCE_TYPE: '',
            TITLE: locales?.entries.Lcz_NewBooking,
        };
    }
    render() {
        return (h(Host, { key: '9ac763c3a88a825cb23d05474ae0bda443a9baaf' }, h("div", { key: '73de37ee5741f32bb4c3e65ca657a0b331315aaa', onClick: () => {
                this.handleTriggerClicked();
            } }, h("slot", { key: 'eda10fcf20a50550a808d1de8a8c1acfeb0c1d4d', name: "trigger" }, h("ir-custom-button", { key: '7dece3400e57a2d4adbacbee8a952818f39f9e32', appearance: "plain", variant: "brand" }, h("wa-icon", { key: '86f9276fea1dd1c70e8432dfe406aec58cf1077d', name: "circle-plus", style: { fontSize: '1.2rem' } })))), h("ir-booking-editor-drawer", { key: '5c751af0ddd354f753535126822e2fe40c7dd507', onBookingEditorClosed: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingItem = null;
            }, mode: this.bookingItem?.event_type, label: this.bookingItem?.TITLE, ticket: this.ticket, open: this.bookingItem !== null, language: this.language, propertyid: this.propertyid })));
    }
    static get style() { return IrBookingNewFormStyle0; }
}, [6, "ir-booking-new-form", {
        "ticket": [1],
        "propertyid": [1],
        "language": [1],
        "bookingItem": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-booking-new-form", "igl-application-info", "igl-date-range", "igl-rate-plan", "igl-room-type", "ir-air-date-picker", "ir-booking-editor", "ir-booking-editor-drawer", "ir-booking-editor-form", "ir-booking-editor-guest-form", "ir-booking-editor-header", "ir-button", "ir-country-picker", "ir-custom-button", "ir-date-select", "ir-date-view", "ir-drawer", "ir-icons", "ir-input", "ir-input-text", "ir-interceptor", "ir-mobile-input", "ir-otp", "ir-otp-modal", "ir-picker", "ir-picker-item", "ir-spinner", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-booking-new-form":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBookingNewForm);
            }
            break;
        case "igl-application-info":
            if (!customElements.get(tagName)) {
                defineCustomElement$r();
            }
            break;
        case "igl-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$q();
            }
            break;
        case "igl-rate-plan":
            if (!customElements.get(tagName)) {
                defineCustomElement$p();
            }
            break;
        case "igl-room-type":
            if (!customElements.get(tagName)) {
                defineCustomElement$o();
            }
            break;
        case "ir-air-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$n();
            }
            break;
        case "ir-booking-editor":
            if (!customElements.get(tagName)) {
                defineCustomElement$m();
            }
            break;
        case "ir-booking-editor-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "ir-booking-editor-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "ir-booking-editor-guest-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-booking-editor-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-country-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-date-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-mobile-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-otp-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-picker-item":
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

export { IrBookingNewForm as I, defineCustomElement as d };

//# sourceMappingURL=ir-booking-new-form2.js.map