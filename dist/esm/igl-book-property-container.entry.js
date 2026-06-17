import { r as registerInstance, c as createEvent, h, F as Fragment, H as Host } from './index-0Di74WDd.js';
import { T as Token } from './Token-D8j5OUbG.js';
import { d as BookingService } from './booking.store-CZ9X4eZQ.js';
import { R as RoomService } from './room.service-FmU5HzPQ.js';
import { l as locales } from './locales.store-CPGnSUGJ.js';
import './axios-CleaxLzD.js';
import './index-DeW5X45W.js';
import './booking-SXprRnHy.js';
import './moment-Mki5YqAR.js';
import './calendar-data-wrvThdm8.js';
import './index-D9zfa7Bx.js';
import './booking.dto-DWti87Wx.js';
import './type-CBqEYOkK.js';
import './calendar-data-DIuSgTRk.js';

const iglBookPropertyContainerCss = () => `.sc-igl-book-property-container-h{display:block;margin:0;padding:0;letter-spacing:0px !important;font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;font-size:1rem !important;font-weight:400 !important;line-height:1.45 !important;color:#6b6f82 !important;text-align:left !important}.book-container.sc-igl-book-property-container{width:min-content;margin:0;padding:0}h3.sc-igl-book-property-container{font-size:1rem}`;

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
        return (h(Host, { key: '06ccb40629e985ddd39ece9278da7b571a27cbbc' }, this.withIrToastAndInterceptor && (h(Fragment, { key: '60d02250310ff712ccd8a6154fdbe4dde25b80e9' }, h("ir-toast", { key: '459a3164e52f0199bca616d6f7bcf9a6571d31da' }), h("ir-interceptor", { key: 'db39721bd84fd0b3bba9acb02a9430cc767b0279' }))), h("div", { key: '16ceb06b405981331efdd12f8ee1771b8183c1f3', class: "book-container", onClick: this.handleTriggerClicked.bind(this) }, h("slot", { key: '5ce84b476f43438736f75a2a2eeb7996d15af92d', name: "trigger" })), this.bookingItem && (h("igl-book-property", { key: 'b02a547fcd3bc4918a667a68613360b9ae6fb55a', allowedBookingSources: this.calendarData.allowed_booking_sources, adultChildConstraints: this.calendarData.adult_child_constraints, showPaymentDetails: this.showPaymentDetails, countries: this.countries, currency: this.calendarData.currency, language: this.language, propertyid: this.propertyid, bookingData: this.bookingItem, onResetBookingEvt: (e) => {
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

export { IglBookPropertyContainer as igl_book_property_container };
