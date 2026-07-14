'use strict';

var index = require('./index-Du1V06mp.js');
var Token = require('./Token-mN7PQKGF.js');
var booking_store = require('./booking.store-CZr0GkPY.js');
var room_service = require('./room.service-CwQt7yuI.js');
var locales_store = require('./locales.store-CYcHBWUG.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./index-CLqkDPTC.js');
require('./utils-EjuW-lx0.js');
require('./moment-CdViwxPQ.js');
require('./calendar-data-CeBvVadE.js');
require('./index-BTAleJGz.js');
require('./type-Dy9pVS4V.js');
require('./booking-B_k0VYL5.js');

const iglBookPropertyContainerCss = () => `.sc-igl-book-property-container-h{display:block;margin:0;padding:0;letter-spacing:0px !important;font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;font-size:1rem !important;font-weight:400 !important;line-height:1.45 !important;color:#6b6f82 !important;text-align:left !important}.book-container.sc-igl-book-property-container{width:min-content;margin:0;padding:0}h3.sc-igl-book-property-container{font-size:1rem}`;

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
    token = new Token.Token();
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
            TITLE: locales_store.locales.entries.Lcz_NewBooking,
        };
    }
    render() {
        return (index.h(index.Host, { key: '75fe7ac536cd02e6363148a3426515f584e18ea8' }, this.withIrToastAndInterceptor && (index.h(index.Fragment, { key: 'e87de6db12c8880f2d8a310a49fa0406dd3b4d8d' }, index.h("ir-toast", { key: 'c4c3d44968a178e5bf5d4f6145361148fcfb9ee0' }), index.h("ir-interceptor", { key: 'fbaabc72bb5ff843c4877571b31cf3236961d724' }))), index.h("div", { key: '1d6002ce7cca65ac92142cd6eab1a4db13ecc97c', class: "book-container", onClick: this.handleTriggerClicked.bind(this) }, index.h("slot", { key: '158a3b4e9e55a1560fa7277bdc72a20cd732ff4e', name: "trigger" })), this.bookingItem && (index.h("igl-book-property", { key: '6e44882dade346dd06cf3089eea7d49bc926e111', allowedBookingSources: this.calendarData.allowed_booking_sources, adultChildConstraints: this.calendarData.adult_child_constraints, showPaymentDetails: this.showPaymentDetails, countries: this.countries, currency: this.calendarData.currency, language: this.language, propertyid: this.propertyid, bookingData: this.bookingItem, onResetBookingEvt: (e) => {
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
