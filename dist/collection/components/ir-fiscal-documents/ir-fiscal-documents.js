import { h } from "@stencil/core";
import Token from "../../models/Token";
import moment from "moment";
import { PropertyService } from "../../services/property/index";
import { RoomService } from "../../services/room.service";
import { BookingService } from "../../services/booking-service/booking.service";
import { FdTypes } from "../../types/enums";
/** Selectable page sizes for the fiscal-documents list. */
const PAGE_SIZES = [20, 50, 100];
export class IrFiscalDocuments {
    ticket;
    baseurl;
    language = 'en';
    propertyid;
    /** Property username (aname). When provided without `propertyid`, the id is resolved from it. */
    p;
    filters = {
        fromDate: undefined,
        toDate: undefined,
        docNumber: '',
        taxableOnly: false,
        type: 'all',
        proformaOnly: false,
        folioType: 'all',
        agentId: null,
        guestId: null,
        searchBy: 'doc_nbr',
    };
    isPageLoading = true;
    property_id;
    /** `_FD_TYPE` setup entries — used to display the document type in the table. */
    fdTypes = [];
    rows = [];
    isLoading = false;
    hasFetched = false;
    // Server-side pagination state.
    pageSize = PAGE_SIZES[0];
    currentPage = 1;
    totalRows = 0;
    /** Booking number whose details drawer is currently open. */
    selectedBookingNumber = null;
    tokenService = new Token();
    propertyService = new PropertyService();
    roomService = new RoomService();
    bookingService = new BookingService();
    componentWillLoad() {
        if (this.baseurl) {
            this.tokenService.setBaseUrl(this.baseurl);
        }
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            this.init();
        }
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue === oldValue)
            return;
        if (this.baseurl) {
            this.tokenService.setBaseUrl(this.baseurl);
        }
        this.tokenService.setToken(this.ticket);
        this.init();
    }
    /**
     * Page bootstrap: resolves the property id (from `propertyid`, or from the
     * aname `p` when only that is provided), then fetches the remaining setup in
     * parallel — the `_FD_TYPE` entries and the exposed property.
     */
    async init() {
        this.isPageLoading = true;
        try {
            let propertyId = this.propertyid;
            if (!propertyId && !this.p) {
                throw new Error('Property ID or username (p) is required');
            }
            // The aname → id lookup must resolve first because every other request
            // needs a numeric property id. It also loads the property into the store.
            if (!propertyId) {
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                });
                propertyId = propertyData.My_Result.id;
            }
            this.property_id = propertyId;
            // Remaining setup — all in parallel. The property is only fetched here
            // when we didn't already load it through the aname lookup above.
            const requests = [this.bookingService.getSetupEntriesByTableName('_FD_TYPE'), this.roomService.fetchLanguage(this.language)];
            if (this.propertyid) {
                requests.push(this.roomService.getExposedProperty({
                    id: propertyId,
                    language: this.language,
                    is_backend: true,
                }));
            }
            const [fdTypes] = await Promise.all(requests);
            this.fdTypes = fdTypes ?? [];
        }
        catch (error) {
            console.error('[ir-fiscal-documents] init error:', error);
        }
        finally {
            this.isPageLoading = false;
        }
    }
    targetTypeFromFolio(folioType) {
        if (folioType === 'agent')
            return 'AGENT';
        if (folioType === 'guest')
            return 'GUEST';
        return null;
    }
    resolveFdTypeCode(filters) {
        if (filters.proformaOnly)
            return FdTypes.Proforma;
        if (filters.type && filters.type !== 'all')
            return filters.type;
        return null;
    }
    async fetchFiscalDocuments(filters) {
        if (!filters.fromDate && !filters.toDate)
            return;
        this.isLoading = true;
        const effectiveFrom = filters.fromDate ? filters.fromDate : moment(filters.toDate).subtract(5, 'years').format('YYYY-MM-DD');
        const effectiveTo = filters.toDate ? filters.toDate : moment(filters.fromDate).add(5, 'years').format('YYYY-MM-DD');
        try {
            const { rows, total } = await this.propertyService.getUnifiedFolio({
                property_id: this.property_id,
                from_date: this.filters?.searchBy === 'booking_nbr' ? null : effectiveFrom,
                to_date: this.filters?.searchBy === 'booking_nbr' ? null : effectiveTo,
                target_type: this.targetTypeFromFolio(filters.folioType),
                doc_type: null,
                fd_type_code: this.resolveFdTypeCode(filters),
                doc_number: this.filters?.searchBy === 'doc_nbr' ? filters.docNumber || null : null,
                agent_id: this.filters?.agentId?.toString(),
                guest_id: this.filters?.guestId?.toString(),
                booking_number: this.filters?.searchBy === 'booking_nbr' ? this.filters.docNumber : null,
                page_index: this.currentPage - 1,
                page_size: this.pageSize,
                o_Total_Rows: null,
                is_export_to_excel: false,
                Link_excel: '',
            });
            this.rows = rows;
            this.totalRows = total;
        }
        catch (err) {
            console.error('[ir-fiscal-documents] getUnifiedFolio error:', err);
            this.rows = [];
            this.totalRows = 0;
        }
        finally {
            this.isLoading = false;
            this.hasFetched = true;
        }
    }
    handleApplyFilters(filters) {
        this.filters = filters;
        this.currentPage = 1;
        this.fetchFiscalDocuments(filters);
    }
    handlePageChange(page) {
        if (page === this.currentPage)
            return;
        this.currentPage = page;
        this.fetchFiscalDocuments(this.filters);
    }
    handlePageSizeChange(size) {
        if (size === this.pageSize)
            return;
        this.pageSize = size;
        this.currentPage = 1;
        this.fetchFiscalDocuments(this.filters);
    }
    render() {
        if (this.isPageLoading) {
            return h("ir-loading-screen", null);
        }
        return (h("ir-page", { label: "Fiscal Documents" }, h("ir-fiscal-documents-filters", { propertyId: this.property_id, loading: this.isLoading, filters: this.filters, onFilterChanged: e => (this.filters = { ...this.filters, ...e.detail }), onApplyFilters: e => this.handleApplyFilters(e.detail) }), h("ir-fiscal-documents-table", { rows: this.rows, taxableOnly: this.filters?.taxableOnly, isLoading: this.isLoading, hasFetched: this.hasFetched, hasDates: !!(this.filters.fromDate && this.filters.toDate), fromDate: this.filters.fromDate, toDate: this.filters.toDate, folioType: this.filters.folioType, agentId: this.filters.agentId, guestId: this.filters.guestId, ticket: this.ticket, propertyId: this.property_id, language: this.language, fdTypes: this.fdTypes, currentPage: this.currentPage, pageSize: this.pageSize, totalRecords: this.totalRows, pageSizes: PAGE_SIZES, onFetchRequested: () => this.fetchFiscalDocuments(this.filters), onRequestPageChange: (e) => this.handlePageChange(e.detail.currentPage), onRequestPageSizeChange: (e) => this.handlePageSizeChange(e.detail.pageSize), onOpenBookingDetails: (e) => (this.selectedBookingNumber = e.detail) }), h("ir-booking-details-drawer", { open: !!this.selectedBookingNumber, propertyId: this.property_id, bookingNumber: this.selectedBookingNumber, ticket: this.ticket, language: this.language, onBookingDetailsDrawerClosed: () => (this.selectedBookingNumber = null) }), h("ir-fiscal-document-preview", { mode: "all", ticket: this.ticket, propertyId: this.property_id, onDocumentConverted: () => this.fetchFiscalDocuments(this.filters) })));
    }
    static get is() { return "ir-fiscal-documents"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-fiscal-documents.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-fiscal-documents.css"]
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
            "baseurl": {
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
                "attribute": "baseurl"
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
                    "text": "Property username (aname). When provided without `propertyid`, the id is resolved from it."
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
            "filters": {},
            "isPageLoading": {},
            "property_id": {},
            "fdTypes": {},
            "rows": {},
            "isLoading": {},
            "hasFetched": {},
            "pageSize": {},
            "currentPage": {},
            "totalRows": {},
            "selectedBookingNumber": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "ticket",
                "methodName": "handleTicketChange"
            }];
    }
}
