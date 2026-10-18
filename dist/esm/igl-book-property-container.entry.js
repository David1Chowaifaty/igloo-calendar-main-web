import { r as registerInstance, c as createEvent, h, F as Fragment, H as Host } from './index-DKZeCK8T.js';
import { A as ApiClient } from './ApiClient-4jHvz1N4.js';
import { B as BookingService } from './booking.service-C1nicz1C.js';
import { R as RoomService } from './room.service-BeM4DlDl.js';
import { L as LocaleController, S as SCREEN_TABLES } from './locale.controller-CGuPWCIw.js';
import { L as LanguageSync } from './language-sync-BeUgIh7r.js';
import { t } from './t-Bvz1wS_D.js';
import { t as todayISO, a as addDaysISO } from './calendar-dates-D3hVfsrC.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './IBooking-BFuEU3Ic.js';
import './types-BLb1NO3I.js';
import './utils-CAiEa-WB.js';
import './moment-Mki5YqAR.js';
import './calendar-data-D4DbXAhg.js';
import './locale-scope-Jre4lb6k.js';
import './booking.dto-DQx6bzbY.js';
import './type-D_dKkSLY.js';
import './ir-date-CY_qGQ63.js';
import './language-observer-CHgzsZkY.js';
import './booking-5B3Vroer.js';
import './functions-BvJiJbl6.js';
import './commonSchemas-BNnUj2OT.js';
import './types-f1klcCJA.js';

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
        return (h(Host, { key: '9eb81eab8846b51264489c26ab179887fcaf2ee2' }, this.withIrToastAndInterceptor && (h(Fragment, { key: '585caff2b1148c12f97483e8613b1a60cb4df9a5' }, h("ir-toast", { key: '69f3fba67d376e1308d1700516549f632b15812c' }), h("ir-interceptor", { key: 'fa807cfd9046b93a4ade6ddefa9036e55cf1af64' }))), h("div", { key: '79b0cde448d68d37001cd28bfc82bff6abea0e6f', class: "book-container", onClick: this.handleTriggerClicked.bind(this) }, h("slot", { key: '3948d2081146943ba15e7a35108cee224207d47c', name: "trigger" })), this.bookingItem && (h("igl-book-property", { key: '14e615757f61d356f5b5c9e937a19137630cf22e', allowedBookingSources: this.calendarData.allowed_booking_sources, adultChildConstraints: this.calendarData.adult_child_constraints, showPaymentDetails: this.showPaymentDetails, countries: this.countries, currency: this.calendarData.currency, language: this.language, propertyid: this.propertyid, bookingData: this.bookingItem, onResetBookingEvt: (e) => {
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
