'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d0d7c4d0.js');
const moment = require('./moment-1780b03a.js');
const functions = require('./functions-c20a8dc4.js');
const axios = require('./axios-b86c5465.js');
const booking_service = require('./booking.service-07f301d9.js');
const room_service = require('./room.service-cc9c0583.js');
const locales_store = require('./locales.store-4301bbe8.js');
const calendarData = require('./calendar-data-fbe7f62b.js');
const icons = require('./icons-24fa0323.js');
const booking = require('./booking-287b38fc.js');
const payment_service = require('./payment.service-51fe37fa.js');
const irInterceptor_store = require('./ir-interceptor.store-ddd4cdfb.js');
const utils = require('./utils-5cd972af.js');
require('./Token-db8ba99b.js');
require('./index-5e99a1fe.js');

const irBookingDetailsCss = ".sc-ir-booking-details-h{overflow-x:hidden;--ir-dialog-max-width:20rem}.confirmed.sc-ir-booking-details{color:#fff;display:flex;align-items:center}.bg-ir-green.sc-ir-booking-details{background:#629a4c;padding:0.2rem 0.3rem}.h-28.sc-ir-booking-details{height:2rem}.mx-01.sc-ir-booking-details{--m:5px;margin-right:var(--m) !important;margin-left:var(--m) !important}.bg-ir-red.sc-ir-booking-details{background:#ff4961;padding:0.2rem 0.3rem}.bg-ir-orange.sc-ir-booking-details{background:#ff9149;padding:0.2rem 0.3rem}.date-margin.sc-ir-booking-details{margin-right:5px}.pickup-margin.sc-ir-booking-details{margin-bottom:7px !important}.header-date.sc-ir-booking-details{padding-left:5px !important}.pointer.sc-ir-booking-details{cursor:pointer}.sc-ir-booking-details:root{--sidebar-width:50rem}.sm-padding-right.sc-ir-booking-details{padding-right:0.2rem}.sm-padding-left.sc-ir-booking-details{padding-left:0.2rem}.sm-padding-top.sc-ir-booking-details{padding-top:0.2rem}.sm-padding-bottom.sc-ir-booking-details{padding-bottom:0.2rem}.info-notes.sc-ir-booking-details{list-style:none;padding-left:0}.light-blue-bg.sc-ir-booking-details{background-color:#acecff;padding:0.2rem 0.3rem}.iframeHeight.sc-ir-booking-details{height:17.5rem}.btn-outline.sc-ir-booking-details{background:transparent;border:1px solid #104064;color:#104064}.btn-outline.sc-ir-booking-details:hover,.btn-outline.sc-ir-booking-details:active{background:#104064;color:white}.dialog-title.sc-ir-booking-details{width:fit-content}.list-title.sc-ir-booking-details{margin:0;padding:0;font-size:14px;font-weight:bold;width:fit-content}.list-item.sc-ir-booking-details{margin:0;padding:0;font-size:14px;margin-left:5px;width:fit-content}.list-item.green.sc-ir-booking-details{color:#629a4c;font-weight:600}.list-item.red.sc-ir-booking-details{color:#ff4961;font-weight:600}";
const IrBookingDetailsStyle0 = irBookingDetailsCss;

const IrBookingDetails = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.toast = index.createEvent(this, "toast", 7);
        this.bookingChanged = index.createEvent(this, "bookingChanged", 7);
        this.closeSidebar = index.createEvent(this, "closeSidebar", 7);
        this.bookingService = new booking_service.BookingService();
        this.roomService = new room_service.RoomService();
        this.language = '';
        this.ticket = '';
        this.bookingNumber = '';
        this.baseurl = '';
        this.propertyid = undefined;
        this.is_from_front_desk = false;
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
    }
    componentDidLoad() {
        if (this.baseurl) {
            axios.axios.defaults.baseURL = this.baseurl;
        }
        if (this.ticket !== '') {
            calendarData.calendar_data.token = this.ticket;
            this.bookingService.setToken(this.ticket);
            this.roomService.setToken(this.ticket);
            this.initializeApp();
        }
    }
    async ticketChanged() {
        calendarData.calendar_data.token = this.ticket;
        this.bookingService.setToken(this.ticket);
        this.roomService.setToken(this.ticket);
        this.initializeApp();
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
        var _a;
        try {
            const [roomResponse, languageTexts, countriesList, bookingDetails] = await Promise.all([
                this.roomService.fetchData(this.propertyid, this.language),
                this.roomService.fetchLanguage(this.language),
                this.bookingService.getCountries(this.language),
                this.bookingService.getExposedBooking(this.bookingNumber, this.language),
            ]);
            this.property = roomResponse.My_Result;
            if (!locales_store.locales.entries) {
                locales_store.locales.entries = languageTexts.entries;
                locales_store.locales.direction = languageTexts.direction;
            }
            this.defaultTexts = languageTexts;
            this.countryNodeList = countriesList;
            if ((_a = bookingDetails.guest) === null || _a === void 0 ? void 0 : _a.country_id) {
                this.userCountry = this.countryNodeList.find(country => country.id === bookingDetails.guest.country_id) || null;
            }
            const { allowed_payment_methods: paymentMethods, currency, allowed_booking_sources, adult_child_constraints, calendar_legends } = roomResponse['My_Result'];
            this.calendarData = { currency, allowed_booking_sources, adult_child_constraints, legendData: calendar_legends };
            this.setRoomsData(roomResponse);
            const paymentCodesToShow = ['001', '004'];
            this.showPaymentDetails = paymentMethods.some(method => paymentCodesToShow.includes(method.code));
            this.guestData = bookingDetails.guest;
            this.bookingData = bookingDetails;
            this.rerenderFlag = !this.rerenderFlag;
        }
        catch (error) {
            console.error('Error initializing app:', error);
        }
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
                // this.printBooking();
                window.open(`https://x.igloorooms.com/manage/AcBookingEdit.aspx?IRID=${this.bookingData.system_id}&&PM=B&TK=${this.ticket}`);
                return;
            case 'receipt':
                // this.printBooking('invoice');
                window.open(`https://x.igloorooms.com/manage/AcBookingEdit.aspx?IRID=${this.bookingData.system_id}&&PM=I&TK=${this.ticket}`);
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
    handleSelectChange(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        const target = e.target;
        this.tempStatus = target.selectedValue;
    }
    openEditSidebar() {
        const sidebar = document.querySelector('ir-sidebar#editGuestInfo');
        sidebar.open = true;
    }
    printBooking(mode = 'default') {
        const bookingJson = JSON.stringify(this.bookingData);
        const propertyJson = JSON.stringify(this.property);
        const countriesJson = JSON.stringify(this.countryNodeList);
        const pageTitle = `Booking#${this.bookingNumber} | igloorooms`;
        const src = 'https://wb-cmp.igloorooms.com/backend/dist/ir-webcmp/ir-webcmp.esm.js';
        const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${pageTitle}</title>
          <link rel="shortcut icon" type="image/x-icon" href="https://x.igloorooms.com/app-assets/images/ico/favicon.ico">
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Playwrite+CU:wght@100..400&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
          <script type="module" src="${src}"></script>
          <style>
            body {
              font-family: "Roboto", sans-serif;
            }
          </style>
        </head>
        <body>
          <ir-booking-printing></ir-booking-printing>
          <script>
            document.addEventListener("DOMContentLoaded", function() {
              const bookingDetail = document.querySelector("ir-booking-printing");
              bookingDetail.booking = ${bookingJson};
              bookingDetail.property = ${propertyJson};
              bookingDetail.countries = ${countriesJson};
              bookingDetail.mode = '${mode}';
            });
          </script>
        </body>
      </html>
    `;
        try {
            const blob = new Blob([htmlContent], { type: 'text/html' });
            const url = URL.createObjectURL(blob);
            window.open(url);
        }
        catch (error) {
            console.error('Error creating or opening the generated HTML page:', error);
            alert('Failed to generate and open the HTML page. Please try again.');
        }
    }
    async updateStatus() {
        if (this.tempStatus !== '' && this.tempStatus !== null) {
            try {
                this.isUpdateClicked = true;
                await axios.axios.post(`/Change_Exposed_Booking_Status?Ticket=${this.ticket}`, {
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
    handleEditInitiated(e) {
        this.bookingItem = e.detail;
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
    async handleResetBookingData(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        if (e.detail) {
            return (this.bookingData = e.detail);
        }
        await this.resetBookingData();
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
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        if (!this.bookingData) {
            return null;
        }
        let confirmationBG = '';
        switch (this.bookingData.status.code) {
            case '001':
                confirmationBG = 'bg-ir-orange';
                break;
            case '002':
                confirmationBG = 'bg-ir-green';
                break;
            case '003':
                confirmationBG = 'bg-ir-red';
                break;
            case '004':
                confirmationBG = 'bg-ir-red';
                break;
        }
        return [
            index.h(index.Fragment, null, !this.is_from_front_desk && (index.h(index.Fragment, null, index.h("ir-toast", null), index.h("ir-interceptor", null)))),
            index.h("div", { class: "fluid-container p-1" }, index.h("div", { class: "d-flex flex-column p-0 mx-0 flex-lg-row align-items-md-center justify-content-between mt-1" }, index.h("div", { class: "m-0 p-0 mb-1 mb-lg-0 mt-md-0  d-flex justify-content-start align-items-center" }, index.h("p", { class: "font-size-large m-0 p-0" }, `${this.defaultTexts.entries.Lcz_Booking}#${this.bookingNumber}`), index.h("p", { class: "m-0 p-0 ml-1" }, !this.bookingData.is_direct && (index.h("span", { class: "mr-1 m-0" }, this.bookingData.channel_booking_nbr, " ")), index.h("span", { class: "date-margin" }, functions._formatDate(this.bookingData.booked_on.date)), functions._formatTime(this.bookingData.booked_on.hour.toString(), this.bookingData.booked_on.minute.toString()))), index.h("div", { class: "d-flex justify-content-end align-items-center" }, index.h("span", { class: `confirmed btn-sm m-0 mr-2 ${confirmationBG}` }, this.bookingData.status.description), this.bookingData.allowed_actions.length > 0 && this.bookingData.is_editable && (index.h(index.Fragment, null, index.h("ir-select", { selectContainerStyle: "h-28", selectStyles: "d-flex status-select align-items-center h-28", firstOption: locales_store.locales.entries.Lcz_Select, id: "update-status", size: "sm", "label-available": "false", data: this.bookingData.allowed_actions.map(b => ({ text: b.description, value: b.code })), textSize: "sm", class: "sm-padding-right m-0 " }), index.h("ir-button", { onClickHanlder: this.updateStatus.bind(this), btn_styles: "h-28", isLoading: this.isUpdateClicked, btn_disabled: this.isUpdateClicked, id: "update-status-btn", size: "sm", text: "Update" }))), calendarData.calendar_data.is_pms_enabled && (index.h("button", { type: "button", class: "btn btn-outline btn-sm ml-1", onClick: this.openPMSLogsDialog.bind(this) }, locales_store.locales.entries.Lcz_pms)), this.hasReceipt && index.h("ir-button", { variant: "icon", id: "receipt", icon_name: "reciept", class: "mx-1", style: { '--icon-size': '1.65rem' } }), this.hasPrint && index.h("ir-button", { variant: "icon", id: "print", icon_name: "print", class: "mr-1", style: { '--icon-size': '1.65rem' } }), this.hasDelete && index.h("ir-button", { variant: "icon", id: "book-delete", icon_name: "trash", class: "mr-1", style: Object.assign(Object.assign({}, icons.colorVariants.danger), { '--icon-size': '1.65rem' }) }), this.hasMenu && index.h("ir-button", { variant: "icon", class: "mr-1", id: "menu", icon_name: "menu_list", style: { '--icon-size': '1.65rem' } }), this.hasCloseButton && (index.h("ir-button", { id: "close", variant: "icon", style: { '--icon-size': '1.65rem' }, icon_name: "xmark", class: "ml-2", onClickHanlder: e => {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    this.closeSidebar.emit(null);
                } }))))),
            index.h("div", { class: "fluid-container p-1 text-left mx-0" }, index.h("div", { class: "row m-0" }, index.h("div", { class: "col-12 p-0 mx-0 pr-lg-1 col-lg-6" }, index.h("div", { class: "card" }, index.h("div", { class: "p-1" }, index.h("p", null, this.bookingData.property.name || ''), index.h("ir-label", { label: `${this.defaultTexts.entries.Lcz_Source}:`, value: this.bookingData.origin.Label, image: { src: this.bookingData.origin.Icon, alt: this.bookingData.origin.Label } }), index.h("ir-label", { label: `${this.defaultTexts.entries.Lcz_BookedBy}:`, value: `${this.bookingData.guest.first_name} ${this.bookingData.guest.last_name}`, iconShown: true }), this.bookingData.guest.mobile && index.h("ir-label", { label: `${this.defaultTexts.entries.Lcz_Phone}:`, value: this.renderPhoneNumber() }), index.h("ir-label", { label: `${this.defaultTexts.entries.Lcz_Email}:`, value: this.bookingData.guest.email }), this.bookingData.guest.alternative_email && (index.h("ir-label", { label: `${this.defaultTexts.entries.Lcz_AlternativeEmail}:`, value: this.bookingData.guest.alternative_email })), ((_b = (_a = this.bookingData) === null || _a === void 0 ? void 0 : _a.guest) === null || _b === void 0 ? void 0 : _b.address) && index.h("ir-label", { label: `${this.defaultTexts.entries.Lcz_Address}:`, value: this.bookingData.guest.address }), this.userCountry && (index.h("ir-label", { label: `${this.defaultTexts.entries.Lcz_Country}:`, value: this.userCountry.name, country: true, image: { src: this.userCountry.flag, alt: this.userCountry.name } })), this.bookingData.is_direct && index.h("ir-label", { label: `${this.defaultTexts.entries.Lcz_ArrivalTime}:`, value: this.bookingData.arrival.description }), this.bookingData.promo_key && index.h("ir-label", { label: `${this.defaultTexts.entries.Lcz_Coupon}:`, value: this.bookingData.promo_key }), this.bookingData.agent && index.h("ir-label", { label: `${(_c = this.defaultTexts.entries.Lcz_AgentCode) === null || _c === void 0 ? void 0 : _c.split(':')[0]}:`, value: this.bookingData.agent.name }), this.bookingData.is_in_loyalty_mode && !this.bookingData.promo_key && (index.h("div", { class: "d-flex align-items-center" }, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { fill: "#fc6c85", d: "M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" })), index.h("p", { class: "m-0 p-0 ml-1" }, this.defaultTexts.entries.Lcz_LoyaltyDiscountApplied))), this.bookingData.is_direct ? (index.h("ir-label", { class: 'm-0 p-0', label: `${this.defaultTexts.entries.Lcz_Note}:`, value: this.bookingData.remark })) : (index.h("ota-label", { class: 'm-0 p-0', label: `${this.defaultTexts.entries.Lcz_Note}:`, remarks: this.bookingData.ota_notes, maxVisibleItems: (_d = this.bookingData.ota_notes) === null || _d === void 0 ? void 0 : _d.length })), index.h("div", { class: "d-flex align-items-center justify-content-between" }, index.h("ir-label", { label: `${locales_store.locales.entries.Lcz_PrivateNote}:`, placeholder: locales_store.locales.entries.Lcz_VisibleToHotelOnly, value: booking.getPrivateNote(this.bookingData.extras), ignore_value: true }), index.h("ir-button", { variant: "icon", icon_name: "edit", style: icons.colorVariants.secondary, onClickHanlder: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.sidebarState = 'extra_note';
                } })))), index.h("div", { class: "font-size-large d-flex justify-content-between align-items-center mb-1" }, index.h("ir-date-view", { from_date: this.bookingData.from_date, to_date: this.bookingData.to_date }), this.hasRoomAdd && this.bookingData.is_direct && this.bookingData.is_editable && (index.h("ir-button", { id: "room-add", icon_name: "square_plus", variant: "icon", style: { '--icon-size': '1.5rem' } })
            // <ir-icon id="room-add">
            //   <svg xmlns="http://www.w3.org/2000/svg" height="20" width="17.5" viewBox="0 0 448 512" slot="icon">
            //     <path
            //       fill="#6b6f82"
            //       d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
            //     />
            //   </svg>
            // </ir-icon>
            )), index.h("div", { class: "card p-0 mx-0" }, this.bookingData.rooms.map((room, index$1) => {
                const mealCodeName = room.rateplan.name;
                const myRoomTypeFoodCat = room.roomtype.name;
                return [
                    index.h("ir-room", { isEditable: this.bookingData.is_editable, defaultTexts: this.defaultTexts, legendData: this.calendarData.legendData, roomsInfo: this.calendarData.roomsInfo, myRoomTypeFoodCat: myRoomTypeFoodCat, mealCodeName: mealCodeName, currency: this.bookingData.currency.code, hasRoomEdit: this.hasRoomEdit && this.bookingData.status.code !== '003' && this.bookingData.is_direct, hasRoomDelete: this.hasRoomDelete && this.bookingData.status.code !== '003' && this.bookingData.is_direct, hasCheckIn: this.hasCheckIn, hasCheckOut: this.hasCheckOut, bookingEvent: this.bookingData, bookingIndex: index$1, ticket: this.ticket, onDeleteFinished: this.handleDeleteFinish.bind(this) }),
                    // add separator if not last item with marginHorizontal and alignCenter
                    index$1 !== this.bookingData.rooms.length - 1 && index.h("hr", { class: "mr-2 ml-2 my-0 p-0" }),
                ];
            })), calendarData.calendar_data.pickup_service.is_enabled && this.bookingData.is_direct && this.bookingData.is_editable && (index.h("div", { class: "mb-1" }, index.h("div", { class: 'd-flex w-100 mb-1 align-items-center justify-content-between' }, index.h("p", { class: 'font-size-large p-0 m-0 ' }, locales_store.locales.entries.Lcz_Pickup), index.h("ir-button", { id: "pickup", variant: "icon", icon_name: "edit", style: Object.assign(Object.assign({}, icons.colorVariants.secondary), { '--icon-size': '1.5rem' }) })), this.bookingData.pickup_info && (index.h("div", { class: 'card' }, index.h("div", { class: 'p-1' }, index.h("div", { class: 'd-flex align-items-center py-0 my-0 pickup-margin' }, index.h("p", { class: 'font-weight-bold mr-1 py-0 my-0' }, locales_store.locales.entries.Lcz_Date, ": ", index.h("span", { class: 'font-weight-normal' }, moment.hooks(this.bookingData.pickup_info.date, 'YYYY-MM-DD').format('MMM DD, YYYY'))), this.bookingData.pickup_info.hour && this.bookingData.pickup_info.minute && (index.h("p", { class: 'font-weight-bold flex-fill py-0 my-0' }, locales_store.locales.entries.Lcz_Time, ":", index.h("span", { class: 'font-weight-normal' }, " ", functions._formatTime(this.bookingData.pickup_info.hour.toString(), this.bookingData.pickup_info.minute.toString())))), index.h("p", { class: 'font-weight-bold py-0 my-0' }, locales_store.locales.entries.Lcz_DueUponBooking, ":", ' ', index.h("span", { class: 'font-weight-normal' }, this.bookingData.pickup_info.currency.symbol, this.bookingData.pickup_info.total))), index.h("p", { class: 'font-weight-bold py-0 my-0' }, locales_store.locales.entries.Lcz_FlightDetails, ":", index.h("span", { class: 'font-weight-normal' }, " ", `${this.bookingData.pickup_info.details}`)), index.h("p", { class: 'py-0 my-0 pickup-margin' }, `${this.bookingData.pickup_info.selected_option.vehicle.description}`), index.h("p", { class: 'font-weight-bold py-0 my-0 pickup-margin' }, locales_store.locales.entries.Lcz_NbrOfVehicles, ":", index.h("span", { class: 'font-weight-normal' }, " ", `${this.bookingData.pickup_info.nbr_of_units}`)), index.h("p", { class: 'small py-0 my-0 pickup-margin' }, calendarData.calendar_data.pickup_service.pickup_instruction.description, calendarData.calendar_data.pickup_service.pickup_cancelation_prepayment.description))))))), index.h("div", { class: "col-12 p-0 m-0 pl-lg-1 col-lg-6" }, index.h("ir-payment-details", { defaultTexts: this.defaultTexts, bookingDetails: this.bookingData })))),
            index.h("ir-sidebar", { open: this.sidebarState !== null, side: 'right', id: "editGuestInfo", onIrSidebarToggle: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.sidebarState = null;
                }, showCloseButton: false }, this.renderSidbarContent()),
            index.h(index.Fragment, null, this.bookingItem && (index.h("igl-book-property", { allowedBookingSources: this.calendarData.allowed_booking_sources, adultChildConstraints: this.calendarData.adult_child_constraints, showPaymentDetails: this.showPaymentDetails, countryNodeList: this.countryNodeList, currency: this.calendarData.currency, language: this.language, propertyid: this.propertyid, bookingData: this.bookingItem, onCloseBookingWindow: () => this.handleCloseBookingWindow() }))),
            index.h(index.Fragment, null, index.h("ir-dialog", { ref: el => (this.dialogRef = el) }, index.h("div", { slot: "modal-body", class: "p-1" }, index.h("h3", { class: " text-left mb-1 dialog-title " }, locales_store.locales.entries.Lcz_PMS_Logs), !this.isPMSLogLoading && (index.h(index.Fragment, null, index.h("div", { class: "d-flex align-items-center" }, index.h("p", { class: "list-title" }, locales_store.locales.entries.Lcz_SentAt), ((_e = this.pms_status) === null || _e === void 0 ? void 0 : _e.sent_date) ? (index.h("p", { class: "list-item" }, (_f = this.pms_status) === null || _f === void 0 ? void 0 :
                _f.sent_date, " ", functions._formatTime((_g = this.pms_status) === null || _g === void 0 ? void 0 : _g.sent_hour.toString(), (_h = this.pms_status) === null || _h === void 0 ? void 0 : _h.sent_minute.toString()))) : (index.h("p", { class: `list-item ${((_j = this.pms_status) === null || _j === void 0 ? void 0 : _j.sent_date) ? 'green' : 'red'}` }, ((_k = this.pms_status) === null || _k === void 0 ? void 0 : _k.is_acknowledged) ? locales_store.locales.entries.Lcz_YES : locales_store.locales.entries.Lcz_NO))), index.h("div", { class: "d-flex align-items-center" }, index.h("h4", { class: "list-title" }, locales_store.locales.entries.Lcz_Acknowledged), index.h("p", { class: `list-item ${((_l = this.pms_status) === null || _l === void 0 ? void 0 : _l.is_acknowledged) ? 'green' : 'red'}` }, ((_m = this.pms_status) === null || _m === void 0 ? void 0 : _m.is_acknowledged) ? locales_store.locales.entries.Lcz_YES : locales_store.locales.entries.Lcz_NO))))))),
        ];
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
    get element() { return index.getElement(this); }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrBookingDetails.style = IrBookingDetailsStyle0;

const irBookingExtraNoteCss = ".sc-ir-booking-extra-note-h{display:block}";
const IrBookingExtraNoteStyle0 = irBookingExtraNoteCss;

const IrBookingExtraNote = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeModal = index.createEvent(this, "closeModal", 7);
        this.resetBookingData = index.createEvent(this, "resetBookingData", 7);
        this.bookingService = new booking_service.BookingService();
        this.booking = undefined;
        this.isLoading = false;
        this.note = '';
    }
    componentWillLoad() {
        this.bookingService.setToken(calendarData.calendar_data.token);
        if (this.booking.extras) {
            this.setNote(booking.getPrivateNote(this.booking.extras));
        }
    }
    setNote(value) {
        this.note = value;
    }
    async savePrivateNote() {
        try {
            this.isLoading = true;
            let prevExtras = this.booking.extras || [];
            const newExtraObj = { key: 'private_note', value: this.note };
            if (prevExtras.length === 0) {
                prevExtras.push(newExtraObj);
            }
            else {
                const oldPrivateNoteIndex = prevExtras.findIndex(e => e.key === 'private_note');
                if (oldPrivateNoteIndex === -1) {
                    prevExtras.push(newExtraObj);
                }
                else {
                    prevExtras[oldPrivateNoteIndex] = newExtraObj;
                }
            }
            const res = await this.bookingService.doReservation({
                assign_units: true,
                is_pms: true,
                is_direct: true,
                is_in_loyalty_mode: false,
                promo_key: null,
                booking: this.booking,
                Is_Non_Technical_Change: true,
                extras: prevExtras,
            });
            this.resetBookingData.emit(res);
            this.closeModal.emit(null);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        return (index.h(index.Host, { key: '8a99f30caa83cc305f12313414525a79ce00a9a9', class: 'px-0' }, index.h("ir-title", { key: '8610153955b8b6c028d3ea1e356c9b4759722404', class: "px-1", onCloseSideBar: () => this.closeModal.emit(null), label: locales_store.locales.entries.Lcz_PrivateNote, displayContext: "sidebar" }), index.h("form", { key: 'cc38235b6551d47ac46f1d0a6c557e56b099116d', class: 'px-1', onSubmit: e => {
                e.preventDefault();
                this.savePrivateNote();
            } }, index.h("ir-textarea", { key: 'e11897b1b0e74b1942b6774c7d2f351f0a130707', placeholder: locales_store.locales.entries.Lcz_PrivateNote_MaxChar, label: "", value: this.note, maxLength: 150, onTextChange: e => this.setNote(e.detail) }), index.h("div", { key: '608827c29b8c89bb71877bf6a57c95c1dc959ed7', class: 'd-flex flex-column flex-sm-row mt-3' }, index.h("ir-button", { key: '7a1fd52b3d09de83e94c816310f76f82c59922b3', onClickHanlder: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `mb-1 mb-sm-0 flex-fill  mr-sm-1'}`, icon: "", text: locales_store.locales.entries.Lcz_Cancel, btn_color: "secondary" }), index.h("ir-button", { key: '84c8e36f5e3dd035dfff316e5a64564a18e12a45', btn_styles: "justify-content-center align-items-center", class: 'm-0 flex-fill text-center ml-sm-1', icon: "", isLoading: this.isLoading, text: locales_store.locales.entries.Lcz_Save, btn_color: "primary", btn_type: "submit" })))));
    }
};
IrBookingExtraNote.style = IrBookingExtraNoteStyle0;

const irDialogCss = ":host{display:block;margin:0;padding:0;box-sizing:border-box}.backdrop{opacity:0;background:rgba(0, 0, 0, 0.2);position:fixed;inset:0;z-index:99999998}.backdrop[data-state='opened']{animation:overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards}.backdrop[data-state='closed']{opacity:0;pointer-events:none}.modal-container{box-sizing:border-box;margin:0;box-shadow:hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;position:fixed;z-index:99999999;overflow-y:auto;top:50%;left:50%;background:white;transform:translate(-50%, -50%);width:90%;min-height:fit-content;height:fit-content;max-width:var(--ir-dialog-max-width, 40rem);max-height:85vh;border-radius:8px;padding:0;animation:contentShow 300ms cubic-bezier(0.16, 1, 0.3, 1)}.modal-footer ::slotted(*){flex-direction:row;align-items:center;justify-content:end;gap:8px;--ir-btn-width:inherit}.modal-footer{--ir-btn-width:100%}.modal-title ::slotted(*){font-size:18px;font-weight:600;color:#101828;margin-bottom:8px}.modal-body ::slotted(*){font-size:14px;font-weight:400;color:#475467;padding:0;margin:0}@keyframes overlayShow{from{opacity:0}to{opacity:1}}@keyframes contentShow{from{opacity:0;transform:translate(-50%, -48%) scale(0.96)}to{opacity:1;transform:translate(-50%, -50%) scale(1)}}.dialog-close-button{position:absolute;top:15px;right:15px}";
const IrDialogStyle0 = irDialogCss;

const IrDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.openChange = index.createEvent(this, "openChange", 7);
        this.open = false;
        this.isOpen = false;
    }
    componentWillLoad() {
        if (this.open) {
            this.openModal();
        }
    }
    componentDidLoad() {
        this.prepareFocusTrap();
    }
    async openModal() {
        this.isOpen = true;
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            this.prepareFocusTrap();
        }, 10);
        this.openChange.emit(this.isOpen);
    }
    async closeModal() {
        console.log('close');
        if (!this.isOpen) {
            return;
        }
        document.body.style.overflow = 'visible';
        this.isOpen = false;
        this.openChange.emit(this.isOpen);
    }
    handleOpenChange() {
        if (this.open) {
            this.openModal();
        }
        else {
            this.closeModal();
        }
    }
    prepareFocusTrap() {
        const focusableElements = 'button,ir-dropdown ,[href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        const focusableContent = this.el.shadowRoot.querySelectorAll(focusableElements);
        // console.log(focusableContent);
        if (focusableContent.length === 0)
            return;
        this.firstFocusableElement = focusableContent[0];
        this.lastFocusableElement = focusableContent[focusableContent.length - 1];
        this.firstFocusableElement.focus();
    }
    handleKeyDown(ev) {
        if (!this.isOpen) {
            return;
        }
        let isTabPressed = ev.key === 'Tab';
        if (ev.key === 'Escape' && this.isOpen) {
            this.closeModal();
        }
        if (!isTabPressed) {
            return;
        }
        // If focus is about to leave the last focusable element, redirect it to the first.
        if (!ev.shiftKey && document.activeElement === this.lastFocusableElement) {
            this.firstFocusableElement.focus();
            ev.preventDefault();
        }
        // If focus is about to leave the first focusable element, redirect it to the last.
        if (ev.shiftKey && document.activeElement === this.firstFocusableElement) {
            this.lastFocusableElement.focus();
            ev.preventDefault();
        }
    }
    disconnectedCallback() {
        document.body.style.overflow = 'visible';
    }
    render() {
        return (index.h(index.Host, { key: '3511667200957171c3fe0be5a4c03e717e707771' }, index.h("div", { key: '526ca2ac7eac5c488b8275b6c00c2b055b082aa6', class: "backdrop", "data-state": this.isOpen ? 'opened' : 'closed', onClick: () => this.closeModal() }), this.isOpen && (index.h("div", { key: '1e3305889396d693c78e676beb53fe75fbe0e867', class: "modal-container", tabIndex: -1, role: "dialog", "aria-labelledby": "dialog1Title", "aria-describedby": "dialog1Desc" }, index.h("ir-icon", { key: 'ac08b963210487a63cc243f2bf06f2751b159265', id: "close", class: "dialog-close-button", onIconClickHandler: () => this.closeModal() }, index.h("svg", { key: '3f3989deedb2ca7cf97fd2fe66680df743a59a09', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 18, width: 18 }, index.h("path", { key: '4285baf1096b63b8e20e0d902c9bfc20592a12e0', fill: "#104064", class: "currentColor", d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" }))), index.h("div", { key: '214c3578d4a0de2db2a8405bb9789cd2a2177df6', class: 'modal-title', id: "dialog1Title" }, index.h("slot", { key: 'a701ed05eb4c0a6a30f84b7ae51bbb328342d6ca', name: "modal-title" })), index.h("div", { key: '5ed13b9dbcd26d74d5651f1141d2f25932d1fece', class: "modal-body", id: "dialog1Desc" }, index.h("slot", { key: 'fb455a4e40d5842e7bacd0e9d0bbaafb0a3bac2b', name: "modal-body" })), index.h("div", { key: '24e5a0809e2e6526eddf2bfe79c7e1338e7ebd00', class: "modal-footer" }, index.h("slot", { key: 'facb31cb09ec697f1952946ab90e2ce72353194d', name: "modal-footer" }))))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "open": ["handleOpenChange"]
    }; }
};
IrDialog.style = IrDialogStyle0;

const irGuestInfoCss = ".input-group-text.sc-ir-guest-info{min-width:10rem;text-align:left}.mobilePrefixSelect.sc-ir-guest-info{border-right-width:0;border-top-right-radius:0;border-bottom-right-radius:0}.mobilePrefixInput.sc-ir-guest-info{border-top-left-radius:0;border-bottom-left-radius:0}.check-container.sc-ir-guest-info{position:relative;cursor:pointer;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:flex;align-items:center}.check-container.sc-ir-guest-info input.sc-ir-guest-info{position:relative;opacity:0;cursor:pointer;height:0;width:0}.check-container.sc-ir-guest-info .checkmark.sc-ir-guest-info{position:relative;top:0;left:0;height:20px;width:20px;border:1px solid #cacfe7;border-radius:4px;transition:all 0.3s ease}.check-container.sc-ir-guest-info input.sc-ir-guest-info:checked~.checkmark.sc-ir-guest-info{background-color:#1e9ff2;border-color:#1e9ff2}.checkmark.sc-ir-guest-info:after{content:'';position:absolute;display:none}.check-container.sc-ir-guest-info input.sc-ir-guest-info:checked~.checkmark.sc-ir-guest-info:after{display:block}.check-label.sc-ir-guest-info{margin-left:10px !important}.check-container.sc-ir-guest-info .checkmark.sc-ir-guest-info:after{left:6px;top:3px;width:6px;height:10px;border:solid white;border-width:0 2px 2px 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.ir-card-header.sc-ir-guest-info{width:100%;border-bottom:1px solid #e4e5ec}.close-icon.sc-ir-guest-info{margin:0}.border-theme.sc-ir-guest-info{border:1px solid #cacfe7}";
const IrGuestInfoStyle0 = irGuestInfoCss;

const GuestInfo = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeSideBar = index.createEvent(this, "closeSideBar", 7);
        this.resetBookingData = index.createEvent(this, "resetBookingData", 7);
        this.bookingService = new booking_service.BookingService();
        this.setupDataCountries = null;
        this.setupDataCountriesCode = null;
        this.defaultTexts = undefined;
        this.language = undefined;
        this.email = undefined;
        this.booking_nbr = undefined;
        this.countries = undefined;
        this.submit = false;
        this.guest = null;
        this.isLoading = false;
    }
    async componentWillLoad() {
        this.bookingService.setToken(calendarData.calendar_data.token);
        await this.init();
    }
    async init() {
        try {
            const [guest, countries] = await Promise.all([this.bookingService.fetchGuest(this.email), this.bookingService.getCountries(this.language)]);
            this.countries = countries;
            this.guest = guest;
        }
        catch (error) {
            console.log(error);
        }
    }
    handleInputChange(key, value) {
        this.guest = Object.assign(Object.assign({}, this.guest), { [key]: value });
    }
    async editGuest() {
        try {
            this.isLoading = true;
            await this.bookingService.editExposedGuest(this.guest, this.booking_nbr);
            this.closeSideBar.emit(null);
            this.resetBookingData.emit(null);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = false;
            console.log('done');
        }
    }
    render() {
        var _a, _b, _c, _d, _e, _f;
        if (!this.guest) {
            return null;
        }
        return [
            index.h("div", { class: "p-0" }, index.h("div", { class: "position-sticky mb-1 shadow-none p-0" }, index.h("div", { class: "d-flex align-items-center justify-content-between ir-card-header py-1 p-0" }, index.h("h3", { class: "card-title text-left font-medium-2 px-1 my-0" }, this.defaultTexts.entries.Lcz_GuestDetails), index.h("ir-icon", { class: "close close-icon px-1", onIconClickHandler: () => {
                    this.closeSideBar.emit(null);
                } }, index.h("svg", { slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, index.h("path", { d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" }))))), index.h("div", { class: "card-content collapse show" }, index.h("div", { class: "card-body pt-0 px-1" }, index.h("ir-input-text", { placeholder: "", label: this.defaultTexts.entries.Lcz_FirstName, name: "firstName", submited: this.submit, value: (_a = this.guest) === null || _a === void 0 ? void 0 : _a.first_name, required: true, onTextChange: e => this.handleInputChange('first_name', e.detail) }), index.h("ir-input-text", { placeholder: "", label: this.defaultTexts.entries.Lcz_LastName, name: "lastName", submited: this.submit, value: (_b = this.guest) === null || _b === void 0 ? void 0 : _b.last_name, required: true, onTextChange: e => this.handleInputChange('last_name', e.detail) }), index.h("ir-input-text", { placeholder: "", label: this.defaultTexts.entries.Lcz_Email, name: "email", submited: this.submit, value: (_c = this.guest) === null || _c === void 0 ? void 0 : _c.email, required: true, onTextChange: e => this.handleInputChange('email', e.detail) }), index.h("ir-input-text", { placeholder: "", label: this.defaultTexts.entries.Lcz_AlternativeEmail, name: "altEmail", value: (_d = this.guest) === null || _d === void 0 ? void 0 : _d.alternative_email, onTextChange: e => this.handleInputChange('alternative_email', e.detail) }), index.h("ir-select", { selectContainerStyle: "mb-1", required: true, name: "country", submited: this.submit, label: this.defaultTexts.entries.Lcz_Country, selectedValue: (_f = (_e = this.guest.country_id) === null || _e === void 0 ? void 0 : _e.toString()) !== null && _f !== void 0 ? _f : '', data: this.countries.map(item => {
                    return {
                        value: item.id.toString(),
                        text: item.name,
                    };
                }), firstOption: '...', onSelectChange: e => this.handleInputChange('country_id', e.detail) }), index.h("div", { class: "form-group mr-0" }, index.h("div", { class: "input-group row m-0 p-0" }, index.h("div", { class: `input-group-prepend col-3 p-0 text-dark border-none` }, index.h("label", { class: `input-group-text  border-theme flex-grow-1 text-dark  ` }, this.defaultTexts.entries.Lcz_MobilePhone, '*')), index.h("select", { class: ` form-control text-md  col-2 py-0 mobilePrefixSelect`, onInput: e => this.handleInputChange('country_phone_prefix', e.target.value), required: true }, index.h("option", { value: null }, "..."), this.countries.map(item => {
                var _a;
                return (index.h("option", { selected: ((_a = this.guest.country_phone_prefix) === null || _a === void 0 ? void 0 : _a.toString()) === item.phone_prefix.toString(), value: item.phone_prefix }, item.phone_prefix));
            })), index.h("input", { type: "text", required: true, value: this.guest.mobile, class: 'form-control flex-fill mobilePrefixInput', onInput: e => this.handleInputChange('mobile', e.target.value) }))), index.h("div", { class: 'p-0 m-0' }, index.h("label", { class: `check-container m-0 p-0` }, index.h("input", { class: 'm-0 p-0', type: "checkbox", name: "newsletter", checked: this.guest.subscribe_to_news_letter, onInput: e => this.handleInputChange('subscribe_to_news_letter', e.target.checked) }), index.h("span", { class: "checkmark m-0 p-0" }), index.h("span", { class: 'm-0 p-0  check-label' }, this.defaultTexts.entries.Lcz_Newsletter))), index.h("hr", null), index.h("ir-button", { isLoading: this.isLoading, btn_disabled: this.isLoading, btn_styles: "d-flex align-items-center justify-content-center", text: this.defaultTexts.entries.Lcz_Save, onClickHanlder: this.editGuest.bind(this), color: "btn-primary" })))),
        ];
    }
};
GuestInfo.style = IrGuestInfoStyle0;

const irLabelCss = ".logo.sc-ir-label{height:1.5rem;width:1.5rem}.sc-ir-label-h{display:flex;margin-bottom:5px;gap:5px;align-items:center}.icon.sc-ir-label{margin-left:3px;padding:0;margin-top:0;display:flex;align-items:center}.label_message.sc-ir-label{margin:0 3px;padding:0}.label_title.sc-ir-label{min-width:max-content}.label_placeholder.sc-ir-label{color:#cacfe7;padding:0 !important;margin:0 !important}.icon-container.sc-ir-label{margin:0;padding:0}.country.sc-ir-label{height:16px;width:23px;border-radius:3px}svg.sc-ir-label{margin:0;padding:0}";
const IrLabelStyle0 = irLabelCss;

const IrLabel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.editSidebar = index.createEvent(this, "editSidebar", 7);
        this.label = undefined;
        this.value = undefined;
        this.iconShown = false;
        this.image = undefined;
        this.country = false;
        this.imageStyle = '';
        this.icon_name = 'edit';
        this.icon_style = undefined;
        this.ignore_value = false;
        this.placeholder = undefined;
    }
    openEditSidebar() {
        this.editSidebar.emit();
    }
    render() {
        if (!this.placeholder && !this.value && !this.ignore_value) {
            return null;
        }
        return (index.h(index.Host, { class: this.image ? 'align-items-center' : '' }, index.h("strong", { class: "label_title" }, this.label), this.image && index.h("img", { src: this.image.src, class: `p-0 m-0 ${this.country ? 'country' : 'logo'} ${this.image.style}`, alt: this.image.src }), this.value ? index.h("p", { class: 'label_message' }, this.value) : index.h("p", { class: 'label_placeholder' }, this.placeholder), this.iconShown && (index.h("div", { class: "icon-container" }, index.h("ir-button", { variant: "icon", icon_name: this.icon_name, style: Object.assign(Object.assign({}, icons.colorVariants.secondary), { '--icon-size': '1.1rem' }), onClickHanlder: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openEditSidebar();
            } })))));
    }
};
IrLabel.style = IrLabelStyle0;

const irPaymentDetailsCss = ".sm-margin-right.sc-ir-payment-details{margin-right:5px !important;background:#000}.action_icons.sc-ir-payment-details{width:60px}.w-60.sc-ir-payment-details{width:100px;padding:0 5px}.payments-height.sc-ir-payment-details{height:30px}.payment_date.sc-ir-payment-details{width:100px}.iframeHeight.sc-ir-payment-details{height:max-content;height:22.5rem}.designation.sc-ir-payment-details{width:120px}.total-cost-container.sc-ir-payment-details{background:#7cbebe;color:white;padding:0.5rem;border-radius:5px}.payment-actions.sc-ir-payment-details{display:flex;align-items:center;justify-content:center;height:100%;gap:0.5rem}";
const IrPaymentDetailsStyle0 = irPaymentDetailsCss;

const IrPaymentDetails = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.resetBookingData = index.createEvent(this, "resetBookingData", 7);
        this.toast = index.createEvent(this, "toast", 7);
        this.paymentService = new payment_service.PaymentService();
        this.bookingService = new booking_service.BookingService();
        this.bookingDetails = undefined;
        this.defaultTexts = undefined;
        this.newTableRow = false;
        this.collapsedPayment = false;
        this.collapsedGuarantee = false;
        this.flag = false;
        this.confirmModal = false;
        this.toBeDeletedItem = undefined;
        this.paymentDetailsUrl = '';
        this.paymentExceptionMessage = '';
        this.modal_mode = null;
    }
    async componentWillLoad() {
        try {
            this.paymentService.setToken(calendarData.calendar_data.token);
            this.bookingService.setToken(calendarData.calendar_data.token);
            this.initializeItemToBeAdded();
        }
        catch (error) {
            if (this.bookingDetails.guest.cci) {
                return;
            }
            if (!this.bookingDetails.is_direct && this.bookingDetails.channel_booking_nbr) {
                this.paymentExceptionMessage = error;
            }
        }
    }
    initializeItemToBeAdded() {
        this.itemToBeAdded = {
            id: -1,
            date: moment.hooks().format('YYYY-MM-DD'),
            amount: null,
            currency: this.bookingDetails.currency,
            designation: '',
            reference: '',
        };
    }
    async _processPaymentSave() {
        if (this.itemToBeAdded.amount === null) {
            this.toast.emit({
                type: 'error',
                title: this.defaultTexts.entries.Lcz_EnterAmount,
                description: '',
                position: 'top-right',
            });
            return;
        }
        if (Number(this.itemToBeAdded.amount) > Number(this.bookingDetails.financial.due_amount)) {
            this.modal_mode = 'save';
            this.openModal();
            return;
        }
        this._handleSave();
    }
    async _handleSave() {
        try {
            await this.paymentService.AddPayment(this.itemToBeAdded, this.bookingDetails.booking_nbr);
            this.initializeItemToBeAdded();
            this.resetBookingData.emit(null);
        }
        catch (error) {
            console.log(error);
        }
    }
    handlePaymentInputChange(key, value, event) {
        if (key === 'amount') {
            if (!isNaN(value) || value === '') {
                if (value === '') {
                    this.itemToBeAdded = Object.assign(Object.assign({}, this.itemToBeAdded), { [key]: null });
                }
                else {
                    this.itemToBeAdded = Object.assign(Object.assign({}, this.itemToBeAdded), { [key]: parseFloat(value) });
                }
            }
            else if (event && event.target) {
                let inputElement = event.target;
                let inputValue = inputElement.value;
                inputValue = inputValue.replace(/[^\d-]|(?<!^)-/g, '');
                inputElement.value = inputValue;
            }
        }
        else {
            this.itemToBeAdded = Object.assign(Object.assign({}, this.itemToBeAdded), { [key]: value });
        }
    }
    async cancelPayment() {
        try {
            await this.paymentService.CancelPayment(this.toBeDeletedItem.id);
            const newPaymentArray = this.bookingDetails.financial.payments.filter((item) => item.id !== this.toBeDeletedItem.id);
            this.bookingDetails = Object.assign(Object.assign({}, this.bookingDetails), { financial: Object.assign(Object.assign({}, this.bookingDetails.financial), { payments: newPaymentArray }) });
            this.confirmModal = !this.confirmModal;
            this.resetBookingData.emit(null);
            this.toBeDeletedItem = null;
            this.modal_mode = null;
        }
        catch (error) {
            console.log(error);
        }
    }
    async handleConfirmModal(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (this.modal_mode === 'delete') {
            await this.cancelPayment();
        }
        else {
            await this._handleSave();
        }
    }
    openModal() {
        const modal = document.querySelector('.delete-record-modal');
        modal.openModal();
    }
    async handleCancelModal(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        try {
            if (this.modal_mode === 'save') {
                this.initializeItemToBeAdded();
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    handleBookingDetails() {
        if (this.newTableRow) {
            this.newTableRow = false;
        }
    }
    handleDateChange(e) {
        this.handlePaymentInputChange('date', e.detail.end.format('YYYY-MM-DD'));
    }
    _renderTableRow(item, rowMode = 'normal') {
        var _a;
        return (index.h(index.Fragment, null, index.h("tr", null, index.h("td", { class: 'border payments-height border-light border-bottom-0 text-center' }, rowMode === 'normal' ? (index.h("span", { class: "sm-padding-left" }, functions._formatDate(item.date))) : (index.h("ir-date-picker", { minDate: moment.hooks().add(-2, 'months').startOf('month').format('YYYY-MM-DD'), singleDatePicker: true, autoApply: true, onDateChanged: this.handleDateChange.bind(this) }))), index.h("td", { class: 'border payments-height border-light border-bottom-0 text-center ' }, rowMode === 'normal' ? (index.h("span", { class: "sm-padding-right" }, functions._formatAmount(item.amount, this.bookingDetails.currency.code))) : (index.h("input", { type: "text", class: "border-0  form-control py-0 m-0 w-100", value: this.itemToBeAdded.amount === null ? '' : Number(this.itemToBeAdded.amount).toFixed(2), onInput: event => this.handlePaymentInputChange('amount', +event.target.value, event) }))), index.h("td", { class: 'border payments-height border-light border-bottom-0 text-center' }, rowMode === 'normal' ? (index.h("span", { class: "sm-padding-left" }, item.designation)) : (index.h("input", { class: "border-0 w-100 form-control py-0 m-0", onInput: event => this.handlePaymentInputChange('designation', event.target.value), type: "text" }))), index.h("td", { rowSpan: 2, class: 'border payments-height border-light border-bottom-0 text-center' }, index.h("div", { class: 'payment-actions' }, rowMode === 'add' && (index.h("ir-button", { variant: "icon", icon_name: "save", style: icons.colorVariants.secondary, isLoading: rowMode === 'add' && irInterceptor_store.isRequestPending('/Do_Payment'), class: 'm-0', onClickHanlder: () => {
                this._processPaymentSave();
            } })), index.h("ir-button", { variant: "icon", icon_name: "trash", style: icons.colorVariants.danger, isLoading: ((_a = this.toBeDeletedItem) === null || _a === void 0 ? void 0 : _a.id) === (item === null || item === void 0 ? void 0 : item.id) && irInterceptor_store.isRequestPending('/Cancel_Payment'), onClickHanlder: rowMode === 'add'
                ? () => {
                    this.newTableRow = false;
                    this.initializeItemToBeAdded();
                }
                : () => {
                    this.modal_mode = 'delete';
                    this.toBeDeletedItem = item;
                    this.openModal();
                } })))), index.h("tr", null, index.h("td", { colSpan: 3, class: 'border border-light payments-height border-bottom-0 text-center' }, rowMode === 'normal' ? (index.h("span", { class: "sm-padding-left " }, item.reference)) : (index.h("input", { class: "border-0 w-100  form-control py-0 m-0", onKeyPress: event => {
                if (event.key === 'Enter') {
                    this.newTableRow = false;
                    this._handleSave();
                }
            }, onInput: event => this.handlePaymentInputChange('reference', event.target.value), type: "text" }))))));
    }
    bookingGuarantee() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3;
        if (this.bookingDetails.is_direct && !this.bookingDetails.guest.cci) {
            return null;
        }
        return (index.h("div", null, index.h("div", { class: "d-flex align-items-center" }, index.h("strong", { class: "mr-1" }, this.defaultTexts.entries.Lcz_BookingGuarantee), index.h("ir-button", { id: "drawer-icon", "data-toggle": "collapse", "data-target": `.guarrantee`, "aria-expanded": this.collapsedGuarantee ? 'true' : 'false', "aria-controls": "myCollapse", class: "sm-padding-right pointer", variant: "icon", icon_name: "credit_card", onClickHanlder: async () => {
                if (!this.bookingDetails.is_direct && this.bookingDetails.channel_booking_nbr && !this.bookingDetails.guest.cci) {
                    this.paymentDetailsUrl = await this.bookingService.getPCICardInfoURL(this.bookingDetails.booking_nbr);
                }
                this.collapsedGuarantee = !this.collapsedGuarantee;
            } })), index.h("div", { class: "collapse guarrantee " }, this.bookingDetails.guest.cci ? ([
            index.h("div", null, ((_b = (_a = this.bookingDetails) === null || _a === void 0 ? void 0 : _a.guest) === null || _b === void 0 ? void 0 : _b.cci) && 'Card:', " ", index.h("span", null, ((_e = (_d = (_c = this.bookingDetails) === null || _c === void 0 ? void 0 : _c.guest) === null || _d === void 0 ? void 0 : _d.cci) === null || _e === void 0 ? void 0 : _e.nbr) || ''), " ", ((_h = (_g = (_f = this.bookingDetails) === null || _f === void 0 ? void 0 : _f.guest) === null || _g === void 0 ? void 0 : _g.cci) === null || _h === void 0 ? void 0 : _h.expiry_month) && 'Expiry: ', index.h("span", null, ' ', ((_l = (_k = (_j = this.bookingDetails) === null || _j === void 0 ? void 0 : _j.guest) === null || _k === void 0 ? void 0 : _k.cci) === null || _l === void 0 ? void 0 : _l.expiry_month) || '', " ", ((_p = (_o = (_m = this.bookingDetails) === null || _m === void 0 ? void 0 : _m.guest) === null || _o === void 0 ? void 0 : _o.cci) === null || _p === void 0 ? void 0 : _p.expiry_year) && '/' + ((_s = (_r = (_q = this.bookingDetails) === null || _q === void 0 ? void 0 : _q.guest) === null || _r === void 0 ? void 0 : _r.cci) === null || _s === void 0 ? void 0 : _s.expiry_year))),
            index.h("div", null, ((_u = (_t = this.bookingDetails) === null || _t === void 0 ? void 0 : _t.guest) === null || _u === void 0 ? void 0 : _u.cci.holder_name) && 'Name:', " ", index.h("span", null, ((_x = (_w = (_v = this.bookingDetails) === null || _v === void 0 ? void 0 : _v.guest) === null || _w === void 0 ? void 0 : _w.cci) === null || _x === void 0 ? void 0 : _x.holder_name) || ''), ' ', ((_0 = (_z = (_y = this.bookingDetails) === null || _y === void 0 ? void 0 : _y.guest) === null || _z === void 0 ? void 0 : _z.cci) === null || _0 === void 0 ? void 0 : _0.cvc) && '- CVC:', " ", index.h("span", null, " ", ((_3 = (_2 = (_1 = this.bookingDetails) === null || _1 === void 0 ? void 0 : _1.guest) === null || _2 === void 0 ? void 0 : _2.cci) === null || _3 === void 0 ? void 0 : _3.cvc) || '')),
        ]) : this.paymentDetailsUrl ? (index.h("iframe", { src: this.paymentDetailsUrl, width: "100%", class: "iframeHeight", frameborder: "0", name: "payment" })) : (index.h("div", { class: "text-center" }, this.paymentExceptionMessage)))));
    }
    _renderDueDate(item) {
        return (index.h("tr", null, index.h("td", { class: 'pr-1' }, functions._formatDate(item.date)), index.h("td", { class: 'pr-1' }, functions._formatAmount(item.amount, this.bookingDetails.currency.code)), index.h("td", { class: 'pr-1' }, item.description), index.h("td", { class: "collapse font-size-small roomName" }, item.room)));
    }
    render() {
        var _a, _b, _c, _d;
        if (!this.bookingDetails.financial) {
            return null;
        }
        return [
            index.h("div", { class: "card m-0" }, index.h("div", { class: "p-1" }, this.bookingDetails.financial.gross_cost > 0 && this.bookingDetails.financial.gross_cost !== null && (index.h("div", { class: "mb-2 h4 total-cost-container" }, this.defaultTexts.entries.Lcz_TotalCost, ": ", index.h("span", null, functions._formatAmount(this.bookingDetails.financial.gross_cost, this.bookingDetails.currency.code)))), index.h("div", { class: "mb-2 h4" }, this.defaultTexts.entries.Lcz_DueBalance, ":", ' ', index.h("span", { class: "danger font-weight-bold" }, functions._formatAmount(this.bookingDetails.financial.due_amount, this.bookingDetails.currency.code))), this.bookingGuarantee(), index.h("div", { class: "mt-2" }, index.h("div", null, ((_b = (_a = this.bookingDetails.financial) === null || _a === void 0 ? void 0 : _a.due_dates) === null || _b === void 0 ? void 0 : _b.length) > 0 && (index.h(index.Fragment, null, index.h("div", { class: "d-flex align-items-center" }, index.h("strong", { class: "mr-1" }, this.defaultTexts.entries.Lcz_PaymentDueDates), index.h("ir-button", { id: "drawer-icon", "data-toggle": "collapse", "data-target": `.roomName`, "aria-expanded": this.collapsedPayment ? 'true' : 'false', "aria-controls": "myCollapse", variant: "icon", icon_name: this.collapsedPayment ? 'closed_eye' : 'open_eye', onClickHanlder: () => {
                    this.collapsedPayment = !this.collapsedPayment;
                }, style: { '--icon-size': '1.5rem' } })), index.h("table", null, (_c = this.bookingDetails.financial.due_dates) === null || _c === void 0 ? void 0 : _c.map(item => this._renderDueDate(item))))))), index.h("div", { class: "mt-2 d-flex  flex-column rounded payment-container" }, index.h("div", { class: "d-flex align-items-center justify-content-between" }, index.h("strong", null, this.defaultTexts.entries.Lcz_Payments), index.h("ir-button", { id: "add-payment", variant: "icon", icon_name: "square_plus", style: { '--icon-size': '1.5rem' }, onClickHanlder: () => {
                    this.newTableRow = true;
                } })), index.h("table", { class: "mt-1" }, index.h("thead", null, index.h("tr", null, index.h("th", { class: 'border border-light border-bottom-0 text-center payment_date' }, this.defaultTexts.entries.Lcz_Dates), index.h("th", { class: 'border border-light border-bottom-0 text-center w-60' }, this.defaultTexts.entries.Lcz_Amount), index.h("th", { class: 'border border-light border-bottom-0 text-center designation' }, this.defaultTexts.entries.Lcz_Designation), index.h("th", { class: 'border border-light border-bottom-0 text-center action_icons' }, index.h("span", { class: 'sr-only' }, "payment actions")))), index.h("tbody", null, (_d = this.bookingDetails.financial.payments) === null || _d === void 0 ? void 0 :
                _d.map((item) => this._renderTableRow(item)), this.newTableRow ? this._renderTableRow(null, 'add') : null))))),
            index.h("ir-modal", { item: this.toBeDeletedItem, class: 'delete-record-modal', modalTitle: this.defaultTexts.entries.Lcz_Confirmation, modalBody: this.modal_mode === 'delete' ? this.defaultTexts.entries.Lcz_IfDeletedPermantlyLost : this.defaultTexts.entries.Lcz_EnteringAmountGreaterThanDue, iconAvailable: true, icon: "ft-alert-triangle danger h1", leftBtnText: this.defaultTexts.entries.Lcz_Cancel, rightBtnText: this.modal_mode === 'delete' ? this.defaultTexts.entries.Lcz_Delete : this.defaultTexts.entries.Lcz_Confirm, leftBtnColor: "secondary", rightBtnColor: this.modal_mode === 'delete' ? 'danger' : 'primary', onConfirmModal: this.handleConfirmModal.bind(this), onCancelModal: this.handleCancelModal.bind(this) }),
        ];
    }
    static get watchers() { return {
        "bookingDetails": ["handleBookingDetails"]
    }; }
};
IrPaymentDetails.style = IrPaymentDetailsStyle0;

class PickupService {
    async savePickup(params, booking_nbr, is_remove) {
        try {
            const splitTime = params.arrival_time.split(':');
            await axios.axios.post(`/Do_Pickup?Ticket=${calendarData.calendar_data.token}`, {
                booking_nbr,
                is_remove,
                currency: params.currency,
                date: params.arrival_date,
                details: params.flight_details,
                hour: splitTime[0],
                minute: splitTime[1],
                nbr_of_units: params.number_of_vehicles,
                selected_option: params.selected_option,
                total: +params.due_upon_booking,
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    transformDefaultPickupData(data) {
        const arrival_time = data.hour && data.minute ? utils.renderTime(data.hour) + ':' + utils.renderTime(data.minute) : '';
        return {
            arrival_date: data.date,
            arrival_time,
            currency: data.currency,
            due_upon_booking: data.total.toFixed(2),
            flight_details: data.details,
            location: data.selected_option.location.id,
            number_of_vehicles: data.nbr_of_units,
            selected_option: data.selected_option,
            vehicle_type_code: data.selected_option.vehicle.code,
        };
    }
    getAvailableLocations(message) {
        let locations = [];
        calendarData.calendar_data.pickup_service.allowed_options.forEach(option => {
            if (locations.filter(location => location.value === option.location.id).length === 0) {
                locations.push({
                    text: message + ' ' + option.location.description,
                    value: option.location.id,
                });
            }
        });
        return locations;
    }
    validateForm(params) {
        if (params.arrival_time.split(':').length !== 2) {
            return {
                error: true,
                cause: 'arrival_time',
            };
        }
        if (params.flight_details === '') {
            return {
                error: true,
                cause: 'flight_details',
            };
        }
        if (params.vehicle_type_code === '') {
            return {
                error: true,
                cause: 'vehicle_type_code',
            };
        }
        if (params.number_of_vehicles === 0) {
            return {
                error: true,
                cause: 'number_of_vehicles',
            };
        }
        return { error: false };
    }
    getNumberOfVehicles(capacity, numberOfPersons) {
        let total_number_of_vehicles = Math.ceil(numberOfPersons / capacity);
        let startNumber = total_number_of_vehicles > 1 ? total_number_of_vehicles : 1;
        let bonus_number = total_number_of_vehicles > 1 ? 2 : 3;
        return Array.from({ length: total_number_of_vehicles + bonus_number }, (_, i) => startNumber + i);
    }
    getPickUpPersonStatus(code) {
        const getCodeDescription = calendarData.calendar_data.pickup_service.allowed_pricing_models.find(model => model.code === code);
        if (!getCodeDescription) {
            return null;
        }
        return getCodeDescription.description;
    }
    updateDue(params) {
        const getCodeDescription = this.getPickUpPersonStatus(params.code);
        if (!getCodeDescription) {
            return;
        }
        if (getCodeDescription === 'Person') {
            return params.amount * params.numberOfPersons;
        }
        else {
            return params.amount * params.number_of_vehicles;
        }
    }
}

const irPickupCss = ".sc-ir-pickup-h{display:block}.custom-card-container.sc-ir-pickup{display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #e4e5ec}.card-title.sc-ir-pickup{flex:1}.border-theme.sc-ir-pickup{border:1px solid #cacfe7}";
const IrPickupStyle0 = irPickupCss;

const IrPickup = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeModal = index.createEvent(this, "closeModal", 7);
        this.resetBookingData = index.createEvent(this, "resetBookingData", 7);
        this.pickupService = new PickupService();
        this.defaultPickupData = undefined;
        this.numberOfPersons = 0;
        this.bookingNumber = undefined;
        this.isLoading = false;
        this.allowedOptionsByLocation = [];
        this.pickupData = {
            location: -1,
            flight_details: '',
            due_upon_booking: '',
            number_of_vehicles: 1,
            vehicle_type_code: '',
            currency: undefined,
            arrival_time: '',
            arrival_date: moment.hooks().format('YYYY-MM-DD'),
            selected_option: undefined,
        };
        this.vehicleCapacity = [];
        this.cause = null;
    }
    componentWillLoad() {
        if (this.defaultPickupData) {
            const transformedData = this.pickupService.transformDefaultPickupData(this.defaultPickupData);
            this.vehicleCapacity = this.pickupService.getNumberOfVehicles(transformedData.selected_option.vehicle.capacity, this.numberOfPersons);
            this.allowedOptionsByLocation = calendarData.calendar_data.pickup_service.allowed_options.filter(option => option.location.id === transformedData.location);
            this.pickupData = Object.assign({}, transformedData);
        }
    }
    handleLocationChange(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const value = event.detail;
        if (value === '') {
            this.updatePickupData('location', -1);
        }
        if (value !== '') {
            this.allowedOptionsByLocation = calendarData.calendar_data.pickup_service.allowed_options.filter(option => option.location.id.toString() === value);
            let locationChoice = this.allowedOptionsByLocation[0];
            if (!locationChoice) {
                return;
            }
            this.vehicleCapacity = this.pickupService.getNumberOfVehicles(locationChoice.vehicle.capacity, this.numberOfPersons);
            this.pickupData = Object.assign(Object.assign({}, this.pickupData), { location: value, selected_option: locationChoice, number_of_vehicles: this.vehicleCapacity[0], due_upon_booking: this.pickupService
                    .updateDue({
                    amount: locationChoice.amount,
                    code: locationChoice.pricing_model.code,
                    numberOfPersons: this.numberOfPersons,
                    number_of_vehicles: this.vehicleCapacity[0],
                })
                    .toFixed(2), vehicle_type_code: locationChoice.vehicle.code, currency: locationChoice.currency });
            const input = this.el.querySelector('#pickup-time');
            if (!input) {
                setTimeout(() => {
                    this.initializeInputMask();
                }, 100);
            }
        }
    }
    initializeInputMask() {
        const input = this.el.querySelector('#pickup-time');
        // if (this.pickupData) {
        //   (input as HTMLInputElement).value = this.pickupData.arrival_time;
        // }
        if (input) {
            Inputmask('Hh:Mm', {
                placeholder: 'HH:mm',
                definitions: {
                    H: {
                        validator: '[0-2]',
                    },
                    h: {
                        validator: function (ch, maskset, pos) {
                            var firstDigit = maskset.buffer[pos - 1];
                            if (firstDigit === '2') {
                                return /[0-3]/.test(ch);
                            }
                            else {
                                return /[0-9]/.test(ch);
                            }
                        },
                    },
                    M: {
                        validator: '[0-5]',
                    },
                    m: {
                        validator: '[0-9]',
                    },
                },
                insertMode: true,
                showMaskOnHover: false,
                inputmode: 'numeric',
                alias: 'datetime',
                oncomplete: () => {
                    this.updatePickupData('arrival_time', input.value);
                },
                oncleared: () => {
                    this.updatePickupData('arrival_time', '');
                },
                onincomplete: () => {
                    this.updatePickupData('arrival_time', input.value);
                },
            }).mask(input);
        }
    }
    handleVehicleQuantityChange(e) {
        if (e.detail === '') {
            return;
        }
        const value = +e.detail;
        this.pickupData = Object.assign(Object.assign({}, this.pickupData), { number_of_vehicles: value, due_upon_booking: this.pickupService
                .updateDue({
                amount: this.pickupData.selected_option.amount,
                code: this.pickupData.selected_option.pricing_model.code,
                numberOfPersons: this.numberOfPersons,
                number_of_vehicles: value,
            })
                .toFixed(2) });
    }
    componentDidLoad() {
        if (this.defaultPickupData) {
            this.initializeInputMask();
        }
    }
    handleVehicleTypeChange(e) {
        if (e.detail === '') {
            this.pickupData = Object.assign(Object.assign({}, this.pickupData), { due_upon_booking: '', vehicle_type_code: '' });
            return;
        }
        let locationChoice = calendarData.calendar_data.pickup_service.allowed_options.find(option => option.location.id === +this.pickupData.location && option.vehicle.code === e.detail);
        if (!locationChoice) {
            return;
        }
        this.vehicleCapacity = [...this.pickupService.getNumberOfVehicles(locationChoice.vehicle.capacity, this.numberOfPersons)];
        this.pickupData = Object.assign(Object.assign({}, this.pickupData), { selected_option: locationChoice, number_of_vehicles: this.vehicleCapacity[0], due_upon_booking: this.pickupService
                .updateDue({
                amount: locationChoice.amount,
                code: locationChoice.pricing_model.code,
                numberOfPersons: this.numberOfPersons,
                number_of_vehicles: this.vehicleCapacity[0],
            })
                .toFixed(2), vehicle_type_code: locationChoice.vehicle.code });
    }
    updatePickupData(key, value) {
        this.pickupData = Object.assign(Object.assign({}, this.pickupData), { [key]: value });
    }
    async savePickup() {
        try {
            this.isLoading = true;
            const isValid = this.pickupService.validateForm(this.pickupData);
            if (isValid.error) {
                this.cause = isValid.cause;
                return;
            }
            if (this.cause) {
                this.cause = null;
            }
            await this.pickupService.savePickup(this.pickupData, this.bookingNumber, this.defaultPickupData !== null && this.pickupData.location === -1);
            this.resetBookingData.emit(null);
            this.closeModal.emit(null);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        return (index.h(index.Host, { key: '1a16cd01e1a53928198351fb8df42ab7eb48e151', class: 'p-0' }, index.h("ir-title", { key: 'bc65f0f9840cc48ffd60bcf5fb97f8c88ec5aa0b', class: "px-1", onCloseSideBar: () => this.closeModal.emit(null), label: locales_store.locales.entries.Lcz_Pickup, displayContext: "sidebar" }), index.h("section", { key: '0bd9a297725d16f2efd268e03cfdf28b1a464d4f', class: 'px-1' }, index.h("ir-select", { key: '6d12bee7ab4e6d1817d2dd4dc6eb72c59b069c47', selectedValue: this.pickupData.location, selectContainerStyle: "mb-1", onSelectChange: this.handleLocationChange.bind(this), firstOption: locales_store.locales.entries.Lcz_Pickup_NoThankYou, class: 'm-0 mb-1', LabelAvailable: false, data: this.pickupService.getAvailableLocations(locales_store.locales.entries.Lcz_Pickup_YesFrom) }), this.pickupData.location > 0 && (index.h(index.Fragment, { key: '66fd053fc91e9b1063525f4b4c3910caf5a9a047' }, index.h("div", { key: '5b8bb91de330c28e1c37360fbb2de36c387238c1', class: 'd-flex' }, index.h("div", { key: '4d2463c71612ea0eaede7850123c0f85b0e106db', class: "form-group  mr-1" }, index.h("div", { key: 'e77482b75b762e9510a9dcdfe1e9a8907247e35b', class: "input-group row m-0" }, index.h("div", { key: '360036ba36ddcd15367654168bfe1cd92ebf999d', class: `input-group-prepend col-5 p-0 text-dark border-0` }, index.h("label", { key: '72a346a5955e35e0e2b4281c2721c3828dd714fe', class: `input-group-text  flex-grow-1 text-dark border-theme ` }, locales_store.locales.entries.Lcz_ArrivalDate)), index.h("div", { key: 'ad3178048605b7cae379071cc12b71aef7dc5597', class: "form-control form-control-md col-7 d-flex align-items-center pl-0" }, index.h("ir-date-picker", { key: 'f96c523a4463f3494d0808eb673f7d25c89ace56', minDate: moment.hooks().format('YYYY-MM-DD'), autoApply: true,
            // format="ddd, DD M YYYY"
            singleDatePicker: true, onDateChanged: evt => {
                this.updatePickupData('arrival_date', evt.detail.start.format('YYYY-MM-DD'));
            } })))), index.h("div", { key: 'f1894927286f17060785c2ece3e8b2bc95373c91', class: "form-group" }, index.h("div", { key: '2f5d4720db00d222495fecb53c8aea0fbd36c8e0', class: "input-group  row m-0" }, index.h("div", { key: 'd242b0363e7adcf67bdbc984a5fe88ee4e797c97', class: `input-group-prepend col-4 col-sm-3 p-0 text-dark border-0` }, index.h("label", { key: '67ce35b9c0555e1d60fa6b757686bafdbcb74812', htmlFor: "pickup", class: `input-group-text flex-grow-1 text-dark border-theme` }, locales_store.locales.entries.Lcz_Time)), index.h("input", { key: '93cd1de67b1deeda6383e9f54a6c6f822537dd2b', type: "text", value: this.pickupData.arrival_time, id: "pickup-time", class: `form-control col-8 col-sm-4 ${this.cause === 'arrival_time' && 'border-danger'}` })))), index.h("ir-input-text", { key: '9990c6481707e709605dfc5e477f1ab516fbed94', value: this.pickupData.flight_details, label: locales_store.locales.entries.Lcz_FlightDetails, onTextChange: e => this.updatePickupData('flight_details', e.detail), placeholder: "", inputStyles: this.cause === 'flight_details' ? 'border-danger' : '' }), index.h("ir-select", { key: '0469049ab068038b196c1564f60c18f528eeedcd', selectContainerStyle: "mb-1", selectStyles: this.cause === 'vehicle_type_code' ? 'border-danger' : '', onSelectChange: this.handleVehicleTypeChange.bind(this), firstOption: locales_store.locales.entries.Lcz_Select, selectedValue: this.pickupData.vehicle_type_code, class: 'm-0', LabelAvailable: false, data: this.allowedOptionsByLocation.map(option => ({
                text: option.vehicle.description,
                value: option.vehicle.code,
            })) }), index.h("div", { key: '64cd045786dc033c8e54c58d89591fe5d7c4f6ac', class: 'd-flex flex-column flex-md-row' }, index.h("ir-select", { key: 'b904dc1984a1d5ae540d7d399866cd7d3f2c9b29', labelBorder: "theme", selectContainerStyle: "mb-1", onSelectChange: this.handleVehicleQuantityChange.bind(this), selectStyles: this.cause === 'number_of_vehicles' ? 'border-danger' : '', selectedValue: this.pickupData.number_of_vehicles, labelWidth: 7, class: 'm-0  mb-md-0 mr-md-1 flex-fill', label: locales_store.locales.entries.Lcz_NbrOfVehicles, data: this.vehicleCapacity.map(i => ({
                text: i,
                value: i,
            })) }), index.h("ir-input-text", { key: '873f2625b3c9a88e2ef5cd09772d08a3ecba7342', labelBorder: "theme", readonly: true, value: this.pickupData.due_upon_booking, labelWidth: 7, label: `${locales_store.locales.entries.Lcz_DueUponBooking}  ${this.pickupData.currency.symbol}`, placeholder: "", class: "" })))), index.h("div", { key: '4442b23bec54beda7adce3e0480835a497c7cfa6', class: 'd-flex flex-column flex-sm-row mt-3' }, index.h("ir-button", { key: 'e3bb21067b6ba2f4e39c446d6371d45b04ced325', onClick: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `mb-1 mb-sm-0 flex-fill  ${this.defaultPickupData || this.pickupData.location !== -1 ? 'mr-sm-1' : ''}`, icon: "", text: locales_store.locales.entries.Lcz_Cancel, btn_color: "secondary" }), (this.defaultPickupData || this.pickupData.location !== -1) && (index.h("ir-button", { key: '705f0329720a22275bbe9ffaed023e5e650fc23c', btn_styles: "justify-content-center align-items-center", class: 'm-0 flex-fill text-center', icon: "", isLoading: this.isLoading, text: locales_store.locales.entries.Lcz_Save, btn_color: "primary", onClick: this.savePickup.bind(this) }))))));
    }
    get el() { return index.getElement(this); }
};
IrPickup.style = IrPickupStyle0;

const irRoomCss = ".light-blue-bg.sc-ir-room{background:#acecff;padding:0.3rem 0.5rem;border-radius:5px}.payment-container.sc-ir-room{position:absolute;right:1rem;height:fit-content}.sc-ir-room-h{position:relative}.sm-mr.sc-ir-room{margin-right:3px}.subtotal_row.sc-ir-room{padding-top:8px}.room_actions_btns.sc-ir-room{gap:0.5rem}.night-cost.sc-ir-room{color:#7cbebe}.mx-0-5.sc-ir-room{margin-left:2px !important;margin-right:2px !important}.tax-width.sc-ir-room{font-size:10px}.sm-mb-1.sc-ir-room{margin-bottom:5px !important}.sm-mt-1.sc-ir-room{margin-top:5px !important}.mx-01.sc-ir-room{--m:5px;margin-right:var(--m) !important;margin-left:var(--m) !important}";
const IrRoomStyle0 = irRoomCss;

const IrRoom = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.deleteFinished = index.createEvent(this, "deleteFinished", 7);
        this.pressCheckIn = index.createEvent(this, "pressCheckIn", 7);
        this.pressCheckOut = index.createEvent(this, "pressCheckOut", 7);
        this.editInitiated = index.createEvent(this, "editInitiated", 7);
        this.bookingEvent = undefined;
        this.bookingIndex = undefined;
        this.isEditable = undefined;
        this.mealCodeName = undefined;
        this.myRoomTypeFoodCat = undefined;
        this.currency = 'USD';
        this.legendData = undefined;
        this.roomsInfo = undefined;
        this.collapsed = false;
        this.defaultTexts = undefined;
        this.ticket = undefined;
        this.hasRoomEdit = false;
        this.hasRoomDelete = false;
        this.hasRoomAdd = false;
        this.hasCheckIn = false;
        this.hasCheckOut = false;
        this.item = undefined;
        this.isLoading = false;
        this.isModelOpen = false;
    }
    componentWillLoad() {
        if (this.bookingEvent) {
            this.item = this.bookingEvent.rooms[this.bookingIndex];
        }
    }
    handleBookingEventChange() {
        this.item = this.bookingEvent.rooms[this.bookingIndex];
    }
    componentDidLoad() {
        this.modal = this.element.querySelector('ir-modal');
    }
    handleClick(e) {
        let target = e.target;
        if (target.id == 'checkin') {
            this.pressCheckIn.emit(this.item);
        }
        else if (target.id == 'checkout') {
            this.pressCheckOut.emit(this.item);
        }
    }
    getDateStr(date, locale = 'default') {
        return date.getDate() + ' ' + date.toLocaleString(locale, { month: 'short' }) + ' ' + date.getFullYear();
    }
    handleEditClick() {
        var _a, _b, _c, _d, _e, _f;
        this.editInitiated.emit({
            event_type: 'EDIT_BOOKING',
            ID: this.item['assigned_units_pool'],
            NAME: booking.formatName(this.item.guest.first_name, this.item.guest.last_name),
            EMAIL: this.bookingEvent.guest.email,
            PHONE: this.bookingEvent.guest.mobile,
            REFERENCE_TYPE: '',
            FROM_DATE: this.bookingEvent.from_date,
            TO_DATE: this.bookingEvent.to_date,
            TITLE: `${this.defaultTexts.entries.Lcz_EditBookingFor} ${(_b = (_a = this.item) === null || _a === void 0 ? void 0 : _a.roomtype) === null || _b === void 0 ? void 0 : _b.name} ${((_d = (_c = this.item) === null || _c === void 0 ? void 0 : _c.unit) === null || _d === void 0 ? void 0 : _d.name) || ''}`,
            defaultDateRange: {
                dateDifference: this.item.days.length,
                fromDate: new Date(this.item.from_date + 'T00:00:00'),
                fromDateStr: this.getDateStr(new Date(this.item.from_date + 'T00:00:00')),
                toDate: new Date(this.item.to_date + 'T00:00:00'),
                toDateStr: this.getDateStr(new Date(this.item.to_date + 'T00:00:00')),
                message: '',
            },
            bed_preference: this.item.bed_preference,
            adult_child_offering: this.item.rateplan.selected_variation.adult_child_offering,
            ADULTS_COUNT: this.item.rateplan.selected_variation.adult_nbr,
            ARRIVAL: this.bookingEvent.arrival,
            ARRIVAL_TIME: this.bookingEvent.arrival.description,
            BOOKING_NUMBER: this.bookingEvent.booking_nbr,
            cancelation: this.item.rateplan.cancelation,
            channel_booking_nbr: this.bookingEvent.channel_booking_nbr,
            CHILDREN_COUNT: this.item.rateplan.selected_variation.child_nbr,
            COUNTRY: this.bookingEvent.guest.country_id,
            ENTRY_DATE: this.bookingEvent.from_date,
            FROM_DATE_STR: this.bookingEvent.format.from_date,
            guarantee: this.item.rateplan.guarantee,
            GUEST: this.bookingEvent.guest,
            IDENTIFIER: this.item.identifier,
            is_direct: this.bookingEvent.is_direct,
            IS_EDITABLE: this.bookingEvent.is_editable,
            NO_OF_DAYS: this.item.days.length,
            NOTES: this.bookingEvent.remark,
            origin: this.bookingEvent.origin,
            POOL: this.item['assigned_units_pool'],
            PR_ID: (_e = this.item.unit) === null || _e === void 0 ? void 0 : _e.id,
            RATE: this.item.total,
            RATE_PLAN: this.item.rateplan.name,
            RATE_PLAN_ID: this.item.rateplan.id,
            RATE_TYPE: this.item.roomtype.id,
            ROOMS: this.bookingEvent.rooms,
            SOURCE: this.bookingEvent.source,
            SPLIT_BOOKING: false,
            STATUS: 'IN-HOUSE',
            TO_DATE_STR: this.bookingEvent.format.to_date,
            TOTAL_PRICE: this.bookingEvent.total,
            legendData: this.legendData,
            roomsInfo: this.roomsInfo,
            roomName: ((_f = this.item.unit) === null || _f === void 0 ? void 0 : _f.name) || '',
            PICKUP_INFO: this.bookingEvent.pickup_info,
        });
    }
    handleDeleteClick() {
        this.modal.openModal();
    }
    async deleteRoom() {
        try {
            this.isLoading = true;
            let oldRooms = [...this.bookingEvent.rooms];
            oldRooms = oldRooms.filter(room => room.identifier !== this.item.identifier);
            const body = {
                assign_units: true,
                check_in: true,
                is_pms: true,
                is_direct: true,
                booking: {
                    booking_nbr: this.bookingEvent.booking_nbr,
                    from_date: this.bookingEvent.from_date,
                    to_date: this.bookingEvent.to_date,
                    remark: this.bookingEvent.remark,
                    property: this.bookingEvent.property,
                    source: this.bookingEvent.source,
                    currency: this.bookingEvent.currency,
                    arrival: this.bookingEvent.arrival,
                    guest: this.bookingEvent.guest,
                    rooms: oldRooms,
                },
            };
            console.log('body:', body);
            const { data } = await axios.axios.post(`/DoReservation?Ticket=${this.ticket}`, body);
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            this.irModalRef.closeModal();
            this.deleteFinished.emit(this.item.identifier);
        }
        catch (error) {
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        var _a, _b;
        console.log(this.item);
        return (index.h(index.Host, { key: 'f1062c9872b2f20522303f10a2510df635b558c0', class: "p-1 d-flex m-0" }, index.h("ir-button", { key: 'f0ce9c0316a6bcc6c1ad774e3373f5d868eea8fd', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": `#roomCollapse-${(_a = this.item.identifier) === null || _a === void 0 ? void 0 : _a.split(' ').join('')}`, "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "myCollapse", class: "mr-1", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHanlder: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } }), index.h("div", { key: '80df37fa7c1d315282a3a839cd73704f8e874f18', class: "flex-fill m-0 " }, index.h("div", { key: 'fad417c28fbc4ed98549da5caa2d90e7da09291a', class: "d-flex align-items-start justify-content-between sm-mb-1" }, index.h("p", { key: '881c14e92c074f4f2a8e046eed2da2e70b5778ab', class: "m-0 p-0" }, index.h("strong", { key: '4182df778d4938a1d01199f3862a5c44e17340f2', class: "m-0 p-0" }, this.myRoomTypeFoodCat || '', " "), " ", this.mealCodeName, ' ', this.item.rateplan.is_non_refundable && ` - ${this.defaultTexts.entries.Lcz_NonRefundable}`, ' '), index.h("div", { key: '1e4bb5cf06b337ae089c561326ce29965981639c', class: "d-flex m-0 p-0 align-items-center room_actions_btns" }, index.h("span", { key: '389a7b6cdc506bd447dd1c96ca68fd37b5fd8c95', class: "p-0 m-0 font-weight-bold" }, functions._formatAmount(this.item['gross_total'], this.currency)), this.hasRoomEdit && this.isEditable && (index.h("ir-button", { key: 'f3fc6700b142bb5e147cb73c66c9c1385bd1c8f6', id: `roomEdit-${this.item.identifier}`, variant: "icon", icon_name: "edit",
            // class="mx-1"
            style: icons.colorVariants.secondary, onClickHanlder: this.handleEditClick.bind(this) })), this.hasRoomDelete && this.isEditable && (index.h("ir-button", { key: 'c6d8a9235661d36405cfc2eae5b37da8c0a0f427', variant: "icon", onClickHanlder: this.handleDeleteClick.bind(this), id: `roomDelete-${this.item.identifier}`, icon_name: "trash", style: icons.colorVariants.danger })))), index.h("div", { key: '99bdb3791ff3dbe4abf6047f3eac2a4c35108abe', class: "d-flex align-items-center sm-mb-1" }, index.h("ir-date-view", { key: '4be6a9121b4c3ce37c7a554d0d671dbd7c749c32', class: "mr-1", from_date: this.item.from_date, to_date: this.item.to_date, showDateDifference: false }), this.hasCheckIn && index.h("ir-button", { key: '15ee9952ee297584538a428dea304185c35ee816', id: "checkin", icon: "", class: "mr-1", btn_color: "info", size: "sm", text: "Check in" }), this.hasCheckOut && index.h("ir-button", { key: '26c03f1f7d2dad4a544900bfda53873301b67d54', id: "checkout", icon: "", btn_color: "info", size: "sm", text: "Check out" })), index.h("div", { key: '0c1966653b546f6708ac6108f38308d69d304382', class: 'd-flex justify-content-end' }, calendarData.calendar_data.is_frontdesk_enabled && this.item.unit && (index.h("span", { key: 'cd8182d04116a678b239d78747d9cda2c0cac7be', class: `light-blue-bg ${this.hasCheckIn || this.hasCheckOut ? 'mr-2' : ''} ` }, this.item.unit.name))), index.h("div", { key: '912f05f92507ddbec7bb9a95de919836a6cd4426' }, index.h("span", { key: '00ad3dc3f886598dd535c1937a00c8fa91d3ee8e', class: "mr-1" }, `${this.item.guest.first_name || ''} ${this.item.guest.last_name || ''}`), this.item.rateplan.selected_variation.adult_nbr > 0 && index.h("span", { key: '2693faaef3b167a39083ebd737183da0d2367259' }, " ", this.item.rateplan.selected_variation.adult_child_offering)), index.h("div", { key: '2b1f9b4c037ea55dd3c93f583672ba2892af56a7', class: "collapse", id: `roomCollapse-${(_b = this.item.identifier) === null || _b === void 0 ? void 0 : _b.split(' ').join('')}` }, index.h("div", { key: 'fc4499c75a3bbf788ac71dda24527a38135dcb61', class: "d-flex sm-mb-1 sm-mt-1" }, index.h("div", { key: '33878c8362f90c02a75620314a393ff82aaea5e4', class: " sm-padding-top" }, index.h("strong", { key: '5fd2e21d23fd3edc00a170a66afffe6ecc4b0131', class: "sm-padding-right" }, `${this.defaultTexts.entries.Lcz_Breakdown}:`)), index.h("div", { key: '83da363fa2e5cb6c1cd477f7db070b6813ab1ea2', class: 'flex-fill' }, index.h("table", { key: 'e74636c4e7b6c7d8b21c11b248deabe4df0e02bb' }, this.item.days.length > 0 &&
            this.item.days.map(item => {
                return (index.h("tr", null, index.h("td", { class: 'pr-2 text-right' }, functions._getDay(item.date)), index.h("td", { class: "text-right" }, functions._formatAmount(item.amount, this.currency)), item.cost > 0 && item.cost !== null && index.h("td", { class: "pl-2 text-left night-cost" }, functions._formatAmount(item.cost, this.currency))));
            }), index.h("tr", { key: '6170e172ed54264812a9f46a238b6a0031bed7fe', class: '' }, index.h("th", { key: '6ee7bba9e39dd75505faa8fe9d79ec2277e10225', class: "text-right pr-2 subtotal_row" }, this.defaultTexts.entries.Lcz_SubTotal), index.h("th", { key: '27c80a927a38ae38a76a4fd11e2d5163f549a769', class: "text-right subtotal_row" }, functions._formatAmount(this.item.total, this.currency)), this.item.gross_cost > 0 && this.item.gross_cost !== null && index.h("th", { key: '4283b378b8da104846c52fa81c620f8ecead041a', class: "pl-2 text-right night-cost" }, functions._formatAmount(this.item.cost, this.currency))), this.bookingEvent.is_direct ? (index.h(index.Fragment, null, (() => {
            const filtered_data = calendarData.calendar_data.taxes.filter(tx => tx.pct > 0);
            return filtered_data.map(d => {
                return (index.h("tr", null, index.h("td", { class: "text-right pr-2" }, d.is_exlusive ? this.defaultTexts.entries.Lcz_Excluding : this.defaultTexts.entries.Lcz_Including, " ", d.name, " (", d.pct, "%)"), index.h("td", { class: "text-right" }, functions._formatAmount((this.item.total * d.pct) / 100, this.currency)), this.item.gross_cost > 0 && this.item.gross_cost !== null && (index.h("td", { class: "pl-2 text-right night-cost" }, functions._formatAmount((this.item.cost * d.pct) / 100, this.currency)))));
            });
        })())) : (index.h(index.Fragment, null, (() => {
            const filtered_data = this.item.ota_taxes.filter(tx => tx.amount > 0);
            return filtered_data.map(d => {
                return (index.h("tr", null, index.h("td", { class: "text-right pr-2" }, d.is_exlusive ? this.defaultTexts.entries.Lcz_Excluding : this.defaultTexts.entries.Lcz_Including, " ", d.name), index.h("td", { class: "text-right" }, d.currency.symbol, d.amount)));
            });
        })()))))), index.h("div", { key: '4c1d5d6523ef3311c1d9a5c8d49e7635ca080a8c', class: "sm-mb-1", innerHTML: this.item.rateplan.cancelation || '' }), index.h("div", { key: '092b4aee812422f4ecc174874447c40e952b5e93', class: "sm-mb-1", innerHTML: this.item.rateplan.guarantee || '' }), this.bookingEvent.is_direct && index.h("ir-label", { key: '060dbc7440792085299ada31adeded24ca16d256', label: `${this.defaultTexts.entries.Lcz_MealPlan}:`, value: this.mealCodeName }))), index.h("ir-modal", { key: '36a40c97e5d083fcad064d786731c8b4fd24971d', autoClose: false, ref: el => (this.irModalRef = el), isLoading: this.isLoading, onConfirmModal: this.deleteRoom.bind(this), iconAvailable: true, icon: "ft-alert-triangle danger h1", leftBtnText: this.defaultTexts.entries.Lcz_Cancel, rightBtnText: this.defaultTexts.entries.Lcz_Delete, leftBtnColor: "secondary", rightBtnColor: "danger", modalTitle: this.defaultTexts.entries.Lcz_Confirmation, modalBody: `${this.defaultTexts.entries['Lcz_AreYouSureDoYouWantToRemove ']} ${this.item.roomtype.name} ${this.item.unit ? this.item.unit.name : ''} ${this.defaultTexts.entries.Lcz_FromThisBooking}` })));
    }
    get element() { return index.getElement(this); }
    static get watchers() { return {
        "bookingEvent": ["handleBookingEventChange"]
    }; }
};
IrRoom.style = IrRoomStyle0;

exports.ir_booking_details = IrBookingDetails;
exports.ir_booking_extra_note = IrBookingExtraNote;
exports.ir_dialog = IrDialog;
exports.ir_guest_info = GuestInfo;
exports.ir_label = IrLabel;
exports.ir_payment_details = IrPaymentDetails;
exports.ir_pickup = IrPickup;
exports.ir_room = IrRoom;

//# sourceMappingURL=ir-booking-details_8.cjs.entry.js.map