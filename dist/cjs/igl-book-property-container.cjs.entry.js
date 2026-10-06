'use strict';

var index = require('./index-CQkpA5n3.js');
var ApiClient = require('./ApiClient-u7fuhiXA.js');
var booking_store = require('./booking.store-BfEd-Oub.js');
var room_service = require('./room.service-ox5qNbPK.js');
var locale_controller = require('./locale.controller-mOVjhTJn.js');
var languageSync = require('./language-sync-CpTU62Ae.js');
var t = require('./t-wyGILxEL.js');
var utils = require('./utils-B_P0SLOr.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./IBooking-hDE_y33g.js');
require('./types-BVJQZ50e.js');
require('./booking-BFcW8dlP.js');
require('./moment-CdViwxPQ.js');
require('./locale-scope-C7rmpwuA.js');
require('./calendar-data-Br2L_0sg.js');
require('./functions-C5raR8yq.js');
require('./ir-date-SZW0yc7z.js');
require('./language-observer-DKp37LIu.js');
require('./commonSchemas-D4iFLV5-.js');
require('./types-sp5nWPAa.js');
require('./booking.dto-CUSvGTvD.js');
require('./type-Bj2x9EWc.js');

const iglBookPropertyContainerCss = () => `.sc-igl-book-property-container-h{display:block;margin:0;padding:0;letter-spacing:0px !important;font-family:'Open Sans',     -apple-system,     BlinkMacSystemFont,     'Segoe UI',     Roboto,     'Helvetica Neue',     Arial,     sans-serif !important;font-size:1rem !important;font-weight:400 !important;line-height:1.45 !important;color:#6b6f82 !important;text-align:start !important}.book-container.sc-igl-book-property-container{width:min-content;margin:0;padding:0}h3.sc-igl-book-property-container{font-size:1rem}`;

const IglBookPropertyContainer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.resetBookingData = index.createEvent(this, "resetBookingData");
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
    bookingService = new booking_store.BookingService();
    roomService = new room_service.RoomService();
    ApiClient = new ApiClient.ApiClient();
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
            const localeReady = locale_controller.LocaleController.load({ language: this.language, tables: locale_controller.SCREEN_TABLES.bookProperty });
            if (!this.propertyid && !this.p) {
                throw new Error('Property ID or username is required');
            }
            const [roomResponse, , countriesList] = await Promise.all([
                this.roomService.getExposedProperty({ id: this.propertyid, language: locale_controller.LocaleController.language, aname: this.p }),
                localeReady,
                this.bookingService.getCountries(locale_controller.LocaleController.language),
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
    languageSync = new languageSync.LanguageSync(locale_controller.SCREEN_TABLES.bookProperty, () => this.initializeApp());
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
        const today = utils.todayISO();
        this.bookingItem = {
            FROM_DATE: this.from_date,
            defaultDateRange: {
                fromDate: today,
                toDate: utils.addDaysISO(today, 1),
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
            TITLE: t.t('Lcz_NewBooking', { fallback: 'New Booking' }),
        };
    }
    render() {
        return (index.h(index.Host, { key: 'd7d5e6e9ce417972335d83128bb07442cbc6c855' }, this.withIrToastAndInterceptor && (index.h(index.Fragment, { key: 'cc679f9c20d3b7e7a6699cb78ddd79ed5912360d' }, index.h("ir-toast", { key: '707978c04c66af426ce6d52b206cc32b043d8cc4' }), index.h("ir-interceptor", { key: 'd67148853a936772e7be25220ceb0796f7de0522' }))), index.h("div", { key: '58e8c2d3106b336b341130ae825b3c96545fc154', class: "book-container", onClick: this.handleTriggerClicked.bind(this) }, index.h("slot", { key: '23f16b8e8936c943fc4ffa0173e8bd92e8292198', name: "trigger" })), this.bookingItem && (index.h("igl-book-property", { key: 'f879f834cf33308b19979864854e8270de0d3241', allowedBookingSources: this.calendarData.allowed_booking_sources, adultChildConstraints: this.calendarData.adult_child_constraints, showPaymentDetails: this.showPaymentDetails, countries: this.countries, currency: this.calendarData.currency, language: this.language, propertyid: this.propertyid, bookingData: this.bookingItem, onResetBookingEvt: (e) => {
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

exports.igl_book_property_container = IglBookPropertyContainer;
