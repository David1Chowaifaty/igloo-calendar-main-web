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
import { m as buildSplitIndex } from './utils.js';
import { d as defineCustomElement$17 } from './igl-application-info2.js';
import { d as defineCustomElement$16 } from './igl-block-dates-view2.js';
import { d as defineCustomElement$15 } from './igl-book-property2.js';
import { d as defineCustomElement$14 } from './igl-book-property-footer2.js';
import { d as defineCustomElement$13 } from './igl-book-property-header2.js';
import { d as defineCustomElement$12 } from './igl-booking-form2.js';
import { d as defineCustomElement$11 } from './igl-booking-overview-page2.js';
import { d as defineCustomElement$10 } from './igl-date-range2.js';
import { d as defineCustomElement$$ } from './igl-property-booked-by2.js';
import { d as defineCustomElement$_ } from './igl-rate-plan2.js';
import { d as defineCustomElement$Z } from './igl-room-type2.js';
import { d as defineCustomElement$Y } from './ir-applicable-policies2.js';
import { d as defineCustomElement$X } from './ir-billing2.js';
import { d as defineCustomElement$W } from './ir-billing-drawer2.js';
import { d as defineCustomElement$V } from './ir-booking-billing-recipient2.js';
import { d as defineCustomElement$U } from './ir-booking-company-dialog2.js';
import { d as defineCustomElement$T } from './ir-booking-company-form2.js';
import { d as defineCustomElement$S } from './ir-booking-extra-note2.js';
import { d as defineCustomElement$R } from './ir-booking-guarantee2.js';
import { d as defineCustomElement$Q } from './ir-booking-header2.js';
import { d as defineCustomElement$P } from './ir-booking-status-tag2.js';
import { d as defineCustomElement$O } from './ir-button2.js';
import { d as defineCustomElement$N } from './ir-checkout-dialog2.js';
import { d as defineCustomElement$M } from './ir-country-picker2.js';
import { d as defineCustomElement$L } from './ir-custom-button2.js';
import { d as defineCustomElement$K } from './ir-custom-date-picker2.js';
import { d as defineCustomElement$J } from './ir-date-range2.js';
import { d as defineCustomElement$I } from './ir-date-view2.js';
import { d as defineCustomElement$H } from './ir-dialog2.js';
import { d as defineCustomElement$G } from './ir-drawer2.js';
import { d as defineCustomElement$F } from './ir-empty-state2.js';
import { d as defineCustomElement$E } from './ir-events-log2.js';
import { d as defineCustomElement$D } from './ir-extra-service2.js';
import { d as defineCustomElement$C } from './ir-extra-service-config2.js';
import { d as defineCustomElement$B } from './ir-extra-service-config-form2.js';
import { d as defineCustomElement$A } from './ir-extra-services2.js';
import { d as defineCustomElement$z } from './ir-guest-info-drawer2.js';
import { d as defineCustomElement$y } from './ir-guest-info-form2.js';
import { d as defineCustomElement$x } from './ir-icon2.js';
import { d as defineCustomElement$w } from './ir-icons2.js';
import { d as defineCustomElement$v } from './ir-input2.js';
import { d as defineCustomElement$u } from './ir-input-text2.js';
import { d as defineCustomElement$t } from './ir-interceptor2.js';
import { d as defineCustomElement$s } from './ir-invoice2.js';
import { d as defineCustomElement$r } from './ir-invoice-form2.js';
import { d as defineCustomElement$q } from './ir-label2.js';
import { d as defineCustomElement$p } from './ir-mobile-input2.js';
import { d as defineCustomElement$o } from './ir-otp2.js';
import { d as defineCustomElement$n } from './ir-otp-modal2.js';
import { d as defineCustomElement$m } from './ir-payment-details2.js';
import { d as defineCustomElement$l } from './ir-payment-folio2.js';
import { d as defineCustomElement$k } from './ir-payment-folio-form2.js';
import { d as defineCustomElement$j } from './ir-payment-item2.js';
import { d as defineCustomElement$i } from './ir-payment-summary2.js';
import { d as defineCustomElement$h } from './ir-payments-folio2.js';
import { d as defineCustomElement$g } from './ir-picker2.js';
import { d as defineCustomElement$f } from './ir-picker-item2.js';
import { d as defineCustomElement$e } from './ir-pickup2.js';
import { d as defineCustomElement$d } from './ir-pickup-form2.js';
import { d as defineCustomElement$c } from './ir-pickup-view2.js';
import { d as defineCustomElement$b } from './ir-pms-logs2.js';
import { d as defineCustomElement$a } from './ir-popover2.js';
import { d as defineCustomElement$9 } from './ir-reservation-information2.js';
import { d as defineCustomElement$8 } from './ir-room2.js';
import { d as defineCustomElement$7 } from './ir-room-guests2.js';
import { d as defineCustomElement$6 } from './ir-room-guests-form2.js';
import { d as defineCustomElement$5 } from './ir-spinner2.js';
import { d as defineCustomElement$4 } from './ir-toast2.js';
import { d as defineCustomElement$3 } from './ir-unit-tag2.js';
import { d as defineCustomElement$2 } from './ir-validator2.js';
import { d as defineCustomElement$1 } from './ota-label2.js';

const irBookingDetailsCss = ".sc-ir-booking-details-h{overflow-x:hidden;--ir-dialog-max-width:20rem;text-align:start;padding:var(--wa-space-l);position:relative;font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}.sc-ir-booking-details-h *.sc-ir-booking-details{box-sizing:border-box;font-family:inherit !important;font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}.font-medium.sc-ir-booking-details{font-weight:600}.sc-ir-booking-details-h th.sc-ir-booking-details{font-weight:600}.booking-details__date-view-header.sc-ir-booking-details{font-size:1.1rem !important}.booking-details__booking-info.sc-ir-booking-details{display:grid;padding:var(--wa-space-m);gap:var(--wa-space-l)}.booking-details__info-column.sc-ir-booking-details{display:flex;flex-direction:column;gap:var(--wa-space-l)}@media (min-width: 890px){.booking-details__booking-info.sc-ir-booking-details{grid-template-columns:repeat(2, 1fr)}}@media (min-width: 1024px){.booking-details__booking-info.sc-ir-booking-details{gap:var(--wa-space-xl)}}.card.room-group.sc-ir-booking-details{margin-bottom:1rem !important}.card.room-group.sc-ir-booking-details:last-child{margin-bottom:1.81rem !important}.h-28.sc-ir-booking-details{height:2rem}.mx-01.sc-ir-booking-details{--m:5px;margin-right:var(--m) !important;margin-left:var(--m) !important}.date-margin.sc-ir-booking-details{margin-right:5px}.pickup-margin.sc-ir-booking-details{margin-bottom:7px !important}.header-date.sc-ir-booking-details{padding-left:5px !important}.pointer.sc-ir-booking-details{cursor:pointer}.sc-ir-booking-details:root{--sidebar-width:50rem}.loading-container.sc-ir-booking-details{height:100%;width:100%;display:flex;justify-content:center;align-items:center;margin:0;padding:0}.sm-padding-right.sc-ir-booking-details{padding-right:0.2rem}.sm-padding-left.sc-ir-booking-details{padding-left:0.2rem}.sm-padding-top.sc-ir-booking-details{padding-top:0.2rem}.sm-padding-bottom.sc-ir-booking-details{padding-bottom:0.2rem}.info-notes.sc-ir-booking-details{list-style:none;padding-left:0}.light-blue-bg.sc-ir-booking-details{background-color:#acecff;padding:0.2rem 0.3rem}.iframeHeight.sc-ir-booking-details{height:17.5rem}.dialog-title.sc-ir-booking-details{width:fit-content}";
const IrBookingDetailsStyle0 = irBookingDetailsCss;

const IrBookingDetails = /*@__PURE__*/ proxyCustomElement(class IrBookingDetails extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.toast = createEvent(this, "toast", 7);
        this.bookingChanged = createEvent(this, "bookingChanged", 7);
        this.closeSidebar = createEvent(this, "closeSidebar", 7);
    }
    get element() { return this; }
    // Setup Data
    language = 'en';
    ticket = '';
    bookingNumber = '';
    propertyid;
    is_from_front_desk = false;
    p;
    // Booleans Conditions
    hasPrint = false;
    hasReceipt = false;
    hasDelete = false;
    hasMenu = false;
    // Room Booleans
    hasRoomEdit = false;
    hasRoomDelete = false;
    hasRoomAdd = false;
    hasCheckIn = false;
    hasCheckOut = false;
    hasCloseButton = false;
    bookingItem = null;
    statusData = [];
    showPaymentDetails;
    booking;
    countries;
    calendarData = {};
    // Guest Data
    guestData = null;
    // Rerender Flag
    rerenderFlag = false;
    sidebarState = null;
    sidebarPayload;
    isUpdateClicked = false;
    pms_status;
    isPMSLogLoading = false;
    paymentActions;
    property_id;
    selectedService;
    bedPreference;
    roomGuest;
    modalState = null;
    departureTime;
    paymentEntries;
    splitIndex;
    // Payment Event
    toast;
    bookingChanged;
    closeSidebar;
    bookingService = new BookingService();
    roomService = new RoomService();
    paymentService = new PaymentService();
    token = new Token();
    printingBaseUrl = 'https://gateway.igloorooms.com/PrintBooking/%1/printing?id=%2';
    // private printingBaseUrl = 'http://localhost:5863/%1/printing?id=%2';
    modalRef;
    paymentFolioRef;
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
        if (this.sidebarState === 'payment-folio') {
            this.paymentFolioRef.openFolio();
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
            case 'email':
                this.modalState = {
                    type: 'email',
                    message: locales.entries.Lcz_EmailBookingto.replace('%1', this.booking.guest.email),
                    loading: isRequestPending('/Send_Booking_Confirmation_Email'),
                };
                this.modalRef.openModal();
                return;
            case 'print':
                this.openPrintingScreen({ mode: 'printing' });
                return;
            case 'invoice':
                // this.openPrintingScreen({ mode: 'invoice' });
                this.sidebarState = 'invoice';
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
        const updatedRoom = { ...currentRoom, sharing_persons: guests };
        rooms[currentRoomIndex] = updatedRoom;
        this.booking = { ...this.booking, rooms: [...rooms] };
        this.splitIndex = buildSplitIndex(this.booking.rooms);
    }
    async handleResetBooking(e) {
        // e.stopPropagation();
        // e.stopImmediatePropagation();
        if (e.detail) {
            this.booking = e.detail;
            this.splitIndex = buildSplitIndex(this.booking.rooms);
            return;
        }
        await this.resetBooking();
    }
    handleEditExtraService(e) {
        this.selectedService = e.detail;
        console.log(this.selectedService);
        this.sidebarState = 'extra_service';
    }
    handleOpenPrintScreen(e) {
        this.openPrintingScreen(e.detail);
    }
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
    // private shouldFetchCancellationPenalty(): boolean {
    //   return this.booking.is_requested_to_cancel || this.booking.status.code === '003';
    // }
    async initializeApp() {
        try {
            const [roomResponse, languageTexts, countriesList, bookingDetails, setupEntries] = await Promise.all([
                this.roomService.getExposedProperty({ id: this.propertyid || 0, language: this.language, aname: this.p }),
                this.roomService.fetchLanguage(this.language),
                this.bookingService.getCountries(this.language),
                this.bookingService.getExposedBooking(this.bookingNumber, this.language),
                this.bookingService.getSetupEntriesByTableNameMulti(['_BED_PREFERENCE_TYPE', '_DEPARTURE_TIME', '_PAY_TYPE', '_PAY_TYPE_GROUP', '_PAY_METHOD']),
            ]);
            this.property_id = roomResponse?.My_Result?.id;
            const { bed_preference_type, departure_time, pay_type, pay_type_group, pay_method } = this.bookingService.groupEntryTablesResult(setupEntries);
            this.bedPreference = bed_preference_type;
            this.departureTime = departure_time;
            this.paymentEntries = { types: pay_type, groups: pay_type_group, methods: pay_method };
            // if (bookingDetails?.booking_nbr && bookingDetails?.currency?.id && bookingDetails.is_direct) {
            //   this.paymentService
            //     .GetExposedCancellationDueAmount({
            //       booking_nbr: bookingDetails.booking_nbr,
            //       currency_id: bookingDetails.currency.id,
            //     })
            //     .then(res => {
            //       this.paymentActions = res;
            //     });
            // }
            if (!locales?.entries) {
                locales.entries = languageTexts.entries;
                locales.direction = languageTexts.direction;
            }
            this.countries = countriesList;
            const myResult = roomResponse?.My_Result;
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
                this.showPaymentDetails = paymentMethods?.some(method => paymentCodesToShow.includes(method.code));
            }
            else {
                console.warn("Room response is missing 'My_Result'.");
            }
            // Set guest and booking data
            this.guestData = bookingDetails.guest;
            this.booking = bookingDetails;
            this.splitIndex = buildSplitIndex(this.booking.rooms);
        }
        catch (error) {
            console.error('Error initializing app:', error);
        }
    }
    async openPrintingScreen(options, version = 'new') {
        const { mode } = options;
        if (version === 'old') {
            if (mode === 'invoice') {
                return window.open(`https://x.igloorooms.com/manage/AcBookingEdit.aspx?IRID=${encodeURIComponent(this.booking.system_id)}&&PM=I&TK=${encodeURIComponent(this.ticket)}`);
            }
            return window.open(`https://x.igloorooms.com/manage/AcBookingEdit.aspx?IRID=${encodeURIComponent(this.booking.system_id)}&&PM=B&TK=${encodeURIComponent(this.ticket)}`);
        }
        // Start with base URL
        let url = this.printingBaseUrl;
        // Add mode safely
        url += `&mode=${encodeURIComponent(mode)}`;
        // Add ANY payload safely
        if ('payload' in options && options.payload) {
            const payload = options.payload;
            const safeParams = Object.entries(payload)
                .map(([key, value]) => {
                const safeKey = encodeURIComponent(key);
                const safeValue = encodeURIComponent(String(value));
                return `${safeKey}=${safeValue}`;
            })
                .join('&');
            url += `&${safeParams}`;
        }
        // Add token safely
        const { data } = await axios.post(`Get_ShortLiving_Token`);
        if (!data.ExceptionMsg) {
            url += `&token=${encodeURIComponent(data.My_Result)}`;
        }
        // Final: fully safe URL
        window.open(url);
    }
    handleCloseBookingWindow() {
        this.bookingItem = null;
    }
    handleDeleteFinish = (e) => {
        this.booking = { ...this.booking, rooms: this.booking.rooms.filter(room => room.identifier !== e.detail) };
        this.splitIndex = buildSplitIndex(this.booking.rooms);
    };
    async resetBooking() {
        try {
            const booking = await this.bookingService.getExposedBooking(this.bookingNumber, this.language);
            this.booking = { ...booking };
            this.splitIndex = buildSplitIndex(this.booking.rooms);
            this.bookingChanged.emit(this.booking);
        }
        catch (error) {
            console.log(error);
        }
    }
    async handleModalConfirm() {
        switch (this.modalState.type) {
            case 'email':
                await this.bookingService.sendBookingConfirmationEmail(this.booking.booking_nbr, this.language);
                break;
        }
        this.modalState = null;
        this.modalRef.closeModal();
    }
    computeRoomGroups(rooms) {
        const indexById = new Map();
        rooms.forEach((room, idx) => indexById.set(room.identifier, idx));
        if (!rooms.length) {
            return { groups: [], indexById, hasSplitGroups: false };
        }
        const groupSortKey = (groupRooms) => {
            let min = Number.MAX_SAFE_INTEGER;
            for (const r of groupRooms) {
                const ts = Date.parse(r?.from_date ?? '');
                if (!Number.isNaN(ts)) {
                    min = Math.min(min, ts);
                }
            }
            return min;
        };
        const splitIndex = this.splitIndex ?? buildSplitIndex(rooms);
        if (!splitIndex) {
            const sortedRooms = [...rooms].sort((a, b) => {
                const diff = Date.parse(a?.from_date ?? '') - Date.parse(b?.from_date ?? '');
                if (!Number.isNaN(diff) && diff !== 0) {
                    return diff;
                }
                return (indexById.get(a.identifier) ?? 0) - (indexById.get(b.identifier) ?? 0);
            });
            return { groups: [{ rooms: sortedRooms, order: 0, isSplit: false, sortKey: groupSortKey(sortedRooms) }], indexById, hasSplitGroups: false };
        }
        const roomsById = new Map(rooms.map(room => [room.identifier, room]));
        const grouped = [];
        const visited = new Set();
        for (const head of splitIndex.heads) {
            const chain = splitIndex.chainOf.get(head) ?? [head];
            const chainRooms = chain.map(id => roomsById.get(id)).filter((room) => Boolean(room));
            if (!chainRooms.length)
                continue;
            const chainHasSplitLink = chain.some(id => {
                const parent = splitIndex.parentOf.get(id);
                const children = splitIndex.childrenOf.get(id) ?? [];
                return Boolean(parent) || children.length > 0;
            }) || chainRooms.some(room => Boolean(room?.is_split));
            if (chainHasSplitLink) {
                chainRooms.forEach(room => visited.add(room.identifier));
                const order = Math.min(...chainRooms.map(room => indexById.get(room.identifier) ?? Number.MAX_SAFE_INTEGER));
                grouped.push({ rooms: chainRooms, order, sortKey: groupSortKey(chainRooms), isSplit: true });
            }
        }
        for (const room of rooms) {
            if (!visited.has(room.identifier)) {
                const order = indexById.get(room.identifier) ?? Number.MAX_SAFE_INTEGER;
                const singleGroup = [room];
                grouped.push({ rooms: singleGroup, order, sortKey: groupSortKey(singleGroup), isSplit: false });
            }
        }
        grouped.sort((a, b) => {
            if (a.sortKey !== b.sortKey) {
                return a.sortKey - b.sortKey;
            }
            return a.order - b.order;
        });
        const hasSplitGroups = grouped.some(group => group.isSplit);
        if (!hasSplitGroups) {
            const merged = grouped
                .map(group => group.rooms)
                .reduce((acc, curr) => acc.concat(curr), [])
                .sort((a, b) => {
                const diff = Date.parse(a?.from_date ?? '') - Date.parse(b?.from_date ?? '');
                if (!Number.isNaN(diff) && diff !== 0) {
                    return diff;
                }
                return (indexById.get(a.identifier) ?? 0) - (indexById.get(b.identifier) ?? 0);
            });
            return { groups: [{ rooms: merged, order: 0, sortKey: groupSortKey(merged), isSplit: false }], indexById, hasSplitGroups: false };
        }
        return { groups: grouped, indexById, hasSplitGroups: true };
    }
    renderRoomItem(room, bookingIndex, includeDepartureTime = true) {
        const showCheckin = this.handleRoomCheckin(room);
        const showCheckout = this.handleRoomCheckout(room);
        return (h("ir-room", { key: room.identifier, room: room, property_id: this.property_id, language: this.language, departureTime: this.departureTime, bedPreferences: this.bedPreference, isEditable: this.booking.is_editable, legendData: this.calendarData.legendData, roomsInfo: this.calendarData.roomsInfo, myRoomTypeFoodCat: room.roomtype.name, mealCodeName: room.rateplan.short_name, includeDepartureTime: includeDepartureTime, currency: this.booking.currency.symbol, hasRoomEdit: this.hasRoomEdit && this.booking.status.code !== '003' && this.booking.is_direct, hasRoomDelete: this.hasRoomDelete && this.booking.status.code !== '003' && this.booking.is_direct, hasCheckIn: showCheckin, hasCheckOut: showCheckout, booking: this.booking, bookingIndex: bookingIndex, onDeleteFinished: this.handleDeleteFinish }));
    }
    renderRooms() {
        const rooms = this.booking?.rooms ?? [];
        if (!rooms.length) {
            return null;
        }
        const { groups, indexById, hasSplitGroups } = this.computeRoomGroups(rooms);
        if (!hasSplitGroups) {
            const groupRooms = groups[0].rooms;
            return groupRooms.map((room, idx) => (h(Fragment, null, this.renderRoomItem(room, indexById.get(room.identifier) ?? idx), idx < groupRooms.length - 1 ? h("wa-divider", null) : null)));
        }
        return (h(Fragment, null, h("div", { class: "d-flex flex-column", style: { gap: '1rem' } }, groups.map((group, groupIdx) => {
            const isLastGroup = groupIdx === groups.length - 1;
            return (h("div", { class: `${isLastGroup ? '' : 'room-group'}`, key: `room-group-${group.order}-${groupIdx}` }, group.rooms.map((room, roomIdx) => (h(Fragment, null, this.renderRoomItem(room, indexById.get(room.identifier) ?? roomIdx, roomIdx === group.rooms.length - 1), roomIdx < group.rooms.length - 1 ? h("wa-divider", null) : null))), !isLastGroup && h("wa-divider", { style: { '--width': '3px' } })));
        }))));
    }
    render() {
        if (!this.booking) {
            return (h("div", { class: 'loading-container' }, h("ir-spinner", null)));
        }
        const roomsSection = this.renderRooms();
        return [
            h(Fragment, null, !this.is_from_front_desk && (h(Fragment, null, h("ir-toast", { style: { height: '0' } }), h("ir-interceptor", { style: { height: '0' } })))),
            h("ir-booking-header", { booking: this.booking, hasCloseButton: this.hasCloseButton, hasDelete: this.hasDelete, hasMenu: this.hasMenu, hasPrint: this.hasPrint, hasReceipt: this.hasReceipt, hasEmail: ['001', '002'].includes(this.booking?.status?.code) }),
            h("div", { class: "booking-details__booking-info" }, h("div", { class: "booking-details__info-column" }, h("ir-reservation-information", { countries: this.countries, booking: this.booking }), h("wa-card", null, h("ir-date-view", { class: "booking-details__date-view-header", slot: "header", from_date: this.booking.from_date, to_date: this.booking.to_date }), this.hasRoomAdd && this.booking.is_editable && (h(Fragment, null, h("wa-tooltip", { for: "room-add" }, "Add unit"), h("ir-custom-button", { slot: "header-actions", id: "room-add", appearance: 'plain', size: 'small', variant: 'neutral' }, h("wa-icon", { name: "plus", style: { fontSize: '1rem' }, label: "Add unit" })))), roomsSection), h("ir-pickup-view", { booking: this.booking }), h("section", null, h("ir-extra-services", { booking: { booking_nbr: this.booking.booking_nbr, currency: this.booking.currency, extra_services: this.booking.extra_services } }))), h("ir-payment-details", { class: "booking-details__info-column", propertyId: this.property_id, paymentEntries: this.paymentEntries, paymentActions: this.paymentActions, booking: this.booking })),
            h("ir-dialog", { label: "Send Email", onIrDialogHide: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.modalRef.closeModal();
                    this.modalState = null;
                }, ref: el => (this.modalRef = el) }, h("p", null, this.modalState?.message), h("div", { slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { "data-dialog": "close", size: "medium", appearance: "filled", variant: "neutral" }, locales.entries.Lcz_Cancel), h("ir-custom-button", { loading: isRequestPending('/Send_Booking_Confirmation_Email'), onClickHandler: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.handleModalConfirm();
                }, size: "medium", variant: "brand" }, locales.entries.Lcz_Confirm))),
            // <ir-sidebar
            //   open={this.sidebarState === 'room-guest'}
            //   side={'right'}
            //   id="editGuestInfo"
            //   style={{ '--sidebar-width': this.sidebarState === 'room-guest' ? '60rem' : undefined }}
            //   onIrSidebarToggle={e => {
            //     e.stopImmediatePropagation();
            //     e.stopPropagation();
            //     this.sidebarState = null;
            //   }}
            //   showCloseButton={false}
            // >
            //   {this.renderSidebarContent()}
            // </ir-sidebar>,
            h("ir-room-guests", { open: this.sidebarState === 'room-guest', countries: this.countries, language: this.language, identifier: this.sidebarPayload?.identifier, bookingNumber: this.booking.booking_nbr, roomName: this.sidebarPayload?.roomName, totalGuests: this.sidebarPayload?.totalGuests, sharedPersons: this.sidebarPayload?.sharing_persons, slot: "sidebar-body", checkIn: this.sidebarPayload?.checkin, onCloseModal: () => (this.sidebarState = null) }),
            h("ir-extra-service-config", { open: this.sidebarState === 'extra_service', service: this.selectedService, booking: { from_date: this.booking.from_date, to_date: this.booking.to_date, booking_nbr: this.booking.booking_nbr, currency: this.booking.currency }, slot: "sidebar-body", onCloseModal: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.sidebarState = null;
                    if (this.selectedService) {
                        this.selectedService = null;
                    }
                } }),
            h("ir-pickup", { open: this.sidebarState === 'pickup', bookingDates: { from: this.booking.from_date, to: this.booking.to_date }, defaultPickupData: this.booking.pickup_info, bookingNumber: this.booking.booking_nbr, numberOfPersons: this.booking.occupancy.adult_nbr + this.booking.occupancy.children_nbr, onCloseModal: () => {
                    this.sidebarState = null;
                } }),
            h("ir-billing-drawer", { open: this.sidebarState === 'invoice', onBillingClose: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.sidebarState = null;
                }, booking: this.booking }),
            h("ir-guest-info-drawer", { onGuestInfoDrawerClosed: () => {
                    this.sidebarState = null;
                }, booking_nbr: this.bookingNumber, email: this.booking?.guest.email, language: this.language, open: this.sidebarState === 'guest' }),
            h("ir-payment-folio", { style: { height: 'auto' }, bookingNumber: this.booking.booking_nbr, paymentEntries: this.paymentEntries, payment: this.sidebarPayload?.payment, mode: this.sidebarPayload?.mode, ref: el => (this.paymentFolioRef = el), onCloseModal: () => (this.sidebarState = null) }),
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
        "paymentEntries": [32],
        "splitIndex": [32]
    }, [[0, "openSidebar", "handleSideBarEvents"], [0, "clickHandler", "handleIconClick"], [0, "resetExposedCancellationDueAmount", "handleResetExposedCancellationDueAmount"], [0, "editInitiated", "handleEditInitiated"], [0, "updateRoomGuests", "handleRoomGuestsUpdate"], [0, "resetBookingEvt", "handleResetBooking"], [0, "editExtraService", "handleEditExtraService"], [0, "openPrintScreen", "handleOpenPrintScreen"]], {
        "ticket": ["ticketChanged"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-booking-details", "igl-application-info", "igl-block-dates-view", "igl-book-property", "igl-book-property-footer", "igl-book-property-header", "igl-booking-form", "igl-booking-overview-page", "igl-date-range", "igl-property-booked-by", "igl-rate-plan", "igl-room-type", "ir-applicable-policies", "ir-billing", "ir-billing-drawer", "ir-booking-billing-recipient", "ir-booking-company-dialog", "ir-booking-company-form", "ir-booking-extra-note", "ir-booking-guarantee", "ir-booking-header", "ir-booking-status-tag", "ir-button", "ir-checkout-dialog", "ir-country-picker", "ir-custom-button", "ir-custom-date-picker", "ir-date-range", "ir-date-view", "ir-dialog", "ir-drawer", "ir-empty-state", "ir-events-log", "ir-extra-service", "ir-extra-service-config", "ir-extra-service-config-form", "ir-extra-services", "ir-guest-info-drawer", "ir-guest-info-form", "ir-icon", "ir-icons", "ir-input", "ir-input-text", "ir-interceptor", "ir-invoice", "ir-invoice-form", "ir-label", "ir-mobile-input", "ir-otp", "ir-otp-modal", "ir-payment-details", "ir-payment-folio", "ir-payment-folio-form", "ir-payment-item", "ir-payment-summary", "ir-payments-folio", "ir-picker", "ir-picker-item", "ir-pickup", "ir-pickup-form", "ir-pickup-view", "ir-pms-logs", "ir-popover", "ir-reservation-information", "ir-room", "ir-room-guests", "ir-room-guests-form", "ir-spinner", "ir-toast", "ir-unit-tag", "ir-validator", "ota-label"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-booking-details":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBookingDetails);
            }
            break;
        case "igl-application-info":
            if (!customElements.get(tagName)) {
                defineCustomElement$17();
            }
            break;
        case "igl-block-dates-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$16();
            }
            break;
        case "igl-book-property":
            if (!customElements.get(tagName)) {
                defineCustomElement$15();
            }
            break;
        case "igl-book-property-footer":
            if (!customElements.get(tagName)) {
                defineCustomElement$14();
            }
            break;
        case "igl-book-property-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$13();
            }
            break;
        case "igl-booking-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$12();
            }
            break;
        case "igl-booking-overview-page":
            if (!customElements.get(tagName)) {
                defineCustomElement$11();
            }
            break;
        case "igl-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$10();
            }
            break;
        case "igl-property-booked-by":
            if (!customElements.get(tagName)) {
                defineCustomElement$$();
            }
            break;
        case "igl-rate-plan":
            if (!customElements.get(tagName)) {
                defineCustomElement$_();
            }
            break;
        case "igl-room-type":
            if (!customElements.get(tagName)) {
                defineCustomElement$Z();
            }
            break;
        case "ir-applicable-policies":
            if (!customElements.get(tagName)) {
                defineCustomElement$Y();
            }
            break;
        case "ir-billing":
            if (!customElements.get(tagName)) {
                defineCustomElement$X();
            }
            break;
        case "ir-billing-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$W();
            }
            break;
        case "ir-booking-billing-recipient":
            if (!customElements.get(tagName)) {
                defineCustomElement$V();
            }
            break;
        case "ir-booking-company-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$U();
            }
            break;
        case "ir-booking-company-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$T();
            }
            break;
        case "ir-booking-extra-note":
            if (!customElements.get(tagName)) {
                defineCustomElement$S();
            }
            break;
        case "ir-booking-guarantee":
            if (!customElements.get(tagName)) {
                defineCustomElement$R();
            }
            break;
        case "ir-booking-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$Q();
            }
            break;
        case "ir-booking-status-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$P();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$O();
            }
            break;
        case "ir-checkout-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$N();
            }
            break;
        case "ir-country-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$M();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$L();
            }
            break;
        case "ir-custom-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$K();
            }
            break;
        case "ir-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$J();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$I();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$H();
            }
            break;
        case "ir-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$G();
            }
            break;
        case "ir-empty-state":
            if (!customElements.get(tagName)) {
                defineCustomElement$F();
            }
            break;
        case "ir-events-log":
            if (!customElements.get(tagName)) {
                defineCustomElement$E();
            }
            break;
        case "ir-extra-service":
            if (!customElements.get(tagName)) {
                defineCustomElement$D();
            }
            break;
        case "ir-extra-service-config":
            if (!customElements.get(tagName)) {
                defineCustomElement$C();
            }
            break;
        case "ir-extra-service-config-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$B();
            }
            break;
        case "ir-extra-services":
            if (!customElements.get(tagName)) {
                defineCustomElement$A();
            }
            break;
        case "ir-guest-info-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$z();
            }
            break;
        case "ir-guest-info-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$y();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$x();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$w();
            }
            break;
        case "ir-input":
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
        case "ir-invoice":
            if (!customElements.get(tagName)) {
                defineCustomElement$s();
            }
            break;
        case "ir-invoice-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$r();
            }
            break;
        case "ir-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$q();
            }
            break;
        case "ir-mobile-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$p();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$o();
            }
            break;
        case "ir-otp-modal":
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
        case "ir-payment-folio-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "ir-payment-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-payment-summary":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-payments-folio":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-picker-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-pickup":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-pickup-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-pickup-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-pms-logs":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-popover":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-reservation-information":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-room":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-room-guests":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-room-guests-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-unit-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-validator":
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