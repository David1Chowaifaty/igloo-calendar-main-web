import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { a as axios } from './axios.js';
import { B as BookingService } from './booking.service.js';
import { R as RoomService } from './room.service.js';
import { l as locales } from './locales.store.js';
import { P as PaymentService } from './payment.service.js';
import { T as Token } from './Token.js';
import { c as calendar_data } from './calendar-data.js';
import { h as hooks } from './moment.js';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { d as defineCustomElement$Z } from './igl-application-info2.js';
import { d as defineCustomElement$Y } from './igl-block-dates-view2.js';
import { d as defineCustomElement$X } from './igl-book-property2.js';
import { d as defineCustomElement$W } from './igl-book-property-footer2.js';
import { d as defineCustomElement$V } from './igl-book-property-header2.js';
import { d as defineCustomElement$U } from './igl-booking-form2.js';
import { d as defineCustomElement$T } from './igl-booking-overview-page2.js';
import { d as defineCustomElement$S } from './igl-date-range2.js';
import { d as defineCustomElement$R } from './igl-property-booked-by2.js';
import { d as defineCustomElement$Q } from './igl-rate-plan2.js';
import { d as defineCustomElement$P } from './igl-room-type2.js';
import { d as defineCustomElement$O } from './ir-autocomplete2.js';
import { d as defineCustomElement$N } from './ir-booking-extra-note2.js';
import { d as defineCustomElement$M } from './ir-booking-guarantee2.js';
import { d as defineCustomElement$L } from './ir-booking-header2.js';
import { d as defineCustomElement$K } from './ir-button2.js';
import { d as defineCustomElement$J } from './ir-combobox2.js';
import { d as defineCustomElement$I } from './ir-country-picker2.js';
import { d as defineCustomElement$H } from './ir-date-picker2.js';
import { d as defineCustomElement$G } from './ir-date-range2.js';
import { d as defineCustomElement$F } from './ir-date-view2.js';
import { d as defineCustomElement$E } from './ir-dialog2.js';
import { d as defineCustomElement$D } from './ir-dropdown2.js';
import { d as defineCustomElement$C } from './ir-dropdown-item2.js';
import { d as defineCustomElement$B } from './ir-events-log2.js';
import { d as defineCustomElement$A } from './ir-extra-service2.js';
import { d as defineCustomElement$z } from './ir-extra-service-config2.js';
import { d as defineCustomElement$y } from './ir-extra-services2.js';
import { d as defineCustomElement$x } from './ir-guest-info2.js';
import { d as defineCustomElement$w } from './ir-icon2.js';
import { d as defineCustomElement$v } from './ir-icons2.js';
import { d as defineCustomElement$u } from './ir-input-text2.js';
import { d as defineCustomElement$t } from './ir-interceptor2.js';
import { d as defineCustomElement$s } from './ir-label2.js';
import { d as defineCustomElement$r } from './ir-modal2.js';
import { d as defineCustomElement$q } from './ir-otp2.js';
import { d as defineCustomElement$p } from './ir-otp-modal2.js';
import { d as defineCustomElement$o } from './ir-payment-action2.js';
import { d as defineCustomElement$n } from './ir-payment-actions2.js';
import { d as defineCustomElement$m } from './ir-payment-details2.js';
import { d as defineCustomElement$l } from './ir-payment-folio2.js';
import { d as defineCustomElement$k } from './ir-payment-item2.js';
import { d as defineCustomElement$j } from './ir-payment-summary2.js';
import { d as defineCustomElement$i } from './ir-payments-folio2.js';
import { d as defineCustomElement$h } from './ir-phone-input2.js';
import { d as defineCustomElement$g } from './ir-pickup2.js';
import { d as defineCustomElement$f } from './ir-pickup-view2.js';
import { d as defineCustomElement$e } from './ir-pms-logs2.js';
import { d as defineCustomElement$d } from './ir-popover2.js';
import { d as defineCustomElement$c } from './ir-price-input2.js';
import { d as defineCustomElement$b } from './ir-reservation-information2.js';
import { d as defineCustomElement$a } from './ir-room2.js';
import { d as defineCustomElement$9 } from './ir-room-guests2.js';
import { d as defineCustomElement$8 } from './ir-select2.js';
import { d as defineCustomElement$7 } from './ir-sidebar2.js';
import { d as defineCustomElement$6 } from './ir-spinner2.js';
import { d as defineCustomElement$5 } from './ir-textarea2.js';
import { d as defineCustomElement$4 } from './ir-title2.js';
import { d as defineCustomElement$3 } from './ir-toast2.js';
import { d as defineCustomElement$2 } from './ir-tooltip2.js';
import { d as defineCustomElement$1 } from './ota-label2.js';

const irBookingDetailsCss = ".sc-ir-booking-details-h{overflow-x:hidden;--ir-dialog-max-width:20rem;font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}.sc-ir-booking-details-h *.sc-ir-booking-details{font-family:inherit !important;font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}.font-medium.sc-ir-booking-details{font-weight:600}.sc-ir-booking-details-h th.sc-ir-booking-details{font-weight:600}.h-28.sc-ir-booking-details{height:2rem}.mx-01.sc-ir-booking-details{--m:5px;margin-right:var(--m) !important;margin-left:var(--m) !important}.date-margin.sc-ir-booking-details{margin-right:5px}.pickup-margin.sc-ir-booking-details{margin-bottom:7px !important}.header-date.sc-ir-booking-details{padding-left:5px !important}.pointer.sc-ir-booking-details{cursor:pointer}.sc-ir-booking-details:root{--sidebar-width:50rem}.loading-container.sc-ir-booking-details{height:100%;width:100%;display:flex;justify-content:center;align-items:center;margin:0;padding:0}.sm-padding-right.sc-ir-booking-details{padding-right:0.2rem}.sm-padding-left.sc-ir-booking-details{padding-left:0.2rem}.sm-padding-top.sc-ir-booking-details{padding-top:0.2rem}.sm-padding-bottom.sc-ir-booking-details{padding-bottom:0.2rem}.info-notes.sc-ir-booking-details{list-style:none;padding-left:0}.light-blue-bg.sc-ir-booking-details{background-color:#acecff;padding:0.2rem 0.3rem}.iframeHeight.sc-ir-booking-details{height:17.5rem}.dialog-title.sc-ir-booking-details{width:fit-content}";
const IrBookingDetailsStyle0 = irBookingDetailsCss;

const IrBookingDetails = /*@__PURE__*/ proxyCustomElement(class IrBookingDetails extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.toast = createEvent(this, "toast", 7);
        this.bookingChanged = createEvent(this, "bookingChanged", 7);
        this.closeSidebar = createEvent(this, "closeSidebar", 7);
        // Setup Data
        this.language = 'en';
        this.ticket = '';
        this.bookingNumber = '';
        this.is_from_front_desk = false;
        // Booleans Conditions
        this.hasPrint = false;
        this.hasReceipt = false;
        this.hasDelete = false;
        this.hasMenu = false;
        // Room Booleans
        this.hasRoomEdit = false;
        this.hasRoomDelete = false;
        this.hasRoomAdd = false;
        this.hasCheckIn = false;
        this.hasCheckOut = false;
        this.hasCloseButton = false;
        this.bookingItem = null;
        this.statusData = [];
        this.calendarData = {};
        // Guest Data
        this.guestData = null;
        // Rerender Flag
        this.rerenderFlag = false;
        this.sidebarState = null;
        this.isUpdateClicked = false;
        this.isPMSLogLoading = false;
        this.modalState = null;
        this.bookingService = new BookingService();
        this.roomService = new RoomService();
        this.paymentService = new PaymentService();
        this.token = new Token();
        this.printingBaseUrl = 'https://gateway.igloorooms.com/PrintBooking/%1/printing?id=%2';
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
    handleSideBarEvents(e) {
        this.sidebarState = e.detail.type;
        this.sidebarPayload = e.detail.payload;
    }
    handleIconClick(e) {
        const target = e.target;
        switch (target.id) {
            case 'pickup':
                this.sidebarState = 'pickup';
                return;
            case 'close':
                this.closeSidebar.emit(null);
                return;
            case 'email':
                this.modalState = {
                    type: 'email',
                    message: locales.entries.Lcz_EmailBookingto.replace('%1', this.booking.guest.email),
                    loading: isRequestPending('/Send_Booking_Confirmation_Email'),
                };
                this.modalRef.openModal();
                return;
            case 'print':
                this.openPrintingScreen();
                return;
            case 'receipt':
                this.openPrintingScreen('invoice');
                return;
            case 'book-delete':
                return;
            case 'menu':
                window.location.href = 'https://x.igloorooms.com/manage/acbookinglist.aspx';
                return;
            case 'room-add':
                this.bookingItem = {
                    ID: '',
                    NAME: this.booking.guest.last_name,
                    EMAIL: this.booking.guest.email,
                    PHONE: this.booking.guest.mobile,
                    REFERENCE_TYPE: '',
                    FROM_DATE: this.booking.from_date,
                    ARRIVAL: this.booking.arrival,
                    TO_DATE: this.booking.to_date,
                    TITLE: `${locales.entries.Lcz_AddingUnitToBooking}# ${this.booking.booking_nbr}`,
                    defaultDateRange: {
                        fromDate: new Date(this.booking.from_date),
                        fromDateStr: '',
                        toDate: new Date(this.booking.to_date),
                        toDateStr: '',
                        dateDifference: 0,
                        message: '',
                    },
                    event_type: 'ADD_ROOM',
                    booking: this.booking,
                    BOOKING_NUMBER: this.booking.booking_nbr,
                    ADD_ROOM_TO_BOOKING: this.booking.booking_nbr,
                    GUEST: this.booking.guest,
                    message: this.booking.remark,
                    SOURCE: this.booking.source,
                    ROOMS: this.booking.rooms,
                };
                return;
            case 'extra_service_btn':
                this.sidebarState = 'extra_service';
                return;
            case 'add-payment':
                return;
        }
    }
    async handleResetExposedCancellationDueAmount(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        //TODO: Payment action
        const paymentActions = await this.paymentService.GetExposedCancellationDueAmount({ booking_nbr: this.booking.booking_nbr, currency_id: this.booking.currency.id });
        this.paymentActions = [...paymentActions];
    }
    handleEditInitiated(e) {
        this.bookingItem = e.detail;
    }
    handleRoomGuestsUpdate(e) {
        const { identifier, guests } = e.detail;
        const rooms = [...this.booking.rooms];
        let currentRoomIndex = rooms.findIndex(r => r.identifier === identifier);
        if (currentRoomIndex === -1) {
            return;
        }
        const currentRoom = rooms[currentRoomIndex];
        const updatedRoom = Object.assign(Object.assign({}, currentRoom), { sharing_persons: guests });
        rooms[currentRoomIndex] = updatedRoom;
        this.booking = Object.assign(Object.assign({}, this.booking), { rooms: [...rooms] });
    }
    async handleResetBooking(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        if (e.detail) {
            return (this.booking = e.detail);
        }
        await this.resetBooking();
    }
    handleEditExtraService(e) {
        this.selectedService = e.detail;
        this.sidebarState = 'extra_service';
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
        var _a, _b;
        try {
            const [roomResponse, languageTexts, countriesList, bookingDetails, setupEntries] = await Promise.all([
                this.roomService.getExposedProperty({ id: this.propertyid || 0, language: this.language, aname: this.p }),
                this.roomService.fetchLanguage(this.language),
                this.bookingService.getCountries(this.language),
                this.bookingService.getExposedBooking(this.bookingNumber, this.language),
                this.bookingService.getSetupEntriesByTableNameMulti(['_BED_PREFERENCE_TYPE', '_DEPARTURE_TIME', '_PAY_TYPE', '_PAY_TYPE_GROUP']),
            ]);
            this.property_id = (_a = roomResponse === null || roomResponse === void 0 ? void 0 : roomResponse.My_Result) === null || _a === void 0 ? void 0 : _a.id;
            const { bed_preference_type, departure_time, pay_type, pay_type_group } = this.bookingService.groupEntryTablesResult(setupEntries);
            this.bedPreference = bed_preference_type;
            this.departureTime = departure_time;
            this.paymentTypes = pay_type;
            this.paymentTypesGroups = pay_type_group;
            console.log(departure_time);
            if ((bookingDetails === null || bookingDetails === void 0 ? void 0 : bookingDetails.booking_nbr) && ((_b = bookingDetails === null || bookingDetails === void 0 ? void 0 : bookingDetails.currency) === null || _b === void 0 ? void 0 : _b.id) && bookingDetails.is_direct) {
                this.paymentService
                    .GetExposedCancellationDueAmount({
                    booking_nbr: bookingDetails.booking_nbr,
                    currency_id: bookingDetails.currency.id,
                })
                    .then(res => {
                    this.paymentActions = res;
                });
            }
            if (!(locales === null || locales === void 0 ? void 0 : locales.entries)) {
                locales.entries = languageTexts.entries;
                locales.direction = languageTexts.direction;
            }
            this.countries = countriesList;
            const myResult = roomResponse === null || roomResponse === void 0 ? void 0 : roomResponse.My_Result;
            if (myResult) {
                const { allowed_payment_methods: paymentMethods, currency, allowed_booking_sources, adult_child_constraints, calendar_legends, aname } = myResult;
                this.printingBaseUrl = this.printingBaseUrl.replace('%1', aname).replace('%2', this.bookingNumber);
                this.calendarData = {
                    currency,
                    allowed_booking_sources,
                    adult_child_constraints,
                    legendData: calendar_legends,
                };
                this.setRoomsData(roomResponse);
                const paymentCodesToShow = ['001', '004'];
                this.showPaymentDetails = paymentMethods === null || paymentMethods === void 0 ? void 0 : paymentMethods.some(method => paymentCodesToShow.includes(method.code));
            }
            else {
                console.warn("Room response is missing 'My_Result'.");
            }
            // Set guest and booking data
            this.guestData = bookingDetails.guest;
            this.booking = bookingDetails;
        }
        catch (error) {
            console.error('Error initializing app:', error);
        }
    }
    async openPrintingScreen(mode = 'print', version = 'new') {
        if (version === 'old') {
            if (mode === 'invoice') {
                return window.open(`https://x.igloorooms.com/manage/AcBookingEdit.aspx?IRID=${this.booking.system_id}&&PM=I&TK=${this.ticket}`);
            }
            return window.open(`https://x.igloorooms.com/manage/AcBookingEdit.aspx?IRID=${this.booking.system_id}&&PM=B&TK=${this.ticket}`);
        }
        let url = this.printingBaseUrl;
        if (mode === 'invoice') {
            url = url + '&mode=invoice';
        }
        const { data } = await axios.post(`Get_ShortLiving_Token`);
        if (!data.ExceptionMsg) {
            url = url + `&token=${data.My_Result}`;
        }
        window.open(url);
    }
    handleCloseBookingWindow() {
        this.bookingItem = null;
    }
    handleDeleteFinish(e) {
        this.booking = Object.assign(Object.assign({}, this.booking), { rooms: this.booking.rooms.filter(room => room.identifier !== e.detail) });
    }
    async resetBooking() {
        try {
            const booking = await this.bookingService.getExposedBooking(this.bookingNumber, this.language);
            this.booking = Object.assign({}, booking);
            this.bookingChanged.emit(this.booking);
        }
        catch (error) {
            console.log(error);
        }
    }
    async handleModalConfirm(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        switch (this.modalState.type) {
            case 'email':
                await this.bookingService.sendBookingConfirmationEmail(this.booking.booking_nbr, this.language);
                break;
        }
        this.modalState = null;
        this.modalRef.closeModal();
    }
    renderSidebarContent() {
        var _a, _b, _c, _d, _e, _f;
        const handleClose = () => {
            this.sidebarState = null;
        };
        switch (this.sidebarState) {
            case 'guest':
                return (h("ir-guest-info", { isInSideBar: true, headerShown: true, slot: "sidebar-body", booking_nbr: this.bookingNumber, email: (_a = this.booking) === null || _a === void 0 ? void 0 : _a.guest.email, language: this.language, onCloseSideBar: handleClose }));
            case 'pickup':
                return (h("ir-pickup", { bookingDates: { from: this.booking.from_date, to: this.booking.to_date }, slot: "sidebar-body", defaultPickupData: this.booking.pickup_info, bookingNumber: this.booking.booking_nbr, numberOfPersons: this.booking.occupancy.adult_nbr + this.booking.occupancy.children_nbr, onCloseModal: handleClose }));
            case 'extra_note':
                return h("ir-booking-extra-note", { slot: "sidebar-body", booking: this.booking, onCloseModal: () => (this.sidebarState = null) });
            case 'extra_service':
                return (h("ir-extra-service-config", { service: this.selectedService, booking: { from_date: this.booking.from_date, to_date: this.booking.to_date, booking_nbr: this.booking.booking_nbr, currency: this.booking.currency }, slot: "sidebar-body", onCloseModal: () => {
                        handleClose();
                        if (this.selectedService) {
                            this.selectedService = null;
                        }
                    } }));
            case 'room-guest':
                return (h("ir-room-guests", { countries: this.countries, language: this.language, identifier: (_b = this.sidebarPayload) === null || _b === void 0 ? void 0 : _b.identifier, bookingNumber: this.booking.booking_nbr, roomName: (_c = this.sidebarPayload) === null || _c === void 0 ? void 0 : _c.roomName, totalGuests: (_d = this.sidebarPayload) === null || _d === void 0 ? void 0 : _d.totalGuests, sharedPersons: (_e = this.sidebarPayload) === null || _e === void 0 ? void 0 : _e.sharing_persons, slot: "sidebar-body", checkIn: (_f = this.sidebarPayload) === null || _f === void 0 ? void 0 : _f.checkin, onCloseModal: handleClose }));
            case 'payment-folio':
                return (h("ir-payment-folio", { paymentTypesGroups: this.paymentTypesGroups, bookingNumber: this.booking.booking_nbr, paymentTypes: this.paymentTypes, slot: "sidebar-body", payment: this.sidebarPayload.payment, mode: this.sidebarPayload.mode, onCloseModal: handleClose }));
            default:
                return null;
        }
    }
    render() {
        var _a, _b, _c;
        if (!this.booking) {
            return (h("div", { class: 'loading-container' }, h("ir-spinner", null)));
        }
        return [
            h(Fragment, null, !this.is_from_front_desk && (h(Fragment, null, h("ir-toast", null), h("ir-interceptor", null)))),
            h("ir-booking-header", { booking: this.booking, hasCloseButton: this.hasCloseButton, hasDelete: this.hasDelete, hasMenu: this.hasMenu, hasPrint: this.hasPrint, hasReceipt: this.hasReceipt, hasEmail: ['001', '002'].includes((_b = (_a = this.booking) === null || _a === void 0 ? void 0 : _a.status) === null || _b === void 0 ? void 0 : _b.code) }),
            h("div", { class: "fluid-container p-1 text-left mx-0" }, h("div", { class: "row m-0" }, h("div", { class: "col-12 p-0 mx-0 pr-lg-1 col-lg-6" }, h("ir-reservation-information", { countries: this.countries, booking: this.booking }), h("div", { class: "font-size-large d-flex justify-content-between align-items-center mb-1" }, h("ir-date-view", { from_date: this.booking.from_date, to_date: this.booking.to_date }), 
            // this.hasRoomAdd && this.booking.is_direct && this.booking.is_editable && (
            this.hasRoomAdd && this.booking.is_editable && h("ir-button", { id: "room-add", icon_name: "square_plus", variant: "icon", style: { '--icon-size': '1.5rem' } })), h("div", { class: "card p-0 mx-0" }, this.booking.rooms.map((room, index) => {
                const showCheckin = this.handleRoomCheckin(room);
                const showCheckout = this.handleRoomCheckout(room);
                return [
                    h("ir-room", { room: room, property_id: this.property_id, language: this.language, departureTime: this.departureTime, bedPreferences: this.bedPreference, isEditable: this.booking.is_editable, legendData: this.calendarData.legendData, roomsInfo: this.calendarData.roomsInfo, myRoomTypeFoodCat: room.roomtype.name, mealCodeName: room.rateplan.short_name, currency: this.booking.currency.symbol, hasRoomEdit: this.hasRoomEdit && this.booking.status.code !== '003' && this.booking.is_direct, hasRoomDelete: this.hasRoomDelete && this.booking.status.code !== '003' && this.booking.is_direct, hasCheckIn: showCheckin, hasCheckOut: showCheckout, booking: this.booking, bookingIndex: index, onDeleteFinished: this.handleDeleteFinish.bind(this) }),
                    index !== this.booking.rooms.length - 1 && h("hr", { class: "mr-2 ml-2 my-0 p-0" }),
                ];
            })), h("ir-pickup-view", { booking: this.booking }), h("section", null, h("div", { class: "font-size-large d-flex justify-content-between align-items-center mb-1" }, h("p", { class: 'font-size-large p-0 m-0 ' }, locales.entries.Lcz_ExtraServices), h("ir-button", { id: "extra_service_btn", icon_name: "square_plus", variant: "icon", style: { '--icon-size': '1.5rem' } })), h("ir-extra-services", { booking: { booking_nbr: this.booking.booking_nbr, currency: this.booking.currency, extra_services: this.booking.extra_services } }))), h("div", { class: "col-12 p-0 m-0 pl-lg-1 col-lg-6" }, h("ir-payment-details", { paymentTypes: this.paymentTypes, paymentActions: this.paymentActions, bookingDetails: this.booking })))),
            h("ir-modal", { modalBody: (_c = this.modalState) === null || _c === void 0 ? void 0 : _c.message, leftBtnText: locales.entries.Lcz_Cancel, rightBtnText: locales.entries.Lcz_Confirm, autoClose: false, isLoading: isRequestPending('/Send_Booking_Confirmation_Email'), ref: el => (this.modalRef = el), onConfirmModal: e => {
                    this.handleModalConfirm(e);
                }, onCancelModal: () => {
                    this.modalRef.closeModal();
                } }),
            h("ir-sidebar", { open: this.sidebarState !== null, side: 'right', id: "editGuestInfo", style: { '--sidebar-width': this.sidebarState === 'room-guest' ? '60rem' : undefined }, onIrSidebarToggle: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.sidebarState = null;
                }, showCloseButton: false }, this.renderSidebarContent()),
            h(Fragment, null, this.bookingItem && (h("igl-book-property", { allowedBookingSources: this.calendarData.allowed_booking_sources, adultChildConstraints: this.calendarData.adult_child_constraints, showPaymentDetails: this.showPaymentDetails, countries: this.countries, currency: this.calendarData.currency, language: this.language, propertyid: this.property_id, bookingData: this.bookingItem, onCloseBookingWindow: () => this.handleCloseBookingWindow() }))),
        ];
    }
    handleRoomCheckout(room) {
        if (!calendar_data.checkin_enabled || calendar_data.is_automatic_check_in_out) {
            return false;
        }
        return room.in_out.code === '001';
    }
    handleRoomCheckin(room) {
        if (!calendar_data.checkin_enabled || calendar_data.is_automatic_check_in_out) {
            return false;
        }
        if (!room.unit) {
            return false;
        }
        if (room.in_out && room.in_out.code !== '000') {
            return false;
        }
        if (hooks().isSameOrAfter(hooks(room.from_date, 'YYYY-MM-DD'), 'days') && hooks().isBefore(hooks(room.to_date, 'YYYY-MM-DD'), 'days')) {
            return true;
        }
        return false;
    }
    get element() { return this; }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
    static get style() { return IrBookingDetailsStyle0; }
}, [2, "ir-booking-details", {
        "language": [1],
        "ticket": [1],
        "bookingNumber": [1, "booking-number"],
        "propertyid": [2],
        "is_from_front_desk": [4],
        "p": [1],
        "hasPrint": [4, "has-print"],
        "hasReceipt": [4, "has-receipt"],
        "hasDelete": [4, "has-delete"],
        "hasMenu": [4, "has-menu"],
        "hasRoomEdit": [4, "has-room-edit"],
        "hasRoomDelete": [4, "has-room-delete"],
        "hasRoomAdd": [4, "has-room-add"],
        "hasCheckIn": [4, "has-check-in"],
        "hasCheckOut": [4, "has-check-out"],
        "hasCloseButton": [4, "has-close-button"],
        "bookingItem": [32],
        "statusData": [32],
        "showPaymentDetails": [32],
        "booking": [32],
        "countries": [32],
        "calendarData": [32],
        "guestData": [32],
        "rerenderFlag": [32],
        "sidebarState": [32],
        "sidebarPayload": [32],
        "isUpdateClicked": [32],
        "pms_status": [32],
        "isPMSLogLoading": [32],
        "paymentActions": [32],
        "property_id": [32],
        "selectedService": [32],
        "bedPreference": [32],
        "roomGuest": [32],
        "modalState": [32],
        "departureTime": [32],
        "paymentTypes": [32],
        "paymentTypesGroups": [32]
    }, [[0, "openSidebar", "handleSideBarEvents"], [0, "clickHandler", "handleIconClick"], [0, "resetExposedCancellationDueAmount", "handleResetExposedCancellationDueAmount"], [0, "editInitiated", "handleEditInitiated"], [0, "updateRoomGuests", "handleRoomGuestsUpdate"], [0, "resetBookingEvt", "handleResetBooking"], [0, "editExtraService", "handleEditExtraService"]], {
        "ticket": ["ticketChanged"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-booking-details", "igl-application-info", "igl-block-dates-view", "igl-book-property", "igl-book-property-footer", "igl-book-property-header", "igl-booking-form", "igl-booking-overview-page", "igl-date-range", "igl-property-booked-by", "igl-rate-plan", "igl-room-type", "ir-autocomplete", "ir-booking-extra-note", "ir-booking-guarantee", "ir-booking-header", "ir-button", "ir-combobox", "ir-country-picker", "ir-date-picker", "ir-date-range", "ir-date-view", "ir-dialog", "ir-dropdown", "ir-dropdown-item", "ir-events-log", "ir-extra-service", "ir-extra-service-config", "ir-extra-services", "ir-guest-info", "ir-icon", "ir-icons", "ir-input-text", "ir-interceptor", "ir-label", "ir-modal", "ir-otp", "ir-otp-modal", "ir-payment-action", "ir-payment-actions", "ir-payment-details", "ir-payment-folio", "ir-payment-item", "ir-payment-summary", "ir-payments-folio", "ir-phone-input", "ir-pickup", "ir-pickup-view", "ir-pms-logs", "ir-popover", "ir-price-input", "ir-reservation-information", "ir-room", "ir-room-guests", "ir-select", "ir-sidebar", "ir-spinner", "ir-textarea", "ir-title", "ir-toast", "ir-tooltip", "ota-label"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-booking-details":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBookingDetails);
            }
            break;
        case "igl-application-info":
            if (!customElements.get(tagName)) {
                defineCustomElement$Z();
            }
            break;
        case "igl-block-dates-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$Y();
            }
            break;
        case "igl-book-property":
            if (!customElements.get(tagName)) {
                defineCustomElement$X();
            }
            break;
        case "igl-book-property-footer":
            if (!customElements.get(tagName)) {
                defineCustomElement$W();
            }
            break;
        case "igl-book-property-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$V();
            }
            break;
        case "igl-booking-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$U();
            }
            break;
        case "igl-booking-overview-page":
            if (!customElements.get(tagName)) {
                defineCustomElement$T();
            }
            break;
        case "igl-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$S();
            }
            break;
        case "igl-property-booked-by":
            if (!customElements.get(tagName)) {
                defineCustomElement$R();
            }
            break;
        case "igl-rate-plan":
            if (!customElements.get(tagName)) {
                defineCustomElement$Q();
            }
            break;
        case "igl-room-type":
            if (!customElements.get(tagName)) {
                defineCustomElement$P();
            }
            break;
        case "ir-autocomplete":
            if (!customElements.get(tagName)) {
                defineCustomElement$O();
            }
            break;
        case "ir-booking-extra-note":
            if (!customElements.get(tagName)) {
                defineCustomElement$N();
            }
            break;
        case "ir-booking-guarantee":
            if (!customElements.get(tagName)) {
                defineCustomElement$M();
            }
            break;
        case "ir-booking-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$L();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$K();
            }
            break;
        case "ir-combobox":
            if (!customElements.get(tagName)) {
                defineCustomElement$J();
            }
            break;
        case "ir-country-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$I();
            }
            break;
        case "ir-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$H();
            }
            break;
        case "ir-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$G();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$F();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$E();
            }
            break;
        case "ir-dropdown":
            if (!customElements.get(tagName)) {
                defineCustomElement$D();
            }
            break;
        case "ir-dropdown-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$C();
            }
            break;
        case "ir-events-log":
            if (!customElements.get(tagName)) {
                defineCustomElement$B();
            }
            break;
        case "ir-extra-service":
            if (!customElements.get(tagName)) {
                defineCustomElement$A();
            }
            break;
        case "ir-extra-service-config":
            if (!customElements.get(tagName)) {
                defineCustomElement$z();
            }
            break;
        case "ir-extra-services":
            if (!customElements.get(tagName)) {
                defineCustomElement$y();
            }
            break;
        case "ir-guest-info":
            if (!customElements.get(tagName)) {
                defineCustomElement$x();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$w();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$v();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$u();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$t();
            }
            break;
        case "ir-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$s();
            }
            break;
        case "ir-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$r();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$q();
            }
            break;
        case "ir-otp-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$p();
            }
            break;
        case "ir-payment-action":
            if (!customElements.get(tagName)) {
                defineCustomElement$o();
            }
            break;
        case "ir-payment-actions":
            if (!customElements.get(tagName)) {
                defineCustomElement$n();
            }
            break;
        case "ir-payment-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$m();
            }
            break;
        case "ir-payment-folio":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "ir-payment-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "ir-payment-summary":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-payments-folio":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-phone-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-pickup":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-pickup-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-pms-logs":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-popover":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-price-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-reservation-information":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-room":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-room-guests":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-sidebar":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-textarea":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-title":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ota-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrBookingDetails as I, defineCustomElement as d };

//# sourceMappingURL=ir-booking-details2.js.map