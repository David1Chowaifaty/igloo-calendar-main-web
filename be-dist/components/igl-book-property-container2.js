import { proxyCustomElement, HTMLElement, createEvent, h, Host, Fragment } from '@stencil/core/internal/client';
import { T as Token } from './Token.js';
import { B as BookingService } from './booking.service.js';
import { R as RoomService } from './room.service.js';
import { l as locales } from './locales.store.js';
import { d as defineCustomElement$o } from './igl-application-info2.js';
import { d as defineCustomElement$n } from './igl-block-dates-view2.js';
import { d as defineCustomElement$m } from './igl-book-property2.js';
import { d as defineCustomElement$l } from './igl-book-property-footer2.js';
import { d as defineCustomElement$k } from './igl-book-property-header2.js';
import { d as defineCustomElement$j } from './igl-booking-form2.js';
import { d as defineCustomElement$i } from './igl-booking-overview-page2.js';
import { d as defineCustomElement$h } from './igl-date-range2.js';
import { d as defineCustomElement$g } from './igl-property-booked-by2.js';
import { d as defineCustomElement$f } from './igl-rate-plan2.js';
import { d as defineCustomElement$e } from './igl-room-type2.js';
import { d as defineCustomElement$d } from './ir-autocomplete2.js';
import { d as defineCustomElement$c } from './ir-button2.js';
import { d as defineCustomElement$b } from './ir-combobox2.js';
import { d as defineCustomElement$a } from './ir-date-picker2.js';
import { d as defineCustomElement$9 } from './ir-date-view2.js';
import { d as defineCustomElement$8 } from './ir-icon2.js';
import { d as defineCustomElement$7 } from './ir-icons2.js';
import { d as defineCustomElement$6 } from './ir-interceptor2.js';
import { d as defineCustomElement$5 } from './ir-phone-input2.js';
import { d as defineCustomElement$4 } from './ir-price-input2.js';
import { d as defineCustomElement$3 } from './ir-select2.js';
import { d as defineCustomElement$2 } from './ir-toast2.js';
import { d as defineCustomElement$1 } from './ir-tooltip2.js';

const iglBookPropertyContainerCss = ".sc-igl-book-property-container-h{display:block;margin:0;padding:0;letter-spacing:0px !important;font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;font-size:1rem !important;font-weight:400 !important;line-height:1.45 !important;color:#6b6f82 !important;text-align:left !important}.book-container.sc-igl-book-property-container{width:min-content;margin:0;padding:0}h3.sc-igl-book-property-container{font-size:1rem}";
const IglBookPropertyContainerStyle0 = iglBookPropertyContainerCss;

const IglBookPropertyContainer = /*@__PURE__*/ proxyCustomElement(class IglBookPropertyContainer extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.resetBookingData = createEvent(this, "resetBookingData", 7);
        this.bookingService = new BookingService();
        this.roomService = new RoomService();
        this.token = new Token();
        this.language = '';
        this.ticket = '';
        this.p = undefined;
        this.propertyid = undefined;
        this.from_date = undefined;
        this.to_date = undefined;
        this.withIrToastAndInterceptor = true;
        this.bookingItem = undefined;
        this.showPaymentDetails = undefined;
        this.countryNodeList = undefined;
        this.calendarData = {};
    }
    setRoomsData(roomServiceResp) {
        var _a, _b;
        let roomsData = new Array();
        if ((_b = (_a = roomServiceResp.My_Result) === null || _a === void 0 ? void 0 : _a.roomtypes) === null || _b === void 0 ? void 0 : _b.length) {
            roomsData = roomServiceResp.My_Result.roomtypes;
            roomServiceResp.My_Result.roomtypes.forEach(roomCategory => {
                roomCategory.expanded = true;
            });
        }
        this.calendarData.roomsInfo = roomsData;
    }
    async initializeApp() {
        try {
            if (!this.propertyid && !this.p) {
                throw new Error('Property ID or username is required');
            }
            const [roomResponse, languageTexts, countriesList] = await Promise.all([
                this.roomService.getExposedProperty({ id: this.propertyid, language: this.language, aname: this.p }),
                this.roomService.fetchLanguage(this.language),
                this.bookingService.getCountries(this.language),
            ]);
            if (!locales.entries) {
                locales.entries = languageTexts.entries;
                locales.direction = languageTexts.direction;
            }
            this.countryNodeList = countriesList;
            const { allowed_payment_methods: paymentMethods, currency, allowed_booking_sources, adult_child_constraints, calendar_legends } = roomResponse['My_Result'];
            this.calendarData = { currency, allowed_booking_sources, adult_child_constraints, legendData: calendar_legends };
            this.setRoomsData(roomResponse);
            const paymentCodesToShow = ['001', '004'];
            this.showPaymentDetails = paymentMethods.some(method => paymentCodesToShow.includes(method.code));
        }
        catch (error) {
            console.error('Error initializing app:', error);
        }
    }
    componentWillLoad() {
        if (this.ticket !== '') {
            this.token.setToken(this.ticket);
            this.initializeApp();
        }
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
        this.initializeApp();
    }
    handleCloseBookingWindow() {
        this.bookingItem = null;
    }
    handleTriggerClicked() {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        this.bookingItem = {
            FROM_DATE: this.from_date,
            defaultDateRange: {
                fromDate: new Date(),
                fromDateStr: '',
                toDate: tomorrow,
                toDateStr: '',
                dateDifference: 0,
                message: '',
            },
            TO_DATE: this.to_date,
            EMAIL: '',
            event_type: 'PLUS_BOOKING',
            ID: '',
            NAME: '',
            PHONE: '',
            REFERENCE_TYPE: '',
            TITLE: locales.entries.Lcz_NewBooking,
        };
    }
    render() {
        return (h(Host, { key: '0acd117d26b31664eae8a208953f684e6b2c5d09' }, this.withIrToastAndInterceptor && (h(Fragment, { key: '038c95f2bcb514415a2ffaddef07af93495fdbcf' }, h("ir-toast", { key: '30dfc42676b8ecf9f1c5c314d05eb425ee6e86e0' }), h("ir-interceptor", { key: '496c57e93f121ed52e1a0a8e2c83a2f07b96a386' }))), h("div", { key: '91b001d2b3042f25830586a9b98054ec76d2ea2f', class: "book-container", onClick: this.handleTriggerClicked.bind(this) }, h("slot", { key: '91f8d576ff13a7c9f33cfc7c5893d2b7172ef71b', name: "trigger" })), this.bookingItem && (h("igl-book-property", { key: '55ad69cdd2d48161963a45ad8a35272f3ccaa116', allowedBookingSources: this.calendarData.allowed_booking_sources, adultChildConstraints: this.calendarData.adult_child_constraints, showPaymentDetails: this.showPaymentDetails, countryNodeList: this.countryNodeList, currency: this.calendarData.currency, language: this.language, propertyid: this.propertyid, bookingData: this.bookingItem, onResetBookingData: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.resetBookingData.emit(null);
            }, onCloseBookingWindow: () => this.handleCloseBookingWindow() }))));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
    static get style() { return IglBookPropertyContainerStyle0; }
}, [6, "igl-book-property-container", {
        "language": [1],
        "ticket": [1],
        "p": [1],
        "propertyid": [2],
        "from_date": [1],
        "to_date": [1],
        "withIrToastAndInterceptor": [4, "with-ir-toast-and-interceptor"],
        "bookingItem": [32],
        "showPaymentDetails": [32],
        "countryNodeList": [32],
        "calendarData": [32]
    }, undefined, {
        "ticket": ["ticketChanged"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["igl-book-property-container", "igl-application-info", "igl-block-dates-view", "igl-book-property", "igl-book-property-footer", "igl-book-property-header", "igl-booking-form", "igl-booking-overview-page", "igl-date-range", "igl-property-booked-by", "igl-rate-plan", "igl-room-type", "ir-autocomplete", "ir-button", "ir-combobox", "ir-date-picker", "ir-date-view", "ir-icon", "ir-icons", "ir-interceptor", "ir-phone-input", "ir-price-input", "ir-select", "ir-toast", "ir-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-book-property-container":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglBookPropertyContainer);
            }
            break;
        case "igl-application-info":
            if (!customElements.get(tagName)) {
                defineCustomElement$o();
            }
            break;
        case "igl-block-dates-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$n();
            }
            break;
        case "igl-book-property":
            if (!customElements.get(tagName)) {
                defineCustomElement$m();
            }
            break;
        case "igl-book-property-footer":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "igl-book-property-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "igl-booking-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "igl-booking-overview-page":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "igl-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "igl-property-booked-by":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "igl-rate-plan":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "igl-room-type":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-autocomplete":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-combobox":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-phone-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-price-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IglBookPropertyContainer as I, defineCustomElement as d };

//# sourceMappingURL=igl-book-property-container2.js.map