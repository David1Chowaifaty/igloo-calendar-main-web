import { r as registerInstance, c as createEvent, h, F as Fragment, H as Host } from './index-CeHdrJeH.js';
import { A as ApiClient } from './ApiClient-4jHvz1N4.js';
import { B as BookingService } from './booking.service-B1Dnf3vs.js';
import { R as RoomService } from './room.service-ClH5dZs7.js';
import { L as LocaleController, S as SCREEN_TABLES } from './locale.controller-DQrDdP3Q.js';
import { L as LanguageSync } from './language-sync-D-10X4Qh.js';
import { t } from './t-BVYK64UG.js';
import { t as todayISO, a as addDaysISO } from './calendar-dates-D3hVfsrC.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './IBooking-C6czW-Mz.js';
import './types-Clk7NCXk.js';
import './utils-VLa8HWRW.js';
import './moment-Mki5YqAR.js';
import './calendar-data-Cdv5kmxH.js';
import './locale-scope-CapRuPkM.js';
import './booking.dto-D-ACWjZx.js';
import './type-o1ai24d7.js';
import './ir-date-NNCOayR_.js';
import './language-observer-CHgzsZkY.js';
import './booking-DX6-b7gN.js';
import './functions-8ZwUpUDk.js';
import './commonSchemas-BxK90Oim.js';
import './types-C7G2emJd.js';

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
        return (h(Host, { key: 'd369938f2db2ae34b233890f24e81f5f555cbbde' }, this.withIrToastAndInterceptor && (h(Fragment, { key: 'f2969a72efa0b1e4f60466a4f4e4f5ddae2b3ece' }, h("ir-toast", { key: '86facc7b09c22cfbcdfc81778a2af6322a46f9cb' }), h("ir-interceptor", { key: '93515addd89369f49134aeb30f3325c4afd9804c' }))), h("div", { key: '0d8930670e438b51decc71f7f5167804efaa029a', class: "book-container", onClick: this.handleTriggerClicked.bind(this) }, h("slot", { key: 'cc4c072ce13bfd52af486cbe416f01002237bc7f', name: "trigger" })), this.bookingItem && (h("igl-book-property", { key: 'a68b73ae9968a1a5d0df74adcc4c46a06902ff96', allowedBookingSources: this.calendarData.allowed_booking_sources, adultChildConstraints: this.calendarData.adult_child_constraints, showPaymentDetails: this.showPaymentDetails, countries: this.countries, currency: this.calendarData.currency, language: this.language, propertyid: this.propertyid, bookingData: this.bookingItem, onResetBookingEvt: (e) => {
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
