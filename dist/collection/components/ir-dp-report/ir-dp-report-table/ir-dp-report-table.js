import { h } from "@stencil/core";
import { createColumnHelper, getCoreRowModel } from "@tanstack/table-core";
import { flexRender, useTable } from "../../../utils/useTable";
import dp_report, { setDpReportTablePage, setDpReportTablePageSize } from "../../../stores/dp_report.store";
import { formatAmount } from "../../../utils/utils";
import { t } from "../../../services/locale/t";
import { formatCount } from "../../../utils/number";
export class IrDpReportTable {
    pageSizes = [20, 50, 100];
    columnHelper = createColumnHelper();
    columns = [
        this.columnHelper.display({
            id: 'booking_nbr',
            header: t('Lcz_BookingNumberColumn', { fallback: 'Booking #' }),
            cell: info => {
                const row = info.row.original;
                return h("ir-booking-number-cell", { class: "dp-report__booking-nbr-cell", bookingNumber: row.booking_nbr, origin: row.raw.origin });
            },
        }),
        this.columnHelper.display({
            id: 'booked_on',
            header: t('Lcz_BookedOn', { fallback: 'Booked on' }),
            cell: info => h("ir-booked-on-cell", { showTime: false, bookedOn: info.row.original.raw.booked_on }),
        }),
        this.columnHelper.display({
            id: 'booked_by',
            header: t('Lcz_BookedBy', { fallback: 'Booked by' }),
            cell: info => {
                const row = info.row.original;
                return h("ir-booked-by-cell", { guest: row.raw.guest, identifier: row.booking_nbr, clickableGuest: true });
            },
        }),
        this.columnHelper.display({
            id: 'dates',
            header: t('Lcz_Dates', { fallback: 'Dates' }),
            cell: info => h("ir-dates-cell", { display: "inline", showArrow: true, checkIn: info.row.original.raw.from_date, checkOut: info.row.original.raw.to_date }),
        }),
        this.columnHelper.display({
            id: 'units',
            header: t('Lcz_UnitsBooked', { fallback: 'Units booked' }),
            cell: info => h("span", null, formatCount(info.row.original.raw.rooms_length)),
        }),
        this.columnHelper.accessor('profit', {
            id: 'effect',
            header: t('Lcz_Effect', { fallback: 'Effect' }),
            cell: info => this.renderEffect(info.row.original),
        }),
    ];
    renderEffect(row) {
        // Negative values (price reductions) are never shown — the effect column only reports gains.
        const profit = row.profit > 0 ? row.profit : 0;
        if (profit === 0) {
            return h("span", { class: "dp-report-table__effect" }, formatAmount(row.currencySymbol, 0));
        }
        return (h("span", { class: { 'dp-report-table__effect': true, 'dp-report-table__effect--gain': true } }, h("wa-icon", { name: "arrow-trend-up" }), '+', formatAmount(row.currencySymbol, profit)));
    }
    handlePageChange = (event) => {
        event.stopImmediatePropagation();
        event.stopPropagation();
        setDpReportTablePage(event.detail.currentPage);
    };
    handlePageSizeChange = (event) => {
        event.stopImmediatePropagation();
        event.stopPropagation();
        if (event.detail.pageSize) {
            setDpReportTablePageSize(event.detail.pageSize);
        }
    };
    render() {
        const { currentPage, pageSize } = dp_report.tablePagination;
        const total = dp_report.rows.length;
        const pageCount = Math.max(Math.ceil(total / pageSize), 1);
        const startIndex = (currentPage - 1) * pageSize;
        const pageRows = dp_report.rows.slice(startIndex, startIndex + pageSize);
        const table = useTable({
            data: pageRows,
            columns: this.columns,
            getCoreRowModel: getCoreRowModel(),
        });
        return (h("div", { key: '052e4f6863c95317f03969539120cddfe99802c8', class: "dp-report-table" }, h("div", { key: 'dbc99c9ababe1ffe89f7ea3b9ee3894d849c2e3a', class: "table--container" }, h("table", { key: '6ee9185fa678912f2a37cd60a83d7abe9120dee0', class: "table data-table" }, h("thead", { key: 'bc492f71c6be50541481461b60022ea159f3f5bd' }, table.getHeaderGroups().map(headerGroup => (h("tr", { key: headerGroup.id }, headerGroup.headers.map(header => (h("th", { key: header.id, class: { 'cell--align-end': header.column.id === 'effect', 'cell--align-center': header.column.id === 'units' } }, flexRender(header.column.columnDef.header, header.getContext())))))))), h("tbody", { key: '2ceabf6e530305bbb9a9285ab8314147eada9389' }, dp_report.isLoading ? (h("tr", null, h("td", { colSpan: this.columns.length, class: "empty-row" }, h("ir-spinner", null)))) : table.getRowModel().rows.length === 0 ? (h("tr", null, h("td", { colSpan: this.columns.length, class: "empty-row" }, h("ir-empty-state", { message: t('Lcz_NoDynamicPricingData', { fallback: 'No dynamic pricing data for this date range.' }) })))) : (table.getRowModel().rows.map(row => (h("tr", { key: row.id, class: "ir-table-row" }, row.getVisibleCells().map(cell => (h("td", { key: cell.id, class: { 'cell--align-end': cell.column.id === 'effect', 'cell--align-center': cell.column.id === 'units' } }, flexRender(cell.column.columnDef.cell, cell.getContext()))))))))))), h("ir-pagination", { key: 'a406da7fdfadee8b26031d2ff17c5356370a525a', class: "dp-report-table__pagination", total: total, pages: pageCount, pageSize: pageSize, currentPage: currentPage, allowPageSizeChange: true, pageSizes: this.pageSizes, showing: { from: total ? startIndex + 1 : 0, to: Math.min(startIndex + pageSize, total) }, recordLabel: t('Lcz_Bookings', { fallback: 'bookings' }), onPageChange: this.handlePageChange, onPageSizeChange: this.handlePageSizeChange })));
    }
    static get is() { return "ir-dp-report-table"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-dp-report-table.css", "../../../common/table.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-dp-report-table.css", "../../../common/table.css"]
        };
    }
}
