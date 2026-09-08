import ApiClient from "../../models/ApiClient";
import { departuresStore, initializeDeparturesStore, onDeparturesStoreChange, setDeparturesPage, setDeparturesPageSize, setDepartureTotal } from "../../stores/departures.store";
import { Host, h } from "@stencil/core";
import { RoomService } from "../../services/room.service";
import { BookingService } from "../../services/booking-service/booking.service";
import { SetupService } from "../../services/setup/index";
import calendar_data from "../../stores/calendar-data";
import { LocaleController } from "../../services/locale/locale.controller";
import { LanguageSync } from "../../services/locale/language-sync";
import { SCREEN_TABLES } from "../../services/locale/screen-tables";
import { isEarlyCheckout } from "../../utils/booking";
export class IrDepartures {
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
    /** Room identifier whose check-out dialog should auto-open inside the booking-details drawer (early check-out redirect). */
    checkoutRoomIdentifier = null;
    apiClientService = new ApiClient();
    roomService = new RoomService();
    bookingService = new BookingService();
    setupService = new SetupService();
    paymentFolioRef;
    /** Re-runs init when the language changes so server-localized data follows. */
    languageSync = new LanguageSync(SCREEN_TABLES.departures, () => this.init());
    componentWillLoad() {
        if (this.ticket) {
            this.apiClientService.setApiClient(this.ticket);
            this.init();
        }
        onDeparturesStoreChange('today', _ => {
            this.getBookings();
        });
    }
    componentDidLoad() {
        this.languageSync.connect();
    }
    disconnectedCallback() {
        this.languageSync.disconnect();
    }
    languageChanged(next, previous) {
        this.languageSync.propChanged(next, previous);
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.apiClientService.setApiClient(this.ticket);
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
        this.booking = departuresStore.bookings.find(b => b.booking_nbr === booking_nbr);
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
                    language: LocaleController.language,
                    is_backend: true,
                });
            }
            const [_, __, paymentEntries] = await Promise.all([
                calendar_data?.property ? Promise.resolve(null) : this.roomService.getExposedProperty({ id: this.propertyid || 0, language: LocaleController.language, aname: this.p }),
                LocaleController.load({ language: this.language, tables: SCREEN_TABLES.departures }),
                this.setupService.getPaymentEntries(),
                this.getBookings(),
            ]);
            this.paymentEntries = paymentEntries;
            // Fetch bookings only after the property/calendar data is loaded — the departures
            // pipeline (canCheckout) reads the calendar data store, which is empty until the
            // getExposedProperty calls above resolve.
            await this.getBookings();
        }
        catch (error) {
        }
        finally {
            this.isPageLoading = false;
        }
    }
    async getBookings() {
        const { bookings, total_count } = await this.bookingService.getRoomsToCheckout({
            property_id: calendar_data.property?.id?.toString() || this.propertyid?.toString(),
            check_out_date: departuresStore.today,
            page_index: departuresStore.pagination.currentPage,
            page_size: departuresStore.pagination.pageSize,
        });
        setDepartureTotal(total_count ?? 0);
        initializeDeparturesStore(bookings);
    }
    handleCheckoutRoom(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const { booking, identifier } = event.detail;
        const room = booking?.rooms?.find(r => r.identifier === identifier);
        // Early check-outs carry penalty / invoicing implications — handle them inside the full
        // booking details rather than the bare inline dialog.
        if (isEarlyCheckout(room)) {
            this.checkoutRoomIdentifier = identifier;
            this.bookingNumber = Number(booking.booking_nbr);
            return;
        }
        this.checkoutState = event.detail;
    }
    async handlePaginationChange(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const nextPage = event.detail?.currentPage ?? 1;
        if (nextPage === departuresStore.pagination.currentPage) {
            return;
        }
        setDeparturesPage(nextPage);
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
        if (normalizedPageSize === departuresStore.pagination.pageSize) {
            return;
        }
        setDeparturesPageSize(normalizedPageSize);
        await this.getBookings();
    }
    handleInvoiceClose(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.invoiceState = null;
    }
    render() {
        if (this.isPageLoading) {
            return h("ir-loading-screen", null);
        }
        return (h(Host, null, h("ir-toast", null), h("ir-interceptor", { handledEndpoints: ['/Get_Rooms_To_Check_Out'] }), h("div", { class: 'ir-page__container' }, h("h3", { class: "page-title" }, "Check-outs"), h("ir-departures-table", { onCheckoutRoom: event => this.handleCheckoutRoom(event), onRequestPageChange: event => this.handlePaginationChange(event), onRequestPageSizeChange: event => this.handlePaginationPageSizeChange(event) })), h("ir-booking-details-drawer", { open: !!this.bookingNumber, propertyId: this.propertyid, bookingNumber: this.bookingNumber?.toString(), checkoutRoomIdentifier: this.checkoutRoomIdentifier, ticket: this.ticket, language: this.language, onBookingDetailsDrawerClosed: () => {
                this.bookingNumber = null;
                this.checkoutRoomIdentifier = null;
                this.getBookings();
            } }), h("ir-payment-folio", { style: { height: 'auto' }, booking: this.booking, bookingNumber: this.booking?.booking_nbr, paymentEntries: this.paymentEntries, payment: this.payment, mode: 'payment-action', ref: el => (this.paymentFolioRef = el), onCloseModal: () => {
                this.booking = null;
                this.payment = null;
            } }), h("ir-checkout-dialog", { booking: this.checkoutState?.booking, identifier: this.checkoutState?.identifier, open: this.checkoutState !== null, onCheckoutDialogClosed: event => this.handleCheckoutDialogClosed(event) }), h("ir-invoice", { onInvoiceClose: event => this.handleInvoiceClose(event), booking: this.invoiceState?.booking, roomIdentifier: this.invoiceState?.identifier, open: this.invoiceState !== null })));
    }
    static get is() { return "ir-departures"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-departures.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-departures.css"]
        };
    }
    static get properties() {
        return {
            "ticket": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "ticket"
            },
            "propertyid": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "propertyid"
            },
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "language",
                "defaultValue": "'en'"
            },
            "p": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "p"
            }
        };
    }
    static get states() {
        return {
            "bookingNumber": {},
            "booking": {},
            "paymentEntries": {},
            "isPageLoading": {},
            "payment": {},
            "checkoutState": {},
            "invoiceState": {},
            "checkoutRoomIdentifier": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "language",
                "methodName": "languageChanged"
            }, {
                "propName": "ticket",
                "methodName": "handleTicketChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "openBookingDetails",
                "method": "handleOpen",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "payBookingBalance",
                "method": "handleBookingPayment",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "resetExposedCancellationDueAmount",
                "method": "handleResetExposedCancellationDueAmount",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
