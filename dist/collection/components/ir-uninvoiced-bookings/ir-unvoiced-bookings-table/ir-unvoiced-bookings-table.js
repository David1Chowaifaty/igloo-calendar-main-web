import { h } from "@stencil/core";
import { createColumnHelper, getCoreRowModel } from "@tanstack/table-core";
import { flexRender, useTable } from "../../../utils/useTable";
import uninvoiced_bookings, { setUninvoicedBookingsTablePage, setUninvoicedBookingsTablePageSize } from "../../../stores/uninvoiced_bookings.store";
import { formatAmount } from "../../../utils/utils";
export class IrUnvoicedBookingsTable {
    uninvoicedBookingsPageChange;
    pageSizes = [20, 50, 100];
    columnHelper = createColumnHelper();
    columns = [
        this.columnHelper.display({
            id: 'booking',
            header: 'Booking#',
            cell: info => {
                const booking = info.row.original.raw;
                return (h("ir-booking-number-cell", { class: "uninvoiced-bookings-table__booking-nbr-cell", origin: booking.origin, source: booking.source, channelBookingNumber: booking.channel_booking_nbr, bookingNumber: booking.booking_nbr }));
            },
        }),
        this.columnHelper.display({
            id: 'booked_by',
            header: 'Booked by',
            cell: info => {
                const row = info.row.original;
                const booking = row.raw;
                return (h("ir-booked-by-cell", { class: "text-center", clickableGuest: true, showRepeatGuestBadge: false, guest: booking.guest, identifier: booking.booking_nbr, showContactIcons: false, showPersons: true, showPrivateNoteDot: false, totalPersons: row.totalGuests?.toString(), showPromoIcon: false, promoKey: booking.promo_key, showLoyaltyIcon: false }));
            },
        }),
        this.columnHelper.display({
            id: 'dates',
            header: 'End date',
            cell: info => {
                const booking = info.row.original.raw;
                return h("ir-dates-cell", { class: "uninvoiced-bookings__dates-cell", checkIn: booking.from_date, checkOut: booking.to_date });
            },
        }),
        this.columnHelper.display({
            id: 'services',
            header: 'Services',
            cell: info => {
                const booking = info.row.original.raw;
                const invoicableUnits = booking.invoice_info?.invoiceable_items?.filter(item => item.is_invoiceable && item.type === 'BSA')?.length;
                const invoicableServices = booking.invoice_info?.invoiceable_items?.filter(item => item.is_invoiceable && ['BSP', 'BSE'].includes(item.type))?.length;
                const invoicableCancellation = booking.invoice_info?.invoiceable_items?.filter(item => item.is_invoiceable && item.type === 'PAYMENT')?.length;
                // const roomsLength = row.raw.rooms?.length;
                return (h("div", null, !!invoicableUnits && (h("p", { class: "uninvoiced-bookings__services" }, invoicableUnits, " unit", invoicableUnits > 1 ? 's' : '')), !!invoicableServices && (h("p", { class: "uninvoiced-bookings__services" }, invoicableServices, " extra service", invoicableServices > 1 ? 's' : '')), !!invoicableCancellation && h("p", { class: "uninvoiced-bookings__services" }, "Cancellation fee")));
            },
        }),
        this.columnHelper.display({
            id: 'status',
            header: 'Status',
            cell: info => {
                const booking = info.row.original.raw;
                const lastManipulation = booking.ota_manipulations ? booking.ota_manipulations[booking.ota_manipulations.length - 1] : null;
                return (h("ir-status-activity-cell", { lastManipulation: lastManipulation, showManipulationBadge: !!lastManipulation, showModifiedBadge: !lastManipulation && booking.events?.length > 0 && booking.events[0].type.toLowerCase() === 'modified', status: booking.status, isRequestToCancel: booking.is_requested_to_cancel, bookingNumber: booking.booking_nbr }));
            },
        }),
        // this.columnHelper.accessor('totalGuestAmount', {
        //   id: 'totalGuestAmount',
        //   header: 'Total guest sum',
        //   cell: info => formatAmount(info.row.original.currencySymbol, info.getValue()),
        // }),
        this.columnHelper.accessor('uninvoicedGuestAmount', {
            id: 'uninvoicedGuestAmount',
            header: 'Uninvoiced guest amount',
            cell: info => (h("span", null, h("b", null, formatAmount(info.row.original.currencySymbol, info.getValue()), " / "), formatAmount(info.row.original.currencySymbol, info.getValue()))),
        }),
    ];
    handlePageChange = (event) => {
        event.stopImmediatePropagation();
        event.stopPropagation();
        setUninvoicedBookingsTablePage(event.detail.currentPage);
        this.uninvoicedBookingsPageChange.emit();
    };
    handlePageSizeChange = (event) => {
        event.stopImmediatePropagation();
        event.stopPropagation();
        if (event.detail.pageSize) {
            setUninvoicedBookingsTablePageSize(event.detail.pageSize);
            this.uninvoicedBookingsPageChange.emit();
        }
    };
    render() {
        const { currentPage, pageSize } = uninvoiced_bookings.tablePagination;
        const total = uninvoiced_bookings.totalCount;
        const pageCount = Math.max(Math.ceil(total / pageSize), 1);
        const startIndex = (currentPage - 1) * pageSize;
        const pageRows = uninvoiced_bookings.rows;
        const table = useTable({
            data: pageRows,
            columns: this.columns,
            getCoreRowModel: getCoreRowModel(),
        });
        const amountColumnIds = ['totalGuestAmount', 'uninvoicedGuestAmount'];
        return (h("div", { key: '02f2c98779000cd774c482ded3fdeba92a010b62', class: "uninvoiced-bookings-table" }, h("div", { key: 'f816b3c8339a4b9e65f79caff0d96dd33f5ec74a', class: "table--container" }, h("table", { key: 'e17a1fcc87d086dd598912c4bd1cc4f004510668', class: "table data-table" }, h("thead", { key: 'f7f31dbbdb3a755fe7f878ea2169ad49e5247b0e' }, table.getHeaderGroups().map(headerGroup => (h("tr", { key: headerGroup.id }, headerGroup.headers.map(header => (h("th", { key: header.id, class: {
                'cell--align-end': amountColumnIds.includes(header.column.id),
                'cell--booking': header.column.id === 'booking',
                'cell--booked-by': header.column.id === 'booked_by',
                'cell--amount': amountColumnIds.includes(header.column.id),
                'cell--align-center': ['status', 'units_booked'].includes(header.column.id),
            } }, flexRender(header.column.columnDef.header, header.getContext())))))))), h("tbody", { key: 'f2a6e22c85776ef7d5e6a0df43158d0ead20b82e' }, uninvoiced_bookings.isLoading ? (h("tr", null, h("td", { colSpan: this.columns.length, class: "empty-row" }, h("ir-spinner", null)))) : table.getRowModel().rows.length === 0 ? (h("tr", null, h("td", { colSpan: this.columns.length, class: "empty-row" }, h("ir-empty-state", { message: "No uninvoiced guest-paid bookings for this date range." })))) : (table.getRowModel().rows.map(row => (h("tr", { key: row.id, class: "ir-table-row" }, row.getVisibleCells().map(cell => (h("td", { key: cell.id, class: {
                'cell--align-end': amountColumnIds.includes(cell.column.id),
                'cell--align-center': ['status', 'units_booked'].includes(cell.column.id),
                'cell--booking': cell.column.id === 'booking',
                'cell--booked-by': cell.column.id === 'booked_by',
                'cell--amount': amountColumnIds.includes(cell.column.id),
            } }, flexRender(cell.column.columnDef.cell, cell.getContext()))))))))))), h("ir-pagination", { key: 'b2c37ee8c1a65b22b068ab9a5af601c76161bd50', class: "uninvoiced-bookings-table__pagination", total: total, pages: pageCount, pageSize: pageSize, currentPage: currentPage, allowPageSizeChange: true, pageSizes: this.pageSizes, showing: { from: total ? startIndex + 1 : 0, to: startIndex + pageRows.length }, recordLabel: "bookings", onPageChange: this.handlePageChange, onPageSizeChange: this.handlePageSizeChange })));
    }
    static get is() { return "ir-unvoiced-bookings-table"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-unvoiced-bookings-table.css", "../../../common/table.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-unvoiced-bookings-table.css", "../../../common/table.css"]
        };
    }
    static get events() {
        return [{
                "method": "uninvoicedBookingsPageChange",
                "name": "uninvoicedBookingsPageChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
