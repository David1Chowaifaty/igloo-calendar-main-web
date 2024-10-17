'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d0d7c4d0.js');
const functions = require('./functions-1d46da3c.js');
const axios = require('./axios-b86c5465.js');
const booking_service = require('./booking.service-aebdbaca.js');
const room_service = require('./room.service-90a9ab46.js');
const locales_store = require('./locales.store-4301bbe8.js');
const calendarData = require('./calendar-data-fbe7f62b.js');
const icons = require('./icons-24fa0323.js');
const booking = require('./booking-c11bc999.js');
const payment_service = require('./payment.service-1a0ac357.js');
const irInterceptor_store = require('./ir-interceptor.store-ddd4cdfb.js');
require('./moment-1780b03a.js');
require('./utils-34705107.js');
require('./Token-e80634a3.js');
require('./index-5e99a1fe.js');

const irBookingDetailsCss = ".sc-ir-booking-details-h{overflow-x:hidden;--ir-dialog-max-width:20rem}.confirmed.sc-ir-booking-details{color:#fff;display:flex;align-items:center}.bg-ir-green.sc-ir-booking-details{background:#629a4c;padding:0.2rem 0.3rem}.h-28.sc-ir-booking-details{height:2rem}.mx-01.sc-ir-booking-details{--m:5px;margin-right:var(--m) !important;margin-left:var(--m) !important}.bg-ir-red.sc-ir-booking-details{background:#ff4961;padding:0.2rem 0.3rem}.bg-ir-orange.sc-ir-booking-details{background:#ff9149;padding:0.2rem 0.3rem}.date-margin.sc-ir-booking-details{margin-right:5px}.pickup-margin.sc-ir-booking-details{margin-bottom:7px !important}.header-date.sc-ir-booking-details{padding-left:5px !important}.pointer.sc-ir-booking-details{cursor:pointer}.sc-ir-booking-details:root{--sidebar-width:50rem}.loading-container.sc-ir-booking-details{height:100%;width:100%;display:flex;justify-content:center;align-items:center;margin:0;padding:0}.sm-padding-right.sc-ir-booking-details{padding-right:0.2rem}.sm-padding-left.sc-ir-booking-details{padding-left:0.2rem}.sm-padding-top.sc-ir-booking-details{padding-top:0.2rem}.sm-padding-bottom.sc-ir-booking-details{padding-bottom:0.2rem}.info-notes.sc-ir-booking-details{list-style:none;padding-left:0}.light-blue-bg.sc-ir-booking-details{background-color:#acecff;padding:0.2rem 0.3rem}.iframeHeight.sc-ir-booking-details{height:17.5rem}.btn-outline.sc-ir-booking-details{background:transparent;border:1px solid #104064;color:#104064}.btn-outline.sc-ir-booking-details:hover,.btn-outline.sc-ir-booking-details:active{background:#104064;color:white}.dialog-title.sc-ir-booking-details{width:fit-content}.list-title.sc-ir-booking-details{margin:0;padding:0;font-size:14px;font-weight:bold;width:fit-content}.list-item.sc-ir-booking-details{margin:0;padding:0;font-size:14px;margin-left:5px;width:fit-content}.list-item.green.sc-ir-booking-details{color:#629a4c;font-weight:600}.list-item.red.sc-ir-booking-details{color:#ff4961;font-weight:600}";
const IrBookingDetailsStyle0 = irBookingDetailsCss;

const IrBookingDetails = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.toast = index.createEvent(this, "toast", 7);
        this.bookingChanged = index.createEvent(this, "bookingChanged", 7);
        this.closeSidebar = index.createEvent(this, "closeSidebar", 7);
        this.bookingService = new booking_service.BookingService();
        this.roomService = new room_service.RoomService();
        this.paymentService = new payment_service.PaymentService();
        this.printingBaseUrl = 'https://gateway.igloorooms.com/PrintBooking/%1/printing?id=%2';
        this.confirmationBG = {
            '001': 'bg-ir-orange',
            '002': 'bg-ir-green',
            '003': 'bg-ir-red',
            '004': 'bg-ir-red',
        };
        this.language = '';
        this.ticket = '';
        this.bookingNumber = '';
        this.propertyid = undefined;
        this.is_from_front_desk = false;
        this.p = undefined;
        this.hasPrint = false;
        this.hasReceipt = false;
        this.hasDelete = false;
        this.hasMenu = false;
        this.hasRoomEdit = false;
        this.hasRoomDelete = false;
        this.hasRoomAdd = false;
        this.hasCheckIn = false;
        this.hasCheckOut = false;
        this.hasCloseButton = false;
        this.bookingItem = null;
        this.statusData = [];
        this.tempStatus = null;
        this.showPaymentDetails = undefined;
        this.bookingData = undefined;
        this.countryNodeList = undefined;
        this.calendarData = {};
        this.guestData = null;
        this.defaultTexts = undefined;
        this.rerenderFlag = false;
        this.sidebarState = null;
        this.isUpdateClicked = false;
        this.pms_status = undefined;
        this.isPMSLogLoading = false;
        this.userCountry = null;
        this.paymentActions = undefined;
        this.property_id = undefined;
    }
    componentDidLoad() {
        // if (this.ticket !== '') {
        calendarData.calendar_data.token = this.ticket;
        this.bookingService.setToken(this.ticket);
        this.roomService.setToken(this.ticket);
        this.initializeApp();
        // }
    }
    async ticketChanged() {
        calendarData.calendar_data.token = this.ticket;
        this.paymentService.setToken(this.ticket);
        this.bookingService.setToken(this.ticket);
        this.roomService.setToken(this.ticket);
        this.initializeApp();
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
                    NAME: this.bookingData.guest.last_name,
                    EMAIL: this.bookingData.guest.email,
                    PHONE: this.bookingData.guest.mobile,
                    REFERENCE_TYPE: '',
                    FROM_DATE: this.bookingData.from_date,
                    ARRIVAL: this.bookingData.arrival,
                    TO_DATE: this.bookingData.to_date,
                    TITLE: `${locales_store.locales.entries.Lcz_AddingUnitToBooking}# ${this.bookingData.booking_nbr}`,
                    defaultDateRange: {
                        fromDate: new Date(this.bookingData.from_date),
                        fromDateStr: '',
                        toDate: new Date(this.bookingData.to_date),
                        toDateStr: '',
                        dateDifference: 0,
                        message: '',
                    },
                    event_type: 'ADD_ROOM',
                    BOOKING_NUMBER: this.bookingData.booking_nbr,
                    ADD_ROOM_TO_BOOKING: this.bookingData.booking_nbr,
                    GUEST: this.bookingData.guest,
                    message: this.bookingData.remark,
                    SOURCE: this.bookingData.source,
                    ROOMS: this.bookingData.rooms,
                };
                return;
            case 'add-payment':
                return;
        }
    }
    handleEditSidebar() {
        this.sidebarState = 'guest';
    }
    async handleResetExposedCancelationDueAmount(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        //TOTO: Payment action
        // const paymentActions = await this.paymentService.GetExposedCancelationDueAmount({ booking_nbr: this.bookingData.booking_nbr, currency_id: this.bookingData.currency.id });
        // this.paymentActions = [...paymentActions];
    }
    handleSelectChange(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        const target = e.target;
        this.tempStatus = target.selectedValue;
    }
    handleEditInitiated(e) {
        this.bookingItem = e.detail;
    }
    async handleResetBookingData(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        if (e.detail) {
            return (this.bookingData = e.detail);
        }
        await this.resetBookingData();
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
            const [roomResponse, languageTexts, countriesList, bookingDetails] = await Promise.all([
                this.roomService.getExposedProperty({ id: this.propertyid || 0, language: this.language, aname: this.p }),
                this.roomService.fetchLanguage(this.language),
                this.bookingService.getCountries(this.language),
                this.bookingService.getExposedBooking(this.bookingNumber, this.language),
            ]);
            this.paymentService.setToken(this.ticket);
            this.property_id = (_a = roomResponse === null || roomResponse === void 0 ? void 0 : roomResponse.My_Result) === null || _a === void 0 ? void 0 : _a.id;
            //TODO:Reenable payment actions
            // if (bookingDetails?.booking_nbr && bookingDetails?.currency?.id) {
            //   this.paymentActions = await this.paymentService.GetExposedCancelationDueAmount({
            //     booking_nbr: bookingDetails.booking_nbr,
            //     currency_id: bookingDetails.currency.id,
            //   });
            // } else {
            //   console.warn('Booking details are incomplete for payment actions.');
            // }
            if (!(locales_store.locales === null || locales_store.locales === void 0 ? void 0 : locales_store.locales.entries)) {
                locales_store.locales.entries = languageTexts.entries;
                locales_store.locales.direction = languageTexts.direction;
            }
            this.defaultTexts = languageTexts;
            this.countryNodeList = countriesList;
            const guestCountryId = (_b = bookingDetails === null || bookingDetails === void 0 ? void 0 : bookingDetails.guest) === null || _b === void 0 ? void 0 : _b.country_id;
            this.userCountry = guestCountryId ? this.countryNodeList.find(country => country.id === guestCountryId) || null : null;
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
            this.bookingData = bookingDetails;
        }
        catch (error) {
            console.error('Error initializing app:', error);
        }
    }
    async updateStatus() {
        if (this.tempStatus !== '' && this.tempStatus !== null) {
            try {
                this.isUpdateClicked = true;
                await axios.axios.post(`/Change_Exposed_Booking_Status`, {
                    book_nbr: this.bookingNumber,
                    status: this.tempStatus,
                });
                this.toast.emit({
                    type: 'success',
                    description: '',
                    title: locales_store.locales.entries.Lcz_StatusUpdatedSuccessfully,
                    position: 'top-right',
                });
                await this.resetBookingData();
            }
            catch (error) {
                console.log(error);
            }
            finally {
                this.isUpdateClicked = false;
            }
        }
        else {
            this.toast.emit({
                type: 'error',
                description: '',
                title: locales_store.locales.entries.Lcz_SelectStatus,
                position: 'top-right',
            });
        }
    }
    async openPMSLogsDialog() {
        var _a;
        try {
            (_a = this.dialogRef) === null || _a === void 0 ? void 0 : _a.openModal();
            if (!this.pms_status) {
                this.isPMSLogLoading = true;
                this.pms_status = await this.bookingService.fetchPMSLogs(this.bookingData.booking_nbr);
            }
        }
        catch (error) {
            console.log(error);
        }
        finally {
            if (this.isPMSLogLoading) {
                this.isPMSLogLoading = false;
            }
        }
    }
    async openPrintingScreen(mode = 'print', version = 'new') {
        if (version === 'old') {
            if (mode === 'invoice') {
                return window.open(`https://x.igloorooms.com/manage/AcBookingEdit.aspx?IRID=${this.bookingData.system_id}&&PM=I&TK=${this.ticket}`);
            }
            return window.open(`https://x.igloorooms.com/manage/AcBookingEdit.aspx?IRID=${this.bookingData.system_id}&&PM=B&TK=${this.ticket}`);
        }
        let url = this.printingBaseUrl;
        if (mode === 'invoice') {
            url = url + '&mode=invoice';
        }
        const { data } = await axios.axios.post(`Get_ShortLiving_Token`);
        if (!data.ExceptionMsg) {
            url = url + `&token=${data.My_Result}`;
        }
        window.open(url);
    }
    handleCloseBookingWindow() {
        this.bookingItem = null;
    }
    handleDeleteFinish(e) {
        this.bookingData = Object.assign(Object.assign({}, this.bookingData), { rooms: this.bookingData.rooms.filter(room => room.identifier !== e.detail) });
    }
    async resetBookingData() {
        try {
            const booking = await this.bookingService.getExposedBooking(this.bookingNumber, this.language);
            this.bookingData = Object.assign({}, booking);
            this.bookingChanged.emit(this.bookingData);
        }
        catch (error) {
            console.log(error);
        }
    }
    renderPhoneNumber() {
        const { mobile, country_phone_prefix, country_id } = this.bookingData.guest;
        if (!mobile) {
            return null;
        }
        if (this.bookingData.is_direct) {
            if (country_phone_prefix) {
                return country_phone_prefix + ' ' + mobile;
            }
            if (country_id) {
                const selectedCountry = this.countryNodeList.find(c => c.id === country_id);
                if (!selectedCountry) {
                    throw new Error('Invalid country id');
                }
                return selectedCountry.phone_prefix + ' ' + mobile;
            }
        }
        return mobile;
    }
    renderSidbarContent() {
        var _a;
        switch (this.sidebarState) {
            case 'guest':
                return (index.h("ir-guest-info", { slot: "sidebar-body", booking_nbr: this.bookingNumber, defaultTexts: this.defaultTexts, email: (_a = this.bookingData) === null || _a === void 0 ? void 0 : _a.guest.email, language: this.language, onCloseSideBar: () => (this.sidebarState = null) }));
            case 'pickup':
                return (index.h("ir-pickup", { slot: "sidebar-body", defaultPickupData: this.bookingData.pickup_info, bookingNumber: this.bookingData.booking_nbr, numberOfPersons: this.bookingData.occupancy.adult_nbr + this.bookingData.occupancy.children_nbr, onCloseModal: () => (this.sidebarState = null) }));
            case 'extra_note':
                return index.h("ir-booking-extra-note", { slot: "sidebar-body", booking: this.bookingData, onCloseModal: () => (this.sidebarState = null) });
            default:
                return null;
        }
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        if (!this.bookingData) {
            return (index.h("div", { class: 'loading-container' }, index.h("ir-spinner", null)));
        }
        return [
            index.h(index.Fragment, null, !this.is_from_front_desk && (index.h(index.Fragment, null, index.h("ir-toast", null), index.h("ir-interceptor", null)))),
            index.h("div", { class: "fluid-container p-1" }, index.h("div", { class: "d-flex flex-column p-0 mx-0 flex-lg-row align-items-md-center justify-content-between mt-1" }, index.h("div", { class: "m-0 p-0 mb-1 mb-lg-0 mt-md-0  d-flex justify-content-start align-items-center" }, index.h("p", { class: "font-size-large m-0 p-0" }, `${this.defaultTexts.entries.Lcz_Booking}#${this.bookingNumber}`), index.h("p", { class: "m-0 p-0 ml-1" }, !this.bookingData.is_direct && (index.h("span", { class: "mr-1 m-0" }, this.bookingData.channel_booking_nbr, " ")), index.h("span", { class: "date-margin" }, functions._formatDate(this.bookingData.booked_on.date)), functions._formatTime(this.bookingData.booked_on.hour.toString(), this.bookingData.booked_on.minute.toString()))), index.h("div", { class: "d-flex justify-content-end align-items-center" }, index.h("span", { class: `confirmed btn-sm m-0 mr-2 ${this.confirmationBG[this.bookingData.status.code]}` }, this.bookingData.status.description), this.bookingData.allowed_actions.length > 0 && this.bookingData.is_editable && (index.h(index.Fragment, null, index.h("ir-select", { selectContainerStyle: "h-28", selectStyles: "d-flex status-select align-items-center h-28", firstOption: locales_store.locales.entries.Lcz_Select, id: "update-status", size: "sm", "label-available": "false", data: this.bookingData.allowed_actions.map(b => ({ text: b.description, value: b.code })), textSize: "sm", class: "sm-padding-right m-0 " }), index.h("ir-button", { onClickHanlder: this.updateStatus.bind(this), btn_styles: "h-28", isLoading: this.isUpdateClicked, btn_disabled: this.isUpdateClicked, id: "update-status-btn", size: "sm", text: "Update" }))), calendarData.calendar_data.is_pms_enabled && (index.h("button", { type: "button", class: "btn btn-outline btn-sm ml-1", onClick: this.openPMSLogsDialog.bind(this) }, locales_store.locales.entries.Lcz_pms)), this.hasReceipt && index.h("ir-button", { variant: "icon", id: "receipt", icon_name: "reciept", class: "mx-1", style: { '--icon-size': '1.65rem' } }), this.hasPrint && index.h("ir-button", { variant: "icon", id: "print", icon_name: "print", class: "mr-1", style: { '--icon-size': '1.65rem' } }), this.hasDelete && index.h("ir-button", { variant: "icon", id: "book-delete", icon_name: "trash", class: "mr-1", style: Object.assign(Object.assign({}, icons.colorVariants.danger), { '--icon-size': '1.65rem' }) }), this.hasMenu && index.h("ir-button", { variant: "icon", class: "mr-1", id: "menu", icon_name: "menu_list", style: { '--icon-size': '1.65rem' } }), this.hasCloseButton && (index.h("ir-button", { id: "close", variant: "icon", style: { '--icon-size': '1.65rem' }, icon_name: "xmark", class: "ml-2", onClickHanlder: e => {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    this.closeSidebar.emit(null);
                } }))))),
            index.h("div", { class: "fluid-container p-1 text-left mx-0" }, index.h("div", { class: "row m-0" }, index.h("div", { class: "col-12 p-0 mx-0 pr-lg-1 col-lg-6" }, index.h("div", { class: "card" }, index.h("div", { class: "p-1" }, index.h("p", null, this.bookingData.property.name || ''), index.h("ir-label", { label: `${this.defaultTexts.entries.Lcz_Source}:`, value: this.bookingData.origin.Label, image: { src: this.bookingData.origin.Icon, alt: this.bookingData.origin.Label } }), index.h("ir-label", { label: `${this.defaultTexts.entries.Lcz_BookedBy}:`, value: `${this.bookingData.guest.first_name} ${this.bookingData.guest.last_name}`, iconShown: true }), this.bookingData.guest.mobile && index.h("ir-label", { label: `${this.defaultTexts.entries.Lcz_Phone}:`, value: this.renderPhoneNumber() }), index.h("ir-label", { label: `${this.defaultTexts.entries.Lcz_Email}:`, value: this.bookingData.guest.email }), this.bookingData.guest.alternative_email && (index.h("ir-label", { label: `${this.defaultTexts.entries.Lcz_AlternativeEmail}:`, value: this.bookingData.guest.alternative_email })), ((_b = (_a = this.bookingData) === null || _a === void 0 ? void 0 : _a.guest) === null || _b === void 0 ? void 0 : _b.address) && index.h("ir-label", { label: `${this.defaultTexts.entries.Lcz_Address}:`, value: this.bookingData.guest.address }), this.userCountry && (index.h("ir-label", { label: `${this.defaultTexts.entries.Lcz_Country}:`, value: this.userCountry.name, country: true, image: { src: this.userCountry.flag, alt: this.userCountry.name } })), this.bookingData.is_direct && index.h("ir-label", { label: `${this.defaultTexts.entries.Lcz_ArrivalTime}:`, value: this.bookingData.arrival.description }), this.bookingData.promo_key && index.h("ir-label", { label: `${this.defaultTexts.entries.Lcz_Coupon}:`, value: this.bookingData.promo_key }), this.bookingData.agent && index.h("ir-label", { label: `${(_c = this.defaultTexts.entries.Lcz_AgentCode) === null || _c === void 0 ? void 0 : _c.split(':')[0]}:`, value: this.bookingData.agent.name }), this.bookingData.is_in_loyalty_mode && !this.bookingData.promo_key && (index.h("div", { class: "d-flex align-items-center" }, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { fill: "#fc6c85", d: "M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" })), index.h("p", { class: "m-0 p-0 ml-1" }, this.defaultTexts.entries.Lcz_LoyaltyDiscountApplied))), this.bookingData.is_direct ? (index.h("ir-label", { class: 'm-0 p-0', label: `${this.defaultTexts.entries.Lcz_Note}:`, value: this.bookingData.remark })) : (index.h("ota-label", { class: 'm-0 p-0', label: `${this.defaultTexts.entries.Lcz_Note}:`, remarks: this.bookingData.ota_notes, maxVisibleItems: (_d = this.bookingData.ota_notes) === null || _d === void 0 ? void 0 : _d.length })), index.h("div", { class: "d-flex align-items-center justify-content-between" }, index.h("ir-label", { label: `${locales_store.locales.entries.Lcz_PrivateNote}:`, placeholder: locales_store.locales.entries.Lcz_VisibleToHotelOnly, value: booking.getPrivateNote(this.bookingData.extras), ignore_value: true }), index.h("ir-button", { variant: "icon", icon_name: "edit", style: icons.colorVariants.secondary, onClickHanlder: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.sidebarState = 'extra_note';
                } })))), index.h("div", { class: "font-size-large d-flex justify-content-between align-items-center mb-1" }, index.h("ir-date-view", { from_date: this.bookingData.from_date, to_date: this.bookingData.to_date }), this.hasRoomAdd && this.bookingData.is_direct && this.bookingData.is_editable && (index.h("ir-button", { id: "room-add", icon_name: "square_plus", variant: "icon", style: { '--icon-size': '1.5rem' } }))), index.h("div", { class: "card p-0 mx-0" }, this.bookingData.rooms.map((room, index$1) => {
                return [
                    index.h("ir-room", { isEditable: this.bookingData.is_editable, defaultTexts: this.defaultTexts, legendData: this.calendarData.legendData, roomsInfo: this.calendarData.roomsInfo, myRoomTypeFoodCat: room.roomtype.name, mealCodeName: room.rateplan.name, currency: this.bookingData.currency.symbol, hasRoomEdit: this.hasRoomEdit && this.bookingData.status.code !== '003' && this.bookingData.is_direct, hasRoomDelete: this.hasRoomDelete && this.bookingData.status.code !== '003' && this.bookingData.is_direct, hasCheckIn: this.hasCheckIn, hasCheckOut: this.hasCheckOut, bookingEvent: this.bookingData, bookingIndex: index$1, ticket: this.ticket, onDeleteFinished: this.handleDeleteFinish.bind(this) }),
                    index$1 !== this.bookingData.rooms.length - 1 && index.h("hr", { class: "mr-2 ml-2 my-0 p-0" }),
                ];
            })), index.h("ir-pickup-view", { booking: this.bookingData })), index.h("div", { class: "col-12 p-0 m-0 pl-lg-1 col-lg-6" }, index.h("ir-payment-details", { paymentActions: this.paymentActions, defaultTexts: this.defaultTexts, bookingDetails: this.bookingData })))),
            index.h("ir-sidebar", { open: this.sidebarState !== null, side: 'right', id: "editGuestInfo", onIrSidebarToggle: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.sidebarState = null;
                }, showCloseButton: false }, this.renderSidbarContent()),
            index.h(index.Fragment, null, this.bookingItem && (index.h("igl-book-property", { allowedBookingSources: this.calendarData.allowed_booking_sources, adultChildConstraints: this.calendarData.adult_child_constraints, showPaymentDetails: this.showPaymentDetails, countryNodeList: this.countryNodeList, currency: this.calendarData.currency, language: this.language, propertyid: this.property_id, bookingData: this.bookingItem, onCloseBookingWindow: () => this.handleCloseBookingWindow() }))),
            index.h(index.Fragment, null, index.h("ir-dialog", { ref: el => (this.dialogRef = el) }, index.h("div", { slot: "modal-body", class: "p-1" }, index.h("h3", { class: " text-left mb-1 dialog-title " }, locales_store.locales.entries.Lcz_PMS_Logs), !this.isPMSLogLoading && (index.h(index.Fragment, null, index.h("div", { class: "d-flex align-items-center" }, index.h("p", { class: "list-title" }, locales_store.locales.entries.Lcz_SentAt), ((_e = this.pms_status) === null || _e === void 0 ? void 0 : _e.sent_date) ? (index.h("p", { class: "list-item" }, (_f = this.pms_status) === null || _f === void 0 ? void 0 :
                _f.sent_date, " ", functions._formatTime((_g = this.pms_status) === null || _g === void 0 ? void 0 : _g.sent_hour.toString(), (_h = this.pms_status) === null || _h === void 0 ? void 0 : _h.sent_minute.toString()))) : (index.h("p", { class: `list-item ${((_j = this.pms_status) === null || _j === void 0 ? void 0 : _j.sent_date) ? 'green' : 'red'}` }, ((_k = this.pms_status) === null || _k === void 0 ? void 0 : _k.is_acknowledged) ? locales_store.locales.entries.Lcz_YES : locales_store.locales.entries.Lcz_NO))), index.h("div", { class: "d-flex align-items-center" }, index.h("h4", { class: "list-title" }, locales_store.locales.entries.Lcz_Acknowledged), index.h("p", { class: `list-item ${((_l = this.pms_status) === null || _l === void 0 ? void 0 : _l.is_acknowledged) ? 'green' : 'red'}` }, ((_m = this.pms_status) === null || _m === void 0 ? void 0 : _m.is_acknowledged) ? locales_store.locales.entries.Lcz_YES : locales_store.locales.entries.Lcz_NO))))))),
        ];
    }
    get element() { return index.getElement(this); }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrBookingDetails.style = IrBookingDetailsStyle0;

class AuthService {
    async authenticate(params) {
        const { data } = await axios.axios.post('/Authenticate', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        //  sessionStorage.setItem('token', JSON.stringify(data.My_Result));
        return data['My_Result'];
    }
}

const irLoginCss = ".sc-ir-login-h{height:100vh;display:grid;align-content:center;padding:2rem;box-sizing:border-box;background:url(https://x.igloorooms.com/bg.jpg);background-position:center;background-repeat:no-repeat;background-size:cover}p.sc-ir-login,input.sc-ir-login,button.sc-ir-login{margin:0}p.sc-ir-login,input.sc-ir-login,button.sc-ir-login,div.sc-ir-login,section.sc-ir-login,form.sc-ir-login{box-sizing:border-box}.form-container.sc-ir-login{padding:1rem;display:flex;flex-direction:column;height:100%;background:white;border-radius:0.25rem;gap:1rem;width:100%;max-width:38rem;margin-left:auto;margin-right:auto}.separator-container.sc-ir-login{display:flex;align-items:center;gap:0.5rem;padding-top:1.5rem;padding-bottom:1rem}.separator-container.sc-ir-login p.sc-ir-login{color:#6b6f82;font-size:1rem}.separator.sc-ir-login{flex:1 1 0%;height:1px;background:#dadada}.login-btn.sc-ir-login{margin-top:1rem}.logo.sc-ir-login{align-self:center}.app_links.sc-ir-login{display:flex;align-items:center;justify-content:center;gap:1rem;padding-block:0.5rem}.app_links.sc-ir-login a.sc-ir-login img.sc-ir-login{width:70%}.password_toggle.sc-ir-login{all:unset;position:absolute;top:2px;right:1rem}";
const IrLoginStyle0 = irLoginCss;

const IrLogin = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.authFinish = index.createEvent(this, "authFinish", 7);
        this.authService = new AuthService();
        this.username = undefined;
        this.password = undefined;
        this.showPassword = false;
    }
    async handleSignIn(e) {
        e.preventDefault();
        try {
            const token = await this.authService.authenticate({
                password: this.password,
                username: this.username,
            });
            this.authFinish.emit({ token, code: 'succsess' });
        }
        catch (error) {
            console.log(error.message);
        }
    }
    render() {
        return (index.h(index.Host, { key: 'd105e726fe05a85341cdc95b1883dde6eb0bc1e9' }, index.h("ir-interceptor", { key: '03b164a86cd361a92a20a54a5b5a720c298a3435' }), index.h("ir-toast", { key: '3a8857e3af100188247e030ab4d1b001067c66bf' }), index.h("form", { key: '194f5efe0ee3da77a72a14ff30cf801556f27117', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '1638b3fe29a6b6c52b2c861947b0e11c56921df6', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: 'c0d4f41e8f7970420eed55e505d3246b2e25da53', class: "separator-container" }, index.h("div", { key: 'd26ce615a68ee2b604a417a721257f5a42b47705', class: "separator" }), index.h("p", { key: 'd69ef46b52611c8dea4f9679742e17220e71d9b3' }, "Sign in to manage your property"), index.h("div", { key: '771dcef85a4ef7664bd05dbe521a46ae1d3e1e17', class: "separator" })), index.h("ir-input-text", { key: 'e616b37823561034ac44f685d430add0e4b1de31', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", LabelAvailable: false, placeholder: "Username" }, index.h("ir-icons", { key: '8de912adf662c44bb9d5f642376552f9863de1a4', name: "user", slot: "icon" })), index.h("div", { key: '4237fab7f2e925c071f50d8b1b053aa3f45b0dc6', class: 'position-relative' }, index.h("ir-input-text", { key: '18b7b4c1b8928b9a3b0e1231b7ad079fe938c750', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", LabelAvailable: false, label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '25dd85a4ce2f5033742f1124dbcb7d2d803d42ee', name: "key", slot: "icon" })), index.h("button", { key: '87584834465264409db1a6579f130569db601a61', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: 'ddae5f402cdfcc76565cbd97c9f90cac59608e77', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '9f8db450153c3c3c1ab7493f4d7a8776e9315af1', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPostion: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '8037e132bbfad1d780f75f5476f9bde5a6493e31', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '7ef225a9efdf77689800dd263852419cd549d865', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '681bc94b393ba646f970ffd7ee45d3e6571b4aa3', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: '36809bcb9020c69b1f240222b63130dced3092a6', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '17b4979db815ce0cd34e2d5e7fde103872368d52', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '30164a71177b4533c1c8187fdc0e8efabbab985e', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: '31774022760f58e4ffc360855585d26f8963eaef', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: 'e67b92f0fbe1c5753d0cc8d5dcc6164e8d53a1e3' }, index.h("a", { key: '115c0d067d27af5df424f248b019b7369a441edb', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_booking_details = IrBookingDetails;
exports.ir_login = IrLogin;

//# sourceMappingURL=ir-booking-details_2.cjs.entry.js.map