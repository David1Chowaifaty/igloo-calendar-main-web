'use strict';

var index = require('./index-Dt9a74kn.js');
var Token = require('./Token-BY5U68ai.js');
var booking_service = require('./booking.service-BWPg8s3t.js');
var room_service = require('./room.service-DC3utEzM.js');
var locales_store = require('./locales.store-CJveOVzn.js');
require('./axios-DG0YPAll.js');
require('./_commonjsHelpers-B83fTs8d.js');
require('./booking-BMgvzunA.js');
require('./moment-CdViwxPQ.js');
require('./index-CLqkDPTC.js');
require('./index-PIkoJJtF.js');
require('./calendar-data-CC4kt7DA.js');

const iglBookPropertyContainerCss = ".sc-igl-book-property-container-h{display:block;margin:0;padding:0;letter-spacing:0px !important;font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;font-size:1rem !important;font-weight:400 !important;line-height:1.45 !important;color:#6b6f82 !important;text-align:left !important}.book-container.sc-igl-book-property-container{width:min-content;margin:0;padding:0}h3.sc-igl-book-property-container{font-size:1rem}";

const IglBookPropertyContainer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.resetBookingData = index.createEvent(this, "resetBookingData");
        this.language = '';
        this.ticket = '';
        this.withIrToastAndInterceptor = true;
        this.calendarData = {};
        this.bookingService = new booking_service.BookingService();
        this.roomService = new room_service.RoomService();
        this.token = new Token.Token();
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
        return (index.h(index.Host, { key: 'd91de051e528cf974acfe2891d12756230c1b7f2' }, this.withIrToastAndInterceptor && (index.h(index.Fragment, { key: 'e3a9656954c00f326ed623f4d2dbc4e969632f0c' }, index.h("ir-toast", { key: '88a25fe6bf2498d5aa0aa3be2251a6b53860c46e' }), index.h("ir-interceptor", { key: 'cb569a47769a7060ef5cd4c8def67a29e094005d' }))), index.h("div", { key: '17cea78737c93bb7bc5c2da7019ced0c89ab8938', class: "book-container", onClick: this.handleTriggerClicked.bind(this) }, index.h("slot", { key: '98c9568bd9fe6d0d26e8c678626ab187becc8d28', name: "trigger" })), this.bookingItem && (index.h("igl-book-property", { key: '555302a3a2156e4f190c093bf80d9ce97e0c5a94', allowedBookingSources: this.calendarData.allowed_booking_sources, adultChildConstraints: this.calendarData.adult_child_constraints, showPaymentDetails: this.showPaymentDetails, countries: this.countries, currency: this.calendarData.currency, language: this.language, propertyid: this.propertyid, bookingData: this.bookingItem, onResetBookingEvt: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.resetBookingData.emit(null);
            }, onCloseBookingWindow: () => this.handleCloseBookingWindow() }))));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IglBookPropertyContainer.style = iglBookPropertyContainerCss;

exports.igl_book_property_container = IglBookPropertyContainer;
//# sourceMappingURL=igl-book-property-container.entry.cjs.js.map

//# sourceMappingURL=igl-book-property-container.cjs.entry.js.map