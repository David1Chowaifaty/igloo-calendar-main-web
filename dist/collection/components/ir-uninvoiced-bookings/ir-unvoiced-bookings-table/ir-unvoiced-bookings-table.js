import { h } from "@stencil/core";
import { createColumnHelper, getCoreRowModel } from "@tanstack/table-core";
import { flexRender, useTable } from "../../../utils/useTable";
import uninvoiced_bookings, { setUninvoicedBookingsTablePage, setUninvoicedBookingsTablePageSize } from "../../../stores/uninvoiced_bookings.store";
import { formatAmount, formatCount } from "../../../utils/number";
import { t } from "../../../services/locale/t";
export class IrUnvoicedBookingsTable {
    uninvoicedBookingsPageChange;
    pageSizes = [20, 50, 100];
    columnHelper = createColumnHelper();
    columns = [
        this.columnHelper.display({
            id: 'booking',
            header: t('Lcz_BookingHash', { fallback: 'Booking#' }),
            cell: info => {
                const booking = info.row.original.raw;
                return (h("ir-booking-number-cell", { class: "uninvoiced-bookings-table__booking-nbr-cell", origin: booking.origin, source: booking.source, channelBookingNumber: booking.channel_booking_nbr, bookingNumber: booking.booking_nbr }));
            },
        }),
        this.columnHelper.display({
            id: 'booked_by',
            header: t('Lcz_BookedBy', { fallback: 'Booked by' }),
            cell: info => {
                const row = info.row.original;
                const booking = row.raw;
                return (h("ir-booked-by-cell", { class: "text-center", clickableGuest: true, showRepeatGuestBadge: false, guest: booking.guest, identifier: booking.booking_nbr, showContactIcons: false, showPersons: true, showPrivateNoteDot: false, totalPersons: row.totalGuests?.toString(), showPromoIcon: false, promoKey: booking.promo_key, showLoyaltyIcon: false }));
            },
        }),
        this.columnHelper.display({
            id: 'dates',
            header: t('Lcz_EndDate', { fallback: 'End date' }),
            cell: info => {
                const booking = info.row.original.raw;
                return h("ir-dates-cell", { class: "uninvoiced-bookings__dates-cell", checkIn: booking.from_date, checkOut: booking.to_date });
            },
        }),
        this.columnHelper.display({
            id: 'services',
            header: t('Lcz_Services', { fallback: 'Services' }),
            cell: info => {
                const booking = info.row.original.raw;
                const invoicableUnits = booking.invoice_info?.invoiceable_items?.filter(item => item.is_invoiceable && item.type === 'BSA')?.length;
                const invoicableServices = booking.invoice_info?.invoiceable_items?.filter(item => item.is_invoiceable && ['BSP', 'BSE'].includes(item.type))?.length;
                const invoicableCancellation = booking.invoice_info?.invoiceable_items?.filter(item => item.is_invoiceable && item.type === 'PAYMENT')?.length;
                // const roomsLength = row.raw.rooms?.length;
                return (h("div", null, !!invoicableUnits && h("p", { class: "uninvoiced-bookings__services" }, t('Lcz_UnitCount', { fallback: '%1 unit(s)', params: [formatCount(invoicableUnits)] })), !!invoicableServices && (h("p", { class: "uninvoiced-bookings__services" }, t('Lcz_ExtraServiceCount', { fallback: '%1 extra service(s)', params: [formatCount(invoicableServices)] }))), !!invoicableCancellation && h("p", { class: "uninvoiced-bookings__services" }, t('Lcz_CancellationFee', { fallback: 'Cancellation fee' }))));
            },
        }),
        this.columnHelper.display({
            id: 'status',
            header: t('Lcz_Status', { fallback: 'Status' }),
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
            header: t('Lcz_UninvoicedGuestAmount', { fallback: 'Uninvoiced guest amount' }),
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
        return (h("div", { key: 'c95ced56e41c3d1db85f2fde17308c7ac42400b3', class: "uninvoiced-bookings-table" }, h("div", { key: 'f57b58f664d5685e58954d910e590e9949a86591', class: "table--container" }, h("table", { key: 'c8898c153fa1e1998563b1bda195a17ec019c15b', class: "table data-table" }, h("thead", { key: '78768d6049960032b372e25c21e6950866f30e19' }, table.getHeaderGroups().map(headerGroup => (h("tr", { key: headerGroup.id }, headerGroup.headers.map(header => (h("th", { key: header.id, class: {
                'cell--align-end': amountColumnIds.includes(header.column.id),
                'cell--booking': header.column.id === 'booking',
                'cell--booked-by': header.column.id === 'booked_by',
                'cell--amount': amountColumnIds.includes(header.column.id),
                'cell--align-center': ['status', 'units_booked'].includes(header.column.id),
            } }, flexRender(header.column.columnDef.header, header.getContext())))))))), h("tbody", { key: '3fe0f4070a736318765bad41a7a376b5ad17f3e6' }, uninvoiced_bookings.isLoading ? (h("tr", null, h("td", { colSpan: this.columns.length, class: "empty-row" }, h("ir-spinner", null)))) : table.getRowModel().rows.length === 0 ? (h("tr", null, h("td", { colSpan: this.columns.length, class: "empty-row" }, h("ir-empty-state", { message: t('Lcz_NoUninvoicedGuestPaidBookings', { fallback: 'No uninvoiced guest-paid bookings for this date range.' }) })))) : (table.getRowModel().rows.map(row => (h("tr", { key: row.id, class: "ir-table-row" }, row.getVisibleCells().map(cell => (h("td", { key: cell.id, class: {
                'cell--align-end': amountColumnIds.includes(cell.column.id),
                'cell--align-center': ['status', 'units_booked'].includes(cell.column.id),
                'cell--booking': cell.column.id === 'booking',
                'cell--booked-by': cell.column.id === 'booked_by',
                'cell--amount': amountColumnIds.includes(cell.column.id),
            } }, flexRender(cell.column.columnDef.cell, cell.getContext()))))))))))), h("ir-pagination", { key: 'abbe312f1d0a24b31fb19878bd29d04e44e50db1', class: "uninvoiced-bookings-table__pagination", total: total, pages: pageCount, pageSize: pageSize, currentPage: currentPage, allowPageSizeChange: true, pageSizes: this.pageSizes, showing: { from: total ? startIndex + 1 : 0, to: startIndex + pageRows.length }, recordLabel: t('Lcz_Bookings', { fallback: 'bookings' }), onPageChange: this.handlePageChange, onPageSizeChange: this.handlePageSizeChange })));
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
