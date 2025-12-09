import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { B as BookingListingService, u as updateUserSelection, b as booking_listing, s as setPaginationPageSize, o as onBookingListingChange, a as updatePaginationFromSelection, c as updateUserSelections, d as setPaginationPage } from './booking_listing.service.js';
import { R as RoomService } from './room.service.js';
import { R as isPrivilegedUser } from './utils.js';
import { T as Token } from './Token.js';
import { B as BookingService } from './booking.service.js';
import { P as PropertyService } from './property.service.js';
import { d as defineCustomElement$1r } from './igl-application-info2.js';
import { d as defineCustomElement$1q } from './igl-block-dates-view2.js';
import { d as defineCustomElement$1p } from './igl-book-property2.js';
import { d as defineCustomElement$1o } from './igl-book-property-container2.js';
import { d as defineCustomElement$1n } from './igl-book-property-footer2.js';
import { d as defineCustomElement$1m } from './igl-book-property-header2.js';
import { d as defineCustomElement$1l } from './igl-booking-form2.js';
import { d as defineCustomElement$1k } from './igl-booking-overview-page2.js';
import { d as defineCustomElement$1j } from './igl-date-range2.js';
import { d as defineCustomElement$1i } from './igl-property-booked-by2.js';
import { d as defineCustomElement$1h } from './igl-rate-plan2.js';
import { d as defineCustomElement$1g } from './igl-room-type2.js';
import { d as defineCustomElement$1f } from './ir-actions-cell2.js';
import { d as defineCustomElement$1e } from './ir-applicable-policies2.js';
import { d as defineCustomElement$1d } from './ir-autocomplete2.js';
import { d as defineCustomElement$1c } from './ir-balance-cell2.js';
import { d as defineCustomElement$1b } from './ir-billing2.js';
import { d as defineCustomElement$1a } from './ir-billing-drawer2.js';
import { d as defineCustomElement$19 } from './ir-booked-by-cell2.js';
import { d as defineCustomElement$18 } from './ir-booked-on-cell2.js';
import { d as defineCustomElement$17 } from './ir-booking-billing-recipient2.js';
import { d as defineCustomElement$16 } from './ir-booking-company-form2.js';
import { d as defineCustomElement$15 } from './ir-booking-details2.js';
import { d as defineCustomElement$14 } from './ir-booking-extra-note2.js';
import { d as defineCustomElement$13 } from './ir-booking-guarantee2.js';
import { d as defineCustomElement$12 } from './ir-booking-header2.js';
import { d as defineCustomElement$11 } from './ir-booking-listing-mobile-card2.js';
import { d as defineCustomElement$10 } from './ir-booking-listing-table2.js';
import { d as defineCustomElement$$ } from './ir-booking-number-cell2.js';
import { d as defineCustomElement$_ } from './ir-booking-status-tag2.js';
import { d as defineCustomElement$Z } from './ir-button2.js';
import { d as defineCustomElement$Y } from './ir-combobox2.js';
import { d as defineCustomElement$X } from './ir-country-picker2.js';
import { d as defineCustomElement$W } from './ir-custom-button2.js';
import { d as defineCustomElement$V } from './ir-custom-date-picker2.js';
import { d as defineCustomElement$U } from './ir-custom-input2.js';
import { d as defineCustomElement$T } from './ir-date-picker2.js';
import { d as defineCustomElement$S } from './ir-date-range2.js';
import { d as defineCustomElement$R } from './ir-date-view2.js';
import { d as defineCustomElement$Q } from './ir-dates-cell2.js';
import { d as defineCustomElement$P } from './ir-dialog2.js';
import { d as defineCustomElement$O } from './ir-drawer2.js';
import { d as defineCustomElement$N } from './ir-events-log2.js';
import { d as defineCustomElement$M } from './ir-extra-service2.js';
import { d as defineCustomElement$L } from './ir-extra-service-config2.js';
import { d as defineCustomElement$K } from './ir-extra-service-config-form2.js';
import { d as defineCustomElement$J } from './ir-extra-services2.js';
import { d as defineCustomElement$I } from './ir-guest-info-drawer2.js';
import { d as defineCustomElement$H } from './ir-guest-info-form2.js';
import { d as defineCustomElement$G } from './ir-icon2.js';
import { d as defineCustomElement$F } from './ir-icons2.js';
import { d as defineCustomElement$E } from './ir-input-text2.js';
import { d as defineCustomElement$D } from './ir-interceptor2.js';
import { d as defineCustomElement$C } from './ir-invoice2.js';
import { d as defineCustomElement$B } from './ir-invoice-form2.js';
import { d as defineCustomElement$A } from './ir-label2.js';
import { d as defineCustomElement$z } from './ir-listing-header2.js';
import { d as defineCustomElement$y } from './ir-loading-screen2.js';
import { d as defineCustomElement$x } from './ir-mobile-input2.js';
import { d as defineCustomElement$w } from './ir-otp2.js';
import { d as defineCustomElement$v } from './ir-otp-modal2.js';
import { d as defineCustomElement$u } from './ir-pagination2.js';
import { d as defineCustomElement$t } from './ir-payment-details2.js';
import { d as defineCustomElement$s } from './ir-payment-folio2.js';
import { d as defineCustomElement$r } from './ir-payment-folio-form2.js';
import { d as defineCustomElement$q } from './ir-payment-item2.js';
import { d as defineCustomElement$p } from './ir-payment-summary2.js';
import { d as defineCustomElement$o } from './ir-payments-folio2.js';
import { d as defineCustomElement$n } from './ir-phone-input2.js';
import { d as defineCustomElement$m } from './ir-picker2.js';
import { d as defineCustomElement$l } from './ir-picker-item2.js';
import { d as defineCustomElement$k } from './ir-pickup2.js';
import { d as defineCustomElement$j } from './ir-pickup-form2.js';
import { d as defineCustomElement$i } from './ir-pickup-view2.js';
import { d as defineCustomElement$h } from './ir-pms-logs2.js';
import { d as defineCustomElement$g } from './ir-popover2.js';
import { d as defineCustomElement$f } from './ir-price-input2.js';
import { d as defineCustomElement$e } from './ir-range-picker2.js';
import { d as defineCustomElement$d } from './ir-reservation-information2.js';
import { d as defineCustomElement$c } from './ir-room2.js';
import { d as defineCustomElement$b } from './ir-room-guests2.js';
import { d as defineCustomElement$a } from './ir-room-guests-form2.js';
import { d as defineCustomElement$9 } from './ir-select2.js';
import { d as defineCustomElement$8 } from './ir-spinner2.js';
import { d as defineCustomElement$7 } from './ir-status-activity-cell2.js';
import { d as defineCustomElement$6 } from './ir-toast2.js';
import { d as defineCustomElement$5 } from './ir-tooltip2.js';
import { d as defineCustomElement$4 } from './ir-unit-cell2.js';
import { d as defineCustomElement$3 } from './ir-unit-tag2.js';
import { d as defineCustomElement$2 } from './ir-validator2.js';
import { d as defineCustomElement$1 } from './ota-label2.js';

// src/utils/browserHistory.ts
/**
 * Read all current search params into a Record<string, string>
 */
function getAllParams() {
    const params = new URLSearchParams(window.location.search);
    const out = {};
    for (const [key, value] of params.entries()) {
        out[key] = value;
    }
    return out;
}

const irBookingListingCss = ".sc-ir-booking-listing-h{display:block;padding:var(--wa-space-l)}";
const IrBookingListingStyle0 = irBookingListingCss;

const IrBookingListing = /*@__PURE__*/ proxyCustomElement(class IrBookingListing extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    get el() { return this; }
    language = '';
    ticket = '';
    propertyid;
    rowCount = 20;
    p;
    baseUrl;
    userType;
    isLoading = false;
    editBookingItem = null;
    showCost = false;
    paymentEntries;
    payment;
    booking;
    bookingListingService = new BookingListingService();
    bookingService = new BookingService();
    roomService = new RoomService();
    propertyService = new PropertyService();
    token = new Token();
    listingModal;
    listingModalTimeout;
    allowedProperties;
    havePrivilege;
    paymentFolioRef;
    componentWillLoad() {
        if (this.baseUrl) {
            this.token.setBaseUrl(this.baseUrl);
        }
        updateUserSelection('end_row', this.rowCount);
        booking_listing.rowCount = this.rowCount;
        setPaginationPageSize(this.rowCount);
        if (this.ticket !== '') {
            booking_listing.token = this.ticket;
            this.token.setToken(this.ticket);
            this.initializeApp();
        }
        onBookingListingChange('userSelection', newValue => {
            updatePaginationFromSelection(newValue);
        });
        onBookingListingChange('bookings', newValue => {
            this.showCost = newValue.some(booking => booking.financial.gross_cost !== null && booking.financial.gross_cost > 0);
        });
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
        booking_listing.token = this.ticket;
        this.initializeApp();
    }
    async fetchBookings() {
        await this.bookingListingService.getExposedBookings({
            ...booking_listing.userSelection,
            is_to_export: false,
        });
    }
    async initializeApp() {
        try {
            this.isLoading = true;
            this.havePrivilege = isPrivilegedUser(this.userType);
            let propertyId = this.propertyid;
            if (!this.havePrivilege) {
                if (!this.propertyid && !this.p) {
                    throw new Error('Property ID or username is required');
                }
                if (!propertyId) {
                    const propertyData = await this.roomService.getExposedProperty({
                        id: 0,
                        aname: this.p,
                        language: this.language,
                        is_backend: true,
                    });
                    propertyId = propertyData.My_Result.id;
                }
            }
            const parallelRequests = [
                this.bookingService.getSetupEntriesByTableNameMulti(['_PAY_TYPE', '_PAY_TYPE_GROUP', '_PAY_METHOD']),
                this.bookingListingService.getExposedBookingsCriteria(this.havePrivilege ? null : propertyId),
                this.roomService.fetchLanguage(this.language, ['_BOOKING_LIST_FRONT']),
            ];
            // let propertyDataIndex: number | null = null;
            let allowedPropertiesIndex = null;
            if (this.propertyid && !this.havePrivilege) {
                // propertyDataIndex = parallelRequests.length;
                parallelRequests.push(this.roomService.getExposedProperty({
                    id: this.propertyid,
                    language: this.language,
                    is_backend: true,
                }));
            }
            if (this.havePrivilege) {
                allowedPropertiesIndex = parallelRequests.length;
                parallelRequests.push(this.propertyService.getExposedAllowedProperties());
            }
            const results = await Promise.all(parallelRequests);
            const [setupEntries] = results;
            const { pay_type, pay_type_group, pay_method } = this.bookingService.groupEntryTablesResult(setupEntries);
            this.paymentEntries = {
                groups: pay_type_group,
                methods: pay_method,
                types: pay_type,
            };
            this.allowedProperties = allowedPropertiesIndex !== null ? results[allowedPropertiesIndex]?.map(p => p.id) : null;
            updateUserSelection('property_id', propertyId);
            updateUserSelections({
                property_ids: this.allowedProperties,
                userTypeCode: this.userType,
            });
            await this.fetchBookings();
        }
        catch (error) {
            console.error('Error initializing app:', error);
        }
        finally {
            this.isLoading = false;
        }
    }
    handleSideBarToggle(e) {
        if (e.detail) {
            this.editBookingItem = null;
        }
    }
    geSearchFiltersFromParams() {
        //e=10&status=002&from=2025-04-15&to=2025-04-22&filter=2&c=Alitalia+Cabin+Crew
        const params = getAllParams();
        if (params) {
            console.log('update params');
            let obj = {};
            if (params.e) {
                obj['end_row'] = Number(params.e);
            }
            if (params.s) {
                obj['start_row'] = Number(params.s);
            }
            if (params.status) {
                obj['booking_status'] = params.status;
            }
            if (params.filter) {
                obj['filter_type'] = params.filter;
            }
            if (params.from) {
                obj['from'] = params.from;
            }
            if (params.to) {
                obj['to'] = params.to;
            }
            updateUserSelections(obj);
        }
        console.log('params=>', params);
    }
    openModal() {
        this.listingModalTimeout = setTimeout(() => {
            this.listingModal = this.el.querySelector('ir-listing-modal');
            this.listingModal.editBooking = this.editBookingItem;
            this.listingModal.openModal();
        }, 100);
    }
    disconnectedCallback() {
        clearTimeout(this.listingModalTimeout);
    }
    async handlePaginationChange(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        if (!event.detail) {
            return;
        }
        setPaginationPage(event.detail.currentPage);
        await this.fetchBookings();
    }
    async handlePaginationPageSizeChange(event) {
        if (!event.detail || !event.detail.pageSize) {
            return;
        }
        event.stopImmediatePropagation();
        event.stopPropagation();
        setPaginationPageSize(event.detail.pageSize);
        await this.fetchBookings();
    }
    async handleResetData(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.fetchBookings();
    }
    async handleResetStoreData(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.fetchBookings();
    }
    handleBookingChanged(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        booking_listing.bookings = [
            ...booking_listing.bookings.map(b => {
                if (b.booking_nbr === e.detail.booking_nbr) {
                    return e.detail;
                }
                return b;
            }),
        ];
    }
    handleBookingPayment(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { booking_nbr, payment } = e.detail;
        this.booking = this.findBooking(booking_nbr);
        const paymentType = this.paymentEntries.types.find(p => p.CODE_NAME === payment.payment_type.code);
        this.payment = {
            ...payment,
            payment_type: {
                code: paymentType.CODE_NAME,
                description: paymentType.CODE_VALUE_EN,
                operation: paymentType.NOTES,
            },
        };
        this.paymentFolioRef.openFolio();
    }
    handleSelectGuestEvent(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const booking = this.findBooking(e.detail);
        if (!booking) {
            return;
        }
        this.editBookingItem = {
            booking,
            cause: 'guest',
        };
    }
    handleOpen(e) {
        e.stopImmediatePropagation();
        const booking = this.findBooking(e.detail);
        if (!booking) {
            return;
        }
        this.editBookingItem = {
            booking,
            cause: 'edit',
        };
    }
    findBooking(bookingNumber) {
        return booking_listing.bookings.find(b => b.booking_nbr === bookingNumber);
    }
    render() {
        if (this.isLoading || this.ticket === '') {
            return h("ir-loading-screen", null);
        }
        return (h(Host, null, h("ir-interceptor", null), h("ir-toast", null), h("div", { class: "main-container" }, h("ir-listing-header", { propertyId: this.propertyid, p: this.p, language: this.language }), h("section", { class: "mt-2" }, h("ir-booking-listing-table", null))), h("ir-drawer", { style: {
                '--ir-drawer-width': '80rem',
                '--ir-drawer-background-color': '#F2F3F8',
                '--ir-drawer-padding-left': '0',
                '--ir-drawer-padding-top': '0',
                '--ir-drawer-padding-bottom': '0',
                '--ir-drawer-padding-right': '0',
            }, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.editBookingItem = null;
            }, withoutHeader: true, open: this.editBookingItem?.cause === 'edit' }, this.editBookingItem?.booking && (h("ir-booking-details", { hasPrint: true, hasReceipt: true, hasCloseButton: true, onCloseSidebar: () => (this.editBookingItem = null), is_from_front_desk: true, propertyid: this.propertyid, hasRoomEdit: true, hasRoomDelete: true, bookingNumber: this.editBookingItem.booking?.booking_nbr.toString(), ticket: this.ticket, language: this.language, hasRoomAdd: true }))), h("ir-guest-info-drawer", { onGuestInfoDrawerClosed: () => {
                this.editBookingItem = null;
            }, booking_nbr: this.editBookingItem?.booking?.booking_nbr, email: this.editBookingItem?.booking?.guest.email, language: this.language, open: this.editBookingItem?.cause === 'guest' }), h("ir-payment-folio", { style: { height: 'auto' }, bookingNumber: this.booking?.booking_nbr, paymentEntries: this.paymentEntries, payment: this.payment, mode: 'payment-action', ref: el => (this.paymentFolioRef = el), onCloseModal: () => {
                this.booking = null;
                this.payment = null;
            } })));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
    static get style() { return IrBookingListingStyle0; }
}, [2, "ir-booking-listing", {
        "language": [1],
        "ticket": [1],
        "propertyid": [2],
        "rowCount": [2, "row-count"],
        "p": [1],
        "baseUrl": [1, "base-url"],
        "userType": [2, "user-type"],
        "isLoading": [32],
        "editBookingItem": [32],
        "showCost": [32],
        "paymentEntries": [32],
        "payment": [32],
        "booking": [32]
    }, [[0, "requestPageChange", "handlePaginationChange"], [0, "requestPageSizeChange", "handlePaginationPageSizeChange"], [0, "resetData", "handleResetData"], [0, "resetBookingData", "handleResetStoreData"], [0, "bookingChanged", "handleBookingChanged"], [0, "payBookingBalance", "handleBookingPayment"], [0, "guestSelected", "handleSelectGuestEvent"], [0, "openBookingDetails", "handleOpen"]], {
        "ticket": ["ticketChanged"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-booking-listing", "igl-application-info", "igl-block-dates-view", "igl-book-property", "igl-book-property-container", "igl-book-property-footer", "igl-book-property-header", "igl-booking-form", "igl-booking-overview-page", "igl-date-range", "igl-property-booked-by", "igl-rate-plan", "igl-room-type", "ir-actions-cell", "ir-applicable-policies", "ir-autocomplete", "ir-balance-cell", "ir-billing", "ir-billing-drawer", "ir-booked-by-cell", "ir-booked-on-cell", "ir-booking-billing-recipient", "ir-booking-company-form", "ir-booking-details", "ir-booking-extra-note", "ir-booking-guarantee", "ir-booking-header", "ir-booking-listing-mobile-card", "ir-booking-listing-table", "ir-booking-number-cell", "ir-booking-status-tag", "ir-button", "ir-combobox", "ir-country-picker", "ir-custom-button", "ir-custom-date-picker", "ir-custom-input", "ir-date-picker", "ir-date-range", "ir-date-view", "ir-dates-cell", "ir-dialog", "ir-drawer", "ir-events-log", "ir-extra-service", "ir-extra-service-config", "ir-extra-service-config-form", "ir-extra-services", "ir-guest-info-drawer", "ir-guest-info-form", "ir-icon", "ir-icons", "ir-input-text", "ir-interceptor", "ir-invoice", "ir-invoice-form", "ir-label", "ir-listing-header", "ir-loading-screen", "ir-mobile-input", "ir-otp", "ir-otp-modal", "ir-pagination", "ir-payment-details", "ir-payment-folio", "ir-payment-folio-form", "ir-payment-item", "ir-payment-summary", "ir-payments-folio", "ir-phone-input", "ir-picker", "ir-picker-item", "ir-pickup", "ir-pickup-form", "ir-pickup-view", "ir-pms-logs", "ir-popover", "ir-price-input", "ir-range-picker", "ir-reservation-information", "ir-room", "ir-room-guests", "ir-room-guests-form", "ir-select", "ir-spinner", "ir-status-activity-cell", "ir-toast", "ir-tooltip", "ir-unit-cell", "ir-unit-tag", "ir-validator", "ota-label"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-booking-listing":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBookingListing);
            }
            break;
        case "igl-application-info":
            if (!customElements.get(tagName)) {
                defineCustomElement$1r();
            }
            break;
        case "igl-block-dates-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$1q();
            }
            break;
        case "igl-book-property":
            if (!customElements.get(tagName)) {
                defineCustomElement$1p();
            }
            break;
        case "igl-book-property-container":
            if (!customElements.get(tagName)) {
                defineCustomElement$1o();
            }
            break;
        case "igl-book-property-footer":
            if (!customElements.get(tagName)) {
                defineCustomElement$1n();
            }
            break;
        case "igl-book-property-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$1m();
            }
            break;
        case "igl-booking-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$1l();
            }
            break;
        case "igl-booking-overview-page":
            if (!customElements.get(tagName)) {
                defineCustomElement$1k();
            }
            break;
        case "igl-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$1j();
            }
            break;
        case "igl-property-booked-by":
            if (!customElements.get(tagName)) {
                defineCustomElement$1i();
            }
            break;
        case "igl-rate-plan":
            if (!customElements.get(tagName)) {
                defineCustomElement$1h();
            }
            break;
        case "igl-room-type":
            if (!customElements.get(tagName)) {
                defineCustomElement$1g();
            }
            break;
        case "ir-actions-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$1f();
            }
            break;
        case "ir-applicable-policies":
            if (!customElements.get(tagName)) {
                defineCustomElement$1e();
            }
            break;
        case "ir-autocomplete":
            if (!customElements.get(tagName)) {
                defineCustomElement$1d();
            }
            break;
        case "ir-balance-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$1c();
            }
            break;
        case "ir-billing":
            if (!customElements.get(tagName)) {
                defineCustomElement$1b();
            }
            break;
        case "ir-billing-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$1a();
            }
            break;
        case "ir-booked-by-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$19();
            }
            break;
        case "ir-booked-on-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$18();
            }
            break;
        case "ir-booking-billing-recipient":
            if (!customElements.get(tagName)) {
                defineCustomElement$17();
            }
            break;
        case "ir-booking-company-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$16();
            }
            break;
        case "ir-booking-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$15();
            }
            break;
        case "ir-booking-extra-note":
            if (!customElements.get(tagName)) {
                defineCustomElement$14();
            }
            break;
        case "ir-booking-guarantee":
            if (!customElements.get(tagName)) {
                defineCustomElement$13();
            }
            break;
        case "ir-booking-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$12();
            }
            break;
        case "ir-booking-listing-mobile-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$11();
            }
            break;
        case "ir-booking-listing-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$10();
            }
            break;
        case "ir-booking-number-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$$();
            }
            break;
        case "ir-booking-status-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$_();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$Z();
            }
            break;
        case "ir-combobox":
            if (!customElements.get(tagName)) {
                defineCustomElement$Y();
            }
            break;
        case "ir-country-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$X();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$W();
            }
            break;
        case "ir-custom-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$V();
            }
            break;
        case "ir-custom-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$U();
            }
            break;
        case "ir-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$T();
            }
            break;
        case "ir-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$S();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$R();
            }
            break;
        case "ir-dates-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$Q();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$P();
            }
            break;
        case "ir-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$O();
            }
            break;
        case "ir-events-log":
            if (!customElements.get(tagName)) {
                defineCustomElement$N();
            }
            break;
        case "ir-extra-service":
            if (!customElements.get(tagName)) {
                defineCustomElement$M();
            }
            break;
        case "ir-extra-service-config":
            if (!customElements.get(tagName)) {
                defineCustomElement$L();
            }
            break;
        case "ir-extra-service-config-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$K();
            }
            break;
        case "ir-extra-services":
            if (!customElements.get(tagName)) {
                defineCustomElement$J();
            }
            break;
        case "ir-guest-info-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$I();
            }
            break;
        case "ir-guest-info-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$H();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$G();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$F();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$E();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$D();
            }
            break;
        case "ir-invoice":
            if (!customElements.get(tagName)) {
                defineCustomElement$C();
            }
            break;
        case "ir-invoice-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$B();
            }
            break;
        case "ir-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$A();
            }
            break;
        case "ir-listing-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$z();
            }
            break;
        case "ir-loading-screen":
            if (!customElements.get(tagName)) {
                defineCustomElement$y();
            }
            break;
        case "ir-mobile-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$x();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$w();
            }
            break;
        case "ir-otp-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$v();
            }
            break;
        case "ir-pagination":
            if (!customElements.get(tagName)) {
                defineCustomElement$u();
            }
            break;
        case "ir-payment-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$t();
            }
            break;
        case "ir-payment-folio":
            if (!customElements.get(tagName)) {
                defineCustomElement$s();
            }
            break;
        case "ir-payment-folio-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$r();
            }
            break;
        case "ir-payment-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$q();
            }
            break;
        case "ir-payment-summary":
            if (!customElements.get(tagName)) {
                defineCustomElement$p();
            }
            break;
        case "ir-payments-folio":
            if (!customElements.get(tagName)) {
                defineCustomElement$o();
            }
            break;
        case "ir-phone-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$n();
            }
            break;
        case "ir-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$m();
            }
            break;
        case "ir-picker-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "ir-pickup":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "ir-pickup-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-pickup-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-pms-logs":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-popover":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-price-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-range-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-reservation-information":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-room":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-room-guests":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-room-guests-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-status-activity-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-unit-cell":
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

export { IrBookingListing as I, defineCustomElement as d };

//# sourceMappingURL=ir-booking-listing2.js.map