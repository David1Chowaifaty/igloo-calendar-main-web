'use strict';

var index = require('./index-P5Mginch.js');
var ApiClient = require('./ApiClient-u7fuhiXA.js');
var booking_store = require('./booking.store-SmjvQvnY.js');
var room_service = require('./room.service-Dv4u9Qiq.js');
var locales_store = require('./locales.store-v9LoZcAK.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./IBooking-BtFRLVyo.js');
require('./index-CLqkDPTC.js');
require('./utils-5rzlNNGQ.js');
require('./moment-CdViwxPQ.js');
require('./calendar-data-BjlxOXi1.js');
require('./index-BLJXadKe.js');
require('./booking.dto-kenLHU-o.js');
require('./type-Dy9pVS4V.js');
require('./ir-date-CUot5M4p.js');
require('./booking-DAw6VPzA.js');
require('./functions-CVUndUSp.js');
require('./commonSchemas-hgXVqmtC.js');

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
            if (!this.propertyid && !this.p) {
                throw new Error('Property ID or username is required');
            }
            const [roomResponse, languageTexts, countriesList] = await Promise.all([
                this.roomService.getExposedProperty({ id: this.propertyid, language: this.language, aname: this.p }),
                this.roomService.fetchLanguage(this.language),
                this.bookingService.getCountries(this.language),
            ]);
            if (!locales_store.locales.entries) {
                locales_store.locales.entries = languageTexts.entries;
                locales_store.locales.direction = languageTexts.direction;
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
            this.ApiClient.setApiClient(this.ticket);
            this.initializeApp();
        }
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
            TITLE: locales_store.locales.entries.Lcz_NewBooking,
        };
    }
    render() {
        return (index.h(index.Host, { key: '2268705a214922982b607003dcf1a2c6e54a2968' }, this.withIrToastAndInterceptor && (index.h(index.Fragment, { key: 'f343709e7774c7dea2e4392eaeae9d8ffa2121b9' }, index.h("ir-toast", { key: 'a0d4a4dc5141e61feafdfbb77e94971e5a6ac69f' }), index.h("ir-interceptor", { key: '3c37c5b0cad3395a20014a09e38c310ae00171ea' }))), index.h("div", { key: 'af3eddeba211262d3bd5cfe5b135d71afc7bb3de', class: "book-container", onClick: this.handleTriggerClicked.bind(this) }, index.h("slot", { key: '40ba3d861375a6219fa5fcd91dcd73d1ceb21503', name: "trigger" })), this.bookingItem && (index.h("igl-book-property", { key: '7cf559ff812648926a796670aa4893c2e51d260f', allowedBookingSources: this.calendarData.allowed_booking_sources, adultChildConstraints: this.calendarData.adult_child_constraints, showPaymentDetails: this.showPaymentDetails, countries: this.countries, currency: this.calendarData.currency, language: this.language, propertyid: this.propertyid, bookingData: this.bookingItem, onResetBookingEvt: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.resetBookingData.emit(null);
            }, onCloseBookingWindow: () => this.handleCloseBookingWindow() }))));
    }
    static get watchers() { return {
        "ticket": [{
                "ticketChanged": 0
            }]
    }; }
};
IglBookPropertyContainer.style = iglBookPropertyContainerCss();

exports.igl_book_property_container = IglBookPropertyContainer;
