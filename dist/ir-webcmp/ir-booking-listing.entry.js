import { r as registerInstance, i as getElement, h, e as Host } from './index-7b3961ed.js';
import { B as BookingListingService } from './booking_listing.service-4d2beee9.js';
import { R as RoomService } from './room.service-1f08b13d.js';
import { u as updateUserSelection, b as booking_listing, s as setPaginationPageSize, o as onBookingListingChange, a as updatePaginationFromSelection, c as updateUserSelections, d as setPaginationPage } from './booking_listing.store-d789b4d6.js';
import { k as isPrivilegedUser } from './utils-7eaed9ad.js';
import { T as Token } from './Token-add81d36.js';
import { B as BookingService } from './booking.service-cc6e87c3.js';
import { P as PropertyService } from './property.service-60a05284.js';
import './index-5ba472df.js';
import './calendar-data-cdc01d0d.js';
import './index-17663a35.js';
import './locales.store-daef23cc.js';
import './moment-ab846cee.js';
import './index-40c31d5b.js';
import './IBooking-9fbd40d1.js';
import './booking-2b94eb2b.js';

// src/utils/browserHistory.ts
// Common parsers/serializers
const ParamTypes = {
    string: {
        parse: (v) => v ?? '',
        serialize: (v) => v,
    },
    number: {
        parse: (v) => {
            if (v == null || v === '')
                return NaN;
            const n = Number(v);
            return isNaN(n) ? NaN : n;
        },
        serialize: (v) => String(v),
    },
    boolean: {
        parse: (v) => v === 'true',
        serialize: (v) => (v ? 'true' : 'false'),
    },
};
/**
 * Read a single search‑param, parse it, and return a typed value.
 * Falls back to defaultValue if missing or parse fails.
 */
function getParam(key, { parse }, defaultValue) {
    const params = new URLSearchParams(window.location.search);
    const raw = params.get(key);
    try {
        if (raw == null)
            return defaultValue;
        return parse(raw);
    }
    catch {
        return defaultValue;
    }
}
/** Helpers for the three built‑in types */
function getStringParam(key, defaultValue = '') {
    return getParam(key, ParamTypes.string, defaultValue);
}
function getNumberParam(key, defaultValue = NaN) {
    return getParam(key, ParamTypes.number, defaultValue);
}
function getBooleanParam(key, defaultValue = false) {
    return getParam(key, ParamTypes.boolean, defaultValue);
}
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
/**
 * Update one or more search params.
 * Pass null to delete a param.
 * By default uses history.pushState; set replace: true to call replaceState.
 */
function setParams(updates, options = {}) {
    const params = new URLSearchParams(window.location.search);
    for (const [key, value] of Object.entries(updates)) {
        if (!value) {
            params.delete(key);
        }
        else {
            params.set(key, String(value));
        }
    }
    const newSearch = params.toString();
    const newUrl = window.location.pathname + (newSearch ? `?${newSearch}` : '') + window.location.hash;
    if (options.replace) {
        window.history.replaceState(window.history.state, '', newUrl);
    }
    else {
        window.history.pushState(window.history.state, '', newUrl);
    }
}
/**
 * Push a new history entry.
 * `path` may include search or hash.
 * `state` is the history state object.
 */
function pushHistory(path, state = {}) {
    window.history.pushState(state, '', path);
}
/**
 * Replace the current history entry.
 * `path` may include search or hash.
 * `state` is the history state object.
 */
function replaceHistory(path, state = {}) {
    window.history.replaceState(state, '', path);
}

const irBookingListingCss = ".sc-ir-booking-listing-h{display:block;padding:var(--wa-space-l);position:relative;height:100% !important;overflow-y:auto !important}";

const IrBookingListing = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
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
                this.roomService.fetchLanguage(this.language, ['_BOOKING_LIST_FRONT', '_PMS_FRONT']),
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
        e.stopPropagation;
        const booking = this.findBooking(e.detail);
        if (!booking) {
            return;
        }
        this.editBookingItem = {
            booking,
            cause: 'edit',
        };
    }
    async handleResetExposedCancellationDueAmount(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.fetchBookings();
    }
    handleGuestChanged(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        booking_listing.bookings = booking_listing.bookings.map(b => {
            const guest = { ...b.guest };
            const newGuest = e.detail;
            if (guest.id === newGuest.id) {
                return { ...b, guest: { ...guest, ...newGuest } };
            }
            return b;
        });
    }
    findBooking(bookingNumber) {
        return booking_listing.bookings.find(b => b.booking_nbr === bookingNumber);
    }
    render() {
        if (this.isLoading || this.ticket === '') {
            return h("ir-loading-screen", null);
        }
        return (h(Host, null, h("ir-interceptor", null), h("ir-toast", null), h("div", { class: "main-container" }, h("ir-listing-header", { propertyId: this.propertyid, p: this.p, language: this.language }), h("section", { class: "mt-2" }, h("ir-booking-listing-table", null))), h("ir-booking-details-drawer", { open: this.editBookingItem?.cause === 'edit', propertyId: this.editBookingItem?.booking?.property?.id, bookingNumber: this.editBookingItem?.booking?.booking_nbr.toString(), ticket: this.ticket, language: this.language, onBookingDetailsDrawerClosed: () => (this.editBookingItem = null) }), h("ir-guest-info-drawer", { onGuestInfoDrawerClosed: () => {
                this.editBookingItem = null;
            }, booking_nbr: this.editBookingItem?.booking?.booking_nbr, email: this.editBookingItem?.booking?.guest.email, language: this.language, open: this.editBookingItem?.cause === 'guest' }), h("ir-payment-folio", { style: { height: 'auto' }, bookingNumber: this.booking?.booking_nbr, paymentEntries: this.paymentEntries, payment: this.payment, mode: 'payment-action', ref: el => (this.paymentFolioRef = el), onCloseModal: () => {
                this.booking = null;
                this.payment = null;
            } })));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrBookingListing.style = irBookingListingCss;

export { IrBookingListing as ir_booking_listing };

//# sourceMappingURL=ir-booking-listing.entry.js.map