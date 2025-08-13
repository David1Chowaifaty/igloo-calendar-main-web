import { r as registerInstance, c as createEvent, h, F as Fragment, H as Host } from './index-60982d00.js';
import { T as Token } from './Token-6c389e24.js';
import { B as BookingService } from './booking.service-13b43e3b.js';
import { R as RoomService } from './room.service-39d12a8c.js';
import { l as locales } from './locales.store-629477c2.js';
import './axios-aa1335b8.js';
import './utils-81ee5d46.js';
import './moment-ab846cee.js';
import './index-6ecc32cd.js';
import './calendar-data-f4e207f9.js';
import './index-c4cf83be.js';

const iglBookPropertyContainerCss = ".sc-igl-book-property-container-h{display:block;margin:0;padding:0;letter-spacing:0px !important;font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;font-size:1rem !important;font-weight:400 !important;line-height:1.45 !important;color:#6b6f82 !important;text-align:left !important}.book-container.sc-igl-book-property-container{width:min-content;margin:0;padding:0}h3.sc-igl-book-property-container{font-size:1rem}";
const IglBookPropertyContainerStyle0 = iglBookPropertyContainerCss;

const IglBookPropertyContainer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.resetBookingData = createEvent(this, "resetBookingData", 7);
        this.language = '';
        this.ticket = '';
        this.withIrToastAndInterceptor = true;
        this.calendarData = {};
        this.bookingService = new BookingService();
        this.roomService = new RoomService();
        this.token = new Token();
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
        return (h(Host, { key: 'e40c05ff02ee7c5c3c2097fd8c69aa99d503822e' }, this.withIrToastAndInterceptor && (h(Fragment, { key: 'a91cca4d02b7f2e44de2a9ae7874405088b6ecc7' }, h("ir-toast", { key: 'd1242ccb05b7d5e1e89888e4877f6e1472b6726f' }), h("ir-interceptor", { key: '4bf1df682b9e1a511cd199cc8932ff431daf9b1d' }))), h("div", { key: '2469f6115e9acb0f3700b651e5b1add6f5cfc62e', class: "book-container", onClick: this.handleTriggerClicked.bind(this) }, h("slot", { key: '18398adfe200931690516e85472f4f99f7d7570f', name: "trigger" })), this.bookingItem && (h("igl-book-property", { key: '7b0efd0d9891318c4e2e503e0a3232214a4dc445', allowedBookingSources: this.calendarData.allowed_booking_sources, adultChildConstraints: this.calendarData.adult_child_constraints, showPaymentDetails: this.showPaymentDetails, countries: this.countries, currency: this.calendarData.currency, language: this.language, propertyid: this.propertyid, bookingData: this.bookingItem, onResetBookingEvt: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.resetBookingData.emit(null);
            }, onCloseBookingWindow: () => this.handleCloseBookingWindow() }))));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IglBookPropertyContainer.style = IglBookPropertyContainerStyle0;

export { IglBookPropertyContainer as igl_book_property_container };

//# sourceMappingURL=igl-book-property-container.entry.js.map