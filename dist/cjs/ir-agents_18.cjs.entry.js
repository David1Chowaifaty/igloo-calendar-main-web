'use strict';

var index = require('./index-DtXemfU-.js');
var Token = require('./Token-BVmOLolB.js');
var agents_service = require('./agents.service-DZN5FBnL.js');
var booking_store = require('./booking.store-C-3SXMkn.js');
var calendarData = require('./calendar-data--UuFzfsJ.js');
var property_service = require('./property.service-D3LVp6xe.js');
var utils = require('./utils-CsChIHgF.js');
var room_service = require('./room.service-Bu25r5Y2.js');
var arrivals_store = require('./arrivals.store-ZN4DidBf.js');
var axios = require('./axios-C-Phc0sj.js');
var booking_listing_service = require('./booking_listing.service-DYXLTAXg.js');
var channel_service = require('./channel.service-CMz2LgmA.js');
var locales_store = require('./locales.store-CtV5-KJh.js');
var system_service = require('./system.service-BbHmBp-x.js');
var moment = require('./moment-CdViwxPQ.js');
var v4 = require('./v4-Bq3ldsQe.js');
var departures_store = require('./departures.store-6BlWMq8e.js');
var index$1 = require('./index-CLqkDPTC.js');
var housekeeping_service = require('./housekeeping.service-C2KGh35D.js');
var hkTasks_store = require('./hk-tasks.store-BhQp5gA1.js');
var paymentOption_store = require('./payment-option.store-DhgtYPNv.js');
var user_service = require('./user.service-DVCDVTu3.js');
var realtime_service = require('./realtime.service-COdIt6Z-.js');
require('./type-Dy9pVS4V.js');
require('./booking-ZNHS2fN9.js');
require('./index-koQJ3Kgt.js');

const irAgentsCss = () => `.sc-ir-agents-h{display:block}.page-header__container.sc-ir-agents{display:flex;align-items:center;justify-content:space-between}`;

const IrAgents = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * Authentication token issued by the PMS backend.
     * Required for initializing the component and making API calls.
     */
    ticket;
    /**
     * ID of the property (hotel) for which arrivals should be displayed.
     * Used in API calls related to rooms, bookings, and check-ins.
     */
    propertyid;
    /**
     * Two-letter language code (ISO) used for translations and API locale.
     * Defaults to `'en'`.
     */
    language = 'en';
    /**
     * Property alias or short identifier used by backend endpoints (aname).
     * Passed to `getExposedProperty` when initializing the component.
     */
    p;
    agents = [];
    selectedAgent = null;
    isDrawerOpen = false;
    isDeleteDialogOpen = false;
    isLoading = true;
    countries;
    setupEntries;
    agentsService = new agents_service.AgentsService();
    propertyService = new property_service.PropertyService();
    bookingService = new booking_store.BookingService();
    tokenService = new Token.Token();
    componentWillLoad() {
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            this.init();
        }
    }
    handleTicketChange() {
        this.tokenService.setToken(this.ticket);
        this.init();
    }
    handleUpsertAgentListener(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.upsertAgent();
    }
    async init() {
        try {
            this.isLoading = true;
            if (!this.propertyid && !this.p) {
                throw new Error('Missing credentials');
            }
            let propertyId = this.propertyid;
            if (!propertyId) {
                await this.propertyService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                });
            }
            const [countries, setupEntries] = await Promise.all([
                this.bookingService.getCountries(this.language),
                this.bookingService.getSetupEntriesByTableNameMulti(['_AGENT_RATE_TYPE', '_AGENT_TYPE', '_TA_PAYMENT_METHOD', '_CL_POST_TIMING']),
                calendarData.calendar_data?.property
                    ? Promise.resolve(null)
                    : this.propertyService.getExposedProperty({
                        id: this.propertyid || 0,
                        language: this.language,
                        aname: this.p,
                    }),
                this.fetchAgents(),
            ]);
            const { agent_rate_type, agent_type, ta_payment_method, cl_post_timing } = this.bookingService.groupEntryTablesResult(setupEntries);
            this.setupEntries = {
                agent_rate_type,
                agent_type,
                ta_payment_method,
                cl_post_timing,
            };
            this.countries = countries;
            this.isLoading = false;
        }
        catch (error) {
            console.error(error);
        }
    }
    upsertAgent() {
        this.fetchAgents();
    }
    async fetchAgents() {
        const agents = await this.agentsService.getExposedAgents({ property_id: calendarData.calendar_data?.property ? calendarData.calendar_data?.property.id : this.propertyid });
        this.agents = agents.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));
    }
    handleUpsertAgent(agent) {
        this.selectedAgent = agent;
        this.isDrawerOpen = true;
    }
    handleDeleteAgent(agent) {
        this.selectedAgent = agent;
        this.isDeleteDialogOpen = true;
    }
    handleDrawerClose() {
        this.isDrawerOpen = false;
        this.selectedAgent = null;
    }
    handleDeleteDialogClose() {
        this.isDeleteDialogOpen = false;
        this.selectedAgent = null;
    }
    confirmDeleteAgent() {
        if (!this.selectedAgent) {
            return;
        }
        this.agents = this.agents.filter(agent => agent.id !== this.selectedAgent?.id);
        this.handleDeleteDialogClose();
    }
    async handleToggleAgentStatus(agent) {
        try {
            await this.agentsService.handleExposedAgent({ agent });
            this.upsertAgent();
            utils.showToast({
                type: 'success',
                description: '',
                title: 'Saved Successfully',
            });
        }
        catch (error) {
            console.error(error);
        }
    }
    render() {
        if (this.isLoading) {
            return index.h("ir-loading-screen", null);
        }
        return (index.h(index.Host, { "data-testid": "ir-agents" }, index.h("ir-toast", null), index.h("ir-interceptor", { handledEndpoints: ['/Get_Rooms_To_Check_in'] }), index.h("div", { class: "ir-page__container" }, index.h("div", { class: "page-header__container" }, index.h("h3", { class: "page-title" }, "Agents/Companies")), index.h("ir-agents-table", { countries: this.countries, setupEntries: this.setupEntries, onToggleAgentActive: event => this.handleToggleAgentStatus(event.detail), agents: this.agents, onUpsertAgent: event => this.handleUpsertAgent(event.detail), onDeleteAgent: event => this.handleDeleteAgent(event.detail) })), index.h("ir-agent-editor-drawer", { setupEntries: this.setupEntries, countries: this.countries, open: this.isDrawerOpen, agent: this.selectedAgent ?? undefined, onAgentEditorClose: () => this.handleDrawerClose() }), index.h("ir-dialog", { label: "Delete Agent", open: this.isDeleteDialogOpen, lightDismiss: false, onIrDialogHide: () => this.handleDeleteDialogClose() }, index.h("span", null, this.selectedAgent
            ? `Are you sure you want to delete ${this.selectedAgent.name}? This action permanently removes the agent and cannot be undone.`
            : 'Are you sure you want to delete this agent? This action permanently removes the agent and cannot be undone.'), index.h("div", { slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { "data-dialog": "close", size: "m", appearance: "filled", variant: "neutral" }, "Cancel"), index.h("ir-custom-button", { size: "m", appearance: "accent", variant: "danger", onClickHandler: () => this.confirmDeleteAgent() }, "Delete")))));
    }
    static get watchers() { return {
        "ticket": [{
                "handleTicketChange": 0
            }]
    }; }
};
IrAgents.style = irAgentsCss();

const irArrivalsCss = () => `.page-title.sc-ir-arrivals{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-xl)}.sc-ir-arrivals-h{height:100% !important;overflow-y:auto !important}`;

const IrArrivals = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * Authentication token issued by the PMS backend.
     * Required for initializing the component and making API calls.
     */
    ticket;
    /**
     * ID of the property (hotel) for which arrivals should be displayed.
     * Used in API calls related to rooms, bookings, and check-ins.
     */
    propertyid;
    /**
     * Two-letter language code (ISO) used for translations and API locale.
     * Defaults to `'en'`.
     */
    language = 'en';
    /**
     * Property alias or short identifier used by backend endpoints (aname).
     * Passed to `getExposedProperty` when initializing the component.
     */
    p;
    /**
     * Number of arrivals to load per page in the arrivals table.
     * Used to configure pagination via Arrivals Store.
     * Defaults to `20`.
     */
    pageSize = 20;
    bookingNumber;
    booking;
    paymentEntries;
    isPageLoading;
    payment;
    roomGuestState = null;
    countries;
    tokenService = new Token.Token();
    roomService = new room_service.RoomService();
    bookingService = new booking_store.BookingService();
    paymentFolioRef;
    componentWillLoad() {
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            this.init();
        }
        arrivals_store.setArrivalsPageSize(this.pageSize);
        arrivals_store.onArrivalsStoreChange('today', _ => {
            this.getBookings();
        });
    }
    handlePageSizeChange(newValue, oldValue) {
        if (newValue !== oldValue)
            arrivals_store.setArrivalsPageSize(newValue);
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue !== oldValue && newValue) {
            this.tokenService.setToken(this.ticket);
            this.init();
        }
    }
    handleBookingPayment(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { booking_nbr, payment } = e.detail;
        this.booking = arrivals_store.arrivalsStore.bookings.find(b => b.booking_nbr === booking_nbr);
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
    handleOpen(e) {
        this.bookingNumber = e.detail;
    }
    async handleResetExposedCancellationDueAmount(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.getBookings();
    }
    async init() {
        try {
            this.isPageLoading = true;
            if (!this.propertyid && !this.p) {
                throw new Error('Missing credentials');
            }
            let propertyId = this.propertyid;
            if (!propertyId) {
                await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                });
            }
            const [_, __, countries, setupEntries] = await Promise.all([
                calendarData.calendar_data?.property ? Promise.resolve(null) : this.roomService.getExposedProperty({ id: this.propertyid || 0, language: this.language, aname: this.p }),
                this.roomService.fetchLanguage(this.language),
                this.bookingService.getCountries(this.language),
                this.bookingService.getSetupEntriesByTableNameMulti(['_BED_PREFERENCE_TYPE', '_DEPARTURE_TIME', '_PAY_TYPE', '_PAY_TYPE_GROUP', '_PAY_METHOD']),
                this.getBookings(),
            ]);
            this.countries = countries;
            const { pay_type, pay_type_group, pay_method } = this.bookingService.groupEntryTablesResult(setupEntries);
            this.paymentEntries = { types: pay_type, groups: pay_type_group, methods: pay_method };
        }
        catch (error) {
        }
        finally {
            this.isPageLoading = false;
        }
    }
    async getBookings() {
        const { bookings, total_count } = await this.bookingService.getRoomsToCheckIn({
            property_id: calendarData.calendar_data.property?.id?.toString() || this.propertyid?.toString(),
            check_in_date: arrivals_store.arrivalsStore.today,
            page_index: arrivals_store.arrivalsStore.pagination.currentPage,
            page_size: arrivals_store.arrivalsStore.pagination.pageSize,
        });
        arrivals_store.setArrivalsTotal(total_count ?? 0);
        arrivals_store.initializeArrivalsStore(bookings);
    }
    async handlePaginationChange(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const nextPage = event.detail?.currentPage ?? 1;
        if (nextPage === arrivals_store.arrivalsStore.pagination.currentPage) {
            return;
        }
        arrivals_store.setArrivalsPage(nextPage);
        await this.getBookings();
    }
    async handlePaginationPageSizeChange(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const nextPageSize = event.detail?.pageSize;
        if (!Number.isFinite(nextPageSize)) {
            return;
        }
        const normalizedPageSize = Math.floor(Number(nextPageSize));
        if (normalizedPageSize === arrivals_store.arrivalsStore.pagination.pageSize) {
            return;
        }
        arrivals_store.setArrivalsPageSize(normalizedPageSize);
        await this.getBookings();
    }
    handleCheckingRoom(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.roomGuestState = event.detail;
    }
    handleResetBooking(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.getBookings();
    }
    // @Listen("resetBookingEvt")
    // handleResetBookings(e:CustomEvent){
    //   e.stopImmediatePropagation();
    //   e.stopPropagation();
    //   this.
    // }
    render() {
        if (this.isPageLoading) {
            return index.h("ir-loading-screen", null);
        }
        return (index.h(index.Host, null, index.h("ir-toast", null), index.h("ir-interceptor", { handledEndpoints: ['/Get_Rooms_To_Check_in'] }), index.h("div", { class: "ir-page__container" }, index.h("h3", { class: "page-title" }, "Check-ins"), index.h("ir-arrivals-table", { onCheckInRoom: event => this.handleCheckingRoom(event), onRequestPageChange: event => this.handlePaginationChange(event), onRequestPageSizeChange: event => this.handlePaginationPageSizeChange(event) }), index.h("ir-booking-details-drawer", { open: !!this.bookingNumber, propertyId: this.propertyid, bookingNumber: this.bookingNumber?.toString(), ticket: this.ticket, language: this.language, onBookingDetailsDrawerClosed: () => (this.bookingNumber = null) }), index.h("ir-payment-folio", { booking: this.booking, style: { height: 'auto' }, bookingNumber: this.booking?.booking_nbr, paymentEntries: this.paymentEntries, payment: this.payment, mode: 'payment-action', ref: el => (this.paymentFolioRef = el), onCloseModal: () => {
                this.booking = null;
                this.payment = null;
            } }), index.h("ir-room-guests", { open: this.roomGuestState !== null, countries: this.countries, language: this.language, identifier: this.roomGuestState?.identifier, bookingNumber: this.roomGuestState?.booking_nbr?.toString(), roomName: this.roomGuestState?.roomName, totalGuests: this.roomGuestState?.totalGuests, sharedPersons: this.roomGuestState?.sharing_persons, checkIn: this.roomGuestState?.checkin, onCloseModal: () => (this.roomGuestState = null) }))));
    }
    static get watchers() { return {
        "pageSize": [{
                "handlePageSizeChange": 0
            }],
        "ticket": [{
                "handleTicketChange": 0
            }]
    }; }
};
IrArrivals.style = irArrivalsCss();

const irBookingEmailLogsCss = () => `.sc-ir-booking-email-logs-h{display:block}`;

const IrBookingEmailLogs = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    ticket;
    data;
    bookingNumber;
    token = new Token.Token();
    componentWillLoad() {
        if (this.ticket) {
            this.token.setToken(this.ticket);
        }
    }
    handleTicketChange() {
        if (this.ticket) {
            this.token.setToken(this.ticket);
        }
    }
    render() {
        return (index.h(index.Host, { key: '3feff5a42a8aacbfddde3b1c9ebb35a4d88260d7', class: "p-1" }, index.h("ir-interceptor", { key: '5046817ba7f0212f815bf96f45d2ef874b31a9fe', handledEndpoints: ['/Get_Email_log_By_BOOK_NBR'] }), index.h("ir-toast", { key: '89a241e93d1b9dbe1cd3546ea81d4b561985c522' }), index.h("div", { key: '91ae219e885d966b2d99a7b3afd8c3468d0baecb', class: "d-flex align-items-center mb-1", style: { gap: '0.5rem' } }, index.h("ir-input-text", { key: '788ca681f48000e9d8f6de71c18e2e99eb0345f8', class: "m-0", inputContainerStyle: { margin: '0' }, value: this.bookingNumber, onTextChange: e => (this.bookingNumber = e.detail), placeholder: "booking number" }), index.h("ir-button", { key: '611732be30c46a8ed69107a3a9d86be988bd8372', size: "sm", text: "search", onClickHandler: async () => {
                const { data } = await axios.axios.post('/Get_Email_log_By_BOOK_NBR', {
                    BOOK_NBR: this.bookingNumber,
                });
                if (data.ExceptionMsg) {
                    return;
                }
                this.data = data.My_Result;
            } })), index.h("p", { key: '7786050819a518df76089a5002057e0f85eb0e73' }, JSON.stringify(this.data, null, 2))));
    }
    static get watchers() { return {
        "ticket": [{
                "handleTicketChange": 0
            }]
    }; }
};
IrBookingEmailLogs.style = irBookingEmailLogsCss();

// src/utils/browserHistory.ts
// Common parsers/serializers
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

const irBookingListingCss = () => `.sc-ir-booking-listing-h{display:block;padding:var(--wa-space-l);position:relative;height:100% !important;overflow-y:auto !important}`;

const IrBookingListing = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
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
    bookingListingService = new booking_listing_service.BookingListingService();
    bookingService = new booking_store.BookingService();
    roomService = new room_service.RoomService();
    propertyService = new property_service.PropertyService();
    token = new Token.Token();
    listingModal;
    listingModalTimeout;
    allowedProperties;
    havePrivilege;
    paymentFolioRef;
    componentWillLoad() {
        if (this.baseUrl) {
            this.token.setBaseUrl(this.baseUrl);
        }
        booking_listing_service.updateUserSelection('end_row', this.rowCount);
        booking_listing_service.booking_listing.rowCount = this.rowCount;
        booking_listing_service.setPaginationPageSize(this.rowCount);
        if (this.ticket !== '') {
            booking_listing_service.booking_listing.token = this.ticket;
            this.token.setToken(this.ticket);
            this.initializeApp();
        }
        booking_listing_service.onBookingListingChange('userSelection', newValue => {
            booking_listing_service.updatePaginationFromSelection(newValue);
        });
        booking_listing_service.onBookingListingChange('bookings', newValue => {
            this.showCost = newValue.some(booking => booking.financial.gross_cost !== null && booking.financial.gross_cost > 0);
        });
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
        booking_listing_service.booking_listing.token = this.ticket;
        this.initializeApp();
    }
    async fetchBookings() {
        await this.bookingListingService.getExposedBookings({
            ...booking_listing_service.booking_listing.userSelection,
            is_to_export: false,
        });
    }
    async initializeApp() {
        try {
            this.isLoading = true;
            this.havePrivilege = utils.isPrivilegedUser(this.userType);
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
            booking_listing_service.updateUserSelection('property_id', propertyId);
            booking_listing_service.updateUserSelections({
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
            booking_listing_service.updateUserSelections(obj);
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
        booking_listing_service.setPaginationPage(event.detail.currentPage);
        await this.fetchBookings();
    }
    async handlePaginationPageSizeChange(event) {
        if (!event.detail || !event.detail.pageSize) {
            return;
        }
        event.stopImmediatePropagation();
        event.stopPropagation();
        booking_listing_service.setPaginationPageSize(event.detail.pageSize);
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
        booking_listing_service.booking_listing.bookings = [
            ...booking_listing_service.booking_listing.bookings.map(b => {
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
    async handleResetExposedCancellationDueAmount(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.fetchBookings();
    }
    handleGuestChanged(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        booking_listing_service.booking_listing.bookings = booking_listing_service.booking_listing.bookings.map(b => {
            const guest = { ...b.guest };
            const newGuest = e.detail;
            if (guest.id === newGuest.id) {
                return { ...b, guest: { ...guest, ...newGuest } };
            }
            return b;
        });
    }
    findBooking(bookingNumber) {
        return booking_listing_service.booking_listing.bookings.find(b => b.booking_nbr === bookingNumber);
    }
    render() {
        if (this.isLoading || this.ticket === '') {
            return index.h("ir-loading-screen", null);
        }
        return (index.h(index.Host, null, index.h("ir-interceptor", null), index.h("ir-toast", null), index.h("div", { class: "main-container" }, index.h("ir-listing-header", { propertyId: this.propertyid, p: this.p, language: this.language }), index.h("section", { class: "mt-2" }, index.h("ir-booking-listing-table", null))), index.h("ir-booking-details-drawer", { open: this.editBookingItem?.cause === 'edit', propertyId: this.editBookingItem?.booking?.property?.id, bookingNumber: this.editBookingItem?.booking?.booking_nbr.toString(), ticket: this.ticket, language: this.language, onBookingDetailsDrawerClosed: () => (this.editBookingItem = null) }), index.h("ir-guest-info-drawer", { onGuestInfoDrawerClosed: () => {
                this.editBookingItem = null;
            }, booking_nbr: this.editBookingItem?.booking?.booking_nbr, email: this.editBookingItem?.booking?.guest.email, language: this.language, open: this.editBookingItem?.cause === 'guest' }), index.h("ir-payment-folio", { style: { height: 'auto' }, booking: this.booking, bookingNumber: this.booking?.booking_nbr, paymentEntries: this.paymentEntries, payment: this.payment, mode: 'payment-action', ref: el => (this.paymentFolioRef = el), onCloseModal: () => {
                this.booking = null;
                this.payment = null;
            } })));
    }
    static get watchers() { return {
        "ticket": [{
                "ticketChanged": 0
            }]
    }; }
};
IrBookingListing.style = irBookingListingCss();

const actions = (entries) => [
    {
        id: 'edit',
        name: entries.Lcz_Edit,
        icon: () => (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "14", width: "14", viewBox: "0 0 512 512" }, index.h("path", { d: "M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" }))),
        action: (params) => {
            const selectedProperty = params.map.find(m => m.type === 'property');
            channel_service.setChannelIdAndActiveState(params.id, params.is_active);
            channel_service.updateChannelSettings('hotel_id', selectedProperty.channel_id);
            channel_service.updateChannelSettings('hotel_title', params.title);
            channel_service.selectChannel(params.channel.id.toString());
            channel_service.testConnection();
        },
    },
    // {
    //   id: 'view_logs',
    //   name: entries?.Lcz_ViewLogs,
    //   icon: () => (
    //     <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512">
    //       <path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z" />
    //     </svg>
    //   ),
    //   action: () => {
    //     return {
    //       cause: 'view_logs',
    //       action: () => {
    //         alert('view logs clicked');
    //       },
    //       title: 'ok',
    //       message: 'ok',
    //       main_color: 'primary',
    //     };
    //   },
    // },
    // {
    //   id: 'full_sync',
    //   name: entries?.Lcz_FullSync,
    //   icon: () => (
    //     <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512">
    //       <path d="M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM16 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-.7H40c-13.3 0-24 10.7-24 24z" />
    //     </svg>
    //   ),
    //   action: () => {
    //     return {
    //       cause: 'full_sync',
    //       action: () => {
    //         alert('full sync');
    //       },
    //       title: '',
    //       message: entries?.Lcz_ScheduleFullSync,
    //       main_color: 'primary',
    //     };
    //   },
    // },
    // {
    //   id: 'pull_future_reservation',
    //   name: entries?.Lcz_PullFutureReservations,
    //   icon: () => null,
    //   action: () => {
    //     return {
    //       cause: 'pull_future_reservation',
    //       action: () => {
    //         alert('pull_future_reservation');
    //       },
    //       title: '',
    //       message: entries?.Lcz_ScheduleFullSync,
    //       main_color: 'primary',
    //     };
    //   },
    // },
    {
        id: 'remove',
        name: entries?.Lcz_Delete,
        icon: () => (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, index.h("path", { d: "M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" }))),
        action: (params) => {
            return {
                cause: 'remove',
                action: async () => {
                    const channel_service$1 = new channel_service.ChannelService();
                    await channel_service$1.saveConnectedChannel(params.id, true);
                },
                title: '',
                message: entries?.Lcz_ThisActionWillDelete,
                main_color: 'danger',
            };
        },
    },
];

const irChannelCss = () => `.sc-ir-channel-h{display:block;--ir-sidebar-padding-block:0;--ir-sidebar-padding-inline:0}.dropdown-toggle.sc-ir-channel{color:var(--blue)}.dropdown-toggle.sc-ir-channel::after{content:none;display:none}.dropdown-toggle.sc-ir-channel .caret-icon.sc-ir-channel{transition:transform 0.15s ease-in-out, color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,     -webkit-box-shadow 0.15s ease-in-out}.btn.sc-ir-channel:hover .caret-icon.sc-ir-channel path.sc-ir-channel{fill:#6b6f82}.show.sc-ir-channel .caret-icon.sc-ir-channel{transform:rotate(-180deg)}.dropdown-divider.sc-ir-channel{border-color:#e4e5ec}.dropdown-item.sc-ir-channel{padding:10px;display:flex;align-items:center;gap:10px;color:#6b6f82}.dropdown-item.sc-ir-channel svg.sc-ir-channel path.sc-ir-channel{fill:#6b6f82}.danger.sc-ir-channel{color:var(--red)}.danger.sc-ir-channel svg.sc-ir-channel path.sc-ir-channel{fill:var(--red)}.table.sc-ir-channel thead.sc-ir-channel tr.sc-ir-channel{height:50px !important}.table-container.sc-ir-channel{border-radius:30px}.table.sc-ir-channel thead.sc-ir-channel{background:#fafafa;border-top-width:0}.actions-theader.sc-ir-channel{width:35% !important;text-align:end}.dots.sc-ir-channel{display:flex;align-items:center;justify-content:center;margin:0 3px;padding:0}.dot.sc-ir-channel{width:8px;height:8px;margin:0px 4px;background-color:#6b6f82;border-radius:50%;animation:dotFlashing 1s infinite linear alternate}.dot.sc-ir-channel:nth-child(2){animation-delay:0.2s}.h-screen.sc-ir-channel{height:100vh !important}.dot.sc-ir-channel:nth-child(3){animation-delay:0.4s}@keyframes dotFlashing{0%{opacity:0}50%,100%{opacity:1}}@media (min-width: 1024px){.sc-ir-channel-h{--sidebar-width:820px}}`;

const IrChannel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
    ticket = '';
    propertyid;
    language;
    baseurl;
    p;
    channel_status = null;
    modal_cause = null;
    isLoading = false;
    roomService = new room_service.RoomService();
    channelService = new channel_service.ChannelService();
    token = new Token.Token();
    irModalRef;
    propertyId;
    componentWillLoad() {
        this.isLoading = true;
        if (this.ticket !== '') {
            this.token.setToken(this.ticket);
            this.initializeApp();
        }
    }
    async handleConfirmClicked(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (!this.modal_cause) {
            return;
        }
        await this.modal_cause.action();
        if (this.modal_cause.cause === 'remove') {
            channel_service.resetStore();
            await this.refreshChannels();
        }
        this.modal_cause = null;
    }
    openModal() {
        this.irModalRef.openModal();
    }
    async refreshChannels() {
        await Promise.all([this.channelService.getExposedChannels(this.propertyId), this.channelService.getExposedConnectedChannels(this.propertyid)]);
    }
    async initializeApp() {
        if (!this.propertyid && !this.p) {
            throw new Error('Property ID or username is required');
        }
        try {
            let propertyId = this.propertyid;
            if (!propertyId) {
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                });
                propertyId = propertyData.My_Result.id;
            }
            const requests = [
                this.channelService.getExposedChannels(propertyId),
                this.channelService.getExposedConnectedChannels(propertyId),
                this.roomService.fetchLanguage(this.language, ['_CHANNEL_FRONT']),
            ];
            if (this.propertyid) {
                requests.unshift(this.roomService.getExposedProperty({
                    id: this.propertyid,
                    language: this.language,
                    is_backend: true,
                }));
            }
            this.propertyId = propertyId;
            const results = await Promise.all(requests);
            const languageTexts = results[results.length - 1];
            channel_service.channels_data.property_id = this.propertyid;
            if (!locales_store.locales.entries) {
                locales_store.locales.entries = languageTexts.entries;
                locales_store.locales.direction = languageTexts.direction;
            }
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
        this.initializeApp();
    }
    handleCancelModal(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.modal_cause = null;
    }
    handleSidebarClose(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (channel_service.channels_data.selectedChannel) {
            this.modal_cause = {
                action: () => {
                    return new Promise(reselove => {
                        this.resetSideBar();
                        reselove('');
                    });
                },
                cause: 'channel',
                main_color: 'primary',
                message: locales_store.locales.entries?.Lcz_UnSavedChangesWillBeLost,
                title: '',
            };
            this.openModal();
        }
        else {
            this.resetSideBar();
        }
    }
    resetSideBar() {
        this.channel_status = null;
        channel_service.resetStore();
    }
    async handleSaveChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.refreshChannels();
        this.resetSideBar();
    }
    async handleCheckChange(check, params) {
        const selectedProperty = params.map.find(m => m.type === 'property');
        channel_service.setChannelIdAndActiveState(params.id, check);
        channel_service.updateChannelSettings('hotel_id', selectedProperty.channel_id);
        channel_service.updateChannelSettings('hotel_title', params.title);
        channel_service.selectChannel(params.channel.id.toString());
        channel_service.testConnection();
        await this.channelService.saveConnectedChannel(null, false);
        channel_service.resetStore();
        this.refreshChannels();
    }
    render() {
        if (this.isLoading) {
            return (index.h("div", { class: "h-screen bg-white d-flex flex-column align-items-center justify-content-center" }, index.h("ir-loading-screen", null)));
        }
        return (index.h(index.Host, { class: "h-100 " }, index.h("ir-toast", null), index.h("section", { class: "p-2 px-lg-5 py-0 h-100 d-flex flex-column" }, index.h("div", { class: "d-flex w-100 justify-content-between mb-2 align-items-center" }, index.h("h3", { class: "font-weight-bold m-0 p-0" }, locales_store.locales.entries?.Lcz_iSWITCH), index.h("ir-button", { iconPosition: "left", icon_name: "circle_plus", text: locales_store.locales.entries?.Lcz_CreateChannel, size: "sm", onClickHandler: () => (this.channel_status = 'create') })), index.h("div", { class: "card p-1 flex-fill m-0" }, index.h("table", { class: "table table-striped table-bordered no-footer dataTable" }, index.h("thead", null, index.h("tr", null, index.h("th", { scope: "col", class: "text-left" }, locales_store.locales.entries?.Lcz_Channel), index.h("th", { scope: "col" }, locales_store.locales.entries?.Lcz_Status), index.h("th", { scope: "col", class: "actions-theader" }, locales_store.locales.entries?.Lcz_Actions))), index.h("tbody", { class: "" }, channel_service.channels_data.connected_channels?.map(channel => (index.h("tr", { key: channel.channel.id }, index.h("td", { class: "text-left" }, channel.channel.name, " ", channel.title ? `(${channel.title})` : ''), index.h("td", null, index.h("ir-switch", { checked: channel.is_active, onCheckChange: e => this.handleCheckChange(e.detail, channel) })), index.h("th", null, index.h("div", { class: "d-flex justify-content-end" }, index.h("div", { class: "btn-group" }, index.h("button", { type: "button", class: "btn  dropdown-toggle px-0", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" }, index.h("span", { class: "mr-1" }, " ", locales_store.locales.entries?.Lcz_Actions), index.h("svg", { class: 'caret-icon', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", height: 14, width: 14 }, index.h("path", { fill: "var(--blue)", d: "M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" }))), index.h("div", { class: "dropdown-menu dropdown-menu-right" }, actions(locales_store.locales.entries).map((a, index$1) => (index.h(index.Fragment, null, index.h("button", { onClick: () => {
                if (a.id === 'pull_future_reservation' || a.id === 'view_logs') {
                    return;
                }
                a.action(channel);
                if (a.id === 'edit') {
                    setTimeout(() => {
                        this.channel_status = 'edit';
                    }, 300);
                }
                else {
                    this.modal_cause = a.action(channel);
                    this.openModal();
                }
            }, key: a.id + '_item', class: `dropdown-item my-0 ${a.id === 'remove' ? 'danger' : ''}`, type: "button" }, a.icon(), a.name), index$1 < actions(locales_store.locales.entries).length - 1 && index.h("div", { key: a.id + '_divider', class: "dropdown-divider my-0" }))))))))))))), channel_service.channels_data.connected_channels.length === 0 && index.h("p", { class: "text-center" }, locales_store.locales.entries?.Lcz_NoChannelsAreConnected))), index.h("ir-sidebar", { sidebarStyles: {
                // width: '60rem',
                padding: '0',
            }, showCloseButton: false, onIrSidebarToggle: this.handleSidebarClose.bind(this), open: this.channel_status !== null }, this.channel_status && (index.h("ir-channel-editor", { slot: "sidebar-body", ticket: this.ticket, channel_status: this.channel_status, onCloseSideBar: this.handleSidebarClose.bind(this) }))), index.h("ir-modal", { modalTitle: this.modal_cause?.title, modalBody: this.modal_cause?.message, ref: el => (this.irModalRef = el), rightBtnText: locales_store.locales.entries?.Lcz_Confirm, leftBtnText: locales_store.locales.entries?.Lcz_Cancel, onCancelModal: this.handleCancelModal.bind(this), rightBtnColor: this.modal_cause?.main_color ?? 'primary', onConfirmModal: this.handleConfirmClicked.bind(this) })));
    }
    static get watchers() { return {
        "ticket": [{
                "ticketChanged": 0
            }]
    }; }
};
IrChannel.style = irChannelCss();

const irCityLedgerCss = () => `.sc-ir-city-ledger-h{display:block;height:100%}.city-ledger__agents-autocomplete.sc-ir-city-ledger{width:100%}@media (min-width: 768px){.city-ledger__agents-autocomplete.sc-ir-city-ledger{max-width:400px}}.city-ledger__content.sc-ir-city-ledger{display:flex;flex-direction:column;gap:var(--wa-space-m, 1rem)}.city-ledger__no-agent.sc-ir-city-ledger{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.625rem;padding:5rem 2rem;height:100%;text-align:center;color:var(--wa-color-text-quiet, #6b7280)}.city-ledger__no-agent-icon-container.sc-ir-city-ledger{display:flex;align-items:center;justify-content:center;width:3.5rem;height:3.5rem;border-radius:0.875rem;background:var(--wa-color-brand-fill-quiet, #eff6ff);color:var(--wa-color-brand-fill-loud, #2563eb);font-size:1.5rem;margin-bottom:0.5rem}.city-ledger__no-agent-title.sc-ir-city-ledger{margin:0;font-size:1rem;font-weight:600;color:var(--wa-color-text-normal, #111827)}.city-ledger__no-agent-sub.sc-ir-city-ledger{margin:0;font-size:0.875rem;max-width:400px;line-height:1.6}.statement-tab-panel.sc-ir-city-ledger{min-height:400px}.statement__empty-state.sc-ir-city-ledger{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.75rem;padding:4rem 2rem;color:var(--wa-color-text-quiet, #6b7280);text-align:center}.statement__empty-title.sc-ir-city-ledger{margin:0;font-size:1rem;font-weight:600;color:var(--wa-color-text-normal, #111827)}.statement__empty-subtitle.sc-ir-city-ledger{margin:0;font-size:0.875rem;max-width:360px}.statement__content.sc-ir-city-ledger{display:flex;flex-direction:column;gap:1.25rem}.statement__controls.sc-ir-city-ledger{display:flex;align-items:flex-end;flex-wrap:wrap;gap:1rem}.statement__period-group.sc-ir-city-ledger{display:flex;flex-direction:column;gap:0.375rem}.statement__label.sc-ir-city-ledger{font-size:0.8125rem;font-weight:500;color:var(--wa-color-text-quiet, #6b7280)}.statement__dates.sc-ir-city-ledger{display:flex;align-items:center;gap:0.5rem}.statement__date-picker.sc-ir-city-ledger{width:160px}.statement__dates-sep.sc-ir-city-ledger{color:var(--wa-color-text-quiet, #9ca3af);font-weight:500}.statement__action-bar.sc-ir-city-ledger{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.75rem;padding:0.75rem 1rem;background:var(--wa-color-brand-fill-quiet, #eff6ff);border:1px solid var(--wa-color-brand-border-quiet, #bfdbfe);border-radius:0.625rem 0.625rem 0 0;font-size:0.875rem}.statement__action-bar-label.sc-ir-city-ledger{display:flex;align-items:center;font-weight:500;color:var(--wa-color-brand-on-quiet)}.statement__action-bar-buttons.sc-ir-city-ledger{display:flex;gap:0.5rem;flex-wrap:wrap}.statement__preview-wrapper.sc-ir-city-ledger{display:flex;flex-direction:column}.statement-doc.sc-ir-city-ledger{background:#fff;border:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);border-top:0;border-radius:0 0 0.75rem 0.75rem;padding:2rem;display:flex;flex-direction:column;gap:1.5rem;box-shadow:0 1px 3px 0 rgb(0 0 0 / 0.04)}.statement-doc__header.sc-ir-city-ledger{display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:1rem}.statement-doc__hotel.sc-ir-city-ledger{display:flex;align-items:center;gap:0.875rem}.statement-doc__hotel-logo.sc-ir-city-ledger{display:flex;align-items:center;justify-content:center;width:3rem;height:3rem;background:var(--wa-color-neutral-fill-quiet, #f3f4f6);border-radius:0.5rem;color:var(--wa-color-text-quiet, #6b7280)}.statement-doc__title.sc-ir-city-ledger{margin:0;font-size:1.375rem;font-weight:700;color:var(--wa-color-text-normal, #111827)}.statement-doc__subtitle.sc-ir-city-ledger{margin:0;font-size:0.8125rem;color:var(--wa-color-text-quiet, #6b7280)}.statement-doc__meta.sc-ir-city-ledger{display:flex;flex-direction:column;gap:0.25rem;text-align:right}.statement-doc__meta-row.sc-ir-city-ledger{display:flex;justify-content:flex-end;gap:0.5rem;font-size:0.8125rem}.statement-doc__meta-label.sc-ir-city-ledger{color:var(--wa-color-text-quiet, #6b7280)}.statement-doc__meta-value.sc-ir-city-ledger{font-weight:500;color:var(--wa-color-text-normal, #111827)}.statement-doc__statement-number.sc-ir-city-ledger{font-family:ui-monospace, 'Cascadia Code', monospace;font-size:0.8125rem}.statement-doc__divider.sc-ir-city-ledger{border:0;border-top:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);margin:0}.statement-doc__parties.sc-ir-city-ledger{display:grid;grid-template-columns:1fr 1fr;gap:1rem}.statement-doc__party-label.sc-ir-city-ledger{margin:0 0 0.375rem;font-size:0.75rem;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:var(--wa-color-text-quiet, #6b7280)}.statement-doc__party-name.sc-ir-city-ledger{margin:0;font-size:1rem;font-weight:600;color:var(--wa-color-text-normal, #111827)}.statement-doc__party-detail.sc-ir-city-ledger{margin:0.125rem 0 0;font-size:0.8125rem;color:var(--wa-color-text-quiet, #6b7280)}.statement-doc__summary.sc-ir-city-ledger{display:grid;grid-template-columns:repeat(2, 1fr);gap:0.75rem}@media (min-width: 768px){.statement-doc__summary.sc-ir-city-ledger{grid-template-columns:repeat(4, 1fr)}}.statement-doc__summary-card.sc-ir-city-ledger{padding:1rem;border-radius:0.5rem;border:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);display:flex;flex-direction:column;gap:0.25rem}.statement-doc__summary-card--opening.sc-ir-city-ledger{border-color:var(--wa-color-neutral-border-quiet, #e5e7eb)}.statement-doc__summary-card--charges.sc-ir-city-ledger{border-color:#fecaca;background:#fef2f2}.statement-doc__summary-card--payments.sc-ir-city-ledger{border-color:#bbf7d0;background:#f0fdf4}.statement-doc__summary-card--due.sc-ir-city-ledger{border-color:var(--wa-color-brand-border-quiet, #bfdbfe);background:var(--wa-color-brand-fill-quiet, #eff6ff)}.statement-doc__summary-card-label.sc-ir-city-ledger{font-size:0.75rem;font-weight:500;color:var(--wa-color-text-quiet, #6b7280);text-transform:uppercase;letter-spacing:0.03em}.statement-doc__summary-card-value.sc-ir-city-ledger{font-size:1.125rem;font-weight:700;color:var(--wa-color-text-normal, #111827);font-variant-numeric:tabular-nums}.statement-doc__balance-due.sc-ir-city-ledger{color:var(--wa-color-brand-fill-loud, #2563eb)}.statement-doc__table-wrapper.sc-ir-city-ledger{overflow-x:auto;border:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);border-radius:0.5rem}.statement-doc__table.sc-ir-city-ledger{width:100%;border-collapse:collapse;font-size:0.875rem}.statement-doc__table.sc-ir-city-ledger thead.sc-ir-city-ledger th.sc-ir-city-ledger{padding:0.625rem 0.875rem;background:var(--wa-color-neutral-fill-quiet, #f9fafb);font-weight:600;font-size:0.8125rem;color:var(--wa-color-text-quiet, #6b7280);text-align:left;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);white-space:nowrap}.statement-doc__table.sc-ir-city-ledger tbody.sc-ir-city-ledger td.sc-ir-city-ledger{padding:0.625rem 0.875rem;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #f3f4f6);color:var(--wa-color-text-normal, #111827)}.statement-doc__table.sc-ir-city-ledger tfoot.sc-ir-city-ledger td.sc-ir-city-ledger{padding:0.75rem 0.875rem;background:var(--wa-color-neutral-fill-quiet, #f9fafb);border-top:2px solid var(--wa-color-neutral-border-quiet, #e5e7eb);font-weight:700}.statement-doc__col--right.sc-ir-city-ledger{text-align:right}.statement-doc__opening-row.sc-ir-city-ledger td.sc-ir-city-ledger{font-weight:500;background:var(--wa-color-neutral-fill-quiet, #fafafa);color:var(--wa-color-text-quiet, #6b7280);font-size:0.8125rem}.statement-doc__totals-row.sc-ir-city-ledger td.sc-ir-city-ledger{font-weight:700}.statement-doc__table-note.sc-ir-city-ledger{text-align:center;color:var(--wa-color-text-quiet, #9ca3af);font-size:0.8125rem;padding:1.5rem !important}.statement-doc__footer.sc-ir-city-ledger{background:var(--wa-color-neutral-fill-quiet, #f9fafb);border:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);border-radius:0.5rem;padding:0.875rem 1rem}.statement-doc__payment-notice.sc-ir-city-ledger{display:flex;align-items:flex-start;gap:0.5rem;font-size:0.8125rem;color:var(--wa-color-text-quiet, #6b7280)}.statement-doc__payment-notice.sc-ir-city-ledger p.sc-ir-city-ledger{margin:0;line-height:1.5}`;

const IrCityLedger = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
    ticket;
    p;
    baseurl;
    language = 'en';
    propertyid;
    agentId = null;
    resolvedPropertyId = null;
    currentTab = 'folio';
    isLoading = false;
    agents = [];
    selectedAgent = null;
    taxOptions = [];
    serviceCategoryOptions = [];
    currencySymbol = '$';
    // Statement tab state
    statementFrom = null;
    statementTo = null;
    showStatementPreview = false;
    folioSummary = null;
    agentSearch = '';
    fiscalFilters = { fromDate: undefined, toDate: undefined, docNumber: '', taxableOnly: false, type: 'all', proformaOnly: false };
    stmtFilters = { fromDate: null, toDate: null };
    panels = [
        { id: 'folio', label: 'Folio' },
        { id: 'fiscal-documents', label: 'Fiscal Documents' },
        { id: 'create-statement', label: 'Create Statement' },
    ];
    tokenService = new Token.Token();
    agentsService = new agents_service.AgentsService();
    propertyService = new property_service.PropertyService();
    bookingService = new booking_store.BookingService();
    systemService = new system_service.SystemService();
    toolbarRef;
    createInvoiceDialogRef;
    currencies = [];
    get filteredAgents() {
        const q = this.agentSearch.trim().toLowerCase();
        if (!q)
            return this.agents;
        return this.agents.filter(a => a.name.toLowerCase().includes(q));
    }
    componentWillLoad() {
        const agentId = this.getAgentIdFromSearchParams();
        if (agentId && !this.agentId) {
            this.agentId = agentId;
        }
        if (this.ticket) {
            if (this.baseurl) {
                this.tokenService.setBaseUrl(this.baseurl);
            }
            this.tokenService.setToken(this.ticket);
            this.init();
        }
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue === oldValue)
            return;
        if (this.baseurl)
            this.tokenService.setBaseUrl(this.baseurl);
        this.tokenService.setToken(this.ticket);
        this.init();
    }
    handlePropertyIdChange(newValue, oldValue) {
        if (newValue === oldValue)
            return;
        if (this.ticket)
            this.init();
    }
    handleAgentIdChange(newId, oldId) {
        if (newId === oldId || this.isLoading)
            return;
        this.applyAgentIdProp();
    }
    getAgentIdFromSearchParams() {
        const agentId = new URLSearchParams(window.location.search).get('agentId');
        return agentId ? Number(agentId) : null;
    }
    applyAgentIdProp() {
        if (this.agentId == null)
            return;
        const agent = this.agents.find(a => a.id === this.agentId);
        if (!agent)
            return;
        this.selectedAgent = agent;
        this.showStatementPreview = false;
        this.folioSummary = null;
        requestAnimationFrame(() => {
            const autocomplete = this.el.querySelector('ir-autocomplete');
            if (autocomplete)
                autocomplete.value = agent.name;
        });
    }
    async init() {
        try {
            this.isLoading = true;
            // If a property name was supplied but no numeric id, resolve the id first.
            let propertyId = this.propertyid;
            if (!propertyId && this.p) {
                await this.propertyService.getExposedProperty({ id: null, language: this.language, aname: this.p });
                propertyId = calendarData.calendar_data.id;
            }
            this.resolvedPropertyId = propertyId;
            const resolvedByName = !this.propertyid && !!this.p;
            const [, setupEntries, agents, currencies] = await Promise.all([
                resolvedByName ? Promise.resolve() : this.propertyService.getExposedProperty({ id: propertyId, language: this.language }),
                this.bookingService.getSetupEntriesByTableNameMulti(['_SVC_CATEGORY']),
                this.agentsService.getExposedAgents({ property_id: propertyId }),
                this.systemService.getExposedCurrencies(),
            ]);
            this.currencies = currencies;
            this.agents = agents ?? [];
            this.applyAgentIdProp();
            const { svc_category } = this.bookingService.groupEntryTablesResult(setupEntries);
            this.serviceCategoryOptions = (svc_category ?? []).map(entry => ({
                id: entry.CODE_NAME,
                label: entry.CODE_VALUE_EN,
            }));
            this.currencySymbol = calendarData.calendar_data.currency?.symbol ?? '$';
        }
        catch (error) {
            console.error('Failed to initialize city ledger', error);
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        if (this.isLoading) {
            return index.h("ir-loading-screen", null);
        }
        return (index.h(index.Host, null, index.h("ir-page", { label: 'City Ledger', description: this.selectedAgent?.name }, index.h("i", { slot: "page-description", style: { marginLeft: '0.5rem' } }, this.selectedAgent?.code), index.h("ir-autocomplete", { slot: "page-header",
            // size="m"
            placeholder: "Select agent", class: "city-ledger__agents-autocomplete", "onText-change": (e) => {
                this.agentSearch = e.detail ?? '';
            }, "onCombobox-change": (e) => {
                this.agentSearch = '';
                this.selectedAgent = e.detail ? this.agents?.find(agent => agent.id === Number(e.detail)) : null;
                this.showStatementPreview = false;
                this.folioSummary = null;
                this.fiscalFilters = { fromDate: undefined, toDate: undefined, docNumber: '', taxableOnly: false, type: 'all', proformaOnly: false };
                this.stmtFilters = { fromDate: null, toDate: null };
                // Update URL search param
                if (this.selectedAgent) {
                    const url = new URL(window.location.href);
                    url.searchParams.set('agentId', this.selectedAgent.id.toString());
                    window.history.replaceState({}, '', url);
                }
            } }, this.filteredAgents.map(agent => (index.h("ir-autocomplete-option", { key: agent.id, label: agent.name, value: String(agent.id) }, agent.name)))), !this.selectedAgent ? (index.h("ir-empty-state", { message: "Select an agent to get started", class: "city-ledger__no-agent" }, index.h("div", { slot: "icon", class: 'city-ledger__no-agent-icon-container' }, index.h("wa-icon", { name: "building", class: "city-ledger__no-agent-icon" })), index.h("p", { class: "city-ledger__no-agent-sub" }, "Choose an agent from the selector above to view their city ledger folio, fiscal documents, and statements."))) : (index.h("div", { class: "city-ledger__content" }, index.h("ir-city-ledger-toolbar", { ref: el => (this.toolbarRef = el), agentId: this.selectedAgent?.id, currencySymbol: this.currencySymbol, onCreateInvoice: () => this.createInvoiceDialogRef.openModal() }), index.h("wa-tab-group", { activation: "manual", "onwa-tab-show": e => {
                this.currentTab = e.detail.name.toString();
            }, active: this.currentTab }, this.panels.map(panel => (index.h("wa-tab", { key: panel.id, panel: panel.id }, panel.label))), index.h("wa-tab-panel", { name: "folio" }, index.h("ir-city-ledger-folio", { agent: this.selectedAgent, propertyId: this.resolvedPropertyId, ticket: this.ticket, language: this.language, serviceCategoryOptions: this.serviceCategoryOptions, currencies: this.currencies, onFolioSummaryUpdate: e => (this.folioSummary = e.detail) })), index.h("wa-tab-panel", { name: "fiscal-documents" }, index.h("ir-city-ledger-fiscal-documents", { agentId: this.selectedAgent?.id, currencySymbol: calendarData.calendar_data.property?.currency?.symbol, currencies: this.currencies, ticket: this.ticket, propertyId: this.resolvedPropertyId, initialFilters: this.fiscalFilters, onClFiscalFiltersChange: e => (this.fiscalFilters = e.detail) })), index.h("wa-tab-panel", { name: "create-statement", class: "statement-tab-panel" }, index.h("ir-city-ledger-statements", { agentId: this.selectedAgent?.id, agentName: this.selectedAgent?.name ?? '', currencySymbol: calendarData.calendar_data.property?.currency?.symbol, currencies: this.currencies, ticket: this.ticket, propertyId: this.resolvedPropertyId, initialFilters: this.stmtFilters, onClStmtFiltersChange: e => (this.stmtFilters = e.detail) })))))), index.h("ir-cl-invoice-dialog", { ref: el => (this.createInvoiceDialogRef = el), agentId: this.selectedAgent?.id, onInvoiceIssued: async () => {
                await this.toolbarRef?.refresh();
            } }), index.h("ir-cl-fiscal-document-preview", { ticket: this.ticket, propertyId: calendarData.calendar_data?.property?.id, onDocumentConverted: () => this.toolbarRef?.refresh() })));
    }
    static get watchers() { return {
        "ticket": [{
                "handleTicketChange": 0
            }],
        "propertyid": [{
                "handlePropertyIdChange": 0
            }],
        "agentId": [{
                "handleAgentIdChange": 0
            }]
    }; }
};
IrCityLedger.style = irCityLedgerCss();

const irDailyRevenueCss = () => `.sc-ir-daily-revenue-h{display:block}.daily-revenue__meta.sc-ir-daily-revenue{display:flex;flex-direction:column;gap:1rem}.daily-revenue__table.sc-ir-daily-revenue{flex:1 1 0%}@media (min-width: 768px){.daily-revenue__meta.sc-ir-daily-revenue{flex-direction:row}}`;

const IrDailyRevenue = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.preventPageLoad = index.createEvent(this, "preventPageLoad");
    }
    language = '';
    ticket = '';
    propertyid;
    p;
    isPageLoading;
    property_id;
    groupedPayment;
    previousDateGroupedPayments;
    isLoading;
    filters = {
        date: moment.hooks().format('YYYY-MM-DD'),
        from_date: null,
        to_date: null,
        // from_date: moment().add(-1, 'days').format('YYYY-MM-DD'),
        // to_date: moment().format('YYYY-MM-DD'),
        users: null,
    };
    sideBarEvent;
    tokenService = new Token.Token();
    roomService = new room_service.RoomService();
    propertyService = new property_service.PropertyService();
    bookingService = new booking_store.BookingService();
    paymentEntries;
    preventPageLoad;
    componentWillLoad() {
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            this.initializeApp();
        }
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.tokenService.setToken(this.ticket);
        this.initializeApp();
    }
    handleOpenSidebar(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.sideBarEvent = e.detail;
    }
    handleFetchNewReports(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.filters = { ...e.detail };
        this.getPaymentReports();
    }
    async handleResetBooking(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        this.getPaymentReports(false, true);
    }
    handleSidebarClose = (e) => {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.sideBarEvent = null;
    };
    renderSidebarBody() {
        if (!this.sideBarEvent) {
            return;
        }
        switch (this.sideBarEvent.type) {
            case 'booking':
                return (index.h("ir-booking-details", { slot: "sidebar-body", hasPrint: true, hasReceipt: true, hasCloseButton: true, onCloseSidebar: this.handleSidebarClose, is_from_front_desk: true, propertyid: this.property_id, hasRoomEdit: true, hasRoomDelete: true, bookingNumber: this.sideBarEvent.payload.bookingNumber.toString(), ticket: this.ticket, language: this.language, hasRoomAdd: true }));
            default:
                return null;
        }
    }
    async initializeApp() {
        this.isPageLoading = true;
        try {
            let propertyId = this.propertyid;
            if (!propertyId && !this.p) {
                throw new Error('Property ID or username is required');
            }
            if (!propertyId) {
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                });
                propertyId = propertyData.My_Result.id;
            }
            this.property_id = propertyId;
            const requests = [
                this.bookingService.getSetupEntriesByTableNameMulti(['_PAY_TYPE', '_PAY_TYPE_GROUP', '_PAY_METHOD']),
                this.getPaymentReports(),
                this.roomService.fetchLanguage(this.language),
            ];
            if (propertyId) {
                requests.push(this.roomService.getExposedProperty({
                    id: propertyId,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                }));
            }
            const [setupEntries] = await Promise.all(requests);
            const { pay_type, pay_type_group, pay_method } = this.bookingService.groupEntryTablesResult(setupEntries);
            this.paymentEntries = {
                groups: pay_type_group,
                methods: pay_method,
                types: pay_type,
            };
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isPageLoading = false;
        }
    }
    groupPaymentsByName(payments) {
        const groupedPayment = new Map();
        for (const payment of payments) {
            const key = `${payment.payTypeCode}_${payment.payMethodCode}`;
            const p = groupedPayment.get(key) ?? [];
            groupedPayment.set(key, [...p, payment]);
        }
        return new Map([...groupedPayment.entries()].sort(([a], [b]) => {
            const aNum = Number(a);
            const bNum = Number(b);
            if (!isNaN(aNum) && !isNaN(bNum)) {
                return aNum - bNum;
            }
            return a.localeCompare(b);
        }));
    }
    async getPaymentReports(isExportToExcel = false, excludeYesterday = false) {
        try {
            const getReportObj = (report) => {
                return {
                    method: report.METHOD,
                    payTypeCode: report.PAY_TYPE_CODE,
                    payMethodCode: report.PAY_METHOD_CODE,
                    amount: report.AMOUNT,
                    date: report.DATE,
                    hour: report.HOUR,
                    minute: report.MINUTE,
                    user: report.USER,
                    currency: report.CURRENCY,
                    bookingNbr: report.BOOKING_NBR,
                    id: v4.v4(),
                };
            };
            this.isLoading = isExportToExcel ? 'export' : 'filter';
            const requests = [
                this.propertyService.getDailyRevenueReport({
                    from_date: this.filters.date ? this.filters.date : this.filters.from_date,
                    to_date: this.filters.date ? this.filters.date : this.filters.to_date,
                    property_id: this.property_id?.toString(),
                    is_export_to_excel: isExportToExcel,
                }),
            ];
            if (!isExportToExcel && !excludeYesterday && this.filters.date) {
                requests.push(this.propertyService.getDailyRevenueReport({
                    from_date: moment.hooks(this.filters.date, 'YYYY-MM-DD').add(-1, 'days').format('YYYY-MM-DD'),
                    to_date: moment.hooks(this.filters.date, 'YYYY-MM-DD').add(-1, 'days').format('YYYY-MM-DD'),
                    property_id: this.property_id?.toString(),
                    is_export_to_excel: isExportToExcel,
                }));
            }
            const results = await Promise.all(requests);
            if (!isExportToExcel) {
                if (results[0]) {
                    this.groupedPayment = this.groupPaymentsByName(results[0]?.map(getReportObj));
                }
                else {
                    this.groupedPayment = new Map();
                }
                if (results[1])
                    this.previousDateGroupedPayments = this.groupPaymentsByName(results[1]?.map(getReportObj));
            }
        }
        catch (e) {
            console.log(e);
        }
        finally {
            this.isLoading = null;
        }
    }
    render() {
        if (this.isPageLoading) {
            return index.h("ir-loading-screen", null);
        }
        return (index.h(index.Host, null, index.h("ir-toast", null), index.h("ir-interceptor", null), index.h("section", { class: "p-2 d-flex flex-column", style: { gap: '1rem' } }, index.h("div", { class: "d-flex align-items-center justify-content-between" }, index.h("h3", { class: "mb-1 mb-md-0" }, "Daily Revenue"), index.h("ir-button", { size: "sm", btn_color: "outline", isLoading: this.isLoading === 'export', text: locales_store.locales.entries?.Lcz_Export, onClickHandler: async (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                await this.getPaymentReports(true);
            }, btnStyle: { height: '100%' }, iconPosition: "right", icon_name: "file", icon_style: { '--icon-size': '14px' } })), index.h("ir-revenue-summary", { filters: this.filters, previousDateGroupedPayments: this.previousDateGroupedPayments, groupedPayments: this.groupedPayment, paymentEntries: this.paymentEntries }), index.h("div", { class: "daily-revenue__meta" }, index.h("ir-daily-revenue-filters", { isLoading: this.isLoading === 'filter', payments: this.groupedPayment }), index.h("ir-revenue-table", { filters: this.filters, class: 'daily-revenue__table', paymentEntries: this.paymentEntries, payments: this.groupedPayment }))), index.h("ir-sidebar", { sidebarStyles: {
                width: this.sideBarEvent?.type === 'booking' ? '80rem' : 'var(--sidebar-width,40rem)',
                background: this.sideBarEvent?.type === 'booking' ? 'var(--ir-color-muted-background,#f2f3f8)' : 'white',
            }, open: Boolean(this.sideBarEvent), showCloseButton: false, onIrSidebarToggle: this.handleSidebarClose }, this.renderSidebarBody())));
    }
    static get watchers() { return {
        "ticket": [{
                "ticketChanged": 0
            }]
    }; }
};
IrDailyRevenue.style = irDailyRevenueCss();

const irDeparturesCss = () => `.page-title.sc-ir-departures{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-xl)}.sc-ir-departures-h{height:100% !important;overflow-y:auto !important}`;

const IrDepartures = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    ticket;
    propertyid;
    language = 'en';
    p;
    bookingNumber;
    booking;
    paymentEntries;
    isPageLoading;
    payment;
    checkoutState = null;
    invoiceState = null;
    tokenService = new Token.Token();
    roomService = new room_service.RoomService();
    bookingService = new booking_store.BookingService();
    paymentFolioRef;
    componentWillLoad() {
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            this.init();
        }
        departures_store.onDeparturesStoreChange('today', _ => {
            this.getBookings();
        });
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.tokenService.setToken(this.ticket);
            this.init();
        }
    }
    handleOpen(e) {
        this.bookingNumber = e.detail;
    }
    handleBookingPayment(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { booking_nbr, payment } = e.detail;
        this.booking = departures_store.departuresStore.bookings.find(b => b.booking_nbr === booking_nbr);
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
    async handleResetExposedCancellationDueAmount(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.getBookings();
    }
    async init() {
        try {
            this.isPageLoading = true;
            if (!this.propertyid && !this.p) {
                throw new Error('Missing credentials');
            }
            let propertyId = this.propertyid;
            if (!propertyId) {
                await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                });
            }
            const [_, __, setupEntries] = await Promise.all([
                calendarData.calendar_data?.property ? Promise.resolve(null) : this.roomService.getExposedProperty({ id: this.propertyid || 0, language: this.language, aname: this.p }),
                this.roomService.fetchLanguage(this.language),
                this.bookingService.getSetupEntriesByTableNameMulti(['_BED_PREFERENCE_TYPE', '_DEPARTURE_TIME', '_PAY_TYPE', '_PAY_TYPE_GROUP', '_PAY_METHOD']),
                this.getBookings(),
            ]);
            const { pay_type, pay_type_group, pay_method } = this.bookingService.groupEntryTablesResult(setupEntries);
            this.paymentEntries = { types: pay_type, groups: pay_type_group, methods: pay_method };
        }
        catch (error) {
        }
        finally {
            this.isPageLoading = false;
        }
    }
    async getBookings() {
        const { bookings, total_count } = await this.bookingService.getRoomsToCheckout({
            property_id: calendarData.calendar_data.property?.id?.toString() || this.propertyid?.toString(),
            check_out_date: departures_store.departuresStore.today,
            page_index: departures_store.departuresStore.pagination.currentPage,
            page_size: departures_store.departuresStore.pagination.pageSize,
        });
        departures_store.setDepartureTotal(total_count ?? 0);
        departures_store.initializeDeparturesStore(bookings);
    }
    handleCheckoutRoom(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.checkoutState = event.detail;
    }
    async handlePaginationChange(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const nextPage = event.detail?.currentPage ?? 1;
        if (nextPage === departures_store.departuresStore.pagination.currentPage) {
            return;
        }
        departures_store.setDeparturesPage(nextPage);
        await this.getBookings();
    }
    async handleCheckoutDialogClosed(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const state = { ...this.checkoutState };
        this.checkoutState = null;
        switch (event.detail.reason) {
            case 'checkout':
                await this.getBookings();
                break;
            case 'openInvoice':
                this.invoiceState = { ...state };
                await this.getBookings();
                break;
        }
    }
    async handlePaginationPageSizeChange(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const nextPageSize = event.detail?.pageSize;
        if (!Number.isFinite(nextPageSize)) {
            return;
        }
        const normalizedPageSize = Math.floor(Number(nextPageSize));
        if (normalizedPageSize === departures_store.departuresStore.pagination.pageSize) {
            return;
        }
        departures_store.setDeparturesPageSize(normalizedPageSize);
        await this.getBookings();
    }
    handleInvoiceClose(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.invoiceState = null;
    }
    render() {
        if (this.isPageLoading) {
            return index.h("ir-loading-screen", null);
        }
        return (index.h(index.Host, null, index.h("ir-toast", null), index.h("ir-interceptor", { handledEndpoints: ['/Get_Rooms_To_Check_Out'] }), index.h("div", { class: 'ir-page__container' }, index.h("h3", { class: "page-title" }, "Check-outs"), index.h("ir-departures-table", { onCheckoutRoom: event => this.handleCheckoutRoom(event), onRequestPageChange: event => this.handlePaginationChange(event), onRequestPageSizeChange: event => this.handlePaginationPageSizeChange(event) })), index.h("ir-booking-details-drawer", { open: !!this.bookingNumber, propertyId: this.propertyid, bookingNumber: this.bookingNumber?.toString(), ticket: this.ticket, language: this.language, onBookingDetailsDrawerClosed: () => (this.bookingNumber = null) }), index.h("ir-payment-folio", { style: { height: 'auto' }, booking: this.booking, bookingNumber: this.booking?.booking_nbr, paymentEntries: this.paymentEntries, payment: this.payment, mode: 'payment-action', ref: el => (this.paymentFolioRef = el), onCloseModal: () => {
                this.booking = null;
                this.payment = null;
            } }), index.h("ir-checkout-dialog", { booking: this.checkoutState?.booking, identifier: this.checkoutState?.identifier, open: this.checkoutState !== null, onCheckoutDialogClosed: event => this.handleCheckoutDialogClosed(event) }), index.h("ir-invoice", { onInvoiceClose: event => this.handleInvoiceClose(event), booking: this.invoiceState?.booking, roomIdentifier: this.invoiceState?.identifier, open: this.invoiceState !== null })));
    }
    static get watchers() { return {
        "ticket": [{
                "handleTicketChange": 0
            }]
    }; }
};
IrDepartures.style = irDeparturesCss();

index$1.libExports.z.object({
    AC_ID: index$1.libExports.z.number(),
    NAME: index$1.libExports.z.string(),
    aname: index$1.libExports.z.string(),
    level2: index$1.libExports.z.string().nullable().optional(),
    COUNTRY_ID: index$1.libExports.z.number(),
});
const Params_Get_GHS_Candidate_Properties_Schema = index$1.libExports.z.object({
    COUNTRY_ID: index$1.libExports.z.number().nullable().optional(),
});
const Params_Generate_GHS_Listing_For_Selection_Schema = index$1.libExports.z.object({
    Selected_AC_IDs: index$1.libExports.z.array(index$1.libExports.z.number()),
});
const Params_Update_GHS_Enablement_Schema = index$1.libExports.z.object({
    AC_ID: index$1.libExports.z.number(),
    IS_ENABLED: index$1.libExports.z.boolean(),
});

class GHSService {
    async Get_GHS_Candidate_Properties(params) {
        const validatedParams = Params_Get_GHS_Candidate_Properties_Schema.parse(params);
        const { data } = await axios.axios.post(`/Get_GHS_Candidate_Properties`, validatedParams);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result || [];
    }
    async Generate_GHS_Listing_For_Selection(params) {
        const validatedParams = Params_Generate_GHS_Listing_For_Selection_Schema.parse(params);
        const { data } = await axios.axios.post(`/Generate_GHS_Listing_For_Selection`, validatedParams);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    async Update_GHS_Enablement(params) {
        const validatedParams = Params_Update_GHS_Enablement_Schema.parse(params);
        const { data } = await axios.axios.post(`/Update_GHS_Enablement`, validatedParams);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
    }
}

const irGhsOnboardingCss = () => `.sc-ir-ghs-onboarding-h{display:block;box-sizing:border-box}*.sc-ir-ghs-onboarding,*.sc-ir-ghs-onboarding::before,*.sc-ir-ghs-onboarding::after{box-sizing:inherit}.ir-ghs-onboarding__container.sc-ir-ghs-onboarding{padding:var(--wa-space-m);display:flex;flex-direction:column;gap:var(--wa-space-m)}.ir-ghs-onboarding__header.sc-ir-ghs-onboarding{display:flex;align-items:center;justify-content:space-between}.ir-ghs-onboarding__title.sc-ir-ghs-onboarding{margin:0;font-size:var(--wa-font-size-large);margin-bottom:var(--wa-space-xs);color:var(--wa-color-neutral-900)}.ir-ghs-onboarding__content.sc-ir-ghs-onboarding{display:flex;flex-direction:column;gap:var(--wa-space-m);margin-top:var(--wa-space-m)}.ir-ghs-onboarding__main-row.sc-ir-ghs-onboarding{display:flex;flex-direction:column;gap:var(--wa-space-m);align-items:stretch}@media (min-width: 992px){.ir-ghs-onboarding__main-row.sc-ir-ghs-onboarding{flex-direction:row;align-items:flex-start}.ir-ghs-onboarding__candidate-table.sc-ir-ghs-onboarding{flex:0 0 calc(60% - var(--wa-space-m) / 2);min-width:0}.ir-ghs-onboarding__selection-bucket.sc-ir-ghs-onboarding{flex:0 0 calc(40% - var(--wa-space-m) / 2);min-width:0}}.ir-ghs-onboarding__dialog-body.sc-ir-ghs-onboarding{padding:0;display:flex;flex-direction:column;align-items:center;justify-content:center}.ir-ghs-onboarding__dialog-footer.sc-ir-ghs-onboarding{display:flex;gap:var(--wa-space-s);justify-content:flex-end}`;

const IrGhsOnboarding = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
    ticket;
    baseurl;
    properties = [];
    countries = [];
    selectedCountryId = null;
    selectedProperties = [];
    isPageLoading = false;
    isDataLoading = false;
    isGenerating = false;
    isActivating = false;
    propertyToActivate = null;
    ghsService = new GHSService();
    bookingService = new booking_store.BookingService();
    tokenService = new Token.Token();
    removeAllModal;
    activateModal;
    ticketChanged(newValue) {
        if (newValue) {
            this.tokenService.setToken(newValue);
            this.init();
        }
    }
    async componentWillLoad() {
        if (this.baseurl) {
            this.tokenService.setBaseUrl(this.baseurl);
        }
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            await this.init();
        }
    }
    async init() {
        this.isPageLoading = true;
        try {
            const [allCountries, allProperties] = await Promise.all([this.bookingService.getCountries('EN'), this.ghsService.Get_GHS_Candidate_Properties({ COUNTRY_ID: null })]);
            const validCountryIds = new Set(allProperties.map(p => p.COUNTRY_ID));
            this.countries = allCountries.filter(c => validCountryIds.has(c.id)).sort((a, b) => a.name.localeCompare(b.name));
            this.properties = allProperties;
        }
        catch (error) {
            this.showToast('error', 'Initialization Error', error.message || 'Failed to load properties');
        }
        finally {
            this.isPageLoading = false;
        }
    }
    async fetchProperties() {
        this.isDataLoading = true;
        this.properties = [];
        try {
            const props = await this.ghsService.Get_GHS_Candidate_Properties({
                COUNTRY_ID: this.selectedCountryId,
            });
            this.properties = props;
        }
        catch (error) {
            this.showToast('error', 'Error', error.message || 'Failed to fetch properties');
        }
        finally {
            this.isDataLoading = false;
        }
    }
    handleToggleAll(selectAll) {
        if (selectAll) {
            const currentSelectedIds = this.selectedProperties.map(p => p.AC_ID);
            const newSelections = this.properties.filter(p => !currentSelectedIds.includes(p.AC_ID));
            this.selectedProperties = [...this.selectedProperties, ...newSelections];
        }
        else {
            const candidateIds = this.properties.map(p => p.AC_ID);
            this.selectedProperties = this.selectedProperties.filter(p => !candidateIds.includes(p.AC_ID));
        }
    }
    togglePropertySelection(property) {
        const index = this.selectedProperties.findIndex(p => p.AC_ID === property.AC_ID);
        if (index !== -1) {
            this.selectedProperties = this.selectedProperties.filter(p => p.AC_ID !== property.AC_ID);
        }
        else {
            this.selectedProperties = [...this.selectedProperties, property];
        }
    }
    removePropertySelection(acId) {
        this.selectedProperties = this.selectedProperties.filter(p => p.AC_ID !== acId);
    }
    handleRemoveAll() {
        if (this.selectedProperties.length === 0)
            return;
        this.removeAllModal.openModal();
    }
    handleConfirmRemoveAll() {
        this.selectedProperties = [];
        this.removeAllModal.closeModal();
    }
    handleActivateProperty(property) {
        this.propertyToActivate = property;
        this.activateModal.openModal();
    }
    async handleConfirmActivate() {
        if (!this.propertyToActivate)
            return;
        this.isActivating = true;
        try {
            await this.ghsService.Update_GHS_Enablement({
                AC_ID: this.propertyToActivate.AC_ID,
                IS_ENABLED: true,
            });
            this.showToast('success', 'Success', `${this.propertyToActivate.NAME} GHS has been activated.`);
            const activatedId = this.propertyToActivate.AC_ID;
            this.properties = this.properties.filter(p => p.AC_ID !== activatedId);
            this.selectedProperties = this.selectedProperties.filter(p => p.AC_ID !== activatedId);
        }
        catch (error) {
            this.showToast('error', 'Activation Error', error.message || 'Failed to activate property');
        }
        finally {
            this.isActivating = false;
            this.propertyToActivate = null;
            this.activateModal.closeModal();
        }
    }
    async handleGenerateRequest() {
        if (this.selectedProperties.length === 0) {
            this.showToast('error', 'Selection Required', 'Please select at least one property.');
            return;
        }
        this.isGenerating = true;
        try {
            const downloadUrl = await this.ghsService.Generate_GHS_Listing_For_Selection({
                Selected_AC_IDs: this.selectedProperties.map(p => p.AC_ID),
            });
            if (downloadUrl) {
                // Create a clean axios instance to bypass global interceptors (avoiding network errors)
                const cleanAxios = axios.axios.create();
                const response = await cleanAxios.get(downloadUrl, { responseType: 'blob' });
                // Create a local blob URL
                const blob = new Blob([response.data], { type: 'application/xml' });
                const localUrl = window.URL.createObjectURL(blob);
                // Trigger download of the local blob
                const a = document.createElement('a');
                a.href = localUrl;
                const filename = downloadUrl.split('/').pop() || 'ghs_onboarding.xml';
                a.setAttribute('download', filename);
                document.body.appendChild(a);
                a.click();
                // Clean up
                document.body.removeChild(a);
                window.URL.revokeObjectURL(localUrl);
                this.selectedProperties = [];
                await this.fetchProperties();
                this.showToast('success', 'Success', 'GHS onboarding request downloaded.');
            }
        }
        catch (error) {
            this.showToast('error', 'Generation Error', error.message || 'An error occurred while generating the request.');
        }
        finally {
            this.isGenerating = false;
        }
    }
    showToast(type, title, description) {
        utils.showToast({
            type,
            title,
            description,
            position: 'top-right',
        });
    }
    render() {
        if (this.isPageLoading) {
            return index.h("ir-loading-screen", null);
        }
        return (index.h(index.Host, null, index.h("ir-toast", null), index.h("ir-interceptor", null), index.h("ir-dialog", { ref: el => (this.activateModal = el), label: "Activation Confirmation", onIrDialogHide: () => {
                this.propertyToActivate = null;
                this.activateModal.closeModal();
            } }, index.h("div", { class: "ir-ghs-onboarding__dialog-body" }, index.h("p", { class: "m-0 text-center" }, "Are you sure you want to ", index.h("strong", null, "activate"), " GHS for ", index.h("span", { class: "text-primary" }, this.propertyToActivate?.NAME), "?"), index.h("p", { class: "small text-muted mt-2 mb-0" }, "This will enable real-time synchronization with Google.")), index.h("div", { slot: "footer", class: "ir-ghs-onboarding__dialog-footer" }, index.h("ir-custom-button", { type: "button", variant: "neutral", appearance: "filled", size: "m", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.propertyToActivate = null;
                this.activateModal.closeModal();
            } }, "Cancel"), index.h("ir-custom-button", { type: "button", variant: "success", appearance: "accent", size: "m", loading: this.isActivating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.handleConfirmActivate();
            } }, "Activate"))), index.h("ir-dialog", { ref: el => (this.removeAllModal = el), label: "Confirmation", onIrDialogHide: () => this.removeAllModal.closeModal() }, index.h("div", { class: "ir-ghs-onboarding__dialog-body" }, index.h("p", { class: "m-0 text-center" }, "Are you sure you want to remove all selected properties from the list?")), index.h("div", { slot: "footer", class: "ir-ghs-onboarding__dialog-footer" }, index.h("ir-custom-button", { type: "button", variant: "neutral", appearance: "filled", size: "m", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.removeAllModal.closeModal();
            } }, "Cancel"), index.h("ir-custom-button", { type: "button", variant: "danger", appearance: "accent", size: "m", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.handleConfirmRemoveAll();
            } }, "Confirm"))), index.h("section", { class: "ir-ghs-onboarding__container" }, index.h("div", { class: "ir-ghs-onboarding__header" }, index.h("h3", { class: "ir-ghs-onboarding__title" }, "Google hotels request")), index.h("div", { class: "ir-ghs-onboarding__content" }, index.h("div", { class: "ir-ghs-onboarding__main-row" }, index.h("ir-ghs-candidate-table", { class: "ir-ghs-onboarding__candidate-table", properties: this.properties, countries: this.countries, selectedCountryId: this.selectedCountryId, selectedProperties: this.selectedProperties, propertyToActivate: this.propertyToActivate, isLoading: this.isDataLoading, baseUrl: this.baseurl, onToggleSelection: e => this.togglePropertySelection(e.detail), onToggleAll: e => this.handleToggleAll(e.detail), onActivateProperty: e => this.handleActivateProperty(e.detail), onCountryChange: e => {
                this.selectedCountryId = e.detail;
                this.fetchProperties();
            } }), index.h("ir-ghs-selection-bucket", { class: "ir-ghs-onboarding__selection-bucket", selectedProperties: this.selectedProperties, isGenerating: this.isGenerating, onGenerateRequest: () => this.handleGenerateRequest(), onRemoveAll: () => this.handleRemoveAll(), onRemoveProperty: e => this.removePropertySelection(e.detail) }))))));
    }
    static get watchers() { return {
        "ticket": [{
                "ticketChanged": 0
            }]
    }; }
};
IrGhsOnboarding.style = irGhsOnboardingCss();

const irHkTasksCss = () => `.sc-ir-hk-tasks-h{display:block;box-sizing:border-box}.sc-ir-hk-tasks-h *.sc-ir-hk-tasks{box-sizing:border-box}.tasks-view.sc-ir-hk-tasks{display:flex;flex-direction:column;gap:1rem;min-width:0}.tasks-table-wrapper.sc-ir-hk-tasks{display:flex;flex-direction:column;flex:1;min-width:0;width:100%}@media (min-width: 1024px){.tasks-view.sc-ir-hk-tasks{flex-direction:row;align-items:flex-start}.tasks-table-wrapper.sc-ir-hk-tasks{flex:3;min-width:0}}`;

const IrHkTasks = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.clearSelectedHkTasks = index.createEvent(this, "clearSelectedHkTasks");
    }
    get el() { return index.getElement(this); }
    language = '';
    ticket = '';
    propertyid;
    p;
    baseUrl;
    isLoading = false;
    isCleaningLoading = false;
    selectedDuration = '';
    selectedHouseKeeper = '0';
    selectedRoom = null;
    archiveOpened = false;
    property_id;
    isSidebarOpen;
    isApplyFiltersLoading;
    filters;
    modalCauses;
    clearSelectedHkTasks;
    hkNameCache = {};
    roomService = new room_service.RoomService();
    houseKeepingService = new housekeeping_service.HouseKeepingService();
    token = new Token.Token();
    table_sorting = new Map();
    modal;
    componentWillLoad() {
        if (this.baseUrl) {
            this.token.setBaseUrl(this.baseUrl);
        }
        if (this.ticket !== '') {
            this.token.setToken(this.ticket);
            this.init();
        }
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
        this.init();
    }
    handleCloseSidebar(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.isSidebarOpen = false;
    }
    handleSortingChanged(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { field, direction } = e.detail;
        console.log(e.detail);
        if (field === 'date') {
            return;
        }
        this.table_sorting.set(field, direction);
    }
    handleSkipSelectedTask(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.modalCauses = { task: e.detail, cause: 'skip' };
        this.modal?.openModal();
    }
    async init() {
        try {
            this.isLoading = true;
            hkTasks_store.setLoading(true);
            let propertyId = this.propertyid;
            if (!this.propertyid && !this.p) {
                throw new Error('Property ID or username is required');
            }
            // let roomResp = null;
            if (!propertyId) {
                console.log(propertyId);
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                });
                // roomResp = propertyData;
                propertyId = propertyData.My_Result.id;
            }
            this.property_id = propertyId;
            const requests = [this.houseKeepingService.getExposedHKSetup(this.property_id), this.roomService.fetchLanguage(this.language)];
            if (this.propertyid) {
                requests.push(this.roomService.getExposedProperty({
                    id: this.propertyid,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                }));
            }
            await Promise.all(requests);
            const tasksResult = await this.houseKeepingService.getHkTasks({
                property_id: this.property_id,
                from_date: moment.hooks().format('YYYY-MM-DD'),
                to_date: moment.hooks().format('YYYY-MM-DD'),
                housekeepers: [],
                cleaning_frequency: (calendarData.calendar_data.cleaning_frequency ?? housekeeping_service.housekeeping_store?.hk_criteria?.cleaning_frequencies[0])?.code,
                dusty_window: housekeeping_service.housekeeping_store?.hk_criteria?.dusty_periods[0]?.code,
                highlight_window: housekeeping_service.housekeeping_store?.hk_criteria?.highlight_checkin_options[0]?.code,
            });
            // updateTaskList();
            if (tasksResult?.tasks) {
                this.updateTasks(tasksResult.tasks);
            }
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = false;
            hkTasks_store.setLoading(false);
        }
    }
    buildHousekeeperNameCache() {
        this.hkNameCache = {};
        housekeeping_service.housekeeping_store.hk_criteria?.housekeepers?.forEach(hk => {
            if (hk.id != null && hk.name != null) {
                this.hkNameCache[hk.id] = hk.name;
            }
        });
    }
    groupTasks(tasks) {
        const groups = new Map();
        for (const task of tasks) {
            const key = `${task.date}__${task.unit.id}`;
            if (!groups.has(key)) {
                groups.set(key, []);
            }
            groups.get(key).push(task);
        }
        const result = [];
        for (const group of groups.values()) {
            const cln = group.find(t => t.task_type?.code === 'CLN');
            const t1 = group.find(t => t.task_type?.code === 'T1');
            const t2 = group.find(t => t.task_type?.code === 'T2');
            if (cln) {
                const extra = [];
                if (t1)
                    extra.push(t1);
                if (t2)
                    extra.push(t2);
                result.push({ ...cln, extra_task: extra.length > 0 ? extra : null });
            }
            else if (t1) {
                result.push({ ...t1, extra_task: t2 ? [t2] : null });
            }
            else if (t2) {
                result.push({ ...t2, extra_task: null });
            }
        }
        return result;
    }
    updateTasks(tasks) {
        this.buildHousekeeperNameCache();
        const mapped = tasks.map(t => ({
            ...t,
            id: v4.v4(),
            housekeeper: (() => {
                const name = this.hkNameCache[t.hkm_id];
                if (name) {
                    return name;
                }
                const hkName = housekeeping_service.housekeeping_store.hk_criteria?.housekeepers?.find(hk => hk.id === t.hkm_id)?.name;
                this.hkNameCache[t.hkm_id] = hkName;
                return hkName;
            })(),
        }));
        console.log(this.groupTasks(mapped));
        hkTasks_store.updateTasks([...this.groupTasks(mapped)]);
    }
    async handleHeaderButtonPress(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { name } = e.detail;
        switch (name) {
            case 'cleaned':
            case 'clean-inspect':
                this.modal?.openModal();
                this.modalCauses = {
                    task: null,
                    cause: 'clean',
                    status: name === 'clean-inspect' ? '004' : '001',
                };
                break;
            case 'export':
                const sortingArray = Array.from(this.table_sorting.entries()).map(([key, value]) => ({
                    key,
                    value,
                }));
                console.log(sortingArray);
                const { url } = await this.fetchTasksWithFilters(true);
                utils.downloadFile(url);
                break;
            case 'archive':
                this.isSidebarOpen = true;
                break;
        }
    }
    handleSelectedTaskCleaningEvent(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.modalCauses = { ...e.detail, cause: 'clean' };
        this.modal?.openModal();
    }
    async handleModalConfirmation() {
        try {
            if (hkTasks_store.hkTasksStore.selectedTasks.length === 0) {
                return;
            }
            this.isCleaningLoading = true;
            if (this.modalCauses?.cause === 'skip') {
                const { booking_nbr, date, unit, extra_task } = this.modalCauses.task;
                await this.houseKeepingService.skipHKTasks({
                    property_id: calendarData.calendar_data.property.id,
                    tasks_to_skip: [{ unit_id: unit.id, booking_nbr, date }, ...(extra_task ?? []).map(t => ({ unit_id: t.unit.id, booking_nbr: t.booking_nbr, date: t.date }))],
                });
            }
            else {
                await this.houseKeepingService.executeHKAction({
                    actions: hkTasks_store.hkTasksStore.selectedTasks
                        .flatMap(t => [t, ...(t.extra_task ?? [])])
                        .map(t => ({
                        description: 'Cleaned',
                        hkm_id: t.hkm_id === 0 ? null : t.hkm_id,
                        unit_id: t.unit.id,
                        booking_nbr: t.booking_nbr,
                        status: this.modalCauses?.status ?? '001',
                        hk_task_type_code: t.task_type.code,
                    })),
                });
            }
            await this.fetchTasksWithFilters();
        }
        finally {
            hkTasks_store.clearSelectedTasks();
            if (this.modalCauses) {
                this.modalCauses = null;
            }
            this.isCleaningLoading = false;
            // this.clearSelectedTasks.emit();
            this.modal.closeModal();
        }
    }
    async applyFilters(e) {
        try {
            this.isApplyFiltersLoading = true;
            e.stopImmediatePropagation();
            e.stopPropagation();
            this.filters = { ...e.detail };
            await this.fetchTasksWithFilters();
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isApplyFiltersLoading = false;
        }
    }
    async fetchTasksWithFilters(export_to_excel = false) {
        const { cleaning_periods, housekeepers, cleaning_frequencies, dusty_units, highlight_check_ins } = this.filters ?? {};
        const { tasks, url } = await this.houseKeepingService.getHkTasks({
            housekeepers,
            cleaning_frequency: cleaning_frequencies?.code,
            dusty_window: dusty_units?.code,
            highlight_window: highlight_check_ins?.code,
            property_id: this.property_id,
            from_date: moment.hooks().format('YYYY-MM-DD'),
            to_date: cleaning_periods?.code || moment.hooks().format('YYYY-MM-DD'),
            is_export_to_excel: export_to_excel,
        });
        console.log(tasks);
        if (tasks) {
            this.updateTasks(tasks);
        }
        return { tasks, url };
    }
    render() {
        if (this.isLoading) {
            return index.h("ir-loading-screen", null);
        }
        return (index.h(index.Host, { "data-testid": "hk_tasks_base" }, index.h("ir-toast", null), index.h("ir-interceptor", null), index.h("section", { class: "ir-page__container " }, index.h("h3", { class: "page-title" }, "Housekeeping Tasks"), index.h("div", { class: "tasks-view" }, index.h("ir-tasks-filters", { isLoading: this.isApplyFiltersLoading, onApplyFilters: e => {
                this.applyFilters(e);
            } }), index.h("div", { class: "tasks-table-wrapper" }, index.h("ir-tasks-table", { onRowSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                hkTasks_store.updateSelectedTasks(e.detail);
            } })))), index.h("ir-dialog", { ref: el => (this.modal = el), label: locales_store.locales.entries.Lcz_Confirmation, lightDismiss: false }, index.h("span", null, this.modalCauses
            ? this.modalCauses?.cause === 'clean'
                ? this.modalCauses.task
                    ? `Update ${this.modalCauses?.task?.unit?.name} to Clean`
                    : 'Update selected unit(s) to Clean'
                : 'Skip cleaning and reschedule for tomorrow.'
            : 'Update selected unit(s) to Clean'), index.h("div", { slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => {
                if (this.modalCauses) {
                    hkTasks_store.clearSelectedTasks();
                    this.modalCauses = null;
                }
                this.modal.closeModal();
            } }, locales_store.locales.entries.Lcz_Cancel), index.h("ir-custom-button", { size: "m", appearance: "accent", variant: "brand", loading: this.isCleaningLoading, onClickHandler: this.handleModalConfirmation.bind(this) }, locales_store.locales.entries.Lcz_Confirm))), index.h("ir-sidebar", { open: this.isSidebarOpen, id: "editGuestInfo", onIrSidebarToggle: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isSidebarOpen = false;
            },
            // sidebarStyles={{
            //   width: '80vw',
            // }}
            showCloseButton: false }, this.isSidebarOpen && index.h("ir-hk-archive", { ticket: this.token.getToken(), propertyId: this.property_id, slot: "sidebar-body" }))));
    }
    static get watchers() { return {
        "ticket": [{
                "ticketChanged": 0
            }]
    }; }
};
IrHkTasks.style = irHkTasksCss();

const irHousekeepingCss = () => `.sc-ir-housekeeping-h{display:block}`;

const IrHousekeeping = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    language = '';
    ticket = '';
    propertyid;
    p;
    baseUrl;
    isLoading = false;
    frequencies = [];
    roomService = new room_service.RoomService();
    houseKeepingService = new housekeeping_service.HouseKeepingService();
    bookingService = new booking_store.BookingService();
    token = new Token.Token();
    componentWillLoad() {
        if (this.baseUrl) {
            this.token.setBaseUrl(this.baseUrl);
        }
        if (this.ticket !== '') {
            this.token.setToken(this.ticket);
            this.initializeApp();
        }
    }
    async handleResetData(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.houseKeepingService.getExposedHKSetup(this.propertyid);
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
        this.initializeApp();
    }
    async initializeApp() {
        try {
            this.isLoading = true;
            let propertyId = this.propertyid;
            if (!propertyId) {
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                    include_sales_rate_plans: true,
                });
                propertyId = propertyData.My_Result.id;
            }
            housekeeping_service.updateHKStore('default_properties', { token: this.ticket, property_id: propertyId, language: this.language });
            const [frequencies] = await Promise.all([
                this.bookingService.getSetupEntriesByTableName('_HK_FREQUENCY'),
                this.roomService.fetchLanguage(this.language, ['_HK_FRONT', '_PMS_FRONT']),
                this.propertyid &&
                    this.roomService.getExposedProperty({
                        id: propertyId,
                        language: this.language,
                        is_backend: true,
                        include_sales_rate_plans: true,
                    }),
                calendarData.calendar_data.housekeeping_enabled && this.houseKeepingService.getExposedHKSetup(propertyId),
            ]);
            this.frequencies = frequencies;
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        if (this.isLoading) {
            return index.h("ir-loading-screen", null);
        }
        return (index.h(index.Host, null, index.h("ir-interceptor", null), index.h("ir-toast", null), index.h("section", { class: "ir-page__container" }, index.h("h3", { class: "page-title" }, locales_store.locales.entries.Lcz_HouseKeepingAndCheckInSetup), index.h("ir-hk-operations-card", { frequencies: this.frequencies }), calendarData.calendar_data.housekeeping_enabled && index.h("ir-hk-team", null))));
    }
    static get watchers() { return {
        "ticket": [{
                "ticketChanged": 0
            }]
    }; }
};
IrHousekeeping.style = irHousekeepingCss();

const ParamsGetMealReportSchema = index$1.libExports.object({
    property_id: index$1.libExports.number(),
    report_type: index$1.libExports.enum(['GUEST_LIST', 'MEAL_COUNT']),
    from: index$1.libExports.string(),
    to: index$1.libExports.string(),
    meal_type_code: index$1.libExports.string().optional().nullable(),
    is_export_to_excel: index$1.libExports.boolean().optional().default(false),
});
const ParamsSetHBPreferenceSchema = index$1.libExports.object({
    property_id: index$1.libExports.number(),
    room_identifier: index$1.libExports.string(),
    code: index$1.libExports.string(),
});

class MealReportService {
    async getMealReport(props) {
        const payload = ParamsGetMealReportSchema.parse(props);
        const { data } = await axios.axios.post(`/Get_Meal_Report`, payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
    async setHBPreference(props) {
        const payload = ParamsSetHBPreferenceSchema.parse(props);
        const { data } = await axios.axios.post(`/Set_HB_Preference`, payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
    }
    async getSetupEntriesByTableNameMulti(entries) {
        const { data } = await axios.axios.post(`/Get_Setup_Entries_By_TBL_NAME_MULTI`, { TBL_NAMES: entries });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
}

const irMealReportCss = () => `.sc-ir-meal-report-h{display:block}.ir-meal-report__export-btn.sc-ir-meal-report{height:100%}.ir-meal-report__metrics.sc-ir-meal-report{display:grid;grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));gap:var(--wa-space-m);margin-bottom:var(--wa-space-m)}.ir-meal-report__layout.sc-ir-meal-report{display:flex;flex-direction:column;gap:var(--wa-space-m);margin-top:var(--wa-space-xs)}.ir-meal-report__results.sc-ir-meal-report{min-width:0}@media (min-width: 1024px){.ir-meal-report__layout.sc-ir-meal-report{flex-direction:row;align-items:flex-start}.ir-meal-report__layout.sc-ir-meal-report>ir-meal-report-filters.sc-ir-meal-report{flex:0 0 320px;min-width:0}.ir-meal-report__layout.sc-ir-meal-report>.ir-meal-report__results.sc-ir-meal-report{flex:1 1 auto}}`;

const IrMealReport = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    ticket;
    propertyid;
    baseurl;
    language = 'en';
    isPageLoading = true;
    isExporting = false;
    isDataLoading = false;
    localReportType = 'GUEST_LIST';
    localFrom = moment.hooks().format('YYYY-MM-DD');
    localTo = moment.hooks().format('YYYY-MM-DD');
    localMealType = null;
    guestList = [];
    mealCountSummary = [];
    setupEntries = {
        meal_type: [],
        hb_preference: [],
    };
    mealReportService = new MealReportService();
    tokenService = new Token.Token();
    ticketChanged(newValue) {
        if (newValue) {
            this.tokenService.setToken(newValue);
            this.init();
        }
    }
    componentWillLoad() {
        if (this.baseurl) {
            this.tokenService.setBaseUrl(this.baseurl);
        }
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            this.init();
        }
    }
    async handlePropertyChange() {
        await this.init();
    }
    async init() {
        try {
            this.isPageLoading = true;
            this.isDataLoading = true;
            const setupEntries = await this.mealReportService.getSetupEntriesByTableNameMulti(['_MEAL_TYPE', '_HB_PREFERENCE']);
            const grouped = utils.groupEntryTablesResult(setupEntries);
            const meal_type = grouped.meal_type || [];
            const hb_preference = grouped.hb_preference || [];
            this.setupEntries = {
                meal_type,
                hb_preference,
            };
            if (meal_type.length > 0) {
                if (!this.localMealType) {
                    this.localMealType = meal_type[0].CODE_NAME;
                }
            }
            await this.applyFilters();
        }
        catch (error) {
            // Handling handled via UI
        }
        finally {
            this.isPageLoading = false;
            this.isDataLoading = false;
        }
    }
    async applyFilters() {
        try {
            this.isDataLoading = true;
            const response = await this.mealReportService.getMealReport({
                property_id: this.propertyid,
                from: this.localFrom,
                to: this.localTo,
                report_type: this.localReportType,
                meal_type_code: this.localMealType,
                is_export_to_excel: false,
            });
            this.guestList = response.My_Result.Guest_List || [];
            this.mealCountSummary = response.My_Result.Meal_Count_Summary || [];
        }
        catch (error) {
            // Handling handled via UI
        }
        finally {
            this.isDataLoading = false;
        }
    }
    resetFilters() {
        this.localReportType = 'GUEST_LIST';
        this.localFrom = moment.hooks().format('YYYY-MM-DD');
        this.localTo = moment.hooks().format('YYYY-MM-DD');
        if (this.setupEntries.meal_type.length > 0) {
            this.localMealType = this.setupEntries.meal_type[0].CODE_NAME;
        }
        this.applyFilters();
    }
    async setPresetDate(type) {
        const date = type === 'today' ? moment.hooks() : moment.hooks().add(1, 'day');
        this.localFrom = date.format('YYYY-MM-DD');
        if (type === 'today' && this.localReportType === 'MEAL_COUNT') {
            this.localTo = moment.hooks().add(14, 'days').format('YYYY-MM-DD');
        }
        else {
            this.localTo = this.localFrom;
        }
    }
    async handleExport() {
        try {
            this.isExporting = true;
            const response = await this.mealReportService.getMealReport({
                property_id: this.propertyid,
                from: this.localFrom,
                to: this.localTo,
                report_type: this.localReportType,
                meal_type_code: this.localMealType,
                is_export_to_excel: true,
            });
            const link = response.My_Params_Get_Meal_Report?.Link_excel;
            if (link) {
                // Use clean axios to bypass interceptors (avoiding network errors)
                const cleanAxios = axios.axios.create();
                const responseBlob = await cleanAxios.get(link, { responseType: 'blob' });
                // Force download via local blob URL
                const blob = new Blob([responseBlob.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                const filename = link.split('/').pop() || 'meal_report.xlsx';
                a.setAttribute('download', filename);
                document.body.appendChild(a);
                a.click();
                // Cleanup
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            }
        }
        catch (error) {
            // Export Error handled silently or via UI
        }
        finally {
            this.isExporting = false;
        }
    }
    render() {
        if (this.isPageLoading) {
            return index.h("ir-loading-screen", null);
        }
        const lcz = locales_store.locales.entries || {};
        const summary = this.mealCountSummary || [];
        const sum = (key) => summary.reduce((acc, day) => acc + (Number(day[key]) || 0), 0);
        const mealMetrics = [
            { label: 'Breakfast', icon: 'mug-saucer', intent: 'brand', adults: sum('Breakfast_Ad'), children: sum('Breakfast_Ch') },
            { label: 'Lunch', icon: 'utensils', intent: 'success', adults: sum('Lunch_Ad'), children: sum('Lunch_Ch') },
            { label: 'Dinner', icon: 'moon', intent: 'warning', adults: sum('Dinner_Ad'), children: sum('Dinner_Ch') },
        ];
        return (index.h("ir-page", { label: "Meal Report", class: 'page' }, index.h("ir-custom-button", { slot: "page-header", type: "button", size: "s", appearance: "outlined", loading: this.isExporting, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.handleExport();
            }, class: "ir-meal-report__export-btn" }, index.h("wa-icon", { name: "download", slot: "start", style: { fontSize: '14px' } }), lcz.Lcz_Export || 'Export'), this.localReportType === 'MEAL_COUNT' && (index.h("div", { class: "ir-meal-report__metrics" }, mealMetrics.map(metric => (index.h("ir-metric-card", { key: metric.label, label: metric.label, icon: metric.icon, intent: metric.intent, value: metric.adults + metric.children, unit: "guests", caption: `Adults ${metric.adults} · Children ${metric.children}`, loading: this.isDataLoading }))))), index.h("div", { class: "ir-meal-report__layout" }, index.h("ir-meal-report-filters", { reportType: this.localReportType, fromDate: this.localFrom, toDate: this.localTo, mealType: this.localMealType, setupEntries: this.setupEntries, isLoading: this.isDataLoading, lcz: lcz, onReportTypeChange: e => {
                this.localReportType = e.detail;
                this.applyFilters();
                if (e.detail === 'GUEST_LIST') {
                    this.localTo = this.localFrom;
                }
            }, onDateChange: e => {
                this.localFrom = e.detail.from;
                this.localTo = e.detail.to;
            }, onMealTypeChange: async (e) => {
                this.localMealType = e.detail;
            }, onFilterApply: () => this.applyFilters(), onFilterReset: () => this.resetFilters(), onPresetDate: e => this.setPresetDate(e.detail) }), index.h("wa-card", { class: "ir-meal-report__results" }, index.h("div", null, this.localReportType === 'GUEST_LIST' ? (index.h("ir-meal-guest-list", { guestList: this.guestList })) : (index.h("ir-meal-count-summary", { mealCountSummary: this.mealCountSummary })))))));
    }
    static get watchers() { return {
        "ticket": [{
                "ticketChanged": 0
            }],
        "propertyid": [{
                "handlePropertyChange": 0
            }]
    }; }
};
IrMealReport.style = irMealReportCss();

const irMonthlyBookingsReportCss = () => `.sc-ir-monthly-bookings-report-h{display:block}`;

const IrMonthlyBookingsReport = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    language = '';
    ticket = '';
    propertyid;
    p;
    isPageLoading = true;
    isLoading = null;
    reports = [];
    filters;
    property_id;
    stats;
    baseFilters;
    tokenService = new Token.Token();
    roomService = new room_service.RoomService();
    propertyService = new property_service.PropertyService();
    componentWillLoad() {
        this.baseFilters = {
            date: {
                description: moment.hooks().format('MMMM YYYY'),
                firstOfMonth: moment.hooks().startOf('month').format('YYYY-MM-DD'),
                lastOfMonth: moment.hooks().endOf('month').format('YYYY-MM-DD'),
            },
            include_previous_year: false,
        };
        this.filters = this.baseFilters;
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            this.init();
        }
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.tokenService.setToken(this.ticket);
            this.init();
        }
    }
    handleApplyFiltersChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.filters = e.detail;
        this.getReports();
    }
    async init() {
        try {
            let propertyId = this.propertyid;
            if (!this.propertyid && !this.p) {
                throw new Error('Property ID or username is required');
            }
            // let roomResp = null;
            if (!propertyId) {
                console.log(propertyId);
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                });
                // roomResp = propertyData;
                propertyId = propertyData.My_Result.id;
            }
            this.property_id = propertyId;
            const requests = [this.roomService.fetchLanguage(this.language), this.getReports()];
            if (this.propertyid) {
                requests.push(this.roomService.getExposedProperty({
                    id: this.propertyid,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                }));
            }
            await Promise.all(requests);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isPageLoading = false;
        }
    }
    async getReports(isExportToExcel = false) {
        try {
            const getReportObj = (report) => {
                return {
                    day: report.Date,
                    units_booked: report.Units_booked,
                    occupancy_percent: report.Occupancy,
                    adr: report.ADR,
                    rooms_revenue: report.Rooms_Revenue,
                    total_guests: report?.Total_Guests,
                };
            };
            this.isLoading = isExportToExcel ? 'export' : 'filter';
            const { date, include_previous_year } = this.filters;
            const requests = [
                this.propertyService.getMonthlyStats({
                    from_date: date.firstOfMonth,
                    to_date: date.lastOfMonth,
                    property_id: this.property_id,
                    is_export_to_excel: isExportToExcel,
                }),
            ];
            if (include_previous_year) {
                requests.push(this.propertyService.getMonthlyStats({
                    from_date: moment.hooks(date.firstOfMonth, 'YYYY-MM-DD').add(-1, 'year').format('YYYY-MM-DD'),
                    to_date: moment.hooks(date.lastOfMonth, 'YYYY-MM-DD').add(-1, 'years').format('YYYY-MM-DD'),
                    property_id: this.property_id,
                }));
            }
            const results = await Promise.all(requests);
            const currentReports = results[0];
            let enrichedReports = [];
            const { DailyStats, ...rest } = currentReports;
            this.stats = { ...rest };
            if (include_previous_year && results[isExportToExcel ? 0 : 1]) {
                const previousYearReports = results[isExportToExcel ? 0 : 1];
                let formattedReports = previousYearReports.DailyStats.map(getReportObj);
                enrichedReports = DailyStats.map(getReportObj).map(current => {
                    const previous = formattedReports.find(prev => prev.day === moment.hooks(current.day, 'YYYY-MM-DD').add(-1, 'years').format('YYYY-MM-DD'));
                    return {
                        ...current,
                        last_year: previous ?? null,
                    };
                });
            }
            else {
                enrichedReports = DailyStats.map(getReportObj);
            }
            this.reports = [...enrichedReports];
        }
        catch (e) {
            console.log(e);
        }
        finally {
            this.isLoading = null;
        }
    }
    render() {
        if (this.isPageLoading) {
            return index.h("ir-loading-screen", null);
        }
        return (index.h(index.Host, null, index.h("ir-toast", null), index.h("ir-interceptor", null), index.h("section", { class: "p-2 d-flex flex-column", style: { gap: '1rem' } }, index.h("div", { class: "d-flex align-items-center justify-content-between" }, index.h("h3", { class: "mb-1 mb-md-0" }, "Daily Occupancy"), index.h("ir-button", { size: "sm", btn_color: "outline", isLoading: this.isLoading === 'export', text: locales_store.locales.entries?.Lcz_Export, onClickHandler: async (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                await this.getReports(true);
            }, btnStyle: { height: '100%' }, iconPosition: "right", icon_name: "file", icon_style: { '--icon-size': '14px' } })), index.h("section", null, index.h("div", { class: "d-flex flex-column flex-md-row w-100", style: { gap: '1rem', alignItems: 'stretch' } }, index.h("ir-stats-card", { icon: this.stats?.Occupancy_Difference_From_Previous_Month < 0 ? 'arrow-trend-down' : 'arrow-trend-up', cardTitle: "Average Occupancy", value: this.stats.AverageOccupancy ? this.stats?.AverageOccupancy.toFixed(2) + '%' : null, subtitle: `${this.stats?.Occupancy_Difference_From_Previous_Month < 0 ? '' : '+'}${this.stats?.Occupancy_Difference_From_Previous_Month.toFixed(2)}% from last month` }), index.h("ir-stats-card", { icon: "hotel", cardTitle: "Total Units", value: this.stats?.TotalUnitsBooked ? this.stats?.TotalUnitsBooked.toString() : null, subtitle: "Booked" }), index.h("ir-stats-card", { icon: "user_group", cardTitle: "Total Guests", value: this.stats?.Total_Guests ? this.stats?.Total_Guests?.toString() : null, subtitle: "Stayed" }), index.h("ir-stats-card", { icon: "calendar", cardTitle: "Peak Days", value: this.stats?.PeakDays.length === 0 ? null : this.stats?.PeakDays?.map(pd => moment.hooks(pd.Date, 'YYYY-MM-DD').format('D').concat('th')).join(' - '), subtitle: `${Math.max(...(this.stats.PeakDays?.map(pd => pd.OccupancyPercent) || []))}% occupancy` })), index.h("div", { class: "d-flex flex-column flex-lg-row mt-1 ", style: { gap: '1rem' } }, index.h("ir-monthly-bookings-report-filter", { isLoading: this.isLoading === 'filter', class: "filters-card", baseFilters: this.baseFilters }), index.h("ir-monthly-bookings-report-table", { reports: this.reports }))))));
    }
    static get watchers() { return {
        "ticket": [{
                "handleTicketChange": 0
            }]
    }; }
};
IrMonthlyBookingsReport.style = irMonthlyBookingsReportCss();

const irPaymentOptionCss = () => `.sc-ir-payment-option-h{display:block}.payment-table-container.sc-ir-payment-option{display:flex;align-items:center;justify-content:center}.po-view.sc-ir-payment-option{padding:0;margin:0}.payment-img.sc-ir-payment-option{height:18px;display:none}.loading-container.sc-ir-payment-option{background:white;display:flex;align-items:center;flex-direction:column;align-items:center;justify-content:center;width:100%;height:40rem}.payment-option-loader.sc-ir-payment-option{width:1.25rem;height:1.25rem;border:2.5px solid #3f3f3f;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}.loading-container.default.sc-ir-payment-option{height:100vh;width:100%}@media (min-width: 768px){.po-view.sc-ir-payment-option{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.dataTable.sc-ir-payment-option{width:70%}.payment-img.sc-ir-payment-option{display:block}.actions-header.sc-ir-payment-option{width:max-content !important}.payment-table-container.sc-ir-payment-option{justify-content:flex-start}}@media (min-width: 1280px){.dataTable.sc-ir-payment-option{width:50%}}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}`;

const IrPaymentOption = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    propertyid;
    ticket;
    p;
    language = 'en';
    defaultStyles = true;
    hideLogs = true;
    paymentOptions = [];
    isLoading = false;
    selectedOption = null;
    paymentOptionService = new paymentOption_store.PaymentOptionService();
    roomService = new room_service.RoomService();
    token = new Token.Token();
    propertyOptionsById;
    propertyOptionsByCode;
    componentWillLoad() {
        if (!!this.ticket) {
            this.token.setToken(this.ticket);
            this.init();
        }
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
        this.init();
    }
    init() {
        this.initServices();
        this.fetchData();
    }
    handleCloseModal(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        this.closeModal(e.detail);
    }
    closeModal(newOption) {
        if (newOption) {
            this.modifyPaymentList(newOption);
            if (newOption.is_payment_gateway) {
                this.propertyOptionsById.set(newOption.id, newOption);
            }
            else {
                this.propertyOptionsByCode.set(newOption.code, newOption);
            }
        }
        else {
            if (!this.propertyOptionsByCode.has(paymentOption_store.payment_option_store.selectedOption?.code) && !this.propertyOptionsById.has(paymentOption_store.payment_option_store.selectedOption?.id)) {
                this.modifyPaymentList({ ...paymentOption_store.payment_option_store.selectedOption, is_active: false });
            }
        }
        paymentOption_store.payment_option_store.selectedOption = null;
        paymentOption_store.payment_option_store.mode = null;
    }
    async fetchData() {
        try {
            if (!this.propertyid && !this.p) {
                throw new Error('Property ID or username is required');
            }
            this.isLoading = true;
            let propertyId = this.propertyid;
            if (!propertyId) {
                console.log('fetching property id');
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                });
                propertyId = propertyData.My_Result.id;
            }
            const [paymentOptions, propertyOptions, languageTexts] = await Promise.all([
                this.paymentOptionService.GetExposedPaymentMethods(),
                this.paymentOptionService.GetPropertyPaymentMethods(propertyId),
                this.roomService.fetchLanguage(this.language, ['_PAYMENT_BACK']),
            ]);
            locales_store.locales.entries = languageTexts.entries;
            locales_store.locales.direction = languageTexts.direction;
            this.propertyOptionsById = new Map(propertyOptions?.map(o => [o.id, o]));
            this.propertyOptionsByCode = new Map(propertyOptions?.map(o => [o.code, o]));
            this.paymentOptions = paymentOptions?.map(option => {
                if (option.is_payment_gateway) {
                    return this.propertyOptionsById.get(option.id) || option;
                }
                return this.propertyOptionsByCode.get(option.code) || option;
            });
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    initServices() {
        this.token.setToken(this.ticket);
    }
    modifyPaymentList(paymentOption) {
        let prevPaymentOptions = [...this.paymentOptions];
        console.log(paymentOption);
        let index = prevPaymentOptions.findIndex(p => p.code === paymentOption.code);
        if (index === -1) {
            throw new Error('Invalid code');
        }
        prevPaymentOptions[index] = { ...paymentOption };
        this.paymentOptions = [...prevPaymentOptions];
    }
    async handleCheckChange(e, po) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        const is_active = e.detail;
        const newOption = { ...po, is_active, property_id: this.propertyid };
        if (po.code !== '005' && !po.is_payment_gateway) {
            await this.changePaymentMethod(newOption);
            this.modifyPaymentList(newOption);
            if (po.code === '000' && is_active && this.paymentOptions.filter(p => p.code !== '000').every(p => p.is_active === false || p.is_active === null)) {
                utils.showToast({
                    type: 'success',
                    description: '',
                    title: locales_store.locales.entries['Lcz_YouNeedToSelect'],
                    position: 'top-right',
                });
            }
            return;
        }
        if (!this.showEditButton(po)) {
            this.modifyPaymentList(newOption);
            return;
        }
        if (is_active && po.data?.some(d => d.value === null)) {
            paymentOption_store.payment_option_store.mode = 'create';
            paymentOption_store.payment_option_store.selectedOption = newOption;
        }
        else {
            await this.changePaymentMethod(newOption);
        }
        this.modifyPaymentList(newOption);
    }
    async changePaymentMethod(newOption) {
        try {
            await this.paymentOptionService.HandlePaymentMethod(newOption);
            utils.showToast({
                position: 'top-right',
                title: 'Saved Successfully',
                description: '',
                type: 'success',
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    showEditButton(po) {
        if (!po.is_payment_gateway && po.code !== '005') {
            return false;
        }
        return po.code === '005' || (po.is_payment_gateway && po.data?.length > 0);
    }
    render() {
        if (this.isLoading === true || (this.paymentOptions && this.paymentOptions.length === 0)) {
            return (index.h(index.Host, { class: this.defaultStyles ? 'p-2' : '' }, index.h("div", { class: `loading-container ${this.defaultStyles ? 'default' : ''}` }, index.h("span", { class: "payment-option-loader" }))));
        }
        return (index.h(index.Host, { class: this.defaultStyles ? 'p-2' : '' }, index.h("ir-toast", null), index.h("ir-interceptor", null), index.h("div", { class: `${this.defaultStyles ? 'card ' : ''} p-1 flex-fill m-0` }, index.h("div", { class: "d-flex align-items-center mb-2" }, index.h("div", { class: "p-0 m-0 mr-1" }, index.h("ir-icons", { name: "credit_card" })), index.h("h3", { class: 'm-0 p-0' }, locales_store.locales?.entries?.Lcz_PaymentOptions)), index.h("div", { class: "payment-table-container" }, index.h("table", { class: "table table-striped table-bordered no-footer dataTable" }, index.h("thead", null, index.h("tr", null, index.h("th", { scope: "col", class: "text-left" }, locales_store.locales?.entries?.Lcz_PaymentMethod), index.h("th", { scope: "col" }, locales_store.locales?.entries?.Lcz_Status), index.h("th", { scope: "col", class: "actions-header" }, locales_store.locales?.entries?.Lcz_Action))), index.h("tbody", { class: "" }, this.paymentOptions?.map(po => {
            if (po.code === '004') {
                return null;
            }
            return (index.h("tr", { key: po.id }, index.h("td", { class: 'text-left po-description' }, index.h("div", { class: "po-view" }, index.h("span", { class: 'p-0 m-0' }, po?.description))), index.h("td", null, index.h("ir-switch", { checked: po.is_active, onCheckChange: e => this.handleCheckChange(e, po) })), index.h("td", { class: "payment-action" }, this.showEditButton(po) && (index.h("ir-button", { title: locales_store.locales?.entries?.Lcz_Edit, variant: "icon", icon_name: "edit", onClickHandler: () => {
                    paymentOption_store.payment_option_store.selectedOption = po;
                    paymentOption_store.payment_option_store.mode = 'edit';
                } })))));
        }))))), index.h("ir-sidebar", { onIrSidebarToggle: () => {
                this.closeModal(null);
            }, side: 'right', showCloseButton: false,
            // label={locales?.entries.Lcz_Information?.replace('%1', payment_option_store.selectedOption?.description)}
            open: paymentOption_store.payment_option_store?.selectedOption !== null }, paymentOption_store.payment_option_store?.selectedOption && index.h("ir-option-details", { propertyId: this.propertyid, slot: "sidebar-body" }))));
    }
    static get watchers() { return {
        "ticket": [{
                "ticketChanged": 0
            }]
    }; }
};
IrPaymentOption.style = irPaymentOptionCss();

const irSalesByChannelCss = () => `.sc-ir-sales-by-channel-h{display:block}`;

const IrSalesByChannel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    language = '';
    ticket = '';
    propertyid;
    p;
    mode;
    isLoading = null;
    isPageLoading = true;
    salesData;
    channelSalesFilters;
    allowedProperties = [];
    propertyID;
    token = new Token.Token();
    roomService = new room_service.RoomService();
    propertyService = new property_service.PropertyService();
    baseFilters = {
        FROM_DATE: moment.hooks().add(-7, 'days').format('YYYY-MM-DD'),
        TO_DATE: moment.hooks().format('YYYY-MM-DD'),
        BOOK_CASE: '001',
        WINDOW: 7,
        include_previous_year: false,
        is_export_to_excel: false,
    };
    componentWillLoad() {
        this.channelSalesFilters = this.baseFilters;
        if (this.ticket) {
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
    async initializeApp() {
        try {
            this.isPageLoading = true;
            if (!this.mode) {
                throw new Error("Missing required 'mode'. Please set it to either 'property' or 'mpo'.");
            }
            if (!this.propertyid && this.mode === 'property' && !this.p) {
                throw new Error('Missing Property ID or aname');
            }
            if (this.mode === 'property') {
                const property = await this.propertyService.getExposedProperty({
                    id: Number(this.propertyid ?? 0),
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                });
                this.propertyID = property.My_Result.id;
            }
            const requests = [, this.roomService.fetchLanguage(this.language)];
            if (this.mode === 'mpo') {
                requests.unshift(this.propertyService.getExposedAllowedProperties());
                const [properties] = await Promise.all(requests);
                this.allowedProperties = [...properties];
            }
            else {
                await Promise.all(requests);
            }
            this.baseFilters = { ...this.baseFilters, LIST_AC_ID: this.allowedProperties?.map(p => p.id) };
            this.channelSalesFilters = { ...this.baseFilters };
            await this.getChannelSales();
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isPageLoading = false;
        }
    }
    async getChannelSales(isExportToExcel = false) {
        try {
            const { include_previous_year, LIST_AC_ID, ...filterParams } = this.channelSalesFilters;
            this.isLoading = isExportToExcel ? 'export' : 'filter';
            const currentSales = await this.propertyService.getChannelSales({
                is_export_to_excel: isExportToExcel,
                ...filterParams,
                AC_ID: this.propertyID ? this.propertyID.toString() : undefined,
                ...filterParams,
                LIST_AC_ID: this.propertyID ? null : LIST_AC_ID,
            });
            const shouldFetchPreviousYear = !isExportToExcel && include_previous_year;
            let enrichedSales = [];
            if (shouldFetchPreviousYear) {
                const previousYearSales = await this.propertyService.getChannelSales({
                    AC_ID: this.propertyID ? this.propertyID.toString() : undefined,
                    ...filterParams,
                    LIST_AC_ID: this.propertyID ? null : LIST_AC_ID,
                    FROM_DATE: moment.hooks(filterParams.FROM_DATE).subtract(1, 'year').format('YYYY-MM-DD'),
                    TO_DATE: moment.hooks(filterParams.TO_DATE).subtract(1, 'year').format('YYYY-MM-DD'),
                });
                enrichedSales = currentSales.map(current => {
                    const previous = previousYearSales.find(prev => prev.SOURCE.toLowerCase() === current.SOURCE.toLowerCase());
                    return {
                        ...current,
                        last_year: previous ? previous : null,
                    };
                });
            }
            else {
                enrichedSales = currentSales.map(record => ({
                    ...record,
                    last_year: null,
                }));
            }
            /**
             * Groups sales records by SOURCE and currency.id, summing numeric fields
             * and recalculating PCT based on the total REVENUE.
             */
            const groupSalesRecordsBySource = (records) => {
                if (!records || records.length === 0)
                    return records;
                // Helper to extract currency ID from various possible formats
                const getCurrencyId = (r) => {
                    return r?.currency ?? null;
                };
                // Create unique key for grouping
                const createKey = (r) => {
                    const source = r.SOURCE.toString().toLowerCase().trim();
                    const currencyId = getCurrencyId(r);
                    return `${source}__${currencyId ?? 'null'}`;
                };
                // Sum two values safely
                const sumValues = (a, b) => {
                    return (a ?? 0) + (b ?? 0);
                };
                // Merge numeric fields from last_year objects
                const mergeLastYear = (base, incoming) => {
                    if (!incoming)
                        return base;
                    if (!base)
                        return { ...incoming };
                    return {
                        NIGHTS: sumValues(base.NIGHTS, incoming.NIGHTS),
                        PCT: sumValues(base.PCT, incoming.PCT), // Will recalculate later
                        REVENUE: sumValues(base.REVENUE, incoming.REVENUE),
                        SOURCE: base.SOURCE,
                        PROPERTY_ID: base.PROPERTY_ID,
                        PROPERTY_NAME: base.PROPERTY_NAME,
                        currency: base.currency,
                    };
                };
                // Group records by key
                const grouped = new Map();
                for (const record of records) {
                    const key = createKey(record);
                    const existing = grouped.get(key);
                    if (!existing) {
                        // First record for this key - clone it
                        grouped.set(key, { ...record });
                    }
                    else {
                        // Merge with existing record
                        const merged = {
                            ...existing,
                            NIGHTS: sumValues(existing.NIGHTS, record.NIGHTS),
                            PCT: 0, // Will recalculate after summing all REVENUE
                            REVENUE: sumValues(existing.REVENUE, record.REVENUE),
                            last_year: mergeLastYear(existing.last_year, record.last_year),
                        };
                        grouped.set(key, merged);
                    }
                }
                // Convert to array
                const result = Array.from(grouped.values());
                // Recalculate PCT based on total REVENUE
                const totalRevenue = result.reduce((sum, r) => sum + (r.REVENUE ?? 0), 0);
                if (totalRevenue > 0) {
                    for (const record of result) {
                        record.PCT = (record.REVENUE / totalRevenue) * 100;
                        // Also recalculate last_year PCT if it exists
                        if (record.last_year) {
                            const lastYearTotal = result.reduce((sum, r) => sum + (r.last_year?.REVENUE ?? 0), 0);
                            if (lastYearTotal > 0) {
                                record.last_year.PCT = (record.last_year.REVENUE / lastYearTotal) * 100;
                            }
                        }
                    }
                }
                return result;
            };
            this.salesData = [...groupSalesRecordsBySource(enrichedSales)];
        }
        catch (error) {
            console.error('Failed to fetch sales data:', error);
        }
        finally {
            this.isLoading = null;
        }
    }
    render() {
        if (this.isPageLoading) {
            return index.h("ir-loading-screen", null);
        }
        return (index.h(index.Host, null, index.h("ir-toast", null), index.h("ir-interceptor", null), index.h("section", { class: "p-2 d-flex flex-column", style: { gap: '1rem' } }, index.h("div", { class: "d-flex align-items-center justify-content-between" }, index.h("h3", { class: "mb-1 mb-md-0" }, "Sales by Channel"), index.h("ir-button", { size: "sm", btn_color: "outline", isLoading: this.isLoading === 'export', text: locales_store.locales.entries.Lcz_Export, onClickHandler: async (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                await this.getChannelSales(true);
            }, btnStyle: { height: '100%' }, iconPosition: "right", icon_name: "file", icon_style: { '--icon-size': '14px' } })), index.h("div", { class: "d-flex flex-column flex-lg-row mt-1 ", style: { gap: '1rem' } }, index.h("ir-sales-by-channel-filters", { isLoading: this.isLoading === 'filter', onApplyFilters: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.channelSalesFilters = { ...e.detail };
                this.getChannelSales();
            }, allowedProperties: this.allowedProperties, baseFilters: this.baseFilters }), index.h("ir-sales-by-channel-table", { mode: this.mode, allowedProperties: this.allowedProperties, class: "card mb-0", records: this.salesData })))));
    }
    static get watchers() { return {
        "ticket": [{
                "ticketChanged": 0
            }]
    }; }
};
IrSalesByChannel.style = irSalesByChannelCss();

const irSalesByCountryCss = () => `.sc-ir-sales-by-country-h{display:block}`;

const IrSalesByCountry = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    language = '';
    ticket = '';
    propertyid;
    p;
    isLoading = null;
    isPageLoading = true;
    property_id;
    salesData;
    salesFilters;
    countries = new Map();
    token = new Token.Token();
    roomService = new room_service.RoomService();
    propertyService = new property_service.PropertyService();
    bookingService = new booking_store.BookingService();
    baseFilters = {
        FROM_DATE: moment.hooks().add(-7, 'days').format('YYYY-MM-DD'),
        TO_DATE: moment.hooks().format('YYYY-MM-DD'),
        BOOK_CASE: '001',
        WINDOW: 7,
        include_previous_year: false,
    };
    componentWillLoad() {
        this.salesFilters = this.baseFilters;
        if (this.ticket) {
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
    async initializeApp() {
        try {
            let propertyId = this.propertyid;
            if (!this.propertyid && !this.p) {
                throw new Error('Property ID or username is required');
            }
            // let roomResp = null;
            if (!propertyId) {
                console.log(propertyId);
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                });
                // roomResp = propertyData;
                propertyId = propertyData.My_Result.id;
            }
            this.property_id = propertyId;
            const requests = [this.bookingService.getCountries(this.language), this.roomService.fetchLanguage(this.language), this.getCountrySales()];
            if (this.propertyid) {
                requests.push(this.roomService.getExposedProperty({
                    id: this.propertyid,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                }));
            }
            const [countries] = await Promise.all(requests);
            const mappedCountries = new Map();
            countries.map(country => {
                mappedCountries.set(country.id, {
                    flag: country.flag,
                    name: country.name,
                });
            });
            this.countries = mappedCountries;
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isPageLoading = false;
        }
    }
    async getCountrySales(isExportToExcel = false) {
        const formatSalesData = (data) => {
            return {
                country: data.COUNTRY,
                country_id: data.COUNTRY_ID,
                nights: data.NIGHTS,
                percentage: data.PCT,
                revenue: data.REVENUE,
                number_of_guests: data.Total_Guests,
            };
        };
        try {
            const { include_previous_year, ...filterParams } = this.salesFilters;
            this.isLoading = isExportToExcel ? 'export' : 'filter';
            const currentSales = await this.propertyService.getCountrySales({
                AC_ID: this.property_id,
                is_export_to_excel: isExportToExcel,
                ...filterParams,
            });
            const shouldFetchPreviousYear = !isExportToExcel && include_previous_year;
            let enrichedSales = [];
            if (shouldFetchPreviousYear) {
                const previousYearSales = await this.propertyService.getCountrySales({
                    AC_ID: this.property_id,
                    is_export_to_excel: false,
                    ...filterParams,
                    FROM_DATE: moment.hooks(filterParams.FROM_DATE).subtract(1, 'year').format('YYYY-MM-DD'),
                    TO_DATE: moment.hooks(filterParams.TO_DATE).subtract(1, 'year').format('YYYY-MM-DD'),
                });
                enrichedSales = currentSales.map(current => {
                    const previous = previousYearSales.find(prev => prev.COUNTRY.toLowerCase() === current.COUNTRY.toLowerCase());
                    return {
                        id: v4.v4(),
                        ...formatSalesData(current),
                        last_year: previous ? formatSalesData(previous) : null,
                    };
                });
            }
            else {
                enrichedSales = currentSales.map(record => ({
                    id: v4.v4(),
                    ...formatSalesData(record),
                    last_year: null,
                }));
            }
            // this.salesData = enrichedSales.sort((a, b) => {
            //   if (a.country_id === 0) return -1;
            //   if (b.country_id === 0) return 1;
            //   return 0;
            // });
            this.salesData = [...enrichedSales];
        }
        catch (error) {
            console.error('Failed to fetch sales data:', error);
        }
        finally {
            this.isLoading = null;
        }
    }
    render() {
        if (this.isPageLoading) {
            return index.h("ir-loading-screen", null);
        }
        return (index.h(index.Host, null, index.h("ir-toast", null), index.h("ir-interceptor", null), index.h("section", { class: "p-2 d-flex flex-column", style: { gap: '1rem' } }, index.h("div", { class: "d-flex align-items-center justify-content-between" }, index.h("h3", { class: "mb-1 mb-md-0" }, "Sales by Country"), index.h("ir-button", { size: "sm", btn_color: "outline", isLoading: this.isLoading === 'export', text: locales_store.locales.entries.Lcz_Export, onClickHandler: async (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                await this.getCountrySales(true);
            }, btnStyle: { height: '100%' }, iconPosition: "right", icon_name: "file", icon_style: { '--icon-size': '14px' } })), index.h("ir-sales-by-country-summary", { salesReports: this.salesData }), index.h("div", { class: "d-flex flex-column flex-lg-row mt-1 ", style: { gap: '1rem' } }, index.h("ir-sales-filters", { isLoading: this.isLoading === 'filter', onApplyFilters: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.salesFilters = e.detail;
                this.getCountrySales();
            }, class: "filters-card", baseFilters: this.baseFilters }), index.h("ir-sales-table", { mappedCountries: this.countries, class: "card mb-0", records: this.salesData })))));
    }
    static get watchers() { return {
        "ticket": [{
                "ticketChanged": 0
            }]
    }; }
};
IrSalesByCountry.style = irSalesByCountryCss();

var TaxationStrategy;
(function (TaxationStrategy) {
    TaxationStrategy["Normal"] = "000";
    TaxationStrategy["Cumulative"] = "001";
})(TaxationStrategy || (TaxationStrategy = {}));
/**
 * Charge rule (VAT, City Tax, Service Charge)
 */
const ChargeRuleSchema = index$1.libExports.z.object({
    value: index$1.libExports.z.number().nullable(),
    mode: index$1.libExports.z.string().min(1),
});
/**
 * Main setup schema
 */
index$1.libExports.z.object({
    vat: ChargeRuleSchema,
    cityTax: ChargeRuleSchema.nullable(),
    serviceCharge: ChargeRuleSchema.nullable(),
    taxationStrategy: index$1.libExports.z.nativeEnum(TaxationStrategy).nullable(),
});

const irTaxServiceCategoriesCss = () => `.sc-ir-tax-service-categories-h{display:block}.tax-page.sc-ir-tax-service-categories{display:flex;flex-direction:column;gap:var(--wa-space-xl)}.tax-page__header.sc-ir-tax-service-categories{display:flex;align-items:center;justify-content:space-between;gap:var(--wa-space-m)}.tax-page__heading.sc-ir-tax-service-categories{display:flex;flex-direction:column;gap:var(--wa-space-2xs)}.page-title.sc-ir-tax-service-categories{margin:0}.tax-page__subtitle.sc-ir-tax-service-categories{margin:0;color:var(--wa-color-text-quiet);font-size:var(--wa-font-size-s)}.tax-grid__header.sc-ir-tax-service-categories{display:none}.tax-grid__col-label.sc-ir-tax-service-categories{font-size:var(--wa-font-size-xs);font-weight:600;color:var(--wa-color-text-quiet);text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap}.tax-grid__row.sc-ir-tax-service-categories{display:flex;flex-direction:column;gap:var(--wa-space-m);padding:var(--wa-space-m) 0}.tax-grid__name.sc-ir-tax-service-categories{display:flex;flex-direction:column;gap:var(--wa-space-3xs)}.tax-grid__title.sc-ir-tax-service-categories{font-size:var(--wa-font-size-m);margin:0;padding:0}.tax-grid__hint.sc-ir-tax-service-categories{margin:0;padding:0;font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet)}.tax-grid__cell[data-label].sc-ir-tax-service-categories::before{content:attr(data-label);display:block;font-size:var(--wa-font-size-xs);font-weight:600;color:var(--wa-color-text-quiet);margin-bottom:var(--wa-space-2xs)}.tax-grid__cell.sc-ir-tax-service-categories:empty{display:none}ir-tax-input.sc-ir-tax-service-categories::part(input),ir-tax-input.sc-ir-tax-service-categories [part~="input"]{width:8ch}@media (min-width: 768px){.tax-grid.sc-ir-tax-service-categories{display:grid;grid-template-columns:minmax(auto, 320px) repeat(3, auto) auto;column-gap:var(--wa-space-m);align-items:center}.tax-grid__header.sc-ir-tax-service-categories,.tax-grid__row.sc-ir-tax-service-categories{display:contents}.tax-grid__divider.sc-ir-tax-service-categories{grid-column:1 / -1}.tax-grid__col-label.sc-ir-tax-service-categories{padding-bottom:0}.tax-grid__name.sc-ir-tax-service-categories,.tax-grid__cell.sc-ir-tax-service-categories{padding-bottom:var(--wa-space-s);align-self:center}.tax-grid__cell.sc-ir-tax-service-categories:empty{display:block}.tax-grid__cell[data-label].sc-ir-tax-service-categories::before{display:none}.ir-tax-input.sc-ir-tax-service-categories,.tax-grid__cell.sc-ir-tax-service-categories{width:fit-content}}`;

const IrTaxServiceCategories = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    ticket;
    p;
    language = 'en';
    propertyid;
    isLoading;
    isSaving;
    chargeCategoryRules = new Map();
    setupEntries;
    autoValidate;
    tokenService = new Token.Token();
    bookingService = new booking_store.BookingService();
    propertyService = new property_service.PropertyService();
    componentWillLoad() {
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            this.init();
        }
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue !== oldValue)
            this.reinit();
    }
    handlePChange(newValue, oldValue) {
        if (newValue !== oldValue && this.ticket)
            this.reinit();
    }
    handlePropertyIdChange(newValue, oldValue) {
        if (newValue !== oldValue && this.ticket)
            this.reinit();
    }
    /** Re-authenticates and re-fetches configuration when a watched prop changes. */
    reinit() {
        this.tokenService.setToken(this.ticket);
        this.init();
    }
    /** Fetches setup entries and property data, then builds the initial charge rules map. */
    async init() {
        this.isLoading = true;
        try {
            const [, tableEntries] = await Promise.all([
                this.propertyService.getExposedProperty({ id: this.propertyid, language: this.language }),
                this.bookingService.getSetupEntriesByTableNameMulti(['_VAT_INCLUDED', '_SVC_CATEGORY', '_CITY_TAX_INCLUDED', '_SERVICE_CHARGE_INCLUDED']),
            ]);
            this.setupEntries = this.bookingService.groupEntryTablesResult(tableEntries);
            this.chargeCategoryRules = this.buildInitialRules();
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    /**
     * Strips non-alphanumeric characters and lowercases a string for fuzzy matching
     * against tax names from the property data.
     */
    normalizeTaxName(s) {
        return s.toLowerCase().replace(/[^a-z0-9]/g, '');
    }
    /**
     * Finds a tax entry by keyword from the property's taxes array.
     * Returns undefined when no match is found — the caller should treat that as Not Applicable.
     */
    findTax(keyword) {
        const taxes = calendarData.calendar_data.property?.taxes ?? [];
        return taxes.find(t => this.normalizeTaxName(t.name).includes(this.normalizeTaxName(keyword)));
    }
    /**
     * Converts a property tax entry to a ChargeRule.
     * Returns `{ mode: '002', value: null }` (Not Applicable) when the tax is absent from the property data.
     */
    toChargeRule(tax) {
        if (!tax)
            return { mode: '002', value: null };
        return { mode: tax.is_exlusive ? '000' : '001', value: tax.pct };
    }
    /**
     * Builds the initial charge rules map from property taxes and saved tax categories.
     * ACC (Accommodation) is seeded from the property's taxes array; service categories
     * are seeded from saved `tax_categories` or default to Not Applicable when absent.
     */
    buildInitialRules() {
        const taxCategories = calendarData.calendar_data.property?.tax_categories ?? [];
        const savedStrategy = calendarData.calendar_data.property?.taxation_strategy?.code;
        const accSetup = {
            vat: this.toChargeRule(this.findTax('vat')),
            cityTax: this.toChargeRule(this.findTax('city')),
            serviceCharge: this.toChargeRule(this.findTax('service')),
            taxationStrategy: savedStrategy ?? TaxationStrategy.Normal,
        };
        const rules = new Map();
        rules.set('ACC', accSetup);
        (this.setupEntries?.svc_category ?? []).forEach(c => {
            const match = taxCategories.find(tc => tc.category.code === c.CODE_NAME);
            rules.set(c.CODE_NAME, match ? { vat: { mode: match.taxation_mode.code, value: match.pct }, cityTax: null, serviceCharge: null, taxationStrategy: null } : this.createEmptyCategorySetup());
        });
        return rules;
    }
    /** Returns a default setup for a service category with all fields set to Not Applicable. */
    createEmptyCategorySetup() {
        return {
            vat: { mode: '002', value: null },
            cityTax: null,
            serviceCharge: null,
            taxationStrategy: null,
        };
    }
    /** Returns true when a charge rule has no percentage value set. */
    isChargeRuleEmpty(rule) {
        return !rule || rule.value === null || rule.value === undefined;
    }
    /**
     * Resolves the effective numeric value of a charge rule for payload submission.
     * Mode '002' (Not Applicable) always resolves to 0.
     */
    resolveChargeValue(rule) {
        if (!rule)
            return null;
        return rule.mode === '002' ? 0 : rule.value;
    }
    /** Updates the taxation strategy (Normal / Cumulative) for the ACC category. */
    handleTaxationStrategyChange(value) {
        const next = new Map(this.chargeCategoryRules);
        next.set('ACC', { ...next.get('ACC'), taxationStrategy: value });
        this.chargeCategoryRules = next;
    }
    /**
     * Updates a single charge field on a category.
     * When the ACC VAT changes, the new percentage is propagated to any service category
     * that still has an empty (unset) VAT value.
     */
    handleChargeRuleChange(categoryCode, field, nextRule) {
        const next = new Map(this.chargeCategoryRules);
        next.set(categoryCode, { ...next.get(categoryCode), [field]: nextRule });
        if (categoryCode === 'ACC' && field === 'vat') {
            (this.setupEntries?.svc_category ?? []).forEach(category => {
                const categorySetup = next.get(category.CODE_NAME);
                if (this.isChargeRuleEmpty(categorySetup?.vat)) {
                    next.set(category.CODE_NAME, { ...categorySetup, vat: { ...categorySetup.vat, value: nextRule.value } });
                }
            });
        }
        this.chargeCategoryRules = next;
    }
    /** Assembles the API payload from the current charge rules state. */
    buildPayload() {
        const accSetup = this.chargeCategoryRules.get('ACC');
        const tax_categories = (this.setupEntries?.svc_category ?? []).map(category => {
            const setup = this.chargeCategoryRules.get(category.CODE_NAME);
            const taxMode = (this.setupEntries?.vat_included ?? []).find(v => v.CODE_NAME === setup?.vat?.mode);
            return {
                category: { code: category.CODE_NAME, description: category.CODE_VALUE_EN },
                taxation_mode: { code: setup?.vat?.mode ?? '', description: taxMode?.CODE_VALUE_EN ?? '' },
                pct: this.resolveChargeValue(setup?.vat) ?? 0,
            };
        });
        return {
            property_id: this.propertyid,
            VAT_INCLUDED_CODE: accSetup?.vat?.mode ?? null,
            VAT_PC: this.resolveChargeValue(accSetup?.vat) ?? null,
            CITY_TAX_INCLUDED_CODE: accSetup?.cityTax?.mode ?? null,
            CITY_TAX_PCT: this.resolveChargeValue(accSetup?.cityTax) ?? null,
            SERVICE_CHARGE_INCLUDED_CODE: accSetup?.serviceCharge?.mode ?? null,
            SERVICE_CHARGE_PCT: this.resolveChargeValue(accSetup?.serviceCharge) ?? null,
            tax_categories,
            TAXATION_STRATEGY: this.chargeCategoryRules.get('ACC').taxationStrategy,
        };
    }
    /** Validates and submits the tax configuration to the API. */
    async handleSubmit(e) {
        e.preventDefault();
        this.autoValidate = true;
        try {
            this.isSaving = true;
            const payload = this.buildPayload();
            await this.propertyService.handleExposedPropertyTaxCategories(payload);
            utils.showToast({
                title: 'Saved Successfully',
                type: 'success',
            });
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isSaving = false;
        }
    }
    render() {
        if (this.isLoading) {
            return index.h("ir-loading-screen", null);
        }
        const accSetup = this.chargeCategoryRules.get('ACC');
        const filteredVat = (this.setupEntries?.vat_included ?? []).filter(v => v.CODE_NAME !== '000');
        const categories = this.setupEntries?.svc_category ?? [];
        return (index.h("ir-page", { label: "Tax & Service Categories", description: "Define taxes and service charges for room rates, cancellations, and on-property services.", "data-testid": "ir-tax-service-categories" }, index.h("ir-custom-button", { slot: "page-header", loading: this.isSaving, type: "submit", form: "tax-service-categories__form", style: { width: '100px' }, variant: "brand" }, "Save"), index.h("form", { id: "tax-service-categories__form", onSubmit: e => this.handleSubmit(e) }, index.h("wa-card", null, index.h("div", { class: "tax-grid" }, index.h("div", { class: "tax-grid__header", "aria-hidden": "true" }, index.h("div", null), index.h("div", { class: "tax-grid__col-label" }, "VAT"), index.h("div", { class: "tax-grid__col-label" }, "City Tax"), index.h("div", { class: "tax-grid__col-label" }, "Service Charge"), index.h("div", { class: "tax-grid__col-label" }, "Taxation Strategy")), index.h("div", { class: "tax-grid__row" }, index.h("div", { class: "tax-grid__name" }, index.h("p", { class: "tax-grid__title" }, "Accommodation"), index.h("p", { class: "tax-grid__hint" }, "Room-related charges applied to reservations and cancellations")), index.h("div", { class: "tax-grid__cell", "data-label": "VAT" }, index.h("ir-tax-input", { autoValidate: this.autoValidate, language: this.language, onTaxChange: e => this.handleChargeRuleChange('ACC', 'vat', e.detail), chargeRule: accSetup?.vat, setupEntries: this.setupEntries?.vat_included ?? [] })), index.h("div", { class: "tax-grid__cell", "data-label": "City Tax" }, index.h("ir-tax-input", { autoValidate: this.autoValidate, language: this.language, onTaxChange: e => this.handleChargeRuleChange('ACC', 'cityTax', e.detail), chargeRule: accSetup?.cityTax, setupEntries: this.setupEntries?.city_tax_included ?? [] })), index.h("div", { class: "tax-grid__cell", "data-label": "Service Charge" }, index.h("ir-tax-input", { autoValidate: this.autoValidate, language: this.language, onTaxChange: e => this.handleChargeRuleChange('ACC', 'serviceCharge', e.detail), chargeRule: accSetup?.serviceCharge, setupEntries: this.setupEntries?.service_charge_included ?? [] })), index.h("div", { class: "tax-grid__cell", "data-label": "Taxation Strategy" }, index.h("wa-radio-group", { size: "s", orientation: "horizontal", value: accSetup?.taxationStrategy ?? TaxationStrategy.Normal, "onwa-change": (e) => this.handleTaxationStrategyChange(e.detail.value) }, index.h("wa-radio", { appearance: "button", value: TaxationStrategy.Normal }, "Normal"), index.h("wa-radio", { appearance: "button", value: TaxationStrategy.Cumulative }, "Cumulative")))), categories.map(category => {
            const categorySetup = this.chargeCategoryRules.get(category.CODE_NAME);
            return [
                index.h("div", { class: "tax-grid__divider" }, index.h("wa-divider", null)),
                index.h("div", { class: "tax-grid__row" }, index.h("div", { class: "tax-grid__name" }, index.h("p", { class: "tax-grid__title" }, category.CODE_VALUE_EN), category.NOTES && index.h("p", { class: "tax-grid__hint" }, category.NOTES)), index.h("div", { class: "tax-grid__cell", "data-label": "VAT" }, index.h("ir-tax-input", { autoValidate: this.autoValidate, language: this.language, onTaxChange: e => this.handleChargeRuleChange(category.CODE_NAME, 'vat', e.detail), chargeRule: categorySetup?.vat, setupEntries: filteredVat })), index.h("div", { class: "tax-grid__cell" }), index.h("div", { class: "tax-grid__cell" }), index.h("div", { class: "tax-grid__cell" })),
            ];
        }))))));
    }
    static get watchers() { return {
        "ticket": [{
                "handleTicketChange": 0
            }],
        "p": [{
                "handlePChange": 0
            }],
        "propertyid": [{
                "handlePropertyIdChange": 0
            }]
    }; }
};
IrTaxServiceCategories.style = irTaxServiceCategoriesCss();

const irUserManagementCss = () => `.sc-ir-user-management-h{display:block;height:100%}`;

const IrUserManagement = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    language = '';
    baseUrl;
    ticket;
    propertyid;
    p;
    isSuperAdmin = true;
    userTypeCode;
    baseUserTypeCode;
    userId;
    currentTrigger = null;
    user = null;
    isLoading = true;
    users = [];
    property_id;
    allowedUsersTypes = [];
    token = new Token.Token();
    roomService = new room_service.RoomService();
    userService = new user_service.UserService();
    bookingService = new booking_store.BookingService();
    userTypes = new Map();
    unsubscribeRealtime = null;
    superAdminId = '5';
    componentWillLoad() {
        if (this.baseUrl) {
            this.token.setBaseUrl(this.baseUrl);
        }
        if (this.ticket) {
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
    async handleResetData(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.fetchUsers();
    }
    async initializeApp() {
        try {
            if (this.baseUrl) {
                this.token.setBaseUrl(this.baseUrl);
            }
            this.isLoading = true;
            let propertyId = this.propertyid;
            if (!this.propertyid && !this.p) {
                throw new Error('Property ID or username is required');
            }
            // let roomResp = null;
            if (!propertyId) {
                console.log(propertyId);
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                });
                // roomResp = propertyData;
                propertyId = propertyData.My_Result.id;
            }
            this.property_id = propertyId;
            const requests = [this.fetchUserTypes(), this.fetchUsers(), this.roomService.fetchLanguage(this.language, ['_USER_MGT'])];
            if (this.propertyid) {
                requests.push(this.roomService.getExposedProperty({
                    id: this.propertyid,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                }));
            }
            await Promise.all(requests);
            this.unsubscribeRealtime = realtime_service.realtimeService.subscribe(this.property_id, async (msg) => {
                await this.handleSocketMessage(msg.reason, msg.payload);
            });
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    async handleSocketMessage(reason, result) {
        const reasonHandlers = {
            EMAIL_VERIFIED: this.updateUserVerificationStatus,
        };
        const handler = reasonHandlers[reason];
        if (handler) {
            await handler.call(this, result);
        }
    }
    updateUserVerificationStatus(result) {
        const users = [...this.users];
        const idx = users.findIndex(u => u.id === result.id);
        if (idx === -1) {
            console.warn(`User ${result.id} not found`);
            return;
        }
        users[idx] = {
            ...users[idx],
            is_email_verified: true,
        };
        this.users = users;
    }
    async fetchUsers() {
        const users = await this.userService.getExposedPropertyUsers({ property_id: this.propertyid });
        this.users = [...users].sort((u1, u2) => {
            const priority = (u) => {
                const t = u.type.toString();
                if (t === this.superAdminId)
                    return 0;
                if (t === '17')
                    return 1;
                return 2;
            };
            //sort by priority
            const p1 = priority(u1), p2 = priority(u2);
            if (p1 !== p2) {
                return p1 - p2;
            }
            // //sort by user id
            // if (p1 === 1) {
            //   const id1 = u1.id.toString(),
            //     id2 = u2.id.toString(),
            //     me = this.userId.toString();
            //   if (id1 === me) return -1; // u1 is me → goes before u2
            //   if (id2 === me) return 1; // u2 is me → u1 goes after
            // }
            // 3) sort by username
            return u1.username.localeCompare(u2.username);
        });
    }
    async fetchUserTypes() {
        const res = await Promise.all([this.bookingService.getSetupEntriesByTableName('_USER_TYPE'), this.bookingService.getLov()]);
        const allowedUsers = res[1]?.My_Result?.allowed_user_types;
        for (const e of res[0]) {
            const value = utils.getEntryValue({ entry: e, language: this.language });
            if (allowedUsers.find(f => f.code === e.CODE_NAME)) {
                this.allowedUsersTypes.push({ code: e.CODE_NAME, value });
            }
            this.userTypes.set(e.CODE_NAME.toString(), value);
        }
    }
    disconnectedCallback() {
        this.unsubscribeRealtime?.();
        this.unsubscribeRealtime = null;
    }
    render() {
        if (this.isLoading) {
            return (index.h(index.Host, null, index.h("ir-toast", null), index.h("ir-interceptor", null), index.h("ir-loading-screen", null)));
        }
        return (index.h(index.Host, null, index.h("ir-toast", null), index.h("ir-interceptor", { suppressToastEndpoints: ['/Change_User_Pwd', '/Handle_Exposed_User'] }), index.h("section", { class: "p-2 d-flex flex-column", style: { gap: '1rem' } }, index.h("h3", { class: "page-title" }, locales_store.locales.entries.Lcz_ExtranetUsers), index.h("div", { class: "", style: { gap: '1rem' } }, index.h("ir-user-management-table", { property_id: this.property_id, baseUserTypeCode: this.baseUserTypeCode, allowedUsersTypes: this.allowedUsersTypes, userTypeCode: this.userTypeCode, haveAdminPrivileges: [this.superAdminId, '17'].includes(this.userTypeCode?.toString()), userTypes: this.userTypes, isSuperAdmin: this.userTypeCode?.toString() === this.superAdminId, users: this.users })))));
    }
    static get watchers() { return {
        "ticket": [{
                "ticketChanged": 0
            }]
    }; }
};
IrUserManagement.style = irUserManagementCss();

exports.ir_agents = IrAgents;
exports.ir_arrivals = IrArrivals;
exports.ir_booking_email_logs = IrBookingEmailLogs;
exports.ir_booking_listing = IrBookingListing;
exports.ir_channel = IrChannel;
exports.ir_city_ledger = IrCityLedger;
exports.ir_daily_revenue = IrDailyRevenue;
exports.ir_departures = IrDepartures;
exports.ir_ghs_onboarding = IrGhsOnboarding;
exports.ir_hk_tasks = IrHkTasks;
exports.ir_housekeeping = IrHousekeeping;
exports.ir_meal_report = IrMealReport;
exports.ir_monthly_bookings_report = IrMonthlyBookingsReport;
exports.ir_payment_option = IrPaymentOption;
exports.ir_sales_by_channel = IrSalesByChannel;
exports.ir_sales_by_country = IrSalesByCountry;
exports.ir_tax_service_categories = IrTaxServiceCategories;
exports.ir_user_management = IrUserManagement;
