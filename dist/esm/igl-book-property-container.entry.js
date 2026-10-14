import { r as registerInstance, c as createEvent, h, F as Fragment, H as Host } from './index-DKZeCK8T.js';
import { A as ApiClient } from './ApiClient-4jHvz1N4.js';
import { B as BookingService } from './booking.service-Da_iCXks.js';
import { R as RoomService } from './room.service-DLHTy3R1.js';
import { L as LocaleController, S as SCREEN_TABLES } from './locale.controller-O4tARDfV.js';
import { L as LanguageSync } from './language-sync-CIoUeyiN.js';
import { t } from './t-DTGA0v_q.js';
import { t as todayISO, a as addDaysISO } from './calendar-dates-D3hVfsrC.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './IBooking-BV3s3Tu5.js';
import './types-CrHq6jOb.js';
import './utils-C5rtMj-W.js';
import './moment-Mki5YqAR.js';
import './calendar-data-D8EnecFU.js';
import './locales.store-DsOXxI8k.js';
import './booking.dto-DVIFh8qe.js';
import './type-W0yWfEBm.js';
import './ir-date-CdNwD9PM.js';
import './language-observer-CHgzsZkY.js';
import './booking-CwvNpV9l.js';
import './functions-je-FdPG-.js';
import './commonSchemas-My88Vijq.js';
import './types-DX9A63ik.js';

const iglBookPropertyContainerCss = () => `.sc-igl-book-property-container-h{display:block;margin:0;padding:0;letter-spacing:0px !important;font-family:'Open Sans',     -apple-system,     BlinkMacSystemFont,     'Segoe UI',     Roboto,     'Helvetica Neue',     Arial,     sans-serif !important;font-size:1rem !important;font-weight:400 !important;line-height:1.45 !important;color:#6b6f82 !important;text-align:start !important}.book-container.sc-igl-book-property-container{width:min-content;margin:0;padding:0}h3.sc-igl-book-property-container{font-size:1rem}`;

const IglBookPropertyContainer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.resetBookingData = createEvent(this, "resetBookingData");
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
    ApiClient = new ApiClient();
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
            // Started first: it seeds `LocaleController.language` from the host prop synchronously,
            // so the requests below are built with the right language on first mount.
            const localeReady = LocaleController.load({ language: this.language, tables: SCREEN_TABLES.bookProperty });
            if (!this.propertyid && !this.p) {
                throw new Error('Property ID or username is required');
            }
            const [roomResponse, , countriesList] = await Promise.all([
                this.roomService.getExposedProperty({ id: this.propertyid, language: LocaleController.language, aname: this.p }),
                localeReady,
                this.bookingService.getCountries(LocaleController.language),
            ]);
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
    /** Re-runs init when the language changes so server-localized data follows. */
    languageSync = new LanguageSync(SCREEN_TABLES.bookProperty, () => this.initializeApp());
    componentWillLoad() {
        if (this.ticket !== '') {
            this.ApiClient.setApiClient(this.ticket);
            this.initializeApp();
        }
    }
    componentDidLoad() {
        this.languageSync.connect();
    }
    disconnectedCallback() {
        this.languageSync.disconnect();
    }
    languageChanged(next, previous) {
        this.languageSync.propChanged(next, previous);
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.ApiClient.setApiClient(this.ticket);
        this.initializeApp();
    }
    handleCloseBookingWindow() {
        this.bookingItem = null;
    }
    handleTriggerClicked() {
        const today = todayISO();
        this.bookingItem = {
            FROM_DATE: this.from_date,
            defaultDateRange: {
                fromDate: today,
                toDate: addDaysISO(today, 1),
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
            TITLE: t('Lcz_NewBooking', { fallback: 'New Booking' }),
        };
    }
    render() {
        return (h(Host, { key: '21e1ff44f8db834ce73af4b0cff3a5b69e806f13' }, this.withIrToastAndInterceptor && (h(Fragment, { key: '37ce1003ca7892f74dc8ce62577b13838a3d2b25' }, h("ir-toast", { key: '51ad801dfef80b45e3d8374f1f387ae5e10587e4' }), h("ir-interceptor", { key: 'a66cd4616587367266ebe2eabeb084f391f7c257' }))), h("div", { key: '8689ac38260845c03718c2dbbbfb61b13c7e7c61', class: "book-container", onClick: this.handleTriggerClicked.bind(this) }, h("slot", { key: '7c7b97ec3f0a8d6ee21854cd8a9d9d3da4820c00', name: "trigger" })), this.bookingItem && (h("igl-book-property", { key: '977eaca828418c8839a4b48cd2c2766f1239779d', allowedBookingSources: this.calendarData.allowed_booking_sources, adultChildConstraints: this.calendarData.adult_child_constraints, showPaymentDetails: this.showPaymentDetails, countries: this.countries, currency: this.calendarData.currency, language: this.language, propertyid: this.propertyid, bookingData: this.bookingItem, onResetBookingEvt: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.resetBookingData.emit(null);
            }, onCloseBookingWindow: () => this.handleCloseBookingWindow() }))));
    }
    static get watchers() { return {
        "language": [{
                "languageChanged": 0
            }],
        "ticket": [{
                "ticketChanged": 0
            }]
    }; }
};
IglBookPropertyContainer.style = iglBookPropertyContainerCss();

export { IglBookPropertyContainer as igl_book_property_container };
