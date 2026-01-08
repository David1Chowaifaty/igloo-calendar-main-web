import { proxyCustomElement, HTMLElement, createEvent, h, Host, Fragment } from '@stencil/core/internal/client';
import { T as Token } from './Token.js';
import { B as BookingService } from './booking.store.js';
import { R as RoomService } from './room.service.js';
import { l as locales } from './locales.store.js';
import { d as defineCustomElement$w } from './igl-application-info2.js';
import { d as defineCustomElement$v } from './igl-block-dates-view2.js';
import { d as defineCustomElement$u } from './igl-book-property2.js';
import { d as defineCustomElement$t } from './igl-book-property-footer2.js';
import { d as defineCustomElement$s } from './igl-book-property-header2.js';
import { d as defineCustomElement$r } from './igl-booking-form2.js';
import { d as defineCustomElement$q } from './igl-booking-overview-page2.js';
import { d as defineCustomElement$p } from './igl-date-range2.js';
import { d as defineCustomElement$o } from './igl-property-booked-by2.js';
import { d as defineCustomElement$n } from './igl-rate-plan2.js';
import { d as defineCustomElement$m } from './igl-room-type2.js';
import { d as defineCustomElement$l } from './ir-air-date-picker2.js';
import { d as defineCustomElement$k } from './ir-button2.js';
import { d as defineCustomElement$j } from './ir-country-picker2.js';
import { d as defineCustomElement$i } from './ir-custom-button2.js';
import { d as defineCustomElement$h } from './ir-date-select2.js';
import { d as defineCustomElement$g } from './ir-date-view2.js';
import { d as defineCustomElement$f } from './ir-icons2.js';
import { d as defineCustomElement$e } from './ir-input2.js';
import { d as defineCustomElement$d } from './ir-input-text2.js';
import { d as defineCustomElement$c } from './ir-interceptor2.js';
import { d as defineCustomElement$b } from './ir-mobile-input2.js';
import { d as defineCustomElement$a } from './ir-otp2.js';
import { d as defineCustomElement$9 } from './ir-otp-modal2.js';
import { d as defineCustomElement$8 } from './ir-picker2.js';
import { d as defineCustomElement$7 } from './ir-picker-item2.js';
import { d as defineCustomElement$6 } from './ir-spinner2.js';
import { d as defineCustomElement$5 } from './ir-toast2.js';
import { d as defineCustomElement$4 } from './ir-toast-alert2.js';
import { d as defineCustomElement$3 } from './ir-toast-provider2.js';
import { d as defineCustomElement$2 } from './ir-validator2.js';

const iglBookPropertyContainerCss = ".sc-igl-book-property-container-h{display:block;margin:0;padding:0;letter-spacing:0px !important;font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;font-size:1rem !important;font-weight:400 !important;line-height:1.45 !important;color:#6b6f82 !important;text-align:left !important}.book-container.sc-igl-book-property-container{width:min-content;margin:0;padding:0}h3.sc-igl-book-property-container{font-size:1rem}";
const IglBookPropertyContainerStyle0 = iglBookPropertyContainerCss;

const IglBookPropertyContainer$1 = /*@__PURE__*/ proxyCustomElement(class IglBookPropertyContainer extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.resetBookingData = createEvent(this, "resetBookingData", 7);
    }
    language = '';
    ticket = '';
    p;
    propertyid;
    from_date;
    to_date;
    withIrToastAndInterceptor = true;
    bookingItem;
    showPaymentDetails;
    countries;
    calendarData = {};
    resetBookingData;
    bookingService = new BookingService();
    roomService = new RoomService();
    token = new Token();
    setRoomsData(roomServiceResp) {
        let roomsData = new Array();
        if (roomServiceResp.My_Result?.roomtypes?.length) {
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
            this.countries = countriesList;
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
        return (h(Host, { key: 'd2ce68588eca30f7b3b35750ddf88ef8366034c7' }, this.withIrToastAndInterceptor && (h(Fragment, { key: '31459ab6c7f156c65b5a00d93aec9403e71bcef1' }, h("ir-toast", { key: '563891766929974bea4ac4b079020b83a959ed8e' }), h("ir-interceptor", { key: '9db47f338555fa05ca15871db3a9367ab3df74c7' }))), h("div", { key: '282b7f1a09146faedf5adb561e3cd58f39a2d949', class: "book-container", onClick: this.handleTriggerClicked.bind(this) }, h("slot", { key: '4bcb6f22c9bfa6ecece1e426c26fc4f5ecafce22', name: "trigger" })), this.bookingItem && (h("igl-book-property", { key: 'fd3690ed7887ec5297925115151d2488d3581e40', allowedBookingSources: this.calendarData.allowed_booking_sources, adultChildConstraints: this.calendarData.adult_child_constraints, showPaymentDetails: this.showPaymentDetails, countries: this.countries, currency: this.calendarData.currency, language: this.language, propertyid: this.propertyid, bookingData: this.bookingItem, onResetBookingEvt: (e) => {
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
        "countries": [32],
        "calendarData": [32]
    }, undefined, {
        "ticket": ["ticketChanged"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["igl-book-property-container", "igl-application-info", "igl-block-dates-view", "igl-book-property", "igl-book-property-footer", "igl-book-property-header", "igl-booking-form", "igl-booking-overview-page", "igl-date-range", "igl-property-booked-by", "igl-rate-plan", "igl-room-type", "ir-air-date-picker", "ir-button", "ir-country-picker", "ir-custom-button", "ir-date-select", "ir-date-view", "ir-icons", "ir-input", "ir-input-text", "ir-interceptor", "ir-mobile-input", "ir-otp", "ir-otp-modal", "ir-picker", "ir-picker-item", "ir-spinner", "ir-toast", "ir-toast-alert", "ir-toast-provider", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-book-property-container":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglBookPropertyContainer$1);
            }
            break;
        case "igl-application-info":
            if (!customElements.get(tagName)) {
                defineCustomElement$w();
            }
            break;
        case "igl-block-dates-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$v();
            }
            break;
        case "igl-book-property":
            if (!customElements.get(tagName)) {
                defineCustomElement$u();
            }
            break;
        case "igl-book-property-footer":
            if (!customElements.get(tagName)) {
                defineCustomElement$t();
            }
            break;
        case "igl-book-property-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$s();
            }
            break;
        case "igl-booking-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$r();
            }
            break;
        case "igl-booking-overview-page":
            if (!customElements.get(tagName)) {
                defineCustomElement$q();
            }
            break;
        case "igl-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$p();
            }
            break;
        case "igl-property-booked-by":
            if (!customElements.get(tagName)) {
                defineCustomElement$o();
            }
            break;
        case "igl-rate-plan":
            if (!customElements.get(tagName)) {
                defineCustomElement$n();
            }
            break;
        case "igl-room-type":
            if (!customElements.get(tagName)) {
                defineCustomElement$m();
            }
            break;
        case "ir-air-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "ir-country-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-date-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-mobile-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-otp-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-picker-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-toast-alert":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-toast-provider":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IglBookPropertyContainer = IglBookPropertyContainer$1;
const defineCustomElement = defineCustomElement$1;

export { IglBookPropertyContainer, defineCustomElement };

//# sourceMappingURL=igl-book-property-container.js.map